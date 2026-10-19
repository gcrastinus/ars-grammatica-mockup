/* VIII.2 Grammatical Equivalents of Logical Forms [viii.equivalents]
   Plan (ITEM-LIST.md): 14 panels, 4 question points (placeholders: qpTodo; to be written). The deck ends with four panels
   (ug-1 to ug-4) on what modern universal grammar shares with the scholastic analysis and where it differs, leading to XI.2.
   Live material drawn on: DECKS.figura (the figure of speech), DECKS.service, DECKS.congtruth, DECKS.ug (two universal
   grammars). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['viii.equivalents'] = {
  id: 'viii.equivalents',
  title: 'Grammatical Equivalents of Logical Forms',
  sub: 'How subject, copula, and predicate, quantity, and negation appear in grammar',
  sources: `Aristotle, <i>De interpretatione</i> 5–7 and 10; Peter of Spain, <i>Tractatus</i> I; Arnauld and Lancelot, <i>Grammaire générale et raisonnée</i> (1660); Noam Chomsky, <i>Cartesian Linguistics</i> (1966).`,
  panels: [

{ id: 'statement',
  title: 'The statement in grammar and in logic',
  body: `<p>“Every swan is white” is a sentence to the grammarian and a statement to the logician. We saw in Section I that only the statement is true or false, and in Section V that every sentence has a grammatical subject and predicate. Logic studies the statement (Latin <i>enūntiātiō</i>, also called the proposition) as the bearer of truth, and analyzes it into a subject term, a predicate term, and the copula that joins them. Grammar studies the same sentence as a construction of words.</p>
<p>The logical analysis and the grammatical analysis often coincide, but not always. In “Every swan is white” both find the same subject and predicate, but grammar takes “every swan” as the subject and logic takes “swan” as the subject term, with “every” as a sign of quantity. The question is how the elements of the logical form (the copula, quantity, quality, and the compound statement) appear in the grammar of English and Latin, beginning with the copula.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 4–5; Peter of Spain, <i>Tractatus</i> I; both in paraphrase.` },

{ id: 'copula',
  title: 'The copula',
  body: `<p>In “Honey is sweet” the word “is” says nothing about honey by itself and nothing about sweetness by itself; it joins the two, so that something is said of honey. The logicians call this word the <strong>copula</strong> (Latin, “link”). Aristotle observes that in such a statement “is” is added as a third element joining the subject and the predicate (<i>De interpretatione</i> 10, 19b19–22). In grammar, “is” is a verb, and in “Honey is sweet” it is a linking verb with a predicate adjective, as we saw in Section V.</p>
<p>The logicians analyzed every statement into subject, copula, and predicate, even when the grammar has no separate copula. So “The child sleeps” is analyzed as “The child is sleeping,” with “is” as the copula and “sleeping” as the predicate. Latin often omits the copula entirely, as in Cicero’s <i>omnia praeclara, rara</i> (“everything splendid is rare”), which we saw as an example of ellipsis. So the copula is a constant element of the logical form, whereas in the grammar it may be a separate word, part of the verb, or omitted.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 10, 19b19–22 (Edghill for reference), in paraphrase; Peter of Spain, <i>Tractatus</i> I; Cicero, <i>Laelius</i> 79 (trans. W. A. Falconer).`,
  qpTodo: `The copula: what are the subject, copula, and predicate of a given statement in its logical form (“The bell rings,” “Gold is heavy,” <i>vīta brevis</i>), and where is the copula in the grammar.` },

{ id: 'quantity',
  title: 'Quantity',
  body: `<p>“Every metal conducts heat” speaks of all metals, “Some metal is liquid” of some, “This metal is iron” of one, and “Metal conducts heat” does not say of how many. How much of its subject a statement speaks of is called its <strong>quantity</strong>. Aristotle distinguishes statements in this way: a statement about a universal may be made universally, as “Every man is white,” or not universally, as “Man is white” (<i>De interpretatione</i> 7). The logicians named four quantities:<br><strong>universal</strong>, with the sign “every” or “no”: “Every metal conducts heat”;<br><strong>particular</strong>, with the sign “some”: “Some metal is liquid”;<br><strong>singular</strong>, with a proper name or a demonstrative: “This metal is iron”;<br><strong>indefinite</strong>, with a common noun and no sign: “Metal conducts heat.”</p>
<p>In grammar, the signs of quantity are syncategorematic words, adjectives in form: “every,” “all,” “some,” “no,” and Latin <i>omnis</i>, <i>aliquis</i>, <i>quīdam</i>, <i>nūllus</i>. So the logical quantity of a statement is shown by a part of speech that grammar classes among the adjectives, and the study of supposition shows that these words decide how the term stands. A statement differs also in whether it affirms or denies.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 7 (Edghill for reference); Peter of Spain, <i>Tractatus</i> I; both in paraphrase.` },

{ id: 'quality',
  title: 'Quality and the place of negation',
  body: `<p>“The lamp is lit” says that something is so, and “The lamp is not lit” says that it is not so. A statement is therefore <strong>affirmative</strong> or <strong>negative</strong>, and this is called its quality. Aristotle says that every affirmation has an opposite negation (<i>De interpretatione</i> 6). In grammar, negation is expressed by an adverb (“not,” Latin <i>nōn</i>) or by a negative adjective or pronoun (“no,” “none,” Latin <i>nūllus</i>, <i>nēmō</i>).</p>
<p>The place of the negation decides what is denied. “Not every song is sad” denies the universal statement and means that some song is not sad; “Every song is not sad,” strictly read, means that no song is sad. English often uses the second form with the sense of the first, as in the proverb “All that glitters is not gold,” which means that not all that glitters is gold. So the grammar of negation can be ambiguous where the logic is not, and the reader must decide from the sense which negation is meant. Quantity and quality, taken together, give the forms of the simple statement.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 6–7 (Edghill for reference), in paraphrase.`,
  qpTodo: `Negation: what does a given statement deny (“Not every road is paved”; “Every road is not paved”; “All is not lost”), and how does the place of the negation decide it.` },

{ id: 'four-forms',
  title: 'The four forms of the categorical statement',
  body: `<p>Quantity and quality together give four forms of the categorical statement, which the medieval logicians named with the vowels A, E, I, and O:<br><strong>A</strong>, universal affirmative: “Every tree has roots,” <i>omnis arbor rādīcēs habet</i>;<br><strong>E</strong>, universal negative: “No tree is an animal,” <i>nūlla arbor est animal</i>;<br><strong>I</strong>, particular affirmative: “Some tree is tall,” <i>aliqua arbor est alta</i>;<br><strong>O</strong>, particular negative: “Some tree is not tall,” <i>aliqua arbor nōn est alta</i>.</p>
<p>The letters come from the Latin verbs <i>affirmō</i> (“I affirm”) and <i>negō</i> (“I deny”): A and I are the first two vowels of <i>affirmō</i>, and E and O the vowels of <i>negō</i>. In each form the grammar is the same, a subject with a sign of quantity, a copula, and a predicate, and only the signs and the negation change. A statement with no sign of quantity at all raises a further question.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> I (Copenhaver for reference), in paraphrase.` },

{ id: 'indefinite',
  title: 'Indefinite and generic statements',
  body: `<p>“Man is an animal” is true of every man, but “A man is running” is true if one man runs, and neither sentence has a sign of quantity. The indefinite statement, with no sign of quantity, raised a difficulty for the logicians, because its quantity is not shown by the grammar. In the logicians’ standard examples, Latin <i>homō est animal</i> (“man is an animal”) is true of every man, whereas <i>homō currit</i> (“a man is running” or “man runs”) is true if some man is running. The logicians treated the indefinite statement as equivalent to the particular one, but they recognized that in some matters it is understood universally.</p>
<p>English has several forms that do the work of the Latin indefinite statement: “Man is an animal,” “A man is an animal,” “Men are animals,” and “The whale is a mammal.” Modern grammars call such statements <strong>generic</strong>, because they speak of a kind rather than of individuals. So the grammar of each language offers different means for speaking of kinds, and the logician must interpret them. Statements may also be joined into larger ones.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> I, in paraphrase.` },

{ id: 'hypothetical',
  title: 'Compound statements',
  body: `<p>“If the river rises, the bridge will close” is made of two statements, “the river rises” and “the bridge will close,” joined by “if.” A statement made of two or more statements joined by a conjunction is called <strong>hypothetical</strong> (Greek, “placed under”) or compound. Peter of Spain names three kinds: the <strong>conditional</strong>, joined by “if” (“If a man is running, he is moving”); the <strong>conjunctive</strong>, joined by “and” (“Socrates is running and Plato is sitting”); and the <strong>disjunctive</strong>, joined by “or” (“Socrates is running or he is not running”) (<i>Tractatus</i> I).</p>
<p>In grammar, these are sentences of two clauses joined by a conjunction. We saw in Section III that Donatus classed the conjunctions by their power: copulative (“and”), disjunctive (“or”), and causal (“if”). The logician’s three kinds of compound statement correspond to these three powers. So the conjunctions of grammar are the connectives of logic, and the grammarian’s classification of them anticipates the logician’s use.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> I (Copenhaver for reference), in paraphrase.` },

{ id: 'figure-of-speech',
  title: 'The figure of speech',
  body: `<p>The argument “‘Nothing’ is a noun; every noun names a thing; therefore nothing is a thing” argues from the grammatical form to the thing. “Blindness” has the form of “sight,” but sight is a power and blindness the lack of a power. So the grammatical form of a sentence does not always show its logical form, and an argument that takes the one for the other is a fallacy.</p>
<p>Aristotle names this fallacy the <strong>figure of speech</strong> (<i>schēma tēs lexeōs</i>): what is not the same is expressed in the same form, as when a word that signifies a state has the form of a word that signifies an action (<i>Sophistical Refutations</i> 4). We saw this warning with the chimaera in Section III: a noun signifies by the mode of a stable thing, but it does not follow that every noun names a thing that exists. The grammar is a way of signifying, not a copy of the thing, and the logician must look through the form to what is signified.</p>`,
  src: `Aristotle, <i>Sophistical Refutations</i> 4 (Pickard-Cambridge for reference), in paraphrase.`,
  qpTodo: `The figure of speech: what is wrong with a given argument that takes the grammatical form for the thing (“‘Everyone’ is singular, so everyone is one person”; “Silence has a name, so silence is a sound”).` },

{ id: 'port-royal',
  title: 'The grammar of Port-Royal',
  body: `<p>In 1660 Antoine Arnauld and Claude Lancelot, of the abbey of Port-Royal near Paris, published the <i>Grammaire générale et raisonnée</i> (“general and rational grammar”). They held that grammar is founded on the operations of the mind: conceiving, judging, and reasoning, and that the principal sentence expresses a judgment, in which the mind joins a subject and a predicate. So they analyzed every sentence, as the logicians had, into subject, copula, and predicate, and held that “Peter lives” means “Peter is living.”</p>
<p>Their best-known example is the sentence “Invisible God created the visible world,” which they analyzed as containing three judgments: that God is invisible, that God created the world, and that the world is visible (<i>Grammaire générale</i> II.9). The adjectives and the relative clauses of a sentence, on this view, contain judgments implicitly, and the sentence as spoken is a shortened form of a combination of simpler judgments.</p>`,
  src: `Arnauld and Lancelot, <i>Grammaire générale et raisonnée</i> (1660), II.9 and II.13 (Rieux and Rollin for reference), in paraphrase.` },

{ id: 'relative',
  title: 'Port-Royal on the relative clause',
  body: `<p>“My sister, who teaches music, lives nearby” implies that the speaker has one sister, whereas “My sister who teaches music lives nearby” implies that he has more than one. In the first sentence the relative clause adds something about the sister; in the second it picks out which sister is meant. The Port-Royal grammarians and logicians distinguished these two kinds of relative clause. An <strong>explicative</strong> clause adds something true of the whole of what the noun signifies, without limiting it: “Man, who is mortal, …” speaks of every man. A <strong>restrictive</strong> (or determinative) clause limits the noun to some of what it signifies: “Men who are pious are charitable” speaks only of pious men.</p>
<p>English grammars keep this distinction as the difference between nonrestrictive and restrictive relative clauses, and mark it in writing with commas, as in the sentences about the sister. We saw in Section II that punctuation can decide the sense; here it decides the logical extent of the subject.</p>`,
  src: `Arnauld and Nicole, <i>La logique ou l’art de penser</i> (1662), Part I, chapter on complex terms, and Part II, chapter on incident propositions (I.7 and II.4 in the English translation of 1685, checked; the chapter numbers of the French editions not checked); Arnauld and Lancelot, <i>Grammaire générale</i> II.9; both in paraphrase.` },

{ id: 'ug-1',
  title: 'Chomsky and the Cartesian tradition',
  body: `<p>In the twentieth century the American linguist Noam Chomsky revived the idea of a universal grammar. In <i>Cartesian Linguistics</i> (1966) he claimed the Port-Royal grammar as a forerunner of his own theory, because it distinguished the sentence as spoken from the combination of judgments that underlies it. Chomsky called these the surface structure and the deep structure of a sentence, and he read the Port-Royal analysis of “Invisible God created the visible world” as an early account of the relation between them.</p>
<p>Chomsky’s universal grammar is a theory of the mind: he holds that a child does not hear enough speech to learn the grammar of a language by imitation alone, and that the structure common to all languages must therefore be part of the human mind from birth. Historians of linguistics have debated whether his reading of Port-Royal is accurate, but the comparison has renewed interest in the grammarians before the nineteenth century.</p>`,
  src: `Chomsky, <i>Cartesian Linguistics</i> (1966), in paraphrase.` },

{ id: 'ug-2',
  title: 'What the two universal grammars share',
  body: `<p>The scholastic account and Chomsky’s both hold that there is a grammar common to all languages. We saw Roger Bacon’s statement that grammar is one and the same in substance in all languages, though it varies in its accidents, and Boethius of Dacia held the same. Chomsky likewise holds that the variety of languages is, in an important sense, on the surface, and that beneath it there is a common structure.</p>
<p>Both accounts also hold that a science of this common structure is possible, and both deny that grammar is merely a list of local customs. In this they agree against the view, common in the early twentieth century, that each language is a separate system to be described only in its own terms. So the modern revival of universal grammar has brought the questions of the modists back into discussion.</p>`,
  src: `Roger Bacon, <i>Greek Grammar</i>; Boethius of Dacia, <i>Modi significandi</i>; Chomsky, <i>Cartesian Linguistics</i>; all in paraphrase.` },

{ id: 'ug-3',
  title: 'Where they differ',
  body: `<p>The two accounts ground the common structure in different places. For the scholastic account, the common structure comes from the things and from the mind’s understanding of them: the modes of signifying are taken from the modes of understanding, and these from the modes of being, as we saw in Section III. Because things and the understanding of them are the same for all, the grammar is the same in substance.</p>
<p>For Chomsky, the common structure belongs to the human mind as a biological endowment, a faculty of language, and it need not correspond to any structure in things. The scholastic account asks why the categories of grammar are these categories, and answers from being; Chomsky’s account asks what the mind must contain to learn any language, and answers from the mind alone. So the two universal grammars agree that languages share a common structure, but they disagree about what that structure is and where it comes from.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Chomsky, <i>Cartesian Linguistics</i>; both in paraphrase.` },

{ id: 'ug-4',
  title: 'The question for Section XI',
  body: `<p>Whether there is a grammar common to all languages is finally a question of fact as well as of principle, and it can be tested only by studying many languages. We saw in Section V that Greenberg compared the order of words in many languages and found regularities that hold for most of them. In Section XI we will study grammatical traditions other than the Greek and Latin one, and modern accounts of grammar, and ask how far the variety of languages supports the claim that grammar is one in substance.</p>
<p>The grammarian need not settle the question in order to study the grammar of English and Latin. But the question shows why the study of grammar is a liberal art: it asks not only how a language is used, but why the parts of speech, the accidents, and the constructions are what they are, and whether the answers hold for every language.</p>`,
  src: `Greenberg, “Some Universals of Grammar” (1963); Chomsky, <i>Cartesian Linguistics</i>; both in paraphrase.`,
  qpTodo: `Two universal grammars: what do the scholastic and the Chomskyan accounts share, where does each ground the common structure of languages, and what evidence would bear on the question.` }

  ]
};
