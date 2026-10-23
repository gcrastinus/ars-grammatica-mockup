/* Workshop and Marking [ix.ex.marking]  Exercise set opened from the Exercise button of ix.marking. Written; 56 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: short sentences of six words or fewer. Level II: sentences with modifiers and phrases. Level III: sentences with two clauses or a relative clause, the new ones from the King James Bible.
   Level I (14), Level II (30), Level III (12). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['ix.ex.marking'] = {
 "id": "ix.ex.marking",
 "kind": "exercise",
 "status": "written",
 "section": "IX",
 "title": "Workshop and Marking",
 "openedFrom": "ix.marking (Exercise button)",
 "covers": [
  {
   "deck": "ix.marking",
   "cards": [
    "every-dependence",
    "stored-analysis",
    "conjunctions",
    "relatives"
   ]
  }
 ],
 "skill": "Mark every dependence in a sentence whose analysis is stored; the drill compares the marks with the stored analysis.",
 "types": [
  "mark"
 ],
 "pool": 56,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 20,
  "B": 20,
  "C": 16
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Mark the dependences in a short sentence.",
   "2": "Mark the dependences in a sentence with modifiers and phrases.",
   "3": "Mark the dependences in a sentence of two or more clauses."
  },
  "counts": {
   "1": 14,
   "2": 30,
   "3": 12
  }
 },
 "limit": "The dependences of V.4 (Thomas of Erfurt), with the rules of IX.3 for conjunctions, possessive adjectives, appositives, infinitives, and relatives, and the stored analyses only; composed sentences of one clause, or of two clauses joined by a conjunction or a relative. No genitive and no other subordinate clauses.",
 "instr": "Click the word that depends, then the word on which it depends; each pair of clicks draws one arrow. The article and the adjective depend on their noun, the adverb on its verb, the verb on its subject and its object, the preposition on the word to which it relates its phrase, and the noun of the phrase on the preposition. A conjunction depends on both words it joins (on the verb of each clause, when it joins clauses), and a verb with two joined subjects or objects depends on each. A possessive adjective depends on its noun, an appositive on the noun it explains, and an infinitive that completes a verb is marked as its object, with “to” depending on the infinitive. A relative depends on its antecedent and is marked within its own clause like any noun. Press Check when every dependence is marked.",
 "items": [
  {
   "id": "mrk-A01",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The hungry wolves followed the deer through the snow.”",
   "tokens": [
    "The",
    "hungry",
    "wolves",
    "followed",
    "the",
    "deer",
    "through",
    "the",
    "snow."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     3
    ],
    [
     7,
     8
    ],
    [
     8,
     6
    ]
   ],
   "explain": "The main verb is “followed”; it depends on its subject “wolves” and on its object “deer.” The words “The” and “hungry” depend on “wolves.” The word “the” depends on “deer.” The word “through” depends on “followed.” The word “the” depends on “snow.” The noun “snow” depends on the preposition “through.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-A02",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “An old fisherman mended the heavy nets.”",
   "tokens": [
    "An",
    "old",
    "fisherman",
    "mended",
    "the",
    "heavy",
    "nets."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     6
    ],
    [
     4,
     6
    ],
    [
     5,
     6
    ]
   ],
   "explain": "The main verb is “mended”; it depends on its subject “fisherman” and on its object “nets.” The words “An” and “old” depend on “fisherman.” The words “the” and “heavy” depend on “nets.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-A03",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Bright stars shone above the quiet village.”",
   "tokens": [
    "Bright",
    "stars",
    "shone",
    "above",
    "the",
    "quiet",
    "village."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     4,
     6
    ],
    [
     5,
     6
    ],
    [
     6,
     3
    ]
   ],
   "explain": "The main verb is “shone”; it depends on its subject “stars.” The word “Bright” depends on “stars.” The word “above” depends on “shone.” The words “the” and “quiet” depend on “village.” The noun “village” depends on the preposition “above.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-A04",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The girl with the red kite ran across the field.”",
   "tokens": [
    "The",
    "girl",
    "with",
    "the",
    "red",
    "kite",
    "ran",
    "across",
    "the",
    "field."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     5,
     2
    ],
    [
     6,
     1
    ],
    [
     7,
     6
    ],
    [
     8,
     9
    ],
    [
     9,
     7
    ]
   ],
   "explain": "The main verb is “ran”; it depends on its subject “girl.” The words “The” and “with” depend on “girl.” The words “the” and “red” depend on “kite.” The noun “kite” depends on the preposition “with.” The word “across” depends on “ran.” The word “the” depends on “field.” The noun “field” depends on the preposition “across.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-A05",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The merchants sold fine cloth in the market.”",
   "tokens": [
    "The",
    "merchants",
    "sold",
    "fine",
    "cloth",
    "in",
    "the",
    "market."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     4
    ],
    [
     5,
     2
    ],
    [
     6,
     7
    ],
    [
     7,
     5
    ]
   ],
   "explain": "The main verb is “sold”; it depends on its subject “merchants” and on its object “cloth.” The word “The” depends on “merchants.” The word “fine” depends on “cloth.” The word “in” depends on “sold.” The word “the” depends on “market.” The noun “market” depends on the preposition “in.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-A06",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “A cold rain fell steadily on the roofs.”",
   "tokens": [
    "A",
    "cold",
    "rain",
    "fell",
    "steadily",
    "on",
    "the",
    "roofs."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     4,
     3
    ],
    [
     5,
     3
    ],
    [
     6,
     7
    ],
    [
     7,
     5
    ]
   ],
   "explain": "The main verb is “fell”; it depends on its subject “rain.” The words “A” and “cold” depend on “rain.” The words “steadily” and “on” depend on “fell.” The word “the” depends on “roofs.” The noun “roofs” depends on the preposition “on.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-A07",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The scholar read the ancient manuscript slowly.”",
   "tokens": [
    "The",
    "scholar",
    "read",
    "the",
    "ancient",
    "manuscript",
    "slowly."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ]
   ],
   "explain": "The main verb is “read”; it depends on its subject “scholar” and on its object “manuscript.” The word “The” depends on “scholar.” The words “the” and “ancient” depend on “manuscript.” The word “slowly” depends on “read.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-A08",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The mayor of the town opened the new bridge.”",
   "tokens": [
    "The",
    "mayor",
    "of",
    "the",
    "town",
    "opened",
    "the",
    "new",
    "bridge."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     4
    ],
    [
     4,
     2
    ],
    [
     5,
     1
    ],
    [
     5,
     8
    ],
    [
     6,
     8
    ],
    [
     7,
     8
    ]
   ],
   "explain": "The main verb is “opened”; it depends on its subject “mayor” and on its object “bridge.” The words “The” and “of” depend on “mayor.” The word “the” depends on “town.” The noun “town” depends on the preposition “of.” The words “the” and “new” depend on “bridge.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-A09",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Large waves struck the rocky shore violently.”",
   "tokens": [
    "Large",
    "waves",
    "struck",
    "the",
    "rocky",
    "shore",
    "violently."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ]
   ],
   "explain": "The main verb is “struck”; it depends on its subject “waves” and on its object “shore.” The word “Large” depends on “waves.” The words “the” and “rocky” depend on “shore.” The word “violently” depends on “struck.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-A10",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Agricola bovēs in agrum agit.</i> (“The farmer drives the oxen into the field.”)",
   "tokens": [
    "<i>Agricola</i>",
    "<i>bovēs</i>",
    "<i>in</i>",
    "<i>agrum</i>",
    "<i>agit.</i>"
   ],
   "analysis": [
    [
     4,
     0
    ],
    [
     4,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>agit</i>; it depends on its subject <i>Agricola</i> and on its object <i>bovēs</i>. The word <i>in</i> depends on <i>agit</i>. The noun <i>agrum</i> depends on the preposition <i>in</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-A11",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Puellae parvae in viā lūdunt.</i> (“The little girls play in the street.”)",
   "tokens": [
    "<i>Puellae</i>",
    "<i>parvae</i>",
    "<i>in</i>",
    "<i>viā</i>",
    "<i>lūdunt.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>lūdunt</i>; it depends on its subject <i>Puellae</i>. The word <i>parvae</i> depends on <i>Puellae</i>. The word <i>in</i> depends on <i>lūdunt</i>. The noun <i>viā</i> depends on the preposition <i>in</i>.",
   "card": "every-dependence",
   "level": 1
  },
  {
   "id": "mrk-A12",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Rēx sapiēns lēgēs bonās dat.</i> (“The wise king gives good laws.”)",
   "tokens": [
    "<i>Rēx</i>",
    "<i>sapiēns</i>",
    "<i>lēgēs</i>",
    "<i>bonās</i>",
    "<i>dat.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     4,
     2
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>dat</i>; it depends on its subject <i>Rēx</i> and on its object <i>lēgēs</i>. The word <i>sapiēns</i> depends on <i>Rēx</i>. The word <i>bonās</i> depends on <i>lēgēs</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-A13",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Anna and Ben carried the boxes.”",
   "tokens": [
    "Anna",
    "and",
    "Ben",
    "carried",
    "the",
    "boxes."
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     1,
     2
    ],
    [
     3,
     0
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ]
   ],
   "explain": "The conjunction “and” joins two words, so it depends on both, “Anna” and “Ben.” The carrying belongs to each of them, so “carried” depends on “Anna” and on “Ben,” and also on its object “boxes.” The word “the” depends on “boxes.”",
   "card": "conjunctions",
   "level": 1
  },
  {
   "id": "mrk-A14",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “My uncle, a sailor, mended the old boat.”",
   "tokens": [
    "My",
    "uncle,",
    "a",
    "sailor,",
    "mended",
    "the",
    "old",
    "boat."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     3
    ],
    [
     3,
     1
    ],
    [
     4,
     1
    ],
    [
     4,
     7
    ],
    [
     5,
     7
    ],
    [
     6,
     7
    ]
   ],
   "explain": "The possessive adjective “My” depends on “uncle.” “Sailor” is in apposition to “uncle,” so it depends on “uncle,” and “a” depends on “sailor.” The verb “mended” depends on its subject “uncle” and on its object “boat,” and “the” and “old” depend on “boat.”",
   "card": "conjunctions",
   "level": 2
  },
  {
   "id": "mrk-A15",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The dog that guards the farm barks loudly.”",
   "tokens": [
    "The",
    "dog",
    "that",
    "guards",
    "the",
    "farm",
    "barks",
    "loudly."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     1
    ],
    [
     7,
     6
    ]
   ],
   "explain": "The relative “that” depends on its antecedent “dog.” Within its clause, “guards” depends on “that” as on its subject and on its object “farm,” and the second “the” depends on “farm.” The main verb “barks” depends on “dog,” the first “The” depends on “dog,” and “loudly” depends on “barks.”",
   "card": "relatives",
   "level": 3
  },
  {
   "id": "mrk-A16",
   "set": "A",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Gāius et Tullia rosās carpunt.</i> (“Gaius and Tullia pick roses.”)",
   "tokens": [
    "<i>Gāius</i>",
    "<i>et</i>",
    "<i>Tullia</i>",
    "<i>rosās</i>",
    "<i>carpunt.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     1,
     2
    ],
    [
     4,
     0
    ],
    [
     4,
     2
    ],
    [
     4,
     3
    ]
   ],
   "explain": "The conjunction <i>et</i> depends on both words it joins, <i>Gāius</i> and <i>Tullia</i>. The picking belongs to each of them, so <i>carpunt</i> depends on <i>Gāius</i> and on <i>Tullia</i>, and also on its object <i>rosās</i>.",
   "card": "conjunctions",
   "level": 1
  },
  {
   "id": "mrk-B01",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The proud peacock walked slowly across the lawn.”",
   "tokens": [
    "The",
    "proud",
    "peacock",
    "walked",
    "slowly",
    "across",
    "the",
    "lawn."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     4,
     3
    ],
    [
     5,
     3
    ],
    [
     6,
     7
    ],
    [
     7,
     5
    ]
   ],
   "explain": "The main verb is “walked”; it depends on its subject “peacock.” The words “The” and “proud” depend on “peacock.” The words “slowly” and “across” depend on “walked.” The word “the” depends on “lawn.” The noun “lawn” depends on the preposition “across.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-B02",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Busy bees filled the hive with honey.”",
   "tokens": [
    "Busy",
    "bees",
    "filled",
    "the",
    "hive",
    "with",
    "honey."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     4
    ],
    [
     5,
     2
    ],
    [
     6,
     5
    ]
   ],
   "explain": "The main verb is “filled”; it depends on its subject “bees” and on its object “hive.” The word “Busy” depends on “bees.” The word “the” depends on “hive.” The word “with” depends on “filled.” The noun “honey” depends on the preposition “with.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-B03",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The woman in the green cloak found the key.”",
   "tokens": [
    "The",
    "woman",
    "in",
    "the",
    "green",
    "cloak",
    "found",
    "the",
    "key."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     5,
     2
    ],
    [
     6,
     1
    ],
    [
     6,
     8
    ],
    [
     7,
     8
    ]
   ],
   "explain": "The main verb is “found”; it depends on its subject “woman” and on its object “key.” The words “The” and “in” depend on “woman.” The words “the” and “green” depend on “cloak.” The noun “cloak” depends on the preposition “in.” The word “the” depends on “key.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-B04",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The weary travelers reached the city at dusk.”",
   "tokens": [
    "The",
    "weary",
    "travelers",
    "reached",
    "the",
    "city",
    "at",
    "dusk."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     3
    ],
    [
     7,
     6
    ]
   ],
   "explain": "The main verb is “reached”; it depends on its subject “travelers” and on its object “city.” The words “The” and “weary” depend on “travelers.” The word “the” depends on “city.” The word “at” depends on “reached.” The noun “dusk” depends on the preposition “at.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-B05",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “A sudden gust blew the papers off the desk.”",
   "tokens": [
    "A",
    "sudden",
    "gust",
    "blew",
    "the",
    "papers",
    "off",
    "the",
    "desk."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     3
    ],
    [
     7,
     8
    ],
    [
     8,
     6
    ]
   ],
   "explain": "The main verb is “blew”; it depends on its subject “gust” and on its object “papers.” The words “A” and “sudden” depend on “gust.” The word “the” depends on “papers.” The word “off” depends on “blew.” The word “the” depends on “desk.” The noun “desk” depends on the preposition “off.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-B06",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The cook stirred the thick soup gently.”",
   "tokens": [
    "The",
    "cook",
    "stirred",
    "the",
    "thick",
    "soup",
    "gently."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ]
   ],
   "explain": "The main verb is “stirred”; it depends on its subject “cook” and on its object “soup.” The word “The” depends on “cook.” The words “the” and “thick” depend on “soup.” The word “gently” depends on “stirred.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-B07",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The keeper of the tower lit the great lamp.”",
   "tokens": [
    "The",
    "keeper",
    "of",
    "the",
    "tower",
    "lit",
    "the",
    "great",
    "lamp."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     4
    ],
    [
     4,
     2
    ],
    [
     5,
     1
    ],
    [
     5,
     8
    ],
    [
     6,
     8
    ],
    [
     7,
     8
    ]
   ],
   "explain": "The main verb is “lit”; it depends on its subject “keeper” and on its object “lamp.” The words “The” and “of” depend on “keeper.” The word “the” depends on “tower.” The noun “tower” depends on the preposition “of.” The words “the” and “great” depend on “lamp.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-B08",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Heavy snow covered the narrow road quickly.”",
   "tokens": [
    "Heavy",
    "snow",
    "covered",
    "the",
    "narrow",
    "road",
    "quickly."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ]
   ],
   "explain": "The main verb is “covered”; it depends on its subject “snow” and on its object “road.” The word “Heavy” depends on “snow.” The words “the” and “narrow” depend on “road.” The word “quickly” depends on “covered.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-B09",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The eager crowd cheered the victorious team.”",
   "tokens": [
    "The",
    "eager",
    "crowd",
    "cheered",
    "the",
    "victorious",
    "team."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     6
    ],
    [
     4,
     6
    ],
    [
     5,
     6
    ]
   ],
   "explain": "The main verb is “cheered”; it depends on its subject “crowd” and on its object “team.” The words “The” and “eager” depend on “crowd.” The words “the” and “victorious” depend on “team.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-B10",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Nauta fessus ad īnsulam nāvigat.</i> (“The tired sailor sails to the island.”)",
   "tokens": [
    "<i>Nauta</i>",
    "<i>fessus</i>",
    "<i>ad</i>",
    "<i>īnsulam</i>",
    "<i>nāvigat.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>nāvigat</i>; it depends on its subject <i>Nauta</i>. The word <i>fessus</i> depends on <i>Nauta</i>. The word <i>ad</i> depends on <i>nāvigat</i>. The noun <i>īnsulam</i> depends on the preposition <i>ad</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-B11",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Magister discipulōs dīligentēs laudat.</i> (“The teacher praises the diligent pupils.”)",
   "tokens": [
    "<i>Magister</i>",
    "<i>discipulōs</i>",
    "<i>dīligentēs</i>",
    "<i>laudat.</i>"
   ],
   "analysis": [
    [
     3,
     0
    ],
    [
     3,
     1
    ],
    [
     2,
     1
    ]
   ],
   "explain": "The main verb is <i>laudat</i>; it depends on its subject <i>Magister</i> and on its object <i>discipulōs</i>. The word <i>dīligentēs</i> depends on <i>discipulōs</i>.",
   "card": "every-dependence",
   "level": 1
  },
  {
   "id": "mrk-B12",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Equī celerēs per campum currunt.</i> (“The swift horses run through the plain.”)",
   "tokens": [
    "<i>Equī</i>",
    "<i>celerēs</i>",
    "<i>per</i>",
    "<i>campum</i>",
    "<i>currunt.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>currunt</i>; it depends on its subject <i>Equī</i>. The word <i>celerēs</i> depends on <i>Equī</i>. The word <i>per</i> depends on <i>currunt</i>. The noun <i>campum</i> depends on the preposition <i>per</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-B13",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The children want to swim.”",
   "tokens": [
    "The",
    "children",
    "want",
    "to",
    "swim."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     4
    ]
   ],
   "explain": "The infinitive “to swim” completes the verb, so it is marked as its object: “want” depends on its subject “children” and on “swim.” The word “to” depends on “swim,” as the article depends on its noun, and “The” depends on “children.”",
   "card": "conjunctions",
   "level": 1
  },
  {
   "id": "mrk-B14",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The sun set, and the owls woke.”",
   "tokens": [
    "The",
    "sun",
    "set,",
    "and",
    "the",
    "owls",
    "woke."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     3,
     6
    ],
    [
     4,
     5
    ],
    [
     6,
     5
    ]
   ],
   "explain": "The conjunction “and” joins two clauses, so it depends on the verb of each, “set” and “woke.” Each verb depends on its own subject: “set” on “sun” and “woke” on “owls.” Each “the” depends on its noun.",
   "card": "conjunctions",
   "level": 3
  },
  {
   "id": "mrk-B15",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The cake that she baked vanished quickly.”",
   "tokens": [
    "The",
    "cake",
    "that",
    "she",
    "baked",
    "vanished",
    "quickly."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     4,
     3
    ],
    [
     4,
     2
    ],
    [
     5,
     1
    ],
    [
     6,
     5
    ]
   ],
   "explain": "The relative “that” depends on its antecedent “cake.” Within its clause, “baked” depends on its subject “she” and on “that” as on its object. The main verb “vanished” depends on “cake,” “The” depends on “cake,” and “quickly” depends on “vanished.”",
   "card": "relatives",
   "level": 3
  },
  {
   "id": "mrk-B16",
   "set": "B",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Agricola quem laudāmus arat.</i> (“The farmer whom we praise plows.”)",
   "tokens": [
    "<i>Agricola</i>",
    "<i>quem</i>",
    "<i>laudāmus</i>",
    "<i>arat.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     2,
     1
    ],
    [
     3,
     0
    ]
   ],
   "explain": "The relative <i>quem</i> depends on its antecedent <i>agricola</i>, with which it agrees in gender and number. Within its clause, <i>laudāmus</i> depends on <i>quem</i> as on its object. The main verb <i>arat</i> depends on <i>agricola</i>.",
   "card": "relatives",
   "level": 3
  },
  {
   "id": "mrk-C01",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The old watchman waited quietly by the river.”",
   "tokens": [
    "The",
    "old",
    "watchman",
    "waited",
    "quietly",
    "by",
    "the",
    "river."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     4,
     3
    ],
    [
     5,
     3
    ],
    [
     6,
     7
    ],
    [
     7,
     5
    ]
   ],
   "explain": "The main verb is “waited”; it depends on its subject “watchman.” The words “The” and “old” depend on “watchman.” The words “quietly” and “by” depend on “waited.” The word “the” depends on “river.” The noun “river” depends on the preposition “by.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-C02",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Green ivy covered the old walls of the castle.”",
   "tokens": [
    "Green",
    "ivy",
    "covered",
    "the",
    "old",
    "walls",
    "of",
    "the",
    "castle."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     5
    ],
    [
     7,
     8
    ],
    [
     8,
     6
    ]
   ],
   "explain": "The main verb is “covered”; it depends on its subject “ivy” and on its object “walls.” The word “Green” depends on “ivy.” The words “the,” “old” and “of” depend on “walls.” The word “the” depends on “castle.” The noun “castle” depends on the preposition “of.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-C03",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The ruler of the island welcomed the strangers.”",
   "tokens": [
    "The",
    "ruler",
    "of",
    "the",
    "island",
    "welcomed",
    "the",
    "strangers."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     4
    ],
    [
     4,
     2
    ],
    [
     5,
     1
    ],
    [
     5,
     7
    ],
    [
     6,
     7
    ]
   ],
   "explain": "The main verb is “welcomed”; it depends on its subject “ruler” and on its object “strangers.” The words “The” and “of” depend on “ruler.” The word “the” depends on “island.” The noun “island” depends on the preposition “of.” The word “the” depends on “strangers.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-C04",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Strong horses pulled the heavy cart up the hill.”",
   "tokens": [
    "Strong",
    "horses",
    "pulled",
    "the",
    "heavy",
    "cart",
    "up",
    "the",
    "hill."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ],
    [
     7,
     8
    ],
    [
     8,
     6
    ]
   ],
   "explain": "The main verb is “pulled”; it depends on its subject “horses” and on its object “cart.” The word “Strong” depends on “horses.” The words “the” and “heavy” depend on “cart.” The word “up” depends on “pulled.” The word “the” depends on “hill.” The noun “hill” depends on the preposition “up.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-C05",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “A clever thief stole the jewels from the palace.”",
   "tokens": [
    "A",
    "clever",
    "thief",
    "stole",
    "the",
    "jewels",
    "from",
    "the",
    "palace."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     3
    ],
    [
     7,
     8
    ],
    [
     8,
     6
    ]
   ],
   "explain": "The main verb is “stole”; it depends on its subject “thief” and on its object “jewels.” The words “A” and “clever” depend on “thief.” The word “the” depends on “jewels.” The word “from” depends on “stole.” The word “the” depends on “palace.” The noun “palace” depends on the preposition “from.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-C06",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The soft music calmed the restless audience.”",
   "tokens": [
    "The",
    "soft",
    "music",
    "calmed",
    "the",
    "restless",
    "audience."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     6
    ],
    [
     4,
     6
    ],
    [
     5,
     6
    ]
   ],
   "explain": "The main verb is “calmed”; it depends on its subject “music” and on its object “audience.” The words “The” and “soft” depend on “music.” The words “the” and “restless” depend on “audience.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-C07",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The doctor examined the sick sailor carefully.”",
   "tokens": [
    "The",
    "doctor",
    "examined",
    "the",
    "sick",
    "sailor",
    "carefully."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     5
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     6,
     2
    ]
   ],
   "explain": "The main verb is “examined”; it depends on its subject “doctor” and on its object “sailor.” The word “The” depends on “doctor.” The words “the” and “sick” depend on “sailor.” The word “carefully” depends on “examined.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-C08",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Dark clouds gathered slowly over the valley.”",
   "tokens": [
    "Dark",
    "clouds",
    "gathered",
    "slowly",
    "over",
    "the",
    "valley."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     4,
     2
    ],
    [
     5,
     6
    ],
    [
     6,
     4
    ]
   ],
   "explain": "The main verb is “gathered”; it depends on its subject “clouds.” The word “Dark” depends on “clouds.” The words “slowly” and “over” depend on “gathered.” The word “the” depends on “valley.” The noun “valley” depends on the preposition “over.”",
   "card": "stored-analysis",
   "level": 2
  },
  {
   "id": "mrk-C09",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The painter with the gray beard sold a picture.”",
   "tokens": [
    "The",
    "painter",
    "with",
    "the",
    "gray",
    "beard",
    "sold",
    "a",
    "picture."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     5
    ],
    [
     4,
     5
    ],
    [
     5,
     2
    ],
    [
     6,
     1
    ],
    [
     6,
     8
    ],
    [
     7,
     8
    ]
   ],
   "explain": "The main verb is “sold”; it depends on its subject “painter” and on its object “picture.” The words “The” and “with” depend on “painter.” The words “the” and “gray” depend on “beard.” The noun “beard” depends on the preposition “with.” The word “a” depends on “picture.”",
   "card": "every-dependence",
   "level": 2
  },
  {
   "id": "mrk-C10",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Fēmina aquam ē fonte portat.</i> (“The woman carries water from the spring.”)",
   "tokens": [
    "<i>Fēmina</i>",
    "<i>aquam</i>",
    "<i>ē</i>",
    "<i>fonte</i>",
    "<i>portat.</i>"
   ],
   "analysis": [
    [
     4,
     0
    ],
    [
     4,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>portat</i>; it depends on its subject <i>Fēmina</i> and on its object <i>aquam</i>. The word <i>ē</i> depends on <i>portat</i>. The noun <i>fonte</i> depends on the preposition <i>ē</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-C11",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Puerī laetī fābulās longās audiunt.</i> (“The happy boys listen to long stories.”)",
   "tokens": [
    "<i>Puerī</i>",
    "<i>laetī</i>",
    "<i>fābulās</i>",
    "<i>longās</i>",
    "<i>audiunt.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     4,
     2
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>audiunt</i>; it depends on its subject <i>Puerī</i> and on its object <i>fābulās</i>. The word <i>laetī</i> depends on <i>Puerī</i>. The word <i>longās</i> depends on <i>fābulās</i>.",
   "card": "every-dependence",
   "level": 1
  },
  {
   "id": "mrk-C12",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Mīles fortis cum sociīs pugnat.</i> (“The brave soldier fights with his comrades.”)",
   "tokens": [
    "<i>Mīles</i>",
    "<i>fortis</i>",
    "<i>cum</i>",
    "<i>sociīs</i>",
    "<i>pugnat.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     4,
     0
    ],
    [
     2,
     4
    ],
    [
     3,
     2
    ]
   ],
   "explain": "The main verb is <i>pugnat</i>; it depends on its subject <i>Mīles</i>. The word <i>fortis</i> depends on <i>Mīles</i>. The word <i>cum</i> depends on <i>pugnat</i>. The noun <i>sociīs</i> depends on the preposition <i>cum</i>.",
   "card": "stored-analysis",
   "level": 1
  },
  {
   "id": "mrk-C13",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Her brother hopes to win the race.”",
   "tokens": [
    "Her",
    "brother",
    "hopes",
    "to",
    "win",
    "the",
    "race."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     4
    ],
    [
     4,
     6
    ],
    [
     5,
     6
    ]
   ],
   "explain": "The possessive adjective “Her” depends on “brother.” The verb “hopes” depends on its subject “brother” and on the infinitive “win,” which completes it and is marked as its object; “to” depends on “win.” The infinitive “win” depends on its own object “race,” and “the” depends on “race.”",
   "card": "conjunctions",
   "level": 2
  },
  {
   "id": "mrk-C14",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “Our neighbor, the baker, sells bread and cakes.”",
   "tokens": [
    "Our",
    "neighbor,",
    "the",
    "baker,",
    "sells",
    "bread",
    "and",
    "cakes."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     3,
     1
    ],
    [
     2,
     3
    ],
    [
     4,
     1
    ],
    [
     4,
     5
    ],
    [
     4,
     7
    ],
    [
     6,
     5
    ],
    [
     6,
     7
    ]
   ],
   "explain": "The possessive adjective “Our” depends on “neighbor.” “Baker” is in apposition to “neighbor,” so it depends on “neighbor,” and “the” depends on “baker.” The verb “sells” depends on its subject “neighbor” and on each of its objects, “bread” and “cakes.” The conjunction “and” depends on both words it joins, “bread” and “cakes.”",
   "card": "conjunctions",
   "level": 2
  },
  {
   "id": "mrk-C15",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Lūcius, amīcus noster, librum legit.</i> (“Lucius, our friend, reads a book.”)",
   "tokens": [
    "<i>Lūcius,</i>",
    "<i>amīcus</i>",
    "<i>noster,</i>",
    "<i>librum</i>",
    "<i>legit.</i>"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     2,
     1
    ],
    [
     4,
     0
    ],
    [
     4,
     3
    ]
   ],
   "explain": "The noun <i>amīcus</i> is in apposition to <i>Lūcius</i>, so it depends on <i>Lūcius</i>, and the possessive adjective <i>noster</i> depends on <i>amīcus</i>. The verb <i>legit</i> depends on its subject <i>Lūcius</i> and on its object <i>librum</i>.",
   "card": "conjunctions",
   "level": 1
  },
  {
   "id": "mrk-C16",
   "set": "C",
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. <i>Puerī cantāre volunt.</i> (“The boys wish to sing.”)",
   "tokens": [
    "<i>Puerī</i>",
    "<i>cantāre</i>",
    "<i>volunt.</i>"
   ],
   "analysis": [
    [
     2,
     0
    ],
    [
     2,
     1
    ]
   ],
   "explain": "The infinitive <i>cantāre</i> completes the verb, so it is marked as its object: <i>volunt</i> depends on its subject <i>puerī</i> and on <i>cantāre</i>.",
   "card": "conjunctions",
   "level": 1
  },
  {
   "id": "mrk-L3-01",
   "set": "A",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “A soft answer turneth away wrath: but grievous words stir up anger.” (Proverbs 15:1, King James Version.)",
   "tokens": [
    "A",
    "soft",
    "answer",
    "turneth",
    "away",
    "wrath:",
    "but",
    "grievous",
    "words",
    "stir",
    "up",
    "anger."
   ],
   "analysis": [
    [
     0,
     2
    ],
    [
     1,
     2
    ],
    [
     3,
     2
    ],
    [
     3,
     5
    ],
    [
     4,
     3
    ],
    [
     6,
     3
    ],
    [
     6,
     9
    ],
    [
     7,
     8
    ],
    [
     9,
     8
    ],
    [
     9,
     11
    ],
    [
     10,
     9
    ]
   ],
   "explain": "Each verb depends on its own subject and object: “turneth” on “answer” and “wrath,” “stir” on “words” and “anger.” “Away” and “up” complete their verbs, so they depend on them. The conjunction “but” joins the two clauses, so it depends on both verbs. “A” and “soft” depend on “answer,” and “grievous” on “words.”",
   "card": "conjunctions",
   "source": "Proverbs 15:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-02",
   "set": "B",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “The heavens declare the glory of God; and the firmament sheweth his handywork.” (Psalm 19:1, King James Version.)",
   "tokens": [
    "The",
    "heavens",
    "declare",
    "the",
    "glory",
    "of",
    "God;",
    "and",
    "the",
    "firmament",
    "sheweth",
    "his",
    "handywork."
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     2,
     4
    ],
    [
     3,
     4
    ],
    [
     5,
     4
    ],
    [
     6,
     5
    ],
    [
     7,
     2
    ],
    [
     7,
     10
    ],
    [
     8,
     9
    ],
    [
     10,
     9
    ],
    [
     10,
     12
    ],
    [
     11,
     12
    ]
   ],
   "explain": "“Declare” depends on its subject “heavens” and its object “glory”; “sheweth” on “firmament” and “handywork.” The phrase “of God” depends on “glory,” and “God” on the preposition “of.” The conjunction “and” depends on both verbs it joins. Each “the” and “his” depends on its noun.",
   "card": "conjunctions",
   "source": "Psalm 19:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-03",
   "set": "A",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “One generation passeth away, and another generation cometh:” (Ecclesiastes 1:4, King James Version.)",
   "tokens": [
    "One",
    "generation",
    "passeth",
    "away,",
    "and",
    "another",
    "generation",
    "cometh:"
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     4,
     2
    ],
    [
     4,
     7
    ],
    [
     5,
     6
    ],
    [
     7,
     6
    ]
   ],
   "explain": "Each verb depends on its own subject: “passeth” on the first “generation,” “cometh” on the second. “Away” depends on “passeth.” “One” and “another” depend on their nouns, and “and” depends on both verbs it joins.",
   "card": "conjunctions",
   "source": "Ecclesiastes 1:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-04",
   "set": "B",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “He that loveth not knoweth not God;” (1 John 4:8, King James Version.)",
   "tokens": [
    "He",
    "that",
    "loveth",
    "not",
    "knoweth",
    "not",
    "God;"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     4,
     0
    ],
    [
     4,
     6
    ],
    [
     5,
     4
    ]
   ],
   "explain": "The relative “that” depends on its antecedent “He.” Within its clause, “loveth” depends on “that” as on its subject, and the first “not” depends on “loveth.” The main verb “knoweth” depends on its subject “He” and its object “God,” and the second “not” depends on “knoweth.”",
   "card": "relatives",
   "source": "1 John 4:8, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-05",
   "set": "A",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “the rain descended, and the floods came, and the winds blew,” (Matthew 7:25, King James Version.)",
   "tokens": [
    "the",
    "rain",
    "descended,",
    "and",
    "the",
    "floods",
    "came,",
    "and",
    "the",
    "winds",
    "blew,"
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     3,
     2
    ],
    [
     3,
     6
    ],
    [
     4,
     5
    ],
    [
     6,
     5
    ],
    [
     7,
     6
    ],
    [
     7,
     10
    ],
    [
     8,
     9
    ],
    [
     10,
     9
    ]
   ],
   "explain": "Three clauses, each verb depending on its own subject: “descended” on “rain,” “came” on “floods,” “blew” on “winds.” The first “and” joins the first two clauses and depends on “descended” and “came”; the second joins the last two and depends on “came” and “blew.” Each “the” depends on its noun.",
   "card": "conjunctions",
   "source": "Matthew 7:25, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-06",
   "set": "B",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “the fowls came and devoured them up:” (Matthew 13:4, King James Version.)",
   "tokens": [
    "the",
    "fowls",
    "came",
    "and",
    "devoured",
    "them",
    "up:"
   ],
   "analysis": [
    [
     0,
     1
    ],
    [
     2,
     1
    ],
    [
     4,
     1
    ],
    [
     3,
     2
    ],
    [
     3,
     4
    ],
    [
     4,
     5
    ],
    [
     6,
     4
    ]
   ],
   "explain": "Both verbs belong to the same subject, so “came” and “devoured” each depend on “fowls.” The conjunction “and” depends on both verbs it joins. “Devoured” also depends on its object “them,” and “up” depends on “devoured.” “The” depends on “fowls.”",
   "card": "conjunctions",
   "source": "Matthew 13:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-07",
   "set": "A",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “In the beginning God created the heaven and the earth.” (Genesis 1:1, King James Version.)",
   "tokens": [
    "In",
    "the",
    "beginning",
    "God",
    "created",
    "the",
    "heaven",
    "and",
    "the",
    "earth."
   ],
   "analysis": [
    [
     0,
     4
    ],
    [
     1,
     2
    ],
    [
     2,
     0
    ],
    [
     4,
     3
    ],
    [
     4,
     6
    ],
    [
     4,
     9
    ],
    [
     5,
     6
    ],
    [
     7,
     6
    ],
    [
     7,
     9
    ],
    [
     8,
     9
    ]
   ],
   "explain": "The main verb “created” depends on its subject “God” and on each of its objects, “heaven” and “earth.” The conjunction “and” depends on both words it joins. “In” depends on “created,” and “beginning” on the preposition “in.” Each “the” depends on its noun.",
   "card": "conjunctions",
   "source": "Genesis 1:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "mrk-L3-08",
   "set": "B",
   "level": 3,
   "deck": "ix.marking",
   "type": "mark",
   "prompt": "Mark every dependence. The arrow runs from the word that depends to the word on which it depends. “I saw a man clothed with rags” (John Bunyan, <i>The Pilgrim’s Progress</i>, opening.)",
   "tokens": [
    "I",
    "saw",
    "a",
    "man",
    "clothed",
    "with",
    "rags,"
   ],
   "analysis": [
    [
     1,
     0
    ],
    [
     1,
     3
    ],
    [
     2,
     3
    ],
    [
     4,
     3
    ],
    [
     5,
     4
    ],
    [
     6,
     5
    ]
   ],
   "explain": "The verb “saw” depends on its subject “I” and its object “man.” The participle “clothed” depends on “man,” which it describes, and “with” depends on “clothed.” The noun “rags” depends on the preposition “with.” “A” depends on “man.”",
   "card": "stored-analysis",
   "source": "John Bunyan, The Pilgrim’s Progress, opening of the First Part; text checked against Project Gutenberg eBook #131 (The Pilgrim’s Progress)"
  }
 ]
};
