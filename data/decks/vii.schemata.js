/* VII.2 Figures of Words (schemata lexeos) [vii.schemata]
   Plan (ITEM-LIST.md): 13 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: Figures of Words
   (not yet written). One panel (zeugma-syllepsis) refers back to V.10.
   Overlap with Ars Rhetorica: examples are taken from Virgil, Ennius, Scripture, and English poets, not from Cicero, Gorgias,
   or Augustine, and the deck asks what each figure does to the arrangement of words, not to the hearer.
   Live material drawn on: DECKS.figures (figures; anaphora, polysyndeton, zeugma), DECKS.latfigs. Donatus's own examples
   are given where they are well attested; each is marked to verify in the report. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['vii.schemata'] = {
  id: 'vii.schemata',
  title: 'Figures of Words (<i>schemata lexeos</i>)',
  sub: 'Repetition, omission, and arrangement used for effect',
  sources: `Donatus, <i>Ars maior</i> III.5; Quintilian, <i>Institutio oratoria</i> IX.3; Servius, commentary on Virgil.`,
  panels: [

{ id: 'what-schema',
  title: 'What is a figure of words?',
  body: `<p>We have seen that a figure gives language an arrangement other than the plain and ordinary one. Donatus distinguishes figures of words from figures of thought, and assigns them to different arts: the figures of thought belong to the orators, the figures of words to the grammarians (<i>Ars maior</i> III.5, in paraphrase). A <strong>figure of words</strong> (Greek <i>schēma lexeōs</i>) is an arrangement of the words themselves, by repetition, omission, or order; a figure of thought, such as a feigned question or an address to someone absent, concerns the way the thought is presented, whatever the words.</p>
<p>Donatus names seventeen figures of words as the principal ones. They can be grouped by what they do to the words: some join or divide constructions, some repeat a word, some repeat a sound or an ending, and some add or omit connecting words. In each case the figure is recognized by comparing it with the plain arrangement from which it departs.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'prolepsis',
  title: 'Prolepsis',
  body: `<p><strong>Prolepsis</strong> (Greek, “taking beforehand”) states a whole first and then divides it into its parts, each with its own construction. “The two brothers went their ways, the one to the city, the other to the sea” first names “the two brothers” as the subject of “went” and then distributes them: “the one … the other.” Strictly, “the one” and “the other” have no verb of their own; they depend on the verb of the whole.</p>
<p>Latin uses the same figure with <i>alter … alter</i> (“the one … the other”) and <i>aliī … aliī</i> (“some … others”): <i>duo frātrēs, alter in urbem, alter ad mare</i>. The figure is a departure from regular construction, because the parts are construed with a verb that belongs to the whole; but it is clear, because the whole has already been named.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'zeugma-syllepsis',
  title: 'Zeugma, hypozeuxis, and syllepsis',
  body: `<p>We studied zeugma and syllepsis in Section V as figures of construction. Donatus counts them among the figures of words. <strong>Zeugma</strong> closes several clauses with one word: “The king rules the city, the queen the harbor, and the sailor the ship.” <strong>Syllepsis</strong> construes one word with several that differ in gender or number, agreeing with only one: <i>hīc illius arma, hīc currus fuit</i> (<i>Aeneid</i> I.16–17).</p>
<p>Donatus adds the opposite of zeugma, <strong>hypozeuxis</strong> (Greek, “yoking under”), in which each clause has its own verb: “The king rules the city, the queen governs the harbor, and the sailor commands the ship.” So zeugma and hypozeuxis are two ways of arranging the same thought, one with a single verb shared by every clause and one with a verb in each.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase; Virgil, <i>Aeneid</i> I.16–17.` },

{ id: 'anaphora-epanalepsis',
  title: 'Anaphora and epanalepsis',
  body: `<p><strong>Anaphora</strong> (Greek, “carrying back”) repeats the same word at the beginning of several clauses or lines. The Beatitudes are built on it: “Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth” (Matthew 5:3–5). Each clause has the same construction, and the repeated word marks the parallel.</p>
<p><strong>Epanalepsis</strong> (Greek, “taking up again”) repeats at the end of a line or clause the word with which it began. Virgil describes two shepherds as <i>ambō flōrentēs aetātibus, Arcades ambō</i>, “both in the flower of their age, Arcadians both” (<i>Eclogues</i> VII.4). The repeated word encloses the line and so marks it as one unit.</p>`,
  src: `Matthew 5:3–5 (King James Version); Virgil, <i>Eclogues</i> VII.4; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'anadiplosis',
  title: 'Anadiplosis',
  body: `<p><strong>Anadiplosis</strong> (Greek, “doubling back”) repeats the last word of one clause or line at the beginning of the next, so that the second is linked to the first. Virgil writes <i>Pīerides, vōs haec faciētis maxima Gallō, / Gallō, cuius amor …</i>, “Muses, you will make these things most precious to Gallus, Gallus, whose love …” (<i>Eclogues</i> X.72–73).</p>
<p>The Gospel of John opens with a chain of such links: “In the beginning was the Word, and the Word was with God, and the Word was God” (John 1:1). Each clause takes up the last word of the one before it. When anadiplosis is repeated through several clauses, so that each rises from the last, the grammarians call the series a <strong>climax</strong> (Greek, “ladder”).</p>`,
  src: `Virgil, <i>Eclogues</i> X.72–73; John 1:1 (King James Version); Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'epizeuxis',
  title: 'Epizeuxis',
  body: `<p><strong>Epizeuxis</strong> (Greek, “fastening together”) repeats the same word immediately, with no other word between. In the <i>Aeneid</i>, Nisus, seeing his friend about to be killed for what he himself has done, cries <i>Mē, mē, adsum quī fēcī</i>, “Me, me! here am I who did it” (IX.427). Coleridge’s Ancient Mariner says, “Alone, alone, all, all alone, / Alone on a wide wide sea!”</p>
<p>So we have seen four figures of repetition, which differ by the place of the repeated word: at the beginning of several clauses (anaphora), at the beginning and end of one (epanalepsis), at the end of one and the beginning of the next (anadiplosis), and immediately in succession (epizeuxis). In each, the repetition adds no new meaning to the construction, but it binds the words together and marks their arrangement.</p>`,
  src: `Virgil, <i>Aeneid</i> IX.427; Coleridge, <i>The Rime of the Ancient Mariner</i>, Part IV; Donatus, <i>Ars maior</i> III.5, in paraphrase.`,
  qpTodo: `Figures of repetition: which figure is shown in a given example (anaphora, epanalepsis, anadiplosis, epizeuxis), judged by the place of the repeated word.` },

{ id: 'paronomasia',
  title: 'Paronomasia',
  body: `<p><strong>Paronomasia</strong> (Greek, “naming beside”) places together words that are alike in sound but different in meaning. In the Gospel, Christ says to Simon, “Thou art Peter, and upon this rock I will build my church” (Matthew 16:18); in the Greek the name <i>Petros</i> and the word <i>petra</i> (“rock”) are alike in sound. Hamlet’s first words in the play use it: “A little more than kin, and less than kind” (<i>Hamlet</i> I.2), where “kin” and “kind” are alike in sound but differ in meaning.</p>
<p>Paronomasia is related to homonymy, which we studied in Section III, but it does not use one word in two senses; it places two different words side by side because they sound alike. The modern English term for a play on words is a <strong>pun</strong>, and paronomasia is the classical name for the figure.</p>`,
  src: `Matthew 16:18 (King James Version); Shakespeare, <i>Hamlet</i> I.2; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'paromoeon',
  title: 'Paromoeon and schesis onomaton',
  body: `<p><strong>Paromoeon</strong> (Greek, “made alike”) begins several words with the same letter or sound; in English it is usually called <strong>alliteration</strong>. Donatus’s example is a line of Ennius in which nearly every word begins with <i>t</i>: <i>Ō Tite, tūte, Tatī, tibi tanta, tyranne, tulistī</i>, “O Titus Tatius, tyrant, you brought these great things upon yourself.” Shakespeare’s Ariel sings, “Full fathom five thy father lies” (<i>The Tempest</i> I.2).</p>
<p><strong>Schesis onomaton</strong> (Greek, “a holding of nouns”) is a series of nouns, often each with its adjective, set side by side without verbs or conjunctions: “sun and moon, wind and wave, rock and tree.” Both figures arrange words for their sound or their accumulation rather than for any new construction, and both are common in poetry.</p>`,
  src: `Ennius, <i>Annales</i> (quoted by Donatus, <i>Ars maior</i> III.5; the English is a plain rendering, to be checked or replaced); Shakespeare, <i>The Tempest</i> I.2.` },

{ id: 'endings',
  title: 'Homoeoptoton and homoeoteleuton',
  body: `<p><strong>Homoeoptoton</strong> (Greek, “alike in case”) places together several words in the same case, so that their endings correspond. <strong>Homoeoteleuton</strong> (Greek, “alike in ending”) places together words or clauses that end in the same sound, whether or not they are in the same case. The saying attributed to Julius Caesar after a swift victory, <i>vēnī, vīdī, vīcī</i>, “I came, I saw, I conquered” (Suetonius, <i>Julius</i> 37), has three verbs with the same ending and nearly the same sound.</p>
<p>These figures are especially natural in Latin, whose endings make many words alike in sound. In English, where few words have endings, the corresponding figure is rhyme, and it appears in prose chiefly in proverbs: “A friend in need is a friend indeed.” The grammarian notes that these figures depend on the accidents of the words, case and ending, which we studied in Section III.</p>`,
  src: `Suetonius, <i>Divus Julius</i> 37; Donatus, <i>Ars maior</i> III.5, in paraphrase.`,
  qpTodo: `Figures of sound and ending: which figure is shown in a given example (paronomasia, paromoeon, homoeoteleuton), and what in the words produces it.` },

{ id: 'polyptoton',
  title: 'Polyptoton',
  body: `<p><strong>Polyptoton</strong> (Greek, “many cases”) repeats the same word in different cases or forms. Dido, cursing Aeneas and his descendants, prays for war between their peoples: <i>lītora lītoribus contrāria, fluctibus undās / imprecor, arma armīs</i>, “shores against shores, waves against waves, I pray, arms against arms” (<i>Aeneid</i> IV.628–29), where <i>lītora</i> and <i>lītoribus</i>, <i>arma</i> and <i>armīs</i>, are the same words in different cases.</p>
<p>English, with few case endings, uses polyptoton with different forms of a word: Shakespeare writes, “Love is not love / Which alters when it alteration finds” (Sonnet 116), where “alters” and “alteration” are forms of one word. Polyptoton shows the accidents of a word at work: the same word, in different cases or forms, takes different places in the construction.</p>`,
  src: `Virgil, <i>Aeneid</i> IV.628–29; Shakespeare, Sonnet 116; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'hirmos',
  title: 'Hirmos',
  body: `<p><strong>Hirmos</strong> (Greek, “a series,” “a chain”) is a long sentence whose sense is carried through many members to the end without a break. Donatus’s example is Anchises’ account of the world in the sixth book of the <i>Aeneid</i>, which begins <i>Prīncipiō caelum ac terrās campōsque liquentēs</i>, “In the beginning, the heaven and the lands and the watery plains,” and continues through several lines before its verb (VI.724–27).</p>
<p>Hirmos is related to the period, which we studied in Section V, but it is less strictly divided into members. Its effect on the construction is that the subject and the many words that depend on it must be held in mind until the verb completes them, as in a period whose protasis is very long.</p>`,
  src: `Virgil, <i>Aeneid</i> VI.724–27; Donatus, <i>Ars maior</i> III.5, in paraphrase.` },

{ id: 'conjunctions',
  title: 'Polysyndeton and asyndeton',
  body: `<p>Two figures concern the conjunctions that join a series. <strong>Polysyndeton</strong> (Greek, “many joinings”) uses more conjunctions than are needed: Donatus cites Virgil’s list of the Greeks who came out of the wooden horse, <i>Acamāsque Thoāsque Pēlīdēsque Neoptolemusque</i>, where <i>-que</i> (“and”) is attached to every name (in his form of <i>Aeneid</i> II.262–63). <strong>Asyndeton</strong> (Greek, “unjoined”; Donatus calls it <i>dialyton</i>) omits the conjunctions altogether: <i>vēnī, vīdī, vīcī</i>.</p>
<p>English uses both. “And the rain descended, and the floods came, and the winds blew, and beat upon that house” (Matthew 7:25) is polysyndeton; “I came, I saw, I conquered” is asyndeton. The plain construction would use one conjunction before the last member: “the rain, the floods, and the winds.” So these figures are recognized by comparing the number of conjunctions with the number that the construction requires.</p>`,
  src: `Virgil, <i>Aeneid</i> II.262–63 (Donatus’s form); Matthew 7:25 (King James Version); Donatus, <i>Ars maior</i> III.5, in paraphrase.`,
  qpTodo: `Polysyndeton and asyndeton: does a given series have more or fewer conjunctions than its construction requires, and which figure is it.` },

{ id: 'what-they-do',
  title: 'What the figures of words do to construction',
  body: `<p>Quintilian sums up the figures of words as those “which consist in change, addition, omission, and the order of words” (<i>Institutio oratoria</i> IX.3.26–27). The grammarian can classify Donatus’s figures in the same way. Zeugma and asyndeton omit words that the construction would supply; polysyndeton and the figures of repetition add words that the construction does not need; prolepsis and syllepsis change the regular agreement; and hyperbaton and hirmos change the order.</p>
<p>So each figure of words is a departure from the plain construction, and each can be understood only by one who knows the plain construction. That is why the figures are studied after the rules of construction, and why the grammarian explains a figure by restoring the plain form and showing how the author has departed from it. We turn now to the tropes, which change not the arrangement of words but their signification.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> IX.3.26–27 (trans. Butler; checked against the Perseus text).` }

  ]
};
