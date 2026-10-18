/* Exercise set: Sign and Significant Voice [i.ex.sign]
   WRITTEN (18 Oct 2026); hand-edited; do not regenerate.
   72 items in three fixed sets of 24 (A, B, C in rotation, never reordered), 4 per deck (I.1 to I.6) in each set,
   ordered from easier to harder. The 12 multiple-choice items of the first sample are kept in set A; the other 60 are
   hands-on: click the word or words asked for (identify; `answer` is an index, or an array when several words are to
   be clicked), sort each entry into one of the bins (sort; `answer` gives the bin of each entry), or choose the kind
   of sentence. Options are shown shuffled and the key follows the option; some items add a "why" prompt with a model
   answer. Nothing repeats the section review (i.review) or the question points. Taught-only limit: nothing after I.6. */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['i.ex.sign'] = {
 "id": "i.ex.sign",
 "kind": "exercise",
 "status": "written",
 "section": "I",
 "title": "Sign and Significant Voice",
 "covers": [
  {
   "deck": "i.sign"
  },
  {
   "deck": "i.imposition"
  },
  {
   "deck": "i.consignification"
  },
  {
   "deck": "i.syncategorematic"
  },
  {
   "deck": "i.functions"
  },
  {
   "deck": "i.ambiguity"
  }
 ],
 "pool": 72,
 "sets": {
  "A": 24,
  "B": 24,
  "C": 24
 },
 "rotation": "A, B, C, A, … (never shuffled)",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "sv-fun-1",
   "set": "A",
   "deck": "i.functions",
   "prompt": "“Close the gate.” Which kind of sentence is this?",
   "options": [
    "A statement",
    "A command",
    "A question",
    "A prayer"
   ],
   "answer": 1,
   "explain": "The sentence asks that something be made so; it does not say that anything is so. It is a command, and so it is neither true nor false.",
   "type": "mc"
  },
  {
   "id": "sv-sign-1",
   "set": "A",
   "deck": "i.sign",
   "prompt": "A footprint in the mud leads a hunter to think of a deer. What kind of sign is the footprint?",
   "options": [
    "A conventional sign, because the hunter understands it",
    "A natural sign, because it is connected with the deer by nature",
    "A symbol, because it signifies by agreement",
    "Not a sign, because no word is spoken"
   ],
   "answer": 1,
   "explain": "The footprint signifies the deer because the deer made it, not because anyone means it to signify. St. Augustine calls such signs natural signs (<i>De doctrina christiana</i> II.1.2).",
   "type": "mc"
  },
  {
   "id": "sv-amb-3",
   "set": "A",
   "deck": "i.ambiguity",
   "type": "identify",
   "prompt": "“The tank was full when we arrived.” Click the word that has two meanings.",
   "tokens": [
    "The",
    "tank",
    "was",
    "full",
    "when",
    "we",
    "arrived."
   ],
   "answer": 1,
   "explain": "“Tank” can mean a container for liquid or an armored vehicle, and either can be “full.” The double sense lies in a single word imposed with more than one meaning."
  },
  {
   "id": "sv-imp-1",
   "set": "A",
   "deck": "i.imposition",
   "prompt": "A dog barks at a stranger. Is the bark a word?",
   "options": [
    "No; it signifies by nature, not by imposition",
    "Yes, because it signifies something to the dog’s owner",
    "Yes, because it is a sound made by an animal",
    "No, because it signifies nothing at all"
   ],
   "answer": 0,
   "explain": "The bark signifies something by nature, as a groan signifies pain, but it is not a word, because a word signifies by imposition. Aristotle says that the inarticulate sounds of animals are significant, yet none of them is a noun (<i>De interpretatione</i> 2).",
   "type": "mc"
  },
  {
   "id": "sv-syn-1",
   "set": "A",
   "deck": "i.syncategorematic",
   "prompt": "In “No student failed,” which word is syncategorematic?",
   "options": [
    "“No”",
    "“Student”",
    "“Failed”",
    "None of them"
   ],
   "answer": 0,
   "explain": "“No” does not bring a thing to mind by itself; it determines how “student” is taken, namely that what is said is said of none. “Student” and “failed” signify something by themselves.",
   "type": "mc"
  },
  {
   "id": "sv-sign-4",
   "set": "A",
   "deck": "i.sign",
   "type": "identify",
   "prompt": "“Seeing ashes in the fireplace, Maria knew that there had been a fire.” Click the word that names the sign.",
   "tokens": [
    "Seeing",
    "ashes",
    "in",
    "the",
    "fireplace,",
    "Maria",
    "knew",
    "that",
    "there",
    "had",
    "been",
    "a",
    "fire."
   ],
   "answer": 1,
   "explain": "The ashes are the sign, what is perceived; the fire is what they signify; and Maria is the one who knows by means of them. Every sign involves these three."
  },
  {
   "id": "sv-con-3",
   "set": "A",
   "deck": "i.consignification",
   "type": "identify",
   "prompt": "“The old fisherman mended his nets.” Click the word that consignifies time.",
   "tokens": [
    "The",
    "old",
    "fisherman",
    "mended",
    "his",
    "nets."
   ],
   "answer": 3,
   "explain": "“Mended” signifies an action and, along with it, that the action took place in the past. The verb consignifies time; “fisherman” and “nets” signify things without time."
  },
  {
   "id": "sv-fun-4",
   "set": "A",
   "deck": "i.functions",
   "type": "identify",
   "prompt": "“Come here, Daniel, and sit down.” Click the word that calls someone.",
   "tokens": [
    "Come",
    "here,",
    "Daniel,",
    "and",
    "sit",
    "down."
   ],
   "answer": 2,
   "explain": "“Daniel” calls the one addressed; the tradition names this the vocative. The rest of the sentence is a command."
  },
  {
   "id": "sv-amb-1",
   "set": "A",
   "deck": "i.ambiguity",
   "prompt": "“The pitcher was on the table.” What are the two senses, and where does the ambiguity lie?",
   "options": [
    "A jug, or a player who throws the ball; the ambiguity lies in the single word “pitcher”",
    "A jug, or a player who throws the ball; the ambiguity lies in the arrangement of the words",
    "There is only one sense, a jug",
    "The table, or the floor; the ambiguity lies in “on”"
   ],
   "answer": 0,
   "explain": "“Pitcher” has been imposed with two meanings, a jug and a player who throws the ball, so the double sense lies in a single word. The arrangement of the words is clear.",
   "type": "mc"
  },
  {
   "id": "sv-sign-3",
   "set": "A",
   "deck": "i.sign",
   "type": "sort",
   "prompt": "Sort each sign as natural or conventional.",
   "entries": [
    "A bruise where a blow landed",
    "Goose bumps raised by the cold",
    "A wilted leaf in dry soil",
    "Thunder after a flash of lightning",
    "Three knocks a household uses to mean “come in”",
    "The word “danger” on a door"
   ],
   "bins": [
    "Natural sign",
    "Conventional sign"
   ],
   "answer": [
    0,
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "A bruise, goose bumps, a wilted leaf, and thunder are produced by what they signify (a blow, cold, a lack of water, and lightning), so they signify by nature. Three knocks and the word “danger” signify only because people have agreed on what they mean, so they are conventional signs."
  },
  {
   "id": "sv-imp-3",
   "set": "A",
   "deck": "i.imposition",
   "type": "sort",
   "prompt": "Sort each word as a name of the first or the second imposition.",
   "entries": [
    "“valley”",
    "“yellow”",
    "“swim”",
    "“wool”",
    "“pronoun”"
   ],
   "bins": [
    "First imposition",
    "Second imposition"
   ],
   "answer": [
    0,
    0,
    0,
    0,
    1
   ],
   "explain": "“Valley,” “yellow,” “swim,” and “wool” were imposed to signify things: a stretch of land, a color, an action, and a kind of fiber. “Pronoun” signifies a kind of word, so it is a name of the second imposition."
  },
  {
   "id": "sv-syn-3",
   "set": "A",
   "deck": "i.syncategorematic",
   "type": "identify",
   "prompt": "“Every child and no adult laughed.” Click every syncategorematic word.",
   "tokens": [
    "Every",
    "child",
    "and",
    "no",
    "adult",
    "laughed."
   ],
   "answer": [
    0,
    2,
    3
   ],
   "explain": "“Every,” “and,” and “no” bring nothing definite to mind by themselves; they determine how the other words are taken: all children, no adults, and the two joined. “Child,” “adult,” and “laughed” signify by themselves, so they are categorematic."
  },
  {
   "id": "sv-fun-2",
   "set": "A",
   "deck": "i.functions",
   "prompt": "Which of these sentences can be true or false?",
   "options": [
    "“Is the gate closed?”",
    "“May the gate stay closed!”",
    "“The gate is closed.”",
    "“Close the gate, please.”"
   ],
   "answer": 2,
   "explain": "Only a statement says that something is or is not so, and only a statement is true or false. The question, the prayer, and the request are complete sentences, but none of them asserts anything.",
   "type": "mc"
  },
  {
   "id": "sv-con-1",
   "set": "A",
   "deck": "i.consignification",
   "prompt": "Latin <i>cucurrit</i> means “he ran.” What does it consignify along with its proper meaning, running?",
   "options": [
    "A place",
    "Past time",
    "A kind of horse",
    "Nothing; Latin verbs do not consignify"
   ],
   "answer": 1,
   "explain": "The proper meaning of <i>cucurrit</i> is running, and along with that meaning it signifies that the running took place in the past. Aristotle says that the verb “carries with it the notion of time” (<i>De interpretatione</i> 3).",
   "type": "mc"
  },
  {
   "id": "sv-syn-2",
   "set": "A",
   "deck": "i.syncategorematic",
   "prompt": "Which Latin word is categorematic?",
   "options": [
    "<i>omnis</i> (“every”)",
    "<i>non</i> (“not”)",
    "<i>si</i> (“if”)",
    "<i>equus</i> (“horse”)"
   ],
   "answer": 3,
   "explain": "<i>Equus</i> signifies something definite by itself, a kind of animal, and it can be what a sentence is about. <i>Omnis</i>, <i>non</i>, and <i>si</i> signify only with other words.",
   "type": "mc"
  },
  {
   "id": "sv-imp-2",
   "set": "A",
   "deck": "i.imposition",
   "prompt": "In “‘Verb’ has four letters,” what does the word “verb” stand for?",
   "options": [
    "An action in the world",
    "A thing named by the first imposition",
    "Nothing, because it is in quotation marks",
    "The word “verb” itself, as a word"
   ],
   "answer": 3,
   "explain": "The quotation marks show that “verb” is mentioned, not used: the sentence speaks about the word itself, not about what it signifies. Any word can be mentioned in this way, as in “‘Rome’ has four letters”; the marks in writing let the reader tell mention from use.",
   "type": "mc"
  },
  {
   "id": "sv-con-4",
   "set": "A",
   "deck": "i.consignification",
   "type": "sort",
   "prompt": "Sort each word by its mode of signifying: does it present the reality as a thing, as something happening, or as a quality of something else?",
   "entries": [
    "“thirst” in “Thirst woke him”",
    "“thirsts” in “The traveler thirsts”",
    "“thirsty” in “a thirsty traveler”",
    "“grief” in “Grief silenced the room”",
    "“grieves” in “She grieves”",
    "“sorrow” in “Sorrow followed the news”",
    "“mourns” in “He mourns”"
   ],
   "bins": [
    "As a thing",
    "As something happening",
    "As a quality of something else"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    0,
    1
   ],
   "explain": "“Thirst,” “grief,” and “sorrow” signify by way of a thing. “Thirsts,” “grieves,” and “mourns” signify by way of something happening. “Thirsty” signifies by way of a quality belonging to something else. These are different modes of signifying."
  },
  {
   "id": "sv-fun-3",
   "set": "A",
   "deck": "i.functions",
   "type": "sort",
   "prompt": "Sort each sentence by its kind.",
   "entries": [
    "“The cistern is empty.”",
    "“Snow fell in the night.”",
    "“The candle is lit.”",
    "“Is the cistern empty?”",
    "“Bolt the shutter.”",
    "“Light the candle.”",
    "“Lord, heal the child.”"
   ],
   "bins": [
    "Statement",
    "Question",
    "Command",
    "Prayer",
    "Call"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    2,
    2,
    3
   ],
   "explain": "“The cistern is empty,” “Snow fell in the night,” and “The candle is lit” say that something is so, so they are statements. “Is the cistern empty?” asks. “Bolt the shutter” and “Light the candle” ask that something be done. “Lord, heal the child” asks God for something. Only the statements are true or false."
  },
  {
   "id": "sv-syn-4",
   "set": "A",
   "deck": "i.syncategorematic",
   "type": "sort",
   "prompt": "Sort each word as categorematic or syncategorematic.",
   "entries": [
    "“window”",
    "“melts”",
    "“round”",
    "“baker”",
    "“carries”",
    "“unless”",
    "“lest”"
   ],
   "bins": [
    "Categorematic",
    "Syncategorematic"
   ],
   "answer": [
    0,
    0,
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "“Window” and “baker” signify things, “round” signifies a quality, and “melts” and “carries” signify actions. Each can be what a sentence is about or what is said of it. “Unless” and “lest” signify only together with other words."
  },
  {
   "id": "sv-amb-2",
   "set": "A",
   "deck": "i.ambiguity",
   "prompt": "“She photographed the dog in her pajamas.” Where does the ambiguity lie?",
   "options": [
    "In the single word “pajamas”",
    "In the single word “photographed”",
    "There is no ambiguity",
    "In the arrangement of the words"
   ],
   "answer": 3,
   "explain": "No single word has two meanings. The phrase “in her pajamas” can belong to the woman who took the photograph or to the dog, so the double sense lies in the arrangement of the words.",
   "type": "mc"
  },
  {
   "id": "sv-imp-4",
   "set": "A",
   "deck": "i.imposition",
   "type": "identify",
   "prompt": "“In this sentence the subject comes first.” Click every name of the second imposition.",
   "tokens": [
    "In",
    "this",
    "sentence",
    "the",
    "subject",
    "comes",
    "first."
   ],
   "answer": [
    2,
    4
   ],
   "explain": "“Sentence” and “subject” signify words and arrangements of words, so they are names of the second imposition, like most technical terms of grammar. The other words signify things, actions, or order in the usual way."
  },
  {
   "id": "sv-amb-4",
   "set": "A",
   "deck": "i.ambiguity",
   "type": "sort",
   "prompt": "Sort each sentence by where its ambiguity lies.",
   "entries": [
    "“The check was large.”",
    "“The trunk was heavy.”",
    "“The suit was old.”",
    "“The captain greeted the sailor from the ship.”",
    "“She saw the man with the lantern.”"
   ],
   "bins": [
    "In a single word",
    "In the arrangement"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "“Check” (a bank draft or a restaurant bill), “trunk” (a chest or the stem of a tree), and “suit” (a set of clothes or a lawsuit) are single words with two meanings. In the other two sentences every word is clear, but “from the ship” can belong to “greeted” or to “the sailor,” and “with the lantern” can belong to “saw” or to “the man.”"
  },
  {
   "id": "sv-con-2",
   "set": "A",
   "deck": "i.consignification",
   "prompt": "In “butterfly,” does the part “butter” signify butter?",
   "options": [
    "Yes, because it is a word by itself",
    "Yes, but only in English",
    "No; within the word, its parts signify nothing by themselves",
    "No, because “butterfly” signifies nothing"
   ],
   "answer": 2,
   "explain": "Aristotle says that no part of a noun signifies by itself; in “Fairsteed” the part “steed” has no significance of its own (<i>De interpretatione</i> 2). “Butterfly” signifies as a whole.",
   "type": "mc"
  },
  {
   "id": "sv-sign-2",
   "set": "A",
   "deck": "i.sign",
   "prompt": "Aristotle calls spoken words “symbols” (<i>symbola</i>). In what sense does he use the word?",
   "options": [
    "For a sign with a many-layered meaning, like the white whale in <i>Moby-Dick</i>",
    "For a sign that resembles the thing it signifies, as a portrait does",
    "As another name for a conventional sign, one that signifies by agreement",
    "For a mark that does the work of a word, like the “+” of arithmetic"
   ],
   "answer": 2,
   "explain": "The Greek <i>symbolon</i> was a token, half of a broken coin or tablet, that meant something only because of an agreement between two parties. So for Aristotle and the early tradition “symbol” is simply another name for a conventional sign. The many-layered sense of the literary symbol came later, and the “+” of arithmetic is a narrower modern use of the word.",
   "type": "mc"
  },
  {
   "id": "sv-sign-5",
   "set": "B",
   "deck": "i.sign",
   "type": "identify",
   "prompt": "“The dark clouds warned the farmers of rain.” Click the word that names what the sign signifies.",
   "tokens": [
    "The",
    "dark",
    "clouds",
    "warned",
    "the",
    "farmers",
    "of",
    "rain."
   ],
   "answer": 7,
   "explain": "The clouds are the sign, the farmers are the ones who know by means of it, and rain is what the sign brings to mind. A dark cloud is a natural sign of rain."
  },
  {
   "id": "sv-fun-5",
   "set": "B",
   "deck": "i.functions",
   "type": "mc",
   "prompt": "“Heal my son, Lord.” What kind of sentence is this?",
   "options": [
    "A statement",
    "A command",
    "A prayer",
    "A question"
   ],
   "answer": 2,
   "explain": "The sentence asks God for something to be done, so it is a prayer, the kind St. Thomas calls deprecative. Like a command it is neither true nor false, but it is directed to God and asks rather than orders."
  },
  {
   "id": "sv-imp-7",
   "set": "B",
   "deck": "i.imposition",
   "type": "mc",
   "prompt": "Which of these is an act of imposition?",
   "options": [
    "A child learns the word “moon”",
    "A chemist names a new element",
    "A speaker mispronounces “library”",
    "A translator renders <i>equus</i> as “horse”"
   ],
   "answer": 1,
   "explain": "Imposition is the act by which a sound is first given a meaning, and it still happens whenever something new is named. A child who learns “moon” receives a meaning already imposed, and a translator finds the word already imposed in another language."
  },
  {
   "id": "sv-syn-5",
   "set": "B",
   "deck": "i.syncategorematic",
   "type": "identify",
   "prompt": "“If rain falls, only Peter stays home.” Click every syncategorematic word.",
   "tokens": [
    "If",
    "rain",
    "falls,",
    "only",
    "Peter",
    "stays",
    "home."
   ],
   "answer": [
    0,
    3
   ],
   "explain": "“If” joins two statements so that the second depends on the first, and “only” shuts out everyone except Peter. Neither brings a thing to mind by itself. The other words are categorematic."
  },
  {
   "id": "sv-con-5",
   "set": "B",
   "deck": "i.consignification",
   "type": "identify",
   "prompt": "Click the part of “walked” that marks past time.",
   "tokens": [
    "walk",
    "ed"
   ],
   "answer": 1,
   "explain": "The ending <i>-ed</i> marks the past within the word. Said by itself, “-ed” signifies nothing; it is the whole word “walked” that signifies walking and consignifies past time."
  },
  {
   "id": "sv-amb-5",
   "set": "B",
   "deck": "i.ambiguity",
   "type": "identify",
   "prompt": "“The woman hit the thief with the umbrella.” Click the phrase that can belong to two different words.",
   "tokens": [
    "The woman",
    "hit",
    "the thief",
    "with the umbrella."
   ],
   "answer": 3,
   "explain": "“With the umbrella” can belong to “hit” (the woman used the umbrella) or to “the thief” (the thief had it). The double sense lies in the arrangement, not in any one word."
  },
  {
   "id": "sv-sign-6",
   "set": "B",
   "deck": "i.sign",
   "type": "identify",
   "prompt": "“The hoofprints told the tracker that horses had passed.” Click the word that names the one who knows by means of the sign.",
   "tokens": [
    "The",
    "hoofprints",
    "told",
    "the",
    "tracker",
    "that",
    "horses",
    "had",
    "passed."
   ],
   "answer": 4,
   "explain": "A sign signifies only to a knowing power. The hoofprints are the sign and the passing horses are what they signify; the tracker is the one whose mind is led from the prints to the horses. To someone who knew nothing of tracks they would signify nothing.",
   "why": {
    "prompt": "Why must every sign have someone who knows by means of it?",
    "model": "A sign brings something else to mind, and only a mind can be brought to something; so a sign signifies only to a knowing power, as smoke signifies fire to the traveler but not to the trees."
   }
  },
  {
   "id": "sv-fun-6",
   "set": "B",
   "deck": "i.functions",
   "type": "identify",
   "prompt": "Click the sentence that can be true or false.",
   "tokens": [
    "Cross the river.",
    "Is the river deep?",
    "The river is deep.",
    "May the river stay calm."
   ],
   "answer": 2,
   "explain": "Only “The river is deep” says that something is so, and so only it is true or false. The command, the question, and the prayer are complete sentences, but none of them claims anything about the way things are."
  },
  {
   "id": "sv-imp-5",
   "set": "B",
   "deck": "i.imposition",
   "type": "identify",
   "prompt": "“My sister underlined every verb and circled each plural.” Click every name of the second imposition.",
   "tokens": [
    "My",
    "sister",
    "underlined",
    "every",
    "verb",
    "and",
    "circled",
    "each",
    "plural."
   ],
   "answer": [
    4,
    8
   ],
   "explain": "“Verb” and “plural” signify words, not things in the world, so they are names of the second imposition. “Sister,” “underlined,” and “circled” signify a person and actions, as names of the first imposition do."
  },
  {
   "id": "sv-con-7",
   "set": "B",
   "deck": "i.consignification",
   "type": "mc",
   "prompt": "Latin <i>magnus</i> and <i>magna</i> both mean “great.” In what do they differ?",
   "options": [
    "Tense",
    "Gender",
    "Person",
    "Meaning"
   ],
   "answer": 1,
   "explain": "<i>Magnus</i> is masculine and <i>magna</i> feminine; the meaning is the same. Gender is one of the accidents that a word consignifies along with its meaning, and Latin shows it in the ending."
  },
  {
   "id": "sv-syn-7",
   "set": "B",
   "deck": "i.syncategorematic",
   "type": "mc",
   "prompt": "“Everyone except Paul agreed.” What does “except” do?",
   "options": [
    "It says how much is meant",
    "It takes one out of the whole",
    "It denies the whole sentence",
    "It joins two statements"
   ],
   "answer": 1,
   "explain": "“Except” is one of the syncategorematic words that exclude or except: it takes Paul out of “everyone.” It adds no new thing to what is said; it determines how “everyone” is taken."
  },
  {
   "id": "sv-sign-7",
   "set": "B",
   "deck": "i.sign",
   "type": "sort",
   "prompt": "Sort each sign as natural or conventional.",
   "entries": [
    "A green lamp used by agreement to mean “go”",
    "The letters “SOS” used as a call for help",
    "A handshake that a people uses for greeting",
    "A black armband worn to show mourning"
   ],
   "bins": [
    "Natural sign",
    "Conventional sign"
   ],
   "answer": [
    1,
    1,
    1,
    1
   ],
   "explain": "A green lamp, the letters “SOS,” a handshake, and a black armband have their meaning from the custom of a people. Each signifies because someone means it to signify, so each is a conventional sign."
  },
  {
   "id": "sv-imp-8",
   "set": "B",
   "deck": "i.imposition",
   "type": "sort",
   "prompt": "Sort each sound as signifying by nature or by imposition.",
   "entries": [
    "A hiccup",
    "A yawn",
    "The sound of snoring",
    "The English word “hiccup”",
    "The English word “yawn”"
   ],
   "bins": [
    "By nature",
    "By imposition"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "A hiccup, a yawn, and the sound of snoring signify by nature, and the same sounds are produced in every country. The words “hiccup” and “yawn” were imposed by English speakers. A word may resemble the natural sound, but the speakers still chose it.",
   "why": {
    "prompt": "The English word “hiccup” sounds like a hiccup. Why does it still signify by imposition?",
    "model": "Because each language chooses its own imitation; the word resembles a natural sound, but it is the agreement of the speakers that makes it signify, as French <i>hoquet</i> and English “hiccup” differ."
   }
  },
  {
   "id": "sv-syn-6",
   "set": "B",
   "deck": "i.syncategorematic",
   "type": "sort",
   "prompt": "Sort each Latin word as categorematic or syncategorematic.",
   "entries": [
    "<i>mēnsa</i> (“table”)",
    "<i>aut</i> (“or”)",
    "<i>sine</i> (“without”)",
    "<i>nisī</i> (“unless”)"
   ],
   "bins": [
    "Categorematic",
    "Syncategorematic"
   ],
   "answer": [
    0,
    1,
    1,
    1
   ],
   "explain": "<i>Mēnsa</i> signifies something by itself, a piece of furniture. <i>Aut</i>, <i>sine</i>, and <i>nisī</i> signify only together with other words. <i>Aut</i> joins alternatives, <i>sine</i> means “without,” and <i>nisī</i> sets a condition."
  },
  {
   "id": "sv-fun-8",
   "set": "B",
   "deck": "i.functions",
   "type": "mc",
   "prompt": "<i>Utinam pluat!</i> (“If only it would rain!”). What kind of sentence is this?",
   "options": [
    "A statement",
    "A command",
    "A question",
    "A wish or prayer"
   ],
   "answer": 3,
   "explain": "For wishes and prayers Latin often uses <i>utinam</i> (“if only,” “would that”). The sentence asks that something be so; it does not say that anything is so, and it is neither true nor false."
  },
  {
   "id": "sv-amb-8",
   "set": "B",
   "deck": "i.ambiguity",
   "type": "identify",
   "prompt": "“A bicycle cannot stand on its own because it is two-tired.” Click the word used in two senses at once.",
   "tokens": [
    "A",
    "bicycle",
    "cannot",
    "stand",
    "on",
    "its",
    "own",
    "because",
    "it",
    "is",
    "two-tired."
   ],
   "answer": 10,
   "explain": "“Two-tired” sounds like “too tired”: the bicycle has two tires and is, jokingly, too tired to stand. The writer intends the double sense, so it is a play on words, which the grammarian explains rather than corrects."
  },
  {
   "id": "sv-con-6",
   "set": "B",
   "deck": "i.consignification",
   "type": "sort",
   "prompt": "Sort each word: does it signify time as its proper meaning, or consignify time along with an action?",
   "entries": [
    "“month”",
    "“midnight”",
    "“broke”",
    "“will open”",
    "“wrote”",
    "“has fallen”"
   ],
   "bins": [
    "Signifies time as its proper meaning",
    "Consignifies time"
   ],
   "answer": [
    0,
    0,
    1,
    1,
    1,
    1
   ],
   "explain": "“Month” and “midnight” are nouns whose proper meaning is a time, a thing we can speak about. “Broke,” “will open,” “wrote,” and “has fallen” signify actions and, along with them, the time of the action; that is to consignify time."
  },
  {
   "id": "sv-amb-7",
   "set": "B",
   "deck": "i.ambiguity",
   "type": "mc",
   "prompt": "Which rewriting of “The woman hit the thief with the umbrella” says that the thief had the umbrella?",
   "options": [
    "“With the umbrella, the woman hit the thief.”",
    "“The woman hit the thief who had the umbrella.”",
    "“The woman, with the umbrella, hit the thief.”",
    "“The thief was hit by the woman with the umbrella.”"
   ],
   "answer": 1,
   "explain": "Adding “who had” fixes “the umbrella” to the thief. Moving the phrase to the front or setting it off with commas fixes it to the woman, and the passive sentence is still ambiguous. Changing the order or adding a word are the English remedies."
  },
  {
   "id": "sv-sign-8",
   "set": "B",
   "deck": "i.sign",
   "type": "sort",
   "prompt": "Sort each sign as instrumental or formal.",
   "entries": [
    "A portrait of a king",
    "The written word “anchor”",
    "A pointing finger",
    "The concept of an anchor in the mind",
    "The concept of a king in the mind"
   ],
   "bins": [
    "Instrumental sign",
    "Formal sign"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "A portrait, the written word “anchor,” and a pointing finger must first be perceived as objects in their own right before they lead the mind to something else, so they are instrumental signs. A concept is not first known as an object; it is that by which we know the thing, so the concept of an anchor and the concept of a king are formal signs."
  },
  {
   "id": "sv-fun-7",
   "set": "B",
   "deck": "i.functions",
   "type": "sort",
   "prompt": "Sort each kind of sentence by the way it is properly answered.",
   "entries": [
    "A statement",
    "A yes-or-no question",
    "A question that asks what something is",
    "A command"
   ],
   "bins": [
    "“That is true” or “That is false”",
    "By a statement",
    "By obedience or refusal",
    "By being granted or not"
   ],
   "answer": [
    0,
    1,
    1,
    2
   ],
   "explain": "A statement is answered by “That is true” or “That is false.” A yes-or-no question and a question that asks what something is are both answered by a statement. A command is answered by obedience or refusal. Only the statement says that something is so.",
   "why": {
    "prompt": "What do these answers show about truth and falsity?",
    "model": "Only the statement is answered with “That is true” or “That is false,” because only the statement claims something about the way things are."
   }
  },
  {
   "id": "sv-imp-6",
   "set": "B",
   "deck": "i.imposition",
   "type": "sort",
   "prompt": "For each line, say whether it gives the reason for the name or what the name signifies.",
   "entries": [
    "“Starfish”: its shape is like a star",
    "“Starfish”: a sea animal with five arms",
    "“Catfish”: it has whiskers like a cat",
    "“Grasshopper”: it hops in the grass",
    "“Grasshopper”: a certain leaping insect"
   ],
   "bins": [
    "The reason for the name",
    "What the name signifies"
   ],
   "answer": [
    0,
    1,
    0,
    0,
    1
   ],
   "explain": "That from which a name is taken explains why the sound was chosen; that which the name is imposed to signify is fixed by imposition and usage. “Starfish” signifies a sea animal, not a star. “Catfish” signifies a fish, not a cat. “Grasshopper” signifies an insect, not the grass and not the hopping."
  },
  {
   "id": "sv-syn-8",
   "set": "B",
   "deck": "i.syncategorematic",
   "type": "identify",
   "prompt": "<i>Sī venit, nōn manet</i> (“If he comes, he does not stay”). Click every syncategorematic word.",
   "tokens": [
    "<i>Sī</i>",
    "<i>venit,</i>",
    "<i>nōn</i>",
    "<i>manet.</i>"
   ],
   "answer": [
    0,
    2
   ],
   "explain": "<i>Sī</i> (“if”) joins the two statements, and <i>nōn</i> (“not”) denies <i>manet</i>. <i>Venit</i> (“he comes”) and <i>manet</i> (“he stays”) signify actions by themselves, so they are categorematic."
  },
  {
   "id": "sv-con-8",
   "set": "B",
   "deck": "i.consignification",
   "type": "sort",
   "prompt": "Sort each part in quotation marks: does it signify by itself here, or nothing by itself?",
   "entries": [
    "“ham” in “hamburger”",
    "“car” in “carpet”",
    "“pen” in “penguin”",
    "“room” in “mushroom”"
   ],
   "bins": [
    "Signifies by itself",
    "Signifies nothing by itself"
   ],
   "answer": [
    1,
    1,
    1,
    1
   ],
   "explain": "Within a word, the parts signify nothing by themselves. “Ham” in “hamburger” does not signify ham, “car” in “carpet” does not signify a car, “pen” in “penguin” does not signify a pen, and “room” in “mushroom” does not signify a room. The word is the least part of an expression that signifies."
  },
  {
   "id": "sv-amb-6",
   "set": "B",
   "deck": "i.ambiguity",
   "type": "sort",
   "prompt": "Sort each ambiguity by its cause.",
   "entries": [
    "“The match was short.”",
    "“The crane was still.”",
    "“careful drivers and cyclists”",
    "“the report of the fire in the newspaper”",
    "“The tear was small.”",
    "“The invalid was moved.”"
   ],
   "bins": [
    "One word with two meanings",
    "A word that can belong to two others",
    "Letters read as one word or two",
    "Writing that does not show pronunciation"
   ],
   "answer": [
    0,
    0,
    1,
    1,
    3,
    3
   ],
   "explain": "“Match” (a contest or a small stick) and “crane” (a bird or a machine) are single words with two meanings. In “careful drivers and cyclists,” “careful” can belong to the drivers alone or to both; in “the report of the fire in the newspaper,” “in the newspaper” can belong to the report or to the fire. “Tear” (a drop, or a rip) and “invalid” (a sick person, or not valid) are written alike and pronounced differently.",
   "why": {
    "prompt": "Why is “tear” not ambiguous in speech?",
    "model": "Because the drop and the rip are pronounced differently; only the writing, which does not show the pronunciation, leaves the reader to decide."
   }
  },
  {
   "id": "sv-fun-9",
   "set": "C",
   "deck": "i.functions",
   "type": "identify",
   "prompt": "“Oh, the train has left without us.” Click the word that expresses feeling.",
   "tokens": [
    "Oh,",
    "the",
    "train",
    "has",
    "left",
    "without",
    "us."
   ],
   "answer": 0,
   "explain": "“Oh” expresses the speaker’s feeling; the rest of the sentence is a statement, which is true or false. Feeling can accompany any kind of sentence."
  },
  {
   "id": "sv-amb-9",
   "set": "C",
   "deck": "i.ambiguity",
   "type": "identify",
   "prompt": "“The judge looked closely at the scale.” Click the word that has more than one meaning.",
   "tokens": [
    "The",
    "judge",
    "looked",
    "closely",
    "at",
    "the",
    "scale."
   ],
   "answer": 6,
   "explain": "“Scale” can mean an instrument for weighing, a plate on a fish’s skin, or a series of musical notes, and a judge might look at any of them. The ambiguity lies in a single word."
  },
  {
   "id": "sv-sign-10",
   "set": "C",
   "deck": "i.sign",
   "type": "identify",
   "prompt": "“The guard saw smoke, heard a scream, and rang the alarm bell.” Click the conventional sign.",
   "tokens": [
    "The guard saw",
    "smoke,",
    "heard",
    "a scream,",
    "and rang",
    "the alarm bell."
   ],
   "answer": 5,
   "explain": "The alarm bell signifies danger only because people have agreed on what its ringing means, so it is a conventional sign. The smoke and the scream signify by nature: fire produces smoke, and fear or pain produces a scream."
  },
  {
   "id": "sv-imp-9",
   "set": "C",
   "deck": "i.imposition",
   "type": "mc",
   "prompt": "In Plato’s dialogue <i>Cratylus</i>, who holds that names are fixed only by the agreement and custom of those who use them?",
   "options": [
    "Cratylus",
    "Hermogenes",
    "Socrates",
    "Aristotle"
   ],
   "answer": 1,
   "explain": "Hermogenes holds that names are fixed by agreement and custom, whereas Cratylus holds that each thing has a name that belongs to it by nature. Socrates examines both views and grants something to each."
  },
  {
   "id": "sv-con-9",
   "set": "C",
   "deck": "i.consignification",
   "type": "identify",
   "prompt": "“The lamp is bright.” Click the word that joins what is said to what it is said of.",
   "tokens": [
    "The",
    "lamp",
    "is",
    "bright."
   ],
   "answer": 2,
   "explain": "“Is” signifies a joining, a composition, of “bright” with “the lamp.” Without it, “the lamp, bright” names two things but says nothing of anything.",
   "why": {
    "prompt": "Why does a list of nouns state nothing?",
    "model": "Because nothing in it joins what is said to what it is said of; only the verb signifies that joining, so a sentence that states something needs a verb."
   }
  },
  {
   "id": "sv-syn-12",
   "set": "C",
   "deck": "i.syncategorematic",
   "type": "mc",
   "prompt": "Which sentence says that Maria sang and did nothing else?",
   "options": [
    "“Only Maria sang.”",
    "“Maria only sang.”",
    "“Maria sang only once.”",
    "“Maria sang, only not well.”"
   ],
   "answer": 1,
   "explain": "In “Maria only sang,” “only” limits what Maria did. In “Only Maria sang,” it limits who sang. The same syncategorematic word changes the meaning according to its place."
  },
  {
   "id": "sv-fun-11",
   "set": "C",
   "deck": "i.functions",
   "type": "mc",
   "prompt": "Which art considers every kind of sentence, because every kind must be correctly formed?",
   "options": [
    "Logic",
    "Grammar",
    "Rhetoric",
    "Poetry"
   ],
   "answer": 1,
   "explain": "Grammar considers every kind of sentence, since a question or a prayer can be incorrectly formed as surely as a statement. Logic considers only the statement, because it is concerned with truth."
  },
  {
   "id": "sv-sign-12",
   "set": "C",
   "deck": "i.sign",
   "type": "identify",
   "prompt": "“At dawn the rooster crowed, the church bell rang, and the dew showed that the night had been cold.” Click every natural sign.",
   "tokens": [
    "At dawn",
    "the rooster crowed,",
    "the church bell rang,",
    "and",
    "the dew",
    "showed that the night had been cold."
   ],
   "answer": [
    1,
    4
   ],
   "explain": "The rooster’s crowing is a natural sign of dawn, and the dew is a natural sign of the cold night: each signifies by its natural connection with what it signifies. The church bell signifies by the custom of those who ring it, so it is a conventional sign."
  },
  {
   "id": "sv-imp-10",
   "set": "C",
   "deck": "i.imposition",
   "type": "identify",
   "prompt": "Click the sentence in which “Rome” is spoken about as a word.",
   "tokens": [
    "Rome is in Italy.",
    "Rome has four letters.",
    "Rome was founded long ago.",
    "Rome is a large city."
   ],
   "answer": 1,
   "explain": "In “Rome has four letters,” the sentence speaks about the word, not the city, so the word should be set in quotation marks to show that it is mentioned and not used: “‘Rome’ has four letters.” In the other sentences “Rome” signifies the city."
  },
  {
   "id": "sv-con-11",
   "set": "C",
   "deck": "i.consignification",
   "type": "identify",
   "prompt": "<i>Puer librum legit</i> (“The boy reads the book”). Click the Latin word that consignifies time.",
   "tokens": [
    "<i>Puer</i>",
    "<i>librum</i>",
    "<i>legit</i>"
   ],
   "answer": 2,
   "explain": "<i>Legit</i> (“reads”) is the verb; it signifies reading and consignifies present time, along with the third person and the singular. <i>Puer</i> (“boy”) and <i>librum</i> (“book”) are nouns and do not consignify time."
  },
  {
   "id": "sv-amb-11",
   "set": "C",
   "deck": "i.ambiguity",
   "type": "identify",
   "prompt": "“Anna phoned her friend from the station.” Click the phrase that can belong to two different words.",
   "tokens": [
    "Anna",
    "phoned",
    "her friend",
    "from the station."
   ],
   "answer": 3,
   "explain": "“From the station” can belong to “phoned” (Anna phoned from the station) or to “her friend” (the friend who works at the station). Every word is clear; the double sense lies in the arrangement."
  },
  {
   "id": "sv-syn-11",
   "set": "C",
   "deck": "i.syncategorematic",
   "type": "mc",
   "prompt": "In “everyone except Anna,” to which part of speech does the syncategorematic word “except” belong?",
   "options": [
    "A noun",
    "An adverb",
    "A conjunction",
    "A preposition"
   ],
   "answer": 3,
   "explain": "“Except” is a preposition in “everyone except Anna.” Syncategorematic words belong to several parts of speech: “every” is an adjective, “not” an adverb, “if” a conjunction. The two divisions answer different questions."
  },
  {
   "id": "sv-con-10",
   "set": "C",
   "deck": "i.consignification",
   "type": "sort",
   "prompt": "Sort each expression: can it be true or false, or is it neither true nor false?",
   "entries": [
    "“The well is dry.”",
    "“No well is dry.”",
    "“The road was blocked.”",
    "“dry well”",
    "“road”"
   ],
   "bins": [
    "Can be true or false",
    "Neither true nor false"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    1
   ],
   "explain": "“The well is dry,” “No well is dry,” and “The road was blocked” say something of something, and so each can be true or false. “Dry well” and “road” signify, but they say nothing of anything, so they are neither true nor false."
  },
  {
   "id": "sv-imp-11",
   "set": "C",
   "deck": "i.imposition",
   "type": "sort",
   "prompt": "Sort each Latin word as a name of the first or the second imposition.",
   "entries": [
    "<i>nāvis</i> (“ship”)",
    "<i>lupus</i> (“wolf”)",
    "<i>cāsus</i> (“case, a form of a noun”)",
    "<i>participium</i> (“participle”)",
    "<i>praepositiō</i> (“preposition”)",
    "<i>coniunctiō</i> (“conjunction”)",
    "<i>adverbium</i> (“adverb”)"
   ],
   "bins": [
    "First imposition",
    "Second imposition"
   ],
   "answer": [
    0,
    0,
    1,
    1,
    1,
    1,
    1
   ],
   "explain": "<i>Nāvis</i> and <i>lupus</i> signify things, a ship and a wolf. <i>Cāsus</i>, <i>participium</i>, <i>praepositiō</i>, <i>coniunctiō</i>, and <i>adverbium</i>, as the grammarians use them, signify forms and kinds of words, so they are names of the second imposition."
  },
  {
   "id": "sv-fun-10",
   "set": "C",
   "deck": "i.functions",
   "type": "sort",
   "prompt": "Sort each Latin sentence by its kind.",
   "entries": [
    "<i>Pluit.</i> (“It is raining.”)",
    "<i>Nix cadit.</i> (“Snow is falling.”)",
    "<i>Tacet.</i> (“He is silent.”)",
    "<i>Pluitne?</i> (“Is it raining?”)",
    "<i>Tacē!</i> (“Be silent!”)",
    "<i>Scrībite!</i> (“Write!”)",
    "<i>Utinam nix cadat!</i> (“If only snow would fall!”)"
   ],
   "bins": [
    "Statement",
    "Question",
    "Command",
    "Wish or prayer",
    "Call"
   ],
   "answer": [
    0,
    0,
    0,
    1,
    2,
    2,
    3
   ],
   "explain": "The indicatives <i>pluit</i>, <i>cadit</i>, and <i>tacet</i> state something. <i>Pluitne</i> asks, because of <i>-ne</i>. The imperatives <i>tacē</i> and <i>scrībite</i> command. <i>Utinam nix cadat</i> wishes. The kinds of sentence are marked in the forms of the words, and so they belong to grammar."
  },
  {
   "id": "sv-amb-10",
   "set": "C",
   "deck": "i.ambiguity",
   "type": "sort",
   "prompt": "Sort each sentence by where its ambiguity lies.",
   "entries": [
    "“The file was missing.”",
    "“She brought the letter to the clerk in the office.”",
    "“Martha left the book for her brother in the kitchen.”",
    "“He ordered a coat for the child with a hood.”"
   ],
   "bins": [
    "In a single word",
    "In the arrangement"
   ],
   "answer": [
    0,
    1,
    1,
    1
   ],
   "explain": "“File” (a tool, or a set of papers) is a single word with two meanings. In the other three sentences every word is clear, but “in the office” can belong to “brought” or to “the clerk,” “in the kitchen” can belong to “left” or to “her brother,” and “with a hood” can belong to the coat or to the child."
  },
  {
   "id": "sv-sign-11",
   "set": "C",
   "deck": "i.sign",
   "type": "sort",
   "prompt": "Sort these words by the concept they signify.",
   "entries": [
    "Spanish <i>caballo</i> (“horse”)",
    "Italian <i>cavallo</i> (“horse”)",
    "English “dog”",
    "Spanish <i>perro</i> (“dog”)",
    "Italian <i>cane</i> (“dog”)",
    "Portuguese <i>cão</i> (“dog”)"
   ],
   "bins": [
    "The concept of a horse",
    "The concept of a dog"
   ],
   "answer": [
    0,
    0,
    1,
    1,
    1,
    1
   ],
   "explain": "<i>Caballo</i> and <i>cavallo</i> are two different sounds that signify one concept, that of a horse. “Dog,” <i>perro</i>, <i>cane</i>, and <i>cão</i> signify the concept of a dog. The words differ from language to language, but the concepts are the same for all.",
   "why": {
    "prompt": "Why can a translator put <i>cavallo</i> for <i>caballo</i>?",
    "model": "Because the two words signify the same concept, and through it the same kind of animal; translation compares what the words signify, which is the same where the words differ."
   }
  },
  {
   "id": "sv-syn-9",
   "set": "C",
   "deck": "i.syncategorematic",
   "type": "sort",
   "prompt": "Sort each syncategorematic word by what it does.",
   "entries": [
    "“each”",
    "“all”",
    "“few”",
    "“most”",
    "“solely”",
    "“excluding”",
    "“never”"
   ],
   "bins": [
    "Says how much is meant",
    "Excludes or excepts",
    "Denies",
    "Joins statements"
   ],
   "answer": [
    0,
    0,
    0,
    0,
    1,
    1,
    2
   ],
   "explain": "“Each,” “all,” “few,” and “most” signify how much of something is meant. “Solely” and “excluding” exclude or except. “Never” denies. In each case the word adds no new thing but determines how the other words are taken."
  },
  {
   "id": "sv-con-12",
   "set": "C",
   "deck": "i.consignification",
   "type": "mc",
   "prompt": "“Departure” and “departs” signify the same reality. Why is one a noun and the other a verb?",
   "options": [
    "Because they have different sounds",
    "Because one of them is longer",
    "Because they signify in different modes",
    "Because one comes from Latin"
   ],
   "answer": 2,
   "explain": "A word is not a noun or a verb because of its sound or its length, nor because of the reality it signifies. “Departure” signifies the leaving as a thing, and “departs” signifies it as something happening; the mode of signifying makes the part of speech."
  },
  {
   "id": "sv-sign-9",
   "set": "C",
   "deck": "i.sign",
   "type": "sort",
   "prompt": "Writing, speech, and the concept stand in an order. Sort each item by what it is a sign of.",
   "entries": [
    "The written word “oak”",
    "The written word <i>quercus</i>",
    "The spoken word “oak”",
    "The spoken word <i>quercus</i>"
   ],
   "bins": [
    "A sign of the spoken word",
    "A sign of the concept",
    "A sign of the oak itself"
   ],
   "answer": [
    0,
    0,
    1,
    1
   ],
   "explain": "The written word “oak” signifies the spoken word “oak,” and the written word <i>quercus</i> signifies the spoken word <i>quercus</i>. Those spoken words signify the concept. Aristotle states this order at the beginning of <i>De interpretatione</i>: writing is a sign of speech, and speech is a sign of the concept."
  },
  {
   "id": "sv-syn-10",
   "set": "C",
   "deck": "i.syncategorematic",
   "type": "identify",
   "prompt": "“Not every runner finished, but some runners won medals.” Click every syncategorematic word.",
   "tokens": [
    "Not",
    "every",
    "runner",
    "finished,",
    "but",
    "some",
    "runners",
    "won",
    "medals."
   ],
   "answer": [
    0,
    1,
    4,
    5
   ],
   "explain": "“Not” denies, “every” and “some” say how much is meant, and “but” joins the two statements. The nouns and verbs are categorematic.",
   "why": {
    "prompt": "Why does “Not every runner finished” not say that no runner finished?",
    "model": "“Not” denies “every runner finished,” so it says only that at least one runner did not finish; the syncategorematic words determine how much is meant."
   }
  },
  {
   "id": "sv-imp-12",
   "set": "C",
   "deck": "i.imposition",
   "type": "mc",
   "prompt": "The logician’s word “genus,” as in “Animal is a genus”: for the grammarian, is it a name of the first or the second imposition?",
   "options": [
    "Second, because it is a technical term",
    "First, because it signifies concepts",
    "Second, because it signifies a kind of word",
    "Neither, because it is a Latin word"
   ],
   "answer": 1,
   "explain": "“Genus” and “species” signify concepts, not words, so in grammar they are names of the first imposition. Logic makes its own distinction between first and second intentions, concepts of things and concepts of concepts, but that belongs to logic.",
   "why": {
    "prompt": "Why is “genus” not a name of the second imposition, although it is a technical term?",
    "model": "The second imposition signifies words as words; “genus” signifies a concept, a kind of understanding, not a word, so for grammar it belongs to the first imposition."
   }
  },
  {
   "id": "sv-fun-12",
   "set": "C",
   "deck": "i.functions",
   "type": "identify",
   "prompt": "Aristotle leaves some kinds of sentence to rhetoric or poetry rather than to logic. Click the sentence that belongs there.",
   "tokens": [
    "Every metal conducts heat.",
    "Iron is a metal.",
    "Hear my prayer, O Lord.",
    "No metal is alive."
   ],
   "answer": 2,
   "explain": "Logic considers only the statement, which is true or false. “Hear my prayer, O Lord” is a prayer, neither true nor false, and Aristotle says that the study of such sentences belongs rather to rhetoric or poetry.",
   "why": {
    "prompt": "Why does logic study only the statement?",
    "model": "Because logic is concerned with truth and with what follows from what is true, and only the statement says that something is or is not so."
   }
  },
  {
   "id": "sv-amb-12",
   "set": "C",
   "deck": "i.ambiguity",
   "type": "mc",
   "prompt": "<i>Puellam puer videt</i> means “The boy sees the girl,” although “girl” comes first. Why is it not ambiguous?",
   "options": [
    "Because Latin has a fixed word order",
    "Because the endings show subject and object",
    "Because “girl” always comes first",
    "Because Latin words have one meaning"
   ],
   "answer": 1,
   "explain": "The ending <i>-am</i> marks <i>puellam</i> as the object and <i>puer</i> stands as the subject, so the order of the words does not decide the sense. That is why Quintilian names a change of case as a remedy for ambiguity of construction in Latin.",
   "why": {
    "prompt": "Why does English need word order where Latin can use endings?",
    "model": "English has few case endings outside the pronouns, so it shows which word is the subject and which the object chiefly by their order."
   }
  }
 ]
};
