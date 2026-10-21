window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.grc/syllable"] = {
 "id": "lang.ii.grc/syllable",
 "title": "Greek Syllable, Quantity, and Accent",
 "sub": "How a Greek syllable is measured, and where the accent may stand",
 "sources": "Smyth, <i>Greek Grammar</i>",
 "panels": [
  {
   "id": "syllable-1",
   "title": "The Greek syllable",
   "body": "<p><strong>The Greek syllable.</strong> ἄγγελος (“messenger”) has three syllables, ἄγ-γε-λος, and οἰκίᾱ (“house”) has three, οἰ-κί-ᾱ, because οι is a diphthong, that is, two vowels pronounced as one. A Greek syllable, like a Latin one, has one vowel or diphthong at its center.</p><p>A syllable is long by nature when its vowel is long or a diphthong. η and ω are always long, and ε and ο are always short. α, ι, and υ may be long or short, and the macron in this course’s paradigms marks a long one, as in the last syllable of οἰκίᾱ. A syllable is long by position when a short vowel is followed by two consonants or by a double consonant, ζ, ξ, or ψ, so the first syllable of ἄγγελος is long, although its vowel is short.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-1",
    "variants": [
     {
      "prompt": "How many syllables has <i>παιδίον</i>?",
      "options": [
       "Four, one for each vowel letter",
       "Two",
       "Five",
       "Three"
      ],
      "answer": 3,
      "explain": "<i>Παι-δί-ον</i>; <i>αι</i> is a diphthong."
     },
     {
      "prompt": "Why is the first syllable of <i>ἄλλος</i> long?",
      "options": [
       "By position: two consonants follow",
       "By nature: <i>α</i> is always long",
       "Because of the accent",
       "Because of the breathing"
      ],
      "answer": 0,
      "explain": "<i>Λλ</i> makes position."
     },
     {
      "prompt": "Which vowels may be long or short?",
      "options": [
       "<i>η</i> and <i>ω</i>",
       "<i>α</i>, <i>ι</i>, and <i>υ</i>",
       "<i>ε</i> and <i>ο</i>",
       "All seven"
      ],
      "answer": 1,
      "explain": "The macron in the paradigms marks the long ones."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "The accents",
   "body": "<p><strong>The accents.</strong> κελεύω (“I order”) is written with an acute on its middle syllable, κε-λεύ-ω. Greek keeps quantity and adds a written accent on one of the last three syllables of a word. The marks are three: the <strong>acute</strong> (´); the <strong>grave</strong> (`), which is written in place of an acute on the last syllable when another word follows; and the <strong>circumflex</strong> (ˆ), which stands only on a long vowel or a diphthong.</p><p>The <strong>law of limitation</strong> says that the accent cannot stand further back than the third syllable from the end, and that it cannot stand on the third syllable from the end if the last syllable is long. Verbs are usually <strong>recessive</strong>, that is, the accent goes as far back as that law allows. So κελεύω has its acute on the penult, the syllable before the last, because its last syllable, ω, is long.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-2",
    "variants": [
     {
      "prompt": "How far back may a Greek accent stand?",
      "options": [
       "To any syllable",
       "Only to the penult",
       "To the third syllable from the end",
       "Only to the last syllable"
      ],
      "answer": 2,
      "explain": "The law of limitation."
     },
     {
      "prompt": "Where may a circumflex stand?",
      "options": [
       "On any short vowel",
       "Only on a long vowel or diphthong",
       "Only on the first syllable",
       "Only on nouns"
      ],
      "answer": 1,
      "explain": "It marks a rising and falling pitch."
     },
     {
      "prompt": "What does “recessive” mean of the accent of verbs?",
      "options": [
       "It goes as far back as the law allows",
       "It stays on the last syllable",
       "It follows the nominative",
       "It falls on the stem’s vowel"
      ],
      "answer": 0,
      "explain": "<i>Λύομεν</i>, <i>ἔλυσα</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-3",
   "title": "The accent of nouns",
   "body": "<p><strong>The accent of nouns.</strong> πόλεμος (“war”) has its accent on the third syllable from the end, but its genitive is πολέμου (“of war”), with the accent on the penult. The accent of a noun or an adjective is <strong>persistent</strong>, that is, it stays on the syllable where it stands in the nominative, as far as the law of limitation allows; in πολέμου the last syllable is long, so the accent must move forward to the penult.</p><p>An accented long penult takes the circumflex when the last syllable is short, as in κῆπος (“garden”), and the acute when the last syllable is long, as in κήπου (“of a garden”). For the accent, final αι and οι count as short, except in the optative, so πόλεμοι (“wars”) keeps its accent on the third syllable from the end.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-3",
    "variants": [
     {
      "prompt": "Where is the accent of <i>ἀνθρώπου</i>, genitive of <i>ἄνθρωπος</i>?",
      "options": [
       "On the antepenult, as in the nominative",
       "On the penult",
       "On the last syllable",
       "It has none"
      ],
      "answer": 1,
      "explain": "The long ending forces it forward."
     },
     {
      "prompt": "What kind of accent has <i>νῆσος</i>?",
      "options": [
       "An acute",
       "A grave",
       "A circumflex",
       "None"
      ],
      "answer": 2,
      "explain": "A long accented penult before a short last syllable takes the circumflex."
     },
     {
      "prompt": "How does final <i>-οι</i> count for the accent in the nominative plural?",
      "options": [
       "As long",
       "As two syllables",
       "It is not counted",
       "As short"
      ],
      "answer": 3,
      "explain": "Final <i>αι</i> and <i>οι</i> count as short, except in the optative."
     }
    ]
   }
  },
  {
   "id": "syllable-4",
   "title": "The breathings",
   "body": "<p><strong>The breathings.</strong> The article ὁ (“the”) is pronounced with an <i>h</i>, whereas ἐστί (“is”) begins with the bare vowel. A word that begins with a vowel or a diphthong takes a mark called a <strong>breathing</strong>, written over the vowel, or over the second vowel of a diphthong. The rough breathing (῾) is the sound of <i>h</i>, as in ὁ, and the smooth breathing (᾿) shows that the word does not begin with <i>h</i>, as in ἐστί. A word that begins with ρ takes the rough breathing, as ῥήτωρ (“speaker”). A breathing is not a syllable, and it does not change the quantity.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-4",
    "variants": [
     {
      "prompt": "What does a rough breathing on <i>ἁ-</i> show?",
      "options": [
       "The word begins with <i>h</i>",
       "The vowel is long",
       "The syllable is accented",
       "The word is enclitic"
      ],
      "answer": 0,
      "explain": "The rough breathing is the sound <i>h</i>."
     },
     {
      "prompt": "Which word begins with <i>h</i>?",
      "options": [
       "<i>ἀγαθός</i>",
       "<i>ἔργον</i>",
       "<i>ὄνομα</i>",
       "<i>ὕδωρ</i>"
      ],
      "answer": 3,
      "explain": "<i>Ὕδωρ</i> has the rough breathing; English “hydro-.”"
     },
     {
      "prompt": "Does a breathing change the quantity of a vowel?",
      "options": [
       "Yes, the rough breathing lengthens it",
       "Only on diphthongs",
       "No",
       "Only at the end of a line"
      ],
      "answer": 2,
      "explain": "A breathing is not a syllable and does not change quantity."
     }
    ]
   }
  },
  {
   "id": "syllable-5",
   "title": "Movable nu",
   "body": "<p><strong>Movable nu</strong></p><p>ἐστί (“is”) is also written ἐστίν, above all before a vowel, and the two spellings are one form. Some forms of this kind may take a ν at the end: the third person plural in -σι, the dative plural in -σι, and third-person singulars in -ε, such as ἔλῡσε(ν) (“he loosed”). This ν is called <strong>movable nu</strong>, and it does not change the case, the person, or the number.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-5",
    "variants": [
     {
      "prompt": "Does movable nu change the case or person of a form?",
      "options": [
       "Yes, it marks the plural",
       "Yes, it marks the dative",
       "Only in verse",
       "No"
      ],
      "answer": 3,
      "explain": "<i>Λέγουσι</i> and <i>λέγουσιν</i> are one form."
     },
     {
      "prompt": "When is movable nu chiefly written?",
      "options": [
       "Before a vowel",
       "Before a consonant",
       "At the start of a word",
       "Only in poetry"
      ],
      "answer": 0,
      "explain": "It prevents two vowels meeting."
     },
     {
      "prompt": "Which ending may take movable nu?",
      "options": [
       "The genitive singular in <i>-ου</i>",
       "The dative plural in <i>-σι</i>",
       "The nominative in <i>-ος</i>",
       "The infinitive in <i>-ειν</i>"
      ],
      "answer": 1,
      "explain": "<i>Πᾶσι</i> or <i>πᾶσιν</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-6",
   "title": "The macron",
   "body": "<p><strong>The macron</strong></p><p>A macron over α, ι, or υ marks the vowel as long. Herbert Weir Smyth prints it in his <i>Greek Grammar</i> (1920) so that the quantity is visible, and the paradigms of this course keep his marks. The macron is a teaching mark, and Greek writing did not use it in antiquity. The accents and the breathings belong to the traditional text, but they were not written in classical Attic either; as we have seen in Section II, the accent marks were introduced by the scholars of Alexandria.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-6",
    "variants": [
     {
      "prompt": "What does a macron over <i>α</i> mark in the course’s paradigms?",
      "options": [
       "An accent",
       "A breathing",
       "A long vowel",
       "A dialect form"
      ],
      "answer": 2,
      "explain": "Smyth prints it so that the quantity is visible."
     },
     {
      "prompt": "Did Greek writing in antiquity use the macron?",
      "options": [
       "Yes, on every long vowel",
       "No; it is a teaching mark",
       "Only in Attic inscriptions",
       "Only in Homer"
      ],
      "answer": 1,
      "explain": "The macron is modern."
     },
     {
      "prompt": "Who introduced the accent marks?",
      "options": [
       "The scholars of Alexandria",
       "The Athenian poets of the fifth century",
       "Byzantine printers",
       "Roman grammarians"
      ],
      "answer": 0,
      "explain": "They were not written in classical Attic."
     }
    ]
   }
  },
  {
   "id": "syllable-7",
   "title": "Enclitics and proclitics",
   "body": "<p><strong>Enclitics and proclitics</strong></p><p>In πόλεμός ἐστι (“it is a war”) the word ἐστι has no accent of its own, and πόλεμος takes a second accent on its last syllable. Some short words have no accent of their own in this way. An <strong>enclitic</strong> is pronounced with the word before it, and it may give that word a second accent. The enclitics include the indefinite pronoun τις (“someone”), the short pronouns με, μοι, σε, and σοι (“me,” “to me,” “you,” “to you”), the present indicative of εἰμί (“I am”) and of φημί (“I say”) except the second person singular, and the particles τε (“and”) and γε (“at least”). A <strong>proclitic</strong> is pronounced with the word after it; the proclitics include the article forms ὁ, ἡ, οἱ, and αἱ, the prepositions ἐν (“in”), εἰς (“into”), and ἐκ (“out of”), and the negative οὐ (“not”). Latin, as we have seen, has enclitics too: <i>-que</i>, <i>-ne</i>, and <i>-ve</i>.</p>",
   "qp": {
    "id": "q-grc-sy-syllable-7",
    "variants": [
     {
      "prompt": "What is an enclitic?",
      "options": [
       "A word with two accents of its own",
       "A word pronounced with the word before it",
       "A word that begins with a vowel",
       "A word placed first in a clause"
      ],
      "answer": 1,
      "explain": "It may give the word before it a second accent."
     },
     {
      "prompt": "Which of these is an enclitic?",
      "options": [
       "<i>γάρ</i>",
       "<i>δέ</i>",
       "<i>γε</i>",
       "<i>καί</i>"
      ],
      "answer": 2,
      "explain": "<i>Γε</i>, “at least,” is enclitic."
     },
     {
      "prompt": "Why does <i>δῶρόν ἐστι</i> have two accents on <i>δῶρον</i>?",
      "options": [
       "Neuter nouns take two accents",
       "It is a genitive",
       "The second marks a question",
       "<i>ἐστι</i> is an enclitic"
      ],
      "answer": 3,
      "explain": "The enclitic gives the word before it a second accent."
     }
    ]
   }
  }
 ]
};
