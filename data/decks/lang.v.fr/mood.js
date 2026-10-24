window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/mood"] = {
 "id": "lang.v.fr/mood",
 "title": "The Subjunctive, the Conditional, and the Imperative in French",
 "sub": "The forms of the present subjunctive, its uses, the conditional, and the imperative",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "forms",
   "title": "The present subjunctive",
   "body": "<p>The present subjunctive of most verbs is formed from the stem of the third person plural of the present indicative, with the endings <i lang=\"fr\">-e</i>, <i lang=\"fr\">-es</i>, <i lang=\"fr\">-e</i>, <i lang=\"fr\">-ions</i>, <i lang=\"fr\">-iez</i>, <i lang=\"fr\">-ent</i>: <i lang=\"fr\">ils parlent</i>, <i lang=\"fr\">que je parle</i>; <i lang=\"fr\">ils finissent</i>, <i lang=\"fr\">que je finisse</i>; <i lang=\"fr\">ils prennent</i>, <i lang=\"fr\">que je prenne</i>. It is usually written after <i lang=\"fr\">que</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th><i lang=\"fr\">être</i></th> <th><i lang=\"fr\">avoir</i></th> <th><i lang=\"fr\">parler</i></th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>1</td> <td class=\"f\">que je sois</td> <td class=\"f\">que j’aie</td> <td class=\"f\">que je parle</td></tr>\n<tr><td>2</td> <td class=\"f\">que tu sois</td> <td class=\"f\">que tu aies</td> <td class=\"f\">que tu parles</td></tr>\n<tr><td>3</td> <td class=\"f\">qu’il soit</td> <td class=\"f\">qu’il ait</td> <td class=\"f\">qu’il parle</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>1</td> <td class=\"f\">que nous soyons</td> <td class=\"f\">que nous ayons</td> <td class=\"f\">que nous parlions</td></tr>\n<tr><td>2</td> <td class=\"f\">que vous soyez</td> <td class=\"f\">que vous ayez</td> <td class=\"f\">que vous parliez</td></tr>\n<tr><td>3</td> <td class=\"f\">qu’ils soient</td> <td class=\"f\">qu’ils aient</td> <td class=\"f\">qu’ils parlent</td></tr>\n</table></div>\n<p>Several common verbs are irregular and must be learned: <i lang=\"fr\">aller</i> (<i lang=\"fr\">que j’aille</i>, <i lang=\"fr\">que nous allions</i>), <i lang=\"fr\">faire</i> (<i lang=\"fr\">que je fasse</i>), <i lang=\"fr\">pouvoir</i> (<i lang=\"fr\">que je puisse</i>), <i lang=\"fr\">savoir</i> (<i lang=\"fr\">que je sache</i>), <i lang=\"fr\">vouloir</i> (<i lang=\"fr\">que je veuille</i>).</p>",
   "qp": {
    "id": "q-fr-mood-forms",
    "variants": [
     {
      "prompt": "Which form is the present subjunctive of <i lang=\"fr\">prendre</i>, first person singular?",
      "options": [
       "<i lang=\"fr\">que je prends</i>",
       "<i lang=\"fr\">que je prendrai</i>",
       "<i lang=\"fr\">que je prenais</i>",
       "<i lang=\"fr\">que je prenne</i>"
      ],
      "answer": 3,
      "explain": "The stem comes from <i lang=\"fr\">ils prennent</i>, with the ending <i lang=\"fr\">-e</i>."
     },
     {
      "prompt": "Which form is the present subjunctive of <i lang=\"fr\">savoir</i>, third person singular?",
      "options": [
       "<i lang=\"fr\">qu’il sache</i>",
       "<i lang=\"fr\">qu’il sait</i>",
       "<i lang=\"fr\">qu’il saura</i>",
       "<i lang=\"fr\">qu’il savait</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Savoir</i> is irregular: <i lang=\"fr\">que je sache</i>, <i lang=\"fr\">qu’il sache</i>."
     },
     {
      "prompt": "From which form is the present subjunctive of most verbs built?",
      "options": [
       "The infinitive",
       "The third person plural of the present indicative",
       "The future",
       "The past participle"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ils finissent</i> gives <i lang=\"fr\">que je finisse</i>."
     }
    ]
   }
  },
  {
   "id": "uses",
   "title": "The uses of the subjunctive",
   "body": "<p>The indicative states a fact, and the subjunctive presents an action as willed, feared, felt, or doubted. The subjunctive is used in a clause with <i lang=\"fr\">que</i> after expressions of necessity (<i lang=\"fr\">il faut que nous partions</i>, “we must leave”), of will (<i lang=\"fr\">elle souhaite que tu restes</i>, “she wishes you to stay”), of feeling (<i lang=\"fr\">je regrette qu’il soit malade</i>, “I am sorry that he is ill”), and of doubt (<i lang=\"fr\">je doute qu’elle sache</i>, “I doubt that she knows”). <i lang=\"fr\">Je pense qu’il vient</i> has the indicative, but <i lang=\"fr\">je ne pense pas qu’il vienne</i> has the subjunctive, because the negative makes the statement doubtful.</p>\n<p>The subjunctive is also used after certain conjunctions: <i lang=\"fr\">pour que</i> and <i lang=\"fr\">afin que</i> (“so that”), <i lang=\"fr\">bien que</i> and <i lang=\"fr\">quoique</i> (“although”), <i lang=\"fr\">avant que</i> (“before”), <i lang=\"fr\">sans que</i> (“without”): <i lang=\"fr\">bien qu’il pleuve</i> (“although it is raining”), <i lang=\"fr\">avant qu’il fasse nuit</i> (“before it is dark”).</p>",
   "qp": {
    "id": "q-fr-mood-uses",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Je doute qu’il ______ raison</i> (“I doubt that he is right”)?",
      "options": [
       "<i lang=\"fr\">ait</i>",
       "<i lang=\"fr\">a</i>",
       "<i lang=\"fr\">aura</i>",
       "<i lang=\"fr\">avoir</i>"
      ],
      "answer": 0,
      "explain": "After a verb of doubt, the subjunctive is used."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Je sais qu’elle ______ là</i> (“I know that she is there”)?",
      "options": [
       "<i lang=\"fr\">soit</i>",
       "<i lang=\"fr\">être</i>",
       "<i lang=\"fr\">serait</i>",
       "<i lang=\"fr\">est</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Savoir</i> states a fact, so the indicative is used."
     },
     {
      "prompt": "Which conjunction takes the subjunctive?",
      "options": [
       "<i lang=\"fr\">parce que</i>",
       "<i lang=\"fr\">puisque</i>",
       "<i lang=\"fr\">quoique</i>",
       "<i lang=\"fr\">pendant que</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Quoique</i> (“although”) takes the subjunctive; the others take the indicative."
     }
    ]
   }
  },
  {
   "id": "conditional",
   "title": "The conditional",
   "body": "<p>The conditional is formed from the stem of the future and the endings of the imperfect: <i lang=\"fr\">je parlerais</i>, <i lang=\"fr\">nous finirions</i>, <i lang=\"fr\">ils seraient</i>, <i lang=\"fr\">j’aurais</i>, <i lang=\"fr\">tu ferais</i>. It is used in the main clause of a condition whose if-clause has the imperfect: <i lang=\"fr\">si elle savait la réponse, elle la dirait</i> (“if she knew the answer, she would say it”). After <i lang=\"fr\">si</i> meaning “if,” French never uses the future or the conditional.</p>\n<p>The conditional also softens a request or a wish (<i lang=\"fr\">aimeriez-vous du thé ?</i>, “would you like some tea?”) and gives the future seen from the past: <i lang=\"fr\">il a dit qu’il partirait</i> (“he said that he would leave”).</p>",
   "qp": {
    "id": "q-fr-mood-cond",
    "variants": [
     {
      "prompt": "Which form is the conditional of <i lang=\"fr\">être</i>, first person plural?",
      "options": [
       "<i lang=\"fr\">nous serions</i>",
       "<i lang=\"fr\">nous serons</i>",
       "<i lang=\"fr\">nous étions</i>",
       "<i lang=\"fr\">nous soyons</i>"
      ],
      "answer": 0,
      "explain": "The conditional uses the future stem <i lang=\"fr\">ser-</i> with the imperfect ending <i lang=\"fr\">-ions</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Si tu travaillais, tu ______</i> (“if you worked, you would succeed”)?",
      "options": [
       "<i lang=\"fr\">réussiras</i>",
       "<i lang=\"fr\">réussissais</i>",
       "<i lang=\"fr\">réussisses</i>",
       "<i lang=\"fr\">réussirais</i>"
      ],
      "answer": 3,
      "explain": "After an if-clause in the imperfect, the main clause has the conditional."
     },
     {
      "prompt": "Which form never follows <i lang=\"fr\">si</i> meaning “if”?",
      "options": [
       "The present",
       "The imperfect",
       "The conditional",
       "The pluperfect"
      ],
      "answer": 2,
      "explain": "After <i lang=\"fr\">si</i> meaning “if,” French uses neither the future nor the conditional."
     }
    ]
   }
  },
  {
   "id": "imperative",
   "title": "The imperative",
   "body": "<p>The imperative has three forms, without a subject pronoun: the second person singular, the first person plural, and the second person plural: <i lang=\"fr\">chante</i>, <i lang=\"fr\">chantons</i>, <i lang=\"fr\">chantez</i>; <i lang=\"fr\">finis</i>, <i lang=\"fr\">finissons</i>, <i lang=\"fr\">finissez</i>. Verbs in <i lang=\"fr\">-er</i> drop the <i lang=\"fr\">-s</i> of the second person singular: <i lang=\"fr\">tu chantes</i>, but <i lang=\"fr\">chante !</i> A few verbs are irregular: <i lang=\"fr\">être</i> (<i lang=\"fr\">sois</i>, <i lang=\"fr\">soyons</i>, <i lang=\"fr\">soyez</i>), <i lang=\"fr\">avoir</i> (<i lang=\"fr\">aie</i>, <i lang=\"fr\">ayons</i>, <i lang=\"fr\">ayez</i>), <i lang=\"fr\">savoir</i> (<i lang=\"fr\">sache</i>, <i lang=\"fr\">sachons</i>, <i lang=\"fr\">sachez</i>).</p>\n<p>In an affirmative command the object pronoun follows the verb with a hyphen (<i lang=\"fr\">écoute-moi</i>, <i lang=\"fr\">prends-le</i>); in a negative command it stands before the verb as usual (<i lang=\"fr\">ne le prends pas</i>, “do not take it”).</p>",
   "qp": {
    "id": "q-fr-mood-imp",
    "variants": [
     {
      "prompt": "Which form is the imperative of <i lang=\"fr\">regarder</i> said to one person?",
      "options": [
       "<i lang=\"fr\">Regardes !</i>",
       "<i lang=\"fr\">Regardez !</i>",
       "<i lang=\"fr\">Regarde !</i>",
       "<i lang=\"fr\">Regarder !</i>"
      ],
      "answer": 2,
      "explain": "Verbs in <i lang=\"fr\">-er</i> drop the <i lang=\"fr\">-s</i> in the second person singular of the imperative."
     },
     {
      "prompt": "Which sentence is correct for “Do not eat it!” (to several people)?",
      "options": [
       "<i lang=\"fr\">Ne mangez-le pas !</i>",
       "<i lang=\"fr\">Ne le mangez pas !</i>",
       "<i lang=\"fr\">Mangez-le pas !</i>",
       "<i lang=\"fr\">Ne mangez pas le !</i>"
      ],
      "answer": 1,
      "explain": "In a negative command the pronoun stands before the verb."
     },
     {
      "prompt": "Which form is the imperative of <i lang=\"fr\">avoir</i> for “let us have”?",
      "options": [
       "<i lang=\"fr\">Ayons</i>",
       "<i lang=\"fr\">Avons</i>",
       "<i lang=\"fr\">Aie</i>",
       "<i lang=\"fr\">Ayez</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Avoir</i> has the irregular imperative <i lang=\"fr\">aie</i>, <i lang=\"fr\">ayons</i>, <i lang=\"fr\">ayez</i>."
     }
    ]
   }
  }
 ]
};
