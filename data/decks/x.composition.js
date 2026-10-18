/* X.1 Composition [x.composition]
   Plan (ITEM-LIST.md): 10 panels, 3 question points (placeholders: qpTodo; to be written).
   Overlap with Ars Rhetorica: this deck stays with how sentences are combined and built, not with choosing among styles.
   Live material drawn on: DECKS.making (combining sentences; modifiers and pronouns; parallel series; active and passive),
   DECKS.latbuild (building the Latin sentence). Quintilian X.3 checked against the Perseus text of Butler's translation. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['x.composition'] = {
  id: 'x.composition',
  title: 'Composition',
  sub: 'Building sentences and periods',
  sources: `Quintilian, <i>Institutio oratoria</i> X.1–3; Erasmus, <i>De copia</i> (1512).`,
  panels: [

{ id: 'making',
  title: 'From analysis to composition',
  body: `<p>We have studied how sentences are analyzed: how their words are parsed and construed, and how their clauses and phrases depend on one another. <strong>Composition</strong> (Latin <i>compositiō</i>, “putting together”) is the same knowledge used in the other direction: the making of sentences of one’s own. Analysis goes from the finished sentence to its parts; composition goes from the thought to the words, choosing the forms and constructions that will express it.</p>
<p>The classical tradition joined the two. Quintilian says that among the aids that a student must supply for himself, “it is the pen which brings at once the most labour and the most profit” (<i>Institutio oratoria</i> X.3.1). So grammar, which begins with reading and explaining the authors, ends with writing, and the student who has learned to see how good sentences are made learns to make them.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> X.3.1 (trans. Butler; checked against the Perseus text).` },

{ id: 'combining',
  title: 'Combining sentences',
  body: `<p>Two short sentences about the same thing can often become one, and then one of them becomes a part of the other. “The sailor was tired. The sailor slept” becomes “The tired sailor slept,” where the first sentence has become an adjective. Two sentences with the same predicate can share it: “Maria sings. Her brother sings” becomes “Maria and her brother sing,” with a compound subject. Two sentences with the same subject can share it: “The baker mixed the dough. He shaped the loaves” becomes “The baker mixed the dough and shaped the loaves,” with a compound predicate.</p>
<p>The combined sentence must keep the construction correct. Two independent clauses cannot be joined by a comma alone, as we saw in Section VI with the comma splice; they need a conjunction (“and,” “but”) or a semicolon. And a compound subject joined by “and” takes a plural verb, as we saw in the study of agreement.</p>`,
  src: `Standard English handbooks, in paraphrase.`,
  qpTodo: `Combining sentences: which combination of two given sentences is correct and keeps their meaning (a compound subject, a compound predicate, an adjective), and what is wrong with the others.` },

{ id: 'subordination',
  title: 'Subordination',
  body: `<p>When two sentences are combined, one of them can be made dependent on the other, and the writer must decide which thought is principal. “The bell rang. The students left” can become “When the bell rang, the students left,” where the ringing becomes a temporal clause, or “The students left because the bell rang,” where it becomes a causal clause. It can also become a relative clause (“The woman who lives next door is a doctor”), an appositive (“Mr. Lee, a former sailor, teaches history”), or a participial phrase (“Tired from the climb, the hiker reached the top”).</p>
<p>The conjunction chosen must state the true relation between the thoughts. “Because” gives a reason, “although” a contrast, “when” and “after” a time, and “if” a condition. So subordination concerns more than form, because it states how the two thoughts are related, and a wrong conjunction misstates the relation.</p>`,
  src: `Standard English handbooks; Allen and Greenough, <i>New Latin Grammar</i>, on subordinate clauses; both in paraphrase.` },

{ id: 'modifiers',
  title: 'Placing modifiers and pronouns',
  body: `<p>We saw in Section V that English order carries the construction, and in Section VI that a misplaced or dangling modifier is an error of construction. In composition the remedy is to place each modifier next to the word it describes. “He bought a horse for his daughter called Star” suggests that the daughter is called Star; “For his daughter he bought a horse called Star” places the name next to the horse.</p>
<p>A participial phrase at the beginning of a sentence describes the subject that follows it, so the subject must be the one who does the action of the participle: “Walking to school, we saw the rain begin,” not “Walking to school, the rain began.” In the same way, a pronoun must refer clearly to one noun; if it could refer to two, the writer names the person again or changes the order.</p>`,
  src: `Standard English handbooks, in paraphrase.` },

{ id: 'parallel',
  title: 'Parallel construction',
  body: `<p>“She likes swimming, hiking, and riding” joins three gerunds, and the series reads evenly; “She likes swimming, hiking, and to ride” joins two gerunds and an infinitive, and the last member does not match the others. Words and phrases joined by a coordinating conjunction should have the same construction, and this is called <strong>parallel construction</strong>. So the first sentence is parallel and the second is not. We saw in Section III that the members of a correlative pair, such as “both … and” or “not only … but also,” should join words of the same kind; the same rule applies to every series.</p>
<p>Parallel construction is required by grammar, because the conjunction joins words of equal rank, and words of equal rank should be alike in construction. It also makes the sentence clear, because the reader recognizes the series by the likeness of its members. The figures of repetition that we studied in Section VII, such as anaphora, are a deliberate strengthening of the same principle.</p>`,
  src: `Standard English handbooks, in paraphrase.`,
  qpTodo: `Parallel construction: which version of a given series is parallel, and what part of speech or form do its members share.` },

{ id: 'voice',
  title: 'Choosing the voice',
  body: `<p>We saw in Section III that the active and the passive can describe the same event with different subjects. In composition the choice of voice decides what the sentence is about. The active is usually shorter and clearer, because the doer is the subject: “The boy broke the window.” The passive is better when the doer is unknown, unimportant, or obvious, or when the sentence should continue to speak about the thing acted upon: “The wall was built about 1600, and it has stood ever since.”</p>
<p>So neither voice is always better. The writer chooses the voice that keeps the subject of the paragraph in the place of the grammatical subject, so that the sentences follow one another clearly.</p>`,
  src: `Standard English handbooks, in paraphrase.` },

{ id: 'latin',
  title: 'Building a Latin sentence',
  body: `<p>Composition in Latin requires the student to choose the forms that English shows by order and prepositions. To say “The good girl gives the poet a rose,” the student puts the subject in the nominative, <i>puella</i>; the adjective in the same gender, number, and case, <i>bona</i>; the indirect object in the dative, <i>poētae</i>; the direct object in the accusative, <i>rosam</i>; and the verb in the third person singular, agreeing with the subject, <i>dat</i>. The usual prose order puts the verb last: <i>puella bona poētae rosam dat</i>.</p>
<p>Each choice applies a rule we have studied: agreement for the adjective and the verb, government for the cases, and the usual order of Latin prose. So Latin composition is the surest test of whether the rules have been understood, because nothing can be left to the order of the words, as it often can in English.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` },

{ id: 'copia',
  title: 'Erasmus and the variety of expression',
  body: `<p>“Your letter pleased me greatly,” “I was greatly pleased by your letter,” and “Nothing has given me more pleasure than your letter” say nearly the same thing with different subjects, voices, and figures. So one thought can be expressed by different constructions, each correct, and the choice among them is a matter of judgment.</p>
<p>In 1512 Erasmus published <i>De copia</i> (“On Abundance”), a textbook that taught students to express the same thought in many different ways. Its most famous chapter takes a single Latin sentence, <i>Tuae litterae me magnopere delectarunt</i> (“Your letter pleased me greatly”), and rewrites it in nearly two hundred forms, by changing the words, the voice, the construction, and the figures (<i>De copia</i> I.33). So composition draws on the whole of grammar, and the student who can vary a sentence correctly has understood its construction.</p>`,
  src: `Erasmus, <i>De copia</i> I.33 (Knott, <i>Collected Works of Erasmus</i> 24, for reference), in paraphrase; the Latin sentence and the count (usually given as 195) checked at second hand.`,
  qpTodo: `Varying a sentence: which of several rewritings of a given sentence keeps its meaning and is correctly constructed, and what has been changed (the voice, the subject, the construction).` },

{ id: 'quintilian',
  title: 'Writing slowly and well',
  body: `<p>A writer who writes in haste often finds, on rereading, words that do not say what was meant and sentences that do not fit together, so good writing needs a method that begins with care. Quintilian gives the student such a method. At first, he says, “our pen must be slow yet sure: we must search for what is best and refuse to give a joyful welcome to every thought the moment that it presents itself,” and then “we must select both thoughts and words and weigh them one by one. This done, we must consider the order in which they should be placed” (<i>Institutio oratoria</i> X.3.5). He also advises frequent revision of what has just been written.</p>
<p>He sums up the whole method: “write quickly and you will never write well, write well and you will soon write quickly” (X.3.9–10). So the speed that comes with practice is the result of care in the beginning, not a substitute for it. The order Quintilian describes, first the thoughts, then the words, then their order, is the order in which the grammar of composition proceeds.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> X.3.5, 9–10 (trans. Butler; checked against the Perseus text).` },

{ id: 'reading-writing',
  title: 'Reading and writing together',
  body: `<p>A student learns to compose by reading good sentences closely, analyzing them as we have studied, and then making sentences of the same kinds. Quintilian joins writing to reading in this way. He says that it is from the best authors “that we must draw our stock of words, the variety of our figures and our methods of composition” (<i>Institutio oratoria</i> X.2.1).</p>
<p>This is the reason that grammar, which begins with the voice and the letter, ends with composition. The analysis of the authors shows what good sentences are, and composition makes the knowledge one’s own. The tradition gave two further exercises for this purpose, both studied in this section: imitation, in which the student copies and models his writing on a passage of a good author, and translation, in which he carries the sense of one language into another.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> X.2.1 (trans. Butler; checked against the Perseus text).` }

  ]
};
