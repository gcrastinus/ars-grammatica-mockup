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
   "body": "<p>In <i lang=\"de\">der alte Fischer fährt heute hinaus</i> (“the old fisherman is going out today”), <i lang=\"de\">der</i>, <i lang=\"de\">alte</i>, <i lang=\"de\">Fischer</i>, and <i lang=\"de\">fährt</i> change their form with case, number, or person (<i lang=\"de\">die alten Fischer fahren</i>), whereas <i lang=\"de\">heute</i> and <i lang=\"de\">hinaus</i> never change. German grammars divide the parts of speech in just this way, into <strong>declinable</strong> words (<i lang=\"de\">flektierbare Wörter</i>), which change their form, and <strong>indeclinable</strong> words (<i lang=\"de\">nicht flektierbare Wörter</i>), which do not, the same division that Donatus makes between the declinable and the indeclinable parts.</p>\n<p>The declinable words are the verb (<i lang=\"de\">Verb</i>), the noun (<i lang=\"de\">Substantiv</i> or <i lang=\"de\">Nomen</i>), the article (<i lang=\"de\">Artikel</i>), the adjective (<i lang=\"de\">Adjektiv</i>), and the pronoun (<i lang=\"de\">Pronomen</i>). The indeclinable words are the adverb (<i lang=\"de\">Adverb</i>), the preposition (<i lang=\"de\">Präposition</i>), the conjunction (<i lang=\"de\">Konjunktion</i>), the interjection (<i lang=\"de\">Interjektion</i>), and the small words that the grammars call particles (<i lang=\"de\">Partikeln</i>), such as <i lang=\"de\">doch</i>, <i lang=\"de\">ja</i>, and <i lang=\"de\">mal</i>.</p>",
   "qp": {
    "id": "q-de-classes",
    "variants": [
     {
      "prompt": "Which German word is indeclinable?",
      "options": [
       "<i lang=\"de\">kleine</i> (“small”)",
       "<i lang=\"de\">gestern</i> (“yesterday”)",
       "<i lang=\"de\">läuft</i> (“runs”)",
       "<i lang=\"de\">ihnen</i> (“to them”)"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Gestern</i> is an adverb and never changes; the others are an adjective, a verb, and an article."
     },
     {
      "prompt": "What do the German grammars call the small indeclinable words such as <i lang=\"de\">doch</i> and <i lang=\"de\">mal</i>?",
      "options": [
       "Articles",
       "Prefixes",
       "Particles",
       "Interjections"
      ],
      "answer": 2,
      "explain": "They are the <i lang=\"de\">Partikeln</i>, which belong with the indeclinable words."
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
   "body": "<p>The German list differs from Donatus’s in three places. First, German has the article, which Latin lacks. Second, the German grammars count the adjective as a part of its own, whereas Donatus counts it under the noun. Third, the participle is a form of the verb (<i lang=\"de\">gesprochen</i>, <i lang=\"de\">sprechend</i>), as in the modern grammars of English and French. In one respect German is closer to Latin than English or French is: the article, the adjective, the pronoun, and some nouns still change their form for four cases.</p>",
   "qp": {
    "id": "q-de-compared",
    "variants": [
     {
      "prompt": "Where do the German grammars put the participle <i lang=\"de\">gesprochen</i>?",
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
