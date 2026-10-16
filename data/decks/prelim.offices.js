/* P.2 The Offices of the Grammarian [prelim.offices]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.offices'] = {
  id: 'prelim.offices',
  title: 'The Offices of the Grammarian',
  sub: 'Reading, explaining, correcting, and judging',
  panels: [

{ id: 'two-heads',
  title: 'The two parts of the profession',
  body: `<p>Quintilian describes the work of the grammarian (Latin <i>grammaticus</i>, whom Butler calls “the teacher of literature”) in this way: “This profession may be most briefly considered under two heads, the art of speaking correctly and the interpretation of the poets; but there is more beneath the surface than meets the eye” (<i>Institutio oratoria</i> I.4.2, trans. Butler).</p>
<p>He then explains what lies beneath the surface: “For the art of writing is combined with that of speaking, and correct reading precedes interpretation, while in each of these cases criticism has its work to perform” (I.4.3). So the two parts of the profession contain several distinct tasks, which the later grammarians call the offices of the grammarian.</p>`,
  examples: [
    `Speaking correctly: “He and I were there,” not “Him and me were there.”`,
    `Writing correctly: “its” for the possessive (“The dog wagged its tail”) and “it’s” for “it is.”`,
    `Interpreting the poets: explaining what a line means and how its words are arranged, as a teacher does with a verse of Virgil or of the King James Version.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.4.2–3 (trans. H. E. Butler, Loeb).` },

{ id: 'four-offices',
  title: 'The four offices',
  body: `<p>The Latin grammarians name four offices of the grammarian. Diomedes, citing Varro, lists them as <i>lectio</i>, <i>enarratio</i>, <i>emendatio</i>, and <i>iudicium</i>:</p>
<p><strong>reading</strong> (<i>lectio</i>): reading a text aloud correctly;<br><strong>explaining</strong> (<i>enarratio</i>): explaining the words, the construction, and the matter of a text;<br><strong>correcting</strong> (<i>emendatio</i>): correcting what is corrupt in a text or faulty in speech;<br><strong>judging</strong> (<i>iudicium</i>): judging whether a text is genuine and how well it is written.</p>
<p>The list begins with reading and ends with judging, because a text must be read before it can be explained, and it must be understood before it can be judged.</p>`,
  examples: [
    `Reading: pronouncing Latin <i>mālum</i> (“apple”) with a long first vowel and <i>malum</i> (“evil”) with a short one.`,
    `Explaining: saying that “nigh” in “nor the years draw nigh” (Ecclesiastes 12:1, King James Version) means “near.”`,
    `Correcting: restoring “from” where a copyist has written “form.”`
  ],
  src: `Diomedes, <i>Ars grammatica</i>, citing Varro, in paraphrase (no published English translation).` },

{ id: 'reading',
  title: 'Reading (lectio)',
  body: `<p>Reading is the first office. Quintilian lists what it requires: the reader must know “when the boy should take breath, at what point he should introduce a pause into a line, where the sense ends or begins, when the voice should be raised or lowered.” He gives one rule for all of it: “to do all these things, he must understand what he reads” (<i>Institutio oratoria</i> I.8.1–2, trans. Butler).</p>
<p>So correct reading is already a grammatical act. The reader must know the quantity and the accent of each word and see where each clause begins and ends.</p>`,
  examples: [
    `Pauses: “Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man” (Ecclesiastes 12:13, King James Version) is read with a pause at each colon.`,
    `Quantity in Latin: <i>malum</i> with a short <i>a</i> means “evil,” and <i>mālum</i> with a long <i>ā</i> means “apple.”`,
    `Stress in English: “record” is stressed on the first syllable as a noun (“a record”) and on the second as a verb (“to record”).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.8.1–2 (trans. Butler); Ecclesiastes 12:13 (King James Version).` },

{ id: 'explaining',
  title: 'Explaining (enarratio)',
  body: `<p>Explaining is the second office. Quintilian describes it: the teacher “will ask his class after analysing a verse to give him the parts of speech and the peculiar features of the feet which it contains” (<i>Institutio oratoria</i> I.8.13, trans. Butler). The teacher also explains words that are not in common use (I.8.15) and the stories to which the poets refer (I.8.18).</p>
<p>Explaining therefore covers the parts of speech, the meter, the meaning of rare words, and the matter of the text.</p>`,
  examples: [
    `The parts of speech: in “Remember now thy Creator” (Ecclesiastes 12:1), “Remember” is a verb, “now” an adverb, “thy” a pronoun, and “Creator” a noun.`,
    `A word not in common use: “nigh” in “nor the years draw nigh” (Ecclesiastes 12:1) means “near.”`,
    `The matter of a text: in Gibbon’s sentence on “Nerva, Trajan, Hadrian, and the two Antonines” (<i>Decline and Fall</i>, ch. I), the teacher explains who these emperors were.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13–18 (trans. Butler); Ecclesiastes 12:1 (King James Version); Gibbon, <i>The Decline and Fall of the Roman Empire</i>, ch. I.` },

{ id: 'correcting',
  title: 'Correcting (emendatio)',
  body: `<p>Correcting is the third office. It has two objects. The first is the text itself: copyists make errors, and the grammarian restores what the author wrote. The second is speech: Quintilian says that the teacher “will point out what words are barbarous, what improperly used, and what are contrary to the laws of language” (<i>Institutio oratoria</i> I.8.13, trans. Butler).</p>
<p>A fault in a single word is called a <strong>barbarism</strong>, and a fault in the arrangement of words is called a <strong>solecism</strong>. Both are treated fully in Section VI, Correctness and Faults.</p>`,
  examples: [
    `An error of a copyist: “form” written where the author wrote “from.”`,
    `A barbarism, a fault in a single word: “goed” for “went.”`,
    `A solecism, a fault in the arrangement of words: “The boys runs” for “The boys run,” or Latin <i>puella cantant</i> for <i>puella cantat</i> (“the girl sings”).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13 (trans. Butler).`,
  qp: { id: 'q-office', variants: [
    { prompt: `A teacher explains that “nigh” in “nor the years draw nigh” means “near.” Which office is this?`,
      options: [`Reading`, `Explaining`, `Correcting`, `Judging`],
      answer: 1,
      explain: `Explaining a word that is not in common use belongs to explaining (<i>enarratio</i>), as Quintilian says (I.8.15). Reading is reading aloud correctly, and correcting restores what is faulty.` },
    { prompt: `A student decides where to pause in “Let us hear the conclusion of the whole matter: Fear God, and keep his commandments.” Which office is this?`,
      options: [`Explaining`, `Correcting`, `Reading`, `Judging`],
      answer: 2,
      explain: `Deciding where to pause belongs to reading (<i>lectio</i>). Quintilian says that the reader must know “where the sense ends or begins” (I.8.1, trans. Butler).` },
    { prompt: `A teacher restores “from” where a copyist has written “form.” Which office is this?`,
      options: [`Correcting`, `Reading`, `Explaining`, `Judging`],
      answer: 0,
      explain: `Restoring what the author wrote belongs to correcting (<i>emendatio</i>), which mends what is corrupt in a text or faulty in speech.` }
  ]}},

{ id: 'judging',
  title: 'Judging (iudicium)',
  body: `<p>Judging is the fourth office, and the highest. Quintilian describes how far the earlier grammarians carried it: “The old school of teachers indeed carried their criticism so far that they were not content with obelising lines or rejecting books whose titles they regarded as spurious, as though they were expelling a supposititious child from the family circle, but also drew up a canon of authors, from which some were omitted altogether” (<i>Institutio oratoria</i> I.4.3, trans. Butler).</p>
<p>So judging has three tasks: to decide whether a line is genuine, whether a work belongs to the author whose name it bears, and which authors are to be taken as models.</p>`,
  examples: [
    `Whether a line is genuine: the grammarian marks a line that a copyist has added (to “obelise” a line is to mark it with a dash, the obelus, as spurious).`,
    `Whether a work is genuine: the grammarian rejects a book that bears an author’s name but was not written by him.`,
    `Which authors are models: the grammarian draws up a list of the authors to be read, as the Greek grammarians did.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.4.3 (trans. Butler).` },

{ id: 'thrax',
  title: 'The six parts of grammar in Dionysius Thrax',
  body: `<p>The Greek grammarian Dionysius Thrax divides grammar into six parts, which cover the same tasks: reading aloud with attention to the accents and quantities; explaining the figures of the poets; explaining rare words and the stories to which the poets refer; finding the origin of words (etymology); working out the regular patterns of forms (analogy); and the criticism of poems, which he calls the finest part of the art.</p>
<p>The six parts and the four offices describe the same work. Reading is first in both, and criticism, that is, judging, is last and highest in both.</p>`,
  examples: [
    `Etymology: English “grammar” from Greek <i>gramma</i>, “letter.”`,
    `Analogy: if the plural of “cat” is “cats,” the plural of “zebra” is “zebras.”`,
    `Criticism: judging that a line is well made, or that a book is not genuine.`
  ],
  src: `Dionysius Thrax, <i>Technē</i> 1 (trans. Alan Kemp, 1986), in paraphrase.` },

{ id: 'authors',
  title: 'Why the authors belong to grammar',
  body: `<p>Quintilian says that the grammarian does not read the poets only: “Nor is it sufficient to have read the poets only; every kind of writer must be carefully studied, not merely for the subject matter, but for the vocabulary; for words often acquire authority from their use by a particular author” (<i>Institutio oratoria</i> I.4.4, trans. Butler).</p>
<p>The authors therefore belong to grammar for two reasons. Interpreting them is one of the two parts of the grammarian’s profession, and the authors show how words are used correctly, so they give authority to the forms and constructions that grammar teaches.</p>`,
  examples: [
    `A poet: the verse of Virgil, explained line by line in the Roman schools.`,
    `A historian: Gibbon’s <i>Decline and Fall of the Roman Empire</i>, read for its long and carefully built sentences.`,
    `An orator: Lincoln’s Second Inaugural Address, read for its constructions as well as for its argument.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.4.4 (trans. Butler).`,
  qp: { id: 'q-authors', variants: [
    { prompt: `Why does the grammarian read the poets and the other authors?`,
      options: [`Because grammar judges whether what the authors say is true`, `Because the interpretation of the authors is one of the two parts of the grammarian’s profession`, `Because the authors are easier to understand than the rules of grammar`, `Because grammar is chiefly the history of literature`],
      answer: 1,
      explain: `Quintilian divides the profession into the art of speaking correctly and the interpretation of the poets (I.4.2). Whether what an author says is true belongs to logic, not to grammar.` },
    { prompt: `According to Quintilian, why must every kind of writer be studied, and not the poets only?`,
      options: [`Because only prose writers use correct grammar`, `Because poets are allowed no license in their language`, `Because the rules of grammar are found only in historians`, `Because words often acquire authority from their use by a particular author`],
      answer: 3,
      explain: `Quintilian says that every kind of writer must be studied “not merely for the subject matter, but for the vocabulary; for words often acquire authority from their use by a particular author” (I.4.4, trans. Butler).` },
    { prompt: `Which office decides whether a line is genuine and which authors are to be taken as models?`,
      options: [`Judging`, `Reading`, `Explaining`, `Correcting`],
      answer: 0,
      explain: `Judging (<i>iudicium</i>) decides whether a line or a book is genuine and draws up the list of authors to be read (Quintilian I.4.3). It is the last and highest of the four offices.` }
  ]}}

  ]
};
