window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.de/composition"] = {
 "id": "lang.iv.de/composition",
 "title": "Composition in German",
 "sub": "Reading a long compound, the linking elements, compound adjectives, and compounds with a verb stem",
 "sources": "Duden, <i>Die Grammatik</i>; Friedrich Kluge, <i>Etymologisches Wörterbuch der deutschen Sprache</i>",
 "panels": [
  {
   "id": "reading",
   "title": "Reading a long compound",
   "body": "<p>German joins nouns far more freely than English, and a German compound can grow long. The rule we have seen, that the last noun names the kind and gives the gender, also tells us how to read such a word: from the end. <i lang=\"de\">Die Straßenbahnhaltestelle</i> is a <i lang=\"de\">Haltestelle</i> (“stopping place,” “stop”), and <i lang=\"de\">Straßenbahn</i> (“streetcar,” “street railway”) says which kind: “the streetcar stop.” <i lang=\"de\">Der Briefkastenschlüssel</i> is a <i lang=\"de\">Schlüssel</i> (“key”) for a <i lang=\"de\">Briefkasten</i> (“mailbox”). So the long word can be taken apart into its compounds, each of which is read in the same way, and the English rendering usually runs the other way, with “of” or “for.”</p>",
   "qp": {
    "id": "q-de-comp-reading",
    "variants": [
     {
      "prompt": "What is <i lang=\"de\">die Kinderzimmertür</i>?",
      "options": [
       "the room of the children’s door",
       "the door of the children’s room",
       "the children of the room door",
       "a door for children only"
      ],
      "answer": 1,
      "explain": "Read from the end: a <i lang=\"de\">Tür</i> of the <i lang=\"de\">Kinderzimmer</i>."
     },
     {
      "prompt": "What gender is <i lang=\"de\">Hausschlüssel</i>, from <i lang=\"de\">das Haus</i> and <i lang=\"de\">der Schlüssel</i>?",
      "options": [
       "Neuter",
       "Feminine",
       "Masculine",
       "It has none"
      ],
      "answer": 2,
      "explain": "The last noun gives the gender: <i lang=\"de\">der Hausschlüssel</i>."
     },
     {
      "prompt": "How is a long German compound best read?",
      "options": [
       "From the beginning, taking the first noun as the kind",
       "Word by word in any order",
       "As a phrase with the verb last",
       "From the end, taking the last noun as the kind"
      ],
      "answer": 3,
      "explain": "The last noun names the kind; the rest narrows it."
     }
    ]
   }
  },
  {
   "id": "linking",
   "title": "The linking elements",
   "body": "<p>We have seen the linking <i lang=\"de\">-s-</i> in <i lang=\"de\">Geburtstag</i>. German has several such linking elements (<i lang=\"de\">Fugenelemente</i>), and they often look like case or plural endings, though they no longer have that sense. Besides <i lang=\"de\">-s-</i> and <i lang=\"de\">-es-</i> (<i lang=\"de\">Liebesbrief</i>, <i lang=\"de\">Tageslicht</i>), there are <i lang=\"de\">-n-</i> and <i lang=\"de\">-en-</i> (<i lang=\"de\">Sonnenschein</i>, “sunshine”; <i lang=\"de\">Straßenbahn</i>), <i lang=\"de\">-er-</i> (<i lang=\"de\">Kinderwagen</i>, “baby carriage”; <i lang=\"de\">Bilderbuch</i>, “picture book”), and <i lang=\"de\">-e-</i> (<i lang=\"de\">Hundehütte</i>, “doghouse”). Many compounds have none (<i lang=\"de\">Haustür</i>, <i lang=\"de\">Tischbein</i>), and a final <i lang=\"de\">-e</i> of the first noun is sometimes dropped (<i lang=\"de\">Schulbuch</i>, from <i lang=\"de\">Schule</i>). Which element a noun takes is fixed by usage, and the dictionary records it.</p>",
   "qp": {
    "id": "q-de-comp-linking",
    "variants": [
     {
      "prompt": "Which linking element stands in <i lang=\"de\">Bilderrahmen</i> (“picture frame”)?",
      "options": [
       "<i lang=\"de\">-s-</i>",
       "<i lang=\"de\">-er-</i>",
       "<i lang=\"de\">-en-</i>",
       "none"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Bilderrahmen</i> has the linking element <i lang=\"de\">-er-</i>: <i lang=\"de\">Bild-er-rahmen</i>."
     },
     {
      "prompt": "Does the <i lang=\"de\">-n-</i> of <i lang=\"de\">Sonnenschein</i> mean that there are many suns?",
      "options": [
       "Yes; it is a plural",
       "Yes; it is a dative",
       "No; the linking element has lost the sense of an ending",
       "No; it is a separable prefix"
      ],
      "answer": 2,
      "explain": "Linking elements look like endings but no longer have their sense."
     },
     {
      "prompt": "What happens to the <i lang=\"de\">-e</i> of <i lang=\"de\">Schule</i> in <i lang=\"de\">Schulbuch</i>?",
      "options": [
       "It becomes <i lang=\"de\">-s-</i>",
       "It is doubled",
       "It is kept as <i lang=\"de\">-e-</i>",
       "It is dropped"
      ],
      "answer": 3,
      "explain": "A final <i lang=\"de\">-e</i> of the first noun is sometimes dropped."
     }
    ]
   }
  },
  {
   "id": "adjectives",
   "title": "Compound adjectives",
   "body": "<p>English says “ice-cold” and “sky-blue,” and German makes such adjectives freely and writes them as one word: <i lang=\"de\">eiskalt</i> (“ice-cold”), <i lang=\"de\">himmelblau</i> (“sky-blue”), <i lang=\"de\">schneeweiß</i> (“snow-white”), <i lang=\"de\">hellgrün</i> (“light green”). In many of them the first part only strengthens the second: <i lang=\"de\">steinreich</i> (“very rich,” literally “stone-rich”), <i lang=\"de\">todmüde</i> (“dead tired”), <i lang=\"de\">blitzschnell</i> (“quick as lightning”), <i lang=\"de\">kerngesund</i> (“perfectly healthy”). A compound adjective takes its endings on the last part, like any adjective: <i lang=\"de\">ein eiskaltes Getränk</i>.</p>",
   "qp": {
    "id": "q-de-comp-adjectives",
    "variants": [
     {
      "prompt": "What does <i lang=\"de\">todmüde</i> mean?",
      "options": [
       "“tired of death”",
       "“tired to the point of dying soon”",
       "“tired after a death”",
       "“dead tired,” “exhausted”"
      ],
      "answer": 3,
      "explain": "The first part only strengthens the second."
     },
     {
      "prompt": "Where does a compound adjective take its endings?",
      "options": [
       "On the last part",
       "On the first part",
       "On both parts",
       "It takes none"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Ein eiskaltes Getränk</i>: the ending goes on the last part."
     },
     {
      "prompt": "What does <i lang=\"de\">kerngesund</i> mean?",
      "options": [
       "“healthy at the core of an apple”",
       "“perfectly healthy”",
       "“unhealthy”",
       "“half healthy”"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Kern-</i> (“core”) strengthens <i lang=\"de\">gesund</i>."
     }
    ]
   }
  },
  {
   "id": "verb-stem",
   "title": "Compounds with a verb stem",
   "body": "<p>The first part of a German compound may also be the stem of a verb, without its ending <i lang=\"de\">-en</i>: <i lang=\"de\">der Schreibtisch</i> (“desk,” a table for writing, from <i lang=\"de\">schreiben</i>), <i lang=\"de\">das Wartezimmer</i> (“waiting room,” from <i lang=\"de\">warten</i>, with <i lang=\"de\">-e-</i>), <i lang=\"de\">die Fahrkarte</i> (“ticket,” from <i lang=\"de\">fahren</i>), <i lang=\"de\">das Schwimmbad</i> (“swimming pool”). English does the same with its gerund (“writing desk,” “waiting room”), but German uses the bare stem. So <i lang=\"de\">Lesebuch</i> is not a book that reads but a book for reading, a “reader.”</p>",
   "qp": {
    "id": "q-de-comp-verbstem",
    "variants": [
     {
      "prompt": "From which verb does <i lang=\"de\">Kochbuch</i> take its first part?",
      "options": [
       "<i lang=\"de\">Koch</i>, the noun “cook,” only",
       "<i lang=\"de\">kommen</i>",
       "<i lang=\"de\">kosten</i>",
       "<i lang=\"de\">kochen</i>, “to cook”"
      ],
      "answer": 3,
      "explain": "The stem <i lang=\"de\">koch-</i> of <i lang=\"de\">kochen</i>: a book for cooking."
     },
     {
      "prompt": "What is a <i lang=\"de\">Schlafzimmer</i>?",
      "options": [
       "a bedroom, a room for sleeping",
       "a sleeping room-mate",
       "a room that sleeps",
       "a dream"
      ],
      "answer": 0,
      "explain": "The verb stem <i lang=\"de\">schlaf-</i> names the use of the room."
     },
     {
      "prompt": "How does German form the first part of <i lang=\"de\">Fahrkarte</i>?",
      "options": [
       "From the infinitive <i lang=\"de\">fahren</i> whole",
       "From the bare stem of <i lang=\"de\">fahren</i>",
       "From the participle <i lang=\"de\">gefahren</i>",
       "From the noun <i lang=\"de\">Fahrt</i>"
      ],
      "answer": 1,
      "explain": "German uses the bare stem, where English uses the gerund."
     }
    ]
   }
  }
 ]
};
