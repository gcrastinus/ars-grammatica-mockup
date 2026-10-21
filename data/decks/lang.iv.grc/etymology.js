window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.grc/etymology"] = {
 "id": "lang.iv.grc/etymology",
 "title": "Etymology in Greek",
 "sub": "Greek and its cognates, the sounds Greek lost and kept, and Greek words whose meaning changed on the way into English",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 869–903; Liddell, Scott, and Jones, <i>A Greek–English Lexicon</i>",
 "panels": [
  {
   "id": "cognates",
   "title": "Greek and its cognates",
   "body": "<p>Greek <i>φέρω</i>, Latin <i>ferō</i>, and English “bear” (“carry”) are one verb in three languages; Greek <i>ζυγόν</i>, Latin <i>iugum</i>, and English “yoke” are one noun; and Greek <i>ὄνομα</i>, Latin <i>nōmen</i>, and English “name” another. As with Latin, these are cognates, words inherited from the common parent language, Indo-European, and not borrowings. A Greek word and its English cognate often look less alike than a Greek word and its English borrowing: “bear” is the cognate of <i>φέρω</i>, whereas “-phore” in “semaphore” is a borrowing from it.</p>",
   "qp": {
    "id": "q-grc-ety-cognates",
    "variants": [
     {
      "prompt": "Which English word is the native cognate of <i>ζυγόν</i>?",
      "options": [
       "“zygote”",
       "“syzygy”",
       "“zone”",
       "“yoke”"
      ],
      "answer": 3,
      "explain": "“Yoke” is inherited; “zygote” and “syzygy” were borrowed from Greek."
     },
     {
      "prompt": "Which English word was borrowed from Greek <i>ὄνομα</i>?",
      "options": [
       "“anonymous”",
       "“name”",
       "“noun”",
       "“nomination”"
      ],
      "answer": 0,
      "explain": "“Anonymous” (“nameless”) is from Greek; “name” is the cognate, and “noun” and “nominate” come from Latin <i>nōmen</i>."
     },
     {
      "prompt": "What is the relation of <i>φέρω</i> and Latin <i>ferō</i>?",
      "options": [
       "<i>Ferō</i> was borrowed from Greek",
       "They are cognates",
       "<i>Φέρω</i> was borrowed from Latin",
       "They are unrelated"
      ],
      "answer": 1,
      "explain": "Both descend from Indo-European."
     }
    ]
   }
  },
  {
   "id": "sounds",
   "title": "Sounds Greek lost and kept",
   "body": "<p>Greek and Latin each lost some of the sounds of their parent and kept others, and the differences let us recognize cognates. Where Latin and English have an initial <i>s</i> before a vowel, Greek often has the rough breathing: Greek <i>ἑπτά</i>, Latin <i>septem</i>, English “seven”; <i>ἕξ</i>, <i>sex</i>, “six”; <i>ὑπέρ</i>, <i>super</i>, “over”; and <i>ἡμι-</i> and <i>sēmi-</i> (“half”). Greek also lost the sound of <i>w</i>, which early Greek wrote with a letter called digamma (<i>ϝ</i>): Greek <i>οἶκος</i> (“house,” earlier <i>ϝοῖκος</i>) is the cognate of Latin <i>vīcus</i> (“village”), and Greek <i>ἔργον</i> (earlier <i>ϝέργον</i>) of English “work.” The lost digamma also explains some irregularities of Homer’s meter.</p>",
   "qp": {
    "id": "q-grc-ety-sounds",
    "variants": [
     {
      "prompt": "What does the rough breathing of <i>ἕξ</i> often stand for?",
      "options": [
       "An old <i>h</i>, kept in Latin <i>hex</i>",
       "An old <i>s</i>, kept in Latin <i>sex</i>",
       "Nothing; it is decoration",
       "A lost digamma"
      ],
      "answer": 1,
      "explain": "Initial <i>s</i> before a vowel became the rough breathing in Greek."
     },
     {
      "prompt": "Which English word is the cognate of <i>ἔργον</i>?",
      "options": [
       "“energy”",
       "“organ”",
       "“work”",
       "“erg”"
      ],
      "answer": 2,
      "explain": "<i>Ἔργον</i> was earlier <i>ϝέργον</i>; “energy,” “organ,” and “erg” are borrowings."
     },
     {
      "prompt": "What was the digamma?",
      "options": [
       "A double gamma",
       "A Latin letter",
       "A mark of accent",
       "A letter for the sound of <i>w</i>"
      ],
      "answer": 3,
      "explain": "The digamma (<i>ϝ</i>) wrote the <i>w</i> sound, later lost in Attic."
     }
    ]
   }
  },
  {
   "id": "meanings",
   "title": "Greek words whose meaning changed",
   "body": "<p>Many Greek words came into English with a meaning that had shifted on the way. An <i>ἰδιώτης</i> was a private person, one who took no part in public life, and only later a fool; a <i>τύραννος</i> was a ruler who had seized power, whether he ruled well or badly; <i>ἐνθουσιασμός</i> was possession by a god; a <i>χαρακτήρ</i> was a stamp or engraved mark; and a <i>πλανήτης</i> was a wanderer, which the planets seemed to be among the fixed stars. So, as with English, the origin of a word explains its form and often its first sense, but not always its present meaning.</p>",
   "qp": {
    "id": "q-grc-ety-meanings",
    "variants": [
     {
      "prompt": "What did <i>τύραννος</i> mean in Greek?",
      "options": [
       "A cruel ruler only",
       "A ruler who had seized power",
       "A lawful king by birth",
       "A soldier of the guard"
      ],
      "answer": 1,
      "explain": "The sense of cruelty came later; the Greek word named the manner of coming to power."
     },
     {
      "prompt": "Why is a planet so called?",
      "options": [
       "<i>Πλανήτης</i> meant “flat”",
       "It is a Latin word for “star”",
       "<i>Πλανήτης</i> meant “wanderer”",
       "It comes from “plane”"
      ],
      "answer": 2,
      "explain": "The planets seemed to wander among the fixed stars."
     },
     {
      "prompt": "What did <i>ἰδιώτης</i> first mean?",
      "options": [
       "A fool",
       "A foreigner",
       "A slave",
       "A private person"
      ],
      "answer": 3,
      "explain": "The sense “fool” came later."
     }
    ]
   }
  }
 ]
};
