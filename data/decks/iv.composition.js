/* IV.2 Composition [iv.composition]
   Plan (ITEM-LIST.md): 7 panels, 2 question points. The first panel refers back to
   III.3, where composition was first named as the accident "figure."
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Priscian, Vossius, and Duden. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iv.composition'] = {
  id: 'iv.composition',
  title: 'Composition',
  sub: 'How words are joined to make compounds, in English and Latin, with German where its compounds show the pattern most clearly',
  sources: `Priscian, <i>Institutiones grammaticae</i> V; G. J. Vossius, <i>Aristarchus</i> IV; Duden, <i>Die Grammatik</i>, on compounds.`,
  recitation: [
    `<strong>Composition</strong> is the joining of two or more words, or parts of words, to make one word.`,
    `Composition differs from derivation because in composition each part can usually stand as a word by itself, whereas in derivation the suffix cannot (“sunrise” is compound, “booklet” derived).`,
    `Figure is the accident by which a word is simple or compound, and Donatus gives four ways of compounding: from two whole words, from two changed words, from a whole word and a changed one, and from a changed word and a whole one.`,
    `The most common Latin compounds are verbs made with a preposition, and in them the vowel of the verb is often weakened.`,
    `English keeps these weakened forms in words borrowed from such compounds.`,
    `Latin also forms compound nouns and adjectives from a noun and a verbal root, and adjectives from an adjective and a noun.`,
    `Latin compounds of these kinds are fewer than Greek or German ones, and the Latin poets used them as a mark of high style.`,
    `Greek forms compounds much more freely than Latin, and English has taken many learned words from Greek compounds or formed new ones on the Greek model.`,
    `Modern scientists have continued to form words in this way, often joining Greek parts that the Greeks never joined.`,
    `In English such words are learned as single words and most speakers do not recognize their parts, but a student who knows the parts can understand many of them on first meeting them.`,
    `English forms compounds of many kinds: noun and noun; adjective and noun; verb and noun; a noun and an agent noun (a noun that names the doer of an action); and an adjective and a participle.`,
    `In most English compounds the last part is the principal one, and the first part determines it.`,
    `The principal part is often called the <strong>head</strong> of the compound, so the order of the parts matters and the meaning depends on it (a “houseboat” is a boat, a “boathouse” a house).`,
    `German forms compounds very freely and writes them as one word, and, as in English, the last part is the head.`,
    `German compounds can be very long, because a compound can itself become part of a larger compound.`,
    `English expresses the same meanings either by compounds written as separate words or by phrases with prepositions.`,
    `The parts of a word do not signify by themselves within it, and the meaning of a compound is not always the sum of the meanings of its parts.`,
    `Over time a compound may come to signify something that its parts no longer suggest, and then it must be learned as a single word.`,
    `English distinguishes a compound from a phrase by its stress, whereas Latin and German, which write compounds as one word with one accent, make the distinction in writing as well as in speech.`,
    `So a compound is recognized by its unity as a word, in meaning, in accent, and often in spelling, not by the separate meanings of its parts.`,
    `Many words are formed by both composition and derivation, in an order that can be traced, so that one word can be both compound and derived.`,
    `The formation of a word can be analyzed step by step, as a sentence can, and the analysis shows how the meaning of the whole is built from its parts.`,
    `This analysis concerns how a word is made in the language as it is, whereas the history of where a word came from and how its form and meaning changed belongs to etymology.`,
  ],
  panels: [

{ id: 'figure-again',
  title: 'Composition and figure',
  body: `<p>English speakers make and understand words such as “sunrise,” “doorbell,” and “rainfall” without effort, because each is made of two words that can stand by themselves. “Booklet” is different: it is made of “book” and the ending “-let,” which cannot stand as a word by itself. The first kind of word is formed by <strong>composition</strong>, that is, the joining of two or more words, or parts of words, to make one word. It differs from derivation, as we have seen, because in composition each part can usually stand as a word by itself, whereas in derivation the suffix cannot. So “sunrise” is a compound, whereas “booklet” is derived.</p>
<p>We saw in Section III that figure is the accident by which a word is simple or compound, and we saw Donatus’s four ways of compounding: from two whole words, from two changed words, from a whole word and a changed one, and from a changed word and a whole one. The question now is how compounds are formed and what they signify.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the noun; Priscian, <i>Institutiones grammaticae</i> V, in paraphrase.` },

{ id: 'latin',
  title: 'Latin compounds',
  body: `<p>The most common Latin compounds are verbs made with a preposition, as we have seen with the preposition. In these compounds the vowel of the verb is often weakened: <i>capiō</i> (“I take”) becomes <i>-cipiō</i> in <i>accipiō</i> (“I receive”), <i>teneō</i> (“I hold”) becomes <i>-tineō</i> in <i>retineō</i> (“I hold back”), and <i>cadō</i> (“I fall”) becomes <i>-cidō</i> in <i>incidō</i> (“I fall into”). English keeps these weakened forms in “accept,” “retain,” and “incident.”</p>
<p>Latin also forms compound nouns and adjectives from a noun and a verbal root: <i>armiger</i> (“armor-bearer,” from <i>arma</i>, “arms,” and <i>gerere</i>, “to carry”), <i>artifex</i> (“craftsman,” from <i>ars</i>, “art,” and <i>facere</i>, “to make”), <i>signifer</i> (“standard-bearer,” from <i>signum</i> and <i>ferre</i>). And it forms adjectives from an adjective and a noun: <i>magnanimus</i> (“great-souled,” from <i>magnus</i> and <i>animus</i>). Latin compounds of this kind are fewer than Greek or German ones, and the Latin poets used them as a mark of high style.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 264–268, in paraphrase.`,
  qp: { id: 'q-latin', variants: [
    { prompt: `Of what parts is Latin <i>tubicen</i> (“trumpeter”) made?`,
      options: [`<i>tuba</i> and <i>canere</i>`, `<i>tuba</i> and <i>cēna</i> (“dinner”)`, `<i>tū</i> (“you”) and <i>cēnsēre</i> (“to judge”)`, `<i>tubus</i> (“pipe”) and <i>cingere</i> (“to gird”)`],
      answer: 0,
      explain: `<i>Tubicen</i> is the one who plays the trumpet: <i>tuba</i> (“trumpet”) with the root of <i>canere</i> (“to sing,” “to play”), whose <i>a</i> is weakened to <i>e</i> in <i>-cen</i>, as <i>capiō</i> becomes <i>-cipiō</i> in <i>accipiō</i>.` },
    { prompt: `Latin <i>dēcipiō</i> (“I deceive”) is made of <i>dē</i> and <i>capiō</i> (“I take”). What has happened to <i>capiō</i>?`,
      options: [`It has lost its first syllable`, `Its <i>a</i> has become <i>i</i>`, `It has taken the vowel of <i>dē</i>`, `Nothing; it is unchanged`],
      answer: 1,
      explain: `In compounds the vowel of the verb is often weakened, so <i>capiō</i> becomes <i>-cipiō</i>, as in <i>accipiō</i>. English “deceive” and “deception” come from these forms.` },
    { prompt: `Of what parts is Latin <i>opifex</i> (“workman”) made?`,
      options: [`<i>ops</i> (“help”) and <i>fax</i> (“torch”)`, `<i>opus</i> and <i>fīgere</i> (“to fix”)`, `<i>opus</i> and <i>facere</i>`, `<i>optāre</i> (“to wish”) and <i>facere</i>`],
      answer: 2,
      explain: `<i>Opifex</i> is the one who makes work: <i>opus</i> (“work”), with the stem shortened to <i>opi-</i>, and the root of <i>facere</i> (“to make”), weakened to <i>-fex</i>, as in <i>artifex</i>.` }
  ]} },

{ id: 'greek',
  title: 'Greek compounds in English',
  body: `<p>Greek forms compounds much more freely than Latin, and English has taken many of its learned words from Greek compounds or has formed new ones on the Greek model. “Philosophy” is from <i>philos</i> (“loving”) and <i>sophia</i> (“wisdom”); “democracy” from <i>dēmos</i> (“people”) and <i>kratos</i> (“rule”); “geography” from <i>gē</i> (“earth”) and <i>graphein</i> (“to write”).</p>
<p>Modern scientists have continued to form words in this way, often from Greek parts that the Greeks never joined: “telephone” (“far” and “voice”), “microscope” (“small” and “look at”), “thermometer” (“heat” and “measure”). Such words are compounds in their origin, but in English they are learned as single words, and most speakers do not recognize their parts. The student who knows the parts can understand many such words on first meeting them: a “hydrometer” must measure water, and a “chronometer” time.</p>`,
  src: `Standard dictionaries (the <i>Oxford English Dictionary</i>), in paraphrase.` },

{ id: 'english',
  title: 'English compounds',
  body: `<p>English forms compounds of many kinds: first, of noun and noun, as “teapot,” “doorknob,” and “sailboat”; second, of adjective and noun, as “bluebell,” “hardware,” and “highway”; third, of verb and noun, as “pickpocket” and “breakwater”; fourth, of a noun and an agent noun (a noun that names the doer of an action), as “shoemaker” and “housekeeper”; and fifth, of an adjective and a participle, as “good-looking” and “kind-hearted.”</p>
<p>In most English compounds the last part is the principal one, and the first part determines it. A “houseboat” is a kind of boat, and a “boathouse” is a kind of house; a “teapot” is a pot, and a “doorknob” is a knob. The principal part is often called the <strong>head</strong> of the compound. So the order of the parts matters, as it does in an English phrase, and the meaning of the compound depends on it.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on composition; Duden, on compounds; both in paraphrase.`,
  qp: { id: 'q-english', variants: [
    { prompt: `In “birdhouse,” which part is the head?`,
      options: [`“bird,” because it comes first`, `Both parts equally`, `“house”`, `Neither part`],
      answer: 2,
      explain: `In most English compounds the last part is the head, and the first part determines it. Order alone does not make the first part the head: a birdhouse is a house for birds; a “housebird” would be a kind of bird.` },
    { prompt: `In “housefly,” which part is the head?`,
      options: [`“house”`, `“fly”`, `Both parts equally`, `Neither part`],
      answer: 1,
      explain: `A housefly is a kind of fly, the fly found in houses, so “fly,” the last part, is the head and “house” determines it.` },
    { prompt: `A “sunburn” is a kind of what?`,
      options: [`A kind of sun`, `A kind of light`, `A kind of burn`, `A kind of heat`],
      answer: 2,
      explain: `The last part, “burn,” is the head, and “sun” tells what caused it. So a sunburn is a burn, not a kind of sun.` }
  ]} },

{ id: 'german',
  title: 'German compounds',
  body: `<p>German shows the pattern of composition most clearly, because it forms compounds very freely and writes them as one word. <i>Handschuh</i> (“glove”) is made of <i>Hand</i> (“hand”) and <i>Schuh</i> (“shoe”); <i>Krankenhaus</i> (“hospital”) of <i>krank</i> (“sick”) and <i>Haus</i> (“house”); <i>Fingerhut</i> (“thimble”) of <i>Finger</i> and <i>Hut</i> (“hat”). As in English, the last part is the head: a <i>Handschuh</i> is a kind of shoe for the hand.</p>
<p>German compounds can be very long, because a compound can itself become part of a larger compound: <i>Donau</i> (“Danube”) and <i>Dampfschiff</i> (“steamship”) give <i>Donaudampfschiff</i> (“Danube steamship”), and further parts can be added. English expresses the same meanings either by compounds written as separate words (“Danube steamship company”) or by phrases with prepositions (“a company of steamships on the Danube”).</p>`,
  src: `Duden, <i>Die Grammatik</i>, on compounds, in paraphrase.` },

{ id: 'meaning',
  title: 'The meaning of a compound',
  body: `<p>We saw in Section I that the parts of a word do not signify by themselves within it, and compounds show this clearly. The meaning of a compound is not always the sum of the meanings of its parts. A “blackboard” is often green, a “dragonfly” is neither a dragon nor a true fly, and a “pineapple” is neither a pine nor an apple. Over time a compound may come to signify something that its parts no longer suggest, and then it must be learned as a single word.</p>
<p>As we saw in Section III, English also distinguishes a compound from a phrase by its stress: a “WHITEboard” is a board for writing on with markers, and a “white BOARD” is any board that is white. Latin and German, which write their compounds as one word and give them one accent, make the distinction in writing as well as in speech. So a compound is recognized by its unity as a word, in meaning, in accent, and often in spelling, not by the separate meanings of its parts.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on composition, in paraphrase.` },

{ id: 'together',
  title: 'Composition and derivation together',
  body: `<p>Many words are formed by both composition and derivation, in an order that can be traced. “Unthinkable” is formed from “think” by the suffix “-able,” giving “thinkable,” and then by the prefix “un-,” giving “unthinkable.” Latin <i>īnfēlīcitās</i> (“unhappiness”) is formed from <i>fēlīx</i> (“happy”) by composition with <i>in-</i>, giving <i>īnfēlīx</i> (“unhappy”), and then by derivation with <i>-itās</i>; as we saw in Section III, one word can be both compound and derived.</p>
<p>So the formation of a word can be analyzed step by step, as a sentence can, and the analysis shows how the meaning of the whole is built from its parts. This analysis concerns how a word is made in the language as it is; the history of where a word came from, and how its form and meaning changed over time, is the subject of etymology, which we consider next in this section of the course.</p>`,
  src: `Marchand, <i>Categories and Types</i>, in paraphrase.` }

  ]
};
