/* IX.1 Analysis of Sentences [ix.sentences]
   Plan (ITEM-LIST.md): 3 panels (method only), no question points. Exercise: pool of 60 sentences (not yet written).
   Live material drawn on: none for the method panels. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ix.sentences'] = {
  id: 'ix.sentences',
  title: 'Analysis of Sentences',
  sub: 'Parsing and construing whole sentences',
  sources: `Quintilian, <i>Institutio oratoria</i> I.8; Priscian, <i>Partitiones duodecim versuum Aeneidos principalium</i>; Reed and Kellogg, <i>Higher Lessons in English</i>.`,
  panels: [

{ id: 'parsing-construing',
  title: 'Parsing and construing',
  body: `<p>We have studied the parts of speech and their accidents, and the construction of words in the sentence. The analysis of a sentence applies both studies at once. Of each word in “The farmer sold the cow,” we can say what it is (“farmer” is a noun, singular in number) and how it goes with the others (“farmer” is the subject of “sold,” and “cow” is its object). So the analysis has two parts. To <strong>parse</strong> a word is to say what part of speech it is and to give its accidents: for a noun, its gender, number, and case; for a verb, its person, number, tense, mood, and voice. To <strong>construe</strong> a sentence is to show how its words are constructed together: which word depends on which, which agree, and which govern.</p>
<p>We saw in the Preliminary section that Quintilian’s teacher asks his class, after analyzing a verse, to give the parts of speech and the feet it contains. Priscian wrote a whole book of such questions, the <i>Partitiones</i>, on the first line of each of the twelve books of the <i>Aeneid</i>. For <i>arma virumque cano Troiae qui primus ab oris</i> he first describes the meter and its divisions. He then asks how many parts of speech the line has (nine: six nouns, one verb, one preposition, and one conjunction), and for each word he asks what part of speech it is, of what kind, gender, figure, and case. Of <i>arma</i>, for example, he asks why it has no singular, which compounds are formed from it (<i>armiger</i>, <i>armipotens</i>), and how we know that it is accusative here; he answers, from its construction with the other words (<i>Partitiones</i> 1). This was the method of the schools for a thousand years.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13; Priscian, <i>Partitiones</i> 1, in paraphrase (checked against the Latin text).` },

{ id: 'order-of-steps',
  title: 'The order of the steps',
  body: `<p>A sentence is analyzed most surely from the main verb outward. The first step is to find each finite verb, and so the number of clauses, and then the independent clause and its main verb. The next is to find the subject of the main verb, which agrees with it in person and number, and the words that the verb requires: its object, its predicate noun or adjective, or its indirect object. Then come the dependent clauses, each with the word on which it depends and its kind, and within each clause the phrases and the single words that depend on others.</p>
<p>The last step is to parse each word. In Latin the endings make most of the construction visible, so the parsing and the construing support each other: the case of a noun shows its construction, and the construction confirms the case. In English the order of words carries most of the construction, and the parsing depends more on the use of each word in its sentence, as we saw with the parts of speech in Section III.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>; Allen and Greenough, <i>New Latin Grammar</i>; both in paraphrase.` },

{ id: 'example',
  title: 'An analysis worked through',
  body: `<p>The sentence <i>Puer quem vīdistī librum ad magistrum portat</i>, “The boy whom you saw is carrying the book to the teacher,” has two finite verbs, <i>vīdistī</i> and <i>portat</i>, so it has two clauses. The independent clause is <i>puer librum ad magistrum portat</i>: <i>portat</i> is the main verb, third person singular present indicative active, and its subject is <i>puer</i>, nominative singular masculine, with which it agrees. <i>Librum</i> is accusative, governed by <i>portat</i> as its direct object. <i>Ad magistrum</i> is a prepositional phrase that depends on <i>portat</i> and tells where; <i>magistrum</i> is accusative, governed by <i>ad</i>.</p>
<p>The dependent clause <i>quem vīdistī</i> is a relative clause that depends on <i>puer</i>. <i>Quem</i> is masculine and singular, agreeing with its antecedent <i>puer</i>, and accusative, because it is the object of <i>vīdistī</i>, second person singular perfect indicative active, whose subject “you” is shown by its ending. The sentence is complex, and congruous and complete. The English translation has the same clauses and dependences, shown by its order and by the case of “whom.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` }

  ]
};
