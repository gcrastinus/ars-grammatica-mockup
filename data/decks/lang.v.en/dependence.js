window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.en/dependence"] = {
 "id": "lang.v.en/dependence",
 "title": "Dependence in English Sentences",
 "sub": "Marking the dependences of an English sentence, and the dependences in the poets’ order",
 "sources": "Thomas of Erfurt, <i>Grammatica speculativa</i>; Alonzo Reed and Brainerd Kellogg, <i>Higher Lessons in English</i> (1877); a standard English grammar",
 "panels": [
  {
   "id": "marking",
   "title": "Marking the dependences of an English sentence",
   "body": "<p>In “The young pilot landed the plane safely” there are six constructions. “The” and “young” depend on “pilot”; “landed” depends on “pilot,” its subject, and also on “plane,” its object; the second “the” depends on “plane”; and “safely” depends on “landed.” English shows few of these dependences by the form of its words, and so the order shows most of them: the adjective stands before its noun, the subject before the verb, and the object after it.</p>\n<p>A phrase or a clause depends on a word as a whole. In “The house by the river belongs to my aunt,” the phrase “by the river” depends on “house,” as an adjective would, and “to my aunt” depends on “belongs.”</p>",
   "qp": {
    "id": "q-en-dep-mark",
    "variants": [
     {
      "prompt": "In “The tired child slept soundly,” on which word does “soundly” depend?",
      "options": [
       "“child”",
       "“tired”",
       "“slept”",
       "on no word"
      ],
      "answer": 2,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In “A tall man opened the door,” on which word does “tall” depend?",
      "options": [
       "“opened”",
       "“man”",
       "“door”",
       "on no word"
      ],
      "answer": 1,
      "explain": "The adjective depends on the noun that it describes."
     },
     {
      "prompt": "In “The lamp on the desk is broken,” on which word does “on the desk” depend?",
      "options": [
       "“lamp”",
       "“broken”",
       "“is”",
       "on no word"
      ],
      "answer": 0,
      "explain": "The phrase tells which lamp, so it depends on “lamp,” as an adjective would."
     }
    ]
   }
  },
  {
   "id": "poets",
   "title": "Dependence in the poets’ order",
   "body": "<p>The poets often change the ordinary order, and since English has few endings to show the dependences, the reader must find them from the sense and from the forms that remain. Frost’s line “Whose woods these are I think I know” (“Stopping by Woods on a Snowy Evening,” 1923) puts first the clause “whose woods these are,” which is the object of “know”; in the ordinary order it would be “I think I know whose woods these are.” In Wordsworth’s “I wandered lonely as a cloud,” “lonely” stands after the verb but describes “I,” and so it depends on “I.”</p>\n<p>So in poetry we ask of each word what it requires and which word supplies it, and we do not assume that it belongs to its neighbor.</p>",
   "qp": {
    "id": "q-en-dep-poets",
    "variants": [
     {
      "prompt": "In “Slowly the silent river flows,” on which word does “slowly” depend?",
      "options": [
       "“flows”",
       "“river”",
       "“silent”",
       "on no word"
      ],
      "answer": 0,
      "explain": "“Slowly” tells how the river flows, so it depends on the verb, though it stands first."
     },
     {
      "prompt": "In “Bright shone the moon,” on which word does “bright” depend?",
      "options": [
       "“shone”",
       "“the”",
       "on no word",
       "“moon”"
      ],
      "answer": 3,
      "explain": "“Bright” describes the moon; the poet has moved it to the front."
     },
     {
      "prompt": "Why must the reader of English verse find dependences from the sense?",
      "options": [
       "English verse has no subjects",
       "The poets never use adjectives",
       "English has few endings to show them",
       "Verse uses the Latin cases"
      ],
      "answer": 2,
      "explain": "With few endings, the order and the sense show most dependences, and the poets change the order."
     }
    ]
   }
  }
 ]
};
