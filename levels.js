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
  proficient: 'A full school grammar: Essentials, with voice, quantity and accent, word formation, the rest of construction, the errors, the tropes, and the first reading passages.',
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
   Rows of real buttons, aria-pressed, a check mark as well as color on the selected one, and the arrow keys
   moving within a row (one tab stop per row). */
function rowKeys(row){
  row.addEventListener('keydown', e => {
    const keys = { ArrowRight:1, ArrowDown:1, ArrowLeft:-1, ArrowUp:-1, Home:'home', End:'end' };
    if (!(e.key in keys)) return;
    const bs = [...row.querySelectorAll('button:not([hidden]):not([disabled])')];
    const i = bs.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const k = keys[e.key];
    const j = k === 'home' ? 0 : k === 'end' ? bs.length - 1 : (i + k + bs.length) % bs.length;
    bs[j].focus();
  });
}
function choiceButton(label, on, fn, cls){
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'choice-btn' + (cls ? ' ' + cls : '') + (on ? ' sel' : '');
  b.setAttribute('aria-pressed', String(on));
  b.innerHTML = '<span class="choice-tick" aria-hidden="true">' + (on ? '✓' : '') + '</span><span class="choice-name"></span>';
  b.querySelector('.choice-name').textContent = label;
  b.tabIndex = on ? 0 : -1;
  b.addEventListener('click', fn);
  return b;
}
function renderControls(){
  const lvRow = document.getElementById('level-row');
  if (lvRow){
    lvRow.replaceChildren();
    ORDER.forEach(k => lvRow.appendChild(choiceButton(T.names[k], k === current(), () => { setLevel(k); focusSel('level-row'); }, 'level-btn')));
    if (!lvRow.dataset.keys){ rowKeys(lvRow); lvRow.dataset.keys = '1'; }
  }
  const d = document.getElementById('level-desc');
  if (d) d.textContent = DESC[current()] || '';
  const lgRow = document.getElementById('lang-row');
  if (lgRow){
    lgRow.replaceChildren();
    const g = guidedNow(), l = lang();
    const names = (typeof LANGS !== 'undefined' ? LANGS : []).filter(L => !L.hidden || (typeof PREVIEW_LANGS !== 'undefined' && PREVIEW_LANGS.indexOf(L.code) >= 0));
    names.forEach(L => lgRow.appendChild(choiceButton(L.name, l === L.code, () => { setLang(L.code); focusSel('lang-row'); }, 'lang-choice lang-' + L.code)));
    if (!g) lgRow.appendChild(choiceButton('All languages', l === 'all', () => { setLang('all'); focusSel('lang-row'); }, 'lang-choice lang-all'));
    if (!lgRow.dataset.keys){ rowKeys(lgRow); lgRow.dataset.keys = '1'; }
  }
  const pr = document.querySelector('.path-row');
  if (pr && !pr.dataset.keys){
    rowKeys(pr); pr.dataset.keys = '1';
  }
  if (pr){
    const g = guidedNow();
    pr.querySelectorAll('.path-btn').forEach(b => { const on = b.id === (g ? 'path-guided' : 'path-free'); b.tabIndex = on ? 0 : -1; });
  }
}
function focusSel(rowId){
  const b = document.querySelector('#' + rowId + ' .choice-btn.sel');
  if (b) b.focus({ preventScroll:true });
}

/* On opening the course with no deck or exercise in the address, return to the place left at this level. */
window.addEventListener('load', () => { if (!location.hash) setTimeout(restorePlace, 0); });

ARS.CL = {
  order:ORDER, names:T.names, codes:LANG_CODES,
  current, idx, lang, langShown, levelOf, open, isReview, stageCap, passagesOpen, panelsOf, passageMap, deckDone, markPassages,
  itemOpen, filterItems, screenItems, deckOfEx,
  remember, place, restorePlace, setLevel, setLang, onPath, renderControls, view
};
})();
