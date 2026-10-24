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

  /* Languages. Explanatory text is read in English. Words, examples, and passages marked
     with a lang attribute are read in that language's voice, switching mid-sentence. */
  function normLang(code){
    const c = String(code || '').toLowerCase().replace('_', '-');
    if (!c) return 'en';
    if (c === 'grc' || c === 'el' || c.indexOf('el-') === 0) return 'el';
    const base = c.split('-')[0];
    return ['en', 'la', 'es', 'de', 'fr'].indexOf(base) >= 0 ? base : 'en';
  }

  /* A collector of runs of text, each in one language. Text in the same block is joined
     with a space; a new block (paragraph, line break, list item) is marked with a period. */
  function makeCollector(){
    const runs = [];
    let brk = false;
    let lastPart = null;
    return {
      runs,
      text(t, lang){
        t = normalizeText(t);
        if (!t) return;
        lang = normLang(lang);
        const last = runs[runs.length - 1];
        if (last && last.lang === lang){
          last.text += (brk && !/[.!?;:,]$/.test(last.text) ? '. ' : ' ') + t;
        } else {
          if (last && brk && !/[.!?;:,]$/.test(last.text)) last.text += '.';
          runs.push({ lang, text: t });
        }
        brk = false;
      },
      /* A whole block in one language; a block identical to the one before it is dropped. */
      part(t, lang){
        t = normalizeText(t);
        if (!t || t === lastPart) return;
        lastPart = t;
        this.brk();
        this.text(t, lang);
        this.brk();
      },
      brk(){ if (runs.length) brk = true; }
    };
  }
  function finishRuns(runs){
    return runs.map(r => ({ lang: r.lang, text: r.text.replace(/\.\s*\./g, '.').replace(/\s+([,.;:!?])/g, '$1').replace(/\s+/g, ' ').trim() }))
      .filter(r => /[\p{L}\p{N}]/u.test(r.text));
  }
  function runsToText(runs){ return finishRuns(runs).map(r => r.text).join(' '); }

  const INLINE = /^(EM|I|B|STRONG|SPAN|A|SUB|SUP|SMALL|U|MARK|ABBR|CITE|Q|CODE|S|DFN|VAR|BDI|BDO|LABEL|TIME|WBR)$/;

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

  function langOf(el){
    const host = el && el.closest ? el.closest('[lang]') : null;
    const v = host ? host.getAttribute('lang') : '';
    return (!host || host === document.documentElement) ? 'en' : v;
  }
  function walk(el, col, opts, lang){
    if (!el) return;
    if (lang === undefined) lang = el.nodeType === 1 ? langOf(el) : (el.parentElement ? langOf(el.parentElement) : 'en');
    if (el.nodeType === 3){ col.text(el.nodeValue, lang); return; }
    if (el.nodeType !== 1) return;
    if (shouldSkip(el)) return;
    if (el.hasAttribute('lang')) lang = el.getAttribute('lang') || lang;
    if (el.tagName === 'BR'){ col.brk(); return; }
    if (el.tagName === 'BUTTON'){
      if (opts && opts.skipButtons) return;
      if (el.classList.contains('btn')) return;
      const lab = normalizeText(el.textContent);
      if (lab){ col.brk(); Array.from(el.childNodes).forEach(ch => walk(ch, col, opts, lang)); col.brk(); }
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
      if (el.value) col.part(el.value, lang);
      else if (el.getAttribute('placeholder')) col.part(el.getAttribute('placeholder'), 'en');
      return;
    }
    const block = !INLINE.test(el.tagName);
    if (block) col.brk();
    Array.from(el.childNodes).forEach(ch => walk(ch, col, opts, lang));
    if (block) col.brk();
  }

  function collectHomeText(){
    const home = $('scr-home');
    if (!home) return [];
    const col = makeCollector();
    const add = t => col.part(t, 'en');
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
            walk(el, col, { skipButtons:false });
          }
        });
      });
    }
    return col.runs;
  }

  function collectDeckText(){
    const col = makeCollector();
    const title = $('deck-title');
    const sub = $('deck-sub');
    /* The deck's title and subtitle are read only on its first card; after that, only the card itself. */
    const cnt = $('deck-count');
    const first = !cnt || /^Panel 1 of/.test(normalizeText(cnt.textContent));
    if (first && title) walk(title, col, { skipButtons:false });
    if (first && sub) walk(sub, col, { skipButtons:false });
    const body = $('deck-body');
    if (body) walk(body, col, { skipButtons:false });
    return col.runs;
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
    const col = makeCollector();
    const body = $('ex-body');
    if (body && hasPassage(body)) walk(body, col, { skipButtons:false });
    return col.runs;
  }

  /* The screen as runs of text: [{ lang, text }], lang one of en, la, el, es, de, fr. */
  function collectSpeakRuns(){
    const scr = document.querySelector('.screen.active');
    if (!scr) return [];
    let runs = [];
    if (scr.id === 'scr-home') runs = collectHomeText();
    else if (scr.id === 'scr-deck') runs = collectDeckText();
    else if (scr.id === 'scr-ex') runs = collectExText();
    else if (scr.id === 'scr-lang'){
      const col = makeCollector();
      walk(scr, col, { skipButtons:false });
      runs = col.runs;
    } else if (scr.id === 'scr-done'){
      const col = makeCollector();
      const card = scr.querySelector('.complete-card');
      if (card) walk(card, col, { skipButtons:true });
      runs = col.runs;
    }
    return finishRuns(runs);
  }
  function collectSpeakText(){ return collectSpeakRuns().map(r => r.text).join(' '); }

  /* The best voice for a language. Each language has its own list of tags to try in order;
     when none is installed, the English voice reads it. */
  const VOICE_PREFS = {
    en: [/^en-US$/i, /^en(-|$)/i],
    es: [/^es-ES$/i, /^es(-|$)/i],
    la: [/^la(-|$)/i, /^it-IT$/i, /^it(-|$)/i],
    el: [/^el-GR$/i, /^el(-|$)/i],
    de: [/^de-DE$/i, /^de(-|$)/i],
    fr: [/^fr-FR$/i, /^fr(-|$)/i]
  };
  const NOVELTY = /eloquence|novelty|bells|bubbles|zarvox|whisper|bad news|good news|organ|trinoids|albert|jester|superstar|cellos|wobble|boing|bahh|fred|junior|ralph|kathy|grandma|grandpa|rocko|shelley|flo|eddy|reed|sandy/i;
  function voiceScore(v, lang){
    return (/premium/i.test(v.name) ? 40 : 0) + (/enhanced/i.test(v.name) ? 30 : 0)
      + (v.localService ? 20 : 0) + (v.default ? 5 : 0)
      + (lang === 'en' && /^(Ava|Zoe|Allison|Samantha|Evan|Tom|Susan|Daniel|Karen|Moira|Serena)\b/i.test(v.name) ? 10 : 0)
      - (lang === 'en' && /google/i.test(v.name) ? 50 : 0)
      - (NOVELTY.test(v.name) ? 50 : 0);
  }
  function voiceTag(v){ return String(v.lang || '').replace('_', '-'); }
  function pickVoiceFor(lang, voices){
    lang = normLang(lang);
    if (!voices){ try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
    const prefs = VOICE_PREFS[lang] || VOICE_PREFS.en;
    for (const re of prefs){
      const c = voices.filter(v => re.test(voiceTag(v)));
      if (c.length) return c.sort((a, b) => voiceScore(b, lang) - voiceScore(a, lang))[0];
    }
    if (lang !== 'en') return pickVoiceFor('en', voices);
    return voices[0] || null;
  }
  window.__arsSpeechRuns = collectSpeakRuns;
  window.__arsPickVoice = pickVoiceFor;

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

  /* segs: [{ lang, text }]. Each is spoken in turn with its language's voice, at the chosen speed. */
  function speakSegments(segs){
    queue = segs.slice();
    setSpeakingUI(true);
    const voices = {};
    const voiceOf = lang => (lang in voices) ? voices[lang] : (voices[lang] = pickVoiceFor(lang));
    function next(){
      if (!speaking) return;
      if (!queue.length){ setSpeakingUI(false); return; }
      const seg = queue.shift();
      const u = new SpeechSynthesisUtterance(seg.text);
      const voice = voiceOf(seg.lang);
      if (voice){ try { u.voice = voice; u.lang = voice.lang; } catch (e) {} }
      u.rate = currentRate();
      u.pitch = 1;
      u.onend = next;
      u.onerror = ev => {
        const why = ev && ev.error;
        if (!speaking || why === 'interrupted' || why === 'canceled') { setSpeakingUI(false); return; }
        next();   /* a voice that fails on one segment does not end the reading */
      };
      try { window.speechSynthesis.speak(u); }
      catch (e) { setSpeakingUI(false); }
    }
    try { window.speechSynthesis.cancel(); } catch (e) {}
    setTimeout(next, 40);
  }
  function segmentRuns(runs){
    const out = [];
    runs.forEach(r => chunkText(r.text).forEach(t => out.push({ lang: r.lang, text: t })));
    return out;
  }
  window.__arsSpeechSegments = () => segmentRuns(collectSpeakRuns());

  function startSpeak(){
    const runs = collectSpeakRuns();
    if (!runs.length){
      const scr = document.querySelector('.screen.active');
      speakSegments([{ lang:'en', text: scr && scr.id === 'scr-ex' ? 'Exercises are read aloud only when a question quotes a passage.' : 'There is nothing to read on this screen.' }]);
      return;
    }
    speakSegments(segmentRuns(runs));
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
