/* IX.3 Workshop and Marking [ix.marking]
   Plan (ITEM-LIST.md): 2 panels, no question points. Exercise: the marking drill on 36 stored sentences (not yet written).
   Live material drawn on: DECKS.markup (marking every dependence; the article). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ix.marking'] = {
  id: 'ix.marking',
  title: 'Workshop and Marking',
  sub: 'Marking every dependence in a sentence whose analysis is stored',
  sources: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction.`,
  panels: [

{ id: 'every-dependence',
  title: 'Marking every dependence',
  body: `<p>We saw in Section V that every construction joins a word that depends to a word that terminates its dependence, and that a sentence contains as many constructions as it has dependences. Marking a sentence makes all of them visible at once. An arrow is drawn from each word that depends to the word on which it depends. So in “The brave sailor sees the king,” arrows run from “brave” to “sailor,” from each “the” to its noun, and from “sees” to “sailor” and to “king.”</p>
<p>The arrows follow Thomas of Erfurt, as in Section V: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it has one, on its object. A preposition depends on the word to which it relates its phrase, and its noun depends on the preposition. The English article, which is not one of Donatus’s eight parts, is drawn as depending on its noun, as an adjective does.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'stored-analysis',
  title: 'Comparing the marks with an analysis',
  body: `<p>Each sentence used for marking has an analysis prepared in advance, in which every dependence is recorded by these conventions. When a sentence is marked, each arrow is compared with the stored analysis: an arrow that matches is confirmed, an arrow that is missing or drawn the wrong way is shown with the correct one. So the marking is a test of whether every construction in the sentence has been found and understood in the same way.</p>
<p>The conventions matter, because different grammars draw some dependences differently. We saw in Section V that Tesnière makes the subject depend on the verb, while Thomas makes the verb depend on the subject. The stored analyses follow Thomas throughout, so that the marks are judged by one consistent account, and the student who knows the account can mark any sentence by it.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments de syntaxe structurale</i>; both in paraphrase.` }

  ]
};
