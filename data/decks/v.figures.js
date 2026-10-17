/* V.10 Figures of Construction [v.figures]
   Plan (ITEM-LIST.md): 9 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   One panel (donatus-words) notes that Donatus counts zeugma and syllepsis among the figures of words and refers ahead to VII.2.
   Live material drawn on: DECKS.figures (fault and license; figures; zeugma), DECKS.latfigs. Linacre's treatment of the
   figures (De emendata structura VI) is named but not yet checked. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.figures'] = {
  id: 'v.figures',
  title: 'Figures of Construction',
  sub: 'Ellipsis, zeugma, syllepsis, and the other departures from regular construction',
  sources: `Donatus, <i>Ars maior</i> III.5; Priscian, <i>Institutiones grammaticae</i> XVII; Thomas Linacre, <i>De emendata structura Latini sermonis</i> (1524), Book VI.`,
  panels: [

{ id: 'what-figure',
  title: 'What is a figure of construction?',
  body: `<p>We have studied the regular construction of the sentence: agreement, government, dependence, and the kinds of phrase and clause. But good authors sometimes depart from the regular construction, leaving out a word, joining words that do not strictly agree, or putting one form for another, and their departures are not errors. The grammarians call such a departure, made for a reason, a <strong>figure</strong> (Latin <i>figūra</i>, Greek <i>schēma</i>). A figure that concerns the construction of the sentence is called a <strong>figure of construction</strong>.</p>
<p>Donatus defines the solecism as an error in the construction of the parts of speech, made against the rule of the art of grammar, and adds: <i>soloecismus in prosa oratione, in poemate schema nominatur</i>, “in prose it is called a solecism, in a poem a figure” (<i>Ars maior</i> III.2). So the same arrangement of words may be an error or a figure, according to whether it is made by ignorance or for a reason that the authors accept. We will study the solecism in Section VI; here we study the departures that the grammarians allowed.</p>`,
  src: `Donatus, <i>Ars maior</i> III.2 (the Latin) and III.5.` },

{ id: 'ellipsis',
  title: 'Ellipsis',
  body: `<p><strong>Ellipsis</strong> (Greek, “a falling short”; the medieval grammarians wrote <i>eclipsis</i>) is the omission of a word that is needed for the construction but is easily understood from the context. Bacon writes, “Histories make men wise; poets witty; the mathematics subtile” (<i>Essays</i>, “Of Studies”), where “make men” is understood after “poets” and after “the mathematics.” Latin often omits the verb “to be”: Cicero writes <i>omnia praeclara, rara</i> (<i>Laelius</i> 79), which is rendered “everything splendid is rare,” where English must supply “is.” Donatus names this figure <i>eclipsis</i>, the lack of a word that the sentence requires, as in Virgil’s <i>haec secum</i> (“these things with herself”), where “she said” is lacking (<i>Ars maior</i> III.3).</p>
<p>Ellipsis is the most common of the figures of construction, and ordinary speech uses it constantly: “Where are you going?” “Home” means “I am going home.” The construction is complete in the mind of the hearer, because the omitted word is supplied from what has been said. So ellipsis does not make a sentence incomplete; it leaves to the hearer a word that the context already gives.</p>`,
  src: `Bacon, <i>Essays</i>, “Of Studies”; Cicero, <i>Laelius</i> 79 (trans. W. A. Falconer; the Latin and English checked against the Perseus text); Donatus, <i>Ars maior</i> III.3; Allen and Greenough, <i>New Latin Grammar</i> § 640.`,
  qpTodo: `Ellipsis: which word is omitted in a given sentence (“Histories make men wise; poets witty”; <i>omnia praeclara, rara</i>), and from where does the hearer supply it.` },

{ id: 'zeugma',
  title: 'Zeugma',
  body: `<p><strong>Zeugma</strong> (Greek, “a yoking”) is the figure in which one word, usually a verb, serves for several clauses or phrases, though it is expressed only once. “The king rules the city, the queen the harbor, and the sailor the ship” uses the verb “rules” once for three clauses. Donatus defines zeugma as one word closing several clauses that are fitly joined (<i>unius verbi conclusio diversis clausulis apte coniuncta</i>; <i>Ars maior</i> III.5).</p>
<p>Later grammarians also use the name for a harder kind of yoking, in which one word is joined to two others but fits only one of them strictly. English handbooks often use “zeugma” for a word that applies in different senses to two others, as in Alexander Pope’s “Or stain her Honour, or her new Brocade” (<i>The Rape of the Lock</i> II.107), where “stain” is used of honor in one sense and of a dress in another. In every case one word does the work of several.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase; Pope, <i>The Rape of the Lock</i> II.107.` },

{ id: 'syllepsis',
  title: 'Syllepsis',
  body: `<p><strong>Syllepsis</strong> (Greek, “a taking together”) is the figure in which one word is construed with several others that differ in gender, number, or person, and agrees with only one of them. Donatus’s example is from the <i>Aeneid</i>, where Virgil says of Juno’s city of Carthage <i>hic illius arma, / hic currus fuit</i>, “Here were her arms, her chariot” (I.16–17). In the Latin the singular <i>fuit</i> (“was”) agrees with <i>currus</i> (“chariot”) but is understood also with the plural <i>arma</i> (“arms”); the English translation has to use the plural “were” for both.</p>
<p>English shows syllepsis in sentences such as “Neither he nor they are coming,” where the plural “are” agrees with the nearer subject, “they,” and is understood also with “he.” We saw this as a rule of English agreement; the grammarians described it as a figure, because one form serves for words that would each require a different form.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5; Virgil, <i>Aeneid</i> I.16–17 (trans. T. C. Williams, checked against the Perseus text).`,
  qpTodo: `Syllepsis: in a given sentence (<i>hic illius arma, hic currus fuit</i>; “Neither he nor they are coming”), with which word does the verb agree, and with which is it understood.` },

{ id: 'donatus-words',
  title: 'Zeugma and syllepsis among the figures of words',
  body: `<p>Donatus does not have a separate class of figures of construction. He counts zeugma and syllepsis among the figures of words (<i>schēmata lexeōs</i>), together with figures of repetition and arrangement such as anaphora and polysyndeton (<i>Ars maior</i> III.5, in paraphrase). The later grammarians, especially in the Middle Ages and the Renaissance, gathered the figures that concern construction into a group of their own; Thomas Linacre, an English physician and grammarian, treats them in the last book of his <i>De emendata structura Latini sermonis</i> (1524).</p>
<p>So the same figures are studied in two places in this course: here, as departures from the rules of construction, and in Section VII, among the figures of words, where we will ask what they do to the arrangement of a passage. The division is one of viewpoint, not of things: zeugma is one figure, considered once as a construction and once as an arrangement.</p>`,
  src: `Donatus, <i>Ars maior</i> III.5, in paraphrase; Linacre, <i>De emendata structura</i> VI (the book number not verified).` },

{ id: 'sense-case',
  title: 'Agreement by the sense, and one case for another',
  body: `<p>We saw that a collective noun may take a plural verb when its members are thought of separately; the grammarians call this agreement by the sense, and later grammarians name it the figure <strong>synthesis</strong>. Another figure puts one case in place of another. In the <i>Aeneid</i> Dido offers the Trojans a share in Carthage with the words <i>urbem quam statuo vestra est</i> (I.573), which one translation renders “I build this city for your own.” In the Latin, <i>urbem</i> (“city”) is accusative, attracted into the case of the relative <i>quam</i> (“which”), although it is the subject of <i>est</i> (“is”) and should be nominative, <i>urbs</i>. Donatus gives this line as an example of one case put for another (<i>Ars maior</i> III.2). The grammarians call this <strong>antiptosis</strong> (Greek, “a case falling for another case”).</p>
<p>Such figures show that the authors sometimes let the construction follow the sense or the nearness of another word rather than the strict rule. The grammarian’s task is to recognize the figure, to explain the regular construction from which it departs, and to show the reason for the departure.</p>`,
  src: `Virgil, <i>Aeneid</i> I.573 (trans. T. C. Williams, checked against the Perseus text); Donatus, <i>Ars maior</i> III.2; Allen and Greenough, <i>New Latin Grammar</i> §§ 306, 317, in paraphrase.`,
  qpTodo: `Figures of agreement and case: what departure from regular construction is shown in a given example (<i>urbem quam statuo vestra est</i>; “The committee are agreed”), and what would the regular construction be.` },

{ id: 'order-figures',
  title: 'Figures of order',
  body: `<p>We saw that the separation of words that belong together is called hyperbaton, and that Quintilian counts it a figure. A narrower figure of order is <strong>anastrophe</strong> (Greek, “turning back”), in which a preposition is placed after its noun: Virgil writes <i>maria omnia circum</i> (<i>Aeneid</i> I.32), placing <i>circum</i> (“around”) after <i>maria omnia</i> (“all the seas”), for <i>circum maria omnia</i>; Donatus’s example is <i>Italiam contra</i> for <i>contra Italiam</i> (“opposite Italy”). Another is <strong>hysteron proteron</strong> (Greek, “the later earlier”), in which what happens later is said first. Aeneas urges his men <i>moriamur et in media arma ruamus</i> (<i>Aeneid</i> II.353), putting <i>moriamur</i> (“let us die”) before <i>ruamus</i> (“let us rush”), although the rush into the midst of the fighting must come before the death. Donatus counts both among the kinds of hyperbaton (<i>Ars maior</i> III.6).</p>
<p>English uses figures of order more sparingly, because its order carries the construction, but poetry often inverts the usual order: “Of Mans First Disobedience … Sing Heav’nly Muse” (Milton, <i>Paradise Lost</i> I.1–6, in the spelling of the 1674 edition) places the object long before its verb. In each case the regular order can be restored, and the figure is understood by comparison with it.</p>`,
  src: `Virgil, <i>Aeneid</i> I.32, II.353; Donatus, <i>Ars maior</i> III.6; Milton, <i>Paradise Lost</i> I.1–6; Allen and Greenough, <i>New Latin Grammar</i> § 640.`,
  qpTodo: `Analysis: in a given line of verse, find the figure of order (hyperbaton, anastrophe, hysteron proteron) and restore the regular order.` },

{ id: 'hendiadys',
  title: 'Hendiadys',
  body: `<p><strong>Hendiadys</strong> (Greek, “one through two”) expresses one idea by two nouns joined by “and,” instead of a noun and an adjective or a noun and a dependent noun. Virgil writes <i>pateris libamus et auro</i> (<i>Georgics</i> II.192), joining <i>pateris</i> (“bowls”) and <i>auro</i> (“gold”) by <i>et</i> (“and”). The sense is “from golden bowls,” and so the translation renders the phrase “We pour to heaven from bowls of gold.” English has examples in common phrases such as “nice and warm,” meaning “nicely warm,” and “sound and fury.”</p>
<p>Hendiadys changes the construction by making two words equal that are related as a word and its dependent. The reader who construes <i>pateris … et auro</i> as two separate things will misunderstand the line. So the figure must be recognized from the sense, since the grammar alone presents two coordinate nouns.</p>`,
  src: `Virgil, <i>Georgics</i> II.192 (trans. James Rhoades, checked against the Perseus text); Allen and Greenough, <i>New Latin Grammar</i> § 640.` },

{ id: 'figure-solecism',
  title: 'When is a departure a figure?',
  body: `<p>We have seen that the same departure from the rule may be a solecism or a figure. The grammarians judged by the criteria that we studied in the Preliminary section. A departure is a figure when it has a reason that the hearer can grasp, such as brevity, emphasis, the meter, or agreement with the sense, and when it is supported by the authority and usage of good authors. A departure is a solecism when it comes from ignorance of the rule and serves no purpose.</p>
<p>So the student who wishes to use a figure must first know the rule from which it departs, and the reader who meets one must recognize both the rule and the reason. This is why the figures are studied after the regular construction, and why Donatus places them after the errors of speech. In Section VI we turn to those errors: the barbarism, the solecism, and the changes of words allowed in verse.</p>`,
  src: `Donatus, <i>Ars maior</i> III; Quintilian, <i>Institutio oratoria</i> I.5 and IX.3, in paraphrase.`,
  qpTodo: `Analysis: in a given sentence that departs from regular construction, name the figure, give the regular construction, and say what reason makes it a figure rather than a solecism.` }

  ]
};
