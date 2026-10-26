window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.es/compared"] = {
 "id": "lang.iii-indecl.es/compared",
 "title": "Spanish Compared with Latin",
 "sub": "The prepositions in place of the cases, the partitive that Spanish lacks, ser and estar beside esse, and the second person.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 4.3, 14.2, 16.7, 19.6, 29, and 37.5; Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "compared-1",
   "title": "From the Latin cases to the Spanish prepositions",
   "body": "<p>Where Latin shows the relation of a noun to the rest of the sentence by a case ending, Spanish uses a preposition. The Latin genitive <i lang=\"la\">liber magistrī</i> is <i lang=\"es\">el libro del maestro</i> (“the teacher’s book”); the Latin dative <i lang=\"la\">magistrō librum dat</i> is <i lang=\"es\">da el libro al maestro</i> (“he gives the book to the teacher”); and the Latin ablative with <i lang=\"la\">cum</i>, <i lang=\"la\">cum amīcō</i>, is <i lang=\"es\">con el amigo</i> (“with the friend”). The Academy says that <i lang=\"es\">de</i> is the Spanish preposition that corresponds to the Latin genitive complements, and that <i lang=\"es\">a</i> introduces the indirect object. Allen and Greenough explain how this came about: in the early stages of language the cases alone were enough to show the sense, but as the force of the case endings weakened, adverbs were used for greater precision, and these became prepositions.</p><p>The Latin prepositions govern the accusative or the ablative. A Spanish preposition governs no case, because the noun has none, but a personal pronoun after it takes the form for that position: <i lang=\"es\">para mí</i>, <i lang=\"es\">sin ti</i>, <i lang=\"es\">de sí</i>, and not <i lang=\"es\">para yo</i>. The prepositions are invariable and almost always unstressed.</p>",
   "qp": {
    "id": "q-es-cmp-case",
    "variants": [
     {
      "prompt": "Which Spanish preposition corresponds to the Latin genitive?",
      "options": [
       "<i lang=\"es\">a</i>",
       "<i lang=\"es\">con</i>",
       "<i lang=\"es\">de</i>",
       "<i lang=\"es\">en</i>"
      ],
      "answer": 2,
      "explain": "The Academy says that <i lang=\"es\">de</i> corresponds to the Latin genitive complements."
     },
     {
      "prompt": "Choose the form: <i lang=\"es\">Vivo cerca de ___</i> (“I live near you,” familiar).",
      "options": [
       "<i lang=\"es\">ti</i>",
       "<i lang=\"es\">tú</i>",
       "<i lang=\"es\">te</i>",
       "<i lang=\"es\">tu</i>"
      ],
      "answer": 0,
      "explain": "After a preposition the second person singular takes the form <i lang=\"es\">ti</i>."
     },
     {
      "prompt": "According to Allen and Greenough, why did the prepositions become necessary?",
      "options": [
       "The force of the case endings weakened",
       "Adverbs were lost from the language",
       "The verbs lost their endings",
       "Nouns acquired more cases"
      ],
      "answer": 0,
      "explain": "As the case endings weakened, adverbs were used for greater precision, and they became prepositions."
     }
    ]
   }
  },
  {
   "id": "compared-2",
   "title": "The partitive that Spanish lacks",
   "body": "<p>French says <i lang=\"es\">du pain</i> for “some bread,” with a partitive article, and the Academy’s list of the Spanish articles has none: it has the definite article and the indefinite article only. Spanish uses the noun alone for an unspecified quantity: <i lang=\"es\">Bebo agua</i> (“I drink water,” “I am drinking some water”), <i lang=\"es\">Quiero pan</i> (“I want some bread”). With a word of quantity, the noun follows <i lang=\"es\">de</i> and still has no article: <i lang=\"es\">un poco de sal</i> (“a little salt”), <i lang=\"es\">una taza de té</i> (“a cup of tea”), <i lang=\"es\">una docena de huevos</i> (“a dozen eggs”). The Academy calls this a pseudopartitive construction.</p><p>A true partitive names a part of a whole that is already defined, and then the whole has its article or a demonstrative: <i lang=\"es\">tres de los alumnos</i> (“three of the students”), <i lang=\"es\">doce de esos huevos</i> (“twelve of those eggs”). Latin expresses the part by the genitive of the whole, which Allen and Greenough call the partitive genitive: <i lang=\"la\">pars mīlitum</i>, “part of the soldiers,” that is, <i lang=\"es\">parte de los soldados</i>.</p>",
   "qp": {
    "id": "q-es-cmp-partitive",
    "variants": [
     {
      "prompt": "How does Spanish say “I want some bread”?",
      "options": [
       "<i lang=\"es\">Quiero del pan</i>",
       "<i lang=\"es\">Quiero pan</i>",
       "<i lang=\"es\">Quiero de pan</i>",
       "<i lang=\"es\">Quiero unos panes</i>"
      ],
      "answer": 1,
      "explain": "Spanish has no partitive article; the noun stands alone."
     },
     {
      "prompt": "Choose the word: <i lang=\"es\">un poco ___ pan</i> (“a little bread”).",
      "options": [
       "<i lang=\"es\">de</i>",
       "<i lang=\"es\">del</i>",
       "<i lang=\"es\">en</i>",
       "<i lang=\"es\">con</i>"
      ],
      "answer": 0,
      "explain": "After a word of quantity the noun follows <i lang=\"es\">de</i>, without an article."
     },
     {
      "prompt": "Which phrase names a part of a whole that is already defined?",
      "options": [
       "<i lang=\"es\">una docena de huevos</i>",
       "<i lang=\"es\">un poco de agua</i>",
       "<i lang=\"es\">doce de esos huevos</i>",
       "<i lang=\"es\">mucha harina</i>"
      ],
      "answer": 2,
      "explain": "A true partitive has a defined whole: <i lang=\"es\">esos huevos</i>."
     }
    ]
   }
  },
  {
   "id": "compared-3",
   "title": "Ser and estar beside Latin esse",
   "body": "<p>Latin has one verb for the copula, <i lang=\"la\">esse</i>, which joins a subject to a predicate noun, an adjective, or a word of place: <i lang=\"la\">Pater medicus est</i> (“The father is a doctor”), <i lang=\"la\">Pater domī est</i> (“The father is at home”). Spanish has two verbs for these uses. A noun that says what someone is takes <i lang=\"es\">ser</i>, <i lang=\"es\">Mi padre es médico</i>; a place takes <i lang=\"es\">estar</i>, <i lang=\"es\">Mi padre está en casa</i>. With an adjective, <i lang=\"es\">ser</i> gives a characteristic and <i lang=\"es\">estar</i> a state, <i lang=\"es\">Marta es ingeniosa</i> (“Marta is clever”), <i lang=\"es\">Marta está contenta</i> (“Marta is pleased”).</p><p>The verb <i lang=\"es\">estar</i> comes from the Latin verb <i lang=\"la\">stāre</i>, “to stand,” whereas <i lang=\"es\">ser</i> does not now mean “to exist,” as the older <i lang=\"es\">Aquí fue Troya</i> did. The Academy observes that the older rule, <i lang=\"es\">ser</i> for what lasts and <i lang=\"es\">estar</i> for what is temporary, has difficulties; the choice depends on the kind of predicate.</p>",
   "qp": {
    "id": "q-es-cmp-ser",
    "variants": [
     {
      "prompt": "Which Spanish verb comes from the Latin <i lang=\"la\">stāre</i>, “to stand”?",
      "options": [
       "<i lang=\"es\">ser</i>",
       "<i lang=\"es\">estar</i>",
       "<i lang=\"es\">haber</i>",
       "<i lang=\"es\">tener</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Estar</i> comes from <i lang=\"la\">stāre</i>."
     },
     {
      "prompt": "Which sentence renders <i lang=\"la\">Pater domī est</i> (“The father is at home”)?",
      "options": [
       "<i lang=\"es\">Mi padre es en casa</i>",
       "<i lang=\"es\">Mi padre está en casa</i>",
       "<i lang=\"es\">Mi padre hay en casa</i>",
       "<i lang=\"es\">Mi padre ha en casa</i>"
      ],
      "answer": 1,
      "explain": "A place takes <i lang=\"es\">estar</i>."
     },
     {
      "prompt": "Which sentence renders <i lang=\"la\">Pater medicus est</i> (“The father is a doctor”)?",
      "options": [
       "<i lang=\"es\">Mi padre está médico</i>",
       "<i lang=\"es\">Mi padre tiene médico</i>",
       "<i lang=\"es\">Mi padre es médico</i>",
       "<i lang=\"es\">Mi padre hay médico</i>"
      ],
      "answer": 2,
      "explain": "A noun that says what someone is takes <i lang=\"es\">ser</i>."
     }
    ]
   }
  },
  {
   "id": "compared-4",
   "title": "The second person: tú, vosotros, usted, and vos",
   "body": "<p>Latin has <i lang=\"la\">tū</i> for one person and <i lang=\"la\">vōs</i> for several. Spanish of Spain has four forms of address: <i lang=\"es\">tú</i> and <i lang=\"es\">usted</i> for one person, familiar and respectful, and <i lang=\"es\">vosotros</i> and <i lang=\"es\">ustedes</i> for several. Spanish <i lang=\"es\">vos</i> comes from the Latin <i lang=\"la\">vōs</i> and was at first a plural. It came to be used for one person as well, in respectful address, and its plural use was taken over by <i lang=\"es\">vosotros</i>, which is now the familiar plural. The Academy reports that the use of <i lang=\"es\">vos</i> for one person disappeared from European Spanish between the seventeenth and the early eighteenth century, and that it survives there only in the reverential address to high authorities in very formal contexts: <i lang=\"es\">Vos sabéis, Señor</i>.</p><p>In a large part of Latin America <i lang=\"es\">vos</i> is still used for one person in familiar address, with verb forms of its own, which is called <i lang=\"la\">voseo</i> in Spanish. The course teaches the Spanish of Spain, and so it uses <i lang=\"es\">tú</i> and <i lang=\"es\">vosotros</i> and does not teach the forms of the <i lang=\"es\">voseo</i>.</p>",
   "qp": {
    "id": "q-es-cmp-second",
    "variants": [
     {
      "prompt": "What did the Latin <i lang=\"la\">vōs</i> denote?",
      "options": [
       "One person, familiar",
       "One person, respectful",
       "Several persons",
       "The person speaking"
      ],
      "answer": 2,
      "explain": "Latin <i lang=\"la\">vōs</i> is the plural of <i lang=\"la\">tū</i>."
     },
     {
      "prompt": "Which form is the familiar plural of Spanish in Spain?",
      "options": [
       "<i lang=\"es\">usted</i>",
       "<i lang=\"es\">ustedes</i>",
       "<i lang=\"es\">vos</i>",
       "<i lang=\"es\">vosotros</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Vosotros</i> is the familiar plural; <i lang=\"es\">ustedes</i> is the respectful one."
     },
     {
      "prompt": "What does the Academy say of <i lang=\"es\">vos</i> for one person in European Spanish?",
      "options": [
       "It is the ordinary familiar form",
       "It disappeared between the seventeenth and the early eighteenth century, except in very formal address",
       "It is used with <i lang=\"es\">ustedes</i>",
       "It was never used"
      ],
      "answer": 1,
      "explain": "It survives only as the reverential address to high authorities."
     }
    ]
   }
  }
 ]
};
