/* V.5 Order (ordo) [v.order]
   Plan (ITEM-LIST.md): 11 panels, 6 question points: 2 short analysis questions and 1 on typology (placeholders: qpTodo;
   to be written). Two panels (typology-1, typology-2) give the early mention of typology and point ahead to XI.2.
   Live material drawn on: DECKS.typo (word order, case against order). Quintilian IX.4.23–32 checked against the Perseus
   text of Butler's translation. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.order'] = {
  id: 'v.order',
  title: 'Order (<i>ordo</i>)',
  sub: 'Natural and artificial order, and what word order does in English and in Latin',
  sources: `Quintilian, <i>Institutio oratoria</i> IX.4.23–32; Priscian, <i>Institutiones grammaticae</i> XVII; Joseph Greenberg, “Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements” (1963); the Bible, King James Version.`,
  panels: [

{ id: 'what-order',
  title: 'The order of words',
  body: `<p>We have seen that the words of a sentence are joined by dependence, agreement, and government. These relations do not depend on the order in which the words stand: in Latin <i>puer puellam amat</i> and <i>puellam puer amat</i> both mean “the boy loves the girl,” because the endings show which word is the subject and which the object. But every sentence must be spoken in some order, one word after another, and the order has its own effects. The grammarians call the arrangement of words in sequence their <strong>order</strong> (Latin <i>ordō</i>).</p>
<p>Languages differ in how much the order of words does. In English the order is the chief means of showing construction, so it is largely fixed: “The boy loves the girl” and “The girl loves the boy” say different things. In Latin the endings show the construction, so the order is free to do other work, especially to give emphasis and to arrange the sentence for effect.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 595–600, in paraphrase.` },

{ id: 'natural',
  title: 'Natural order',
  body: `<p>We say “men and women,” “day and night,” and “rising and setting,” and rarely the reverse. We also usually name what we are speaking about before we say what it does: “The boy runs.” Some orders of words therefore seem to follow the nature of things or of thought, and the grammarians call such an order a <strong>natural order</strong> (<i>ōrdō nātūrālis</i>). Quintilian uses the term for the order in which things are customarily named: “There is also another species of order which may be entitled natural, as for example when we speak of men and women, day and night, rising and setting, in preference to the reverse order” (<i>Institutio oratoria</i> IX.4.23). Priscian uses it for the order of the parts of the sentence, holding that the nominative is naturally placed before the verb, because the substance is prior to the action that is said of it (<i>Institutiones grammaticae</i> XVII).</p>
<p>The medieval grammarians developed Priscian’s idea. They held that the natural order of a sentence is the subject first, then the verb, then what depends on the verb, because this is the order in which the mind conceives the thought: first what it speaks about, then what it says of it. Any other order they called <strong>artificial</strong> (<i>ōrdō artificiālis</i>), that is, arranged by art for some effect.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.4.23 (trans. Butler; checked against the Perseus text); Priscian, <i>Institutiones grammaticae</i> XVII, in paraphrase.`,
  qpTodo: `Natural order: which order does Quintilian call natural (“men and women,” “day and night”), and what is the natural order of the parts of a sentence according to Priscian and the medieval grammarians.` },

{ id: 'quintilian-rules',
  title: 'Quintilian against fixed rules of order',
  body: `<p>It might be expected that a fixed rule governs the order of words, putting the subject first, then the verb, then the object, with each adjective after its noun. Latin authors follow no such rule. Quintilian rejects rules of order that are applied without regard to the effect: “The rule which some have sought to enforce that nouns should precede verbs, and verbs adverbs, while epithets and pronouns should follow their substantives, is a mere extravagance, since the reverse order is often adopted with excellent effect” (<i>Institutio oratoria</i> IX.4.24). He gives one general preference: “If the demands of artistic structure permit, it is far best to end the sentence with a verb: for it is in verbs that the real strength of language resides” (IX.4.26).</p>
<p>So the usual Latin order places the subject first and the verb last, with the object and other words between: <i>Caesar Galliam vīcit</i>, “Caesar conquered Gaul.” But this is a usual order, not a rule of correctness, and Latin authors depart from it constantly. Quintilian adds that when a verb does not end the sentence, the order is a figure, which he counts as an ornament rather than an error.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.4.24, 26 (trans. Butler; checked against the Perseus text).` },

{ id: 'emphasis',
  title: 'Order and emphasis',
  body: `<p>A speaker who wants to stress a word often moves it out of its usual place: “This book I will keep” puts “this book” first, and “Strange it was” puts “strange” first. The first and last places in a sentence are the most emphatic. In Latin, a word moved from its usual place to the beginning or the end of the sentence is thereby emphasized: the sentence we have seen in its usual order, <i>Galliam Caesar vīcit</i>, puts Gaul first, as if to say “It was Gaul that Caesar conquered.” Quintilian observes that it is often possible “to give special significance to a word by placing it at the close of the sentence and thereby stamping and impressing it on the mind of the hearer, whereas if it were placed in the middle of the sentence, it would remain unnoticed” (<i>Institutio oratoria</i> IX.4.29).</p>
<p>English uses the same positions for emphasis, within the limits of its fixed order. In the familiar English of the Bible, Peter says to the lame man, “Silver and gold have I none; but such as I have give I thee” (Acts 3:6), placing the objects first for emphasis. Ordinary English more often uses other means, such as “It was Gaul that Caesar conquered,” because moving the object before the verb would usually change the construction.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.4.29 (trans. Butler; checked against the Perseus text); Acts 3:6 (King James Version).`,
  qpTodo: `Order and emphasis: in a given Latin sentence (<i>Caesar Galliam vīcit</i>, <i>Galliam Caesar vīcit</i>), which word is emphasized by its position, and how would English give the same emphasis.` },

{ id: 'latin-freedom',
  title: 'Latin order and the separation of words',
  body: `<p>Because Latin endings show which words belong together, Latin can separate words that are constructed together. An adjective may stand far from its noun, as in the fourth line of the <i>Aeneid</i>, <i>saevae memorem Iunonis ob iram</i>, which one English translation renders “stern Juno’s sleepless wrath.” Word for word it runs “of cruel, unforgetting, of Juno, because of, anger,” because <i>saevae</i> agrees with <i>Iunonis</i> and <i>memorem</i> with <i>iram</i>, and the words of the two pairs are interwoven. The separation of words that belong together is called <strong>hyperbaton</strong> (Greek, “stepping over”), and Quintilian counts it among the figures.</p>
<p>The Latin poets used such separation constantly, and the reader must join the words by their endings, not by their positions. English can do this only to a small degree, because without endings the reader would not know which words belong together. So in reading Latin, the endings and the relations of agreement and government that we have studied are the only sure guide to the construction.</p>`,
  src: `Virgil, <i>Aeneid</i> I.4 (trans. T. C. Williams; the word-for-word gloss is ours); Quintilian, <i>Institutio oratoria</i> IX.4.26.` },

{ id: 'english-fixed',
  title: 'English order and ambiguity',
  body: `<p>English order is fixed because it carries the construction. The usual English order is subject, verb, object: “The dog bit the man.” Questions invert the subject and an auxiliary verb (“Did the dog bite the man?”), and a few other constructions change the order, but the basic pattern holds, and departures from it are noticed.</p>
<p>Because the order carries the construction, a word placed in the wrong position can attach itself to the wrong word. Quintilian notes that faulty order “leads to ambiguity” (<i>Institutio oratoria</i> IX.4.32), and we saw in Section I that English ambiguity often lies in the arrangement of words, and that moving a word such as “only” changes the sense. So in English, correct order is part of correct construction, not only a matter of style.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.4.32 (trans. Butler; checked against the Perseus text).`,
  qpTodo: `English order: why does exchanging subject and object change the meaning of an English sentence but not of a Latin one, and where does a misplaced phrase in a given sentence attach.` },

{ id: 'construing',
  title: 'Construing a Latin sentence',
  body: `<p>A beginner reading a Latin poet often rearranges the words in his head into an order that English would use, so as to see which word belongs with which. For many centuries grammarians taught students to read Latin in just this way, by <strong>construing</strong> it, that is, by putting its words into the natural order: first the subject with its adjectives, then the verb, then the object and the other words that depend on the verb. So the line we have seen, <i>saevae memorem Iunonis ob iram</i>, was construed <i>ob memorem iram saevae Iunonis</i>, “because of the unforgetting anger of cruel Juno.” The English word “construe” comes from Latin <i>cōnstruere</i>, the verb from which <i>cōnstrūctiō</i> is formed.</p>
<p>Construing does not change the meaning of the sentence; it makes the dependences visible by placing each word beside the word on which it depends. It is therefore an exercise in the analysis of construction, and it shows that the natural order is the order of the dependences that we have studied, whereas the artificial order of the author arranges them for emphasis, sound, and effect.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qpTodo: `Analysis: put a given short Latin sentence into the natural order (subject, verb, object), and say which words were separated in the author’s order.` },

{ id: 'typology-1',
  title: 'Languages classed by their order',
  body: `<p>The same statement is put in a different order in different languages. English says “The fox sees the hen,” with the verb between subject and object; Latin usually says <i>vulpēs gallīnam videt</i>, with the verb last; and Welsh puts the verb first. Modern linguists have compared the usual order of words in many languages. The American linguist Joseph Greenberg, in a study of about thirty languages published in 1963, classed them by the usual order of subject (S), verb (V), and object (O) in a statement. The three common orders are these:<br><strong>SVO</strong> (subject, verb, object), as in English and French;<br><strong>SOV</strong> (subject, object, verb), as in Latin in its usual order, in Japanese, and in Turkish;<br><strong>VSO</strong> (verb, subject, object), as in Classical Arabic, Biblical Hebrew, and Welsh.</p>
<p>So English and Latin stand at two points of this classification. English has a fixed SVO order; Latin has a usual SOV order, which its endings free it to change. We will return to this classification, and to what it shows about the relation of languages to one another, in Section XI.</p>`,
  src: `Greenberg, “Some Universals of Grammar” (1963), in paraphrase.`,
  qpTodo: `Typology: what is the usual order of subject, verb, and object in a given language or sentence (English, Latin, Japanese, Classical Arabic), and why can Latin depart from its usual order more freely than English.` },

{ id: 'typology-2',
  title: 'Facts that go together',
  body: `<p>English puts the verb before its object, as in “I read the book,” and it puts its prepositions before the noun, as in “in the house.” Japanese puts the verb after its object, as in <i>hon o yomu</i> (“book read,” that is, “I read the book”), and it puts its words of place after the noun, as in <i>ie ni</i> (“house in,” that is, “in the house”). The two facts are found together in many languages.</p>
<p>Greenberg found that the order of subject, verb, and object tends to go together with other facts of order in this way. Languages in which the verb comes before the object usually have prepositions, placed before the noun, as English “in the house.” Languages in which the verb comes after the object usually have <strong>postpositions</strong>, placed after the noun, as Japanese <i>ie ni</i>. He stated such regularities as “universals,” for example that languages whose usual order is VSO always have prepositions (Universal 3).</p>
<p>Latin is mixed: its usual order is SOV, but it has prepositions, and a few postpositions in fixed phrases such as <i>mēcum</i> (“with me”) and <i>honōris causā</i> (“for the sake of honor”). So the facts of order come in bundles, but the bundles are tendencies, not rules without exception. Whether these regularities show something common to all human languages is a question we will take up in Section XI.</p>`,
  src: `Greenberg, “Some Universals of Grammar” (1963), Universals 3–4, in paraphrase.` },

{ id: 'german-french',
  title: 'Order in German and French',
  body: `<p>German and French show two other ways in which order carries construction. In a German main clause the finite verb stands in the second place, whatever comes first: <i>Ich lese heute das Buch</i> (“I am reading the book today”) and <i>Heute lese ich das Buch</i> (“Today I am reading the book”). But in a dependent clause the finite verb goes to the end: <i>Ich weiß, dass er heute das Buch liest</i> (“I know that he is reading the book today”). So German order distinguishes main and dependent clauses.</p>
<p>French usually has SVO order like English, but a pronoun object stands before the verb: <i>Je vois le livre</i> (“I see the book”), but <i>Je le vois</i> (“I see it”). So the order in French depends on the part of speech of the object. In each language the order of words is a part of its grammar, and it must be learned as the endings of Latin must be learned.</p>`,
  src: `Duden, <i>Die Grammatik</i>; standard French grammars; both in paraphrase.` },

{ id: 'summary',
  title: 'What order does',
  body: `<p>We have seen that order does different work in different languages. In English it shows the construction, so a change of order is a change of meaning, and a word in the wrong place can cause ambiguity. In Latin the endings show the construction, so the order can give emphasis, separate words for effect, and follow the rhythm of the sentence, as Quintilian describes. In both languages the first and last positions are emphatic, and in both there is a natural order that follows the dependences of the words.</p>
<p>So the order of words is a part of construction, but not the whole of it. The relations of dependence, agreement, and government are the same whatever the order, and the natural order is the order in which those relations are easiest to see. The phrase, the clause, and the period, which are groups of words that act together as one part of the sentence, are studied in this section as well.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.4; Priscian, <i>Institutiones grammaticae</i> XVII.`,
  qpTodo: `Analysis: in a given English sentence and its Latin equivalent, compare how the construction is shown (by order in English, by endings in Latin), and which word each language emphasizes.` }

  ]
};
