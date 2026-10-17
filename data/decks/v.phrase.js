/* V.6 The Phrase [v.phrase]
   Plan (ITEM-LIST.md): 8 panels, 4 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.enphr (phrase, five kinds, form and function, in the authors, participle and gerund). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.phrase'] = {
  id: 'v.phrase',
  title: 'The Phrase',
  sub: 'Groups of words that act as one part of speech',
  sources: `Alonzo Reed and Brainerd Kellogg, <i>Higher Lessons in English</i> (1877); Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'what-phrase',
  title: 'What is a phrase?',
  body: `<p>We saw that a preposition and its noun make a group that depends on another word as a whole. Such a group is called a <strong>phrase</strong>: a group of words that is used as a single part of speech and does not contain a subject and a finite verb of its own. A <strong>finite verb</strong> is a verb that has person and number and can make a statement with its subject, as “wept” or “is.” The infinitive (“to be”) and the participle (“walking”) are forms of the verb, but they are not finite, so a group built on them can still be a phrase.</p>
<p>So in “The house on the hill is old,” “on the hill” is a phrase, because the three words together do the work of one adjective, telling which house. But “The house that stands on the hill is old” contains a clause, “that stands on the hill,” because it has a subject (“that”) and a finite verb (“stands”). The phrase is the larger unit of construction between the word and the clause.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>, on phrases, in paraphrase.` },

{ id: 'form-function',
  title: 'Form and function',
  body: `<p>A phrase can be named in two ways: by its <strong>form</strong>, that is, by what it is built from, and by its <strong>function</strong>, that is, by how it is used in the sentence. By form, a phrase may be prepositional, participial, gerund, infinitive, or appositive. By function, it may be used as a noun, as an adjective, or as an adverb.</p>
<p>The two names do not compete; they answer different questions. In “The house on the hill is old,” “on the hill” is a prepositional phrase by form, and it is used as an adjective, because it tells which house. In “We met on the hill,” the same phrase is used as an adverb, because it tells where. This is the same principle that we followed with the parts of speech in Section III: a word, or a group of words, is named by how it is used in the sentence.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.` },

{ id: 'prepositional',
  title: 'The prepositional phrase',
  body: `<p>A <strong>prepositional phrase</strong> begins with a preposition and ends with its object, with any words that depend on the object: “of mercy,” “in the state of Denmark,” “for delight.” It is usually used as an adjective, telling which one or what kind, or as an adverb, telling when, where, how, or why.</p>
<p>In Portia’s line “The quality of mercy is not strain’d” (Shakespeare, <i>The Merchant of Venice</i> IV.1), “of mercy” depends on “quality” and tells which quality, so it is used as an adjective. In “They arrived after the storm,” “after the storm” depends on “arrived” and tells when, so it is used as an adverb. Latin prepositional phrases are used in the same ways: <i>post tempestātem vēnērunt</i>, “they came after the storm.” But Latin also expresses many such relations by a case alone, without a preposition: <i>gladiō</i>, “with a sword.”</p>`,
  src: `Shakespeare, <i>The Merchant of Venice</i> IV.1; Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.`,
  qpTodo: `The prepositional phrase: in a given sentence, which word does the phrase depend on, and is it used as an adjective or as an adverb (“The quality of mercy,” “arrived after the storm”).` },

{ id: 'participial-gerund',
  title: 'Participial and gerund phrases',
  body: `<p>A <strong>participial phrase</strong> is built on a participle and is used as an adjective, because the participle depends on a noun: in “Walking into the city, Caesar saw the gates,” “walking into the city” depends on “Caesar.” A <strong>gerund phrase</strong> is built on the form in <i>-ing</i> used as a noun: in “Reading old books takes time,” “reading old books” is the subject of “takes.”</p>
<p>We saw in Section III that the participle and the gerund have the same form in English, and that their use decides which they are. The same is true of the phrases. “Walking into the city, Caesar saw the gates” has a participial phrase, and “Walking into the city was slow” has a gerund phrase. In the first the phrase describes Caesar; in the second it names an action and is the subject of the sentence.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.` },

{ id: 'infinitive',
  title: 'The infinitive phrase',
  body: `<p>An <strong>infinitive phrase</strong> is built on an infinitive with “to” and the words that depend on it. It may be used as a noun, as an adjective, or as an adverb. In Hamlet’s “To be, or not to be, that is the question” (<i>Hamlet</i> III.1), the two infinitive phrases are used as nouns: they are what “that” refers to. In Bacon’s “some few to be chewed and digested” (<i>Essays</i>, “Of Studies”), the infinitive phrase is used as an adjective, describing the books. In “She came to see the king,” the phrase “to see the king” is used as an adverb, telling why she came.</p>
<p>Latin uses the infinitive chiefly as a noun or to complete another verb, as we saw in Section III: <i>errāre hūmānum est</i>, “to err is human”; <i>scrībere sciō</i>, “I know how to write.” To express purpose, as in “She came to see the king,” Latin uses other constructions, such as a clause with <i>ut</i> or a phrase with the gerund, which we will meet with the clause.</p>`,
  src: `Shakespeare, <i>Hamlet</i> III.1; Bacon, <i>Essays</i>, “Of Studies”; Allen and Greenough, <i>New Latin Grammar</i> §§ 451–460.`,
  qpTodo: `The infinitive phrase: in a given sentence, is the infinitive phrase used as a noun, an adjective, or an adverb (“To be, or not to be”; “books to be chewed”; “came to see the king”).` },

{ id: 'appositive',
  title: 'The appositive phrase',
  body: `<p>An <strong>appositive</strong> (from Latin <i>appositus</i>, “placed beside”) is a noun or noun phrase placed beside another noun to identify or describe it: “Johnson, the author of <i>Rasselas</i>, lived in London.” The appositive “the author of <i>Rasselas</i>” tells which Johnson is meant, and it needs no verb or conjunction to join it. It refers to the same person as the noun beside it.</p>
<p>In Latin an appositive agrees with its noun in case: <i>Cicerō, cōnsul, senātum convocāvit</i>, “Cicero, the consul, called the senate together,” where <i>cōnsul</i> is nominative like <i>Cicerō</i>; and <i>Ciceronī cōnsulī librum dedit</i>, “he gave the book to Cicero the consul,” where both are dative. So apposition is a kind of agreement, in which two nouns that refer to the same thing take the same case.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 282, in paraphrase; Reed and Kellogg, <i>Higher Lessons in English</i>.` },

{ id: 'absolute',
  title: 'The absolute phrase',
  body: `<p>Latin has a phrase that has no exact counterpart in ordinary English: the <strong>ablative absolute</strong>. It consists of a noun and a participle (or another noun or adjective) in the ablative case, and it stands apart from the construction of the rest of the sentence, telling the time, cause, or circumstances of the action: <i>urbe captā, hostēs discessērunt</i>, “the city having been captured, the enemy departed,” or more naturally, “when the city had been captured, the enemy departed.” <i>Caesare duce</i>, “Caesar being leader,” means “under Caesar’s leadership.” It is called absolute (from <i>absolūtus</i>, “loosed”) because it is loosed from the construction of the main clause.</p>
<p>English has a similar construction, the <strong>nominative absolute</strong>, as in “The weather being fine, we sailed.” It is less common in English than the ablative absolute in Latin, and English usually prefers a clause: “Because the weather was fine, we sailed.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 419–420.`,
  qpTodo: `Analysis: in a given Latin sentence, mark the ablative absolute, give its noun and participle, and say what it tells about the main action.` },

{ id: 'diagram',
  title: 'Phrases in a diagram',
  body: `<p>In 1877 Alonzo Reed and Brainerd Kellogg, two American teachers, published <i>Higher Lessons in English</i>, which taught the analysis of sentences by drawing them as diagrams. In their diagrams the subject and the verb stand on a horizontal base (the main line), divided by a vertical line, and the words and phrases that depend on them are drawn on slanting lines below the word on which they depend.</p>
<p>So in “The quality of mercy is not strain’d,” the phrase “of mercy” is drawn below “quality,” with the preposition “of” on a slanting line and its object “mercy” on a horizontal line beneath. The diagram makes the dependence of the phrase visible in the same way that marking the dependences does: each phrase is placed under the word that it describes or determines.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i> (1877), on the diagram, in paraphrase.`,
  qpTodo: `Analysis: in a given sentence, mark each phrase, name it by form and by function, and say on which word it depends.` }

  ]
};
