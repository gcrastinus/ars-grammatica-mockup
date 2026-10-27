/* Order [v.ex.order]  Exercise set opened from the Exercise button of v.order. Written 24 items in three fixed sets. */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.order'] = {
 "id": "v.ex.order",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "Order",
 "openedFrom": "v.order (Exercise button)",
 "covers": [
  {
   "deck": "v.order",
   "cards": [
    "what-order",
    "natural",
    "quintilian-rules",
    "emphasis",
    "latin-freedom",
    "english-fixed",
    "construing",
    "typology-1",
    "typology-2",
    "german-french",
    "summary"
   ]
  }
 ],
 "skill": "Tell customary from reversed order; find the emphasized word and the separated words; put a Latin sentence into the natural order; say what order does in English, Latin, German, and French, and what the classification by order shows.",
 "types": [
  "sort",
  "identify",
  "transform",
  "mc"
 ],
 "pool": 24,
 "rotation": "A, B, C, A, … (never shuffled)",
 "sets": {
  "A": 8,
  "B": 8,
  "C": 8
 },
 "limit": "Only what v.order teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "or-A01",
   "set": "A",
   "deck": "v.order",
   "type": "sort",
   "prompt": "Sort each phrase by whether it keeps the customary order of naming or reverses it.",
   "entries": [
    "“knife and fork”",
    "“fork and knife”",
    "“ladies and gentlemen”",
    "“gentlemen and ladies”",
    "“sooner or later”",
    "“later or sooner”"
   ],
   "bins": [
    "Customary order",
    "Reversed order"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "Quintilian’s natural order is the order in which things are customarily named: “knife and fork,” “ladies and gentlemen,” “sooner or later.” The reversed phrases are understood, but they strike the ear as unusual."
  },
  {
   "id": "or-A02",
   "set": "A",
   "deck": "v.order",
   "type": "identify",
   "prompt": "<i>Fīliam rēx laudāvit</i> (“the king praised his daughter”). Click the word emphasized by its position.",
   "tokens": [
    "<i>Fīliam</i>",
    "<i>rēx</i>",
    "<i>laudāvit</i>"
   ],
   "answer": 0,
   "explain": "The usual order would be <i>rēx fīliam laudāvit</i>. Placing the object <i>fīliam</i> first, out of its usual place, stresses it."
  },
  {
   "id": "or-A03",
   "set": "A",
   "deck": "v.order",
   "type": "transform",
   "prompt": "Put the Latin sentence into the natural order (subject, verb, object): <i>pecūniam mercātor numerat</i> (“the merchant counts the money”).",
   "accept": [
    "mercātor numerat pecūniam",
    "mercator numerat pecuniam"
   ],
   "explain": "Construing puts the subject first, then the verb, then the object: <i>mercātor numerat pecūniam</i>. The meaning does not change, because the endings show the construction."
  },
  {
   "id": "or-A04",
   "set": "A",
   "deck": "v.order",
   "type": "mc",
   "prompt": "In which of these languages does the finite verb of a main clause stand in the second place, whatever comes first?",
   "options": [
    "French",
    "English",
    "Japanese",
    "German"
   ],
   "answer": 3,
   "explain": "In a German main clause the finite verb stands second: <i>Heute lese ich</i>, not <i>Heute ich lese</i>. In a subordinate clause it goes to the end."
  },
  {
   "id": "or-A05",
   "set": "A",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Which of these English sentences moves a word out of its usual place for emphasis?",
   "options": [
    "“This road I know well”",
    "“I know this road well”",
    "“Do I know this road?”",
    "“I know the road well”"
   ],
   "answer": 0,
   "explain": "“This road I know well” puts the object first, before the subject and verb, to stress it. The others keep the usual order, or ask a question."
  },
  {
   "id": "or-A06",
   "set": "A",
   "deck": "v.order",
   "type": "mc",
   "prompt": "With what does Quintilian prefer to end a sentence, where art permits?",
   "options": [
    "A noun",
    "A verb",
    "An adjective",
    "A conjunction"
   ],
   "answer": 1,
   "explain": "Quintilian says that it is best to end the sentence with a verb, because the strength of language lies in verbs; but he treats this as a preference, not a rule."
  },
  {
   "id": "or-A07",
   "set": "A",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Japanese <i>heya ni</i> means “in the room.” What kind of word is <i>ni</i>?",
   "options": [
    "A preposition",
    "A verb",
    "A postposition",
    "An article"
   ],
   "answer": 2,
   "explain": "<i>Ni</i> stands after the noun and relates it as English “in” does, so it is a postposition. Languages that put the verb after the object usually have postpositions."
  },
  {
   "id": "or-A08",
   "set": "A",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Why is English word order largely fixed?",
   "options": [
    "Because English has many case endings",
    "Because Quintilian forbade changes of order",
    "Because English cannot give emphasis",
    "Because the order carries the construction"
   ],
   "answer": 3,
   "explain": "English nouns have lost their case endings, so the order carries the construction: the subject before the verb, the object after it."
  },
  {
   "id": "or-B01",
   "set": "B",
   "deck": "v.order",
   "type": "sort",
   "prompt": "Sort each Latin sentence by whether it keeps the usual order (subject, object, verb) or departs from it.",
   "entries": [
    "<i>Mārcus epistulam scrībit</i>",
    "<i>epistulam Mārcus scrībit</i>",
    "<i>puerī pilam iaciunt</i>",
    "<i>iaciunt puerī pilam</i>",
    "<i>nautae ventum timent</i>",
    "<i>ventum timent nautae</i>"
   ],
   "bins": [
    "Usual order",
    "Departs from it"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "The usual Latin order puts the subject first and the verb last. <i>Epistulam Mārcus scrībit</i>, <i>iaciunt puerī pilam</i>, and <i>ventum timent nautae</i> depart from it, for emphasis or effect, and still mean the same."
  },
  {
   "id": "or-B02",
   "set": "B",
   "deck": "v.order",
   "type": "identify",
   "prompt": "<i>Altōs videt viātor montēs</i> (“the traveler sees the high mountains”). Click the two words that agree with each other but stand apart.",
   "tokens": [
    "<i>Altōs</i>",
    "<i>videt</i>",
    "<i>viātor</i>",
    "<i>montēs</i>"
   ],
   "answer": [
    0,
    3
   ],
   "explain": "<i>Altōs</i> agrees with <i>montēs</i>, masculine plural accusative, though the verb and the subject stand between them. The endings, not the positions, show that they belong together."
  },
  {
   "id": "or-B03",
   "set": "B",
   "deck": "v.order",
   "type": "transform",
   "prompt": "Put the Latin sentence into the natural order (subject, verb, object): <i>carmen poēta recitat</i> (“the poet recites the poem”).",
   "accept": [
    "poēta recitat carmen",
    "poeta recitat carmen"
   ],
   "explain": "The subject <i>poēta</i> comes first, then the verb, then the object: <i>poēta recitat carmen</i>."
  },
  {
   "id": "or-B04",
   "set": "B",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Where does the finite verb stand in a German subordinate clause?",
   "options": [
    "At the end",
    "In the second place",
    "In the first place",
    "Before the subject"
   ],
   "answer": 0,
   "explain": "In a German subordinate clause the finite verb goes to the end, as in <i>dass er das Buch liest</i>; in a main clause it stands second."
  },
  {
   "id": "or-B05",
   "set": "B",
   "deck": "v.order",
   "type": "mc",
   "prompt": "In French <i>Je la lis</i> (“I read it”), why does <i>la</i> stand before the verb?",
   "options": [
    "French is an SOV language",
    "A pronoun object comes first",
    "<i>La</i> is the subject",
    "It is placed there for emphasis"
   ],
   "answer": 1,
   "explain": "French usually has SVO order, but a pronoun object stands before the verb: <i>Je lis la lettre</i>, but <i>Je la lis</i>."
  },
  {
   "id": "or-B06",
   "set": "B",
   "deck": "v.order",
   "type": "mc",
   "prompt": "According to Greenberg’s Universal 3, what does a language whose usual order is VSO always have?",
   "options": [
    "Postpositions",
    "No words of place",
    "Prepositions",
    "A free order"
   ],
   "answer": 2,
   "explain": "Greenberg stated that languages whose usual order is VSO always have prepositions, placed before the noun."
  },
  {
   "id": "or-B07",
   "set": "B",
   "deck": "v.order",
   "type": "mc",
   "prompt": "What does Quintilian call the order in which things are customarily named, as in “young and old”?",
   "options": [
    "Artificial order",
    "Hyperbaton",
    "Construing",
    "Natural order"
   ],
   "answer": 3,
   "explain": "Quintilian calls it natural order: the order in which things are customarily named, in preference to the reverse."
  },
  {
   "id": "or-B08",
   "set": "B",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Which of these sentences has a misplaced phrase?",
   "options": [
    "“The boy fed the goat in the blue shirt”",
    "“The boy in the blue shirt fed the goat”",
    "“In the morning the boy fed the goat”",
    "“The boy fed the goat in the morning”"
   ],
   "answer": 0,
   "explain": "In “The boy fed the goat in the blue shirt,” the phrase attaches to the nearest noun, so the goat seems to wear the shirt. English order carries the construction, so the phrase belongs next to “boy.”"
  },
  {
   "id": "or-C01",
   "set": "C",
   "deck": "v.order",
   "type": "sort",
   "prompt": "Sort each sentence by what shows which word is the subject: the order of the words or their endings.",
   "entries": [
    "“The judge fined the thief”",
    "<i>fūrem iūdex multāvit</i>",
    "“The boy grooms the horse”",
    "<i>equum puer cūrat</i>",
    "“The thief fined the judge”",
    "<i>iūdex fūrem multāvit</i>"
   ],
   "bins": [
    "Order",
    "Endings"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "English shows the subject by its place before the verb, so exchanging the nouns exchanges the roles. Latin shows it by the nominative ending, so <i>iūdex</i> and <i>puer</i> are subjects wherever they stand."
  },
  {
   "id": "or-C02",
   "set": "C",
   "deck": "v.order",
   "type": "identify",
   "prompt": "<i>Dulcēs canit avis cantūs</i> (“the bird sings sweet songs”). Click the two words that agree with each other but stand apart.",
   "tokens": [
    "<i>Dulcēs</i>",
    "<i>canit</i>",
    "<i>avis</i>",
    "<i>cantūs</i>"
   ],
   "answer": [
    0,
    3
   ],
   "explain": "<i>Dulcēs</i> agrees with <i>cantūs</i>, masculine plural accusative; the verb and the subject stand between them. Separation of this kind is hyperbaton."
  },
  {
   "id": "or-C03",
   "set": "C",
   "deck": "v.order",
   "type": "transform",
   "prompt": "Put the Latin sentence into the natural order (subject, verb, object): <i>leōnem vēnātor petit</i> (“the hunter attacks the lion”).",
   "accept": [
    "vēnātor petit leōnem",
    "venator petit leonem"
   ],
   "explain": "The subject <i>vēnātor</i> comes first, then the verb <i>petit</i>, then the object <i>leōnem</i>."
  },
  {
   "id": "or-C04",
   "set": "C",
   "deck": "v.order",
   "type": "mc",
   "prompt": "A language usually puts its verb after its object. What does Greenberg’s finding lead us to expect in it?",
   "options": [
    "Prepositions",
    "Postpositions",
    "VSO order",
    "No case endings"
   ],
   "answer": 1,
   "explain": "Languages in which the verb comes after the object usually have postpositions, placed after the noun. This is a tendency, not a rule without exception, as Latin shows."
  },
  {
   "id": "or-C05",
   "set": "C",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Why did grammarians teach students to construe Latin sentences?",
   "options": [
    "To change the meaning of the sentence",
    "To improve the rhythm of the line",
    "To make the dependences visible",
    "To remove the Latin endings"
   ],
   "answer": 2,
   "explain": "Construing puts each word beside the word on which it depends, so it makes the dependences visible without changing the meaning."
  },
  {
   "id": "or-C06",
   "set": "C",
   "deck": "v.order",
   "type": "mc",
   "prompt": "In German <i>Morgen fahre ich nach Berlin</i> (“Tomorrow I am going to Berlin”), why does <i>fahre</i> come before <i>ich</i>?",
   "options": [
    "The subject must come last",
    "It is a question",
    "<i>Ich</i> is emphasized",
    "The verb must stand second"
   ],
   "answer": 3,
   "explain": "In a German main clause the finite verb stands in the second place, whatever comes first. <i>Morgen</i> holds the first place, so the verb follows it and the subject comes after."
  },
  {
   "id": "or-C07",
   "set": "C",
   "deck": "v.order",
   "type": "mc",
   "prompt": "Which statement about Latin word order is true?",
   "options": [
    "It has a usual order but departs from it",
    "Its order is fixed, as English order is",
    "It has no usual order at all",
    "It always puts the verb first"
   ],
   "answer": 0,
   "explain": "Latin has a usual order, subject first and verb last, but its endings free its authors to depart from it for emphasis and effect."
  },
  {
   "id": "or-C08",
   "set": "C",
   "deck": "v.order",
   "type": "mc",
   "prompt": "How does Quintilian judge a fixed rule that nouns must precede verbs and verbs adverbs?",
   "options": [
    "As the law of good Latin",
    "As an extravagance",
    "As required by the endings",
    "As the natural order"
   ],
   "answer": 1,
   "explain": "Quintilian calls such a rule a mere extravagance, since the reverse order is often adopted with excellent effect."
  }
 ]
};
