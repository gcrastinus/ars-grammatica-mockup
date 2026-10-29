/* IX.1 Analysis of Sentences [ix.sentences]
   Plan (ITEM-LIST.md): 3 panels (method only), no question points. Exercise: pool of 60 sentences (written; composed sentences).
   Live material drawn on: none for the method panels. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ix.sentences'] = {
  id: 'ix.sentences',
  title: 'Analysis of Sentences',
  sub: 'Parsing and construing whole sentences',
  sources: `Quintilian, <i>Institutio oratoria</i> I.8; Priscian, <i>Partitiones duodecim versuum Aeneidos principalium</i>; Reed and Kellogg, <i>Higher Lessons in English</i>.`,
  recitation: [
    `The analysis of a sentence applies at once the study of the parts of speech and their accidents and the study of construction, so it has two parts.`,
    `Saying what part of speech a word is and giving its accidents is called <strong>parsing</strong> the word.`,
    `Showing how the words of a sentence are constructed together (which word depends on which, which agree, and which govern) is called <strong>construing</strong> the sentence.`,
    `Priscian wrote a whole book of such questions on the first line of each book of the <i>Aeneid</i>, asking of each word what part of speech it is, of what kind, gender, figure, and case, and how its case is known from its construction.`,
    `For more than a thousand years grammarians taught the analysis of sentences by this method of questions.`,
    `A sentence becomes clear once the main verb is found, because everything else depends on it, directly or through another word, so a sentence is analyzed most surely from the main verb outward.`,
    `The first step is to find each finite verb, and so the number of clauses, and then the independent clause and its main verb.`,
    `The second step is to find the subject of the main verb, which agrees with it in person and number, and the words that the verb requires: its object, its predicate noun or adjective, or its indirect object.`,
    `The third step is to find each subordinate clause, the word on which it depends, and its kind.`,
    `The fourth step is to find, within each clause, the phrases and the single words that depend on others.`,
    `The parsing of each word comes last.`,
    `In Latin the endings make most of the construction visible, so parsing and construing support each other: the case of a noun shows its construction, and the construction confirms the case.`,
    `In English the order of words carries most of the construction, and the parsing depends more on the use of each word in its sentence.`,
    `In a worked analysis the finite verbs are counted to find the clauses, the main verb is parsed and its subject found by agreement, and its object is found by the case that the verb governs.`,
    `A prepositional phrase is assigned to the word on which it depends, and its noun is governed by the preposition.`,
    `A relative clause depends on its antecedent; the relative agrees with the antecedent in gender and number and takes its case from its use in its own clause.`,
    `The analysis ends by saying what kind of sentence it is and whether it is congruous and complete.`
  ],
  panels: [

{ id: 'parsing-construing',
  title: 'Parsing and construing',
  body: `<p>Of each word in “The child kicked the ball,” we can say two things: what it is (“child” is a noun, singular in number) and how it goes with the others (“child” is the subject of “kicked,” and “ball” is its object). The first applies the study of the parts of speech and their accidents, and the second the study of construction, as we noted earlier in Sections III and V; the analysis of a sentence applies both at once. So the analysis has two parts. Saying what part of speech a word is and giving its accidents (for a noun, its gender, number, and case; for a verb, its person, number, tense, mood, and voice) is called <strong>parsing</strong> the word. Showing how the words of a sentence are constructed together (which word depends on which, which agree, and which govern) is called <strong>construing</strong> the sentence.</p>
<p>We saw in the Preliminary section that Quintilian’s teacher asks his class, after analyzing a verse, to give the parts of speech and the feet it contains. Priscian, the Latin grammarian who taught at Constantinople about AD 500, wrote a whole book of such questions, the <i>Partitiones</i>, on the first line of each of the twelve books of the <i>Aeneid</i>. For <i>arma virumque cano Troiae qui primus ab oris</i> he first describes the meter and its divisions. He then asks how many parts of speech the line has (nine: six nouns, one verb, one preposition, and one conjunction), and for each word he asks what part of speech it is, of what kind, gender, figure, and case. Of <i>arma</i>, for example, he asks why it has no singular, which compounds are formed from it (<i>armiger</i>, <i>armipotens</i>), and how we know that it is accusative here; he answers, from its construction with the other words (<i>Partitiones</i> 1). For more than a thousand years grammarians taught the analysis of sentences by this method.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.8.13; Priscian, <i>Partitiones</i> 1, in paraphrase (checked against the Latin text).` },

{ id: 'order-of-steps',
  title: 'The order of the steps',
  body: `<p>A reader who takes “When the storm ended, the fishermen who had sheltered in the harbor put out to sea” word by word from the beginning meets a subordinate clause, then a subject, then another subordinate clause, and reaches the main verb, “put,” only near the end. The sentence becomes clear once the main verb is found, because everything else depends on it, directly or through another word. So a sentence is analyzed most surely from the main verb outward, in these steps:</p>
<p><strong>The clauses:</strong> find each finite verb, and so the number of clauses; then the independent clause and its main verb. Two verbs with one subject, a compound predicate, make one clause.<br><strong>The main verb’s words:</strong> find the subject of the main verb, which agrees with it in person and number, and the words that the verb requires: its object, its predicate noun or adjective, or its indirect object.<br><strong>The subordinate clauses:</strong> find each subordinate clause, the word on which it depends, and its kind.<br><strong>The phrases and single words:</strong> within each clause, find the phrases and the single words that depend on others.<br><strong>The parsing:</strong> parse each word.</p>
<p>The parsing comes last. In Latin the endings make most of the construction visible, so the parsing and the construing support each other: the case of a noun shows its construction, and the construction confirms the case. In English the order of words carries most of the construction, and the parsing depends more on the use of each word in its sentence, as we saw with the parts of speech in Section III. Each of these steps can be seen in a single worked example.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>; Allen and Greenough, <i>New Latin Grammar</i>; both in paraphrase.` },

{ id: 'example',
  title: 'An analysis worked through',
  body: `<p>The sentence <i>Faber quem vocāvistī sellam ad vīllam portat</i>, “The carpenter whom you called is carrying the chair to the farmhouse,” has two finite verbs, <i>vocāvistī</i> and <i>portat</i>, so it has two clauses. The independent clause is <i>faber sellam ad vīllam portat</i>: <i>portat</i> is the main verb, third person singular present indicative active, and its subject is <i>faber</i>, nominative singular masculine, with which it agrees. <i>Sellam</i> is accusative, governed by <i>portat</i> as its direct object. <i>Ad vīllam</i> is a prepositional phrase that depends on <i>portat</i> and tells where; <i>vīllam</i> is accusative, governed by <i>ad</i>.</p>
<p>The subordinate clause <i>quem vocāvistī</i> is a relative clause that depends on <i>faber</i>. <i>Quem</i> is masculine and singular, agreeing with its antecedent <i>faber</i>, and accusative, because it is the object of <i>vocāvistī</i>, second person singular perfect indicative active, whose subject “you” is shown by its ending. The sentence is complex, and congruous and complete. The English translation has the same clauses and dependences, shown by its order and by the case of “whom.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` }

  ]
};
