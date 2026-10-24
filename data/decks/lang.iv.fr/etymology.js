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
   "body": "<p>A popular French word, as we have seen, was worn down from Latin by centuries of speech, and the changes follow regular patterns. Latin <i lang=\"fr\">c</i> before <i lang=\"fr\">a</i> became <i lang=\"fr\">ch</i>: <i lang=\"fr\">cantāre</i>, <i lang=\"fr\">chanter</i>; <i lang=\"fr\">campus</i>, <i lang=\"fr\">champ</i>; <i lang=\"fr\">capra</i>, <i lang=\"fr\">chèvre</i> (“goat”). A Latin <i lang=\"fr\">s</i> before another consonant was lost, and the circumflex accent often marks its place: <i lang=\"fr\">festa</i>, <i lang=\"fr\">fête</i>; <i lang=\"fr\">testa</i>, <i lang=\"fr\">tête</i>; <i lang=\"fr\">fenestra</i>, <i lang=\"fr\">fenêtre</i>; <i lang=\"fr\">īnsula</i>, <i lang=\"fr\">île</i>. Consonants between vowels were weakened or lost: <i lang=\"fr\">vīta</i>, <i lang=\"fr\">vie</i>; <i lang=\"fr\">vidēre</i>, <i lang=\"fr\">voir</i>. And unstressed endings fell away, so that French words are shorter than their Latin ancestors and are stressed on their last sounded syllable.</p>",
   "qp": {
    "id": "q-fr-ety-changes",
    "variants": [
     {
      "prompt": "What does the circumflex in <i lang=\"fr\">forêt</i> often mark?",
      "options": [
       "A long Latin vowel",
       "A Greek word",
       "A lost Latin <i lang=\"fr\">s</i>",
       "A lost <i lang=\"fr\">c</i>"
      ],
      "answer": 2,
      "explain": "The circumflex often marks a lost <i lang=\"fr\">s</i>: compare English “forest.”"
     },
     {
      "prompt": "Which French word comes from Latin <i lang=\"fr\">carrus</i> (“wagon”) by the change of <i lang=\"fr\">c</i> before <i lang=\"fr\">a</i>?",
      "options": [
       "<i lang=\"fr\">car</i>",
       "<i lang=\"fr\">char</i>",
       "<i lang=\"fr\">carré</i>",
       "<i lang=\"fr\">cher</i>"
      ],
      "answer": 1,
      "explain": "Latin <i lang=\"fr\">c</i> before <i lang=\"fr\">a</i> became <i lang=\"fr\">ch</i>: <i lang=\"fr\">carrus</i>, <i lang=\"fr\">char</i>."
     },
     {
      "prompt": "Why is French <i lang=\"fr\">vie</i> shorter than Latin <i lang=\"fr\">vīta</i>?",
      "options": [
       "Sounds were worn away in speech",
       "French borrowed the word from Greek",
       "The word was abbreviated by writers",
       "<i lang=\"fr\">Vie</i> is a learned word"
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
   "body": "<p>Not all of French comes from Latin. The Franks, a Germanic people who gave France its name, left many words: <i lang=\"fr\">guerre</i> (“war,” Frankish <i lang=\"fr\">*werra</i>, where Germanic <i lang=\"fr\">w</i> became <i lang=\"fr\">gu</i>), <i lang=\"fr\">garder</i> (“to guard,” compare English “ward”), <i lang=\"fr\">blanc</i>, <i lang=\"fr\">bleu</i>, <i lang=\"fr\">jardin</i>, <i lang=\"fr\">haïr</i> (“to hate”), and <i lang=\"fr\">honte</i> (“shame”). Many words of Frankish origin begin with an <i lang=\"fr\">h</i> that, though silent, prevents elision and liaison: <i lang=\"fr\">la haine</i>, <i lang=\"fr\">la honte</i>, <i lang=\"fr\">le héron</i>, not <i lang=\"fr\">l’honte</i>. Later French took words from Italian in the Renaissance (<i lang=\"fr\">balcon</i>, <i lang=\"fr\">soldat</i>, <i lang=\"fr\">banque</i>, <i lang=\"fr\">sonnet</i>), from Arabic, often by way of Spanish or medieval Latin (<i lang=\"fr\">algèbre</i>, <i lang=\"fr\">chiffre</i>, <i lang=\"fr\">sucre</i>), and in our own time from English (<i lang=\"fr\">le week-end</i>, <i lang=\"fr\">le parking</i>).</p>",
   "qp": {
    "id": "q-fr-ety-other",
    "variants": [
     {
      "prompt": "From which language did French take <i lang=\"fr\">guerre</i>?",
      "options": [
       "Latin",
       "Frankish",
       "Italian",
       "Old English"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Guerre</i> comes from Frankish <i lang=\"fr\">*werra</i>; Latin had <i lang=\"fr\">bellum</i>."
     },
     {
      "prompt": "Why is it <i lang=\"fr\">la hache</i> (“the ax”) and not <i lang=\"fr\">l’hache</i>?",
      "options": [
       "<i lang=\"fr\">Hache</i> is masculine",
       "French never elides before <i lang=\"fr\">h</i>",
       "Its <i lang=\"fr\">h</i> prevents elision",
       "<i lang=\"fr\">Hache</i> is a Latin word"
      ],
      "answer": 2,
      "explain": "An <i lang=\"fr\">h</i> of Frankish origin, though silent, prevents elision."
     },
     {
      "prompt": "From which language did French take <i lang=\"fr\">soldat</i> and <i lang=\"fr\">balcon</i>?",
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
   "body": "<p>English took thousands of words from French after the Norman Conquest, as we have seen, and it often keeps an older form of the word than French itself. English “forest,” “feast,” “beast,” “hostel,” and “isle” keep the <i lang=\"fr\">s</i> that French has since lost, marking it with the circumflex: <i lang=\"fr\">forêt</i>, <i lang=\"fr\">fête</i>, <i lang=\"fr\">bête</i>, <i lang=\"fr\">hôtel</i>, <i lang=\"fr\">île</i>. So the circumflex can often be read by asking what the English word looks like. Some English words came from the Norman French of England, which differed from the French of Paris: English “war” and “ward” keep the Germanic <i lang=\"fr\">w</i> that Parisian French changed to <i lang=\"fr\">gu</i>, as in <i lang=\"fr\">guerre</i> and <i lang=\"fr\">garde</i>.</p>",
   "qp": {
    "id": "q-fr-ety-english",
    "variants": [
     {
      "prompt": "Which English word keeps the <i lang=\"fr\">s</i> that French <i lang=\"fr\">côte</i> has lost?",
      "options": [
       "“cot”",
       "“cost”",
       "“costume”",
       "“coast”"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Côte</i>, from Latin <i lang=\"fr\">costa</i>, lost its <i lang=\"fr\">s</i>; English “coast” keeps it."
     },
     {
      "prompt": "Why does English say “ward” where French says <i lang=\"fr\">garde</i>?",
      "options": [
       "English kept the Germanic <i lang=\"fr\">w</i>",
       "English borrowed it from Latin",
       "French borrowed it from English",
       "The words are unrelated"
      ],
      "answer": 0,
      "explain": "Norman French kept <i lang=\"fr\">w</i>, which Parisian French changed to <i lang=\"fr\">gu</i>."
     },
     {
      "prompt": "What English word helps to read the circumflex in <i lang=\"fr\">bête</i>?",
      "options": [
       "“bet”",
       "“beast”",
       "“beat”",
       "“beetle”"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Bête</i>, from Latin <i lang=\"fr\">bēstia</i>, lost an <i lang=\"fr\">s</i> that “beast” keeps."
     }
    ]
   }
  }
 ]
};
