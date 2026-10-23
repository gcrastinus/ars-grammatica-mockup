/* Dependence [v.ex.dependence]  Exercise set opened from the Exercise button of v.dependence. Written; 41 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize dependence (choose or sort). Level II: find the word on which another depends in short sentences, some from the King James Bible, Cicero, and Vergil. Level III: follow dependence through long real sentences from the King James Bible, Austen, Milton, Bunyan, Caesar, and Cicero.
   Level I (21), Level II (10), Level III (10). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.dependence'] = {
 "id": "v.ex.dependence",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "Dependence",
 "openedFrom": "v.dependence (Exercise button)",
 "covers": [
  {
   "deck": "v.dependence",
   "cards": [
    "dependence",
    "kinds",
    "many-constructions",
    "transitive-intransitive",
    "tesniere",
    "valency",
    "marking",
    "prepositional",
    "together"
   ]
  }
 ],
 "skill": "Find the word on which a word depends; sort the principal dependences; count the constructions of a sentence; give the valency of a verb; say whether a dependence is shown by agreement, by government, or by neither.",
 "types": [
  "sort",
  "identify",
  "mc"
 ],
 "pool": 41,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 17,
  "B": 16,
  "C": 8
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Recognize dependence: choose or sort.",
   "2": "Find the word on which another depends.",
   "3": "Follow dependence through long sentences from real authors."
  },
  "counts": {
   "1": 21,
   "2": 10,
   "3": 10
  }
 },
 "limit": "Only what v.dependence teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "dp-A01",
   "set": "A",
   "deck": "v.dependence",
   "type": "sort",
   "prompt": "Sort each pair by the kind of dependence it shows, following Thomas of Erfurt.",
   "entries": [
    "“bright star”",
    "“sings sweetly”",
    "“the baker bakes”",
    "“bake bread”",
    "<i>vir fortis</i> (“a brave man”)",
    "<i>fortiter pugnat</i> (“he fights bravely”)"
   ],
   "bins": [
    "Adjective on noun",
    "Adverb on verb",
    "Verb on subject",
    "Verb on object"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    0,
    1
   ],
   "explain": "Thomas of Erfurt gives four principal dependences: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it is transitive, on its object.",
   "level": 1
  },
  {
   "id": "dp-A02",
   "set": "A",
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "“The old boatman rowed slowly.” Click the word on which “slowly” depends.",
   "tokens": [
    "The",
    "old",
    "boatman",
    "rowed",
    "slowly."
   ],
   "answer": 3,
   "explain": "“Slowly” is an adverb and signifies a manner of acting, so it depends on the verb “rowed.”",
   "level": 2
  },
  {
   "id": "dp-A03",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "How many constructions does Latin <i>avis parva canit dulciter</i> (“the small bird sings sweetly”) contain?",
   "options": [
    "Two",
    "Three",
    "Four",
    "Five"
   ],
   "answer": 1,
   "explain": "<i>Parva</i> depends on <i>avis</i>, <i>canit</i> depends on <i>avis</i>, and <i>dulciter</i> depends on <i>canit</i>: three constructions, one pair at a time.",
   "level": 1
  },
  {
   "id": "dp-A04",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "What is the valency of “yawns”?",
   "options": [
    "None",
    "Two",
    "One",
    "Three"
   ],
   "answer": 2,
   "explain": "“Yawns” requires one participant, someone who yawns, and nothing else, so its valency is one.",
   "level": 1
  },
  {
   "id": "dp-A05",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Latin <i>rēgīna lēgātō epistulam mittit</i> (“the queen sends the envoy a letter”), in which cases does <i>mittit</i> require its participants?",
   "options": [
    "Nominative and accusative only",
    "Accusative and genitive",
    "Nominative only, for the subject",
    "Nominative, accusative, dative"
   ],
   "answer": 3,
   "explain": "<i>Mittit</i> is a verb of three places: the one who sends in the nominative (<i>rēgīna</i>), the thing sent in the accusative (<i>epistulam</i>), and the one to whom it is sent in the dative (<i>lēgātō</i>).",
   "level": 1
  },
  {
   "id": "dp-A06",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Thomas of Erfurt’s sense, is <i>fīlia rēgis</i> (“the king’s daughter”) a transitive or an intransitive construction?",
   "options": [
    "Transitive",
    "Intransitive",
    "Neither, because it has no verb",
    "Both at once"
   ],
   "answer": 0,
   "explain": "The construction reaches from one thing, the daughter, to another, the king, so in Thomas’s broad sense it is transitive, like a verb with its object.",
   "level": 1
  },
  {
   "id": "dp-A07",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In “The vase on the shelf fell,” on which word does the phrase “on the shelf” depend?",
   "options": [
    "“fell”",
    "“vase”",
    "“shelf”",
    "On no word"
   ],
   "answer": 1,
   "explain": "The phrase tells which vase is meant, as an adjective would, so it depends on “vase.” Within the phrase, “shelf” depends on “on.”",
   "level": 1
  },
  {
   "id": "dp-A08",
   "set": "A",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Latin <i>puella rosam carpit</i> (“the girl picks a rose”), how is the dependence of <i>carpit</i> on <i>puella</i> shown?",
   "options": [
    "By government",
    "By neither",
    "By agreement",
    "By its case"
   ],
   "answer": 2,
   "explain": "The verb takes the person and number of its subject, third person singular, so the dependence is shown by agreement. Its dependence on <i>rosam</i> is shown by government.",
   "level": 1
  },
  {
   "id": "dp-B01",
   "set": "B",
   "deck": "v.dependence",
   "type": "sort",
   "prompt": "Sort each pair by the kind of dependence it shows, following Thomas of Erfurt.",
   "entries": [
    "“a cold night”",
    "“speaks softly”",
    "“the dog barks”",
    "“catch the ball”",
    "<i>lūx clāra</i> (“a clear light”)",
    "<i>celeriter currit</i> (“he runs quickly”)"
   ],
   "bins": [
    "Adjective on noun",
    "Adverb on verb",
    "Verb on subject",
    "Verb on object"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    0,
    1
   ],
   "explain": "Thomas of Erfurt gives four principal dependences: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it is transitive, on its object.",
   "level": 1
  },
  {
   "id": "dp-B02",
   "set": "B",
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "“The young weaver counted the threads.” Click every word on which “counted” depends, following Thomas of Erfurt.",
   "tokens": [
    "The",
    "young",
    "weaver",
    "counted",
    "the",
    "threads."
   ],
   "answer": [
    2,
    5
   ],
   "explain": "The verb depends on its subject, “weaver,” and, because it is transitive, on its object, “threads.” “The” and “young” depend on “weaver,” and the second “the” on “threads.”",
   "level": 2
  },
  {
   "id": "dp-B03",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "How many constructions does “Dark clouds gather” contain?",
   "options": [
    "One",
    "Three",
    "Two",
    "Four"
   ],
   "answer": 2,
   "explain": "“Dark” depends on “clouds,” and “gather” depends on “clouds”: two constructions.",
   "level": 1
  },
  {
   "id": "dp-B04",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "What is the valency of “lends” in “She lends her brother money”?",
   "options": [
    "One",
    "Two",
    "None",
    "Three"
   ],
   "answer": 3,
   "explain": "“Lends” requires someone who lends, something lent, and someone to whom it is lent, so its valency is three.",
   "level": 1
  },
  {
   "id": "dp-B05",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "Which of these verbs requires no participant at all?",
   "options": [
    "“it thunders”",
    "“he walks”",
    "“she eats”",
    "“they tell”"
   ],
   "answer": 0,
   "explain": "“It thunders,” like <i>pluit</i>, has no one who does the thundering; the “it” names nothing. Its valency is zero.",
   "level": 1
  },
  {
   "id": "dp-B06",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Thomas of Erfurt’s sense, is <i>Rōmulus rēgnat</i> (“Romulus reigns”) a transitive or an intransitive construction?",
   "options": [
    "Transitive",
    "Intransitive",
    "Neither, because it has no object",
    "Both at once"
   ],
   "answer": 1,
   "explain": "The reigning belongs to Romulus himself, so the two words refer to the same thing, and the construction is intransitive.",
   "level": 1
  },
  {
   "id": "dp-B07",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In “The girl waited by the gate,” on which word does “by the gate” depend?",
   "options": [
    "“girl”",
    "“gate”",
    "“waited”",
    "“The”"
   ],
   "answer": 2,
   "explain": "The phrase tells where she waited, as an adverb would, so it depends on the verb “waited.”",
   "level": 1
  },
  {
   "id": "dp-B08",
   "set": "B",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "Within the phrase <i>ad urbem</i> (“to the city”), which word depends on which?",
   "options": [
    "<i>ad</i> depends on <i>urbem</i>",
    "Neither depends on the other",
    "Both depend only on the verb",
    "<i>urbem</i> depends on <i>ad</i>"
   ],
   "answer": 3,
   "explain": "Within a phrase the noun depends on the preposition, which governs its case: <i>urbem</i> is accusative because <i>ad</i> requires it.",
   "level": 1
  },
  {
   "id": "dp-C01",
   "set": "C",
   "deck": "v.dependence",
   "type": "sort",
   "prompt": "Sort each pair by the kind of dependence it shows, following Thomas of Erfurt.",
   "entries": [
    "“a wooden bench”",
    "“arrived late”",
    "“the clock strikes”",
    "“mend the net”",
    "<i>mare altum</i> (“the deep sea”)",
    "<i>bene dormit</i> (“he sleeps well”)"
   ],
   "bins": [
    "Adjective on noun",
    "Adverb on verb",
    "Verb on subject",
    "Verb on object"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    0,
    1
   ],
   "explain": "Thomas of Erfurt gives four principal dependences: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it is transitive, on its object.",
   "level": 1
  },
  {
   "id": "dp-C02",
   "set": "C",
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "<i>Agricola dīligēns agrum colit</i> (“the careful farmer tills the field”). Click the word on which <i>dīligēns</i> depends.",
   "tokens": [
    "<i>Agricola</i>",
    "<i>dīligēns</i>",
    "<i>agrum</i>",
    "<i>colit</i>"
   ],
   "answer": 0,
   "explain": "<i>Dīligēns</i> is an adjective; it agrees with <i>agricola</i> and depends on it.",
   "level": 2
  },
  {
   "id": "dp-C03",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "How many constructions does Latin <i>servus fīdus dominō pāret</i> (“the faithful slave obeys his master”) contain?",
   "options": [
    "Two",
    "Four",
    "One",
    "Three"
   ],
   "answer": 3,
   "explain": "<i>Fīdus</i> depends on <i>servus</i>, <i>pāret</i> depends on <i>servus</i>, and <i>pāret</i> depends on <i>dominō</i>, which it governs in the dative: three constructions.",
   "level": 1
  },
  {
   "id": "dp-C04",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "On which dependence do Tesnière and Thomas of Erfurt disagree?",
   "options": [
    "The verb and its subject",
    "The adjective and its noun",
    "The adverb and its verb",
    "The preposition and its noun"
   ],
   "answer": 0,
   "explain": "Both make the adjective depend on its noun and the adverb on its verb. Thomas makes the verb depend on its subject; Tesnière makes the subject depend on the verb, the head of the sentence.",
   "level": 1
  },
  {
   "id": "dp-C05",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "What did Tesnière call the tree in which he drew the dependences of a sentence?",
   "options": [
    "A valency",
    "A <i>stemma</i>",
    "A terminant",
    "A period"
   ],
   "answer": 1,
   "explain": "Tesnière drew each sentence as a tree, a <i>stemma</i>, with the governing word above and its dependents below. Valency is the number of words a verb requires.",
   "level": 1
  },
  {
   "id": "dp-C06",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Thomas of Erfurt’s sense, what kind of construction is “the roof of the barn”?",
   "options": [
    "Intransitive",
    "Neither, because it has no verb",
    "Transitive",
    "Both at once"
   ],
   "answer": 2,
   "explain": "The construction reaches from one thing, the roof, to another, the barn, as a noun with a genitive does, so it is transitive in Thomas’s sense.",
   "level": 1
  },
  {
   "id": "dp-C07",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In Latin <i>tēctum aedificat</i> (“he builds a roof”), how is the dependence of <i>aedificat</i> on <i>tēctum</i> shown?",
   "options": [
    "By agreement",
    "By neither",
    "By the order of the words",
    "By government"
   ],
   "answer": 3,
   "explain": "<i>Aedificat</i> has no case but requires <i>tēctum</i> in the accusative, so the dependence is shown by government.",
   "level": 1
  },
  {
   "id": "dp-C08",
   "set": "C",
   "deck": "v.dependence",
   "type": "mc",
   "prompt": "In “The children sang loudly,” which word terminates the dependence of “loudly”?",
   "options": [
    "“sang”",
    "“children”",
    "“The”",
    "No word"
   ],
   "answer": 0,
   "explain": "The terminant is the word that supplies what the dependent word requires. “Loudly” signifies a manner of acting and requires an action, which “sang” supplies.",
   "level": 1
  },
  {
   "id": "dp-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Proverbs 15:1, King James Version.) Click the word on which “soft” depends.",
   "explain": "An adjective depends on the noun it describes: “soft” tells what kind of “answer.”",
   "tokens": [
    "A",
    "soft",
    "answer",
    "turneth",
    "away",
    "wrath:"
   ],
   "answer": 2,
   "source": "Proverbs 15:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Psalm 1:3, King James Version.) Click the word on which “planted” depends.",
   "explain": "“Planted” is a participle describing “tree,” so it depends on that noun.",
   "tokens": [
    "And",
    "he",
    "shall",
    "be",
    "like",
    "a",
    "tree",
    "planted",
    "by",
    "the",
    "rivers",
    "of",
    "water,"
   ],
   "answer": 6,
   "source": "Psalm 1:3, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Genesis 1:2, King James Version.) Click the word on which “of God” depends.",
   "explain": "“Of God” is an adjective phrase limiting “Spirit.”",
   "tokens": [
    "And",
    "the",
    "Spirit",
    "of",
    "God",
    "moved",
    "upon",
    "the",
    "face",
    "of",
    "the",
    "waters."
   ],
   "answer": 2,
   "source": "Genesis 1:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Genesis 2:7, King James Version.) Click the word on which “living” depends.",
   "explain": "“Living” describes “soul,” so it depends on it.",
   "tokens": [
    "and",
    "man",
    "became",
    "a",
    "living",
    "soul."
   ],
   "answer": 5,
   "source": "Genesis 2:7, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.2.) Click the word on which <i>haec</i> depends.",
   "explain": "<i>Haec</i> is the object of <i>intellegit</i>; an object depends on its verb.",
   "tokens": [
    "Senatus",
    "haec",
    "intellegit."
   ],
   "answer": 2,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "dp-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.11.) Click the word on which <i>caelestibus</i> depends.",
   "explain": "<i>Caelestibus</i> is an adjective describing <i>animis</i>, so it depends on that noun.",
   "tokens": [
    "Tantaene",
    "animis",
    "caelestibus",
    "irae?"
   ],
   "answer": 1,
   "source": "Vergil, Aeneid, Book I, line 11; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "dp-L2-07",
   "set": "A",
   "level": 2,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Matthew 5:14, King James Version.) Click the part that depends on “city.”",
   "answer": 1,
   "explain": "“That is set on an hill” is an adjective clause; it tells which city, so it depends on “city.”",
   "tokens": [
    "A city",
    "that is set on an hill",
    "cannot be hid."
   ],
   "source": "Matthew 5:14, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L3-01",
   "set": "A",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Milton, <i>Paradise Lost</i> I.1 to 6.) The opening phrase “Of Man’s first disobedience” depends on a word that comes five lines later. Click it.",
   "explain": "“Sing of Man’s first disobedience”: the phrase depends on the verb “Sing,” which Milton holds back to the sixth line.",
   "tokens": [
    "Of",
    "Man’s",
    "first",
    "disobedience,",
    "and",
    "the",
    "fruit",
    "Of",
    "that",
    "forbidden",
    "tree",
    "whose",
    "mortal",
    "taste",
    "Brought",
    "death",
    "into",
    "the",
    "World,",
    "and",
    "all",
    "our",
    "woe,",
    "With",
    "loss",
    "of",
    "Eden,",
    "till",
    "one",
    "greater",
    "Man",
    "Restore",
    "us,",
    "and",
    "regain",
    "the",
    "blissful",
    "seat,",
    "Sing,",
    "Heavenly",
    "Muse,"
   ],
   "answer": 38,
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "dp-L3-02",
   "set": "B",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Milton, <i>Paradise Lost</i> I.1 to 6.) Click the word on which the clause “whose mortal taste brought death” depends.",
   "explain": "It is an adjective clause telling which tree, so it depends on “tree.”",
   "tokens": [
    "Of",
    "Man’s",
    "first",
    "disobedience,",
    "and",
    "the",
    "fruit",
    "Of",
    "that",
    "forbidden",
    "tree",
    "whose",
    "mortal",
    "taste",
    "Brought",
    "death",
    "into",
    "the",
    "World,",
    "and",
    "all",
    "our",
    "woe,",
    "With",
    "loss",
    "of",
    "Eden,",
    "till",
    "one",
    "greater",
    "Man",
    "Restore",
    "us,",
    "and",
    "regain",
    "the",
    "blissful",
    "seat,",
    "Sing,",
    "Heavenly",
    "Muse,"
   ],
   "answer": 10,
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "dp-L3-03",
   "set": "A",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Luke 2:8, King James Version.) Click the word on which “keeping” depends.",
   "explain": "“Keeping watch” is a participle phrase describing the shepherds, like “abiding in the field.”",
   "tokens": [
    "And",
    "there",
    "were",
    "in",
    "the",
    "same",
    "country",
    "shepherds",
    "abiding",
    "in",
    "the",
    "field,",
    "keeping",
    "watch",
    "over",
    "their",
    "flock",
    "by",
    "night."
   ],
   "answer": 7,
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L3-04",
   "set": "B",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Luke 2:7, King James Version.) Click the verb on which the clause “because there was no room” depends.",
   "explain": "The clause gives the reason for laying him in a manger, so it depends on “laid,” the nearest verb it explains.",
   "tokens": [
    "And",
    "she",
    "brought",
    "forth",
    "her",
    "firstborn",
    "son,",
    "and",
    "wrapped",
    "him",
    "in",
    "swaddling",
    "clothes,",
    "and",
    "laid",
    "him",
    "in",
    "a",
    "manger;",
    "because",
    "there",
    "was",
    "no",
    "room",
    "for",
    "them",
    "in",
    "the",
    "inn."
   ],
   "answer": 14,
   "source": "Luke 2:7, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L3-05",
   "set": "A",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Psalm 1:1, King James Version.) Click the word on which “of the scornful” depends.",
   "explain": "“Of the scornful” tells whose seat, so it depends on “seat.”",
   "tokens": [
    "Blessed",
    "is",
    "the",
    "man",
    "that",
    "walketh",
    "not",
    "in",
    "the",
    "counsel",
    "of",
    "the",
    "ungodly,",
    "nor",
    "standeth",
    "in",
    "the",
    "way",
    "of",
    "sinners,",
    "nor",
    "sitteth",
    "in",
    "the",
    "seat",
    "of",
    "the",
    "scornful."
   ],
   "answer": 24,
   "source": "Psalm 1:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L3-06",
   "set": "B",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Jane Austen, <i>Pride and Prejudice</i>, chapter 1.) Click the word on which “in possession of a good fortune” depends.",
   "explain": "The phrase tells what kind of man, so it depends on “man.”",
   "tokens": [
    "It",
    "is",
    "a",
    "truth",
    "universally",
    "acknowledged,",
    "that",
    "a",
    "single",
    "man",
    "in",
    "possession",
    "of",
    "a",
    "good",
    "fortune",
    "must",
    "be",
    "in",
    "want",
    "of",
    "a",
    "wife."
   ],
   "answer": 9,
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "dp-L3-07",
   "set": "A",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Matthew 7:24, King James Version.) Click the word on which “which built his house upon a rock” depends.",
   "explain": "The relative clause tells which man, so it depends on its antecedent “man.”",
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
   "answer": 17,
   "source": "Matthew 7:24, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "dp-L3-08",
   "set": "B",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click the word on which <i>ea</i> depends.",
   "explain": "<i>Ea</i> is the object of <i>important</i>; the clause <i>quae ad effeminandos animos pertinent</i> stands between them.",
   "tokens": [
    "minimeque",
    "ad",
    "eos",
    "mercatores",
    "saepe",
    "commeant",
    "atque",
    "ea",
    "quae",
    "ad",
    "effeminandos",
    "animos",
    "pertinent",
    "important,"
   ],
   "answer": 13,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "dp-L3-09",
   "set": "A",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1.) Click the word on which the infinitive <i>patere</i> depends.",
   "explain": "<i>Tua consilia patere</i> is an indirect statement, the object of <i>sentis</i>: “you do not perceive that your plans are exposed.”",
   "tokens": [
    "Patere",
    "tua",
    "consilia",
    "non",
    "sentis,"
   ],
   "answer": 4,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "dp-L3-10",
   "set": "B",
   "level": 3,
   "deck": "v.dependence",
   "type": "identify",
   "prompt": "(John Bunyan, <i>The Pilgrim’s Progress</i>, opening.) Click the word on which the clause “where was a Den” depends.",
   "explain": "“Where was a Den” tells which place, so it is an adjective clause depending on “place.”",
   "tokens": [
    "As",
    "I",
    "walked",
    "through",
    "the",
    "wilderness",
    "of",
    "this",
    "world,",
    "I",
    "lighted",
    "on",
    "a",
    "certain",
    "place",
    "where",
    "was",
    "a",
    "Den,"
   ],
   "answer": 14,
   "source": "John Bunyan, The Pilgrim’s Progress, opening of the First Part; text checked against Project Gutenberg eBook #131 (The Pilgrim’s Progress)"
  }
 ]
};
