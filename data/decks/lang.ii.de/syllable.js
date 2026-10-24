window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.de/syllable"] = {
 "id": "lang.ii.de/syllable",
 "title": "German Syllable, Length, and Stress",
 "sub": "How a German word is divided, which vowels are long, and where the stress falls",
 "sources": "Duden",
 "panels": [
  {
   "id": "syllable-1",
   "title": "The German syllable and vowel length",
   "body": "<p><strong>The German syllable and vowel length.</strong> A German syllable, like an English one, has one vowel or diphthong at its center, and <span lang=\"de\">ei</span>, <span lang=\"de\">au</span>, <span lang=\"de\">eu</span>, and <span lang=\"de\">äu</span> are diphthongs, so <span lang=\"de\">Bau-er</span> (“farmer”) has two syllables. A German vowel is long or short, and the spelling usually shows which. A vowel is long when it is doubled, as in <span lang=\"de\">See</span> (“lake”); when it is followed by a silent <i lang=\"de\">h</i>, as in <span lang=\"de\">Sohn</span> (“son”); when it is written <i lang=\"de\">ie</i>, as in <span lang=\"de\">Liebe</span> (“love”); and usually when one consonant follows it, as in <span lang=\"de\">Tag</span> (“day”). A vowel before a doubled consonant is short, as in <span lang=\"de\">Mann</span> (“man”) and <span lang=\"de\">Bett</span> (“bed”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-1",
    "variants": [
     {
      "prompt": "Is the vowel of <i lang=\"de\">Saal</i> long or short?",
      "options": [
       "Long, because it is doubled",
       "Short, because the word is short",
       "Short, because <i lang=\"de\">l</i> follows",
       "Long, because it is a noun"
      ],
      "answer": 0,
      "explain": "A doubled vowel is long."
     },
     {
      "prompt": "Is the vowel of <i lang=\"de\">Kamm</i> long or short?",
      "options": [
       "Long, because it is stressed",
       "Long, because <i lang=\"de\">a</i> is long",
       "It has no vowel length",
       "Short, before a doubled consonant"
      ],
      "answer": 3,
      "explain": "A doubled consonant marks a short vowel."
     },
     {
      "prompt": "How many syllables has <i lang=\"de\">Eule</i>?",
      "options": [
       "Three, one for each vowel letter",
       "One",
       "Two",
       "Four"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Eu-le</i>; <i lang=\"de\">eu</i> is a diphthong."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "German stress",
   "body": "<p><strong>German stress.</strong> In <span lang=\"de\">SPRE-chen</span> (“to speak”) the stress falls on the first syllable, and in its participle <span lang=\"de\">ge-SPRO-chen</span> (“spoken”) it falls on the second, because <i lang=\"de\">ge-</i> is not part of the stem, the main part of the word without a prefix. German stresses the first syllable of the stem, so it does not follow the Latin law of the penult. The inseparable prefixes <i lang=\"de\">be-</i>, <i lang=\"de\">ge-</i>, <i lang=\"de\">er-</i>, <i lang=\"de\">ver-</i>, and <i lang=\"de\">zer-</i> are never stressed: <span lang=\"de\">ver-STE-hen</span> (“to understand”). A separable prefix, which stands apart from the verb in some forms, takes the stress: <span lang=\"de\">AN-kommen</span> (“to arrive”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-2",
    "variants": [
     {
      "prompt": "Which syllable of <i lang=\"de\">verkaufen</i> is stressed?",
      "options": [
       "<i lang=\"de\">ver-</i>",
       "<i lang=\"de\">-kau-</i>",
       "<i lang=\"de\">-fen</i>",
       "All equally"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Ver-</i> is never stressed."
     },
     {
      "prompt": "Which syllable of <i lang=\"de\">abfahren</i> is stressed?",
      "options": [
       "<i lang=\"de\">-fah-</i>",
       "<i lang=\"de\">-ren</i>",
       "<i lang=\"de\">ab-</i>",
       "All equally"
      ],
      "answer": 2,
      "explain": "A separable prefix takes the stress."
     },
     {
      "prompt": "Which syllable of German words is usually stressed?",
      "options": [
       "The penult, as in Latin",
       "The last syllable",
       "Any syllable",
       "The first syllable of the stem"
      ],
      "answer": 3,
      "explain": "German stresses the stem’s first syllable."
     }
    ]
   }
  },
  {
   "id": "syllable-3",
   "title": "Compounds and borrowed words",
   "body": "<p><strong>Compounds and borrowed words.</strong> A compound is usually stressed on its first part: <span lang=\"de\">HAUS-tür</span> (“front door,” from <span lang=\"de\">Haus</span>, “house,” and <span lang=\"de\">Tür</span>, “door”), <span lang=\"de\">BAHN-hof</span> (“train station”). Many borrowed words keep a stress of their own: verbs in <i lang=\"de\">-ieren</i> are stressed on that ending, as in <span lang=\"de\">stu-DIE-ren</span> (“to study”), and nouns in <i lang=\"de\">-ität</i> and <i lang=\"de\">-ei</i> on the last syllable, as in <span lang=\"de\">U-ni-ver-si-TÄT</span> (“university”) and <span lang=\"de\">Bä-cke-REI</span> (“bakery”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-3",
    "variants": [
     {
      "prompt": "Which part of <i lang=\"de\">Handschuh</i> is stressed?",
      "options": [
       "<i lang=\"de\">-schuh</i>",
       "Both equally",
       "<i lang=\"de\">Hand-</i>",
       "Neither"
      ],
      "answer": 2,
      "explain": "A compound is stressed on its first part."
     },
     {
      "prompt": "Where are verbs in <i lang=\"de\">-ieren</i> stressed?",
      "options": [
       "On the first syllable",
       "On <i lang=\"de\">-ie-</i>",
       "On <i lang=\"de\">-ren</i>",
       "On the prefix"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Ra-SIE-ren</i>."
     },
     {
      "prompt": "Where are nouns in <i lang=\"de\">-ei</i> stressed?",
      "options": [
       "On the last syllable",
       "On the first syllable",
       "On the penult",
       "Nowhere"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Male-REI</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-4",
   "title": "Final devoicing",
   "body": "<p><strong>Final devoicing.</strong> At the end of a word or a syllable, <i lang=\"de\">b</i>, <i lang=\"de\">d</i>, and <i lang=\"de\">g</i> are pronounced as <i lang=\"de\">p</i>, <i lang=\"de\">t</i>, and <i lang=\"de\">k</i>, although the spelling keeps <i lang=\"de\">b</i>, <i lang=\"de\">d</i>, and <i lang=\"de\">g</i>: <span lang=\"de\">Tag</span> ends with the sound <i lang=\"de\">k</i>, and <span lang=\"de\">Hund</span> (“dog”) with <i lang=\"de\">t</i>. The spelling follows the sound of the other forms of the word, in which a vowel follows the consonant: <span lang=\"de\">Tage</span> (“days”), <span lang=\"de\">Hunde</span> (“dogs”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-4",
    "variants": [
     {
      "prompt": "How is the final <i lang=\"de\">d</i> of <i lang=\"de\">Rad</i> pronounced?",
      "options": [
       "As <i lang=\"de\">d</i>",
       "As <i lang=\"de\">s</i>",
       "It is silent",
       "As <i lang=\"de\">t</i>"
      ],
      "answer": 3,
      "explain": "Final <i lang=\"de\">d</i> is devoiced."
     },
     {
      "prompt": "Why is <i lang=\"de\">Rad</i> spelled with <i lang=\"de\">d</i>?",
      "options": [
       "<i lang=\"de\">Räder</i> sounds the <i lang=\"de\">d</i>",
       "It is borrowed from Latin",
       "The <i lang=\"de\">d</i> marks a long vowel",
       "German never writes final <i lang=\"de\">t</i>"
      ],
      "answer": 0,
      "explain": "The spelling follows the other forms."
     },
     {
      "prompt": "Which consonants are devoiced at the end of a syllable?",
      "options": [
       "<i lang=\"de\">p</i>, <i lang=\"de\">t</i>, <i lang=\"de\">k</i>",
       "<i lang=\"de\">b</i>, <i lang=\"de\">d</i>, <i lang=\"de\">g</i>",
       "<i lang=\"de\">l</i>, <i lang=\"de\">m</i>, <i lang=\"de\">n</i>",
       "<i lang=\"de\">s</i> and <i lang=\"de\">z</i>"
      ],
      "answer": 1,
      "explain": "They are pronounced <i lang=\"de\">p</i>, <i lang=\"de\">t</i>, <i lang=\"de\">k</i>."
     }
    ]
   }
  }
 ]
};
