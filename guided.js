'use strict';
/* ================================================================
   GUIDED PATH: gating by section, pass and mastery on the exercise pools, Today's Review,
   and Progress & Review. Follows the structure of Ars Rhetorica's guided.js, adapted to this course:

     order    = Sections I to XI open in the order of data/structure.js. Section I is open from the start.
                A section's exercises open when the required exercise sets of the section before are passed.
                A section with no required exercise set (I, IV, XI, and X while its Imitation set is optional)
                opens the next section when all of its study cards are finished.
     pass     = 9 of the last 10 answers correct, on at least 2 different days.
     mastered = a second pass on a later day: one sitting of 10 questions drawn from the whole pool,
                9 of 10 correct, on a day after the day of the first pass (★).
     reviews  = the course's own item-level boxes (practice.js, 1, 3, 7, 14, and 30 days) are untouched.
                Today's Review gathers the items that are due. The section reviews and the cumulative
                reviews stay as they are. Reviews never gate (except where one stands in for an exercise),
                and a missed review never closes anything, since gating uses "ever passed."

   Free Practice neither reads nor writes the Guided record. The course's own record
   (ars-grammatica-course-v2, with store.boxes) is left exactly as it was. The Guided record has its own
   versioned key and is written only once tracking is turned on. Every write re-reads the stored record first,
   so a hand-off between tabs (tab-lock.js) never loses data.
   Load after course.js and practice.js.
   ================================================================ */
(function(){

/* ---------------- CONFIG ---------------- */
const GPC = {
  STORAGE_KEY : 'ars-grammatica-guided',
  PATH_KEY    : 'ars-grammatica-path',      /* 'practice' | 'guided' */
  SCHEMA      : 2,   /* 2 (Oct 2026): history and mhist entries carry "level"; schema 1 is migrated on read */
  PASS_WINDOW : 10,
  PASS_CORRECT: 9,
  PASS_DAYS   : 2,
  MASTERY_SITTING: 10,                      /* questions in the mastery sitting */
  MASTERY_CORRECT: 9,
  MIN_POOL    : 40,                         /* a pool smaller than this still passes, but is listed for a content session */
  HISTORY_CAP : 300,
  RECALL_DELAY: 1,                          /* a section review is ready this many days after the section's exercises are passed */
  TODAY_CAP   : 20,                         /* questions in one Today's Review */
  /* Exercise sets that are supplementary: open with their section, never required to open the next one. */
  OPTIONAL    : ['x.ex.imitation', 'iii.ex.figure']
};

/* ---------------- the path, built from data/structure.js ----------------
   Built for the course level and the languages in force (levels.js): only the decks and exercise sets open at the
   level count, and the chosen languages' decks and exercise sets of each section are steps of that section, after the
   general ones, in the course's order of languages. Their exercise sets are required, like the general ones
   (Timothy, 27 Oct 2026). Rebuilt when the level, the languages, or the path changes. A language dropped and chosen
   again keeps its place, since every record is kept by exercise and by level. */
const plain = t => String(t == null ? '' : t).replace(/<[^>]*>/g, '');
const isOptional = id => GPC.OPTIONAL.indexOf(id) >= 0;
const TIERS = [], PREREQS = {}, INFO = {}, SETS = [], REQUIRED = [];
const CLx = () => ARS.CL;
function langStepsOf(sec){
  const codes = CLx().langs(), at = sc => codes.indexOf(sc.code);
  const sets = [], cards = [];
  Object.keys(ARS.languages || {}).map(k => ARS.languages[k])
    .filter(sc => sc && sc.section === sec.id && at(sc) >= 0 && sc.bar !== 'prelim')
    .sort((a, b) => at(a) - at(b))
    .forEach(sc => {
      CLx().screenItems(sc).forEach(it => {
        if (!it.built || it.kind !== 'study') return;
        cards.push(it.id);
        const ex = ARS.deckEx && ARS.deckEx[it.id];
        if (ex && !sets.some(s => s.id === ex)){
          const exIt = (sc.items || []).find(x => x.id === ex);
          sets.push({ id:ex, title:plain((exIt && exIt.title) || it.title), review:false });
        }
      });
    });
  return { sets, cards };
}
function rebuild(){
  TIERS.length = 0; SETS.length = 0; REQUIRED.length = 0;
  Object.keys(PREREQS).forEach(k => delete PREREQS[k]);
  Object.keys(INFO).forEach(k => delete INFO[k]);
  (ARS.structure || []).forEach(sec => {
    if (!sec.roman) return;
    const sets = [], reviews = [];
    let batch = [];
    const cards = [];
    sec.items.forEach(it => {
      if (!CLx().open(it.id)) return;
      if (it.kind === 'review'){ reviews.push({ id:it.id, title:plain(it.title), decks:batch }); batch = []; return; }
      const ex = ARS.deckEx && ARS.deckEx[it.id];
      if (ex && String(ex).indexOf('lang.') !== 0) sets.push({ id:ex, title:plain(it.title), review:false });
      if (it.built && !playerItem(it)){ batch.push(it.id); cards.push(it.id); }
    });
    const lx = langStepsOf(sec);
    lx.sets.forEach(s => sets.push(s));
    lx.cards.forEach(c => cards.push(c));
    if (!sets.length && !cards.length && !reviews.length) return;
    const required = sets.filter(s => !isOptional(s.id)).map(s => s.id);
    TIERS.push({ key:sec.id, roman:sec.roman, name:sec.name, sets:sets, reviews:reviews, required:required, cards:cards });
  });
  TIERS.forEach((t, i) => {
    const prev = i ? TIERS[i - 1] : null;
    t.sets.forEach(s => {
      INFO[s.id] = { kind:'set', tier:t, title:s.title, optional:isOptional(s.id) };
      PREREQS[s.id] = prev ? prev.required.slice() : [];
    });
    t.reviews.forEach(r => { INFO[r.id] = { kind:'review', tier:t, title:r.title, decks:r.decks }; });
  });
  TIERS.forEach(t => t.sets.forEach(s => SETS.push({ id:s.id, title:s.title, tier:t })));
  SETS.filter(s => !isOptional(s.id)).forEach(s => REQUIRED.push(s));
}
rebuild();

/* ---------------- storage, with in-memory fallback ---------------- */
let storageOK = true;
const mem = {};
function gpGet(k){
  try{ return window.localStorage.getItem(k); }
  catch(e){ storageOK = false; return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; }
}
function gpSet(k, v){
  try{ window.localStorage.setItem(k, v); }
  catch(e){ storageOK = false; mem[k] = v; notice(); }
}
function gpRemove(k){ try{ window.localStorage.removeItem(k); }catch(e){} delete mem[k]; }
function notice(){
  const n = $('gp-storage');
  if (n) n.hidden = !(!storageOK && path === 'guided');
}

/* dates as local calendar strings, YYYY-MM-DD (lexicographic order is chronological order) */
function dateStr(d){ return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function today(){ return dateStr(new Date()); }
function parseDate(s){ const p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDays(n, from){ const d = from ? parseDate(from) : new Date(); d.setDate(d.getDate() + n); return dateStr(d); }
function niceDate(s){ return parseDate(s).toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric' }); }
function esc2(s){ return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])); }

/* ---------------- the progress object (schema 2) ---------------- */
/* Schema 1 had no levels. Every old answer counts as Level I; passedOn and masteredOn are kept, so a pass stays a pass
   and a star stays a star. */
function migrate(o){
  if (!o || typeof o !== 'object' || !o.sets || typeof o.sets !== 'object') return o;
  if (o.schemaVersion === 1){
    Object.keys(o.sets).forEach(id => {
      const r = o.sets[id];
      if (!r || typeof r !== 'object') return;
      ['history', 'mhist'].forEach(k => { if (Array.isArray(r[k])) r[k].forEach(h => { if (h && h.level == null) h.level = 1; }); });
    });
    o.schemaVersion = 2;
  }
  return o;
}
function parseProg(raw){
  if (!raw) return null;
  try{
    const o = migrate(JSON.parse(raw));
    if (o && o.schemaVersion === GPC.SCHEMA && o.sets && typeof o.sets === 'object'){
      o.recall = (o.recall && typeof o.recall === 'object') ? o.recall : {};
      o.settings = o.settings || { trackingEnabled:false };
      return o;
    }
  }catch(e){ /* unreadable: leave it in place and start fresh in memory only */ }
  return null;
}
let prog = parseProg(gpGet(GPC.STORAGE_KEY));
function tracking(){ return !!(prog && prog.settings && prog.settings.trackingEnabled); }
function blank(){ return { state:'learning', seen:0, correct:0, history:[], mhist:[], passedOn:null, masteredOn:null }; }
function recOf(p, id){
  const r = p.sets[id] = p.sets[id] || blank();
  r.history = r.history || []; r.mhist = r.mhist || [];
  return r;
}
function freshProg(){ return { schemaVersion:GPC.SCHEMA, app:'ars-grammatica', settings:{ trackingEnabled:true }, sets:{}, recall:{} }; }
/* Every write starts from what is stored now, so another tab's changes are kept. */
function mutate(fn){
  const cur = parseProg(gpGet(GPC.STORAGE_KEY)) || prog || freshProg();
  fn(cur);
  prog = cur;
  gpSet(GPC.STORAGE_KEY, JSON.stringify(cur));
}

/* ---------------- path (separate key; nothing is written until a path is chosen) ---------------- */
let path = (gpGet(GPC.PATH_KEY) === 'guided') ? 'guided' : 'practice';
function guided(){ return path === 'guided'; }
function setPath(p){
  path = p;
  gpSet(GPC.PATH_KEY, p);
  if (ARS.CL) ARS.CL.onPath(p);
  reflectPath();
  buildHome();
}
function reflectPath(){ notice(); }   /* the Path menu on the home page is drawn by levels.js */

/* ---------------- set states and gating ---------------- */
/* A set without stages is passed (and confirmed) once, at every course level. A set with stages is passed at a
   course level when it was passed there (passedAt[level]), or when its answers at the stages open there meet the
   pass, or when the old pass (passedOn, at the set's own pass stage) lies within the stages open there. */
function lvKey(){ return ARS.CL ? ARS.CL.current() : 'comprehensive'; }
function capOf(id){ const L = lvOf(id); if (!L) return null; return Math.max(1, Math.min(L.top, ARS.CL ? ARS.CL.stageCap({ id:id, levels:L }) : L.top)); }
function passLv(id){ const L = lvOf(id); return L ? Math.min(L.pass, capOf(id)) : 1; }
function passedRec(r, id){
  if (!r) return false;
  const L = lvOf(id);
  if (!L) return !!(r.passedOn || r.masteredOn);
  const k = lvKey();
  if ((r.passedAt && r.passedAt[k]) || (r.masteredAt && r.masteredAt[k])) return true;
  if ((r.passedOn || r.masteredOn) && L.pass <= capOf(id)) return true;
  return meetsPass({ history:r.history || [] }, id);
}
function masteredRec(r, id){
  if (!r) return false;
  const L = lvOf(id);
  if (!L) return !!r.masteredOn;
  if (r.masteredAt && r.masteredAt[lvKey()]) return true;
  return !!(r.masteredOn && capOf(id) >= L.top);
}
function passDate(r, id){
  const k = lvKey();
  return (r.passedAt && r.passedAt[k]) || r.passedOn || null;
}
function everPassed(id){ return passedRec(prog && prog.sets && prog.sets[id], id); }
function everMastered(id){ return masteredRec(prog && prog.sets && prog.sets[id], id); }
/* A section is complete when its required exercise sets are passed; one with none, when its study cards are finished. */
function tierDone(t){ return t.required.length ? t.required.every(everPassed) : t.cards.every(deckDoneAt); }
function unlocked(id){
  const i = TIERS.indexOf(INFO[id].tier);
  return i <= 0 || tierDone(TIERS[i - 1]);
}
function stateOf(id){
  if (everMastered(id)) return 'mastered';
  if (everPassed(id)) return 'passed';
  return unlocked(id) ? 'learning' : 'locked';
}
function locked(id){ return guided() && !!INFO[id] && INFO[id].kind === 'set' && stateOf(id) === 'locked'; }
function sectionName(t){ return 'Section ' + t.roman; }
function describe(id){ return 'the exercise on ' + INFO[id].title; }
function listJoin(a){ return a.length === 1 ? a[0] : a.length === 2 ? a[0] + ' and ' + a[1] : a.slice(0, -1).join(', ') + ', and ' + a[a.length - 1]; }
/* "the exercises of Section II are passed" / "the exercise on The Syllable is passed" */
function gateText(id){
  const t = INFO[id].tier, i = TIERS.indexOf(t);
  if (i <= 0) return '';
  const prev = TIERS[i - 1];
  if (!prev.required.length) return 'the study cards of ' + sectionName(prev) + ' are finished';
  if (prev.required.length === 1) return describe(prev.required[0]) + ' is passed';
  return 'the exercises of ' + sectionName(prev) + ' are passed';
}
function recent(id){
  const r = prog && prog.sets && prog.sets[id];
  return r ? passList(id, { history:r.history || [] }).slice(-GPC.PASS_WINDOW) : [];
}
function openSections(){ return TIERS.filter((t, i) => i === 0 || tierDone(TIERS[i - 1])).map(t => t.key); }

/* ---------------- pass and mastery ---------------- */
/* Levels (a set whose file has "levels":{pass, top}): the pass counts only answers at the pass level or above,
   and mastery counts only answers at the top level. A set without levels is unchanged. */
const LEVELS = {};   /* id -> ex.levels, filled as the files load */
function lvOf(id){ return LEVELS[id] || null; }
function lvl(h){ return (h && h.level) || 1; }
function passList(id, r){
  const L = lvOf(id);
  return L ? r.history.filter(h => lvl(h) >= passLv(id)) : r.history;
}
function meetsPass(r, id){
  const last = passList(id, r).slice(-GPC.PASS_WINDOW);
  if (last.length < GPC.PASS_WINDOW) return false;
  return last.filter(h => h.correct).length >= GPC.PASS_CORRECT && new Set(last.map(h => h.date)).size >= GPC.PASS_DAYS;
}
/* Mastery counts only sittings on a day after the first pass. */
function meetsMastery(r, id){
  const from = passDate(r, id);
  if (!from) return false;
  const L = lvOf(id);
  const q = r.mhist.filter(h => h.date > from && (!L || lvl(h) >= capOf(id))).slice(-GPC.MASTERY_SITTING);
  return q.length >= GPC.MASTERY_SITTING && q.filter(h => h.correct).length >= GPC.MASTERY_CORRECT;
}
const events = [];     /* what changed during the sitting now running, for its summary */
function onAnswer(run, it, correct){
  if (!guided() || !tracking()) return;
  const ex = run && run.ex;
  const info = ex && INFO[ex.id];
  if (!info || info.kind !== 'set') return;
  const id = ex.id, before = openSections();
  if (ex.levels) LEVELS[id] = ex.levels;
  let passed = false, mastered = false;
  mutate(p => {
    const r = recOf(p, id);
    r.seen = (r.seen || 0) + 1;
    if (correct) r.correct = (r.correct || 0) + 1;
    const h = { date:today(), correct:!!correct, item:it.id, level:(it && it.level) || run.level || 1 };
    const list = run.mode === 'mastery' ? r.mhist : r.history;
    list.push(h);
    if (list.length > GPC.HISTORY_CAP) list.splice(0, list.length - GPC.HISTORY_CAP);
    const k = lvKey(), L = lvOf(id);
    if (!passedRec(Object.assign({}, r, { history:[] }), id) && run.mode !== 'mastery' && meetsPass(r, id)){
      r.passedAt = r.passedAt || {}; r.passedAt[k] = today();
      if (!r.passedOn && (!L || passLv(id) >= L.pass)) r.passedOn = today();
      passed = true;
    }
    if (!masteredRec(r, id) && run.mode === 'mastery' && meetsMastery(r, id)){
      r.masteredAt = r.masteredAt || {}; r.masteredAt[k] = today();
      if (!r.masteredOn && (!L || capOf(id) >= L.top)) r.masteredOn = today();
      mastered = true;
    }
    r.state = r.masteredOn ? 'mastered' : r.passedOn ? 'passed' : 'learning';
  });
  if (passed || mastered){
    const opened = openSections().filter(k => before.indexOf(k) < 0);
    events.push({ id, kind:passed ? 'passed' : 'mastered', opened });
  }
}
function summaryNote(run, right, n){
  let html = '';
  const ex = run.ex, info = ex && INFO[ex.id];
  if (guided() && info && info.kind === 'review'){
    if (tracking()){
      mutate(p => {
        const was = p.recall[ex.id];
        p.recall[ex.id] = { date:today(), right:right, n:n, count:(was && was.count || 0) + 1 };
      });
      html += '<p>This review is recorded: ' + right + ' of ' + n + '. It opens nothing and closes nothing.</p>';
    }
  }
  if (guided() && info && info.kind === 'set' && !tracking()){
    html += '<p>Tracking is off, so these answers were not recorded for the Guided Path.</p>';
  }
  while (events.length){
    const e = events.shift();
    const title = esc2(INFO[e.id].title);
    if (e.kind === 'passed'){
      const L = lvOf(e.id);
      html += '<p><strong>' + title + ' is passed.</strong> ' + (L && capOf(e.id) > passLv(e.id) ? 'Every stage open at this level is now open. ' : '') + 'It is confirmed (★) by a second pass on a later day, in a sitting of ' + GPC.MASTERY_SITTING + ' questions drawn from ' + (L ? 'Stage ' + ROMAN[capOf(e.id)] : 'the whole pool') + '.</p>';
    } else {
      html += '<p><strong>' + title + ' is confirmed ★.</strong> Its questions now return in Today’s Review on their own schedule.</p>';
    }
    e.opened.forEach(k => {
      const t = TIERS.find(x => x.key === k);
      if (t) html += '<p>' + esc2(sectionName(t)) + ', ' + esc2(t.name) + ', is now open.</p>';
    });
  }
  return html;
}

/* ---------------- the mastery sitting ---------------- */
function uniqueItems(ex){
  const seen = new Set(), out = [];
  (ex.items || []).forEach(it => { if (it && !seen.has(it.id)){ seen.add(it.id); out.push(it); } });
  return out;
}
function runMastery(ex){
  const st = exState(ex.id);
  st.visits = st.visits || 0;
  const L = ex.levels || null;
  if (L) LEVELS[ex.id] = L;
  const top = L ? capOf(ex.id) : 0;
  let pool = typeof ex.fresh === 'function' ? ex.fresh(GPC.MASTERY_SITTING * 2) : ARS.CL.filterItems(ex, uniqueItems(ex));
  if (L) pool = pool.filter(it => itemLevel(it) === top);
  const items = shuffled(pool.slice()).slice(0, GPC.MASTERY_SITTING);
  runQueue({
    ex:ex, set:'', level:top, items:items, mode:'mastery', hash:'ex/' + ex.id,
    kind:'Confirmation sitting', title:ex.title,
    sub:items.length + ' questions drawn from ' + (L ? 'the ' + pool.length + ' of Stage ' + ROMAN[top] : 'the whole pool of ' + pool.length) + '. ' + GPC.MASTERY_CORRECT + ' must be correct. ' + (ex.instr || '')
  });
}

/* ---------------- an exercise's own screen ---------------- */
function btn(label, cls, fn, disabled){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'btn' + (cls ? ' ' + cls : ''); b.textContent = label;
  if (disabled) b.disabled = true; else b.onclick = fn;
  return b;
}
function para(text, cls){ const p = document.createElement('p'); p.className = cls || 'q-instr'; p.textContent = text; return p; }
function backHome(){ if (typeof clearHash === 'function') clearHash(); buildHome(); show('scr-home'); }
/* ---------------- the stage picker (sets with "levels"; modeled on Ars Rhetorica's level picker) ----------------
   The data calls them levels; the screen calls them stages, since the course's levels are Essentials to Comprehensive.
   Only the stages open at the course level are offered (ARS.CL.stageCap). Guided: the stages above the pass stage open
   once the exercise is passed. Free Practice: every stage open at the course level, and its chosen stage is kept
   apart from the Guided one (course record, not the guided record). */
function levelReached(id, L){ LEVELS[id] = L; return everPassed(id) ? capOf(id) : passLv(id); }
function levelList(ex, isGuided){
  const L = ex.levels, id = ex.id;
  LEVELS[id] = L;
  const cap = capOf(id);
  const box = document.createElement('div'); box.className = 'lp-list';
  const chosen = isGuided ? ((prog && prog.sets && prog.sets[id] && prog.sets[id].level) || 1) : (exState(id).level || 1);
  const open = isGuided ? levelReached(id, L) : cap;
  for (let n = 1; n <= cap; n++){
    const shut = n > open;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'btn lp-lvl' + (n === Math.min(chosen, cap) ? ' lp-chosen' : '');
    b.dataset.level = n;
    b.innerHTML = '<span class="lp-num">Stage ' + ROMAN[n] + '</span><span class="lp-name">' + esc2((L.names && L.names[n]) || '') + '</span>' +
      (shut ? '<span class="lp-lock">Stage ' + ROMAN[n] + ' opens once this exercise is passed at Stage ' + ROMAN[passLv(id)] + '.</span>' : '');
    if (shut) b.disabled = true;
    else b.onclick = () => {
      if (isGuided){ if (tracking()) mutate(p => { recOf(p, id).level = n; }); }
      else { exState(id).level = n; save(); }
      openEx(id, { level:n });
    };
    box.appendChild(b);
  }
  if (cap < L.top){
    const more = document.createElement('p'); more.className = 'lock-note';
    more.textContent = (L.top - cap === 1 ? 'Stage ' + ROMAN[L.top] + ' belongs' : 'Stages ' + ROMAN[cap + 1] + ' to ' + ROMAN[L.top] + ' belong') + ' to a higher level of the course.';
    box.appendChild(more);
  }
  return box;
}
function pickLevel(ex){
  LEVELS[ex.id] = ex.levels;
  if (guided() && INFO[ex.id]) return showGx(ex.id);
  if (capOf(ex.id) <= 1) return openEx(ex.id, { level:1 });
  $('gx-title').textContent = ex.title;
  $('gx-sub').textContent = 'Free Practice · choose a stage';
  const body = $('gx-body'); body.innerHTML = '';
  body.appendChild(para('Each stage has its own sets, given in order. In Free Practice every stage of this level is open, and nothing is recorded for the Guided Path.'));
  body.appendChild(levelList(ex, false));
  const acts = document.createElement('div'); acts.className = 'btn-row';
  acts.appendChild(btn('← Home', '', backHome));
  body.appendChild(acts);
  show('scr-gx');
}
/* Today's Review draws a set's items only up to the stage reached, and never above the stages open at the level. */
ARS.levelCap = function(ex){
  if (!ex || !ex.levels) return Infinity;
  LEVELS[ex.id] = ex.levels;
  if (!guided()) return capOf(ex.id);
  return levelReached(ex.id, ex.levels);
};
function intercept(id){
  if (!guided()) return false;
  const info = INFO[id];
  if (!info) return false;
  if (info.kind === 'review'){
    if (recallState(id).key !== 'wait') return false;
  }
  showGx(id);
  return true;
}
function showGx(id){
  const info = INFO[id];
  loadEx(id).then(ex => ex, () => null).then(ex => {
    if (ex && ex.levels) LEVELS[id] = ex.levels;
    const L = ex && ex.levels;
    const size = ex ? (typeof ex.fresh === 'function' ? null : (L ? ARS.CL.filterItems(ex, uniqueItems(ex)).filter(it => itemLevel(it) === capOf(id)) : ARS.CL.filterItems(ex, uniqueItems(ex))).length) : null;
    $('gx-title').textContent = info.title;
    $('gx-sub').textContent = sectionName(info.tier) + ' · ' + info.tier.name;
    const body = $('gx-body');
    body.innerHTML = '';
    const acts = document.createElement('div'); acts.className = 'btn-row';
    const start = () => openEx(id, {});
    const mastery = () => openEx(id, { mode:'mastery' });
    const note = [];
    if (info.kind === 'review'){
      const st = recallState(id);
      body.appendChild(para('This review asks, from memory, for the teaching of the study cards. On the Guided Path it is ready one day after the study cards are finished and the exercises of the section are passed. It opens nothing and closes nothing.'));
      body.appendChild(para(st.text + '.', 'lock-note'));
    } else {
      const st = stateOf(id), r = prog && prog.sets && prog.sets[id];
      if (st === 'locked'){
        body.appendChild(para('This exercise opens when ' + gateText(id) + '.'));
      } else if (st === 'learning'){
        body.appendChild(para(L
          ? 'This exercise is passed when nine of the last ten answers at Stage ' + ROMAN[passLv(id)] + ' or above are correct, on at least two different days. Each visit gives the next set of the stage chosen.'
          : 'This exercise is passed when nine of the last ten answers are correct, on at least two different days. Each visit gives the next set in order.'));
        const q = recent(id);
        if (tracking()) note.push(q.length ? q.filter(h => h.correct).length + ' of the last ' + q.length + ' answers' + (L ? ' at Stage ' + ROMAN[passLv(id)] + ' or above' : '') + ' are correct.' : (L ? 'No answers at Stage ' + ROMAN[passLv(id)] + ' or above are recorded yet.' : 'No answers are recorded yet.'));
        if (!L) acts.appendChild(btn('Begin a set', 'primary', start));
      } else if (st === 'passed'){
        const pd = passDate(r, id) || today();
        const wait = pd >= today();
        body.appendChild(para('This exercise is passed. It is confirmed (★) by passing it a second time on a later day, in one sitting of ' + GPC.MASTERY_SITTING + ' questions drawn from ' + (L ? 'Stage ' + ROMAN[capOf(id)] : 'the whole pool') + (size ? ' of ' + size + ' questions' : '') + ', with ' + GPC.MASTERY_CORRECT + ' of the ' + GPC.MASTERY_SITTING + ' correct.'));
        if (wait) note.push('The confirmation sitting opens on ' + niceDate(addDays(1, pd)) + '.');
        acts.appendChild(btn('Confirmation sitting', 'primary', mastery, wait));
        if (!L) acts.appendChild(btn('Practice a set', '', start));
      } else {
        body.appendChild(para('This exercise is confirmed (★). Its questions return in Today’s Review on their own schedule. Any ' + (L ? 'stage' : 'set') + ' may still be practiced here.'));
        if (!L) acts.appendChild(btn('Practice a set', 'primary', start));
        acts.appendChild(btn('Confirmation sitting', '', mastery));
      }
      if (L && st !== 'locked') body.appendChild(levelList(ex, true));
      if (!tracking() && st !== 'locked') note.push('Tracking is off, so these answers will not be recorded. Tracking is turned on under Progress & Review.');
    }
    note.forEach(t => body.appendChild(para(t, 'lock-note')));
    acts.appendChild(btn('← Home', '', backHome));
    body.appendChild(acts);
    show('scr-gx');
  });
}

/* ---------------- the delayed content reviews (the section reviews) ---------------- */
function deckDoneAt(d){
  const st = courseStore().decks && courseStore().decks[d];
  return st && st.done && ARS.CL.deckDone(d) ? (st.doneAt ? dateStr(new Date(st.doneAt)) : today()) : null;
}
function recallState(id){
  const info = INFO[id];
  if (!info || info.kind !== 'review') return null;
  if (!guided()) return { key:'open', text:'' };
  const dates = info.decks.map(deckDoneAt);
  if (dates.some(d => !d)) return { key:'wait', text:'After the study cards are finished' };
  const t = info.tier;
  if (t.required.length && !t.required.every(everPassed)) return { key:'wait', text:'After the exercises of ' + sectionName(t) + ' are passed' };
  const marks = dates.concat(t.required.map(x => { const r = prog.sets[x]; return r && (passDate(r, x) || r.masteredOn); })).filter(Boolean).sort();
  const from = marks.length ? marks[marks.length - 1] : today();
  const last = prog && prog.recall && prog.recall[id];
  const ready = addDays(GPC.RECALL_DELAY, from);
  if (ready > today() && !last) return { key:'wait', text:'Ready on ' + niceDate(ready) };
  if (last) return { key:'done', text:'Reviewed ' + niceDate(last.date) + ' · ' + last.right + ' of ' + last.n };
  return { key:'ready', text:'Ready' };
}
function readyReviews(){
  return Object.keys(INFO).filter(id => INFO[id].kind === 'review' && (recallState(id) || {}).key === 'ready');
}

/* ---------------- Today's Review ---------------- */
/* The next step along the path. A section with no required exercise set is finished by its study cards, so
   when the earliest open step is such a section the step is {cards:true}; otherwise it is an exercise set. */
function cardsStep(){
  const i = TIERS.findIndex((t, k) => (k === 0 || tierDone(TIERS[k - 1])) && !t.required.length && !tierDone(t));
  if (i < 0) return null;
  const t = TIERS[i];
  return { cards:true, id:null, deck:t.cards.find(d => !deckDoneAt(d)) || t.cards[0], tier:t, title:'the study cards of ' + sectionName(t) };
}
function nextLearning(){
  const set = REQUIRED.find(s => unlocked(s.id) && !everPassed(s.id)), c = cardsStep();
  if (set && (!c || TIERS.indexOf(set.tier) < TIERS.indexOf(c.tier))) return set;
  return c || REQUIRED.find(s => unlocked(s.id) && !everMastered(s.id)) || null;
}
function nextLine(){
  const learn = nextLearning();
  if (!learn) return '<p>Every exercise on the path is confirmed.</p>';
  if (learn.cards) return '<p>Finish the study cards of ' + esc2(sectionName(learn.tier)) + '.</p>';
  return '<p>' + (everPassed(learn.id) ? 'The next exercise to confirm is ' : 'The next exercise to learn is ') + esc2(learn.title) + ' (' + esc2(sectionName(learn.tier)) + ').</p>';
}
function startToday(){
  ARS.gatherDue(GPC.TODAY_CAP).then(res => {
    if (!res.items.length){ openProgress('<p><strong>Nothing is due today.</strong></p>' + nextLine()); return; }
    const before = JSON.parse(JSON.stringify(courseStore().boxes || {}));
    runQueue({
      items:res.items, kind:'Today’s Review', title:'Today’s Review',
      sub:res.items.length + ' of ' + res.total + ' due, interleaved across the study cards and exercises.',
      onFinish:(r, right, n, missed) => finishToday(r, before, res, right, n, missed)
    });
  });
}
function finishToday(r, before, res, right, n, missed){
  const boxes = courseStore().boxes || {};
  const days = ARS.REVIEW_BOX_DAYS;
  const up = {}, down = [];
  Object.keys(r.first).forEach(id => {
    const b = boxes[id] ? boxes[id].box : 1;
    if (r.first[id]) up[b] = (up[b] || 0) + 1; else down.push(id);
  });
  const plural = k => k + (k === 1 ? ' item' : ' items');
  let h = '<p class="q-prompt directions">' + right + ' of ' + n + ' answered correctly the first time.</p>';
  const lines = [];
  Object.keys(up).sort().forEach(b => lines.push('Moved up to box ' + b + ' (back in ' + days[b - 1] + (days[b - 1] === 1 ? ' day' : ' days') + '): ' + plural(up[b]) + '.'));
  if (down.length) lines.push('Returned to box 1 (back in ' + days[0] + ' day): ' + plural(down.length) + '.');
  if (lines.length) h += '<p>' + lines.join('<br>') + '</p>';
  if (missed.length) h += '<p>Missed, and kept for review:</p><ol>' + missed.map(x => '<li>' + x.prompt + '</li>').join('') + '</ol>';
  if (res.total > res.items.length) h += '<p>' + plural(res.total - res.items.length) + ' more are still due. Another Today’s Review will gather them.</p>';
  const learn = nextLearning();
  h += nextLine();
  const body = $('ex-body'); body.innerHTML = '';
  setExProgress();
  const box = document.createElement('div'); box.className = 'q-box qp';
  box.innerHTML = '<div class="qp-label"><span>Today’s Review finished</span></div>' + h + '<div class="btn-row"></div>';
  const row = box.querySelector('.btn-row');
  if (learn && !learn.cards && guided()) row.appendChild(btn('Begin: ' + learn.title, 'primary', () => openEx(learn.id)));
  row.appendChild(btn('Progress & Review', '', () => openProgress()));
  row.appendChild(btn('Back to the course', '', backHome));
  body.appendChild(box);
}

/* ---------------- home decoration ---------------- */
function chipText(id){
  const st = stateOf(id);
  if (st === 'locked') return 'Locked';
  if (st === 'mastered') return '★ Confirmed';
  if (st === 'passed') return 'Passed';
  const q = recent(id);
  return q.length ? 'Learning · ' + q.filter(h => h.correct).length + '/' + q.length : 'Learning';
}
function flag(text, id){
  const f = document.createElement('span');
  f.className = 'ex-state st-' + (id && INFO[id] && INFO[id].kind === 'set' ? stateOf(id) : 'review');
  f.textContent = text;
  return f;
}
function decorateTile(c, it){
  if (!guided()) return;
  const exId = ARS.deckEx && ARS.deckEx[it.id];
  const link = c.querySelector('.ex-link');
  if (link && exId && INFO[exId]){
    link.insertBefore(flag(chipText(exId) + (isOptional(exId) ? ' · optional' : ''), exId), link.firstChild);
    if (locked(exId)) link.classList.add('locked');
  }
  const info = INFO[it.id];
  if (!info) return;
  const main = c.querySelector('.tile-main');
  if (!main) return;
  if (info.kind === 'set'){
    main.appendChild(flag(chipText(it.id), it.id));
    if (locked(it.id)) c.classList.add('locked');
  } else {
    const st = recallState(it.id);
    const f = flag(st.text, null);
    main.appendChild(f);
    if (st.key === 'wait') c.classList.add('locked');
  }
}
/* A note above the section's tiles while its exercises are shut. */
function decorateSection(sec, grid){
  if (!guided()) return;
  const t = TIERS.find(x => x.key === sec.id);
  if (!t) return;
  const shut = t.sets.map(s => s.id).filter(locked);
  if (!shut.length) return;
  const note = document.createElement('div');
  note.className = 'lock-note';
  const who = shut.length === 1 ? describe(shut[0]) : 'the exercises of ' + sectionName(t);
  note.textContent = 'On the Guided Path, ' + who + (shut.length === 1 ? ' opens' : ' open') + ' when ' + gateText(shut[0]) + '.';
  grid.parentNode.insertBefore(note, grid);
}
function homeNote(){
  const host = $('guided-note');
  if (!host) return;
  host.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'gp-line';
  const row = document.createElement('div');
  row.className = 'btn-row';
  if (!guided()){
    p.textContent = 'The Guided Path opens the exercises of the level in the order of the sections, judges when each is passed and confirmed, and gathers what is due for review.';
  } else if (!tracking()){
    p.textContent = 'The Guided Path keeps its record only once tracking is turned on under Progress & Review.';
  } else {
    const due = ARS.dueCount ? ARS.dueCount() : 0, learn = nextLearning(), rr = readyReviews();
    const bits = [];
    if (due) bits.push(due === 1 ? '1 review item is due today.' : due + ' review items are due today.');
    if (learn && learn.cards) bits.push('Finish the study cards of ' + sectionName(learn.tier) + '.');
    else if (learn) bits.push((everPassed(learn.id) ? 'Next to confirm: ' : 'Next to learn: ') + learn.title + ' (' + sectionName(learn.tier) + ').');
    if (rr.length) bits.push((rr.length === 1 ? 'A review is ready: ' : 'Reviews are ready: ') + rr.map(id => INFO[id].title).join('; ') + '.');
    if (!bits.length) bits.push('Nothing is due today, and every exercise on the path at this level is confirmed.');
    p.textContent = bits.join(' ');
    if (due) row.appendChild(btn('Start Today’s Review', 'primary', startToday));
    else if (learn && learn.cards && learn.deck) row.appendChild(btn('Open ' + sectionName(learn.tier), 'primary', () => openDeck(learn.deck)));
    else if (learn && !learn.cards) row.appendChild(btn('Continue: ' + learn.title, 'primary', () => openEx(learn.id)));
  }
  row.appendChild(btn('Progress & Review', '', () => openProgress()));
  host.appendChild(p);
  host.appendChild(row);
}

/* ---------------- the Progress & Review screen ---------------- */
const NUM = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
function openProgress(noteHtml){
  renderPanel();
  const note = $('gp-note');
  if (note){ note.innerHTML = noteHtml || ''; note.hidden = !noteHtml; }
  show('scr-prog');
}
function boxSummary(){
  const boxes = courseStore().boxes || {}, now = Date.now();
  const per = [0, 0, 0, 0, 0, 0], byDay = {};
  let total = 0, due = 0;
  Object.keys(boxes).forEach(id => {
    const b = boxes[id];
    if (!b) return;
    total++; per[Math.min(5, b.box || 1)]++;
    if (b.dueAt != null && b.dueAt <= now) due++;
    else if (b.dueAt != null){ const d = dateStr(new Date(b.dueAt)); byDay[d] = (byDay[d] || 0) + 1; }
  });
  return { total, per, due, days:Object.keys(byDay).sort().map(d => ({ date:d, n:byDay[d] })) };
}
function renderPanel(){
  const host = $('prog-guided');
  if (!host) return;
  notice();
  let h = '';
  if (!guided()){
    h += '<div class="gp-box"><p>This browser is on <strong>Free Practice</strong>: every exercise of the level is open, and nothing is recorded for the Guided Path.</p>'
      + '<div class="btn-row"><button class="btn" type="button" id="gp-use">Use the Guided Path</button></div></div>';
  }
  if (!tracking()){
    const had = !!prog;
    h += '<div class="gp-box"><p><strong>Track progress on the Guided Path.</strong> The Guided Path keeps a private record of answers, stored only in this browser and never sent anywhere, so that it can open the exercises in order and judge when each is passed and confirmed. '
      + (had ? 'Tracking is paused; the earlier record is kept and will resume.' : 'No record is kept until tracking is turned on.') + '</p>'
      + '<div class="btn-row"><button class="btn primary" type="button" id="gp-track">' + (had ? 'Resume tracking' : 'Turn on tracking') + '</button></div></div>';
  } else {
    h += '<div class="gp-box"><p><strong>Tracking is on.</strong> Answers given on the Guided Path are recorded in this browser only.</p>'
      + '<div class="btn-row"><button class="btn" type="button" id="gp-pause">Pause tracking</button>'
      + '<button class="btn" type="button" id="gp-erase">Erase the Guided Path record</button></div></div>';
  }
  const bs = boxSummary();
  if (tracking()){
    const learn = nextLearning();
    h += '<div class="section-label">Today</div><div class="gp-today">';
    h += '<p>' + (bs.due ? (bs.due === 1 ? 'One review item is' : bs.due + ' review items are') + ' due. Today’s Review gathers up to ' + GPC.TODAY_CAP + ' of them, interleaved across the study cards and exercises.' : 'No review items are due today.') + '</p>';
    if (learn && learn.cards) h += '<p>Finish the study cards of ' + esc2(sectionName(learn.tier)) + '.</p>';
    else if (learn) h += '<p>' + (everPassed(learn.id) ? 'Next to confirm' : 'Next to learn') + ': ' + esc2(learn.title) + ' (' + esc2(sectionName(learn.tier)) + ').</p>';
    h += '<div class="btn-row">' + (bs.due ? '<button class="btn primary" type="button" id="gp-start">Start Today’s Review</button>' : '')
      + (learn && !learn.cards ? '<button class="btn' + (bs.due ? '' : ' primary') + '" type="button" id="gp-learn">Begin: ' + esc2(learn.title) + '</button>' : '')
      + (learn && learn.cards && learn.deck ? '<button class="btn' + (bs.due ? '' : ' primary') + '" type="button" id="gp-learn">Open ' + esc2(sectionName(learn.tier)) + '</button>' : '') + '</div></div>';
    const rr = readyReviews();
    if (rr.length){
      h += '<div class="section-label">Section Reviews</div><div class="section-gloss">Each asks for the teaching of one section from memory. They open nothing and close nothing.</div><div class="home-grid" id="gp-recalls"></div>';
    }
    if (bs.days.length){
      h += '<div class="section-label">Coming Reviews</div><div class="gp-agenda">'
        + bs.days.slice(0, 7).map(o => '<div class="gp-agenda-row"><span>' + niceDate(o.date) + '</span><span>' + o.n + (o.n === 1 ? ' item' : ' items') + '</span></div>').join('') + '</div>';
    }
  }
  h += '<div class="section-label">The Path: ' + esc2(ARS.CL.names[lvKey()]) + (guided() ? ', ' + esc2(ARS.CL.listNames(ARS.CL.langs())) : '') + '</div>';
  TIERS.forEach(t => {
    h += '<div class="gp-tier">' + esc2(sectionName(t)) + ' · ' + esc2(t.name) + '</div><div class="gp-ladder">';
    t.sets.forEach(s => {
      const id = s.id, st = stateOf(id);
      const chip = { locked:'Locked', learning:'Learning', passed:'Passed', mastered:'Confirmed ★' }[st];
      let detail = '';
      const r = prog && prog.sets && prog.sets[id];
      if (st === 'locked') detail = 'Opens when ' + gateText(id) + '.';
      else if (st === 'mastered') detail = 'Confirmed on ' + niceDate((r.masteredAt && r.masteredAt[lvKey()]) || r.masteredOn) + '.';
      else if (st === 'passed') detail = 'Passed on ' + niceDate(passDate(r, id) || today()) + '; confirmation is a sitting of ' + GPC.MASTERY_SITTING + ' questions on a later day.';
      else if (tracking()){
        const q = recent(id);
        if (q.length) detail = q.filter(x => x.correct).length + ' of the last ' + q.length + ' answers are correct.';
      }
      if (isOptional(id)) detail = (detail ? detail + ' ' : '') + 'Optional; it is not needed to open the next section.';
      h += '<div class="gp-row st-' + st + '"><span class="gp-title">' + esc2(s.title) + '</span><span class="gp-chip">' + chip + '</span>'
        + (detail ? '<span class="gp-detail">' + esc2(detail) + '</span>' : '') + '</div>';
    });
    t.reviews.forEach(rv => {
      const st = recallState(rv.id) || { text:'' };
      h += '<div class="gp-row st-review"><span class="gp-title">' + esc2(rv.title) + '</span><span class="gp-chip">Review</span>'
        + '<span class="gp-detail">' + esc2(guided() ? st.text : 'Open') + '</span></div>';
    });
    h += '</div>';
  });
  /* the course's own record, whichever path is chosen */
  const cs = courseStore();
  const decks = Object.keys(cs.decks || {}).filter(k => k.indexOf('lang.') !== 0 && cs.decks[k] && cs.decks[k].done).length;
  const sets = Object.keys(cs.ex || {}).filter(k => k.indexOf('lang.') !== 0 && cs.ex[k] && cs.ex[k].done).length;
  h += '<div class="section-label">All Practice</div><div class="gp-today"><p>' + decks + ' study decks and ' + sets + ' exercises or reviews have been finished at least once. '
    + bs.total + ' questions are in the review boxes' + (bs.total ? ' (' + [1, 2, 3, 4, 5].map(b => 'box ' + b + ': ' + bs.per[b]).join('; ') + ')' : '') + '.</p></div>';
  host.innerHTML = h;
  const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };
  on('gp-use', () => { setPath('guided'); openProgress(); });
  on('gp-track', () => {
    mutate(p => { p.settings.trackingEnabled = true; });
    renderPanel(); buildHome();
  });
  on('gp-pause', () => { mutate(p => { p.settings.trackingEnabled = false; }); renderPanel(); buildHome(); });
  on('gp-erase', () => {
    if (confirm('Erase the Guided Path record? This cannot be undone. The course’s own record of finished decks and review items is kept.')){
      prog = null; gpRemove(GPC.STORAGE_KEY); renderPanel(); buildHome();
    }
  });
  on('gp-start', startToday);
  on('gp-learn', () => { const l = nextLearning(); if (l && l.cards && l.deck) openDeck(l.deck); else if (l && !l.cards) openEx(l.id); });
  const rg = $('gp-recalls');
  if (rg) readyReviews().forEach(id => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'set-card review-bar';
    b.insertAdjacentHTML('beforeend', STAR);
    const main = document.createElement('div'); main.className = 'tile-main';
    main.innerHTML = '<h3></h3><p>Ready</p>';
    main.querySelector('h3').textContent = INFO[id].title;
    b.appendChild(main);
    b.onclick = () => openEx(id);
    rg.appendChild(b);
  });
}

/* ---------------- export and import ---------------- */
function exportProgress(){
  const obj = prog ? JSON.parse(JSON.stringify(prog)) : { schemaVersion:GPC.SCHEMA, app:'ars-grammatica', settings:{ trackingEnabled:false }, sets:{}, recall:{} };
  obj.app = 'ars-grammatica';
  obj.exportedOn = today();
  /* the course's own record travels with it, so a second device has the same finished decks and review boxes */
  obj.course = JSON.parse(JSON.stringify(courseStore()));
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ars-grammatica-progress-' + today() + '.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function importProgress(file){
  const rd = new FileReader();
  rd.onload = () => {
    try{
      const o = migrate(JSON.parse(rd.result));
      if (!o || o.schemaVersion !== GPC.SCHEMA || !o.sets || typeof o.sets !== 'object' || !o.settings) throw new Error('schema');
      if (o.app && o.app !== 'ars-grammatica') throw new Error('app');
      const have = prog || Object.keys(courseStore().decks || {}).length;
      if (have && !confirm('Importing replaces the progress kept in this browser with the progress in the file. Continue?')) return;
      const course = o.course; delete o.course; delete o.exportedOn;
      o.recall = (o.recall && typeof o.recall === 'object') ? o.recall : {};
      o.app = 'ars-grammatica';
      prog = o; gpSet(GPC.STORAGE_KEY, JSON.stringify(o));
      if (course && typeof course === 'object'){
        const cs = courseStore(), dark = cs.dark;
        Object.keys(cs).forEach(k => { delete cs[k]; });
        Object.assign(cs, { decks:{} }, course, { dark:dark });
        save();
      }
      buildHome();
      openProgress('<p>The progress file was imported.</p>');
    }catch(err){
      openProgress('<p>That file could not be read as an Ars Grammatica progress file.</p>');
    }
  };
  rd.readAsText(file);
}

/* ---------------- pools below the minimum (for a content session) ---------------- */
function poolFlags(){
  return Promise.all(SETS.map(s => loadEx(s.id).then(ex => ({
    id:s.id, size:typeof ex.fresh === 'function' ? null : uniqueItems(ex).length, required:!isOptional(s.id)
  })).catch(() => ({ id:s.id, size:0, required:!isOptional(s.id) }))))
    .then(rows => rows.filter(r => r.size != null && r.size < GPC.MIN_POOL));
}

/* ---------------- wiring and first paint ---------------- */
if ($('prog-back')) $('prog-back').onclick = backHome;
if ($('gx-back')) $('gx-back').onclick = backHome;
if ($('prog-export')) $('prog-export').onclick = exportProgress;
if ($('prog-import')) $('prog-import').onclick = () => $('prog-import-file').click();
if ($('prog-import-file')) $('prog-import-file').onchange = ev => {
  const f = ev.target.files && ev.target.files[0];
  if (f) importProgress(f);
  ev.target.value = '';
};

window.GP = {
  isGuided:guided, setPath, isLocked:locked, intercept, pickLevel, migrate, onAnswer, summaryNote, runMastery, decorateTile, decorateSection,
  homeNote, openProgress, startToday, rebuild,
  /* for checks and for the instructor's report */
  config:GPC, tiers:TIERS, prereqs:PREREQS, info:INFO, sets:SETS, stateOf, recallState, nextLearning, poolFlags,
  eraseAll(){ prog = null; gpRemove(GPC.STORAGE_KEY); }
};
rebuild();
reflectPath();
buildHome();
/* learn which sets have levels, so the home chips count the right answers */
Promise.all(SETS.filter(x => prog && prog.sets && prog.sets[x.id]).map(x => loadEx(x.id).then(ex => { if (ex && ex.levels){ LEVELS[x.id] = ex.levels; return true; } }, () => null)))
  .then(r => { if (r.some(Boolean) && document.getElementById('scr-home') && document.getElementById('scr-home').classList.contains('active')) buildHome(); });
})();
