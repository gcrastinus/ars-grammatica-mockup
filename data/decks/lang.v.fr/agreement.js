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
   "body": "<p>We say <i>un chat noir</i> (“a black cat”) but <i>une voiture noire</i> (“a black car”), and <i>des chats noirs</i>, <i>des voitures noires</i>. A French adjective agrees with its noun in gender and number. French has no cases, so there is no agreement in case. The feminine usually adds <i>-e</i> (<i>petit</i>, <i>petite</i>), but some adjectives change more: <i>heureux</i>, <i>heureuse</i>; <i>actif</i>, <i>active</i>; <i>bon</i>, <i>bonne</i>. The plural usually adds <i>-s</i>, and adjectives in <i>-eau</i> and <i>-al</i> take <i>-x</i>: <i>beaux</i>, <i>nationaux</i>.</p>\n<p>Five adjectives have a second masculine singular form, used before a vowel or a mute <i>h</i>: <i>beau</i>, <i>bel</i>; <i>nouveau</i>, <i>nouvel</i>; <i>vieux</i>, <i>vieil</i>; <i>fou</i>, <i>fol</i>; <i>mou</i>, <i>mol</i>. So we write <i>un bel arbre</i> and <i>un nouvel élève</i>. In speech much of this agreement is silent (<i>noir</i> and <i>noire</i> sound alike), but in writing it must always be shown.</p>",
   "qp": {
    "id": "q-fr-agr-adj",
    "variants": [
     {
      "prompt": "Which phrase is correct for “a new hotel”?",
      "options": [
       "<i>un nouvel hôtel</i>",
       "<i>un nouveau hôtel</i>",
       "<i>une nouvelle hôtel</i>",
       "<i>un nouvelle hôtel</i>"
      ],
      "answer": 0,
      "explain": "<i>Hôtel</i> is masculine and begins with a mute <i>h</i>, so <i>nouveau</i> takes its form <i>nouvel</i>."
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
       "<i>des filles heureux</i>",
       "<i>des filles heureuse</i>",
       "<i>des filles heureuses</i>",
       "<i>des filles heureuxes</i>"
      ],
      "answer": 2,
      "explain": "The feminine of <i>heureux</i> is <i>heureuse</i>, and the plural adds <i>-s</i>."
     }
    ]
   }
  },
  {
   "id": "verb",
   "title": "The verb and its subject",
   "body": "<p>A French verb agrees with its subject in person and number: <i>l’enfant chante</i>, <i>les enfants chantent</i>. Many of the endings sound alike (<i>chante</i>, <i>chantes</i>, and <i>chantent</i> are pronounced the same), and so French, unlike Latin and Greek, almost always writes the subject pronoun: <i>je chante</i>, <i>tu chantes</i>, <i>ils chantent</i>.</p>\n<p>Two subjects joined by <i>et</i> take a plural verb. When the subjects are of different persons, the first person prevails over the second and third, and the second over the third, and the pronoun <i>nous</i> or <i>vous</i> often sums them up: <i>toi et moi, nous partons</i>; <i>lui et toi, vous partez</i>. An adjective that describes a masculine and a feminine noun together is masculine plural: <i>un manteau et une robe neufs</i> (“a new coat and dress”).</p>",
   "qp": {
    "id": "q-fr-agr-verb",
    "variants": [
     {
      "prompt": "Which form completes <i>Lui et moi, nous ______ demain</i> (“he and I leave tomorrow”)?",
      "options": [
       "<i>partent</i>",
       "<i>partez</i>",
       "<i>partons</i>",
       "<i>part</i>"
      ],
      "answer": 2,
      "explain": "The first person prevails, so the verb is first person plural."
     },
     {
      "prompt": "Which phrase is correct for “a white shirt and a white hat” described together?",
      "options": [
       "<i>une chemise et un chapeau blanches</i>",
       "<i>une chemise et un chapeau blancs</i>",
       "<i>une chemise et un chapeau blanc</i>",
       "<i>une chemise et un chapeau blanche</i>"
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
      "explain": "<i>Chante</i>, <i>chantes</i>, and <i>chantent</i> sound the same, so the pronoun shows the person."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The agreement of the past participle",
   "body": "<p>The past participle of a compound tense agrees in one of two ways. With <i>être</i>, it agrees with the subject, as an adjective does: <i>elle est partie</i>, <i>ils sont partis</i>, <i>la porte est fermée</i>. With <i>avoir</i>, it does not agree with the subject, but it agrees with a direct object that stands before it: <i>j’ai acheté les fleurs</i> (no agreement), but <i>les fleurs que j’ai achetées</i> and <i>je les ai achetées</i> (agreement with <i>fleurs</i> and with <i>les</i>).</p>\n<p>A pronominal verb takes <i>être</i>, and its participle usually agrees with the reflexive pronoun when that pronoun is the direct object: <i>elle s’est levée</i> (“she got up”).</p>",
   "qp": {
    "id": "q-fr-agr-ptc",
    "variants": [
     {
      "prompt": "Which form completes <i>Les chansons qu’elle a ______ sont belles</i> (“the songs that she sang are beautiful”)?",
      "options": [
       "<i>chantées</i>",
       "<i>chanté</i>",
       "<i>chantés</i>",
       "<i>chantée</i>"
      ],
      "answer": 0,
      "explain": "With <i>avoir</i>, the participle agrees with the direct object that stands before it, <i>que</i>, which stands for <i>chansons</i>."
     },
     {
      "prompt": "Which sentence is correct for “they (women) have arrived”?",
      "options": [
       "<i>Elles sont arrivé.</i>",
       "<i>Elles ont arrivées.</i>",
       "<i>Elles sont arrivés.</i>",
       "<i>Elles sont arrivées.</i>"
      ],
      "answer": 3,
      "explain": "<i>Arriver</i> takes <i>être</i>, and the participle agrees with the subject."
     },
     {
      "prompt": "Why is there no agreement in <i>Elle a ouvert la fenêtre</i>?",
      "options": [
       "<i>Ouvrir</i> never agrees",
       "The subject is feminine",
       "The direct object follows the verb",
       "<i>Avoir</i> agrees only in the plural"
      ],
      "answer": 2,
      "explain": "With <i>avoir</i> the participle agrees only with a direct object that stands before it."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in French",
   "body": "<p>The three judgments of a construction apply to French as to Latin. <i>Les enfants chante</i> is incongruous, because the plural subject and the singular verb do not fit, and so is <i>la chat dort</i>, because the feminine article does not fit the masculine noun. <i>Un vieil hôtel</i> is congruous but incomplete, because nothing is said of the hotel. <i>L’enfant dort</i> is congruous and complete.</p>\n<p>Since French writes the subject pronoun, a verb form such as <i>chante</i> standing alone is not a statement; as a command, however, the imperative is complete without a subject: <i>Chante !</i> (“Sing!”).</p>",
   "qp": {
    "id": "q-fr-agr-cong",
    "variants": [
     {
      "prompt": "How does <i>Le professeur parlent</i> stand?",
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
      "prompt": "How does <i>une chanson nouvelle</i> stand?",
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
      "prompt": "How does <i>Ferme la porte !</i> stand?",
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
