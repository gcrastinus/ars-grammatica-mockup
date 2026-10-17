/* II.5 Punctuation (positurae) [ii.punctuation]
   Plan (ITEM-LIST.md): 7 panels, 2 question points (placeholders: qpTodo; to be written).
   Live material drawn on: none found as separate distinctio panels in DECKS.period; built from Donatus I.6, Isidore I.20,
   and Parkes. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.punctuation'] = {
  id: 'ii.punctuation',
  title: 'Punctuation (<i>posituræ</i>)',
  sub: 'The old marks of pause (<i>distinctio</i>, <i>subdistinctio</i>, and <i>media distinctio</i>) beside the modern ones',
  sources: `Donatus, <i>Ars maior</i> I.6; Isidore, <i>Etymologiae</i> I.20; M. B. Parkes, <i>Pause and Effect: An Introduction to the History of Punctuation in the West</i> (1992).`,
  panels: [

{ id: 'why-punctuation',
  title: 'Why do we need punctuation?',
  body: `<p>We have studied the sounds of speech, which are recorded by letters. But speech also has pauses, and a reader who reads aloud must know where to pause and where the sense of a sentence is complete. <strong>Punctuation</strong> (from Latin <i>punctum</i>, “point”) is the set of marks that show these divisions in writing.</p>
<p>Roman books were usually written without spaces between the words and with few marks of any kind, a style that scholars call <i>scriptio continua</i> (“continuous writing”). So a line of Virgil appeared as ARMAVIRVMQVECANOTROIAEQVIPRIMVSABORIS, and the reader had to divide the words and the sentences himself. Parkes shows that in antiquity punctuation was usually added by the reader, as an aid to reading aloud, rather than by the author (<i>Pause and Effect</i>, ch. 1, in paraphrase). The grammarians therefore taught the marks of pause as part of the art of reading.</p>`,
  src: `Parkes, <i>Pause and Effect</i>, ch. 1, in paraphrase.` },

{ id: 'donatus-three',
  title: 'The three marks of Donatus',
  body: `<p>Donatus calls the marks of pause <i>positurae</i> (“placings”), or <i>distinctiones</i> (“divisions”), and says that there are three. Each is a single point, and its meaning depends on its height beside the letter (<i>Ars maior</i> I.6, in paraphrase).</p>
<p><strong>The full stop</strong> (<i>distinctio</i>) is placed where the sentence is complete, and its point is set at the top of the letter.<br><strong>The middle mark</strong> (<i>media distinctio</i>) is placed where about as much of the sentence remains as has been said, but the reader must take breath; its point is set at the middle of the letter.<br><strong>The lower mark</strong> (<i>subdistinctio</i>) is placed where only a little of the sentence remains, which must be kept apart for a moment and then added; its point is set at the foot of the letter.</p>
<p>So the three marks measure how far the sense is from completion. The higher the point, the more complete the sense, and the full stop alone marks a complete sentence.</p>`,
  src: `Donatus, <i>Ars maior</i> I.6, in paraphrase.`,
  qpTodo: `Donatus’s three marks: given a place in a sentence (the sense complete, half the sentence still to come, a little still to come), say which mark belongs there and where its point is set.` },

{ id: 'comma-colon-period',
  title: 'Comma, colon, and period',
  body: `<p>Isidore of Seville repeats Donatus’s three marks and connects each of them with a part of the sentence that the Greek rhetoricians had named (<i>Etymologiae</i> I.20, in paraphrase). The shortest part of a sentence was called a <strong>comma</strong> (Greek <i>komma</i>, “a piece cut off”), a longer part a <strong>colon</strong> (Greek <i>kōlon</i>, “limb”), and the whole sentence, which comes round to completion, a <strong>period</strong> (Greek <i>periodos</i>, “a going round”).</p>
<p>So the lower mark ended a comma, the middle mark ended a colon, and the full stop ended a period. Our words “comma,” “colon,” and “period” therefore first named parts of a sentence and only later came to name the marks that end them. We will study the period as a part of construction in Section V, where we will see how a long sentence is built from its clauses.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.20, in paraphrase (checked against the Latin; Barney et al. for reference).` },

{ id: 'medieval-marks',
  title: 'From the ancient points to the modern marks',
  body: `<p>The modern marks developed slowly from the ancient points. Parkes traces the main steps (<i>Pause and Effect</i>, ch. 2–4, in paraphrase). In the seventh and eighth centuries, scribes in Ireland and England began to leave spaces between words, because Latin was a foreign language to their readers and the words had to be recognized on the page. In the schools of the Carolingian period, scribes added new marks, among them a point with a hook above it (<i>punctus elevatus</i>) for a pause within the sentence, and a mark for the end of a question (<i>punctus interrogativus</i>), from which our question mark descends.</p>
<p>The printers of the Renaissance fixed many of the marks that we use. The semicolon appeared in print in Venice in 1494, in a book printed by Aldus Manutius, and printers gradually settled the forms of the comma, the colon, and the period. So our marks are the result of a long history of readers and printers working out how to show the divisions of the sentence.</p>`,
  src: `Parkes, <i>Pause and Effect</i>, ch. 2–4, in paraphrase.` },

{ id: 'modern-marks',
  title: 'The modern marks',
  body: `<p>The principal modern marks are these:<br>the <strong>period</strong> (in British usage, the full stop), which ends a sentence that states something;<br>the <strong>question mark</strong> and the <strong>exclamation point</strong>, which end a question and an exclamation;<br>the <strong>comma</strong>, which separates the lesser parts of a sentence, such as the items of a series or a clause set before the main clause;<br>the <strong>semicolon</strong>, which joins two clauses that could stand as separate sentences but are closely related in sense;<br>the <strong>colon</strong>, which introduces a list, an explanation, or a quotation.</p>
<p>The ancient marks were chiefly guides to pausing when reading aloud. The modern marks still show pauses, but they are governed more by the construction of the sentence than by breath. So a modern comma may separate two clauses where a speaker would hardly pause, and a speaker may pause where the rules of punctuation put no mark.</p>`,
  src: `Parkes, <i>Pause and Effect</i>; <i>The Chicago Manual of Style</i>, ch. 6, in paraphrase.` },

{ id: 'sense',
  title: 'Punctuation and sense',
  body: `<p>Because punctuation shows how the words of a sentence go together, a change in the punctuation can change the sense. We saw in Section I that ambiguity can lie in the arrangement of words. In writing, punctuation often settles such an ambiguity. “Let’s eat, Grandpa” invites Grandpa to dinner, while “Let’s eat Grandpa” makes him the dinner. “The teacher said the student was late” and “The teacher, said the student, was late” say opposite things about who was late.</p>
<p>A well-known Latin example is the oracle reported to a soldier going to war: <i>ibis redibis nunquam per bella peribis</i>. With a pause after <i>redibis</i>, it means “You will go, you will return, never in war will you perish”; with a pause after <i>nunquam</i>, it means “You will go, you will never return, in war you will perish.” The words are the same, and only the division of the sentence decides which prophecy was given.</p>`,
  src: `A traditional school example of uncertain origin; no ancient source has been found for it.`,
  qpTodo: `Punctuation and sense: given two punctuations of the same words (“Let’s eat, Grandpa”; <i>ibis redibis nunquam</i>), say what each means and which words the mark separates.` },

{ id: 'to-meter',
  title: 'Pauses in prose and in verse',
  body: `<p>We have seen that the ancient marks of pause measured how far the sense of a sentence had come toward completion, and that the comma, colon, and period first named the parts of a sentence. Punctuation therefore stands between the study of sounds and the study of construction: it marks pauses in the voice, but the pauses follow the sense.</p>
<p>Verse has a second kind of division, which does not depend on the sense. A line of verse is measured by a fixed pattern of syllables, and it ends when the pattern is complete, whether or not the sense is complete. So in reading poetry we must attend both to the pauses of the sense, which punctuation marks, and to the divisions of the meter, which we study next.</p>`,
  src: `Donatus, <i>Ars maior</i> I.6; Parkes, <i>Pause and Effect</i>.` }

  ]
};
