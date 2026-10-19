/* III.13 The Conjunction [iii.conjunction]
   Plan (ITEM-LIST.md): 7 panels, 2 question points.
   Live material drawn on: DECKS.pos (the conjunction joins two extremes), DECKS.latpos. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.conjunction'] = {
  id: 'iii.conjunction',
  title: 'The Conjunction',
  sub: 'The conjunction and its accidents: power, figure, and order',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XVI; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'conjunction',
  title: 'The conjunction and its accidents',
  body: `<p>A conjunction may join single words, as in “salt and pepper,” or phrases, as in “in the house or in the garden,” or whole clauses, as in “She came, but he stayed.” We have seen that the conjunction joins and orders the thought, and that the modists explain it as signifying by the mode of joining two terms. Priscian defines it as an indeclinable part of speech that joins other parts of speech and shows their force or their order (<i>Institutiones grammaticae</i> XVI).</p>
<p>Donatus gives the conjunction three accidents (<i>Ars minor</i>):</p>
<p><strong>Power</strong> (<i>potestas</i>) is the kind of relation the conjunction signifies.<br><strong>Figure</strong> (<i>figura</i>) is whether it is simple or compound.<br><strong>Order</strong> (<i>ordo</i>) is its position in relation to the words it joins.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the conjunction (the Latin); Priscian, <i>Institutiones grammaticae</i> XVI, in paraphrase.` },

{ id: 'power',
  title: 'The power of conjunctions',
  body: `<p>“She sang and he played” simply joins two statements; “She will sing or he will play” offers a choice between them; “She will sing if he plays” makes one the condition of the other; and “He played; therefore she sang” draws the second from the first. Conjunctions differ, then, in the relation they signify, and Donatus calls this their power. He divides the conjunctions by their power into five kinds (<i>Ars minor</i>):</p>
<p><strong>copulative</strong>, which join, as <i>et</i>, <i>-que</i>, <i>atque</i> (“and”);<br><strong>disjunctive</strong>, which separate or offer a choice, as <i>aut</i>, <i>vel</i>, <i>-ve</i> (“or”) and <i>nec</i>, <i>neque</i> (“nor”);<br><strong>expletive</strong>, which fill out or strengthen the sense, as <i>quidem</i> (“indeed”) and <i>saltem</i> (“at least”);<br><strong>causal</strong>, which state a cause or condition, as <i>sī</i> (“if”), <i>nisi</i> (“unless”), <i>nam</i> (“for”);<br><strong>rational</strong>, which draw a conclusion or give a reason, as <i>ergō</i> and <i>igitur</i> (“therefore”), <i>quia</i> and <i>quoniam</i> (“because,” “since”).</p>
<p>English conjunctions can be classed in the same way: “and” is copulative, “or” and “nor” are disjunctive, “indeed” is expletive, “if” and “unless” are causal (in Donatus’s sense, conditional), and “therefore” and “because” are rational. So the power of a conjunction is the logical relation it signifies between the things it joins, and the reader who knows that relation understands how the thought proceeds.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the power of the conjunction, in paraphrase.`,
  qp: { id: 'q-power', variants: [
    { prompt: `In Donatus’s division by power, what kind of conjunction is Latin <i>sīve</i> (“or if,” “whether … or”)?`,
      options: [`Copulative`, `Disjunctive`, `Expletive`, `Rational`],
      answer: 1,
      explain: `<i>Sīve</i> offers a choice between alternatives, as <i>aut</i> and <i>vel</i> do, so it is disjunctive. A copulative conjunction, such as <i>et</i>, simply joins.` },
    { prompt: `In Donatus’s division by power, what kind of conjunction is Latin <i>itaque</i> (“and so,” “therefore”)?`,
      options: [`Copulative`, `Causal`, `Rational`, `Disjunctive`],
      answer: 2,
      explain: `<i>Itaque</i> draws a conclusion from what precedes, as <i>ergō</i> and <i>igitur</i> do, so it is rational. A causal conjunction, such as <i>sī</i>, states a cause or condition.` },
    { prompt: `In “Unless the wind drops, the boats will stay in harbor,” what relation does “unless” signify?`,
      options: [`A choice between two things`, `A condition`, `A conclusion drawn from what precedes`, `A simple joining`],
      answer: 1,
      explain: `The boats will stay unless a condition is met, so “unless,” like <i>nisi</i>, signifies a condition; it is causal in Donatus’s sense. It offers no choice and draws no conclusion.` }
  ]} },

{ id: 'coordinating',
  title: 'Coordinating and subordinating conjunctions',
  body: `<p>Modern grammars divide the conjunctions differently, by the kind of joining rather than by its meaning. <strong>Coordinating</strong> conjunctions join words or clauses of equal rank, so that neither depends on the other: “and,” “but,” “or,” “nor,” Latin <i>et</i>, <i>sed</i>, <i>aut</i>. In “The snow melted, and the river rose,” each clause could stand as a sentence by itself.</p>
<p><strong>Subordinating</strong> conjunctions join a dependent clause to the clause on which it depends: “because,” “if,” “when,” “although,” “that,” Latin <i>quia</i>, <i>sī</i>, <i>cum</i>, <i>ut</i>. In “The river rose because the snow melted,” the clause “because the snow melted” cannot stand by itself; it tells why the river rose. The two divisions do not conflict: a causal conjunction in Donatus’s sense, such as “if,” is a subordinating conjunction in the modern sense. We will study the joining of clauses in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 223–224, in paraphrase.` },

{ id: 'order',
  title: 'The order of conjunctions',
  body: `<p>In Latin <i>terrā marīque</i> (“by land and sea”), the word for “and,” <i>-que</i>, is attached to the second word, and in <i>Caesar autem</i> (“but Caesar”) the word for “but” is placed second in its clause. Conjunctions differ, then, in their position, and Donatus calls this accident <strong>order</strong>. Some conjunctions are placed before the word they join, as <i>ac</i> and <i>atque</i> (“and”); some are placed after it, as <i>-que</i> (“and”) and <i>autem</i> (“but,” “moreover”); and some can be placed either way, as <i>et</i> and <i>igitur</i> (<i>Ars minor</i>).</p>
<p>Latin conjunctions placed after the first word are called <strong>postpositive</strong>. English has a few words that behave in a similar way, such as “however” and “therefore” in “Caesar, however, refused.” A reader of Latin who expects every conjunction at the beginning of its clause will misread sentences with <i>autem</i>, <i>enim</i> (“for”), and <i>vērō</i> (“but,” “indeed”).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the order of the conjunction, in paraphrase.` },

{ id: 'figure',
  title: 'Simple and compound conjunctions',
  body: `<p>“But” is a single word, whereas “whereas” is made of “where” and “as.” So the conjunction, like the other parts, has <strong>figure</strong>. Donatus’s examples are <i>nam</i> (“for”), which is simple, and <i>namque</i> (“for indeed”), which is compound (<i>Ars minor</i>). Other compound conjunctions are <i>etenim</i> (“for indeed”), <i>quamvīs</i> (“although”), and <i>quamquam</i> (“although”). In English, “however,” “although,” and “inasmuch” are compounds, and groups such as “as if,” “so that,” and “in order that” serve as conjunctions.</p>
<p>The compound conjunctions show how the parts of speech can combine: <i>quamvīs</i> is made of the adverb <i>quam</i> (“as”) and the verb <i>vīs</i> (“you wish”), and English “although” of the adverb “all” and the conjunction “though.” The compound is still one word of one part of speech, as we saw with compound nouns and verbs.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the conjunction, in paraphrase.` },

{ id: 'correlative',
  title: 'Conjunctions used in pairs',
  body: `<p>Some conjunctions are used in pairs, one in each of the two parts they join. They are called <strong>correlative</strong> conjunctions. Latin has <i>et … et</i> (“both … and”), <i>aut … aut</i> (“either … or”), <i>neque … neque</i> (“neither … nor”), and <i>nōn sōlum … sed etiam</i> (“not only … but also”). English has the same pairs: “both … and,” “either … or,” “neither … nor,” “not only … but also.”</p>
<p>The two members of a correlative pair should join words or phrases of the same kind. “She is both learned and kind” joins two adjectives; “She both is learned and kind” joins a verb to an adjective and is badly arranged. So the conjunction does not only join; it requires that the things it joins be alike in construction, a requirement we will study in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 323, in paraphrase.` },

{ id: 'that',
  title: 'Conjunction, relative, and adverb',
  body: `<p>Some words are conjunctions in one use and other parts of speech in another. English “that” is a conjunction in “I know that he came,” where it introduces a clause and refers to nothing; it is a relative pronoun in “the letter that I wrote,” where it refers to “the letter”; and it is a demonstrative in “that letter.” Latin <i>cum</i>, as we saw earlier, is a preposition in <i>cum lēgātīs</i> (“with the envoys”) and a conjunction in <i>cum vēnisset</i> (“when he had come”), and English “before” and “after” are prepositions, adverbs, or conjunctions according to their use.</p>
<p>The test is the same as for every part of speech: what is the word doing in this sentence? A conjunction joins and refers to nothing; a relative pronoun joins and also refers to an antecedent; a preposition takes a noun as its object; an adverb determines another word without joining anything.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qp: { id: 'q-that', variants: [
    { prompt: `In “Since the bridge was closed, we took the ferry,” what part of speech is “since”?`,
      options: [`A preposition`, `An adverb`, `A conjunction`, `A relative pronoun`],
      answer: 2,
      explain: `“Since” introduces the clause “the bridge was closed” and joins it to the main clause, and it refers to nothing. So here it is a conjunction, giving the reason.` },
    { prompt: `In “I have not seen him since Easter,” what part of speech is “since”?`,
      options: [`A conjunction`, `An adverb`, `A relative pronoun`, `A preposition`],
      answer: 3,
      explain: `Here “since” takes a noun, “Easter,” as its object and relates it to “have not seen,” so it is a preposition. In “since the bridge was closed” the same word introduces a clause and is a conjunction.` },
    { prompt: `In Latin <i>carmen quod scrīpsī</i> (“the poem that I wrote”), what part of speech is <i>quod</i>?`,
      options: [`A conjunction, because it introduces a clause`, `A relative pronoun`, `An adverb modifying <i>scrīpsī</i>`, `A preposition`],
      answer: 1,
      explain: `<i>Quod</i> joins the clause to <i>carmen</i> (“poem”) and also refers to it: it is neuter singular like <i>carmen</i> and the object of <i>scrīpsī</i>. So it is a relative pronoun. In <i>laudō quod vēnit</i> (“I praise him because he came”), <i>quod</i> refers to nothing and is a conjunction.` }
  ]} }

  ]
};
