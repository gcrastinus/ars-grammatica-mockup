/* The Clause [v.ex.clause]  Exercise set opened from the Exercise button of v.clause. Written; 32 items in 2 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize clauses and their uses (choose or sort). Level II: find and name clauses in real sentences from the King James Bible and Austen, and combine or rewrite clauses.
   Level I (18), Level II (14). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level I, mastery at Level II (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.clause'] = {
 "id": "v.ex.clause",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "The Clause",
 "openedFrom": "v.clause (Exercise button)",
 "covers": [
  {
   "deck": "v.clause",
   "cards": [
    "what-clause",
    "subject-predicate",
    "patterns",
    "noun-clauses",
    "adjective-clauses",
    "adverb-clauses",
    "latin-mood",
    "kinds-of-sentence",
    "diagram",
    "johnson"
   ]
  }
 ],
 "skill": "Name a subordinate clause by its use and an adverb clause by what it tells; find the subject, the predicate, and the pattern; classify a sentence as simple, compound, complex, or compound-complex; combine sentences with a relative.",
 "types": [
  "sort",
  "identify",
  "mc",
  "transform"
 ],
 "pool": 32,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C.",
 "sets": {
  "A": 12,
  "B": 12,
  "C": 8
 },
 "levels": {
  "pass": 1,
  "top": 2,
  "names": {
   "1": "Recognize clauses and their uses: choose or sort.",
   "2": "Find and name clauses in real sentences; combine and rewrite."
  },
  "counts": {
   "1": 18,
   "2": 14
  }
 },
 "limit": "Only what v.clause teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "cl-A01",
   "set": "A",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each marked clause by its use in the sentence.",
   "entries": [
    "“that the bridge was safe” in “We knew that the bridge was safe”",
    "“who painted the chapel” in “the artist who painted the chapel”",
    "“before the gates opened” in “The crowd waited before the gates opened”",
    "“what she wanted” in “Nobody knew what she wanted”",
    "“which we planted” in “the hedge which we planted”",
    "“because the roof leaked” in “They moved because the roof leaked”"
   ],
   "bins": [
    "Noun clause",
    "Adjective clause",
    "Adverb clause"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "A subordinate clause is named by its use: a noun clause is a subject or an object; an adjective clause depends on a noun and tells which one; an adverb clause depends on a verb and tells when, where, why, or under what condition.",
   "level": 1
  },
  {
   "id": "cl-A02",
   "set": "A",
   "deck": "v.clause",
   "type": "identify",
   "prompt": "“The hikers rested where the path divided.” Click the subordinate clause.",
   "tokens": [
    "The hikers",
    "rested",
    "where the path divided."
   ],
   "answer": 2,
   "explain": "“Where the path divided” has its own subject and verb but cannot stand alone; it depends on “rested” and tells where.",
   "level": 2
  },
  {
   "id": "cl-A03",
   "set": "A",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "In “The tall pines of the ridge sway gently,” what is the simple subject?",
   "options": [
    "“pines”",
    "“The tall pines of the ridge”",
    "“ridge”",
    "“sway”"
   ],
   "answer": 0,
   "explain": "The simple subject is the noun itself, “pines”; the complete subject is “The tall pines of the ridge,” with the words that depend on it.",
   "level": 1
  },
  {
   "id": "cl-A04",
   "set": "A",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "Which pattern does “The gardener handed the boy a rake” have?",
   "options": [
    "Subject, verb, direct object",
    "Subject, verb, indirect object, direct object",
    "Subject, verb, direct object, objective complement",
    "Subject, linking verb, predicate noun"
   ],
   "answer": 1,
   "explain": "“A rake” is the direct object, what was handed, and “the boy” the indirect object, to whom it was handed.",
   "level": 1
  },
  {
   "id": "cl-A05",
   "set": "A",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each adverb clause by what it tells.",
   "entries": [
    "“while the stew simmered”",
    "“because the gate was locked”",
    "“unless the ferry runs”",
    "“though the soil was poor”",
    "“so that she might rest”",
    "“so loud that the windows shook”"
   ],
   "bins": [
    "Time",
    "Cause",
    "Condition",
    "Concession",
    "Purpose",
    "Result"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    5
   ],
   "explain": "The conjunction usually shows the kind: “while” time, “because” cause, “unless” condition, “though” concession, “so that” purpose, and “so … that” after a word of degree result.",
   "level": 1
  },
  {
   "id": "cl-A06",
   "set": "A",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "What kind of sentence is “The candle guttered, and the room grew dark when the wind rose”?",
   "options": [
    "Compound",
    "Complex",
    "Simple",
    "Compound-complex"
   ],
   "answer": 3,
   "explain": "“The candle guttered” and “the room grew dark” are independent clauses, and “when the wind rose” is a subordinate clause. Two independent clauses with a dependent one make a compound-complex sentence.",
   "level": 1
  },
  {
   "id": "cl-A07",
   "set": "A",
   "deck": "v.clause",
   "type": "transform",
   "prompt": "Combine the two sentences into one, using “who”: “The sailor rescued us. He was brave.”",
   "accept": [
    "The sailor who rescued us was brave."
   ],
   "explain": "The second statement becomes the main clause, and the first becomes an adjective clause depending on “sailor”: “The sailor who rescued us was brave.”",
   "level": 2
  },
  {
   "id": "cl-A08",
   "set": "A",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "How does Latin usually express indirect speech after a verb of saying such as <i>dīcit</i>?",
   "options": [
    "By a clause with a word for “that”",
    "Accusative and infinitive",
    "By the ablative absolute",
    "By the vocative"
   ],
   "answer": 1,
   "explain": "Where English uses a clause with “that,” Latin usually uses the accusative and the infinitive: <i>dīcit urbem tūtam esse</i>, “he says that the city is safe.”",
   "level": 1
  },
  {
   "id": "cl-B01",
   "set": "B",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each marked clause by its use in the sentence.",
   "entries": [
    "“that the ice was thin” in “The guide warned that the ice was thin”",
    "“whom the village honored” in “the doctor whom the village honored”",
    "“after the snow had melted” in “The roads opened after the snow had melted”",
    "“whether the train had left” in “She asked whether the train had left”",
    "“where the battle was fought” in “the field where the battle was fought”",
    "“if the wind holds” in “We sail tomorrow if the wind holds”"
   ],
   "bins": [
    "Noun clause",
    "Adjective clause",
    "Adverb clause"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "A subordinate clause is named by its use: a noun clause is a subject or an object; an adjective clause depends on a noun and tells which one; an adverb clause depends on a verb and tells when, where, why, or under what condition.",
   "level": 1
  },
  {
   "id": "cl-B02",
   "set": "B",
   "deck": "v.clause",
   "type": "identify",
   "prompt": "“The man who repaired the clock refused payment.” Click the subordinate clause.",
   "tokens": [
    "The man",
    "who repaired the clock",
    "refused",
    "payment."
   ],
   "answer": 1,
   "explain": "“Who repaired the clock” tells which man, so it is an adjective clause depending on “man.” The independent clause is “The man … refused payment.”",
   "level": 2
  },
  {
   "id": "cl-B03",
   "set": "B",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "In “A thick fog covered the valley,” what is the complete predicate?",
   "options": [
    "“covered”",
    "“covered the valley”",
    "“A thick fog”",
    "“the valley”"
   ],
   "answer": 1,
   "explain": "The complete predicate is the verb with all the words that depend on it: “covered the valley.” The simple predicate is “covered.”",
   "level": 1
  },
  {
   "id": "cl-B04",
   "set": "B",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "Which pattern does “The music seemed sad” have?",
   "options": [
    "Subject, verb, direct object",
    "Subject and verb",
    "Subject, linking verb, predicate adjective",
    "Subject, linking verb, predicate noun"
   ],
   "answer": 2,
   "explain": "“Seemed” is a linking verb, and “sad” describes the subject, so the pattern is subject, linking verb, and predicate adjective.",
   "level": 1
  },
  {
   "id": "cl-B05",
   "set": "B",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each sentence by its kind.",
   "entries": [
    "“The goat bleated.”",
    "“The goat bleated, and the lamb answered.”",
    "“The goat bleated when the herdsman left.”",
    "“The goat bleated when the herdsman left, and the lamb answered.”",
    "“Bleating loudly at the gate, the old goat of the miller woke the household.”",
    "“Although it was late, the goat bleated.”"
   ],
   "bins": [
    "Simple",
    "Compound",
    "Complex",
    "Compound-complex"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    0,
    2
   ],
   "explain": "A simple sentence has one clause; a compound sentence two or more independent clauses; a complex sentence one independent clause and at least one subordinate clause; a compound-complex sentence at least two independent clauses and at least one subordinate clause. Phrases, however many, do not add a clause.",
   "level": 1
  },
  {
   "id": "cl-B06",
   "set": "B",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "A Latin purpose clause and a result clause both begin with <i>ut</i> and take the subjunctive. What distinguishes them?",
   "options": [
    "Their negative and a word of degree",
    "Only the mood, indicative against subjunctive",
    "The conjunction that begins them",
    "The tense of the main verb"
   ],
   "answer": 0,
   "explain": "A purpose clause is negated by <i>nē</i> and a result clause by <i>ut nōn</i>, and a result clause is usually prepared by a word of degree such as <i>tam</i> in the main clause. Both take the subjunctive.",
   "level": 1
  },
  {
   "id": "cl-B07",
   "set": "B",
   "deck": "v.clause",
   "type": "transform",
   "prompt": "Combine the two sentences into one, using “which”: “The bridge was old. It collapsed in the flood.” Begin “The bridge, which …”.",
   "accept": [
    "The bridge, which was old, collapsed in the flood.",
    "The bridge which was old collapsed in the flood."
   ],
   "explain": "“Which was old” becomes an adjective clause depending on “bridge,” set off by commas because it describes the bridge without telling which bridge.",
   "level": 2
  },
  {
   "id": "cl-B08",
   "set": "B",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "In “Even though the tickets were expensive, they went,” is the subordinate clause a condition or a concession?",
   "options": [
    "A condition",
    "A purpose",
    "A concession",
    "A result"
   ],
   "answer": 2,
   "explain": "The clause grants that the tickets were expensive and holds that they went all the same, so it is a concession. A condition would make the going hold only in some case.",
   "level": 1
  },
  {
   "id": "cl-C01",
   "set": "C",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each marked clause by its use in the sentence.",
   "entries": [
    "“how the fire started” in “No one explained how the fire started”",
    "“that we saw at dawn” in “the comet that we saw at dawn”",
    "“as the sun set” in “The bells rang as the sun set”",
    "“who will win” in “Who will win is uncertain”",
    "“whose roof was thatched” in “a cottage whose roof was thatched”",
    "“wherever she went” in “Crowds followed wherever she went”"
   ],
   "bins": [
    "Noun clause",
    "Adjective clause",
    "Adverb clause"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "A subordinate clause is named by its use: a noun clause is a subject or an object; an adjective clause depends on a noun and tells which one; an adverb clause depends on a verb and tells when, where, why, or under what condition.",
   "level": 1
  },
  {
   "id": "cl-C02",
   "set": "C",
   "deck": "v.clause",
   "type": "identify",
   "prompt": "“Before the visitors came, the cook lit the ovens.” Click the independent clause.",
   "tokens": [
    "Before the visitors came,",
    "the cook lit the ovens."
   ],
   "answer": 1,
   "explain": "“The cook lit the ovens” can stand alone; “before the visitors came” depends on “lit” and tells when.",
   "level": 2
  },
  {
   "id": "cl-C03",
   "set": "C",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "In Latin <i>ingēns tempestās nāvem frēgit</i> (“a huge storm broke the ship”), what is the simple subject?",
   "options": [
    "<i>ingēns tempestās</i>",
    "<i>nāvem</i>",
    "<i>tempestās</i>",
    "<i>frēgit</i>"
   ],
   "answer": 2,
   "explain": "The simple subject is the noun <i>tempestās</i>; the complete subject is <i>ingēns tempestās</i>, and the complete predicate <i>nāvem frēgit</i>.",
   "level": 1
  },
  {
   "id": "cl-C04",
   "set": "C",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "Which pattern does “They named the ship Endeavour” have?",
   "options": [
    "Subject, verb, indirect object, direct object",
    "Subject, linking verb, predicate noun",
    "Subject, verb, direct object",
    "Subject, verb, direct object, objective complement"
   ],
   "answer": 3,
   "explain": "“The ship” is the direct object, and “Endeavour” completes it by naming it; so the pattern is subject, verb, direct object, and objective complement.",
   "level": 1
  },
  {
   "id": "cl-C05",
   "set": "C",
   "deck": "v.clause",
   "type": "sort",
   "prompt": "Sort each sentence by its kind.",
   "entries": [
    "“The vineyard flourished.”",
    "“The vineyard flourished, but the frost came.”",
    "“The vineyard flourished before the frost came.”",
    "“The vineyard flourished before the frost came, but the grapes survived.”",
    "“In the warm spring of that year the old vineyard flourished early.”",
    "“Because the spring was warm, the vineyard flourished early.”"
   ],
   "bins": [
    "Simple",
    "Compound",
    "Complex",
    "Compound-complex"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    0,
    2
   ],
   "explain": "A simple sentence has one clause; a compound sentence two or more independent clauses; a complex sentence one independent clause and at least one subordinate clause; a compound-complex sentence at least two independent clauses and at least one subordinate clause. Phrases, however many, do not add a clause.",
   "level": 1
  },
  {
   "id": "cl-C06",
   "set": "C",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "What is the joining of clauses of equal rank, side by side, called?",
   "options": [
    "Hypotaxis",
    "Parataxis",
    "Apposition",
    "The period"
   ],
   "answer": 1,
   "explain": "Parataxis (Greek, “placing beside”) joins clauses of equal rank; hypotaxis (“placing under”) joins a subordinate clause to a main clause.",
   "level": 1
  },
  {
   "id": "cl-C07",
   "set": "C",
   "deck": "v.clause",
   "type": "transform",
   "prompt": "Rewrite as indirect speech, beginning “She said that”: She said, “The spring is dry.”",
   "accept": [
    "She said that the spring was dry.",
    "She said that the spring is dry."
   ],
   "explain": "Indirect speech reports the words in a noun clause with “that,” and the tense usually moves back after a past verb of saying: “She said that the spring was dry.”",
   "level": 2
  },
  {
   "id": "cl-C08",
   "set": "C",
   "deck": "v.clause",
   "type": "mc",
   "prompt": "In “He was so hungry that he ate the crusts,” what does the clause “that he ate the crusts” tell?",
   "options": [
    "A purpose",
    "A cause",
    "A concession",
    "A result"
   ],
   "answer": 3,
   "explain": "The clause tells what followed from his hunger, prepared by the word of degree “so,” so it is a result clause.",
   "level": 1
  },
  {
   "id": "cl-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.clause",
   "type": "identify",
   "prompt": "(Psalm 121:1, King James Version.) Click the subordinate clause.",
   "answer": 1,
   "explain": "“From whence cometh my help” has its own verb and subject but depends on “hills”; it tells which hills.",
   "tokens": [
    "I will lift up mine eyes unto the hills,",
    "from whence cometh my help."
   ],
   "source": "Psalm 121:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.clause",
   "type": "identify",
   "prompt": "(Matthew 5:14, King James Version.) Click the subordinate clause.",
   "answer": 1,
   "explain": "“That is set on an hill” is an adjective clause depending on “city.”",
   "tokens": [
    "A city",
    "that is set on an hill",
    "cannot be hid."
   ],
   "source": "Matthew 5:14, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.clause",
   "type": "identify",
   "prompt": "(Acts 2:2, King James Version.) Click the subordinate clause.",
   "answer": 2,
   "explain": "“Where they were sitting” depends on “house” and tells which house. The other two parts are independent clauses joined by “and.”",
   "tokens": [
    "And suddenly there came a sound from heaven as of a rushing mighty wind,",
    "and it filled all the house",
    "where they were sitting."
   ],
   "source": "Acts 2:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.clause",
   "type": "identify",
   "prompt": "(Matthew 6:21, King James Version.) Click the independent clause.",
   "answer": 1,
   "explain": "“Where your treasure is” cannot stand alone; “there will your heart be also” can.",
   "tokens": [
    "For where your treasure is,",
    "there will your heart be also."
   ],
   "source": "Matthew 6:21, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.clause",
   "type": "mc",
   "prompt": "“And the wind ceased, and there was a great calm.” (Mark 4:39, King James Version.) What kind of sentence is it?",
   "options": [
    "Simple",
    "Compound",
    "Complex",
    "Compound-complex"
   ],
   "answer": 1,
   "explain": "Two independent clauses joined by “and,” with no subordinate clause: a compound sentence.",
   "source": "Mark 4:39, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.clause",
   "type": "mc",
   "prompt": "“And when he sowed, some seeds fell by the way side, and the fowls came and devoured them up.” (Matthew 13:4, King James Version.) What kind of sentence is it?",
   "options": [
    "Simple",
    "Compound",
    "Complex",
    "Compound-complex"
   ],
   "answer": 3,
   "explain": "Two independent clauses, “some seeds fell” and “the fowls came and devoured,” and one subordinate clause, “when he sowed”: compound-complex.",
   "source": "Matthew 13:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-07",
   "set": "A",
   "level": 2,
   "deck": "v.clause",
   "type": "mc",
   "prompt": "“I will lift up mine eyes unto the hills, from whence cometh my help.” (Psalm 121:1, King James Version.) What kind of sentence is it?",
   "options": [
    "Simple",
    "Compound",
    "Complex",
    "Compound-complex"
   ],
   "answer": 2,
   "explain": "One independent clause and one subordinate clause, “from whence cometh my help”: a complex sentence.",
   "source": "Psalm 121:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "cl-L2-08",
   "set": "B",
   "level": 2,
   "deck": "v.clause",
   "type": "mc",
   "prompt": "“It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.” (Jane Austen, <i>Pride and Prejudice</i>, chapter 1.) How is the clause “that a single man … must be in want of a wife” used?",
   "options": [
    "As a noun clause: it is the real subject, which “It” stands for",
    "As an adjective clause depending on “truth”",
    "As an adverb clause telling why",
    "As an independent clause"
   ],
   "answer": 0,
   "explain": "“It” only holds the place; the “that” clause is what is acknowledged as a truth. A clause used as a subject is a noun clause.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  }
 ]
};
