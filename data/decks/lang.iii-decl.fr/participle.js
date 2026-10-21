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
   "body": "<p>The past participle of a verb in <i>-er</i> ends in <i>-é</i> (<i>parlé</i>), that of most verbs of the second group in <i>-i</i> (<i>fini</i>), and that of many verbs in <i>-re</i> in <i>-u</i> (<i>vendu</i>). Many common verbs have an irregular participle, which must be learned: <i>fait</i> (<i>faire</i>), <i>dit</i> (<i>dire</i>), <i>écrit</i> (<i>écrire</i>), <i>pris</i> (<i>prendre</i>), <i>mis</i> (<i>mettre</i>), <i>ouvert</i> (<i>ouvrir</i>), <i>mort</i> (<i>mourir</i>), <i>né</i> (<i>naître</i>), <i>eu</i> (<i>avoir</i>), <i>été</i> (<i>être</i>). Like an adjective, the participle can agree in gender and number by adding <i>-e</i> and <i>-s</i>, and in many participles this can be heard: <i>écrit</i>, <i>écrite</i>; <i>pris</i>, <i>prise</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-forms",
    "variants": [
     {
      "prompt": "What is the past participle of <i>ouvrir</i>?",
      "options": [
       "<i>ouvri</i>",
       "<i>ouvert</i>",
       "<i>ouvré</i>",
       "<i>ouvrit</i>"
      ],
      "answer": 1,
      "explain": "<i>Ouvrir</i> has the irregular participle <i>ouvert</i>."
     },
     {
      "prompt": "What is the past participle of <i>mettre</i>?",
      "options": [
       "<i>metté</i>",
       "<i>mettu</i>",
       "<i>mis</i>",
       "<i>mettri</i>"
      ],
      "answer": 2,
      "explain": "<i>Mettre</i> has the irregular participle <i>mis</i>, feminine <i>mise</i>."
     },
     {
      "prompt": "In which participle can the feminine be heard as well as seen?",
      "options": [
       "<i>parlée</i>",
       "<i>finie</i>",
       "<i>vendue</i>",
       "<i>écrite</i>"
      ],
      "answer": 3,
      "explain": "<i>Écrite</i> sounds its final <i>t</i>; in <i>parlée</i>, <i>finie</i>, and <i>vendue</i> the feminine <i>-e</i> is silent."
     }
    ]
   }
  },
  {
   "id": "etre",
   "title": "Agreement with <i>être</i>",
   "body": "<p>With <i>être</i>, the past participle agrees with the subject, as an adjective after <i>être</i> does: <i>il est parti</i>, <i>elle est partie</i>, <i>ils sont partis</i>, <i>elles sont parties</i>. This holds both for the verbs of motion and change of state that form their compound tenses with <i>être</i> (<i>aller</i>, <i>venir</i>, <i>arriver</i>, <i>partir</i>, <i>entrer</i>, <i>sortir</i>, <i>monter</i>, <i>descendre</i>, <i>naître</i>, <i>mourir</i>, <i>rester</i>, <i>tomber</i>, and their compounds) and for every passive: <i>la ville a été prise</i> (“the city was taken”). With <i>vous</i> used to one person, the participle agrees with the person meant: <i>Madame, vous êtes arrivée</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-etre",
    "variants": [
     {
      "prompt": "Choose the form: <i>Les garçons sont ___ hier</i> (“The boys came down yesterday”).",
      "options": [
       "<i>descendu</i>",
       "<i>descendues</i>",
       "<i>descendus</i>",
       "<i>descendue</i>"
      ],
      "answer": 2,
      "explain": "With <i>être</i> the participle agrees with the subject, masculine plural."
     },
     {
      "prompt": "Choose the form: <i>Les livres ont été ___</i> (“The books have been written”).",
      "options": [
       "<i>écrit</i>",
       "<i>écrits</i>",
       "<i>écrites</i>",
       "<i>écrite</i>"
      ],
      "answer": 1,
      "explain": "In the passive the participle agrees with the subject, <i>les livres</i>, masculine plural."
     },
     {
      "prompt": "Why is the participle <i>née</i> in <i>Marie est née à Lyon</i>?",
      "options": [
       "With <i>être</i> it agrees with the subject",
       "It agrees with <i>Lyon</i>, a feminine city",
       "<i>Né</i> is always feminine",
       "It agrees with an object before the verb"
      ],
      "answer": 0,
      "explain": "<i>Naître</i> forms its compound tenses with <i>être</i>, so the participle agrees with <i>Marie</i>."
     }
    ]
   }
  },
  {
   "id": "avoir",
   "title": "Agreement with <i>avoir</i>",
   "body": "<p>With <i>avoir</i>, the past participle does not agree with the subject: <i>elles ont chanté</i>. But it agrees with a direct object that stands before the verb. The direct object stands before the verb in three common cases: as an object pronoun (<i>ces chansons, je les ai chantées</i>), as the relative <i>que</i> (<i>les chansons que j’ai chantées</i>), and after <i>quel</i> or <i>combien de</i> in a question (<i>quelles chansons as-tu chantées?</i>). When the direct object follows the verb, there is no agreement: <i>j’ai chanté les chansons</i>.</p>\n<p>There is no agreement with <i>en</i>, which is not a direct object of definite gender: <i>des chansons, j’en ai chanté</i>. The rule is chiefly a rule of writing, since in most participles the agreement is silent, but it is heard in participles such as <i>écrite</i>, <i>prise</i>, <i>mise</i>, <i>faite</i>, and <i>ouverte</i>.</p>",
   "qp": {
    "id": "q-fr-ptc-avoir",
    "variants": [
     {
      "prompt": "Choose the form: <i>La robe qu’elle a ___ est bleue</i> (“The dress that she made is blue”).",
      "options": [
       "<i>fait</i>",
       "<i>faite</i>",
       "<i>faits</i>",
       "<i>faites</i>"
      ],
      "answer": 1,
      "explain": "The relative <i>que</i>, standing for <i>la robe</i>, is a direct object before the verb, so the participle agrees: <i>faite</i>."
     },
     {
      "prompt": "Choose the form: <i>Elles ont ___ la porte</i> (“They opened the door”).",
      "options": [
       "<i>ouverte</i>",
       "<i>ouvertes</i>",
       "<i>ouvert</i>",
       "<i>ouverts</i>"
      ],
      "answer": 2,
      "explain": "With <i>avoir</i> the participle does not agree with the subject, and the direct object <i>la porte</i> follows the verb."
     },
     {
      "prompt": "Why is there no agreement in <i>des pommes, j’en ai mangé</i>?",
      "options": [
       "The direct object follows the verb here",
       "<i>Manger</i> takes <i>être</i> in the passé composé",
       "Participles never agree when the auxiliary is <i>avoir</i>",
       "<i>En</i> is not a direct object of definite gender"
      ],
      "answer": 3,
      "explain": "The participle does not agree with <i>en</i>."
     }
    ]
   }
  },
  {
   "id": "pronominal",
   "title": "Pronominal verbs and the present participle",
   "body": "<p>Pronominal verbs take <i>être</i>, but their participle agrees with the reflexive pronoun when that pronoun is the direct object: <i>elle s’est lavée</i> (“she washed herself”). When the reflexive is an indirect object, there is no agreement: <i>elle s’est lavé les mains</i> (“she washed her hands,” literally “washed the hands for herself”), <i>ils se sont parlé</i> (“they spoke to each other,” since one speaks <i>to</i> someone).</p>\n<p>The present participle ends in <i>-ant</i> and does not change: <i>des enfants obéissant à leurs parents</i> (“children obeying their parents”). The same form used as a mere adjective, the verbal adjective, agrees like an adjective: <i>des enfants obéissants</i> (“obedient children”). With <i>en</i> it forms the <strong>gérondif</strong>, which tells how or when: <i>en chantant</i> (“while singing,” “by singing”).</p>",
   "qp": {
    "id": "q-fr-ptc-pronominal",
    "variants": [
     {
      "prompt": "Choose the form: <i>Ils se sont ___ tôt</i> (“They got up early”).",
      "options": [
       "<i>levé</i>",
       "<i>levées</i>",
       "<i>levée</i>",
       "<i>levés</i>"
      ],
      "answer": 3,
      "explain": "<i>Se</i> is the direct object of <i>lever</i> (“they raised themselves”), so the participle agrees: <i>levés</i>."
     },
     {
      "prompt": "Choose the form: <i>Ils se sont ___ des lettres</i> (“They wrote letters to each other”).",
      "options": [
       "<i>écrit</i>",
       "<i>écrits</i>",
       "<i>écrites</i>",
       "<i>écrite</i>"
      ],
      "answer": 0,
      "explain": "<i>Se</i> is an indirect object (“to each other”), and the direct object <i>des lettres</i> follows, so there is no agreement."
     },
     {
      "prompt": "What is <i>en marchant</i>?",
      "options": [
       "A verbal adjective",
       "The gérondif, “while walking”",
       "The present participle agreeing with its noun",
       "The past participle"
      ],
      "answer": 1,
      "explain": "<i>En</i> with the present participle forms the gérondif, which tells how or when."
     }
    ]
   }
  }
 ]
};
