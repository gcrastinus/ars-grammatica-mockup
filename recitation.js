'use strict';
/* Recitation Tablet (ITEM-LIST.md).
   Progress stays in the course record (localStorage key ars-grammatica-course-v2), under store.recitations:

   {
     unlocked: { 'i.sign': true },     // set the first time that deck is completed; never cleared
     lastKey: 'i.sign',                 // the deck or section last opened
     items: {
       'i.sign': { ... },               // one deck
       'section:i': { ... }             // one whole section
     }
   }

   Each item:
   {
     text: string,                      // the writing in the box now
     locked: boolean,                   // true after "See full recitation" for this attempt
     revealedAt: number|null,
     groups: [                          // the outline as shown, null until it is shown
       { deck, title, points: [ { text, checked } ] }
     ] | null,
     record: {                          // the latest shown attempt, for a later print view
       text, revealedAt, groups         // groups is the same array as item.groups while that attempt is open,
     } | null,                          // so the boxes stay as the student marked them
     lastRecitedAt: number|null,        // when a full recitation was last opened
     intervalStage: number              // index into RECITE_AFTER_DAYS
   }

   A later print view sets record.text beside record.groups. Each point's text is the outline line,
   and checked is the box as the student left it. The line is copied when the outline is opened,
   so the print does not depend on the deck file staying the same.
*/
let renderReciteReminderImpl = function () {};
function renderReciteReminder(){ renderReciteReminderImpl(); }

(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const ARS = root.ARS = root.ARS || {};

  /* Days after a recitation before the homepage asks for it again.
     The first wait is the first number. Each later recitation uses the next number.
     After the last number, that wait repeats. Change the numbers here. */
  const RECITE_AFTER_DAYS = [3, 7, 30];
  const DAY_MS = 24 * 60 * 60 * 1000;

  function sectionRecitation(sectionId){
    const sec = (ARS.structure || []).find(s => s.id === sectionId);
    if (!sec) return [];
    return sec.items
      .filter(it => it.kind === 'study' || it.kind === 'study-ex')
      .map(it => ARS.decks && ARS.decks[it.id])
      .filter(d => d && Array.isArray(d.recitation) && d.recitation.length)
      .map(d => ({ deck: d.id, title: d.title, points: d.recitation }));
  }

  function reciteDistinctCount(text){
    const plain = String(text == null ? '' : text).replace(/<[^>]*>/g, ' ');
    const found = plain.match(/[A-Za-z\u00C0-\u024F\u0370-\u03FF\u1F00-\u1FFF]{3,}/g);
    if (!found) return 0;
    const set = new Set();
    found.forEach(w => set.add(w.toLowerCase()));
    return set.size;
  }

  function pointStrings(groups){
    const out = [];
    (groups || []).forEach(g => (g.points || []).forEach(p => out.push(typeof p === 'string' ? p : p.text)));
    return out;
  }

  /* About a quarter of the outline, counted the same way as the student's writing, and never under 80. */
  function reciteMinimum(groups){
    const n = reciteDistinctCount(pointStrings(groups).join(' '));
    return Math.max(80, Math.ceil(n / 4));
  }

  function reciteIsDue(item, now){
    if (!item || !item.lastRecitedAt) return false;
    const stage = Math.max(0, Math.min(item.intervalStage || 0, RECITE_AFTER_DAYS.length - 1));
    const at = now == null ? Date.now() : now;
    return at >= item.lastRecitedAt + RECITE_AFTER_DAYS[stage] * DAY_MS;
  }

  ARS.sectionRecitation = sectionRecitation;
  ARS.RECITE_AFTER_DAYS = RECITE_AFTER_DAYS;
  ARS.reciteDistinctCount = reciteDistinctCount;
  ARS.reciteMinimum = reciteMinimum;
  ARS.reciteIsDue = reciteIsDue;

  if (typeof document === 'undefined' || typeof courseStore !== 'function') return;

  function bag(){
    const store = courseStore();
    if (!store.recitations) store.recitations = { unlocked: {}, items: {} };
    if (!store.recitations.unlocked) store.recitations.unlocked = {};
    if (!store.recitations.items) store.recitations.items = {};
    return store.recitations;
  }

  function studies(){
    const out = [];
    (ARS.structure || []).forEach(sec => {
      sec.items.forEach(it => {
        if ((it.kind === 'study' || it.kind === 'study-ex') && it.built) out.push({ sec, it });
      });
    });
    return out;
  }

  function sectionStudies(sec){
    return sec.items.filter(it => (it.kind === 'study' || it.kind === 'study-ex') && it.built);
  }

  function isUnlocked(id){ return !!bag().unlocked[id]; }

  function latchUnlocked(){
    const b = bag();
    let changed = false;
    studies().forEach(({ it }) => {
      const st = courseStore().decks && courseStore().decks[it.id];
      if (st && st.done && !b.unlocked[it.id]){ b.unlocked[it.id] = true; changed = true; }
    });
    if (changed) save();
  }

  function hasOutline(id){
    const d = ARS.decks && ARS.decks[id];
    return !!(d && Array.isArray(d.recitation) && d.recitation.length);
  }

  function sectionReady(sec){
    const list = sectionStudies(sec);
    return list.length > 0 && list.every(it => isUnlocked(it.id) && hasOutline(it.id));
  }

  function sectionWholeLabel(sec){
    if (sec.roman) return 'Section ' + sec.roman + ': ' + sec.name + ', whole section';
    return 'The Preliminary section: ' + sec.name + ', whole section';
  }

  function labelHTML(key){
    if (key.indexOf('section:') === 0){
      const sec = (ARS.structure || []).find(s => s.id === key.slice(8));
      return sec ? sectionWholeLabel(sec) : key;
    }
    for (const sec of ARS.structure || []){
      const it = sec.items.find(x => x.id === key);
      if (it) return it.title;
    }
    return key;
  }

  function courseOrder(key){
    let n = 0;
    for (const sec of ARS.structure || []){
      for (const it of sec.items){
        if ((it.kind === 'study' || it.kind === 'study-ex') && it.built){
          if (it.id === key) return n;
          n += 1;
        }
      }
      if (key === 'section:' + sec.id) return n;
      n += 1;
    }
    return 9999;
  }

  function blankItem(){
    return { text:'', locked:false, revealedAt:null, groups:null, record:null, lastRecitedAt:null, intervalStage:0 };
  }

  function ensureItem(key){
    const items = bag().items;
    if (!items[key]) items[key] = blankItem();
    const it = items[key];
    if (typeof it.text !== 'string') it.text = '';
    if (typeof it.intervalStage !== 'number') it.intervalStage = 0;
    return it;
  }

  function liveGroups(key){
    if (!key) return null;
    if (key.indexOf('section:') === 0){
      const id = key.slice(8);
      const sec = (ARS.structure || []).find(s => s.id === id);
      if (!sec || !sectionReady(sec)) return null;
      const parts = sectionRecitation(id);
      return parts.length ? parts : null;
    }
    if (!isUnlocked(key) || !hasOutline(key)) return null;
    const d = ARS.decks[key];
    return [{ deck: d.id, title: d.title, points: d.recitation }];
  }

  const overlay = document.getElementById('recite-overlay');
  const desc = document.getElementById('recite-desc');
  const dueHost = document.getElementById('recite-due');

  renderReciteReminderImpl = function () {
    latchUnlocked();
    if (!dueHost) return;
    const items = bag().items;
    const due = Object.keys(items).filter(k => reciteIsDue(items[k])).sort((a, b) => courseOrder(a) - courseOrder(b));
    dueHost.replaceChildren();
    if (!due.length){ dueHost.hidden = true; return; }
    dueHost.hidden = false;
    due.forEach((k, i) => {
      if (i){
        const sep = document.createElement('span');
        sep.textContent = ' · ';
        dueHost.appendChild(sep);
      }
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'recite-due-btn';
      b.innerHTML = labelHTML(k);
      b.addEventListener('click', () => openOverlay(k));
      dueHost.appendChild(b);
    });
    if (due.length){
      const lead = document.createElement('span');
      lead.textContent = 'Time to recite again: ';
      dueHost.insertBefore(lead, dueHost.firstChild);
    }
  };

  if (!overlay) { renderReciteReminder(); return; }

  const menuBtn = document.getElementById('recite-menu-btn');
  const menuLabel = document.getElementById('recite-menu-label');
  const menuList = document.getElementById('recite-menu-list');
  const picker = document.getElementById('recite-picker');
  const seeBtn = document.getElementById('recite-see');
  const newBtn = document.getElementById('recite-new');
  const note = document.getElementById('recite-note');
  const text = document.getElementById('recite-text');
  const full = document.getElementById('recite-full');
  const columns = document.getElementById('recite-columns');
  let selectedKey = '';
  let openGen = 0;
  let saveTimer = 0;

  function currentItem(){ return selectedKey && bag().items[selectedKey] ? bag().items[selectedKey] : null; }

  function commitText(){
    const item = currentItem();
    if (item && !item.locked) item.text = text.value;
  }

  function queueSave(){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 250);
  }

  function closeMenu(){
    menuList.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function updateGate(){
    const item = currentItem();
    const live = item && !item.locked ? liveGroups(selectedKey) : null;
    const enough = !!(live && reciteDistinctCount(text.value) >= reciteMinimum(live));
    seeBtn.hidden = !!(item && item.locked);
    seeBtn.disabled = !enough;
    newBtn.hidden = !(item && item.locked);
    note.hidden = !(item && !item.locked && live && !enough);
  }

  function renderOutline(item){
    full.replaceChildren();
    if (!item || !item.locked || !item.groups || !item.groups.length){
      full.hidden = true;
      columns.classList.remove('is-split');
      return;
    }
    full.hidden = false;
    columns.classList.add('is-split');
    const h = document.createElement('div');
    h.className = 'recite-full-h';
    h.textContent = 'Full recitation';
    full.appendChild(h);
    item.groups.forEach((g, gi) => {
      if (item.groups.length > 1){
        const dh = document.createElement('div');
        dh.className = 'recite-deck-h';
        dh.innerHTML = g.title;
        full.appendChild(dh);
      }
      g.points.forEach((pt, pi) => {
        const label = document.createElement('label');
        label.className = 'recite-point';
        const box = document.createElement('input');
        box.type = 'checkbox';
        box.dataset.g = String(gi);
        box.dataset.p = String(pi);
        box.checked = !!pt.checked;
        const span = document.createElement('span');
        span.innerHTML = pt.text;
        label.appendChild(box);
        label.appendChild(span);
        full.appendChild(label);
      });
    });
  }

  function paint(){
    const item = currentItem();
    menuLabel.innerHTML = selectedKey ? labelHTML(selectedKey) : 'Choose a deck';
    text.value = item ? item.text : '';
    text.readOnly = !!(item && item.locked);
    text.disabled = !item;
    updateGate();
    renderOutline(item);
    menuList.querySelectorAll('.recite-opt').forEach(el => {
      el.classList.toggle('is-on', el.dataset.key === selectedKey);
    });
  }

  function optButton(key, html, noteText, on){
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'recite-opt' + (key.indexOf('section:') === 0 ? ' recite-opt-section' : '');
    b.dataset.key = key;
    b.setAttribute('role', 'option');
    if (!on) b.disabled = true;
    const name = document.createElement('span');
    name.className = 'recite-opt-name';
    name.innerHTML = html;
    b.appendChild(name);
    if (noteText){
      const n = document.createElement('span');
      n.className = 'recite-opt-note';
      n.textContent = noteText;
      b.appendChild(n);
    }
    if (on) b.addEventListener('click', () => choose(key));
    return b;
  }

  function renderMenu(loaded){
    menuList.replaceChildren();
    (ARS.structure || []).forEach(sec => {
      const list = sectionStudies(sec);
      if (!list.length) return;
      const head = document.createElement('div');
      head.className = 'recite-menu-head';
      head.textContent = sec.roman ? sec.roman + ' · ' + sec.name : sec.name;
      menuList.appendChild(head);
      list.forEach(it => {
        let noteText = '';
        let on = false;
        if (!isUnlocked(it.id)) noteText = 'Complete this deck first.';
        else if (!loaded) noteText = '';
        else if (!ARS.decks || !ARS.decks[it.id]) noteText = 'Could not load this deck.';
        else if (!hasOutline(it.id)) noteText = 'Outline not yet written.';
        else on = true;
        menuList.appendChild(optButton(it.id, it.title, noteText, on));
      });
      let sNote = '';
      let sOn = false;
      if (!list.every(it => isUnlocked(it.id))) sNote = 'Complete every deck in this section first.';
      else if (!loaded) sNote = '';
      else if (sectionReady(sec)) sOn = true;
      else sNote = 'Outline not yet written.';
      menuList.appendChild(optButton('section:' + sec.id, sectionWholeLabel(sec), sNote, sOn));
    });
    menuList.dataset.ready = loaded ? '1' : '0';
  }

  function choose(key){
    commitText();
    selectedKey = key;
    bag().lastKey = key;
    ensureItem(key);
    save();
    closeMenu();
    paint();
    text.focus();
  }

  function openOverlay(prefer){
    const gen = ++openGen;
    overlay.hidden = false;
    if (desc) desc.open = true;
    document.body.classList.add('recite-lock');
    latchUnlocked();
    selectedKey = '';
    closeMenu();
    renderMenu(false);
    paint();
    const ids = studies().filter(({ it }) => isUnlocked(it.id)).map(({ it }) => it.id);
    const pending = ids.filter(id => !(ARS.decks && ARS.decks[id])).map(id => loadDeck(id).catch(() => null));
    Promise.all(pending).then(() => {
      if (gen !== openGen || overlay.hidden) return;
      const want = prefer || bag().lastKey || '';
      selectedKey = '';
      renderMenu(true);
      if (want && (want.indexOf('section:') === 0 ? sectionReady((ARS.structure || []).find(s => s.id === want.slice(8)) || { items:[] }) : (isUnlocked(want) && hasOutline(want)))){
        selectedKey = want;
        ensureItem(want);
      }
      paint();
      if (selectedKey) text.focus();
      else menuBtn.focus();
    });
  }

  function closeOverlay(){
    commitText();
    clearTimeout(saveTimer);
    save();
    closeMenu();
    overlay.hidden = true;
    document.body.classList.remove('recite-lock');
    openGen += 1;
    renderReciteReminder();
    const opener = document.getElementById('recite-open');
    if (opener) opener.focus();
  }

  document.getElementById('recite-open').addEventListener('click', () => openOverlay());
  document.getElementById('recite-close').addEventListener('click', closeOverlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });

  menuBtn.addEventListener('click', () => {
    const open = menuList.hidden;
    menuList.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', e => {
    if (!menuList.hidden && picker && !picker.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || overlay.hidden) return;
    if (!menuList.hidden){ closeMenu(); return; }
    closeOverlay();
  });

  text.addEventListener('paste', e => e.preventDefault());
  text.addEventListener('drop', e => e.preventDefault());
  text.addEventListener('dragover', e => e.preventDefault());
  text.addEventListener('beforeinput', e => {
    if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop') e.preventDefault();
  });
  text.addEventListener('input', () => {
    const item = currentItem();
    if (!item || item.locked) return;
    item.text = text.value;
    updateGate();
    queueSave();
  });

  seeBtn.addEventListener('click', () => {
    const item = currentItem();
    const live = liveGroups(selectedKey);
    if (!item || item.locked || !live) return;
    if (reciteDistinctCount(text.value) < reciteMinimum(live)) return;
    item.text = text.value;
    item.groups = live.map(g => ({
      deck: g.deck,
      title: g.title,
      points: g.points.map(t => ({ text: t, checked: false }))
    }));
    item.locked = true;
    item.revealedAt = Date.now();
    if (item.lastRecitedAt) item.intervalStage = Math.min((item.intervalStage || 0) + 1, RECITE_AFTER_DAYS.length - 1);
    else item.intervalStage = 0;
    item.lastRecitedAt = item.revealedAt;
    item.record = { text: item.text, revealedAt: item.revealedAt, groups: item.groups };
    clearTimeout(saveTimer);
    save();
    paint();
  });

  newBtn.addEventListener('click', () => {
    const item = currentItem();
    if (!item || !item.locked) return;
    if (!window.confirm('Start a new recitation? The writing will be cleared.')) return;
    item.text = '';
    item.locked = false;
    item.revealedAt = null;
    item.groups = null;
    save();
    paint();
    text.focus();
  });

  full.addEventListener('change', e => {
    const box = e.target;
    if (!box || box.type !== 'checkbox') return;
    const item = currentItem();
    if (!item || !item.groups) return;
    const g = Number(box.dataset.g), p = Number(box.dataset.p);
    if (!item.groups[g] || !item.groups[g].points[p]) return;
    item.groups[g].points[p].checked = box.checked;
    // After a reload, record.groups is a copy. Point it at the live boxes so a later print matches.
    if (item.locked) item.record = { text: item.text, revealedAt: item.revealedAt, groups: item.groups };
    save();
  });

  renderReciteReminder();
})();
