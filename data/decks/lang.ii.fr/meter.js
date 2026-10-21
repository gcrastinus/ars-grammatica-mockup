window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.fr/meter"] = {
 "id": "lang.ii.fr/meter",
 "title": "French Meter",
 "sub": "Counting syllables: the mute e, the alexandrine, the octosyllable, and the short lines",
 "sources": "Larousse; the translation of the line of Baudelaire is the course’s own plain translation",
 "panels": [
  {
   "id": "meter-1",
   "title": "Counting Syllables",
   "body": "<p><strong>Counting syllables.</strong> <em>Une belle nuit</em> (“a beautiful night”) is counted in verse as five syllables, <em>u-ne | bel-le | nuit</em>, because the mute <em>e</em> of <em>une</em> and of <em>belle</em> stands before a consonant. <em>Une heure</em> (“an hour”) is counted as two, <em>u|n(e) heu|re</em>, because the <em>e</em> of <em>une</em> is elided before a vowel and the <em>e</em> of <em>heure</em> stands at the end. French verse counts syllables, not stresses and not quantities. The only fixed stress falls on the last sounded syllable of a group, and so on the end of the line, where the <strong>rhyme</strong> is.</p>\n<p>So the <strong>mute <em>e</em></strong> (<em>e muet</em>) counts as a syllable before a consonant, is elided before a vowel, and is never counted at the end of the line, where it makes a <strong>feminine rhyme</strong>.</p>",
   "qp": {
    "id": "q-fr-me-meter-1",
    "variants": [
     {
      "prompt": "What does French verse count?",
      "options": [
       "Stresses",
       "Long and short syllables",
       "Syllables",
       "Words"
      ],
      "answer": 2,
      "explain": "Not stresses and not quantities."
     },
     {
      "prompt": "How many syllables does <em>petite fille</em> count in verse before a consonant?",
      "options": [
       "Three",
       "Five",
       "Four",
       "Six"
      ],
      "answer": 1,
      "explain": "<em>Pe-ti-te fil-le</em>: each mute <em>e</em> counts before a consonant."
     },
     {
      "prompt": "Is the final mute <em>e</em> of a line counted?",
      "options": [
       "No",
       "Yes",
       "Only in the alexandrine",
       "Only before a vowel"
      ],
      "answer": 0,
      "explain": "It makes a feminine rhyme."
     }
    ]
   }
  },
  {
   "id": "meter-2",
   "title": "Diaeresis and Synaeresis",
   "body": "<p><strong>Diaeresis and synaeresis.</strong> Two vowels side by side in a word may be counted as one syllable or as two, as custom fixes for each word and as the poet chooses. Counting them as one is <strong>synaeresis</strong> (French <em>synérèse</em>), as in <em>pied</em> (“foot”) and, usually, <em>hier</em> (“yesterday”). Counting them as two is <strong>diaeresis</strong> (French <em>diérèse</em>): in classical verse <em>lion</em> (“lion”) is two syllables, <em>li-on</em>, and <em>passion</em> is three, <em>pas-si-on</em>. <em>Nuit</em> (“night”) is one syllable, but its vowels make an ordinary diphthong, so the poet has no choice to make there.</p>",
   "qp": {
    "id": "q-fr-me-meter-2",
    "variants": [
     {
      "prompt": "What is synaeresis?",
      "options": [
       "Counting two vowels as two syllables",
       "Dropping a final vowel",
       "A pause in the line",
       "Counting two vowels as one syllable"
      ],
      "answer": 3,
      "explain": "As in <em>pied</em>."
     },
     {
      "prompt": "What is diaeresis in French verse?",
      "options": [
       "Counting two vowels as two syllables",
       "Counting them as one",
       "Dropping a consonant",
       "Moving the stress"
      ],
      "answer": 0,
      "explain": "<em>Li-on</em> in classical verse."
     },
     {
      "prompt": "Who decides between synaeresis and diaeresis?",
      "options": [
       "The printer",
       "Custom for each word, and the poet",
       "The grammar of Latin",
       "No one; it is always diaeresis"
      ],
      "answer": 1,
      "explain": "Custom fixes many words; the poet may choose."
     }
    ]
   }
  },
  {
   "id": "meter-3",
   "title": "The Alexandrine",
   "body": "<p><strong>The alexandrine.</strong> Baudelaire’s sonnet “Recueillement” begins <em>Sois sage, ô ma Douleur, et tiens-toi plus tranquille</em> (“Be good, O my Sorrow, and keep quieter”). It is counted <em>Sois | sa | g(e) ô | ma | Dou | leur, ‖ et | tiens | toi | plus | tran | quille</em>: the <em>e</em> of <em>sage</em> is elided before <em>ô</em>, and the final <em>e</em> of <em>tranquille</em> is not counted, so the line has twelve syllables, with a pause after the sixth. This is the <strong>alexandrine</strong>, a line of twelve syllables with a <strong>caesura</strong> after the sixth, which divides it into two <strong>hemistiches</strong> (half lines) of six. It is the line of Corneille and Racine in the seventeenth century, of Baudelaire in the nineteenth, and of most French verse drama. The sixth syllable must be a stressed one, and it may not be a mute <em>e</em>.</p>",
   "qp": {
    "id": "q-fr-me-meter-3",
    "variants": [
     {
      "prompt": "How many syllables has an alexandrine?",
      "options": [
       "Twelve",
       "Ten",
       "Eight",
       "Fourteen"
      ],
      "answer": 0,
      "explain": "With a caesura after the sixth."
     },
     {
      "prompt": "What is a hemistich?",
      "options": [
       "A rhyme",
       "A stanza",
       "An elided vowel",
       "Half of a line"
      ],
      "answer": 3,
      "explain": "The alexandrine has two hemistiches of six."
     },
     {
      "prompt": "Whose line is the alexandrine in the seventeenth century?",
      "options": [
       "Villon’s",
       "Verlaine’s",
       "Corneille’s and Racine’s",
       "Ronsard’s odes’"
      ],
      "answer": 2,
      "explain": "The line of classical tragedy."
     }
    ]
   }
  },
  {
   "id": "meter-4",
   "title": "The Octosyllable and the Short Lines",
   "body": "<p><strong>The octosyllable and the short lines.</strong> The eight-syllable line, without a fixed caesura, is the older line of romance and song, used by Charles d’Orléans in the fifteenth century, by Ronsard in the sixteenth, and by many later poets. Du Bellay’s hymn to the winds runs in lines of six. La Fontaine, in the seventeenth century, mixes lines of different lengths in one fable. Verlaine, in the nineteenth, liked odd-numbered lines and very short ones, as the lines of four and three syllables of his “Chanson d’automne.”</p>",
   "qp": {
    "id": "q-fr-me-meter-4",
    "variants": [
     {
      "prompt": "Does the octosyllable have a fixed caesura?",
      "options": [
       "Yes, after the fourth syllable",
       "No",
       "Yes, after the sixth",
       "Only in songs"
      ],
      "answer": 1,
      "explain": "The eight-syllable line has none fixed."
     },
     {
      "prompt": "Which poet liked odd-numbered and very short lines?",
      "options": [
       "Racine",
       "Corneille",
       "Verlaine",
       "Boileau"
      ],
      "answer": 2,
      "explain": "As in his “Chanson d’automne.”"
     },
     {
      "prompt": "Who mixes lines of different lengths in one fable?",
      "options": [
       "Racine",
       "Corneille",
       "Charles d’Orléans",
       "La Fontaine"
      ],
      "answer": 3,
      "explain": "His fables use free verse of mixed lengths."
     }
    ]
   }
  },
  {
   "id": "meter-5",
   "title": "Rhyme",
   "body": "<p><strong>Rhyme.</strong> <em>Nuit</em> rhymes with <em>fuit</em> (“flees”) on a sounded vowel, whereas <em>belle</em> rhymes with <em>elle</em> (“she”) on a syllable that ends in a mute <em>e</em>. The first kind is a <strong>masculine</strong> rhyme, and the second a <strong>feminine</strong> rhyme, and French verse usually alternates the two kinds. Rhymes in couplets are called <em>rimes plates</em> (“flat rhymes”); crossed rhymes, <em>abab</em>, are <em>rimes croisées</em>; and enclosed rhymes, <em>abba</em>, are <em>rimes embrassées</em>.</p>",
   "qp": {
    "id": "q-fr-me-meter-5",
    "variants": [
     {
      "prompt": "What is a feminine rhyme?",
      "options": [
       "A rhyme on a sounded vowel",
       "A rhyme between nouns",
       "A rhyme on a syllable ending in mute <em>e</em>",
       "A rhyme in the middle of a line"
      ],
      "answer": 2,
      "explain": "<em>Belle</em> and <em>elle</em>."
     },
     {
      "prompt": "What are <em>rimes croisées</em>?",
      "options": [
       "Rhymes in couplets, aabb",
       "Crossed rhymes, abab",
       "Enclosed rhymes, abba",
       "No rhyme"
      ],
      "answer": 1,
      "explain": "Crossed rhymes alternate."
     },
     {
      "prompt": "What does French verse usually alternate?",
      "options": [
       "Masculine and feminine rhymes",
       "Long and short lines",
       "Stressed and unstressed syllables",
       "Iambs and trochees"
      ],
      "answer": 0,
      "explain": "The two kinds of rhyme alternate."
     }
    ]
   }
  }
 ]
};
