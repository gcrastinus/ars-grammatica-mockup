window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.es/meter"] = {
 "id": "lang.ii.es/meter",
 "title": "Spanish Meter",
 "sub": "Counting syllables to the last stress, synalepha, the line of eight syllables, the line of eleven, and rhyme",
 "sources": "Felipe Robles Dégano, <i lang=\"es\">Ortología clásica de la lengua castellana</i> (1905), for the count of syllables, synalepha, assonance, and the alexandrine; Tomás Navarro Tomás, introduction to <i lang=\"es\">Garcilaso, Obras</i> (Clásicos Castellanos; Madrid, 1911), p. XIII. The lines are counted by the course. Navarro Tomás, <i lang=\"es\">Métrica española</i>, and the Academy’s <i lang=\"es\">Ortografía</i> of 2010 were not read",
 "panels": [
  {
   "id": "meter-1",
   "title": "Counting syllables",
   "body": "<p><strong>Counting syllables.</strong> Spanish verse is measured by the number of its syllables, not by long and short syllables as in Latin. The count is fixed by the last stressed syllable of the line. If the last word is stressed on the next to last syllable, as most Spanish words are, the syllables are counted as they are: <i lang=\"es\">Ver-de-que-te-quie-ro-ver-de</i> (Lorca) has eight. If the last word is stressed on its last syllable, one is added: <i lang=\"es\">el-ca-mi-no y-na-da-más</i> (Machado) has seven written syllables and counts as eight. If the last word is stressed on the third from last, one is taken away.</p>",
   "qp": {
    "id": "q-es-meter-1",
    "variants": [
     {
      "prompt": "A line ends in <i lang=\"es\">corazón</i>. How is it counted?",
      "options": [
       "One syllable is taken away",
       "It is counted as written",
       "One syllable is added",
       "Two syllables are added"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Corazón</i> is stressed on its last syllable."
     },
     {
      "prompt": "A line ends in <i lang=\"es\">lágrimas</i> (“tears”). How is it counted?",
      "options": [
       "One syllable is added",
       "One syllable is taken away",
       "It is counted as written",
       "Two syllables are taken away"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Lágrimas</i> is stressed on the third from last syllable."
     },
     {
      "prompt": "What fixes the count of a Spanish line?",
      "options": [
       "Its long and short syllables",
       "Its first word",
       "Its last stressed syllable",
       "Its number of words"
      ],
      "answer": 2,
      "explain": "The count runs to the last stress, and one more syllable."
     }
    ]
   }
  },
  {
   "id": "meter-2",
   "title": "Synalepha",
   "body": "<p><strong>Synalepha.</strong> When a word ends in a vowel and the next begins with a vowel, the two vowels are said together in one syllable of the meter. This joining is called synalepha, in Spanish <i lang=\"es\">sinalefa</i>. Because <i lang=\"es\">h</i> is silent, it does not stop it: in Machado’s <i lang=\"es\">se hace camino al andar</i> the vowels of <i lang=\"es\">se hace</i> are joined, and those of <i lang=\"es\">camino al</i>, so the line has seven syllables, in order <i lang=\"es\">seha</i>, <i lang=\"es\">ce</i>, <i lang=\"es\">ca</i>, <i lang=\"es\">mi</i>, <i lang=\"es\">noa</i>, <i lang=\"es\">lan</i>, <i lang=\"es\">dar</i>, and it counts as eight with the final stress of <i lang=\"es\">andar</i>. A consonant between the words prevents synalepha: <i lang=\"es\">las oscuras</i> keeps both its syllables.</p>",
   "qp": {
    "id": "q-es-meter-2",
    "variants": [
     {
      "prompt": "What is synalepha?",
      "options": [
       "Dropping a final consonant",
       "Stressing the last syllable",
       "Rhyming the vowels only",
       "Two vowels of two words said in one syllable"
      ],
      "answer": 3,
      "explain": "The final vowel of one word joins the first vowel of the next."
     },
     {
      "prompt": "Is there synalepha in <i lang=\"es\">mi alma</i> (“my soul”)?",
      "options": [
       "No, it counts three",
       "Only in the plural",
       "Yes, <i lang=\"es\">mi al-ma</i> counts two",
       "Only at the end of a line"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">I</i> and <i lang=\"es\">a</i> are joined."
     },
     {
      "prompt": "Why can <i lang=\"es\">de hoy</i> be joined in one syllable?",
      "options": [
       "<i lang=\"es\">de</i> is stressed",
       "Both words are short",
       "The <i lang=\"es\">h</i> is silent",
       "<i lang=\"es\">oy</i> is a diphthong"
      ],
      "answer": 2,
      "explain": "A silent <i lang=\"es\">h</i> does not stop synalepha."
     }
    ]
   }
  },
  {
   "id": "meter-3",
   "title": "The line of eight syllables",
   "body": "<p><strong>The line of eight syllables.</strong> The <i lang=\"es\">octosílabo</i> is the line of eight syllables. It is the line of the <i lang=\"es\">romances</i>, the old ballads, which rhyme by assonance on the even lines, as in the ballad of the prisoner: <i lang=\"es\">Que por mayo era, por mayo</i> (with synalepha in <i lang=\"es\">mayo era</i>). Lorca wrote in it, as in <i lang=\"es\">Verde que te quiero verde. / Verde viento. Verdes ramas.</i>, and so did Machado in <i lang=\"es\">se hace camino al andar</i>.</p>",
   "qp": {
    "id": "q-es-meter-3",
    "variants": [
     {
      "prompt": "Which lines rhyme in a <i lang=\"es\">romance</i>?",
      "options": [
       "Every line, fully",
       "The odd lines only",
       "No lines",
       "The even lines, by assonance"
      ],
      "answer": 3,
      "explain": "A <i lang=\"es\">romance</i> rhymes by assonance on the even lines."
     },
     {
      "prompt": "How many syllables has an <i lang=\"es\">octosílabo</i>?",
      "options": [
       "Seven",
       "Eleven",
       "Fourteen",
       "Eight"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Octo-</i> is Latin for “eight.”"
     },
     {
      "prompt": "Which is the usual line of the Spanish ballads?",
      "options": [
       "The line of eight syllables",
       "The line of eleven syllables",
       "The line of fourteen syllables",
       "The Latin hexameter"
      ],
      "answer": 0,
      "explain": "The <i lang=\"es\">octosílabo</i> of the ballads."
     }
    ]
   }
  },
  {
   "id": "meter-4",
   "title": "The line of eleven syllables",
   "body": "<p><strong>The line of eleven syllables.</strong> The <i lang=\"es\">endecasílabo</i>, the line of eleven syllables, came into Spanish from Italian poetry in the sixteenth century. Tomás Navarro Tomás writes in the introduction to his edition of Garcilaso (Clásicos Castellanos, 1911, p. XIII) that Italian metrics, scarcely imported by Boscán, found in Garcilaso a happy defender, and he calls Acuña, Mendoza, and Boscán <i lang=\"es\">primeros adalides del verso endecasílabo</i>, “the first champions of the line of eleven syllables.” It is the line of the sonnet, fourteen lines of eleven syllables. The opening of Garcilaso’s first eclogue counts eleven: <i lang=\"es\">El-dul-ce-la-men-tar-de-dos-pas-to-res</i>. The <i lang=\"es\">alejandrino</i>, the line of fourteen syllables, is divided into two halves of seven, which Robles Dégano describes as two iambic heptasyllables; his first examples are lines of Berceo. Rubén Darío’s <i lang=\"es\">Sonatina</i> is written in it: <i lang=\"es\">La princesa está triste... ¿qué tendrá la princesa?</i></p>",
   "qp": {
    "id": "q-es-meter-4",
    "variants": [
     {
      "prompt": "Where did the line of eleven syllables come from?",
      "options": [
       "France",
       "Latin hexameter",
       "The old ballads",
       "Italy"
      ],
      "answer": 3,
      "explain": "Boscán and Garcilaso brought it from Italy."
     },
     {
      "prompt": "How many lines has a sonnet?",
      "options": [
       "Fourteen",
       "Eleven",
       "Eight",
       "Twelve"
      ],
      "answer": 0,
      "explain": "Fourteen lines of eleven syllables."
     },
     {
      "prompt": "How is the <i lang=\"es\">alejandrino</i> divided?",
      "options": [
       "Into two halves of seven",
       "Into two halves of eight",
       "Into three parts",
       "It is not divided"
      ],
      "answer": 0,
      "explain": "Fourteen syllables, seven and seven."
     }
    ]
   }
  },
  {
   "id": "meter-5",
   "title": "Rhyme",
   "body": "<p><strong>Rhyme.</strong> Spanish has two kinds of rhyme, both counted from the last stressed vowel of the line. In full rhyme, <i lang=\"es\">rima consonante</i>, every sound from that vowel on is the same: <i lang=\"es\">amores</i> and <i lang=\"es\">flores</i>, <i lang=\"es\">canción</i> and <i lang=\"es\">corazón</i>. In assonance, <i lang=\"es\">rima asonante</i>, only the vowels are the same: <i lang=\"es\">casa</i> and <i lang=\"es\">llama</i> share <i lang=\"es\">a</i> and <i lang=\"es\">a</i>, and <i lang=\"es\">vida</i> and <i lang=\"es\">fría</i> share <i lang=\"es\">i</i> and <i lang=\"es\">a</i>. Assonance is the rhyme of the ballads.</p>",
   "qp": {
    "id": "q-es-meter-5",
    "variants": [
     {
      "prompt": "What kind of rhyme do <i lang=\"es\">amores</i> and <i lang=\"es\">flores</i> make?",
      "options": [
       "Assonance",
       "No rhyme",
       "Synalepha",
       "Full rhyme"
      ],
      "answer": 3,
      "explain": "Every sound from the stressed <i lang=\"es\">o</i> is the same."
     },
     {
      "prompt": "What kind of rhyme do <i lang=\"es\">casa</i> and <i lang=\"es\">llama</i> make?",
      "options": [
       "Assonance",
       "Full rhyme",
       "No rhyme",
       "Synalepha"
      ],
      "answer": 0,
      "explain": "Only the vowels, <i lang=\"es\">a</i> and <i lang=\"es\">a</i>, are the same."
     },
     {
      "prompt": "From where is rhyme counted?",
      "options": [
       "The first syllable",
       "The last stressed vowel",
       "The last consonant",
       "The middle of the line"
      ],
      "answer": 1,
      "explain": "Both kinds count from the last stressed vowel."
     }
    ]
   }
  }
 ]
};
