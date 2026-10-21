window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/parts"] = {
 "id": "lang.iii-decl.de/parts",
 "title": "Declinable and Indeclinable Words in German",
 "sub": "The parts of speech of the German grammars, set beside the eight of Donatus",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>; Donatus, <i>Ars minor</i>",
 "panels": [
  {
   "id": "classes",
   "title": "The classes of words",
   "body": "<p>In <i>der alte Fischer fährt heute hinaus</i> (“the old fisherman is going out today”), <i>der</i>, <i>alte</i>, <i>Fischer</i>, and <i>fährt</i> change their form with case, number, or person (<i>die alten Fischer fahren</i>), whereas <i>heute</i> and <i>hinaus</i> never change. German grammars divide the parts of speech in just this way, into <strong>declinable</strong> words (<i>flektierbare Wörter</i>), which change their form, and <strong>indeclinable</strong> words (<i>nicht flektierbare Wörter</i>), which do not, the same division that Donatus makes between the declinable and the indeclinable parts.</p>\n<p>The declinable words are the verb (<i>Verb</i>), the noun (<i>Substantiv</i> or <i>Nomen</i>), the article (<i>Artikel</i>), the adjective (<i>Adjektiv</i>), and the pronoun (<i>Pronomen</i>). The indeclinable words are the adverb (<i>Adverb</i>), the preposition (<i>Präposition</i>), the conjunction (<i>Konjunktion</i>), the interjection (<i>Interjektion</i>), and the small words that the grammars call particles (<i>Partikeln</i>), such as <i>doch</i>, <i>ja</i>, and <i>mal</i>.</p>",
   "qp": {
    "id": "q-de-classes",
    "variants": [
     {
      "prompt": "Which German word is indeclinable?",
      "options": [
       "<i>kleine</i> (“small”)",
       "<i>gestern</i> (“yesterday”)",
       "<i>läuft</i> (“runs”)",
       "<i>ihnen</i> (“to them”)"
      ],
      "answer": 1,
      "explain": "<i>Gestern</i> is an adverb and never changes; the others are an adjective, a verb, and an article."
     },
     {
      "prompt": "What do the German grammars call the small indeclinable words such as <i>doch</i> and <i>mal</i>?",
      "options": [
       "Articles",
       "Prefixes",
       "Particles",
       "Interjections"
      ],
      "answer": 2,
      "explain": "They are the <i>Partikeln</i>, which belong with the indeclinable words."
     },
     {
      "prompt": "Which division of Donatus answers to the German declinable and indeclinable words?",
      "options": [
       "The noun and the verb",
       "Proper and common nouns",
       "Primitive and derived words, as in Section IV",
       "The declinable and the indeclinable parts"
      ],
      "answer": 3,
      "explain": "Donatus divides the parts into those that are declined and those that are not."
     }
    ]
   }
  },
  {
   "id": "compared",
   "title": "The German list and the Latin list",
   "body": "<p>The German list differs from Donatus’s in three places. First, German has the article, which Latin lacks. Second, the German grammars count the adjective as a part of its own, whereas Donatus counts it under the noun. Third, the participle is a form of the verb (<i>gesprochen</i>, <i>sprechend</i>), as in the modern grammars of English and French. In one respect German is closer to Latin than English or French is: the article, the adjective, the pronoun, and some nouns still change their form for four cases.</p>",
   "qp": {
    "id": "q-de-compared",
    "variants": [
     {
      "prompt": "Where do the German grammars put the participle <i>gesprochen</i>?",
      "options": [
       "As a part of its own",
       "Under the adjective",
       "Under the verb",
       "Among the particles"
      ],
      "answer": 2,
      "explain": "The modern grammars count the participle as a form of the verb; Donatus makes it a part of its own."
     },
     {
      "prompt": "In what respect is German closer to Latin than English is?",
      "options": [
       "It has no article",
       "Its declinable words still show four cases",
       "It counts the participle apart",
       "It has six cases"
      ],
      "answer": 1,
      "explain": "The German article, adjective, pronoun, and some nouns still change for case."
     },
     {
      "prompt": "Which part does German have that Latin lacks?",
      "options": [
       "The article",
       "The interjection",
       "The preposition",
       "The conjunction"
      ],
      "answer": 0,
      "explain": "Latin has no article."
     }
    ]
   }
  }
 ]
};
