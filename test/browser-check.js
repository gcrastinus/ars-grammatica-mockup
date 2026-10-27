#!/usr/bin/env node
/* Opens index.html in headless Chrome and checks the particular-languages layer as a student sees it:
   every language screen, every tile and "Exercise →" button on it, every panel of every language deck
   (with its question point), and the first items of every language exercise, A, B, and C. With --maker
   it also builds a Quiz Maker paper from one main set and one set per language (see test/maker-check.js).
     node test/browser-check.js [--only=lang.iii-decl] [--maker]
   Needs Google Chrome (macOS path below, or CHROME=/path) and Node 22 or later (global WebSocket).
   It serves the repository on a free local port. Exit code 1 on any page error or missing element. */
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const ONLY = (process.argv.find(a => a.indexOf('--only=') === 0) || '').slice(7);
const MAKER = process.argv.includes('--maker');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };

function serve(){
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { rsp.writeHead(404); rsp.end(); return; }
      rsp.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' });
      fs.createReadStream(p).pipe(rsp);
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const srv = await serve();
  const port = srv.address().port;
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'ag-chrome-'));
  const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0',
    '--user-data-dir=' + prof, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  let wsUrl = '';
  await new Promise((res, rej) => {
    chrome.stderr.on('data', d => { const m = String(d).match(/ws:\/\/[^\s]+/); if (m && !wsUrl) { wsUrl = m[0]; res(); } });
    setTimeout(() => rej(new Error('Chrome did not start')), 15000);
  });
  const ver = await (await fetch(wsUrl.replace(/^ws/, 'http').replace(/\/devtools\/browser\/.*/, '/json/new?about:blank'), { method: 'PUT' })).json();
  const ws = new WebSocket(ver.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let seq = 0; const pending = {}; const errors = [];
  ws.addEventListener('message', ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending[m.id]) { pending[m.id](m); delete pending[m.id]; }
    if (m.method === 'Runtime.exceptionThrown') errors.push('exception: ' + (m.params.exceptionDetails.exception && m.params.exceptionDetails.exception.description || m.params.exceptionDetails.text));
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push('console: ' + m.params.args.map(a => a.value || a.description).join(' '));
    if (m.method === 'Log.entryAdded' && m.params.entry.level === 'error') errors.push('log: ' + m.params.entry.text + ' ' + (m.params.entry.url || ''));
  });
  const send = (method, params) => new Promise(r => { const id = ++seq; pending[id] = r; ws.send(JSON.stringify({ id, method, params: params || {} })); });
  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.result && r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.exception ? r.result.exceptionDetails.exception.description : r.result.exceptionDetails.text);
    return r.result && r.result.result ? r.result.result.value : undefined;
  };
  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  /* window.alert would block the page; record it as an error instead. */
  await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.alert = m => console.error("alert: " + m);' });
  /* the whole course, all languages (levels.js): this check opens every screen */
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `try{const k='ars-grammatica-course-v2';const o=JSON.parse(localStorage.getItem(k)||'{}');if(!o.view){o.view={level:'comprehensive',lang:'all'};localStorage.setItem(k,JSON.stringify(o));}}catch(e){}` });
  await send('Page.navigate', { url: `http://127.0.0.1:${port}/index.html` });
  await sleep(1500);

  const report = await evaluate(`(async () => {
    const out = { screens: 0, decks: 0, panels: 0, exercises: 0, items: 0, problems: [] };
    const wait = ms => new Promise(r => setTimeout(r, ms));
    const ONLY = ${JSON.stringify(ONLY)};
    const ids = Object.keys(ARS.languages).filter(id => !ONLY || id.indexOf(ONLY) === 0).sort();
    for (const sid of ids){
      openLang(sid); await wait(30);
      out.screens++;
      const scr = ARS.languages[sid];
      const tiles = [...document.querySelectorAll('#lang-grid .set-card')];
      if (!tiles.length && scr.items.length) out.problems.push(sid + ': no tiles');
      for (const t of tiles){
        const it = scr.items.find(x => x.id === t.dataset.id);
        if (!it) { out.problems.push(sid + ': tile without item ' + t.dataset.id); continue; }
        const exBtn = t.querySelector('.ex-link');
        const want = ARS.deckEx[it.id];
        if (want && !exBtn) out.problems.push(it.id + ': paired with ' + want + ' but no Exercise button');
        if (it.kind === 'study' || it.kind === 'models' || it.kind === 'overview'){
          try {
            const d = await loadDeck(it.id); out.decks++;
            openDeck(it.id); await wait(20);
            for (let i = 0; i < d.panels.length; i++){
              cur.i = i; renderPanel(); out.panels++;
              const p = d.panels[i];
              if (!document.querySelector('#deck-body .panel h2')) out.problems.push(it.id + '/' + p.id + ': panel did not render');
              if (p.qp && document.querySelectorAll('#deck-body .qp .opt').length !== p.qp.variants[0].options.length) out.problems.push(it.id + '/' + p.id + ': question point options missing');
            }
          } catch (e) { out.problems.push(it.id + ': ' + e.message); }
        }
        const exIds = [it.kind === 'exercise' ? it.id : null, want].filter(Boolean);
        for (const xid of exIds){
          try {
            const ex = await loadEx(xid); out.exercises++;
            for (const S of ['A', 'B', 'C']){
              if (typeof ex.fresh !== 'function'){
                const items = itemsForSet(ex, S);
                if (!items.length) { out.problems.push(xid + ' set ' + S + ': empty'); continue; }
                runQueue({ ex: null, set: S, items: items, kind: 'Exercise', title: ex.title, sub: '' });
                for (let k = 0; k < items.length; k++){
                  run.k = k; renderItem(); out.items++;
                  const box = document.querySelector('#ex-body .ex-item');
                  if (!box) { out.problems.push(items[k].id + ': did not render'); continue; }
                  if (/not yet available/.test(box.textContent)) out.problems.push(items[k].id + ': type ' + items[k].type + ' has no renderer');
                  if ((items[k].type === 'mc' || items[k].type === 'mc-marked') && box.querySelectorAll('.opt').length !== items[k].options.length) out.problems.push(items[k].id + ': options missing');
                }
              } else {
                const items = ex.fresh(20);
                runQueue({ ex: null, set: '', items: items, kind: 'Exercise', title: ex.title, sub: '' });
                for (let k = 0; k < items.length; k++){ run.k = k; renderItem(); out.items++; }
                break;
              }
            }
          } catch (e) { out.problems.push(xid + ': ' + e.message); }
        }
      }
    }
    goHome();
    return out;
  })()`);
  let makerReport = null;
  if (MAKER){
    const src = fs.readFileSync(path.join(__dirname, 'maker-check.js'), 'utf8');
    /* A fresh load of #maker: after the many hash changes above, Chrome throttles navigation. */
    await send('Page.navigate', { url: `http://127.0.0.1:${port}/index.html#maker` });
    await sleep(1500);
    makerReport = await evaluate(src);
  }
  ws.close(); chrome.kill(); srv.close();
  try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {}
  console.log(`Screens ${report.screens}, decks ${report.decks}, panels ${report.panels}, exercises ${report.exercises}, items rendered ${report.items}.`);
  const problems = report.problems.concat(errors);
  if (makerReport){
    console.log('Quiz Maker: ' + makerReport.summary);
    problems.push(...makerReport.problems);
  }
  problems.forEach(p => console.log('  PROBLEM  ' + p));
  console.log(problems.length ? problems.length + ' problems.' : 'No problems.');
  process.exit(problems.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
