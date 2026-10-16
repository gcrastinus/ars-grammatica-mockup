/* P.3 What Are Methodice and Historice? [prelim.methodice]
   Plan (ITEM-LIST.md): 6 panels, 2 question points, each with exactly 3 variants. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.methodice'] = {
  id: 'prelim.methodice',
  title: 'What Are <i>Methodice</i> and <i>Historice</i>?',
  latinTitle: true,
  sub: 'The two parts of grammar: the precepts of the art and the reading of the authors',
  panels: [

{ id: 'two-parts',
  title: 'What are the two parts of grammar?',
  body: `<p>Quintilian names the two parts of grammar when he finishes treating them: “I have now finished with two of the departments, with which teachers of literature profess to deal, namely the art of speaking correctly and the interpretation of authors” (<i>Institutio oratoria</i> I.9.1, trans. Butler). He adds the Greek names that the grammarians gave them. The Latin reads <i>ratio loquendi et enarratio auctorum, quarum illam methodicen, hanc historicen vocant</i>, that is, “the rules of speaking and the interpretation of authors, of which they call the first <i>methodice</i> and the second <i>historice</i>” (trans. T. Kearns).</p>
<p><i>Methodice</i> is the part of grammar that teaches the precepts of the art. <i>Historice</i> is the part that interprets the authors.</p>`,
  examples: [
    `A precept (<i>methodice</i>): “A verb agrees with its subject in number and person.”`,
    `A precept in Latin (<i>methodice</i>): the preposition <i>cum</i> (“with”) takes the ablative case, as in <i>cum amīcō</i> (“with a friend”).`,
    `The interpretation of an author (<i>historice</i>): explaining that “score” in “Four score and seven years ago” (Lincoln, Gettysburg Address) means twenty, so that “four score and seven” means eighty-seven.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.9.1 (trans. H. E. Butler, Loeb; the Latin from the Perseus text, with a literal translation by T. Kearns).` },

{ id: 'methodice',
  title: 'What is <i>methodice</i>?',
  body: `<p>The name <i>methodice</i> comes from the Greek <i>methodos</i>, an orderly way of proceeding. <i>Methodice</i> teaches grammar as an ordered body of precepts. It defines each thing that grammar treats, divides it into its kinds, and gives the rules that govern it.</p>
<p>The precepts are general: they hold for every sentence of their kind, and not only for the sentence in which they were first observed. For that reason they can be learned once and applied to any text.</p>`,
  examples: [
    `A definition: “A sentence is a group of words that expresses a complete thought.”`,
    `A division: “Nouns are either proper, such as ‘London,’ or common, such as ‘city.’”`,
    `A rule: “A Latin adjective agrees with its noun in gender, number, and case,” as in <i>puella bona</i> (“a good girl”) and <i>puellae bonae</i> (“good girls”).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.4–7 (trans. Butler).` },

{ id: 'historice',
  title: 'What is <i>historice</i>?',
  body: `<p>The name <i>historice</i> comes from the Greek <i>historia</i>, inquiry or account. <i>Historice</i> is the reading and interpretation of the authors. It explains the words, the constructions, and the matter of a particular text, such as a poem, a history, or a speech.</p>
<p>Its work is particular, because it explains this line or this sentence and not every line of its kind. For that reason it is learned by reading many authors with a teacher.</p>`,
  examples: [
    `The meaning of a word: “score” in “Four score and seven years ago” means twenty.`,
    `The construction of a sentence: in “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife” (Austen, <i>Pride and Prejudice</i>, ch. 1), the clause beginning with “that” tells what the truth is.`,
    `The matter of a text: in Gibbon’s “Nerva, Trajan, Hadrian, and the two Antonines” (<i>Decline and Fall</i>, ch. I), the names are those of the Roman emperors of the second century.`
  ],
  src: `Lincoln, Gettysburg Address (1863); Austen, <i>Pride and Prejudice</i> (1813), ch. 1; Gibbon, <i>The Decline and Fall of the Roman Empire</i>, ch. I.`,
  qp: { id: 'q-which-part', variants: [
    { prompt: `The rule that a verb agrees with its subject in number and person belongs to which part of grammar?`,
      options: [`<i>Methodice</i>`, `<i>Historice</i>`, `Neither; it belongs to logic`, `Neither; it belongs to rhetoric`],
      answer: 0,
      explain: `The rule is a general precept of the art, which holds for every sentence of its kind, so it belongs to <i>methodice</i>. <i>Historice</i> explains particular texts.` },
    { prompt: `Explaining what “score” means in “Four score and seven years ago” belongs to which part of grammar?`,
      options: [`<i>Methodice</i>`, `Neither; it belongs to logic`, `<i>Historice</i>`, `Neither; it belongs to rhetoric`],
      answer: 2,
      explain: `Explaining a word in a particular text is the work of <i>historice</i>, the interpretation of the authors. <i>Methodice</i> gives the general precepts of the art.` },
    { prompt: `What does the Greek name <i>historice</i> refer to?`,
      options: [`The history of the Greek language`, `The interpretation of the authors`, `The precepts of correct speech`, `The order in which the arts are studied`],
      answer: 1,
      explain: `Quintilian gives <i>historice</i> as the name of the interpretation of the authors and <i>methodice</i> as the name of the precepts of the art (I.9.1).` }
  ]}},

{ id: 'together',
  title: 'How do the two parts depend on each other?',
  body: `<p>The two parts of grammar depend on each other. The precepts of <i>methodice</i> are drawn from the usage of the authors, and they are tested against the authors. In turn, the authors are read and explained by means of the precepts.</p>
<p>So a student who knows the precepts without reading the authors knows rules that he has never seen used. A student who reads the authors without the precepts cannot say why a sentence is correctly formed.</p>`,
  examples: [
    `The rule of agreement is observed in “nor the years draw nigh” (Ecclesiastes 12:1, King James Version), where the plural subject “years” takes the plural verb “draw.”`,
    `The same rule is observed in “It is a truth universally acknowledged” (Austen, <i>Pride and Prejudice</i>, ch. 1), where the singular subject “It” takes the singular verb “is.”`,
    `In Latin the rule is observed in <i>Murus stat</i> (“The wall stands”) and <i>Murī stant</i> (“The walls stand”), where the verb changes with the number of the subject.`
  ],
  src: `Ecclesiastes 12:1 (King James Version); Austen, <i>Pride and Prejudice</i> (1813), ch. 1.` },

{ id: 'one-sentence',
  title: 'How do both parts work on one sentence?',
  body: `<p>Both parts of grammar are at work when one sentence is read with a teacher. Ecclesiastes 12:1 in the King James Version reads: “Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them.”</p>
<p><i>Methodice</i> names the forms and constructions. <i>Historice</i> explains what the sentence means in its place in the book.</p>`,
  examples: [
    `<i>Methodice</i>: “Remember” is a verb in the imperative mood, which expresses a command.`,
    `<i>Methodice</i>: “thy” and “thou” are the older singular forms of the pronoun of the second person, now replaced in ordinary speech by “your” and “you.”`,
    `<i>Historice</i>: “the evil days” are the days of old age, which the rest of the chapter describes.`
  ],
  src: `Ecclesiastes 12:1 (King James Version).`,
  qp: { id: 'q-both', variants: [
    { prompt: `In “Remember now thy Creator,” naming “Remember” as a verb in the imperative mood is the work of which part of grammar?`,
      options: [`<i>Historice</i>`, `<i>Methodice</i>`, `Both equally`, `Neither; it belongs to logic`],
      answer: 1,
      explain: `Naming the form of a word by the general precepts of the art is the work of <i>methodice</i>. <i>Historice</i> explains what this sentence means in its place in the book.` },
    { prompt: `Explaining that “the evil days” in Ecclesiastes 12:1 are the days of old age is the work of which part of grammar?`,
      options: [`<i>Methodice</i>`, `Neither; it belongs to logic`, `Neither; it belongs to rhetoric`, `<i>Historice</i>`],
      answer: 3,
      explain: `Explaining the matter of a particular text belongs to <i>historice</i>, the interpretation of the authors. No general precept tells us what “the evil days” refers to in this chapter.` },
    { prompt: `Why does the grammarian need both parts of grammar?`,
      options: [`Because the precepts are drawn from the authors and tested against them, and the authors are explained by means of the precepts`, `Because <i>methodice</i> is for Latin and <i>historice</i> is for English`, `Because <i>historice</i> judges whether the authors are true`, `Because the precepts change with each author`],
      answer: 0,
      explain: `The two parts depend on each other: the precepts come from the usage of the authors and are tested against it, and the authors are read by means of the precepts. Neither part is limited to one language, and neither judges whether an author is true.` }
  ]}},

{ id: 'schools',
  title: 'How were the two parts taught in the schools?',
  body: `<p>The division of grammar into the precepts of the art and the reading of the authors continued in the schools after Quintilian. The precepts were learned from short grammars written for that purpose, and the authors were read with commentaries that explained them line by line.</p>`,
  examples: [
    `The precepts: Donatus’s <i>Ars minor</i> (fourth century), a short grammar of the eight parts of speech in questions and answers.`,
    `The precepts: Priscian’s <i>Institutiones grammaticae</i> (sixth century), a full treatment of the parts of speech and of construction.`,
    `The reading of the authors: Servius’s commentary on Virgil (fourth to fifth century), which explains the words and constructions of the poem line by line.`
  ],
  src: `Donatus, <i>Ars minor</i> (trans. Wayland Johnson Chase, 1926); Priscian, <i>Institutiones grammaticae</i>; Servius, <i>In Vergilii Aeneidem</i>.` }

  ]
};
