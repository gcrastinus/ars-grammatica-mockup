#!/usr/bin/env node
/* Checks the course levels (levels.js, data/tiers.js) end to end in headless Chrome:
     node test/course-levels-check.js [--base=https://...] [--shots=/path/to/dir]
   1. A first visit opens on Essentials, Free Practice, and English.
   2. Every deck, exercise set, and review in the course has a line in data/tiers.js (or follows its deck).
   3. For each level and each language (and All languages), the home page and every language screen show exactly
      the decks, exercises, and reviews whose level is at or below the level chosen, computed here from
      data/tiers.js alone; reviews give only the questions on open decks, staged sets only the open stages,
      and the reading collections only the open passages.
   4. Switching Essentials to Mastered and back keeps every record and the Guided Path step, and the
      Free Practice place.
   5. An old course record (from before the levels) and an old Guided record still load, unchanged.
   6. The saved level, path, and language come back on the next visit.
   7. The three drop-downs (Level, Path, Language) sit on one line under the opening paragraph, labeled, large,
      reachable by Tab, worked by the arrow keys, with a focus outline; on a phone they wrap at full size. The
      page opens at the top; going back to a level brings the last tile opened there into view.
   8. No console errors.
   It also prints the size of each level for each language. Exit code 1 on any failed check or page error. */
'use strict';
const path = require('path');
const { launch } = require('./cdp.js');
const arg = n => (process.argv.find(a => a.indexOf('--' + n + '=') === 0) || '').slice(n.length + 3);
const BASE = arg('base'), SHOTS = arg('shots');
const ROOT = path.resolve(__dirname, '..');
const LEVELS = ['essentials', 'proficient', 'mastered', 'comprehensive'];
const LANGS = ['en', 'la', 'grc', 'es', 'de', 'fr'];

(async () => {
  const b = await launch(ROOT, BASE ? { base: BASE } : {});
  const fails = [];
  let passes = 0;
  const check = (name, ok, extra) => { if (ok) passes++; else fails.push(name + (extra ? ' (' + extra + ')' : '')); };
  const ev = b.evaluate;
  await b.send('Page.addScriptToEvaluateOnNewDocument', { source: `(() => {
    const R = Date; window.__off = +(sessionStorage.getItem('off') || 0);
    window.Date = class extends R { constructor(...a){ if (a.length) super(...a); else super(R.now() + window.__off * 864e5); } static now(){ return R.now() + window.__off * 864e5; } };
  })();` });
  const day = async n => { await ev(`window.__off = ${n}; sessionStorage.setItem('off', ${n})`); };
  const ready = async () => { for (let i = 0; i < 40 && !(await ev(`typeof GP !== 'undefined' && !!ARS.CL`)); i++) await b.sleep(250); };
  await b.size(1100, 900);
  await b.goto('index.html');
  await ev(`localStorage.clear(); sessionStorage.clear(); true`);
  await b.goto('index.html');
  await ready();
  await ev(`window.confirm = () => true`);

  /* 1. first visit */
  const shown = id => `(s => s.options[s.selectedIndex].textContent)(document.getElementById('${id}'))`;
  check('first visit: Essentials is shown in the Level drop-down', await ev(`${shown('level-select')} === 'Essentials' && ARS.CL.current() === 'essentials'`));
  check('first visit: Free Practice is shown in the Path drop-down', await ev(`!GP.isGuided() && ${shown('path-select')} === 'Free Practice'`));
  check('first visit: English is shown in the Language drop-down', await ev(`${shown('lang-select')} === 'English' && ARS.CL.lang() === 'en'`));
  check('first visit: the page opens at the top', await ev(`window.scrollY === 0`));

  /* 2. every item has a level (data/tiers.js), or follows its deck */
  const missing = await ev(`(() => {
    const T = ARS.tiers.items, out = [];
    ARS.structure.forEach(s => s.items.forEach(it => { if (!T[it.id] && !ARS.CL.deckOfEx(it.id)) out.push(it.id); }));
    Object.values(ARS.languages).forEach(sc => (sc.items || []).forEach(it => {
      if (!it.built) return;
      if (it.kind === 'exercise'){ const d = ARS.CL.deckOfEx(it.id); if (!d || !T[d]) out.push(it.id); }
      else if (!T[it.id]) out.push(it.id);
    }));
    Object.keys(T).forEach(id => { const known = ARS.structure.some(s => s.items.some(x => x.id === id)) || Object.values(ARS.languages).some(sc => (sc.items || []).some(x => x.id === id)); if (!known) out.push('unknown:' + id); });
    return out;
  })()`);
  check('every deck, set, and review has a level, and every line names a real item', missing.length === 0, missing.slice(0, 8).join(', '));

  /* 3. exactly the level's items, for every level and language; computed from data/tiers.js only */
  const expectAll = await ev(`(() => {
    const T = ARS.tiers.items, ORD = ARS.tiers.order, k = id => ORD.indexOf(T[id] || 'comprehensive');
    const exOf = {}; Object.keys(ARS.deckEx).forEach(d => { exOf[d] = ARS.deckEx[d]; });
    /* an item with introFor (x.imitation) opens its exercise from its last card, so its tile has no Exercise button */
    const main = ARS.structure.flatMap(s => s.items.map(it => ({ id:it.id, k:k(it.id), ex:(!it.introFor && exOf[it.id]) || null })));
    const screens = {};
    Object.values(ARS.languages).forEach(sc => {
      if (sc.bar === 'prelim') return;
      screens[sc.id] = { code:sc.code, bar:sc.bar, tiles:(sc.items || []).filter(it => it.kind !== 'exercise' || !Object.values(exOf).includes(it.id)).map(it => ({ id:it.id, k:k(it.id), ex:exOf[it.id] || null })) };
    });
    const overviews = Object.values(ARS.languages).filter(sc => sc.bar === 'prelim').map(sc => ({ code:sc.code, id:sc.id + '/overview', k:k(sc.id + '/overview') }));
    return { main, screens, overviews };
  })()`);
  let mismatches = [];
  for (let li = 0; li < LEVELS.length; li++){
    const lv = LEVELS[li];
    for (const lang of LANGS.concat(['all'])){
      await ev(`ARS.CL.setLevel('${lv}'); ARS.CL.setLang('${lang}'); true`);
      const got = await ev(`(() => ({
        tiles: [...document.querySelectorAll('#home-acts .set-card')].map(c => c.dataset.id),
        exlinks: [...document.querySelectorAll('#home-acts .set-card')].filter(c => c.querySelector('.ex-link')).map(c => c.dataset.id),
        bars: [...document.querySelectorAll('#home-acts .lang-bar')].map(x => ({ bar:x.dataset.langbar, screens:[...x.querySelectorAll('button')].map(bt => bt.dataset.screen) }))
      }))()`);
      const wantTiles = expectAll.main.filter(x => x.k <= li).map(x => x.id);
      const wantEx = expectAll.main.filter(x => x.k <= li && x.ex).map(x => x.id);
      if (JSON.stringify(got.tiles) !== JSON.stringify(wantTiles)) mismatches.push(`${lv}/${lang} home tiles: got ${got.tiles.length}, want ${wantTiles.length}`);
      if (JSON.stringify(got.exlinks) !== JSON.stringify(wantEx)) mismatches.push(`${lv}/${lang} home Exercise buttons`);
      const langs = lang === 'all' ? LANGS : [lang];
      /* the bars: one button per language with something open at the level */
      const wantScreens = {};
      Object.entries(expectAll.screens).forEach(([sid, sc]) => { if (langs.includes(sc.code) && sc.tiles.some(t => t.k <= li)) (wantScreens[sc.bar] = wantScreens[sc.bar] || []).push(sid); });
      expectAll.overviews.forEach(o => { if (langs.includes(o.code) && o.k <= li) (wantScreens.prelim = wantScreens.prelim || []).push(o.id.replace(/\/overview$/, '')); });
      const gotScreens = {}; got.bars.forEach(x => { gotScreens[x.bar] = x.screens; });
      const norm = o => JSON.stringify(Object.keys(o).sort().map(k2 => [k2, o[k2].slice().sort()]));
      if (norm(gotScreens) !== norm(wantScreens)) mismatches.push(`${lv}/${lang} language bars`);
      /* each language screen open at this level */
      for (const [sid, sc] of Object.entries(expectAll.screens)){
        if (!langs.includes(sc.code) || !sc.tiles.some(t => t.k <= li)) continue;
        const g = await ev(`(() => { openLang(${JSON.stringify(sid)}); const cs = [...document.querySelectorAll('#lang-grid .set-card')]; const r = { tiles:cs.map(c => c.dataset.id), ex:cs.filter(c => c.querySelector('.ex-link')).map(c => c.dataset.id) }; leaveLang(); return r; })()`);
        const want = sc.tiles.filter(t => t.k <= li);
        if (JSON.stringify(g.tiles) !== JSON.stringify(want.map(t => t.id))) mismatches.push(`${lv}/${lang} screen ${sid}: got ${g.tiles.join(',')}`);
        if (JSON.stringify(g.ex) !== JSON.stringify(want.filter(t => t.ex).map(t => t.id))) mismatches.push(`${lv}/${lang} screen ${sid} Exercise buttons`);
      }
    }
  }
  check('each level shows exactly its decks, exercises, and reviews, for every language and All languages', mismatches.length === 0, mismatches.slice(0, 6).join('; '));

  /* 3b. inside the sets: reviews, stages, passages */
  const inner = await ev(`(async () => {
    const out = [];
    const ex = async id => { await loadEx(id); return ARS.exercises[id]; };
    const rv = await ex('i.review'), parts = await ex('iii.ex.parts'), period = await ex('v.ex.period'), prose = await ex('lang.ix.en/prose-ex');
    const deck = await loadDeck('lang.ix.en/prose');
    for (const lv of ARS.tiers.order){
      const r = ARS.CL.filterItems(rv, rv.items, lv), p = ARS.CL.filterItems(parts, parts.items, lv), pr = ARS.CL.filterItems(prose, prose.items, lv);
      out.push({ lv, review:r.length, reviewDecks:[...new Set(r.map(x => x.deck))].join(','), partsCap:ARS.CL.stageCap(parts, lv), partsMax:Math.max(...p.map(x => x.level || 1)),
        periodCap:ARS.CL.stageCap(period, lv), prose:pr.length, proseRefs:new Set(pr.map(x => x.passageRef)).size, panels:ARS.CL.panelsOf(deck, lv).length });
    }
    return out;
  })()`);
  const L = Object.fromEntries(inner.map(x => [x.lv, x]));
  check('review: Essentials gives only the Sign and Symbol questions of the Section I review', L.essentials.review === 21 && L.essentials.reviewDecks === 'i.sign', JSON.stringify(L.essentials));
  check('review: Comprehensive gives the whole Section I review', L.comprehensive.review === 120);
  check('stages: iii.ex.parts opens Stage I in Essentials and one more stage at each level', [1, 2, 3, 4].every((n, i) => inner[i].partsCap === n && inner[i].partsMax === n));
  check('stages: v.ex.period (Mastered) opens Stage I at Mastered and all three at Comprehensive', L.mastered.periodCap === 1 && L.comprehensive.periodCap === 3);
  check('passages: English prose opens 3, 8, and 15 passages', L.proficient.proseRefs === 3 && L.mastered.proseRefs === 8 && L.comprehensive.proseRefs === 15, inner.map(x => x.proseRefs).join('/'));
  check('passages: the deck shows only the open passages', L.proficient.panels < L.mastered.panels && L.mastered.panels < L.comprehensive.panels && L.comprehensive.panels === 97, inner.map(x => x.panels).join('/'));

  /* a sitting run through the runner at Essentials gives only open items */
  await ev(`ARS.CL.setLevel('essentials'); ARS.CL.setLang('en'); true`);
  const sitIds = await ev(`(async () => { run = null; openEx('i.review'); const t0 = Date.now(); while ((!run || !run.n) && Date.now() - t0 < 10000) await new Promise(r => setTimeout(r, 100)); const ids = run.queue.map(x => x.deck); goHome(); return ids; })()`);
  check('a section review sitting at Essentials asks only on open decks', sitIds.length > 0 && sitIds.every(d => d === 'i.sign'), sitIds.join(','));
  const stageRun = await ev(`(async () => { run = null; openEx('iii.ex.parts'); const t0 = Date.now(); while ((!run || !run.n) && Date.now() - t0 < 10000) await new Promise(r => setTimeout(r, 100)); const r = { level:run.level, kind:document.getElementById('ex-kind').textContent }; goHome(); return r; })()`);
  check('a staged set at Essentials runs Stage I directly and says "Stage"', stageRun.level === 1 && /Stage I/.test(stageRun.kind), JSON.stringify(stageRun));

  /* the size of each level for each language, for the report */
  const sizes = await ev(`(async () => {
    const rows = [];
    for (const code of ${JSON.stringify(LANGS)}){
      for (const lv of ARS.tiers.order){
        const ids = [];
        ARS.structure.forEach(s => s.items.forEach(it => { if (ARS.CL.open(it.id, lv)) ids.push(it.id); }));
        Object.values(ARS.languages).filter(sc => sc.code === code).forEach(sc => ARS.CL.screenItems(sc, lv).forEach(it => ids.push(it.id)));
        let decks = 0, cards = 0, sets = 0, items = 0, gen = 0;
        const exIds = new Set();
        for (const id of ids){
          const it = ARS.structure.flatMap(s => s.items).find(x => x.id === id) || Object.values(ARS.languages).flatMap(sc => sc.items || []).find(x => x.id === id);
          if (!it || !it.built && it.kind !== 'review') continue;
          if (it.kind === 'review') exIds.add(id);
          else if (it.kind !== 'exercise' || ARS.decks[id] || it.kind === 'models' || it.kind === 'overview' || /^(ix|x)\\./.test(id)){
            try { const d = await loadDeck(id); decks++; cards += ARS.CL.panelsOf(d, lv).length; } catch (e) {}
          }
          const x = ARS.deckEx[id]; if (x) exIds.add(x);
        }
        for (const x of exIds){
          try { const ex = await loadEx(x); sets++;
            if (typeof ex.fresh === 'function' && !(ex.items || []).length) gen++;
            else items += ARS.CL.filterItems(ex, ex.items || [], lv).length;
          } catch (e) {}
        }
        rows.push({ code, lv, decks, cards, sets, items, gen });
      }
    }
    return rows;
  })()`);

  /* 4. switching levels keeps records, the Guided step, and the Free Practice place */
  await ev(`ARS.CL.setLevel('essentials'); ARS.CL.setLang('la'); true`);
  await ev(`openDeck('ii.letter')`); await b.sleep(500); await ev(`goHome()`);
  await ev(`ARS.CL.setLevel('mastered'); true`);
  await ev(`openDeck('ii.meter')`); await b.sleep(500); await ev(`goHome()`);
  await ev(`ARS.CL.setLevel('essentials'); true`); await b.sleep(300);
  check('Free Practice: back at Essentials the tile last opened there has the focus', await ev(`document.activeElement && document.activeElement.dataset && document.activeElement.dataset.id === 'ii.letter'`), await ev(`document.activeElement && (document.activeElement.dataset.id || document.activeElement.textContent.slice(0, 40))`));
  await ev(`ARS.CL.setLevel('mastered'); true`); await b.sleep(300);
  check('Free Practice: back at Mastered the tile last opened there has the focus', await ev(`document.activeElement && document.activeElement.dataset && document.activeElement.dataset.id === 'ii.meter'`));
  await ev(`ARS.CL.setLevel('essentials'); true`);
  await ev(`GP.setPath('guided')`);
  await ev(`GP.openProgress(); document.getElementById('gp-track').click(); document.getElementById('prog-back').click()`);
  await ev(`courseStore().decks['i.sign'] = { opens:1, done:true, doneAt:Date.now() }; save(); buildHome()`);
  check('Guided, Essentials, Latin: the Latin sets of Section II are required', await ev(`GP.tiers.find(t => t.key === 'ii').required.join(',') === 'ii.ex.syllable,lang.ii.la/syllable-ex'`), await ev(`GP.tiers.find(t => t.key === 'ii').required.join(',')`));
  const sitting = async id => ev(`(async () => {
    run = null; openEx(${JSON.stringify(id)}, {}); const t0 = Date.now();
    while ((!run || !run.n) && Date.now() - t0 < 15000) await new Promise(r => setTimeout(r, 100));
    for (let k = 0; k < run.n; k++){ run.k = k; renderItem(); finishItem(document.querySelector('#ex-body .ex-item'), run.queue[k], true, null, ''); }
    run.k = run.queue.length; renderItem(); return run.n;
  })()`);
  await day(0); await sitting('ii.ex.syllable'); await day(1); await sitting('ii.ex.syllable');
  check('Guided, Essentials: ii.ex.syllable passed', await ev(`GP.stateOf('ii.ex.syllable')`) === 'passed');
  await ev(`goHome()`);
  const stepE = await ev(`(GP.nextLearning() || {}).id || ''`);
  await ev(`openEx(${JSON.stringify('lang.ii.la/syllable-ex')})`); await b.sleep(400); await ev(`clearHash(); buildHome(); show('scr-home')`);
  const before = await ev(`JSON.stringify({ decks:courseStore().decks, ex:courseStore().ex, boxes:courseStore().boxes, gp:localStorage.getItem('ars-grammatica-guided') })`);
  await ev(`ARS.CL.setLevel('mastered'); true`);
  const stepM = await ev(`(GP.nextLearning() || {}).id || ''`);
  check('Guided, Mastered: the path is the Mastered one', await ev(`GP.tiers.some(t => t.key === 'viii')`) && !(await ev(`(() => { ARS.CL.setLevel('essentials'); const r = GP.tiers.some(t => t.key === 'viii'); ARS.CL.setLevel('mastered'); return r; })()`)));
  await ev(`openEx('ii.ex.quantity')`); await b.sleep(400); await ev(`clearHash(); buildHome(); show('scr-home')`);
  const mid = await ev(`JSON.stringify({ decks:courseStore().decks, ex:courseStore().ex, boxes:courseStore().boxes, gp:localStorage.getItem('ars-grammatica-guided') })`);
  check('switching to Mastered changes no record', mid === before);
  await ev(`ARS.CL.setLevel('essentials'); true`); await b.sleep(300);
  check('back at Essentials: the next Guided step is the same', await ev(`(GP.nextLearning() || {}).id || ''`) === stepE, stepE + ' / ' + stepM);
  check('back at Essentials: the pass is kept', await ev(`GP.stateOf('ii.ex.syllable')`) === 'passed');
  check('back at Essentials: the Guided step last opened there is kept and in view', await ev(`(ARS.CL.place() || {}).step === 'lang.ii.la/syllable-ex' && !!document.activeElement.closest('[data-langbar="ii"]')`));
  check('back at Essentials: every record is as it was', await ev(`JSON.stringify({ decks:courseStore().decks, ex:courseStore().ex, boxes:courseStore().boxes, gp:localStorage.getItem('ars-grammatica-guided') })`) === before);
  check('the Guided Path offers no All languages in the Language drop-down', await ev(`[...document.getElementById('lang-select').options].length === 6 && ![...document.getElementById('lang-select').options].some(x => x.value === 'all')`));
  check('Guided: the star state is called Confirmed', await ev(`GP.config && typeof GP.stateOf === 'function'`) && !(await ev(`/★ Mastered/.test(document.body.textContent)`)));

  /* 6. the choices come back on the next visit */
  await ev(`ARS.CL.setLevel('proficient'); ARS.CL.setLang('grc'); true`);
  await ev(`openDeck('ii.voice')`); await b.sleep(500); await ev(`goHome(); window.scrollTo(0, 400); true`);   /* a place kept at Proficient */
  await b.goto('index.html'); await ready();
  check('reload: Proficient, Guided Path, and Greek come back', await ev(`ARS.CL.current() === 'proficient' && GP.isGuided() && ARS.CL.lang() === 'grc' && ${shown('level-select')} === 'Proficient' && ${shown('lang-select')} === 'Greek' && ${shown('path-select')} === 'Guided Path'`));
  check('reload: the page opens at the top, though a place is kept at this level', await ev(`window.scrollY === 0 && !!ARS.CL.place() && document.activeElement === document.body`));
  await ev(`GP.setPath('practice'); ARS.CL.setLang('all'); true`);
  await b.goto('index.html'); await ready();
  check('reload: Free Practice with All languages comes back', await ev(`!GP.isGuided() && ARS.CL.lang() === 'all'`));
  await ev(`GP.setPath('guided')`);
  check('choosing the Guided Path with All languages takes the last single language', await ev(`ARS.CL.lang() === 'grc' && ARS.CL.view().lang === 'grc'`));

  /* 5. an old record, from before the levels, loads unchanged */
  const OLD = { dark:false, decks:{ 'i.sign':{ opens:2, done:true, doneAt:1761000000000 }, 'iii.parts':{ opens:1, done:true, doneAt:1761100000000 }, 'lang.ix.la/prose':{ opens:1, done:true, doneAt:1761200000000 }, 'xi.modern':{ opens:1, done:true, doneAt:1761300000000 } },
    ex:{ 'ii.ex.syllable':{ visits:3, done:true, doneAt:1761000000000 }, 'iii.ex.parts':{ visits:2, done:true, lvisits:{ 1:1, 2:1 }, level:2 } },
    boxes:{ 'syl-A01':{ box:2, dueAt:1761500000000, deck:'ii.syllable', section:'ii' } }, recitations:{ unlocked:{}, items:{ 'i.sign':{ text:'A sign is', at:1761000000000 } } } };
  const OLDGP = { schemaVersion:2, app:'ars-grammatica', settings:{ trackingEnabled:true }, recall:{}, sets:{ 'ii.ex.syllable':{ state:'mastered', seen:20, correct:20, history:[{ date:'2026-01-01', correct:true, item:'x', level:1 }], mhist:[{ date:'2026-01-02', correct:true, item:'y', level:1 }], passedOn:'2026-01-01', masteredOn:'2026-01-02' }, 'iii.ex.parts':{ state:'passed', seen:30, correct:30, history:[], mhist:[], passedOn:'2026-01-03', masteredOn:null } } };
  await ev(`localStorage.clear(); localStorage.setItem('ars-grammatica-course-v2', ${JSON.stringify(JSON.stringify(OLD))}); localStorage.setItem('ars-grammatica-guided', ${JSON.stringify(JSON.stringify(OLDGP))}); localStorage.setItem('ars-grammatica-path', 'guided'); true`);
  await b.goto('index.html'); await ready(); await b.sleep(500);
  const after = await ev(`JSON.parse(localStorage.getItem('ars-grammatica-course-v2'))`);
  check('old record: opens on Essentials with English, on the saved path', await ev(`ARS.CL.current() === 'essentials' && ARS.CL.lang() === 'en' && GP.isGuided()`));
  const keep = k => JSON.stringify(after[k]) === JSON.stringify(OLD[k]);
  /* the recitation menu marks a finished deck as open for recitation (recitation.js, as before the levels) */
  check('old record: decks, exercises, boxes, and recited texts unchanged', keep('decks') && keep('ex') && keep('boxes') && JSON.stringify(after.recitations.items) === JSON.stringify(OLD.recitations.items), Object.keys(after).join(','));
  check('old record: only the new fields were added', Object.keys(after).every(k => k in OLD || ['view', 'levels', 'reciteNudges'].includes(k)));
  check('old record: the old Guided record is read: a star stays a star', await ev(`GP.stateOf('ii.ex.syllable')`) === 'mastered');
  check('old record: a pass at Stage II counts at Proficient and above, and Essentials asks for Stage I', await ev(`(() => { const e = GP.stateOf('iii.ex.parts'); ARS.CL.setLevel('proficient'); const p = GP.stateOf('iii.ex.parts'); ARS.CL.setLevel('essentials'); return e !== 'passed' && e !== 'mastered' && p === 'passed'; })()`));
  check('old record: the Guided record is not rewritten by reading it', await ev(`localStorage.getItem('ars-grammatica-guided')`) === JSON.stringify(OLDGP));
  await ev(`ARS.CL.setLevel('comprehensive'); true`);
  check('old record: a reading collection finished whole shows done at Comprehensive', await ev(`(() => { openLang('lang.ix.la'); const c = document.querySelector('#lang-grid .set-card[data-id="lang.ix.la/prose"] .begin'); const r = !!c && c.classList.contains('is-done'); leaveLang(); return r; })()`));
  check('old record: a finished deck shows done', await ev(`!!document.querySelector('#home-acts .set-card[data-id="xi.modern"] .begin.is-done')`));

  /* 7. the drop-downs: one line under the opening paragraph, labeled, large, keyboard, focus */
  await ev(`GP.setPath('practice'); ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  await b.send('Emulation.setFocusEmulationEnabled', { enabled:true });   /* a headless window has no focus of its own, so :focus would never apply */
  const dd = await ev(`(() => {
    const ids = ['level-select', 'path-select', 'lang-select'];
    const els = ids.map(id => document.getElementById(id));
    return {
      native: els.every(e => e && e.tagName === 'SELECT'),
      labels: ids.map(id => (document.querySelector('label[for="' + id + '"]') || {}).textContent),
      labelAbove: ids.every(id => { const l = document.querySelector('label[for="' + id + '"]').getBoundingClientRect(), e = document.getElementById(id).getBoundingClientRect(); return l.bottom <= e.top + 1; }),
      tops: els.map(e => Math.round(e.getBoundingClientRect().top)),
      lefts: els.map(e => Math.round(e.getBoundingClientRect().left)),
      sizes: els.map(e => [e.getBoundingClientRect().height, parseFloat(getComputedStyle(e).fontSize)]),
      afterIntro: document.querySelector('.intro-note').nextElementSibling.classList.contains('choice-bar'),
      descAfter: document.querySelector('.choice-bar').nextElementSibling.id === 'level-desc',
      levels: [...document.getElementById('level-select').options].map(o => o.textContent),
      langs: [...document.getElementById('lang-select').options].map(o => o.textContent)
    };
  })()`);
  check('drop-downs: three native selects labeled Level, Path, and Language, the labels above them', dd.native && dd.labels.join(',') === 'Level,Path,Language' && dd.labelAbove, JSON.stringify(dd.labels));
  check('drop-downs: directly under the opening paragraph, in the order Level, Path, Language, on one line', dd.afterIntro && dd.tops[0] === dd.tops[1] && dd.tops[1] === dd.tops[2] && dd.lefts[0] < dd.lefts[1] && dd.lefts[1] < dd.lefts[2], JSON.stringify(dd.tops));
  check('drop-downs: at least 48 px high with type of at least 18 px', dd.sizes.every(([h, f]) => h >= 48 && f >= 18), JSON.stringify(dd.sizes));
  check('drop-downs: the four levels, and the six languages with All languages', dd.levels.join(',') === 'Essentials,Proficient,Mastered,Comprehensive' && dd.langs.length === 7 && dd.langs[6] === 'All languages', dd.langs.join(','));
  check('drop-downs: the level\'s description is one sentence below the row', dd.descAfter && await ev(`(t => /^[^.]*\\.$/.test(t.replace(/\\.\\.\\./g, '')) && t.startsWith('The essentials of grammar'))(document.getElementById('level-desc').textContent)`));
  await ev(`ARS.CL.setLevel('proficient'); window.scrollTo(0, 0); true`);
  check('drop-downs: the Proficient description names the common errors', await ev(`/the rest of construction, the common errors, the tropes/.test(document.getElementById('level-desc').textContent)`));
  /* All languages at every level in Free Practice, with its line under the drop-downs */
  const allRows = [];
  for (const lv of LEVELS){
    allRows.push(await ev(`(() => { ARS.CL.setLevel('${lv}'); ARS.CL.setLang('all'); const n = document.getElementById('lang-all-note');
      const r = { lv:'${lv}', option:[...document.getElementById('lang-select').options].some(o => o.value === 'all'), chosen:document.getElementById('lang-select').value === 'all',
        note:!n.hidden && n.textContent === 'Every language’s material for this level is shown.' };
      ARS.CL.setLang('en'); r.hiddenAfter = n.hidden; return r; })()`));
  }
  check('All languages: offered and chosen at every level in Free Practice', allRows.every(r => r.option && r.chosen), JSON.stringify(allRows));
  check('All languages: the line under the drop-downs shows with it, and only with it', allRows.every(r => r.note && r.hiddenAfter), JSON.stringify(allRows));
  /* quiet styling: a plain frame, the page's text color, no colored fill, in both themes */
  for (const dark of [false, true]){
    await ev(`setDark(${dark})`); await b.sleep(700);   /* the page's colors change over 0.25 s */
    const q = await ev(`(() => { const b = getComputedStyle(document.body); return ['level-select', 'path-select', 'lang-select'].map(id => { const cs = getComputedStyle(document.getElementById(id)); return [cs.backgroundColor, cs.color === b.color]; }); })()`);
    check('drop-downs ' + (dark ? 'dark' : 'light') + ': no colored fill, the page\'s text color', q.every(([bg, ink]) => bg === 'rgba(0, 0, 0, 0)' && ink), JSON.stringify(q));
  }
  await ev(`setDark(false)`);
  await ev(`ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  const key = async (k, extra) => {
    const vk = { ArrowDown:40, ArrowUp:38, Tab:9, Enter:13, m:77 }[k];
    await b.send('Input.dispatchKeyEvent', Object.assign({ type:'keyDown', key:k, code:k, windowsVirtualKeyCode:vk }, extra || {}));
    await b.send('Input.dispatchKeyEvent', { type:'keyUp', key:k, code:k, windowsVirtualKeyCode:vk });
    await b.sleep(250);
  };
  await ev(`document.getElementById('level-select').focus(); true`);
  check('drop-downs: a visible focus outline of at least 3 px', await ev(`(() => { const cs = getComputedStyle(document.activeElement); return document.activeElement.id === 'level-select' && cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 3; })()`));
  await key('Tab');
  const t1 = await ev(`document.activeElement.id`);
  await key('Tab');
  const t2 = await ev(`document.activeElement.id`);
  check('drop-downs: Tab goes from Level to Path to Language', t1 === 'path-select' && t2 === 'lang-select', t1 + ' ' + t2);
  /* The keyboard on a closed native select: typing a letter chooses the matching option on every platform.
     The arrow keys are the browser's own: on Windows and Linux they change the option in place; on macOS they open
     the list, where the arrows and Enter choose. Headless Chrome on macOS draws no list, so only the first case
     can be driven here; it is tried, and the result is printed. */
  await ev(`document.getElementById('level-select').focus(); true`);
  await key('m', { text:'m' });
  check('drop-downs: typing "m" on the focused Level drop-down chooses Mastered', await ev(`ARS.CL.current() === 'mastered' && document.getElementById('level-select').value === 'mastered'`), await ev(`ARS.CL.current()`));
  await ev(`ARS.CL.setLevel('essentials'); document.getElementById('level-select').focus(); true`);
  await key('ArrowDown');
  const arrow = await ev(`ARS.CL.current()`);
  console.log(arrow === 'proficient' ? 'Arrow keys: the down arrow chose Proficient in place.' : 'Arrow keys: the down arrow did not change the option in place (on macOS it opens the native list, which headless Chrome does not draw).');
  await ev(`ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  for (const w of [1100, 390]) {
    await b.size(w, 900); await b.sleep(250);
    check('no sideways scrolling at ' + w + ' px', await ev(`document.documentElement.scrollWidth <= window.innerWidth`));
    if (w === 390) {
      const ph = await ev(`['level-select', 'path-select', 'lang-select'].map(id => { const e = document.getElementById(id), r = e.getBoundingClientRect(); return [Math.round(r.top), r.height, parseFloat(getComputedStyle(e).fontSize)]; })`);
      check('drop-downs at 390 px: on separate lines, not shrunk', ph[0][0] < ph[1][0] && ph[1][0] < ph[2][0] && ph.every(([, h, f]) => h >= 48 && f >= 18), JSON.stringify(ph));
    }
    if (SHOTS) for (const dark of [false, true]) { await ev(`setDark(${dark}); window.scrollTo(0, 0)`); await b.sleep(250); await b.shot(path.join(SHOTS, `levels-${w}-${dark ? 'dark' : 'light'}.png`)); }
  }
  await b.size(1100, 900);
  await ev(`setDark(false)`);

  /* sizes */
  const NAME = { en:'English', la:'Latin', grc:'Greek', es:'Spanish', de:'German', fr:'French' };
  console.log('Size of each level with one language (general course + that language):');
  sizes.forEach(r => console.log(`  ${NAME[r.code].padEnd(8)} ${r.lv.padEnd(14)} decks ${String(r.decks).padStart(3)}  cards ${String(r.cards).padStart(4)}  sets ${String(r.sets).padStart(3)}${r.gen ? ' (' + r.gen + ' generated)' : ''}  items ${r.items}`));

  check('no console errors', b.errors.length === 0, b.errors.slice(0, 3).join(' | '));
  console.log(`${passes} checks passed, ${fails.length} failed, ${b.errors.length} page errors.`);
  fails.forEach(f => console.log('FAIL: ' + f));
  b.errors.forEach(e => console.log('ERROR: ' + e));
  b.close();
  process.exit(fails.length || b.errors.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
