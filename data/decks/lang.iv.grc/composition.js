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
   "body": "<p>English “upland” is land that is up, whereas “redcoat” is not a coat but a man who wears one. Greek, which compounds far more freely than Latin, makes the same two kinds and a third. In a <strong>determinative</strong> compound the first part describes the second: <i lang=\"grc\">ἀκρόπολις</i> (“upper city,” from <i lang=\"grc\">ἄκρος</i>, “highest,” and <i lang=\"grc\">πόλις</i>), <i lang=\"grc\">ψευδόμαντις</i> (“false prophet”). In a <strong>possessive</strong> compound the whole describes someone who has what the parts name: <i lang=\"grc\">μεγαλόψυχος</i> (“having a great soul,” “magnanimous”), and Homer’s <i lang=\"grc\">ῥοδοδάκτυλος</i> (“rosy-fingered”), said of Dawn. In a <strong>governing</strong> compound one part acts on the other as a verb on its object: <i lang=\"grc\">φιλόπολις</i> (“loving one’s city”), <i lang=\"grc\">λογογράφος</i> (“speech-writer”), <i lang=\"grc\">ψυχοπομπός</i> (“conductor of souls”).</p>",
   "qp": {
    "id": "q-grc-comp-kinds",
    "variants": [
     {
      "prompt": "What kind of compound is <i lang=\"grc\">μεγαλόψυχος</i>?",
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
      "prompt": "What kind of compound is <i lang=\"grc\">λογογράφος</i>?",
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
      "prompt": "What does <i lang=\"grc\">ἀκρόπολις</i> mean, read from its parts?",
      "options": [
       "“the city of the sharp ones”",
       "“the upper city”",
       "“a citizen of the heights”",
       "“a city with walls”"
      ],
      "answer": 1,
      "explain": "The word <i lang=\"grc\">ἄκρος</i>, “highest,” describes <i lang=\"grc\">πόλις</i>: a determinative compound."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "The joining vowel",
   "body": "<p>When the first part of a Greek compound is a noun or an adjective, it usually ends in the joining vowel <i lang=\"grc\">-ο-</i>, whatever its declension: <i lang=\"grc\">ἱππόδρομος</i> (“horse-course,” racecourse), <i lang=\"grc\">νομοθέτης</i> (“law-giver”), <i lang=\"grc\">δημοκρατία</i> (“rule of the people”), <i lang=\"grc\">θεομάχος</i> (“fighting against god”). Before a vowel the <i lang=\"grc\">-ο-</i> is usually dropped: <i lang=\"grc\">φιλ-άνθρωπος</i> (“loving mankind”), <i lang=\"grc\">χειρ-ουργός</i> (“hand-worker,” whence “surgeon”). This is the <i lang=\"grc\">-o-</i> of the English learned compounds, as we have seen: “photograph,” “biology.” A verb stem can stand first as well, as <i lang=\"grc\">φιλ-</i> in <i lang=\"grc\">φιλόσοφος</i>, and a numeral, as <i lang=\"grc\">τρι-</i> in <i lang=\"grc\">τρίπους</i> (“three-footed,” “tripod”).</p>",
   "qp": {
    "id": "q-grc-comp-joining",
    "variants": [
     {
      "prompt": "What vowel joins the parts of <i lang=\"grc\">νομοθέτης</i>?",
      "options": [
       "<i lang=\"grc\">-ο-</i>",
       "<i lang=\"grc\">-ι-</i>",
       "<i lang=\"grc\">-α-</i>",
       "none"
      ],
      "answer": 0,
      "explain": "Greek joins with <i lang=\"grc\">-ο-</i>: <i lang=\"grc\">νομ-ο-θέτης</i>."
     },
     {
      "prompt": "Why is it <i lang=\"grc\">φιλάνθρωπος</i> and not <i lang=\"grc\">φιλοάνθρωπος</i>?",
      "options": [
       "<i lang=\"grc\">Φιλ-</i> never takes a joining vowel at all",
       "<i lang=\"grc\">Ἄνθρωπος</i> is a verb",
       "The word is Latin",
       "The joining vowel drops before a vowel"
      ],
      "answer": 3,
      "explain": "Before the vowel of <i lang=\"grc\">ἄνθρωπος</i>, the <i lang=\"grc\">-ο-</i> is dropped."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἱππόδρομος</i> name?",
      "options": [
       "a horse that runs",
       "a rider",
       "a racecourse",
       "a horse-dealer"
      ],
      "answer": 2,
      "explain": "The forms <i lang=\"grc\">ἵππος</i> and <i lang=\"grc\">δρόμος</i> (“course”): a determinative compound."
     }
    ]
   }
  },
  {
   "id": "verbs",
   "title": "Prepositions in compound verbs",
   "body": "<p>As we have seen, a Greek preposition is often joined to a verb, and the augment stands between them. The preposition keeps its sense as an adverb, and the common ones give a large part of Greek vocabulary: <i lang=\"grc\">ἀνα-</i> (“up,” “again”: <i lang=\"grc\">ἀναβαίνω</i>, “I go up”), <i lang=\"grc\">ἀπο-</i> (“away,” “back”: <i lang=\"grc\">ἀποδίδωμι</i>, “I give back”), <i lang=\"grc\">δια-</i> (“through,” “apart”: <i lang=\"grc\">διαφέρω</i>, “I carry through,” “I differ”), <i lang=\"grc\">ἐκ-</i> (“out”), <i lang=\"grc\">εἰσ-</i> (“into”), <i lang=\"grc\">κατα-</i> (“down,” and often “completely”: <i lang=\"grc\">κατεσθίω</i>, “I eat up”), <i lang=\"grc\">συν-</i> (“together”), <i lang=\"grc\">προ-</i> (“before”), <i lang=\"grc\">ὑπο-</i> (“under”). So <i lang=\"grc\">κατα-</i> can do in Greek what “up” does in English “eat up” and “burn up”: it says that the action is carried through to the end.</p>",
   "qp": {
    "id": "q-grc-comp-verbs",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">ἀναγιγνώσκω</i> mean, read from its parts (“know again”)?",
      "options": [
       "“I forget”",
       "“I learn beforehand”",
       "“I read”",
       "“I know together”"
      ],
      "answer": 2,
      "explain": "“To know again” the letters is to read; <i lang=\"grc\">ἀνα-</i> means “again.”"
     },
     {
      "prompt": "What does <i lang=\"grc\">κατα-</i> add in <i lang=\"grc\">κατακαίω</i> (“I burn”)?",
      "options": [
       "That the burning is repeated",
       "That the burning is complete",
       "That the burning is beforehand",
       "That the burning is together"
      ],
      "answer": 1,
      "explain": "The prefix <i lang=\"grc\">κατα-</i> often says that the action is carried through to the end."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἀποδίδωμι</i> mean?",
      "options": [
       "“I give back”",
       "“I give together”",
       "“I give in”",
       "“I give before”"
      ],
      "answer": 0,
      "explain": "The prefix <i lang=\"grc\">ἀπο-</i>, “back,” with <i lang=\"grc\">δίδωμι</i>, “I give.”"
     }
    ]
   }
  },
  {
   "id": "english",
   "title": "Greek compounds in English",
   "body": "<p>English keeps many Greek compounds whole, and their parts can still be read: “hippopotamus” (<i lang=\"grc\">ἵππος ποτάμιος</i>, “river horse”), “rhinoceros” (<i lang=\"grc\">ῥίς</i>, <i lang=\"grc\">ῥινός</i>, “nose,” and <i lang=\"grc\">κέρας</i>, “horn”), “chrysanthemum” (<i lang=\"grc\">χρυσός</i>, “gold,” and <i lang=\"grc\">ἄνθεμον</i>, “flower”), “orthodox” (<i lang=\"grc\">ὀρθός</i>, “right,” and <i lang=\"grc\">δόξα</i>, “opinion”), “monarchy” (<i lang=\"grc\">μόνος</i>, “alone,” and <i lang=\"grc\">ἀρχή</i>, “rule”). Many others were coined in modern times from Greek parts, as we have seen in English: “oxygen” (“acid-maker”) and “dinosaur” (“terrible lizard”). So a knowledge of a few Greek stems opens a large part of the learned vocabulary of English.</p>",
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
      "explain": "The words <i lang=\"grc\">μόνος</i>, “alone,” and <i lang=\"grc\">ἀρχή</i>, “rule.”"
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
      "explain": "The words <i lang=\"grc\">ῥίς</i>, “nose,” and <i lang=\"grc\">κέρας</i>, “horn.”"
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
      "explain": "The words <i lang=\"grc\">ὀρθός</i>, “right,” and <i lang=\"grc\">δόξα</i>, “opinion.”"
     }
    ]
   }
  }
 ]
};
