/* The Eight Parts [iii.ex.parts]  Exercise set opened from the Exercise button of iii.parts.
   LEVELS (23 Oct 2026, Timothy approved LEVELS-PLAN.md step 1): every item has "level" (an item with none counts as Level I).
   Level I (39): plain usage. Level II (21): the part changes by use. Level III (22): the marked word inside a real
   long period. Level IV (20): the part and the word it is joined to, two-part options. Levels III and IV quote Milton,
   the King James Bible, Austen, and Bunyan; each item's "source" names the passage and the text it was checked against.
   "levels": pass at Level II, mastery at Level IV (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.parts'] = {
 "id": "iii.ex.parts",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "The Eight Parts",
 "openedFrom": "iii.parts (Exercise button)",
 "covers": [
  {
   "deck": "iii.parts",
   "cards": [
    "the-eight",
    "by-use",
    "noun",
    "pronoun",
    "verb",
    "participle",
    "adverb-preposition",
    "conjunction-interjection",
    "english-eight"
   ]
  }
 ],
 "skill": "Name the part of speech of the marked word in a sentence.",
 "types": [
  "mc-marked"
 ],
 "pool": 102,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Levels III and IV have sets A and B.",
 "sets": {
  "A": 41,
  "B": 41,
  "C": 20
 },
 "levels": {
  "pass": 2,
  "top": 4,
  "names": {
   "1": "The marked word in a short plain sentence, used in its usual way.",
   "2": "The marked word in a short sentence, where its use decides its part: a noun used as a verb, a participle, a word that is a preposition in one place and an adverb in another.",
   "3": "The marked word inside a long period from Milton, the King James Bible, Austen, or Bunyan.",
   "4": "In the same periods, name the part of speech and the word to which the marked word is joined in the construction."
  },
  "counts": {
   "1": 39,
   "2": 21,
   "3": 22,
   "4": 20
  }
 },
 "limit": "Only clear and typical uses that the definitions in III.1 decide; contested cases (that as pronoun or conjunction, running as participle or gerund, an adjective used as a noun) are left to the section review.",
 "instr": "Name the part of speech of the marked word. We use Donatus’s eight parts unless the question asks for the traditional English list.",
 "items": [
  {
   "id": "prt-A01",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The farmer <b>planted</b> barley in March.” What part of speech is the marked word?",
   "options": [
    "Participle",
    "Verb",
    "Noun",
    "Adverb"
   ],
   "answer": 1,
   "explain": "“Planted” says what the farmer did and signifies past time, so it is a verb."
  },
  {
   "id": "prt-A02",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The fishermen <b>net</b> the herring at night.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Verb",
    "Preposition"
   ],
   "answer": 2,
   "explain": "Here “net” says what the fishermen do, so it is a verb. In “a torn net” the same word refers to a thing and is a noun; the use in the sentence decides the part of speech."
  },
  {
   "id": "prt-A03",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Her <b>patience</b> surprised everyone.” What part of speech is the marked word?",
   "options": [
    "Verb",
    "Adverb",
    "Participle",
    "Noun"
   ],
   "answer": 3,
   "explain": "“Patience” names a quality that cannot be seen or touched, and it is the subject of “surprised.” It is a noun, which in Donatus’s terms signifies a thing rather than a body."
  },
  {
   "id": "prt-A04",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The guests arrived late, and the host greeted <b>them</b> at the door.” What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Noun",
    "Adverb",
    "Conjunction"
   ],
   "answer": 0,
   "explain": "“Them” is put in place of “the guests” and refers to the same people, so the noun need not be repeated. It is a pronoun."
  },
  {
   "id": "prt-A05",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The pond <b>freezes</b> every winter.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Verb",
    "Participle",
    "Adverb"
   ],
   "answer": 1,
   "explain": "“Freezes” says what happens to the pond and is marked for person and time, so it is a verb."
  },
  {
   "id": "prt-A06",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>howling</b> wind kept us awake.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Participle",
    "Verb"
   ],
   "answer": 2,
   "explain": "“Howling” describes the wind, as an adjective does, but it still signifies an action going on, as a verb does. A word that takes part of the noun and part of the verb in this way is a participle."
  },
  {
   "id": "prt-A07",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The ship sailed <b>beyond</b> the reef.” What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Noun",
    "Preposition"
   ],
   "answer": 3,
   "explain": "“Beyond” stands before the noun “reef” and relates it to the sailing, so it is a preposition."
  },
  {
   "id": "prt-A08",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“We waited for an hour, <b>but</b> nobody came.” What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Preposition",
    "Adverb",
    "Interjection"
   ],
   "answer": 0,
   "explain": "“But” joins the two clauses and shows that the second is contrary to what the first leads us to expect. It is a conjunction."
  },
  {
   "id": "prt-A09",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“A <b>narrow</b> footbridge crossed the stream.” In the traditional English list, what part of speech is the marked word?",
   "options": [
    "Noun",
    "Adjective",
    "Adverb",
    "Participle"
   ],
   "answer": 1,
   "explain": "English grammars count the adjective as a part of its own, and “narrow” tells what sort of footbridge is meant. Donatus would count the same word under the noun."
  },
  {
   "id": "prt-A10",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Alas</b>, the harvest failed again.” What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Interjection",
    "Adverb",
    "Pronoun"
   ],
   "answer": 1,
   "explain": "“Alas” expresses grief and is not constructed with the other words of the sentence, so it is an interjection."
  },
  {
   "id": "prt-A11",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“When the rain began, the children ran <b>inside</b>.” What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Noun",
    "Adverb",
    "Conjunction"
   ],
   "answer": 2,
   "explain": "Here “inside” has no noun after it and tells where the children ran, so it is an adverb. In “inside the house” the same word governs a noun and is a preposition."
  },
  {
   "id": "prt-A12",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>Thames</b> flows through Oxford.” What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Adverb",
    "Verb",
    "Noun"
   ],
   "answer": 3,
   "explain": "“Thames” names one particular river, so it is a noun, and in Donatus’s terms it signifies properly rather than commonly (it is a proper noun)."
  },
  {
   "id": "prt-A13",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Who</b> left the gate open?” What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Adverb",
    "Conjunction",
    "Noun"
   ],
   "answer": 0,
   "explain": "“Who” stands in place of the name of the person we are asking about, so it is a pronoun (an interrogative pronoun)."
  },
  {
   "id": "prt-A14",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Faber gladium <b>acuit</b>.</i> (“The smith sharpens the sword.”) What part of speech is the marked word?",
   "options": [
    "Participle",
    "Verb",
    "Noun",
    "Adverb"
   ],
   "answer": 1,
   "explain": "<i>Acuit</i> says what the smith does and is marked for person and time (third person, present), so it is a verb."
  },
  {
   "id": "prt-A15",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Puer <b>lacrimāns</b> domum rediit.</i> (“The boy went home weeping.”) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Adverb",
    "Participle",
    "Noun"
   ],
   "answer": 2,
   "explain": "<i>Lacrimāns</i> agrees with <i>puer</i> in case and gender, as a noun does, but it is formed from the verb <i>lacrimō</i> and signifies an action going on, as a verb does. So it is a participle."
  },
  {
   "id": "prt-A16",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Mīlitēs <b>prope</b> flūmen castra posuērunt.</i> (“The soldiers pitched camp near the river.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Noun",
    "Preposition"
   ],
   "answer": 3,
   "explain": "<i>Prope</i> stands before <i>flūmen</i> and takes the accusative case, relating the river to the camp, so here it is a preposition. Without a noun (<i>prope adest</i>, “he is near”) the same word is an adverb."
  },
  {
   "id": "prt-A17",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Pluēbat, <b>itaque</b> domī mānsimus.</i> (“It was raining, and so we stayed at home.”) What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Adverb",
    "Preposition",
    "Pronoun"
   ],
   "answer": 0,
   "explain": "<i>Itaque</i> joins the two clauses and shows that the second follows from the first, so it is a conjunction."
  },
  {
   "id": "prt-A18",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i><b>Dūrum</b> saxum frēgit.</i> (“He broke a hard stone.”) In Donatus’s eight parts, what part of speech is the marked word?",
   "options": [
    "Adverb",
    "Noun",
    "Participle",
    "Verb"
   ],
   "answer": 1,
   "explain": "An English grammar would call “hard” an adjective, but Donatus counts the adjective under the noun, because <i>dūrum</i> has case and is declined as a noun is. So in his eight it is a noun."
  },
  {
   "id": "prt-A19",
   "set": "A",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Ego <b>tibi</b> librum dō.</i> (“I give you a book.”) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Pronoun",
    "Preposition"
   ],
   "answer": 2,
   "explain": "<i>Tibi</i> refers to the person spoken to without naming that person; it is the second-person pronoun <i>tū</i> in the dative case."
  },
  {
   "id": "prt-A20",
   "set": "A",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i><b>Quam</b> pulchra est rosa!</i> (“How beautiful the rose is!”) What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Conjunction",
    "Adverb",
    "Preposition"
   ],
   "answer": 2,
   "explain": "Here <i>quam</i> modifies <i>pulchra</i> and says how beautiful, so it is an adverb. In <i>altior quam frāter</i> (“taller than his brother”) it is a conjunction, and as the feminine accusative of <i>quī</i> it is a pronoun."
  },
  {
   "id": "prt-B01",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>orchard</b> lies behind the barn.” What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Verb",
    "Noun",
    "Preposition"
   ],
   "answer": 2,
   "explain": "“Orchard” names a place that can be seen and touched, so it is a noun; in Donatus’s terms it signifies a body."
  },
  {
   "id": "prt-B02",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The gardeners <b>water</b> the roses each evening.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Participle",
    "Adverb",
    "Verb"
   ],
   "answer": 3,
   "explain": "Here “water” says what the gardeners do, so it is a verb. In “a glass of water” the same word refers to a thing and is a noun."
  },
  {
   "id": "prt-B03",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>loyalty</b> of the old dog moved us.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Verb",
    "Pronoun"
   ],
   "answer": 0,
   "explain": "“Loyalty” names a quality that cannot be seen or touched, and it is the subject of “moved,” so it is a noun."
  },
  {
   "id": "prt-B04",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The red umbrella is <b>hers</b>.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Pronoun",
    "Adverb",
    "Preposition"
   ],
   "answer": 1,
   "explain": "“Hers” stands in place of a noun (“her umbrella”) and refers to a person without naming her. English grammars call it a possessive pronoun."
  },
  {
   "id": "prt-B05",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The church bells <b>pealed</b> at noon.” What part of speech is the marked word?",
   "options": [
    "Participle",
    "Noun",
    "Verb",
    "Adverb"
   ],
   "answer": 2,
   "explain": "“Pealed” says what the bells did and signifies past time, so it is a verb."
  },
  {
   "id": "prt-B06",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>frightened</b> horse bolted.” What part of speech is the marked word?",
   "options": [
    "Verb",
    "Adverb",
    "Noun",
    "Participle"
   ],
   "answer": 3,
   "explain": "“Frightened” describes the horse, as an adjective does, but it is formed from the verb “frighten” and signifies something undergone. So it is a participle."
  },
  {
   "id": "prt-B07",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The guide spoke <b>gently</b> to the nervous climbers.” What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Preposition",
    "Noun",
    "Conjunction"
   ],
   "answer": 0,
   "explain": "“Gently” is added to the verb “spoke” and makes clear how the guide spoke, so it is an adverb."
  },
  {
   "id": "prt-B08",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Oh</b>, I forgot the tickets.” What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Interjection",
    "Adverb",
    "Pronoun"
   ],
   "answer": 1,
   "explain": "“Oh” expresses a sudden feeling and is not constructed with the other words of the sentence, so it is an interjection."
  },
  {
   "id": "prt-B09",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“She wore a <b>green</b> scarf.” In the traditional English list, what part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Adjective",
    "Participle"
   ],
   "answer": 2,
   "explain": "“Green” tells what sort of scarf is meant, and English grammars count the adjective as a part of its own. In “the village green” the same word is a noun."
  },
  {
   "id": "prt-B10",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The cat slept <b>beneath</b> the stove.” What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Preposition",
    "Noun"
   ],
   "answer": 2,
   "explain": "“Beneath” stands before the noun “stove” and relates it to the sleeping, so it is a preposition."
  },
  {
   "id": "prt-B11",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The bridge will stay closed <b>until</b> Friday.” What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Adverb",
    "Noun",
    "Preposition"
   ],
   "answer": 3,
   "explain": "Here “until” stands before the noun “Friday,” so it is a preposition. In “until the river falls” it introduces a clause and is a conjunction."
  },
  {
   "id": "prt-B12",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“A grey <b>heron</b> stood in the shallows.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Verb",
    "Pronoun"
   ],
   "answer": 0,
   "explain": "“Heron” names a kind of bird, so it is a noun; in Donatus’s terms it signifies a body commonly rather than properly (it is a common noun)."
  },
  {
   "id": "prt-B13",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Nobody</b> answered the telephone.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Pronoun",
    "Adverb",
    "Conjunction"
   ],
   "answer": 1,
   "explain": "“Nobody” stands in place of a noun without naming any person, and English grammars call it an indefinite pronoun."
  },
  {
   "id": "prt-B14",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Avēs in arbore <b>canunt</b>.</i> (“The birds sing in the tree.”) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Participle",
    "Verb",
    "Adverb"
   ],
   "answer": 2,
   "explain": "<i>Canunt</i> says what the birds do and is marked for person and time (third person plural, present), so it is a verb."
  },
  {
   "id": "prt-B15",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Rōmānī urbem <b>expugnātam</b> dīripuērunt.</i> (“The Romans plundered the city they had stormed.”) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Noun",
    "Adverb",
    "Participle"
   ],
   "answer": 3,
   "explain": "<i>Expugnātam</i> agrees with <i>urbem</i> in case and gender, as a noun does, but it is formed from the verb <i>expugnō</i> and signifies something undergone in past time. So it is a participle."
  },
  {
   "id": "prt-B16",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Hostēs <b>ācriter</b> pugnāvērunt.</i> (“The enemy fought fiercely.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Preposition",
    "Noun",
    "Conjunction"
   ],
   "answer": 0,
   "explain": "<i>Ācriter</i> is added to the verb <i>pugnāvērunt</i> and makes clear how they fought, so it is an adverb."
  },
  {
   "id": "prt-B17",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i><b>Heu</b>, frāter meus periit!</i> (“Alas, my brother has died!”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Interjection",
    "Conjunction",
    "Pronoun"
   ],
   "answer": 1,
   "explain": "<i>Heu</i> expresses grief and is not constructed with the other words of the sentence, so it is an interjection."
  },
  {
   "id": "prt-B18",
   "set": "B",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Nāvis <b>magna</b> in portū stat.</i> (“A large ship stands in the harbor.”) In Donatus’s eight parts, what part of speech is the marked word?",
   "options": [
    "Adverb",
    "Participle",
    "Noun",
    "Verb"
   ],
   "answer": 2,
   "explain": "Donatus counts the adjective under the noun, because <i>magna</i> has case and gender and is declined as a noun is. So in his eight it is a noun, although an English grammar would call “large” an adjective."
  },
  {
   "id": "prt-B19",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Fābulam <b>nōbīs</b> nārrāvit.</i> (“She told us a story.”) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Preposition",
    "Pronoun"
   ],
   "answer": 3,
   "explain": "<i>Nōbīs</i> refers to the speakers without naming them; it is the first-person plural pronoun <i>nōs</i> in the dative case."
  },
  {
   "id": "prt-B20",
   "set": "B",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i><b>Circum</b> mūrōs ambulāvimus.</i> (“We walked around the walls.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Noun",
    "Preposition"
   ],
   "answer": 3,
   "explain": "Here <i>circum</i> stands before <i>mūrōs</i> and takes the accusative, so it is a preposition. When it stands without a noun and means “round about,” the same word is an adverb."
  },
  {
   "id": "prt-C01",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The travelers rested <b>and</b> ate.” What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Adverb",
    "Interjection",
    "Conjunction"
   ],
   "answer": 3,
   "explain": "“And” joins the two verbs “rested” and “ate,” so it is a conjunction."
  },
  {
   "id": "prt-C02",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The chess match ended in a <b>draw</b>.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Verb",
    "Adverb",
    "Participle"
   ],
   "answer": 0,
   "explain": "Here “draw” names the result of the match and stands after the preposition “in,” so it is a noun. In “draw a map” the same word says what is done and is a verb."
  },
  {
   "id": "prt-C03",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>Alps</b> divide Italy from France.” What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Noun",
    "Adverb",
    "Adjective"
   ],
   "answer": 1,
   "explain": "“Alps” names one particular range of mountains, so it is a noun; it signifies properly, as Donatus says (it is a proper noun)."
  },
  {
   "id": "prt-C04",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The two sisters blamed <b>themselves</b> for the quarrel.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Pronoun",
    "Conjunction"
   ],
   "answer": 2,
   "explain": "“Themselves” refers back to “the two sisters” without repeating the noun, so it is a pronoun (a reflexive pronoun)."
  },
  {
   "id": "prt-C05",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The baker <b>kneads</b> the dough before dawn.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Participle",
    "Adverb",
    "Verb"
   ],
   "answer": 3,
   "explain": "“Kneads” says what the baker does and is marked for person and time, so it is a verb."
  },
  {
   "id": "prt-C06",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Yawning</b>, the porter waited at the gate.” What part of speech is the marked word?",
   "options": [
    "Participle",
    "Noun",
    "Adverb",
    "Verb"
   ],
   "answer": 0,
   "explain": "“Yawning” describes the porter, as an adjective does, but signifies an action going on at the same time as “waited.” So it is a participle."
  },
  {
   "id": "prt-C07",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The train stopped <b>twice</b> before the border.” What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Adverb",
    "Noun",
    "Conjunction"
   ],
   "answer": 1,
   "explain": "“Twice” is added to the verb “stopped” and tells how often, so it is an adverb."
  },
  {
   "id": "prt-C08",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Although</b> the road was icy, the bus ran on time.” What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Adverb",
    "Conjunction",
    "Interjection"
   ],
   "answer": 2,
   "explain": "“Although” joins the first clause to the second and shows that the first might have prevented what the second states. It is a conjunction."
  },
  {
   "id": "prt-C09",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>A</b> fox crossed the road at dusk.” In the traditional English list, what part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Adverb",
    "Noun",
    "Adjective"
   ],
   "answer": 3,
   "explain": "English grammars usually count the articles with the adjectives, so “a” is an adjective in the traditional English list (some older grammars count the article as a part of its own)."
  },
  {
   "id": "prt-C10",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Ouch</b>, that kettle is hot!” What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Pronoun",
    "Interjection"
   ],
   "answer": 3,
   "explain": "“Ouch” expresses sudden pain and is not constructed with the other words of the sentence, so it is an interjection."
  },
  {
   "id": "prt-C11",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>Since</b> the museum was closed, we walked by the river instead.” What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Preposition",
    "Adverb",
    "Pronoun"
   ],
   "answer": 0,
   "explain": "Here “since” introduces a clause and gives the reason, so it is a conjunction. In “since Monday” the same word stands before a noun and is a preposition."
  },
  {
   "id": "prt-C12",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The <b>thunder</b> frightened the cattle.” What part of speech is the marked word?",
   "options": [
    "Verb",
    "Noun",
    "Adverb",
    "Participle"
   ],
   "answer": 1,
   "explain": "Here “thunder” is the subject of “frightened” and refers to a thing, so it is a noun. In “It may thunder tonight” the same word is a verb."
  },
  {
   "id": "prt-C13",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“She found the key and handed <b>it</b> to the landlord.” What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Pronoun",
    "Preposition"
   ],
   "answer": 2,
   "explain": "“It” stands in place of “the key” and refers to the same thing, so it is a pronoun."
  },
  {
   "id": "prt-C14",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Lupus ovem <b>petit</b>.</i> (“The wolf attacks the sheep.”) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Participle",
    "Adverb",
    "Verb"
   ],
   "answer": 3,
   "explain": "<i>Petit</i> says what the wolf does and is marked for person and time (third person, present), so it is a verb."
  },
  {
   "id": "prt-C15",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Mīlitēs <b>pugnantēs</b> vīdimus.</i> (“We saw the soldiers fighting.”) What part of speech is the marked word?",
   "options": [
    "Participle",
    "Verb",
    "Noun",
    "Adverb"
   ],
   "answer": 0,
   "explain": "<i>Pugnantēs</i> agrees with <i>mīlitēs</i> in case and number, as a noun does, but it is formed from the verb <i>pugnō</i> and signifies an action going on. So it is a participle."
  },
  {
   "id": "prt-C16",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Puerī <b>sine</b> cūrā lūdunt.</i> (“The boys play without a care.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Preposition",
    "Conjunction",
    "Noun"
   ],
   "answer": 1,
   "explain": "<i>Sine</i> stands before <i>cūrā</i> and takes the ablative case, so it is a preposition."
  },
  {
   "id": "prt-C17",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Manē <b>aut</b> abī.</i> (“Stay or go away.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Preposition",
    "Conjunction",
    "Interjection"
   ],
   "answer": 2,
   "explain": "<i>Aut</i> joins the two commands and offers them as alternatives, so it is a conjunction."
  },
  {
   "id": "prt-C18",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Aqua <b>frīgida</b> est.</i> (“The water is cold.”) In Donatus’s eight parts, what part of speech is the marked word?",
   "options": [
    "Adverb",
    "Verb",
    "Participle",
    "Noun"
   ],
   "answer": 3,
   "explain": "<i>Frīgida</i> has case and gender and agrees with <i>aqua</i>, so Donatus counts it under the noun, although an English grammar would call “cold” an adjective."
  },
  {
   "id": "prt-C19",
   "set": "C",
   "level": 1,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i>Senex <b>lentē</b> ambulat.</i> (“The old man walks slowly.”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Preposition",
    "Noun",
    "Conjunction"
   ],
   "answer": 0,
   "explain": "<i>Lentē</i> is added to the verb <i>ambulat</i> and makes clear how the old man walks, so it is an adverb."
  },
  {
   "id": "prt-C20",
   "set": "C",
   "level": 2,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "<i><b>Ubi</b> es?</i> (“Where are you?”) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Pronoun",
    "Preposition"
   ],
   "answer": 0,
   "explain": "Here <i>ubi</i> asks where and is added to the verb <i>es</i>, so it is an adverb. In <i>ubi vēnit</i> (“when he came”) it introduces a clause and is a conjunction."
  },
  {
   "id": "prt-L3-01",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that <b>forbidden</b> tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Participle",
    "Adverb",
    "Preposition"
   ],
   "answer": 1,
   "explain": "“Forbidden” is formed from the verb “forbid” but is joined to the noun “tree,” as a noun is. It shares in both, so it is a participle.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-02",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree <b>whose</b> mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Conjunction",
    "Noun",
    "Adverb"
   ],
   "answer": 0,
   "explain": "“Whose” stands in place of a noun already named and joins its clause to it, so it is a pronoun, a relative pronoun.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-03",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / <b>Brought</b> death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word?",
   "options": [
    "Participle",
    "Noun",
    "Verb",
    "Preposition"
   ],
   "answer": 2,
   "explain": "“Brought” says what the taste did and signifies past time; it is the main word of its clause, so it is a verb.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-04",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, <b>till</b> one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Adverb",
    "Interjection",
    "Conjunction"
   ],
   "answer": 3,
   "explain": "“Till” joins a whole clause, “one greater Man / Restore us,” to what goes before, so here it is a conjunction.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-05",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / <b>Sing</b>, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Noun",
    "Interjection",
    "Participle"
   ],
   "answer": 0,
   "explain": "“Sing” bids the Muse to act; it is a verb in the imperative mood. The long period of six lines waits for this verb.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-06",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the <b>blissful</b> seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) In Donatus’s eight parts, what part of speech is the marked word?",
   "options": [
    "Adverb",
    "Noun",
    "Participle",
    "Pronoun"
   ],
   "answer": 1,
   "explain": "Donatus counts the adjective as a kind of noun. “Blissful” names a quality of “seat,” so in the eight parts it is a noun.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L3-07",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And the earth was without form, and void; and darkness was <b>upon</b> the face of the deep. And the Spirit of God moved upon the face of the waters.” (Genesis 1:2, King James Version.) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Conjunction",
    "Preposition",
    "Verb"
   ],
   "answer": 2,
   "explain": "“Upon” stands before “the face” and shows how darkness stood to it, so it is a preposition.",
   "source": "Genesis 1:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prt-L3-08",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Yea, <b>though</b> I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.” (Psalm 23:4, King James Version.) What part of speech is the marked word?",
   "options": [
    "Conjunction",
    "Adverb",
    "Preposition",
    "Pronoun"
   ],
   "answer": 0,
   "explain": "“Though” joins the clause “I walk through the valley” to “I will fear no evil,” so it is a conjunction.",
   "source": "Psalm 23:4, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-09",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“For now we see through a glass, <b>darkly</b>; but then face to face: now I know in part; but then shall I know even as also I am known.” (1 Corinthians 13:12, King James Version.) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Participle",
    "Preposition",
    "Adverb"
   ],
   "answer": 3,
   "explain": "“Darkly” tells how we see, so it is added to the verb “see”; it is an adverb.",
   "source": "1 Corinthians 13:12, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-10",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“All the rivers run into the sea; yet the sea is not full; unto the place from whence the rivers come, <b>thither</b> they return again.” (Ecclesiastes 1:7, King James Version.) What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Adverb",
    "Preposition",
    "Conjunction"
   ],
   "answer": 1,
   "explain": "“Thither” means “to that place” and is added to the verb “return,” so it is an adverb.",
   "source": "Ecclesiastes 1:7, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-11",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And there were in the same country shepherds <b>abiding</b> in the field, keeping watch over their flock by night.” (Luke 2:8, King James Version.) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Noun",
    "Participle",
    "Adverb"
   ],
   "answer": 2,
   "explain": "“Abiding” comes from the verb “abide” and is joined to “shepherds,” as a noun is. It is a participle.",
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-12",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And, <b>lo</b>, the angel of the Lord came upon them, and the glory of the Lord shone round about them: and they were sore afraid.” (Luke 2:9, King James Version.) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Interjection",
    "Verb",
    "Conjunction"
   ],
   "answer": 1,
   "explain": "“Lo” shows the feeling of the speaker and calls attention; it belongs to no clause, so it is an interjection.",
   "source": "Luke 2:9, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-13",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“All flesh is grass, and all the <b>goodliness</b> thereof is as the flower of the field.” (Isaiah 40:6, King James Version.) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Participle",
    "Verb"
   ],
   "answer": 0,
   "explain": "“Goodliness” names a quality, “all the goodliness” of the flesh, so it is a noun.",
   "source": "Isaiah 40:6, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-14",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“The grass <b>withereth</b>, the flower fadeth: but the word of our God shall stand for ever.” (Isaiah 40:8, King James Version.) What part of speech is the marked word?",
   "options": [
    "Participle",
    "Noun",
    "Adverb",
    "Verb"
   ],
   "answer": 3,
   "explain": "“Withereth” says what the grass does and has person and time, so it is a verb.",
   "source": "Isaiah 40:8, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-15",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Consider the lilies of the field, how they grow; they toil not, <b>neither</b> do they spin.” (Matthew 6:28, King James Version.) What part of speech is the marked word?",
   "options": [
    "Pronoun",
    "Preposition",
    "Conjunction",
    "Adverb"
   ],
   "answer": 2,
   "explain": "“Neither” joins “they toil not” to “do they spin,” so here it is a conjunction.",
   "source": "Matthew 6:28, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-16",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And the light shineth in darkness; and the darkness comprehended <b>it</b> not.” (John 1:5, King James Version.) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Pronoun",
    "Adverb",
    "Conjunction"
   ],
   "answer": 1,
   "explain": "“It” stands in place of “the light,” so it is a pronoun.",
   "source": "John 1:5, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-17",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“To every thing there is a <b>season</b>, and a time to every purpose under the heaven.” (Ecclesiastes 3:1, King James Version.) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Participle",
    "Adverb",
    "Noun"
   ],
   "answer": 3,
   "explain": "“Season” names a thing, a time, so it is a noun.",
   "source": "Ecclesiastes 3:1, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L3-18",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“It is a truth <b>universally</b> acknowledged, that a single man in possession of a good fortune must be in want of a wife.” (Jane Austen, Pride and Prejudice, chapter 1.) What part of speech is the marked word?",
   "options": [
    "Adverb",
    "Noun",
    "Participle",
    "Conjunction"
   ],
   "answer": 0,
   "explain": "“Universally” tells how the truth is acknowledged and is added to “acknowledged,” so it is an adverb.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342"
  },
  {
   "id": "prt-L3-19",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“It is a truth universally <b>acknowledged</b>, that a single man in possession of a good fortune must be in want of a wife.” (Jane Austen, Pride and Prejudice, chapter 1.) What part of speech is the marked word?",
   "options": [
    "Verb",
    "Participle",
    "Noun",
    "Adverb"
   ],
   "answer": 1,
   "explain": "“Acknowledged” comes from the verb “acknowledge” and is joined to “truth,” as a noun is. It is a participle.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342"
  },
  {
   "id": "prt-L3-20",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid <b>me</b> down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word?",
   "options": [
    "Noun",
    "Adverb",
    "Pronoun",
    "Preposition"
   ],
   "answer": 2,
   "explain": "“Me” stands in place of the speaker’s name; “laid me down” means “lay down.” It is a pronoun.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L3-21",
   "set": "A",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“<b>As</b> I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word?",
   "options": [
    "Preposition",
    "Adverb",
    "Pronoun",
    "Conjunction"
   ],
   "answer": 3,
   "explain": "“As” joins the clause “I walked through the wilderness” to the main clause “I lighted on a certain place,” so it is a conjunction.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L3-22",
   "set": "B",
   "level": 3,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man <b>clothed</b> with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word?",
   "options": [
    "Participle",
    "Verb",
    "Noun",
    "Adverb"
   ],
   "answer": 0,
   "explain": "“Clothed” comes from the verb “clothe” and is joined to “man,” as a noun is. It is a participle.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L4-01",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that <b>forbidden</b> tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Participle, joined to “fruit”",
    "Verb, with the subject “taste”",
    "Participle, joined to “tree”",
    "Noun, joined to “Man”"
   ],
   "answer": 2,
   "explain": "“Forbidden” is a participle, and it agrees with “tree”: “that forbidden tree.”",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L4-02",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / <b>Brought</b> death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Verb, with the subject “taste”",
    "Verb, with the subject “tree”",
    "Participle, joined to “death”",
    "Verb, with the subject “fruit”"
   ],
   "answer": 0,
   "explain": "“Brought” is a verb. What brought death into the world? “Whose mortal taste,” so its subject is “taste.”",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L4-03",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / <b>Restore</b> us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Verb, with the subject “Muse”",
    "Noun, joined to “Eden”",
    "Verb, with the subject “loss”",
    "Verb, with the subject “Man”"
   ],
   "answer": 3,
   "explain": "“Restore” is a verb, and its subject is “one greater Man”: “till one greater Man / Restore us.”",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L4-04",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / <b>Sing</b>, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Verb, with the subject “woe”",
    "Verb, addressed to the “Muse”",
    "Noun, joined to “seat”",
    "Interjection, joined to nothing"
   ],
   "answer": 1,
   "explain": "“Sing” is a verb in the imperative, and the one bidden to sing is the “Heavenly Muse.”",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L4-05",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose <b>mortal</b> taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, Paradise Lost, Book I, lines 1 to 6.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Noun, joined to “death”",
    "Adverb, added to “Brought”",
    "Noun, joined to “taste”",
    "Participle, joined to “tree”"
   ],
   "answer": 2,
   "explain": "In Donatus’s eight parts “mortal” is a noun (an adjective), and it agrees with “taste”: “whose mortal taste.”",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost), lines 1 to 6"
  },
  {
   "id": "prt-L4-06",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And there were in the same country shepherds <b>abiding</b> in the field, keeping watch over their flock by night.” (Luke 2:8, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Participle, joined to “shepherds”",
    "Participle, joined to “country”",
    "Verb, with the subject “shepherds”",
    "Adverb, added to “were”"
   ],
   "answer": 0,
   "explain": "“Abiding” is a participle. Who were abiding in the field? The shepherds.",
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-07",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And there were in the same country shepherds abiding in the field, <b>keeping</b> watch over their flock by night.” (Luke 2:8, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Participle, joined to “field”",
    "Verb, with the subject “watch”",
    "Noun, joined to “flock”",
    "Participle, joined to “shepherds”"
   ],
   "answer": 3,
   "explain": "“Keeping” is a participle, and like “abiding” it agrees with “shepherds”: the shepherds were keeping watch.",
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-08",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved <b>upon</b> the face of the waters.” (Genesis 1:2, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Adverb, added to “moved”",
    "Preposition, governing “face”",
    "Preposition, governing “waters”",
    "Conjunction, joining “Spirit” and “God”"
   ],
   "answer": 1,
   "explain": "“Upon” is a preposition, and its object is “the face”; “of the waters” then depends on “face.”",
   "source": "Genesis 1:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prt-L4-09",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“For now we see through a glass, <b>darkly</b>; but then face to face: now I know in part; but then shall I know even as also I am known.” (1 Corinthians 13:12, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Noun, joined to “glass”",
    "Adverb, added to “now”",
    "Preposition, governing “glass”",
    "Adverb, added to “see”"
   ],
   "answer": 3,
   "explain": "“Darkly” is an adverb. It tells how we see, so it is added to the verb “see.”",
   "source": "1 Corinthians 13:12, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-10",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“All the rivers run into the sea; yet the sea is not full; unto the place from whence the rivers come, <b>thither</b> they return again.” (Ecclesiastes 1:7, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Adverb, added to “return”",
    "Adverb, added to “come”",
    "Pronoun, standing for “sea”",
    "Adverb, added to “run”"
   ],
   "answer": 0,
   "explain": "“Thither” is an adverb, and it tells where they return: “thither they return again.”",
   "source": "Ecclesiastes 1:7, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-11",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“It is a truth <b>universally</b> acknowledged, that a single man in possession of a good fortune must be in want of a wife.” (Jane Austen, Pride and Prejudice, chapter 1.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Adverb, added to “is”",
    "Adverb, added to “acknowledged”",
    "Noun, joined to “truth”",
    "Adverb, added to “want”"
   ],
   "answer": 1,
   "explain": "“Universally” is an adverb, and it tells how the truth is acknowledged.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342"
  },
  {
   "id": "prt-L4-12",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“It is a truth universally <b>acknowledged</b>, that a single man in possession of a good fortune must be in want of a wife.” (Jane Austen, Pride and Prejudice, chapter 1.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Participle, joined to “man”",
    "Verb, with the subject “It”",
    "Participle, joined to “truth”",
    "Verb, with the subject “man”"
   ],
   "answer": 2,
   "explain": "“Acknowledged” is a participle, and it agrees with “truth”: “a truth universally acknowledged.”",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342"
  },
  {
   "id": "prt-L4-13",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“It is a truth universally acknowledged, that a single man <b>in</b> possession of a good fortune must be in want of a wife.” (Jane Austen, Pride and Prejudice, chapter 1.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Preposition, governing “fortune”",
    "Adverb, added to “single”",
    "Preposition, governing “want”",
    "Preposition, governing “possession”"
   ],
   "answer": 3,
   "explain": "This first “in” is a preposition, and its object is “possession”; “of a good fortune” then depends on “possession.”",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342"
  },
  {
   "id": "prt-L4-14",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid <b>me</b> down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Pronoun, the object of “laid”",
    "Pronoun, the subject of “laid”",
    "Pronoun, governed by “in”",
    "Adverb, added to “laid”"
   ],
   "answer": 0,
   "explain": "“Me” is a pronoun, and it is the object of “laid”: “I laid me down.” The subject is “I.”",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L4-15",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“As I walked through the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man <b>clothed</b> with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Participle, joined to “rags”",
    "Participle, joined to “man”",
    "Verb, with the subject “I”",
    "Verb, with the subject “man”"
   ],
   "answer": 1,
   "explain": "“Clothed” is a participle, and it agrees with “man”: “a man clothed with rags.”",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L4-16",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“As I walked <b>through</b> the wilderness of this world, I lighted on a certain place where was a Den, and I laid me down in that place to sleep: and, as I slept, I dreamed a dream. I dreamed, and behold, I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (John Bunyan, The Pilgrim’s Progress, opening.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Preposition, governing “world”",
    "Adverb, added to “walked”",
    "Preposition, governing “wilderness”",
    "Conjunction, joining two clauses"
   ],
   "answer": 2,
   "explain": "“Through” is a preposition, and its object is “the wilderness”; “of this world” then depends on “wilderness.”",
   "source": "John Bunyan, The Pilgrim’s Progress, opening; text checked against Project Gutenberg eBook #131"
  },
  {
   "id": "prt-L4-17",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Yea, <b>though</b> I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.” (Psalm 23:4, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Preposition, governing “valley”",
    "Conjunction, joining “rod” and “staff”",
    "Adverb, added to “walk”",
    "Conjunction, joining “I walk” to “I will fear no evil”"
   ],
   "answer": 3,
   "explain": "“Though” is a conjunction, and it joins the clause “I walk through the valley” to the main clause “I will fear no evil.”",
   "source": "Psalm 23:4, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-18",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“And the light shineth in darkness; and the darkness comprehended <b>it</b> not.” (John 1:5, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Pronoun, standing for “light”",
    "Pronoun, standing for “darkness”",
    "Noun, the subject of “comprehended”",
    "Pronoun, the subject of “shineth”"
   ],
   "answer": 0,
   "explain": "“It” is a pronoun, and it stands for “the light”: the darkness did not comprehend the light.",
   "source": "John 1:5, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-19",
   "set": "A",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“To every thing there is a season, and a time to every purpose <b>under</b> the heaven.” (Ecclesiastes 3:1, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Adverb, added to “is”",
    "Preposition, governing “heaven”",
    "Preposition, governing “purpose”",
    "Conjunction, joining “season” and “time”"
   ],
   "answer": 1,
   "explain": "“Under” is a preposition, and its object is “the heaven.”",
   "source": "Ecclesiastes 3:1, King James Version; text checked against Project Gutenberg eBook #10"
  },
  {
   "id": "prt-L4-20",
   "set": "B",
   "level": 4,
   "deck": "iii.parts",
   "type": "mc-marked",
   "prompt": "“Consider the lilies of the field, <b>how</b> they grow; they toil not, neither do they spin.” (Matthew 6:28, King James Version.) What part of speech is the marked word, and to what word is it joined in the construction?",
   "options": [
    "Pronoun, standing for “lilies”",
    "Adverb, added to “Consider”",
    "Adverb, added to “grow”",
    "Conjunction, joining “toil” and “spin”"
   ],
   "answer": 2,
   "explain": "“How” is an adverb. It asks the manner of growing, so it is added to “grow.”",
   "source": "Matthew 6:28, King James Version; text checked against Project Gutenberg eBook #10"
  }
 ]
};
