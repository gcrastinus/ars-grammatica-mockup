/* III.11 The Adverb [iii.adverb]
   Plan (ITEM-LIST.md): 7 panels, 2 question points.
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
  body: `<p>In “We walked slowly” and “He arrived late,” the words “slowly” and “late” add something to the verbs “walked” and “arrived”: they tell how we walked and when he arrived. Such words are adverbs. With the participle we completed the declinable parts of speech, and the adverb is the first of the four indeclinable parts, which keep one form. We have seen Donatus’s definition of the adverb: a part of speech that, added to a verb, makes its meaning clear and completes it. Its name, <i>adverbium</i>, means “what is added to the verb,” and the modists explain it as signifying by the mode of determining a word that signifies as becoming.</p>
<p>Donatus gives the adverb three accidents (<i>Ars minor</i>):</p>
<p><strong>signification</strong> (<i>significatio</i>);<br><strong>comparison</strong> (<i>comparatio</i>);<br><strong>figure</strong> (<i>figura</i>).</p>
<p>The adverb has no case, number, gender, tense, or person, because it does not signify a thing as stable or as becoming but determines another word. Its accidents concern what kind of determination it gives (signification), how much (comparison), and how it is made (figure).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the adverb (the Latin).` },

{ id: 'signification',
  title: 'The kinds of adverb',
  body: `<p>Adverbs add different kinds of meaning: “here” tells where, “now” tells when, “well” tells how, “twice” tells how many times, and “not” denies. Donatus calls the kind of meaning that an adverb adds its <strong>signification</strong>. He lists many kinds (<i>Ars minor</i>), of which the principal are these:</p>
<p><strong>place</strong>: <i>hīc</i> (“here”), <i>ibi</i> (“there”), “here,” “there,” “everywhere”;<br><strong>time</strong>: <i>hodiē</i> (“today”), <i>nunc</i> (“now”), “today,” “now,” “often”;<br><strong>manner</strong>: <i>male</i> (“badly”), <i>libenter</i> (“gladly”), “badly,” “gladly”;<br><strong>quantity</strong> and <strong>number</strong>: <i>multum</i> (“much”), <i>semel</i> (“once”), “much,” “twice”;<br><strong>negation</strong> and <strong>affirmation</strong>: <i>nēquāquam</i> (“by no means”), <i>certē</i> (“certainly”), “never,” “indeed”;<br><strong>questioning</strong>: <i>cūr</i> (“why?”), <i>ubi</i> (“where?”), “why?” “when?”;<br><strong>doubt</strong>: <i>fortasse</i> (“perhaps”), “perhaps,” “possibly.”</p>
<p>Donatus’s list also includes adverbs of wishing (<i>utinam</i>, “would that”), of exhorting, and of comparison. So the adverbs are a large and varied class, united not by what they signify but by the way they signify: each determines another word.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the signification of the adverb, in paraphrase.`,
  qp: { id: 'q-signification', variants: [
    { prompt: `What kind of meaning does the Latin adverb <i>herī</i> add?`,
      options: [`Place`, `Time`, `Manner`, `Doubt`],
      answer: 1,
      explain: `<i>Herī</i> means “yesterday,” so it tells when, and it is an adverb of time, like <i>hodiē</i> and <i>nunc</i>.` },
    { prompt: `In a question such as <i>Quandō venit?</i> (“When does he come?”), what kind of adverb is <i>quandō</i>?`,
      options: [`An adverb of place`, `An adverb of negation`, `An adverb of quantity`, `An adverb of questioning`],
      answer: 3,
      explain: `<i>Quandō</i> asks when, so in a question it is an adverb of questioning, like <i>cūr</i> (“why?”) and <i>ubi</i> (“where?”). Its answer would be an adverb of time.` },
    { prompt: `What kind of meaning does “maybe” add in “Maybe the ferry is late”?`,
      options: [`Time`, `Manner`, `Doubt`, `Affirmation`],
      answer: 2,
      explain: `“Maybe” leaves it uncertain whether the ferry is late, so it is an adverb of doubt, like “perhaps” and Latin <i>fortasse</i>. An adverb of affirmation, such as “certainly,” would assert it.` }
  ]} },

{ id: 'formation',
  title: 'How adverbs are formed',
  body: `<p>Many adverbs are derived from adjectives. In Latin, adjectives of the first and second declensions form adverbs in <i>-ē</i>: <i>rēctus</i>, <i>rēctē</i> (“right,” “rightly”); <i>lātus</i>, <i>lātē</i> (“wide,” “widely”). Adjectives of the third declension form adverbs in <i>-iter</i>: <i>ācer</i>, <i>ācriter</i> (“sharp,” “sharply”); <i>celer</i>, <i>celeriter</i> (“swift,” “swiftly”). Some adverbs have the form of a case of the adjective, as <i>multum</i> (“much”) and <i>prīmō</i> (“at first”).</p>
<p>English forms most adverbs of manner by adding “-ly” to the adjective: “bright,” “brightly”; “careful,” “carefully.” But many common adverbs have no ending, as “now,” “here,” “often,” and “very,” and some words have the same form as adjective and adverb, as “fast” in “a fast car” and “He drives fast,” or “hard” in “hard work” and “He works hard.” So, as with every part of speech, the form does not always decide; the use does.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 214–215, in paraphrase.` },

{ id: 'comparison',
  title: 'The comparison of adverbs',
  body: `<p>Adverbs derived from adjectives of quality can be compared, as the adjectives are. English compares most adverbs with “more” and “most”: “happily,” “more happily,” “most happily.” A few short adverbs take “-er” and “-est”: “fast,” “faster,” “fastest”; “soon,” “sooner,” “soonest.” And “badly,” “worse,” “worst” are irregular.</p>
<p>In Latin the comparative adverb has the form of the neuter singular of the comparative adjective, and the superlative ends in <i>-ē</i>: <i>rēctē</i>, <i>rēctius</i>, <i>rēctissimē</i> (“rightly,” “more rightly,” “most rightly”); <i>ācriter</i>, <i>ācrius</i>, <i>ācerrimē</i> (“sharply,” “more sharply,” “most sharply”). As we have seen with the adjectives, irregular comparison takes its forms from different words, and the adverbs follow: <i>paulum</i>, <i>minus</i>, <i>minimē</i> (“a little,” “less,” “least”). In both languages, adverbs that signify place, time, or negation, such as “here,” “now,” and “not,” cannot be compared, for the same reason that some adjectives cannot: what they signify does not admit more and less.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 218, in paraphrase.` },

{ id: 'figure',
  title: 'Simple and compound adverbs',
  body: `<p>“Soon” is a single word, whereas “meanwhile” is made of “mean” and “while.” So the adverb, like the noun and the verb, has <strong>figure</strong>: it is simple or compound. Donatus’s examples are <i>doctē</i> (“learnedly”), which is simple, and <i>indoctē</i> (“unlearnedly”), which is compound (<i>Ars minor</i>). Many Latin adverbs are compounds of a preposition and a case: <i>posteā</i> (“afterward”), from <i>post</i> and <i>eā</i>; <i>intereā</i> (“meanwhile”); <i>dēnuō</i> (“anew”), from <i>dē novō</i>.</p>
<p>English has many compound adverbs, some written as one word and some as several: “otherwise,” “furthermore,” “meanwhile,” “nowadays,” “at last,” “of course.” A group of words that does the work of an adverb is called an <strong>adverbial phrase</strong>. We will see in Section V that whole phrases and clauses can do the work of an adverb.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the adverb, in paraphrase.` },

{ id: 'what-modifies',
  title: 'What an adverb determines',
  body: `<p>In “She sings beautifully,” <i>pulchrē cantat</i>, the adverb determines the verb. But adverbs also determine adjectives (“very good,” <i>valdē bonus</i>), other adverbs (“very quickly,” <i>valdē celeriter</i>), and whole sentences (“Fortunately, the bridge held”). Donatus defines the adverb by its relation to the verb, because that is its principal use. Priscian explains that the adverb is added to the verb chiefly, but also to the other parts that signify something like an action or a quality (<i>Institutiones grammaticae</i> XV).</p>
<p>In English the position of an adverb can change the meaning of a sentence. “She nearly lost all her money” means that she came close to losing all of it but did not; “She lost nearly all her money” means that she lost most of it. So the adverb must be placed next to the word it is meant to determine, and an adverb placed where it determines the wrong word causes the kind of ambiguity we saw in Section I.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.`,
  qp: { id: 'q-what-modifies', variants: [
    { prompt: `In “The tea is extremely hot,” which word does “extremely” determine?`,
      options: [`The verb “is”`, `The adjective “hot”`, `The noun “tea”`, `The whole sentence`],
      answer: 1,
      explain: `“Extremely” tells how hot the tea is, so it determines the adjective “hot.” Adverbs determine adjectives as well as verbs, as Priscian notes.` },
    { prompt: `In “Luckily, the rope held,” what does “luckily” determine?`,
      options: [`The verb “held”`, `The noun “rope”`, `The whole sentence`, `The article “the”`],
      answer: 2,
      explain: `“Luckily” does not say how the rope held; it says that the whole event, the rope’s holding, was lucky. So it determines the sentence as a whole.` },
    { prompt: `In “Only he saw the comet,” which word does “only” determine?`,
      options: [`“saw”`, `“the comet”`, `The whole sentence`, `“he”`],
      answer: 3,
      explain: `Placed before “he,” “only” determines “he”: no one else saw the comet. Moved before “saw,” it determines the verb (he saw it and did nothing more), although in speech “He only saw the comet” is often used to mean that he saw nothing but the comet. The adverb should stand next to the word it determines.` }
  ]} },

{ id: 'other-parts',
  title: 'Adverb, preposition, and conjunction',
  body: `<p>Several words can be adverbs in one sentence and other parts of speech in another, as we have seen with some Latin words. English “before” is an adverb in “I have seen it before,” a preposition in “before noon,” and a conjunction in “before he came.” The difference is that the preposition takes an object, the conjunction introduces a clause, and the adverb does neither.</p>
<p>Priscian notes that the Greeks placed the interjection under the adverb, and that the Latins separated it because it shows a feeling of the mind even without a verb (<i>Institutiones grammaticae</i> XV). So the boundaries between the indeclinable parts are drawn by their ways of signifying, and the same word may cross them. The preposition, the conjunction, and the interjection each have their own way of signifying, which we consider in turn in this section of the course, beginning with the preposition, which relates a noun to the rest of the sentence.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.` }

  ]
};
