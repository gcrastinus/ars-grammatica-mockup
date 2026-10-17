/* I.6 Ambiguity [i.ambiguity]
   Plan (ITEM-LIST.md): 9 panels, 3 question points, each with exactly 3 variants.
   The deck stays on the grammatical side (where the double sense lies: in a word or in the construction) and only names the
   boundary with logic, whose fallacies of language belong to Ars Syllogistica.
   Live material drawn on: DECKS.figura and FIG_ITEMS (the "raw meat" example of a word that can belong to either of two
   words; Aristotle's list in Sophistical Refutations 4), rewritten so that the deck does not teach the fallacy. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.ambiguity'] = {
  id: 'i.ambiguity',
  title: 'Ambiguity',
  sub: 'How one word or one construction can have two senses, and how the grammarian distinguishes them',
  sources: `Quintilian, <i>Institutio oratoria</i> VII.9; Aristotle, <i>Sophistical Refutations</i> 4; Augustine, <i>De doctrina christiana</i> III.2–4.`,
  panels: [

{ id: 'what-ambiguity',
  title: 'What is ambiguity?',
  body: `<p>We have seen that a word signifies by imposition and that one sound can be given more than one meaning. A word or a group of words that can be understood in more than one sense is called <strong>ambiguous</strong> (Latin <i>ambiguus</i>, “going two ways”). Quintilian, discussing ambiguity in his <i>Institutio oratoria</i>, says that it has countless kinds but only two sources: “There are, however, very few genera, since ambiguity must occur either in a single word or in a group of words” (VII.9.1).</p>
<p>That division is the grammarian’s first question about any ambiguous expression: does the double sense lie in a single word, or in the way the words are arranged with one another? In “He went to the bank,” the double sense lies in the word “bank,” which can mean the side of a river or a place where money is kept. In “The man saw the boy with the telescope,” no single word is ambiguous; the double sense lies in the arrangement, because “with the telescope” can belong either to “saw” or to “the boy.”</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.1.` },

{ id: 'word',
  title: 'Ambiguity in a single word',
  body: `<p>The first kind of ambiguity lies in a single word. Quintilian describes it as the case “when the same noun applies to a number of things or persons (the Greeks call this homonymy)” (VII.9.2). His example is the Latin word <i>gallus</i>, which can mean a rooster, a Gaul, a man’s name, or a priest of the goddess Cybele. Aristotle calls the same kind of ambiguity <strong>equivocation</strong>, when one word is used in more than one sense (<i>Sophistical Refutations</i> 4, in paraphrase).</p>
<p>English has many such words. “Bat” can mean a flying animal or a stick for hitting a ball; “bark” can mean the sound of a dog or the outer covering of a tree; “light” can mean not heavy or not dark. Latin <i>acies</i> can mean the sharp edge of a blade or a line of soldiers drawn up for battle, and <i>ius</i> can mean law or a broth. In each case one sound has been imposed with more than one meaning, and only the rest of the sentence, or the occasion, shows which is meant.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.2; Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.`,
  qp: { id: 'q-word-or-construction', variants: [
    { prompt: `“He went to the bank.” Where does the ambiguity lie?`,
      options: [`In the arrangement of the words`, `In the single word “bank”`, `In the word “went”`, `There is no ambiguity`],
      answer: 1,
      explain: `“Bank” can mean the side of a river or a place where money is kept, so the double sense lies in a single word. The arrangement of the words is clear; it is the word that has been imposed with two meanings.` },
    { prompt: `“The man saw the boy with the telescope.” Where does the ambiguity lie?`,
      options: [`In the single word “telescope”`, `In the single word “saw”`, `In the arrangement of the words`, `There is no ambiguity`],
      answer: 2,
      explain: `No single word here has two meanings. The double sense lies in the arrangement, because “with the telescope” can belong either to “saw” (the man used the telescope) or to “the boy” (the boy had the telescope).` },
    { prompt: `Latin <i>acies</i> can mean “sharp edge” or “battle line.” What kind of ambiguity is this?`,
      options: [`Ambiguity in a single word, which the Greeks call homonymy`, `Ambiguity in the arrangement of words`, `Ambiguity of punctuation`, `It is not ambiguity, because Latin words have only one meaning`],
      answer: 0,
      explain: `One sound has been imposed with two meanings, so the ambiguity lies in a single word. Quintilian calls this the case when “the same noun applies to a number of things or persons (the Greeks call this homonymy)” (VII.9.2).` }
  ]}},

{ id: 'construction',
  title: 'Ambiguity in the construction',
  body: `<p>The second kind of ambiguity lies in a group of words, that is, in the construction (the arrangement of words into phrases and sentences). Quintilian says that “groups of words give rise to more serious ambiguity” (VII.9.6). Aristotle calls this kind <strong>amphiboly</strong> (Greek <i>amphibolia</i>, “thrown both ways”).</p>
<p>Quintilian’s best-known example comes from a will in which a man ordered his heirs to set up <i>statuam auream hastam tenentem</i>, “a golden statue holding a spear” or “a statue holding a golden spear.” The Latin word <i>auream</i> (“golden”) can belong either to <i>statuam</i> (“statue”) or to <i>hastam</i> (“spear”), and so the question arises “whether it is the statue holding the spear which is to be of gold, or whether the spear should be of gold and the statue of some other material” (VII.9.8). English shows the same thing in “old men and women,” where “old” can belong to “men” alone or to both “men” and “women,” and in “the house on the hill with the red door,” where “with the red door” can belong to the house or to the hill.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.6–8.` },

{ id: 'pause',
  title: 'How a pause or a mark of punctuation can decide the sense',
  body: `<p>Quintilian observes that some ambiguities of construction are removed when the words are separated by a pause. In the case of the statue, we may pause after <i>statuam</i> and then say <i>auream hastam</i>, so that the spear is golden; or we may pause after <i>statuam auream</i>, so that the statue is golden (VII.9.11). In writing, a mark of punctuation can do the work of the pause.</p>
<p>St. Augustine gives an example from Scripture. The first verse of St. John’s Gospel reads, in the King James Version, “In the beginning was the Word, and the Word was with God, and the Word was God”; the Latin is <i>In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum</i>. Augustine reports that some heretics placed the pause after <i>et Deus erat</i> (“and God was”), so as to deny that the Word is God, and he rejects that reading (<i>De doctrina christiana</i> III.2.3, in paraphrase). In English, the comma in “The teacher, said the student, is late” makes the teacher late, while “The teacher said the student is late” makes the student late.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.11; Augustine, <i>De doctrina christiana</i> III.2.3, in paraphrase; John 1:1.`,
  qp: { id: 'q-pause', variants: [
    { prompt: `“The teacher, said the student, is late.” Who is late?`,
      options: [`The student`, `Both of them`, `It cannot be determined`, `The teacher`],
      answer: 3,
      explain: `The commas set off “said the student,” so the main sentence is “The teacher is late.” Without the commas, “The teacher said the student is late,” the student is late. The punctuation decides the construction.` },
    { prompt: `In Quintilian’s will, <i>statuam auream hastam tenentem</i>, how can a pause make the spear golden?`,
      options: [`By pausing after <i>statuam</i>, so that <i>auream</i> goes with <i>hastam</i>`, `By pausing after <i>tenentem</i>`, `By pausing after <i>hastam</i>, so that <i>auream</i> goes with <i>statuam</i>`, `A pause cannot change the sense`],
      answer: 0,
      explain: `If we pause after <i>statuam</i> (“statue”) and then say <i>auream hastam</i> (“golden spear”), the word “golden” belongs to the spear. If we pause after <i>statuam auream</i>, it belongs to the statue (Quintilian VII.9.11).` },
    { prompt: `Why can a mark of punctuation remove an ambiguity of construction?`,
      options: [`Because it changes the meaning of one of the words`, `Because it shows which words belong together, as a pause does in speech`, `Because it makes the sentence true`, `Because it adds a new word to the sentence`],
      answer: 1,
      explain: `An ambiguity of construction lies in the way the words are grouped. A pause in speech, or a mark of punctuation in writing, shows which words belong together, and so it can decide between the two senses without changing any word.` }
  ]}},

{ id: 'divided-joined',
  title: 'Words divided or joined',
  body: `<p>Quintilian also notes ambiguities that arise when the same letters can be read as one word or as two. A man ordered in his will that he be buried <i>in culto loco</i> (“in a cultivated place”), and the question arose whether he had written <i>inculto loco</i> (“in an uncultivated place”) (VII.9.5). Aristotle names these kinds of ambiguity <strong>composition</strong> and <strong>division</strong>, according to whether words are wrongly joined or wrongly separated (<i>Sophistical Refutations</i> 4, in paraphrase).</p>
<p>English has the same possibility in writing. “Nowhere” can be read as “now here,” so that a sign reading “GODISNOWHERE,” written without spaces, can say either “God is now here” or “God is nowhere.” Likewise “a part” and “apart,” or “some time” and “sometime,” differ in meaning although they use the same letters in the same order. In speech, the pauses and stress usually prevent such confusions; in writing, the spaces between words do.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.4–5; Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.` },

{ id: 'pronunciation',
  title: 'Ambiguity from pronunciation',
  body: `<p>Some written words are ambiguous only because the writing does not show how they are pronounced. Quintilian notes that in a written document it may be doubtful whether a syllable is long or short (VII.9.13); in Latin, <i>malum</i> with a short <i>a</i> means “evil,” but <i>mālum</i> with a long <i>ā</i> means “apple,” and ordinary Latin writing usually did not mark the difference. Aristotle names this kind of ambiguity <strong>accent</strong>, because it depends on how a word is pronounced (<i>Sophistical Refutations</i> 4, in paraphrase).</p>
<p>English spelling leaves many words of this kind. “Desert,” stressed on the first syllable, is a dry land; stressed on the second, it means “to abandon.” “Lead” can be the metal or the verb “to lead,” and “wind” can be moving air or the verb “to wind” a clock. In speech these words are not ambiguous at all; only in writing does the reader have to decide from the rest of the sentence which word is meant.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.13; Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.` },

{ id: 'remedies',
  title: 'How does the grammarian remove ambiguity?',
  body: `<p>The grammarian’s task, once the ambiguity has been located, is to show how it can be removed. Quintilian gives the remedies for the ambiguities of construction: “the first may be remedied by a change of case, the second by separating the words or altering their position, the third by some addition” (VII.9.9). A change of case means a change in the ending of a Latin word, which shows what it belongs to; in English we usually change the order of the words or add a word instead.</p>
<p>So “The man saw the boy with the telescope” can be made clear in either sense: “With the telescope, the man saw the boy” (the man used it) or “The man saw the boy who had the telescope” (the boy had it). An ambiguous word is removed in a similar way, by adding a word that fixes its meaning: “He went to the bank of the river” or “He went to the bank to deposit a check.”</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.9.`,
  qp: { id: 'q-remedy', variants: [
    { prompt: `How can “The man saw the boy with the telescope” be made to say that the boy had the telescope?`,
      options: [`“With the telescope, the man saw the boy.”`, `“The man saw the boy with a telescope.”`, `“The man saw the boy who had the telescope.”`, `“The telescope saw the boy.”`],
      answer: 2,
      explain: `Adding “who had” makes “the telescope” belong to the boy, so the construction is no longer ambiguous. Moving “with the telescope” to the front would make it belong to “saw,” so that the man used it.` },
    { prompt: `Quintilian gives three remedies for ambiguity of construction. Which of these is one of them?`,
      options: [`Separating the words or altering their position`, `Replacing every word with a Latin one`, `Making the sentence shorter`, `Asking the hearer what he understood`],
      answer: 0,
      explain: `Quintilian says that such ambiguities may be remedied “by a change of case,” “by separating the words or altering their position,” or “by some addition” (VII.9.9).` },
    { prompt: `How is the ambiguity of “He went to the bank” best removed?`,
      options: [`By changing the order of the words`, `By putting a comma after “went”`, `By pronouncing “bank” more slowly`, `By adding words that fix the meaning, such as “of the river”`],
      answer: 3,
      explain: `The ambiguity lies in the single word “bank,” so the order of the words cannot remove it. Adding words that fix the meaning, such as “of the river” or “to deposit a check,” shows which sense is intended.` }
  ]}},

{ id: 'used-well',
  title: 'Ambiguity used deliberately',
  body: `<p>Ambiguity is not always a defect. A writer may use a word in two senses on purpose, so that the hearer understands both at once; this is called a pun or play on words, and the poets use it for wit and for grief alike. In Shakespeare’s <i>Romeo and Juliet</i> (III.1), the dying Mercutio says that tomorrow he will be found “a grave man,” where “grave” means both “serious” and “in the grave.”</p>
<p>The grammarian’s task here is the same as before: to locate the double sense, in a word or in the construction, and to say what each sense is. What differs is the judgment. An ambiguity that the writer did not intend is a defect of clarity, which the grammarian corrects; an ambiguity that the writer intended is a figure, which the grammarian explains. We will study such figures in Section VII.</p>`,
  src: `Shakespeare, <i>Romeo and Juliet</i> III.1, in paraphrase.` },

{ id: 'logic',
  title: 'Where grammar ends and logic begins',
  body: `<p>Aristotle treats ambiguity in his <i>Sophistical Refutations</i>, a book about arguments that seem to prove something but do not. He lists six ways in which such arguments depend on language: equivocation and amphiboly, which we have seen; composition and division; accent; and what he calls the form of expression, when words of the same form are taken to signify things of the same kind (<i>Sophistical Refutations</i> 4, in paraphrase).</p>
<p>Grammar and logic consider these ambiguities in different ways. Grammar locates the double sense, in a word or in the construction, and shows how it can be removed. Logic asks what happens when an argument depends on the double sense, as in “Whatever you buy, you eat; you bought raw meat; therefore you ate raw meat,” where “raw” belongs to the buying and is taken as if it belonged to the eating. The study of such arguments belongs to logic, and it is treated in Ars Syllogistica, the companion course on logic.</p>`,
  src: `Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.` }

  ]
};
