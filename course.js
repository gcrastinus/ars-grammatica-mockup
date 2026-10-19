'use strict';
/* Ars Grammatica: the working course page.
   The order of the course is in data/structure.js; each built deck is a separate file, data/decks/<id>.js.
   Progress is stored locally under each stable id. A language-screen item uses lang.<bar>.<code>/<slug> (LANGUAGES-LAYER-SPEC.md).

   Typed-answer fields drawn by runEx (EXERCISES-PLAN.md, "Data fields of the renderers").
   Common fields: id, set, type, prompt, explain. Optional why: { prompt, model }.
   macrons: false  — on count, form, divide, and analysis, macrons are not tested. Otherwise they count.
   count     answer (number or string). accept or answers may add further answers.
             Trimmed. Case, curly quotes, and (when macrons is false) macrons are normalized.
             A whole number ignores leading zeros: "04" and 4 match.
             A whole English number word from "zero" to "twenty" is read as its digits, so "one" and "One" match 1.
             Spaces inside the answer are kept, so "1 2" does not match 12.
   form      answer, or accept (string or list). answers is read when accept is absent.
             Same normalization as count. One trailing period is ignored. Any other final
             punctuation is kept. Not treated as a number.
             order: "any" — the words are compared in any order (a built sentence).
   divide    answer, the stored division, with hyphens. Same normalization, then hyphens and
             dashes are read as "-", and spaces around a hyphen are removed.
   transform accept, a short list (or one string). answer or answers is used when accept is absent.
             Spacing, capitals, and final punctuation (.?!;:, and the ellipsis) are ignored,
             including a final period inside a closing quotation mark.
   identify  tokens, answer (one index, or a list of indexes). Unchanged: one index is a single
             click; a list means every word asked for, then Check. Checked against that position.
   mark      tokens, analysis: a list of [from, to], indexes into tokens. from depends on to.
             The set of arrows must match, in any order.
   analysis  tokens, analysis.parse (a string, or a list of accepted strings, for each token),
             analysis.arrows (pairs, as on mark). The first word is the part of speech. The
             accidents after it may stand in any order. Commas, extra spaces, and case are
             ignored. The arrows are matched as a mark is matched.
   copy      text, the passage. Word for word: capitals, spelling, and punctuation must match.
             Whitespace is collapsed, curly quotes are read as straight quotes, and the text
             is compared in Unicode NFC. Paste into the copy box is blocked.
   When accept is present it is the whole list; answer is not added to it.
   Feedback for count, form, divide, transform, mark, and analysis shows the student's
   answer beside the correct one. The correct column shows only the first accepted answer.
   When another accepted answer still differs after normalization, "Also accepted:" lists it.
   A wrong copy names the first word that differs, instead of both texts.
   identify keeps its present feedback.
   An item type with no renderer shows "This item type is not yet available."
   Hyphens and dashes are treated alike on count, form, divide, and transform, and accents
   other than macrons are ignored, as on the written count and divide items.
   Samples: test/typed-samples.js, not loaded by the course. */
const KEY = 'ars-grammatica-course-v2';
const store = (() => {
  try { return Object.assign({ dark:false, decks:{} }, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { return { dark:false, decks:{} }; }
})();
function save(){ try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
function courseStore(){ return store; }
const $ = id => document.getElementById(id);
const FORMS = ['A', 'B', 'C'];
const KIND = { 'study':'Study', 'study-ex':'Study and exercise', 'exercise':'Exercise', 'review':'Section review', 'models':'Models' };
/* Particular languages (LANGUAGES-LAYER-SPEC.md). Button order is fixed. */
const LANGS = [
  { code:'en', name:'English' },
  { code:'la', name:'Latin' },
  { code:'grc', name:'Greek', native:'Ἑλληνική' },
  { code:'fr', name:'French' },
  { code:'de', name:'German' }
];
const LANG_BARS = {
  'ii': { section:'ii', title:'The Matter of Speech' },
  'iii-decl': { section:'iii', title:'The Parts of Speech', group:'The declinable parts' },
  'iii-indecl': { section:'iii', title:'The Parts of Speech', group:'The indeclinable parts' },
  'iv': { section:'iv', title:'Word Formation and Etymology' },
  'v': { section:'v', title:'Construction' },
  'vi': { section:'vi', title:'Correctness and Errors' },
  'vii': { section:'vii', title:'Figures and Tropes' },
  'ix': { section:'ix', title:'Analysis of Sentences and Passages' },
  'x': { section:'x', title:'Making' }
};
let screenReturn = null;   // language screen to reopen when a deck or exercise on it is closed
function langId(bar, code){ return 'lang.' + bar + '.' + code; }
function langScreenOf(id){
  const m = String(id || '').match(/^(lang\.[^/]+)/);
  return m ? m[1] : null;
}
function langRecord(bar, code){
  const id = langId(bar, code);
  const info = LANG_BARS[bar] || { section:'', title:'' };
  const stored = ARS.languages && ARS.languages[id];
  return stored || { id:id, bar:bar, code:code, section:info.section, items:[], more:true };
}
/* A language study deck with a built exercise of the same id plus "-ex" opens that
   exercise from the small button. The exercise is not a tile of its own. */
function linkLangDeckExercises(){
  ARS.deckEx = ARS.deckEx || {};
  const langs = ARS.languages || {};
  Object.keys(langs).forEach(sid => {
    const items = langs[sid].items || [];
    const byId = {};
    items.forEach(it => { byId[it.id] = it; });
    items.forEach(it => {
      if (!it || it.kind !== 'study' || !it.built) return;
      const exId = it.id + '-ex';
      const ex = byId[exId];
      if (ex && ex.kind === 'exercise' && ex.built) ARS.deckEx[it.id] = exId;
    });
  });
}
function deckForExercise(exId){
  const map = ARS.deckEx || {};
  for (const deckId in map) if (map[deckId] === exId) return deckId;
  return '';
}
function langItemBegun(it){
  if (!it || it.kind === 'note') return false;
  if (it.kind === 'exercise' || it.kind === 'models'){
    const st = store.ex && store.ex[it.id];
    return !!(st && (st.visits || st.done));
  }
  const st = store.decks[it.id];
  return !!(st && (st.opens || st.done));
}
function langItemDone(it){
  if (!it || it.kind === 'note') return false;
  if (it.kind === 'exercise' || it.kind === 'models'){
    const st = store.ex && store.ex[it.id];
    return !!(st && st.done);
  }
  const st = store.decks[it.id];
  return !!(st && st.done);
}
function langScreenMark(screen){
  const items = (screen.items || []).filter(it => it.built && it.kind !== 'note');
  if (!items.length) return '';
  if (items.every(langItemDone)) return 'done';
  if (items.some(langItemBegun)) return 'begun';
  return '';
}

function deckState(id){ return store.decks[id] || (store.decks[id] = { opens:0, done:false }); }
function show(scr){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === scr));
  window.scrollTo(0, 0);
  const reciteOpen = document.getElementById('recite-open');
  if (reciteOpen) reciteOpen.style.display = (scr === 'scr-home') ? '' : 'none';
  document.body.classList.toggle('off-home', scr !== 'scr-home');
  if (scr === 'scr-home') refreshReciteNudge();
  else concealReciteNudge();
}

/* ---------- home: all 71 buttons in order ---------- */
function buildHome(){
  const host = $('home-acts'); host.innerHTML = '';
  ARS.structure.forEach(sec => {
    const lab = document.createElement('div');
    if (sec.roman){ lab.className = 'act-label'; lab.textContent = `${sec.roman} · ${sec.latin}`; host.appendChild(lab); }
    const name = document.createElement('div');
    name.className = sec.roman ? 'act-latin' : 'section-label';
    name.textContent = sec.name; host.appendChild(name);
    if (!sec.roman){ const l2 = document.createElement('div'); l2.className = 'act-gloss'; l2.innerHTML = `<i>${sec.latin}</i>`; host.appendChild(l2); }
    const gl = document.createElement('div'); gl.className = 'act-gloss'; gl.textContent = sec.gloss; host.appendChild(gl);
    let grid = document.createElement('div'); grid.className = 'home-grid'; host.appendChild(grid);
    sec.items.forEach(it => {
      if (it.group){
        const g = document.createElement('div'); g.className = 'grp-label'; g.textContent = it.group; grid.appendChild(g);
      }
      grid.appendChild(makeTile(it));
      (sec.langBars || []).filter(b => b.after === it.id).forEach(b => grid.appendChild(langBar(b)));
    });
    if (sec.roman && typeof cumulativeBar === 'function'){
      grid.appendChild(cumulativeBar(sec));
      (sec.langBars || []).filter(b => b.after === 'cumul').forEach(b => grid.appendChild(langBar(b)));
    }
  });
  if (typeof renderReciteReminder === 'function') renderReciteReminder();
  if (typeof renderReviewNotice === 'function') renderReviewNotice();
}

/* A full-width bar of five language buttons. The buttons are the same on every bar. */
function langBar(bar){
  const el = document.createElement('div');
  el.className = 'lang-bar';
  el.dataset.langbar = bar.id;
  const h = document.createElement('div');
  h.className = 'lang-h';
  h.textContent = bar.heading || 'The grammars of the particular languages';
  el.appendChild(h);
  const row = document.createElement('div');
  row.className = 'lang-btns';
  LANGS.forEach(L => {
    const screen = langRecord(bar.id, L.code);
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lang-btn lang-' + L.code;
    const mark = langScreenMark(screen);
    if (mark) b.classList.add(mark === 'done' ? 'is-done' : 'is-begun');
    b.dataset.screen = screen.id;
    const name = document.createElement('span');
    name.textContent = L.name;
    b.appendChild(name);
    if (mark){
      const m = document.createElement('span');
      m.className = 'lang-mark';
      m.setAttribute('aria-hidden', 'true');
      m.textContent = mark === 'done' ? '✓' : '●';
      b.appendChild(m);
      b.setAttribute('aria-label', L.name + (mark === 'done' ? ', finished' : ', begun'));
    }
    b.addEventListener('click', () => openLang(screen.id));
    row.appendChild(b);
  });
  el.appendChild(row);
  return el;
}

function openLang(id){
  const m = String(id).match(/^lang\.([^.]+)\.([^.]+)$/);
  if (!m || !LANG_BARS[m[1]]) return;
  const bar = m[1], code = m[2];
  const L = LANGS.find(x => x.code === code);
  const info = LANG_BARS[bar];
  const screen = langRecord(bar, code);
  screenReturn = id;
  location.hash = 'lang/' + id;
  const band = $('lang-band');
  band.className = 'lang-band lang-' + code;
  const native = L && L.native ? `<div class="lang-native">${L.native}</div>` : '';
  const group = info.group ? `<div class="lang-group">${info.group}</div>` : '';
  band.innerHTML = native + `<h2>${L ? L.name : code}: ${info.title}</h2>` + group;
  $('lang-note').textContent = 'Best taken after the section.';
  const grid = $('lang-grid');
  grid.innerHTML = '';
  (screen.items || []).forEach(it => {
    if (it && it.kind === 'exercise' && deckForExercise(it.id)) return;
    grid.appendChild(makeTile(it));
  });
  const more = $('lang-more');
  const thin = screen.more || !(screen.items && screen.items.length);
  more.hidden = !thin;
  more.textContent = 'More to come.';
  show('scr-lang');
}

function clearHash(){
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
}
function leaveLang(){
  const id = screenReturn;
  screenReturn = null;
  clearHash();
  buildHome();
  show('scr-home');
  const m = id && String(id).match(/^lang\.([^.]+)\./);
  const bar = m && document.querySelector('[data-langbar="' + m[1] + '"]');
  if (bar){
    bar.scrollIntoView({ block:'center' });
    const btn = bar.querySelector('button');
    if (btn) btn.focus({ preventScroll:true });
  }
}

/* A homepage tile or a language-screen tile. */
function makeTile(it){
  const c = document.createElement('div');
  const st = store.decks[it.id];
  const plan = hasPlan(it.id);
  const practiceTile = playerItem(it) || (it.kind === 'exercise' && String(it.id).indexOf('lang.') === 0);
  const exDone = practiceTile && store.ex && store.ex[it.id] && store.ex[it.id].done;
  c.className = 'set-card ' + (it.built ? 'built' : 'soon') + (!it.built && plan ? ' has-plan' : '') + (it.kind === 'review' ? ' review-bar' : '');
  c.dataset.id = it.id;
  const studied = it.built && !practiceTile && st && st.done;
  const finished = it.built && practiceTile && exDone && String(it.id).indexOf('lang.') === 0;
  c.innerHTML = `<div class="kind">${KIND[it.kind] || ''}</div>
    ${studied ? '<span class="done-flag">✓ Studied</span>' : ''}${finished ? '<span class="done-flag">✓ Finished</span>' : ''}
    <h3>${it.title}</h3><p>${it.desc}</p>
    <span class="begin">${it.built ? ((practiceTile || it.introFor) ? 'Begin →' : 'Study →') : ''}</span>
    <span class="soon-flag">Coming</span>`;
  const exId = ARS.deckEx && ARS.deckEx[it.id];
  /* Language exercises are loaded by id. They are not listed in exerciseFiles.
     introFor opens its exercise from Next on the last panel, so the tile has no Exercise button. */
  if (it.built && !it.introFor && exId && (hasPlan(exId) || String(exId).indexOf('lang.') === 0)){
    const b = document.createElement('button'); b.type = 'button'; b.className = 'ex-link'; b.textContent = 'Exercise →';
    b.onclick = e => { e.stopPropagation(); openEx(exId); };
    c.appendChild(b);
  }
  const open = () => {
    if (practiceTile) openEx(it.id);
    else openDeck(it.id);
  };
  if (!it.built && plan){
    c.tabIndex = 0; c.setAttribute('role', 'button');
    c.onclick = () => openEx(it.id);
    c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openEx(it.id); } };
  } else if (it.built){
    c.tabIndex = 0; c.setAttribute('role', 'button');
    c.onclick = open;
    c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); } };
  }
  return c;
}

/* ---------- loading a deck's data file ---------- */
function loadDeck(id){
  ARS.decks = ARS.decks || {};
  if (ARS.decks[id]) return Promise.resolve(ARS.decks[id]);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = `data/decks/${id}.js`;
    s.onload = () => ARS.decks[id] ? res(ARS.decks[id]) : rej(new Error('No data in ' + s.src));
    s.onerror = () => rej(new Error('Could not load ' + s.src));
    document.head.appendChild(s);
  });
}

/* ---------- exercise sets and section reviews ----------
   A written file runs here (runEx). A file still marked as a plan shows the plan.
   Cumulative review, in practice.js, uses the same runner. */
function hasPlan(id){ return !!(ARS.exerciseFiles && ARS.exerciseFiles.indexOf(id) >= 0); }
/* A section exercise or review opens in the player. A built exercise that is itself a deck
   (ix.sentences, ix.passages, ix.marking, x.imitation) opens as a deck. x.imitation carries
   introFor, so Next on its last panel opens that exercise and the tile has no Exercise button. */
function playerItem(it){
  if (!it) return false;
  if (it.kind === 'review') return true;
  if (it.kind !== 'exercise') return false;
  return hasPlan(it.id) || it.id.indexOf('.ex.') >= 0;
}
function loadEx(id){
  ARS.exercises = ARS.exercises || {};
  if (ARS.exercises[id]) return Promise.resolve(ARS.exercises[id]);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = `data/exercises/${id}.js`;
    s.onload = () => ARS.exercises[id] ? res(ARS.exercises[id]) : rej(new Error('No data in ' + s.src));
    s.onerror = () => rej(new Error('Could not load ' + s.src));
    document.head.appendChild(s);
  });
}
const TYPE_NAME = { 'mc':'multiple choice', 'mc-marked':'multiple choice on a marked word', 'identify':'identify in the text',
  'count':'count (a number)', 'divide':'divide into syllables', 'form':'give the form', 'transform':'rewrite (correct or transform)',
  'analysis':'parse and construe', 'passage-mc':'questions on a passage', 'mark':'mark the dependences', 'copy':'copy word for word' };
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function openEx(id){
  const homeOf = langScreenOf(id);
  if (homeOf) screenReturn = homeOf;
  loadEx(id).then(ex => {
    if (ex.status === 'written') return runEx(ex);
    showExercisePlan(id, ex);
  }).catch(err => { alert(err.message); });
}
function showExercisePlan(id, ex){
  location.hash = 'ex/' + id;
  $('ex-kind').textContent = ex.kind === 'review' ? 'Section review' : 'Exercise';
  $('ex-title').innerHTML = ex.title;
  if (!ex.covers || !ex.items){
    $('ex-sub').textContent = 'The questions are not yet written.';
    $('ex-body').innerHTML = '';
    show('scr-ex');
    return;
  }
  $('ex-sub').textContent = 'Coming soon: the questions are not yet written.';
    const body = $('ex-body'); body.innerHTML = '';
    const box = document.createElement('div'); box.className = 'q-box ex-plan';
    const covers = ex.covers.map(c => `${c.deck}${c.cards && c.cards.length ? ' (' + c.cards.join(', ') + ')' : ''}`).join('; ');
    const sets = ex.sets ? `A ${ex.sets.A} · B ${ex.sets.B} · C ${ex.sets.C}` : 'fixed order';
    const bal = ex.balancePerSet ? Object.entries(ex.balancePerSet).map(([d, n]) => `${d} ${n}`).join(' · ') : '';
    box.innerHTML = `<div class="qp-label"><span>Plan (to be approved before the questions are written)</span></div>
      <dl><dt>Covers</dt><dd>${esc(covers)}</dd><dt>Skill</dt><dd>${esc(ex.skill)}</dd>
      <dt>Item types</dt><dd>${ex.types.map(x => TYPE_NAME[x] || x).join('; ')}</dd>
      <dt>Slots</dt><dd>${ex.pool} in all; ${sets}; ${esc(ex.rotation)}</dd>
      ${bal ? `<dt>Per set</dt><dd>${esc(bal)}</dd>` : ''}${ex.split ? `<dt>Balance</dt><dd>${esc(ex.split)}</dd>` : ''}
      <dt>Limit</dt><dd>${esc(ex.limit)}</dd><dt>Opened from</dt><dd>${esc(ex.openedFrom)}</dd></dl>`;
    const groups = {};
    ex.items.forEach(x => { const k = x.set || 'Fixed passages'; (groups[k] = groups[k] || []).push(x); });
    Object.keys(groups).forEach(k => {
      const d = document.createElement('details'); d.className = 'ex-set';
      d.innerHTML = `<summary>${k.length === 1 ? 'Set ' + k : k} · ${groups[k].length} empty slots</summary><ol>` +
        groups[k].map(x => `<li><code>${x.id}</code> ${x.work ? esc(x.work) + ', ' + esc(x.selection) + ` (${x.words} words)` :
          esc([x.deck, x.card, x.trope, x.group, x.lang, TYPE_NAME[x.type] || x.type].filter(Boolean).join(' · '))}${x.questions ? ` · ${x.questions.length} questions (${x.questions.map(q => q.task).join(', ')})` : ''} · <i>TODO</i></li>`).join('') + '</ol>';
      box.appendChild(d);
    });
    body.appendChild(box);
    show('scr-ex');
}

/* ---------- running a written exercise set, a review, or a cumulative sitting ----------
   Successive visits give set A, then B, then C, then A again (ITEM-LIST rule 5). The items of a set are given in their
   fixed order (easy to hard); the options of a multiple-choice item are shuffled on each showing, and the key follows
   the option. A wrongly answered item is asked once more at the end of the sitting (build list, item 3). For a written
   set the miss is recorded in store.ex, and the first answer is stored in the Leitner boxes (practice.js). Typed
   answers (count, form, divide, transform, copy, mark, analysis) are drawn and graded here. An item may carry a
   "Why?" prompt with a model answer (no grading). */

/* Normalization shared by count, form, divide, and transform. The cumulative review calls acceptedOf. */
function foldBase(s, item){
  let t = String(s == null ? '' : s);
  t = t.replace(/[\u2018\u2019\u201A\u201B]/g, "'").replace(/[\u201C\u201D\u201E\u201F]/g, '"');
  t = t.replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-');
  t = t.replace(/\s+/g, ' ').trim().toLowerCase();
  if (item && item.macrons === false){
    t = t.replace(/[āēīōūȳ]/g, ch => ({ 'ā':'a', 'ē':'e', 'ī':'i', 'ō':'o', 'ū':'u', 'ȳ':'y' }[ch]));
    t = t.normalize('NFD').replace(/\u0304/g, '');
  }
  t = t.normalize('NFD').replace(/[\u0300-\u036f]/g, m => (m === '\u0304' ? m : '')).normalize('NFC');
  return t;
}
function foldDivide(s, item){
  return foldBase(s, item).replace(/\s*-\s*/g, '-').replace(/-+/g, '-');
}
function foldTransform(s, item){
  let t = foldBase(s, item);
  let prev;
  do {
    prev = t;
    t = t.replace(/[\s.?!;:,…]+(["']+)$/g, '$1');
    t = t.replace(/[\s.?!;:,…]+$/g, '');
  } while (t !== prev);
  return t.replace(/\s+/g, ' ').trim();
}
function foldCount(s, item){
  let t = foldBase(s, item);
  const words = { zero:'0', one:'1', two:'2', three:'3', four:'4', five:'5', six:'6', seven:'7', eight:'8', nine:'9', ten:'10', eleven:'11', twelve:'12', thirteen:'13', fourteen:'14', fifteen:'15', sixteen:'16', seventeen:'17', eighteen:'18', nineteen:'19', twenty:'20' };
  if (words[t]) t = words[t];
  if (/^[0-9]+$/.test(t)) return String(parseInt(t, 10));
  return t;
}
function foldForm(s, item){
  return foldBase(s, item).replace(/\.$/, '');
}
function foldCopy(s){
  return String(s == null ? '' : s)
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .normalize('NFC')
    .replace(/ô/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/Æ/g, 'Ae');
}
function foldOf(item){
  const type = item && item.type;
  if (type === 'count') return s => foldCount(s, item);
  if (type === 'divide') return s => foldDivide(s, item);
  if (type === 'transform') return s => foldTransform(s, item);
  if (type === 'form') return s => foldForm(s, item);
  return s => foldBase(s, item);
}
function acceptedOf(item){
  if (!item) return [];
  if (Array.isArray(item.accept)) return item.accept.map(String);
  if (typeof item.accept === 'string' && item.accept) return [item.accept];
  if (Array.isArray(item.answers)) return item.answers.map(String);
  if (item.type === 'transform' && Array.isArray(item.answer)) return item.answer.map(String);
  if (typeof item.answer === 'string' && item.answer) return [item.answer];
  if (item.type === 'count' && typeof item.answer === 'number' && isFinite(item.answer)) return [String(item.answer)];
  return [];
}
function foldTokens(s, item){
  return foldForm(s, item).split(' ').filter(Boolean).sort().join(' ');
}
function gradeFold(item){
  if (item && item.order === 'any') return s => foldTokens(s, item);
  return foldOf(item);
}
function gradeTypedAnswer(item, given){
  const accepted = acceptedOf(item);
  if (!accepted.length) return false;
  const fold = gradeFold(item);
  const g = fold(given);
  if (!g) return false;
  return accepted.some(a => fold(a) === g);
}
function alsoAccepted(item){
  const accepted = acceptedOf(item);
  if (accepted.length < 2) return [];
  const fold = gradeFold(item);
  const seen = new Set([fold(accepted[0])]);
  const out = [];
  for (let i = 1; i < accepted.length; i++){
    const f = fold(accepted[i]);
    if (!f || seen.has(f)) continue;
    seen.add(f);
    out.push(accepted[i]);
  }
  return out;
}
function gradeCopyAnswer(item, given){
  const text = item && item.text || '';
  const want = foldCopy(text);
  return !!want && foldCopy(given) === want;
}
function normArrows(list){
  const set = new Set();
  (Array.isArray(list) ? list : []).forEach(p => {
    if (!p) return;
    const from = Array.isArray(p) ? p[0] : p.from;
    const to = Array.isArray(p) ? p[1] : p.to;
    if (typeof from !== 'number' || typeof to !== 'number') return;
    set.add(from + '>' + to);
  });
  return set;
}
function sameArrows(a, b){
  const A = normArrows(a), B = normArrows(b);
  if (A.size !== B.size) return false;
  for (const k of A) if (!B.has(k)) return false;
  return true;
}
function gradeMarkAnswer(item, pairs){
  return sameArrows(item && item.analysis, pairs);
}
function parsesOf(slot){
  if (Array.isArray(slot)) return slot.map(String);
  if (slot == null || slot === '') return [];
  return [String(slot)];
}
function foldParse(s, item){
  const t = foldBase(s, item).replace(/,/g, ' ').replace(/\s+/g, ' ').trim();
  const parts = t.split(' ').filter(Boolean);
  if (!parts.length) return '';
  const rest = parts.slice(1).sort();
  return parts[0] + (rest.length ? ' ' + rest.join(' ') : '');
}
function parseMatches(given, slot, item){
  const g = foldParse(given, item);
  if (!g) return false;
  return parsesOf(slot).some(a => foldParse(a, item) === g);
}
function canonicalParse(slot){
  const list = parsesOf(slot);
  return list.length ? list[0] : '';
}
function gradeAnalysisAnswer(item, parses, pairs){
  const stored = (item && item.analysis) || {};
  const want = stored.parse || [];
  const tokens = (item && item.tokens) || [];
  if (want.length !== tokens.length || !parses || parses.length !== tokens.length) return false;
  for (let i = 0; i < want.length; i++){
    if (!parseMatches(parses[i], want[i], item)) return false;
  }
  return sameArrows(stored.arrows, pairs);
}
function alsoAnalysis(item){
  if (!item || item.type !== 'analysis' || !item.analysis) return [];
  const tokens = item.tokens || [];
  const parses = item.analysis.parse || [];
  const out = [];
  tokens.forEach((t, i) => {
    const alts = parsesOf(parses[i]);
    if (alts.length < 2) return;
    const seen = new Set([foldParse(alts[0], item)]);
    alts.slice(1).forEach(a => {
      const f = foldParse(a, item);
      if (!f || seen.has(f)) return;
      seen.add(f);
      out.push(plainToken(t) + ': ' + a);
    });
  });
  return out;
}
function plainToken(t){
  const d = document.createElement('div');
  d.innerHTML = String(t == null ? '' : t);
  return (d.textContent || '').replace(/[.?!;:,…]+$/g, '');
}
function arrowLines(tokens, pairs){
  return (Array.isArray(pairs) ? pairs : []).map(p => Array.isArray(p) ? p : [p && p.from, p && p.to])
    .filter(p => typeof p[0] === 'number' && typeof p[1] === 'number' && tokens[p[0]] != null && tokens[p[1]] != null)
    .slice().sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map(p => plainToken(tokens[p[0]]) + ' → ' + plainToken(tokens[p[1]]))
    .join('\n');
}
function analysisText(tokens, parses, pairs){
  const lines = tokens.map((t, i) => plainToken(t) + ': ' + canonicalParse(parses && parses[i]));
  const arrows = arrowLines(tokens, pairs);
  return lines.join('\n') + (arrows ? '\n' + arrows : '');
}
const BESIDE = { count:1, form:1, divide:1, transform:1, copy:1, mark:1, analysis:1 };
function makeCheck(){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'btn primary'; b.textContent = 'Check';
  return b;
}
function renderTypedItem(host, it, done){
  const row = document.createElement('div');
  row.className = 'ex-typed' + (it.type === 'transform' ? ' ex-block' : '');
  const input = document.createElement(it.type === 'transform' ? 'textarea' : 'input');
  if (input.tagName === 'TEXTAREA') input.rows = 3;
  else input.type = 'text';
  input.className = 'answer-in';
  input.setAttribute('aria-label', 'Answer');
  input.autocomplete = 'off';
  input.spellcheck = false;
  const accepted = acceptedOf(it);
  if (accepted.length && accepted.every(a => /^[0-9]+$/.test(a))) input.placeholder = 'Enter a number';
  const btn = makeCheck();
  row.appendChild(input);
  row.appendChild(btn);
  host.appendChild(row);
  const submit = () => {
    const given = input.value;
    if (!String(given).trim()) return;
    const ok = gradeTypedAnswer(it, given);
    input.disabled = true;
    input.classList.add(ok ? 'right' : 'wrong');
    btn.disabled = true;
    done(ok, given, acceptedOf(it)[0] || '');
  };
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', ev => {
    if (ev.key !== 'Enter' || ev.shiftKey) return;
    ev.preventDefault();
    submit();
  });
  setTimeout(() => input.focus(), 0);
}
function renderCopyItem(host, it, done){
  const wrap = document.createElement('div'); wrap.className = 'ex-copy';
  const model = document.createElement('div'); model.className = 'ex-copy-col';
  const mh = document.createElement('span'); mh.className = 'ex-compare-h'; mh.textContent = 'The passage';
  const body = document.createElement('div'); body.className = 'ex-copy-text'; body.textContent = it.text || '';
  model.appendChild(mh); model.appendChild(body);
  const write = document.createElement('div'); write.className = 'ex-copy-col';
  const wh = document.createElement('span'); wh.className = 'ex-compare-h'; wh.textContent = 'The copy';
  const input = document.createElement('textarea');
  input.className = 'answer-in'; input.rows = 6;
  input.setAttribute('aria-label', 'Copy');
  input.autocomplete = 'off'; input.spellcheck = false;
  write.appendChild(wh); write.appendChild(input);
  wrap.appendChild(model); wrap.appendChild(write);
  host.appendChild(wrap);
  const btn = makeCheck();
  host.appendChild(btn);
  const submit = () => {
    const given = input.value;
    if (!String(given).trim()) return;
    const ok = gradeCopyAnswer(it, given);
    input.disabled = true;
    input.classList.add(ok ? 'right' : 'wrong');
    btn.disabled = true;
    done(ok, given, it.text || '');
  };
  btn.addEventListener('click', submit);
  input.addEventListener('paste', ev => ev.preventDefault());
  input.addEventListener('keydown', ev => {
    if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)){ ev.preventDefault(); submit(); }
  });
  setTimeout(() => input.focus(), 0);
}
function copyDiffHtml(given, passage){
  const gw = foldCopy(given).split(' ').filter(Boolean);
  const ww = foldCopy(passage).split(' ').filter(Boolean);
  let i = 0;
  while (i < gw.length && i < ww.length && gw[i] === ww[i]) i++;
  const mine = i < gw.length ? gw[i] : '';
  const want = i < ww.length ? ww[i] : '';
  if (mine && want) return `The first word that differs is <mark class="ex-diff">“${esc(mine)}”</mark>. The passage has “${esc(want)}”.`;
  if (want) return `The copy ends before <mark class="ex-diff">“${esc(want)}”</mark>.`;
  if (mine) return `The first word that differs is <mark class="ex-diff">“${esc(mine)}”</mark>. The passage ends before that word.`;
  return '';
}
function renderArrowMarker(host, tokens){
  const hint = document.createElement('p'); hint.className = 'ex-hint';
  hint.textContent = 'Click the word that depends, then the word it depends on; each pair of clicks draws one arrow. Press Check when every dependence is marked.';
  const row = document.createElement('div'); row.className = 'ex-tokens';
  const list = document.createElement('div'); list.className = 'ex-arrows';
  const pairs = [];
  let pending = null;
  function paint(){
    list.replaceChildren();
    pairs.forEach((p, n) => {
      const line = document.createElement('div'); line.className = 'ex-arrow';
      const s = document.createElement('span');
      s.textContent = plainToken(tokens[p[0]]) + ' → ' + plainToken(tokens[p[1]]);
      const rm = document.createElement('button');
      rm.type = 'button'; rm.className = 'ex-bin'; rm.textContent = 'Remove';
      rm.addEventListener('click', () => { pairs.splice(n, 1); paint(); });
      line.appendChild(s); line.appendChild(rm);
      list.appendChild(line);
    });
  }
  tokens.forEach((t, k) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'opt ex-token'; b.innerHTML = t;
    b.addEventListener('click', () => {
      if (b.disabled) return;
      if (pending === null){
        pending = k;
        row.querySelectorAll('button').forEach(x => x.classList.remove('sel'));
        b.classList.add('sel');
        return;
      }
      row.querySelectorAll('button').forEach(x => x.classList.remove('sel'));
      if (pending !== k && !pairs.some(p => p[0] === pending && p[1] === k)){
        pairs.push([pending, k]);
        paint();
      }
      pending = null;
    });
    row.appendChild(b);
  });
  host.appendChild(hint); host.appendChild(row); host.appendChild(list);
  return {
    pairs: pairs,
    lock(want){
      const set = normArrows(want);
      row.querySelectorAll('button').forEach(x => { x.disabled = true; x.classList.remove('sel'); });
      list.querySelectorAll('.ex-arrow').forEach((line, n) => {
        const p = pairs[n];
        line.classList.add(set.has(p[0] + '>' + p[1]) ? 'right' : 'wrong');
        const rm = line.querySelector('button');
        if (rm) rm.disabled = true;
      });
    }
  };
}
function renderMarkItem(host, it, done){
  const tokens = it.tokens || [];
  const marks = renderArrowMarker(host, tokens);
  const btn = makeCheck();
  host.appendChild(btn);
  btn.addEventListener('click', () => {
    if (!marks.pairs.length) return;
    const ok = gradeMarkAnswer(it, marks.pairs);
    marks.lock(it.analysis);
    btn.disabled = true;
    done(ok, arrowLines(tokens, marks.pairs), arrowLines(tokens, it.analysis));
  });
  setTimeout(() => {
    const first = host.querySelector('.ex-token');
    if (first) first.focus();
  }, 0);
}
function renderAnalysisItem(host, it, done){
  const tokens = it.tokens || [];
  const hint = document.createElement('p'); hint.className = 'ex-hint';
  hint.textContent = 'Type the part of speech, then its accidents, separated by commas (e.g., noun, plural).';
  host.appendChild(hint);
  const rows = document.createElement('div'); rows.className = 'ex-analysis';
  const inputs = [];
  tokens.forEach(t => {
    const line = document.createElement('div'); line.className = 'ex-analysis-row';
    const word = document.createElement('div'); word.className = 'ex-analysis-word'; word.innerHTML = t;
    const input = document.createElement('input');
    input.type = 'text'; input.className = 'answer-in';
    input.setAttribute('aria-label', 'Parse of ' + plainToken(t));
    input.autocomplete = 'off'; input.spellcheck = false;
    line.appendChild(word); line.appendChild(input);
    rows.appendChild(line);
    inputs.push(input);
  });
  host.appendChild(rows);
  const marks = renderArrowMarker(host, tokens);
  const btn = makeCheck();
  host.appendChild(btn);
  btn.addEventListener('click', () => {
    const parses = inputs.map(el => el.value);
    if (parses.every(s => !String(s).trim()) && !marks.pairs.length) return;
    const ok = gradeAnalysisAnswer(it, parses, marks.pairs);
    const want = (it.analysis && it.analysis.parse) || [];
    inputs.forEach((el, i) => {
      el.disabled = true;
      el.classList.add(parseMatches(el.value, want[i], it) ? 'right' : 'wrong');
    });
    marks.lock(it.analysis && it.analysis.arrows);
    btn.disabled = true;
    done(ok, analysisText(tokens, parses, marks.pairs), analysisText(tokens, want, it.analysis && it.analysis.arrows));
  });
  setTimeout(() => { if (inputs[0]) inputs[0].focus(); }, 0);
}
let run = null;   // { ex, set, queue, n, k, first: {id: right?}, retried: {id:true} }
function exState(id){ store.ex = store.ex || {}; return store.ex[id] || (store.ex[id] = { visits:0 }); }
function runQueue(spec){
  const items = (spec.items || []).slice();
  run = { ex: spec.ex || null, set: spec.set || '', queue: items, n: items.length, k:0, first:{}, retried:{} };
  if (spec.hash) location.hash = spec.hash;
  $('ex-home').textContent = screenReturn ? '← Back' : '← All sections';
  $('ex-kind').textContent = spec.kind || '';
  $('ex-title').innerHTML = spec.title || '';
  $('ex-sub').innerHTML = spec.sub || '';
  show('scr-ex');
  renderItem();
}
/* A one-question set is stored once, with set "all". That item is asked with every set
   that has questions of its own, and it is the whole sitting when a set has none. */
function itemsForSet(ex, set){
  const items = ex.items || [];
  const own = items.filter(x => x.set === set);
  const shared = items.filter(x => x.set === 'all');
  if (own.length) return own.concat(shared);
  if (shared.length) return shared;
  return [];
}
function runEx(ex){
  const st = exState(ex.id);
  st.visits += 1;
  save();
  if (typeof ex.fresh === 'function'){
    const items = ex.fresh(20);
    runQueue({
      ex: ex, set: '', items: items, hash: 'ex/' + ex.id,
      kind: ex.kind === 'review' ? 'Section review' : 'Exercise',
      title: ex.title,
      sub: `${items.length} questions, drawn fresh. ${ex.instr || ''}`
    });
    return;
  }
  const forms = ex.sets ? Object.keys(ex.sets) : FORMS;
  const set = forms[(st.visits - 1) % forms.length];
  const items = itemsForSet(ex, set);
  runQueue({
    ex: ex, set: set, items: items, hash: 'ex/' + ex.id,
    kind: ex.kind === 'review' ? 'Section review' : 'Exercise',
    title: ex.title,
    sub: `Set ${set} · ${items.length} questions. ${ex.instr || ''}`
  });
}
function renderItem(){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
  const body = $('ex-body'); body.innerHTML = '';
  if (run.k >= run.queue.length) return renderSummary();
  const it = run.queue[run.k], again = run.k >= run.n;
  const box = document.createElement('div'); box.className = 'q-box qp ex-item';
  box.innerHTML = `<div class="qp-label"><span>${again ? 'Asked again' : 'Question'}</span><span class="qp-form">${again ? '' : `${run.k + 1} of ${run.n}`}</span></div>
    <div class="q-prompt">${it.prompt}</div><div class="opts"></div><div class="fb"></div>`;
  const opts = box.querySelector('.opts');
  const done = (ok, given, right) => finishItem(box, it, ok, given, right);
  if (it.type === 'mc' || it.type === 'mc-marked'){
    shuffled(it.options.map((_, k) => k)).forEach(k => {
      const b = document.createElement('button'); b.className = 'opt'; b.innerHTML = it.options[k]; b.dataset.k = k;
      b.onclick = () => {
        opts.querySelectorAll('button').forEach(x => { x.disabled = true; if (+x.dataset.k === it.answer) x.classList.add(k === it.answer ? 'right' : 'reveal'); });
        if (k !== it.answer) b.classList.add('wrong');
        done(k === it.answer, null, it.options[it.answer]);
      };
      opts.appendChild(b);
    });
  } else if (it.type === 'identify' && Array.isArray(it.answer)){   // click every word asked for, then check
    const row = document.createElement('div'); row.className = 'ex-tokens';
    const picked = new Set();
    it.tokens.forEach((t, k) => {
      const b = document.createElement('button'); b.className = 'opt ex-token'; b.innerHTML = t;
      b.onclick = () => { picked.has(k) ? picked.delete(k) : picked.add(k); b.classList.toggle('sel', picked.has(k)); };
      row.appendChild(b);
    });
    const go = document.createElement('div');
    go.innerHTML = `<button class="btn primary" type="button">Check</button>`;
    go.querySelector('button').onclick = () => {
      if (!picked.size) return;
      const want = new Set(it.answer);
      row.querySelectorAll('button').forEach((x, j) => {
        x.disabled = true; x.classList.remove('sel');
        if (want.has(j)) x.classList.add(picked.has(j) ? 'right' : 'reveal');
        else if (picked.has(j)) x.classList.add('wrong');
      });
      go.querySelector('button').disabled = true;
      const ok = picked.size === want.size && [...want].every(j => picked.has(j));
      done(ok, null, it.answer.map(j => it.tokens[j]).join(', '));
    };
    opts.appendChild(row); opts.appendChild(go);
  } else if (it.type === 'sort'){   // put each entry in one of the bins, then check
    const tbl = document.createElement('div'); tbl.className = 'ex-sort';
    const ord = shuffled(it.entries.map((_, k) => k));   // entries in a fresh random order on every showing
    const ans = ord.map(k => it.answer[k]);
    const chosen = ord.map(() => null);
    ord.map(k => it.entries[k]).forEach((e, r) => {
      const line = document.createElement('div'); line.className = 'ex-sort-row';
      line.innerHTML = `<div class="ex-sort-entry">${e}</div><div class="ex-sort-bins"></div>`;
      const bins = line.querySelector('.ex-sort-bins');
      it.bins.forEach((bn, c) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'ex-bin'; b.innerHTML = bn;
        b.onclick = () => { chosen[r] = c; bins.querySelectorAll('button').forEach((x, j) => x.classList.toggle('sel', j === c)); };
        bins.appendChild(b);
      });
      tbl.appendChild(line);
    });
    const go = document.createElement('div');
    go.innerHTML = `<button class="btn primary" type="button">Check</button>`;
    go.querySelector('button').onclick = () => {
      if (chosen.some(c => c === null)) return;
      tbl.querySelectorAll('.ex-sort-row').forEach((line, r) => {
        line.querySelectorAll('button').forEach((x, j) => {
          x.disabled = true; x.classList.remove('sel');
          if (j === ans[r]) x.classList.add(chosen[r] === j ? 'right' : 'reveal');
          else if (chosen[r] === j) x.classList.add('wrong');
        });
      });
      go.querySelector('button').disabled = true;
      const ok = chosen.every((c, r) => c === ans[r]);
      done(ok, null, ord.map((k, r) => it.entries[k] + ': ' + it.bins[ans[r]]).join('<br>'));
    };
    opts.appendChild(tbl); opts.appendChild(go);
  } else if (it.type === 'identify'){
    const row = document.createElement('div'); row.className = 'ex-tokens';
    it.tokens.forEach((t, k) => {
      const b = document.createElement('button'); b.className = 'opt ex-token'; b.innerHTML = t;
      b.onclick = () => {
        row.querySelectorAll('button').forEach((x, j) => { x.disabled = true; if (j === it.answer) x.classList.add(k === it.answer ? 'right' : 'reveal'); });
        if (k !== it.answer) b.classList.add('wrong');
        done(k === it.answer, null, it.tokens[it.answer]);
      };
      row.appendChild(b);
    });
    opts.appendChild(row);
  } else if (it.type === 'count' || it.type === 'form' || it.type === 'divide' || it.type === 'transform'){
    renderTypedItem(opts, it, done);
  } else if (it.type === 'copy'){
    renderCopyItem(opts, it, done);
  } else if (it.type === 'mark'){
    renderMarkItem(opts, it, done);
  } else if (it.type === 'analysis'){
    renderAnalysisItem(opts, it, done);
  } else {
    const note = document.createElement('p');
    note.className = 'ex-hint';
    note.textContent = 'This item type is not yet available.';
    opts.appendChild(note);
  }
  body.appendChild(box);
}
function finishItem(box, it, ok, given, right){
  const firstPass = !(it.id in run.first);
  if (firstPass){
    run.first[it.id] = ok;
    if (ARS.noteAnswer) ARS.noteAnswer(it, ok);
  }
  if (!ok){
    if (run.ex){
      const st = exState(run.ex.id); st.due = st.due || [];
      if (st.due.indexOf(it.id) < 0) st.due.push(it.id); save();
    }
    if (!run.retried[it.id]){ run.retried[it.id] = true; run.queue.push(it); }
  }
  const copyWrong = it.type === 'copy' && !ok;
  const beside = !!BESIDE[it.type] && !copyWrong;
  const compare = beside
    ? `<div class="ex-compare"><div class="ex-compare-col"><span class="ex-compare-h">Your answer</span><div class="ex-compare-body">${esc(given == null ? '' : given)}</div></div><div class="ex-compare-col"><span class="ex-compare-h">The correct answer</span><div class="ex-compare-body">${esc(right == null ? '' : right)}</div></div></div>`
    : '';
  const diff = copyWrong ? copyDiffHtml(given, it.text || '') : '';
  const extras = it.type === 'analysis' ? alsoAnalysis(it) : alsoAccepted(it);
  let alsoBody = extras.map(a => esc(a)).join('; ');
  if (alsoBody && !/[.?!]$/.test(alsoBody)) alsoBody += '.';
  const alsoHtml = alsoBody ? `<span class="also">Also accepted: ${alsoBody}</span>` : '';
  const mine = !beside && !copyWrong && given != null ? `Your answer: <b>${esc(given)}</b>. ` : '';
  const fb = box.querySelector('.fb');
  fb.innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><span class="verdict">${ok ? 'Correct' : 'Incorrect'}</span>` +
    compare + (diff ? diff + '<br>' : '') + alsoHtml + (ok ? mine : (beside || copyWrong ? '' : `${mine}${right != null ? `The correct answer is: ${right}.` : 'The correct answers are marked above.'}<br>`)) + `${it.explain}` +
    (it.why ? `<div class="ex-why"><div class="q-prompt">${it.why.prompt}</div><textarea rows="2" aria-label="Your reason"></textarea>
      <p class="ex-hint" data-act="why-hint">Write at least a few words first.</p>
      <div><button class="btn" type="button" data-act="model" disabled>Show the model answer</button></div><div class="ex-model" hidden>${it.why.model}</div></div>` : '') +
    `<div><button class="btn primary" type="button" data-act="next">Next →</button></div></div>`;
  const mb = fb.querySelector('[data-act="model"]');
  if (mb){
    const ta = fb.querySelector('.ex-why textarea');
    const hint = fb.querySelector('[data-act="why-hint"]');
    let shown = false;
    const sync = () => {
      if (shown) return;
      const ready = ta.value.trim().length >= 10;
      mb.disabled = !ready;
      if (hint) hint.hidden = ready;
    };
    ta.addEventListener('input', sync);
    mb.onclick = () => {
      shown = true;
      fb.querySelector('.ex-model').hidden = false;
      mb.disabled = true;
      if (hint) hint.hidden = true;
    };
  }
  const nb = fb.querySelector('[data-act="next"]');
  nb.onclick = () => { run.k += 1; renderItem(); window.scrollTo(0, 0); };
  nb.focus({ preventScroll:true });
}
function renderSummary(){
  if (run.ex){
    const st = exState(run.ex.id);
    if (!st.done) st.doneAt = Date.now();
    st.done = true;
    save();
  }
  const ids = Object.keys(run.first), right = ids.filter(i => run.first[i]).length;
  const byId = {};
  const listed = (run.ex && run.ex.items && run.ex.items.length) ? run.ex.items : run.queue;
  listed.forEach(x => { if (x && x.id) byId[x.id] = x; });
  const missed = ids.filter(i => run.first[i] === false).map(i => byId[i]).filter(Boolean);
  const body = $('ex-body'); body.innerHTML = '';
  const box = document.createElement('div'); box.className = 'q-box qp';
  const finished = run.set ? ('Set ' + run.set + ' finished') : (run.ex ? 'Exercise finished' : 'Review finished');
  box.innerHTML = `<div class="qp-label"><span>${finished}</span></div>
    <div class="q-prompt">${right} of ${ids.length} answered correctly the first time.</div>` +
    (missed.length ? `<p>Missed (kept for later review):</p><ol>${missed.map(x => `<li>${x.prompt}</li>`).join('')}</ol>` : '') +
    `<div><button class="btn primary" type="button">Back to the course</button></div>`;
  box.querySelector('button').onclick = () => {
    if (run.ex && run.set && String(run.ex.id).indexOf('lang.') !== 0) noteReciteNudge(run.ex.id + ':' + run.set, run.ex.title + ', Set ' + run.set);
    goHome();
  };
  body.appendChild(box);
}

/* ---------- the deck ---------- */
let cur = null;   // { deck, i, start, qp: { [qpId]: { v, status, chosen } } }

function openDeck(id){
  loadDeck(id).then(deck => {
    const homeOf = langScreenOf(id);
    if (homeOf) screenReturn = homeOf;
    const st = deckState(id);
    st.opens += 1; save();
    // Each opening starts every question point on the next form: A, then B, then C, then A again.
    const start = (st.opens - 1) % 3;
    const spec = ARS.structure.flatMap(s => s.items).find(x => x.id === id);
    if (spec && spec.introFor) deck.introFor = spec.introFor;
    cur = { deck, i:0, start, qp:{} };
    location.hash = 'deck/' + id;
    $('deck-home').textContent = screenReturn ? '← Back' : '← All sections';
    $('deck-title').innerHTML = deck.title;
    $('deck-sub').innerHTML = deck.sub || '';
    show('scr-deck');
    renderPanel();
  }).catch(err => { alert(err.message); });
}

function shuffled(a){
  for (let j = a.length - 1; j > 0; j--){ const r = Math.floor(Math.random() * (j + 1)); [a[j], a[r]] = [a[r], a[j]]; }
  return a;
}
function qpState(qp){
  return cur.qp[qp.id] || (cur.qp[qp.id] = { v:cur.start, status:'open', chosen:null });
}

function renderPanel(){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
  const { deck, i } = cur, p = deck.panels[i], n = deck.panels.length;
  $('deck-count').textContent = `Panel ${i + 1} of ${n}`;
  $('deck-progress').style.width = `${((i + 1) / n) * 100}%`;
  const body = $('deck-body'); body.innerHTML = '';
  const panel = document.createElement('div'); panel.className = 'panel';
  panel.innerHTML = `<h2>${p.title}</h2>${p.body}` +
    (i === 0 && deck.sources ? `<div class="psrc"><b>Sources</b>${deck.sources}</div>` : '');
  body.appendChild(panel);
  if (p.qp) body.appendChild(renderQP(p.qp));
  // A question point not yet written: shown as a marked placeholder for review (qpTodo: what it will test).
  if (!p.qp && p.qpTodo){ const t = document.createElement('div'); t.className = 'q-box qp qp-todo';
    t.innerHTML = `<div class="qp-label"><span>Question point (to be written)</span></div><div class="q-prompt">${p.qpTodo}</div>`; body.appendChild(t); }
  $('deck-prev').disabled = i === 0;
  $('deck-next').textContent = (i === n - 1 && !deck.introFor) ? 'Finish' : 'Next →';
  updateNext();
}

function updateNext(){
  const p = cur.deck.panels[cur.i];
  const blocked = p.qp && qpState(p.qp).status !== 'correct';
  $('deck-next').disabled = !!blocked;
  $('deck-hint').textContent = blocked ? 'The question must be answered correctly before going on.' : '';
}

function renderQP(qp){
  const s = qpState(qp), v = qp.variants[s.v];
  const box = document.createElement('div'); box.className = 'q-box qp';
  box.innerHTML = `<div class="qp-label"><span>Question</span><span class="qp-form">Form ${FORMS[s.v]}</span></div>
    <div class="q-prompt">${v.prompt}</div><div class="opts"></div><div class="fb"></div>`;
  const opts = box.querySelector('.opts');
  // Options are shown in a shuffled order, fixed for this variant during this opening of the deck and reshuffled on
  // the next opening (Timothy, 17 Oct 2026). k is always the option's index in the data, so the answer key follows
  // the option, not its position on the screen.
  s.orders = s.orders || {};
  const order = s.orders[s.v] || (s.orders[s.v] = shuffled(v.options.map((_, k) => k)));
  order.forEach(k => {
    const o = v.options[k];
    const b = document.createElement('button'); b.className = 'opt'; b.innerHTML = o;
    if (s.status !== 'open'){
      b.disabled = true;
      if (k === v.answer) b.classList.add(s.status === 'correct' ? 'right' : 'reveal');
      if (s.status === 'wrong' && k === s.chosen) b.classList.add('wrong');
    }
    b.onclick = () => answer(qp, k);
    opts.appendChild(b);
  });
  const fb = box.querySelector('.fb');
  if (s.status === 'correct'){
    fb.innerHTML = `<div class="feedback good"><span class="verdict">Correct</span>${v.explain}</div>`;
  } else if (s.status === 'wrong'){
    fb.innerHTML = `<div class="feedback bad"><span class="verdict">Incorrect</span>The correct answer is: ${v.options[v.answer]}.<br>${v.explain}
      <div><button class="btn primary" type="button">Next question</button></div></div>`;
    fb.querySelector('button').onclick = () => {
      // The wrong-answer cycle: the next form of the same question point (A, B, C, then A again).
      s.v = (s.v + 1) % 3; s.status = 'open'; s.chosen = null; rerenderQP(qp);
    };
  }
  return box;
}
function rerenderQP(qp){
  const old = document.querySelector('#deck-body .qp');
  old.replaceWith(renderQP(qp));
  updateNext();
}
function answer(qp, k){
  const s = qpState(qp), v = qp.variants[s.v];
  if (s.status !== 'open') return;
  s.chosen = k; s.status = k === v.answer ? 'correct' : 'wrong';
  rerenderQP(qp);
}

function nextPanel(){
  if ($('deck-next').disabled) return;
  if (cur.i < cur.deck.panels.length - 1){ cur.i += 1; renderPanel(); window.scrollTo(0, 0); return; }
  if (cur.deck.introFor){ openEx(cur.deck.introFor); return; }
  const st = deckState(cur.deck.id);
  const first = !st.done;
  if (first) st.doneAt = Date.now();
  st.done = true;
  if (first && String(cur.deck.id).indexOf('lang.') !== 0) noteReciteNudge(cur.deck.id, cur.deck.title);
  save();
  const id = cur.deck.id; goHome();
  const card = document.querySelector(`.set-card[data-id="${id}"]`);
  if (card){ card.scrollIntoView({block:'center'}); card.focus({preventScroll:true}); }
}
function prevPanel(){ if (cur.i > 0){ cur.i -= 1; renderPanel(); window.scrollTo(0, 0); } }

function goHome(){
  if (screenReturn){
    const backId = (cur && cur.deck && cur.deck.id) || (run && run.ex && run.ex.id) || '';
    const id = screenReturn;
    openLang(id);
    const focusId = (backId && deckForExercise(backId)) || backId;
    const card = focusId && document.querySelector('#lang-grid .set-card[data-id="' + focusId.replace(/"/g, '') + '"]');
    if (card){ card.scrollIntoView({ block:'center' }); card.focus({ preventScroll:true }); }
    return;
  }
  clearHash(); buildHome(); show('scr-home');
}

/* A finished study deck, exercise set, or section review is named once, on the main page.
   Shown is recorded when the callout is displayed, so a later return home does not show it again.
   Closing it, or opening the tablet while it is up, also clears anything still waiting. */
function nudgeBag(){
  if (!store.reciteNudges || typeof store.reciteNudges !== 'object') store.reciteNudges = { shown: {}, pending: [] };
  if (!store.reciteNudges.shown || typeof store.reciteNudges.shown !== 'object') store.reciteNudges.shown = {};
  if (!Array.isArray(store.reciteNudges.pending)) store.reciteNudges.pending = [];
  return store.reciteNudges;
}
function noteReciteNudge(id, name){
  if (!id || !name) return;
  const bag = nudgeBag();
  if (bag.shown[id] || bag.pending.some(p => p && p.id === id)) return;
  bag.pending.push({ id: id, name: name, at: Date.now() });
  save();
}
function concealReciteNudge(){
  const el = $('recite-callout'), icon = $('recite-open');
  if (el) el.hidden = true;
  if (icon) icon.classList.remove('is-glow');
  document.body.classList.remove('recite-nudge');
}
function dismissReciteNudge(){
  const el = $('recite-callout');
  if (!el || el.hidden) return;
  const bag = nudgeBag();
  bag.pending.forEach(p => { if (p && p.id) bag.shown[p.id] = true; });
  bag.pending = [];
  save();
  concealReciteNudge();
}
function refreshReciteNudge(){
  const home = $('scr-home');
  if (!home || !home.classList.contains('active')) { concealReciteNudge(); return; }
  const bag = nudgeBag();
  const pending = bag.pending.filter(p => p && p.id && !bag.shown[p.id]);
  if (!pending.length) { concealReciteNudge(); return; }
  const item = pending.slice().sort((a, b) => (b.at || 0) - (a.at || 0))[0];
  const el = $('recite-callout'), name = $('recite-callout-name'), icon = $('recite-open');
  if (!el || !name) return;
  name.innerHTML = item.name;
  el.hidden = false;
  if (icon) icon.classList.add('is-glow');
  document.body.classList.add('recite-nudge');
  bag.shown[item.id] = true;
  bag.pending = bag.pending.filter(p => !p || p.id !== item.id);
  save();
}

/* ---------- controls ---------- */
function setDark(on){ store.dark = on; document.body.classList.toggle('dark', on); $('dark-toggle').textContent = on ? '☀' : '☾'; save(); }
$('dark-toggle').onclick = () => setDark(!store.dark);
$('deck-next').onclick = nextPanel;
$('deck-prev').onclick = prevPanel;
$('deck-home').onclick = goHome;
$('ex-home').onclick = goHome;
$('lang-home').onclick = leaveLang;
$('done-home').onclick = goHome;
$('done-again').onclick = () => openDeck(cur.deck.id);
$('recite-callout').onclick = dismissReciteNudge;
document.addEventListener('keydown', e => {
  if (!$('scr-deck').classList.contains('active')) return;
  if (e.target.closest && e.target.closest('button') && e.key === 'Enter') return;
  if (e.key === 'ArrowRight') nextPanel();
  if (e.key === 'ArrowLeft') prevPanel();
});

setDark(!!store.dark);
linkLangDeckExercises();
buildHome();
const lx = location.hash.match(/^#lang\/(.+)$/);
if (lx) openLang(decodeURIComponent(lx[1]));
const mx = location.hash.match(/^#ex\/(.+)$/);
if (mx && (hasPlan(mx[1]) || langScreenOf(mx[1]))) openEx(mx[1]);
const m = location.hash.match(/^#deck\/(.+)$/);
if (m){
  const it = ARS.structure.flatMap(s => s.items).find(x => x.id === m[1] && x.built && !playerItem(x));
  if (it) openDeck(it.id);
  else if (langScreenOf(m[1])) openDeck(m[1]);
}
if (!location.hash.match(/^#(ex|deck|cumul)\//)) refreshReciteNudge();
