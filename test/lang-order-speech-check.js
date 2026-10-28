#!/usr/bin/env node
/* Language order, Spanish preview, typed-answer grading by language, and the language-aware reader.
     node test/lang-order-speech-check.js [--base=https://grammatica.studiuminstitute.org]
   Runs in light and dark. The reader is checked with a fake speechSynthesis: segments by lang
   attribute, the voice chosen for each, the fallbacks, and stop. Needs Chrome (CHROME=/path) and Node 22. */
'use strict';
const path = require('path');
const { launch } = require('./cdp');
const BASE = (process.argv.find(a => a.indexOf('--base=') === 0) || '').slice(7);
const problems = [];
const check = (ok, what) => { if (!ok) problems.push(what); console.log((ok ? 'ok   ' : 'FAIL ') + what); };

const FAKE = `(() => {
  window.__spoken = [];
  window.__voices = VOICES;
  const fake = {
    speaking:false,
    getVoices(){ return window.__voices; },
    speak(u){ window.__spoken.push({ text:u.text, lang:u.lang, voice:u.voice && u.voice.name, rate:u.rate });
      if (!window.__hold) setTimeout(() => u.onend && u.onend(), 1); else window.__pending = u; },
    cancel(){ window.__cancelled = (window.__cancelled || 0) + 1; },
    set onvoiceschanged(f){}
  };
  window.SpeechSynthesisUtterance = function(t){ this.text = t; };
  Object.defineProperty(window, 'speechSynthesis', { configurable:true, get(){ return fake; } });
})();`;
const V = (name, lang, extra) => Object.assign({ name, lang, localService:true, default:false }, extra || {});
const ALL = [V('Samantha','en-US',{default:true}), V('Daniel','en-GB'), V('Mónica','es-ES'), V('Paulina','es-MX'),
  V('Alice','it-IT'), V('Melina','el-GR'), V('Anna','de-DE'), V('Thomas','fr-FR'), V('Amélie','fr-CA')];
const FEW = [V('Samantha','en-US',{default:true}), V('Paulina','es-MX'), V('Zarvox','en-US')];

(async () => {
  const b = await launch(path.resolve(__dirname, '..'), Object.assign(BASE ? { base: BASE } : {}, { view:{ level:'comprehensive', lang:'all' } }));
  const bust = 'v=' + Date.now();
  for (const dark of [false, true]){
    const tag = dark ? '[dark] ' : '[light] ';
    await b.goto('index.html?' + bust);
    await b.evaluate(`localStorage.clear(); localStorage.setItem('arsGrammaticaCourse', JSON.stringify({ dark:${dark}, decks:{} })); true`);
    await b.goto('index.html?' + bust);
    await b.evaluate(`setDark(${dark}); buildHome(); true`);
    const order = await b.evaluate(`[...document.querySelector('.lang-bar .lang-btns').children].map(x => x.textContent.trim()).join(',')`);
    check(order === 'English,Latin,Greek,Spanish,German,French', tag + 'bar order: ' + order);
    const bars = await b.evaluate(`(() => { const all = [...document.querySelectorAll('.lang-bar')]; return all.length > 0 && all.every(bar => [...bar.querySelectorAll('.lang-btn')].map(x => x.textContent.trim()).join(',') === 'English,Latin,Greek,Spanish,German,French'); })()`);
    check(bars, tag + 'every bar has six buttons in order, Spanish included');
    check(await b.evaluate(`document.body.classList.contains('dark') === ${dark}`), tag + 'theme applied');
    const bg = await b.evaluate(`getComputedStyle(document.querySelector('.lang-btn.lang-es')).getPropertyValue('--lang').trim()`);
    check(bg === (dark ? '#b5792c' : '#a0661c'), tag + 'Spanish ochre ' + bg);
    check(await b.evaluate(`[...document.querySelectorAll('#qz-langs input')].map(i => i.value).join(',')`) === 'main,en,la,grc,es,de,fr', tag + 'maker checkbox order');
    check(await b.evaluate(`(() => { const l = [...document.querySelectorAll('#qz-langs label')].find(l => l.querySelector('[value=es]')); return !!l && !l.hidden; })()`), tag + 'Spanish maker checkbox visible');
  }

  /* grading */
  const g = (lang, ans, given) => b.evaluate(`gradeTypedAnswer({ type:'form', deck:'lang.iii-decl.${lang}/x-ex', answer:${JSON.stringify(ans)} }, ${JSON.stringify(given)})`);
  check(await g('de', 'Bücher', 'Bücher') === true, 'de: Bücher accepted');
  check(await g('de', 'Bücher', 'Buecher') === true, 'de: Buecher accepted');
  check(await g('de', 'Bücher', 'Bucher') === false, 'de: Bucher refused');
  check(await g('de', 'Straße', 'Strasse') === true, 'de: Strasse accepted');
  check(await g('fr', 'été', 'été') === true, 'fr: été accepted');
  check(await g('fr', 'été', 'ete') === false, 'fr: ete for été refused');
  check(await g('fr', 'répondit', 'repondit') === false, 'fr: repondit refused');
  check(await g('fr', 'lûmes', 'lumes') === false, 'fr: circumflex kept');
  check(await g('fr', 'reçoive', 'recoive') === false, 'fr: cedilla kept');
  check(await g('fr', 'marchèrent', 'marchérent') === false, 'fr: wrong accent refused');
  check(await g('fr', 'nageur', 'nageür') === false, 'fr: accent added where none is written refused');
  check(await g('fr', 'Écrivons', 'écrivons ') === true, 'fr: case and spaces still folded');
  check(await g('fr', 'été', 'e\u0301te\u0301') === true, 'fr: decomposed accent is the same letter');
  check(await g('la', 'amō', 'amo') === false && await g('grc', 'λόγος', 'λογος') === true, 'la and grc unchanged');
  check(await g('es', 'año', 'año') === true, 'es: año accepted');
  check(await g('es', 'año', 'ano') === false, 'es: ano refused');
  check(await g('es', 'cantó', 'canto') === false, 'es: canto for cantó refused');
  check(await g('es', 'cantó', 'Cantó ') === true, 'es: case and spaces still folded');
  check(await g('es', 'pingüino', 'pinguino') === false, 'es: diaeresis kept');
  check(await g('es', 'cantó', 'canto\u0301') === true, 'es: decomposed accent is the same letter');
  check(await b.evaluate(`LETTER_KEYS.es`) === 'áéíóúüñ¿¡', 'es letter row');

  /* reader */
  await b.send('Page.addScriptToEvaluateOnNewDocument', { source: FAKE.replace('VOICES', JSON.stringify(ALL)) });
  await b.goto('index.html?' + bust);
  const pick = l => b.evaluate(`(window.__arsPickVoice(${JSON.stringify(l)}) || {}).name`);
  for (const [l, want] of [['en','Samantha'],['es','Mónica'],['la','Alice'],['grc','Melina'],['el','Melina'],['de','Anna'],['fr','Thomas'],['xx','Samantha']])
    check(await pick(l) === want, `voice for ${l}: ${await pick(l)}`);
  await b.evaluate(`window.__voices = ${JSON.stringify(FEW)}; true`);
  for (const [l, want] of [['es','Paulina'],['la','Samantha'],['grc','Samantha'],['de','Samantha'],['fr','Samantha']])
    check(await pick(l) === want, `fallback voice for ${l}: ${await pick(l)}`);
  await b.evaluate(`window.__voices = []; true`);
  check(await pick('es') === undefined, 'no voices at all: none chosen, the browser default reads');
  await b.evaluate(`window.__voices = ${JSON.stringify(ALL)}; true`);

  /* segmentation on a built panel */
  await b.evaluate(`(() => {
    const scr = document.querySelector('.screen.active'); scr.classList.remove('active');
    const d = document.getElementById('scr-deck'); d.classList.add('active');
    document.getElementById('deck-title').textContent = 'Test'; document.getElementById('deck-sub').textContent = '';
    const c = document.getElementById('deck-count'); if (c) c.textContent = 'Panel 1 of 2';
    document.getElementById('deck-body').innerHTML = '<div class="panel"><h2>Errors</h2><p>A student writes <em lang="de">er gehte</em> for “he went,” and <i lang="es">cantó</i> is right.</p>'
      + '<p lang="fr">Le cœur a ses raisons,<br>que la raison ne connaît point.</p><p>The heart has its reasons.</p><p><span lang="grc">λόγος</span> and <i lang="la">verbum</i>.</p></div>';
    return true; })()`);
  const segs = await b.evaluate(`JSON.stringify(window.__arsSpeechSegments())`);
  const want = JSON.stringify([
    { lang:'en', text:'Test. Errors. A student writes' }, { lang:'de', text:'er gehte' }, { lang:'en', text:'for “he went,” and' },
    { lang:'es', text:'cantó' }, { lang:'en', text:'is right.' }, { lang:'fr', text:'Le cœur a ses raisons, que la raison ne connaît point.' },
    { lang:'en', text:'The heart has its reasons.' }, { lang:'el', text:'λόγος' }, { lang:'en', text:'and' }, { lang:'la', text:'verbum' }, { lang:'en', text:'.' } ]);
  console.log('     segments: ' + segs);
  const sg = JSON.parse(segs);
  check(sg.map(s => s.lang).join(' ') === 'en de en es en fr en el en la' || sg.map(s => s.lang).join(' ') === 'en de en es en fr en el en la en', 'segment languages in order: ' + sg.map(s => s.lang).join(' '));
  check(sg.some(s => s.lang === 'de' && s.text === 'er gehte') && sg.some(s => s.lang === 'es' && s.text === 'cantó'), 'inline words switch voice mid-sentence');
  check(sg.find(s => s.lang === 'fr') && /raisons.*connaît point/.test(sg.find(s => s.lang === 'fr').text), 'a passage with a line break stays one French segment');
  /* speak it: voices and rate */
  await b.evaluate(`courseStore().speakRate = 1.5; document.getElementById('speak-toggle').click(); true`);
  await b.sleep(600);
  const spoken = JSON.parse(await b.evaluate(`JSON.stringify(window.__spoken)`));
  console.log('     spoken: ' + spoken.map(s => s.voice + ':' + s.text).join(' | '));
  check(spoken.length === sg.length, `every segment spoken in sequence (${spoken.length}/${sg.length})`);
  check(spoken.every(s => s.rate === 1.5), 'rate applied to every segment');
  const vby = l => (spoken.find((s, k) => sg[k] && sg[k].lang === l) || {}).voice;
  check(vby('de') === 'Anna' && vby('es') === 'Mónica' && vby('fr') === 'Thomas' && vby('el') === 'Melina' && vby('la') === 'Alice' && vby('en') === 'Samantha', 'each segment in its voice');
  check(await b.evaluate(`document.getElementById('speak-toggle').textContent`) === '▶', 'button returns to play when done');
  /* stop in the middle */
  await b.evaluate(`window.__spoken = []; window.__hold = true; document.getElementById('speak-toggle').click(); true`);
  await b.sleep(200);
  await b.evaluate(`document.getElementById('speak-toggle').click(); window.__hold = false; window.__pending && window.__pending.onend && window.__pending.onend(); true`);
  await b.sleep(200);
  check(await b.evaluate(`window.__spoken.length`) === 1, 'stop ends the reading after the current segment');
  check(await b.evaluate(`document.getElementById('speak-toggle').textContent`) === '▶', 'button shows play after stop');
  /* a real language deck carries lang marks */
  await b.evaluate(`openDeck('lang.ix.de/poetry'); true`); await b.sleep(300);
  const deSeg = JSON.parse(await b.evaluate(`JSON.stringify(window.__arsSpeechSegments())`));
  check(deSeg.some(s => s.lang === 'de' && /Gipfeln|Bächlein|Schloss|Burg|König|Himmel/.test(s.text)), 'German passage panel read in German');
  await b.evaluate(`openDeck('lang.vi.fr/errors'); true`); await b.sleep(300);
  const frSeg = JSON.parse(await b.evaluate(`JSON.stringify(window.__arsSpeechSegments())`));
  check(frSeg.some(s => s.lang === 'fr') && frSeg.some(s => s.lang === 'en'), 'French deck: English explanation with French words');

  check(b.errors.length === 0, 'no console errors' + (b.errors.length ? ': ' + b.errors.slice(0, 5).join(' / ') : ''));
  b.close();
  console.log(problems.length ? problems.length + ' problems.' : 'No problems.');
  process.exit(problems.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
