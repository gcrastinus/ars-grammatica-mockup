window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.fr/etymology"] = {
 "id": "lang.iv.fr/etymology",
 "title": "Etymology in French",
 "sub": "How Latin words became French, the words French took from Frankish and other languages, and the French words in English",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Oscar Bloch and Walther von Wartburg, <i>Dictionnaire étymologique de la langue française</i>",
 "panels": [
  {
   "id": "changes",
   "title": "From Latin to French",
   "body": "<p>A popular French word, as we have seen, was worn down from Latin by centuries of speech, and the changes follow regular patterns. Latin <i>c</i> before <i>a</i> became <i>ch</i>: <i>cantāre</i>, <i>chanter</i>; <i>campus</i>, <i>champ</i>; <i>capra</i>, <i>chèvre</i> (“goat”). A Latin <i>s</i> before another consonant was lost, and the circumflex accent often marks its place: <i>festa</i>, <i>fête</i>; <i>testa</i>, <i>tête</i>; <i>fenestra</i>, <i>fenêtre</i>; <i>īnsula</i>, <i>île</i>. Consonants between vowels were weakened or lost: <i>vīta</i>, <i>vie</i>; <i>vidēre</i>, <i>voir</i>. And unstressed endings fell away, so that French words are shorter than their Latin ancestors and are stressed on their last sounded syllable.</p>",
   "qp": {
    "id": "q-fr-ety-changes",
    "variants": [
     {
      "prompt": "What does the circumflex in <i>forêt</i> often mark?",
      "options": [
       "A long Latin vowel",
       "A Greek word",
       "A lost Latin <i>s</i>",
       "A lost <i>c</i>"
      ],
      "answer": 2,
      "explain": "The circumflex often marks a lost <i>s</i>: compare English “forest.”"
     },
     {
      "prompt": "Which French word comes from Latin <i>carrus</i> (“wagon”) by the change of <i>c</i> before <i>a</i>?",
      "options": [
       "<i>car</i>",
       "<i>char</i>",
       "<i>carré</i>",
       "<i>cher</i>"
      ],
      "answer": 1,
      "explain": "Latin <i>c</i> before <i>a</i> became <i>ch</i>: <i>carrus</i>, <i>char</i>."
     },
     {
      "prompt": "Why is French <i>vie</i> shorter than Latin <i>vīta</i>?",
      "options": [
       "Sounds were worn away in speech",
       "French borrowed the word from Greek",
       "The word was abbreviated by writers",
       "<i>Vie</i> is a learned word"
      ],
      "answer": 0,
      "explain": "Consonants between vowels weakened, and unstressed endings fell away."
     }
    ]
   }
  },
  {
   "id": "other",
   "title": "Words from Frankish and other languages",
   "body": "<p>Not all of French comes from Latin. The Franks, a Germanic people who gave France its name, left many words: <i>guerre</i> (“war,” Frankish <i>*werra</i>, where Germanic <i>w</i> became <i>gu</i>), <i>garder</i> (“to guard,” compare English “ward”), <i>blanc</i>, <i>bleu</i>, <i>jardin</i>, <i>haïr</i> (“to hate”), and <i>honte</i> (“shame”). Many words of Frankish origin begin with an <i>h</i> that, though silent, prevents elision and liaison: <i>la haine</i>, <i>la honte</i>, <i>le héron</i>, not <i>l’honte</i>. Later French took words from Italian in the Renaissance (<i>balcon</i>, <i>soldat</i>, <i>banque</i>, <i>sonnet</i>), from Arabic, often by way of Spanish or medieval Latin (<i>algèbre</i>, <i>chiffre</i>, <i>sucre</i>), and in our own time from English (<i>le week-end</i>, <i>le parking</i>).</p>",
   "qp": {
    "id": "q-fr-ety-other",
    "variants": [
     {
      "prompt": "From which language did French take <i>guerre</i>?",
      "options": [
       "Latin",
       "Frankish",
       "Italian",
       "Old English"
      ],
      "answer": 1,
      "explain": "<i>Guerre</i> comes from Frankish <i>*werra</i>; Latin had <i>bellum</i>."
     },
     {
      "prompt": "Why is it <i>la hache</i> (“the ax”) and not <i>l’hache</i>?",
      "options": [
       "<i>Hache</i> is masculine",
       "French never elides before <i>h</i>",
       "Its <i>h</i> prevents elision",
       "<i>Hache</i> is a Latin word"
      ],
      "answer": 2,
      "explain": "An <i>h</i> of Frankish origin, though silent, prevents elision."
     },
     {
      "prompt": "From which language did French take <i>soldat</i> and <i>balcon</i>?",
      "options": [
       "Frankish",
       "Arabic",
       "English",
       "Italian"
      ],
      "answer": 3,
      "explain": "Many words of war and building came from Italian in the Renaissance."
     }
    ]
   }
  },
  {
   "id": "english",
   "title": "French words in English",
   "body": "<p>English took thousands of words from French after the Norman Conquest, as we have seen, and it often keeps an older form of the word than French itself. English “forest,” “feast,” “beast,” “hostel,” and “isle” keep the <i>s</i> that French has since lost, marking it with the circumflex: <i>forêt</i>, <i>fête</i>, <i>bête</i>, <i>hôtel</i>, <i>île</i>. So the circumflex can often be read by asking what the English word looks like. Some English words came from the Norman French of England, which differed from the French of Paris: English “war” and “ward” keep the Germanic <i>w</i> that Parisian French changed to <i>gu</i>, as in <i>guerre</i> and <i>garde</i>.</p>",
   "qp": {
    "id": "q-fr-ety-english",
    "variants": [
     {
      "prompt": "Which English word keeps the <i>s</i> that French <i>côte</i> has lost?",
      "options": [
       "“cot”",
       "“cost”",
       "“costume”",
       "“coast”"
      ],
      "answer": 3,
      "explain": "<i>Côte</i>, from Latin <i>costa</i>, lost its <i>s</i>; English “coast” keeps it."
     },
     {
      "prompt": "Why does English say “ward” where French says <i>garde</i>?",
      "options": [
       "English kept the Germanic <i>w</i>",
       "English borrowed it from Latin",
       "French borrowed it from English",
       "The words are unrelated"
      ],
      "answer": 0,
      "explain": "Norman French kept <i>w</i>, which Parisian French changed to <i>gu</i>."
     },
     {
      "prompt": "What English word helps to read the circumflex in <i>bête</i>?",
      "options": [
       "“bet”",
       "“beast”",
       "“beat”",
       "“beetle”"
      ],
      "answer": 1,
      "explain": "<i>Bête</i>, from Latin <i>bēstia</i>, lost an <i>s</i> that “beast” keeps."
     }
    ]
   }
  }
 ]
};
