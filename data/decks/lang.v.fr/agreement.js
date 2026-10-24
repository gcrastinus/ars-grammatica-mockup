window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/agreement"] = {
 "id": "lang.v.fr/agreement",
 "title": "Agreement in French",
 "sub": "The adjective and its noun, the verb and its subject, the past participle, and congruity",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "adjective",
   "title": "The adjective and its noun",
   "body": "<p>We say <i lang=\"fr\">un chat noir</i> (“a black cat”) but <i lang=\"fr\">une voiture noire</i> (“a black car”), and <i lang=\"fr\">des chats noirs</i>, <i lang=\"fr\">des voitures noires</i>. A French adjective agrees with its noun in gender and number. French has no cases, so there is no agreement in case. The feminine usually adds <i lang=\"fr\">-e</i> (<i lang=\"fr\">petit</i>, <i lang=\"fr\">petite</i>), but some adjectives change more: <i lang=\"fr\">heureux</i>, <i lang=\"fr\">heureuse</i>; <i lang=\"fr\">actif</i>, <i lang=\"fr\">active</i>; <i lang=\"fr\">bon</i>, <i lang=\"fr\">bonne</i>. The plural usually adds <i lang=\"fr\">-s</i>, and adjectives in <i lang=\"fr\">-eau</i> and <i lang=\"fr\">-al</i> take <i lang=\"fr\">-x</i>: <i lang=\"fr\">beaux</i>, <i lang=\"fr\">nationaux</i>.</p>\n<p>Five adjectives have a second masculine singular form, used before a vowel or a mute <i lang=\"fr\">h</i>: <i lang=\"fr\">beau</i>, <i lang=\"fr\">bel</i>; <i lang=\"fr\">nouveau</i>, <i lang=\"fr\">nouvel</i>; <i lang=\"fr\">vieux</i>, <i lang=\"fr\">vieil</i>; <i lang=\"fr\">fou</i>, <i lang=\"fr\">fol</i>; <i lang=\"fr\">mou</i>, <i lang=\"fr\">mol</i>. So we write <i lang=\"fr\">un bel arbre</i> and <i lang=\"fr\">un nouvel élève</i>. In speech much of this agreement is silent (<i lang=\"fr\">noir</i> and <i lang=\"fr\">noire</i> sound alike), but in writing it must always be shown.</p>",
   "qp": {
    "id": "q-fr-agr-adj",
    "variants": [
     {
      "prompt": "Which phrase is correct for “a new hotel”?",
      "options": [
       "<i lang=\"fr\">un nouvel hôtel</i>",
       "<i lang=\"fr\">un nouveau hôtel</i>",
       "<i lang=\"fr\">une nouvelle hôtel</i>",
       "<i lang=\"fr\">un nouvelle hôtel</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Hôtel</i> is masculine and begins with a mute <i lang=\"fr\">h</i>, so <i lang=\"fr\">nouveau</i> takes its form <i lang=\"fr\">nouvel</i>."
     },
     {
      "prompt": "In which accidents does a French adjective agree with its noun?",
      "options": [
       "Gender, number, and case",
       "Number and person",
       "Gender only",
       "Gender and number"
      ],
      "answer": 3,
      "explain": "French has no cases, so the adjective agrees in gender and number."
     },
     {
      "prompt": "Which phrase is correct for “happy girls”?",
      "options": [
       "<i lang=\"fr\">des filles heureux</i>",
       "<i lang=\"fr\">des filles heureuse</i>",
       "<i lang=\"fr\">des filles heureuses</i>",
       "<i lang=\"fr\">des filles heureuxes</i>"
      ],
      "answer": 2,
      "explain": "The feminine of <i lang=\"fr\">heureux</i> is <i lang=\"fr\">heureuse</i>, and the plural adds <i lang=\"fr\">-s</i>."
     }
    ]
   }
  },
  {
   "id": "verb",
   "title": "The verb and its subject",
   "body": "<p>A French verb agrees with its subject in person and number: <i lang=\"fr\">l’enfant chante</i>, <i lang=\"fr\">les enfants chantent</i>. Many of the endings sound alike (<i lang=\"fr\">chante</i>, <i lang=\"fr\">chantes</i>, and <i lang=\"fr\">chantent</i> are pronounced the same), and so French, unlike Latin and Greek, almost always writes the subject pronoun: <i lang=\"fr\">je chante</i>, <i lang=\"fr\">tu chantes</i>, <i lang=\"fr\">ils chantent</i>.</p>\n<p>Two subjects joined by <i lang=\"fr\">et</i> take a plural verb. When the subjects are of different persons, the first person prevails over the second and third, and the second over the third, and the pronoun <i lang=\"fr\">nous</i> or <i lang=\"fr\">vous</i> often sums them up: <i lang=\"fr\">toi et moi, nous partons</i>; <i lang=\"fr\">lui et toi, vous partez</i>. An adjective that describes a masculine and a feminine noun together is masculine plural: <i lang=\"fr\">un manteau et une robe neufs</i> (“a new coat and dress”).</p>",
   "qp": {
    "id": "q-fr-agr-verb",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Lui et moi, nous ______ demain</i> (“he and I leave tomorrow”)?",
      "options": [
       "<i lang=\"fr\">partent</i>",
       "<i lang=\"fr\">partez</i>",
       "<i lang=\"fr\">partons</i>",
       "<i lang=\"fr\">part</i>"
      ],
      "answer": 2,
      "explain": "The first person prevails, so the verb is first person plural."
     },
     {
      "prompt": "Which phrase is correct for “a white shirt and a white hat” described together?",
      "options": [
       "<i lang=\"fr\">une chemise et un chapeau blanches</i>",
       "<i lang=\"fr\">une chemise et un chapeau blancs</i>",
       "<i lang=\"fr\">une chemise et un chapeau blanc</i>",
       "<i lang=\"fr\">une chemise et un chapeau blanche</i>"
      ],
      "answer": 1,
      "explain": "An adjective that describes a feminine and a masculine noun together is masculine plural."
     },
     {
      "prompt": "Why does French almost always write the subject pronoun?",
      "options": [
       "Many verb endings sound alike",
       "French verbs have no endings",
       "The pronoun shows the tense",
       "The verb agrees only with nouns"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Chante</i>, <i lang=\"fr\">chantes</i>, and <i lang=\"fr\">chantent</i> sound the same, so the pronoun shows the person."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The agreement of the past participle",
   "body": "<p>The past participle of a compound tense agrees in one of two ways. With <i lang=\"fr\">être</i>, it agrees with the subject, as an adjective does: <i lang=\"fr\">elle est partie</i>, <i lang=\"fr\">ils sont partis</i>, <i lang=\"fr\">la porte est fermée</i>. With <i lang=\"fr\">avoir</i>, it does not agree with the subject, but it agrees with a direct object that stands before it: <i lang=\"fr\">j’ai acheté les fleurs</i> (no agreement), but <i lang=\"fr\">les fleurs que j’ai achetées</i> and <i lang=\"fr\">je les ai achetées</i> (agreement with <i lang=\"fr\">fleurs</i> and with <i lang=\"fr\">les</i>).</p>\n<p>A pronominal verb takes <i lang=\"fr\">être</i>, and its participle usually agrees with the reflexive pronoun when that pronoun is the direct object: <i lang=\"fr\">elle s’est levée</i> (“she got up”).</p>",
   "qp": {
    "id": "q-fr-agr-ptc",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Les chansons qu’elle a ______ sont belles</i> (“the songs that she sang are beautiful”)?",
      "options": [
       "<i lang=\"fr\">chantées</i>",
       "<i lang=\"fr\">chanté</i>",
       "<i lang=\"fr\">chantés</i>",
       "<i lang=\"fr\">chantée</i>"
      ],
      "answer": 0,
      "explain": "With <i lang=\"fr\">avoir</i>, the participle agrees with the direct object that stands before it, <i lang=\"fr\">que</i>, which stands for <i lang=\"fr\">chansons</i>."
     },
     {
      "prompt": "Which sentence is correct for “they (women) have arrived”?",
      "options": [
       "<i lang=\"fr\">Elles sont arrivé.</i>",
       "<i lang=\"fr\">Elles ont arrivées.</i>",
       "<i lang=\"fr\">Elles sont arrivés.</i>",
       "<i lang=\"fr\">Elles sont arrivées.</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Arriver</i> takes <i lang=\"fr\">être</i>, and the participle agrees with the subject."
     },
     {
      "prompt": "Why is there no agreement in <i lang=\"fr\">Elle a ouvert la fenêtre</i>?",
      "options": [
       "<i lang=\"fr\">Ouvrir</i> never agrees",
       "The subject is feminine",
       "The direct object follows the verb",
       "<i lang=\"fr\">Avoir</i> agrees only in the plural"
      ],
      "answer": 2,
      "explain": "With <i lang=\"fr\">avoir</i> the participle agrees only with a direct object that stands before it."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in French",
   "body": "<p>The three judgments of a construction apply to French as to Latin. <i lang=\"fr\">Les enfants chante</i> is incongruous, because the plural subject and the singular verb do not fit, and so is <i lang=\"fr\">la chat dort</i>, because the feminine article does not fit the masculine noun. <i lang=\"fr\">Un vieil hôtel</i> is congruous but incomplete, because nothing is said of the hotel. <i lang=\"fr\">L’enfant dort</i> is congruous and complete.</p>\n<p>Since French writes the subject pronoun, a verb form such as <i lang=\"fr\">chante</i> standing alone is not a statement; as a command, however, the imperative is complete without a subject: <i lang=\"fr\">Chante !</i> (“Sing!”).</p>",
   "qp": {
    "id": "q-fr-agr-cong",
    "variants": [
     {
      "prompt": "How does <i lang=\"fr\">Le professeur parlent</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Complete, because the subject has an article"
      ],
      "answer": 2,
      "explain": "The singular subject and the plural verb do not fit."
     },
     {
      "prompt": "How does <i lang=\"fr\">une chanson nouvelle</i> stand?",
      "options": [
       "Congruous and complete",
       "Congruous but incomplete",
       "Incongruous",
       "Incongruous, because the adjective follows"
      ],
      "answer": 1,
      "explain": "The words fit, but nothing is said of the song."
     },
     {
      "prompt": "How does <i lang=\"fr\">Ferme la porte !</i> stand?",
      "options": [
       "Congruous and complete",
       "Congruous but incomplete",
       "Incongruous",
       "Incomplete, because there is no subject"
      ],
      "answer": 0,
      "explain": "An imperative is complete without a subject."
     }
    ]
   }
  }
 ]
};
