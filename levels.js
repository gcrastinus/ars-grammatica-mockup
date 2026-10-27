'use strict';
/* ================================================================
   COURSE LEVELS (Essentials, Proficient, Mastered, Comprehensive): ARS.CL
   The assignments are in data/tiers.js (one line per deck). This file answers, for the level chosen:
   which decks, exercises, reviews, passages, and stages are open; and it keeps the choices
   (level, language) and the place left at each level.

   Stored in the course record (ars-grammatica-course-v2), beside what is already there:
     store.view   = { level:'essentials', lang:'en', lastLang:'en' }      the last choices
     store.levels = { essentials: { guided:{ step, at }, free:{ item, section, at } }, ... }
     store.decks[id].parts = [passage ids]       the passages finished, for the split decks of Section IX
   Free Practice or Guided Path stays in its own key (ars-grammatica-path), as before.
   Nothing already stored is changed or removed.

   Names: "courseLevel" here; "stage" for an exercise's own levels (data field "level", shown as Stage I, II, ...);
   guided.js keeps TIERS for the sections of the Guided Path.
   Load after data/tiers.js and before course.js.
   ================================================================ */
(function(){
const T = (window.ARS && ARS.tiers) || { order:['comprehensive'], names:{ comprehensive:'Comprehensive' }, items:{}, passages:{} };
const ORDER = T.order;
const TOP = ORDER.length - 1;
const LANG_CODES = ['en', 'la', 'grc', 'es', 'de', 'fr'];
const DESC = {
  essentials: 'The essentials of grammar: the letter and the syllable, the eight parts of speech, the plain construction of the sentence, and the forms of the language chosen.',
  proficient: 'A full school grammar: Essentials, with voice, quantity and accent, word formation, the rest of construction, the common errors, the tropes, and the first reading passages.',
  mastered: 'Proficient, with the higher doctrine of the grammarians, meter, the figures, supposition, translation, the classical composition exercises, and the model passages.',
  comprehensive: 'The whole course, with the other classical traditions and modern linguistics, Imitation, and every reading passage.'
};

const st = () => (typeof courseStore === 'function' ? courseStore() : {});
const persist = () => { if (typeof save === 'function') save(); };
function view(){
  const s = st();
  if (!s.view || typeof s.view !== 'object') s.view = {};
  if (ORDER.indexOf(s.view.level) < 0) s.view.level = ORDER[0];
  if (s.view.lang !== 'all' && LANG_CODES.indexOf(s.view.lang) < 0) s.view.lang = 'en';
  if (LANG_CODES.indexOf(s.view.lastLang) < 0) s.view.lastLang = s.view.lang === 'all' ? 'en' : s.view.lang;
  return s.view;
}
function guidedNow(){
  if (window.GP && GP.isGuided) return GP.isGuided();
  try { return window.localStorage.getItem('ars-grammatica-path') === 'guided'; } catch (e) { return false; }
}

function current(){ return view().level; }
function idx(k){ const i = ORDER.indexOf(k); return i < 0 ? TOP : i; }
/* The language in force: on the Guided Path there is always one language. */
function lang(){
  const v = view();
  if (v.lang === 'all' && guidedNow()) return v.lastLang;
  return v.lang;
}
function langShown(code){ const l = lang(); return l === 'all' || l === code; }

/* exercise id -> deck id, from the Exercise buttons (ARS.deckEx, completed in course.js) */
let rev = null, revSize = -1;
function deckOfEx(id){
  const m = ARS.deckEx || {};
  const n = Object.keys(m).length;
  if (!rev || n !== revSize){ rev = {}; Object.keys(m).forEach(d => { if (!rev[m[d]]) rev[m[d]] = d; }); revSize = n; }
  return rev[id] || '';
}
function levelOf(id){
  if (T.items[id]) return T.items[id];
  const d = deckOfEx(id);
  if (d && T.items[d]) return T.items[d];
  return ORDER[TOP];
}
function open(id, lv){ return idx(levelOf(id)) <= idx(lv || current()); }
function isReview(id){
  for (const s of ARS.structure || []) for (const it of s.items) if (it.id === id) return it.kind === 'review';
  return false;
}

/* stages: Stage s of a set first open at the deck's level opens at min(top level, deck's level + s - 1) */
function stageCap(ex, lv){
  if (!ex || !ex.levels) return Infinity;
  const k = idx(lv || current());
  if (k >= TOP) return ex.levels.top;
  return Math.max(1, Math.min(ex.levels.top, k - idx(levelOf(ex.id)) + 1));
}

/* split decks: the passages open at a level (null when the deck is not split) */
function passagesOpen(deckId, lv){
  const p = T.passages && T.passages[deckId];
  if (!p) return null;
  const k = idx(lv || current());
  if (k >= TOP) return new Set(p.all);
  const name = ORDER[k];
  if (p[name]) return new Set(p[name]);
  /* a level below the deck's first level: the first level's list; above Mastered: all */
  for (let j = k; j >= 0; j--) if (p[ORDER[j]]) return new Set(p[ORDER[j]]);
  return new Set();
}
/* panel index -> passage id, for a split deck */
function passageMap(deck){
  const p = T.passages && T.passages[deck.id];
  if (!p) return null;
  const starts = new Set(p.all);
  let curP = null;
  return deck.panels.map(x => { if (starts.has(x.id)) curP = x.id; return curP || p.all[0]; });
}
function panelsOf(deck, lv){
  const okSet = passagesOpen(deck.id, lv);
  if (!okSet) return deck.panels;
  const map = passageMap(deck);
  const out = deck.panels.filter((x, i) => okSet.has(map[i]));
  return out.length ? out : deck.panels;
}
function deckDone(id, lv){
  const s = st().decks && st().decks[id];
  if (!s || !s.done) return false;
  const okSet = passagesOpen(id, lv);
  if (!okSet) return true;
  if (!Array.isArray(s.parts)) return idx(lv || current()) >= TOP;  /* finished whole before levels existed */
  return [...okSet].every(p => s.parts.indexOf(p) >= 0);
}
function markPassages(deckId, lv){
  const okSet = passagesOpen(deckId, lv);
  if (!okSet) return;
  const s = st().decks[deckId];
  if (!s) return;
  s.parts = Array.isArray(s.parts) ? s.parts : [];
  okSet.forEach(p => { if (s.parts.indexOf(p) < 0) s.parts.push(p); });
}

/* one item of an exercise set or review, at a level */
function itemOpen(ex, it, lv){
  if (!ex || !it) return true;
  lv = lv || current();
  if (isReview(ex.id) && it.deck) return open(it.deck, lv);
  if (ex.levels && ((it.level || 1) > stageCap(ex, lv))) return false;
  if (it.passageRef){
    const d = deckOfEx(ex.id);
    const okSet = d && passagesOpen(d, lv);
    if (okSet && !okSet.has(it.passageRef)) return false;
  }
  return true;
}
function filterItems(ex, items, lv){ return (items || []).filter(it => itemOpen(ex, it, lv)); }

/* the items of a language screen open at a level (an exercise follows its deck) */
function screenItems(screen, lv){ return (screen && screen.items || []).filter(it => it && open(it.id, lv)); }

/* ---------------- choices and places ---------------- */
function placeBag(lv){
  const s = st();
  if (!s.levels || typeof s.levels !== 'object') s.levels = {};
  return s.levels[lv] || (s.levels[lv] = {});
}
function remember(id){
  if (!id) return;
  const lv = current(), b = placeBag(lv), now = Date.now();
  const m = String(id).match(/^lang\.([^.]+)\./);
  const section = m ? ((ARS.languages && Object.values(ARS.languages).find(x => x && x.bar === m[1]) || {}).section || '') : sectionOf(id);
  if (guidedNow()) b.guided = { step:id, at:now };
  else b.free = { item:id, section:section, at:now };
  persist();
}
function sectionOf(id){
  for (const s of ARS.structure || []) if (s.items.some(it => it.id === id)) return s.id;
  const d = deckOfEx(id);
  return d ? sectionOf(d) : '';
}
function place(lv){
  const b = (st().levels || {})[lv || current()] || {};
  return guidedNow() ? (b.guided || null) : (b.free || null);
}
/* After the home page is built: bring the tile last opened at this level, in this mode, into view and focus it. */
function restorePlace(){
  const p = place();
  const id = p && (p.step || p.item);
  if (!id) return false;
  let el = document.querySelector('#home-acts .set-card[data-id="' + String(id).replace(/"/g, '') + '"]');
  if (!el){
    const d = deckOfEx(id);
    if (d) el = document.querySelector('#home-acts .set-card[data-id="' + d.replace(/"/g, '') + '"]');
  }
  if (!el){
    const m = String(id).match(/^lang\.([^.]+)\./);
    if (m) el = document.querySelector('#home-acts [data-langbar="' + m[1] + '"] button');
  }
  if (!el) return false;
  el.scrollIntoView({ block:'center' });
  el.focus({ preventScroll:true });
  return true;
}
function setLevel(k){
  if (ORDER.indexOf(k) < 0 || k === current()) return;
  view().level = k; persist();
  changed(true);
}
function setLang(code){
  if (code !== 'all' && LANG_CODES.indexOf(code) < 0) return;
  if (code === 'all' && guidedNow()) return;
  const v = view();
  v.lang = code;
  if (code !== 'all') v.lastLang = code;
  persist();
  changed(false);
}
/* The Guided Path always has a language. */
function onPath(p){
  const v = view();
  if (p === 'guided' && v.lang === 'all'){ v.lang = v.lastLang; persist(); }
  if (window.GP && GP.rebuild) GP.rebuild();
}
function changed(restore){
  if (window.GP && GP.rebuild) GP.rebuild();
  if (typeof buildHome === 'function') buildHome();
  if (restore) restorePlace();
}

/* ---------------- the selectors ----------------
   Three native drop-downs on one line (Timothy, 27 Oct 2026): Level, Path (in guided.js), Language. A native select
   gives the platform's own keyboard use (the arrow keys, type-ahead) and is read by screen readers with its label.
   On the Guided Path the Language list has no "All languages." */
function fill(sel, opts, value){
  const want = opts.map(o => o.value + '|' + o.label).join(',');
  if (sel.dataset.opts !== want){
    sel.replaceChildren(...opts.map(o => { const op = document.createElement('option'); op.value = o.value; op.textContent = o.label; return op; }));
    sel.dataset.opts = want;
  }
  sel.value = value;
}
function renderControls(){
  const lv = document.getElementById('level-select');
  if (lv){
    fill(lv, ORDER.map(k => ({ value:k, label:T.names[k] })), current());
    if (!lv.dataset.wired){ lv.addEventListener('change', () => setLevel(lv.value)); lv.dataset.wired = '1'; }
  }
  const d = document.getElementById('level-desc');
  if (d) d.textContent = DESC[current()] || '';
  const lg = document.getElementById('lang-select');
  if (lg){
    const names = (typeof LANGS !== 'undefined' ? LANGS : []).filter(L => !L.hidden || (typeof PREVIEW_LANGS !== 'undefined' && PREVIEW_LANGS.indexOf(L.code) >= 0));
    const opts = names.map(L => ({ value:L.code, label:L.name }));
    if (!guidedNow()) opts.push({ value:'all', label:'All languages' });
    fill(lg, opts, lang());
    if (!lg.dataset.wired){ lg.addEventListener('change', () => setLang(lg.value)); lg.dataset.wired = '1'; }
  }
  const allNote = document.getElementById('lang-all-note');
  if (allNote) allNote.hidden = lang() !== 'all';
}

ARS.CL = {
  order:ORDER, names:T.names, codes:LANG_CODES,
  current, idx, lang, langShown, levelOf, open, isReview, stageCap, passagesOpen, panelsOf, passageMap, deckDone, markPassages,
  itemOpen, filterItems, screenItems, deckOfEx,
  remember, place, restorePlace, setLevel, setLang, onPath, renderControls, view
};
})();
