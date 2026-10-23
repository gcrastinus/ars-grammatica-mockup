/* A small Chrome DevTools driver shared by the Guided Path checks (test/guided-check.js).
   launch(root) serves the repository on a free port (or, with { base: 'https://...' }, uses a live site)
   and returns { goto, size, shot, evaluate, sleep, errors, close }. Needs Google Chrome (CHROME=/path
   overrides the macOS path) and Node 22 or later. */
'use strict';
const { spawn } = require('child_process'); const http=require('http'), fs=require('fs'), path=require('path'), os=require('os');
const TYPES={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
exports.launch = async function(root, opts){
  opts=opts||{};
  let base=opts.base;
  let srv=null;
  if(!base){
    srv=await new Promise(res=>{const s=http.createServer((req,rsp)=>{const p=path.join(root,decodeURIComponent(req.url.split('?')[0]));
      if(!p.startsWith(root)||!fs.existsSync(p)||fs.statSync(p).isDirectory()){rsp.writeHead(404);rsp.end();return;}
      rsp.writeHead(200,{'Content-Type':TYPES[path.extname(p)]||'application/octet-stream'});fs.createReadStream(p).pipe(rsp);});
      s.listen(0,'127.0.0.1',()=>res(s));});
    base='http://127.0.0.1:'+srv.address().port;
  }
  const prof=fs.mkdtempSync(path.join(os.tmpdir(),'ag-chrome-'));
  const chrome=spawn(process.env.CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=0','--user-data-dir='+prof,'about:blank'],{stdio:['ignore','ignore','pipe']});
  let wsUrl='';
  await new Promise((res,rej)=>{chrome.stderr.on('data',d=>{const m=String(d).match(/ws:\/\/[^\s]+/);if(m&&!wsUrl){wsUrl=m[0];res();}});setTimeout(()=>rej(new Error('no chrome')),15000);});
  const ver=await (await fetch(wsUrl.replace(/^ws/,'http').replace(/\/devtools\/browser\/.*/,'/json/new?about:blank'),{method:'PUT'})).json();
  const ws=new WebSocket(ver.webSocketDebuggerUrl); await new Promise(r=>ws.addEventListener('open',r));
  let seq=0; const pending={}; const errors=[];
  ws.addEventListener('message',ev=>{const m=JSON.parse(ev.data);
    if(m.id&&pending[m.id]){pending[m.id](m);delete pending[m.id];}
    if(m.method==='Runtime.exceptionThrown')errors.push('exception: '+(m.params.exceptionDetails.exception&&m.params.exceptionDetails.exception.description||m.params.exceptionDetails.text));
    if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')errors.push('console: '+m.params.args.map(a=>a.value||a.description).join(' '));
    if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')errors.push('log: '+m.params.entry.text+' '+(m.params.entry.url||''));});
  const send=(method,params)=>new Promise(r=>{const id=++seq;pending[id]=r;ws.send(JSON.stringify({id,method,params:params||{}}));});
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const evaluate=async expr=>{const r=await send('Runtime.evaluate',{expression:expr,awaitPromise:true,returnByValue:true});
    if(r.result&&r.result.exceptionDetails)throw new Error(r.result.exceptionDetails.exception?r.result.exceptionDetails.exception.description:r.result.exceptionDetails.text);
    return r.result&&r.result.result?r.result.result.value:undefined;};
  await send('Runtime.enable');await send('Log.enable');await send('Page.enable');
  await send('Page.addScriptToEvaluateOnNewDocument',{source:'window.alert=m=>console.error("alert: "+m);'});
  return {base,send,evaluate,sleep,errors,
    async goto(p){await send('Page.navigate',{url:base+'/'+p});await sleep(1500);},
    async size(w,h){await send('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:1,mobile:w<500});},
    async shot(file,full){const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:!!full});fs.writeFileSync(file,Buffer.from(r.result.data,'base64'));},
    close(){try{ws.close();chrome.kill();if(srv)srv.close();fs.rmSync(prof,{recursive:true,force:true});}catch(e){}}};
};
