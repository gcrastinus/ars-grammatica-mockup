/* V.9 Mood and Voice in Construction [v.mood]
   Plan (ITEM-LIST.md): 10 panels, 5 question points, 2 of them short analysis questions.
   Live material drawn on: DECKS.latvoice (the passive and its doer, the infinitive, the participle), DECKS.latsubj (the
   subjunctive, four uses, the sequence of tenses, the imperative). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.mood'] = {
  id: 'v.mood',
  title: 'Mood and Voice in Construction',
  sub: 'The passive with its agent, the infinitive, the participle, and the subjunctive in clauses',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVIII; Allen and Greenough, <i>New Latin Grammar</i>.`,
  recitation: [
    `Mood and voice are accidents of the verb, but they are also relations of construction, because they decide how the verb is joined to other words and how one clause is joined to another.`,
    `The voice of a verb decides which word is its subject and how the doer of the action is expressed.`,
    `The mood of a verb often shows whether its clause is independent or dependent, and what kind of dependent clause it is.`,
    `Priscian devotes the last book of his grammar to the construction of the verb with its cases and moods, and medieval grammarians learned from it that the verb is the center around which the construction of the sentence is arranged.`,
    `In a passive sentence the one who receives the action becomes the subject, and the doer may be named or left out.`,
    `When the doer is a person, Latin expresses it by <i>ā</i> or <i>ab</i> with the ablative, the <strong>ablative of agent</strong>; when the means is a thing, Latin uses the ablative without a preposition, the <strong>ablative of means</strong>.`,
    `So Latin distinguishes in its construction what English leaves to the sense: whether the cause of the action is a person who acts or a thing that is used.`,
    `Latin can use an intransitive verb in the passive, in the third person singular, without a personal subject, to say that an action took place without naming who did it; this is the <strong>impersonal passive</strong>.`,
    `English cannot form a passive from an intransitive verb, so it uses other expressions instead.`,
    `Verbs that govern the dative also form the passive impersonally, so the voice of the verb decides what kind of subject, if any, the sentence can have.`,
    `The infinitive names an action without person or number, and in construction it is used in three chief ways.`,
    `It is used as the <strong>subject</strong> of a verb, as a noun.`,
    `It is used as the <strong>object</strong> of a verb.`,
    `It is used to <strong>complete</strong> a verb that requires another verb to finish its sense, and this is called the <strong>complementary infinitive</strong>.`,
    `English uses the infinitive in the same three ways and also to express purpose, which classical Latin prose does not ordinarily do with the infinitive.`,
    `After a verb of saying, thinking, knowing, or perceiving, Latin usually puts the subject of what is reported in the accusative and its verb in the infinitive; this construction, the <strong>accusative and infinitive</strong>, is the regular form of indirect statement.`,
    `English uses a clause with “that” instead, though it has a similar construction after some verbs.`,
    `The tense of the infinitive shows time relative to the main verb: the present infinitive the same time, the perfect infinitive an earlier time, and the future infinitive a later time.`,
    `Latin uses a participle where English often uses a dependent clause or a second verb.`,
    `The participle shows time relative to the main verb, and it can take the place of a temporal, causal, conditional, or concessive clause, the sense deciding which.`,
    `So a single Latin participle often contains a relation between two actions that English must express with a conjunction, and the reader must supply the conjunction from the sense.`,
    `Where English uses a gerund with an object, Latin usually uses the gerundive agreeing with the noun, a passive participle signifying what is to be done.`,
    `With <i>ad</i> or with <i>causā</i> (“for the sake of”), the gerundive construction expresses purpose.`,
    `The gerundive with a form of <i>sum</i> expresses necessity; this is the <strong>passive periphrastic</strong> construction, and the person who must do the action is put in the dative, the <strong>dative of agent</strong>.`,
    `Latin uses the subjunctive in some independent sentences, which do not state a fact, each kind with its own sense.`,
    `The <strong>hortatory</strong> subjunctive urges, in the first person plural.`,
    `The <strong>jussive</strong> subjunctive commands, in the third person.`,
    `The <strong>optative</strong> subjunctive wishes or prays, often with <i>utinam</i>.`,
    `The <strong>deliberative</strong> subjunctive asks what one should do.`,
    `The <strong>potential</strong> subjunctive says what may or would happen.`,
    `English expresses all of these with auxiliary verbs, and the independent subjunctive is one of the chief means by which Latin marks sentences that command, ask, and pray as well as state.`,
    `The verbs of clauses with <i>cum</i>, of clauses of purpose and result, and of indirect questions are in the subjunctive.`,
    `In such clauses the tense of the subjunctive depends on the tense of the main verb, according to the <strong>sequence of tenses</strong>.`,
    `After a present or future main verb the dependent clause has the present (or perfect) subjunctive; after a past main verb it has the imperfect (or pluperfect) subjunctive.`,
    `So the tense of the dependent verb depends on the main verb, as its mood depends on the kind of clause; English shows a similar sequence in “may” and “might.”`,
    `English expresses most of these constructions without special forms of the verb: auxiliary verbs or the infinitive where Latin has the subjunctive, a clause with “that” where Latin has the accusative and infinitive, and a clause with a conjunction where Latin has a participle or an ablative absolute.`,
    `So a translation between the two languages often changes the construction but keeps the meaning, and what remains the same is the relation of dependence that the construction expresses.`
  ],
  panels: [

{ id: 'intro',
  title: 'Mood and voice as relations of construction',
  body: `<p>“The storm damaged the bridge” and “The bridge was damaged by the storm” report the same event, but the change of voice changes which word is the subject and how the cause is expressed. So mood and voice, which we studied in Section III as accidents of the verb, are also relations of construction, because they decide how the verb is joined to other words and how one clause is joined to another. The voice of a verb decides which word is its subject and how the doer of the action is expressed. The mood of a verb often shows whether its clause is independent or dependent, and what kind of dependent clause it is.</p>
<p>Priscian devotes the last book of his grammar to the construction of the verb with its cases and moods, and medieval grammarians learned from it that the verb is the center around which the construction of the sentence is arranged (<i>Institutiones grammaticae</i> XVIII). We will study the passive and its agent, the infinitive and the participle in construction, and the subjunctive in independent and dependent clauses.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVIII, in paraphrase.` },

{ id: 'agent',
  title: 'The passive and its agent',
  body: `<p>“The wall was built by the soldiers” and “The city was destroyed by fire” both use “by,” but the first names a person who acts and the second a thing that is used. We have seen that in a passive sentence the one who receives the action becomes the subject, and the doer may be named or left out. When the doer is a person, Latin expresses it by <i>ā</i> or <i>ab</i> with the ablative, which is called the <strong>ablative of agent</strong>: <i>mūrus ā mīlitibus aedificātus est</i>, “the wall was built by the soldiers.” When the means is a thing, Latin uses the ablative without a preposition, which is called the <strong>ablative of means</strong>: <i>urbs flammīs dēlēta est</i>, “the city was destroyed by fire.”</p>
<p>So Latin distinguishes in its construction a difference that English leaves to the sense: whether the cause of the action is a person who acts or a thing that is used. A student who translates English “by” into Latin must therefore ask whether the doer is a person or a thing.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 405, 409.`,
  qp: { id: 'q-agent', variants: [
    { prompt: `How would Latin express the doer in “The letter was written by the queen”?`,
      options: [`<i>ā rēgīnā</i>`, `<i>rēgīnā</i>, without a preposition`, `<i>rēgīnae</i>, in the dative`, `<i>rēgīnam</i>, in the accusative`],
      answer: 0,
      explain: `The queen is a person who acts, so Latin uses the ablative of agent, <i>ā</i> or <i>ab</i> with the ablative: <i>ā rēgīnā</i>. The ablative without a preposition is used for a thing.` },
    { prompt: `How would Latin express the cause in “The tower was struck by lightning”?`,
      options: [`By <i>ā</i> with the ablative`, `By the ablative alone`, `By the dative`, `By the accusative`],
      answer: 1,
      explain: `Lightning is a thing, not a person who acts, so Latin uses the ablative of means without a preposition: <i>fulmine</i>.` },
    { prompt: `Why does Latin say <i>ā rēge laudātus est</i> (“he was praised by the king”) but <i>gladiō vulnerātus est</i> (“he was wounded by a sword”)?`,
      options: [`A person acts; a thing is used`, `Because <i>rēx</i> is of the third declension`, `Because <i>gladius</i> is masculine`, `Because of the order of the words`],
      answer: 0,
      explain: `Latin distinguishes in its construction what English leaves to the sense: the king is a person who acts (ablative of agent with <i>ā</i>), and the sword is a thing that is used (ablative of means).` }
  ]} },

{ id: 'impersonal-passive',
  title: 'The impersonal passive',
  body: `<p>English says “There was dancing” or “People go” when it reports an action without naming who did it. As we have seen, Latin can use an intransitive verb in the passive, in the third person singular, without a personal subject, to say that an action took place without naming who did it. <i>Saltātum est</i>, literally “it was danced,” means “there was dancing”; <i>ītur</i>, literally “it is gone,” means “people go.” This is the <strong>impersonal passive</strong>.</p>
<p>English uses such expressions because it cannot form a passive from an intransitive verb: English “dance” and “go” have no passive. Verbs that govern the dative, such as <i>persuādeō</i> (“I persuade”), also form the passive impersonally: <i>mihi persuāsum est</i>, “I have been persuaded,” literally “it has been persuaded to me.” So the voice of the verb decides what kind of subject, if any, the sentence can have.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 208, 372.` },

{ id: 'infinitive',
  title: 'The infinitive in construction',
  body: `<p>In “I can swim,” the infinitive “swim” completes “can,” which does not finish its sense by itself. The infinitive, as we saw in Section III, names an action without person or number, and in construction it is used in three chief ways. It is used as the <strong>subject</strong> of a verb, as a noun: <i>nāvigāre necesse est</i>, “to sail is necessary.” It is used as the <strong>object</strong> of a verb: <i>vincere cupit</i>, “he wishes to conquer.” And it is used to <strong>complete</strong> a verb that requires another verb to finish its sense, such as <i>possum</i> (“I am able”), <i>dēbeō</i> (“I ought”), and <i>incipiō</i> (“I begin”): <i>natāre possum</i>, “I can swim.” This last use is called the <strong>complementary infinitive</strong>.</p>
<p>English uses the infinitive in the same three ways, as the translations show. But English uses it also to express purpose (“She came to visit her mother”), which classical Latin prose does not ordinarily do with the infinitive. So the uses of the infinitive overlap in the two languages but are not the same.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 452–457.` },

{ id: 'indirect-statement',
  title: 'The accusative and infinitive',
  body: `<p>When we report what someone said, we usually change the form of the words: “The boy is coming” becomes “He says that the boy is coming.” After a verb of saying, thinking, knowing, or perceiving, Latin usually reports what was said or thought by putting the subject in the accusative and the verb in the infinitive. This construction is called the <strong>accusative and infinitive</strong>, and it is the regular form of indirect statement: <i>dīcit puerum venīre</i>, “he says that the boy is coming,” literally “he says the boy to come.” English uses a clause with “that” instead, though it has a similar construction after some verbs: “I believe him to be honest.”</p>
<p>The tense of the infinitive shows time relative to the main verb, as the tense of a participle does: the present infinitive shows the same time (<i>dīxit puerum venīre</i>, “he said that the boy was coming”), the perfect infinitive an earlier time (<i>dīxit puerum vēnisse</i>, “he said that the boy had come”), and the future infinitive a later time (<i>dīxit puerum ventūrum esse</i>, “he said that the boy would come”).</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 577–584.`,
  qp: { id: 'q-indirect-statement', variants: [
    { prompt: `What does Latin <i>putat rēgem adesse</i> report?`,
      options: [`“He thinks that the king is present”`, `“He thinks that the king was present”`, `“The king thinks that he is present”`, `“He thinks that the king will be present”`],
      answer: 0,
      explain: `After <i>putat</i>, a verb of thinking, the accusative <i>rēgem</i> and the present infinitive <i>adesse</i> report what is thought; the present infinitive shows the same time as the main verb.` },
    { prompt: `In Latin <i>putāvit rēgem discessisse</i>, what time does the perfect infinitive show relative to <i>putāvit</i>?`,
      options: [`The same time`, `A later time`, `An earlier time`, `No time at all`],
      answer: 2,
      explain: `The perfect infinitive shows a time earlier than the main verb: “he thought that the king had left.”` },
    { prompt: `How would Latin usually say “He knows that the river is deep”?`,
      options: [`<i>scit flūmen altum esse</i>`, `<i>scit flūmen altum est</i>`, `<i>scit flūminī altō esse</i>`, `<i>scit flūmen altum fore</i>`],
      answer: 0,
      explain: `After a verb of knowing, Latin puts the subject in the accusative and the verb in the infinitive: <i>flūmen altum esse</i>. <i>Fore</i> is a future infinitive and would mean “will be.”` }
  ]} },

{ id: 'participle',
  title: 'The participle in construction',
  body: `<p><i>Hostēs castra capta dīripuērunt</i>, literally “the enemy plundered the captured camp,” is often best rendered “the enemy captured the camp and plundered it,” or “after capturing the camp, the enemy plundered it.” So Latin uses a participle where English often uses a dependent clause or a second verb. The participle, as we saw in Section III, shows time relative to the main verb, and the ablative absolute stands apart from the construction of the main clause.</p>
<p>The participle can thus take the place of a temporal, causal, conditional, or concessive clause, and the sense decides which. <i>Rēx, perīculum timēns, fūgit</i>, “the king, fearing danger, fled,” may mean “because he feared danger.” So a single Latin participle often contains a relation between two actions that English must express with a conjunction, and the reader must supply the conjunction from the sense.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 496, in paraphrase.` },

{ id: 'gerundive',
  title: 'The gerund and the gerundive in construction',
  body: `<p>Where English says “for capturing the city,” Latin usually says not <i>ad capiendum urbem</i>, with the gerund (a verbal noun) and its object, but <i>ad urbem capiendam</i>, where <i>capiendam</i> agrees with <i>urbem</i>. <i>Capiendam</i> is a gerundive, which, as we saw in Section III, is a passive participle signifying what is to be done, and Latin uses the gerundive with a noun in this way in place of the gerund with an object. With <i>ad</i> or with <i>causā</i> (“for the sake of”), this construction expresses purpose: <i>vēnērunt pācis petendae causā</i>, “they came to seek peace.”</p>
<p>The gerundive with a form of <i>sum</i> expresses necessity, as we saw in <i>Carthāgō dēlenda est</i>, “Carthage must be destroyed.” This is called the <strong>passive periphrastic</strong> construction, and the person who must do the action is put in the dative, the <strong>dative of agent</strong>: <i>mihi legendus est liber</i>, “the book must be read by me,” that is, “I must read the book.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 196, 374, 500–507.`,
  qp: { id: 'q-gerundive', variants: [
    { prompt: `What does Latin <i>ad librōs legendōs</i> mean?`,
      options: [`“for reading books”`, `“the books having been read”`, `“books that read”`, `“after reading the books”`],
      answer: 0,
      explain: `<i>Legendōs</i> is a gerundive agreeing with <i>librōs</i>, and with <i>ad</i> it expresses purpose: “for the reading of books,” that is, “for reading books.”` },
    { prompt: `What does Latin <i>tibi epistula scrībenda est</i> mean?`,
      options: [`“The letter was written to you”`, `“You must write the letter”`, `“You have written the letter”`, `“The letter is writing to you”`],
      answer: 1,
      explain: `The gerundive with a form of <i>sum</i> expresses necessity, the passive periphrastic: “the letter must be written,” and <i>tibi</i>, the dative of agent, names who must write it.` },
    { prompt: `In Latin <i>nautīs nāvis reficienda est</i> (“the sailors must repair the ship”), in what case are the persons who must act?`,
      options: [`The ablative with <i>ā</i>`, `The accusative`, `The nominative`, `The dative`],
      answer: 3,
      explain: `In the passive periphrastic the person who must do the action is in the dative, the dative of agent: <i>nautīs</i>.` }
  ]} },

{ id: 'independent-subjunctive',
  title: 'The subjunctive in independent sentences',
  body: `<p>“Let us go,” “Let him stay,” “May he return,” and “What am I to do?” are complete sentences, but none of them states a fact. Latin often uses the subjunctive for sentences of this kind. The subjunctive is used in some independent sentences, each with its own sense:</p>
<p>The <strong>hortatory</strong> subjunctive urges, in the first person plural: <i>eāmus</i>, “let us go.”<br>The <strong>jussive</strong> subjunctive commands, in the third person: <i>maneat</i>, “let him stay.”<br>The <strong>optative</strong> subjunctive wishes or prays, often with <i>utinam</i>: <i>utinam redeat</i>, “may he return.”<br>The <strong>deliberative</strong> subjunctive asks what one should do: <i>quid faciam?</i>, “what am I to do?”<br>The <strong>potential</strong> subjunctive says what may or would happen: <i>dīcat aliquis</i>, “someone may say.”</p>
<p>English expresses all of these with auxiliary verbs: “let,” “may,” “should,” “would.” We saw in Section I that sentences command, ask, and pray as well as state; the independent subjunctive is one of the chief means by which Latin marks these kinds of sentence.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 439–447.` },

{ id: 'dependent-subjunctive',
  title: 'The subjunctive in dependent clauses and the sequence of tenses',
  body: `<p>In <i>cum rēx mīlitēs vocāret, vēnērunt</i>, “when the king called the soldiers, they came,” the verb of the clause with <i>cum</i> is in the subjunctive, as are the verbs of clauses of purpose and result and of indirect questions, as we have seen. In such clauses the tense of the subjunctive depends on the tense of the main verb, according to a rule called the <strong>sequence of tenses</strong>. After a present or future main verb, the dependent clause has the present (or perfect) subjunctive; after a past main verb, it has the imperfect (or pluperfect) subjunctive.</p>
<p>So <i>pater fīlium mittit ut rēgem videat</i>, “the father sends his son so that he may see the king,” has the present subjunctive after the present <i>mittit</i>; and <i>pater fīlium mīsit ut rēgem vidēret</i>, “the father sent his son so that he might see the king,” has the imperfect after the perfect <i>mīsit</i>. English shows a similar sequence in “may” and “might.” The tense of the dependent verb therefore depends on the main verb, as its mood depends on the kind of clause.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 482–485, 546.`,
  qp: { id: 'q-dependent-subjunctive', variants: [
    { prompt: `In Latin <i>dux mīlitēs mīsit ut pontem dēfenderent</i> (“the general sent the soldiers to defend the bridge”), why is <i>dēfenderent</i> imperfect?`,
      options: [`Because the main verb is past`, `Because the defending was never finished`, `Because it is a result clause`, `Because <i>ut</i> always takes the imperfect`],
      answer: 0,
      explain: `By the sequence of tenses, a past main verb, here the perfect <i>mīsit</i>, takes the imperfect subjunctive in the dependent clause.` },
    { prompt: `Which tense of the subjunctive follows a present main verb in a Latin purpose clause?`,
      options: [`The imperfect`, `The present`, `The pluperfect`, `The future`],
      answer: 1,
      explain: `After a present or future main verb, the dependent clause has the present (or perfect) subjunctive, as in <i>mittit ut videat</i>.` },
    { prompt: `In Latin <i>rogat quid faciās</i> (“he asks what you are doing”), what kind of dependent clause is <i>quid faciās</i>?`,
      options: [`A purpose clause`, `A result clause`, `An indirect question`, `A relative clause`],
      answer: 2,
      explain: `<i>Quid faciās</i> reports a question after the verb of asking <i>rogat</i>, so it is an indirect question, with its verb in the subjunctive.` }
  ]} },

{ id: 'english',
  title: 'Mood and voice in English construction',
  body: `<p>English expresses most of these constructions without special forms of the verb. Where Latin uses the subjunctive, English uses auxiliary verbs (“may,” “might,” “should,” “would”) or the infinitive (“so as to see”). Where Latin uses the accusative and infinitive, English uses a clause with “that.” Where Latin uses a participle or an ablative absolute, English often uses a clause with a conjunction (“when,” “because,” “although”).</p>
<p>So a translation between the two languages often changes the construction but keeps the meaning: a Latin participle becomes an English clause, and an English clause becomes a Latin infinitive. We will return to this in Section X, where we study translation. What remains the same in both languages is the relation of dependence that the construction expresses.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; standard English grammars, in paraphrase.`,
  qp: { id: 'q-english', variants: [
    { prompt: `Latin <i>nocte veniente, mercātōrēs discessērunt</i> means “night coming, the merchants departed.” Which English construction usually expresses the same relation?`,
      options: [`A clause with “when”`, `An infinitive of purpose`, `A relative clause`, `A clause with “that” after a verb of saying`],
      answer: 0,
      explain: `English seldom uses an absolute phrase; it usually turns the Latin ablative absolute into a clause with a conjunction: “When night came, the merchants departed.”` },
    { prompt: `Which English construction usually renders a Latin accusative and infinitive, as in <i>dīcit nautam adesse</i>?`,
      options: [`A participle`, `A clause with “that”`, `An infinitive of purpose`, `An absolute phrase`],
      answer: 1,
      explain: `English reports what was said in a clause with “that”: “He says that the sailor is present.”` },
    { prompt: `Latin <i>vēnit ut pācem peteret</i> (“he came to seek peace”). Which English construction expresses the purpose?`,
      options: [`A clause with “because”`, `A participle`, `A relative clause`, `An infinitive`],
      answer: 3,
      explain: `English expresses purpose with the infinitive, “to seek peace,” where classical Latin prose uses a clause with <i>ut</i> and the subjunctive. The construction changes, and the relation stays the same.` }
  ]} }

  ]
};
