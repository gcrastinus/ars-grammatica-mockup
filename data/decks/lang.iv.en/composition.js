window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.en/composition"] = {
 "id": "lang.iv.en/composition",
 "title": "Composition in English",
 "sub": "The kinds of English compound, how they are written, their plurals, and the learned compounds made from Greek and Latin",
 "sources": "Quirk, Greenbaum, Leech, and Svartvik, <i>A Comprehensive Grammar of the English Language</i>; the <i>Oxford English Dictionary</i>; Otto Jespersen, <i>Growth and Structure of the English Language</i>",
 "panels": [
  {
   "id": "kinds",
   "title": "The kinds of compound",
   "body": "<p>We have seen that in a compound such as “lampshade” the second word names the kind of thing and the first narrows it. English makes compounds of many parts of speech in this way. A noun may join a noun (“doorstep,” “firelight”), an adjective a noun (“blackboard,” “highway”), or a verb a noun (“cutthroat,” “scarecrow”). A verb joined to a particle may become a noun (“a takeoff,” “a breakdown,” “a lookout”). And adjectives are compounded too: “sun-dried,” “heartbroken,” “sky-blue,” “hard-working,” “long-legged.”</p>\n<p>Most compounds name a kind of the thing named by their last part: a doorstep is a step. Some, however, name something that the parts only describe: a “cutthroat” is not a throat but a person who cuts throats, and a “redhead” is not a head but a person with red hair. Grammars call these compounds exocentric, that is, “centered outside,” since their head is not among their parts.</p>",
   "qp": {
    "id": "q-en-comp-kinds",
    "variants": [
     {
      "prompt": "What is the head of “firelight”?",
      "options": [
       "“fire”",
       "Both words equally",
       "“light”",
       "Neither; it is a phrase"
      ],
      "answer": 2,
      "explain": "Firelight is a kind of light, the light of a fire."
     },
     {
      "prompt": "Why is “scarecrow” an exocentric compound?",
      "options": [
       "Its second word names the kind",
       "It names a thing that is neither a scare nor a crow",
       "It is written as two words",
       "It has a Latin part"
      ],
      "answer": 1,
      "explain": "A scarecrow is a figure that scares crows; its head lies outside its parts."
     },
     {
      "prompt": "Which compound is made of a verb and a particle?",
      "options": [
       "“a breakdown”",
       "“a bookcase”",
       "“a blackbird”",
       "“a heartbeat”"
      ],
      "answer": 0,
      "explain": "“Break down” is a phrasal verb, and “a breakdown” is the noun made from it."
     }
    ]
   }
  },
  {
   "id": "writing",
   "title": "How compounds are written",
   "body": "<p>English writes its compounds in three ways: closed, as one word (“notebook,” “bedside”); hyphenated (“mother-in-law,” “well-known”); and open, as two words (“ice cream,” “post office”). The choice is a matter of usage and changes over time: “to-morrow” became “tomorrow,” and “electronic mail” became “e-mail” and then, for many writers, “email.” A good dictionary records the current form. One rule holds in careful writing: a compound adjective standing before its noun is hyphenated, whereas the same words after the noun usually are not: “a well-known author,” but “the author is well known”; “a twenty-year-old car,” but “the car is twenty years old.”</p>",
   "qp": {
    "id": "q-en-comp-writing",
    "variants": [
     {
      "prompt": "Which phrase follows careful usage?",
      "options": [
       "“a long awaited reply”",
       "“a long-awaited reply”",
       "“a long-awaited-reply”",
       "“a longawaited reply”"
      ],
      "answer": 1,
      "explain": "A compound adjective before its noun is hyphenated."
     },
     {
      "prompt": "Which sentence follows careful usage?",
      "options": [
       "“The reply was long-awaited-ly.”",
       "“The reply was long-a-waited.”",
       "“The reply was long awaited.”",
       "“The reply was longawaited.”"
      ],
      "answer": 2,
      "explain": "After the noun the compound adjective usually takes no hyphen."
     },
     {
      "prompt": "What decides whether a compound is written as one word, with a hyphen, or as two?",
      "options": [
       "A fixed rule of English grammar",
       "The number of syllables",
       "Whether the parts are Germanic",
       "Usage, which a good dictionary records"
      ],
      "answer": 3,
      "explain": "The form of a compound is a matter of usage and changes over time."
     }
    ]
   }
  },
  {
   "id": "plurals",
   "title": "The plural of a compound",
   "body": "<p>A compound usually takes the plural ending on its head, which in most English compounds is the last part: “doorsteps,” “highways.” When the head stands first, as in some compounds of a noun with a phrase, the head takes the plural: “mothers-in-law,” “passers-by,” “attorneys general” (beside the common “attorney generals”). Compounds in “-ful” take the plural at the end in present usage: “spoonfuls,” “handfuls,” “cupfuls,” not “spoonsful.” And a compound whose last part is a word with an irregular plural keeps that plural: “firemen,” “grandchildren.”</p>",
   "qp": {
    "id": "q-en-comp-plurals",
    "variants": [
     {
      "prompt": "What is the plural of “son-in-law”?",
      "options": [
       "“son-in-laws”",
       "“sons-in-laws”",
       "“sons-in-law”",
       "“son-ins-law”"
      ],
      "answer": 2,
      "explain": "The head, “son,” stands first and takes the plural."
     },
     {
      "prompt": "What is the plural of “cupful” in present usage?",
      "options": [
       "“cupsful”",
       "“cupfuls”",
       "“cupfulls”",
       "“cupful”"
      ],
      "answer": 1,
      "explain": "Compounds in “-ful” take the plural at the end."
     },
     {
      "prompt": "What is the plural of “footman”?",
      "options": [
       "“footmen”",
       "“footmans”",
       "“feetmen”",
       "“feetman”"
      ],
      "answer": 0,
      "explain": "The last part, “man,” keeps its irregular plural."
     }
    ]
   }
  },
  {
   "id": "learned",
   "title": "Learned compounds from Greek and Latin",
   "body": "<p>English also builds compounds of parts that are not English words at all but combining forms taken from Greek and Latin: “autograph” (Greek <i>autos</i>, “self,” and <i>graphein</i>, “to write”), “pentagon” (<i>pente</i>, “five,” and <i>gōnia</i>, “angle”), “biology” (<i>bios</i>, “life,” and <i>logos</i>, “account”), “agriculture” (Latin <i>ager</i>, “field,” and <i>cultūra</i>, “tilling”). Grammars call these neoclassical compounds, because most were made in modern times for modern things. Greek forms usually join with a connecting “-o-” (“thermometer,” “photograph”), and Latin forms with “-i-” (“pesticide,” “insecticide,” “carnivore”). Careful usage keeps the two stocks apart where it can, though some mixed forms, such as “television” (Greek and Latin), are fully established.</p>",
   "qp": {
    "id": "q-en-comp-learned",
    "variants": [
     {
      "prompt": "What does “hydrophobia” join?",
      "options": [
       "Latin forms for “water” and “fear”",
       "An English word and a suffix",
       "Greek forms for “water” and “fear”",
       "Two English words"
      ],
      "answer": 2,
      "explain": "<i>Hydōr</i>, “water,” and <i>phobos</i>, “fear,” both Greek."
     },
     {
      "prompt": "Why are words such as “telescope” called neoclassical compounds?",
      "options": [
       "They were used by the Greek and Roman authors",
       "They join Greek or Latin forms in words made in modern times",
       "They are compounds of two English words",
       "They have no meaning of their own"
      ],
      "answer": 1,
      "explain": "Most such words were coined in modern times from classical parts."
     },
     {
      "prompt": "Which connecting vowel do Latin combining forms usually take?",
      "options": [
       "“-i-,” as in “herbicide”",
       "“-o-,” as in “photograph”",
       "“-a-,” as in “planetarium”",
       "none at all"
      ],
      "answer": 0,
      "explain": "Latin forms join with “-i-,” Greek forms with “-o-.”"
     }
    ]
   }
  }
 ]
};
