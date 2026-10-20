/* IX.3 Workshop and Marking [ix.marking]
   Plan (ITEM-LIST.md): 2 panels, no question points; two panels added from notes/IX3-MARKING-RULES.md (Timothy, 20 Oct 2026), in its wording.
   Exercise: the marking drill on 48 stored sentences (written; composed sentences).
   Live material drawn on: DECKS.markup (marking every dependence; the article). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ix.marking'] = {
  id: 'ix.marking',
  title: 'Workshop and Marking',
  sub: 'Marking every dependence in a sentence whose analysis is stored',
  sources: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction, the pronoun, and the conjunction.`,
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
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments de syntaxe structurale</i>; both in paraphrase.` },

{ id: 'conjunctions',
  title: 'Conjunctions, possessive adjectives, appositives, and infinitives',
  body: `<p>A conjunction signifies by the mode of joining two things, and so it requires two words to join; it depends on both. In “Peter and Paul run,” draw an arrow from “and” to “Peter” and from “and” to “Paul,” and, since the running belongs to each of them, draw an arrow from “run” to “Peter” and from “run” to “Paul.” So also in <i>Petrus et Paulus currunt</i>: <i>et</i> depends on <i>Petrus</i> and on <i>Paulus</i>, and <i>currunt</i> depends on each. Mark “or” in the same way: in “Tea or coffee pleases him,” “or” depends on “Tea” and on “coffee.” When the conjunction joins two clauses, it depends on the verb of each: in “The wind rose, and the ships sailed,” “and” depends on “rose” and on “sailed.”</p>
<p>A possessive adjective is an adjective, so it depends on its noun: in “My brother reads,” “My” depends on “brother”; in <i>frāter meus legit</i>, <i>meus</i> depends on <i>frāter</i>.</p>
<p>A noun in apposition explains another noun, as an adjective does, and so it depends on that noun: in “Paul, the apostle, wrote,” “apostle” depends on “Paul”; in <i>Cicerō cōnsul dīxit</i> (“Cicero, the consul, spoke”), <i>cōnsul</i> depends on <i>Cicerō</i>. An infinitive that completes a verb is marked as its object: in “She wants to sing,” “wants” depends on “sing,” and “to,” which is not one of Donatus’s eight parts, is drawn as depending on “sing,” as the article depends on its noun. In <i>volō legere</i> (“I wish to read”), <i>volō</i> depends on <i>legere</i>.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction, the pronoun, and the conjunction (Bursill-Hall), in paraphrase.` },

{ id: 'relatives',
  title: 'Relatives',
  body: `<p>A relative pronoun refers to a noun already named, its antecedent, and agrees with it in gender and number, as an adjective agrees with its noun; so the relative depends on its antecedent, and the relative clause hangs from the antecedent by the relative. Within its own clause the relative is marked like any noun. In “The boy who runs wins,” “who” depends on “boy,” “runs” depends on “who” as on its subject, and “wins” depends on “boy.” In <i>puer quem vīdī currit</i> (“the boy whom I saw runs”), <i>quem</i> depends on <i>puer</i>, <i>vīdī</i> depends on <i>quem</i> as on its object, and <i>currit</i> depends on <i>puer</i>. Mark an adjective clause introduced by “that” or “which” in the same way.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction, the pronoun, and the conjunction (Bursill-Hall), in paraphrase.` }

  ]
};
