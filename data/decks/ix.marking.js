/* IX.3 Workshop and Marking [ix.marking]
   Plan (ITEM-LIST.md): 2 panels, no question points. Exercise: the marking drill on 36 stored sentences (written; composed sentences).
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
  body: `<p>In “The young gardener waters the roses,” “young” depends on “gardener,” each “the” depends on its noun, and “waters” depends on “gardener” and on “roses.” Every construction, as we saw in Section V, joins a word that depends to a word that terminates its dependence, and so a sentence contains as many constructions as it has dependences. Marking a sentence makes all of them visible at once: an arrow is drawn from each word that depends to the word on which it depends, so that in this sentence an arrow runs from “young” to “gardener,” from each “the” to its noun, and from “waters” to each of its two nouns.</p>
<p>The arrows follow Thomas of Erfurt, as in Section V: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it has one, on its object. A preposition depends on the word to which it relates its phrase, and its noun depends on the preposition. The English article, which is not one of Donatus’s eight parts, is drawn as depending on its noun, as an adjective does. A sentence marked by these conventions can then be checked.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'stored-analysis',
  title: 'Comparing the marks with an analysis',
  body: `<p>A marking can be checked against a complete analysis of the same sentence, in which every dependence is recorded by these conventions. An arrow that matches the analysis is correct; an arrow that is missing or drawn the wrong way shows a construction that has not been found or has been misunderstood. So marking a sentence tests whether every construction in it has been found and understood.</p>
<p>The conventions matter, because different grammars draw some dependences differently. We saw in Section V that Tesnière makes the subject depend on the verb, whereas Thomas makes the verb depend on the subject. The conventions given here follow Thomas throughout, so that every sentence is marked by one consistent account.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments de syntaxe structurale</i>; both in paraphrase.` }

  ]
};
