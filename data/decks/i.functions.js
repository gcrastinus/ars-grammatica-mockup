/* I.5 The Functions of Language [i.functions]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants.
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from the sources. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.functions'] = {
  id: 'i.functions',
  title: 'The Functions of Language',
  sub: 'Stating, asking, commanding, praying, calling, and expressing feeling',
  sources: `Aristotle, <i>De interpretatione</i> 4; St. Thomas, <i>In Peri hermeneias</i> I, lect. 7.`,
  recitation: [
    `Not every sentence is used to say that something is or is not so.`,
    `The <strong>functions of language</strong>, that is, the different uses of speech, are to state, to ask, to command, to pray, and to call someone; and any of these sentences can also express what the speaker feels.`,
    `Each function is a use of a complete sentence; every such sentence signifies, but they do not all signify in the same way.`,
    `A <strong>proposition</strong> or <strong>statement</strong> (Greek <i>apophansis</i>, Latin <i>enuntiatio</i>) is a sentence that says that something is or is not so, and therefore is true or false.`,
    `A command or a prayer is a complete and meaningful sentence, but it is neither true nor false: every sentence signifies, but not every sentence is a statement (Aristotle’s distinction).`,
    `The kinds of complete sentence differ according to what the speaker does with what he understands.`,
    `In a statement the speaker simply expresses what he understands to be so, that is, a judgment.`,
    `In the other kinds he directs what he understands toward another person: to call him, to ask him, to command him, or to pray to him.`,
    `The traditional names of the kinds are the enunciative sentence (the statement), the vocative (which calls), the interrogative (which asks), the imperative (which commands), and the deprecative (which begs or prays).`,
    `Each language has its own means of showing which kind of sentence is meant: English asks a question by changing the order of the words or by adding a word such as “do”; Latin often adds the particle <i>-ne</i> to the first word.`,
    `For commands both English and Latin use a special form of the verb, the imperative mood; for wishes Latin often uses <i>utinam</i>, whereas English uses “may” or “if only.”`,
    `So the kinds of sentence are not only differences in the speaker’s purpose; they are also marked in the forms and the arrangement of the words, and that is why they belong to grammar.`,
    `Speech expresses feeling sometimes in a single word, called an interjection (“alas”), and sometimes in a whole sentence.`,
    `An expression of feeling can be joined to a statement: the statement is true or false, but the feeling expressed is neither.`,
    `Feeling is one function of speech among the others, and it can accompany any kind of sentence.`,
    `Only the statement is true or false, because only a sentence that says that something is or is not so can agree or disagree with the way things are.`,
    `A command asks that something be made so, a question asks whether something is so, and a prayer asks for something to be given or done; none of them claims anything about the way things are.`,
    `The answers show this: a statement is answered by agreement or disagreement (“That is true”), a question by a statement, a command by obedience or refusal, and a prayer by its being granted or not.`,
    `Grammar considers every kind of sentence, because every kind must be correctly formed; any kind can contain a solecism, that is, an error in construction.`,
    `Logic considers the statement, because it is concerned with truth and with what follows from what is true.`,
    `Rhetoric and poetry consider commands, questions, prayers, and expressions of feeling as well, because they are concerned with moving and delighting the hearer, although they also use statements.`,
    `So grammar is broader than logic in this respect: logic studies one kind of sentence, the statement, whereas grammar studies all of them.`,
    `Modern accounts of the functions of language agree with the tradition that speech does more than state, and that stating is the function on which truth depends.`,
    `Bühler’s three functions (expression, appeal, representation) correspond to the tradition: representation to the statement, and appeal to the command and the prayer.`,
    `Jakobson’s added functions also fit the classical account: keeping contact between speaker and hearer is the work of the vocative, and speaking about the language itself is done with names of the second imposition.`,
    `The poetic function is not a separate function in the classical tradition, whose ideal is to use the precise words that have the most beauty and the most power for what the poet intends; drawing attention to the words themselves is used only where the circumstances call for it.`
  ],
  panels: [

{ id: 'what-speech-does',
  title: 'What can a sentence do?',
  body: `<p>We have seen how words signify, and that only a sentence can be true or false. But not every sentence is used to say that something is or is not so. We use sentences to state, to ask, to command, to pray, and to call someone, and any of these sentences can also express what the speaker feels. These are the functions of language, that is, the different uses of speech, and each of them is a use of a complete sentence.</p>
<p>To take some simple examples: “The door is open” states something; “Is the door open?” asks something; “Open the door” commands something; “May the door be opened” prays for something; “John!” calls someone; and “Alas, the door is locked!” expresses a feeling as well as stating a fact. Every one of these sentences signifies, but they do not all signify in the same way.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 4; St. Thomas, <i>In Peri hermeneias</i> I, lect. 7, in paraphrase.` },

{ id: 'aristotle',
  title: 'Every sentence signifies, but not every sentence is a statement',
  body: `<p>A <strong>proposition</strong> or <strong>statement</strong> (Greek <i>apophansis</i>, Latin <i>enuntiatio</i>) is a sentence that says that something is or is not so, and therefore is true or false. So “The door is open” is a statement, and it is true or false according to whether the door is open. But “Open the door” is a complete and meaningful sentence that is neither true nor false, and so is the prayer “Give us this day our daily bread.”</p>
<p>Aristotle makes the distinction that governs the whole subject: “Every sentence has meaning, not as being the natural means by which a physical faculty is realized, but, as we have said, by convention. Yet every sentence is not a proposition; only such are propositions as have in them either truth or falsity. Thus a prayer is a sentence, but is neither true nor false” (<i>De interpretatione</i> 4, 17a1–5).</p>`,
  src: `Aristotle, <i>De interpretatione</i> 4, 17a1–5.`,
  qp: { id: 'q-statement', variants: [
    { prompt: `Which of these sentences is a statement, that is, true or false?`,
      options: [`“Boil the kettle.”`, `“Is the kettle boiling?”`, `“The kettle is boiling.”`, `“May the kettle boil soon.”`],
      answer: 2,
      explain: `Only “The kettle is boiling” says that something is so, and so only it is true or false. The command, the question, and the wish are complete and meaningful sentences, but none of them says that something is or is not so.` },
    { prompt: `“Keep us safe this night, O Lord” is a prayer. Is it true or false?`,
      options: [`True, if it is a good prayer`, `False, because it is not a statement`, `True or false, according to whether it is answered`, `Neither; it asserts nothing`],
      answer: 3,
      explain: `Aristotle says, “A prayer is a sentence, but is neither true nor false” (<i>De interpretatione</i> 4). It has meaning, but it does not assert anything, and only a statement has truth or falsity in it.` },
    { prompt: `What makes a sentence a statement?`,
      options: [`That it says that something is or is not so, and is therefore true or false`, `That it has a verb in it`, `That it is spoken rather than written`, `That it is long enough to be complete`],
      answer: 0,
      explain: `Commands, questions, and prayers have verbs and are complete, but they are not statements. A statement is a sentence that says that something is or is not so, and only such a sentence is true or false.` }
  ]}},

{ id: 'five-kinds',
  title: 'The kinds of complete sentence',
  body: `<p>As we have seen already, a complete sentence does not only make a statement. We can also call someone (“Mary!” or “O Lord”), ask (“Has the rain stopped?”), command (“Bring the umbrella”), and beg or pray (“Send us rain, O Lord”). Each of these is complete and meaningful, but only the statement (“The rain has stopped”) says that something is or is not so.</p>
<p>These kinds differ according to what the speaker does with what he understands. In a statement the speaker simply expresses what he understands to be so. In the other kinds he directs what he understands toward another person, whether to call him, to ask him, to command him, or to pray to him. So “The rain has stopped” expresses a judgment, whereas “Has the rain stopped?” asks another person for one, and “Send us rain, O Lord” asks God for something to be done.</p>
<p>St. Thomas, commenting on Aristotle, sets out these kinds of complete sentence as the tradition recognized them: the enunciative sentence, that is, the statement; the vocative, which calls; the interrogative, which asks; the imperative, which commands; and the deprecative, which begs or prays. He explains their difference in the same way, by what the speaker does with what he understands (<i>In Peri hermeneias</i> I, lect. 7).</p>`,
  src: `St. Thomas, <i>In Peri hermeneias</i> I, lect. 7, in paraphrase.` },

{ id: 'marks',
  title: 'How English and Latin mark the kinds of sentence',
  body: `<p>Each language has its own means of showing which kind of sentence is meant. English asks a question by changing the order of the words or by adding a word such as “do”: “The door is open” becomes “Is the door open?” and “He came” becomes “Did he come?” Latin often adds the particle <i>-ne</i> to the first word: <i>venit</i> (“he comes”) becomes <i>venitne?</i> (“does he come?”).</p>
<p>For commands both languages use a special form of the verb, which the grammarians call the imperative mood and which we will study in Section III: English “Come!” and Latin <i>Veni!</i> (“Come!”). For wishes and prayers Latin often uses the word <i>utinam</i> (“if only,” “would that”), as in <i>Utinam veniat!</i> (“If only he would come!”), whereas English uses “may” or “if only”: “May he come soon,” “If only he would come.” So the kinds of sentence are not only differences in the speaker’s purpose; they are also marked in the forms and the arrangement of the words, and that is why they belong to grammar.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, on questions, commands, and wishes.` },

{ id: 'feeling',
  title: 'Expressing feeling',
  body: `<p>Speech also expresses what the speaker feels. Sometimes it does so in a single word, such as English “alas” or “oh,” or Latin <i>heu</i> (“alas”) and <i>o</i> (“oh”); these words are called interjections, and we will study them among the parts of speech in Section III. Sometimes it does so in a whole sentence, such as “How beautiful the morning is!” or Latin <i>O tempora, o mores!</i> (“Oh, the times! Oh, the customs!”), which Cicero exclaims against the corruption of his age (<i>In Catilinam</i> I.2).</p>
<p>An expression of feeling can be joined to a statement. “Alas, the door is locked” states that the door is locked, which is true or false, and also expresses the speaker’s grief, which is neither true nor false. Feeling, therefore, is one function of speech among the others, and it can accompany any kind of sentence.</p>`,
  src: `Cicero, <i>In Catilinam</i> I.2.` },

{ id: 'only-statement',
  title: 'Why is only the statement true or false?',
  body: `<p>Truth and falsity are in a sentence that says that something is or is not so, because such a sentence can agree or disagree with the way things are. “The door is open” is true if the door is open and false if it is not. But a command does not say that anything is so; it asks that something be made so. A question asks whether something is so, and a prayer asks for something to be given or done. None of these sentences claims anything about the way things are, and so none of them can agree or disagree with it.</p>
<p>We can see this in the answers that each kind of sentence receives. A statement is answered by agreement or disagreement: “That is true” or “That is false.” A question is answered by a statement, a command by obedience or refusal, and a prayer by its being granted or not. We do not reply to “Open the door” by saying “That is false.”</p>`,
  src: `Aristotle, <i>De interpretatione</i> 4; St. Thomas, <i>In Peri hermeneias</i> I, lect. 7, in paraphrase.`,
  qp: { id: 'q-only-statement', variants: [
    { prompt: `Why is the command “Shut the window” neither true nor false?`,
      options: [`Because it is too short`, `Because it does not say that anything is so; it asks that something be made so`, `Because it has no subject`, `Because it is spoken to another person`],
      answer: 1,
      explain: `Only a sentence that says that something is or is not so can agree or disagree with the way things are. A command asks that something be made so, and so it is neither true nor false.` },
    { prompt: `“Alas, the harvest has failed.” What in this sentence is true or false?`,
      options: [`That the harvest has failed`, `The speaker’s grief`, `Nothing, because it contains “alas”`, `Both the statement and the grief`],
      answer: 0,
      explain: `The sentence states that the harvest has failed, which is true or false; and it also expresses the speaker’s grief, which is neither true nor false. Feeling can accompany a statement without itself being a statement.` },
    { prompt: `How is a question properly answered?`,
      options: [`By “That is true” or “That is false”`, `By obedience or refusal`, `By a statement`, `By another question`],
      answer: 2,
      explain: `A question asks whether something is so, and it is answered by a statement that says that it is or is not so. “That is true” answers a statement, and obedience or refusal answers a command.` }
  ]}},

{ id: 'rhetoric-poetry',
  title: 'Logic, rhetoric, poetry, and grammar',
  body: `<p>Grammar considers every kind of sentence, because every kind must be correctly formed. “Is the door open?” and “Open the door!” can be correctly or incorrectly formed as surely as “The door is open,” and a prayer can contain a solecism, that is, an error in construction, as easily as a statement can.</p>
<p>The other arts of speech take up only some kinds of sentence. Logic considers the statement, because it is concerned with truth and with what follows from what is true. Rhetoric and poetry consider commands, questions, prayers, and expressions of feeling as well, because they are concerned with moving and delighting the hearer, although they also use statements since logic plays a role in each. So grammar is broader than logic in this respect: logic studies one kind of sentence, the statement, whereas grammar studies all of them.</p>
<p>Aristotle draws this division of labor at the end of his discussion: “Let us therefore dismiss all other types of sentence but the proposition, for this last concerns our present inquiry, whereas the investigation of the others belongs rather to the study of rhetoric or of poetry” (<i>De interpretatione</i> 4, 17a5–7).</p>`,
  src: `Aristotle, <i>De interpretatione</i> 4, 17a5–7.` },

{ id: 'modern',
  title: 'Modern accounts of the functions of language',
  body: `<p>Modern students of language have also classified the functions of speech, and their accounts can be compared with the traditional one. Karl Bühler, a German psychologist and linguist, distinguished three functions in his <i>Sprachtheorie</i> (1934): speech expresses the state of the speaker, appeals to the hearer, and represents things. Roman Jakobson, in “Linguistics and Poetics” (1960), added three more, for six in all: besides the function that refers to things, the one that expresses the speaker’s feeling, and the one that directs the hearer, he named the function that keeps contact between speaker and hearer (as in “Hello?” on the telephone), the function that speaks about the language itself (as in “What does ‘nigh’ mean?”), and the poetic function, which draws attention to the words themselves.</p>
<p>These accounts agree with the tradition that speech does more than state, and that stating is the function on which truth depends. Bühler’s representation corresponds to Aristotle’s statement, and his appeal to the hearer covers the command and the prayer, which the tradition describes as directed toward another person. Jakobson’s three additions can also be placed within the classical account. Keeping contact between speaker and hearer is the work of the sentence that calls, the vocative. Speaking about the language itself is done with names of the second imposition, as we have seen.</p>
<p>The poetic function is not a separate function in the classical tradition, because the ideal is to use the precise words that have the most beauty but also the most power for expressing precisely what the poet intends. In modern times, lyric poetry has become primarily an expression of feeling and experience and an attempt to use words to communicate that, and so it does end up drawing attention to the words themselves. The classical tradition permits lyric poetry, but it would use this kind of poetic effect only in circumstances that call specifically for it.</p>`,
  src: `Bühler, <i>Sprachtheorie</i> (1934); Jakobson, “Linguistics and Poetics” (1960); both in paraphrase.` }

  ]
};
