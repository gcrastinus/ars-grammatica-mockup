window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.fr/syllable"] = {
 "id": "lang.ii.fr/syllable",
 "title": "French Syllable and Stress",
 "sub": "How a French word is divided and where the beat falls",
 "sources": "Lawless; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "syllable-1",
   "title": "The French syllable",
   "body": "<p><strong>The French syllable.</strong> <span lang=\"fr\">Beau</span> (“beautiful”) has three vowel letters but one syllable, and <span lang=\"fr\">maison</span> (“house”) has two syllables, <span lang=\"fr\">mai-son</span>, because <i lang=\"fr\">eau</i>, <i lang=\"fr\">ou</i>, and <i lang=\"fr\">ai</i> each write a single vowel sound. A French syllable, like an English one, has one sounded vowel, and several written letters often make that one vowel. A final <i lang=\"fr\">e</i> that is not sounded, the mute <i lang=\"fr\">e</i> (<span lang=\"fr\">e muet</span>), does not make a syllable in ordinary speech, so <span lang=\"fr\">table</span> (“table”) is one syllable when it is spoken. In verse, however, the mute <i lang=\"fr\">e</i> is counted before a consonant and not before a vowel.</p>",
   "qp": {
    "id": "q-fr-sy-syllable-1",
    "variants": [
     {
      "prompt": "How many syllables has <i lang=\"fr\">bateau</i>?",
      "options": [
       "Three, counting <i lang=\"fr\">e</i> and <i lang=\"fr\">a</i> and <i lang=\"fr\">u</i>",
       "One",
       "Four",
       "Two"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Ba-teau</i>; <i lang=\"fr\">eau</i> is one sound."
     },
     {
      "prompt": "Is the final mute <i lang=\"fr\">e</i> of <i lang=\"fr\">porte</i> a syllable in ordinary speech?",
      "options": [
       "No",
       "Yes, always",
       "Only before a consonant",
       "Only at the start of a sentence"
      ],
      "answer": 0,
      "explain": "In ordinary speech it is not sounded."
     },
     {
      "prompt": "When is a mute <i lang=\"fr\">e</i> counted in verse?",
      "options": [
       "Before a vowel",
       "Before a consonant",
       "At the end of the line",
       "Never"
      ],
      "answer": 1,
      "explain": "It is elided before a vowel and not counted at the line end."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "Elision and liaison",
   "body": "<p><strong>Elision and liaison.</strong> French writes <span lang=\"fr\">l’homme</span> (“the man”), not <i lang=\"fr\">le homme</i>; <span lang=\"fr\">j’ai</span> (“I have”), not <i lang=\"fr\">je ai</i>; and <span lang=\"fr\">qu’il</span> (“that he”), not <i lang=\"fr\">que il</i>. A few short words drop their final vowel before a word that begins with a vowel or a mute <i lang=\"fr\">h</i>, and the spelling shows the loss; this is <strong>elision</strong>. In <span lang=\"fr\">les amis</span> (“the friends”) the <i lang=\"fr\">s</i> of <span lang=\"fr\">les</span>, which is silent before a pause, is sounded as <i lang=\"fr\">z</i> and joined to the next word; this is <strong>liaison</strong>. A word that begins with an aspirated <i lang=\"fr\">h</i>, such as <span lang=\"fr\">héros</span> (“hero”), allows neither, so we say <span lang=\"fr\">le héros</span> and <span lang=\"fr\">les héros</span> with no <i lang=\"fr\">z</i>.</p>",
   "qp": {
    "id": "q-fr-sy-syllable-2",
    "variants": [
     {
      "prompt": "What is elision?",
      "options": [
       "Sounding a final consonant before a vowel",
       "Stressing the last syllable",
       "Dropping a final vowel before a vowel",
       "Lengthening a vowel"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">L’arbre</i>, <i lang=\"fr\">j’arrive</i>."
     },
     {
      "prompt": "What is liaison?",
      "options": [
       "Dropping a final vowel before another vowel",
       "Sounding a final consonant before a vowel",
       "A pause between words",
       "A change of accent"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Les_arbres</i> with <i lang=\"fr\">z</i>."
     },
     {
      "prompt": "What does an aspirated <i lang=\"fr\">h</i> forbid?",
      "options": [
       "Elision and liaison",
       "The plural",
       "The definite article before it",
       "The accent"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Le hamac</i>, <i lang=\"fr\">les hamacs</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-3",
   "title": "French stress",
   "body": "<p><strong>French stress.</strong> <span lang=\"fr\">Parler</span> (“to speak”), said alone, is stressed on its last syllable, <i lang=\"fr\">-ler</i>, but in <span lang=\"fr\">parler au roi</span> (“to speak to the king”) the beat falls on <span lang=\"fr\">roi</span>. In French the beat falls on the last sounded syllable of the rhythmic group, which is often the end of a phrase rather than of each word. So French has no stress fixed within the word, and there is no penult to measure, as there is in Latin.</p>",
   "qp": {
    "id": "q-fr-sy-syllable-3",
    "variants": [
     {
      "prompt": "Where does the beat fall in French?",
      "options": [
       "On the first syllable of each word",
       "On the last sounded syllable of a group",
       "On the penult",
       "On every syllable equally"
      ],
      "answer": 1,
      "explain": "French stress belongs to the group."
     },
     {
      "prompt": "In <i lang=\"fr\">un livre intéressant</i>, which syllable carries the beat?",
      "options": [
       "<i lang=\"fr\">li-</i>",
       "<i lang=\"fr\">un</i>",
       "<i lang=\"fr\">-sant</i>",
       "<i lang=\"fr\">-té-</i>"
      ],
      "answer": 2,
      "explain": "The last sounded syllable of the group."
     },
     {
      "prompt": "Is there a penult rule for French stress, as in Latin?",
      "options": [
       "Yes, in every word",
       "Only in verbs",
       "Only in verse",
       "No"
      ],
      "answer": 3,
      "explain": "French stress is not fixed within the word."
     }
    ]
   }
  },
  {
   "id": "syllable-4",
   "title": "The accent marks are not stress",
   "body": "<p><strong>The accent marks are not stress.</strong> The acute accent in <span lang=\"fr\">été</span> (“summer”) marks a closed <i lang=\"fr\">e</i>, and the grave accent in <span lang=\"fr\">mère</span> (“mother”) marks an open one; neither marks the beat. The grave accent on <span lang=\"fr\">à</span> (“to”) and <span lang=\"fr\">où</span> (“where”) distinguishes these words from <span lang=\"fr\">a</span> (“has”) and <span lang=\"fr\">ou</span> (“or”). The circumflex often stands where an <i lang=\"fr\">s</i> was once written, as in <span lang=\"fr\">forêt</span> beside English “forest.” So the written accents of French belong to the spelling, and they do not show where the stress falls.</p>",
   "qp": {
    "id": "q-fr-sy-syllable-4",
    "variants": [
     {
      "prompt": "What does the grave accent on <i lang=\"fr\">là</i> do?",
      "options": [
       "It distinguishes <i lang=\"fr\">là</i> from <i lang=\"fr\">la</i>",
       "It marks the stress",
       "It marks a long vowel",
       "It marks a silent letter"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Là</i> means “there.”"
     },
     {
      "prompt": "What does the circumflex in <i lang=\"fr\">tête</i> often mark?",
      "options": [
       "The stress of the word",
       "A short vowel",
       "The feminine",
       "An <i lang=\"fr\">s</i> once written after the vowel"
      ],
      "answer": 3,
      "explain": "Compare Old French <i lang=\"fr\">teste</i>."
     },
     {
      "prompt": "Do French accent marks show where the stress falls?",
      "options": [
       "Yes, always",
       "Only the acute",
       "No",
       "Only in verse"
      ],
      "answer": 2,
      "explain": "They belong to the spelling."
     }
    ]
   }
  },
  {
   "id": "syllable-5",
   "title": "The cedilla",
   "body": "<p><strong>The cedilla.</strong> In <span lang=\"fr\">français</span> (“French”) and <span lang=\"fr\">leçon</span> (“lesson”) the <i lang=\"fr\">c</i> is pronounced <i lang=\"fr\">s</i>, although it stands before <i lang=\"fr\">a</i> or <i lang=\"fr\">o</i>, where a <i lang=\"fr\">c</i> is otherwise pronounced <i lang=\"fr\">k</i>. The mark under it, the <strong>cedilla</strong>, shows this sound before <i lang=\"fr\">a</i>, <i lang=\"fr\">o</i>, or <i lang=\"fr\">u</i>. French, then, uses the accents and the cedilla as parts of the written word, whereas Latin, as we print it, uses the macron only to mark quantity.</p>",
   "qp": {
    "id": "q-fr-sy-syllable-5",
    "variants": [
     {
      "prompt": "What does the cedilla in <i lang=\"fr\">reçu</i> show?",
      "options": [
       "That <i lang=\"fr\">u</i> is long",
       "That the word is stressed on <i lang=\"fr\">-çu</i>",
       "That the <i lang=\"fr\">c</i> is silent",
       "That <i lang=\"fr\">c</i> sounds <i lang=\"fr\">s</i> before <i lang=\"fr\">u</i>"
      ],
      "answer": 3,
      "explain": "Before <i lang=\"fr\">a</i>, <i lang=\"fr\">o</i>, <i lang=\"fr\">u</i> the cedilla keeps the sound <i lang=\"fr\">s</i>."
     },
     {
      "prompt": "Before which vowels is a cedilla used?",
      "options": [
       "<i lang=\"fr\">a</i>, <i lang=\"fr\">o</i>, <i lang=\"fr\">u</i>",
       "<i lang=\"fr\">e</i>, <i lang=\"fr\">i</i>",
       "All vowels",
       "None"
      ],
      "answer": 0,
      "explain": "Before <i lang=\"fr\">e</i> and <i lang=\"fr\">i</i>, <i lang=\"fr\">c</i> already sounds <i lang=\"fr\">s</i>."
     },
     {
      "prompt": "How does Latin, as we print it, mark quantity?",
      "options": [
       "With the cedilla",
       "With the macron",
       "With the grave accent",
       "It does not"
      ],
      "answer": 1,
      "explain": "French uses accents as parts of the word."
     }
    ]
   }
  }
 ]
};
