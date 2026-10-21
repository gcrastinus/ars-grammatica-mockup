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
   "body": "<p>The present subjunctive of most verbs is formed from the stem of the third person plural of the present indicative, with the endings <i>-e</i>, <i>-es</i>, <i>-e</i>, <i>-ions</i>, <i>-iez</i>, <i>-ent</i>: <i>ils parlent</i>, <i>que je parle</i>; <i>ils finissent</i>, <i>que je finisse</i>; <i>ils prennent</i>, <i>que je prenne</i>. It is usually written after <i>que</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th><i>être</i></th> <th><i>avoir</i></th> <th><i>parler</i></th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>1</td> <td class=\"f\">que je sois</td> <td class=\"f\">que j’aie</td> <td class=\"f\">que je parle</td></tr>\n<tr><td>2</td> <td class=\"f\">que tu sois</td> <td class=\"f\">que tu aies</td> <td class=\"f\">que tu parles</td></tr>\n<tr><td>3</td> <td class=\"f\">qu’il soit</td> <td class=\"f\">qu’il ait</td> <td class=\"f\">qu’il parle</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>1</td> <td class=\"f\">que nous soyons</td> <td class=\"f\">que nous ayons</td> <td class=\"f\">que nous parlions</td></tr>\n<tr><td>2</td> <td class=\"f\">que vous soyez</td> <td class=\"f\">que vous ayez</td> <td class=\"f\">que vous parliez</td></tr>\n<tr><td>3</td> <td class=\"f\">qu’ils soient</td> <td class=\"f\">qu’ils aient</td> <td class=\"f\">qu’ils parlent</td></tr>\n</table></div>\n<p>Several common verbs are irregular and must be learned: <i>aller</i> (<i>que j’aille</i>, <i>que nous allions</i>), <i>faire</i> (<i>que je fasse</i>), <i>pouvoir</i> (<i>que je puisse</i>), <i>savoir</i> (<i>que je sache</i>), <i>vouloir</i> (<i>que je veuille</i>).</p>",
   "qp": {
    "id": "q-fr-mood-forms",
    "variants": [
     {
      "prompt": "Which form is the present subjunctive of <i>prendre</i>, first person singular?",
      "options": [
       "<i>que je prends</i>",
       "<i>que je prendrai</i>",
       "<i>que je prenais</i>",
       "<i>que je prenne</i>"
      ],
      "answer": 3,
      "explain": "The stem comes from <i>ils prennent</i>, with the ending <i>-e</i>."
     },
     {
      "prompt": "Which form is the present subjunctive of <i>savoir</i>, third person singular?",
      "options": [
       "<i>qu’il sache</i>",
       "<i>qu’il sait</i>",
       "<i>qu’il saura</i>",
       "<i>qu’il savait</i>"
      ],
      "answer": 0,
      "explain": "<i>Savoir</i> is irregular: <i>que je sache</i>, <i>qu’il sache</i>."
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
      "explain": "<i>Ils finissent</i> gives <i>que je finisse</i>."
     }
    ]
   }
  },
  {
   "id": "uses",
   "title": "The uses of the subjunctive",
   "body": "<p>The indicative states a fact, and the subjunctive presents an action as willed, feared, felt, or doubted. The subjunctive is used in a clause with <i>que</i> after expressions of necessity (<i>il faut que nous partions</i>, “we must leave”), of will (<i>elle souhaite que tu restes</i>, “she wishes you to stay”), of feeling (<i>je regrette qu’il soit malade</i>, “I am sorry that he is ill”), and of doubt (<i>je doute qu’elle sache</i>, “I doubt that she knows”). <i>Je pense qu’il vient</i> has the indicative, but <i>je ne pense pas qu’il vienne</i> has the subjunctive, because the negative makes the statement doubtful.</p>\n<p>The subjunctive is also used after certain conjunctions: <i>pour que</i> and <i>afin que</i> (“so that”), <i>bien que</i> and <i>quoique</i> (“although”), <i>avant que</i> (“before”), <i>sans que</i> (“without”): <i>bien qu’il pleuve</i> (“although it is raining”), <i>avant qu’il fasse nuit</i> (“before it is dark”).</p>",
   "qp": {
    "id": "q-fr-mood-uses",
    "variants": [
     {
      "prompt": "Which form completes <i>Je doute qu’il ______ raison</i> (“I doubt that he is right”)?",
      "options": [
       "<i>ait</i>",
       "<i>a</i>",
       "<i>aura</i>",
       "<i>avoir</i>"
      ],
      "answer": 0,
      "explain": "After a verb of doubt, the subjunctive is used."
     },
     {
      "prompt": "Which form completes <i>Je sais qu’elle ______ là</i> (“I know that she is there”)?",
      "options": [
       "<i>soit</i>",
       "<i>être</i>",
       "<i>serait</i>",
       "<i>est</i>"
      ],
      "answer": 3,
      "explain": "<i>Savoir</i> states a fact, so the indicative is used."
     },
     {
      "prompt": "Which conjunction takes the subjunctive?",
      "options": [
       "<i>parce que</i>",
       "<i>puisque</i>",
       "<i>quoique</i>",
       "<i>pendant que</i>"
      ],
      "answer": 2,
      "explain": "<i>Quoique</i> (“although”) takes the subjunctive; the others take the indicative."
     }
    ]
   }
  },
  {
   "id": "conditional",
   "title": "The conditional",
   "body": "<p>The conditional is formed from the stem of the future and the endings of the imperfect: <i>je parlerais</i>, <i>nous finirions</i>, <i>ils seraient</i>, <i>j’aurais</i>, <i>tu ferais</i>. It is used in the main clause of a condition whose if-clause has the imperfect: <i>si elle savait la réponse, elle la dirait</i> (“if she knew the answer, she would say it”). After <i>si</i> meaning “if,” French never uses the future or the conditional.</p>\n<p>The conditional also softens a request or a wish (<i>aimeriez-vous du thé ?</i>, “would you like some tea?”) and gives the future seen from the past: <i>il a dit qu’il partirait</i> (“he said that he would leave”).</p>",
   "qp": {
    "id": "q-fr-mood-cond",
    "variants": [
     {
      "prompt": "Which form is the conditional of <i>être</i>, first person plural?",
      "options": [
       "<i>nous serions</i>",
       "<i>nous serons</i>",
       "<i>nous étions</i>",
       "<i>nous soyons</i>"
      ],
      "answer": 0,
      "explain": "The conditional uses the future stem <i>ser-</i> with the imperfect ending <i>-ions</i>."
     },
     {
      "prompt": "Which form completes <i>Si tu travaillais, tu ______</i> (“if you worked, you would succeed”)?",
      "options": [
       "<i>réussiras</i>",
       "<i>réussissais</i>",
       "<i>réussisses</i>",
       "<i>réussirais</i>"
      ],
      "answer": 3,
      "explain": "After an if-clause in the imperfect, the main clause has the conditional."
     },
     {
      "prompt": "Which form never follows <i>si</i> meaning “if”?",
      "options": [
       "The present",
       "The imperfect",
       "The conditional",
       "The pluperfect"
      ],
      "answer": 2,
      "explain": "After <i>si</i> meaning “if,” French uses neither the future nor the conditional."
     }
    ]
   }
  },
  {
   "id": "imperative",
   "title": "The imperative",
   "body": "<p>The imperative has three forms, without a subject pronoun: the second person singular, the first person plural, and the second person plural: <i>chante</i>, <i>chantons</i>, <i>chantez</i>; <i>finis</i>, <i>finissons</i>, <i>finissez</i>. Verbs in <i>-er</i> drop the <i>-s</i> of the second person singular: <i>tu chantes</i>, but <i>chante !</i> A few verbs are irregular: <i>être</i> (<i>sois</i>, <i>soyons</i>, <i>soyez</i>), <i>avoir</i> (<i>aie</i>, <i>ayons</i>, <i>ayez</i>), <i>savoir</i> (<i>sache</i>, <i>sachons</i>, <i>sachez</i>).</p>\n<p>In an affirmative command the object pronoun follows the verb with a hyphen (<i>écoute-moi</i>, <i>prends-le</i>); in a negative command it stands before the verb as usual (<i>ne le prends pas</i>, “do not take it”).</p>",
   "qp": {
    "id": "q-fr-mood-imp",
    "variants": [
     {
      "prompt": "Which form is the imperative of <i>regarder</i> said to one person?",
      "options": [
       "<i>Regardes !</i>",
       "<i>Regardez !</i>",
       "<i>Regarde !</i>",
       "<i>Regarder !</i>"
      ],
      "answer": 2,
      "explain": "Verbs in <i>-er</i> drop the <i>-s</i> in the second person singular of the imperative."
     },
     {
      "prompt": "Which sentence is correct for “Do not eat it!” (to several people)?",
      "options": [
       "<i>Ne mangez-le pas !</i>",
       "<i>Ne le mangez pas !</i>",
       "<i>Mangez-le pas !</i>",
       "<i>Ne mangez pas le !</i>"
      ],
      "answer": 1,
      "explain": "In a negative command the pronoun stands before the verb."
     },
     {
      "prompt": "Which form is the imperative of <i>avoir</i> for “let us have”?",
      "options": [
       "<i>Ayons</i>",
       "<i>Avons</i>",
       "<i>Aie</i>",
       "<i>Ayez</i>"
      ],
      "answer": 0,
      "explain": "<i>Avoir</i> has the irregular imperative <i>aie</i>, <i>ayons</i>, <i>ayez</i>."
     }
    ]
   }
  }
 ]
};
