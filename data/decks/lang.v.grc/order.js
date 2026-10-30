window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/order"] = {
 "id": "lang.v.grc/order",
 "title": "Word Order and Dependence in Greek",
 "sub": "The object case, the positions of the article, the postpositive particles, and the dependences shown by the endings",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "order-1",
   "title": "The object",
   "body": "<p>In English the direct object usually follows the verb, and its place shows that it is the object: “he educates the man.” In Greek the direct object stands in the accusative case, wherever it is placed: in παιδεύει τὸν ἄνθρωπον (“he educates the man”), τὸν ἄνθρωπον is the object of παιδεύει. Some verbs take the genitive or the dative, and then that case belongs to the meaning of the verb: ἄρχει τῆς πόλεως (“he rules the city”) takes the genitive, and πιστεύει τῷ ἀνθρώπῳ (“he trusts the man”) takes the dative.</p>",
   "qp": {
    "id": "q-grc-order-obj",
    "variants": [
     {
      "prompt": "In <i lang=\"grc\">τὸν ἀδελφὸν ὁρᾷ ἡ μήτηρ</i>, which word is the subject?",
      "options": [
       "<i lang=\"grc\">ἀδελφόν</i>",
       "<i lang=\"grc\">ὁρᾷ</i>",
       "<i lang=\"grc\">μήτηρ</i>",
       "<i lang=\"grc\">τόν</i>"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">μήτηρ</i> is nominative; <i lang=\"grc\">ἀδελφόν</i> is accusative, the object, though it stands first."
     },
     {
      "prompt": "Which case does <i lang=\"grc\">ἄρχω</i> (“rule”) govern?",
      "options": [
       "The accusative",
       "The genitive",
       "The dative",
       "The nominative"
      ],
      "answer": 1,
      "explain": "The case of the object belongs to the meaning of the verb: <i lang=\"grc\">ἄρχω</i> takes the genitive."
     },
     {
      "prompt": "What shows the object of a Greek verb?",
      "options": [
       "Its case",
       "Its place after the verb",
       "Its place before the verb",
       "The article alone"
      ],
      "answer": 0,
      "explain": "The case shows the object wherever it stands."
     }
    ]
   }
  },
  {
   "id": "order-2",
   "title": "Word order",
   "body": "<p>The ending of a Greek word shows its use, so the order of the words does not decide which noun is the subject, as it does in English. The order still shows emphasis, and the first place in a clause is a place of emphasis. The article and its noun, however, keep a fixed order. An adjective between the article and the noun, as in ὁ ἀγαθὸς ἄνθρωπος, or after a repeated article, as in ὁ ἄνθρωπος ὁ ἀγαθός, describes the noun: both mean “the good man.” An adjective outside that position is the predicate: ὁ ἄνθρωπος ἀγαθός means “the man is good.” Some particles, such as γάρ (“for”), δέ (“and” or “but”), and οὖν (“therefore”), never stand first in their clause; they usually stand second.</p>",
   "qp": {
    "id": "q-grc-order-pos",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">ἡ οἰκία μεγάλη</i> mean?",
      "options": [
       "“the large house”",
       "“the house is large”",
       "“a large house”",
       "“the house of the large man”"
      ],
      "answer": 1,
      "explain": "The adjective stands outside the article and noun, in the predicate position."
     },
     {
      "prompt": "Which phrase means “the beautiful city”?",
      "options": [
       "<i lang=\"grc\">ἡ πόλις καλή</i>",
       "<i lang=\"grc\">καλὴ ἡ πόλις</i>",
       "<i lang=\"grc\">ἡ πόλις ἡ καλή</i>",
       "<i lang=\"grc\">πόλις ἡ καλή ἐστι</i>"
      ],
      "answer": 2,
      "explain": "With a repeated article the adjective is attributive."
     },
     {
      "prompt": "Where does <i lang=\"grc\">γάρ</i> stand in its clause?",
      "options": [
       "Always first",
       "Always last",
       "Directly before the verb",
       "Usually second"
      ],
      "answer": 3,
      "explain": "The word <i lang=\"grc\">γάρ</i> is postpositive: it never stands first."
     }
    ]
   }
  },
  {
   "id": "dependence",
   "title": "Dependence in a Greek sentence",
   "body": "<p>In <i lang=\"grc\">ἀνὴρ ἀγαθὸς ταχέως τρέχει</i> (“a good man runs swiftly”) there are three constructions, as in the Latin sentences we have analyzed: <i lang=\"grc\">ἀγαθός</i> depends on <i lang=\"grc\">ἀνήρ</i>, <i lang=\"grc\">τρέχει</i> depends on <i lang=\"grc\">ἀνήρ</i>, and <i lang=\"grc\">ταχέως</i> depends on <i lang=\"grc\">τρέχει</i>. Because the endings show these dependences, the words may be placed apart without changing them: in <i lang=\"grc\">ἀγαθὸς ταχέως τρέχει ἀνήρ</i>, <i lang=\"grc\">ἀγαθός</i> still depends on <i lang=\"grc\">ἀνήρ</i>, since both are masculine, singular, and nominative.</p>\n<p>So the analysis of a Greek sentence asks first what the endings show, and then what the order adds. The order may give emphasis to a word, but it does not decide which word depends on which.</p>",
   "qp": {
    "id": "q-grc-order-dep",
    "variants": [
     {
      "prompt": "In <i lang=\"grc\">τὸν ἵππον τὸν μέγαν ὁ παῖς ὁρᾷ</i> (“the boy sees the big horse”), on which word does <i lang=\"grc\">μέγαν</i> depend?",
      "options": [
       "<i lang=\"grc\">παῖς</i>",
       "<i lang=\"grc\">ὁρᾷ</i>",
       "<i lang=\"grc\">ἵππον</i>",
       "on no word"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">μέγαν</i> is masculine, singular, and accusative, as <i lang=\"grc\">ἵππον</i> is."
     },
     {
      "prompt": "What shows the dependences in a Greek sentence?",
      "options": [
       "Chiefly the order of the words",
       "Chiefly the endings",
       "Only the article",
       "Only the accents"
      ],
      "answer": 1,
      "explain": "The endings show the dependences; the order adds emphasis."
     },
     {
      "prompt": "In <i lang=\"grc\">ταχέως τρέχει</i>, which word depends on which?",
      "options": [
       "<i lang=\"grc\">ταχέως</i> depends on <i lang=\"grc\">τρέχει</i>",
       "<i lang=\"grc\">τρέχει</i> depends on <i lang=\"grc\">ταχέως</i>",
       "Neither depends on the other",
       "Both depend on the article"
      ],
      "answer": 0,
      "explain": "The adverb depends on the verb."
     }
    ]
   }
  }
 ]
};
