/* Government [v.ex.government]  Exercise set opened from the Exercise button of v.government. Written; 40 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize what governs what (choose or sort). Level II: find the governing word in short sentences, some from the King James Bible, Caesar, Cicero, and Vergil. Level III: find government across long real sentences.
   Level I (18), Level II (12), Level III (10). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.government'] = {
 "id": "v.ex.government",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "Government",
 "openedFrom": "v.government (Exercise button)",
 "covers": [
  {
   "deck": "v.government",
   "cards": [
    "what-government",
    "accusative",
    "other-cases",
    "prepositions",
    "nouns-adjectives",
    "english",
    "governed-governing",
    "agreement-government"
   ]
  }
 ],
 "skill": "Say which case a verb, preposition, noun, or adjective governs; choose the governed form; find the governing word; correct an error of government in English.",
 "types": [
  "sort",
  "mc",
  "identify",
  "transform"
 ],
 "pool": 40,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 16,
  "B": 16,
  "C": 8
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Recognize government: choose or sort.",
   "2": "Find the governing word in short sentences.",
   "3": "Follow government across long sentences from real authors."
  },
  "counts": {
   "1": 18,
   "2": 12,
   "3": 10
  }
 },
 "limit": "Only what v.government teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "gv-A01",
   "set": "A",
   "deck": "v.government",
   "type": "sort",
   "prompt": "Sort each Latin verb by the case of its object.",
   "entries": [
    "<i>videō</i> (“I see”)",
    "<i>ignōscō</i> (“I pardon”)",
    "<i>oblīvīscor</i> (“I forget”)",
    "<i>laudō</i> (“I praise”)",
    "<i>serviō</i> (“I serve”)",
    "<i>reminīscor</i> (“I recall”)"
   ],
   "bins": [
    "Accusative",
    "Dative",
    "Genitive"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "<i>Videō</i> and <i>laudō</i> govern the accusative of the direct object. <i>Ignōscō</i> and <i>serviō</i> are verbs of favoring and serving and govern the dative. <i>Oblīvīscor</i> and <i>reminīscor</i> are verbs of forgetting and remembering and govern the genitive.",
   "level": 1
  },
  {
   "id": "gv-A02",
   "set": "A",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which form completes <i>victor ___ parcit</i> (“the victor spares the captives”)?",
   "options": [
    "<i>captīvōs</i>",
    "<i>captīvīs</i>",
    "<i>captīvōrum</i>",
    "<i>captīvī</i>"
   ],
   "answer": 1,
   "explain": "<i>Parcō</i> (“I spare”) governs the dative, so its object is <i>captīvīs</i>, dative plural. English “spare” takes a direct object, which is why the accusative is tempting.",
   "level": 1
  },
  {
   "id": "gv-A03",
   "set": "A",
   "deck": "v.government",
   "type": "identify",
   "prompt": "<i>Mīles pīlum in mūrum iēcit</i> (“the soldier threw the javelin onto the wall”). Click every word that governs another word.",
   "tokens": [
    "<i>Mīles</i>",
    "<i>pīlum</i>",
    "<i>in</i>",
    "<i>mūrum</i>",
    "<i>iēcit</i>"
   ],
   "answer": [
    2,
    4
   ],
   "explain": "<i>Iēcit</i> governs <i>pīlum</i> in the accusative as its object, and <i>in</i> governs <i>mūrum</i> in the accusative of motion onto. <i>Mīles</i> is the subject, with which <i>iēcit</i> agrees.",
   "level": 2
  },
  {
   "id": "gv-A04",
   "set": "A",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In “afraid of the dark,” what governs the preposition “of”?",
   "options": [
    "The noun “dark”",
    "The article “the”",
    "Nothing governs it",
    "The adjective “afraid”"
   ],
   "answer": 3,
   "explain": "English adjectives govern particular prepositions, fixed by usage: we are “afraid of,” not “afraid from.” So the adjective “afraid” governs “of.”",
   "level": 1
  },
  {
   "id": "gv-A05",
   "set": "A",
   "deck": "v.government",
   "type": "transform",
   "prompt": "Rewrite the sentence as careful usage requires: “The prize was shared between my brother and I.”",
   "accept": [
    "The prize was shared between my brother and me."
   ],
   "explain": "“Between” is a preposition and governs the objective case of both pronouns, so the form is “me.”",
   "level": 2
  },
  {
   "id": "gv-A06",
   "set": "A",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which form completes <i>in ___ intrāvit</i> (“he went into the shop”)?",
   "options": [
    "<i>tabernā</i>",
    "<i>tabernam</i>",
    "<i>tabernae</i>",
    "<i>taberna</i>"
   ],
   "answer": 1,
   "explain": "<i>In</i> with the accusative signifies motion into a place, so the form is <i>tabernam</i>. <i>In tabernā</i> would mean that he was already in the shop.",
   "level": 1
  },
  {
   "id": "gv-A07",
   "set": "A",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In Latin <i>cōnsulem sententiam rogat</i> (“he asks the consul his opinion”), how many accusatives does <i>rogat</i> govern?",
   "options": [
    "One",
    "None",
    "Two",
    "Three"
   ],
   "answer": 2,
   "explain": "Like <i>doceō</i>, verbs of asking can govern two accusatives, one of the person (<i>cōnsulem</i>) and one of the thing (<i>sententiam</i>).",
   "level": 1
  },
  {
   "id": "gv-A08",
   "set": "A",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In Latin <i>pōculum aquae</i> (“a cup of water”), which word governs <i>aquae</i>?",
   "options": [
    "No word governs it",
    "A verb that is understood",
    "The ending <i>-ae</i> itself",
    "<i>pōculum</i>"
   ],
   "answer": 3,
   "explain": "A noun governs the genitive of another noun that completes or limits its meaning, so <i>pōculum</i> governs <i>aquae</i>.",
   "level": 1
  },
  {
   "id": "gv-B01",
   "set": "B",
   "deck": "v.government",
   "type": "sort",
   "prompt": "Sort each Latin adjective by the case it governs.",
   "entries": [
    "<i>pār</i> (“equal to”)",
    "<i>ūtilis</i> (“useful to”)",
    "<i>ignārus</i> (“ignorant of”)",
    "<i>avidus</i> (“greedy for”)",
    "<i>cārus</i> (“dear to”)",
    "<i>expers</i> (“without a share in”)"
   ],
   "bins": [
    "Dative",
    "Genitive"
   ],
   "answer": [
    0,
    0,
    1,
    1,
    0,
    1
   ],
   "explain": "Adjectives of likeness, nearness, and fitness govern the dative: <i>pār</i>, <i>ūtilis</i>, <i>cārus</i>. Adjectives of desire, knowledge, and fullness, and their opposites, govern the genitive: <i>ignārus</i>, <i>avidus</i>, <i>expers</i>.",
   "level": 1
  },
  {
   "id": "gv-B02",
   "set": "B",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which form completes <i>___ invideō</i> (“I envy my neighbor”)?",
   "options": [
    "<i>vīcīnum</i>",
    "<i>vīcīnī</i>",
    "<i>vīcīnō</i>",
    "<i>vīcīnus</i>"
   ],
   "answer": 2,
   "explain": "<i>Invideō</i> (“I envy”) is one of the verbs that govern the dative, so the form is <i>vīcīnō</i>.",
   "level": 1
  },
  {
   "id": "gv-B03",
   "set": "B",
   "deck": "v.government",
   "type": "identify",
   "prompt": "“The children listened to the old sailor with great care.” Click the word that governs the preposition “to.”",
   "tokens": [
    "The children",
    "listened",
    "to",
    "the old sailor",
    "with great care."
   ],
   "answer": 1,
   "explain": "English verbs require particular prepositions: we “listen to.” So “listened” governs “to,” which in turn governs “the old sailor.”",
   "level": 2
  },
  {
   "id": "gv-B04",
   "set": "B",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In Latin <i>post proelium</i> (“after the battle”), which word governs and which is governed?",
   "options": [
    "<i>post</i> governs <i>proelium</i>",
    "<i>proelium</i> governs <i>post</i>",
    "Neither governs the other",
    "They agree in case"
   ],
   "answer": 0,
   "explain": "The preposition has no case of its own and requires its noun in a particular case. <i>Post</i> governs the accusative <i>proelium</i>.",
   "level": 1
  },
  {
   "id": "gv-B05",
   "set": "B",
   "deck": "v.government",
   "type": "transform",
   "prompt": "Rewrite the question as careful usage requires: “Who did the council appoint?”",
   "accept": [
    "Whom did the council appoint?"
   ],
   "explain": "The pronoun is the object of “appoint,” so careful usage puts it in the objective case: “Whom.”",
   "level": 2
  },
  {
   "id": "gv-B06",
   "set": "B",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which form completes <i>cum ___ vēnit</i> (“he came with his father”)?",
   "options": [
    "<i>patrem</i>",
    "<i>patrī</i>",
    "<i>patre</i>",
    "<i>patris</i>"
   ],
   "answer": 2,
   "explain": "<i>Cum</i> governs the ablative, and the ablative of <i>pater</i> is <i>patre</i>.",
   "level": 1
  },
  {
   "id": "gv-B07",
   "set": "B",
   "deck": "v.government",
   "type": "mc",
   "prompt": "English says “similar to” and “different from.” What decides which preposition each adjective takes?",
   "options": [
    "The case of the noun that follows",
    "The rules of logic",
    "The verb of the sentence",
    "Usage"
   ],
   "answer": 3,
   "explain": "In English the choice of preposition after a verb, noun, or adjective is fixed by usage, and it must be learned with the word, as Latin cases are learned with each verb.",
   "level": 1
  },
  {
   "id": "gv-B08",
   "set": "B",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In Latin <i>dux mīlitēs in castra dūxit</i> (“the general led the soldiers into the camp”), which word governs <i>castra</i>?",
   "options": [
    "<i>in</i>",
    "<i>dūxit</i>",
    "<i>dux</i>",
    "<i>mīlitēs</i>"
   ],
   "answer": 0,
   "explain": "The preposition <i>in</i> governs <i>castra</i> in the accusative of motion into. <i>Dūxit</i> governs <i>mīlitēs</i>, its direct object.",
   "level": 1
  },
  {
   "id": "gv-C01",
   "set": "C",
   "deck": "v.government",
   "type": "sort",
   "prompt": "Sort each phrase by the relation it shows: agreement or government.",
   "entries": [
    "<i>lāta flūmina</i> (“wide rivers”)",
    "<i>viam mūnit</i> (“he builds the road”)",
    "<i>ad oppidum</i> (“to the town”)",
    "<i>mīlitēs pugnant</i> (“the soldiers fight”)",
    "“with them”",
    "“these roads”"
   ],
   "bins": [
    "Agreement",
    "Government"
   ],
   "answer": [
    0,
    1,
    1,
    0,
    1,
    0
   ],
   "explain": "In agreement two words share an accident: <i>lāta flūmina</i>, <i>mīlitēs pugnant</i>, “these roads.” In government one word requires in another a case it does not have itself: <i>viam mūnit</i>, <i>ad oppidum</i>, “with them.”",
   "level": 1
  },
  {
   "id": "gv-C02",
   "set": "C",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which form completes <i>grātus ___</i> (“pleasing to the people”)?",
   "options": [
    "<i>populum</i>",
    "<i>populī</i>",
    "<i>populus</i>",
    "<i>populō</i>"
   ],
   "answer": 3,
   "explain": "Adjectives of fitness and of pleasing govern the dative, so the form is <i>populō</i>.",
   "level": 1
  },
  {
   "id": "gv-C03",
   "set": "C",
   "deck": "v.government",
   "type": "identify",
   "prompt": "<i>Rōmānī oppidum ex mūrō dēfendunt</i> (“the Romans defend the town from the wall”). Click every governed word.",
   "tokens": [
    "<i>Rōmānī</i>",
    "<i>oppidum</i>",
    "<i>ex</i>",
    "<i>mūrō</i>",
    "<i>dēfendunt</i>"
   ],
   "answer": [
    1,
    3
   ],
   "explain": "<i>Dēfendunt</i> governs <i>oppidum</i> in the accusative, and <i>ex</i> governs <i>mūrō</i> in the ablative. <i>Rōmānī</i> is the subject, with which the verb agrees.",
   "level": 2
  },
  {
   "id": "gv-C04",
   "set": "C",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Which preposition does “apologize” require in “He apologized ___ the delay”?",
   "options": [
    "“of”",
    "“for”",
    "“at”",
    "“on”"
   ],
   "answer": 1,
   "explain": "Usage fixes the preposition: we “apologize for” something and “apologize to” someone. Here the delay is the thing, so the preposition is “for.”",
   "level": 1
  },
  {
   "id": "gv-C05",
   "set": "C",
   "deck": "v.government",
   "type": "transform",
   "prompt": "Rewrite the sentence as careful usage requires: “The work was left to Tom and I.”",
   "accept": [
    "The work was left to Tom and me."
   ],
   "explain": "“To” is a preposition and governs the objective case of both words it takes, so the pronoun is “me.”",
   "level": 2
  },
  {
   "id": "gv-C06",
   "set": "C",
   "deck": "v.government",
   "type": "mc",
   "prompt": "Why is “for you and I” a failure of government?",
   "options": [
    "“You” should be “yourself”",
    "“And” cannot join two pronouns",
    "The sentence has no verb",
    "“For” requires “me,” not “I”"
   ],
   "answer": 3,
   "explain": "“For” is a preposition and requires the objective case of both pronouns. “You” has the same form in both cases, but “I” must become “me.”",
   "level": 1
  },
  {
   "id": "gv-C07",
   "set": "C",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In Latin <i>cupiditās pecūniae</i> (“desire for money”), which case does <i>cupiditās</i> govern?",
   "options": [
    "The genitive",
    "The dative",
    "The accusative",
    "The ablative"
   ],
   "answer": 0,
   "explain": "A noun governs the genitive of another noun that completes its meaning; English uses “for” here, but Latin uses the genitive <i>pecūniae</i>.",
   "level": 1
  },
  {
   "id": "gv-C08",
   "set": "C",
   "deck": "v.government",
   "type": "mc",
   "prompt": "In a relation of government, which is the governing word?",
   "options": [
    "The word that supplies the required form",
    "The word whose meaning needs completing",
    "The subject of the sentence",
    "The last word of the phrase"
   ],
   "answer": 1,
   "explain": "The governing word is the one whose meaning requires completion, as a verb requires its object; the governed word supplies the completion in the required form.",
   "level": 1
  },
  {
   "id": "gv-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1.) Click the word that governs <i>patientia</i>.",
   "explain": "<i>Abutor</i> takes the ablative, so <i>abutere</i> governs <i>patientia nostra</i>, “abuse our patience.”",
   "tokens": [
    "Quo",
    "usque",
    "tandem",
    "abutere,",
    "Catilina,",
    "patientia",
    "nostra?"
   ],
   "answer": 3,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "gv-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click the word that governs <i>Rhenum</i>.",
   "explain": "<i>Trans</i> is a preposition that takes the accusative: <i>trans Rhenum</i>, “across the Rhine.”",
   "tokens": [
    "proximique",
    "sunt",
    "Germanis,",
    "qui",
    "trans",
    "Rhenum",
    "incolunt,"
   ],
   "answer": 4,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "gv-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.8.) Click every word that <i>memora</i> governs.",
   "explain": "<i>Memora</i>, “tell,” governs <i>causas</i> as its direct object (accusative) and <i>mihi</i> as its indirect object (dative). <i>Musa</i> is the one addressed.",
   "tokens": [
    "Musa,",
    "mihi",
    "causas",
    "memora,"
   ],
   "answer": [
    1,
    2
   ],
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "gv-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Psalm 121:1, King James Version.) Click the word that governs “hills.”",
   "explain": "“Hills” is the object of the preposition “unto.”",
   "tokens": [
    "I",
    "will",
    "lift",
    "up",
    "mine",
    "eyes",
    "unto",
    "the",
    "hills,",
    "from",
    "whence",
    "cometh",
    "my",
    "help."
   ],
   "answer": 6,
   "source": "Psalm 121:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Proverbs 15:1, King James Version.) Click the word that “turneth away” governs.",
   "explain": "“Wrath” is the direct object of “turneth away,” so it is governed by the verb.",
   "tokens": [
    "A",
    "soft",
    "answer",
    "turneth",
    "away",
    "wrath:"
   ],
   "answer": 5,
   "source": "Proverbs 15:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Genesis 2:7, King James Version.) Click the word that governs “breath.”",
   "explain": "“The breath of life” is the direct object of “breathed”; “into his nostrils” is a phrase telling where.",
   "tokens": [
    "and",
    "breathed",
    "into",
    "his",
    "nostrils",
    "the",
    "breath",
    "of",
    "life;"
   ],
   "answer": 1,
   "source": "Genesis 2:7, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-01",
   "set": "A",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1.) Click the word that governs <i>te</i>.",
   "explain": "<i>Te</i> is the accusative object of <i>moverunt</i>, held to the end of the sentence: “has nothing moved you?”",
   "tokens": [
    "Nihilne",
    "te",
    "nocturnum",
    "praesidium",
    "Palati,",
    "nihil",
    "urbis",
    "vigiliae,",
    "nihil",
    "timor",
    "populi,",
    "nihil",
    "concursus",
    "bonorum",
    "omnium,",
    "nihil",
    "hic",
    "munitissimus",
    "habendi",
    "senatus",
    "locus,",
    "nihil",
    "horum",
    "ora",
    "voltusque",
    "moverunt?"
   ],
   "answer": 25,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "gv-L3-02",
   "set": "B",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1.) Click the word that governs the genitive <i>Palati</i>.",
   "explain": "A noun governs a genitive that limits it: <i>praesidium Palati</i>, “the guard of the Palatine.”",
   "tokens": [
    "Nihilne",
    "te",
    "nocturnum",
    "praesidium",
    "Palati,",
    "nihil",
    "urbis",
    "vigiliae,",
    "nihil",
    "timor",
    "populi,",
    "nihil",
    "concursus",
    "bonorum",
    "omnium,",
    "nihil",
    "hic",
    "munitissimus",
    "habendi",
    "senatus",
    "locus,",
    "nihil",
    "horum",
    "ora",
    "voltusque",
    "moverunt?"
   ],
   "answer": 3,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "gv-L3-03",
   "set": "A",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click the word that governs the dative <i>Germanis</i>.",
   "explain": "Adjectives of nearness take the dative: <i>proximi Germanis</i>, “nearest to the Germans.” The verb <i>sunt</i> only joins.",
   "tokens": [
    "proximique",
    "sunt",
    "Germanis,",
    "qui",
    "trans",
    "Rhenum",
    "incolunt,",
    "quibuscum",
    "continenter",
    "bellum",
    "gerunt."
   ],
   "answer": 0,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "gv-L3-04",
   "set": "B",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click the word that governs <i>Gallos</i>.",
   "explain": "<i>Gallos</i> is the accusative object of <i>praecedunt</i>, “surpass the other Gauls”; <i>virtute</i> tells in what.",
   "tokens": [
    "Qua",
    "de",
    "causa",
    "Helvetii",
    "quoque",
    "reliquos",
    "Gallos",
    "virtute",
    "praecedunt,",
    "quod",
    "fere",
    "cotidianis",
    "proeliis",
    "cum",
    "Germanis",
    "contendunt,"
   ],
   "answer": 8,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "gv-L3-05",
   "set": "A",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Romans 8:38 to 39, King James Version.) Click the word that governs “us.”",
   "explain": "“Us” is the object of the infinitive “to separate.” An infinitive keeps the government of its verb.",
   "tokens": [
    "For",
    "I",
    "am",
    "persuaded,",
    "that",
    "neither",
    "death,",
    "nor",
    "life,",
    "nor",
    "angels,",
    "nor",
    "principalities,",
    "nor",
    "powers,",
    "nor",
    "things",
    "present,",
    "nor",
    "things",
    "to",
    "come,",
    "Nor",
    "height,",
    "nor",
    "depth,",
    "nor",
    "any",
    "other",
    "creature,",
    "shall",
    "be",
    "able",
    "to",
    "separate",
    "us",
    "from",
    "the",
    "love",
    "of",
    "God,",
    "which",
    "is",
    "in",
    "Christ",
    "Jesus",
    "our",
    "Lord."
   ],
   "answer": 34,
   "source": "Romans 8:38 to 39, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-06",
   "set": "B",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Luke 10:30, King James Version.) Click the word that governs the last “him.”",
   "explain": "A participle keeps the government of its verb: “leaving him half dead,” where “him” is the object of “leaving.”",
   "tokens": [
    "A",
    "certain",
    "man",
    "went",
    "down",
    "from",
    "Jerusalem",
    "to",
    "Jericho,",
    "and",
    "fell",
    "among",
    "thieves,",
    "which",
    "stripped",
    "him",
    "of",
    "his",
    "raiment,",
    "and",
    "wounded",
    "him,",
    "and",
    "departed,",
    "leaving",
    "him",
    "half",
    "dead."
   ],
   "answer": 24,
   "source": "Luke 10:30, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-07",
   "set": "A",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Matthew 6:19, King James Version.) Click the word that governs “treasures.”",
   "explain": "“Treasures” is the object of “lay up,” a verb split by “not” and the phrase “for yourselves.”",
   "tokens": [
    "Lay",
    "not",
    "up",
    "for",
    "yourselves",
    "treasures",
    "upon",
    "earth,",
    "where",
    "moth",
    "and",
    "rust",
    "doth",
    "corrupt,",
    "and",
    "where",
    "thieves",
    "break",
    "through",
    "and",
    "steal:"
   ],
   "answer": 0,
   "source": "Matthew 6:19, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-08",
   "set": "B",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Isaiah 40:31, King James Version.) Click the word that governs “strength.”",
   "explain": "“Strength” is the direct object of “shall renew”; the subject “they” is far from it, past the clause “that wait upon the LORD.”",
   "tokens": [
    "But",
    "they",
    "that",
    "wait",
    "upon",
    "the",
    "LORD",
    "shall",
    "renew",
    "their",
    "strength;"
   ],
   "answer": 8,
   "source": "Isaiah 40:31, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-09",
   "set": "A",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Matthew 7:24, King James Version.) Click the word that governs “him.”",
   "explain": "“Him” is the object of “will liken.” It points back to “whosoever,” the clause that opens the sentence.",
   "tokens": [
    "Therefore",
    "whosoever",
    "heareth",
    "these",
    "sayings",
    "of",
    "mine,",
    "and",
    "doeth",
    "them,",
    "I",
    "will",
    "liken",
    "him",
    "unto",
    "a",
    "wise",
    "man,",
    "which",
    "built",
    "his",
    "house",
    "upon",
    "a",
    "rock:"
   ],
   "answer": 12,
   "source": "Matthew 7:24, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "gv-L3-10",
   "set": "B",
   "level": 3,
   "deck": "v.government",
   "type": "identify",
   "prompt": "(Psalm 137:1, King James Version.) Click the word that governs “Zion.”",
   "explain": "“Zion” is the object of “remembered,” the verb of the clause that ends the sentence.",
   "tokens": [
    "By",
    "the",
    "rivers",
    "of",
    "Babylon,",
    "there",
    "we",
    "sat",
    "down,",
    "yea,",
    "we",
    "wept,",
    "when",
    "we",
    "remembered",
    "Zion."
   ],
   "answer": 14,
   "source": "Psalm 137:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
