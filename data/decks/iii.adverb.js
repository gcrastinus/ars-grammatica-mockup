/* III.11 The Adverb [iii.adverb]
   Plan (ITEM-LIST.md): 7 panels, 2 question points (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.pos (the remaining four), DECKS.latpos (the four that do not change). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.adverb'] = {
  id: 'iii.adverb',
  title: 'The Adverb',
  sub: 'The adverb and its accidents: signification, comparison, and figure',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XV; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'adverb',
  title: 'The adverb and its accidents',
  body: `<p>We have completed the declinable parts of speech and turn now to the four indeclinable parts, which keep one form. The first is the adverb. We have seen Donatus’s definition: a part of speech that, added to a verb, makes its meaning clear, or changes it, or lessens it. Its name, <i>adverbium</i>, means “what is added to the verb,” and the modists explain it as signifying by the mode of determining a word that signifies as becoming.</p>
<p>Donatus gives the adverb three accidents: signification, comparison, and figure (<i>significātiō, comparātiō, figūra</i>; <i>Ars minor</i>). The adverb has no case, number, gender, tense, or person, because it does not signify a thing as stable or as becoming but determines another word. Its accidents concern what kind of determination it gives (signification), how much (comparison), and how it is made (figure).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the adverb (the Latin).` },

{ id: 'signification',
  title: 'The kinds of adverb',
  body: `<p>By <strong>signification</strong> Donatus means the kind of meaning the adverb adds. He lists many kinds (<i>Ars minor</i>, in paraphrase), of which the principal are these:<br><strong>place</strong>: <i>hīc</i> (“here”), <i>ibi</i> (“there”), “here,” “there,” “everywhere”;<br><strong>time</strong>: <i>hodiē</i> (“today”), <i>nunc</i> (“now”), “today,” “now,” “often”;<br><strong>manner</strong>: <i>bene</i> (“well”), <i>celeriter</i> (“quickly”), “well,” “quickly”;<br><strong>quantity</strong> and <strong>number</strong>: <i>multum</i> (“much”), <i>semel</i> (“once”), “much,” “twice”;<br><strong>negation</strong> and <strong>affirmation</strong>: <i>nōn</i> (“not”), <i>certē</i> (“certainly”), “not,” “indeed”;<br><strong>questioning</strong>: <i>cūr</i> (“why?”), <i>ubi</i> (“where?”), “why?” “when?”;<br><strong>doubt</strong>: <i>fortasse</i> (“perhaps”), “perhaps,” “possibly.”</p>
<p>Donatus’s list also includes adverbs of wishing (<i>utinam</i>, “would that”), of exhorting, and of comparison. So the adverbs are a large and varied class, united not by what they signify but by the way they signify: each determines another word.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the signification of the adverb, in paraphrase.`,
  qpTodo: `The kinds of adverb: what kind of meaning does a given adverb add (<i>hīc</i>, <i>nunc</i>, <i>bene</i>, <i>nōn</i>, <i>cūr</i>; “often,” “perhaps”).` },

{ id: 'formation',
  title: 'How adverbs are formed',
  body: `<p>Many adverbs are derived from adjectives. In Latin, adjectives of the first and second declensions form adverbs in <i>-ē</i>: <i>doctus</i>, <i>doctē</i> (“learned,” “learnedly”); <i>lātus</i>, <i>lātē</i> (“wide,” “widely”). Adjectives of the third declension form adverbs in <i>-iter</i>: <i>fortis</i>, <i>fortiter</i> (“brave,” “bravely”); <i>celer</i>, <i>celeriter</i> (“quick,” “quickly”). Some adverbs have the form of a case of the adjective, as <i>multum</i> (“much”) and <i>prīmō</i> (“at first”).</p>
<p>English forms most adverbs of manner by adding <i>-ly</i> to the adjective: “quick,” “quickly”; “careful,” “carefully.” But many common adverbs have no ending, as “now,” “here,” “often,” and “very,” and some words have the same form as adjective and adverb, as “fast” in “a fast car” and “He drives fast,” or “hard” in “hard work” and “He works hard.” So, as with every part of speech, the form does not always decide; the use does.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 214–215, in paraphrase.` },

{ id: 'comparison',
  title: 'The comparison of adverbs',
  body: `<p>Adverbs derived from adjectives of quality can be compared, as the adjectives are. In Latin the comparative adverb has the form of the neuter singular of the comparative adjective, and the superlative ends in <i>-ē</i>: <i>doctē</i>, <i>doctius</i>, <i>doctissimē</i> (“learnedly,” “more learnedly,” “most learnedly”); <i>fortiter</i>, <i>fortius</i>, <i>fortissimē</i>. Irregular adjectives give irregular adverbs: <i>bene</i>, <i>melius</i>, <i>optimē</i> (“well,” “better,” “best”).</p>
<p>English compares most adverbs with “more” and “most”: “quickly,” “more quickly,” “most quickly.” A few short adverbs take <i>-er</i> and <i>-est</i>: “fast,” “faster,” “fastest”; “soon,” “sooner,” “soonest.” And “well,” “better,” “best” are irregular in English as in Latin. Adverbs that signify place, time, or negation, such as “here,” “now,” and “not,” cannot be compared, for the same reason that some adjectives cannot: what they signify does not admit more and less.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 218, in paraphrase.` },

{ id: 'figure',
  title: 'Simple and compound adverbs',
  body: `<p>The adverb, like the noun and the verb, has <strong>figure</strong>: it is simple or compound. Donatus’s examples are <i>doctē</i> (“learnedly”), which is simple, and <i>indoctē</i> (“unlearnedly”), which is compound (<i>Ars minor</i>, in paraphrase). Many Latin adverbs are compounds of a preposition and a case: <i>posteā</i> (“afterward”), from <i>post</i> and <i>eā</i>; <i>intereā</i> (“meanwhile”); <i>dēnuō</i> (“anew”), from <i>dē novō</i>.</p>
<p>English has many compound adverbs, some written as one word and some as several: “nevertheless,” “therefore,” “meanwhile,” “nowadays,” “at last,” “of course.” A group of words that does the work of an adverb is called an adverbial phrase. We will see in Section V that whole phrases and clauses can do the work of an adverb.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the adverb, in paraphrase.` },

{ id: 'what-modifies',
  title: 'What an adverb determines',
  body: `<p>Donatus defines the adverb by its relation to the verb, and that is its principal use: “She sings beautifully,” <i>pulchrē cantat</i>. But adverbs also determine adjectives (“very good,” <i>valdē bonus</i>), other adverbs (“very quickly,” <i>valdē celeriter</i>), and whole sentences (“Fortunately, the bridge held”). Priscian explains that the adverb is added to the verb chiefly, but also to the other parts that signify something like an action or a quality (<i>Institutiones grammaticae</i> XV, in paraphrase).</p>
<p>In English the position of an adverb can change the meaning of a sentence. “Only she saw the ship” means that no one else saw it; “She only saw the ship” may mean that she did nothing else to it; “She saw only the ship” means that she saw nothing else. So the adverb must be placed next to the word it is meant to determine, and an adverb placed where it determines the wrong word causes the kind of ambiguity we saw in Section I.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.`,
  qpTodo: `What the adverb determines: in a given sentence, which word does the adverb determine (a verb, an adjective, another adverb, the sentence), and how does moving “only” change the meaning.` },

{ id: 'other-parts',
  title: 'Adverb, preposition, and conjunction',
  body: `<p>Several words can be adverbs in one sentence and other parts of speech in another. We saw that Latin <i>post</i> is a preposition in <i>post bellum</i> (“after the war”) and an adverb in <i>paulō post</i> (“a little later”). English “before” is an adverb in “I have seen it before,” a preposition in “before noon,” and a conjunction in “before he came.” The difference is that the preposition takes an object, the conjunction introduces a clause, and the adverb does neither.</p>
<p>Priscian notes that the Greeks placed the interjection under the adverb, and that the Latins separated it because it shows a feeling of the mind even without a verb (<i>Institutiones grammaticae</i> XV, in paraphrase). So the boundaries between the indeclinable parts are drawn by their ways of signifying, and the same word may cross them. We will study the preposition, the conjunction, and the interjection in turn.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.` }

  ]
};
