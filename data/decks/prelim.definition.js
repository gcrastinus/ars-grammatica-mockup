/* P.1 The Definition of Grammar [prelim.definition]
   Plan (ITEM-LIST.md): 10 panels, 3 question points, each with exactly 3 variants (A, B, C).
   Each panel: id, title, body (HTML), src (provenance only; not displayed). Deck-level "sources" is shown on the first panel.
   A panel may carry a question point (qp) with three variants; "answer" is the index of the correct option. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.definition'] = {
  id: 'prelim.definition',
  title: 'The Definition of Grammar',
  sub: 'The definition of grammar, its material and its ends, and its place as the first art of the trivium',
  sources: `Quintilian, <i>Institutio oratoria</i> I.4; Isidore, <i>Etymologiae</i> I.5; Donatus, <i>Ars maior</i> I; Priscian, <i>Institutiones grammaticae</i> I–II.`,
  panels: [

{ id: 'arts-of-speech',
  title: 'Why did the ancients put grammar first?',
  body: `<p>Quintilian, who taught rhetoric at Rome in the first century, sends the boy to the <i>grammaticus</i>, the grammarian, before he comes to the teacher of rhetoric. He warns that grammar is far more than its humble look suggests. It is the foundation of the whole building, and anyone who passes over it will find the higher studies falling in on themselves (<i>Institutio oratoria</i> I.4.5).</p>
<p>The later Roman handbooks keep the same order. In Martianus Capella’s <i>Marriage of Philology and Mercury</i> (fifth century), the seven arts are presented as bridesmaids to Lady Philology, who is the personification of the study of literature and the disciplines of learning. Grammar comes first, carrying a knife and a file for cutting away errors in the use of language. Cassiodorus and Isidore, medieval scholars writing after the fall of Rome, likewise begin their accounts of the liberal arts with grammar. This is how the medieval schools came to call grammar the gate of the arts, the first of the trivium.</p>
<p>These are the historical reasons. The classical tradition of philosophy also gives more general ones. Grammar, logic, and rhetoric are the arts of speech: grammar is the art of speaking and writing correctly, logic the art of reasoning correctly, and rhetoric the art of persuading well. Logic considers statements, and a statement is made of words. So the words must be correctly joined before anything can be asserted or denied and before anything can follow from them or be communicated. Rhetoric directs a speech to an audience, but there is nothing to direct until something has been said. Students can find these reasons set out in detail in the <a href="https://studiuminstitute.org/trivium/" target="_blank" rel="noopener">Introduction to the Trivium</a>.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4.5; Martianus Capella, <i>De nuptiis</i> III; Isidore, <i>Etymologiae</i> I.5.1.` },

{ id: 'name',
  title: 'Why is the art called grammar?',
  body: `<p>The name comes from the Greek word for a letter, <i>gramma</i> (plural <i>grammata</i>): Isidore of Seville says that grammar “takes its name from letters, for the Greeks call letters <i>grammata</i>” (<i>Etymologiae</i> I.5.1). The art nevertheless begins with the voice, because a letter is a sound written down; if there were no voice, there would be nothing for the letter to mark.</p>
<p>The art is named from writing because correct speech reaches its fullest and most lasting form in written works, especially in the poets, the historians, and the philosophers. Without writing, the authors of the past would not be there for us to read and to imitate, so the advanced study of connected speech depends on written texts.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.5.1.` },

{ id: 'definition',
  title: 'What is the definition of grammar?',
  body: `<p>Grammar is the art of speaking and writing correctly. Isidore gives the definition in this form: “Grammar is the knowledge of speaking correctly, and is the origin and foundation of liberal letters” (<i>Etymologiae</i> I.5.1). Quintilian divides the profession of the grammarian into two parts: “the art of speaking correctly and the interpretation of the poets” (<i>Institutio oratoria</i> I.4.2).</p>
<p>The word “correctly” is the center of the definition. Grammar does not ask whether a sentence is true, which is what logic asks, or whether it persuades, which is what rhetoric asks. It asks whether the words are correctly formed and correctly arranged with one another.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.5.1; Quintilian, <i>Institutio oratoria</i> I.4.2.`,
  qp: { id: 'q-definition', variants: [
    { prompt: `Which of these is the traditional definition of grammar?`,
      options: [`The natural science of how the throat and the tongue produce sounds`, `The art of speaking and writing correctly`, `The part of logic that judges whether statements are true`, `A list of rules for spelling`],
      answer: 1,
      explain: `Grammar is the art of speaking and writing correctly. How the voice is produced belongs to natural philosophy, and whether a statement is true belongs to logic. Spelling is only one part of the art.` },
    { prompt: `Which of these questions belongs to grammar?`,
      options: [`Is it true that he went to town?`, `Will the hearer be persuaded to go to town?`, `Is “He go to town” correctly formed?`, `How does the tongue form the sound of the letter “g”?`],
      answer: 2,
      explain: `Grammar asks whether the words are correctly formed and arranged; “He go to town” is not, because the verb does not agree with its subject. Truth belongs to logic, persuasion to rhetoric, and the production of sounds to natural philosophy.` },
    { prompt: `Into what two parts does Quintilian divide the profession of the grammarian?`,
      options: [`Reasoning and persuading`, `Spelling and pronunciation`, `History and philosophy`, `The art of speaking correctly and the interpretation of the poets`],
      answer: 3,
      explain: `Quintilian divides the profession into the art of speaking correctly and the interpretation of the poets (I.4.2). Reasoning belongs to logic and persuading to rhetoric.` }
  ]}},

{ id: 'art',
  title: 'Why is grammar an art? And what makes it a liberal art?',
  body: `<p>Grammar is first an <strong>art</strong>, that is, a habit of making something well, acquired by practice and directed by rules. The work that grammar makes is a correctly formed sentence. St. Thomas explains that even in matters of reason there are works to be made, such as an argument or a well-constructed paragraph, and that the habits directed to such works are called arts; they are called <strong>liberal</strong> arts to distinguish them from the arts whose products are made through bodily labor, which are in a way subordinate, “inasmuch as the body is subordinate to the soul, whereas an individual man, as regards his soul, is free,” which is <i>liber</i> in Latin.</p>
<p>Grammar also seeks knowledge of <em>why</em> sentences are formed as they are and why the parts of speech are what they are. The tradition calls this part of the art speculative grammar. It is one art, not two, because the same art that makes correct sentences also asks for the reasons of what it makes.</p>`,
  src: `St. Thomas, <i>Summa theologiae</i> I-II, q. 57, a. 3, ad 3, in paraphrase.` },

{ id: 'material',
  title: 'What is the material of grammar?',
  body: `<p>The material of grammar is speech, that is, the voice as words signifying thoughts in the mind and as it is arranged into phrases and sentences. Grammar does not study things in themselves, which are the subject of the other sciences, or thoughts in themselves, which belong to the study of the mind. Isidore says that speech (<i>oratio</i>) is made up of three things: sense, voice, and letters.</p>
<p>A sound enters grammar only in so far as it belongs to speech. So a sound that signifies nothing, or that signifies only by nature and not by the will of those who use it, is not part of the material of grammar. A groan, for example, shows pain by nature, as a cry does in an animal, and so it is not a word; but “Water!” or Latin <i>Aqua!</i> is speech, because it signifies something by the agreement of those who use it.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.5.3, in paraphrase.` },

{ id: 'voice-to-sentence',
  title: 'How is speech built up from the voice to the sentence?',
  body: `<p>Speech is built in steps, each larger than the one before it:</p>
<p>the <strong>voice</strong>, that is, the motion of air perceptible to hearing;<br>the <strong>letter</strong>, the least part of the voice that can be written;<br>the <strong>syllable</strong>, a sound pronounced in one utterance;<br>the <strong>word</strong>, the least part of an expression that signifies;<br>the <strong>sentence</strong>, words arranged so that they express a complete thought.</p>
<p>Meaning does not begin at the voice, the letter, or the syllable; it begins at the word. Truth and falsity begin only at the sentence, because only a sentence says something about something. The syllable “pa” in “paper” signifies nothing by itself; the word “paper” signifies; and the sentence “The paper is white” is true or false.</p>`,
  src: `Donatus, <i>Ars maior</i> I (I.1 on the voice); Priscian, <i>Institutiones</i> I–II, in paraphrase.`,
  qp: { id: 'q-meaning', variants: [
    { prompt: `At which step does meaning first appear?`,
      options: [`The voice`, `The letter`, `The syllable`, `The word`],
      answer: 3,
      explain: `The word is the least part of an expression that signifies. The voice, the letter, and the syllable are the material of speech, but they do not signify by themselves.` },
    { prompt: `Does the syllable <i>mu</i> in Latin <i>murus</i> (“wall”) signify anything by itself?`,
      options: [`No; it is only a part of a word that signifies`, `Yes; it signifies a wall`, `Yes; it signifies a part of a wall`, `Yes; every sound signifies something`],
      answer: 0,
      explain: `The syllable <i>mu</i> is a part of the word <i>murus</i>, but it signifies nothing by itself. Meaning begins at the word, and a part of a word does not signify a part of the thing.` },
    { prompt: `At which step do truth and falsity first appear?`,
      options: [`The syllable`, `The sentence`, `The word`, `The letter`],
      answer: 1,
      explain: `A word signifies, but it asserts nothing, so it is neither true nor false. Truth and falsity begin at the sentence, because a sentence says something about something, as in “The sun is shining.”` }
  ]}},

{ id: 'sentence-and-period',
  title: 'Why does grammar end at the sentence?',
  body: `<p>Grammar studies speech as far as the sentence. A sentence is complete when something is named and something is said of it, as in “The sailor waits.” Several clauses may still express one complete thought; such a sentence is called a <strong>period</strong> (a sentence of several clauses that together express one complete thought), and grammar considers it because it is still one sentence. An example is “Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man” (Ecclesiastes 12:13, King James Version).</p>
<p>A speech or a book is many sentences in a row, ordered to prove a point or to persuade. The order of those sentences belongs to logic and to rhetoric. So the proper end of grammar is the sentence, including the period.</p>`,
  src: `Ecclesiastes 12:13 (King James Version); Lincoln, Second Inaugural Address (1865).` },

{ id: 'correct-and-true',
  title: 'Is a correctly formed sentence also true?',
  body: `<p>Grammar asks whether a sentence is correctly formed; logic asks whether what it says is true or whether the sentence follows from other things we know. Either may hold without the other. Walshe, in his <i>Commentary on Aristotle’s Categories</i>, gives a pair of examples: the grammarian judges “man is stone” correct and “man are animal” incorrect, while the logician judges the first false and the second true, though badly expressed.</p>
<p>So grammar cannot tell us what is true. But logic cannot begin without grammar, because until a sentence is correctly formed there is nothing definite for logic to judge.</p>`,
  src: `Walshe, <i>Commentary on the Categories</i>, “What is Logic About?”`,
  qp: { id: 'q-correct-true', variants: [
    { prompt: `“Him go store yesterday.” How does grammar judge this sentence?`,
      options: [`It is incorrectly formed, and therefore false`, `It is correctly formed, because its meaning is understood`, `It is incorrectly formed, though what it means may be true`, `It is neither correctly formed nor able to signify anything`],
      answer: 2,
      explain: `The construction is incorrect, and that is the whole judgment of grammar. Whether the man went to the store is a different question, which belongs to logic. A sentence that is understood is not therefore correctly formed.` },
    { prompt: `“The moon is made of green cheese.” How does grammar judge this sentence?`,
      options: [`It is correctly formed, though what it says is false`, `It is incorrectly formed, because it is false`, `It is incorrectly formed, because the moon is not cheese`, `It cannot be judged until we know whether it is true`],
      answer: 0,
      explain: `The words are correctly formed and correctly arranged, so grammar judges the sentence correct. That it is false is the judgment of logic, and it does not make the sentence incorrect.` },
    { prompt: `Latin <i>Homo est lapis</i> (“A man is a stone”). Which judgment belongs to grammar?`,
      options: [`The sentence is false`, `The sentence is correctly formed`, `The sentence would not persuade a hearer`, `The sentence is incorrectly formed, because it is false`],
      answer: 1,
      explain: `Grammar judges only that the sentence is correctly formed: the singular subject <i>homo</i> agrees with the singular verb <i>est</i>. That it is false is the judgment of logic, and whether it persuades is the question of rhetoric.` }
  ]}},

{ id: 'end',
  title: 'What is grammar for?',
  body: `<p>The ends of grammar, that is the purposes and results of the art of grammar, can be set out in an order. The first is a correctly formed sentence. The second is the habit that the student acquires of forming such sentences and of judging them. The third is that the sentence express a complete thought in the mind of the hearer; Thomas of Erfurt names this as the remote end (<i>finis remotus</i>) of the arrangement of words into a sentence, which is called a grammatical construction (<i>Grammatica speculativa</i> §223). The fourth is that it makes a student ready for logic and rhetoric, which begin only when words have been arranged into a definite sentence.</p>
<p>Grammar is therefore a ministerial art, that is, an art that serves other arts and sciences. Grammar does not produce an ornament of style for its own sake. It serves the understanding of connected speech, the interpretation of the authors, and clarity about what words and sentences signify.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.` },

{ id: 'first',
  title: 'Why does grammar come first?',
  body: `<p>Boethius of Dacia calls grammar an introductory science: it is not a part of philosophy in the way that natural philosophy and mathematics are, but it is needed in order to learn them. Grammar is therefore studied before logic. Quintilian makes the same point about the study of oratory: “Unless the foundations of oratory are well and truly laid by the teaching of literature, the superstructure will collapse” (<i>Institutio oratoria</i> I.4.5). Butler uses “literature” and “the teacher of literature” to translate Quintilian’s terms for grammar and the grammarian (<i>grammatica</i>, <i>grammaticus</i>).</p>
<p>The study of grammar therefore begins with its smallest parts, the voice and the letter, and proceeds to the word and the sentence.</p>`,
  src: `Boethius of Dacia, <i>Modi significandi</i> q. 3 (Godfrey of Fontaines’s abridgement), in paraphrase; Quintilian, <i>Institutio oratoria</i> I.4.5.` }

  ]
};
