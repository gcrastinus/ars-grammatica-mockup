'use strict';
/* Mockup of the Ars Grammatica rebuild. Placeholders only. */
const KEY = 'ars-grammatica-mockup';
const store = (() => { try { return Object.assign({art:true, diff:1, dark:false, secLang:{}}, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch(e){ return {art:true, diff:1, dark:false, secLang:{}}; } })();
function save(){ try { localStorage.setItem(KEY, JSON.stringify(store)); } catch(e){} }
const $ = id => document.getElementById(id);
const ROMAN = ['','I','II','III','IV','V','VI','VII','VIII','IX','X'];
const DIFF = {
  1:{label:'The first steps — short words, clear cases, and the main rule only.', gain:16, loss:8},
  2:{label:'The ordinary material — the common forms, still with some help.', gain:14, loss:11},
  3:{label:'Harder — forms that look alike, and cases that can be read two ways.', gain:12, loss:14},
  4:{label:'Severe — rarer forms, the whole verb, fewer hints.', gain:10, loss:17},
  5:{label:'Everything at once — all declensions and conjugations, no hints.', gain:8, loss:20}
};
const BASE = ['English', 'Latin'];
const CHOICE = ['Greek', 'German', 'French'];

/* Sections. Topic: {t: title, sub: optional subheading, an: analysis card (Construction), gen: general only} */
const ACTS = [
 {key:'s0', roman:'0', latin:'Quid sit grammatica', name:'What Grammar Is', src:'Quintilian I.4; Diomedes; Vossius I',
  gloss:'Grammar as <i>scientia recte loquendi et scribendi</i>: its matter, its offices, and its two parts.', noLang:true,
  topics:[{t:'The Definition of Grammar'},{t:'The Offices of the Grammarian: <i>lectio</i>, <i>enarratio</i>, <i>emendatio</i>, <i>iudicium</i>'},
    {t:'The Two Parts: Precepts and Interpretation'},{t:'The Criteria of Correctness: Reason, Antiquity, Authority, Custom'}]},
 {key:'s1', roman:'I', latin:'De signo et voce significativa', name:'Sign and Word', src:'Aristotle, <i>De interpretatione</i> 1–4; Priscian II',
  gloss:'What a word is as a sign: imposed, signifying, and joined to other words.',
  topics:[{t:'Sign and Symbol'},{t:'Imposition'},{t:'Signification and Consignification'},{t:'Categorematic and Syncategorematic Words'},
    {t:'The Functions of Language'},{t:'Ambiguity'}]},
 {key:'s2', roman:'II', latin:'De materia orationis', name:'The Matter of Speech', src:'Donatus, <i>Ars maior</i> I; Priscian I–II; Vossius I–II',
  gloss:'Voice, letter, and syllable: the stuff of which speech is made, and how it is written and pointed.',
  topics:[{t:'Voice (<i>vox</i>)'},{t:'The Letter and Orthography'},{t:'The Syllable'},{t:'Quantity and Accent'},
    {t:'Punctuation (<i>posituræ</i>)'},{t:'A Note on Feet and Meter'}]},
 {key:'s3', roman:'III', latin:'De analogia et anomalia', name:'The Parts of Speech and Their Accidents', src:'Donatus, <i>Ars minor</i>; <i>Ars maior</i> II; Priscian II–XVI; Vossius III–VI',
  gloss:'The eight parts of speech, each with its accidents, treated as rule (<i>analogia</i>) and exception (<i>anomalia</i>).',
  topics:[{sub:'The word in general'},{t:'The Word (<i>dictio</i>) and the Eight Parts'},{t:'Figure and Species: Simple and Compound, Primitive and Derived'},{t:'Homonymy and Synonymy'},
    {sub:'The noun'},{t:'The Noun and Its Accidents: Quality, Comparison, Gender, Number, Figure, Case'},{t:'Declension'},
    {sub:'The pronoun'},{t:'The Pronoun and Its Accidents'},
    {sub:'The verb'},{t:'The Verb and Its Accidents: Quality, Conjugation, Genus, Number, Figure, Tense, Person'},{t:'Conjugation'},
    {sub:'The participle'},{t:'The Participle and Its Accidents'},
    {sub:'The adverb'},{t:'The Adverb and Its Accidents: Signification, Comparison, Figure'},
    {sub:'The preposition'},{t:'The Preposition and Its Accident: Case'},
    {sub:'The conjunction'},{t:'The Conjunction and Its Accidents: Power, Figure, Order'},
    {sub:'The interjection'},{t:'The Interjection'}]},
 {key:'s4', roman:'IV', latin:'De etymologia', name:'Word Formation and Etymology', src:'Varro, <i>De lingua Latina</i>; Vossius IV; <i>Etymologicon</i>',
  gloss:'How words are derived and compounded, and what the comparison of the languages shows of their origins.',
  topics:[{t:'Derivation'},{t:'Composition'},{t:'Etymology, Ancient and Comparative'}]},
 {key:'s5', roman:'V', latin:'De constructione', name:'Construction', src:'Priscian XVII–XVIII; Thomas of Erfurt; Vossius VII',
  gloss:'Congruity first; then how words agree, govern, depend, and are ordered into phrase, clause, and period. Each topic is followed by the analysis of real sentences.',
  topics:[{t:'Congruity and Completeness',an:1},{t:'Agreement (<i>concordantia</i>)',an:1},{t:'Government (<i>regimen</i>)',an:1},
    {t:'Dependence: <i>dependens</i> and <i>terminans</i>',an:1},{t:'Order: Natural and Artificial',an:1},{t:'The Phrase',an:1},
    {t:'The Clause',an:1},{t:'The Period',an:1},{t:'Mood and Voice in Construction',an:1},{t:'Figures of Construction',an:1},
    {t:'Grammatical Equivalents of Logical Forms',an:1}]},
 {key:'s6', roman:'VI', latin:'De vitiis', name:'Correctness and Faults', src:'Donatus, <i>Ars maior</i> III.1–4; Quintilian I.5–6',
  gloss:'Usage and authority as the rule of correctness, and the faults that break it.',
  topics:[{t:'Usage and Authority'},{t:'Barbarism'},{t:'Solecism'},{t:'The Other Faults'},{t:'Metaplasm'}]},
 {key:'s7', roman:'VII', latin:'De schematibus et tropis', name:'Figures and Tropes', src:'Donatus, <i>Ars maior</i> III.5–6; Quintilian VIII–IX',
  gloss:'The literal and the figurative sense, and the figures of words and the tropes.',
  topics:[{t:'Literal and Figurative Sense'},{t:'Figures of Words (<i>schemata lexeos</i>)'},{t:'Tropes'}]},
 {key:'s8', roman:'VIII', latin:'De lectione auctorum', name:'Reading the Authors', src:'Dionysius Thrax 1; Quintilian I.8; Servius',
  gloss:'The offices of the grammarian put to work on the authors, in prose and in poetry.',
  topics:[{t:'<i>Lectio</i>: Reading Aloud'},{t:'<i>Enarratio</i>: Explanation'},{t:'<i>Emendatio</i>: Correction of the Text'},{t:'<i>Iudicium</i>: Judgment'},
    {t:'Passage Analysis: Prose'},{t:'Passage Analysis: Poetry'},{t:'Workshop and Marking'}]},
 {key:'s9', roman:'IX', latin:'De compositione', name:'Making', src:'Quintilian I.9, II.4; Ascham, <i>The Scholemaster</i>; Aphthonius',
  gloss:'From reading to writing: composition, imitation, double translation, and the first exercises.',
  topics:[{t:'Composition'},{t:'Imitation'},{t:'Double Translation'},{t:'Chreia and Maxim'}]},
 {key:'s10', roman:'X', latin:'Ad logicam transitus', name:'Capstone: Handoff to Logic', src:'Thomas of Erfurt; Peter of Spain; <i>Grammaire générale et raisonnée</i>',
  gloss:'Where grammar hands over to logic: the reasons for the parts, signification and supposition, and universal grammar.', noLang:true,
  topics:[{t:'The Reasons for the Parts: The Modistae'},{t:'Signification and Supposition'},{t:'Port-Royal and Universal Grammar'}]},
 {key:'app', name:'Appendix: Other Traditions of Grammar', gloss:'Grammars outside the Greek and Latin line, read for comparison.', noLang:true,
  topics:[{t:'Scribal Grammar of the Ancient Near East'},{t:'<i>Vyākaraṇa</i>: The Sanskrit Grammarians'},{t:'<i>Xiaoxue</i>: Chinese Philology'},{t:'<i>Naḥw</i>: Arabic Grammar'}]}
];

let toastT = null;
function soon(){ const t = $('toast'); t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1400); }

function card(tag, title){
  const c = document.createElement('div');
  c.className = 'set-card mock';
  c.innerHTML = `<div class="set-num">${tag}</div><h3>${title}</h3><p></p>
    <div class="mock-btns"><button type="button" class="btn">Study</button><button type="button" class="btn">Exercise</button></div>`;
  c.querySelectorAll('button').forEach(b => b.onclick = soon);
  return c;
}
/* A row of one or more equal-height cards; a lone card takes the full width. */
function row(cards){
  const r = document.createElement('div');
  r.className = 'set-pair ' + (cards.length > 1 ? 'duo' : 'full');
  cards.forEach(c => r.appendChild(c));
  return r;
}
function label(cls, text){ const d = document.createElement('div'); d.className = cls; d.innerHTML = text; return d; }

function buildDiffRow(){
  const r = $('diff-row'); r.innerHTML = '';
  for(let d = 1; d <= 5; d++){
    const b = document.createElement('button');
    b.className = 'diff-btn' + (d === store.diff ? ' sel' : ''); b.textContent = ROMAN[d];
    b.onclick = () => { store.diff = d; save(); buildDiffRow(); };
    r.appendChild(b);
  }
  const df = DIFF[store.diff];
  $('diff-desc').textContent = `${df.label} · +${df.gain} / −${df.loss}`;
  const ar = $('art-row'); ar.innerHTML = '';
  [[true, 'The Art of Grammar'], [false, 'The Art of Grammar + Three Languages']].forEach(([v, lab]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'art-btn' + (store.art === v ? ' sel' : ''); b.textContent = lab;
    b.setAttribute('aria-pressed', store.art === v ? 'true' : 'false');
    b.onclick = () => { if(store.art === v) return; store.art = v; save(); buildDiffRow(); buildHome(); const f = ar.querySelector('.sel'); if(f) f.focus(); };
    ar.appendChild(b);
  });
}

function buildHome(){
  const host = $('home-acts'); host.innerHTML = '';
  ACTS.forEach(act => {
    if(act.roman){
      host.appendChild(label('act-label', `${act.roman} · ${act.latin}`));
      host.appendChild(label('act-latin', act.name));
    } else host.appendChild(label('section-label', act.name));
    host.appendChild(label('act-gloss', act.gloss + (act.src ? ` <span style="opacity:.75">(${act.src})</span>` : '')));
    const grid = document.createElement('div'); grid.className = 'set-grid';
    const full = !store.art && !act.noLang;
    act.topics.forEach(tp => {
      if(tp.sub){ grid.appendChild(label('grp-label', tp.sub)); return; }
      if(full) grid.appendChild(label('topic-label', tp.t));
      grid.appendChild(row(tp.an ? [card('General', tp.t), card('General · Analysis', 'Analysis of Sentences: ' + tp.t)] : [card('General', tp.t)]));
      if(full) grid.appendChild(row(BASE.map(L => card(L, tp.t))));
    });
    if(full){
      const chosen = CHOICE.indexOf(store.secLang[act.key]) >= 0 ? store.secLang[act.key] : 'Greek';
      grid.appendChild(label('grp-label', 'Greek, German, and French'));
      const box = document.createElement('div'); box.className = 'grp-choice';
      box.appendChild(label('grp-choice-label', 'A language to work through in this section:'));
      CHOICE.forEach(L => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'lang-btn' + (L === chosen ? ' sel' : ''); b.textContent = L;
        b.setAttribute('aria-pressed', L === chosen ? 'true' : 'false');
        b.onclick = () => { store.secLang[act.key] = L; save(); const y = window.scrollY; buildHome(); window.scrollTo(0, y); };
        box.appendChild(b);
      });
      grid.appendChild(box);
      act.topics.filter(tp => tp.t).forEach(tp => grid.appendChild(row([card(chosen, tp.t)])));
    }
    host.appendChild(grid);
  });
}

function setDark(on){ store.dark = on; document.body.classList.toggle('dark', on); const t = $('dark-toggle'); if (t) t.textContent = '☾ / ☀'; save(); }
$('dark-toggle').onclick = () => setDark(!store.dark);
document.querySelectorAll('.mock-soon').forEach(b => b.onclick = soon);
setDark(!!store.dark);
buildDiffRow();
buildHome();
