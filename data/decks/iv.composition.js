/* IV.2 Composition [iv.composition]
   Plan (ITEM-LIST.md): 7 panels, 2 question points (placeholders: qpTodo; to be written). The first panel refers back to
   III.3, where composition was first named as the accident "figure."
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Priscian, Vossius, and Duden. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iv.composition'] = {
  id: 'iv.composition',
  title: 'Composition',
  sub: 'How words are joined to make compounds, in English and Latin, with German where its compounds show the pattern most clearly',
  sources: `Priscian, <i>Institutiones grammaticae</i> V; G. J. Vossius, <i>Aristarchus</i> IV; Duden, <i>Die Grammatik</i>, on compounds.`,
  panels: [

{ id: 'figure-again',
  title: 'Composition and figure',
  body: `<p>We saw in Section III that figure is the accident by which a word is simple or compound, and that Donatus gives <i>potēns</i> (“powerful”) as a simple word and <i>impotēns</i> (“powerless”) as a compound. We also saw his four ways of compounding: from two whole words, from two changed words, from a whole word and a changed one, and from a changed word and a whole one. Here we study how compounds are formed and what they signify.</p>
<p><strong>Composition</strong> is the joining of two or more words, or parts of words, to make one word. It differs from derivation, as we have seen, because in composition each part can usually stand as a word by itself, while in derivation the suffix cannot. So “bookcase” is a compound, made of “book” and “case,” while “booklet” is derived, made of “book” and the suffix “-let.”</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the noun; Priscian, <i>Institutiones grammaticae</i> V, in paraphrase.` },

{ id: 'latin',
  title: 'Latin compounds',
  body: `<p>The most common Latin compounds are verbs made with a preposition, which we studied with the preposition: <i>cōnficiō</i>, <i>dēpōnō</i>, <i>afferō</i>. In these compounds the vowel of the verb is often weakened: <i>faciō</i> becomes <i>-ficiō</i> in <i>cōnficiō</i> (“I complete”), <i>capiō</i> becomes <i>-cipiō</i> in <i>accipiō</i> (“I receive”), and <i>teneō</i> becomes <i>-tineō</i> in <i>retineō</i> (“I hold back”). English keeps these weakened forms in “confection,” “accept,” and “retain.”</p>
<p>Latin also forms compound nouns and adjectives from a noun and a verbal root: <i>agricola</i> (“farmer,” from <i>ager</i>, “field,” and <i>colere</i>, “to cultivate”), <i>artifex</i> (“craftsman,” from <i>ars</i>, “art,” and <i>facere</i>, “to make”), <i>signifer</i> (“standard-bearer,” from <i>signum</i> and <i>ferre</i>). And it forms adjectives from an adjective and a noun: <i>magnanimus</i> (“great-souled,” from <i>magnus</i> and <i>animus</i>). Latin compounds of this kind are fewer than Greek or German ones, and the Latin poets used them as a mark of high style.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 264–268, in paraphrase.`,
  qpTodo: `Latin compounds: of what parts is a given compound made (<i>agricola</i>, <i>artifex</i>, <i>accipiō</i>, <i>magnanimus</i>), and what change has a part undergone.` },

{ id: 'greek',
  title: 'Greek compounds in English',
  body: `<p>Greek forms compounds much more freely than Latin, and English has taken many of its learned words from Greek compounds or has formed new ones on the Greek model. “Philosophy” is from <i>philos</i> (“loving”) and <i>sophia</i> (“wisdom”); “democracy” from <i>dēmos</i> (“people”) and <i>kratos</i> (“rule”); “geography” from <i>gē</i> (“earth”) and <i>graphein</i> (“to write”).</p>
<p>Modern scientists have continued to form words in this way, often from Greek parts that the Greeks never joined: “telephone” (“far” and “voice”), “photograph” (“light” and “writing”), “thermometer” (“heat” and “measure”). Such words are compounds in their origin, but in English they are learned as single words, and most speakers do not recognize their parts. The student who knows the parts can understand many such words on first meeting them: a “hydrometer” must measure water, and a “chronometer” time.</p>`,
  src: `Standard dictionaries (the <i>Oxford English Dictionary</i>), in paraphrase.` },

{ id: 'english',
  title: 'English compounds',
  body: `<p>English forms compounds of many kinds:<br>noun and noun: “bookcase,” “toothbrush,” “railroad”;<br>adjective and noun: “blackbird,” “greenhouse,” “highway”;<br>verb and noun: “pickpocket,” “breakwater”;<br>noun and agent noun: “shoemaker,” “housekeeper”;<br>adjective and participle: “good-looking,” “kind-hearted.”</p>
<p>In most English compounds the last part is the principal one, and the first part determines it. A “houseboat” is a kind of boat, and a “boathouse” is a kind of house; a “toothbrush” is a brush, and a “bookcase” is a case. The principal part is often called the <strong>head</strong> of the compound. So the order of the parts matters, as it does in an English phrase, and the meaning of the compound depends on it.</p>`,
  src: `Marchand, <i>Categories and Types</i>, ch. 2; Duden, on compounds; both in paraphrase.`,
  qpTodo: `English compounds: in a given compound (“houseboat,” “boathouse,” “toothbrush”), which part is the head, and what kind of thing does the compound signify.` },

{ id: 'german',
  title: 'German compounds',
  body: `<p>German shows the pattern of composition most clearly, because it forms compounds very freely and writes them as one word. <i>Handschuh</i> (“glove”) is made of <i>Hand</i> (“hand”) and <i>Schuh</i> (“shoe”); <i>Krankenhaus</i> (“hospital”) of <i>krank</i> (“sick”) and <i>Haus</i> (“house”); <i>Fingerhut</i> (“thimble”) of <i>Finger</i> and <i>Hut</i> (“hat”). As in English, the last part is the head: a <i>Handschuh</i> is a kind of shoe for the hand.</p>
<p>German compounds can be very long, because a compound can itself become part of a larger compound: <i>Donau</i> (“Danube”) and <i>Dampfschiff</i> (“steamship”) give <i>Donaudampfschiff</i> (“Danube steamship”), and further parts can be added. English expresses the same meanings either by compounds written as separate words (“Danube steamship company”) or by phrases with prepositions (“a company of steamships on the Danube”).</p>`,
  src: `Duden, <i>Die Grammatik</i>, on compounds, in paraphrase.` },

{ id: 'meaning',
  title: 'The meaning of a compound',
  body: `<p>We saw in Section I that the parts of a word do not signify by themselves within it, and compounds show this clearly. The meaning of a compound is not always the sum of the meanings of its parts. A “greenhouse” need not be green, a “blackboard” is often green, and a “butterfly” is neither butter nor a fly. Over time a compound may come to signify something that its parts no longer suggest, and then it must be learned as a single word.</p>
<p>We also saw that English distinguishes a compound from a phrase by its stress: a “BLACKbird” is a kind of bird, and a “black BIRD” is any bird that is black. Latin and German, which write their compounds as one word and give them one accent, make the distinction in writing as well as in speech. So a compound is recognized by its unity as a word, in meaning, in accent, and often in spelling, not by the separate meanings of its parts.</p>`,
  src: `Marchand, <i>Categories and Types</i>, ch. 2, in paraphrase.` },

{ id: 'together',
  title: 'Composition and derivation together',
  body: `<p>Many words are formed by both composition and derivation, in an order that can be traced. “Unbreakable” is formed from “break” by the suffix “-able,” giving “breakable,” and then by the prefix “un-,” giving “unbreakable.” Latin <i>inimīcitia</i> (“enmity”), as we saw in Section III, is formed from <i>amīcus</i> by composition with <i>in-</i>, giving <i>inimīcus</i> (“enemy”), and then by derivation with <i>-itia</i>.</p>
<p>So the formation of a word can be analyzed step by step, as a sentence can, and the analysis shows how the meaning of the whole is built from its parts. This analysis concerns how a word is made in the language as it is; the history of where a word came from, and how its form and meaning changed over time, is the subject of etymology, which we study next.</p>`,
  src: `Marchand, <i>Categories and Types</i>, in paraphrase.` }

  ]
};
