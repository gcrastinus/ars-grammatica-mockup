#!/usr/bin/env node
/* Checks the Guided Path (guided.js) end to end in headless Chrome, with a faked calendar:
     node test/guided-check.js [--base=https://grammatica.studiuminstitute.org] [--shots=/path/to/dir]
   Gating, pass (9 of the last 10 over 2 days), mastery (a later-day sitting of 10), the section reviews,
   Today's Review, the untouched course record in Free Practice, export and import, a re-read before writing,
   levels (iii.ex.parts: the picker, the lock note, a pass at Level II opening III and IV, mastery from IV,
   Today's Review capped at the level reached, the migration from schema 1),
   and no sideways scrolling on any new screen at desktop and phone widths, in light and dark mode.
   Exit code 1 on any failed check or page error. */
'use strict';
const path = require('path');
const { launch } = require('./cdp.js');
const arg = n => (process.argv.find(a => a.indexOf('--' + n + '=') === 0) || '').slice(n.length + 3);
const BASE = arg('base'), SHOTS = arg('shots');
const ROOT = path.resolve(__dirname, '..');

(async () => {
  const b = await launch(ROOT, Object.assign(BASE ? { base: BASE } : {}, { view:{ level:'comprehensive', lang:'all' } }));
  const fails = [];
  let passes = 0;
  const check = (name, ok, extra) => { if (ok) passes++; else fails.push(name + (extra ? ' (' + extra + ')' : '')); };
  const ev = b.evaluate;
  /* a calendar the test can move forward */
  await b.send('Page.addScriptToEvaluateOnNewDocument', { source: `(() => {
    const R = Date; window.__off = +(sessionStorage.getItem('off') || 0);
    window.Date = class extends R { constructor(...a){ if (a.length) super(...a); else super(R.now() + window.__off * 864e5); } static now(){ return R.now() + window.__off * 864e5; } };
  })();` });
  const day = async n => { await ev(`window.__off = ${n}; sessionStorage.setItem('off', ${n})`); };
  await b.size(1100, 900);
  await b.goto('index.html');
  for (let i = 0; i < 40 && !(await ev(`typeof GP !== 'undefined'`)); i++) await b.sleep(250);
  await ev(`window.confirm = () => true`);

  /* answer a whole sitting through the real hooks: every item right, or the first k wrong */
  const sitting = async (id, opts) => ev(`(async () => {
    const o = ${JSON.stringify(opts || {})};
    id = ${JSON.stringify(id)}; run = null; openEx(id, o.mode ? { mode: o.mode } : o.level ? { level: o.level } : {});
    const t0 = Date.now();
    while ((!run || !run.n || (run.ex && run.ex.id !== id)) && Date.now() - t0 < 15000) await new Promise(r => setTimeout(r, 100));
    const n = run.n, wrong = o.wrong || 0;
    for (let k = 0; k < n; k++) {
      run.k = k; renderItem();
      const box = document.querySelector('#ex-body .ex-item');
      finishItem(box, run.queue[k], o.every ? k % o.every !== 0 : k < n - wrong, null, '');   /* wrong: the last items; every: each nth item */
    }
    run.k = run.queue.length; renderItem();
    return n;
  })()`);
  const st = id => ev(`GP.stateOf(${JSON.stringify(id)})`);

  /* 1. Free Practice is the default; nothing opens or records */
  check('default is Free Practice', await ev(`!GP.isGuided() && document.getElementById('path-btn').textContent.trim().startsWith('Free Practice')`));
  check('free: no guided record key', await ev(`localStorage.getItem('ars-grammatica-guided') === null`));
  await sitting('ii.ex.quantity', { level: 2 });
  check('free: exercise runs without the gate', await ev(`run && run.ex && run.ex.id === 'ii.ex.quantity'`));
  check('free: still no guided record', await ev(`localStorage.getItem('ars-grammatica-guided') === null`));
  const boxesFree = await ev(`Object.keys(courseStore().boxes || {}).length`);
  check('free: item boxes still recorded as before', boxesFree > 0, boxesFree);

  /* 2. Guided: gating. Section I has no exercise set, so finishing its study cards opens Section II. */
  await ev(`(() => { document.getElementById('path-btn').click(); document.getElementById('path-opt-guided').click(); return true; })()`);
  check('guided: Section II sets are locked', await st('ii.ex.syllable') === 'locked' && await st('ii.ex.quantity') === 'locked');
  check('guided: lock note names the study cards', await ev(`[...document.querySelectorAll('.lock-note')].some(n => /study cards of Section I are finished/.test(n.textContent))`));
  await ev(`openEx('ii.ex.syllable')`); await b.sleep(400);
  check('guided: locked exercise opens its own screen, not the set', await ev(`document.getElementById('scr-gx').classList.contains('active')`));
  check('guided: locked screen names what opens it', await ev(`/opens when .* finished/.test(document.getElementById('gx-body').textContent)`));
  await ev(`document.getElementById('gx-back').click()`);
  check('guided: section reviews never gate', await ev(`Object.values(GP.prereqs).every(a => a.every(id => !GP.info[id] || GP.info[id].kind === 'set'))`));


  /* 3. tracking is opt-in */
  await ev(`ARS.structure[1].items.forEach(it => { if (/^i\\./.test(it.id) && it.kind !== 'review') courseStore().decks[it.id] = { opens:1, done:true, doneAt:Date.now() }; }); save();`);
  check('finishing the cards of Section I opens Section II', await st('ii.ex.syllable') === 'learning');
  await sitting('ii.ex.syllable');
  check('guided without tracking: nothing recorded', await ev(`localStorage.getItem('ars-grammatica-guided') === null`));
  await ev(`GP.openProgress(); document.getElementById('gp-track').click()`);
  check('tracking turned on', await ev(`JSON.parse(localStorage.getItem('ars-grammatica-guided')).settings.trackingEnabled === true`));

  await ev(`courseStore().decks['i.sign'].done = false`);
  check('home says to finish the study cards of Section I, with an Open Section I button', await ev(`buildHome(), /Finish the study cards of Section I\\./.test(document.getElementById('guided-note').textContent) && /^Open Section I$/.test((document.querySelector('#guided-note .primary')||{}).textContent||'')`));
  await ev(`courseStore().decks['i.sign'].done = true; buildHome()`);

  /* 4. pass needs 9 of 10 over two days */
  await day(0);
  await sitting('ii.ex.syllable');
  check('one day of perfect answers is not a pass', await st('ii.ex.syllable') === 'learning');
  await day(1);
  await sitting('ii.ex.syllable');
  check('second day of right answers passes', await st('ii.ex.syllable') === 'passed');
  check('Section III still locked (quantity not passed)', await st('iii.ex.parts') === 'locked');
  /* the Guided Path has a language (English here), whose Section II sets are required too (levels.js, Timothy 27 Oct 2026) */
  const EN2 = await ev(`GP.tiers.find(t => t.key === 'ii').required.filter(id => id.indexOf('lang.') === 0)`);
  check('guided: the English sets of Section II are required', EN2.length === 3 && EN2.every(id => /^lang\.ii\.en\//.test(id)), JSON.stringify(EN2));
  for (const id of EN2) await sitting(id);
  await sitting('ii.ex.quantity', { level: 2 }); await day(2); await sitting('ii.ex.quantity', { level: 2 });
  for (const id of EN2) await sitting(id);
  check('Section II passed opens Section III', await st('ii.ex.quantity') === 'passed' && await st('iii.ex.parts') === 'learning');
  check('optional set iii.ex.figure is not required for Section IV', await ev(`!GP.tiers[2].required.includes('iii.ex.figure') && GP.config.OPTIONAL.includes('iii.ex.figure')`));
  check('Section IV needs the study cards, not sets', await st('v.ex.congruity') === 'locked');

  /* 5. mastery: a later day, a sitting of ten from the whole pool */
  await sitting('ii.ex.syllable', { mode: 'mastery' });   /* day 2: after the day-1 pass */
  check('mastery sitting has ten questions and masters on a later day', await st('ii.ex.syllable') === 'mastered');
  await sitting('ii.ex.quantity', { mode: 'mastery' });
  await day(2);

  /* 6. a missed pass: 8 of 10 is not enough (iii.ex.parts at Level II, its pass level) */
  await sitting('iii.ex.parts', { every: 4, level: 2 });
  await day(3);
  await sitting('iii.ex.parts', { every: 4, level: 2 });
  check('two wrong in the last ten (8 of 10) blocks the pass', await st('iii.ex.parts') !== 'passed', JSON.stringify(await ev(`JSON.parse(localStorage.getItem('ars-grammatica-guided')).sets['iii.ex.parts'].history.map(h => h.date.slice(8) + (h.correct ? '+' : '-')).join(' ')`)));

  /* 6b. levels: iii.ex.parts is the worked case; ii.ex.syllable has none */
  await ev(`openEx('iii.ex.parts')`); await b.sleep(500);
  check('levels: the picker shows on iii.ex.parts', await ev(`document.getElementById('scr-gx').classList.contains('active') && document.querySelectorAll('#gx-body .lp-lvl').length === 4`));
  check('levels: III and IV are locked before the pass, I and II open', await ev(`[...document.querySelectorAll('#gx-body .lp-lvl')].map(x => x.disabled ? 1 : 0).join('') === '0011'`));
  check('levels: the lock note is one plain line', await ev(`document.querySelector('#gx-body .lp-lvl[data-level="3"] .lp-lock').textContent === 'Stage III opens once this exercise is passed at Stage II.'`));
  if (SHOTS) for (const [w, h] of [[1100, 900], [390, 844]]) { await b.size(w, h); for (const dark of [false, true]) { await ev(`setDark(${dark})`); await b.sleep(300); await b.shot(path.join(SHOTS, `picker-locked-${w}-${dark ? 'dark' : 'light'}.png`), true); } }
  await b.size(1100, 900); await ev(`setDark(false)`);
  await ev(`openEx('ii.ex.syllable')`); await b.sleep(400);
  check('levels: no picker on a set without levels', await ev(`document.querySelectorAll('.lp-lvl').length === 0 || !document.getElementById('scr-gx').contains(document.querySelector('.lp-lvl'))`));
  check('levels: Today’s Review stops at the pass level before the pass', await ev(`ARS.levelCap(ARS.exercises['iii.ex.parts']) === 2 && ARS.levelCap(ARS.exercises['ii.ex.syllable']) === Infinity`));
  await day(4); await sitting('iii.ex.parts', { level: 1 }); await day(5); await sitting('iii.ex.parts', { level: 1 });
  check('levels: Level I answers do not count toward the pass', await st('iii.ex.parts') === 'learning');
  check('levels: each answer records its level', await ev(`(() => { const h = JSON.parse(localStorage.getItem('ars-grammatica-guided')).sets['iii.ex.parts'].history; return h.length > 0 && h.every(x => x.level === 1 || x.level === 2) && h.some(x => x.level === 1) && h.some(x => x.level === 2); })()`));
  check('levels: a level sitting holds only that level', await ev(`run.level === 1 && run.queue.every(it => (it.level || 1) === 1)`));
  await day(6); await sitting('iii.ex.parts', { level: 2 }); await day(7); await sitting('iii.ex.parts', { level: 2 });
  check('levels: a pass at Level II passes the exercise', await st('iii.ex.parts') === 'passed');
  await ev(`openEx('iii.ex.parts')`); await b.sleep(500);
  check('levels: the pass opens Levels III and IV', await ev(`[...document.querySelectorAll('#gx-body .lp-lvl')].every(x => !x.disabled)`));
  check('levels: Today’s Review reaches Level IV after the pass', await ev(`ARS.levelCap(ARS.exercises['iii.ex.parts']) === 4`));
  await ev(`document.querySelector('#gx-body .lp-lvl[data-level="3"]').click()`); await b.sleep(400);
  check('levels: choosing Level III runs Level III', await ev(`run && run.level === 3 && run.queue.length >= 10 && run.queue.every(it => it.level === 3)`));
  await day(8); await sitting('iii.ex.parts', { mode: 'mastery' });
  check('levels: the mastery sitting is ten from Level IV', await ev(`run.mode === 'mastery' && run.n === 10 && run.queue.every(it => it.level === 4)`));
  check('levels: mastery from Level IV masters the exercise', await st('iii.ex.parts') === 'mastered');
  /* Free Practice: every level open, its own chosen level */
  await ev(`(() => { document.getElementById('path-btn').click(); document.getElementById('path-opt-practice').click(); return true; })()`);
  const gpBefore = await ev(`localStorage.getItem('ars-grammatica-guided')`);
  await ev(`openEx('iii.ex.parts')`); await b.sleep(400);
  check('levels: Free Practice opens every level', await ev(`document.querySelectorAll('#gx-body .lp-lvl').length === 4 && [...document.querySelectorAll('#gx-body .lp-lvl')].every(x => !x.disabled)`));
  await ev(`document.querySelector('#gx-body .lp-lvl[data-level="2"]').click()`); await b.sleep(300);
  check('levels: Free Practice keeps its own level, apart from the Guided one', await ev(`exState('iii.ex.parts').level === 2 && JSON.parse(localStorage.getItem('ars-grammatica-guided')).sets['iii.ex.parts'].level === 3`) && await ev(`localStorage.getItem('ars-grammatica-guided')`) === gpBefore);
  await ev(`(() => { document.getElementById('path-btn').click(); document.getElementById('path-opt-guided').click(); return true; })()`);

  /* 7. section reviews wait, and never gate */
  check('section review waits for the exercises', (await ev(`GP.recallState('ii.review').key`)) === 'wait');
  check('section review gates nothing', await ev(`GP.info['ii.review'].kind === 'review' && !(GP.prereqs['iii.ex.parts'] || []).includes('ii.review')`));

  /* 8. Today's Review gathers due items and shows what moved */
  await ev(`(() => { ARS.structure.forEach(sec => sec.items.forEach(it => { if (/^(i|ii)\\./.test(it.id) && !/review/.test(it.kind)) courseStore().decks[it.id] = { opens:1, done:true, doneAt:Date.now() }; })); save(); })()`);
  await ev(`(() => { const bx = courseStore().boxes; let n = 0; for (const id in bx) { if (n++ < 12) bx[id].dueAt = Date.now() - 1000; } save(); })()`);
  /* the due count is made once the questions of the level are gathered (practice.js, refreshDue) */
  await ev(`buildHome()`); await b.sleep(1500);
  check('home names due items', await ev(`/review items are due today|review item is due today/.test(document.getElementById('guided-note').textContent)`));
  await ev(`GP.startToday()`); await b.sleep(800);
  const todayN = await ev(`run ? run.n : -1`);
  check('Today’s Review runs due items', todayN > 0, todayN);
  await ev(`(() => { for (let k = 0; k < run.n; k++) { run.k = k; renderItem(); finishItem(document.querySelector('#ex-body .ex-item'), run.queue[k], k % 4 !== 0, null, ''); } run.k = run.queue.length; renderItem(); })()`);
  const sum = await ev(`document.getElementById('ex-body').textContent`);
  check('Today’s Review shows what moved', /Moved up to box/.test(sum) && /Returned to box 1/.test(sum), sum.slice(0, 200));
  check('Today’s Review names the next exercise', /next exercise to (learn|master)/.test(sum));

  /* 9. Free Practice leaves the guided record alone */
  await ev(`document.getElementById('scr-ex').classList.remove('active'); document.getElementById('scr-home').classList.add('active')`);
  await ev(`(() => { document.getElementById('path-btn').click(); document.getElementById('path-opt-practice').click(); return true; })()`);
  const before = await ev(`localStorage.getItem('ars-grammatica-guided')`);
  await sitting('ii.ex.quantity', { level: 2 });
  check('free practice writes nothing to the guided record', await ev(`localStorage.getItem('ars-grammatica-guided')`) === before);
  await ev(`(() => { document.getElementById('path-btn').click(); document.getElementById('path-opt-guided').click(); return true; })()`);

  /* 10. re-read before writing: a change made elsewhere survives the next answer */
  await ev(`(() => { const o = JSON.parse(localStorage.getItem('ars-grammatica-guided')); o.sets['zz.other.tab'] = {state:'learning', seen:1, correct:1, history:[], mhist:[], passedOn:null, masteredOn:null}; localStorage.setItem('ars-grammatica-guided', JSON.stringify(o)); })()`);
  await sitting('ii.ex.quantity', { level: 2 });
  check('a record written by another tab is kept', await ev(`!!JSON.parse(localStorage.getItem('ars-grammatica-guided')).sets['zz.other.tab']`));

  /* 11. export and import round trip */
  const exported = await ev(`(() => { const o = JSON.parse(localStorage.getItem('ars-grammatica-guided')); o.course = JSON.parse(JSON.stringify(courseStore())); return JSON.stringify(o); })()`);
  await ev(`GP.eraseAll(); localStorage.removeItem('ars-grammatica-guided')`);
  await ev(`(() => { const f = new File([${JSON.stringify(exported)}], 'p.json', {type:'application/json'}); const dt = new DataTransfer(); dt.items.add(f); const i = document.getElementById('prog-import-file'); i.files = dt.files; i.dispatchEvent(new Event('change')); })()`);
  await b.sleep(500);
  check('import restores the guided record', await ev(`JSON.parse(localStorage.getItem('ars-grammatica-guided')).sets['ii.ex.syllable'].masteredOn != null`));
  check('import restores the course record', await ev(`Object.keys(courseStore().boxes || {}).length > 0`));
  await ev(`(() => { const f = new File(['{"nope":1}'], 'bad.json'); const dt = new DataTransfer(); dt.items.add(f); const i = document.getElementById('prog-import-file'); i.files = dt.files; i.dispatchEvent(new Event('change')); })()`);
  await b.sleep(300);
  check('a wrong file is refused politely', await ev(`/could not be read/.test(document.getElementById('gp-note').textContent)`));

  /* 13. migration from schema 1: old answers count as Level I, a pass stays a pass, a star stays a star */
  const saved = await ev(`localStorage.getItem('ars-grammatica-guided')`);
  await ev(`localStorage.setItem('ars-grammatica-guided', JSON.stringify({ schemaVersion:1, app:'ars-grammatica', settings:{ trackingEnabled:true }, recall:{}, sets:{
    'ii.ex.syllable':{ state:'mastered', seen:20, correct:20, history:[{date:'2026-01-01', correct:true, item:'x'}], mhist:[{date:'2026-01-02', correct:true, item:'y'}], passedOn:'2026-01-01', masteredOn:'2026-01-02' },
    'ii.ex.quantity':{ state:'passed', seen:10, correct:10, history:[{date:'2026-01-01', correct:true, item:'z'}], mhist:[], passedOn:'2026-01-01', masteredOn:null },
    'iii.ex.parts':{ state:'learning', seen:3, correct:3, history:[{date:'2026-01-03', correct:true, item:'prt-A01'}], mhist:[], passedOn:null, masteredOn:null } } }))`);
  await b.goto('index.html');
  for (let i = 0; i < 40 && !(await ev(`typeof GP !== 'undefined'`)); i++) await b.sleep(250);
  check('migration: a schema 1 record is read', await ev(`GP.stateOf('ii.ex.syllable') === 'mastered' && GP.stateOf('ii.ex.quantity') === 'passed' && ['learning', 'locked'].includes(GP.stateOf('iii.ex.parts'))`));   /* locked: the English sets of II are not in this record */
  await sitting('ii.ex.quantity', { level: 2 });
  check('migration: the next write stores schema 2, old answers at Level I', await ev(`(() => { const o = JSON.parse(localStorage.getItem('ars-grammatica-guided')); return o.schemaVersion === 2 && o.sets['ii.ex.syllable'].history[0].level === 1 && o.sets['ii.ex.syllable'].mhist[0].level === 1 && o.sets['iii.ex.parts'].history[0].level === 1 && o.sets['ii.ex.syllable'].masteredOn === '2026-01-02'; })()`));
  check('migration: GP.migrate leaves schema 2 alone', await ev(`GP.migrate({schemaVersion:2, sets:{a:{history:[{level:3}]}}}).sets.a.history[0].level === 3`));
  await ev(`localStorage.setItem('ars-grammatica-guided', ${JSON.stringify(saved)})`);
  await b.goto('index.html');
  for (let i = 0; i < 40 && !(await ev(`typeof GP !== 'undefined'`)); i++) await b.sleep(250);
  await ev(`window.confirm = () => true`);
  /* 12. layout: no sideways scrolling on the new screens, light and dark, desktop and phone */
  const views = [
    ['home', `goHome()`],
    ['progress', `GP.openProgress()`],
    ['exercise', `openEx('ii.ex.syllable')`],
    ['locked', `openEx('iii.ex.parts')`],
    ['review', `openEx('ii.review')`],
    ['levels', `openEx('iii.ex.parts')`],
    ['level3', `(async () => { run = null; openEx('iii.ex.parts', { level: 3 }); while (!run || !run.queue) await new Promise(r => setTimeout(r, 50)); run.k = Math.max(0, run.queue.findIndex(it => /Bunyan/.test(it.source))); renderItem(); })()`],
    ['level4', `(async () => { run = null; openEx('iii.ex.parts', { level: 4 }); while (!run || !run.queue) await new Promise(r => setTimeout(r, 50)); run.k = Math.max(0, run.queue.findIndex(it => /Bunyan/.test(it.source))); renderItem(); })()`]
  ];
  for (const [w, h] of [[1100, 900], [390, 844]]) {
    await b.size(w, h);
    for (const dark of [false, true]) {
      await ev(`setDark(${dark})`);
      for (const [name, js] of views) {
        await ev(js); await b.sleep(400);
        const wide = await ev(`document.documentElement.scrollWidth - window.innerWidth`);
        check(`no sideways scroll: ${name} ${w}px ${dark ? 'dark' : 'light'}`, wide <= 0, wide);
        if (SHOTS) await b.shot(path.join(SHOTS, `${name}-${w}-${dark ? 'dark' : 'light'}.png`), name === 'home' || name === 'progress');
      }
    }
  }
  const errs = b.errors;
  b.close();
  console.log(`${passes} checks passed, ${fails.length} failed, ${errs.length} page errors.`);
  fails.forEach(f => console.log('FAIL: ' + f));
  errs.forEach(e => console.log('ERROR: ' + e));
  process.exit(fails.length || errs.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
