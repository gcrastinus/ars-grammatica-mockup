window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.grc/composition"] = {
 "id": "lang.iv.grc/composition",
 "title": "Composition in Greek",
 "sub": "The kinds of Greek compound, the joining vowel, the prepositions in compound verbs, and Greek compounds in English",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 869–903; Liddell, Scott, and Jones, <i>A Greek–English Lexicon</i>",
 "panels": [
  {
   "id": "kinds",
   "title": "The kinds of compound",
   "body": "<p>English “upland” is land that is up, whereas “redcoat” is not a coat but a man who wears one. Greek, which compounds far more freely than Latin, makes the same two kinds and a third. In a <strong>determinative</strong> compound the first part describes the second: <i>ἀκρόπολις</i> (“upper city,” from <i>ἄκρος</i>, “highest,” and <i>πόλις</i>), <i>ψευδόμαντις</i> (“false prophet”). In a <strong>possessive</strong> compound the whole describes someone who has what the parts name: <i>μεγαλόψυχος</i> (“having a great soul,” “magnanimous”), and Homer’s <i>ῥοδοδάκτυλος</i> (“rosy-fingered”), said of Dawn. In a <strong>governing</strong> compound one part acts on the other as a verb on its object: <i>φιλόπολις</i> (“loving one’s city”), <i>λογογράφος</i> (“speech-writer”), <i>ψυχοπομπός</i> (“conductor of souls”).</p>",
   "qp": {
    "id": "q-grc-comp-kinds",
    "variants": [
     {
      "prompt": "What kind of compound is <i>μεγαλόψυχος</i>?",
      "options": [
       "Determinative: “a great soul”",
       "Governing: “loving the soul”",
       "A phrase of two words",
       "Possessive"
      ],
      "answer": 3,
      "explain": "The compound describes a person who has a great soul."
     },
     {
      "prompt": "What kind of compound is <i>λογογράφος</i>?",
      "options": [
       "Governing",
       "Possessive: one who has speeches",
       "Determinative: a written speech",
       "A noun with the suffix -σις"
      ],
      "answer": 0,
      "explain": "The second part acts on the first as a verb on its object."
     },
     {
      "prompt": "What does <i>ἀκρόπολις</i> mean, read from its parts?",
      "options": [
       "“the city of the sharp ones”",
       "“the upper city”",
       "“a citizen of the heights”",
       "“a city with walls”"
      ],
      "answer": 1,
      "explain": "<i>Ἄκρος</i>, “highest,” describes <i>πόλις</i>: a determinative compound."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "The joining vowel",
   "body": "<p>When the first part of a Greek compound is a noun or an adjective, it usually ends in the joining vowel <i>-ο-</i>, whatever its declension: <i>ἱππόδρομος</i> (“horse-course,” racecourse), <i>νομοθέτης</i> (“law-giver”), <i>δημοκρατία</i> (“rule of the people”), <i>θεομάχος</i> (“fighting against god”). Before a vowel the <i>-ο-</i> is usually dropped: <i>φιλ-άνθρωπος</i> (“loving mankind”), <i>χειρ-ουργός</i> (“hand-worker,” whence “surgeon”). This is the <i>-o-</i> of the English learned compounds, as we have seen: “photograph,” “biology.” A verb stem can stand first as well, as <i>φιλ-</i> in <i>φιλόσοφος</i>, and a numeral, as <i>τρι-</i> in <i>τρίπους</i> (“three-footed,” “tripod”).</p>",
   "qp": {
    "id": "q-grc-comp-joining",
    "variants": [
     {
      "prompt": "What vowel joins the parts of <i>νομοθέτης</i>?",
      "options": [
       "<i>-ο-</i>",
       "<i>-ι-</i>",
       "<i>-α-</i>",
       "none"
      ],
      "answer": 0,
      "explain": "Greek joins with <i>-ο-</i>: <i>νομ-ο-θέτης</i>."
     },
     {
      "prompt": "Why is it <i>φιλάνθρωπος</i> and not <i>φιλοάνθρωπος</i>?",
      "options": [
       "<i>Φιλ-</i> never takes a joining vowel at all",
       "<i>Ἄνθρωπος</i> is a verb",
       "The word is Latin",
       "The joining vowel drops before a vowel"
      ],
      "answer": 3,
      "explain": "Before the vowel of <i>ἄνθρωπος</i>, the <i>-ο-</i> is dropped."
     },
     {
      "prompt": "What does <i>ἱππόδρομος</i> name?",
      "options": [
       "a horse that runs",
       "a rider",
       "a racecourse",
       "a horse-dealer"
      ],
      "answer": 2,
      "explain": "<i>Ἵππος</i> and <i>δρόμος</i> (“course”): a determinative compound."
     }
    ]
   }
  },
  {
   "id": "verbs",
   "title": "Prepositions in compound verbs",
   "body": "<p>As we have seen, a Greek preposition is often joined to a verb, and the augment stands between them. The preposition keeps its sense as an adverb, and the common ones give a large part of Greek vocabulary: <i>ἀνα-</i> (“up,” “again”: <i>ἀναβαίνω</i>, “I go up”), <i>ἀπο-</i> (“away,” “back”: <i>ἀποδίδωμι</i>, “I give back”), <i>δια-</i> (“through,” “apart”: <i>διαφέρω</i>, “I carry through,” “I differ”), <i>ἐκ-</i> (“out”), <i>εἰσ-</i> (“into”), <i>κατα-</i> (“down,” and often “completely”: <i>κατεσθίω</i>, “I eat up”), <i>συν-</i> (“together”), <i>προ-</i> (“before”), <i>ὑπο-</i> (“under”). So <i>κατα-</i> can do in Greek what “up” does in English “eat up” and “burn up”: it says that the action is carried through to the end.</p>",
   "qp": {
    "id": "q-grc-comp-verbs",
    "variants": [
     {
      "prompt": "What does <i>ἀναγιγνώσκω</i> mean, read from its parts (“know again”)?",
      "options": [
       "“I forget”",
       "“I learn beforehand”",
       "“I read”",
       "“I know together”"
      ],
      "answer": 2,
      "explain": "“To know again” the letters is to read; <i>ἀνα-</i> means “again.”"
     },
     {
      "prompt": "What does <i>κατα-</i> add in <i>κατακαίω</i> (“I burn”)?",
      "options": [
       "That the burning is repeated",
       "That the burning is complete",
       "That the burning is beforehand",
       "That the burning is together"
      ],
      "answer": 1,
      "explain": "<i>Κατα-</i> often says that the action is carried through to the end."
     },
     {
      "prompt": "What does <i>ἀποδίδωμι</i> mean?",
      "options": [
       "“I give back”",
       "“I give together”",
       "“I give in”",
       "“I give before”"
      ],
      "answer": 0,
      "explain": "<i>Ἀπο-</i>, “back,” with <i>δίδωμι</i>, “I give.”"
     }
    ]
   }
  },
  {
   "id": "english",
   "title": "Greek compounds in English",
   "body": "<p>English keeps many Greek compounds whole, and their parts can still be read: “hippopotamus” (<i>ἵππος ποτάμιος</i>, “river horse”), “rhinoceros” (<i>ῥίς</i>, <i>ῥινός</i>, “nose,” and <i>κέρας</i>, “horn”), “chrysanthemum” (<i>χρυσός</i>, “gold,” and <i>ἄνθεμον</i>, “flower”), “orthodox” (<i>ὀρθός</i>, “right,” and <i>δόξα</i>, “opinion”), “monarchy” (<i>μόνος</i>, “alone,” and <i>ἀρχή</i>, “rule”). Many others were coined in modern times from Greek parts, as we have seen in English: “oxygen” (“acid-maker”) and “dinosaur” (“terrible lizard”). So a knowledge of a few Greek stems opens a large part of the learned vocabulary of English.</p>",
   "qp": {
    "id": "q-grc-comp-english",
    "variants": [
     {
      "prompt": "What do the parts of “monarchy” mean?",
      "options": [
       "“alone” and “rule”",
       "“one” and “wealth”",
       "“month” and “rule”",
       "“alone” and “arch”"
      ],
      "answer": 0,
      "explain": "<i>Μόνος</i>, “alone,” and <i>ἀρχή</i>, “rule.”"
     },
     {
      "prompt": "What does “rhinoceros” mean literally?",
      "options": [
       "“river horse”",
       "“horned beast”",
       "“thick skin”",
       "“nose-horn”"
      ],
      "answer": 3,
      "explain": "<i>Ῥίς</i>, “nose,” and <i>κέρας</i>, “horn.”"
     },
     {
      "prompt": "What does “orthodox” mean literally?",
      "options": [
       "“straight road”",
       "“right glory”",
       "“right opinion”",
       "“old teaching”"
      ],
      "answer": 2,
      "explain": "<i>Ὀρθός</i>, “right,” and <i>δόξα</i>, “opinion.”"
     }
    ]
   }
  }
 ]
};
