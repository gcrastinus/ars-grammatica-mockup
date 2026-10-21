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
      "prompt": "In <i>τὸν ἀδελφὸν ὁρᾷ ἡ μήτηρ</i>, which word is the subject?",
      "options": [
       "<i>ἀδελφόν</i>",
       "<i>ὁρᾷ</i>",
       "<i>μήτηρ</i>",
       "<i>τόν</i>"
      ],
      "answer": 2,
      "explain": "<i>Μήτηρ</i> is nominative; <i>ἀδελφόν</i> is accusative, the object, though it stands first."
     },
     {
      "prompt": "Which case does <i>ἄρχω</i> (“rule”) govern?",
      "options": [
       "The accusative",
       "The genitive",
       "The dative",
       "The nominative"
      ],
      "answer": 1,
      "explain": "The case of the object belongs to the meaning of the verb: <i>ἄρχω</i> takes the genitive."
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
      "prompt": "What does <i>ἡ οἰκία μεγάλη</i> mean?",
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
       "<i>ἡ πόλις καλή</i>",
       "<i>καλὴ ἡ πόλις</i>",
       "<i>ἡ πόλις ἡ καλή</i>",
       "<i>πόλις ἡ καλή ἐστι</i>"
      ],
      "answer": 2,
      "explain": "With a repeated article the adjective is attributive."
     },
     {
      "prompt": "Where does <i>γάρ</i> stand in its clause?",
      "options": [
       "Always first",
       "Always last",
       "Directly before the verb",
       "Usually second"
      ],
      "answer": 3,
      "explain": "<i>Γάρ</i> is postpositive: it never stands first."
     }
    ]
   }
  },
  {
   "id": "dependence",
   "title": "Dependence in a Greek sentence",
   "body": "<p>In <i>ἀνὴρ ἀγαθὸς ταχέως τρέχει</i> (“a good man runs swiftly”) there are three constructions, as in the Latin sentences we have analyzed: <i>ἀγαθός</i> depends on <i>ἀνήρ</i>, <i>τρέχει</i> depends on <i>ἀνήρ</i>, and <i>ταχέως</i> depends on <i>τρέχει</i>. Because the endings show these dependences, the words may be placed apart without changing them: in <i>ἀγαθὸς ταχέως τρέχει ἀνήρ</i>, <i>ἀγαθός</i> still depends on <i>ἀνήρ</i>, since both are masculine, singular, and nominative.</p>\n<p>So the analysis of a Greek sentence asks first what the endings show, and then what the order adds. The order may give emphasis to a word, but it does not decide which word depends on which.</p>",
   "qp": {
    "id": "q-grc-order-dep",
    "variants": [
     {
      "prompt": "In <i>τὸν ἵππον τὸν μέγαν ὁ παῖς ὁρᾷ</i> (“the boy sees the big horse”), on which word does <i>μέγαν</i> depend?",
      "options": [
       "<i>παῖς</i>",
       "<i>ὁρᾷ</i>",
       "<i>ἵππον</i>",
       "on no word"
      ],
      "answer": 2,
      "explain": "<i>Μέγαν</i> is masculine, singular, and accusative, as <i>ἵππον</i> is."
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
      "prompt": "In <i>ταχέως τρέχει</i>, which word depends on which?",
      "options": [
       "<i>ταχέως</i> depends on <i>τρέχει</i>",
       "<i>τρέχει</i> depends on <i>ταχέως</i>",
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
