window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/agreement"] = {
 "id": "lang.v.la/agreement",
 "title": "Agreement and Congruity in Latin",
 "sub": "The adjective, the verb, and the relative in agreement, and the three judgments of a construction",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "agreement",
   "title": "The three agreements",
   "body": "<p>Latin shows agreement in almost every word, and the three agreements that we studied in Section V govern every Latin sentence. An adjective agrees with its noun in gender, number, and case, even when the two have different endings: <i>convīva laetus</i> (“a cheerful guest”), where <i>convīva</i> is a masculine noun of the first declension; <i>silvae dēnsae</i> (“dense forests”). A predicate adjective agrees with the subject in the same way: <i>viae longae sunt</i> (“the roads are long”). A finite verb agrees with its subject in person and number, and two subjects joined by <i>et</i> usually take a plural verb: <i>pater et fīlius labōrant</i>. A relative pronoun takes its gender and number from its antecedent and its case from its own clause: <i>agricola, cui equum dedī</i> (“the farmer to whom I gave the horse”).</p>\n<p>Because the ending of the verb shows the person, the subject pronoun is usually left out: <i>labōrāmus</i> means “we are working.”</p>",
   "qp": {
    "id": "q-la-agr-three",
    "variants": [
     {
      "prompt": "Which phrase is correct for “a famous poet”?",
      "options": [
       "<i>poēta clāra</i>",
       "<i>poēta clārum</i>",
       "<i>poēta clārus</i>",
       "<i>poētam clārus</i>"
      ],
      "answer": 2,
      "explain": "<i>Poēta</i> is masculine though it belongs to the first declension, so the adjective is masculine: <i>clārus</i>."
     },
     {
      "prompt": "Which form completes <i>Rēgīna et fīlia ______</i> (“the queen and her daughter are singing”)?",
      "options": [
       "<i>cantat</i>",
       "<i>cantant</i>",
       "<i>cantās</i>",
       "<i>cantāmus</i>"
      ],
      "answer": 1,
      "explain": "Two subjects joined by <i>et</i> usually take a plural verb."
     },
     {
      "prompt": "Which form completes <i>Templa ______ sunt</i> (“the temples are high”)?",
      "options": [
       "<i>alta</i>",
       "<i>altī</i>",
       "<i>altae</i>",
       "<i>altum</i>"
      ],
      "answer": 0,
      "explain": "The predicate adjective agrees with the subject, <i>templa</i>, neuter plural nominative."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in Latin",
   "body": "<p>The three judgments of a construction apply to every Latin group of words. <i>Puerī currit</i> is incongruous, because the plural subject and the singular verb do not fit. <i>silva dēnsa</i> is congruous but incomplete, because nothing is said of the forest. <i>Silva dēnsa est</i> (“the forest is dense”) is congruous and complete.</p>\n<p>Latin can make a complete sentence of a single verb, because the ending supplies the subject: Caesar’s report, as Suetonius gives it, <i>Vēnī, vīdī, vīcī</i> (“I came, I saw, I conquered”), is three complete sentences. In a statement of a general truth the verb <i>est</i> is sometimes left out and understood, as in <i>omnia praeclāra rāra</i> (“all excellent things are rare,” Cicero, <i>Laelius</i> 79), which is complete.</p>",
   "qp": {
    "id": "q-la-agr-cong",
    "variants": [
     {
      "prompt": "How does <i>Mīlitēs pugnat</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Complete, because the verb is finite",
       "Incongruous"
      ],
      "answer": 3,
      "explain": "The plural subject and the singular verb do not fit."
     },
     {
      "prompt": "How does <i>Nāvigāmus</i> stand?",
      "options": [
       "Congruous and complete",
       "Congruous but incomplete",
       "Incongruous",
       "Incomplete, because there is no subject"
      ],
      "answer": 0,
      "explain": "The ending shows the subject, “we,” so the single verb is a complete sentence."
     },
     {
      "prompt": "How does <i>mōns altus</i> stand?",
      "options": [
       "Congruous and complete",
       "Congruous but incomplete",
       "Incongruous",
       "Incongruous, because there is no verb"
      ],
      "answer": 1,
      "explain": "The words fit, but nothing is said of the mountain."
     }
    ]
   }
  }
 ]
};
