/* V.7 The Clause [v.clause]
   Plan (ITEM-LIST.md): 10 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.ensent (subject and predicate, the six patterns), DECKS.encl (clause, three works of a
   dependent clause, four kinds of sentence, a longer period), DECKS.clauses (kinds of clause, purpose and result, indirect
   speech), DECKS.endiag (the diagram). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.clause'] = {
  id: 'v.clause',
  title: 'The Clause',
  sub: 'Subject and predicate, and independent and dependent clauses',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVII–XVIII; Reed and Kellogg, <i>Higher Lessons in English</i> (1877); Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'what-clause',
  title: 'What is a clause?',
  body: `<p>The sentence “The bell rang when the gate shut” contains two groups of words, each with its own subject and verb: “The bell rang” and “when the gate shut.” The first could stand as a sentence by itself, but the second could not. A <strong>clause</strong> is a group of words that has its own subject and finite verb. Some clauses can stand as a sentence by themselves; they are called <strong>independent</strong> (or main) clauses. Others cannot, because they depend on another clause; they are called <strong>dependent</strong> or <strong>subordinate</strong> clauses. The two names, dependent and subordinate, are both in ordinary use and mean the same thing.</p>
<p>So in “The bell rang when the gate shut,” “The bell rang” is an independent clause, and “when the gate shut” is a dependent clause, because it has a subject (“the gate”) and a verb (“shut”) but cannot stand alone; we saw that such a clause is congruous but incomplete. A dependent clause depends on a word in another clause, as a word or a phrase does, and it is used as a single part of speech: a noun, an adjective, or an adverb.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 278; Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.` },

{ id: 'subject-predicate',
  title: 'Subject and predicate in the clause',
  body: `<p>We saw that every complete sentence has a subject, what it is about, and a predicate, what is said of it. Every clause has the same two parts. The <strong>simple subject</strong> is the noun or pronoun itself; the <strong>complete subject</strong> is that word with all the words that depend on it. The <strong>simple predicate</strong> is the finite verb; the <strong>complete predicate</strong> is the verb with all the words that depend on it.</p>
<p>In “The bright stars of winter shine clearly,” the simple subject is “stars,” and the complete subject is “The bright stars of winter”; the simple predicate is “shine,” and the complete predicate is “shine clearly.” In Latin <i>ingēns turba forum complēvit</i>, “a huge crowd filled the forum,” the simple subject is <i>turba</i>, the complete subject <i>ingēns turba</i>, and the complete predicate <i>forum complēvit</i>.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.` },

{ id: 'patterns',
  title: 'The patterns of the clause',
  body: `<p>The predicate of an English clause takes one of a few patterns, according to what the verb requires:<br>subject and verb: “Jesus wept” (John 11:35);<br>subject, verb, and direct object: “God created the heaven”;<br>subject, verb, indirect object, and direct object: “The messenger gave the king a letter”;<br>subject, linking verb, and predicate noun: “The mind is its own place” (Milton, <i>Paradise Lost</i> I.254);<br>subject, linking verb, and predicate adjective: “The night grew cold”;<br>subject, verb, direct object, and objective complement: “Histories make men wise” (Bacon, “Of Studies”).</p>
<p>A <strong>linking verb</strong>, such as “be,” “seem,” or “become,” joins the subject to a word that renames or describes it, rather than carrying an action to an object. These patterns correspond to what we saw as the valency of the verb: each verb requires a certain number of words to complete it, and the patterns show what those words are.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i>; John 11:35 and Genesis 1:1 (King James Version); Milton, <i>Paradise Lost</i> I.254; Bacon, “Of Studies.”`,
  qpTodo: `The patterns: which pattern does a given clause have (“Jesus wept,” “The mind is its own place,” “Histories make men wise”), and what does each word after the verb do.` },

{ id: 'noun-clauses',
  title: 'Noun clauses',
  body: `<p>Macaulay writes, “Every schoolboy knows who imprisoned Montezuma, and who strangled Atahualpa” (“Lord Clive”). Each clause beginning with “who” is the object of “knows,” just as a noun would be in “Every schoolboy knows the story.” In “That he came is certain,” the clause “that he came” is the subject. A dependent clause used in this way as a noun, that is, as the subject, the object, or the complement of a verb, is called a <strong>noun clause</strong> (older grammars call it a substantive clause).</p>
<p>A noun clause after a verb of saying, thinking, or knowing reports what was said or thought, and this report is called <strong>indirect speech</strong> (<i>ōrātiō oblīqua</i>). English uses a clause with “that”: “He said that the road was safe.” Latin usually uses the accusative and the infinitive instead of a clause: <i>dīxit viam tūtam esse</i>, literally “he said the road to be safe.” If the report is of a question, it is an <strong>indirect question</strong>: “He asked whether the road was safe,” <i>rogāvit num via tūta esset</i>, with the verb in the subjunctive.</p>`,
  src: `Macaulay, “Lord Clive” (1840); Allen and Greenough, <i>New Latin Grammar</i> §§ 574–581.` },

{ id: 'adjective-clauses',
  title: 'Adjective clauses',
  body: `<p>In “the sailor who rescued us,” the clause “who rescued us” tells which sailor is meant, as an adjective does in “the brave sailor.” An <strong>adjective clause</strong>, also called a <strong>relative clause</strong>, depends on a noun and tells which one or what kind. It usually begins with a relative pronoun, “who,” “which,” or “that,” which refers to the noun. Milton writes, “They also serve who only stand and waite” (Sonnet XIX), where the clause “who only stand and waite” depends on “they” and tells which people serve.</p>
<p>We saw that the Latin relative pronoun agrees with its antecedent in gender and number and takes its case from its own clause: <i>liber quem lēgī</i>, “the book that I read.” The relative clause therefore joins two constructions: the relative belongs by its gender and number to the main clause and by its case to the dependent clause.</p>`,
  src: `Milton, Sonnet XIX (1673 spelling); Johnson, <i>Rasselas</i>, ch. 11; Allen and Greenough, <i>New Latin Grammar</i> §§ 303–308.`,
  qpTodo: `Adjective clauses: in a given sentence, mark the relative clause, give the noun it depends on, and say what case the relative would have in Latin and why.` },

{ id: 'adverb-clauses',
  title: 'Adverb clauses',
  body: `<p>In “We left when the rain stopped,” the clause “when the rain stopped” tells when we left, as the adverb “then” would in “We left then.” An <strong>adverb clause</strong> depends on a verb, an adjective, or another clause and tells when, where, why, how, under what condition, or in spite of what. The principal kinds are named by what they tell:<br><strong>temporal</strong> clauses tell when: “after the guests had gone,” <i>postquam hospitēs discessērunt</i>;<br><strong>causal</strong> clauses tell why: “because the night was dark,” <i>quia nox obscūra erat</i>;<br><strong>conditional</strong> clauses tell under what condition: “if the king consents,” <i>sī rēx cōnsentit</i>;<br><strong>concessive</strong> clauses tell in spite of what: “although the road was long,” <i>quamquam via longa erat</i>;<br><strong>purpose</strong> clauses tell the end aimed at: “so that he might see,” <i>ut vidēret</i>;<br><strong>result</strong> clauses tell what followed: “so dark that no one saw,” <i>tam obscūra ut nēmō vidēret</i>.</p>
<p>A condition and a concession differ in this way: a condition grants a case, and the main clause holds only in that case; a concession grants the case and holds that the main clause is true all the same.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 512–550, in paraphrase.`,
  qpTodo: `Adverb clauses: what does a given adverb clause tell (time, cause, condition, concession, purpose, result), and which conjunction shows it.` },

{ id: 'latin-mood',
  title: 'How Latin marks the kinds of clause',
  body: `<p>English marks the kinds of dependent clause chiefly by the conjunction or relative word that begins them. Latin marks many of them by the mood of the verb as well. A clause of purpose and a clause of result both begin with <i>ut</i> and both take the subjunctive, but they differ in their negative and in the words that prepare for them: a purpose clause is negated by <i>nē</i> (<i>nē vidēret</i>, “so that he might not see”), and a result clause by <i>ut nōn</i>, and a result clause is usually prepared by a word of degree such as <i>tam</i> (“so”) or <i>tantus</i> (“so great”) in the main clause.</p>
<p>So the question to ask of a clause with <i>ut</i> is whether it states what was aimed at or what followed. We saw that the modists explain mood as the inclination of the mind toward what is said; here the subjunctive marks what is not stated as a fact but as aimed at, supposed, or dependent on another. We will see more of mood in construction later in this section.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 531–538, in paraphrase.` },

{ id: 'kinds-of-sentence',
  title: 'Simple, compound, and complex sentences',
  body: `<p>Some sentences contain a single clause, and others contain several, which may be of equal rank or one dependent on another. Sentences are therefore classed by the clauses they contain:<br>a <strong>simple</strong> sentence has one independent clause and no dependent clause: “Studies serve for delight, for ornament, and for ability” (Bacon, “Of Studies”), which is long but has only one finite verb;<br>a <strong>compound</strong> sentence has two or more independent clauses: “Cowards die many times before their deaths; / The valiant never taste of death but once” (Shakespeare, <i>Julius Caesar</i> II.2);<br>a <strong>complex</strong> sentence has one independent clause and at least one dependent clause: “When the sun rose, the birds began to sing”;<br>a <strong>compound-complex</strong> sentence has at least two independent clauses and at least one dependent clause.</p>
<p>The joining of clauses of equal rank, side by side, is called <strong>parataxis</strong> (Greek, “placing beside”); the joining of a dependent clause to a main clause is called <strong>hypotaxis</strong> (Greek, “placing under”). Latin prose, especially Cicero’s, favors hypotaxis, and we will study its long sentences of many clauses as the period.</p>`,
  src: `Bacon, “Of Studies”; Shakespeare, <i>Julius Caesar</i> II.2; Reed and Kellogg, <i>Higher Lessons in English</i>, in paraphrase.`,
  qpTodo: `Analysis: is a given sentence simple, compound, complex, or compound-complex; mark each clause and say whether it is independent or dependent.` },

{ id: 'diagram',
  title: 'Clauses in a diagram',
  body: `<p>A dependent clause can also be shown in a diagram, where it is drawn as a small sentence of its own attached to the word on which it depends. Reed and Kellogg draw a dependent clause on a base (main line) of its own, below the main line of the sentence, and join it to the word on which it depends by a dotted line. An adjective clause is joined to its noun; an adverb clause to the verb or other word it modifies, with the conjunction written on the dotted line; and a noun clause used as an object is set up on a support, called a stilt, in the place of the object.</p>
<p>So in “The tree that fell in the storm blocked the road,” the clause “that fell in the storm” is drawn on its own line, with a dotted line from “that” to “tree.” The diagram shows at a glance that the sentence has one independent clause and one dependent clause, and on which word the dependent clause depends.</p>`,
  src: `Reed and Kellogg, <i>Higher Lessons in English</i> (1877), on the diagram of clauses, in paraphrase.` },

{ id: 'johnson',
  title: 'Analyzing a sentence of Johnson',
  body: `<p>Johnson has Imlac say: “Human life is everywhere a state in which much is to be endured and little to be enjoyed” (<i>Rasselas</i>, ch. 11). The independent clause is “Human life is everywhere a state,” with the pattern of subject, linking verb, and predicate noun. The clause “in which much is to be endured and little to be enjoyed” depends on “state,” so it is an adjective clause. Within it, “and” joins “much is to be endured” to “little to be enjoyed,” where “is” is understood.</p>
<p>The whole sentence is complex, not compound, because it has only one independent clause. This is the kind of analysis that every sentence admits: we find the independent clause and its pattern, then each dependent clause and the word on which it depends, then the phrases and single words that depend within each clause.</p>`,
  src: `Johnson, <i>Rasselas</i>, ch. 11.`,
  qpTodo: `Analysis: in a given sentence, find the independent clause and its pattern, and each dependent clause with the word on which it depends.` }

  ]
};
