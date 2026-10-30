window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.grc/meter"] = {
 "id": "lang.ii.grc/meter",
 "title": "Greek Meter",
 "sub": "Quantity, and five meters: the hexameter, the elegiac couplet, the iambic trimeter, the sapphic stanza, and the lyric of the choruses",
 "sources": "Smyth, <em>Greek Grammar</em>; Hypotactic; the translations of the lines are the course’s own plain translations",
 "panels": [
  {
   "id": "meter-1",
   "title": "Quantity, not accent",
   "body": "<p>In the word μῆνις (“wrath”) the circumflex marks a pitch that rises and falls on the first syllable, but the syllable is long because its vowel η is long, not because of the accent. Greek meter, as we have seen in Section II, is like Latin meter a pattern of <strong>long and short syllables</strong>. A syllable is long by nature when its vowel is long (η, ω, or a long α, ι, or υ) or a diphthong, and long by position when two consonants, or ζ, ξ, or ψ, follow its vowel. The written accents mark a <strong>pitch</strong>, rising or falling, and they have nothing to do with the meter.</p>\n<p>A mute followed by a liquid or a nasal (πρ, κλ, τν) may leave the syllable before it short, especially in Attic drama.</p>",
   "qp": {
    "id": "q-grc-me-meter-1",
    "variants": [
     {
      "prompt": "What makes a Greek syllable long in verse?",
      "options": [
       "Its written accent, acute or circumflex",
       "Its breathing",
       "Its vowel or the consonants after it",
       "Its place in the word"
      ],
      "answer": 2,
      "explain": "Quantity, not accent, governs the meter."
     },
     {
      "prompt": "What may a mute followed by a liquid do, especially in Attic drama?",
      "options": [
       "Always lengthen the syllable",
       "Leave the syllable before it short",
       "Remove a syllable",
       "Change the accent"
      ],
      "answer": 1,
      "explain": "The clusters <em lang=\"grc\">πρ</em>, <em lang=\"grc\">κλ</em> may fail to make position."
     },
     {
      "prompt": "What do the written accents mark?",
      "options": [
       "A pitch",
       "A long syllable",
       "A beat of the meter",
       "A pause"
      ],
      "answer": 0,
      "explain": "They have nothing to do with the meter."
     }
    ]
   }
  },
  {
   "id": "meter-2",
   "title": "The dactylic hexameter",
   "body": "<p>A line of the <em lang=\"grc\">Odyssey</em> (I.6) reads ἀλλ᾽ οὐδ᾽ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ (“but even so he did not save his comrades, though he longed to”). It is divided <em lang=\"grc\">ἀλλ᾽ οὐδ᾽ | ὣς ἑτά|ρους ἐρ|ρύσατο | ἱέμε|νός περ</em>: a spondee, a dactyl, a spondee, two dactyls, and a final foot of two syllables. The <strong>dactylic hexameter</strong> has six feet, each a dactyl (— ᴗ ᴗ) or a spondee (— —); the fifth is almost always a dactyl, and the sixth has two syllables. It is the meter of Homer and of Hesiod. A <strong>caesura</strong>, that is, a word end within a foot, usually falls inside the third foot, as here after ἑτάρους.</p>\n<p>A long vowel or diphthong at the end of a word is often shortened before a word that begins with a vowel; this is called <strong>epic correption</strong>.</p>\n<p>Virgil and Ovid write the same line in Latin. Homer’s Greek is older than Attic, so a form that fits the meter in Homer is not thereby the form taught in the Attic paradigms.</p>",
   "qp": {
    "id": "q-grc-me-meter-2",
    "variants": [
     {
      "prompt": "What is epic correption?",
      "options": [
       "A short vowel lengthened before a consonant",
       "A word divided between two lines",
       "The loss of an augment",
       "A long final vowel shortened before a vowel"
      ],
      "answer": 3,
      "explain": "It is common in Homer."
     },
     {
      "prompt": "Which foot of the hexameter is almost always a dactyl?",
      "options": [
       "The fifth",
       "The sixth",
       "The first",
       "The third"
      ],
      "answer": 0,
      "explain": "A spondaic fifth foot is rare."
     },
     {
      "prompt": "Where does the caesura usually fall in the hexameter?",
      "options": [
       "At the end of the line",
       "Inside the third foot",
       "Between the fifth and sixth feet",
       "Inside the first foot"
      ],
      "answer": 1,
      "explain": "It is a word end within a foot."
     }
    ]
   }
  },
  {
   "id": "meter-3",
   "title": "The elegiac couplet",
   "body": "<p>The <strong>elegiac couplet</strong> is a hexameter followed by a <strong>pentameter</strong>, a line made of two halves of the pattern — ᴗ ᴗ — ᴗ ᴗ —, with a fixed word end between them; only the first half admits spondees. It is the meter of Greek epitaphs and epigrams, many of which are collected in the <em lang=\"grc\">Greek Anthology</em>.</p>",
   "qp": {
    "id": "q-grc-me-meter-3",
    "variants": [
     {
      "prompt": "What does an elegiac couplet join?",
      "options": [
       "A hexameter and a pentameter",
       "Two hexameters",
       "Two iambic trimeters",
       "A sapphic line and an adonean"
      ],
      "answer": 0,
      "explain": "It is the meter of epitaphs and epigrams."
     },
     {
      "prompt": "Which half of the pentameter admits spondees?",
      "options": [
       "The second",
       "Both",
       "Neither",
       "The first"
      ],
      "answer": 3,
      "explain": "The second half keeps its dactyls."
     },
     {
      "prompt": "Where are many Greek epigrams collected?",
      "options": [
       "In Homer’s Odyssey",
       "In Smyth’s Grammar",
       "In the Greek Anthology",
       "In the Septuagint"
      ],
      "answer": 2,
      "explain": "The Greek Anthology."
     }
    ]
   }
  },
  {
   "id": "meter-4",
   "title": "The iambic trimeter",
   "body": "<p>Sophocles’ <em lang=\"grc\">Antigone</em> begins ὦ κοινὸν αὐτάδελφον Ἰσμήνης κάρα (“O shared, own-sister head of Ismene,” that is, “Ismene, my own sister”). It is measured <em lang=\"grc\">ὦ κοι νὸν αὐ | τά δελ φον Ἰσ | μή νης κά ρα</em>: three groups of four syllables, each of the pattern x — ᴗ —, in which x stands for a syllable that may be long or short. This is the <strong>iambic trimeter</strong>, the spoken meter of tragedy and comedy, made of three <strong>metra</strong> (measures of two iambs), twelve positions in all. Tragedy resolves a long syllable into two shorts sparingly, whereas comedy does so freely.</p>",
   "qp": {
    "id": "q-grc-me-meter-4",
    "variants": [
     {
      "prompt": "How many positions has an iambic trimeter?",
      "options": [
       "Six, one for each iamb",
       "Twelve",
       "Three",
       "Fifteen"
      ],
      "answer": 1,
      "explain": "Three metra of four positions."
     },
     {
      "prompt": "What does x stand for in x — ᴗ —?",
      "options": [
       "A missing syllable",
       "A pause",
       "A syllable that may be long or short",
       "An accent"
      ],
      "answer": 2,
      "explain": "It is an anceps position."
     },
     {
      "prompt": "Which kind of drama resolves long syllables more freely?",
      "options": [
       "Tragedy",
       "Epic",
       "Lyric",
       "Comedy"
      ],
      "answer": 3,
      "explain": "Tragedy does so sparingly."
     }
    ]
   }
  },
  {
   "id": "meter-5",
   "title": "The sapphic stanza",
   "body": "<p>A line of Sappho reads οἰ μὲν ἰππήων στρότον οἰ δὲ πέσδων (“Some an army of horsemen, others of foot soldiers”; fragment 16.1), measured — ᴗ — x — ᴗ ᴗ — ᴗ — x. The first letter is restored. The verb stands in the next line, which is not taken up here. The <strong>sapphic stanza</strong> has three lines of this pattern and a short fourth line, the <strong>adonean</strong>, — ᴗ ᴗ — x. Sappho wrote in it on Lesbos about 600 BC, and Catullus and Horace took it over into Latin.</p>\n<p>Choral lyric, in the odes of tragedy, uses many other patterns, laid out in a <strong>strophe</strong> and an <strong>antistrophe</strong> of the same shape.</p>",
   "qp": {
    "id": "q-grc-me-meter-5",
    "variants": [
     {
      "prompt": "How many lines of the long pattern has a sapphic stanza?",
      "options": [
       "Four",
       "Two",
       "Three",
       "One"
      ],
      "answer": 2,
      "explain": "Three lines and an adonean."
     },
     {
      "prompt": "Where did Sappho write?",
      "options": [
       "In Athens",
       "On Lesbos",
       "In Sparta",
       "In Alexandria"
      ],
      "answer": 1,
      "explain": "About 600 BC."
     },
     {
      "prompt": "Which Latin poets took over the sapphic stanza?",
      "options": [
       "Catullus and Horace",
       "Virgil and Ovid",
       "Lucretius and Ennius",
       "Plautus and Terence"
      ],
      "answer": 0,
      "explain": "Both wrote sapphics in Latin."
     }
    ]
   }
  }
 ]
};
