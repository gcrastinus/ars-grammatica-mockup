'use strict';
/* Read the screen that is open. Same controls as the live course:
   play and pause, and a speed of 1×, 1.5×, 2×, 2.5×, or 3×.
   The speed is kept in the course store as speakRate.
   Sources, navigation, and answer feedback are not read. */
(function speechReader(){
  const $ = id => document.getElementById(id);
  const btn = $('speak-toggle');
  if (!btn) return;
  const supported = !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
  if (!supported){
    btn.title = 'Speech is not available in this browser';
    btn.setAttribute('aria-disabled', 'true');
    btn.style.opacity = '.45';
    btn.style.cursor = 'default';
    return;
  }

  let speaking = false;
  let queue = [];
  const allowed = [1, 1.5, 2, 2.5, 3];

  function bag(){
    return (typeof courseStore === 'function') ? courseStore() : {};
  }
  function currentRate(){
    const r = bag().speakRate;
    return allowed.indexOf(r) >= 0 ? r : 1;
  }

  function setSpeakingUI(on){
    speaking = on;
    btn.classList.toggle('speaking', on);
    btn.textContent = on ? '❚❚' : '▶';
    btn.title = on ? 'Stop reading' : 'Read this screen aloud';
    btn.setAttribute('aria-label', btn.title);
  }
  function stopSpeak(){
    try { window.speechSynthesis.cancel(); } catch (e) {}
    queue = [];
    setSpeakingUI(false);
  }
  window.__arsStopSpeak = stopSpeak;
  window.__arsCollectSpeak = collectSpeakText;

  function normalizeText(s){
    return String(s || '')
      .replace(/\u00a0/g, ' ')
      .replace(/[❧❦⟶⟵✓]/g, ' ')
      .replace(/[·•]/g, ', ')
      .replace(/\s+/g, ' ')
      .replace(/\s+([,.;:!?])/g, '$1')
      .trim();
  }
  function pushText(parts, t){
    t = normalizeText(t);
    if (t) parts.push(t);
  }
  function joinParts(parts){
    const out = [];
    parts.forEach(p => { if (out[out.length - 1] !== p) out.push(p); });
    return out.join('. ').replace(/\.\s*\./g, '.').replace(/\s+/g, ' ').trim();
  }

  function shouldSkip(el){
    if (!el || el.nodeType !== 1) return true;
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'SVG') return true;
    if (el.hidden || (el.getAttribute && el.getAttribute('aria-hidden') === 'true')) return true;
    if (el.id === 'dark-toggle' || el.id === 'speak-toggle' || el.id === 'speak-rate' || el.id === 'speak-unit' || el.id === 'top-right-controls' || el.id === 'recite-open') return true;
    if (!el.classList) return false;
    return el.classList.contains('ornament')
        || el.classList.contains('complete-orn')
        || el.classList.contains('src')
        || el.classList.contains('psrc')
        || el.classList.contains('feedback')
        || el.classList.contains('fb')
        || el.classList.contains('btn-row')
        || el.classList.contains('deck-nav')
        || el.classList.contains('q-head')
        || el.classList.contains('begin')
        || el.classList.contains('soon-flag')
        || el.classList.contains('q-progress')
        || el.classList.contains('designer-credit')
        || el.classList.contains('si-home');
  }

  function walk(el, parts, opts){
    if (!el) return;
    if (el.nodeType === 3){ pushText(parts, el.nodeValue); return; }
    if (el.nodeType !== 1) return;
    if (shouldSkip(el)) return;
    if (el.tagName === 'BUTTON'){
      if (opts && opts.skipButtons) return;
      if (el.classList.contains('btn')) return;
      const lab = normalizeText(el.textContent);
      if (lab) pushText(parts, lab);
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
      if (el.value) pushText(parts, el.value);
      else if (el.getAttribute('placeholder')) pushText(parts, el.getAttribute('placeholder'));
      return;
    }
    Array.from(el.childNodes).forEach(ch => walk(ch, parts, opts));
  }

  function collectHomeText(){
    const home = $('scr-home');
    if (!home) return '';
    const parts = [];
    const add = t => pushText(parts, t);
    const hdr = home.querySelector('header');
    if (hdr){
      const h1 = hdr.querySelector('h1');
      const sub = hdr.querySelector('.subtitle');
      if (h1) add(h1.textContent);
      if (sub) add(sub.textContent);
    }
    const intro = home.querySelector('.intro-note');
    if (intro) add(intro.innerText || intro.textContent);
    const due = $('recite-due');
    if (due && !due.hidden) add(due.innerText || due.textContent);
    const review = $('review-due');
    if (review && !review.hidden) add(review.innerText || review.textContent);
    const acts = $('home-acts');
    if (acts){
      acts.querySelectorAll('.act-label, .section-label, .act-latin, .act-gloss').forEach(el => {
        add(el.innerText || el.textContent);
      });
      acts.querySelectorAll('.home-grid').forEach(grid => {
        Array.from(grid.children).forEach(el => {
          if (el.classList.contains('set-card')){
            const bits = [];
            const kind = el.querySelector('.kind');
            const h3 = el.querySelector('h3');
            const p = el.querySelector('p');
            if (kind) bits.push(normalizeText(kind.textContent));
            if (h3) bits.push(normalizeText(h3.textContent));
            if (p) bits.push(normalizeText(p.innerText || p.textContent));
            if (bits.length) add(bits.join('. '));
          } else if (el.classList.contains('cumul-bar') || el.classList.contains('lang-bar')){
            add(el.innerText || el.textContent);
          }
        });
      });
    }
    return joinParts(parts);
  }

  function collectDeckText(){
    const parts = [];
    const title = $('deck-title');
    const sub = $('deck-sub');
    /* The deck's title and subtitle are read only on its first card; after that, only the card itself. */
    const cnt = $('deck-count');
    const first = !cnt || /^Panel 1 of/.test(normalizeText(cnt.textContent));
    if (first && title) pushText(parts, title.innerText || title.textContent);
    if (first && sub) pushText(parts, sub.innerText || sub.textContent);
    const body = $('deck-body');
    if (body) walk(body, parts, { skipButtons:false });
    return joinParts(parts);
  }

  /* Exercises are not read aloud, except a question that carries a quoted passage:
     a passage box, a prompt of several lines, or a prompt long enough to hold a paragraph. */
  function hasPassage(body){
    if (body.querySelector('.psg-fixed, .q-passage, .q-original, blockquote')){
      const t = normalizeText(Array.from(body.querySelectorAll('.psg-fixed, .q-passage, .q-original, blockquote')).map(e => e.textContent).join(' '));
      if (t.length >= 120) return true;
    }
    return Array.from(body.querySelectorAll('.q-prompt')).some(el =>
      el.querySelector('br') || normalizeText(el.textContent).length >= 200);
  }
  function collectExText(){
    const parts = [];
    const body = $('ex-body');
    if (body && hasPassage(body)) walk(body, parts, { skipButtons:false });
    return joinParts(parts);
  }

  function collectSpeakText(){
    const scr = document.querySelector('.screen.active');
    if (!scr) return '';
    if (scr.id === 'scr-home') return collectHomeText();
    if (scr.id === 'scr-deck') return collectDeckText();
    if (scr.id === 'scr-ex') return collectExText();
    if (scr.id === 'scr-lang'){
      const parts = [];
      walk(scr, parts, { skipButtons:false });
      return joinParts(parts);
    }
    if (scr.id === 'scr-done'){
      const parts = [];
      const card = scr.querySelector('.complete-card');
      if (card) walk(card, parts, { skipButtons:true });
      return joinParts(parts);
    }
    return '';
  }

  function pickVoice(){
    try {
      const voices = window.speechSynthesis.getVoices() || [];
      return voices.find(v => /^en(-|_)/i.test(v.lang) && /english/i.test(v.name))
          || voices.find(v => /^en(-|_)/i.test(v.lang))
          || voices[0]
          || null;
    } catch (e) { return null; }
  }

  function chunkText(text){
    const max = 280;
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    const chunks = [];
    let buf = '';
    sentences.forEach(s => {
      s = s.trim();
      if (!s) return;
      if ((buf + ' ' + s).length > max && buf){
        chunks.push(buf.trim());
        buf = s;
      } else buf = buf ? buf + ' ' + s : s;
    });
    if (buf.trim()) chunks.push(buf.trim());
    return chunks.length ? chunks : [text];
  }

  function speakChunks(chunks){
    queue = chunks.slice();
    setSpeakingUI(true);
    const voice = pickVoice();
    function next(){
      if (!speaking) return;
      if (!queue.length){ setSpeakingUI(false); return; }
      const u = new SpeechSynthesisUtterance(queue.shift());
      if (voice) u.voice = voice;
      u.rate = currentRate();
      u.pitch = 1;
      u.onend = next;
      u.onerror = () => { setSpeakingUI(false); };
      try { window.speechSynthesis.speak(u); }
      catch (e) { setSpeakingUI(false); }
    }
    try { window.speechSynthesis.cancel(); } catch (e) {}
    setTimeout(next, 40);
  }

  function startSpeak(){
    const text = collectSpeakText();
    if (!text){
      const scr = document.querySelector('.screen.active');
      speakChunks([scr && scr.id === 'scr-ex' ? 'Exercises are read aloud only when a question quotes a passage.' : 'There is nothing to read on this screen.']);
      return;
    }
    speakChunks(chunkText(text));
  }

  btn.addEventListener('click', () => {
    if (speaking) stopSpeak();
    else startSpeak();
  });

  const opener = $('recite-open');
  if (opener) opener.addEventListener('click', stopSpeak);

  const rateEl = $('speak-rate');
  if (rateEl){
    const rateBtn = rateEl.querySelector('.speak-rate-btn');
    const rateMenu = rateEl.querySelector('.speak-rate-menu');
    function applyRateUI(r){
      if (allowed.indexOf(r) < 0) r = 1;
      if (rateMenu){
        rateMenu.querySelectorAll('[data-rate]').forEach(li => {
          li.setAttribute('aria-selected', parseFloat(li.getAttribute('data-rate')) === r ? 'true' : 'false');
        });
      }
    }
    applyRateUI(currentRate());
    function closeRateMenu(){
      rateEl.classList.remove('open');
      if (rateBtn) rateBtn.setAttribute('aria-expanded', 'false');
      if (rateMenu) rateMenu.hidden = true;
    }
    function openRateMenu(){
      rateEl.classList.add('open');
      if (rateBtn) rateBtn.setAttribute('aria-expanded', 'true');
      if (rateMenu) rateMenu.hidden = false;
    }
    if (rateBtn){
      rateBtn.addEventListener('click', ev => {
        ev.stopPropagation();
        if (rateMenu && rateMenu.hidden) openRateMenu();
        else closeRateMenu();
      });
    }
    if (rateMenu){
      rateMenu.addEventListener('click', ev => {
        const li = ev.target.closest('[data-rate]');
        if (!li) return;
        const r = parseFloat(li.getAttribute('data-rate')) || 1;
        bag().speakRate = allowed.indexOf(r) >= 0 ? r : 1;
        if (typeof save === 'function') save();
        applyRateUI(bag().speakRate);
        closeRateMenu();
      });
    }
    document.addEventListener('click', ev => {
      if (!rateEl.contains(ev.target)) closeRateMenu();
    });
    document.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') closeRateMenu();
    });
  }

  try {
    window.speechSynthesis.onvoiceschanged = function(){};
    window.speechSynthesis.getVoices();
  } catch (e) {}
})();
