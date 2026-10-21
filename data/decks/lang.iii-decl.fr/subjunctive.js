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
   "body": "<p>English says “It is necessary that he be ready,” using the form “be” where an ordinary statement would have “is.” French uses a separate set of forms, the subjunctive, far more often than English: <i>il faut qu’il soit prêt</i>. The present subjunctive of most verbs is formed from the stem of the third person plural of the present indicative, with the endings <i>-e</i>, <i>-es</i>, <i>-e</i>, <i>-ions</i>, <i>-iez</i>, <i>-ent</i>: <i>ils parlent</i>, <i>que je parle</i>; <i>ils finissent</i>, <i>que je finisse</i>; <i>ils vendent</i>, <i>que je vende</i>; <i>ils écrivent</i>, <i>que j’écrive</i>.</p>\n<p>Verbs whose stem changes in the present, such as <i>venir</i> (<i>ils viennent</i>, <i>nous venons</i>), keep both stems in the subjunctive: <i>que je vienne</i>, but <i>que nous venions</i>. In the first and second persons plural the present subjunctive of most verbs is the same as the imparfait: <i>que nous parlions</i>, <i>nous parlions</i>, and only the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-fr-subj-present",
    "variants": [
     {
      "prompt": "What is the present subjunctive, first person singular, of <i>lire</i> (<i>ils lisent</i>)?",
      "options": [
       "<i>que je lise</i>",
       "<i>que je lis</i>",
       "<i>que je lisais</i>",
       "<i>que je lirai</i>"
      ],
      "answer": 0,
      "explain": "The stem of <i>ils lisent</i>, <i>lis-</i>, takes <i>-e</i>: <i>que je lise</i>."
     },
     {
      "prompt": "What is the present subjunctive of <i>prendre</i> in the first person plural?",
      "options": [
       "<i>que nous prennions</i>",
       "<i>que nous prenons</i>",
       "<i>que nous prendrions</i>",
       "<i>que nous prenions</i>"
      ],
      "answer": 3,
      "explain": "<i>Prendre</i> keeps both stems: <i>que je prenne</i> (from <i>ils prennent</i>), but <i>que nous prenions</i> (from <i>nous prenons</i>)."
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
      "explain": "<i>Ils finissent</i> gives <i>que je finisse</i>."
     }
    ]
   }
  },
  {
   "id": "irregular",
   "title": "Irregular subjunctives",
   "body": "<p>A few common verbs have a subjunctive that must be learned by itself:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>être</th> <th>avoir</th> <th>aller</th> <th>faire</th></tr>\n<tr><td>First singular</td> <td class=\"f\">que je sois</td> <td class=\"f\">que j’aie</td> <td class=\"f\">que j’aille</td> <td class=\"f\">que je fasse</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">que tu sois</td> <td class=\"f\">que tu aies</td> <td class=\"f\">que tu ailles</td> <td class=\"f\">que tu fasses</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">qu’il soit</td> <td class=\"f\">qu’il ait</td> <td class=\"f\">qu’il aille</td> <td class=\"f\">qu’il fasse</td></tr>\n<tr><td>First plural</td> <td class=\"f\">que nous soyons</td> <td class=\"f\">que nous ayons</td> <td class=\"f\">que nous allions</td> <td class=\"f\">que nous fassions</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">que vous soyez</td> <td class=\"f\">que vous ayez</td> <td class=\"f\">que vous alliez</td> <td class=\"f\">que vous fassiez</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">qu’ils soient</td> <td class=\"f\">qu’ils aient</td> <td class=\"f\">qu’ils aillent</td> <td class=\"f\">qu’ils fassent</td></tr>\n</table></div>\n<p>Others are <i>pouvoir</i>, <i>que je puisse</i>; <i>savoir</i>, <i>que je sache</i>; and <i>vouloir</i>, <i>que je veuille</i> (but <i>que nous voulions</i>). The subjunctive is used, as Section V shows in detail, after verbs of willing, feeling, and doubting (<i>je veux que tu viennes</i>), after <i>il faut que</i>, and after some conjunctions, such as <i>bien que</i> (“although”), <i>pour que</i> (“so that”), and <i>avant que</i> (“before”); but not after <i>espérer</i> (“to hope”), which takes the indicative.</p>",
   "qp": {
    "id": "q-fr-subj-irregular",
    "variants": [
     {
      "prompt": "Choose the form: <i>Il faut que nous ___ prudents</i> (“We must be careful”).",
      "options": [
       "<i>sommes</i>",
       "<i>soyions</i>",
       "<i>soyons</i>",
       "<i>serons</i>"
      ],
      "answer": 2,
      "explain": "The present subjunctive of <i>être</i> is <i>que nous soyons</i>, with no <i>i</i> after the <i>y</i>."
     },
     {
      "prompt": "Choose the form: <i>Je veux qu’elle ___ la vérité</i> (“I want her to know the truth”).",
      "options": [
       "<i>sait</i>",
       "<i>sache</i>",
       "<i>savait</i>",
       "<i>saura</i>"
      ],
      "answer": 1,
      "explain": "After <i>vouloir que</i> the subjunctive is used, and that of <i>savoir</i> is <i>que je sache</i>."
     },
     {
      "prompt": "Which verb takes the indicative, not the subjunctive, after it?",
      "options": [
       "<i>espérer</i>",
       "<i>vouloir</i>",
       "<i>douter</i>",
       "<i>craindre</i>"
      ],
      "answer": 0,
      "explain": "<i>J’espère qu’il viendra</i>: <i>espérer</i> takes the indicative, whereas verbs of willing and doubting take the subjunctive."
     }
    ]
   }
  },
  {
   "id": "past-imperfect",
   "title": "The past and the imperfect subjunctive",
   "body": "<p>The past subjunctive is formed with the present subjunctive of <i>avoir</i> or <i>être</i> and the past participle: <i>que j’aie parlé</i>, <i>qu’elle soit venue</i>. It presents the action as complete: <i>je suis content qu’il soit venu</i> (“I am glad that he came”).</p>\n<p>The <strong>imperfect subjunctive</strong> is a literary form, built on the passé simple: <i>qu’il parlât</i>, <i>qu’il finît</i>, <i>qu’il fût</i>, <i>qu’il eût</i>; in the plural <i>qu’ils parlassent</i>, <i>qu’ils fussent</i>. Classical French used it after a past tense in the main clause (<i>il fallait qu’il partît</i>), and it is still met in literary prose, above all in the third person singular. Ordinary modern French uses the present subjunctive in its place: <i>il fallait qu’il parte</i>. Its pluperfect, <i>qu’il eût parlé</i>, also serves in literary French as a conditional past: <i>il eût mieux valu</i> (“it would have been better”).</p>",
   "qp": {
    "id": "q-fr-subj-past",
    "variants": [
     {
      "prompt": "What is <i>qu’il fût</i>?",
      "options": [
       "The passé simple of <i>être</i>",
       "The imperfect subjunctive of <i>être</i>",
       "The present subjunctive of <i>être</i>",
       "The future of <i>être</i>"
      ],
      "answer": 1,
      "explain": "The circumflex marks the imperfect subjunctive, <i>qu’il fût</i>; the passé simple is <i>il fut</i>."
     },
     {
      "prompt": "How does ordinary modern French render the literary <i>il fallait qu’il vînt</i>?",
      "options": [
       "<i>il fallait qu’il venait</i>",
       "<i>il fallait qu’il viendrait</i>",
       "<i>il fallait qu’il vienne</i>",
       "<i>il fallait qu’il est venu</i>"
      ],
      "answer": 2,
      "explain": "Modern French uses the present subjunctive in place of the imperfect subjunctive."
     },
     {
      "prompt": "What is the past subjunctive, third person singular feminine, of <i>partir</i>?",
      "options": [
       "<i>qu’elle ait parti</i>",
       "<i>qu’elle soit parti</i>",
       "<i>qu’elle partît</i>",
       "<i>qu’elle soit partie</i>"
      ],
      "answer": 3,
      "explain": "<i>Partir</i> takes <i>être</i>, and the participle agrees with the subject: <i>qu’elle soit partie</i>."
     }
    ]
   }
  }
 ]
};
