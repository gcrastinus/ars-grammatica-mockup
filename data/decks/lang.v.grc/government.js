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
   "body": "<p>A Greek transitive verb, like a Latin one, governs the accusative of the direct object, and the case shows the object wherever it stands: <i lang=\"grc\">ὁ παῖς γράφει τὴν ἐπιστολήν</i> and <i lang=\"grc\">τὴν ἐπιστολὴν γράφει ὁ παῖς</i> both mean “the boy writes the letter.”</p>\n<p>The personal pronouns of the first and second person have two sets of forms in the oblique cases. The emphatic forms are <i lang=\"grc\">ἐμέ</i>, <i lang=\"grc\">ἐμοῦ</i>, <i lang=\"grc\">ἐμοί</i>; the enclitic forms, which lean on the word before them, are <i lang=\"grc\">με</i>, <i lang=\"grc\">μου</i>, <i lang=\"grc\">μοι</i>. The second person writes <i lang=\"grc\">σέ</i>, <i lang=\"grc\">σοῦ</i>, <i lang=\"grc\">σοί</i> when emphatic and <i lang=\"grc\">σε</i>, <i lang=\"grc\">σου</i>, <i lang=\"grc\">σοι</i> when enclitic. An enclitic cannot stand first in its clause, so the emphatic form is used at the beginning, for contrast, and after a preposition: <i lang=\"grc\">ἐμὲ διδάσκει</i> (“it is me he teaches”), <i lang=\"grc\">διδάσκει με</i> (“he teaches me”), <i lang=\"grc\">πρὸς ἐμέ</i> (“to me”). For “him,” “her,” and “it” in the oblique cases Greek uses <i lang=\"grc\">αὐτόν</i>, <i lang=\"grc\">αὐτήν</i>, <i lang=\"grc\">αὐτό</i>.</p>",
   "qp": {
    "id": "q-grc-gov-obj",
    "variants": [
     {
      "prompt": "Which form is correct for “me” at the beginning of a clause?",
      "options": [
       "<i lang=\"grc\">με</i>",
       "<i lang=\"grc\">μοι</i>",
       "<i lang=\"grc\">ἐμέ</i>",
       "<i lang=\"grc\">ἐγώ</i>"
      ],
      "answer": 2,
      "explain": "An enclitic cannot stand first, so the emphatic <i lang=\"grc\">ἐμέ</i> is used."
     },
     {
      "prompt": "Which phrase is correct for “to you” (one person) after <i lang=\"grc\">πρός</i>?",
      "options": [
       "<i lang=\"grc\">πρός σε</i>",
       "<i lang=\"grc\">πρὸς σέ</i>",
       "<i lang=\"grc\">πρὸς σύ</i>",
       "<i lang=\"grc\">πρὸς σοῦ</i>"
      ],
      "answer": 1,
      "explain": "After a preposition the emphatic form is used, and <i lang=\"grc\">πρός</i> in the sense “to” takes the accusative."
     },
     {
      "prompt": "What does <i lang=\"grc\">διδάσκει αὐτόν</i> mean?",
      "options": [
       "“he teaches him”",
       "“he himself teaches”",
       "“he teaches himself”",
       "“he teaches the same man”"
      ],
      "answer": 0,
      "explain": "In the oblique cases, <i lang=\"grc\">αὐτόν</i> stands for “him.”"
     }
    ]
   }
  },
  {
   "id": "verbs",
   "title": "Verbs that govern the genitive and the dative",
   "body": "<p>Some Greek verbs govern a case other than the accusative, and each must be learned with its case. Verbs of ruling, of desiring, and of remembering govern the genitive, and so does <i lang=\"grc\">ἀκούω</i> of the person heard: <i lang=\"grc\">ἄρχει τῆς νήσου</i> (“he rules the island”), <i lang=\"grc\">ἐπιθυμεῖ τῆς σοφίας</i> (“he desires wisdom”), <i lang=\"grc\">ἀκούομεν τοῦ διδασκάλου</i> (“we hear the teacher”). Verbs of trusting, obeying, helping, and following govern the dative: <i lang=\"grc\">πείθεται τοῖς νόμοις</i> (“he obeys the laws”), <i lang=\"grc\">βοηθοῦσι τοῖς φίλοις</i> (“they help their friends”), <i lang=\"grc\">ἕπεται τῷ στρατηγῷ</i> (“he follows the general”).</p>\n<p>A verb of giving, sending, or saying also takes the dative of the person to whom something is given, sent, or said, the indirect object: <i lang=\"grc\">δίδωσι τὸ βιβλίον τῷ παιδί</i> (“he gives the book to the boy”).</p>",
   "qp": {
    "id": "q-grc-gov-verbs",
    "variants": [
     {
      "prompt": "Which phrase is correct for “they obey the general”?",
      "options": [
       "<i lang=\"grc\">πείθονται τὸν στρατηγόν</i>",
       "<i lang=\"grc\">πείθονται τῷ στρατηγῷ</i>",
       "<i lang=\"grc\">πείθονται τοῦ στρατηγοῦ</i>",
       "<i lang=\"grc\">πείθονται ὁ στρατηγός</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Πείθομαι</i> (“obey”) governs the dative."
     },
     {
      "prompt": "What case does <i lang=\"grc\">ἐπιθυμέω</i> (“desire”) govern?",
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
      "prompt": "In <i lang=\"grc\">λέγει τὸν μῦθον τοῖς παισίν</i>, why is <i lang=\"grc\">τοῖς παισίν</i> dative?",
      "options": [
       "It is the object of <i lang=\"grc\">λέγει</i>",
       "<i lang=\"grc\">Λέγω</i> always governs the genitive",
       "It agrees with <i lang=\"grc\">μῦθον</i>",
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
   "body": "<p>A noun governs the genitive of another noun that limits it, and in Greek the possessive genitive usually stands in the attributive position, between the article and its noun: <i lang=\"grc\">ἡ τοῦ στρατηγοῦ σκηνή</i> (“the general’s tent”). Adjectives also govern cases: <i lang=\"grc\">ἄξιος</i> (“worthy”) the genitive, as in <i lang=\"grc\">ἄξιος τιμῆς</i> (“worthy of honor”); <i lang=\"grc\">ὅμοιος</i> (“like”) and <i lang=\"grc\">φίλος</i> (“friendly”) the dative, as in <i lang=\"grc\">ὅμοιος τῷ πατρί</i> (“like his father”).</p>\n<p>After a comparative, Greek uses the genitive where Latin uses the ablative of comparison: <i lang=\"grc\">μείζων τοῦ ἀδελφοῦ</i> (“taller than his brother”). The comparison may also be made with <i lang=\"grc\">ἤ</i> (“than”), and then the two things compared stand in the same case: <i lang=\"grc\">μείζων ἢ ὁ ἀδελφός</i>.</p>",
   "qp": {
    "id": "q-grc-gov-nouns",
    "variants": [
     {
      "prompt": "Which phrase is correct for “the teacher’s house”?",
      "options": [
       "<i lang=\"grc\">ἡ ὁ διδάσκαλος οἰκία</i>",
       "<i lang=\"grc\">ἡ τῷ διδασκάλῳ οἰκία</i>",
       "<i lang=\"grc\">ἡ τοῦ διδασκάλου οἰκία</i>",
       "<i lang=\"grc\">ἡ τὸν διδάσκαλον οἰκία</i>"
      ],
      "answer": 2,
      "explain": "The possessor is genitive and stands between the article and the noun."
     },
     {
      "prompt": "What does <i lang=\"grc\">σοφώτερος τοῦ διδασκάλου</i> mean?",
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
      "prompt": "What case does <i lang=\"grc\">ἄξιος</i> (“worthy”) govern?",
      "options": [
       "The genitive",
       "The dative",
       "The accusative",
       "The ablative"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Ἄξιος</i> takes the genitive of that of which one is worthy."
     }
    ]
   }
  },
  {
   "id": "free",
   "title": "The cases without a governing word",
   "body": "<p>Greek has no ablative, and its other cases share the work that the Latin ablative does. The dative, without a preposition, names the means or instrument: <i lang=\"grc\">λίθοις βάλλουσιν</i> (“they pelt them with stones”). The dative also names the time when something happens: <i lang=\"grc\">τῇ ὑστεραίᾳ</i> (“on the next day”). The genitive names the time within which: <i lang=\"grc\">νυκτός</i> (“by night,” “during the night”). The accusative names extent of time or of space: <i lang=\"grc\">τρεῖς ἡμέρας ἔμεινεν</i> (“he stayed three days”).</p>\n<p>So the case of a Greek noun is not always required by another word. Each of these uses must be learned by its meaning, as the Latin ablatives of means and of time are learned.</p>",
   "qp": {
    "id": "q-grc-gov-free",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">ἡμέρας</i> mean in <i lang=\"grc\">ἡμέρας ἐπορεύοντο</i> (“they marched ______”)?",
      "options": [
       "“for a day”",
       "“on the day”",
       "“of the day”",
       "“by day”"
      ],
      "answer": 3,
      "explain": "The genitive names the time within which: “by day,” as <i lang=\"grc\">νυκτός</i> means “by night.”"
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
      "prompt": "What does <i lang=\"grc\">πέντε ἡμέρας</i> mean in <i lang=\"grc\">πέντε ἡμέρας ἔμειναν</i>?",
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
