/* VII.2 Figures of Words (schemata lexeos) [vii.schemata]
   Plan (ITEM-LIST.md): 13 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: Figures of Words
   (not yet written). One panel (zeugma-syllepsis) refers back to V.10.
   Overlap with Ars Rhetorica: examples are taken from Virgil, Ennius, Scripture, and English poets, not from Cicero, Gorgias,
   or Augustine, and the deck asks what each figure does to the arrangement of words, not to the hearer.
   Live material drawn on: DECKS.figures (figures; anaphora, polysyndeton, zeugma), DECKS.latfigs. Donatus's own examples
   are checked against his Latin (Holtz); Virgil in the Latin of Perseus and the translations of Williams and Rhoades. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['vii.schemata'] = {
  id: 'vii.schemata',
  title: 'Figures of Words (<i>schemata lexeos</i>)',
  sub: 'Repetition, omission, and arrangement used for effect',
  sources: `Donatus, <i>Ars maior</i> III.5; Quintilian, <i>Institutio oratoria</i> IX.3; Servius, commentary on Virgil; the Bible, King James Version.`,
  panels: [

{ id: 'what-schema',
  title: 'What is a figure of words?',
  body: `<p>We have seen that a figure gives language an arrangement other than the plain and ordinary one. When a speaker says “Never, never give up,” the word “never” is repeated although the construction needs it only once; when a sign says “Stop, look, listen,” the “and” that the construction would place before the last word is left out. In each case the figure lies in the arrangement of the words themselves. A <strong>figure of words</strong> (Greek <i>schēma lexeōs</i>) is an arrangement of the words themselves, by repetition, omission, or order, whereas a figure of thought, such as a feigned question or an address to someone absent, concerns the way the thought is presented, whatever the words. Donatus distinguishes the two kinds and assigns them to different arts: the figures of thought belong to the orators, the figures of words to the grammarians (<i>Ars maior</i> III.5).</p>
<p>Donatus names seventeen figures of words as the principal ones. They can be grouped by what they do to the words: some join or divide constructions, some repeat a word, some repeat a sound or an ending, and some add or omit connecting words. In each case the figure is recognized by comparing it with the plain arrangement from which it departs.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'prolepsis',
  title: 'Prolepsis',
  body: `<p>The sentence “The two brothers went their ways, the one to the city, the other to the sea” first names “the two brothers” as the subject of “went” and then distributes them: “the one … the other.” This figure is called <strong>prolepsis</strong> (Greek, “taking beforehand”), because it states a whole first and then divides it into its parts, each with its own construction. Strictly, “the one” and “the other” have no verb of their own; they depend on the verb of the whole.</p>
<p>Latin uses the same figure with <i>alter … alter</i> (“the one … the other”) and <i>aliī … aliī</i> (“some … others”): <i>duo frātrēs, alter in urbem, alter ad mare</i>. The figure is a departure from regular construction, because the parts are construed with a verb that belongs to the whole; but it is clear, because the whole has already been named.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'zeugma-syllepsis',
  title: 'Zeugma, hypozeuxis, and syllepsis',
  body: `<p>We studied zeugma and syllepsis in Section V as figures of construction. Donatus counts them among the figures of words. <strong>Zeugma</strong> closes several clauses with one word: “The king rules the city, the queen the harbor, and the sailor the ship.” <strong>Syllepsis</strong> construes one word with several that differ in gender or number, agreeing with only one: <i>hic illius arma, / hic currus fuit</i> (<i>Aeneid</i> I.16–17).</p>
<p>Donatus adds the opposite of zeugma, <strong>hypozeuxis</strong> (Greek, “yoking under”), in which each clause has its own verb: “The king rules the city, the queen governs the harbor, and the sailor commands the ship.” So zeugma and hypozeuxis are two ways of arranging the same thought, one with a single verb shared by every clause and one with a verb in each.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase; Virgil, <i>Aeneid</i> I.16–17.` },

{ id: 'anaphora-epanalepsis',
  title: 'Anaphora and epanalepsis',
  body: `<p>The Beatitudes begin each clause with the same word: “Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth” (Matthew 5:3–5). Each clause has the same construction, and the repeated word marks the parallel. The repetition of the same word at the beginning of several clauses or lines is called <strong>anaphora</strong> (Greek, “carrying back”).</p>
<p>Virgil describes two shepherds as <i>ambo florentes aetatibus, Arcades ambo</i>, “both in the flower of age, Arcadians both” (<i>Eclogues</i> VII.4), so that the line ends with the word with which it began. This figure, the repetition at the end of a line or clause of the word with which it began, is called <strong>epanalepsis</strong> (Greek, “taking up again”). Donatus’s example is <i>ante etiam sceptrum Dictaei regis et ante</i> (<i>Georgics</i> II.536), where <i>ante</i> (“before”) begins and ends the line. The repeated word encloses the line and so marks it as one unit.</p>`,
  src: `Matthew 5:3–5 (King James Version); Virgil, <i>Eclogues</i> VII.4 (trans. James Rhoades), <i>Georgics</i> II.536; Donatus, <i>Ars maior</i> III.5 (the Latin checked).` },

{ id: 'anadiplosis',
  title: 'Anadiplosis',
  body: `<p>In “He trusted his friends, friends who never failed him,” the second phrase begins with the word that ended the first. Repeating the last word of one clause or line at the beginning of the next, so that the second is linked to the first, is called <strong>anadiplosis</strong> (Greek, “doubling back”). Virgil writes <i>Pierides; vos haec facietis maxima Gallo— / Gallo, cuius amor …</i>, which is translated “to Gallus ye will magnify their worth, Gallus, for whom my love grows hour by hour” (<i>Eclogues</i> X.72–73). Donatus’s example is <i>sequitur pulcherrimus Astur, / Astur equo fidens</i> (<i>Aeneid</i> X.180–81), where the name <i>Astur</i> ends one line and begins the next.</p>
<p>The Gospel of John opens with a chain of such links: “In the beginning was the Word, and the Word was with God, and the Word was God” (John 1:1). Each clause takes up the last word of the one before it. When anadiplosis is repeated through several clauses, so that each rises from the last, the grammarians call the series a <strong>climax</strong> (Greek, “ladder”).</p>`,
  src: `Virgil, <i>Eclogues</i> X.72–73 (trans. James Rhoades), <i>Aeneid</i> X.180–81; John 1:1 (King James Version); Donatus, <i>Ars maior</i> III.5 (the Latin checked).` },

{ id: 'epizeuxis',
  title: 'Epizeuxis',
  body: `<p>Coleridge’s Ancient Mariner says, “Alone, alone, all, all alone, / Alone on a wide wide sea!” The words “alone,” “all,” and “wide” are each repeated immediately, with no other word between. This figure is called <strong>epizeuxis</strong> (Greek, “fastening together”). In the <i>Aeneid</i>, Nisus, seeing his friend about to be killed for what he himself has done, cries <i>Me me, adsum qui feci</i> (IX.427), which is translated “’T is I, ’t is I! … look on the man who slew them!” This is Donatus’s example.</p>
<p>So we have seen four figures of repetition, which differ by the place of the repeated word: at the beginning of several clauses (anaphora), at the beginning and end of one (epanalepsis), at the end of one and the beginning of the next (anadiplosis), and immediately in succession (epizeuxis). In each, the repetition adds no new meaning to the construction, but it binds the words together and marks their arrangement.</p>`,
  src: `Virgil, <i>Aeneid</i> IX.427 (trans. T. C. Williams); Coleridge, <i>The Rime of the Ancient Mariner</i>, Part IV; Donatus, <i>Ars maior</i> III.5, in paraphrase.`,
  qpTodo: `Figures of repetition: which figure is shown in a given example (anaphora, epanalepsis, anadiplosis, epizeuxis), judged by the place of the repeated word.` },

{ id: 'paronomasia',
  title: 'Paronomasia',
  body: `<p>Hamlet’s first words in the play are “A little more than kin, and less than kind” (<i>Hamlet</i> I.2), where “kin” and “kind” are alike in sound but differ in meaning. Placing together words that are alike in sound but different in meaning is called <strong>paronomasia</strong> (Greek, “naming beside”). In the Gospel, Christ says to Simon, “Thou art Peter, and upon this rock I will build my church” (Matthew 16:18); in the Greek the name <i>Petros</i> and the word <i>petra</i> (“rock”) are alike in sound.</p>
<p>Paronomasia is related to homonymy, which we studied in Section III, but it does not use one word in two senses; it places two different words side by side because they sound alike. The modern English term for a play on words is a <strong>pun</strong>, and paronomasia is the classical name for the figure.</p>`,
  src: `Matthew 16:18 (King James Version); Shakespeare, <i>Hamlet</i> I.2; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'paromoeon',
  title: 'Paromoeon and schesis onomaton',
  body: `<p>Shakespeare’s Ariel sings, “Full fathom five thy father lies” (<i>The Tempest</i> I.2), and four of its six words begin with the same sound. Beginning several words with the same letter or sound is called <strong>paromoeon</strong> (Greek, “made alike”); in English it is usually called <strong>alliteration</strong>. Donatus’s example (he calls the figure <i>parhomoeon</i>) is a line of Ennius, addressed to the Sabine king Titus Tatius, in which every word begins with <i>t</i>: <i>o Tite tute Tati tibi tanta tyranne tulisti</i>.</p>
<p>In “sun and moon, wind and wave, rock and tree,” nouns are set side by side without any verb. A series of nouns, often each with its adjective, set side by side without verbs or conjunctions is called <strong>schesis onomaton</strong> (Greek, “a holding of nouns”). Both figures arrange words for their sound or their accumulation rather than for any new construction, and both are common in poetry.</p>`,
  src: `Ennius, <i>Annales</i> 104 Skutsch (checked against the Tesserae text), as quoted by Donatus, <i>Ars maior</i> III.5; Shakespeare, <i>The Tempest</i> I.2.` },

{ id: 'endings',
  title: 'Homoeoptoton and homoeoteleuton',
  body: `<p>The proverb “A friend in need is a friend indeed” ends its two halves with the same sound. The saying attributed to Julius Caesar after a swift victory, <i>VENI VIDI VICI</i>, “I came, I saw, I conquered,” which Suetonius says was carried as an inscription in his Pontic triumph (<i>Julius</i> 37), has three verbs with the same ending and nearly the same sound. Two figures of this kind are distinguished. <strong>Homoeoptoton</strong> (Greek, “alike in case”) places together several words in the same case, so that their endings correspond. <strong>Homoeoteleuton</strong> (Greek, “alike in ending”) places together words or clauses that end in the same sound, whether or not they are in the same case.</p>
<p>These figures are especially natural in Latin, whose endings make many words alike in sound. In English, where few words have endings, the corresponding figure is rhyme, and it appears in prose chiefly in proverbs. The grammarian notes that these figures depend on the accidents of the words, case and ending, which we studied in Section III.</p>`,
  src: `Suetonius, <i>Divus Julius</i> 37 (the Latin as Rolfe prints it; trans. J. C. Rolfe and A. Thomson agree); Donatus, <i>Ars maior</i> III.5.`,
  qpTodo: `Figures of sound and ending: which figure is shown in a given example (paronomasia, paromoeon, homoeoteleuton), and what in the words produces it.` },

{ id: 'polyptoton',
  title: 'Polyptoton',
  body: `<p>Shakespeare writes, “Love is not love / Which alters when it alteration finds” (Sonnet 116), where “alters” and “alteration” are forms of one word. Repeating the same word in different cases or forms is called <strong>polyptoton</strong> (Greek, “many cases”). Dido, cursing Aeneas and his descendants, prays for war between their peoples: <i>Litora litoribus contraria, fluctibus undas / imprecor, arma armis</i> (<i>Aeneid</i> IV.628–29), which is translated “My dying curse arrays shore against shore and the opposing seas in shock of arms with arms.” In the Latin, <i>litora</i> and <i>litoribus</i> (“shores”), and <i>arma</i> and <i>armis</i> (“arms”), are the same words in different cases. This is Donatus’s example.</p>
<p>English, with few case endings, uses polyptoton with different forms of a word, as in Shakespeare’s line, whereas Latin can repeat the same word in different cases. Polyptoton shows the accidents of a word at work: the same word, in different cases or forms, takes different places in the construction.</p>`,
  src: `Virgil, <i>Aeneid</i> IV.628–29 (trans. T. C. Williams); Shakespeare, Sonnet 116; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'hirmos',
  title: 'Hirmos',
  body: `<p>Milton’s <i>Paradise Lost</i> opens with a sentence whose verb, “Sing,” does not come until the sixth line, after the whole subject of the poem has been named. A sentence of this kind is called <strong>hirmos</strong> (Greek, “a series,” “a chain”), that is, a long sentence whose sense is carried through many members to the end without a break. Donatus’s example is Anchises’ account of the world in the sixth book of the <i>Aeneid</i>, which begins, as Donatus quotes it, <i>principio caelum ac terras camposque liquentes / lucentemque globum lunae Titaniaque astra / spiritus intus alit</i> (VI.724–26). The subjects of the sentence are named one after another, and the verb <i>alit</i> (“nourishes”) does not come until the third line; the translation keeps the order: “Know first that heaven and earth and ocean’s plain, / The moon’s bright orb, and stars of Titan birth / Are nourished by one Life.”</p>
<p>Hirmos is related to the period, which we studied in Section V, but it is less strictly divided into members. Its effect on the construction is that the subject and the many words that depend on it must be held in mind until the verb completes them, as in a period whose protasis is very long.</p>`,
  src: `Virgil, <i>Aeneid</i> VI.724–26 (trans. T. C. Williams); Donatus, <i>Ars maior</i> III.5.` },

{ id: 'conjunctions',
  title: 'Polysyndeton and asyndeton',
  body: `<p>“And the rain descended, and the floods came, and the winds blew, and beat upon that house” (Matthew 7:25) joins every member with “and,” whereas “I came, I saw, I conquered” uses no conjunction at all. The plain construction would use one conjunction before the last member: “the rain, the floods, and the winds.” So two figures concern the conjunctions that join a series. <strong>Polysyndeton</strong> (Greek, “many joinings”) uses more conjunctions than are needed, and <strong>asyndeton</strong> (Greek, “unjoined”; Donatus calls it <i>dialyton</i>) omits the conjunctions altogether.</p>
<p>Latin uses both. Donatus cites Virgil’s list of the Greeks who came out of the wooden horse, <i>Acamasque Thoasque / Pelidesque Neoptolemus</i> (<i>Aeneid</i> II.262–63, as Donatus quotes it), where <i>-que</i> (“and”) is attached to name after name, as an example of polysyndeton. His example of asyndeton is Dido’s command <i>ite, / ferte citi flammas, date tela, impellite remos</i> (<i>Aeneid</i> IV.593–94, as Donatus quotes it), where four commands follow one another with no conjunction; <i>veni, vidi, vici</i> is another. So these figures are recognized by comparing the number of conjunctions with the number that the construction requires.</p>`,
  src: `Virgil, <i>Aeneid</i> II.262–63, IV.593–94 (Donatus’s form); Matthew 7:25 (King James Version); Donatus, <i>Ars maior</i> III.5, in paraphrase.`,
  qpTodo: `Polysyndeton and asyndeton: does a given series have more or fewer conjunctions than its construction requires, and which figure is it.` },

{ id: 'what-they-do',
  title: 'What the figures of words do to construction',
  body: `<p>The figures of words can be classified by what they do to the plain construction. Zeugma and asyndeton omit words that the construction would supply; polysyndeton and the figures of repetition add words that the construction does not need; prolepsis and syllepsis change the regular agreement; and hyperbaton and hirmos change the order. Quintilian sums up the figures of words in the same way, as those “which consist in change, addition, omission, and the order of words” (<i>Institutio oratoria</i> IX.3.26–27).</p>
<p>So each figure of words is a departure from the plain construction, and each can be understood only by one who knows the plain construction. That is why the figures are studied after the rules of construction, and why the grammarian explains a figure by restoring the plain form and showing how the author has departed from it. The tropes, which change not the arrangement of words but their signification, are the other subject of this section.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.3.26–27 (trans. Butler; checked against the Perseus text).` }

  ]
};
