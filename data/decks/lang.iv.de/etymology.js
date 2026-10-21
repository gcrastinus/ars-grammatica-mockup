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
   "body": "<p>German and English are sister languages, both Germanic, and many of their oldest words are cognates: <i>Hand</i> and “hand,” <i>Haus</i> and “house,” <i>gut</i> and “good.” But German went through a further change of its consonants, which English did not, called the second (or High German) sound shift, and it explains most of the differences: English <i>t</i> answers to German <i>z</i> or <i>ss</i> (“ten,” <i>zehn</i>; “tongue,” <i>Zunge</i>; “water,” <i>Wasser</i>), English <i>p</i> to German <i>pf</i> or <i>f</i> (“pound,” <i>Pfund</i>; “apple,” <i>Apfel</i>; “ship,” <i>Schiff</i>), English <i>k</i> to German <i>ch</i> (“make,” <i>machen</i>; “book,” <i>Buch</i>), and English <i>d</i> to German <i>t</i> (“day,” <i>Tag</i>; “daughter,” <i>Tochter</i>). English <i>th</i>, which German lost, appears as <i>d</i>: “thank,” <i>danken</i>; “thing,” <i>Ding</i>.</p>",
   "qp": {
    "id": "q-de-ety-shift",
    "variants": [
     {
      "prompt": "What is the German cognate of English “salt”?",
      "options": [
       "<i>Salz</i>",
       "<i>Salt</i>",
       "<i>Salf</i>",
       "<i>Sald</i>"
      ],
      "answer": 0,
      "explain": "English <i>t</i> answers to German <i>z</i>."
     },
     {
      "prompt": "What is the German cognate of English “deep”?",
      "options": [
       "<i>dief</i>",
       "<i>tiep</i>",
       "<i>diep</i>",
       "<i>tief</i>"
      ],
      "answer": 3,
      "explain": "English <i>d</i> answers to German <i>t</i>, and <i>p</i> to <i>f</i>."
     },
     {
      "prompt": "What is the German cognate of English “three”?",
      "options": [
       "<i>trei</i>",
       "<i>threi</i>",
       "<i>drei</i>",
       "<i>zrei</i>"
      ],
      "answer": 2,
      "explain": "English <i>th</i> appears as German <i>d</i>."
     }
    ]
   }
  },
  {
   "id": "loans",
   "title": "Words from Latin and French",
   "body": "<p>German took words from Latin in three waves. From the Romans themselves, along the Rhine and the Danube, came words of building, trade, and the garden, so early and so fully absorbed that they look German: <i>Mauer</i> (“wall,” <i>mūrus</i>), <i>Fenster</i> (<i>fenestra</i>), <i>Straße</i> (<i>strāta</i>), <i>Wein</i> (<i>vīnum</i>), <i>Kirsche</i> (<i>cerasus</i>). From the church and the monastery schools came <i>Schule</i> (<i>schola</i>), <i>schreiben</i> (<i>scrībere</i>), <i>Tafel</i> (<i>tabula</i>), and <i>Kloster</i> (<i>claustrum</i>). And in later centuries came words of learning and of polite life, from Latin and French, which often keep their foreign form: <i>Universität</i>, <i>Restaurant</i>, <i>Onkel</i>, <i>Tante</i>. German grammars distinguish the <i>Lehnwort</i> (“loanword”), fully adapted to German sound and spelling, from the <i>Fremdwort</i> (“foreign word”), which keeps its foreign form.</p>",
   "qp": {
    "id": "q-de-ety-loans",
    "variants": [
     {
      "prompt": "From which Latin word does <i>Ziegel</i> (“brick”) come?",
      "options": [
       "<i>signum</i>",
       "<i>cēra</i>",
       "<i>sigillum</i>",
       "<i>tēgula</i>"
      ],
      "answer": 3,
      "explain": "A Roman word of building, adapted early: <i>tēgula</i>, <i>Ziegel</i>."
     },
     {
      "prompt": "What is a <i>Lehnwort</i>?",
      "options": [
       "A loanword adapted to German",
       "A word that keeps its foreign form",
       "A native Germanic word",
       "A word lent to English"
      ],
      "answer": 0,
      "explain": "<i>Fenster</i> is a <i>Lehnwort</i>; <i>Restaurant</i> is a <i>Fremdwort</i>."
     },
     {
      "prompt": "Which word came into German from Latin through the church schools?",
      "options": [
       "<i>Mauer</i>",
       "<i>schreiben</i>",
       "<i>Restaurant</i>",
       "<i>Haus</i>"
      ],
      "answer": 1,
      "explain": "<i>Scrībere</i> came with the monastery schools; <i>Haus</i> is native."
     }
    ]
   }
  },
  {
   "id": "false-friends",
   "title": "Cognates that drifted apart",
   "body": "<p>Some German and English words are cognates but have come to mean different things, and a reader must not take the English sense for the German. <i>Bekommen</i> means “to receive,” not “to become” (which is <i>werden</i>). <i>Gift</i> means “poison” (both words are from the verb “to give,” as a dose is given). <i>Tier</i> means any animal, the old sense that English “deer” has narrowed, as we have seen. <i>Zaun</i> is a fence, whereas its cognate “town” was first a fenced place. And <i>Knecht</i> (“servant,” “farmhand”) is the cognate of English “knight,” which rose in standing while the German word did not.</p>",
   "qp": {
    "id": "q-de-ety-false",
    "variants": [
     {
      "prompt": "What does <i>Ich bekomme einen Brief</i> mean?",
      "options": [
       "“I become a letter.”",
       "“I write a letter.”",
       "“I send a letter off.”",
       "“I receive a letter.”"
      ],
      "answer": 3,
      "explain": "<i>Bekommen</i> means “to receive.”"
     },
     {
      "prompt": "What does German <i>Tier</i> mean?",
      "options": [
       "“animal”",
       "“deer”",
       "“tear”",
       "“tired”"
      ],
      "answer": 0,
      "explain": "<i>Tier</i> keeps the old wide sense that English “deer” has narrowed."
     },
     {
      "prompt": "What is the English cognate of <i>Zaun</i> (“fence”)?",
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
