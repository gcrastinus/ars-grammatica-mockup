/* P.3 Precepts and Interpretation [prelim.methodice] (the id is kept; ids never change)
   Plan (ITEM-LIST.md): 6 panels, 2 question points, each with exactly 3 variants. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.methodice'] = {
  id: 'prelim.methodice',
  title: 'Precepts and Interpretation',
  sub: 'The two parts of grammar: the precepts of the art and the reading of the authors',
  sources: `Quintilian, <i>Institutio oratoria</i> I.4–9.`,
  panels: [

{ id: 'two-parts',
  title: 'What are the two parts of grammar?',
  body: `<p>Quintilian, as we saw earlier, divides the profession of the grammarian into two parts, the art of speaking correctly and the interpretation of the poets (<i>Institutio oratoria</i> I.4.2). When he finishes treating these two parts, he names them again: “I have now finished with two of the departments, with which teachers of literature profess to deal, namely the art of speaking correctly and the interpretation of authors”; he adds “of which the Greeks call the first <i>methodice</i> and the second <i>historice</i>” (<i>Institutio oratoria</i> I.9.1).</p>
<p>So the part of grammar that teaches the precepts of the art is the part concerned with precepts (<i>methodice</i>, from the Greek for the methodical part), and the part that interprets the authors is interpretation (<i>historice</i>, from the Greek for the part that gives an account of the authors). We take each part in turn.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.9.1 (the Latin from the Perseus text).` },

{ id: 'methodice',
  title: 'Precepts',
  body: `<p>The first part of grammar is the part concerned with precepts, that is, the general rules of the art. Its Greek name, <i>methodice</i>, comes from <i>methodos</i>, an orderly way of proceeding; so this part teaches grammar as an ordered body of precepts. A precept, in this sense, is a general rule or guiding principle of the art. It defines each thing that grammar treats, divides it into its kinds, and gives the rules that govern it. For example, it divides nouns into proper nouns, like “London,” and common nouns, like “city”; and it gives the rule that a Latin adjective agrees with its noun in what the noun’s inflections are; in the case of Latin, every noun in an expression has a gender, which comes from the noun itself, number, which is whether the noun is singular or plural in the given expression, and case, which comes from what the noun does in the expression (in English we can see case in pronouns especially, they, their, them). In Latin, the inflections (or endings of the word) must agree when one word modifies another as in <i>puella bona</i> (“a good girl”) and <i>puellae bonae</i> (“good girls”); note the different endings, -a and -ae.</p>
<p>The precepts of the art of grammar are general because they hold for every sentence of their kind; and, for that reason, they can be learned once and applied to any text.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4–7.` },

{ id: 'historice',
  title: 'Interpretation',
  body: `<p>The second part of grammar is interpretation, that is, the interpretation of the authors. Its Greek name, <i>historice</i>, comes from <i>historia</i>, inquiry or account. (The name does not mean the study of history in our sense but rather it means something like a survey of a whole topic.) As the highest part of grammar, interpretation is the reading and explanation of especially the literary authors and their particular works. It explains the words, the constructions, and the matter of a particular text, such as a poem, a history, or a speech. To take a simple example, it explains that “score” in “Four score and seven years ago” (Lincoln, Gettysburg Address) means twenty.</p>
<p>So, whereas the precepts are general, the work of interpretation is particular, because it explains this line or this sentence in this particular text and does not consider every line of its kind. For that reason interpretation is learned by reading many authors with a teacher.</p>`,
  src: `Lincoln, Gettysburg Address (1863).`,
  qp: { id: 'q-which-part', variants: [
    { prompt: `The rule that a verb agrees with its subject in number and person belongs to which part of grammar?`,
      options: [`Precepts`, `Interpretation`, `Neither; it belongs to logic`, `Neither; it belongs to rhetoric`],
      answer: 0,
      explain: `The rule is a general precept of the art, which holds for every sentence of its kind, so it belongs to the part concerned with precepts. Interpretation explains particular texts.` },
    { prompt: `Explaining what “score” means in “Four score and seven years ago” belongs to which part of grammar?`,
      options: [`Precepts`, `Neither; it belongs to logic`, `Interpretation`, `Neither; it belongs to rhetoric`],
      answer: 2,
      explain: `Explaining a word in a particular text is the work of interpretation, that is, the interpretation of the authors. The part concerned with precepts gives the general precepts of the art.` },
    { prompt: `Quintilian reports the Greek name <i>historice</i> (from <i>historia</i>, inquiry or account) for one part of grammar. Which part does it name?`,
      options: [`The history of the Greek language`, `The interpretation of the authors`, `The precepts of correct speech`, `The order in which the arts are studied`],
      answer: 1,
      explain: `Quintilian gives the Greek name <i>historice</i> to interpretation, that is, the interpretation of the authors, and <i>methodice</i> (from <i>methodos</i>, an orderly way of proceeding) to the precepts, that is, the general rules of the art (I.9.1).` }
  ]}},

{ id: 'together',
  title: 'How do precepts and interpretation depend on each other?',
  body: `<p>We have now seen the two parts of grammar one at a time; but they are not separate studies, since each depends on the other. The precepts are drawn from the usage of the authors, and they are tested against the authors. In turn, the authors are read and explained by means of the precepts.</p>
<p>So a student who knows the precepts without reading the authors knows rules that he has never seen used; and a student who reads the authors without the precepts cannot say why a sentence is correctly formed.</p>`,
  src: `Ecclesiastes 12:1 (King James Version).` },

{ id: 'one-sentence',
  title: 'How do both parts work together on one sentence?',
  body: `<p>Since the two parts depend on each other, both are at work whenever one sentence is read with a teacher. Consider Ecclesiastes 12:1, which in the King James Version reads: “Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them.”</p>
<p>The precepts and principles name the forms and constructions; for example, “Remember” is a verb in the imperative mood. Interpretation explains what the sentence means in its place in the book; for example, “the evil days” are the days of old age. No general precept tells us what “the evil days” refers to in this chapter, and so this second kind of explanation needs the reading of the particular text.</p>`,
  src: `Ecclesiastes 12:1 (King James Version).`,
  qp: { id: 'q-both', variants: [
    { prompt: `In “Remember now thy Creator,” naming “Remember” as a verb in the imperative mood is the work of which part of grammar?`,
      options: [`Interpretation`, `Precepts`, `Both equally`, `Neither; it belongs to logic`],
      answer: 1,
      explain: `Naming the form of a word by the general precepts of the art is the work of the part concerned with precepts. Interpretation explains what this sentence means in its place in the book.` },
    { prompt: `Explaining that “the evil days” in Ecclesiastes 12:1 are the days of old age is the work of which part of grammar?`,
      options: [`Precepts`, `Neither; it belongs to logic`, `Neither; it belongs to rhetoric`, `Interpretation`],
      answer: 3,
      explain: `Explaining the matter of a particular text belongs to interpretation, that is, the interpretation of the authors. No general precept tells us what “the evil days” refers to in this chapter.` },
    { prompt: `Why does the grammarian need both parts of grammar?`,
      options: [`Because the precepts are drawn from the authors and tested against them, and the authors are explained by means of the precepts`, `Because the precepts are for Latin and interpretation is for English`, `Because interpretation judges whether the authors are true`, `Because the precepts change with each author`],
      answer: 0,
      explain: `The two parts depend on each other: the precepts come from the usage of the authors and are tested against it, and the authors are read by means of the precepts. Neither part is limited to one language, and neither judges whether an author is true.` }
  ]}},

{ id: 'schools',
  title: 'How were the two parts taught in schools?',
  body: `<p>The division of grammar into precepts and interpretation did not end with Quintilian; it continued in the schools after him, through late ancient Rome and the Middle Ages down to the eighteenth and nineteenth centuries. The precepts were learned from short grammars written for that purpose, such as Donatus’s <i>Ars minor</i>, and the authors were read with commentaries that explained them line by line, such as Servius’s commentary on Vergil.</p>
<p>In the twentieth century, grammar was more and more thought to be an unnecessary imposition on language; it was thought for decades that teachers should not teach their students precepts as prescriptions for the correct grammar for sentences and instead should focus just on reading comprehension and clarity of writing. But implicitly teachers always used grammar, even the precepts of grammar, since students do not know how to write well or even correctly at first, and that meant that teachers did have to give many rules to students but it also meant they did not present the rules as a system and so grammar appeared to be an incoherent set of disconnected but necessary rules. In fact, grammar forms an ordered whole that considers in a systematic way each part of every utterance, from sound to sentence. That is what this course teaches.</p>`,
  src: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i>; Servius, <i>In Vergilii Aeneidem</i>.` }

  ]
};
