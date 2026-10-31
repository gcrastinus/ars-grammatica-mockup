'use strict';
/* Mockup of the Ars Grammatica rebuild (v2): one general course. Placeholders only. */
const KEY = 'ars-grammatica-mockup-v2';
const store = (() => { try { return Object.assign({diff:1, dark:false}, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch(e){ return {diff:1, dark:false}; } })();
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
/* Topic: [title, one-line description, options]. sub: subheading. an: adds a sentence-analysis exercise. exOnly: an exercise with no study. */
const ACTS = [
 {roman:'Preliminary', latin:'Quid sit grammatica', name:'What Grammar Is', src:'Quintilian I.4; Diomedes; Vossius I',
  gloss:'Grammar as <i>scientia recte loquendi et scribendi</i>: its matter, its offices, and its parts.',
  topics:[['The Definition of Grammar','What grammar is, what it treats, and why it is the first art of the trivium.'],
   ['The Offices of the Grammarian','<i>Lectio</i>, <i>enarratio</i>, <i>emendatio</i>, and <i>iudicium</i>: reading, explaining, correcting, and judging.'],
   ['Precepts and Interpretation','The two parts of grammar: the precepts of the art and the reading of the authors.'],
   ['The Criteria of Correctness','Reason, antiquity, authority, and custom, the four tests of correct speech.']]},
 {roman:'I', latin:'De signo et voce significativa', name:'Sign and Word', src:'Aristotle, <i>De interpretatione</i> 1–4; Augustine, <i>De doctrina christiana</i> II; Priscian II',
  gloss:'What a word is as a sign: imposed, signifying, and joined to other words.',
  topics:[['Sign and Symbol','Natural and given signs, and the spoken word as a symbol of what is in the mind.'],
   ['Imposition','How a sound comes to signify by the will of those who first used it.'],
   ['Signification and Consignification','What a word means, and what it signifies along with that meaning, such as time.'],
   ['Categorematic and Syncategorematic Words','Words that signify of themselves, and words such as "every" and "not" that signify only with others.'],
   ['The Functions of Language','To state, to ask, to command, to wish, and to express feeling.'],
   ['Ambiguity','How one word or one construction can bear two senses, and how the grammarian tells them apart.']]},
 {roman:'II', latin:'De materia orationis', name:'The Matter of Speech', src:'Donatus, <i>Ars maior</i> I; Priscian I–II; Vossius I–II',
  gloss:'Voice, letter, and syllable: the stuff of which speech is made, and how it is written, pointed, and measured.',
  topics:[['Voice (<i>vox</i>)','Voice as air struck and heard; articulate and confused voice.'],
   ['The Letter and Orthography','The letter and its accidents, name, figure, and power; spelling and sound.'],
   ['The Syllable','What a syllable is and how words are divided into syllables.'],
   ['Quantity and Accent','Long and short syllables, by nature and by position; the acute, grave, and circumflex.'],
   ['Punctuation (<i>posituræ</i>)','The old marks of pause, <i>distinctio</i>, <i>subdistinctio</i>, and <i>media distinctio</i>, beside the modern ones.'],
   ['Feet and Meter','Feet and verse, with a line or two of English, Latin, Greek, Spanish, German, and French to show stress, quantity, and syllable count.']]},
 {roman:'III', latin:'De analogia et anomalia', name:'Analogy and Anomaly: The Parts of Speech', src:'Donatus, <i>Ars minor</i>; <i>Ars maior</i> II; Priscian II–XVI; Vossius III–VI',
  gloss:'The eight parts of speech, each with its accidents, treated as rule (<i>analogia</i>) and exception (<i>anomalia</i>).',
  topics:[{sub:'The word in general'},
   ['The Word (<i>dictio</i>) and the Eight Parts','The least part of a constructed sentence, and Donatus’s eight parts with the test of use.'],
   ['Figure and Species','Simple and compound (<i>potens</i>, <i>impotens</i>); primitive and derived.'],
   ['Homonymy and Synonymy','One word with many meanings (<i>acies</i>), and many words with one meaning (<i>ensis</i>, <i>gladius</i>).'],
   {sub:'The declinable parts'},
   ['The Noun I: Kinds, Quality, and Comparison','Proper and common nouns, the adjective under the noun, and the degrees of comparison.'],
   ['The Noun II: Gender, Number, and Case','The accidents that make declension, with the cases set beside English word order and prepositions.'],
   ['The Pronoun','The pronoun and its accidents: quality, gender, number, figure, person, and case.'],
   ['The Verb I: Quality, Mood, and Voice','The forms and moods of the verb, and active, passive, neuter, and deponent (<i>genus</i>).'],
   ['The Verb II: Tense, Person, Number, and Conjugation','How the verb marks time and person, and how verbs are conjugated.'],
   ['The Participle','The part that shares in noun and verb, and its accidents.'],
   {sub:'The indeclinable parts'},
   ['The Adverb','The adverb and its accidents: signification, comparison, and figure.'],
   ['The Preposition','The preposition and its one accident, case, and its use in composition.'],
   ['The Conjunction','The conjunction and its accidents: power, figure, and order.'],
   ['The Interjection','The part that signifies a feeling of the mind ("alas," <i>heu</i>, <i>οἴμοι</i>, <i>ach</i>, <i>hélas</i>).']]},
 {roman:'IV', latin:'De etymologia', name:'Word Formation and Etymology', src:'Varro, <i>De lingua Latina</i>; Vossius IV; Vossius, <i>Etymologicon</i>',
  gloss:'How words are derived and compounded, and what the comparison of languages shows of their origins.',
  topics:[['Derivation','How new words are made from old ones by endings and changes of form.'],
   ['Composition','How words are joined to make compounds, in English, Latin, and German.'],
   ['Etymology','The origin of words, ancient and comparative, and the cautions it requires.']]},
 {roman:'V', latin:'De constructione', name:'Construction', src:'Priscian XVII–XVIII; Thomas of Erfurt, <i>Grammatica speculativa</i>; Vossius VII',
  gloss:'Congruity first; then how words agree, govern, depend, and are ordered into phrase, clause, and period. Each topic ends with a short exercise in sentence analysis.',
  topics:[['Congruity','A sentence well formed and complete, as distinct from a sentence that is true.',{an:1}],
   ['Agreement (<i>concordantia</i>)','How words agree in gender, number, case, and person.',{an:1}],
   ['Government (<i>regimen</i>)','How a verb, preposition, or noun requires a case.',{an:1}],
   ['Dependence','The dependent and the term on which it depends (<i>dependens</i> and <i>terminans</i>).',{an:1}],
   ['Order (<i>ordo</i>)','Natural and artificial order, and what word order does in English and in Latin.',{an:1}],
   ['The Phrase','Groups of words that act as one part of speech.',{an:1}],
   ['The Clause','Subject and predicate; independent and subordinate clauses.',{an:1}],
   ['The Period','The rounded sentence of many members (Quintilian, Demetrius).',{an:1}],
   ['Mood and Voice in Construction','The passive with its agent, the infinitive, the participle, and the subjunctive in clauses.',{an:1}],
   ['Figures of Construction','Ellipsis, zeugma, syllepsis, and the other departures from regular construction.',{an:1}]]},
 {roman:'VI', latin:'De vitiis', name:'Correctness and Faults', src:'Donatus, <i>Ars maior</i> III.1–4; Quintilian I.5–6',
  gloss:'Usage and authority as the rule of correctness, and the faults that break it.',
  topics:[['Usage and Authority','Custom, the authors, and reason as the judges of what is correct.'],
   ['Barbarism','A fault in a single word.'],
   ['Solecism','A fault in the joining of words.'],
   ['Metaplasm','A change in a word allowed for meter or ornament ("o’er," <i>e’en</i>).']]},
 {roman:'VII', latin:'De schematibus et tropis', name:'Figures and Tropes', src:'Donatus, <i>Ars maior</i> III.5–6; Quintilian VIII–IX',
  gloss:'The literal and the figurative sense, the figures of words, and the tropes.',
  topics:[['Literal and Figurative Sense','What a word says properly, and what it says by a turn.'],
   ['Figures of Words (<i>schemata lexeos</i>)','Repetition, omission, and arrangement used for effect.'],
   ['Tropes','Metaphor, metonymy, synecdoche, and the other turns of meaning.']]},
 {roman:'VIII', latin:'De significatione et suppositione', name:'Signification and Supposition', src:'Thomas of Erfurt; Peter of Spain, <i>Summulae</i>',
  gloss:'Where grammar hands over to logic.',
  topics:[['The Reasons for the Parts','The modistae: modes of being, understanding, and signifying as the ground of the parts.'],
   ['Supposition','What a term stands for in a sentence, as distinct from what it signifies.'],
   ['Grammatical Equivalents of Logical Forms','How subject, copula, and predicate, quantity, and negation appear in grammar.']]},
 {roman:'IX', latin:'De analysi', name:'Analysis of Sentences and Passages', src:'Quintilian I.8; Servius',
  gloss:'The whole art put to work: sentences and passages mostly in English, with some Latin, Greek, Spanish, German, and French, each translated and with its distinctive points noted.',
  topics:[['Analysis of Sentences','A large exercise in parsing and construing whole sentences.',{exOnly:1}],
   ['Analysis of Passages','A large exercise on passages in prose and poetry: reading, explaining, and judging.',{exOnly:1}],
   ['Workshop and Marking','Mark the parts, cases, and dependencies of any sentence by hand.',{tool:1}]]},
 {roman:'X', latin:'De compositione', name:'Making', src:'Quintilian I.9, II.4; Roger Ascham, <i>The Scholemaster</i>; Aphthonius',
  gloss:'From reading to writing.',
  topics:[['Composition','Building sentences and periods of one’s own.'],
   ['Imitation','Writing after a model author.'],
   ['Translation','Double translation: into another language and back again, compared with the original.'],
   ['Chreia and Maxim','The first exercises of composition: the saying and the deed, expanded.']]},
 {roman:'XI', latin:'De aliis traditionibus', name:'Other Traditions', src:'Pāṇini, <i>Aṣṭādhyāyī</i>; Sībawayh, <i>al-Kitāb</i>',
  gloss:'The art seen from outside: the other classical grammars.',
  topics:[['The Other Classical Traditions','The major differences from the Greco-Latin art: Sanskrit grammar and Pāṇini (<i>vyākaraṇa</i>), Arabic grammar (<i>naḥw</i>), Hebrew grammar, and Chinese philology (<i>xiaoxue</i>).']]}
];

let toastT = null;
function soon(){ const t = $('toast'); t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1400); }
function label(cls, html){ const d = document.createElement('div'); d.className = cls; d.innerHTML = html; return d; }
function card([title, desc, o = {}]){
  const c = document.createElement('div');
  c.className = 'set-card mock';
  const btns = o.tool ? ['Open'] : o.exOnly ? ['Exercise'] : o.an ? ['Study', 'Exercise', 'Analysis'] : ['Study', 'Exercise'];
  c.innerHTML = `<div class="set-num">${o.exOnly ? '<span class="ex-mark">Exercise</span>' : o.tool ? 'Tool' : 'Study and exercise'}</div><h3>${title}</h3><p>${desc}</p>
    <div class="mock-btns">${btns.map(b => `<button type="button" class="btn">${b}</button>`).join('')}</div>`;
  c.querySelectorAll('button').forEach(b => b.onclick = soon);
  return c;
}
/* Cards run two to a row at equal height; a lone card takes the full width. */
function flush(grid, buf){
  for(let i = 0; i < buf.length; i += 2){
    const pair = buf.slice(i, i + 2), r = document.createElement('div');
    r.className = 'set-pair ' + (pair.length > 1 ? 'duo' : 'full');
    pair.forEach(t => r.appendChild(card(t)));
    grid.appendChild(r);
  }
  buf.length = 0;
}
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
}
function buildHome(){
  const host = $('home-acts'); host.innerHTML = '';
  ACTS.forEach(act => {
    if(act.roman){ host.appendChild(label('act-label', `${act.roman} · ${act.latin}`)); host.appendChild(label('act-latin', act.name)); }
    else host.appendChild(label('section-label', act.name));
    host.appendChild(label('act-gloss', act.gloss + (act.src ? ` <span style="opacity:.75">(${act.src})</span>` : '')));
    const grid = document.createElement('div'); grid.className = 'set-grid';
    const buf = [];
    act.topics.forEach(t => { if(t.sub){ flush(grid, buf); grid.appendChild(label('grp-label', t.sub)); } else buf.push(t); });
    flush(grid, buf);
    host.appendChild(grid);
  });
}
function setDark(on){ store.dark = on; document.body.classList.toggle('dark', on); const t = $('dark-toggle'); if (t) t.textContent = '☾ / ☀'; save(); }
$('dark-toggle').onclick = () => setDark(!store.dark);
document.querySelectorAll('.mock-soon').forEach(b => b.onclick = soon);
setDark(!!store.dark);
buildDiffRow();
buildHome();
