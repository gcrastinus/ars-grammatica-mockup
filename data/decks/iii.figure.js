/* III.3 Figure and Species [iii.figure]
   Plan (ITEM-LIST.md): 8 panels, 2 question points (placeholders: qpTodo; to be written). Exercise: Figure and Species
   (not yet written). IV.2 (Composition) takes up composition again and refers back here.
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Donatus and Priscian. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.figure'] = {
  id: 'iii.figure',
  title: 'Figure and Species',
  sub: 'Simple and compound words, and primitive and derived words',
  sources: `Donatus, <i>Ars minor</i>, on the figure of the noun, and <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> IV–V.`,
  panels: [

{ id: 'two-accidents',
  title: 'Two accidents that concern the make of a word',
  body: `<p>“Untie” is made from “tie,” and “darkness” from “dark”: in the first pair a word is joined to another part, and in the second an ending is added to a word. We have seen that each part of speech has its accidents, and that the accidents are studied with the part to which they belong. Two accidents, however, are shared by nearly all the parts, and they concern not the relation of a word to the sentence but the way the word itself is made. They are <strong>figure</strong> (Latin <i>figura</i>) and <strong>species</strong> (Latin <i>species</i>).</p>
<p>Figure is the distinction between a simple word and a compound word. Species is the distinction between a primitive word, which is not formed from another word, and a derived word, which is. So both accidents ask whether a word is made from other words, and if so, how. We study them before the individual parts, because they apply to all of them.</p>`,
  src: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> IV–V, in paraphrase.` },

{ id: 'simple-compound',
  title: 'Simple and compound',
  body: `<p>Some words are made of other words, or of a word and a prefix, and some are not. <i>Potēns</i> (“powerful”) is not made of other words, but <i>impotēns</i> (“powerless”) is made of the prefix <i>in-</i> (“not”) and the word <i>potēns</i>. This difference in how a word is made is called its <strong>figure</strong>, and there are two figures. Donatus states it in his question-and-answer form: “How many figures of nouns are there? Two. Which? The simple, as <i>decens</i> (‘fitting’) and <i>potens</i>; the compound, as <i>indecens</i> (‘unfitting’) and <i>inpotens</i>” (<i>figurae nominum quot sunt? duae. quae? simplex, ut decens, potens; conposita, ut indecens, inpotens</i>; <i>Ars minor</i>).</p>
<p>So a <strong>simple</strong> word is one that is not made of two or more words or parts of words, and a <strong>compound</strong> word is one that is. English shows the same distinction: “able” is simple and “unable” compound; “house” is simple and “greenhouse” compound. A compound word is still one word, with one meaning, as we saw in Section I: the parts of “greenhouse” do not signify by themselves within it, and a greenhouse need not be green.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the noun.` },

{ id: 'four-ways',
  title: 'The four ways of compounding',
  body: `<p>When two words are joined into one, each may keep its whole form or change it. In “sunflower” both “sun” and “flower” stay whole, whereas in “holiday” (from “holy” and “day”) the vowel of “holy” has changed. So the parts of a compound may change their form when they are joined.</p>
<p>Donatus says that nouns are compounded in four ways (<i>Ars minor</i>): first, from two whole words, as <i>suburbānus</i> (“near the city”), from <i>sub</i> (“under,” “near”) and <i>urbānus</i> (“of the city”); second, from two words that are changed, as <i>efficāx</i> (“effective”) and <i>mūniceps</i> (“citizen of a town”); third, from a whole word and a changed one, as <i>īnsulsus</i> (“tasteless,” “silly”), from <i>in-</i> and <i>salsus</i> (“salted”); and fourth, from a changed word and a whole one, as <i>nūgigerulus</i> (“a carrier of trifles”). Sometimes a noun is compounded from more than two parts, as <i>inexpugnābilis</i> (“unconquerable”). The <i>a</i> of <i>salsus</i> becomes <i>u</i> in <i>īnsulsus</i>, and the <i>-ere</i> of <i>facere</i> disappears in <i>efficāx</i>.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the figure of the noun, in paraphrase.` },

{ id: 'english-compounds',
  title: 'Compounds in English',
  body: `<p>English forms compounds very freely, especially by joining two nouns, or an adjective and a noun: “bookcase,” “blackbird,” “toothbrush,” “railroad.” English spelling does not treat all compounds alike. Some are written as one word (“bookcase”), some with a hyphen (“mother-in-law”), and some as two words (“high school”), and the custom often changes over time, as “to-day” became “today.”</p>
<p>A compound is distinguished from a phrase chiefly by its meaning and, in speech, by its stress. A “blackbird” is a particular kind of bird, and the stress falls on “black”; a “black bird” is any bird that is black, and the stress falls on “bird.” So in English, as in Latin, a compound is one word with one meaning, even when it is written as two.</p>`,
  src: `Standard English grammars, in paraphrase.` },

{ id: 'all-parts',
  title: 'Compounds in the other parts of speech',
  body: `<p>Figure belongs not only to the noun but to the other parts of speech. Latin verbs are very often compounded with prepositions: <i>faciō</i> (“I make”) gives <i>cōnficiō</i> (“I complete”), <i>efficiō</i> (“I bring about”), and <i>perficiō</i> (“I finish”); <i>pōnō</i> (“I place”) gives <i>compōnō</i> (“I put together”) and <i>dēpōnō</i> (“I put down”). Pronouns, adverbs, and conjunctions can be compound as well, as <i>quisquis</i> (“whoever”), <i>īdem</i> (“the same”), <i>postquam</i> (“after”), and English “whoever,” “therefore,” and “nevertheless.”</p>
<p>Many English words are compounds of the same kind, borrowed from Latin: “deposit,” “component,” “postpone,” and “opponent” all contain the Latin <i>pōnere</i> (“to place”), though English speakers are rarely aware of it. English also forms compounds of its own, as “understand,” “withdraw,” and “overcome.”</p>`,
  src: `Donatus, <i>Ars maior</i> II; Allen and Greenough, <i>New Latin Grammar</i>, on compound verbs.`,
  qpTodo: `Simple or compound: given a word (<i>impotēns</i>, <i>cōnficiō</i>, “understand,” “house”), is it simple or compound, and of what parts is it made.` },

{ id: 'species',
  title: 'Primitive and derived words',
  body: `<p>“Kingdom” is formed from “king,” “kindness” from “kind,” and “golden” from “gold,” in each case by adding an ending, whereas “king,” “kind,” and “gold” are not formed from another English word. Latin forms words in the same way: <i>montānus</i> (“of the mountains”) is formed from <i>mōns</i> (“mountain”), and <i>ferreus</i> (“of iron”) from <i>ferrum</i> (“iron”). The second accident, then, concerns whether a word is formed from another word.</p>
<p>Priscian calls this accident species and divides it into two: the <strong>primitive</strong> species (<i>principālis</i>), which belongs to a word that is not formed from another, and the <strong>derived</strong> species (<i>dērīvātīva</i>), which belongs to a word that is formed from another (<i>Institutiones grammaticae</i> II). A derived word may belong to a different part of speech from its primitive, as “golden” is an adjective formed from the noun “gold,” and “widen” a verb formed from the adjective “wide.”</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> IV, in paraphrase.` },

{ id: 'figure-vs-species',
  title: 'Composition and derivation are different',
  body: `<p>Composition and derivation are often confused, but they differ. In <strong>composition</strong> two words, or parts of words, are joined, and each part can usually be found as a word of the language: <i>in-</i> and <i>potēns</i>; “green” and “house.” In <strong>derivation</strong> one word is formed from another, usually by adding an ending that is not itself a word: <i>mōns</i> and <i>-ānus</i>; “king” and “-dom.”</p>
<p>So the two accidents answer different questions, and one word can have both. Latin <i>inimīcitia</i> (“enmity”) is compound, because <i>inimīcus</i> (“enemy”) is made of <i>in-</i> (“not”) and <i>amīcus</i> (“friend”), and it is also derived, because <i>inimīcitia</i> is formed from <i>inimīcus</i> by the ending <i>-itia</i>. In English, “unkindness” is compound in the same way, from “un-” and “kind,” and derived, by the ending “-ness.”</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> IV–V, in paraphrase.`,
  qpTodo: `Figure and species together: is a given word (<i>inimīcitia</i>, “unkindness,” <i>montānus</i>, “greenhouse”) simple or compound, and primitive or derived.` },

{ id: 'to-iv',
  title: 'Figure, species, and word formation',
  body: `<p>We have now seen that a word may be simple or compound and primitive or derived, and that both accidents concern how a word is made from other words. The grammarians treat them as accidents of each part of speech, because in Latin they belong to the noun, the pronoun, the verb, the participle, the adverb, and the conjunction alike.</p>
<p>Section IV returns to these questions at greater length. There we will study how derived words are formed by their endings, how compounds are formed and what changes their parts undergo, and how the grammarians traced words to their origins in what they called etymology. These distinctions are the foundation of that study.</p>`,
  src: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> IV–V.` }

  ]
};
