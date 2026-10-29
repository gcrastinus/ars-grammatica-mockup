window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/subjunctive"] = {
 "id": "lang.iii-decl.fr/subjunctive",
 "title": "The Forms of the French Subjunctive",
 "sub": "The present, past, and imperfect subjunctive, and the verbs whose subjunctive is irregular",
 "sources": "Lawless; Larousse; Le Conjugueur; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "present",
   "title": "The present subjunctive",
   "body": "<p>English says “It is necessary that he be ready,” using the form “be” where an ordinary statement would have “is.” French uses a separate set of forms, the subjunctive, far more often than English: <i lang=\"fr\">il faut qu’il soit prêt</i>. The present subjunctive of most verbs is formed from the stem of the third person plural of the present indicative, with the endings <i lang=\"fr\">-e</i>, <i lang=\"fr\">-es</i>, <i lang=\"fr\">-e</i>, <i lang=\"fr\">-ions</i>, <i lang=\"fr\">-iez</i>, <i lang=\"fr\">-ent</i>: <i lang=\"fr\">ils parlent</i>, <i lang=\"fr\">que je parle</i>; <i lang=\"fr\">ils finissent</i>, <i lang=\"fr\">que je finisse</i>; <i lang=\"fr\">ils vendent</i>, <i lang=\"fr\">que je vende</i>; <i lang=\"fr\">ils écrivent</i>, <i lang=\"fr\">que j’écrive</i>.</p>\n<p>Verbs whose stem changes in the present, such as <i lang=\"fr\">venir</i> (<i lang=\"fr\">ils viennent</i>, <i lang=\"fr\">nous venons</i>), keep both stems in the subjunctive: <i lang=\"fr\">que je vienne</i>, but <i lang=\"fr\">que nous venions</i>. In the first and second persons plural the present subjunctive of most verbs is the same as the <i lang=\"fr\">imparfait</i>: <i lang=\"fr\">que nous parlions</i>, <i lang=\"fr\">nous parlions</i>, and only the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-fr-subj-present",
    "variants": [
     {
      "prompt": "What is the present subjunctive, first person singular, of <i lang=\"fr\">lire</i> (<i lang=\"fr\">ils lisent</i>)?",
      "options": [
       "<i lang=\"fr\">que je lise</i>",
       "<i lang=\"fr\">que je lis</i>",
       "<i lang=\"fr\">que je lisais</i>",
       "<i lang=\"fr\">que je lirai</i>"
      ],
      "answer": 0,
      "explain": "The stem of <i lang=\"fr\">ils lisent</i>, <i lang=\"fr\">lis-</i>, takes <i lang=\"fr\">-e</i>: <i lang=\"fr\">que je lise</i>."
     },
     {
      "prompt": "What is the present subjunctive of <i lang=\"fr\">prendre</i> in the first person plural?",
      "options": [
       "<i lang=\"fr\">que nous prennions</i>",
       "<i lang=\"fr\">que nous prenons</i>",
       "<i lang=\"fr\">que nous prendrions</i>",
       "<i lang=\"fr\">que nous prenions</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Prendre</i> keeps both stems: <i lang=\"fr\">que je prenne</i> (from <i lang=\"fr\">ils prennent</i>), but <i lang=\"fr\">que nous prenions</i> (from <i lang=\"fr\">nous prenons</i>)."
     },
     {
      "prompt": "From which form is the present subjunctive of most verbs built?",
      "options": [
       "The infinitive",
       "The past participle",
       "The third person plural of the present indicative",
       "The future"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Ils finissent</i> gives <i lang=\"fr\">que je finisse</i>."
     }
    ]
   }
  },
  {
   "id": "irregular",
   "title": "Irregular subjunctives",
   "body": "<p>A few common verbs have a subjunctive that must be learned by itself:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>être</th> <th>avoir</th> <th>aller</th> <th>faire</th></tr>\n<tr><td>First singular</td> <td class=\"f\">que je sois</td> <td class=\"f\">que j’aie</td> <td class=\"f\">que j’aille</td> <td class=\"f\">que je fasse</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">que tu sois</td> <td class=\"f\">que tu aies</td> <td class=\"f\">que tu ailles</td> <td class=\"f\">que tu fasses</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">qu’il soit</td> <td class=\"f\">qu’il ait</td> <td class=\"f\">qu’il aille</td> <td class=\"f\">qu’il fasse</td></tr>\n<tr><td>First plural</td> <td class=\"f\">que nous soyons</td> <td class=\"f\">que nous ayons</td> <td class=\"f\">que nous allions</td> <td class=\"f\">que nous fassions</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">que vous soyez</td> <td class=\"f\">que vous ayez</td> <td class=\"f\">que vous alliez</td> <td class=\"f\">que vous fassiez</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">qu’ils soient</td> <td class=\"f\">qu’ils aient</td> <td class=\"f\">qu’ils aillent</td> <td class=\"f\">qu’ils fassent</td></tr>\n</table></div>\n<p>Others are <i lang=\"fr\">pouvoir</i>, <i lang=\"fr\">que je puisse</i>; <i lang=\"fr\">savoir</i>, <i lang=\"fr\">que je sache</i>; and <i lang=\"fr\">vouloir</i>, <i lang=\"fr\">que je veuille</i> (but <i lang=\"fr\">que nous voulions</i>). The subjunctive is used, as Section V shows in detail, after verbs of willing, feeling, and doubting (<i lang=\"fr\">je veux que tu viennes</i>), after <i lang=\"fr\">il faut que</i>, and after some conjunctions, such as <i lang=\"fr\">bien que</i> (“although”), <i lang=\"fr\">pour que</i> (“so that”), and <i lang=\"fr\">avant que</i> (“before”); but not after <i lang=\"fr\">espérer</i> (“to hope”), which takes the indicative.</p>",
   "qp": {
    "id": "q-fr-subj-irregular",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Il faut que nous ___ prudents</i> (“We must be careful”).",
      "options": [
       "<i lang=\"fr\">sommes</i>",
       "<i lang=\"fr\">soyions</i>",
       "<i lang=\"fr\">soyons</i>",
       "<i lang=\"fr\">serons</i>"
      ],
      "answer": 2,
      "explain": "The present subjunctive of <i lang=\"fr\">être</i> is <i lang=\"fr\">que nous soyons</i>, with no <i lang=\"fr\">i</i> after the <i lang=\"fr\">y</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Je veux qu’elle ___ la vérité</i> (“I want her to know the truth”).",
      "options": [
       "<i lang=\"fr\">sait</i>",
       "<i lang=\"fr\">sache</i>",
       "<i lang=\"fr\">savait</i>",
       "<i lang=\"fr\">saura</i>"
      ],
      "answer": 1,
      "explain": "After <i lang=\"fr\">vouloir que</i> the subjunctive is used, and that of <i lang=\"fr\">savoir</i> is <i lang=\"fr\">que je sache</i>."
     },
     {
      "prompt": "Which verb takes the indicative, not the subjunctive, after it?",
      "options": [
       "<i lang=\"fr\">espérer</i>",
       "<i lang=\"fr\">vouloir</i>",
       "<i lang=\"fr\">douter</i>",
       "<i lang=\"fr\">craindre</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">J’espère qu’il viendra</i>: <i lang=\"fr\">espérer</i> takes the indicative, whereas verbs of willing and doubting take the subjunctive."
     }
    ]
   }
  },
  {
   "id": "past-imperfect",
   "title": "The past and the imperfect subjunctive",
   "body": "<p>The past subjunctive is formed with the present subjunctive of <i lang=\"fr\">avoir</i> or <i lang=\"fr\">être</i> and the past participle: <i lang=\"fr\">que j’aie parlé</i>, <i lang=\"fr\">qu’elle soit venue</i>. It presents the action as complete: <i lang=\"fr\">je suis content qu’il soit venu</i> (“I am glad that he came”).</p>\n<p>The <strong>imperfect subjunctive</strong> is a literary form, built on the <i lang=\"fr\">passé simple</i>: <i lang=\"fr\">qu’il parlât</i>, <i lang=\"fr\">qu’il finît</i>, <i lang=\"fr\">qu’il fût</i>, <i lang=\"fr\">qu’il eût</i>; in the plural <i lang=\"fr\">qu’ils parlassent</i>, <i lang=\"fr\">qu’ils fussent</i>. Classical French used it after a past tense in the main clause (<i lang=\"fr\">il fallait qu’il partît</i>), and it is still met in literary prose, above all in the third person singular. Ordinary modern French uses the present subjunctive in its place: <i lang=\"fr\">il fallait qu’il parte</i>. Its pluperfect, <i lang=\"fr\">qu’il eût parlé</i>, also serves in literary French as a conditional past: <i lang=\"fr\">il eût mieux valu</i> (“it would have been better”).</p>",
   "qp": {
    "id": "q-fr-subj-past",
    "variants": [
     {
      "prompt": "What is <i lang=\"fr\">qu’il fût</i>?",
      "options": [
       "The <i lang=\"fr\">passé simple</i> of <i lang=\"fr\">être</i>",
       "The imperfect subjunctive of <i lang=\"fr\">être</i>",
       "The present subjunctive of <i lang=\"fr\">être</i>",
       "The future of <i lang=\"fr\">être</i>"
      ],
      "answer": 1,
      "explain": "The circumflex marks the imperfect subjunctive, <i lang=\"fr\">qu’il fût</i>; the <i lang=\"fr\">passé simple</i> is <i lang=\"fr\">il fut</i>."
     },
     {
      "prompt": "How does ordinary modern French render the literary <i lang=\"fr\">il fallait qu’il vînt</i>?",
      "options": [
       "<i lang=\"fr\">il fallait qu’il venait</i>",
       "<i lang=\"fr\">il fallait qu’il viendrait</i>",
       "<i lang=\"fr\">il fallait qu’il vienne</i>",
       "<i lang=\"fr\">il fallait qu’il est venu</i>"
      ],
      "answer": 2,
      "explain": "Modern French uses the present subjunctive in place of the imperfect subjunctive."
     },
     {
      "prompt": "What is the past subjunctive, third person singular feminine, of <i lang=\"fr\">partir</i>?",
      "options": [
       "<i lang=\"fr\">qu’elle ait parti</i>",
       "<i lang=\"fr\">qu’elle soit parti</i>",
       "<i lang=\"fr\">qu’elle partît</i>",
       "<i lang=\"fr\">qu’elle soit partie</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Partir</i> takes <i lang=\"fr\">être</i>, and the participle agrees with the subject: <i lang=\"fr\">qu’elle soit partie</i>."
     }
    ]
   }
  }
 ]
};
