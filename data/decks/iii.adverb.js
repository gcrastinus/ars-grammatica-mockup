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
  body: `<p>We have completed the declinable parts of speech and turn now to the four indeclinable parts, which keep one form. The first is the adverb. In “We walked slowly” and “He arrived late,” the words “slowly” and “late” add something to the verbs “walked” and “arrived”: they tell how we walked and when he arrived. We have seen Donatus’s definition: a part of speech that, added to a verb, makes its meaning clear and completes it. Its name, <i>adverbium</i>, means “what is added to the verb,” and the modists explain it as signifying by the mode of determining a word that signifies as becoming.</p>
<p>Donatus gives the adverb three accidents: signification, comparison, and figure (<i>significatio, comparatio, figura</i>; <i>Ars minor</i>). The adverb has no case, number, gender, tense, or person, because it does not signify a thing as stable or as becoming but determines another word. Its accidents concern what kind of determination it gives (signification), how much (comparison), and how it is made (figure).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the adverb (the Latin).` },

{ id: 'signification',
  title: 'The kinds of adverb',
  body: `<p>Adverbs add different kinds of meaning: “here” tells where, “now” tells when, “well” tells how, “twice” tells how many times, and “not” denies. Donatus calls the kind of meaning that an adverb adds its <strong>signification</strong>. He lists many kinds (<i>Ars minor</i>), of which the principal are these:</p>
<p><strong>place</strong>: <i>hīc</i> (“here”), <i>ibi</i> (“there”), “here,” “there,” “everywhere”;<br><strong>time</strong>: <i>hodiē</i> (“today”), <i>nunc</i> (“now”), “today,” “now,” “often”;<br><strong>manner</strong>: <i>male</i> (“badly”), <i>libenter</i> (“gladly”), “badly,” “gladly”;<br><strong>quantity</strong> and <strong>number</strong>: <i>multum</i> (“much”), <i>semel</i> (“once”), “much,” “twice”;<br><strong>negation</strong> and <strong>affirmation</strong>: <i>nēquāquam</i> (“by no means”), <i>certē</i> (“certainly”), “never,” “indeed”;<br><strong>questioning</strong>: <i>cūr</i> (“why?”), <i>ubi</i> (“where?”), “why?” “when?”;<br><strong>doubt</strong>: <i>fortasse</i> (“perhaps”), “perhaps,” “possibly.”</p>
<p>Donatus’s list also includes adverbs of wishing (<i>utinam</i>, “would that”), of exhorting, and of comparison. So the adverbs are a large and varied class, united not by what they signify but by the way they signify: each determines another word.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the signification of the adverb, in paraphrase.`,
  qpTodo: `The kinds of adverb: what kind of meaning does a given adverb add (<i>hīc</i>, <i>nunc</i>, <i>bene</i>, <i>nōn</i>, <i>cūr</i>; “often,” “perhaps”).` },

{ id: 'formation',
  title: 'How adverbs are formed',
  body: `<p>Many adverbs are derived from adjectives. In Latin, adjectives of the first and second declensions form adverbs in <i>-ē</i>: <i>rēctus</i>, <i>rēctē</i> (“right,” “rightly”); <i>lātus</i>, <i>lātē</i> (“wide,” “widely”). Adjectives of the third declension form adverbs in <i>-iter</i>: <i>ācer</i>, <i>ācriter</i> (“sharp,” “sharply”); <i>celer</i>, <i>celeriter</i> (“swift,” “swiftly”). Some adverbs have the form of a case of the adjective, as <i>multum</i> (“much”) and <i>prīmō</i> (“at first”).</p>
<p>English forms most adverbs of manner by adding “-ly” to the adjective: “bright,” “brightly”; “careful,” “carefully.” But many common adverbs have no ending, as “now,” “here,” “often,” and “very,” and some words have the same form as adjective and adverb, as “fast” in “a fast car” and “He drives fast,” or “hard” in “hard work” and “He works hard.” So, as with every part of speech, the form does not always decide; the use does.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 214–215, in paraphrase.` },

{ id: 'comparison',
  title: 'The comparison of adverbs',
  body: `<p>Adverbs derived from adjectives of quality can be compared, as the adjectives are. In Latin the comparative adverb has the form of the neuter singular of the comparative adjective, and the superlative ends in <i>-ē</i>: <i>rēctē</i>, <i>rēctius</i>, <i>rēctissimē</i> (“rightly,” “more rightly,” “most rightly”); <i>ācriter</i>, <i>ācrius</i>, <i>ācerrimē</i> (“sharply,” “more sharply,” “most sharply”). As we have seen with the adjectives, irregular comparison takes its forms from different words, and the adverbs follow: <i>paulum</i>, <i>minus</i>, <i>minimē</i> (“a little,” “less,” “least”).</p>
<p>English compares most adverbs with “more” and “most”: “happily,” “more happily,” “most happily.” A few short adverbs take “-er” and “-est”: “fast,” “faster,” “fastest”; “soon,” “sooner,” “soonest.” And “badly,” “worse,” “worst” are irregular, as some Latin adverbs are. Adverbs that signify place, time, or negation, such as “here,” “now,” and “not,” cannot be compared, for the same reason that some adjectives cannot: what they signify does not admit more and less.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 218, in paraphrase.` },

{ id: 'figure',
  title: 'Simple and compound adverbs',
  body: `<p>“Soon” is a single word, whereas “meanwhile” is made of “mean” and “while.” So the adverb, like the noun and the verb, has <strong>figure</strong>: it is simple or compound. Donatus’s examples are <i>doctē</i> (“learnedly”), which is simple, and <i>indoctē</i> (“unlearnedly”), which is compound (<i>Ars minor</i>). Many Latin adverbs are compounds of a preposition and a case: <i>posteā</i> (“afterward”), from <i>post</i> and <i>eā</i>; <i>intereā</i> (“meanwhile”); <i>dēnuō</i> (“anew”), from <i>dē novō</i>.</p>
<p>English has many compound adverbs, some written as one word and some as several: “otherwise,” “furthermore,” “meanwhile,” “nowadays,” “at last,” “of course.” A group of words that does the work of an adverb is called an adverbial phrase. We will see in Section V that whole phrases and clauses can do the work of an adverb.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the adverb, in paraphrase.` },

{ id: 'what-modifies',
  title: 'What an adverb determines',
  body: `<p>In “She sings beautifully,” <i>pulchrē cantat</i>, the adverb determines the verb. But adverbs also determine adjectives (“very good,” <i>valdē bonus</i>), other adverbs (“very quickly,” <i>valdē celeriter</i>), and whole sentences (“Fortunately, the bridge held”). Donatus defines the adverb by its relation to the verb, because that is its principal use. Priscian explains that the adverb is added to the verb chiefly, but also to the other parts that signify something like an action or a quality (<i>Institutiones grammaticae</i> XV).</p>
<p>In English the position of an adverb can change the meaning of a sentence. “She nearly lost all her money” means that she came close to losing all of it but did not; “She lost nearly all her money” means that she lost most of it. So the adverb must be placed next to the word it is meant to determine, and an adverb placed where it determines the wrong word causes the kind of ambiguity we saw in Section I.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.`,
  qpTodo: `What the adverb determines: in a given sentence, which word does the adverb determine (a verb, an adjective, another adverb, the sentence), and how does moving “only” change the meaning.` },

{ id: 'other-parts',
  title: 'Adverb, preposition, and conjunction',
  body: `<p>Several words can be adverbs in one sentence and other parts of speech in another, as we have seen with some Latin words. English “before” is an adverb in “I have seen it before,” a preposition in “before noon,” and a conjunction in “before he came.” The difference is that the preposition takes an object, the conjunction introduces a clause, and the adverb does neither.</p>
<p>Priscian notes that the Greeks placed the interjection under the adverb, and that the Latins separated it because it shows a feeling of the mind even without a verb (<i>Institutiones grammaticae</i> XV). So the boundaries between the indeclinable parts are drawn by their ways of signifying, and the same word may cross them. The preposition, the conjunction, and the interjection each have their own way of signifying, which we consider in turn in this section of the course, beginning with the preposition, which relates a noun to the rest of the sentence.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.` }

  ]
};
