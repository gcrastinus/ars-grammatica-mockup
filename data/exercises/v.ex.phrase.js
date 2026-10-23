/* The Phrase [v.ex.phrase]  Exercise set opened from the Exercise button of v.phrase. Written; 31 items in 2 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize phrases by form and use (choose or sort). Level II: find and name phrases in real sentences from the King James Bible and Vergil, and rewrite absolute phrases.
   Level I (17), Level II (14). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level I, mastery at Level II (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.phrase'] = {
 "id": "v.ex.phrase",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "The Phrase",
 "openedFrom": "v.phrase (Exercise button)",
 "covers": [
  {
   "deck": "v.phrase",
   "cards": [
    "what-phrase",
    "form-function",
    "prepositional",
    "participial-gerund",
    "infinitive",
    "appositive",
    "absolute",
    "diagram"
   ]
  }
 ],
 "skill": "Name a phrase by its form and by its function; find the word on which it depends; find the ablative absolute; turn a nominative absolute into a clause.",
 "types": [
  "sort",
  "identify",
  "mc",
  "transform"
 ],
 "pool": 31,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C.",
 "sets": {
  "A": 12,
  "B": 11,
  "C": 8
 },
 "levels": {
  "pass": 1,
  "top": 2,
  "names": {
   "1": "Recognize phrases by form and use: choose or sort.",
   "2": "Find and name phrases in real sentences; rewrite absolutes."
  },
  "counts": {
   "1": 17,
   "2": 14
  }
 },
 "limit": "Only what v.phrase teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "ph-A01",
   "set": "A",
   "deck": "v.phrase",
   "type": "sort",
   "prompt": "Sort each marked phrase by its form.",
   "entries": [
    "“beneath the bridge”",
    "“smiling at the crowd” in “Smiling at the crowd, the queen waved”",
    "“baking bread” in “Baking bread fills the house with warmth”",
    "“to climb the tower” in “She hoped to climb the tower”",
    "“a carpenter from Leeds” in “Tom, a carpenter from Leeds, built it”",
    "“after supper”"
   ],
   "bins": [
    "Prepositional",
    "Participial",
    "Gerund",
    "Infinitive",
    "Appositive"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    0
   ],
   "explain": "By form, a phrase is named from what it is built on: a preposition with its object, a participle describing a noun, an <i>-ing</i> form used as a noun, an infinitive with “to,” or a noun set beside another noun to rename it.",
   "level": 1
  },
  {
   "id": "ph-A02",
   "set": "A",
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "“The house with green shutters belongs to my aunt.” Click the phrase that depends on “house.”",
   "tokens": [
    "The house",
    "with green shutters",
    "belongs",
    "to my aunt."
   ],
   "answer": 1,
   "explain": "“With green shutters” tells which house, so it depends on “house” and is used as an adjective. “To my aunt” depends on “belongs.”",
   "level": 2
  },
  {
   "id": "ph-A03",
   "set": "A",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “We rested beneath the oak,” how is “beneath the oak” used?",
   "options": [
    "As an adjective",
    "As an adverb",
    "As a noun",
    "As the subject"
   ],
   "answer": 1,
   "explain": "The phrase depends on “rested” and tells where, so it is a prepositional phrase used as an adverb.",
   "level": 1
  },
  {
   "id": "ph-A04",
   "set": "A",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "What distinguishes a clause from a phrase?",
   "options": [
    "Only a phrase can be used as an adjective",
    "A phrase always begins with a preposition",
    "Only a clause has its own subject and verb",
    "A phrase is always shorter and contains no noun"
   ],
   "answer": 2,
   "explain": "A phrase does the work of one part of speech and has no subject and finite verb of its own; a clause has both. Phrases may be used as nouns, adjectives, or adverbs, and many do not begin with a preposition.",
   "level": 1
  },
  {
   "id": "ph-A05",
   "set": "A",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “Climbing the hill was hard,” what is “climbing the hill”?",
   "options": [
    "A participial phrase",
    "An infinitive phrase",
    "An appositive phrase",
    "A gerund phrase"
   ],
   "answer": 3,
   "explain": "The <i>-ing</i> form names the action and the phrase is the subject of “was,” so it is a gerund phrase. A participial phrase would describe a noun.",
   "level": 1
  },
  {
   "id": "ph-A06",
   "set": "A",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In Latin <i>Cicerō, cōnsul, senātum convocāvit</i> (“Cicero, the consul, summoned the senate”), why is <i>cōnsul</i> nominative?",
   "options": [
    "Because it is in apposition to <i>Cicerō</i>",
    "Because it is the object of <i>convocāvit</i>",
    "Because it is an ablative absolute",
    "Because it governs <i>senātum</i>"
   ],
   "answer": 0,
   "explain": "<i>Cōnsul</i> is in apposition to <i>Cicerō</i>: it refers to the same person and so takes the same case. Apposition is a kind of agreement.",
   "level": 1
  },
  {
   "id": "ph-A07",
   "set": "A",
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "<i>Hieme adventante, agricolae frūmentum condidērunt</i> (“winter approaching, the farmers stored the grain”). Click the words of the ablative absolute.",
   "tokens": [
    "<i>Hieme</i>",
    "<i>adventante,</i>",
    "<i>agricolae</i>",
    "<i>frūmentum</i>",
    "<i>condidērunt</i>"
   ],
   "answer": [
    0,
    1
   ],
   "explain": "<i>Hieme adventante</i> is a noun and a participle in the ablative, loosed from the main clause, and it tells when the farmers stored the grain.",
   "level": 2
  },
  {
   "id": "ph-A08",
   "set": "A",
   "deck": "v.phrase",
   "type": "transform",
   "prompt": "Rewrite the nominative absolute as a clause beginning with “because”: “The road being closed, we turned back.”",
   "accept": [
    "Because the road was closed, we turned back.",
    "Because the road was closed we turned back."
   ],
   "explain": "English usually prefers a clause to the nominative absolute: “Because the road was closed, we turned back.”",
   "level": 2
  },
  {
   "id": "ph-B01",
   "set": "B",
   "deck": "v.phrase",
   "type": "sort",
   "prompt": "Sort each marked phrase by its function.",
   "entries": [
    "“of gold” in “a crown of gold”",
    "“at dawn” in “We left at dawn”",
    "“to sing” in “She loves to sing”",
    "“to read” in “a book to read”",
    "“swimming in the lake” in “Swimming in the lake is pleasant”",
    "“with care” in “He wrote with care”"
   ],
   "bins": [
    "Used as a noun",
    "Used as an adjective",
    "Used as an adverb"
   ],
   "answer": [
    1,
    2,
    0,
    1,
    0,
    2
   ],
   "explain": "By function, a phrase is named from how it is used: as a noun (a subject or object), as an adjective (depending on a noun), or as an adverb (depending on a verb and telling when, where, or how).",
   "level": 1
  },
  {
   "id": "ph-B02",
   "set": "B",
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "“Tired by the long march, the soldiers slept in the barn.” Click the participial phrase.",
   "tokens": [
    "Tired by the long march,",
    "the soldiers",
    "slept",
    "in the barn."
   ],
   "answer": 0,
   "explain": "“Tired by the long march” is built on the participle “tired” and describes “the soldiers,” as an adjective does, so it is a participial phrase. “In the barn” is a prepositional phrase that depends on “slept.”",
   "level": 2
  },
  {
   "id": "ph-B03",
   "set": "B",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “The bridge over the river collapsed,” on which word does “over the river” depend?",
   "options": [
    "“collapsed”",
    "“river”",
    "“bridge”",
    "“The”"
   ],
   "answer": 2,
   "explain": "“Over the river” tells which bridge, so it depends on “bridge” and is used as an adjective.",
   "level": 1
  },
  {
   "id": "ph-B04",
   "set": "B",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “She waited to hear the verdict,” how is “to hear the verdict” used?",
   "options": [
    "As a noun",
    "As an adjective",
    "As an appositive",
    "As an adverb"
   ],
   "answer": 3,
   "explain": "The infinitive phrase depends on “waited” and tells why she waited, so it is used as an adverb.",
   "level": 1
  },
  {
   "id": "ph-B05",
   "set": "B",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “My neighbor, a retired sailor, mends nets,” what is “a retired sailor”?",
   "options": [
    "An appositive phrase",
    "A participial phrase",
    "A prepositional phrase",
    "A clause"
   ],
   "answer": 0,
   "explain": "It is a noun phrase set beside “my neighbor” to identify him, with no verb or conjunction to join it, so it is an appositive phrase.",
   "level": 1
  },
  {
   "id": "ph-B06",
   "set": "B",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In Latin <i>mīlitibus fessīs, dux castra posuit</i> (“the soldiers being tired, the general pitched camp”), what does the ablative absolute tell?",
   "options": [
    "The object of <i>posuit</i>",
    "Its circumstance or cause",
    "The place where the camp was pitched",
    "The subject of the sentence"
   ],
   "answer": 1,
   "explain": "<i>Mīlitibus fessīs</i> stands apart from the main clause and tells the circumstance, or the cause, of the general’s pitching camp: because the soldiers were tired.",
   "level": 1
  },
  {
   "id": "ph-B07",
   "set": "B",
   "deck": "v.phrase",
   "type": "transform",
   "prompt": "Rewrite the nominative absolute as a clause beginning with “when”: “The bell having rung, the pupils left.”",
   "accept": [
    "When the bell had rung, the pupils left.",
    "When the bell had rung the pupils left.",
    "When the bell rang, the pupils left.",
    "When the bell rang the pupils left."
   ],
   "explain": "The nominative absolute tells the time of the main action, so a clause with “when” and the pluperfect gives the same sense.",
   "level": 2
  },
  {
   "id": "ph-B08",
   "set": "B",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “Waving to the crowd tired her arm,” what is “waving to the crowd”?",
   "options": [
    "A participial phrase",
    "An infinitive phrase",
    "A prepositional phrase",
    "A gerund phrase"
   ],
   "answer": 3,
   "explain": "The phrase names the action and is the subject of “tired,” so it is a gerund phrase. In “Waving to the crowd, she smiled” the same words would be a participial phrase describing “she.”",
   "level": 1
  },
  {
   "id": "ph-C01",
   "set": "C",
   "deck": "v.phrase",
   "type": "sort",
   "prompt": "Sort each marked phrase by its form.",
   "entries": [
    "“under the stairs”",
    "“shouting for help” in “Shouting for help, the boy ran”",
    "“painting portraits” in “Painting portraits was his trade”",
    "“to finish early” in “They tried to finish early”",
    "“a city of canals” in “Bruges, a city of canals, is quiet”",
    "“without a word”"
   ],
   "bins": [
    "Prepositional",
    "Participial",
    "Gerund",
    "Infinitive",
    "Appositive"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    0
   ],
   "explain": "By form: “under the stairs” and “without a word” begin with a preposition; “shouting for help” describes the boy; “painting portraits” is an <i>-ing</i> form used as the subject; “to finish early” is built on the infinitive; “a city of canals” renames Bruges.",
   "level": 1
  },
  {
   "id": "ph-C02",
   "set": "C",
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "“The letter from the bishop arrived on Monday.” Click the phrase that depends on the verb.",
   "tokens": [
    "The letter",
    "from the bishop",
    "arrived",
    "on Monday."
   ],
   "answer": 3,
   "explain": "“On Monday” depends on “arrived” and tells when, so it is used as an adverb. “From the bishop” depends on “letter.”",
   "level": 2
  },
  {
   "id": "ph-C03",
   "set": "C",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “The view from the tower was splendid,” how is “from the tower” used?",
   "options": [
    "As an adverb",
    "As a noun",
    "As the subject",
    "As an adjective"
   ],
   "answer": 3,
   "explain": "The phrase tells which view, so it depends on the noun “view” and is used as an adjective.",
   "level": 1
  },
  {
   "id": "ph-C04",
   "set": "C",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "Which of these contains a clause, not only phrases?",
   "options": [
    "“the man who mended the cart”",
    "“the man with the cart”",
    "“the man mending the cart”",
    "“the man near the cart”"
   ],
   "answer": 0,
   "explain": "“Who mended the cart” has a subject, “who,” and a finite verb, “mended,” so it is a clause. The others are built on prepositions or a participle and have no finite verb.",
   "level": 1
  },
  {
   "id": "ph-C05",
   "set": "C",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "In “He was proud to serve,” how is “to serve” used?",
   "options": [
    "As a noun",
    "As an adverb",
    "As an adjective",
    "As the subject"
   ],
   "answer": 1,
   "explain": "The infinitive phrase determines the adjective “proud,” telling in what respect he was proud; a word or phrase that determines an adjective is used as an adverb.",
   "level": 1
  },
  {
   "id": "ph-C06",
   "set": "C",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "Which Latin construction corresponds most closely to the English nominative absolute?",
   "options": [
    "The appositive",
    "The gerund",
    "The ablative absolute",
    "The infinitive phrase"
   ],
   "answer": 2,
   "explain": "Both set a noun and a participle apart from the main construction to tell its circumstances; Latin uses the ablative case, and uses the construction much more often.",
   "level": 1
  },
  {
   "id": "ph-C07",
   "set": "C",
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "<i>Duce interfectō, hostēs fūgērunt</i> (“the leader having been killed, the enemy fled”). Click the words of the ablative absolute.",
   "tokens": [
    "<i>Duce</i>",
    "<i>interfectō,</i>",
    "<i>hostēs</i>",
    "<i>fūgērunt</i>"
   ],
   "answer": [
    0,
    1
   ],
   "explain": "<i>Duce interfectō</i>, a noun and a perfect participle in the ablative, tells what had happened before the enemy fled.",
   "level": 2
  },
  {
   "id": "ph-C08",
   "set": "C",
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "“After the storm” and “near the gate” are both prepositional phrases by form. What decides whether such a phrase is used as an adjective or as an adverb?",
   "options": [
    "The word it depends on",
    "The preposition it begins with",
    "Its length",
    "Whether it stands first"
   ],
   "answer": 0,
   "explain": "A phrase is named by function from the word on which it depends: on a noun it is used as an adjective, on a verb as an adverb.",
   "level": 1
  },
  {
   "id": "ph-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "(Luke 2:8, King James Version.) Click every participial phrase.",
   "answer": [
    1,
    2
   ],
   "explain": "“Abiding in the field” and “keeping watch over their flock by night” are both participial phrases describing “shepherds.”",
   "tokens": [
    "And there were in the same country shepherds",
    "abiding in the field,",
    "keeping watch over their flock by night."
   ],
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ph-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "(Luke 10:30, King James Version.) Click the participial phrase.",
   "answer": 2,
   "explain": "“Leaving him half dead” has a participle and no finite verb. The part with “which” is a clause.",
   "tokens": [
    "A certain man went down from Jerusalem to Jericho, and fell among thieves,",
    "which stripped him of his raiment, and wounded him, and departed,",
    "leaving him half dead."
   ],
   "source": "Luke 10:30, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ph-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "(Psalm 1:3, King James Version.) Click the phrase that depends on “tree” (not the clause).",
   "answer": 1,
   "explain": "“Planted by the rivers of water” is a participial phrase describing the tree. “That bringeth forth his fruit” has a finite verb, so it is a clause.",
   "tokens": [
    "And he shall be like a tree",
    "planted by the rivers of water,",
    "that bringeth forth his fruit in his season;"
   ],
   "source": "Psalm 1:3, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ph-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.phrase",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.8: “Muse, tell me the causes, what divinity having been wounded.”) Click the words of the ablative absolute.",
   "explain": "<i>Quo numine laeso</i> is a noun with a participle in the ablative, standing apart from the main construction: “what divinity being wounded.”",
   "tokens": [
    "Musa,",
    "mihi",
    "causas",
    "memora,",
    "quo",
    "numine",
    "laeso,"
   ],
   "answer": [
    4,
    5,
    6
   ],
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "ph-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "“Consider the lilies of the field, how they grow.” (Matthew 6:28, King James Version.) How is “of the field” used?",
   "options": [
    "As an adjective: it depends on “lilies”",
    "As an adverb: it depends on “Consider”",
    "As a noun: it is the object",
    "As an absolute phrase"
   ],
   "answer": 0,
   "explain": "It tells which lilies, so it is an adjective phrase depending on “lilies.”",
   "source": "Matthew 6:28, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ph-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "“By the rivers of Babylon, there we sat down.” (Psalm 137:1, King James Version.) How is “By the rivers of Babylon” used?",
   "options": [
    "As an adverb: it tells where they sat",
    "As an adjective: it depends on “we”",
    "As a noun: it is the subject",
    "As an absolute phrase"
   ],
   "answer": 0,
   "explain": "The phrase tells where, so it depends on the verb “sat” and is used as an adverb.",
   "source": "Psalm 137:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ph-L2-07",
   "set": "A",
   "level": 2,
   "deck": "v.phrase",
   "type": "mc",
   "prompt": "“Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king” (Matthew 2:1, King James Version). What is “the king”?",
   "options": [
    "An appositive to “Herod”",
    "The object of “of”",
    "An adverb phrase",
    "A participial phrase"
   ],
   "answer": 0,
   "explain": "“The king” stands beside “Herod” and names the same person, so it is in apposition.",
   "source": "Matthew 2:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
