window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.es/etymology"] = {
 "id": "lang.iv.es/etymology",
 "title": "The Sources of Spanish Words",
 "sub": "Inherited and learned words, and the words that Spanish took from Arabic, Greek, the Germanic languages, and the languages of the Americas.",
 "sources": "Real Academia Española, <i lang=\"es\">Diccionario de la lengua española</i>, 23rd ed. (2014), the etymology given in each entry; Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), section 1.3",
 "panels": [
  {
   "id": "etymology-1",
   "title": "Inherited and learned words",
   "body": "<p>The Spanish noun <i lang=\"es\">hierro</i> (“iron”) and the adjective <i lang=\"es\">férreo</i> (“of iron”) go back to the Latin <i lang=\"la\">ferrum</i> and <i lang=\"la\">ferreus</i>, but they have different forms. <i lang=\"es\">Hierro</i> has changed in sound over the centuries, as the words that a language inherits do; <i lang=\"es\">férreo</i> has kept the Latin form. The Academy calls a word of the first kind <strong>patrimonial</strong> and a word of the second kind a <strong>cultismo</strong> (a learned word): a cultismo is taken from a classical language and does not undergo the sound changes of the inherited words.</p><p>The same relation holds between <i lang=\"es\">dedo</i> (“finger”) and <i lang=\"es\">digital</i>, from <i lang=\"la\">digitus</i> and <i lang=\"la\">digitalis</i>; between <i lang=\"es\">leche</i> (“milk”) and <i lang=\"es\">lácteo</i> (“of milk”), from <i lang=\"la\">lac</i>, <i lang=\"la\">lactis</i>, and <i lang=\"la\">lacteus</i>; and between <i lang=\"es\">fiesta</i> (“feast”) and <i lang=\"es\">festivo</i>, from <i lang=\"la\">festa</i> and <i lang=\"la\">festivus</i>. This is why the Academy lists <i lang=\"es\">digit-</i> and <i lang=\"es\">lact-</i> among the bases of derived words: the derived word is formed on the Latin base, and the base does not look like the current word. Sometimes one Latin word has given two Spanish words, an inherited one and a learned one: <i lang=\"es\">estrecho</i> (“narrow”) and <i lang=\"es\">estricto</i> (“strict”) both come from <i lang=\"la\">strictus</i>, <i lang=\"es\">librar</i> (“to free”) and <i lang=\"es\">liberar</i> from <i lang=\"la\">liberare</i>, and <i lang=\"es\">palabra</i> (“word”) and <i lang=\"es\">parábola</i> (“parable”) from <i lang=\"la\">parabola</i>.</p>",
   "qp": {
    "id": "q-es-ety-patrimonial",
    "variants": [
     {
      "prompt": "Which Spanish word is patrimonial?",
      "options": [
       "<i lang=\"es\">digital</i>",
       "<i lang=\"es\">dedo</i>",
       "<i lang=\"es\">festivo</i>",
       "<i lang=\"es\">lácteo</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Dedo</i> comes from <i lang=\"la\">digitus</i> and has changed in sound; the others have kept the Latin form."
     },
     {
      "prompt": "Which Spanish word is a cultismo?",
      "options": [
       "<i lang=\"es\">hierro</i>",
       "<i lang=\"es\">estrecho</i>",
       "<i lang=\"es\">férreo</i>",
       "<i lang=\"es\">leche</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Férreo</i> has kept the form of <i lang=\"la\">ferreus</i>."
     },
     {
      "prompt": "Which pair comes from a single Latin word?",
      "options": [
       "<i lang=\"es\">librar</i> and <i lang=\"es\">liberar</i>",
       "<i lang=\"es\">hierro</i> and <i lang=\"es\">leche</i>",
       "<i lang=\"es\">dedo</i> and <i lang=\"es\">leche</i>",
       "<i lang=\"es\">palabra</i> and <i lang=\"es\">digital</i>"
      ],
      "answer": 0,
      "explain": "Both come from <i lang=\"la\">liberare</i>."
     }
    ]
   }
  },
  {
   "id": "etymology-2",
   "title": "Words from Arabic and Greek",
   "body": "<p>Many Spanish words come from Arabic. The dictionary marks them as coming from the Arabic of Spain (<i lang=\"es\">árabe hispánico</i>), and often from Classical Arabic behind it: <i lang=\"es\">jarabe</i> (“syrup”) and <i lang=\"es\">albañil</i> (“mason”) are examples. A word may have passed through several languages. The dictionary traces <i lang=\"es\">naranja</i> (“orange”) through the Arabic of Spain and Classical Arabic to Persian, and from Persian to Sanskrit.</p><p>Other words come from Greek, usually through Latin, and the dictionary gives both steps. <i lang=\"es\">Cátedra</i> (“professorship”) is from the Latin <i lang=\"la\">cathedra</i>, which is from Greek; <i lang=\"es\">poema</i> (“poem”) is from the Latin <i lang=\"la\">poema</i>, from Greek; and <i lang=\"es\">historia</i> (“history”) is from the Latin <i lang=\"la\">historia</i>, from Greek. These words reached Spanish as learned words, and so they look much like their Latin forms.</p>",
   "qp": {
    "id": "q-es-ety-arabic",
    "variants": [
     {
      "prompt": "From what language does the dictionary derive <i lang=\"es\">jarabe</i>?",
      "options": [
       "Gothic",
       "Taíno",
       "Arabic",
       "Nahuatl"
      ],
      "answer": 2,
      "explain": "The entry gives the Arabic of Spain, and behind it Classical Arabic."
     },
     {
      "prompt": "Through which languages does the dictionary trace <i lang=\"es\">naranja</i>?",
      "options": [
       "Arabic, Persian, and Sanskrit",
       "Latin, Greek, Old French, and Gothic",
       "Gothic and Old French",
       "Taíno and Nahuatl"
      ],
      "answer": 0,
      "explain": "The entry names Arabic, Persian, and Sanskrit."
     },
     {
      "prompt": "How does the dictionary derive <i lang=\"es\">poema</i>?",
      "options": [
       "From Arabic, through Persian",
       "From Greek, through Latin",
       "From Gothic, through French",
       "From Taíno, through Latin"
      ],
      "answer": 1,
      "explain": "The entry gives the Latin word and, behind it, the Greek."
     }
    ]
   }
  },
  {
   "id": "etymology-3",
   "title": "Words from Germanic and American languages",
   "body": "<p>A few Spanish words come from the Germanic languages. <i lang=\"es\">Banco</i> (“bench” and “bank”) is derived from Old French <i lang=\"fr\">bank</i>, which comes from a Germanic word; <i lang=\"es\">sopa</i> (“soup”) comes directly from a Germanic word.</p><p>Spanish also took words from the languages of the Americas. <i lang=\"es\">Tomate</i> (“tomato”) comes from Nahuatl, and <i lang=\"es\">maíz</i> (“corn”) from Taíno. The dictionary names the source language in each entry.</p>",
   "qp": {
    "id": "q-es-ety-germanic",
    "variants": [
     {
      "prompt": "From what kind of language does the dictionary derive <i lang=\"es\">sopa</i>?",
      "options": [
       "Germanic",
       "Semitic",
       "Indo-Iranian",
       "American"
      ],
      "answer": 0,
      "explain": "The entry gives a reconstructed Germanic word."
     },
     {
      "prompt": "From what language does the dictionary derive <i lang=\"es\">tomate</i>?",
      "options": [
       "Taíno",
       "Persian",
       "Nahuatl",
       "Gothic"
      ],
      "answer": 2,
      "explain": "The entry gives Nahuatl."
     },
     {
      "prompt": "From what language does the dictionary derive <i lang=\"es\">maíz</i>?",
      "options": [
       "Taíno",
       "Nahuatl",
       "Arabic",
       "Greek"
      ],
      "answer": 0,
      "explain": "The entry gives Taíno."
     }
    ]
   }
  }
 ]
};
