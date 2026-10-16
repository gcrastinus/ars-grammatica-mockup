/* P.2 The Tasks of the Grammarian [prelim.offices] (the id is kept; ids never change)
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.offices'] = {
  id: 'prelim.offices',
  title: 'The Tasks of the Grammarian',
  sub: 'Reading, explaining, correcting, and judging',
  sources: `Quintilian, <i>Institutio oratoria</i> I.4 and I.8; Diomedes, <i>Ars grammatica</i>, citing Varro; Dionysius Thrax, <i>Technē</i> 1.`,
  panels: [

{ id: 'two-heads',
  title: 'The Two Parts of the Grammarian’s Profession',
  body: `<p>Quintilian describes the work of the grammarian (Latin <i>grammaticus</i>, here rendered “the teacher of literature”) in this way: “This profession may be most briefly considered under two heads, the art of speaking correctly and the interpretation of the poets; but there is more beneath the surface than meets the eye” (<i>Institutio oratoria</i> I.4.2).</p>
<p>He then explains what lies beneath the surface: “For the art of writing is combined with that of speaking, and correct reading precedes interpretation, while in each of these cases criticism has its own work to perform” (I.4.3). So the two parts of the profession contain several distinct tasks: writing as well as speaking, reading before interpretation, and in each case the work of criticism, that is, of judging.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4.2–3.` },

{ id: 'four-offices',
  title: 'The Four Tasks of the Grammarian',
  body: `<p>We just saw that the tradition recognizes two broad parts of the grammarian’s profession, the evaluation and correction of speaking and the evaluation and correction of writing. Since writing and reading presume and depend on the spoken language and correctness in speaking, the first task of the grammarian is to direct our speaking and writing toward clarity and correctness. But the second part of the profession of the grammarian is the evaluation and correction of writing. This is the higher part because language reaches its most elaborate and powerful forms in writing; and, therefore, written speech requires the most detailed and thorough study and criticism. What this second part of the profession of the grammarian studies is literature, taken in a general sense to include everything thought to be especially well written.</p>
<p>Concerning grammar in this second way as the study of literature, Varro, as Diomedes reports (<i>Ars grammatica</i>, in Keil, <i>Grammatici Latini</i> I, p. 426), names four duties (<i>officia</i>) of grammar:</p>
<p><strong>reading</strong> (<i>lectio</i>): reading a text aloud correctly;<br><strong>explaining</strong> (<i>enarratio</i>): explaining the words, the construction, and the matter of a text;<br><strong>correcting</strong> (<i>emendatio</i>): correcting what is corrupt in a text or incorrect in speech;<br><strong>judging</strong> (<i>iudicium</i>): weighing the merit of a poem or other writing (and, Quintilian adds, whether it is genuine).</p>
<p>The list begins with reading and ends with judging for a reason: a text must be read before it can be explained, and it must be understood before it can be judged.</p>`,
  src: `Diomedes, <i>Ars grammatica</i> (Keil, <i>GL</i> I 426), citing Varro, in paraphrase (no published English translation).` },

{ id: 'reading',
  title: 'Reading (<i>lectio</i>)',
  body: `<p>Reading is the first task of the grammarian. Quintilian sets out what it requires: the reader must know “when the boy should take breath, at what point he should introduce a pause into a line, where the sense ends or begins, when the voice should be raised or lowered.” He gives one rule for all of it: “to do all these things, he must understand what he reads” (<i>Institutio oratoria</i> I.8.1–2).</p>
<p>So correct reading already requires grammatical knowledge. The reader must know the quantity and the accent of each word and see where each clause begins and ends. For example, Latin <i>malum</i> with a short <i>a</i> means “evil,” but <i>mālum</i> with a long <i>ā</i> means “apple,” and a reader who does not know the difference may say the wrong word. Again, in “The Lord is my shepherd; I shall not want” (Psalm 23:1, King James Version), the reader pauses at the semicolon, because two clauses meet there.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.8.1–2; Psalm 23:1 (King James Version).` },

{ id: 'explaining',
  title: 'What does explaining (<i>enarratio</i>) cover?',
  body: `<p>Explaining is the second task of the grammarian. In Quintilian’s description, the teacher “will ask his class after analysing a verse to give him the parts of speech and the peculiar features of the feet which it contains” (<i>Institutio oratoria</i> I.8.13). The teacher also explains words that are not in common use (I.8.15) and the stories to which the poets refer (I.8.18).</p>
<p>Explaining, therefore, covers the parts of speech, the meter, the meaning of rare words, and the matter of the text. In “Remember now thy Creator” (Ecclesiastes 12:1, King James Version), for example, “Remember” is a verb, “now” an adverb, “thy” a pronoun, and “Creator” a noun; and in “nor the years draw nigh,” the rare word “nigh” means “near.”</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13–18; Ecclesiastes 12:1 (King James Version).` },

{ id: 'correcting',
  title: 'Correcting (<i>emendatio</i>)',
  body: `<p>Correcting is the third task of the grammarian. It has two objects. The first is the text itself: copyists make errors, and the grammarian restores what the author wrote. The second is speech: Quintilian says that the teacher “will point out what words are barbarous, what improperly used, and what are contrary to the laws of language” (<i>Institutio oratoria</i> I.8.13).</p>
<p>An error in a single word is called a <strong>barbarism</strong>, and an error in the arrangement of words is called a <strong>solecism</strong>. For example, “brung” for “brought” and “drownded” for “drowned” are barbarisms. “Him and me went home” for “He and I went home,” and Latin <i>rosa rubrum</i> for <i>rosa rubra</i> (“the red rose”), in which the adjective does not agree with the noun, are solecisms. Both are treated fully in Section VI, Correctness and Errors.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13.`,
  qp: { id: 'q-office', variants: [
    { prompt: `A teacher explains that “nigh” in “nor the years draw nigh” means “near.” Which task of the grammarian is this?`,
      options: [`Reading`, `Explaining`, `Correcting`, `Judging`],
      answer: 1,
      explain: `Explaining a word that is not in common use belongs to explaining (<i>enarratio</i>), as Quintilian says (I.8.15). Reading is reading aloud correctly, and correcting restores what is incorrect.` },
    { prompt: `A student decides where to pause in “The Lord is my shepherd; I shall not want.” Which task of the grammarian is this?`,
      options: [`Explaining`, `Correcting`, `Reading`, `Judging`],
      answer: 2,
      explain: `Deciding where to pause belongs to reading (<i>lectio</i>). Quintilian says that the reader must know “where the sense ends or begins” (I.8.1).` },
    { prompt: `A teacher restores “from” where a copyist has written “form.” Which task of the grammarian is this?`,
      options: [`Correcting`, `Reading`, `Explaining`, `Judging`],
      answer: 0,
      explain: `Restoring what the author wrote belongs to correcting (<i>emendatio</i>), which mends what is corrupt in a text or incorrect in speech.` }
  ]}},

{ id: 'judging',
  title: 'Judging (<i>iudicium</i>), the highest task',
  body: `<p>Judging is the fourth task of the grammarian, and the highest. Quintilian reports how far the earlier grammarians carried it: “The old school of teachers indeed carried their criticism so far that they were not content with obelising lines or rejecting books whose titles they regarded as spurious, as though they were expelling a supposititious child from the family circle, but also drew up a canon of authors, from which some were omitted altogether” (<i>Institutio oratoria</i> I.4.3).</p>
<p>So judging includes three things: to decide whether a line is genuine, whether a work belongs to the author whose name it bears, and which authors are to be taken as models.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4.3.` },

{ id: 'thrax',
  title: 'The Six Parts of Grammar in Dionysius Thrax',
  body: `<p>Dionysius Thrax, a Greek grammarian of the second century BC, divides grammar into six parts, which cover the same tasks: reading aloud with attention to the accents and quantities; explaining the figures of speech (tropes) in the poets; explaining rare words and the stories to which the poets refer; finding the origin of words (etymology); working out the regular patterns of forms (analogy); and the criticism of poems, which he calls the finest part of the art.</p>
<p>The six parts and the four tasks describe the same work. Reading comes first in both, and criticism, that is, judging, is last and highest in both.</p>`,
  src: `Dionysius Thrax, <i>Technē</i> 1, in paraphrase.` },

{ id: 'authors',
  title: 'Why do the authors belong to grammar?',
  body: `<p>Quintilian does not limit the grammarian to the poets: “Nor is it sufficient to have read the poets only; every kind of writer must be carefully studied, not merely for the subject matter, but for the vocabulary; for words often acquire authority from their use by a particular author” (<i>Institutio oratoria</i> I.4.4).</p>
<p>So the authors belong to grammar for two reasons. First, interpreting them is one of the two parts of the grammarian’s profession. Second, the authors show how words are used correctly, so they give authority to the forms and constructions that grammar teaches.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4.4.`,
  qp: { id: 'q-authors', variants: [
    { prompt: `Why does the grammarian read the poets and the other authors?`,
      options: [`Because grammar judges whether what the authors say is true`, `Because the interpretation of the authors is one of the two parts of the grammarian’s profession`, `Because the authors are easier to understand than the rules of grammar`, `Because grammar is chiefly the history of literature`],
      answer: 1,
      explain: `Quintilian divides the profession into the art of speaking correctly and the interpretation of the poets (I.4.2). Whether what an author says is true belongs to logic, not to grammar.` },
    { prompt: `According to Quintilian, why must every kind of writer be studied, and not the poets only?`,
      options: [`Because only prose writers use correct grammar`, `Because poets are allowed no license in their language`, `Because the rules of grammar are found only in historians`, `Because words often acquire authority from their use by a particular author`],
      answer: 3,
      explain: `Quintilian says that every kind of writer must be studied “not merely for the subject matter, but for the vocabulary; for words often acquire authority from their use by a particular author” (I.4.4).` },
    { prompt: `Which task of the grammarian decides whether a line is genuine and which authors are to be taken as models?`,
      options: [`Judging`, `Reading`, `Explaining`, `Correcting`],
      answer: 0,
      explain: `Judging (<i>iudicium</i>) decides whether a line or a book is genuine and draws up the list of authors to be read (Quintilian I.4.3). It is the last and highest of the four tasks.` }
  ]}}

  ]
};
