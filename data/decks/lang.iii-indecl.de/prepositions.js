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
   "body": "<p>German says <i>für den Vater</i> (“for the father”), with the accusative, but <i>mit dem Vater</i> (“with the father”), with the dative. A German preposition keeps one form, and it requires a particular case of the noun. Latin prepositions take the accusative or the ablative, whereas German prepositions take the accusative, the dative, or the genitive, and one group takes either the dative or the accusative. The prepositions with one case are these:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Case</th> <th>Prepositions</th></tr>\n<tr><td>Accusative</td> <td><i>bis</i> (“until,” “as far as”), <i>durch</i> (“through”), <i>für</i> (“for”), <i>gegen</i> (“against”), <i>ohne</i> (“without”), <i>um</i> (“around,” “at” a time)</td></tr>\n<tr><td>Dative</td> <td><i>aus</i> (“out of”), <i>außer</i> (“except”), <i>bei</i> (“at,” “near”), <i>mit</i> (“with”), <i>nach</i> (“after,” “to”), <i>seit</i> (“since”), <i>von</i> (“from,” “of”), <i>zu</i> (“to”), <i>gegenüber</i> (“opposite”)</td></tr>\n<tr><td>Genitive</td> <td><i>während</i> (“during”), <i>wegen</i> (“because of”), <i>trotz</i> (“in spite of”), <i>statt</i> (“instead of”), <i>innerhalb</i> (“inside”), <i>außerhalb</i> (“outside”)</td></tr>\n</table></div>\n<p>In everyday speech <i>wegen</i>, <i>trotz</i>, and <i>während</i> are often used with the dative, but written German keeps the genitive: <i>wegen des Wetters</i> (“because of the weather”).</p>",
   "qp": {
    "id": "q-de-prep-one",
    "variants": [
     {
      "prompt": "Choose the article: <i>seit ___ Krieg</i> (“since the war”).",
      "options": [
       "<i>den</i>",
       "<i>dem</i>",
       "<i>des</i>",
       "<i>der</i>"
      ],
      "answer": 1,
      "explain": "<i>Seit</i> takes the dative: <i>seit dem Krieg</i>."
     },
     {
      "prompt": "Choose the article: <i>um ___ Tisch</i> (“around the table”).",
      "options": [
       "<i>dem</i>",
       "<i>des</i>",
       "<i>den</i>",
       "<i>der</i>"
      ],
      "answer": 2,
      "explain": "<i>Um</i> takes the accusative."
     },
     {
      "prompt": "Which case does written German use after <i>während</i>?",
      "options": [
       "The dative",
       "The accusative",
       "The nominative",
       "The genitive"
      ],
      "answer": 3,
      "explain": "<i>Während des Essens</i>, “during the meal.”"
     }
    ]
   }
  },
  {
   "id": "two-way",
   "title": "The two-way prepositions",
   "body": "<p>English says “in the room” and “into the room,” “on the table” and “onto the table.” German uses one preposition for each pair and shows the difference by the case: the dative answers the question <i>wo?</i> (“where?”), the place where something is, and the accusative answers <i>wohin?</i> (“where to?”), the place toward which something moves. Nine prepositions work in this way: <i>an</i> (“at,” “on”), <i>auf</i> (“on,” “onto”), <i>hinter</i> (“behind”), <i>in</i> (“in,” “into”), <i>neben</i> (“beside”), <i>über</i> (“over,” “above”), <i>unter</i> (“under”), <i>vor</i> (“in front of”), and <i>zwischen</i> (“between”). So <i>das Buch liegt auf dem Tisch</i> (“the book lies on the table,” dative), whereas <i>ich lege das Buch auf den Tisch</i> (“I lay the book on the table,” accusative).</p>\n<p>German pairs its verbs in the same way: <i>liegen</i> (“to lie”) and <i>legen</i> (“to lay”), <i>stehen</i> (“to stand”) and <i>stellen</i> (“to set upright”), <i>sitzen</i> (“to sit”) and <i>setzen</i> (“to set,” “to seat”), <i>hängen</i> (“to hang,” in both senses). The first of each pair names a position and takes the dative; the second names a movement and takes the accusative. As we saw, Latin <i>in</i> with the ablative and the accusative makes the same difference.</p>",
   "qp": {
    "id": "q-de-two-way",
    "variants": [
     {
      "prompt": "Choose the article: <i>Sie hängt das Bild an ___ Wand</i> (“She hangs the picture on the wall”).",
      "options": [
       "<i>der</i>",
       "<i>die</i>",
       "<i>den</i>",
       "<i>dem</i>"
      ],
      "answer": 1,
      "explain": "The picture is moved onto the wall (<i>wohin?</i>), so the accusative: <i>an die Wand</i>."
     },
     {
      "prompt": "Choose the article: <i>Das Bild hängt an ___ Wand</i> (“The picture hangs on the wall”).",
      "options": [
       "<i>die</i>",
       "<i>den</i>",
       "<i>der</i>",
       "<i>dem</i>"
      ],
      "answer": 2,
      "explain": "The picture is in a place (<i>wo?</i>), so the dative: <i>an der Wand</i>."
     },
     {
      "prompt": "Which verb goes with the accusative after a two-way preposition?",
      "options": [
       "<i>stehen</i>",
       "<i>liegen</i>",
       "<i>sitzen</i>",
       "<i>stellen</i>"
      ],
      "answer": 3,
      "explain": "<i>Stellen</i> names a movement (“to set upright”), so it takes the accusative; <i>stehen</i>, <i>liegen</i>, and <i>sitzen</i> name a position."
     }
    ]
   }
  },
  {
   "id": "contractions",
   "title": "Preposition and article together",
   "body": "<p>German says <i>im Zimmer</i> (“in the room”) rather than <i>in dem Zimmer</i>. Some prepositions and the definite article run together into one word in this way: <i>in dem</i> becomes <i>im</i>, <i>an dem</i> becomes <i>am</i>, <i>zu dem</i> becomes <i>zum</i>, <i>zu der</i> becomes <i>zur</i>, <i>von dem</i> becomes <i>vom</i>, <i>bei dem</i> becomes <i>beim</i>, <i>in das</i> becomes <i>ins</i>, and <i>an das</i> becomes <i>ans</i>. The contracted form is the usual one when the article is not stressed; when it points to one thing in particular (“in <i>that</i> room”), the two words stand apart: <i>in dem Zimmer, das du gemietet hast</i>. Words pronounced as part of the word next to them in this way are called clitics, as we have seen in English and French.</p>",
   "qp": {
    "id": "q-de-contractions",
    "variants": [
     {
      "prompt": "What is <i>zur</i>?",
      "options": [
       "<i>zu dem</i>",
       "<i>zu den</i>",
       "<i>zu der</i>",
       "<i>zu die</i>"
      ],
      "answer": 2,
      "explain": "<i>Zu</i> with the feminine dative article <i>der</i> becomes <i>zur</i>."
     },
     {
      "prompt": "Choose the form: <i>Wir gehen ___ Kino</i> (“We are going to the cinema”).",
      "options": [
       "<i>im</i>",
       "<i>ins</i>",
       "<i>in den</i>",
       "<i>am</i>"
      ],
      "answer": 1,
      "explain": "Motion into a place takes the accusative, and <i>in das</i> becomes <i>ins</i>."
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
