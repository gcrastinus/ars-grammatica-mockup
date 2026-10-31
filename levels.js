'use strict';
/* ================================================================
   COURSE LEVELS (Essentials, Proficient, Mastered, Comprehensive): ARS.CL
   The assignments are in data/tiers.js (one line per deck). This file answers, for the level chosen:
   which decks, exercises, reviews, passages, and stages are open; and it keeps the choices
   (level, language) and the place left at each level.

   Stored in the course record (ars-grammatica-course-v2), beside what is already there:
     store.view   = { level:'essentials', langs:['en', 'la'], lang:'en', lastLang:'en' }      the last choices
                    (langs is the set of languages chosen, or ['all']; lang and lastLang are kept as before, so a record
                    saved before several languages could be chosen loads as its one language)
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
  comprehensive: 'The whole course, with the other classical traditions and the close of the course, Imitation, and every reading passage.'
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
const inOrder = codes => LANG_CODES.filter(c => codes.indexOf(c) >= 0);
/* The languages chosen, as stored: ['all'], or one or more codes in the course's order. A record without "langs"
   (saved before several languages could be chosen) gives its one language. */
function chosen(){
  const v = view();
  if (Array.isArray(v.langs)){
    if (v.langs.indexOf('all') >= 0) return ['all'];
    const c = inOrder(v.langs);
    if (c.length) return c;
  }
  return [v.lang];
}
/* The languages in force: on the Guided Path never "all" (English stands in, as onPath sets it). */
function langs(){
  const c = chosen();
  return c[0] === 'all' && guidedNow() ? ['en'] : c;
}
/* One code for older callers: 'all', or the first language in force. */
function lang(){ return langs()[0]; }
function langShown(code){ const l = langs(); return l[0] === 'all' || l.indexOf(code) >= 0; }

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
function setLangs(codes){
  codes = codes.indexOf('all') >= 0 ? ['all'] : inOrder(codes);
  if (!codes.length || (codes[0] === 'all' && guidedNow())) return;
  const v = view();
  v.langs = codes;
  v.lang = codes[0];
  if (codes[0] !== 'all') v.lastLang = codes[0];
  fellBack = false;
  persist();
  changed(false);
}
function setLang(code){
  if (code !== 'all' && LANG_CODES.indexOf(code) < 0) return;
  setLangs([code]);
}
/* The rules of the Language menu: "All languages" clears the others, a language clears "All languages," the last
   one checked stays checked, and on Free Practice checking every language turns into "All languages." */
function toggleLang(code){
  const c = langs();
  if (code === 'all'){ if (c[0] !== 'all') setLangs(['all']); return; }
  if (LANG_CODES.indexOf(code) < 0) return;
  if (c[0] === 'all') setLangs([code]);
  else if (c.indexOf(code) < 0){
    const next = c.concat([code]);
    /* every language checked one by one becomes "All languages" (Timothy, 28 Oct 2026); not on the Guided Path */
    const every = langOptions().filter(o => o.value !== 'all').every(o => next.indexOf(o.value) >= 0);
    setLangs(every && !guidedNow() ? ['all'] : next);
  }
  else if (c.length > 1) setLangs(c.filter(x => x !== code));
}
/* The Guided Path does not take "All languages": English is chosen, and a line says so. */
let fellBack = false;
function onPath(p){
  const v = view();
  fellBack = false;
  if (p === 'guided' && chosen()[0] === 'all'){ v.langs = ['en']; v.lang = 'en'; v.lastLang = 'en'; fellBack = true; persist(); }
  if (window.GP && GP.rebuild) GP.rebuild();
}
function changed(restore){
  if (window.GP && GP.rebuild) GP.rebuild();
  if (typeof buildHome === 'function') buildHome();
  if (restore) restorePlace();
}

/* ---------------- the selectors ----------------
   Three menus in a column of explained rows (Timothy, 27 Oct 2026): Level, Path, Language. Each is a button that opens
   a list (the listbox pattern): Enter, Space, and the arrow keys open it and move through it, Home and End jump, a
   letter jumps to the next item that begins with it, Escape closes it and returns to the button, Tab closes it and
   moves on. Level and Path take one choice and close on it; Language takes several and stays open. The list keeps
   the focus and names the item under the cursor with aria-activedescendant. */
const NAME_OF = code => ((typeof LANGS !== 'undefined' ? LANGS : []).find(L => L.code === code) || { name:code }).name;
function listNames(codes){
  const n = codes.map(NAME_OF);
  return n.length < 3 ? n.join(' and ') : n.slice(0, -1).join(', ') + ', and ' + n[n.length - 1];
}
const menus = {};
let openMenu = null;
function closeMenu(focusBtn){
  const m = openMenu;
  if (!m) return;
  openMenu = null;
  m.list.hidden = true;
  m.btn.setAttribute('aria-expanded', 'false');
  m.list.removeAttribute('aria-activedescendant');
  if (focusBtn) m.btn.focus();
}
function setActive(m, i){
  const opts = [...m.list.children];
  if (!opts.length) return;
  m.active = Math.max(0, Math.min(opts.length - 1, i));
  opts.forEach((o, k) => o.classList.toggle('is-active', k === m.active));
  m.list.setAttribute('aria-activedescendant', opts[m.active].id);
  opts[m.active].scrollIntoView({ block:'nearest' });
}
function showMenu(m, at){
  if (openMenu && openMenu !== m) closeMenu(false);
  openMenu = m;
  m.list.hidden = false;
  m.btn.setAttribute('aria-expanded', 'true');
  const opts = m.cfg.options();
  const sel = opts.findIndex(o => m.cfg.isOn(o.value));
  setActive(m, at === 'last' ? opts.length - 1 : at === 'first' ? 0 : typeof at === 'number' ? at : Math.max(0, sel));
  m.list.focus();
}
function pick(m, i){
  const o = m.cfg.options()[i];
  if (!o) return;
  m.cfg.pick(o.value);
  if (!m.cfg.multi) closeMenu(true);
}
function letterJump(m, ch){
  const opts = m.cfg.options(), now = Date.now();
  m.typed = (now - (m.typedAt || 0) < 700 ? (m.typed || '') : '') + ch.toLowerCase();
  m.typedAt = now;
  const from = m.typed.length > 1 ? m.active : m.active + 1;
  for (let k = 0; k < opts.length; k++){
    const i = (from + k) % opts.length;
    if (opts[i].label.toLowerCase().indexOf(m.typed) === 0) return i;
  }
  return -1;
}
function makeMenu(key, cfg){
  const host = document.getElementById(key + '-menu');
  if (!host) return null;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = key + '-btn';
  btn.className = 'choice-btn';
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-labelledby', key + '-label ' + key + '-btn');
  btn.setAttribute('aria-describedby', key + '-expl');
  btn.innerHTML = '<span class="choice-btn-text"></span><span class="choice-caret" aria-hidden="true">▾</span>';
  const list = document.createElement('ul');
  list.id = key + '-list';
  list.className = 'choice-list' + (cfg.multi ? ' is-multi' : '');
  list.setAttribute('role', 'listbox');
  list.setAttribute('aria-labelledby', key + '-label');
  if (cfg.multi) list.setAttribute('aria-multiselectable', 'true');
  list.tabIndex = -1;
  list.hidden = true;
  host.replaceChildren(btn, list);
  const m = menus[key] = { key, cfg, btn, list, active:0 };
  btn.addEventListener('click', () => { if (openMenu === m) closeMenu(true); else showMenu(m); });
  btn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' '){ e.preventDefault(); showMenu(m); }
    else if (e.key === 'Home'){ e.preventDefault(); showMenu(m, 'first'); }
    else if (e.key === 'End'){ e.preventDefault(); showMenu(m, 'last'); }
    else if (e.key.length === 1 && /\S/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey){
      e.preventDefault(); m.active = -1; const i = letterJump(m, e.key); showMenu(m, i >= 0 ? i : undefined);
    }
  });
  list.addEventListener('keydown', e => {
    const n = cfg.options().length;
    if (e.key === 'ArrowDown'){ e.preventDefault(); setActive(m, m.active + 1); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); setActive(m, m.active - 1); }
    else if (e.key === 'Home'){ e.preventDefault(); setActive(m, 0); }
    else if (e.key === 'End'){ e.preventDefault(); setActive(m, n - 1); }
    else if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); pick(m, m.active); }
    else if (e.key === 'Escape'){ e.preventDefault(); closeMenu(true); }
    else if (e.key === 'Tab'){ closeMenu(false); }
    else if (e.key.length === 1 && /\S/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey){
      e.preventDefault(); const i = letterJump(m, e.key); if (i >= 0) setActive(m, i);
    }
  });
  list.addEventListener('click', e => {
    const li = e.target.closest('[role="option"]');
    if (li) pick(m, [...list.children].indexOf(li));
  });
  list.addEventListener('mousemove', e => {
    const li = e.target.closest('[role="option"]');
    if (li){ const i = [...list.children].indexOf(li); if (i !== m.active) setActive(m, i); }
  });
  return m;
}
document.addEventListener('pointerdown', e => {
  if (openMenu && !openMenu.btn.parentNode.contains(e.target)) closeMenu(false);
});
/* Draw a menu's button and items from its state; an open menu stays open, with the same item under the cursor. */
function drawMenu(m){
  const opts = m.cfg.options();
  m.btn.querySelector('.choice-btn-text').textContent = m.cfg.text();
  const want = opts.map(o => o.value).join(',');
  if (m.list.dataset.opts !== want){
    m.list.replaceChildren(...opts.map(o => {
      const li = document.createElement('li');
      li.id = m.key + '-opt-' + o.value;
      li.setAttribute('role', 'option');
      li.dataset.value = o.value;
      li.innerHTML = '<span class="choice-mark" aria-hidden="true"></span><span class="choice-name"></span>';
      li.querySelector('.choice-name').textContent = o.label;
      return li;
    }));
    m.list.dataset.opts = want;
    if (openMenu === m) setActive(m, m.active);
  }
  [...m.list.children].forEach((li, i) => {
    const on = m.cfg.isOn(opts[i].value);
    li.setAttribute('aria-selected', on ? 'true' : 'false');
    li.classList.toggle('is-on', on);
    li.querySelector('.choice-mark').textContent = on ? '✓' : '';
  });
}
function langOptions(){
  const names = (typeof LANGS !== 'undefined' ? LANGS : []).filter(L => !L.hidden || (typeof PREVIEW_LANGS !== 'undefined' && PREVIEW_LANGS.indexOf(L.code) >= 0));
  const opts = names.map(L => ({ value:L.code, label:L.name }));
  if (!guidedNow()) opts.push({ value:'all', label:'All languages' });
  return opts;
}
function langText(){
  const l = langs();
  if (l[0] === 'all') return 'All languages';
  if (l.length === 1) return NAME_OF(l[0]);
  if (l.length === 2) return NAME_OF(l[0]) + ', ' + NAME_OF(l[1]);
  return l.length + ' languages';
}
/* The sentence at the left of each row describes the choice made in that row: for the level, what it adds. */
const LEVEL_EXPL = {
  essentials: 'Essentials teaches the definition of grammar, the sign, the letter and the syllable, the eight parts of speech, the plain construction of the sentence, and the forms of the languages chosen.',
  proficient: 'Proficient adds the tasks of the grammarian, the criteria of correct speech, voice, quantity and accent, punctuation, word formation, the rest of construction, the common errors, the tropes, and the first reading passages.',
  mastered: 'Mastered adds the higher doctrine of the grammarians, meter, the figures, supposition, translation, the classical composition exercises, and the model passages.',
  comprehensive: 'Comprehensive adds the other classical traditions and the close of the course, Imitation, and every reading passage, and so gives the whole course.'
};
const PATH_EXPL = {
  practice: 'Free Practice opens every exercise of this level, in any order, and does not judge any exercise as passed.',
  guided: 'The Guided Path opens the exercises of this level in the order of the sections, judges when each is passed and confirmed, and gathers what is due for review.'
};
const LANG_EXPL = {
  en: 'English is used throughout the course.',
  la: 'Latin is used throughout the course, alongside English.'
};
function langExplain(l){
  if (l[0] === 'all') return 'The material of all six languages, English, Latin, Greek, Spanish, German, and French, is shown together, in the course’s usual order.';
  let t;
  if (l.length === 1){
    const n = NAME_OF(l[0]);
    t = LANG_EXPL[l[0]] || (n + ' is used where it shows something distinctive.');
  } else {
    t = 'The material of ' + listNames(l) + ' is shown together, in the course’s usual order.';
  }
  if (guidedNow()) t += l.length === 1 ? ' On the Guided Path, the ' + NAME_OF(l[0]) + ' exercises are required.' : ' On the Guided Path, the exercises of each of these languages are required.';
  return t;
}
function explainChoices(l){
  const set = (id, text) => { const e = document.getElementById(id); if (e && e.textContent !== text) e.textContent = text; };
  if (LEVEL_EXPL[current()]) set('level-expl', LEVEL_EXPL[current()]);
  set('path-expl', PATH_EXPL[guidedNow() ? 'guided' : 'practice']);
  set('lang-expl', langExplain(l));
}
function renderControls(){
  if (!menus.level) makeMenu('level', {
    options: () => ORDER.map(k => ({ value:k, label:T.names[k] })),
    isOn: v => v === current(),
    text: () => T.names[current()],
    pick: v => setLevel(v)
  });
  if (!menus.path) makeMenu('path', {
    options: () => [{ value:'practice', label:'Free Practice' }, { value:'guided', label:'Guided Path' }],
    isOn: v => (v === 'guided') === guidedNow(),
    text: () => guidedNow() ? 'Guided Path' : 'Free Practice',
    pick: v => { if ((v === 'guided') !== guidedNow() && window.GP && GP.setPath) GP.setPath(v); }
  });
  if (!menus.lang) makeMenu('lang', {
    multi: true,
    options: langOptions,
    isOn: v => langShown(v) && (v === 'all') === (langs()[0] === 'all'),
    text: langText,
    pick: v => toggleLang(v)
  });
  Object.values(menus).forEach(drawMenu);
  const d = document.getElementById('level-desc');
  if (d){ d.textContent = DESC[current()] || ''; d.hidden = true; }
  const l = langs();
  explainChoices(l);
  /* The two notes under the rows ("Every language's material ..." and "Shown: ...") are kept but hidden: the Language
     row's sentence now says the same (28 Oct 2026). */
  const allNote = document.getElementById('lang-all-note');
  if (allNote) allNote.hidden = true;
  const shownNote = document.getElementById('lang-shown-note');
  if (shownNote){
    const on = !guidedNow() && l[0] !== 'all' && l.length >= 2 && l.length <= 5;
    shownNote.hidden = true;
    shownNote.textContent = on ? 'Shown: ' + listNames(l) + '.' : '';
  }
  const fb = document.getElementById('lang-fallback-note');
  if (fb) fb.hidden = !(fellBack && guidedNow());
}

ARS.CL = {
  order:ORDER, names:T.names, codes:LANG_CODES,
  current, idx, lang, langs, chosen, langShown, listNames, levelOf, open, isReview, stageCap, passagesOpen, panelsOf, passageMap, deckDone, markPassages,
  itemOpen, filterItems, screenItems, deckOfEx,
  remember, place, restorePlace, setLevel, setLang, setLangs, toggleLang, onPath, renderControls, closeMenu, view
};
})();
