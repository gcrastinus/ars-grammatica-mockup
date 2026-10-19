/* V.9 Mood and Voice in Construction [v.mood]
   Plan (ITEM-LIST.md): 10 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.latvoice (the passive and its doer, the infinitive, the participle), DECKS.latsubj (the
   subjunctive, four uses, the sequence of tenses, the imperative). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.mood'] = {
  id: 'v.mood',
  title: 'Mood and Voice in Construction',
  sub: 'The passive with its agent, the infinitive, the participle, and the subjunctive in clauses',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVIII; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'intro',
  title: 'Mood and voice as relations of construction',
  body: `<p>We studied mood and voice in Section III as accidents of the verb. They are also relations of construction, because they decide how the verb is joined to other words and how one clause is joined to another. The voice of a verb decides which word is its subject and how the doer of the action is expressed. The mood of a verb often shows whether its clause is independent or dependent, and what kind of dependent clause it is.</p>
<p>Priscian devotes the last book of his grammar to the construction of the verb with its cases and moods, and medieval grammarians learned from it that the verb is the center around which the construction of the sentence is arranged (<i>Institutiones grammaticae</i> XVIII). We will study the passive and its agent, the infinitive and the participle in construction, and the subjunctive in independent and dependent clauses.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVIII, in paraphrase.` },

{ id: 'agent',
  title: 'The passive and its agent',
  body: `<p>“The wall was built by the soldiers” and “The city was destroyed by fire” both use “by,” but the first names a person who acts and the second a thing that is used. We have seen that in a passive sentence the one who receives the action becomes the subject, and the doer may be named or left out. When the doer is a person, Latin expresses it by <i>ā</i> or <i>ab</i> with the ablative, which is called the <strong>ablative of agent</strong>: <i>mūrus ā mīlitibus aedificātus est</i>, “the wall was built by the soldiers.” When the means is a thing, Latin uses the ablative without a preposition, which is called the <strong>ablative of means</strong>: <i>urbs flammīs dēlēta est</i>, “the city was destroyed by fire.”</p>
<p>So Latin distinguishes in its construction a difference that English leaves to the sense: whether the cause of the action is a person who acts or a thing that is used. A student who translates English “by” into Latin must therefore ask whether the doer is a person or a thing.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 405, 409.`,
  qpTodo: `The passive and its agent: in a given passive sentence, is the doer a person or a thing, and how does Latin express it (<i>ā puellā</i> or <i>flammīs</i>).` },

{ id: 'impersonal-passive',
  title: 'The impersonal passive',
  body: `<p>English says “There was dancing” or “People go” when it reports an action without naming who did it. As we have seen, Latin can use an intransitive verb in the passive, in the third person singular, without a personal subject, to say that an action took place without naming who did it. <i>Saltātum est</i>, literally “it was danced,” means “there was dancing”; <i>ītur</i>, literally “it is gone,” means “people go.” This is the <strong>impersonal passive</strong>.</p>
<p>English uses such expressions because it cannot form a passive from an intransitive verb: English “dance” and “go” have no passive. Verbs that govern the dative, such as <i>persuādeō</i> (“I persuade”), also form the passive impersonally: <i>mihi persuāsum est</i>, “I have been persuaded,” literally “it has been persuaded to me.” So the voice of the verb decides what kind of subject, if any, the sentence can have.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 208, 372.` },

{ id: 'infinitive',
  title: 'The infinitive in construction',
  body: `<p>We saw that the infinitive names an action without person or number. In construction it is used in three chief ways. It is used as the <strong>subject</strong> of a verb, as a noun: <i>nāvigāre necesse est</i>, “to sail is necessary.” It is used as the <strong>object</strong> of a verb: <i>vincere cupit</i>, “he wishes to conquer.” And it is used to <strong>complete</strong> a verb that requires another verb to finish its sense, such as <i>possum</i> (“I am able”), <i>dēbeō</i> (“I ought”), and <i>incipiō</i> (“I begin”): <i>natāre possum</i>, “I can swim.” This last use is called the <strong>complementary infinitive</strong>.</p>
<p>English uses the infinitive in the same ways: “To sail is necessary,” “He wishes to conquer,” “I can swim.” But English uses it also to express purpose (“She came to visit her mother”), which Latin prose does not do with the infinitive. So the uses of the infinitive overlap in the two languages but are not the same.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 452–457.` },

{ id: 'indirect-statement',
  title: 'The accusative and infinitive',
  body: `<p>When we report what someone said, we usually change the form of the words: “The boy is coming” becomes “He says that the boy is coming.” After a verb of saying, thinking, knowing, or perceiving, Latin usually reports what was said or thought by putting the subject in the accusative and the verb in the infinitive. This construction is called the <strong>accusative and infinitive</strong>, and it is the regular form of indirect statement: <i>dīcit puerum venīre</i>, “he says that the boy is coming,” literally “he says the boy to come.” English uses a clause with “that” instead, though it has a similar construction after some verbs: “I believe him to be honest.”</p>
<p>The tense of the infinitive shows time relative to the main verb, as the tense of a participle does: the present infinitive shows the same time (<i>dīxit puerum venīre</i>, “he said that the boy was coming”), the perfect infinitive an earlier time (<i>dīxit puerum vēnisse</i>, “he said that the boy had come”), and the future infinitive a later time (<i>dīxit puerum ventūrum esse</i>, “he said that the boy would come”).</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 577–584.`,
  qpTodo: `The accusative and infinitive: what does a given sentence of indirect statement report (<i>dīcit puerum venīre</i>, <i>dīxit puerum vēnisse</i>), and what time does the infinitive show relative to the main verb.` },

{ id: 'participle',
  title: 'The participle in construction',
  body: `<p>We saw that the participle shows time relative to the main verb and that the ablative absolute stands apart from the construction of the main clause. In construction, Latin uses participles where English often uses a dependent clause. <i>Mīlitēs urbem captam incendērunt</i>, literally “the soldiers burned the captured city,” is often best rendered “the soldiers captured the city and burned it,” or “after capturing the city, the soldiers burned it.”</p>
<p>The participle can thus take the place of a temporal, causal, conditional, or concessive clause, and the sense decides which. <i>Rēx, perīculum timēns, fūgit</i>, “the king, fearing danger, fled,” may mean “because he feared danger.” So a single Latin participle often contains a relation between two actions that English must express with a conjunction, and the reader must supply the conjunction from the sense.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 496, in paraphrase.` },

{ id: 'gerundive',
  title: 'The gerund and the gerundive in construction',
  body: `<p>We saw the gerund, a verbal noun, and the gerundive, a passive participle signifying what is to be done. Latin uses the gerundive with a noun in place of the gerund with an object: instead of <i>ad capiendum urbem</i>, Latin says <i>ad urbem capiendam</i>, “for capturing the city,” “to capture the city,” where <i>capiendam</i> agrees with <i>urbem</i>. With <i>ad</i> or with <i>causā</i> (“for the sake of”), this construction expresses purpose: <i>vēnērunt pācis petendae causā</i>, “they came to seek peace.”</p>
<p>The gerundive with a form of <i>sum</i> expresses necessity, as we saw in <i>Carthāgō dēlenda est</i>, “Carthage must be destroyed.” This is called the <strong>passive periphrastic</strong> construction, and the person who must do the action is put in the dative, the <strong>dative of agent</strong>: <i>mihi legendus est liber</i>, “the book must be read by me,” that is, “I must read the book.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 196, 374, 500–507.`,
  qpTodo: `The gerundive: what does a given gerundive construction mean (<i>ad urbem capiendam</i>, <i>Carthāgō dēlenda est</i>, <i>mihi legendus est liber</i>), and in what case is the person who must act.` },

{ id: 'independent-subjunctive',
  title: 'The subjunctive in independent sentences',
  body: `<p>“Let us go,” “Let him stay,” “May he return,” and “What am I to do?” are complete sentences, but none of them states a fact. Latin often uses the subjunctive for sentences of this kind. The subjunctive is used in some independent sentences, each with its own sense:</p>
<p>to urge, in the first person plural (the <strong>hortatory</strong> subjunctive): <i>eāmus</i>, “let us go”;<br>to command, in the third person (the <strong>jussive</strong> subjunctive): <i>maneat</i>, “let him stay”;<br>to wish or pray, often with <i>utinam</i> (the <strong>optative</strong> subjunctive): <i>utinam redeat</i>, “may he return”;<br>to ask what one should do (the <strong>deliberative</strong> subjunctive): <i>quid faciam?</i>, “what am I to do?”;<br>to say what may or would happen (the <strong>potential</strong> subjunctive): <i>dīcat aliquis</i>, “someone may say.”</p>
<p>English expresses all of these with auxiliary verbs: “let,” “may,” “should,” “would.” We saw in Section I that sentences command, ask, and pray as well as state; the independent subjunctive is one of the chief means by which Latin marks these kinds of sentence.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 439–447.` },

{ id: 'dependent-subjunctive',
  title: 'The subjunctive in dependent clauses and the sequence of tenses',
  body: `<p>We saw that clauses of purpose and result, and indirect questions, take the subjunctive. So do many clauses with <i>cum</i>: <i>cum rēx mīlitēs vocāret, vēnērunt</i>, “when the king called the soldiers, they came.” In such clauses the tense of the subjunctive depends on the tense of the main verb, according to a rule called the <strong>sequence of tenses</strong>. After a present or future main verb, the dependent clause has the present (or perfect) subjunctive; after a past main verb, it has the imperfect (or pluperfect) subjunctive.</p>
<p>So <i>pater fīlium mittit ut rēgem videat</i>, “the father sends his son so that he may see the king,” has the present subjunctive after the present <i>mittit</i>; and <i>pater fīlium mīsit ut rēgem vidēret</i>, “the father sent his son so that he might see the king,” has the imperfect after the perfect <i>mīsit</i>. English shows a similar sequence in “may” and “might.” The tense of the dependent verb therefore depends on the main verb, as its mood depends on the kind of clause.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 482–485, 546.`,
  qpTodo: `Analysis: in a given Latin sentence, identify each dependent clause in the subjunctive, its kind, and the tense of its verb after the main verb.` },

{ id: 'english',
  title: 'Mood and voice in English construction',
  body: `<p>English expresses most of these constructions without special forms of the verb. Where Latin uses the subjunctive, English uses auxiliary verbs (“may,” “might,” “should,” “would”) or the infinitive (“so as to see”). Where Latin uses the accusative and infinitive, English uses a clause with “that.” Where Latin uses a participle or an ablative absolute, English often uses a clause with a conjunction (“when,” “because,” “although”).</p>
<p>So a translation between the two languages often changes the construction but keeps the meaning: a Latin participle becomes an English clause, and an English clause becomes a Latin infinitive. We will return to this in Section X, where we study translation. What remains the same in both languages is the relation of dependence that the construction expresses.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; standard English grammars, in paraphrase.`,
  qpTodo: `Analysis: given a short Latin sentence with a participle, an infinitive, or a subjunctive, choose the English construction that expresses the same relation, and say what changed.` }

  ]
};
