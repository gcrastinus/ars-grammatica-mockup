window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.es/syllable"] = {
 "id": "lang.ii.es/syllable",
 "title": "Spanish Syllable and Stress",
 "sub": "How a Spanish word is divided, where the stress falls, and when the stress is written",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Ortografía de la lengua española</i> (1999), section 4.5, and the presentation of the <i lang=\"es\">Ortografía</i> of 2010 by Amparo Morales for the Academies (2011)",
 "panels": [
  {
   "id": "syllable-1",
   "title": "Vowels, diphthongs, and hiatus",
   "body": "<p>Every Spanish syllable has one vowel or diphthong at its center. Spanish has five vowels. Three are called strong, <i lang=\"es\">a</i>, <i lang=\"es\">e</i>, and <i lang=\"es\">o</i>, and two weak, <i lang=\"es\">i</i> and <i lang=\"es\">u</i>. A weak vowel beside another vowel, unstressed, makes a diphthong with it in one syllable: <i lang=\"es\">bue-no</i> (“good”), <i lang=\"es\">ai-re</i> (“air”), <i lang=\"es\">ciu-dad</i> (“city”). Two strong vowels side by side are a hiatus and stand in separate syllables: <i lang=\"es\">po-e-ta</i> (“poet”), <i lang=\"es\">le-er</i> (“to read”). When the weak vowel is stressed, the diphthong is broken and the stress is written: <i lang=\"es\">dí-a</i> (“day”), <i lang=\"es\">pa-ís</i> (“country”), <i lang=\"es\">ba-úl</i> (“trunk”).</p>",
   "qp": {
    "id": "q-es-syllable-1",
    "variants": [
     {
      "prompt": "How many syllables has <i lang=\"es\">nieve</i> (“snow”)?",
      "options": [
       "Three",
       "One",
       "Two",
       "Four"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Nie-ve</i>; <i lang=\"es\">ie</i> is a diphthong."
     },
     {
      "prompt": "How many syllables has <i lang=\"es\">oeste</i> (“west”)?",
      "options": [
       "Two",
       "Three",
       "One",
       "Four"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">O-es-te</i>; <i lang=\"es\">o</i> and <i lang=\"es\">e</i> are both strong, so they are a hiatus."
     },
     {
      "prompt": "Why is <i lang=\"es\">río</i> (“river”) two syllables?",
      "options": [
       "Every vowel is a syllable",
       "<i lang=\"es\">o</i> is a weak vowel",
       "The stressed <i lang=\"es\">í</i> breaks the diphthong",
       "The word ends in a vowel"
      ],
      "answer": 2,
      "explain": "A written accent on a weak vowel makes a hiatus: <i lang=\"es\">rí-o</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "Dividing consonants",
   "body": "<p>One consonant between vowels goes with the following vowel: <i lang=\"es\">ca-sa</i> (“house”). The letters <i lang=\"es\">ch</i>, <i lang=\"es\">ll</i>, and <i lang=\"es\">rr</i> each write one sound and are never divided: <i lang=\"es\">co-che</i> (“car”), <i lang=\"es\">ca-lle</i> (“street”), <i lang=\"es\">pe-rro</i> (“dog”). A consonant followed by <i lang=\"es\">l</i> or <i lang=\"es\">r</i> usually begins a syllable with it, as in <i lang=\"es\">ha-blar</i> (“to speak”) and <i lang=\"es\">o-tro</i> (“other”). Other pairs of consonants are divided: <i lang=\"es\">ar-te</i> (“art”), <i lang=\"es\">cam-po</i> (“field”). Of three consonants, the last one or two go with the following vowel: <i lang=\"es\">ins-tan-te</i> (“instant”), <i lang=\"es\">com-pra</i> (“purchase”).</p>",
   "qp": {
    "id": "q-es-syllable-2",
    "variants": [
     {
      "prompt": "How is <i lang=\"es\">noche</i> (“night”) divided?",
      "options": [
       "<i lang=\"es\">noc-he</i>",
       "<i lang=\"es\">n-oche</i>",
       "<i lang=\"es\">noch-e</i>",
       "<i lang=\"es\">no-che</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Ch</i> is never divided."
     },
     {
      "prompt": "How is <i lang=\"es\">libro</i> (“book”) divided?",
      "options": [
       "<i lang=\"es\">lib-ro</i>",
       "<i lang=\"es\">libr-o</i>",
       "<i lang=\"es\">li-bro</i>",
       "<i lang=\"es\">l-ibro</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Br</i> begins a syllable together."
     },
     {
      "prompt": "How is <i lang=\"es\">carta</i> (“letter”) divided?",
      "options": [
       "<i lang=\"es\">ca-rta</i>",
       "<i lang=\"es\">cart-a</i>",
       "<i lang=\"es\">car-ta</i>",
       "<i lang=\"es\">c-arta</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">R</i> and <i lang=\"es\">t</i> are divided."
     }
    ]
   }
  },
  {
   "id": "syllable-3",
   "title": "Where the stress falls",
   "body": "<p>Every Spanish word of more than one syllable has one stressed syllable, and two simple rules tell where it falls. A word that ends in a vowel, in <i lang=\"es\">n</i>, or in <i lang=\"es\">s</i> is stressed on the next to last syllable: <i lang=\"es\">CA-sa</i> (“house”), <i lang=\"es\">HA-blan</i> (“they speak”), <i lang=\"es\">LU-nes</i> (“Monday”). A word that ends in any other consonant is stressed on the last syllable: <i lang=\"es\">ha-BLAR</i> (“to speak”), <i lang=\"es\">ciu-DAD</i> (“city”), <i lang=\"es\">re-LOJ</i> (“clock”). Spanish grammar calls a word stressed on the last syllable <i lang=\"es\">aguda</i>, one stressed on the next to last <i lang=\"es\">llana</i> or <i lang=\"es\">grave</i>, and one stressed on the third from last <i lang=\"es\">esdrújula</i>.</p>",
   "qp": {
    "id": "q-es-syllable-3",
    "variants": [
     {
      "prompt": "Where is <i lang=\"es\">comen</i> (“they eat”) stressed?",
      "options": [
       "<i lang=\"es\">-men</i>",
       "On both",
       "On neither",
       "<i lang=\"es\">co-</i>"
      ],
      "answer": 3,
      "explain": "It ends in <i lang=\"es\">n</i>, so the stress falls on the next to last syllable."
     },
     {
      "prompt": "Where is <i lang=\"es\">papel</i> (“paper”) stressed?",
      "options": [
       "<i lang=\"es\">pa-</i>",
       "On both",
       "On neither",
       "<i lang=\"es\">-pel</i>"
      ],
      "answer": 3,
      "explain": "It ends in <i lang=\"es\">l</i>, so the stress falls on the last syllable."
     },
     {
      "prompt": "What is a word stressed on the third from last syllable called?",
      "options": [
       "<i lang=\"es\">esdrújula</i>",
       "<i lang=\"es\">aguda</i>",
       "<i lang=\"es\">llana</i>",
       "<i lang=\"es\">grave</i>"
      ],
      "answer": 0,
      "explain": "A word stressed on the third from last syllable, like <i lang=\"es\">música</i>, is an <i lang=\"es\">esdrújula</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-4",
   "title": "The written accent",
   "body": "<p>When a word breaks the two rules of stress, the stressed vowel carries a written accent, called <i lang=\"es\">tilde</i>, and it is always the acute accent. So <i lang=\"es\">café</i> (“coffee”) and <i lang=\"es\">canción</i> (“song”) end in a vowel and in <i lang=\"es\">n</i> but are stressed on the last syllable; <i lang=\"es\">árbol</i> (“tree”) and <i lang=\"es\">lápiz</i> (“pencil”) end in other consonants but are stressed on the next to last. Every <i lang=\"es\">esdrújula</i> carries the accent: <i lang=\"es\">música</i>, <i lang=\"es\">rápido</i> (“fast”), <i lang=\"es\">teléfono</i>. The accent can come or go in the plural, because the plural adds a syllable: <i lang=\"es\">canción</i> but <i lang=\"es\">canciones</i>, <i lang=\"es\">joven</i> (“young”) but <i lang=\"es\">jóvenes</i>.</p>",
   "qp": {
    "id": "q-es-syllable-4",
    "variants": [
     {
      "prompt": "Which needs a written accent: <i lang=\"es\">arbol</i>, <i lang=\"es\">mesa</i>, <i lang=\"es\">comer</i>, or <i lang=\"es\">ciudad</i>?",
      "options": [
       "<i lang=\"es\">mesa</i>",
       "<i lang=\"es\">comer</i>",
       "<i lang=\"es\">ciudad</i>",
       "<i lang=\"es\">arbol</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Árbol</i> ends in <i lang=\"es\">l</i> but is stressed on the first syllable."
     },
     {
      "prompt": "Why does <i lang=\"es\">café</i> have an accent?",
      "options": [
       "It ends in a vowel but is stressed on the last syllable",
       "It is a borrowed word",
       "It has two syllables",
       "The <i lang=\"es\">e</i> is long"
      ],
      "answer": 0,
      "explain": "A word ending in a vowel is normally stressed on the next to last syllable."
     },
     {
      "prompt": "What is the plural of <i lang=\"es\">región</i> (“region”)?",
      "options": [
       "<i lang=\"es\">regiones</i>",
       "<i lang=\"es\">regiónes</i>",
       "<i lang=\"es\">régiones</i>",
       "<i lang=\"es\">regións</i>"
      ],
      "answer": 0,
      "explain": "The plural <i lang=\"es\">re-gio-nes</i> is stressed on the next to last syllable and ends in <i lang=\"es\">s</i>, so it needs no accent."
     }
    ]
   }
  },
  {
   "id": "syllable-5",
   "title": "One syllable words and the accent of meaning",
   "body": "<p>A word of one syllable takes no written accent: <i lang=\"es\">fue</i> (“was”), <i lang=\"es\">dio</i> (“gave”), <i lang=\"es\">pie</i> (“foot”). But a few short words carry an accent to tell them from another word spelled the same way, an accent the Academy calls <i lang=\"es\">tilde diacrítica</i>: <i lang=\"es\">tú</i> (“you”) and <i lang=\"es\">tu</i> (“your”), <i lang=\"es\">él</i> (“he”) and <i lang=\"es\">el</i> (“the”), <i lang=\"es\">mí</i> (“me”) and <i lang=\"es\">mi</i> (“my”), <i lang=\"es\">sí</i> (“yes”) and <i lang=\"es\">si</i> (“if”), <i lang=\"es\">té</i> (“tea”) and <i lang=\"es\">te</i> (“you,” as object), <i lang=\"es\">más</i> (“more”) and <i lang=\"es\">mas</i> (“but”). The question words carry the accent in questions and exclamations: <i lang=\"es\">qué</i>, <i lang=\"es\">quién</i>, <i lang=\"es\">cómo</i>, <i lang=\"es\">dónde</i>, <i lang=\"es\">cuándo</i>, <i lang=\"es\">cuánto</i>, <i lang=\"es\">cuál</i>. So <i lang=\"es\">¿Qué quieres?</i> (“What do you want?”) but <i lang=\"es\">Sé que vienes</i> (“I know that you are coming”).</p>",
   "qp": {
    "id": "q-es-syllable-5",
    "variants": [
     {
      "prompt": "What does <i lang=\"es\">tu</i> without an accent mean?",
      "options": [
       "“you”",
       "“two”",
       "“yes”",
       "“your”"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Tú</i> is “you”; <i lang=\"es\">tu</i> is “your.”"
     },
     {
      "prompt": "Which is correct for “Yes, I want it”?",
      "options": [
       "<i lang=\"es\">Sí, lo quiero.</i>",
       "<i lang=\"es\">Si, lo quiero.</i>",
       "<i lang=\"es\">Sí, ló quiero.</i>",
       "<i lang=\"es\">Si, lo quíero.</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"es\">Sí</i> meaning “yes” carries the accent."
     },
     {
      "prompt": "Why does <i lang=\"es\">vio</i> (“saw”) carry no accent?",
      "options": [
       "It is a verb",
       "It has one syllable",
       "It ends in a vowel",
       "The accent is optional"
      ],
      "answer": 1,
      "explain": "Words of one syllable take no accent unless it tells two words apart."
     }
    ]
   }
  }
 ]
};
