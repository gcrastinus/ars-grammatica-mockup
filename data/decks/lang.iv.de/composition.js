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
   "body": "<p>German joins nouns far more freely than English, and a German compound can grow long. The rule we have seen, that the last noun names the kind and gives the gender, also tells us how to read such a word: from the end. <i>Die Straßenbahnhaltestelle</i> is a <i>Haltestelle</i> (“stopping place,” “stop”), and <i>Straßenbahn</i> (“streetcar,” “street railway”) says which kind: “the streetcar stop.” <i>Der Briefkastenschlüssel</i> is a <i>Schlüssel</i> (“key”) for a <i>Briefkasten</i> (“mailbox”). So the long word can be taken apart into its compounds, each of which is read in the same way, and the English rendering usually runs the other way, with “of” or “for.”</p>",
   "qp": {
    "id": "q-de-comp-reading",
    "variants": [
     {
      "prompt": "What is <i>die Kinderzimmertür</i>?",
      "options": [
       "the room of the children’s door",
       "the door of the children’s room",
       "the children of the room door",
       "a door for children only"
      ],
      "answer": 1,
      "explain": "Read from the end: a <i>Tür</i> of the <i>Kinderzimmer</i>."
     },
     {
      "prompt": "What gender is <i>Hausschlüssel</i>, from <i>das Haus</i> and <i>der Schlüssel</i>?",
      "options": [
       "Neuter",
       "Feminine",
       "Masculine",
       "It has none"
      ],
      "answer": 2,
      "explain": "The last noun gives the gender: <i>der Hausschlüssel</i>."
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
   "body": "<p>We have seen the linking <i>-s-</i> in <i>Geburtstag</i>. German has several such linking elements (<i>Fugenelemente</i>), and they often look like case or plural endings, though they no longer have that sense. Besides <i>-s-</i> and <i>-es-</i> (<i>Liebesbrief</i>, <i>Tageslicht</i>), there are <i>-n-</i> and <i>-en-</i> (<i>Sonnenschein</i>, “sunshine”; <i>Straßenbahn</i>), <i>-er-</i> (<i>Kinderwagen</i>, “baby carriage”; <i>Bilderbuch</i>, “picture book”), and <i>-e-</i> (<i>Hundehütte</i>, “doghouse”). Many compounds have none (<i>Haustür</i>, <i>Tischbein</i>), and a final <i>-e</i> of the first noun is sometimes dropped (<i>Schulbuch</i>, from <i>Schule</i>). Which element a noun takes is fixed by usage, and the dictionary records it.</p>",
   "qp": {
    "id": "q-de-comp-linking",
    "variants": [
     {
      "prompt": "Which linking element stands in <i>Bilderrahmen</i> (“picture frame”)?",
      "options": [
       "<i>-s-</i>",
       "<i>-er-</i>",
       "<i>-en-</i>",
       "none"
      ],
      "answer": 1,
      "explain": "<i>Bild-er-rahmen</i>."
     },
     {
      "prompt": "Does the <i>-n-</i> of <i>Sonnenschein</i> mean that there are many suns?",
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
      "prompt": "What happens to the <i>-e</i> of <i>Schule</i> in <i>Schulbuch</i>?",
      "options": [
       "It becomes <i>-s-</i>",
       "It is doubled",
       "It is kept as <i>-e-</i>",
       "It is dropped"
      ],
      "answer": 3,
      "explain": "A final <i>-e</i> of the first noun is sometimes dropped."
     }
    ]
   }
  },
  {
   "id": "adjectives",
   "title": "Compound adjectives",
   "body": "<p>English says “ice-cold” and “sky-blue,” and German makes such adjectives freely and writes them as one word: <i>eiskalt</i> (“ice-cold”), <i>himmelblau</i> (“sky-blue”), <i>schneeweiß</i> (“snow-white”), <i>hellgrün</i> (“light green”). In many of them the first part only strengthens the second: <i>steinreich</i> (“very rich,” literally “stone-rich”), <i>todmüde</i> (“dead tired”), <i>blitzschnell</i> (“quick as lightning”), <i>kerngesund</i> (“perfectly healthy”). A compound adjective takes its endings on the last part, like any adjective: <i>ein eiskaltes Getränk</i>.</p>",
   "qp": {
    "id": "q-de-comp-adjectives",
    "variants": [
     {
      "prompt": "What does <i>todmüde</i> mean?",
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
      "explain": "<i>Ein eiskaltes Getränk</i>: the ending goes on the last part."
     },
     {
      "prompt": "What does <i>kerngesund</i> mean?",
      "options": [
       "“healthy at the core of an apple”",
       "“perfectly healthy”",
       "“unhealthy”",
       "“half healthy”"
      ],
      "answer": 1,
      "explain": "<i>Kern-</i> (“core”) strengthens <i>gesund</i>."
     }
    ]
   }
  },
  {
   "id": "verb-stem",
   "title": "Compounds with a verb stem",
   "body": "<p>The first part of a German compound may also be the stem of a verb, without its ending <i>-en</i>: <i>der Schreibtisch</i> (“desk,” a table for writing, from <i>schreiben</i>), <i>das Wartezimmer</i> (“waiting room,” from <i>warten</i>, with <i>-e-</i>), <i>die Fahrkarte</i> (“ticket,” from <i>fahren</i>), <i>das Schwimmbad</i> (“swimming pool”). English does the same with its gerund (“writing desk,” “waiting room”), but German uses the bare stem. So <i>Lesebuch</i> is not a book that reads but a book for reading, a “reader.”</p>",
   "qp": {
    "id": "q-de-comp-verbstem",
    "variants": [
     {
      "prompt": "From which verb does <i>Kochbuch</i> take its first part?",
      "options": [
       "<i>Koch</i>, the noun “cook,” only",
       "<i>kommen</i>",
       "<i>kosten</i>",
       "<i>kochen</i>, “to cook”"
      ],
      "answer": 3,
      "explain": "The stem <i>koch-</i> of <i>kochen</i>: a book for cooking."
     },
     {
      "prompt": "What is a <i>Schlafzimmer</i>?",
      "options": [
       "a bedroom, a room for sleeping",
       "a sleeping room-mate",
       "a room that sleeps",
       "a dream"
      ],
      "answer": 0,
      "explain": "The verb stem <i>schlaf-</i> names the use of the room."
     },
     {
      "prompt": "How does German form the first part of <i>Fahrkarte</i>?",
      "options": [
       "From the infinitive <i>fahren</i> whole",
       "From the bare stem of <i>fahren</i>",
       "From the participle <i>gefahren</i>",
       "From the noun <i>Fahrt</i>"
      ],
      "answer": 1,
      "explain": "German uses the bare stem, where English uses the gerund."
     }
    ]
   }
  }
 ]
};
