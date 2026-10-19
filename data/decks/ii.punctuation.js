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
<p>Roman books were usually written without spaces between the words and with few marks of any kind, a style that scholars call <i>scriptio continua</i> (“continuous writing”). So the first sentence of Caesar’s <i>Gallic War</i>, <i>Gallia est omnis divisa in partes tres</i> (“All Gaul is divided into three parts”), appeared as GALLIAESTOMNISDIVISAINPARTESTRES, and the reader had to divide the words and the sentences himself. Parkes shows that in antiquity punctuation was usually added by the reader, as an aid to reading aloud, rather than by the author (<i>Pause and Effect</i>, ch. 1). The grammarians therefore taught the marks of pause as part of the art of reading.</p>`,
  src: `Parkes, <i>Pause and Effect</i>, ch. 1, in paraphrase.` },

{ id: 'donatus-three',
  title: 'The three marks of Donatus',
  body: `<p>When we read a sentence aloud, we do not pause in the same way everywhere. We make a full pause where the sense is complete, a shorter pause where we must take breath with much of the sentence still to come, and a slight pause where only a little remains to be added. A mark of pause in writing can therefore show not only where to pause but also how far the sense has come toward completion.</p>
<p>Donatus calls the marks of pause <i>positurae</i> (“placings”), or <i>distinctiones</i> (“divisions”), and says that there are three, each a single point whose meaning depends on its height beside the letter (<i>Ars maior</i> I.6):</p>
<p><strong><i>Distinctio</i></strong> (“division,” the point set high) is placed where the sentence is complete, and its point is set at the top of the letter.<br><strong><i>Media distinctio</i></strong> (“middle division,” the point set in the middle) is placed where about as much of the sentence remains as has been said, but the reader must take breath; its point is set at the middle of the letter.<br><strong><i>Subdistinctio</i></strong> (“lower division,” the point set low) is placed where only a little of the sentence remains, which must be kept apart for a moment and then added; its point is set at the foot of the letter.</p>
<p>So the three marks measure how far the sense is from completion. The higher the point, the more complete the sense, and the <i>distinctio</i> alone marks a complete sentence.</p>`,
  src: `Donatus, <i>Ars maior</i> I.6, in paraphrase.`,
  qp: { id: 'q-marks', variants: [
    { prompt: `Where the sense of a sentence is complete, which of Donatus’s marks is placed, and where is its point set?`,
      options: [`The <i>distinctio</i>, at the top of the letter`, `The <i>subdistinctio</i>, at the foot of the letter`, `The <i>media distinctio</i>, at the middle of the letter`, `The <i>distinctio</i>, at the foot of the letter`],
      answer: 0,
      explain: `The <i>distinctio</i> marks a complete sentence, and its point is set at the top of the letter. The higher the point, the more complete the sense, so the mark of complete sense has the highest point.` },
    { prompt: `Only a little of the sentence remains, to be kept apart for a moment and then added. Which mark does Donatus place here?`,
      options: [`The <i>distinctio</i>, set high`, `The <i>media distinctio</i>, set in the middle`, `The <i>subdistinctio</i>, set low`, `No mark, because the sentence is not complete`],
      answer: 2,
      explain: `The <i>subdistinctio</i> is placed where only a little of the sentence remains, and its point is set at the foot of the letter. The sense is furthest from completion here, so the point is lowest.` },
    { prompt: `A point set at the middle of the letter tells the reader what?`,
      options: [`That the sentence is complete`, `That about as much remains as has been said`, `That only a little of the sentence remains`, `That a question has been asked`],
      answer: 1,
      explain: `The <i>media distinctio</i> is placed where about as much of the sentence remains as has been said, but the reader must take breath. Its point stands between the high point of the <i>distinctio</i> and the low point of the <i>subdistinctio</i>, as its sense stands between complete and nearly complete.` }
  ]}},

{ id: 'comma-colon-period',
  title: 'Comma, colon, and period',
  body: `<p>We use the words “comma,” “colon,” and “period” as the names of marks of punctuation, but the words first named parts of a sentence. The Greek rhetoricians called the shortest part of a sentence a <strong>comma</strong> (Greek <i>komma</i>, “a piece cut off”), a longer part a <strong>colon</strong> (Greek <i>kōlon</i>, “limb”), and the whole sentence, which comes round to completion, a <strong>period</strong> (Greek <i>periodos</i>, “a going round”).</p>
<p>Isidore of Seville, a scholar of the seventh century, repeats Donatus’s three marks and connects each of them with one of these parts (<i>Etymologiae</i> I.20): the <i>subdistinctio</i> ended a comma, the <i>media distinctio</i> ended a colon, and the <i>distinctio</i> ended a period. So the names of the parts of a sentence later came to name the marks that end them. We will study the period as a part of construction in Section V, where we will see how a long sentence is built from its clauses.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.20, in paraphrase (checked against the Latin; Barney et al. for reference).` },

{ id: 'medieval-marks',
  title: 'From the ancient points to the modern marks',
  body: `<p>The modern marks developed slowly from the ancient points. In the seventh and eighth centuries, scribes in Ireland and England began to leave spaces between words, because Latin was a foreign language to their readers and the words had to be recognized on the page. In the schools of the Carolingian period, scribes added new marks, among them a point with a hook above it (<i>punctus elevatus</i>) for a pause within the sentence, and a mark for the end of a question (<i>punctus interrogativus</i>), from which our question mark descends.</p>
<p>The printers of the Renaissance fixed many of the marks that we use. The semicolon appeared in print in Venice in 1494, in a book printed by Aldus Manutius, and printers gradually settled the forms of the comma, the colon, and the period. So our marks are the result of a long history of readers and printers working out how to show the divisions of the sentence. Parkes traces these steps in <i>Pause and Effect</i> (ch. 2–4).</p>`,
  src: `Parkes, <i>Pause and Effect</i>, ch. 2–4, in paraphrase.` },

{ id: 'modern-marks',
  title: 'The modern marks',
  body: `<p>A page of modern English prose uses a small number of marks again and again, and each has its own work. The principal modern marks are these:</p>
<p>the <strong>period</strong> (in British usage, the full stop), which ends a sentence that states something;<br>the <strong>question mark</strong> and the <strong>exclamation point</strong>, which end a question and an exclamation;<br>the <strong>comma</strong>, which separates the lesser parts of a sentence, such as the items of a series or a clause set before the main clause;<br>the <strong>semicolon</strong>, which joins two clauses that could stand as separate sentences but are closely related in sense;<br>and the <strong>colon</strong>, which introduces a list, an explanation, or a quotation.</p>
<p>The ancient marks were chiefly guides to pausing when reading aloud. The modern marks still show pauses, but they are governed more by the construction of the sentence than by breath. So a modern comma may separate two clauses where a speaker would hardly pause, and a speaker may pause where the rules of punctuation put no mark.</p>`,
  src: `Parkes, <i>Pause and Effect</i>; <i>The Chicago Manual of Style</i>, ch. 6, in paraphrase.` },

{ id: 'sense',
  title: 'Punctuation and sense',
  body: `<p>Because punctuation shows how the words of a sentence go together, a change in the punctuation can change the sense. We saw in Section I that ambiguity can lie in the arrangement of words, and that a pause or a mark of punctuation can decide it. “Let’s eat, Grandpa” invites Grandpa to dinner, whereas “Let’s eat Grandpa” makes him the dinner. “The students, who had finished, went home” says that all the students had finished and gone home, whereas “The students who had finished went home” says that only those who had finished went home.</p>
<p>A well-known Latin example is the oracle reported to a soldier going to war: <i>ibis redibis nunquam per bella peribis</i>. With a pause after <i>redibis</i>, it means “You will go, you will return, never in war will you perish”; with a pause after <i>nunquam</i>, it means “You will go, you will never return, in war you will perish.” The words are the same, and only the division of the sentence decides which prophecy was given.</p>`,
  src: `A traditional school example of uncertain origin; no ancient source has been found for it.`,
  qp: { id: 'q-punct-sense', variants: [
    { prompt: `“Stop, children!” and “Stop children!” What does the comma do in the first?`,
      options: [`It makes “children” the object of “stop”`, `It shows that the sentence is a question`, `It changes nothing; both say the same thing`, `It marks “children” as those addressed`],
      answer: 3,
      explain: `With the comma, the children are called and told to stop. Without it, “children” is the object of “stop,” and someone is told to stop the children. The mark separates the word that calls from the command.` },
    { prompt: `“My brother, who lives in Boston, is a doctor.” What do the commas show?`,
      options: [`The clause picks out one of several brothers`, `The speaker has only one brother`, `The clause is a question`, `They mark a pause but change nothing`],
      answer: 1,
      explain: `Set off by commas, “who lives in Boston” adds a fact about the brother already known, so the speaker has one brother. Without the commas, “My brother who lives in Boston is a doctor” picks out one brother from others, as “The students who had finished went home” picks out some of the students.` },
    { prompt: `A message said to have been sent about the imprisoned King Edward II, <i>Edwardum occidere nolite timere bonum est</i>, was written without punctuation. What does a pause after <i>timere</i> make it say?`,
      options: [`“Do not kill Edward; it is good to fear”`, `“Do not fear to kill Edward; it is good”`, `“Edward does not wish to kill; to fear is good”`, `“Do not fear Edward, and do not kill him”`],
      answer: 1,
      explain: `A pause after <i>timere</i> joins <i>nolite timere</i>, “do not fear,” to <i>Edwardum occidere</i>, “to kill Edward,” and leaves <i>bonum est</i>, “it is good,” as a clause of its own. A pause after <i>nolite</i> gives the opposite command: “Do not kill Edward; it is good to fear.” The words are the same; only the division differs.` }
  ]}},

{ id: 'to-meter',
  title: 'Pauses in prose and in verse',
  body: `<p>We have seen that the ancient marks of pause measured how far the sense of a sentence had come toward completion, and that the comma, colon, and period first named the parts of a sentence. Punctuation therefore stands between the study of sounds and the study of construction: it marks pauses in the voice, but the pauses follow the sense.</p>
<p>Verse has a second kind of division, which does not depend on the sense. A line of verse is measured by a fixed pattern of syllables, and it ends when the pattern is complete, whether or not the sense is complete. So in reading poetry we must attend both to the pauses of the sense, which punctuation marks, and to the divisions of the meter, which we consider next in this section of the course.</p>`,
  src: `Donatus, <i>Ars maior</i> I.6; Parkes, <i>Pause and Effect</i>.` }

  ]
};
