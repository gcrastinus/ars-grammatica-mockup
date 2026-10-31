#!/usr/bin/env node
/* Checks the course levels (levels.js, data/tiers.js) end to end in headless Chrome:
     node test/course-levels-check.js [--base=https://...] [--shots=/path/to/dir]
   1. A first visit opens on Essentials, Free Practice, and English.
   2. Every deck, exercise set, and review in the course has a line in data/tiers.js (or follows its deck).
   3. For each level and each language (and All languages, and two sets of several languages), the home page and every language screen show exactly
      the decks, exercises, and reviews whose level is at or below the level chosen, computed here from
      data/tiers.js alone; reviews give only the questions on open decks, staged sets only the open stages,
      and the reading collections only the open passages.
   4. Switching Essentials to Mastered and back keeps every record and the Guided Path step, and the
      Free Practice place.
   5. An old course record (from before the levels) and an old Guided record still load, unchanged.
   6. The saved level, path, and set of languages come back on the next visit; a record saved with one language
      (before several could be chosen) loads as that language. On the Guided Path several languages are required
      together, a language dropped and chosen again keeps its place, and All languages falls back to English with a line.
   7. Under the opening paragraph, a thin rule and a centered column of three explained rows (Level, Path, Language),
      each with its label and sentence on the left and its menu on the right; on a phone each row stacks. The menus are
      custom lists in the course's type and colors (light and dark), worked by the keyboard (Enter, Space, the arrows,
      Home, End, a letter, Escape, Tab) with a 3 px focus outline and the listbox roles; the Language menu takes
      several languages by its rules, and its button names the choice. The page opens at the top; going back to a
      level brings the last tile opened there into view.
   8. The box "Using the Guided Path" is closed, opens from the keyboard, and has 17 px text; the
      page never says "mastery level" or "How to Proceed."
   9. No console errors.
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
  const shown = id => `document.querySelector('#${id} .choice-btn-text').textContent`;
  check('first visit: Essentials is shown on the Level menu', await ev(`${shown('level-btn')} === 'Essentials' && ARS.CL.current() === 'essentials'`));
  check('first visit: Free Practice is shown on the Path menu', await ev(`!GP.isGuided() && ${shown('path-btn')} === 'Free Practice'`));
  check('first visit: English is shown on the Language menu', await ev(`${shown('lang-btn')} === 'English' && ARS.CL.langs().join() === 'en'`));
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
    for (const lang of LANGS.concat(['all', 'en+la', 'fr+grc+de'])){
      await ev(`ARS.CL.setLevel('${lv}'); ARS.CL.setLangs(${JSON.stringify(lang.split('+'))}); true`);
      const got = await ev(`(() => ({
        tiles: [...document.querySelectorAll('#home-acts .set-card')].map(c => c.dataset.id),
        exlinks: [...document.querySelectorAll('#home-acts .set-card')].filter(c => c.querySelector('.ex-link')).map(c => c.dataset.id),
        bars: [...document.querySelectorAll('#home-acts .lang-bar')].map(x => ({ bar:x.dataset.langbar, screens:[...x.querySelectorAll('button')].map(bt => bt.dataset.screen) }))
      }))()`);
      const wantTiles = expectAll.main.filter(x => x.k <= li).map(x => x.id);
      const wantEx = expectAll.main.filter(x => x.k <= li && x.ex).map(x => x.id);
      if (JSON.stringify(got.tiles) !== JSON.stringify(wantTiles)) mismatches.push(`${lv}/${lang} home tiles: got ${got.tiles.length}, want ${wantTiles.length}`);
      if (JSON.stringify(got.exlinks) !== JSON.stringify(wantEx)) mismatches.push(`${lv}/${lang} home Exercise buttons`);
      const langs = lang === 'all' ? LANGS : lang.split('+');
      /* the buttons of each bar keep the course's order of languages */
      if (got.bars.some(x => { const c = x.screens.map(sid => LANGS.indexOf(sid.split('.').pop())); return c.some((v, i) => i && v < c[i - 1]); })) mismatches.push(`${lv}/${lang} language order`);
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
  check('each level shows exactly its decks, exercises, and reviews, for every language, All languages, and several languages, in the course\'s order', mismatches.length === 0, mismatches.slice(0, 6).join('; '));

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
  check('review: Essentials gives only the Sign and Symbol questions of the Section I review', L.essentials.review === 22 && L.essentials.reviewDecks === 'i.sign', JSON.stringify(L.essentials));
  check('review: Comprehensive gives the whole Section I review', L.comprehensive.review === 123);
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
  const optVals = id => `[...document.querySelectorAll('#${id} [role="option"]')].map(o => o.dataset.value)`;
  check('the Guided Path offers no All languages on the Language menu', await ev(`${optVals('lang-list')}.join() === 'en,la,grc,es,de,fr'`), await ev(`${optVals('lang-list')}.join()`));
  /* several languages on the Guided Path: the exercise sets of each are required, in the course's order */
  const reqOf = async codes => ev(`(() => { ARS.CL.setLangs(${JSON.stringify(codes)}); return GP.tiers.find(t => t.key === 'ii').required; })()`);
  const rEn = await reqOf(['en']), rLa = await reqOf(['la']), rBoth = await reqOf(['la', 'en']);
  const general = rLa.filter(id => id.indexOf('lang.') !== 0);
  check('Guided, English and Latin: the sets of both languages are required, English first', JSON.stringify(rBoth) === JSON.stringify(general.concat(rEn.filter(id => id.indexOf('lang.') === 0), rLa.filter(id => id.indexOf('lang.') === 0))) && rBoth.some(id => /^lang\.ii\.en\//.test(id)) && rBoth.some(id => /^lang\.ii\.la\//.test(id)), rBoth.join(','));
  check('Guided, English and Latin: the path heading names both languages', await ev(`(() => { GP.openProgress(); const t = document.getElementById('scr-prog').textContent; document.getElementById('prog-back').click(); return /The Path: Essentials, English and Latin/.test(t); })()`));
  await day(2); await sitting('lang.ii.la/syllable-ex'); await day(3); await sitting('lang.ii.la/syllable-ex'); await ev(`goHome()`);
  check('Guided: the Latin syllable set is passed with English and Latin chosen', await ev(`GP.stateOf('lang.ii.la/syllable-ex')`) === 'passed');
  await ev(`ARS.CL.toggleLang('la'); true`);
  const dropped = await ev(`({ langs:ARS.CL.langs().join(), req:GP.tiers.find(t => t.key === 'ii').required.join() })`);
  await ev(`ARS.CL.toggleLang('la'); true`);
  check('Guided: Latin dropped leaves only English required, and chosen again keeps its pass', dropped.langs === 'en' && !/lang\.ii\.la/.test(dropped.req) && await ev(`ARS.CL.langs().join() === 'en,la' && GP.stateOf('lang.ii.la/syllable-ex') === 'passed' && GP.tiers.find(t => t.key === 'ii').required.includes('lang.ii.la/syllable-ex')`), JSON.stringify(dropped));
  await day(0);
  check('Guided: the star state is called Confirmed', await ev(`GP.config && typeof GP.stateOf === 'function'`) && !(await ev(`/★ Mastered/.test(document.body.textContent)`)));

  /* 6. the choices come back on the next visit */
  await ev(`ARS.CL.setLevel('proficient'); ARS.CL.setLangs(['grc', 'la']); true`);
  await ev(`openDeck('ii.voice')`); await b.sleep(500); await ev(`goHome(); window.scrollTo(0, 400); true`);   /* a place kept at Proficient */
  await b.goto('index.html'); await ready();
  check('reload: Proficient, Guided Path, and Latin and Greek come back', await ev(`ARS.CL.current() === 'proficient' && GP.isGuided() && ARS.CL.langs().join() === 'la,grc' && ${shown('level-btn')} === 'Proficient' && ${shown('lang-btn')} === 'Latin, Greek' && ${shown('path-btn')} === 'Guided Path'`));
  check('reload: the page opens at the top, though a place is kept at this level', await ev(`window.scrollY === 0 && !!ARS.CL.place() && document.activeElement === document.body`));
  await ev(`GP.setPath('practice'); ARS.CL.setLang('all'); true`);
  await b.goto('index.html'); await ready();
  check('reload: Free Practice with All languages comes back', await ev(`!GP.isGuided() && ARS.CL.lang() === 'all'`));
  await ev(`GP.setPath('guided')`);
  check('choosing the Guided Path with All languages takes English, and a line says so', await ev(`ARS.CL.langs().join() === 'en' && ARS.CL.view().langs.join() === 'en' && ${shown('lang-btn')} === 'English' && !document.getElementById('lang-fallback-note').hidden && document.getElementById('lang-fallback-note').textContent === 'All languages is not offered on the Guided Path, so English is chosen.'`));
  await ev(`ARS.CL.toggleLang('grc'); true`);
  check('the fallback line goes once a language is chosen', await ev(`document.getElementById('lang-fallback-note').hidden && ARS.CL.langs().join() === 'en,grc'`));
  /* a set of three in Free Practice comes back, with its line */
  await ev(`GP.setPath('practice'); ARS.CL.setLangs(['fr', 'en', 'grc']); true`);
  await b.goto('index.html'); await ready();
  check('reload: English, Greek, and French come back as "3 languages," and the Language row names them', await ev(`ARS.CL.langs().join() === 'en,grc,fr' && ${shown('lang-btn')} === '3 languages' && document.getElementById('lang-shown-note').hidden && document.getElementById('lang-expl').textContent === 'The material of English, Greek, and French is shown together, in the course’s usual order.'`), await ev(`document.getElementById('lang-expl').textContent`));
  /* a record saved with one language, before several could be chosen */
  const ONE = { dark:false, decks:{}, ex:{}, boxes:{}, view:{ level:'proficient', lang:'grc', lastLang:'grc' } };
  await ev(`localStorage.clear(); localStorage.setItem('ars-grammatica-course-v2', ${JSON.stringify(JSON.stringify(ONE))}); true`);
  await b.goto('index.html'); await ready(); await b.sleep(300);
  check('a record saved with one language loads as that language', await ev(`ARS.CL.current() === 'proficient' && ARS.CL.langs().join() === 'grc' && ${shown('lang-btn')} === 'Greek' && document.getElementById('lang-shown-note').hidden`));
  check('a record saved with one language is not changed by loading it', await ev(`(v => v.lang === 'grc' && v.lastLang === 'grc' && v.level === 'proficient' && !('langs' in v))(JSON.parse(localStorage.getItem('ars-grammatica-course-v2')).view || {})`));

  /* 5. an old record, from before the levels, loads unchanged */
  const OLD = { dark:false, decks:{ 'i.sign':{ opens:2, done:true, doneAt:1761000000000 }, 'iii.parts':{ opens:1, done:true, doneAt:1761100000000 }, 'lang.ix.la/prose':{ opens:1, done:true, doneAt:1761200000000 }, 'xi.traditions':{ opens:1, done:true, doneAt:1761300000000 }, 'xi.modern':{ opens:1, done:true, doneAt:1761250000000 } },
    ex:{ 'ii.ex.syllable':{ visits:3, done:true, doneAt:1761000000000 }, 'iii.ex.parts':{ visits:2, done:true, lvisits:{ 1:1, 2:1 }, level:2 } },
    boxes:{ 'syl-A01':{ box:2, dueAt:1761500000000, deck:'ii.syllable', section:'ii' } }, recitations:{ unlocked:{}, items:{ 'i.sign':{ text:'A sign is', at:1761000000000 } } } };
  const OLDGP = { schemaVersion:2, app:'ars-grammatica', settings:{ trackingEnabled:true }, recall:{}, sets:{ 'ii.ex.syllable':{ state:'mastered', seen:20, correct:20, history:[{ date:'2026-01-01', correct:true, item:'x', level:1 }], mhist:[{ date:'2026-01-02', correct:true, item:'y', level:1 }], passedOn:'2026-01-01', masteredOn:'2026-01-02' }, 'iii.ex.parts':{ state:'passed', seen:30, correct:30, history:[], mhist:[], passedOn:'2026-01-03', masteredOn:null } } };
  await ev(`localStorage.clear(); localStorage.setItem('ars-grammatica-course-v2', ${JSON.stringify(JSON.stringify(OLD))}); localStorage.setItem('ars-grammatica-guided', ${JSON.stringify(JSON.stringify(OLDGP))}); localStorage.setItem('ars-grammatica-path', 'guided'); true`);
  await b.goto('index.html'); await ready(); await b.sleep(500);
  const after = await ev(`JSON.parse(localStorage.getItem('ars-grammatica-course-v2'))`);
  check('old record: opens on Essentials with English, on the saved path', await ev(`ARS.CL.current() === 'essentials' && ARS.CL.lang() === 'en' && GP.isGuided()`));
  const keep = k => JSON.stringify(after[k]) === JSON.stringify(OLD[k]);
  const stripQuick = items => Object.fromEntries(Object.entries(items).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).filter(([f]) => !['quickDoneAt', 'fullDoneAt', 'lastKind'].includes(f)))]));
  /* the recitation menu marks a finished deck as open for recitation (recitation.js, as before the levels) */
  check('old record: decks, exercises, boxes, and recited texts unchanged', keep('decks') && keep('ex') && keep('boxes') && JSON.stringify(stripQuick(after.recitations.items)) === JSON.stringify(OLD.recitations.items), Object.keys(after).join(','));
  /* Quick then Full (Oct 30, 2026): an old recitation is marked Quick done once (quickDoneAt, with recitations.quickMigrated); nothing else changes. */
  check('old record: an old recitation counts as Quick done, once', after.recitations.quickMigrated === 1 && !!after.recitations.items['i.sign'].quickDoneAt);
  check('old record: only the new fields were added', Object.keys(after).every(k => k in OLD || ['view', 'levels', 'reciteNudges', 'xiModernRemoved'].includes(k)));
  check('old record: the old Guided record is read: a star stays a star', await ev(`GP.stateOf('ii.ex.syllable')`) === 'mastered');
  check('old record: a pass at Stage II counts at Proficient and above, and Essentials asks for Stage I', await ev(`(() => { const e = GP.stateOf('iii.ex.parts'); ARS.CL.setLevel('proficient'); const p = GP.stateOf('iii.ex.parts'); ARS.CL.setLevel('essentials'); return e !== 'passed' && e !== 'mastered' && p === 'passed'; })()`));
  check('old record: the Guided record is not rewritten by reading it', await ev(`localStorage.getItem('ars-grammatica-guided')`) === JSON.stringify(OLDGP));
  await ev(`ARS.CL.setLevel('comprehensive'); true`);
  check('old record: a reading collection finished whole shows done at Comprehensive', await ev(`(() => { openLang('lang.ix.la'); const c = document.querySelector('#lang-grid .set-card[data-id="lang.ix.la/prose"] .begin'); const r = !!c && c.classList.contains('is-done'); leaveLang(); return r; })()`));
  check('old record: a finished deck shows done', await ev(`!!document.querySelector('#home-acts .set-card[data-id="xi.traditions"] .begin.is-done')`));
  /* xi.modern was dissolved (30 Oct 2026): the old record of it stays in store.decks, shows nowhere, and does no harm */
  check('old record: the removed deck xi.modern has no button, and its record is kept', await ev(`!document.querySelector('[data-id="xi.modern"]')`) && !!after.decks['xi.modern']);

  /* 6a. phantom boxes of xi.modern review items are removed once; rxi-A09 moves to xi.traditions */
  const PH = { dark:false, decks:{ 'xi.traditions':{ opens:1, done:true, doneAt:1761300000000 }, 'xi.modern':{ opens:1, done:true, doneAt:1761300000000 } }, ex:{},
    boxes:{ 'rxi-B10':{ box:1, dueAt:1761400000000, deck:'xi.modern', section:'xi' }, 'rxi-C15':{ box:2, dueAt:1761400000000, deck:'xi.modern', section:'xi' },
            'rxi-A09':{ box:1, dueAt:1761400000000, deck:'xi.modern', section:'xi' }, 'rxi-A01':{ box:1, dueAt:4102444800000, deck:'xi.traditions', section:'xi' } } };
  await ev(`localStorage.clear(); localStorage.setItem('ars-grammatica-course-v2', ${JSON.stringify(JSON.stringify(PH))}); true`);
  await b.goto('index.html'); await ready(); await b.sleep(300);
  const ph = await ev(`JSON.parse(localStorage.getItem('ars-grammatica-course-v2'))`);
  check('phantom boxes: xi.modern items removed once, rxi-A09 moved to xi.traditions', ph.xiModernRemoved === true && !ph.boxes['rxi-B10'] && !ph.boxes['rxi-C15'] && ph.boxes['rxi-A09'].deck === 'xi.traditions' && ph.boxes['rxi-A01'].deck === 'xi.traditions', JSON.stringify(ph.boxes));
  /* a box tagged xi.modern after the cleanup (as by an old tab) is not removed again */
  await ev(`(() => { const s = JSON.parse(localStorage.getItem('ars-grammatica-course-v2')); s.boxes['rxi-B11'] = { box:1, dueAt:1, deck:'xi.modern', section:'xi' }; localStorage.setItem('ars-grammatica-course-v2', JSON.stringify(s)); return true; })()`);
  await b.goto('index.html'); await ready(); await b.sleep(300);
  check('phantom boxes: the cleanup runs only once', await ev(`!!JSON.parse(localStorage.getItem('ars-grammatica-course-v2')).boxes['rxi-B11']`));
  await ev(`localStorage.clear(); localStorage.setItem('ars-grammatica-course-v2', ${JSON.stringify(JSON.stringify(OLD))}); localStorage.setItem('ars-grammatica-guided', ${JSON.stringify(JSON.stringify(OLDGP))}); localStorage.setItem('ars-grammatica-path', 'guided'); true`);
  await b.goto('index.html'); await ready(); await b.sleep(300);

  /* 7. the rows and the menus */
  await ev(`GP.setPath('practice'); ARS.CL.setLevel('essentials'); ARS.CL.setLang('en'); window.scrollTo(0, 0); true`);
  await b.send('Emulation.setFocusEmulationEnabled', { enabled:true });   /* a headless window has no focus of its own, so :focus would never apply */
  const EXPL = {
    level:'How much of the course to study. Each level adds to the one before it, from the basics to the whole course.',
    path:'Free Practice opens any exercise you like. The Guided Path takes the exercises in order, tells you when each is passed, and brings them back for review.',
    lang:'English and Latin run through the course. Add Greek, Spanish, German, or French as you wish, one or several.'
  };
  const lay = await ev(`(() => {
    const keys = ['level', 'path', 'lang'], px = v => parseFloat(v);
    const probe = document.createElement('div'); probe.style.color = 'var(--wine)'; document.body.appendChild(probe); const wine = getComputedStyle(probe).color; probe.remove();
    const intro = document.querySelector('.intro-note'), rule = intro.nextElementSibling, col = rule.nextElementSibling;
    const rows = [...col.querySelectorAll('.choice-row')];
    const main = intro.getBoundingClientRect(), c = col.getBoundingClientRect();
    return {
      rule: rule.tagName === 'HR' && px(getComputedStyle(rule).borderTopWidth) <= 1.5 && rule.getBoundingClientRect().top - main.bottom >= 12,
      colClass: col.className, rows: rows.length,
      colWidth: c.width, colEm: c.width / px(getComputedStyle(col).fontSize), centered: Math.abs((c.left + c.right) / 2 - (main.left + main.right) / 2) < 2, narrower: c.width < main.width,
      rowRules: rows.slice(1).every(r => px(getComputedStyle(r).borderTopWidth) > 0 && px(getComputedStyle(r).borderTopWidth) <= 1.5),
      items: keys.map((k, i) => {
        const row = rows[i], lab = document.getElementById(k + '-label'), ex = document.getElementById(k + '-expl'), btn = document.getElementById(k + '-btn');
        const lr = lab.getBoundingClientRect(), br = btn.getBoundingClientRect(), rr = row.getBoundingClientRect(), ls = getComputedStyle(lab), bs = getComputedStyle(btn);
        return { inRow: row.contains(lab) && row.contains(ex) && row.contains(btn), label: lab.textContent, expl: ex.textContent, explPx: px(getComputedStyle(ex).fontSize),
          display: /Caslon Display/.test(ls.fontFamily), accent: ls.color === wine,
          leftRight: lr.right <= br.left, rightEdge: Math.abs(br.right - rr.right) < 1.5, width: br.width, widthEm: br.width / px(bs.fontSize), h: br.height, f: px(bs.fontSize),
          tag: btn.tagName, popup: btn.getAttribute('aria-haspopup'), expanded: btn.getAttribute('aria-expanded'), labelled: btn.getAttribute('aria-labelledby') };
      }),
      after: [col.nextElementSibling.className, col.nextElementSibling.nextElementSibling.id, col.nextElementSibling.nextElementSibling.nextElementSibling.id],
      native: document.querySelectorAll('#scr-home select').length
    };
  })()`);
  check('layout: a thin rule after a little space under the opening paragraph, then the column of rows', lay.rule && /choice-rows/.test(lay.colClass) && lay.rows === 3, JSON.stringify([lay.rule, lay.colClass, lay.rows]));
  check('layout: the column is narrower than the main text, about 32em, and centered', lay.narrower && lay.centered && lay.colEm > 30 && lay.colEm <= 32.5, lay.colWidth + ' px, ' + lay.colEm.toFixed(1) + ' em');
  check('layout: the rows are separated by thin rules', lay.rowRules);
  check('layout: the rows are Level, Path, Language, each with its own sentence', lay.items.map(x => x.label).join() === 'Level,Path,Language' && lay.items.every((x, i) => x.inRow && (i === 0 ? x.expl.startsWith('Essentials teaches ') : i === 1 ? x.expl.startsWith('Free Practice opens ') : x.expl.length > 20)), JSON.stringify(lay.items.map(x => x.expl)));
  check('layout: the labels in the display type and the accent color; the sentences at least 17 px', lay.items.every(x => x.display && x.accent && x.explPx >= 17), JSON.stringify(lay.items.map(x => [x.display, x.accent, x.explPx])));
  check('layout: each menu on the right, at the right edge, about 11.5em wide', lay.items.every(x => x.leftRight && x.rightEdge && x.widthEm > 11 && x.widthEm < 12), JSON.stringify(lay.items.map(x => [x.leftRight, x.rightEdge, x.widthEm.toFixed(2)])));
  check('menus: at least 44 px high and smaller than the old 52 px drop-downs, with type of at least 18 px', lay.items.every(x => x.h >= 44 && x.h <= 46 && x.f >= 18), JSON.stringify(lay.items.map(x => [x.h, x.f])));
  check('menus: buttons that open lists, with no native select on the page', lay.native === 0 && lay.items.every(x => x.tag === 'BUTTON' && x.popup === 'listbox' && x.expanded === 'false' && /-label /.test(x.labelled)));
  check('layout: a closing rule, then the level\'s description and the notes, follow the rows', /choice-rule-end/.test(lay.after[0]) && lay.after[1] === 'level-desc' && lay.after[2] === 'lang-all-note', lay.after.join());
  check('layout: the level\'s description is one sentence', await ev(`(t => /^[^.]*\\.$/.test(t) && t.startsWith('The essentials of grammar'))(document.getElementById('level-desc').textContent)`));
  await ev(`ARS.CL.setLevel('proficient'); window.scrollTo(0, 0); true`);
  check('layout: the Proficient description names the common errors', await ev(`/the rest of construction, the common errors, the tropes/.test(document.getElementById('level-desc').textContent)`));
  await ev(`ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  /* the sentence beside each menu follows the choice (28 Oct 2026): one plain sentence for each level, saying what it adds */
  const lvText = await ev(`['essentials', 'proficient', 'mastered', 'comprehensive'].map(k => { ARS.CL.setLevel(k); return document.getElementById('level-expl').textContent; })`);
  await ev(`ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  check('Level row: one sentence for each level, naming what it teaches or adds', lvText.length === 4 && lvText.every(t => /^[^.]*\.$/.test(t) && !/^\w+: /.test(t)) && /^Essentials teaches /.test(lvText[0]) && /^Proficient adds /.test(lvText[1]) && /^Mastered adds /.test(lvText[2]) && /^Comprehensive adds /.test(lvText[3]), JSON.stringify(lvText));
  check('Path row and Free Practice note: the note does not repeat the Path sentence', await ev(`(p => p === 'Free Practice opens every exercise of this level, in any order, and does not judge any exercise as passed.' && !/Every exercise of this level is open/.test(document.getElementById('guided-note').textContent) && /^The Guided Path opens the exercises of the level in the order of the sections/.test(document.getElementById('guided-note').textContent))(document.getElementById('path-expl').textContent)`));
  await ev(`GP.setPath('guided'); ARS.CL.setLangs(['en', 'grc']); true`);
  check('Path and Language rows on the Guided Path: the path described, and the exercises of each language required', await ev(`/^The Guided Path opens the exercises of this level/.test(document.getElementById('path-expl').textContent) && document.getElementById('lang-expl').textContent === 'The material of English and Greek is shown together, in the course’s usual order. On the Guided Path, the exercises of each of these languages are required.'`), await ev(`document.getElementById('lang-expl').textContent`));
  await ev(`ARS.CL.setLangs(['grc']); true`);
  check('Language row on the Guided Path with one language names its exercises', await ev(`document.getElementById('lang-expl').textContent === 'Greek is used where it shows something distinctive. On the Guided Path, the Greek exercises are required.'`), await ev(`document.getElementById('lang-expl').textContent`));
  await ev(`ARS.CL.setLangs(['en', 'la', 'grc', 'es', 'de']); ARS.CL.toggleLang('fr'); true`);
  check('on the Guided Path, six languages checked one by one stay six (All languages is not offered there)', await ev(`ARS.CL.langs().length === 6 && ARS.CL.view().langs[0] !== 'all'`));
  await ev(`GP.setPath('practice'); ARS.CL.setLang('en'); window.scrollTo(0, 0); true`);

  /* the keyboard */
  const KEYS = { ArrowDown:[40, 'ArrowDown'], ArrowUp:[38, 'ArrowUp'], Tab:[9, 'Tab'], Enter:[13, 'Enter'], Escape:[27, 'Escape'], Home:[36, 'Home'], End:[35, 'End'], ' ':[32, 'Space'] };
  const key = async k => {
    const [vk, code] = KEYS[k] || [k.toUpperCase().charCodeAt(0), 'Key' + k.toUpperCase()];
    const text = k.length === 1 ? { text:k } : k === 'Enter' ? { text:'\r' } : {};
    await b.send('Input.dispatchKeyEvent', Object.assign({ type:'keyDown', key:k, code, windowsVirtualKeyCode:vk }, text));
    await b.send('Input.dispatchKeyEvent', { type:'keyUp', key:k, code, windowsVirtualKeyCode:vk });
    await b.sleep(150);
  };
  const st = k => ev(`(() => { const l = document.getElementById('${k}-list'), a = document.getElementById(l.getAttribute('aria-activedescendant') || 'x');
    return { open:!l.hidden, expanded:document.getElementById('${k}-btn').getAttribute('aria-expanded'), focus:document.activeElement.id, active:a ? a.dataset.value : '' }; })()`);
  await ev(`document.getElementById('level-btn').focus(); true`);
  check('menus: a focus outline of at least 3 px on the button', await ev(`(() => { const cs = getComputedStyle(document.activeElement); return document.activeElement.id === 'level-btn' && cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 3; })()`));
  await key('Enter');
  let k1 = await st('level');
  check('keyboard: Enter opens the list on the chosen item, with the focus in the list', k1.open && k1.expanded === 'true' && k1.focus === 'level-list' && k1.active === 'essentials', JSON.stringify(k1));
  await key('ArrowDown'); const k2 = await st('level');
  await key('End'); const k3 = await st('level');
  await key('Home'); const k4 = await st('level');
  check('keyboard: the down arrow moves, End and Home jump', k2.active === 'proficient' && k3.active === 'comprehensive' && k4.active === 'essentials', [k2.active, k3.active, k4.active].join());
  check('keyboard: the item under the cursor has an outline of at least 3 px', await ev(`(() => { const o = document.querySelector('#level-list .is-active'); const cs = getComputedStyle(o); return parseFloat(cs.outlineWidth) >= 3 && cs.outlineStyle !== 'none'; })()`));
  await key('m'); const k5 = await st('level');
  check('keyboard: typing "m" jumps to Mastered', k5.active === 'mastered', k5.active);
  await key('Enter'); const k6 = await st('level');
  check('keyboard: Enter chooses it, closes the list, and returns the focus to the button', await ev(`ARS.CL.current()`) === 'mastered' && !k6.open && k6.expanded === 'false' && k6.focus === 'level-btn' && await ev(`${shown('level-btn')} === 'Mastered'`), JSON.stringify(k6));
  await key(' '); const k7 = await st('level');
  await key('ArrowUp'); await key('Escape'); const k8 = await st('level');
  check('keyboard: Space opens the list; Escape closes it without a change and returns to the button', k7.open && k7.active === 'mastered' && !k8.open && k8.focus === 'level-btn' && await ev(`ARS.CL.current()`) === 'mastered', JSON.stringify([k7, k8]));
  await key('ArrowDown'); await key('Tab'); const k9 = await st('level');
  check('keyboard: Tab closes the list and moves on to the Path menu', !k9.open && k9.focus === 'path-btn', JSON.stringify(k9));
  await key('Tab');
  check('keyboard: Tab goes from Path to Language', await ev(`document.activeElement.id`) === 'lang-btn');
  await ev(`document.getElementById('level-btn').focus(); true`);
  await key('c'); const k10 = await st('level'); await key('Escape');
  check('keyboard: a letter on the closed button opens the list at the matching item', k10.open && k10.active === 'comprehensive', JSON.stringify(k10));
  await ev(`ARS.CL.setLevel('essentials'); true`);
  /* the Language menu by keyboard: several languages; Enter and Space check and uncheck and keep the list open */
  await ev(`document.getElementById('lang-btn').focus(); true`);
  await key('ArrowDown'); await key('ArrowDown'); await key('Enter');
  const m1 = await ev(`({ langs:ARS.CL.langs().join(), open:!document.getElementById('lang-list').hidden, focus:document.activeElement.id, multi:document.getElementById('lang-list').getAttribute('aria-multiselectable'),
    sel:[...document.querySelectorAll('#lang-list [role="option"]')].filter(o => o.getAttribute('aria-selected') === 'true').map(o => o.dataset.value).join(), btn:${shown('lang-btn')} })`);
  check('Language by keyboard: Enter checks Latin beside English; the list stays open and announces both', m1.langs === 'en,la' && m1.open && m1.focus === 'lang-list' && m1.multi === 'true' && m1.sel === 'en,la' && m1.btn === 'English, Latin', JSON.stringify(m1));
  await key('g'); await key(' ');
  check('Language by keyboard: "g" and Space check Greek; the button says "3 languages"', await ev(`ARS.CL.langs().join() === 'en,la,grc' && ${shown('lang-btn')} === '3 languages'`), await ev(`ARS.CL.langs().join()`));
  await key('Escape');
  check('Language by keyboard: Escape closes the list and returns to the button', await ev(`document.getElementById('lang-list').hidden && document.activeElement.id === 'lang-btn'`));

  /* the rules of the Language menu, worked by clicking the items */
  const tick = v => ev(`(() => { const btn = document.getElementById('lang-btn'); if (document.getElementById('lang-list').hidden) btn.click(); document.getElementById('lang-opt-${v}').click(); return ARS.CL.langs().join(); })()`);
  await ev(`ARS.CL.setLang('en'); true`);
  check('rule: unchecking the last language does nothing', await tick('en') === 'en');
  check('rule: a second language is added beside the first, and the Language row names both', await tick('fr') === 'en,fr' && await ev(`document.getElementById('lang-expl').textContent === 'The material of English and French is shown together, in the course’s usual order.' && document.getElementById('lang-shown-note').hidden`));
  check('rule: All languages clears every language', await tick('all') === 'all' && await ev(`${shown('lang-btn')} === 'All languages' && document.getElementById('lang-shown-note').hidden && document.getElementById('lang-all-note').hidden && /^The material of all six languages, English, Latin, Greek, Spanish, German, and French, is shown together/.test(document.getElementById('lang-expl').textContent) && document.querySelectorAll('#lang-list [aria-selected="true"]').length === 1`));
  check('rule: unchecking All languages, the last choice, does nothing', await tick('all') === 'all');
  check('rule: a language clears All languages', await tick('de') === 'de' && await ev(`document.getElementById('lang-all-note').hidden && document.querySelector('#lang-opt-all').getAttribute('aria-selected') === 'false'`));
  await tick('es'); await tick('la'); await tick('grc'); await tick('en');
  check('rule: five languages are listed in the course\'s order in the Language row', await ev(`document.getElementById('lang-expl').textContent === 'The material of English, Latin, Greek, Spanish, and German is shown together, in the course’s usual order.' && ${shown('lang-btn')} === '5 languages'`), await ev(`document.getElementById('lang-expl').textContent`));
  check('rule: unchecking one of several removes it', await tick('es') === 'en,la,grc,de');
  await tick('es');
  check('rule: on Free Practice, the sixth language checked one by one turns into All languages', await tick('fr') === 'all' && await ev(`${shown('lang-btn')} === 'All languages' && ARS.CL.view().langs.join() === 'all'`));
  await ev(`ARS.CL.closeMenu(); true`);
  /* All languages at every level in Free Practice, with its line */
  const allRows = [];
  for (const lv of LEVELS){
    allRows.push(await ev(`(() => { ARS.CL.setLevel('${lv}'); ARS.CL.setLang('all'); const n = document.getElementById('lang-expl');
      const r = { lv:'${lv}', option:!!document.getElementById('lang-opt-all'), chosen:document.getElementById('lang-opt-all').getAttribute('aria-selected') === 'true',
        note:/^The material of all six languages/.test(n.textContent) && document.getElementById('lang-all-note').hidden };
      ARS.CL.setLang('en'); r.hiddenAfter = n.textContent === 'English is used throughout the course.'; return r; })()`));
  }
  check('All languages: offered and chosen at every level in Free Practice', allRows.every(r => r.option && r.chosen), JSON.stringify(allRows));
  check('All languages: the Language row describes it, and only while it is chosen', allRows.every(r => r.note && r.hiddenAfter), JSON.stringify(allRows));
  await ev(`ARS.CL.setLevel('essentials'); true`);

  /* the styling of the buttons and the open lists, in both themes */
  const chroma = c => { const n = (c.match(/[\d.]+/g) || []).map(Number); const v = /^color\(/.test(c) ? n.slice(0, 3).map(x => x * 255) : n.slice(0, 3); return Math.max(...v) - Math.min(...v); };
  for (const dark of [false, true]){
    await ev(`setDark(${dark})`); await b.sleep(700);   /* the page's colors change over 0.25 s */
    const q = await ev(`(() => {
      const body = getComputedStyle(document.body), probe = document.createElement('div'); document.body.appendChild(probe);
      const tok = n => { probe.style.color = 'var(--' + n + ')'; return getComputedStyle(probe).color; };
      const card = tok('card'), frame = tok('frame'), wine = tok('wine'), sage = tok('sage'); probe.remove();
      const btns = ['level', 'path', 'lang'].map(k => { const cs = getComputedStyle(document.getElementById(k + '-btn')); return [cs.backgroundColor, cs.color === body.color, /Caslon Text/.test(cs.fontFamily)]; });
      document.getElementById('path-btn').click();
      const list = document.getElementById('path-list'), ls = getComputedStyle(list);
      const opts = [...list.querySelectorAll('[role="option"]')].map(o => { const r = o.getBoundingClientRect(), cs = getComputedStyle(o); return { h:r.height, f:parseFloat(cs.fontSize), bg:cs.backgroundColor, on:o.getAttribute('aria-selected') === 'true', mark:o.querySelector('.choice-mark').textContent, font:/Caslon Text/.test(cs.fontFamily) }; });
      const out = { btns, card, frame, wine, sage, listBg:ls.backgroundColor, listBorder:ls.borderTopColor, listBorderW:parseFloat(ls.borderTopWidth), shadow:ls.boxShadow, opts };
      ARS.CL.closeMenu(); return out;
    })()`);
    const th = dark ? 'dark' : 'light';
    check('menus ' + th + ': the buttons have no colored fill, the page\'s text color, and Caslon type', q.btns.every(([bg, ink, font]) => bg === 'rgba(0, 0, 0, 0)' && ink && font), JSON.stringify(q.btns));
    check('menus ' + th + ': the open list has the card background, the frame border, and a quiet shadow', q.listBg === q.card && q.listBorder === q.frame && q.listBorderW >= 1 && q.shadow !== 'none' && /0\.[1-4]\d*\)/.test(q.shadow), JSON.stringify([q.listBg, q.card, q.listBorder, q.frame, q.shadow]));
    check('menus ' + th + ': rows of at least 44 px with Caslon type of at least 18 px', q.opts.every(o => o.h >= 44 && o.f >= 18 && o.font), JSON.stringify(q.opts));
    const on = q.opts.find(o => o.on), off = q.opts.find(o => !o.on);
    check('menus ' + th + ': the chosen item has a check and a gentle tint, not a colored fill', on && on.mark === '✓' && off.mark === '' && on.bg !== off.bg && on.bg !== q.wine && on.bg !== q.sage && chroma(on.bg) <= chroma(q.card) + 12, JSON.stringify([on, off]));
  }
  await ev(`setDark(false)`);

  /* 8. the closed box */
  const box = await ev(`(() => {
    const d = document.getElementById('levels-help'), sm = d.querySelector('summary');
    const prev = [...document.querySelectorAll('#scr-home > *')], i = prev.indexOf(d);
    return { tag:d.tagName, open:d.open, title:sm.textContent, after:prev.indexOf(document.getElementById('level-desc')) < i && prev.indexOf(document.querySelector('.choice-rows')) < i,
      fonts:[...d.querySelectorAll('.levels-help-body p')].map(p => parseFloat(getComputedStyle(p).fontSize)), link:(document.querySelector('.intro-preface a[href="https://studiuminstitute.org/trivium/"]') || {}).textContent || '' };
  })()`);
  check('box: closed by default, titled "Using the Guided Path," below the rows and notes', box.tag === 'DETAILS' && !box.open && box.title === 'Using the Guided Path' && box.after, JSON.stringify(box));
  check('box: no paragraph on the levels, no quiz link, and nothing the menus already say', await ev(`(t => !/The levels of the course|A level chooses|printable quiz|opens the exercises in the order of the sections|exercises of every language you have chosen are required/.test(t) && /Your record is kept at every level\. But a higher level can open further stages/.test(t) && /Recitation Tablet/.test(t))(document.getElementById('levels-help').textContent)`));
  check('box: body text of at least 17 px; the link to Preface to the Trivium stands in the introduction', box.fonts.length >= 6 && box.fonts.every(f => f >= 17) && box.link === 'Preface to the Trivium', JSON.stringify(box.fonts));
  await ev(`document.querySelector('#levels-help summary').focus(); true`);
  await key('Enter');
  check('box: opens from the keyboard, with a focus outline of at least 3 px', await ev(`document.getElementById('levels-help').open && parseFloat(getComputedStyle(document.activeElement).outlineWidth) >= 3`));
  await key('Enter');
  check('box: closes again from the keyboard', await ev(`!document.getElementById('levels-help').open`));
  check('the page never says "mastery level" or "How to Proceed"', await ev(`!/mastery levels?|how to proceed/i.test(document.body.textContent)`));
  check('the box keeps the stages of an exercise apart from the levels of the course', await ev(`(t => /Stage I up to Stage IV/.test(t) && !/Level I\\b|Level IV/.test(t))(document.getElementById('levels-help').textContent)`));

  await ev(`ARS.CL.setLevel('essentials'); window.scrollTo(0, 0); true`);
  for (const w of [1100, 390]) {
    await b.size(w, 900); await b.sleep(250);
    check('no sideways scrolling at ' + w + ' px', await ev(`document.documentElement.scrollWidth <= window.innerWidth`));
    if (w === 390) {
      const ph = await ev(`['level', 'path', 'lang'].map(k => { const e = document.getElementById(k + '-btn'), r = e.getBoundingClientRect(), x = document.getElementById(k + '-expl').getBoundingClientRect(), row = e.closest('.choice-row').getBoundingClientRect(); return [x.bottom <= r.top + 1, Math.abs(r.width - row.width) < 1.5, r.height, parseFloat(getComputedStyle(e).fontSize)]; })`);
      check('at 390 px: each row stacks, the sentence above a full-width menu, not shrunk', ph.every(([below, full, h, f]) => below && full && h >= 44 && f >= 18), JSON.stringify(ph));
      const pl = await ev(`(() => { document.getElementById('lang-btn').click(); const l = document.getElementById('lang-list').getBoundingClientRect(), bt = document.getElementById('lang-btn').getBoundingClientRect(); ARS.CL.closeMenu(); return [Math.abs(l.left - bt.left) < 1.5 && Math.abs(l.right - bt.right) < 1.5, l.top >= bt.bottom]; })()`);
      check('at 390 px: the list opens full width under its button', pl[0] && pl[1], JSON.stringify(pl));
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
