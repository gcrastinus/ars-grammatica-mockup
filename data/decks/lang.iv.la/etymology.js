window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.la/etymology"] = {
 "id": "lang.iv.la/etymology",
 "title": "Etymology in Latin",
 "sub": "Latin and its cognates, the Greek words in Latin, and Latin in the Romance languages and in English",
 "sources": "Allen and Greenough, <em>New Latin Grammar</em>; Michiel de Vaan, <em>Etymological Dictionary of Latin and the Other Italic Languages</em>",
 "panels": [
  {
   "id": "cognates",
   "title": "Latin and its cognates",
   "body": "<p>Latin <em>frāter</em>, Greek <em>φρᾱ́τηρ</em> (“member of a clan”), Sanskrit <em>bhrātar-</em>, and English “brother” are one word in four languages, inherited from a common parent language that grammarians call Indo-European. In the same way Latin <em>novem</em> answers to Greek <em>ἐννέα</em> and English “nine,” and Latin <em>mūs</em> to Greek <em>μῦς</em> and English “mouse.” The comparison of such words, set out by the comparative grammarians of the nineteenth century, showed that Latin and Greek are sister languages, not mother and daughter: neither comes from the other, and each keeps some features the other has lost.</p>",
   "qp": {
    "id": "q-la-ety-cognates",
    "variants": [
     {
      "prompt": "How are Latin <em>frāter</em> and English “brother” related?",
      "options": [
       "“Brother” was borrowed from Latin",
       "<em>Frāter</em> was borrowed from English",
       "They are cognates",
       "They are unrelated"
      ],
      "answer": 2,
      "explain": "Both descend from Indo-European; “fraternal” is the borrowing."
     },
     {
      "prompt": "What is the relation of Latin to Greek?",
      "options": [
       "Latin comes from Greek",
       "Sister languages from one parent",
       "Greek comes from Latin",
       "They are unrelated, but share an alphabet"
      ],
      "answer": 1,
      "explain": "Neither comes from the other; both come from Indo-European."
     },
     {
      "prompt": "Which English word is the native cognate of Latin <em>mūs</em>?",
      "options": [
       "“mouse”",
       "“muscle”",
       "“music”",
       "“museum”"
      ],
      "answer": 0,
      "explain": "“Mouse” is inherited; “muscle” comes from <em>mūsculus</em>, “little mouse,” by borrowing."
     }
    ]
   }
  },
  {
   "id": "greek",
   "title": "Greek words in Latin",
   "body": "<p>The Romans took much of their learning from the Greeks and many Greek words with it: <em>philosophia</em>, <em>poēta</em>, <em>schola</em> (“leisure,” then “school”), <em>theātrum</em>, <em>ēpistula</em> (Greek <em>ἐπιστολή</em>), <em>machina</em>. Latin wrote them with its own letters by fixed rules: Greek <em>κ</em> became <em>c</em>, <em>υ</em> became <em>y</em>, <em>χ</em> <em>ch</em>, <em>φ</em> <em>ph</em>, <em>θ</em> <em>th</em>, the diphthong <em>αι</em> became <em>ae</em>, and <em>οι</em> became <em>oe</em>: <em>Κύκλωψ</em>, <em>Cyclōps</em>; <em>φιλοσοφία</em>, <em>philosophia</em>; <em>Φοῖβος</em>, <em>Phoebus</em>. Through Latin these spellings came into English, which is why English writes “psychology” and not “sükhology.”</p>",
   "qp": {
    "id": "q-la-ety-greek",
    "variants": [
     {
      "prompt": "How does Latin write the Greek <em>Μοῦσα</em>?",
      "options": [
       "<em>Mūsa</em>",
       "<em>Moysa</em>",
       "<em>Mousa</em>",
       "<em>Muza</em>"
      ],
      "answer": 0,
      "explain": "The Greek <em>ου</em>, a long <em>u</em> sound, becomes Latin <em>ū</em>."
     },
     {
      "prompt": "How does Latin write the Greek <em>θέατρον</em>?",
      "options": [
       "<em>teatrum</em>",
       "<em>phaetrum</em>",
       "<em>theatron</em> unchanged",
       "<em>theātrum</em>"
      ],
      "answer": 3,
      "explain": "Greek <em>θ</em> becomes <em>th</em>, and the ending is made Latin."
     },
     {
      "prompt": "Why does English write “phoenix” with <em>oe</em>?",
      "options": [
       "English invented the spelling",
       "The word is French",
       "Latin wrote Greek <em>οι</em> as <em>oe</em>",
       "It keeps the Greek letters"
      ],
      "answer": 2,
      "explain": "Greek <em>φοῖνιξ</em> became Latin <em>phoenīx</em>, and English took the Latin spelling."
     }
    ]
   }
  },
  {
   "id": "romance",
   "title": "Latin in the Romance languages and in English",
   "body": "<p>Spoken Latin did not die; it changed, by small steps over centuries, into Italian, Spanish, Portuguese, French, Romanian, and the other Romance languages. Often the everyday word of spoken Latin, not the literary one, is the ancestor: the literary <em>equus</em> (“horse”) gave way to the spoken <em>caballus</em> (“nag”), whence Italian <em>cavallo</em>, Spanish <em>caballo</em>, French <em>cheval</em>; and the literary <em>edere</em> (“to eat”) to <em>mandūcāre</em> (“to chew”), whence French <em>manger</em> and Italian <em>mangiare</em>. The literary word often survives in learned borrowings: “equestrian,” “edible.” English took its Latin vocabulary twice, first through French (“chapter,” from <em>capitulum</em>) and then directly from books (“capital”), so that a Latin word may appear in English in two forms, a doublet, as we have seen.</p>",
   "qp": {
    "id": "q-la-ety-romance",
    "variants": [
     {
      "prompt": "Which Latin word is the ancestor of French <em>cheval</em>?",
      "options": [
       "<em>equus</em>",
       "<em>caballus</em>",
       "<em>cervus</em>",
       "<em>caballārius</em>"
      ],
      "answer": 1,
      "explain": "The spoken <em>caballus</em> replaced the literary <em>equus</em>."
     },
     {
      "prompt": "Which English word keeps the literary <em>equus</em>?",
      "options": [
       "“cavalry”",
       "“chivalry”",
       "“equestrian”",
       "“cavalierly”"
      ],
      "answer": 2,
      "explain": "“Equestrian” is a learned borrowing from <em>equus</em>; the others come from <em>caballus</em> through French and Italian."
     },
     {
      "prompt": "Why do English “chapter” and “capital” look different though both come from Latin <em>caput</em>?",
      "options": [
       "One is Greek and the other Latin",
       "They have unrelated origins",
       "One is a compound of the other",
       "One came through French"
      ],
      "answer": 3,
      "explain": "“Chapter” came through French; “capital” was taken from Latin books."
     }
    ]
   }
  }
 ]
};
