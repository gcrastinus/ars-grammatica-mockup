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
  sources: `Quintilian, <i>Institutio oratoria</i> VII.9; Aristotle, <i>Sophistical Refutations</i> 4; Augustine, <i>De doctrina christiana</i> III.2–4; the Bible, King James Version.`,
  recitation: [
    `A word or a group of words that can be understood in more than one sense is <strong>ambiguous</strong> (Latin <i>ambiguus</i>, “going two ways”).`,
    `The grammarian’s first question about an ambiguous expression is a division: does the double sense lie in a single word, or in the way the words are arranged with one another?`,
    `Quintilian makes the same division: ambiguity has countless kinds but only two sources, a single word or a group of words.`,
    `Within these two sources ambiguity has four causes: first, one word imposed with more than one meaning; second, a construction in which a word can belong to more than one other word; third, letters that can be read as one word or as two; and fourth, writing that does not show how a word is pronounced.`,
    `Ambiguity in a single word arises when one sound has been imposed with more than one meaning; only the rest of the sentence, or the occasion, shows which is meant (“bank”).`,
    `Quintilian calls this kind homonymy, and Aristotle calls it <strong>equivocation</strong>.`,
    `Ambiguity in the construction (the arrangement of words into phrases and sentences) arises when every word has one clear meaning but it is doubtful which word another word belongs to (“old men and women”).`,
    `Aristotle calls this kind <strong>amphiboly</strong> (Greek <i>amphibolia</i>, “thrown both ways”), and Quintilian judges that it gives rise to more serious ambiguity.`,
    `Many ambiguities of construction are settled by the way the words are spoken: a pause groups together the words that belong together.`,
    `In writing, a mark of punctuation does the work of the pause.`,
    `Sometimes the same letters can be read as one word or as two (“nowhere” and “now here”); in speech the pauses and stress prevent this, and in writing the spaces between words.`,
    `Aristotle names these kinds of ambiguity <strong>composition</strong> and <strong>division</strong>, according to whether words are wrongly joined or wrongly separated.`,
    `Some written words are ambiguous only because the writing does not show how they are pronounced (the stress of an English word, the length of a Latin vowel); in speech they are not ambiguous.`,
    `Aristotle names this kind of ambiguity <strong>accent</strong>, because it depends on how a word is pronounced.`,
    `Once an ambiguity has been located, the grammarian shows how it can be removed: by changing the order of the words, by adding a word, or, in a language such as Latin, by changing an ending (a change of case).`,
    `Ambiguity is not always a defect: a writer may use a word in two senses on purpose, so that the hearer understands both at once; this is a pun or play on words.`,
    `With an intended ambiguity the grammarian’s task is the same, to locate the double sense and say what each sense is; what differs is the judgment.`,
    `An ambiguity that the writer did not intend is a defect of clarity, which the grammarian corrects; an ambiguity that the writer intended is a figure, which the grammarian explains.`,
    `Grammar locates the double sense and shows how it can be removed; logic asks what happens when an argument depends on the double sense.`,
    `Aristotle lists six ways in which arguments that seem to prove something depend on language: equivocation, amphiboly, composition, division, accent, and the form of expression (words of the same form taken to signify things of the same kind).`,
    `The study of such arguments belongs to logic.`
  ],
  panels: [

{ id: 'what-ambiguity',
  title: 'What is ambiguity?',
  body: `<p>We have seen that a word signifies by imposition and that one sound can be given more than one meaning. A word or a group of words that can be understood in more than one sense is called <strong>ambiguous</strong> (Latin <i>ambiguus</i>, “going two ways”).</p>
<p>The grammarian’s first question about any ambiguous expression is therefore a division: does the double sense lie in a single word, or in the way the words are arranged with one another? In “He went to the bank,” the double sense lies in the word “bank,” which can mean the side of a river or a place where money is kept. In “The man saw the boy with the telescope,” no single word is ambiguous; the double sense lies in the arrangement, because “with the telescope” can belong either to “saw” or to “the boy.”</p>
<p>Quintilian, discussing ambiguity in his <i>Institutio oratoria</i>, makes the same division. He says that ambiguity has countless kinds but only two sources: “There are, however, very few genera, since ambiguity must occur either in a single word or in a group of words” (VII.9.1).</p>
<p>Within these two sources, ambiguity has several causes: first, one word imposed with more than one meaning; second, a construction in which a word can belong to more than one other word; third, letters that can be read as one word or as two; and fourth, writing that does not show how a word is pronounced.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.1.` },

{ id: 'word',
  title: 'Ambiguity in a single word',
  body: `<p>The first kind of ambiguity lies in a single word. English has many such words. “Bat” can mean a flying animal or a stick for hitting a ball; “bark” can mean the sound of a dog or the outer covering of a tree; “light” can mean not heavy or not dark. Latin <i>acies</i> can mean the sharp edge of a blade or a line of soldiers drawn up for battle, and <i>ius</i> can mean law or a broth. In each case one sound has been imposed with more than one meaning, and only the rest of the sentence, or the occasion, shows which is meant.</p>
<p>The ancients knew this kind of ambiguity well. Quintilian describes it as the case “when the same noun applies to a number of things or persons (the Greeks call this homonymy)” (VII.9.2). His example is the Latin word <i>gallus</i>, which can mean a rooster, a Gaul, a man’s name, or a priest of the goddess Cybele. Aristotle calls the same kind of ambiguity <strong>equivocation</strong>, when one word is used in more than one sense (<i>Sophistical Refutations</i> 4). But a double sense need not lie in any one word; it can also arise from the way the words are put together.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.2; Aristotle, <i>Sophistical Refutations</i> 4.`,
  qp: { id: 'q-word-or-construction', variants: [
    { prompt: `“The glasses were broken.” Where does the ambiguity lie?`,
      options: [`In the arrangement of the words`, `In the single word “glasses”`, `In the word “broken”`, `There is no ambiguity`],
      answer: 1,
      explain: `“Glasses” can mean drinking vessels or a pair of spectacles, so the double sense lies in a single word. The arrangement of the words is clear; it is the word that has been imposed with two meanings.` },
    { prompt: `“The police shot the man with the gun.” Where does the ambiguity lie?`,
      options: [`In the single word “gun”`, `In the single word “police”`, `In the arrangement of the words`, `There is no ambiguity`],
      answer: 2,
      explain: `No single word here has two meanings. The double sense lies in the arrangement, because “with the gun” can belong either to “shot” (the police used the gun) or to “the man” (the man had the gun).` },
    { prompt: `Latin <i>mūsculus</i> can mean “little mouse” or “muscle.” What kind of ambiguity is this?`,
      options: [`Ambiguity in a single word, which the Greeks call homonymy`, `Ambiguity in the arrangement of words`, `Ambiguity of punctuation`, `It is not ambiguity, because Latin words have only one meaning`],
      answer: 0,
      explain: `One sound has been imposed with two meanings, so the ambiguity lies in a single word. Quintilian calls this the case when “the same noun applies to a number of things or persons (the Greeks call this homonymy)” (VII.9.2).` }
  ]}},

{ id: 'construction',
  title: 'Ambiguity in the construction',
  body: `<p>The second kind of ambiguity lies in a group of words, that is, in the construction (the arrangement of words into phrases and sentences). In “old men and women,” “old” can belong to “men” alone or to both “men” and “women.” In “the house on the hill with the red door,” “with the red door” can belong to the house or to the hill. Here every word has one clear meaning; the double sense lies only in which word another word belongs to.</p>
<p>Quintilian’s best-known example comes from a will in which a man ordered his heirs to set up <i>statuam auream hastam tenentem</i>, “a golden statue holding a spear” or “a statue holding a golden spear.” The Latin word <i>auream</i> (“golden”) can belong either to <i>statuam</i> (“statue”) or to <i>hastam</i> (“spear”), and so the question arises “whether it is the statue holding the spear which is to be of gold, or whether the spear should be of gold and the statue of some other material” (VII.9.8). Quintilian judges that “groups of words give rise to more serious ambiguity” (VII.9.6), and Aristotle calls this kind <strong>amphiboly</strong> (Greek <i>amphibolia</i>, “thrown both ways”). Often, however, the way the words are spoken, or the way they are punctuated, decides which construction is meant.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.6–8.` },

{ id: 'pause',
  title: 'How a pause or a mark of punctuation can decide the sense',
  body: `<p>Many ambiguities of construction are settled by the way the words are spoken. A pause groups together the words that belong together, and in writing a mark of punctuation does the work of the pause. “The teacher, said the student, is late” makes the teacher late, whereas “The teacher said the student is late” makes the student late. “Woman, without her man, is nothing” and “Woman: without her, man is nothing” use the same words in the same order, but the punctuation makes them say opposite things.</p>
<p>Quintilian observes the same thing in his example of the will. We may pause after <i>statuam</i> and then say <i>auream hastam</i>, so that the spear is golden; or we may pause after <i>statuam auream</i>, so that the statue is golden (VII.9.11).</p>
<p>St. Augustine gives an example from Scripture, where the place of a pause touches a point of faith. The first verse of St. John’s Gospel reads, “In the beginning was the Word, and the Word was with God, and the Word was God” (John 1:1); the Latin is <i>In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum</i>. Augustine reports that some heretics placed the pause after <i>et Deus erat</i> (“and God was”), so as to deny that the Word is God, and he rejects that reading (<i>De doctrina christiana</i> III.2.3).</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.11; Augustine, <i>De doctrina christiana</i> III.2.3; John 1:1.`,
  qp: { id: 'q-pause', variants: [
    { prompt: `“The coach, said the umpire, is angry.” Who is angry?`,
      options: [`The umpire`, `Both of them`, `It cannot be determined`, `The coach`],
      answer: 3,
      explain: `The commas set off “said the umpire,” so the main sentence is “The coach is angry.” Without the commas, “The coach said the umpire is angry,” the umpire is angry. The punctuation decides the construction.` },
    { prompt: `Luke 23:43 reads, word for word, “Truly I say to you today with me you will be in paradise” (<i>Amen dico tibi hodie mecum eris in paradiso</i>). How can a pause make <i>hodie</i> (“today”) go with <i>dico</i> (“I say”)?`,
      options: [`By pausing after <i>hodie</i>, so that it goes with <i>dico tibi</i>`, `By pausing after <i>mecum</i>`, `By pausing after <i>tibi</i>, so that <i>hodie</i> goes with <i>eris</i>`, `A pause cannot change the sense`],
      answer: 0,
      explain: `If we pause after <i>hodie</i>, the word belongs to <i>dico tibi</i>: “Truly I say to you today: you will be with me in paradise.” If we pause after <i>tibi</i>, it belongs to <i>eris</i>: “Truly I say to you, today you will be with me in paradise.”` },
    { prompt: `Why can a mark of punctuation remove an ambiguity of construction?`,
      options: [`Because it changes the meaning of one of the words`, `Because it shows which words belong together, as a pause does in speech`, `Because it makes the sentence true`, `Because it adds a new word to the sentence`],
      answer: 1,
      explain: `An ambiguity of construction lies in the way the words are grouped. A pause in speech, or a mark of punctuation in writing, shows which words belong together, and so it can decide between the two senses without changing any word.` }
  ]}},

{ id: 'divided-joined',
  title: 'Words divided or joined',
  body: `<p>Sometimes the same letters can be read as one word or as two. “Nowhere” can be read as “now here,” so that a sign reading “GODISNOWHERE,” written without spaces, can say either “God is now here” or “God is nowhere.” Likewise “a part” and “apart,” or “some time” and “sometime,” differ in meaning although they use the same letters in the same order. In speech, the pauses and stress usually prevent such confusions; in writing, the spaces between words do.</p>
<p>Quintilian notes the same kind of ambiguity in Latin. A man ordered in his will that he be buried <i>in culto loco</i> (“in a cultivated place”), and the question arose whether he had written <i>inculto loco</i> (“in an uncultivated place”) (VII.9.5). Aristotle names these kinds of ambiguity <strong>composition</strong> and <strong>division</strong>, according to whether words are wrongly joined or wrongly separated (<i>Sophistical Refutations</i> 4).</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.4–5; Aristotle, <i>Sophistical Refutations</i> 4.` },

{ id: 'pronunciation',
  title: 'Ambiguity from pronunciation',
  body: `<p>Some written words are ambiguous only because the writing does not show how they are pronounced. “Desert,” stressed on the first syllable, is a dry land; stressed on the second, it means “to abandon.” “Lead” can be the metal or the verb “to lead,” and “wind” can be moving air or the verb “to wind” a clock. In speech these words are not ambiguous at all; only in writing does the reader have to decide from the rest of the sentence which word is meant.</p>
<p>Latin has the same difficulty with the length of vowels. Quintilian notes that in a written document it may be doubtful whether a syllable is long or short (VII.9.13). Latin <i>populus</i> with a short <i>o</i> means “people,” but <i>pōpulus</i> with a long <i>ō</i> means “poplar,” and ordinary Latin writing usually did not mark the difference. Aristotle names this kind of ambiguity <strong>accent</strong>, because it depends on how a word is pronounced (<i>Sophistical Refutations</i> 4).</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.13; Aristotle, <i>Sophistical Refutations</i> 4.` },

{ id: 'remedies',
  title: 'How does the grammarian remove ambiguity?',
  body: `<p>Once an ambiguity has been located, the grammarian shows how it can be removed. “The man saw the boy with the telescope” can be made clear in either sense: “With the telescope, the man saw the boy” (the man used it) or “The man saw the boy who had the telescope” (the boy had it). An ambiguous word is removed in a similar way, by adding a word that fixes its meaning: “He went to the bank of the river” or “He went to the bank to deposit a check.” In each case the remedy is to change the order of the words, to add a word, or, in a language such as Latin, to change an ending.</p>
<p>Quintilian gives these same remedies for the ambiguities of construction: “the first may be remedied by a change of case, the second by separating the words or altering their position, the third by some addition” (VII.9.9). A change of case means a change in the ending of a Latin word, which shows what it belongs to; in English we usually change the order of the words or add a word instead.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VII.9.9.`,
  qp: { id: 'q-remedy', variants: [
    { prompt: `How can “She struck the intruder with the poker” be made to say that the intruder had the poker?`,
      options: [`“With the poker, she struck the intruder.”`, `“She struck the intruder with a poker.”`, `“She struck the intruder who had the poker.”`, `“With the poker in her hand, she struck the intruder.”`],
      answer: 2,
      explain: `Adding “who had” makes “the poker” belong to the intruder, so the construction is no longer ambiguous. Moving “with the poker” to the front would make it belong to “struck,” so that she used it.` },
    { prompt: `Quintilian gives three remedies for ambiguity of construction. Which of these is one of them?`,
      options: [`Separating the words or altering their position`, `Replacing every word with a Latin one`, `Making the sentence shorter`, `Asking the hearer what he understood`],
      answer: 0,
      explain: `Quintilian says that such ambiguities may be remedied “by a change of case,” “by separating the words or altering their position,” or “by some addition” (VII.9.9).` },
    { prompt: `How is the ambiguity of “They admired the seal” best removed?`,
      options: [`By changing the order of the words`, `By putting a comma after “admired”`, `By pronouncing “seal” more slowly`, `By adding words that fix the meaning, such as “on the beach”`],
      answer: 3,
      explain: `The ambiguity lies in the single word “seal,” which can mean a sea animal or a stamp pressed into wax, so the order of the words cannot remove it. Adding words that fix the meaning, such as “on the beach” or “on the king’s letter,” shows which sense is intended.` }
  ]}},

{ id: 'used-well',
  title: 'Ambiguity used deliberately',
  body: `<p>Ambiguity is not always a defect. A writer may use a word in two senses on purpose, so that the hearer understands both at once; this is called a pun or play on words, and the poets use it for wit and for grief alike. In Shakespeare’s <i>Romeo and Juliet</i> (III.1), the dying Mercutio says that tomorrow he will be found “a grave man,” where “grave” means both “serious” and “in the grave.”</p>
<p>The grammarian’s task here is the same as before: to locate the double sense, in a word or in the construction, and to say what each sense is. What differs is the judgment. An ambiguity that the writer did not intend is a defect of clarity, which the grammarian corrects; an ambiguity that the writer intended is a figure, which the grammarian explains. We will study such figures in Section VII.</p>`,
  src: `Shakespeare, <i>Romeo and Juliet</i> III.1, in paraphrase.` },

{ id: 'logic',
  title: 'Where grammar ends and logic begins',
  body: `<p>Grammar and logic consider these ambiguities in different ways. Grammar locates the double sense, in a word or in the construction, and shows how it can be removed. Logic asks what happens when an argument depends on the double sense, as in “Whatever you buy, you eat; you bought raw meat; therefore you ate raw meat,” where “raw” belongs to the buying and is taken as if it belonged to the eating.</p>
<p>Aristotle treats ambiguity in his <i>Sophistical Refutations</i>, a book about arguments that seem to prove something but do not. He lists six ways in which such arguments depend on language: equivocation and amphiboly, which we have seen; composition and division; accent; and what he calls the form of expression, when words of the same form are taken to signify things of the same kind (<i>Sophistical Refutations</i> 4). The study of such arguments belongs to logic, and it is treated in Ars Syllogistica, the companion course on logic.</p>`,
  src: `Aristotle, <i>Sophistical Refutations</i> 4.` }

  ]
};
