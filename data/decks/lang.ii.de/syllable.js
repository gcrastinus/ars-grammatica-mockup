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
   "body": "<p><strong>The German syllable and vowel length.</strong> A German syllable, like an English one, has one vowel or diphthong at its center, and <span lang=\"de\">ei</span>, <span lang=\"de\">au</span>, <span lang=\"de\">eu</span>, and <span lang=\"de\">äu</span> are diphthongs, so <span lang=\"de\">Bau-er</span> (“farmer”) has two syllables. A German vowel is long or short, and the spelling usually shows which. A vowel is long when it is doubled, as in <span lang=\"de\">See</span> (“lake”); when it is followed by a silent <i>h</i>, as in <span lang=\"de\">Sohn</span> (“son”); when it is written <i>ie</i>, as in <span lang=\"de\">Liebe</span> (“love”); and usually when one consonant follows it, as in <span lang=\"de\">Tag</span> (“day”). A vowel before a doubled consonant is short, as in <span lang=\"de\">Mann</span> (“man”) and <span lang=\"de\">Bett</span> (“bed”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-1",
    "variants": [
     {
      "prompt": "Is the vowel of <i>Saal</i> long or short?",
      "options": [
       "Long, because it is doubled",
       "Short, because the word is short",
       "Short, because <i>l</i> follows",
       "Long, because it is a noun"
      ],
      "answer": 0,
      "explain": "A doubled vowel is long."
     },
     {
      "prompt": "Is the vowel of <i>Kamm</i> long or short?",
      "options": [
       "Long, because it is stressed",
       "Long, because <i>a</i> is long",
       "It has no vowel length",
       "Short, before a doubled consonant"
      ],
      "answer": 3,
      "explain": "A doubled consonant marks a short vowel."
     },
     {
      "prompt": "How many syllables has <i>Eule</i>?",
      "options": [
       "Three, one for each vowel letter",
       "One",
       "Two",
       "Four"
      ],
      "answer": 2,
      "explain": "<i>Eu-le</i>; <i>eu</i> is a diphthong."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "German stress",
   "body": "<p><strong>German stress.</strong> In <span lang=\"de\">SPRE-chen</span> (“to speak”) the stress falls on the first syllable, and in its participle <span lang=\"de\">ge-SPRO-chen</span> (“spoken”) it falls on the second, because <i>ge-</i> is not part of the stem, the main part of the word without a prefix. German stresses the first syllable of the stem, so it does not follow the Latin law of the penult. The inseparable prefixes <i>be-</i>, <i>ge-</i>, <i>er-</i>, <i>ver-</i>, and <i>zer-</i> are never stressed: <span lang=\"de\">ver-STE-hen</span> (“to understand”). A separable prefix, which stands apart from the verb in some forms, takes the stress: <span lang=\"de\">AN-kommen</span> (“to arrive”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-2",
    "variants": [
     {
      "prompt": "Which syllable of <i>verkaufen</i> is stressed?",
      "options": [
       "<i>ver-</i>",
       "<i>-kau-</i>",
       "<i>-fen</i>",
       "All equally"
      ],
      "answer": 1,
      "explain": "<i>Ver-</i> is never stressed."
     },
     {
      "prompt": "Which syllable of <i>abfahren</i> is stressed?",
      "options": [
       "<i>-fah-</i>",
       "<i>-ren</i>",
       "<i>ab-</i>",
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
   "body": "<p><strong>Compounds and borrowed words.</strong> A compound is usually stressed on its first part: <span lang=\"de\">HAUS-tür</span> (“front door,” from <span lang=\"de\">Haus</span>, “house,” and <span lang=\"de\">Tür</span>, “door”), <span lang=\"de\">BAHN-hof</span> (“train station”). Many borrowed words keep a stress of their own: verbs in <i>-ieren</i> are stressed on that ending, as in <span lang=\"de\">stu-DIE-ren</span> (“to study”), and nouns in <i>-ität</i> and <i>-ei</i> on the last syllable, as in <span lang=\"de\">U-ni-ver-si-TÄT</span> (“university”) and <span lang=\"de\">Bä-cke-REI</span> (“bakery”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-3",
    "variants": [
     {
      "prompt": "Which part of <i>Handschuh</i> is stressed?",
      "options": [
       "<i>-schuh</i>",
       "Both equally",
       "<i>Hand-</i>",
       "Neither"
      ],
      "answer": 2,
      "explain": "A compound is stressed on its first part."
     },
     {
      "prompt": "Where are verbs in <i>-ieren</i> stressed?",
      "options": [
       "On the first syllable",
       "On <i>-ie-</i>",
       "On <i>-ren</i>",
       "On the prefix"
      ],
      "answer": 1,
      "explain": "<i>Ra-SIE-ren</i>."
     },
     {
      "prompt": "Where are nouns in <i>-ei</i> stressed?",
      "options": [
       "On the last syllable",
       "On the first syllable",
       "On the penult",
       "Nowhere"
      ],
      "answer": 0,
      "explain": "<i>Male-REI</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-4",
   "title": "Final devoicing",
   "body": "<p><strong>Final devoicing.</strong> At the end of a word or a syllable, <i>b</i>, <i>d</i>, and <i>g</i> are pronounced as <i>p</i>, <i>t</i>, and <i>k</i>, although the spelling keeps <i>b</i>, <i>d</i>, and <i>g</i>: <span lang=\"de\">Tag</span> ends with the sound <i>k</i>, and <span lang=\"de\">Hund</span> (“dog”) with <i>t</i>. The spelling follows the sound of the other forms of the word, in which a vowel follows the consonant: <span lang=\"de\">Tage</span> (“days”), <span lang=\"de\">Hunde</span> (“dogs”).</p>",
   "qp": {
    "id": "q-de-sy-syllable-4",
    "variants": [
     {
      "prompt": "How is the final <i>d</i> of <i>Rad</i> pronounced?",
      "options": [
       "As <i>d</i>",
       "As <i>s</i>",
       "It is silent",
       "As <i>t</i>"
      ],
      "answer": 3,
      "explain": "Final <i>d</i> is devoiced."
     },
     {
      "prompt": "Why is <i>Rad</i> spelled with <i>d</i>?",
      "options": [
       "<i>Räder</i> sounds the <i>d</i>",
       "It is borrowed from Latin",
       "The <i>d</i> marks a long vowel",
       "German never writes final <i>t</i>"
      ],
      "answer": 0,
      "explain": "The spelling follows the other forms."
     },
     {
      "prompt": "Which consonants are devoiced at the end of a syllable?",
      "options": [
       "<i>p</i>, <i>t</i>, <i>k</i>",
       "<i>b</i>, <i>d</i>, <i>g</i>",
       "<i>l</i>, <i>m</i>, <i>n</i>",
       "<i>s</i> and <i>z</i>"
      ],
      "answer": 1,
      "explain": "They are pronounced <i>p</i>, <i>t</i>, <i>k</i>."
     }
    ]
   }
  }
 ]
};
