window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/government"] = {
 "id": "lang.v.grc/government",
 "title": "Case and Government in Greek",
 "sub": "The object and the personal pronoun, verbs with the genitive and the dative, nouns and adjectives that govern, and the cases used without a governing word",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "object",
   "title": "The object and the personal pronoun",
   "body": "<p>A Greek transitive verb, like a Latin one, governs the accusative of the direct object, and the case shows the object wherever it stands: <i>ὁ παῖς γράφει τὴν ἐπιστολήν</i> and <i>τὴν ἐπιστολὴν γράφει ὁ παῖς</i> both mean “the boy writes the letter.”</p>\n<p>The personal pronouns of the first and second person have two sets of forms in the oblique cases. The emphatic forms are <i>ἐμέ</i>, <i>ἐμοῦ</i>, <i>ἐμοί</i>; the enclitic forms, which lean on the word before them, are <i>με</i>, <i>μου</i>, <i>μοι</i>. The second person writes <i>σέ</i>, <i>σοῦ</i>, <i>σοί</i> when emphatic and <i>σε</i>, <i>σου</i>, <i>σοι</i> when enclitic. An enclitic cannot stand first in its clause, so the emphatic form is used at the beginning, for contrast, and after a preposition: <i>ἐμὲ διδάσκει</i> (“it is me he teaches”), <i>διδάσκει με</i> (“he teaches me”), <i>πρὸς ἐμέ</i> (“to me”). For “him,” “her,” and “it” in the oblique cases Greek uses <i>αὐτόν</i>, <i>αὐτήν</i>, <i>αὐτό</i>.</p>",
   "qp": {
    "id": "q-grc-gov-obj",
    "variants": [
     {
      "prompt": "Which form is correct for “me” at the beginning of a clause?",
      "options": [
       "<i>με</i>",
       "<i>μοι</i>",
       "<i>ἐμέ</i>",
       "<i>ἐγώ</i>"
      ],
      "answer": 2,
      "explain": "An enclitic cannot stand first, so the emphatic <i>ἐμέ</i> is used."
     },
     {
      "prompt": "Which phrase is correct for “to you” (one person) after <i>πρός</i>?",
      "options": [
       "<i>πρός σε</i>",
       "<i>πρὸς σέ</i>",
       "<i>πρὸς σύ</i>",
       "<i>πρὸς σοῦ</i>"
      ],
      "answer": 1,
      "explain": "After a preposition the emphatic form is used, and <i>πρός</i> in the sense “to” takes the accusative."
     },
     {
      "prompt": "What does <i>διδάσκει αὐτόν</i> mean?",
      "options": [
       "“he teaches him”",
       "“he himself teaches”",
       "“he teaches himself”",
       "“he teaches the same man”"
      ],
      "answer": 0,
      "explain": "In the oblique cases, <i>αὐτόν</i> stands for “him.”"
     }
    ]
   }
  },
  {
   "id": "verbs",
   "title": "Verbs that govern the genitive and the dative",
   "body": "<p>Some Greek verbs govern a case other than the accusative, and each must be learned with its case. Verbs of ruling, of desiring, and of remembering govern the genitive, and so does <i>ἀκούω</i> of the person heard: <i>ἄρχει τῆς νήσου</i> (“he rules the island”), <i>ἐπιθυμεῖ τῆς σοφίας</i> (“he desires wisdom”), <i>ἀκούομεν τοῦ διδασκάλου</i> (“we hear the teacher”). Verbs of trusting, obeying, helping, and following govern the dative: <i>πείθεται τοῖς νόμοις</i> (“he obeys the laws”), <i>βοηθοῦσι τοῖς φίλοις</i> (“they help their friends”), <i>ἕπεται τῷ στρατηγῷ</i> (“he follows the general”).</p>\n<p>A verb of giving, sending, or saying also takes the dative of the person to whom something is given, sent, or said, the indirect object: <i>δίδωσι τὸ βιβλίον τῷ παιδί</i> (“he gives the book to the boy”).</p>",
   "qp": {
    "id": "q-grc-gov-verbs",
    "variants": [
     {
      "prompt": "Which phrase is correct for “they obey the general”?",
      "options": [
       "<i>πείθονται τὸν στρατηγόν</i>",
       "<i>πείθονται τῷ στρατηγῷ</i>",
       "<i>πείθονται τοῦ στρατηγοῦ</i>",
       "<i>πείθονται ὁ στρατηγός</i>"
      ],
      "answer": 1,
      "explain": "<i>Πείθομαι</i> (“obey”) governs the dative."
     },
     {
      "prompt": "What case does <i>ἐπιθυμέω</i> (“desire”) govern?",
      "options": [
       "The dative",
       "The accusative",
       "The genitive",
       "The nominative"
      ],
      "answer": 2,
      "explain": "Verbs of desiring govern the genitive."
     },
     {
      "prompt": "In <i>λέγει τὸν μῦθον τοῖς παισίν</i>, why is <i>τοῖς παισίν</i> dative?",
      "options": [
       "It is the object of <i>λέγει</i>",
       "<i>Λέγω</i> always governs the genitive",
       "It agrees with <i>μῦθον</i>",
       "It names the persons to whom the story is told"
      ],
      "answer": 3,
      "explain": "The person to whom something is said is the indirect object, in the dative; the thing said is the accusative object."
     }
    ]
   }
  },
  {
   "id": "nouns",
   "title": "Nouns and adjectives that govern",
   "body": "<p>A noun governs the genitive of another noun that limits it, and in Greek the possessive genitive usually stands in the attributive position, between the article and its noun: <i>ἡ τοῦ στρατηγοῦ σκηνή</i> (“the general’s tent”). Adjectives also govern cases: <i>ἄξιος</i> (“worthy”) the genitive, as in <i>ἄξιος τιμῆς</i> (“worthy of honor”); <i>ὅμοιος</i> (“like”) and <i>φίλος</i> (“friendly”) the dative, as in <i>ὅμοιος τῷ πατρί</i> (“like his father”).</p>\n<p>After a comparative, Greek uses the genitive where Latin uses the ablative of comparison: <i>μείζων τοῦ ἀδελφοῦ</i> (“taller than his brother”). The comparison may also be made with <i>ἤ</i> (“than”), and then the two things compared stand in the same case: <i>μείζων ἢ ὁ ἀδελφός</i>.</p>",
   "qp": {
    "id": "q-grc-gov-nouns",
    "variants": [
     {
      "prompt": "Which phrase is correct for “the teacher’s house”?",
      "options": [
       "<i>ἡ ὁ διδάσκαλος οἰκία</i>",
       "<i>ἡ τῷ διδασκάλῳ οἰκία</i>",
       "<i>ἡ τοῦ διδασκάλου οἰκία</i>",
       "<i>ἡ τὸν διδάσκαλον οἰκία</i>"
      ],
      "answer": 2,
      "explain": "The possessor is genitive and stands between the article and the noun."
     },
     {
      "prompt": "What does <i>σοφώτερος τοῦ διδασκάλου</i> mean?",
      "options": [
       "“wiser than the teacher’s”",
       "“wiser than the teacher”",
       "“the wiser of the teacher”",
       "“wise like the teacher”"
      ],
      "answer": 1,
      "explain": "After a comparative the genitive gives the thing compared: “than the teacher.”"
     },
     {
      "prompt": "What case does <i>ἄξιος</i> (“worthy”) govern?",
      "options": [
       "The genitive",
       "The dative",
       "The accusative",
       "The ablative"
      ],
      "answer": 0,
      "explain": "<i>Ἄξιος</i> takes the genitive of that of which one is worthy."
     }
    ]
   }
  },
  {
   "id": "free",
   "title": "The cases without a governing word",
   "body": "<p>Greek has no ablative, and its other cases share the work that the Latin ablative does. The dative, without a preposition, names the means or instrument: <i>λίθοις βάλλουσιν</i> (“they pelt them with stones”). The dative also names the time when something happens: <i>τῇ ὑστεραίᾳ</i> (“on the next day”). The genitive names the time within which: <i>νυκτός</i> (“by night,” “during the night”). The accusative names extent of time or of space: <i>τρεῖς ἡμέρας ἔμεινεν</i> (“he stayed three days”).</p>\n<p>So the case of a Greek noun is not always required by another word. Each of these uses must be learned by its meaning, as the Latin ablatives of means and of time are learned.</p>",
   "qp": {
    "id": "q-grc-gov-free",
    "variants": [
     {
      "prompt": "What does <i>ἡμέρας</i> mean in <i>ἡμέρας ἐπορεύοντο</i> (“they marched ______”)?",
      "options": [
       "“for a day”",
       "“on the day”",
       "“of the day”",
       "“by day”"
      ],
      "answer": 3,
      "explain": "The genitive names the time within which: “by day,” as <i>νυκτός</i> means “by night.”"
     },
     {
      "prompt": "Which case names the means or instrument in Greek?",
      "options": [
       "The dative",
       "The genitive",
       "The accusative",
       "The ablative"
      ],
      "answer": 0,
      "explain": "Greek has no ablative; the dative does the work of the Latin ablative of means."
     },
     {
      "prompt": "What does <i>πέντε ἡμέρας</i> mean in <i>πέντε ἡμέρας ἔμειναν</i>?",
      "options": [
       "“on the fifth day”",
       "“for five days”",
       "“within five days”",
       "“by five days”"
      ],
      "answer": 1,
      "explain": "The accusative names extent of time."
     }
    ]
   }
  }
 ]
};
