window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/clause-kinds"] = {
 "id": "lang.v.la/clause-kinds",
 "title": "Clauses in Latin",
 "sub": "Relative and causal clauses, conditions, indirect statement, and the ablative absolute",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "relative",
   "title": "Relative and causal clauses",
   "body": "<p>A relative clause is introduced by <i>quī</i>, <i>quae</i>, <i>quod</i> and describes a noun of the main clause, its antecedent; the relative takes its gender and number from the antecedent and its case from its own clause: <i>agricolae, quōs vīdimus, labōrābant</i> (“the farmers whom we saw were working”). A causal clause with <i>quod</i> or <i>quia</i> (“because”) gives the reason as a fact, and so its verb is indicative: <i>quod pluit, domī manēmus</i> (“because it is raining, we stay at home”). When the reason is given as someone else’s, Latin uses the subjunctive.</p>",
   "qp": {
    "id": "q-la-cls-rel",
    "variants": [
     {
      "prompt": "Which form completes <i>Templum, ______ aedificāvērunt, magnum est</i> (“the temple that they built is large”)?",
      "options": [
       "<i>quem</i>",
       "<i>quī</i>",
       "<i>quae</i>",
       "<i>quod</i>"
      ],
      "answer": 3,
      "explain": "The relative is neuter singular because <i>templum</i> is, and accusative as the object of <i>aedificāvērunt</i>."
     },
     {
      "prompt": "In <i>Laetī sumus, quod vīcimus</i>, what does the <i>quod</i> clause give?",
      "options": [
       "The reason, as a fact",
       "The purpose",
       "A condition",
       "A description of a noun"
      ],
      "answer": 0,
      "explain": "<i>Quod</i> with the indicative gives the reason as a fact: “because we have won.”"
     },
     {
      "prompt": "From which word does a relative take its case?",
      "options": [
       "From the case of its antecedent",
       "From its use in its own clause",
       "From the main verb",
       "From the nearest noun"
      ],
      "answer": 1,
      "explain": "The gender and number come from the antecedent; the case comes from the relative’s own clause."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Conditions",
   "body": "<p>A conditional sentence has an if-clause, introduced by <i>sī</i> (“if”) or <i>nisi</i> (“unless,” “if not”), and a main clause that says what follows. The mood and tense of the verbs show how the speaker regards the condition:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Kind</th> <th>Example</th></tr>\n<tr><td>Simple, present or past (indicative)</td> <td><i>sī hoc dīcit, errat</i> (“if he says this, he is wrong”)</td></tr>\n<tr><td>Future more vivid (future or future perfect indicative)</td> <td><i>sī veniet, vidēbit</i> (“if he comes, he will see”)</td></tr>\n<tr><td>Future less vivid (present subjunctive)</td> <td><i>sī veniat, videat</i> (“if he should come, he would see”)</td></tr>\n<tr><td>Contrary to fact, present (imperfect subjunctive)</td> <td><i>sī adesset, vidēret</i> (“if he were here, he would see”)</td></tr>\n<tr><td>Contrary to fact, past (pluperfect subjunctive)</td> <td><i>sī adfuisset, vīdisset</i> (“if he had been here, he would have seen”)</td></tr>\n</table></div>\n<p>So the indicative presents the case as real or open, and the subjunctive presents it as imagined or as contrary to fact.</p>",
   "qp": {
    "id": "q-la-cls-cond",
    "variants": [
     {
      "prompt": "What kind of condition is <i>sī pluet, domī manēbimus</i> (“if it rains, we will stay at home”)?",
      "options": [
       "Future more vivid",
       "Future less vivid",
       "Contrary to fact",
       "Simple past"
      ],
      "answer": 0,
      "explain": "<i>Sī</i> with the future indicative is future more vivid."
     },
     {
      "prompt": "Which form completes <i>Sī dīves ______, vīllam emerem</i> (“if I were rich, I would buy a villa”)?",
      "options": [
       "<i>fuissem</i>",
       "<i>erō</i>",
       "<i>sim</i>",
       "<i>essem</i>"
      ],
      "answer": 3,
      "explain": "A present condition contrary to fact takes the imperfect subjunctive."
     },
     {
      "prompt": "What does <i>nisi</i> mean?",
      "options": [
       "“if only,” “would that”",
       "“although”",
       "“unless,” “if not”",
       "“so that”"
      ],
      "answer": 2,
      "explain": "<i>Nisi</i> introduces a negative condition."
     }
    ]
   }
  },
  {
   "id": "indirect",
   "title": "Indirect statement",
   "body": "<p>After verbs of saying, thinking, knowing, and perceiving, such as <i>dīcō</i>, <i>putō</i>, <i>sciō</i>, <i>sentiō</i>, and <i>audiō</i>, Latin reports a statement with the accusative and the infinitive: the subject of the statement goes into the accusative, and its verb into the infinitive. <i>Dīcit agricolam labōrāre</i> means “he says that the farmer is working.” English uses a clause with “that,” and Latin has no word for “that” here.</p>\n<p>The tense of the infinitive shows the time relative to the main verb: the present infinitive for the same time (<i>labōrāre</i>), the perfect for earlier time (<i>labōrāvisse</i>, “that he worked”), and the future for later time (<i>labōrātūrum esse</i>, “that he will work”). When the subject of the statement is the same as the subject of the main verb, Latin uses the reflexive <i>sē</i>: <i>dīcit sē labōrāre</i> (“he says that he himself is working”).</p>",
   "qp": {
    "id": "q-la-cls-ind",
    "variants": [
     {
      "prompt": "Which form completes <i>Putō ______ venīre</i> (“I think that the messenger is coming”)?",
      "options": [
       "<i>nūntius</i>",
       "<i>nūntium</i>",
       "<i>nūntiō</i>",
       "<i>nūntiī</i>"
      ],
      "answer": 1,
      "explain": "The subject of an indirect statement is accusative."
     },
     {
      "prompt": "Which form completes <i>Scīmus hostēs ______</i> (“we know that the enemy has fled”)?",
      "options": [
       "<i>fugere</i>",
       "<i>fugient</i>",
       "<i>fūgisse</i>",
       "<i>fūgērunt</i>"
      ],
      "answer": 2,
      "explain": "The flight happened earlier, so the perfect infinitive is used."
     },
     {
      "prompt": "What does <i>Dīcit sē aegrum esse</i> mean?",
      "options": [
       "“he says that another man is ill”",
       "“he said that he was ill”",
       "“he says that you are ill”",
       "“he says that he himself is ill”"
      ],
      "answer": 3,
      "explain": "<i>Sē</i> refers to the subject of <i>dīcit</i>."
     }
    ]
   }
  },
  {
   "id": "absolute",
   "title": "The ablative absolute",
   "body": "<p>A noun or pronoun with a participle in the ablative, standing apart from the main construction, is called the ablative absolute: <i>signō datō, mīlitēs prōcessērunt</i> means “when the signal had been given, the soldiers advanced.” The signal is neither the subject nor the object of <i>prōcessērunt</i>; the phrase is “loosed” (<i>absolūtus</i>) from the rest. Two nouns, or a noun and an adjective, can also stand in this construction, since Latin has no present participle of <i>sum</i>: <i>Caesare duce</i> (“with Caesar as leader”).</p>\n<p>The ablative absolute can give the time, the cause, a condition, or a concession, and English usually turns it into a clause with “when,” “since,” “if,” or “although.”</p>",
   "qp": {
    "id": "q-la-cls-abs",
    "variants": [
     {
      "prompt": "Which phrase is an ablative absolute?",
      "options": [
       "<i>portīs clausīs</i>",
       "<i>portās clausās</i>",
       "<i>portae clausae</i>",
       "<i>portārum clausārum</i>"
      ],
      "answer": 0,
      "explain": "Noun and participle both stand in the ablative."
     },
     {
      "prompt": "What does <i>Cicerōne cōnsule</i> mean?",
      "options": [
       "“with the help of the consul Cicero”",
       "“by the consul Cicero”",
       "“to Cicero the consul”",
       "“when Cicero was consul”"
      ],
      "answer": 3,
      "explain": "Two nouns in the ablative stand absolutely: “Cicero being consul.”"
     },
     {
      "prompt": "Why is the construction called absolute?",
      "options": [
       "It always comes at the end of the sentence",
       "It has no noun",
       "It stands apart from the main clause",
       "It takes the ablative of means"
      ],
      "answer": 2,
      "explain": "<i>Absolūtus</i> means “loosed”: the phrase is not the subject or object of the main verb."
     }
    ]
   }
  }
 ]
};
