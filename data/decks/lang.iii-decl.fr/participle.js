window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/participle"] = {
 "id": "lang.iii-decl.fr/participle",
 "title": "The French Participle and Its Agreement",
 "sub": "The past participle, its agreement with être, with avoir, and in pronominal verbs, and the present participle",
 "sources": "Lawless; Larousse; Le Conjugueur; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "forms",
   "title": "The forms of the past participle",
   "body": "<p>The past participle of a verb in <i lang=\"fr\">-er</i> ends in <i lang=\"fr\">-é</i> (<i lang=\"fr\">parlé</i>), that of most verbs of the second group in <i lang=\"fr\">-i</i> (<i lang=\"fr\">fini</i>), and that of many verbs in <i lang=\"fr\">-re</i> in <i lang=\"fr\">-u</i> (<i lang=\"fr\">vendu</i>). Many common verbs have an irregular participle, which must be learned: <i lang=\"fr\">fait</i> (<i lang=\"fr\">faire</i>), <i lang=\"fr\">dit</i> (<i lang=\"fr\">dire</i>), <i lang=\"fr\">écrit</i> (<i lang=\"fr\">écrire</i>), <i lang=\"fr\">pris</i> (<i lang=\"fr\">prendre</i>), <i lang=\"fr\">mis</i> (<i lang=\"fr\">mettre</i>), <i lang=\"fr\">ouvert</i> (<i lang=\"fr\">ouvrir</i>), <i lang=\"fr\">mort</i> (<i lang=\"fr\">mourir</i>), <i lang=\"fr\">né</i> (<i lang=\"fr\">naître</i>), <i lang=\"fr\">eu</i> (<i lang=\"fr\">avoir</i>), <i lang=\"fr\">été</i> (<i lang=\"fr\">être</i>). Like an adjective, the participle can agree in gender and number by adding <i lang=\"fr\">-e</i> and <i lang=\"fr\">-s</i>, and in many participles this can be heard: <i lang=\"fr\">écrit</i>, <i lang=\"fr\">écrite</i>; <i lang=\"fr\">pris</i>, <i lang=\"fr\">prise</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-forms",
    "variants": [
     {
      "prompt": "What is the past participle of <i lang=\"fr\">ouvrir</i>?",
      "options": [
       "<i lang=\"fr\">ouvri</i>",
       "<i lang=\"fr\">ouvert</i>",
       "<i lang=\"fr\">ouvré</i>",
       "<i lang=\"fr\">ouvrit</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ouvrir</i> has the irregular participle <i lang=\"fr\">ouvert</i>."
     },
     {
      "prompt": "What is the past participle of <i lang=\"fr\">mettre</i>?",
      "options": [
       "<i lang=\"fr\">metté</i>",
       "<i lang=\"fr\">mettu</i>",
       "<i lang=\"fr\">mis</i>",
       "<i lang=\"fr\">mettri</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Mettre</i> has the irregular participle <i lang=\"fr\">mis</i>, feminine <i lang=\"fr\">mise</i>."
     },
     {
      "prompt": "In which participle can the feminine be heard as well as seen?",
      "options": [
       "<i lang=\"fr\">parlée</i>",
       "<i lang=\"fr\">finie</i>",
       "<i lang=\"fr\">vendue</i>",
       "<i lang=\"fr\">écrite</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Écrite</i> sounds its final <i lang=\"fr\">t</i>; in <i lang=\"fr\">parlée</i>, <i lang=\"fr\">finie</i>, and <i lang=\"fr\">vendue</i> the feminine <i lang=\"fr\">-e</i> is silent."
     }
    ]
   }
  },
  {
   "id": "etre",
   "title": "Agreement with <i lang=\"fr\">être</i>",
   "body": "<p>With <i lang=\"fr\">être</i>, the past participle agrees with the subject, as an adjective after <i lang=\"fr\">être</i> does: <i lang=\"fr\">il est parti</i>, <i lang=\"fr\">elle est partie</i>, <i lang=\"fr\">ils sont partis</i>, <i lang=\"fr\">elles sont parties</i>. This holds both for the verbs of motion and change of state that form their compound tenses with <i lang=\"fr\">être</i> (<i lang=\"fr\">aller</i>, <i lang=\"fr\">venir</i>, <i lang=\"fr\">arriver</i>, <i lang=\"fr\">partir</i>, <i lang=\"fr\">entrer</i>, <i lang=\"fr\">sortir</i>, <i lang=\"fr\">monter</i>, <i lang=\"fr\">descendre</i>, <i lang=\"fr\">naître</i>, <i lang=\"fr\">mourir</i>, <i lang=\"fr\">rester</i>, <i lang=\"fr\">tomber</i>, and their compounds) and for every passive: <i lang=\"fr\">la ville a été prise</i> (“the city was taken”). With <i lang=\"fr\">vous</i> used to one person, the participle agrees with the person meant: <i lang=\"fr\">Madame, vous êtes arrivée</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-etre",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Les garçons sont ___ hier</i> (“The boys came down yesterday”).",
      "options": [
       "<i lang=\"fr\">descendu</i>",
       "<i lang=\"fr\">descendues</i>",
       "<i lang=\"fr\">descendus</i>",
       "<i lang=\"fr\">descendue</i>"
      ],
      "answer": 2,
      "explain": "With <i lang=\"fr\">être</i> the participle agrees with the subject, masculine plural."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Les livres ont été ___</i> (“The books have been written”).",
      "options": [
       "<i lang=\"fr\">écrit</i>",
       "<i lang=\"fr\">écrits</i>",
       "<i lang=\"fr\">écrites</i>",
       "<i lang=\"fr\">écrite</i>"
      ],
      "answer": 1,
      "explain": "In the passive the participle agrees with the subject, <i lang=\"fr\">les livres</i>, masculine plural."
     },
     {
      "prompt": "Why is the participle <i lang=\"fr\">née</i> in <i lang=\"fr\">Marie est née à Lyon</i>?",
      "options": [
       "With <i lang=\"fr\">être</i> it agrees with the subject",
       "It agrees with <i lang=\"fr\">Lyon</i>, a feminine city",
       "<i lang=\"fr\">Né</i> is always feminine",
       "It agrees with an object before the verb"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Naître</i> forms its compound tenses with <i lang=\"fr\">être</i>, so the participle agrees with <i lang=\"fr\">Marie</i>."
     }
    ]
   }
  },
  {
   "id": "avoir",
   "title": "Agreement with <i lang=\"fr\">avoir</i>",
   "body": "<p>With <i lang=\"fr\">avoir</i>, the past participle does not agree with the subject: <i lang=\"fr\">elles ont chanté</i>. But it agrees with a direct object that stands before the verb. The direct object stands before the verb in three common cases: as an object pronoun (<i lang=\"fr\">ces chansons, je les ai chantées</i>), as the relative <i lang=\"fr\">que</i> (<i lang=\"fr\">les chansons que j’ai chantées</i>), and after <i lang=\"fr\">quel</i> or <i lang=\"fr\">combien de</i> in a question (<i lang=\"fr\">quelles chansons as-tu chantées?</i>). When the direct object follows the verb, there is no agreement: <i lang=\"fr\">j’ai chanté les chansons</i>.</p>\n<p>There is no agreement with <i lang=\"fr\">en</i>, which is not a direct object of definite gender: <i lang=\"fr\">des chansons, j’en ai chanté</i>. The rule is chiefly a rule of writing, since in most participles the agreement is silent, but it is heard in participles such as <i lang=\"fr\">écrite</i>, <i lang=\"fr\">prise</i>, <i lang=\"fr\">mise</i>, <i lang=\"fr\">faite</i>, and <i lang=\"fr\">ouverte</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-avoir",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">La robe qu’elle a ___ est bleue</i> (“The dress that she made is blue”).",
      "options": [
       "<i lang=\"fr\">fait</i>",
       "<i lang=\"fr\">faite</i>",
       "<i lang=\"fr\">faits</i>",
       "<i lang=\"fr\">faites</i>"
      ],
      "answer": 1,
      "explain": "The relative <i lang=\"fr\">que</i>, standing for <i lang=\"fr\">la robe</i>, is a direct object before the verb, so the participle agrees: <i lang=\"fr\">faite</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Elles ont ___ la porte</i> (“They opened the door”).",
      "options": [
       "<i lang=\"fr\">ouverte</i>",
       "<i lang=\"fr\">ouvertes</i>",
       "<i lang=\"fr\">ouvert</i>",
       "<i lang=\"fr\">ouverts</i>"
      ],
      "answer": 2,
      "explain": "With <i lang=\"fr\">avoir</i> the participle does not agree with the subject, and the direct object <i lang=\"fr\">la porte</i> follows the verb."
     },
     {
      "prompt": "Why is there no agreement in <i lang=\"fr\">des pommes, j’en ai mangé</i>?",
      "options": [
       "The direct object follows the verb here",
       "<i lang=\"fr\">Manger</i> takes <i lang=\"fr\">être</i> in the passé composé",
       "Participles never agree when the auxiliary is <i lang=\"fr\">avoir</i>",
       "<i lang=\"fr\">En</i> is not a direct object of definite gender"
      ],
      "answer": 3,
      "explain": "The participle does not agree with <i lang=\"fr\">en</i>."
     }
    ]
   }
  },
  {
   "id": "pronominal",
   "title": "Pronominal verbs and the present participle",
   "body": "<p>Pronominal verbs take <i lang=\"fr\">être</i>, but their participle agrees with the reflexive pronoun when that pronoun is the direct object: <i lang=\"fr\">elle s’est lavée</i> (“she washed herself”). When the reflexive is an indirect object, there is no agreement: <i lang=\"fr\">elle s’est lavé les mains</i> (“she washed her hands,” literally “washed the hands for herself”), <i lang=\"fr\">ils se sont parlé</i> (“they spoke to each other,” since one speaks <i>to</i> someone).</p>\n<p>The present participle ends in <i lang=\"fr\">-ant</i> and does not change: <i lang=\"fr\">des enfants obéissant à leurs parents</i> (“children obeying their parents”). The same form used as a mere adjective, the verbal adjective, agrees like an adjective: <i lang=\"fr\">des enfants obéissants</i> (“obedient children”). With <i lang=\"fr\">en</i> it forms the <strong>gérondif</strong>, which tells how or when: <i lang=\"fr\">en chantant</i> (“while singing,” “by singing”).</p>",
   "qp": {
    "id": "q-fr-ptc-pronominal",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Ils se sont ___ tôt</i> (“They got up early”).",
      "options": [
       "<i lang=\"fr\">levé</i>",
       "<i lang=\"fr\">levées</i>",
       "<i lang=\"fr\">levée</i>",
       "<i lang=\"fr\">levés</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Se</i> is the direct object of <i lang=\"fr\">lever</i> (“they raised themselves”), so the participle agrees: <i lang=\"fr\">levés</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Ils se sont ___ des lettres</i> (“They wrote letters to each other”).",
      "options": [
       "<i lang=\"fr\">écrit</i>",
       "<i lang=\"fr\">écrits</i>",
       "<i lang=\"fr\">écrites</i>",
       "<i lang=\"fr\">écrite</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Se</i> is an indirect object (“to each other”), and the direct object <i lang=\"fr\">des lettres</i> follows, so there is no agreement."
     },
     {
      "prompt": "What is <i lang=\"fr\">en marchant</i>?",
      "options": [
       "A verbal adjective",
       "The gérondif, “while walking”",
       "The present participle agreeing with its noun",
       "The past participle"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">En</i> with the present participle forms the gérondif, which tells how or when."
     }
    ]
   }
  }
 ]
};
