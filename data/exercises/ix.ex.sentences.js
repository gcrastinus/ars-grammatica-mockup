/* Analysis of Sentences [ix.ex.sentences]  Exercise set opened from the Exercise button of ix.sentences. Written 60 items in three fixed sets. */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['ix.ex.sentences'] = {
 "id": "ix.ex.sentences",
 "kind": "exercise",
 "status": "written",
 "section": "IX",
 "title": "Analysis of Sentences",
 "openedFrom": "ix.sentences (Exercise button)",
 "covers": [
  {
   "deck": "ix.sentences",
   "cards": [
    "parsing-construing",
    "order-of-steps",
    "example"
   ]
  }
 ],
 "skill": "Parse every word of a sentence and construe the sentence (which word depends on which, which agree, which govern).",
 "types": [
  "analysis"
 ],
 "pool": 60,
 "rotation": "A, B, C, A, … (never shuffled)",
 "sets": {
  "A": 20,
  "B": 20,
  "C": 20
 },
 "limit": "Everything taught in Sections I–VIII; composed sentences of one clause, so that every dependence falls under the conventions of IX.3.",
 "instr": "Type the part of speech of each word, then its accidents, separated by commas. For an English noun give its number (noun, singular); for a verb its person, number, tense, mood, and voice (verb, third, singular, past, indicative, active); for a Latin noun or adjective its case, number, and gender (noun, accusative, singular, feminine); for an article, an English adjective, an adverb, or a preposition, the part of speech alone. Then draw an arrow from each word that depends to the word on which it depends, as in IX.3: the article and the adjective depend on their noun, the adverb on its verb, the verb on its subject and its object, the preposition on the word to which it relates its phrase, and the noun of the phrase on the preposition.",
 "items": [
  {
   "id": "ans-A01",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Bells rang.”",
   "tokens": [
    "Bells",
    "rang."
   ],
   "analysis": {
    "parse": [
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is “rang,” third person plural, past, indicative, active; it depends on its subject “Bells.”",
   "lang": "en"
  },
  {
   "id": "ans-A02",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The miller slept.”",
   "tokens": [
    "The",
    "miller",
    "slept."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      0,
      1
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is “slept,” third person singular, past, indicative, active; it depends on its subject “miller.” The word “The” depends on “miller.”",
   "lang": "en"
  },
  {
   "id": "ans-A03",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The weary porter slept soundly.”",
   "tokens": [
    "The",
    "weary",
    "porter",
    "slept",
    "soundly."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “slept,” third person singular, past, indicative, active; it depends on its subject “porter.” The words “The” and “weary” depend on “porter.” The word “soundly” depends on “slept.”",
   "lang": "en"
  },
  {
   "id": "ans-A04",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A heron caught a fish.”",
   "tokens": [
    "A",
    "heron",
    "caught",
    "a",
    "fish."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “caught,” third person singular, past, indicative, active; it depends on its subject “heron” and on its object “fish.” The word “A” depends on “heron.” The word “a” depends on “fish.”",
   "lang": "en"
  },
  {
   "id": "ans-A05",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The farmers gathered the ripe wheat.”",
   "tokens": [
    "The",
    "farmers",
    "gathered",
    "the",
    "ripe",
    "wheat."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “gathered,” third person plural, past, indicative, active; it depends on its subject “farmers” and on its object “wheat.” The word “The” depends on “farmers.” The words “the” and “ripe” depend on “wheat.”",
   "lang": "en"
  },
  {
   "id": "ans-A06",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The children played in the meadow.”",
   "tokens": [
    "The",
    "children",
    "played",
    "in",
    "the",
    "meadow."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “played,” third person plural, past, indicative, active; it depends on its subject “children.” The word “The” depends on “children.” The word “in” depends on “played.” The word “the” depends on “meadow.” The noun “meadow” depends on the preposition “in.”",
   "lang": "en"
  },
  {
   "id": "ans-A07",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Anna painted a small boat.”",
   "tokens": [
    "Anna",
    "painted",
    "a",
    "small",
    "boat."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ],
     [
      1,
      4
     ],
     [
      2,
      4
     ],
     [
      3,
      4
     ]
    ]
   },
   "explain": "The main verb is “painted,” third person singular, past, indicative, active; it depends on its subject “Anna” and on its object “boat.” The words “a” and “small” depend on “boat.”",
   "lang": "en"
  },
  {
   "id": "ans-A08",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The wind shook the old shutters.”",
   "tokens": [
    "The",
    "wind",
    "shook",
    "the",
    "old",
    "shutters."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “shook,” third person singular, past, indicative, active; it depends on its subject “wind” and on its object “shutters.” The word “The” depends on “wind.” The words “the” and “old” depend on “shutters.”",
   "lang": "en"
  },
  {
   "id": "ans-A09",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The baker works early.”",
   "tokens": [
    "The",
    "baker",
    "works",
    "early."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “works,” third person singular, present, indicative, active; it depends on its subject “baker.” The word “The” depends on “baker.” The word “early” depends on “works.”",
   "lang": "en"
  },
  {
   "id": "ans-A10",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The geese fly over the hills.”",
   "tokens": [
    "The",
    "geese",
    "fly",
    "over",
    "the",
    "hills."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “fly,” third person plural, present, indicative, active; it depends on its subject “geese.” The word “The” depends on “geese.” The word “over” depends on “fly.” The word “the” depends on “hills.” The noun “hills” depends on the preposition “over.”",
   "lang": "en"
  },
  {
   "id": "ans-A11",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A stranger knocked loudly at the gate.”",
   "tokens": [
    "A",
    "stranger",
    "knocked",
    "loudly",
    "at",
    "the",
    "gate."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “knocked,” third person singular, past, indicative, active; it depends on its subject “stranger.” The word “A” depends on “stranger.” The words “loudly” and “at” depend on “knocked.” The word “the” depends on “gate.” The noun “gate” depends on the preposition “at.”",
   "lang": "en"
  },
  {
   "id": "ans-A12",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The clever fox watched the hens.”",
   "tokens": [
    "The",
    "clever",
    "fox",
    "watched",
    "the",
    "hens."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “watched,” third person singular, past, indicative, active; it depends on its subject “fox” and on its object “hens.” The words “The” and “clever” depend on “fox.” The word “the” depends on “hens.”",
   "lang": "en"
  },
  {
   "id": "ans-A13",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Young trees need water.”",
   "tokens": [
    "Young",
    "trees",
    "need",
    "water."
   ],
   "analysis": {
    "parse": [
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      3
     ]
    ]
   },
   "explain": "The main verb is “need,” third person plural, present, indicative, active; it depends on its subject “trees” and on its object “water.” The word “Young” depends on “trees.”",
   "lang": "en"
  },
  {
   "id": "ans-A14",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The captain of the ship gave orders.”",
   "tokens": [
    "The",
    "captain",
    "of",
    "the",
    "ship",
    "gave",
    "orders."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
      6
     ]
    ]
   },
   "explain": "The main verb is “gave,” third person singular, past, indicative, active; it depends on its subject “captain” and on its object “orders.” The words “The” and “of” depend on “captain.” The word “the” depends on “ship.” The noun “ship” depends on the preposition “of.”",
   "lang": "en"
  },
  {
   "id": "ans-A15",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Thomas reads old books carefully.”",
   "tokens": [
    "Thomas",
    "reads",
    "old",
    "books",
    "carefully."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
      1
     ]
    ]
   },
   "explain": "The main verb is “reads,” third person singular, present, indicative, active; it depends on its subject “Thomas” and on its object “books.” The word “old” depends on “books.” The word “carefully” depends on “reads.”",
   "lang": "en"
  },
  {
   "id": "ans-A16",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Taurus mūgit.</i> (“The bull bellows.”)",
   "tokens": [
    "<i>Taurus</i>",
    "<i>mūgit.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is <i>mūgit</i>, third person singular, present, indicative, active; it depends on its subject <i>Taurus</i>.",
   "lang": "la"
  },
  {
   "id": "ans-A17",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Puer equum videt.</i> (“The boy sees the horse.”)",
   "tokens": [
    "<i>Puer</i>",
    "<i>equum</i>",
    "<i>videt.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, singular, masculine",
      "noun, accusative, singular, masculine, case",
      "noun, accusative, singular, masculine, number",
      "noun, accusative, singular, masculine, gender",
      "noun, accusative, singular, masculine, case, number",
      "noun, accusative, singular, masculine, case, gender",
      "noun, accusative, singular, masculine, number, gender",
      "noun, accusative, singular, masculine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      2,
      0
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>videt</i>, third person singular, present, indicative, active; it depends on its subject <i>Puer</i> and on its object <i>equum</i>.",
   "lang": "la"
  },
  {
   "id": "ans-A18",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Magnus lupus ovēs terret.</i> (“The great wolf frightens the sheep.”)",
   "tokens": [
    "<i>Magnus</i>",
    "<i>lupus</i>",
    "<i>ovēs</i>",
    "<i>terret.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "adjective, nominative, singular, masculine",
      "adjective, nominative, singular, masculine, case",
      "adjective, nominative, singular, masculine, number",
      "adjective, nominative, singular, masculine, gender",
      "adjective, nominative, singular, masculine, case, number",
      "adjective, nominative, singular, masculine, case, gender",
      "adjective, nominative, singular, masculine, number, gender",
      "adjective, nominative, singular, masculine, case, number, gender",
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, plural, feminine",
      "noun, accusative, plural, feminine, case",
      "noun, accusative, plural, feminine, number",
      "noun, accusative, plural, feminine, gender",
      "noun, accusative, plural, feminine, case, number",
      "noun, accusative, plural, feminine, case, gender",
      "noun, accusative, plural, feminine, number, gender",
      "noun, accusative, plural, feminine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      0,
      1
     ],
     [
      3,
      1
     ],
     [
      3,
      2
     ]
    ]
   },
   "explain": "The main verb is <i>terret</i>, third person singular, present, indicative, active; it depends on its subject <i>lupus</i> and on its object <i>ovēs</i>. The word <i>Magnus</i> depends on <i>lupus</i>.",
   "lang": "la"
  },
  {
   "id": "ans-A19",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Mīlitēs in castrīs manent.</i> (“The soldiers remain in the camp.”)",
   "tokens": [
    "<i>Mīlitēs</i>",
    "<i>in</i>",
    "<i>castrīs</i>",
    "<i>manent.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, plural, masculine",
      "noun, nominative, plural, masculine, case",
      "noun, nominative, plural, masculine, number",
      "noun, nominative, plural, masculine, gender",
      "noun, nominative, plural, masculine, case, number",
      "noun, nominative, plural, masculine, case, gender",
      "noun, nominative, plural, masculine, number, gender",
      "noun, nominative, plural, masculine, case, number, gender"
     ],
     [
      "preposition"
     ],
     [
      "noun, ablative, plural, neuter",
      "noun, ablative, plural, neuter, case",
      "noun, ablative, plural, neuter, number",
      "noun, ablative, plural, neuter, gender",
      "noun, ablative, plural, neuter, case, number",
      "noun, ablative, plural, neuter, case, gender",
      "noun, ablative, plural, neuter, number, gender",
      "noun, ablative, plural, neuter, case, number, gender"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      3,
      0
     ],
     [
      1,
      3
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>manent</i>, third person plural, present, indicative, active; it depends on its subject <i>Mīlitēs</i>. The word <i>in</i> depends on <i>manent</i>. The noun <i>castrīs</i> depends on the preposition <i>in</i>.",
   "lang": "la"
  },
  {
   "id": "ans-A20",
   "set": "A",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Rēgīna longam epistulam scrībit.</i> (“The queen writes a long letter.”)",
   "tokens": [
    "<i>Rēgīna</i>",
    "<i>longam</i>",
    "<i>epistulam</i>",
    "<i>scrībit.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, feminine",
      "noun, nominative, singular, feminine, case",
      "noun, nominative, singular, feminine, number",
      "noun, nominative, singular, feminine, gender",
      "noun, nominative, singular, feminine, case, number",
      "noun, nominative, singular, feminine, case, gender",
      "noun, nominative, singular, feminine, number, gender",
      "noun, nominative, singular, feminine, case, number, gender"
     ],
     [
      "adjective, accusative, singular, feminine",
      "adjective, accusative, singular, feminine, case",
      "adjective, accusative, singular, feminine, number",
      "adjective, accusative, singular, feminine, gender",
      "adjective, accusative, singular, feminine, case, number",
      "adjective, accusative, singular, feminine, case, gender",
      "adjective, accusative, singular, feminine, number, gender",
      "adjective, accusative, singular, feminine, case, number, gender",
      "noun, accusative, singular, feminine",
      "noun, accusative, singular, feminine, case",
      "noun, accusative, singular, feminine, number",
      "noun, accusative, singular, feminine, gender",
      "noun, accusative, singular, feminine, case, number",
      "noun, accusative, singular, feminine, case, gender",
      "noun, accusative, singular, feminine, number, gender",
      "noun, accusative, singular, feminine, case, number, gender"
     ],
     [
      "noun, accusative, singular, feminine",
      "noun, accusative, singular, feminine, case",
      "noun, accusative, singular, feminine, number",
      "noun, accusative, singular, feminine, gender",
      "noun, accusative, singular, feminine, case, number",
      "noun, accusative, singular, feminine, case, gender",
      "noun, accusative, singular, feminine, number, gender",
      "noun, accusative, singular, feminine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      3,
      0
     ],
     [
      3,
      2
     ],
     [
      1,
      2
     ]
    ]
   },
   "explain": "The main verb is <i>scrībit</i>, third person singular, present, indicative, active; it depends on its subject <i>Rēgīna</i> and on its object <i>epistulam</i>. The word <i>longam</i> depends on <i>epistulam</i>.",
   "lang": "la"
  },
  {
   "id": "ans-B01",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Horses neigh.”",
   "tokens": [
    "Horses",
    "neigh."
   ],
   "analysis": {
    "parse": [
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is “neigh,” third person plural, present, indicative, active; it depends on its subject “Horses.”",
   "lang": "en"
  },
  {
   "id": "ans-B02",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The pond froze.”",
   "tokens": [
    "The",
    "pond",
    "froze."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      0,
      1
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is “froze,” third person singular, past, indicative, active; it depends on its subject “pond.” The word “The” depends on “pond.”",
   "lang": "en"
  },
  {
   "id": "ans-B03",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The small boy laughed happily.”",
   "tokens": [
    "The",
    "small",
    "boy",
    "laughed",
    "happily."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “laughed,” third person singular, past, indicative, active; it depends on its subject “boy.” The words “The” and “small” depend on “boy.” The word “happily” depends on “laughed.”",
   "lang": "en"
  },
  {
   "id": "ans-B04",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A carpenter built the table.”",
   "tokens": [
    "A",
    "carpenter",
    "built",
    "the",
    "table."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “built,” third person singular, past, indicative, active; it depends on its subject “carpenter” and on its object “table.” The word “A” depends on “carpenter.” The word “the” depends on “table.”",
   "lang": "en"
  },
  {
   "id": "ans-B05",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The sailors hauled the heavy nets.”",
   "tokens": [
    "The",
    "sailors",
    "hauled",
    "the",
    "heavy",
    "nets."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “hauled,” third person plural, past, indicative, active; it depends on its subject “sailors” and on its object “nets.” The word “The” depends on “sailors.” The words “the” and “heavy” depend on “nets.”",
   "lang": "en"
  },
  {
   "id": "ans-B06",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The cattle rested under the oaks.”",
   "tokens": [
    "The",
    "cattle",
    "rested",
    "under",
    "the",
    "oaks."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “rested,” third person plural, past, indicative, active; it depends on its subject “cattle.” The word “The” depends on “cattle.” The word “under” depends on “rested.” The word “the” depends on “oaks.” The noun “oaks” depends on the preposition “under.”",
   "lang": "en"
  },
  {
   "id": "ans-B07",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Maria baked a large cake.”",
   "tokens": [
    "Maria",
    "baked",
    "a",
    "large",
    "cake."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ],
     [
      1,
      4
     ],
     [
      2,
      4
     ],
     [
      3,
      4
     ]
    ]
   },
   "explain": "The main verb is “baked,” third person singular, past, indicative, active; it depends on its subject “Maria” and on its object “cake.” The words “a” and “large” depend on “cake.”",
   "lang": "en"
  },
  {
   "id": "ans-B08",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The storm broke the tall mast.”",
   "tokens": [
    "The",
    "storm",
    "broke",
    "the",
    "tall",
    "mast."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “broke,” third person singular, past, indicative, active; it depends on its subject “storm” and on its object “mast.” The word “The” depends on “storm.” The words “the” and “tall” depend on “mast.”",
   "lang": "en"
  },
  {
   "id": "ans-B09",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The shepherd sings softly.”",
   "tokens": [
    "The",
    "shepherd",
    "sings",
    "softly."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “sings,” third person singular, present, indicative, active; it depends on its subject “shepherd.” The word “The” depends on “shepherd.” The word “softly” depends on “sings.”",
   "lang": "en"
  },
  {
   "id": "ans-B10",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The swans swim on the lake.”",
   "tokens": [
    "The",
    "swans",
    "swim",
    "on",
    "the",
    "lake."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “swim,” third person plural, present, indicative, active; it depends on its subject “swans.” The word “The” depends on “swans.” The word “on” depends on “swim.” The word “the” depends on “lake.” The noun “lake” depends on the preposition “on.”",
   "lang": "en"
  },
  {
   "id": "ans-B11",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A traveler arrived late at the inn.”",
   "tokens": [
    "A",
    "traveler",
    "arrived",
    "late",
    "at",
    "the",
    "inn."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “arrived,” third person singular, past, indicative, active; it depends on its subject “traveler.” The word “A” depends on “traveler.” The words “late” and “at” depend on “arrived.” The word “the” depends on “inn.” The noun “inn” depends on the preposition “at.”",
   "lang": "en"
  },
  {
   "id": "ans-B12",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The patient teacher answered the questions.”",
   "tokens": [
    "The",
    "patient",
    "teacher",
    "answered",
    "the",
    "questions."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “answered,” third person singular, past, indicative, active; it depends on its subject “teacher” and on its object “questions.” The words “The” and “patient” depend on “teacher.” The word “the” depends on “questions.”",
   "lang": "en"
  },
  {
   "id": "ans-B13",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Brave soldiers guard the border.”",
   "tokens": [
    "Brave",
    "soldiers",
    "guard",
    "the",
    "border."
   ],
   "analysis": {
    "parse": [
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “guard,” third person plural, present, indicative, active; it depends on its subject “soldiers” and on its object “border.” The word “Brave” depends on “soldiers.” The word “the” depends on “border.”",
   "lang": "en"
  },
  {
   "id": "ans-B14",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The door of the barn creaked loudly.”",
   "tokens": [
    "The",
    "door",
    "of",
    "the",
    "barn",
    "creaked",
    "loudly."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
      6,
      5
     ]
    ]
   },
   "explain": "The main verb is “creaked,” third person singular, past, indicative, active; it depends on its subject “door.” The words “The” and “of” depend on “door.” The word “the” depends on “barn.” The noun “barn” depends on the preposition “of.” The word “loudly” depends on “creaked.”",
   "lang": "en"
  },
  {
   "id": "ans-B15",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Peter writes long letters weekly.”",
   "tokens": [
    "Peter",
    "writes",
    "long",
    "letters",
    "weekly."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
      1
     ]
    ]
   },
   "explain": "The main verb is “writes,” third person singular, present, indicative, active; it depends on its subject “Peter” and on its object “letters.” The word “long” depends on “letters.” The word “weekly” depends on “writes.”",
   "lang": "en"
  },
  {
   "id": "ans-B16",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Fluvius fluit.</i> (“The river flows.”)",
   "tokens": [
    "<i>Fluvius</i>",
    "<i>fluit.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is <i>fluit</i>, third person singular, present, indicative, active; it depends on its subject <i>Fluvius</i>.",
   "lang": "la"
  },
  {
   "id": "ans-B17",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Nautae nāvem parant.</i> (“The sailors prepare the ship.”)",
   "tokens": [
    "<i>Nautae</i>",
    "<i>nāvem</i>",
    "<i>parant.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, plural, masculine",
      "noun, nominative, plural, masculine, case",
      "noun, nominative, plural, masculine, number",
      "noun, nominative, plural, masculine, gender",
      "noun, nominative, plural, masculine, case, number",
      "noun, nominative, plural, masculine, case, gender",
      "noun, nominative, plural, masculine, number, gender",
      "noun, nominative, plural, masculine, case, number, gender"
     ],
     [
      "noun, accusative, singular, feminine",
      "noun, accusative, singular, feminine, case",
      "noun, accusative, singular, feminine, number",
      "noun, accusative, singular, feminine, gender",
      "noun, accusative, singular, feminine, case, number",
      "noun, accusative, singular, feminine, case, gender",
      "noun, accusative, singular, feminine, number, gender",
      "noun, accusative, singular, feminine, case, number, gender"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      2,
      0
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>parant</i>, third person plural, present, indicative, active; it depends on its subject <i>Nautae</i> and on its object <i>nāvem</i>.",
   "lang": "la"
  },
  {
   "id": "ans-B18",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Fīlia parva rosās amat.</i> (“The little daughter loves roses.”)",
   "tokens": [
    "<i>Fīlia</i>",
    "<i>parva</i>",
    "<i>rosās</i>",
    "<i>amat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, feminine",
      "noun, nominative, singular, feminine, case",
      "noun, nominative, singular, feminine, number",
      "noun, nominative, singular, feminine, gender",
      "noun, nominative, singular, feminine, case, number",
      "noun, nominative, singular, feminine, case, gender",
      "noun, nominative, singular, feminine, number, gender",
      "noun, nominative, singular, feminine, case, number, gender"
     ],
     [
      "adjective, nominative, singular, feminine",
      "adjective, nominative, singular, feminine, case",
      "adjective, nominative, singular, feminine, number",
      "adjective, nominative, singular, feminine, gender",
      "adjective, nominative, singular, feminine, case, number",
      "adjective, nominative, singular, feminine, case, gender",
      "adjective, nominative, singular, feminine, number, gender",
      "adjective, nominative, singular, feminine, case, number, gender",
      "noun, nominative, singular, feminine",
      "noun, nominative, singular, feminine, case",
      "noun, nominative, singular, feminine, number",
      "noun, nominative, singular, feminine, gender",
      "noun, nominative, singular, feminine, case, number",
      "noun, nominative, singular, feminine, case, gender",
      "noun, nominative, singular, feminine, number, gender",
      "noun, nominative, singular, feminine, case, number, gender"
     ],
     [
      "noun, accusative, plural, feminine",
      "noun, accusative, plural, feminine, case",
      "noun, accusative, plural, feminine, number",
      "noun, accusative, plural, feminine, gender",
      "noun, accusative, plural, feminine, case, number",
      "noun, accusative, plural, feminine, case, gender",
      "noun, accusative, plural, feminine, number, gender",
      "noun, accusative, plural, feminine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ],
     [
      3,
      0
     ],
     [
      3,
      2
     ]
    ]
   },
   "explain": "The main verb is <i>amat</i>, third person singular, present, indicative, active; it depends on its subject <i>Fīlia</i> and on its object <i>rosās</i>. The word <i>parva</i> depends on <i>Fīlia</i>.",
   "lang": "la"
  },
  {
   "id": "ans-B19",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Senex ad forum ambulat.</i> (“The old man walks to the forum.”)",
   "tokens": [
    "<i>Senex</i>",
    "<i>ad</i>",
    "<i>forum</i>",
    "<i>ambulat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "preposition"
     ],
     [
      "noun, accusative, singular, neuter",
      "noun, accusative, singular, neuter, case",
      "noun, accusative, singular, neuter, number",
      "noun, accusative, singular, neuter, gender",
      "noun, accusative, singular, neuter, case, number",
      "noun, accusative, singular, neuter, case, gender",
      "noun, accusative, singular, neuter, number, gender",
      "noun, accusative, singular, neuter, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      3,
      0
     ],
     [
      1,
      3
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>ambulat</i>, third person singular, present, indicative, active; it depends on its subject <i>Senex</i>. The word <i>ad</i> depends on <i>ambulat</i>. The noun <i>forum</i> depends on the preposition <i>ad</i>.",
   "lang": "la"
  },
  {
   "id": "ans-B20",
   "set": "B",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Dominus servōs saepe laudat.</i> (“The master often praises the slaves.”)",
   "tokens": [
    "<i>Dominus</i>",
    "<i>servōs</i>",
    "<i>saepe</i>",
    "<i>laudat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, plural, masculine",
      "noun, accusative, plural, masculine, case",
      "noun, accusative, plural, masculine, number",
      "noun, accusative, plural, masculine, gender",
      "noun, accusative, plural, masculine, case, number",
      "noun, accusative, plural, masculine, case, gender",
      "noun, accusative, plural, masculine, number, gender",
      "noun, accusative, plural, masculine, case, number, gender"
     ],
     [
      "adverb"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
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
      3
     ]
    ]
   },
   "explain": "The main verb is <i>laudat</i>, third person singular, present, indicative, active; it depends on its subject <i>Dominus</i> and on its object <i>servōs</i>. The word <i>saepe</i> depends on <i>laudat</i>.",
   "lang": "la"
  },
  {
   "id": "ans-C01",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Owls hoot.”",
   "tokens": [
    "Owls",
    "hoot."
   ],
   "analysis": {
    "parse": [
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is “hoot,” third person plural, present, indicative, active; it depends on its subject “Owls.”",
   "lang": "en"
  },
  {
   "id": "ans-C02",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The torch flickered.”",
   "tokens": [
    "The",
    "torch",
    "flickered."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      0,
      1
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is “flickered,” third person singular, past, indicative, active; it depends on its subject “torch.” The word “The” depends on “torch.”",
   "lang": "en"
  },
  {
   "id": "ans-C03",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The lame horse limped slowly.”",
   "tokens": [
    "The",
    "lame",
    "horse",
    "limped",
    "slowly."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “limped,” third person singular, past, indicative, active; it depends on its subject “horse.” The words “The” and “lame” depend on “horse.” The word “slowly” depends on “limped.”",
   "lang": "en"
  },
  {
   "id": "ans-C04",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A merchant sold the silver.”",
   "tokens": [
    "A",
    "merchant",
    "sold",
    "the",
    "silver."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “sold,” third person singular, past, indicative, active; it depends on its subject “merchant” and on its object “silver.” The word “A” depends on “merchant.” The word “the” depends on “silver.”",
   "lang": "en"
  },
  {
   "id": "ans-C05",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The workmen repaired the old wall.”",
   "tokens": [
    "The",
    "workmen",
    "repaired",
    "the",
    "old",
    "wall."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “repaired,” third person plural, past, indicative, active; it depends on its subject “workmen” and on its object “wall.” The word “The” depends on “workmen.” The words “the” and “old” depend on “wall.”",
   "lang": "en"
  },
  {
   "id": "ans-C06",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The pilgrims walked to the shrine.”",
   "tokens": [
    "The",
    "pilgrims",
    "walked",
    "to",
    "the",
    "shrine."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, past, indicative, active",
      "verb, third, plural, past, indicative, active, person",
      "verb, third, plural, past, indicative, active, number",
      "verb, third, plural, past, indicative, active, tense",
      "verb, third, plural, past, indicative, active, mood",
      "verb, third, plural, past, indicative, active, voice",
      "verb, third, plural, past, indicative, active, person, number",
      "verb, third, plural, past, indicative, active, person, tense",
      "verb, third, plural, past, indicative, active, person, mood",
      "verb, third, plural, past, indicative, active, person, voice",
      "verb, third, plural, past, indicative, active, number, tense",
      "verb, third, plural, past, indicative, active, number, mood",
      "verb, third, plural, past, indicative, active, number, voice",
      "verb, third, plural, past, indicative, active, tense, mood",
      "verb, third, plural, past, indicative, active, tense, voice",
      "verb, third, plural, past, indicative, active, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense",
      "verb, third, plural, past, indicative, active, person, number, mood",
      "verb, third, plural, past, indicative, active, person, number, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood",
      "verb, third, plural, past, indicative, active, person, tense, voice",
      "verb, third, plural, past, indicative, active, person, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood",
      "verb, third, plural, past, indicative, active, number, tense, voice",
      "verb, third, plural, past, indicative, active, number, mood, voice",
      "verb, third, plural, past, indicative, active, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood",
      "verb, third, plural, past, indicative, active, person, number, tense, voice",
      "verb, third, plural, past, indicative, active, person, number, mood, voice",
      "verb, third, plural, past, indicative, active, person, tense, mood, voice",
      "verb, third, plural, past, indicative, active, number, tense, mood, voice",
      "verb, third, plural, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active",
      "verb, 3rd, plural, past, indicative, active, person",
      "verb, 3rd, plural, past, indicative, active, number",
      "verb, 3rd, plural, past, indicative, active, tense",
      "verb, 3rd, plural, past, indicative, active, mood",
      "verb, 3rd, plural, past, indicative, active, voice",
      "verb, 3rd, plural, past, indicative, active, person, number",
      "verb, 3rd, plural, past, indicative, active, person, tense",
      "verb, 3rd, plural, past, indicative, active, person, mood",
      "verb, 3rd, plural, past, indicative, active, person, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense",
      "verb, 3rd, plural, past, indicative, active, number, mood",
      "verb, 3rd, plural, past, indicative, active, number, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood",
      "verb, 3rd, plural, past, indicative, active, tense, voice",
      "verb, 3rd, plural, past, indicative, active, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense",
      "verb, 3rd, plural, past, indicative, active, person, number, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “walked,” third person plural, past, indicative, active; it depends on its subject “pilgrims.” The word “The” depends on “pilgrims.” The word “to” depends on “walked.” The word “the” depends on “shrine.” The noun “shrine” depends on the preposition “to.”",
   "lang": "en"
  },
  {
   "id": "ans-C07",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Elena found a blue stone.”",
   "tokens": [
    "Elena",
    "found",
    "a",
    "blue",
    "stone."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ],
     [
      1,
      4
     ],
     [
      2,
      4
     ],
     [
      3,
      4
     ]
    ]
   },
   "explain": "The main verb is “found,” third person singular, past, indicative, active; it depends on its subject “Elena” and on its object “stone.” The words “a” and “blue” depend on “stone.”",
   "lang": "en"
  },
  {
   "id": "ans-C08",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The frost killed the young vines.”",
   "tokens": [
    "The",
    "frost",
    "killed",
    "the",
    "young",
    "vines."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “killed,” third person singular, past, indicative, active; it depends on its subject “frost” and on its object “vines.” The word “The” depends on “frost.” The words “the” and “young” depend on “vines.”",
   "lang": "en"
  },
  {
   "id": "ans-C09",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The guard waits patiently.”",
   "tokens": [
    "The",
    "guard",
    "waits",
    "patiently."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
     ]
    ]
   },
   "explain": "The main verb is “waits,” third person singular, present, indicative, active; it depends on its subject “guard.” The word “The” depends on “guard.” The word “patiently” depends on “waits.”",
   "lang": "en"
  },
  {
   "id": "ans-C10",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The crows circle above the field.”",
   "tokens": [
    "The",
    "crows",
    "circle",
    "above",
    "the",
    "field."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      5
     ],
     [
      5,
      3
     ]
    ]
   },
   "explain": "The main verb is “circle,” third person plural, present, indicative, active; it depends on its subject “crows.” The word “The” depends on “crows.” The word “above” depends on “circle.” The word “the” depends on “field.” The noun “field” depends on the preposition “above.”",
   "lang": "en"
  },
  {
   "id": "ans-C11",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “A messenger came quickly from the city.”",
   "tokens": [
    "A",
    "messenger",
    "came",
    "quickly",
    "from",
    "the",
    "city."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “came,” third person singular, past, indicative, active; it depends on its subject “messenger.” The word “A” depends on “messenger.” The words “quickly” and “from” depend on “came.” The word “the” depends on “city.” The noun “city” depends on the preposition “from.”",
   "lang": "en"
  },
  {
   "id": "ans-C12",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The gentle nurse comforted the sick child.”",
   "tokens": [
    "The",
    "gentle",
    "nurse",
    "comforted",
    "the",
    "sick",
    "child."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
    ]
   },
   "explain": "The main verb is “comforted,” third person singular, past, indicative, active; it depends on its subject “nurse” and on its object “child.” The words “The” and “gentle” depend on “nurse.” The words “the” and “sick” depend on “child.”",
   "lang": "en"
  },
  {
   "id": "ans-C13",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Wise judges weigh evidence.”",
   "tokens": [
    "Wise",
    "judges",
    "weigh",
    "evidence."
   ],
   "analysis": {
    "parse": [
     [
      "adjective"
     ],
     [
      "noun, plural",
      "noun, plural, number"
     ],
     [
      "verb, third, plural, present, indicative, active",
      "verb, third, plural, present, indicative, active, person",
      "verb, third, plural, present, indicative, active, number",
      "verb, third, plural, present, indicative, active, tense",
      "verb, third, plural, present, indicative, active, mood",
      "verb, third, plural, present, indicative, active, voice",
      "verb, third, plural, present, indicative, active, person, number",
      "verb, third, plural, present, indicative, active, person, tense",
      "verb, third, plural, present, indicative, active, person, mood",
      "verb, third, plural, present, indicative, active, person, voice",
      "verb, third, plural, present, indicative, active, number, tense",
      "verb, third, plural, present, indicative, active, number, mood",
      "verb, third, plural, present, indicative, active, number, voice",
      "verb, third, plural, present, indicative, active, tense, mood",
      "verb, third, plural, present, indicative, active, tense, voice",
      "verb, third, plural, present, indicative, active, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense",
      "verb, third, plural, present, indicative, active, person, number, mood",
      "verb, third, plural, present, indicative, active, person, number, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood",
      "verb, third, plural, present, indicative, active, person, tense, voice",
      "verb, third, plural, present, indicative, active, person, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood",
      "verb, third, plural, present, indicative, active, number, tense, voice",
      "verb, third, plural, present, indicative, active, number, mood, voice",
      "verb, third, plural, present, indicative, active, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood",
      "verb, third, plural, present, indicative, active, person, number, tense, voice",
      "verb, third, plural, present, indicative, active, person, number, mood, voice",
      "verb, third, plural, present, indicative, active, person, tense, mood, voice",
      "verb, third, plural, present, indicative, active, number, tense, mood, voice",
      "verb, third, plural, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active",
      "verb, 3rd, plural, present, indicative, active, person",
      "verb, 3rd, plural, present, indicative, active, number",
      "verb, 3rd, plural, present, indicative, active, tense",
      "verb, 3rd, plural, present, indicative, active, mood",
      "verb, 3rd, plural, present, indicative, active, voice",
      "verb, 3rd, plural, present, indicative, active, person, number",
      "verb, 3rd, plural, present, indicative, active, person, tense",
      "verb, 3rd, plural, present, indicative, active, person, mood",
      "verb, 3rd, plural, present, indicative, active, person, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense",
      "verb, 3rd, plural, present, indicative, active, number, mood",
      "verb, 3rd, plural, present, indicative, active, number, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood",
      "verb, 3rd, plural, present, indicative, active, tense, voice",
      "verb, 3rd, plural, present, indicative, active, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense",
      "verb, 3rd, plural, present, indicative, active, person, number, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ]
    ],
    "arrows": [
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
      3
     ]
    ]
   },
   "explain": "The main verb is “weigh,” third person plural, present, indicative, active; it depends on its subject “judges” and on its object “evidence.” The word “Wise” depends on “judges.”",
   "lang": "en"
  },
  {
   "id": "ans-C14",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “The bell of the church rang twice.”",
   "tokens": [
    "The",
    "bell",
    "of",
    "the",
    "church",
    "rang",
    "twice."
   ],
   "analysis": {
    "parse": [
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "preposition"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "verb, third, singular, past, indicative, active",
      "verb, third, singular, past, indicative, active, person",
      "verb, third, singular, past, indicative, active, number",
      "verb, third, singular, past, indicative, active, tense",
      "verb, third, singular, past, indicative, active, mood",
      "verb, third, singular, past, indicative, active, voice",
      "verb, third, singular, past, indicative, active, person, number",
      "verb, third, singular, past, indicative, active, person, tense",
      "verb, third, singular, past, indicative, active, person, mood",
      "verb, third, singular, past, indicative, active, person, voice",
      "verb, third, singular, past, indicative, active, number, tense",
      "verb, third, singular, past, indicative, active, number, mood",
      "verb, third, singular, past, indicative, active, number, voice",
      "verb, third, singular, past, indicative, active, tense, mood",
      "verb, third, singular, past, indicative, active, tense, voice",
      "verb, third, singular, past, indicative, active, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense",
      "verb, third, singular, past, indicative, active, person, number, mood",
      "verb, third, singular, past, indicative, active, person, number, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood",
      "verb, third, singular, past, indicative, active, person, tense, voice",
      "verb, third, singular, past, indicative, active, person, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood",
      "verb, third, singular, past, indicative, active, number, tense, voice",
      "verb, third, singular, past, indicative, active, number, mood, voice",
      "verb, third, singular, past, indicative, active, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood",
      "verb, third, singular, past, indicative, active, person, number, tense, voice",
      "verb, third, singular, past, indicative, active, person, number, mood, voice",
      "verb, third, singular, past, indicative, active, person, tense, mood, voice",
      "verb, third, singular, past, indicative, active, number, tense, mood, voice",
      "verb, third, singular, past, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active",
      "verb, 3rd, singular, past, indicative, active, person",
      "verb, 3rd, singular, past, indicative, active, number",
      "verb, 3rd, singular, past, indicative, active, tense",
      "verb, 3rd, singular, past, indicative, active, mood",
      "verb, 3rd, singular, past, indicative, active, voice",
      "verb, 3rd, singular, past, indicative, active, person, number",
      "verb, 3rd, singular, past, indicative, active, person, tense",
      "verb, 3rd, singular, past, indicative, active, person, mood",
      "verb, 3rd, singular, past, indicative, active, person, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense",
      "verb, 3rd, singular, past, indicative, active, number, mood",
      "verb, 3rd, singular, past, indicative, active, number, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood",
      "verb, 3rd, singular, past, indicative, active, tense, voice",
      "verb, 3rd, singular, past, indicative, active, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense",
      "verb, 3rd, singular, past, indicative, active, person, number, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, past, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
      6,
      5
     ]
    ]
   },
   "explain": "The main verb is “rang,” third person singular, past, indicative, active; it depends on its subject “bell.” The words “The” and “of” depend on “bell.” The word “the” depends on “church.” The noun “church” depends on the preposition “of.” The word “twice” depends on “rang.”",
   "lang": "en"
  },
  {
   "id": "ans-C15",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: “Daniel plays the violin beautifully.”",
   "tokens": [
    "Daniel",
    "plays",
    "the",
    "violin",
    "beautifully."
   ],
   "analysis": {
    "parse": [
     [
      "noun, singular",
      "noun, singular, number",
      "noun, singular, proper",
      "noun, singular, number, proper"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ],
     [
      "article",
      "adjective"
     ],
     [
      "noun, singular",
      "noun, singular, number"
     ],
     [
      "adverb"
     ]
    ],
    "arrows": [
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
      1
     ]
    ]
   },
   "explain": "The main verb is “plays,” third person singular, present, indicative, active; it depends on its subject “Daniel” and on its object “violin.” The word “the” depends on “violin.” The word “beautifully” depends on “plays.”",
   "lang": "en"
  },
  {
   "id": "ans-C16",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Ventus flābat.</i> (“The wind was blowing.”)",
   "tokens": [
    "<i>Ventus</i>",
    "<i>flābat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "verb, third, singular, imperfect, indicative, active",
      "verb, third, singular, imperfect, indicative, active, person",
      "verb, third, singular, imperfect, indicative, active, number",
      "verb, third, singular, imperfect, indicative, active, tense",
      "verb, third, singular, imperfect, indicative, active, mood",
      "verb, third, singular, imperfect, indicative, active, voice",
      "verb, third, singular, imperfect, indicative, active, person, number",
      "verb, third, singular, imperfect, indicative, active, person, tense",
      "verb, third, singular, imperfect, indicative, active, person, mood",
      "verb, third, singular, imperfect, indicative, active, person, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense",
      "verb, third, singular, imperfect, indicative, active, number, mood",
      "verb, third, singular, imperfect, indicative, active, number, voice",
      "verb, third, singular, imperfect, indicative, active, tense, mood",
      "verb, third, singular, imperfect, indicative, active, tense, voice",
      "verb, third, singular, imperfect, indicative, active, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense",
      "verb, third, singular, imperfect, indicative, active, person, number, mood",
      "verb, third, singular, imperfect, indicative, active, person, number, voice",
      "verb, third, singular, imperfect, indicative, active, person, tense, mood",
      "verb, third, singular, imperfect, indicative, active, person, tense, voice",
      "verb, third, singular, imperfect, indicative, active, person, mood, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense, mood",
      "verb, third, singular, imperfect, indicative, active, number, tense, voice",
      "verb, third, singular, imperfect, indicative, active, number, mood, voice",
      "verb, third, singular, imperfect, indicative, active, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, mood",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active",
      "verb, 3rd, singular, imperfect, indicative, active, person",
      "verb, 3rd, singular, imperfect, indicative, active, number",
      "verb, 3rd, singular, imperfect, indicative, active, tense",
      "verb, 3rd, singular, imperfect, indicative, active, mood",
      "verb, 3rd, singular, imperfect, indicative, active, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense",
      "verb, 3rd, singular, imperfect, indicative, active, person, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense",
      "verb, 3rd, singular, imperfect, indicative, active, number, mood",
      "verb, 3rd, singular, imperfect, indicative, active, number, voice",
      "verb, 3rd, singular, imperfect, indicative, active, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      1,
      0
     ]
    ]
   },
   "explain": "The main verb is <i>flābat</i>, third person singular, imperfect, indicative, active; it depends on its subject <i>Ventus</i>.",
   "lang": "la"
  },
  {
   "id": "ans-C17",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Poēta carmen recitat.</i> (“The poet recites a poem.”)",
   "tokens": [
    "<i>Poēta</i>",
    "<i>carmen</i>",
    "<i>recitat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, singular, neuter",
      "noun, accusative, singular, neuter, case",
      "noun, accusative, singular, neuter, number",
      "noun, accusative, singular, neuter, gender",
      "noun, accusative, singular, neuter, case, number",
      "noun, accusative, singular, neuter, case, gender",
      "noun, accusative, singular, neuter, number, gender",
      "noun, accusative, singular, neuter, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      2,
      0
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>recitat</i>, third person singular, present, indicative, active; it depends on its subject <i>Poēta</i> and on its object <i>carmen</i>.",
   "lang": "la"
  },
  {
   "id": "ans-C18",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Bonus medicus puerōs cūrat.</i> (“The good doctor cares for the boys.”)",
   "tokens": [
    "<i>Bonus</i>",
    "<i>medicus</i>",
    "<i>puerōs</i>",
    "<i>cūrat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "adjective, nominative, singular, masculine",
      "adjective, nominative, singular, masculine, case",
      "adjective, nominative, singular, masculine, number",
      "adjective, nominative, singular, masculine, gender",
      "adjective, nominative, singular, masculine, case, number",
      "adjective, nominative, singular, masculine, case, gender",
      "adjective, nominative, singular, masculine, number, gender",
      "adjective, nominative, singular, masculine, case, number, gender",
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, plural, masculine",
      "noun, accusative, plural, masculine, case",
      "noun, accusative, plural, masculine, number",
      "noun, accusative, plural, masculine, gender",
      "noun, accusative, plural, masculine, case, number",
      "noun, accusative, plural, masculine, case, gender",
      "noun, accusative, plural, masculine, number, gender",
      "noun, accusative, plural, masculine, case, number, gender"
     ],
     [
      "verb, third, singular, present, indicative, active",
      "verb, third, singular, present, indicative, active, person",
      "verb, third, singular, present, indicative, active, number",
      "verb, third, singular, present, indicative, active, tense",
      "verb, third, singular, present, indicative, active, mood",
      "verb, third, singular, present, indicative, active, voice",
      "verb, third, singular, present, indicative, active, person, number",
      "verb, third, singular, present, indicative, active, person, tense",
      "verb, third, singular, present, indicative, active, person, mood",
      "verb, third, singular, present, indicative, active, person, voice",
      "verb, third, singular, present, indicative, active, number, tense",
      "verb, third, singular, present, indicative, active, number, mood",
      "verb, third, singular, present, indicative, active, number, voice",
      "verb, third, singular, present, indicative, active, tense, mood",
      "verb, third, singular, present, indicative, active, tense, voice",
      "verb, third, singular, present, indicative, active, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense",
      "verb, third, singular, present, indicative, active, person, number, mood",
      "verb, third, singular, present, indicative, active, person, number, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood",
      "verb, third, singular, present, indicative, active, person, tense, voice",
      "verb, third, singular, present, indicative, active, person, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood",
      "verb, third, singular, present, indicative, active, number, tense, voice",
      "verb, third, singular, present, indicative, active, number, mood, voice",
      "verb, third, singular, present, indicative, active, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood",
      "verb, third, singular, present, indicative, active, person, number, tense, voice",
      "verb, third, singular, present, indicative, active, person, number, mood, voice",
      "verb, third, singular, present, indicative, active, person, tense, mood, voice",
      "verb, third, singular, present, indicative, active, number, tense, mood, voice",
      "verb, third, singular, present, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active",
      "verb, 3rd, singular, present, indicative, active, person",
      "verb, 3rd, singular, present, indicative, active, number",
      "verb, 3rd, singular, present, indicative, active, tense",
      "verb, 3rd, singular, present, indicative, active, mood",
      "verb, 3rd, singular, present, indicative, active, voice",
      "verb, 3rd, singular, present, indicative, active, person, number",
      "verb, 3rd, singular, present, indicative, active, person, tense",
      "verb, 3rd, singular, present, indicative, active, person, mood",
      "verb, 3rd, singular, present, indicative, active, person, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense",
      "verb, 3rd, singular, present, indicative, active, number, mood",
      "verb, 3rd, singular, present, indicative, active, number, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood",
      "verb, 3rd, singular, present, indicative, active, tense, voice",
      "verb, 3rd, singular, present, indicative, active, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense",
      "verb, 3rd, singular, present, indicative, active, person, number, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, present, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      0,
      1
     ],
     [
      3,
      1
     ],
     [
      3,
      2
     ]
    ]
   },
   "explain": "The main verb is <i>cūrat</i>, third person singular, present, indicative, active; it depends on its subject <i>medicus</i> and on its object <i>puerōs</i>. The word <i>Bonus</i> depends on <i>medicus</i>.",
   "lang": "la"
  },
  {
   "id": "ans-C19",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Agricolae in agrīs labōrābant.</i> (“The farmers were working in the fields.”)",
   "tokens": [
    "<i>Agricolae</i>",
    "<i>in</i>",
    "<i>agrīs</i>",
    "<i>labōrābant.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, plural, masculine",
      "noun, nominative, plural, masculine, case",
      "noun, nominative, plural, masculine, number",
      "noun, nominative, plural, masculine, gender",
      "noun, nominative, plural, masculine, case, number",
      "noun, nominative, plural, masculine, case, gender",
      "noun, nominative, plural, masculine, number, gender",
      "noun, nominative, plural, masculine, case, number, gender"
     ],
     [
      "preposition"
     ],
     [
      "noun, ablative, plural, masculine",
      "noun, ablative, plural, masculine, case",
      "noun, ablative, plural, masculine, number",
      "noun, ablative, plural, masculine, gender",
      "noun, ablative, plural, masculine, case, number",
      "noun, ablative, plural, masculine, case, gender",
      "noun, ablative, plural, masculine, number, gender",
      "noun, ablative, plural, masculine, case, number, gender"
     ],
     [
      "verb, third, plural, imperfect, indicative, active",
      "verb, third, plural, imperfect, indicative, active, person",
      "verb, third, plural, imperfect, indicative, active, number",
      "verb, third, plural, imperfect, indicative, active, tense",
      "verb, third, plural, imperfect, indicative, active, mood",
      "verb, third, plural, imperfect, indicative, active, voice",
      "verb, third, plural, imperfect, indicative, active, person, number",
      "verb, third, plural, imperfect, indicative, active, person, tense",
      "verb, third, plural, imperfect, indicative, active, person, mood",
      "verb, third, plural, imperfect, indicative, active, person, voice",
      "verb, third, plural, imperfect, indicative, active, number, tense",
      "verb, third, plural, imperfect, indicative, active, number, mood",
      "verb, third, plural, imperfect, indicative, active, number, voice",
      "verb, third, plural, imperfect, indicative, active, tense, mood",
      "verb, third, plural, imperfect, indicative, active, tense, voice",
      "verb, third, plural, imperfect, indicative, active, mood, voice",
      "verb, third, plural, imperfect, indicative, active, person, number, tense",
      "verb, third, plural, imperfect, indicative, active, person, number, mood",
      "verb, third, plural, imperfect, indicative, active, person, number, voice",
      "verb, third, plural, imperfect, indicative, active, person, tense, mood",
      "verb, third, plural, imperfect, indicative, active, person, tense, voice",
      "verb, third, plural, imperfect, indicative, active, person, mood, voice",
      "verb, third, plural, imperfect, indicative, active, number, tense, mood",
      "verb, third, plural, imperfect, indicative, active, number, tense, voice",
      "verb, third, plural, imperfect, indicative, active, number, mood, voice",
      "verb, third, plural, imperfect, indicative, active, tense, mood, voice",
      "verb, third, plural, imperfect, indicative, active, person, number, tense, mood",
      "verb, third, plural, imperfect, indicative, active, person, number, tense, voice",
      "verb, third, plural, imperfect, indicative, active, person, number, mood, voice",
      "verb, third, plural, imperfect, indicative, active, person, tense, mood, voice",
      "verb, third, plural, imperfect, indicative, active, number, tense, mood, voice",
      "verb, third, plural, imperfect, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active",
      "verb, 3rd, plural, imperfect, indicative, active, person",
      "verb, 3rd, plural, imperfect, indicative, active, number",
      "verb, 3rd, plural, imperfect, indicative, active, tense",
      "verb, 3rd, plural, imperfect, indicative, active, mood",
      "verb, 3rd, plural, imperfect, indicative, active, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, number",
      "verb, 3rd, plural, imperfect, indicative, active, person, tense",
      "verb, 3rd, plural, imperfect, indicative, active, person, mood",
      "verb, 3rd, plural, imperfect, indicative, active, person, voice",
      "verb, 3rd, plural, imperfect, indicative, active, number, tense",
      "verb, 3rd, plural, imperfect, indicative, active, number, mood",
      "verb, 3rd, plural, imperfect, indicative, active, number, voice",
      "verb, 3rd, plural, imperfect, indicative, active, tense, mood",
      "verb, 3rd, plural, imperfect, indicative, active, tense, voice",
      "verb, 3rd, plural, imperfect, indicative, active, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, tense",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, mood",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, tense, mood",
      "verb, 3rd, plural, imperfect, indicative, active, person, tense, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, number, tense, mood",
      "verb, 3rd, plural, imperfect, indicative, active, number, tense, voice",
      "verb, 3rd, plural, imperfect, indicative, active, number, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, tense, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, tense, mood",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, tense, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, tense, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, number, tense, mood, voice",
      "verb, 3rd, plural, imperfect, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
     [
      3,
      0
     ],
     [
      1,
      3
     ],
     [
      2,
      1
     ]
    ]
   },
   "explain": "The main verb is <i>labōrābant</i>, third person plural, imperfect, indicative, active; it depends on its subject <i>Agricolae</i>. The word <i>in</i> depends on <i>labōrābant</i>. The noun <i>agrīs</i> depends on the preposition <i>in</i>.",
   "lang": "la"
  },
  {
   "id": "ans-C20",
   "set": "C",
   "deck": "ix.sentences",
   "type": "analysis",
   "prompt": "Parse each word, then mark every dependence: <i>Imperātor mīlitēs fortiter dūcēbat.</i> (“The general was leading the soldiers bravely.”)",
   "tokens": [
    "<i>Imperātor</i>",
    "<i>mīlitēs</i>",
    "<i>fortiter</i>",
    "<i>dūcēbat.</i>"
   ],
   "analysis": {
    "parse": [
     [
      "noun, nominative, singular, masculine",
      "noun, nominative, singular, masculine, case",
      "noun, nominative, singular, masculine, number",
      "noun, nominative, singular, masculine, gender",
      "noun, nominative, singular, masculine, case, number",
      "noun, nominative, singular, masculine, case, gender",
      "noun, nominative, singular, masculine, number, gender",
      "noun, nominative, singular, masculine, case, number, gender"
     ],
     [
      "noun, accusative, plural, masculine",
      "noun, accusative, plural, masculine, case",
      "noun, accusative, plural, masculine, number",
      "noun, accusative, plural, masculine, gender",
      "noun, accusative, plural, masculine, case, number",
      "noun, accusative, plural, masculine, case, gender",
      "noun, accusative, plural, masculine, number, gender",
      "noun, accusative, plural, masculine, case, number, gender"
     ],
     [
      "adverb"
     ],
     [
      "verb, third, singular, imperfect, indicative, active",
      "verb, third, singular, imperfect, indicative, active, person",
      "verb, third, singular, imperfect, indicative, active, number",
      "verb, third, singular, imperfect, indicative, active, tense",
      "verb, third, singular, imperfect, indicative, active, mood",
      "verb, third, singular, imperfect, indicative, active, voice",
      "verb, third, singular, imperfect, indicative, active, person, number",
      "verb, third, singular, imperfect, indicative, active, person, tense",
      "verb, third, singular, imperfect, indicative, active, person, mood",
      "verb, third, singular, imperfect, indicative, active, person, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense",
      "verb, third, singular, imperfect, indicative, active, number, mood",
      "verb, third, singular, imperfect, indicative, active, number, voice",
      "verb, third, singular, imperfect, indicative, active, tense, mood",
      "verb, third, singular, imperfect, indicative, active, tense, voice",
      "verb, third, singular, imperfect, indicative, active, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense",
      "verb, third, singular, imperfect, indicative, active, person, number, mood",
      "verb, third, singular, imperfect, indicative, active, person, number, voice",
      "verb, third, singular, imperfect, indicative, active, person, tense, mood",
      "verb, third, singular, imperfect, indicative, active, person, tense, voice",
      "verb, third, singular, imperfect, indicative, active, person, mood, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense, mood",
      "verb, third, singular, imperfect, indicative, active, number, tense, voice",
      "verb, third, singular, imperfect, indicative, active, number, mood, voice",
      "verb, third, singular, imperfect, indicative, active, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, mood",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, number, tense, mood, voice",
      "verb, third, singular, imperfect, indicative, active, person, number, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active",
      "verb, 3rd, singular, imperfect, indicative, active, person",
      "verb, 3rd, singular, imperfect, indicative, active, number",
      "verb, 3rd, singular, imperfect, indicative, active, tense",
      "verb, 3rd, singular, imperfect, indicative, active, mood",
      "verb, 3rd, singular, imperfect, indicative, active, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense",
      "verb, 3rd, singular, imperfect, indicative, active, person, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense",
      "verb, 3rd, singular, imperfect, indicative, active, number, mood",
      "verb, 3rd, singular, imperfect, indicative, active, number, voice",
      "verb, 3rd, singular, imperfect, indicative, active, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, mood",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, number, tense, mood, voice",
      "verb, 3rd, singular, imperfect, indicative, active, person, number, tense, mood, voice"
     ]
    ],
    "arrows": [
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
      3
     ]
    ]
   },
   "explain": "The main verb is <i>dūcēbat</i>, third person singular, imperfect, indicative, active; it depends on its subject <i>Imperātor</i> and on its object <i>mīlitēs</i>. The word <i>fortiter</i> depends on <i>dūcēbat</i>.",
   "lang": "la"
  }
 ]
};
