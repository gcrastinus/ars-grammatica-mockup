window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.de/etymology"] = {
 "id": "lang.iv.de/etymology",
 "title": "Etymology in German",
 "sub": "German and English as Germanic languages, the second sound shift, the words German took from Latin and French, and cognates that drifted apart",
 "sources": "Duden, <i>Die Grammatik</i>; Friedrich Kluge, <i>Etymologisches Wörterbuch der deutschen Sprache</i>",
 "panels": [
  {
   "id": "shift",
   "title": "German and English: the second sound shift",
   "body": "<p>German and English are sister languages, both Germanic, and many of their oldest words are cognates: <i lang=\"de\">Hand</i> and “hand,” <i lang=\"de\">Haus</i> and “house,” <i lang=\"de\">gut</i> and “good.” But German went through a further change of its consonants, which English did not, called the second (or High German) sound shift, and it explains most of the differences: English <i lang=\"de\">t</i> answers to German <i lang=\"de\">z</i> or <i lang=\"de\">ss</i> (“ten,” <i lang=\"de\">zehn</i>; “tongue,” <i lang=\"de\">Zunge</i>; “water,” <i lang=\"de\">Wasser</i>), English <i lang=\"de\">p</i> to German <i lang=\"de\">pf</i> or <i lang=\"de\">f</i> (“pound,” <i lang=\"de\">Pfund</i>; “apple,” <i lang=\"de\">Apfel</i>; “ship,” <i lang=\"de\">Schiff</i>), English <i lang=\"de\">k</i> to German <i lang=\"de\">ch</i> (“make,” <i lang=\"de\">machen</i>; “book,” <i lang=\"de\">Buch</i>), and English <i lang=\"de\">d</i> to German <i lang=\"de\">t</i> (“day,” <i lang=\"de\">Tag</i>; “daughter,” <i lang=\"de\">Tochter</i>). English <i lang=\"de\">th</i>, which German lost, appears as <i lang=\"de\">d</i>: “thank,” <i lang=\"de\">danken</i>; “thing,” <i lang=\"de\">Ding</i>.</p>",
   "qp": {
    "id": "q-de-ety-shift",
    "variants": [
     {
      "prompt": "What is the German cognate of English “salt”?",
      "options": [
       "<i lang=\"de\">Salz</i>",
       "<i lang=\"de\">Salt</i>",
       "<i lang=\"de\">Salf</i>",
       "<i lang=\"de\">Sald</i>"
      ],
      "answer": 0,
      "explain": "English <i lang=\"de\">t</i> answers to German <i lang=\"de\">z</i>."
     },
     {
      "prompt": "What is the German cognate of English “deep”?",
      "options": [
       "<i lang=\"de\">dief</i>",
       "<i lang=\"de\">tiep</i>",
       "<i lang=\"de\">diep</i>",
       "<i lang=\"de\">tief</i>"
      ],
      "answer": 3,
      "explain": "English <i lang=\"de\">d</i> answers to German <i lang=\"de\">t</i>, and <i lang=\"de\">p</i> to <i lang=\"de\">f</i>."
     },
     {
      "prompt": "What is the German cognate of English “three”?",
      "options": [
       "<i lang=\"de\">trei</i>",
       "<i lang=\"de\">threi</i>",
       "<i lang=\"de\">drei</i>",
       "<i lang=\"de\">zrei</i>"
      ],
      "answer": 2,
      "explain": "English <i lang=\"de\">th</i> appears as German <i lang=\"de\">d</i>."
     }
    ]
   }
  },
  {
   "id": "loans",
   "title": "Words from Latin and French",
   "body": "<p>German took words from Latin in three waves. From the Romans themselves, along the Rhine and the Danube, came words of building, trade, and the garden, so early and so fully absorbed that they look German: <i lang=\"de\">Mauer</i> (“wall,” <i lang=\"de\">mūrus</i>), <i lang=\"de\">Fenster</i> (<i lang=\"de\">fenestra</i>), <i lang=\"de\">Straße</i> (<i lang=\"de\">strāta</i>), <i lang=\"de\">Wein</i> (<i lang=\"de\">vīnum</i>), <i lang=\"de\">Kirsche</i> (<i lang=\"de\">cerasus</i>). From the church and the monastery schools came <i lang=\"de\">Schule</i> (<i lang=\"de\">schola</i>), <i lang=\"de\">schreiben</i> (<i lang=\"de\">scrībere</i>), <i lang=\"de\">Tafel</i> (<i lang=\"de\">tabula</i>), and <i lang=\"de\">Kloster</i> (<i lang=\"de\">claustrum</i>). And in later centuries came words of learning and of polite life, from Latin and French, which often keep their foreign form: <i lang=\"de\">Universität</i>, <i lang=\"de\">Restaurant</i>, <i lang=\"de\">Onkel</i>, <i lang=\"de\">Tante</i>. German grammars distinguish the <i lang=\"de\">Lehnwort</i> (“loanword”), fully adapted to German sound and spelling, from the <i lang=\"de\">Fremdwort</i> (“foreign word”), which keeps its foreign form.</p>",
   "qp": {
    "id": "q-de-ety-loans",
    "variants": [
     {
      "prompt": "From which Latin word does <i lang=\"de\">Ziegel</i> (“brick”) come?",
      "options": [
       "<i lang=\"de\">signum</i>",
       "<i lang=\"de\">cēra</i>",
       "<i lang=\"de\">sigillum</i>",
       "<i lang=\"de\">tēgula</i>"
      ],
      "answer": 3,
      "explain": "A Roman word of building, adapted early: <i lang=\"de\">tēgula</i>, <i lang=\"de\">Ziegel</i>."
     },
     {
      "prompt": "What is a <i lang=\"de\">Lehnwort</i>?",
      "options": [
       "A loanword adapted to German",
       "A word that keeps its foreign form",
       "A native Germanic word",
       "A word lent to English"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Fenster</i> is a <i lang=\"de\">Lehnwort</i>; <i lang=\"de\">Restaurant</i> is a <i lang=\"de\">Fremdwort</i>."
     },
     {
      "prompt": "Which word came into German from Latin through the church schools?",
      "options": [
       "<i lang=\"de\">Mauer</i>",
       "<i lang=\"de\">schreiben</i>",
       "<i lang=\"de\">Restaurant</i>",
       "<i lang=\"de\">Haus</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Scrībere</i> came with the monastery schools; <i lang=\"de\">Haus</i> is native."
     }
    ]
   }
  },
  {
   "id": "false-friends",
   "title": "Cognates that drifted apart",
   "body": "<p>Some German and English words are cognates but have come to mean different things, and a reader must not take the English sense for the German. <i lang=\"de\">Bekommen</i> means “to receive,” not “to become” (which is <i lang=\"de\">werden</i>). <i lang=\"de\">Gift</i> means “poison” (both words are from the verb “to give,” as a dose is given). <i lang=\"de\">Tier</i> means any animal, the old sense that English “deer” has narrowed, as we have seen. <i lang=\"de\">Zaun</i> is a fence, whereas its cognate “town” was first a fenced place. And <i lang=\"de\">Knecht</i> (“servant,” “farmhand”) is the cognate of English “knight,” which rose in standing while the German word did not.</p>",
   "qp": {
    "id": "q-de-ety-false",
    "variants": [
     {
      "prompt": "What does <i lang=\"de\">Ich bekomme einen Brief</i> mean?",
      "options": [
       "“I become a letter.”",
       "“I write a letter.”",
       "“I send a letter off.”",
       "“I receive a letter.”"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Bekommen</i> means “to receive.”"
     },
     {
      "prompt": "What does German <i lang=\"de\">Tier</i> mean?",
      "options": [
       "“animal”",
       "“deer”",
       "“tear”",
       "“tired”"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Tier</i> keeps the old wide sense that English “deer” has narrowed."
     },
     {
      "prompt": "What is the English cognate of <i lang=\"de\">Zaun</i> (“fence”)?",
      "options": [
       "“zone”",
       "“town”",
       "“tune”",
       "“zany”"
      ],
      "answer": 1,
      "explain": "“Town” was first a fenced place."
     }
    ]
   }
  }
 ]
};
