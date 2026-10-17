/* V.1 Congruity [v.congruity]
   Plan (ITEM-LIST.md): 9 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
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
  panels: [

{ id: 'construction',
  title: 'What is construction?',
  body: `<p>We have studied the word: its sounds, its parts of speech, its accidents, and its formation and origin. We now turn to the arrangement of words in the sentence. Not every set of words is a sentence: “sailor the waits” has the words of a sentence but not the arrangement, while “The sailor waits” has both. The Latin grammarians called the arrangement <i>cōnstrūctiō</i>, from which English has <strong>construction</strong>; the Greek name, <i>syntaxis</i> (“arrangement”), gives English <strong>syntax</strong>.</p>
<p>The word “construction” is used in two senses, and both are standard. It means the arrangement of words in general, as when we speak of the rules of construction; and it means a particular group of words arranged together, as when we say that “the white horse” is a construction of an adjective and a noun. The sentence is the first thing that can be correctly or incorrectly formed as a whole, and, once it is complete, the first thing that can be true or false.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVII.1–2, in paraphrase.` },

{ id: 'priscian',
  title: 'Priscian’s definition of the sentence',
  body: `<p>Priscian, whose last two books on construction were the textbook of syntax in the medieval schools, defines the sentence: <i>ōrātiō est ōrdinātiō dictiōnum congrua, sententiam perfectam dēmōnstrāns</i>, that is, a sentence is a fitting arrangement of words, showing a complete sense (<i>Institutiones grammaticae</i> II.15). The definition contains two conditions. The arrangement must be fitting (<i>congrua</i>), and the sense must be complete (<i>perfecta</i>).</p>
<p>So “the tall sailor” is fitting but not complete, because nothing is said of the sailor; and “The sailors waits” is complete in intention, but the verb does not fit its subject. Only “The sailor waits” meets both conditions. Priscian also says that the noun and the verb are the parts that cannot be spared: if either is taken away, the sentence is deficient. We saw in Section III that the logicians counted these two as the principal parts for the same reason.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.15 and XVII (the Latin definition; the English in substance).`,
  qpTodo: `Priscian’s two conditions: given a group of words (“the tall sailor,” “The sailors waits,” “The sailor waits”), which condition does it meet (fitting arrangement, complete sense), and which does it fail.` },

{ id: 'congruity',
  title: 'Congruity',
  body: `<p>The modists name Priscian’s two conditions <strong>congruity</strong> (<i>congruitās</i>) and <strong>completeness</strong> (<i>perfectiō</i>). A construction is congruous when the modes of signifying of its words fit one another. Thomas of Erfurt explains that an adjective signifies by the mode of adhering to another, and so it requires a word that signifies by the mode of standing by itself; when the adjective is joined to a noun, the modes fit, and the construction is congruous (<i>Grammatica speculativa</i>, on congruity, in paraphrase).</p>
<p>So “white horse” and <i>equus albus</i> are congruous, because the adjective is joined to a noun. “White runs,” if “white” is taken as an adjective, is incongruous, because there is nothing for the adjective to adhere to. But “The white runs” can be congruous if “white” is used substantively, meaning “the white horse,” as we saw in Section III. So congruity depends on how the words signify in the sentence, not merely on what part of speech they usually are.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on congruity (Bursill-Hall), in paraphrase.` },

{ id: 'completeness',
  title: 'Completeness',
  body: `<p>A construction is <strong>complete</strong> when it produces a complete sense in the mind of the hearer. Thomas of Erfurt says that this requires a subject and a verb joined together, because a noun alone or a verb alone does not yet say that anything is or is not so (<i>Grammatica speculativa</i>, on completeness, in paraphrase). So “the white horse” is congruous but incomplete, while “The white horse runs” is congruous and complete.</p>
<p>A construction can have a subject and a verb and still be incomplete. “If the sailor waits” is congruous, but the word “if” leaves the sense unfinished, because the hearer expects something to follow. Latin <i>sī nauta exspectat</i> is incomplete for the same reason. So a dependent clause can be well formed and still not be complete by itself, a point we will study with the clause.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on completeness (Bursill-Hall), in paraphrase.`,
  qpTodo: `Completeness: is a given construction complete (“the white horse,” “The white horse runs,” “If the sailor waits”), and what does it lack if it is not.` },

{ id: 'three-judgments',
  title: 'Three judgments of a construction',
  body: `<p>Of any group of words, then, we may make one of three judgments.<br><strong>Incongruous</strong>: the parts do not fit with one another, so the construction fails: “The sailors waits,” <i>nautae exspectat</i>.<br><strong>Congruous but incomplete</strong>: the parts fit, but the sense is not yet complete: “the patient sailor,” “if the sailor waits.”<br><strong>Congruous and complete</strong>: the parts fit, and the sense is complete: “The sailor waits,” <i>nauta exspectat</i>.</p>
<p>Incongruity is a failure of fit, and incompleteness is a failure to finish; they are two different ways in which a group of words can fall short of a sentence. In Section VI we will see that an incongruous construction is a solecism, an error in the arrangement of words, while an incomplete construction is not an error at all if it is used as a part of a larger sentence.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i> (Bursill-Hall), in paraphrase.`,
  qpTodo: `Analysis: given a short sentence or group of words, judge it incongruous, congruous but incomplete, or congruous and complete, and say why.` },

{ id: 'truth',
  title: 'Congruity and truth',
  body: `<p>Every sentence raises two questions: is it well formed, and is what it says true? Grammar answers the first, and logic the second. “The chimaera runs” is a congruous and complete sentence, although no chimaera runs anywhere. We saw in Section III that “chimaera” signifies by the mode of a stable thing, and so it can be the subject of “runs” whether or not anything answers to it.</p>
<p>So a sentence can be congruous and true (“The sun rises”), congruous and false (“The sun is square”), or incongruous, as “The sun rise,” and then it is not yet fit to be true or false, though a hearer may guess what it was meant to say. We saw in the Preliminary section, with Walshe’s examples, that grammar judges “man is stone” correct and logic judges it false. Congruity is the condition of truth or falsity, but it does not decide which.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Aristotle, <i>De interpretatione</i> 4; both in paraphrase.`,
  qpTodo: `Congruity and truth: is a given sentence congruous, and if so, is it true or false (“The sun rises,” “The sun is square,” “The sun rise”); which question belongs to grammar and which to logic.` },

{ id: 'suppositum',
  title: 'What the sentence is about, and what is said of it',
  body: `<p>Every complete sentence has two principal parts. In “The sailor waits for the tide,” “the sailor” is what the sentence is about, and “waits for the tide” is what is said of it. The grammarians of the twelfth century, among them Peter Helias, called the first the <i>suppositum</i> (“what is placed under”) and the second the <i>appositum</i> (“what is placed beside”). Modern grammars call them the <strong>subject</strong> and the <strong>predicate</strong>.</p>
<p>The subject is usually a noun or pronoun in the nominative case, with the words that depend on it: “the old sailor,” <i>nauta senex</i>. The predicate is the verb with the words that depend on it: its object, its adverbs, and its phrases: “waits patiently for the tide.” In Latin the subject may be contained in the verb itself, as <i>exspectat</i> means “he waits”; then the predicate is expressed and the subject is shown only by the ending.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>, in paraphrase; Thomas of Erfurt, <i>Grammatica speculativa</i>.` },

{ id: 'four-causes',
  title: 'The four causes of a construction',
  body: `<p>Thomas of Erfurt explains construction by the four causes that Aristotle uses to explain anything that is made (<i>Grammatica speculativa</i>, on construction, in paraphrase).<br>The <strong>material cause</strong> is the words that are arranged.<br>The <strong>formal cause</strong> is their union into one construction.<br>The <strong>efficient cause</strong> is, within the words, their modes of signifying, which fit one word to another, and, outside the words, the mind of the speaker who arranges them.<br>The <strong>final cause</strong> is to express the speaker’s thought, and so to produce a complete sense in the mind of the hearer.</p>
<p>In “The sailor waits,” the words are the matter, their union into one sentence is the form, the modes of signifying of noun and verb together with the speaker’s intention bring about that union, and the end is that the hearer understands that the sailor waits. Priscian gave the definition of the sentence, and Thomas gives its causes; this is one point at which the modists added something that the Roman grammarians had not worked out.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'grammar-logic',
  title: 'Grammar’s subject and predicate, and logic’s',
  body: `<p>Logic also speaks of subject and predicate, but in a related and different sense. In logic the subject and predicate are the terms of a statement considered as true or false, joined by the copula “is”: in “Every man is mortal,” the subject term is “man” and the predicate term is “mortal.” In grammar the subject is “every man” and the predicate is “is mortal,” and grammar asks only whether they are correctly arranged and complete.</p>
<p>So “The moon is made of green cheese” is as good a sentence as “Two and two make four,” since each has a subject and a predicate correctly joined; only logic asks which is true. We will return to the relation between grammatical and logical forms in Section VIII. In the rest of this section we study the relations by which the words of a sentence are joined: agreement, government, and dependence, and then the order of words and the larger units of the phrase, the clause, and the period.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 5; Peter of Spain, <i>Tractatus</i> I; both in paraphrase.`,
  qpTodo: `Analysis: in a given sentence (English or Latin), mark the grammatical subject and predicate, and say whether the sentence is congruous and complete.` }

  ]
};
