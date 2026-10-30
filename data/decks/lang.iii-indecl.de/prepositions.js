window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.de/prepositions"] = {
 "id": "lang.iii-indecl.de/prepositions",
 "title": "German Prepositions",
 "sub": "The prepositions with the accusative, the dative, and the genitive; the two-way prepositions; and the preposition joined to the article",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "prepositions-1",
   "title": "Prepositions with one case",
   "body": "<p>German says <i lang=\"de\">für den Vater</i> (“for the father”), with the accusative, but <i lang=\"de\">mit dem Vater</i> (“with the father”), with the dative. A German preposition keeps one form, and it requires a particular case of the noun. Latin prepositions take the accusative or the ablative, whereas German prepositions take the accusative, the dative, or the genitive, and one group takes either the dative or the accusative. The prepositions with one case are these:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Case</th> <th>Prepositions</th></tr>\n<tr><td>Accusative</td> <td><i lang=\"de\">bis</i> (“until,” “as far as”), <i lang=\"de\">durch</i> (“through”), <i lang=\"de\">für</i> (“for”), <i lang=\"de\">gegen</i> (“against”), <i lang=\"de\">ohne</i> (“without”), <i lang=\"de\">um</i> (“around,” “at” a time)</td></tr>\n<tr><td>Dative</td> <td><i lang=\"de\">aus</i> (“out of”), <i lang=\"de\">außer</i> (“except”), <i lang=\"de\">bei</i> (“at,” “near”), <i lang=\"de\">mit</i> (“with”), <i lang=\"de\">nach</i> (“after,” “to”), <i lang=\"de\">seit</i> (“since”), <i lang=\"de\">von</i> (“from,” “of”), <i lang=\"de\">zu</i> (“to”), <i lang=\"de\">gegenüber</i> (“opposite”)</td></tr>\n<tr><td>Genitive</td> <td><i lang=\"de\">während</i> (“during”), <i lang=\"de\">wegen</i> (“because of”), <i lang=\"de\">trotz</i> (“in spite of”), <i lang=\"de\">statt</i> (“instead of”), <i lang=\"de\">innerhalb</i> (“inside”), <i lang=\"de\">außerhalb</i> (“outside”)</td></tr>\n</table></div>\n<p>In everyday speech <i lang=\"de\">wegen</i>, <i lang=\"de\">trotz</i>, and <i lang=\"de\">während</i> are often used with the dative, but written German keeps the genitive: <i lang=\"de\">wegen des Wetters</i> (“because of the weather”).</p>",
   "qp": {
    "id": "q-de-prep-one",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"de\">seit ___ Krieg</i> (“since the war”).",
      "options": [
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">des</i>",
       "<i lang=\"de\">der</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Seit</i> takes the dative: <i lang=\"de\">seit dem Krieg</i>."
     },
     {
      "prompt": "Choose the article: <i lang=\"de\">um ___ Tisch</i> (“around the table”).",
      "options": [
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">des</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">der</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Um</i> takes the accusative."
     },
     {
      "prompt": "Which case does written German use after <i lang=\"de\">während</i>?",
      "options": [
       "The dative",
       "The accusative",
       "The nominative",
       "The genitive"
      ],
      "answer": 3,
      "explain": "Written German uses the genitive after <i lang=\"de\">während</i>: <i lang=\"de\">während des Essens</i>, “during the meal.”"
     }
    ]
   }
  },
  {
   "id": "two-way",
   "title": "The two-way prepositions",
   "body": "<p>English says “in the room” and “into the room,” “on the table” and “onto the table.” German uses one preposition for each pair and shows the difference by the case: the dative answers the question <i lang=\"de\">wo?</i> (“where?”), the place where something is, and the accusative answers <i lang=\"de\">wohin?</i> (“where to?”), the place toward which something moves. Nine prepositions work in this way: <i lang=\"de\">an</i> (“at,” “on”), <i lang=\"de\">auf</i> (“on,” “onto”), <i lang=\"de\">hinter</i> (“behind”), <i lang=\"de\">in</i> (“in,” “into”), <i lang=\"de\">neben</i> (“beside”), <i lang=\"de\">über</i> (“over,” “above”), <i lang=\"de\">unter</i> (“under”), <i lang=\"de\">vor</i> (“in front of”), and <i lang=\"de\">zwischen</i> (“between”). So <i lang=\"de\">das Buch liegt auf dem Tisch</i> (“the book lies on the table,” dative), whereas <i lang=\"de\">ich lege das Buch auf den Tisch</i> (“I lay the book on the table,” accusative).</p>\n<p>German pairs its verbs in the same way: <i lang=\"de\">liegen</i> (“to lie”) and <i lang=\"de\">legen</i> (“to lay”), <i lang=\"de\">stehen</i> (“to stand”) and <i lang=\"de\">stellen</i> (“to set upright”), <i lang=\"de\">sitzen</i> (“to sit”) and <i lang=\"de\">setzen</i> (“to set,” “to seat”), <i lang=\"de\">hängen</i> (“to hang,” in both senses). The first of each pair names a position and takes the dative; the second names a movement and takes the accusative. As we saw, Latin <i lang=\"de\">in</i> with the ablative and the accusative makes the same difference.</p>",
   "qp": {
    "id": "q-de-two-way",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"de\">Sie hängt das Bild an ___ Wand</i> (“She hangs the picture on the wall”).",
      "options": [
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">die</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 1,
      "explain": "The picture is moved onto the wall (<i lang=\"de\">wohin?</i>), so the accusative: <i lang=\"de\">an die Wand</i>."
     },
     {
      "prompt": "Choose the article: <i lang=\"de\">Das Bild hängt an ___ Wand</i> (“The picture hangs on the wall”).",
      "options": [
       "<i lang=\"de\">die</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 2,
      "explain": "The picture is in a place (<i lang=\"de\">wo?</i>), so the dative: <i lang=\"de\">an der Wand</i>."
     },
     {
      "prompt": "Which verb goes with the accusative after a two-way preposition?",
      "options": [
       "<i lang=\"de\">stehen</i>",
       "<i lang=\"de\">liegen</i>",
       "<i lang=\"de\">sitzen</i>",
       "<i lang=\"de\">stellen</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Stellen</i> names a movement (“to set upright”), so it takes the accusative; <i lang=\"de\">stehen</i>, <i lang=\"de\">liegen</i>, and <i lang=\"de\">sitzen</i> name a position."
     }
    ]
   }
  },
  {
   "id": "contractions",
   "title": "Preposition and article together",
   "body": "<p>German says <i lang=\"de\">im Zimmer</i> (“in the room”) rather than <i lang=\"de\">in dem Zimmer</i>. Some prepositions and the definite article run together into one word in this way: <i lang=\"de\">in dem</i> becomes <i lang=\"de\">im</i>, <i lang=\"de\">an dem</i> becomes <i lang=\"de\">am</i>, <i lang=\"de\">zu dem</i> becomes <i lang=\"de\">zum</i>, <i lang=\"de\">zu der</i> becomes <i lang=\"de\">zur</i>, <i lang=\"de\">von dem</i> becomes <i lang=\"de\">vom</i>, <i lang=\"de\">bei dem</i> becomes <i lang=\"de\">beim</i>, <i lang=\"de\">in das</i> becomes <i lang=\"de\">ins</i>, and <i lang=\"de\">an das</i> becomes <i lang=\"de\">ans</i>. The contracted form is the usual one when the article is not stressed; when it points to one thing in particular (“in <i lang=\"de\">that</i> room”), the two words stand apart: <i lang=\"de\">in dem Zimmer, das du gemietet hast</i>. Words pronounced as part of the word next to them in this way are called clitics, as we have seen in English and French.</p>",
   "qp": {
    "id": "q-de-contractions",
    "variants": [
     {
      "prompt": "What is <i lang=\"de\">zur</i>?",
      "options": [
       "<i lang=\"de\">zu dem</i>",
       "<i lang=\"de\">zu den</i>",
       "<i lang=\"de\">zu der</i>",
       "<i lang=\"de\">zu die</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Zu</i> with the feminine dative article <i lang=\"de\">der</i> becomes <i lang=\"de\">zur</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">Wir gehen ___ Kino</i> (“We are going to the cinema”).",
      "options": [
       "<i lang=\"de\">im</i>",
       "<i lang=\"de\">ins</i>",
       "<i lang=\"de\">in den</i>",
       "<i lang=\"de\">am</i>"
      ],
      "answer": 1,
      "explain": "Motion into a place takes the accusative, and <i lang=\"de\">in das</i> becomes <i lang=\"de\">ins</i>."
     },
     {
      "prompt": "When do the preposition and article stand apart?",
      "options": [
       "When the article points to one thing in particular",
       "Always in writing",
       "Only in the plural",
       "With feminine nouns only"
      ],
      "answer": 0,
      "explain": "The contracted form is used when the article is unstressed."
     }
    ]
   }
  }
 ]
};
