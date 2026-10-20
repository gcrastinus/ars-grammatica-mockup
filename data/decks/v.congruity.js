/* V.1 Congruity [v.congruity]
   Plan (ITEM-LIST.md): 9 panels, 5 question points, 2 of them short analysis questions.
   Live material drawn on: DECKS.oratio (the arrangement of words, Priscian's definition, suppositum and appositum, the four
   causes, grammar's subject and logic's), DECKS.cong (two conditions, why the verb completes, three judgments),
   DECKS.congtruth (congruity and truth, the four cases). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.congruity'] = {
  id: 'v.congruity',
  title: 'Congruity',
  sub: 'A sentence well formed and complete, as distinct from a sentence that is true',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVII; Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction, congruity, and completeness.`,
  recitation: [
    `The arrangement of words in the sentence is called <strong>construction</strong> (Latin <i>cōnstrūctiō</i>), or <strong>syntax</strong> (Greek <i>syntaxis</i>, “arrangement”).`,
    `The word “construction” has two standard senses: the arrangement of words in general, and a particular group of words arranged together.`,
    `The sentence is the first thing that can be correctly or incorrectly formed as a whole, and, once it is complete, the first thing that can be true or false.`,
    `A group of words can fail to be a sentence in two ways: its words may fit together but leave the sense incomplete, or something may be said but the words may not fit one another.`,
    `So a sentence requires a fitting arrangement of words and a complete sense.`,
    `Priscian defines the sentence by these two conditions: a sentence is a fitting arrangement of words, showing a complete sense.`,
    `Priscian reports that the dialecticians counted only two parts of the sentence, the noun and the verb, because these alone, joined to each other, make a complete sentence.`,
    `A construction whose words fit one another is called <strong>congruous</strong>, and its fit is called <strong>congruity</strong> (<i>congruitās</i>).`,
    `An adjective signifies something that belongs to another, so it does not fit unless there is a word for it to belong to; a word used substantively can, however, supply that word itself.`,
    `The modists name Priscian’s two conditions congruity and <strong>completeness</strong> (<i>perfectiō</i>), and they explain congruity by the modes of signifying.`,
    `Thomas of Erfurt explains that an adjective signifies by the mode of adhering to another, so it requires a word that signifies by the mode of standing by itself, and when the two are joined the modes fit.`,
    `So congruity depends on how the words signify in the sentence, not merely on what part of speech they usually are.`,
    `A construction is <strong>complete</strong> when it produces a complete sense in the mind of the hearer, so that the hearer has been told something and waits for nothing more.`,
    `A construction can be congruous but incomplete (“the old bridge”), or congruous and complete, as a sentence is.`,
    `Thomas of Erfurt says that completeness requires a subject and a verb joined together, because a noun alone or a verb alone does not yet say that anything is or is not so.`,
    `A construction can have a subject and a verb and still be incomplete, because a word such as “if” leaves the sense unfinished; so a dependent clause can be well formed and still not be complete by itself.`,
    `Of any group of words we may make one of three judgments: incongruous (the parts do not fit with one another, so the construction fails); congruous but incomplete (the parts fit, but the sense is not yet complete); and congruous and complete.`,
    `Incongruity is a failure of fit and incompleteness is a failure to finish, so they are two different ways in which a group of words can fall short of a sentence.`,
    `An incongruous construction is a solecism, an error in the arrangement of words, whereas an incomplete construction is not an error at all if it is used as a part of a larger sentence.`,
    `Every sentence raises two questions, whether it is well formed and whether what it says is true; grammar answers the first, and logic the second.`,
    `A congruous and complete sentence can be false, and a word that signifies by the mode of a stable thing can be a subject whether or not anything answers to it (“The chimaera runs”).`,
    `So a sentence can be congruous and true, congruous and false, or incongruous, and an incongruous sentence is not yet fit to be true or false.`,
    `Congruity is the condition of truth or falsity, but it does not decide which.`,
    `Every complete sentence has two principal parts: what the sentence is about, and what is said of it.`,
    `The grammarians of the twelfth century called these the <i>suppositum</i> (“what is placed under”) and the <i>appositum</i> (“what is placed beside”); modern grammars call them the <strong>subject</strong> and the <strong>predicate</strong>.`,
    `The subject is usually a noun or pronoun in the nominative case with the words that depend on it, and the predicate is the verb with the words that depend on it: its object, its adverbs, and its phrases.`,
    `In Latin the subject may be contained in the verb itself and shown only by the ending.`,
    `Anything that is made can be explained by four causes, which Aristotle names the material, the formal, the efficient, and the final cause.`,
    `Thomas of Erfurt explains construction by the same four causes.`,
    `The <strong>material cause</strong> of a construction is the words that are arranged, and the <strong>formal cause</strong> is their union into one construction.`,
    `The <strong>efficient cause</strong> is, within the words, their modes of signifying, which fit one word to another, and, outside the words, the mind of the speaker who arranges them.`,
    `The <strong>final cause</strong> is to express the speaker’s thought, and so to produce a complete sense in the mind of the hearer.`,
    `Priscian gave the definition of the sentence, and Thomas gives its causes; this is one point at which the modists added something that the Roman grammarians had not worked out.`,
    `Logic also speaks of subject and predicate, but in a related and different sense: in logic they are the terms of a statement considered as true or false, joined by the copula “is.”`,
    `In grammar the subject of “Every man is mortal” is “every man” and the predicate is “is mortal,” and grammar asks only whether they are correctly arranged and complete.`,
    `So a false sentence is as good a sentence as a true one if its subject and predicate are correctly joined, and only logic asks which is true.`,
    `The words of a sentence are joined by the relations of agreement, government, and dependence; the order of words and the larger units of the phrase, the clause, and the period are further subjects of construction.`
  ],
  panels: [

{ id: 'construction',
  title: 'What is construction?',
  body: `<p>“The guard sleeps” is a sentence, but “guard the sleeps,” made of the same words, is not: it has the words of a sentence but not their arrangement. We have studied the word itself, its sounds, its parts of speech, its accidents, and its formation and origin; we now turn to the arrangement of words in the sentence. The Latin grammarians called the arrangement <i>cōnstrūctiō</i>, from which English has <strong>construction</strong>; the Greek name, <i>syntaxis</i> (“arrangement”), gives English <strong>syntax</strong>.</p>
<p>The word “construction” is used in two senses, and both are standard. It means the arrangement of words in general, as when we speak of the rules of construction; and it means a particular group of words arranged together, as when we say that “the green field” is a construction of an adjective and a noun. The sentence is the first thing that can be correctly or incorrectly formed as a whole, and, once it is complete, the first thing that can be true or false.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVII.1–2, in paraphrase.` },

{ id: 'priscian',
  title: 'Priscian’s definition of the sentence',
  body: `<p>A group of words can fail to be a sentence in two ways. In “the tired guard” the words fit together, but nothing is said about the guard, so the sense is not complete. In “The guards sleeps” something is said, but the verb does not fit its subject. Only “The guard sleeps” meets both conditions: its words fit together, and its sense is complete. So a sentence requires a fitting arrangement of words and a complete sense.</p>
<p>Priscian, whose last two books on construction were the textbook of syntax for the grammarians of the Middle Ages, defines the sentence by these two conditions: a sentence is “a fitting arrangement of words, showing a complete sense” (<i>oratio est ordinatio dictionum congrua, sententiam perfectam demonstrans</i>; <i>Institutiones grammaticae</i> II.15). The arrangement must be fitting (<i>congrua</i>), and the sense must be complete (<i>perfecta</i>). Priscian also reports that the dialecticians counted only two parts of the sentence, the noun and the verb, because these alone, joined to each other, make a complete sentence (II.15); we saw in Section III that the logicians counted them as the principal parts for this reason.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.15 and XVII (the Latin definition; the English in substance).`,
  qp: { id: 'q-priscian', variants: [
    { prompt: `Which of Priscian’s two conditions does “the tall gardener” fail?`,
      options: [`A fitting arrangement of words`, `A complete sense`, `Both conditions`, `Neither condition`],
      answer: 1,
      explain: `The adjective fits its noun, so the arrangement is fitting; but nothing is said about the gardener, so the sense is not complete.` },
    { prompt: `Which of Priscian’s two conditions does “The gardeners digs” fail?`,
      options: [`A complete sense`, `Both conditions`, `A fitting arrangement`, `Neither, because it says something`],
      answer: 2,
      explain: `Something is said about the gardeners, but the plural subject does not fit the singular verb, so the arrangement is not fitting.` },
    { prompt: `Does “The gardener digs” meet both of Priscian’s conditions?`,
      options: [`Only a fitting arrangement`, `Only a complete sense`, `Neither condition`, `Yes, both`],
      answer: 3,
      explain: `The subject and verb fit, and something is said about the gardener, so the words are a fitting arrangement showing a complete sense: a sentence.` }
  ]} },

{ id: 'congruity',
  title: 'Congruity',
  body: `<p>In “brave soldier” and <i>mīles audāx</i> the adjective is joined to a noun, and the words fit together. In “Brave fights,” if “brave” is taken as an adjective, the words do not fit, because an adjective signifies something that belongs to another, and here there is nothing for it to belong to. But “The brave fight” can fit if “brave” is used substantively, meaning “brave people,” as we saw in Section III. A construction whose words fit one another in this way is called <strong>congruous</strong>, and its fit is called <strong>congruity</strong> (<i>congruitās</i>).</p>
<p>The modists name Priscian’s two conditions congruity and <strong>completeness</strong> (<i>perfectiō</i>), and they explain congruity by the modes of signifying, that is, the ways in which a word signifies, which we saw in Section I. Thomas of Erfurt explains that an adjective signifies by the mode of adhering to another, and so it requires a word that signifies by the mode of standing by itself; when the adjective is joined to a noun, the modes fit, and the construction is congruous (<i>Grammatica speculativa</i>, on congruity). So congruity depends on how the words signify in the sentence, not merely on what part of speech they usually are.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on congruity (Bursill-Hall), in paraphrase.` },

{ id: 'completeness',
  title: 'Completeness',
  body: `<p>When someone says “the old bridge” and stops, the hearer waits for something more; when someone says “The old bridge stands,” the hearer has been told something and waits for nothing. A construction is <strong>complete</strong> when it produces a complete sense in the mind of the hearer in this way. So “the old bridge” is congruous but incomplete, whereas “The old bridge stands” is congruous and complete. Thomas of Erfurt says that completeness requires a subject and a verb joined together, because a noun alone or a verb alone does not yet say that anything is or is not so (<i>Grammatica speculativa</i>, on completeness).</p>
<p>A construction can have a subject and a verb and still be incomplete. “If the guard sleeps” is congruous, but the word “if” leaves the sense unfinished, because the hearer expects something to follow. Latin <i>sī custōs dormit</i> is incomplete for the same reason. So a dependent clause can be well formed and still not be complete by itself, a point we will consider again with the clause, later in this section of the course.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on completeness (Bursill-Hall), in paraphrase.`,
  qp: { id: 'q-completeness', variants: [
    { prompt: `Is “the white horse” complete?`,
      options: [`No; nothing is said of it`, `Yes; it names a thing`, `No; its words do not fit`, `Yes; it has a noun`],
      answer: 0,
      explain: `The words fit, so the construction is congruous, but the hearer waits for something to be said about the horse. Completeness requires at least a subject joined to a verb.` },
    { prompt: `What does “If the white horse runs” lack?`,
      options: [`A verb`, `A main clause`, `A subject`, `Agreement of subject and verb`],
      answer: 1,
      explain: `It has a subject and a verb that agree, but “if” leaves the sense unfinished, so the hearer expects a main clause to complete it.` },
    { prompt: `Which of these is complete?`,
      options: [`“the white horse”`, `“If the white horse runs”`, `“The white horse runs”`, `“when the white horse runs”`],
      answer: 2,
      explain: `Only “The white horse runs” joins a subject and a verb without a word such as “if” or “when” that leaves the sense waiting for more.` }
  ]} },

{ id: 'three-judgments',
  title: 'Three judgments of a construction',
  body: `<p>Of any group of words, then, we may make one of three judgments:</p>
<p><strong>Incongruous</strong>: the parts do not fit with one another, so the construction fails: “The children plays,” <i>līberī lūdit</i>.<br><strong>Congruous but incomplete</strong>: the parts fit, but the sense is not yet complete: “the narrow gate,” “if the children play.”<br><strong>Congruous and complete</strong>: the parts fit, and the sense is complete: “The children play,” <i>līberī lūdunt</i>.</p>
<p>Incongruity is a failure of fit, and incompleteness is a failure to finish; they are two different ways in which a group of words can fall short of a sentence. In Section VI we will see that an incongruous construction is a solecism, an error in the arrangement of words, whereas an incomplete construction is not an error at all if it is used as a part of a larger sentence.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i> (Bursill-Hall), in paraphrase.`,
  qp: { id: 'q-three-judgments', variants: [
    { prompt: `How should “The torches flickers” be judged?`,
      options: [`Incongruous`, `Congruous but incomplete`, `Congruous and complete`, `Congruous but false`],
      answer: 0,
      explain: `The plural subject does not fit the singular verb, so the parts do not fit with one another and the construction fails.` },
    { prompt: `How should “the bright torch” be judged?`,
      options: [`Incongruous`, `Congruous but incomplete`, `Congruous and complete`, `Incongruous but complete`],
      answer: 1,
      explain: `The adjective fits its noun, but nothing is said of the torch, so the group is congruous but incomplete.` },
    { prompt: `How should “The torch flickers” be judged?`,
      options: [`Incongruous`, `Congruous but incomplete`, `Congruous and complete`, `Complete but incongruous`],
      answer: 2,
      explain: `Subject and verb fit, and the sense is finished, so the construction is congruous and complete.` }
  ]} },

{ id: 'truth',
  title: 'Congruity and truth',
  body: `<p>Every sentence raises two questions: is it well formed, and is what it says true? Grammar answers the first, and logic the second. “The chimaera runs” is a congruous and complete sentence, although no chimaera runs anywhere. We saw in Section III that “chimaera” signifies by the mode of a stable thing, and so it can be the subject of “runs” whether or not anything answers to it.</p>
<p>So a sentence can be congruous and true (“The sun rises”), congruous and false (“The sun is square”), or incongruous, as “The sun rise,” and then it is not yet fit to be true or false, though a hearer may guess what it was meant to say. We saw in the Preliminary section, with Walshe’s examples, that grammar judges “man is stone” correct and logic judges it false. Congruity is the condition of truth or falsity, but it does not decide which.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Aristotle, <i>De interpretatione</i> 4; both in paraphrase.`,
  qp: { id: 'q-truth', variants: [
    { prompt: `How do grammar and logic judge “The river is triangular”?`,
      options: [`Correct in grammar; false in logic`, `Incongruous in grammar; false in logic`, `Correct in grammar; true in logic`, `Incongruous in both`],
      answer: 0,
      explain: `The sentence is congruous and complete, which is all that grammar asks; whether it is true is a question for logic, and it is false.` },
    { prompt: `Is “The river freeze” fit to be true or false?`,
      options: [`Yes, and it is true`, `No, because it is incongruous`, `Yes, and it is false`, `Yes, because the sense can be guessed`],
      answer: 1,
      explain: `Congruity is the condition of truth or falsity. “The river freeze” is incongruous, so it is not yet fit to be true or false, though a hearer may guess what it was meant to say.` },
    { prompt: `Which question about “The river freezes” belongs to logic?`,
      options: [`Is it congruous?`, `Is it complete?`, `Does the verb agree with its subject?`, `Is it true?`],
      answer: 3,
      explain: `Grammar asks whether the sentence is congruous and complete; logic asks whether what it says is true.` }
  ]} },

{ id: 'suppositum',
  title: 'What the sentence is about, and what is said of it',
  body: `<p>In “The shepherd guards the flock at night,” “the shepherd” is what the sentence is about, and “guards the flock at night” is what is said of it. Every complete sentence has these two principal parts. The grammarians of the twelfth century, among them Peter Helias, called the first the <i>suppositum</i> (“what is placed under”) and the second the <i>appositum</i> (“what is placed beside”). Modern grammars call them the <strong>subject</strong> and the <strong>predicate</strong>.</p>
<p>The subject is usually a noun or pronoun in the nominative case, with the words that depend on it: “the old shepherd,” <i>pāstor senex</i>. The predicate is the verb with the words that depend on it: its object, its adverbs, and its phrases: “guards the flock carefully at night.” In Latin the subject may be contained in the verb itself, as <i>servat</i> means “he guards”; then the predicate is expressed and the subject is shown only by the ending.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>, in paraphrase; Thomas of Erfurt, <i>Grammatica speculativa</i>.` },

{ id: 'four-causes',
  title: 'The four causes of a construction',
  body: `<p>Anything that is made can be explained by answering four questions: what it is made of, what makes it the thing it is, what brings it about, and what it is for. A table is made of wood, has the shape of a table, is made by a carpenter, and serves for meals. Aristotle calls the answers to these questions the four causes, the material, the formal, the efficient, and the final cause.</p>
<p>Thomas of Erfurt explains construction by the same four causes (<i>Grammatica speculativa</i>, on construction):</p>
<p>The <strong>material cause</strong> is the words that are arranged.<br>The <strong>formal cause</strong> is their union into one construction.<br>The <strong>efficient cause</strong> is, within the words, their modes of signifying, which fit one word to another, and, outside the words, the mind of the speaker who arranges them.<br>The <strong>final cause</strong> is to express the speaker’s thought, and so to produce a complete sense in the mind of the hearer.</p>
<p>In “The rain falls,” the words are the matter, their union into one sentence is the form, the modes of signifying of noun and verb together with the speaker’s intention bring about that union, and the end is that the hearer understands that the rain falls. Priscian gave the definition of the sentence, and Thomas gives its causes; this is one point at which the modists added something that the Roman grammarians had not worked out.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'grammar-logic',
  title: 'Grammar’s subject and predicate, and logic’s',
  body: `<p>Logic also speaks of subject and predicate, but in a related and different sense. In logic the subject and predicate are the terms of a statement considered as true or false, joined by the copula “is”: in “Every man is mortal,” the subject term is “man” and the predicate term is “mortal.” In grammar the subject is “every man” and the predicate is “is mortal,” and grammar asks only whether they are correctly arranged and complete.</p>
<p>So “Rivers flow uphill” is as good a sentence as “Two and two make four,” since each has a subject and a predicate correctly joined; only logic asks which is true. We will return to the relation between grammatical and logical forms in Section VIII. The relations by which the words of a sentence are joined (agreement, government, and dependence), the order of words, and the larger units of the phrase, the clause, and the period are the remaining subjects of this section of the course.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 5; Peter of Spain, <i>Tractatus</i> I; both in paraphrase.`,
  qp: { id: 'q-grammar-logic', variants: [
    { prompt: `In Latin <i>rēgīna sapiēns rēgnum regit</i> (“the wise queen rules the kingdom”), what is the grammatical subject?`,
      options: [`<i>rēgīna sapiēns</i>`, `<i>rēgnum regit</i>`, `<i>rēgīna</i> alone`, `<i>sapiēns rēgnum</i>`],
      answer: 0,
      explain: `Grammar takes the subject as the noun with the words that depend on it, <i>rēgīna sapiēns</i>; the predicate is <i>rēgnum regit</i>.` },
    { prompt: `In “Every raven is black,” what is the grammatical predicate, and what is the logical predicate term?`,
      options: [`“black,” and “is black”`, `“every raven,” and “raven”`, `“is black,” and “black”`, `“is,” and “black”`],
      answer: 2,
      explain: `Grammar takes the predicate as the verb with what depends on it, “is black”; logic takes the terms joined by the copula, so the predicate term is “black.”` },
    { prompt: `Is “The patient potter shapes the clay” congruous and complete?`,
      options: [`Congruous but incomplete`, `Incongruous`, `Complete but incongruous`, `Congruous and complete`],
      answer: 3,
      explain: `The subject “the patient potter” and the predicate “shapes the clay” fit, and the sense is finished, so the sentence is congruous and complete.` }
  ]} }

  ]
};
