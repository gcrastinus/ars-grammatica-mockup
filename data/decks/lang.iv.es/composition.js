window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.es/composition"] = {
 "id": "lang.iv.es/composition",
 "title": "Compounds, Parasynthesis, and Learned Elements",
 "sub": "What a compound is, verb and noun compounds, parasynthetic verbs, and the Greek and Latin elements of Spanish words.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 1.3, 8.2, 8.3, and 11; Real Academia Española, <i lang=\"es\">Diccionario de la lengua española</i>, 23rd ed. (2014); Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "composition-1",
   "title": "What a compound is",
   "body": "<p>The words <i lang=\"es\">sabelotodo</i> (“know-it-all”), <i lang=\"es\">sacapuntas</i> (“pencil sharpener”), <i lang=\"es\">limpiacristales</i> (“window cleaner”), and <i lang=\"es\">verdiblanco</i> (“green and white”) are each made of two or more words that have joined to form one. Such a word is a <strong>compound</strong> (<i lang=\"es\">compuesto</i>). The Academy gives a simple test: a compound has more than one root in it, whereas a derived word has one root and its affixes. Among the words built on <i lang=\"es\">alt-</i>, <i lang=\"es\">altura</i> and <i lang=\"es\">alteza</i> are derived, but <i lang=\"es\">altiplano</i> (“high plateau”) is a compound. Most compounds are written as one word, but some are written apart, like <i lang=\"es\">hombre lobo</i> (“werewolf”), and the Academy calls these syntagmatic compounds.</p><p>Compounds are classed by the parts of speech that make them. Two nouns give <i lang=\"es\">telaraña</i> (“cobweb,” from <i lang=\"es\">tela</i>, “cloth,” and <i lang=\"es\">araña</i>, “spider”) and <i lang=\"es\">bocacalle</i> (“street entrance”); two adjectives give <i lang=\"es\">agridulce</i> (“bittersweet”) and <i lang=\"es\">rojinegro</i> (“red and black”); a noun and an adjective give <i lang=\"es\">camposanto</i> (“cemetery”) and <i lang=\"es\">medialuna</i> (“half moon”). Latin also has compounds in which the first part modifies the second, <i lang=\"la\">lāti-fundium</i>, “large estate,” and <i lang=\"la\">omni-potens</i>.</p>",
   "qp": {
    "id": "q-es-comp-what",
    "variants": [
     {
      "prompt": "Which of these words built on <i lang=\"es\">alt-</i> is a compound?",
      "options": [
       "<i lang=\"es\">altura</i>",
       "<i lang=\"es\">altiplano</i>",
       "<i lang=\"es\">alteza</i>",
       "<i lang=\"es\">altitud</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Altiplano</i> contains two roots, <i lang=\"es\">alt-</i> and <i lang=\"es\">plan-</i>; the others have one root and a suffix."
     },
     {
      "prompt": "What is <i lang=\"es\">sordomudo</i> (“deaf-mute”) made of?",
      "options": [
       "Two nouns",
       "A noun and an adjective",
       "A verb and a noun",
       "Two adjectives"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Sordo</i> and <i lang=\"es\">mudo</i> are adjectives."
     },
     {
      "prompt": "What does the Academy call a compound that is written as two words, like <i lang=\"es\">hombre lobo</i>?",
      "options": [
       "A parasynthetic compound",
       "A syntagmatic compound",
       "A learned compound",
       "A prefixed word"
      ],
      "answer": 1,
      "explain": "The two parts keep their own written form."
     }
    ]
   }
  },
  {
   "id": "composition-2",
   "title": "Verb and noun compounds",
   "body": "<p>The commonest kind of compound in Spanish joins a verb to a noun that is its object, and it is a noun that names an instrument or a person: <i lang=\"es\">sacapuntas</i>, <i lang=\"es\">rompeolas</i> (“breakwater”), <i lang=\"es\">abrebotellas</i> (“bottle opener”), <i lang=\"es\">cuentagotas</i> (“dropper”). The verb shows the thematic vowel of the present indicative, as in <i lang=\"es\">saca-</i> and <i lang=\"es\">rompe-</i>. The compound is a noun in its own right, and so its number and gender do not depend on the noun inside it: <i lang=\"es\">el limpiabotas</i> is the same in the singular and in the plural, <i lang=\"es\">los limpiabotas</i>, and <i lang=\"es\">portavoz</i> (“spokesperson”) is masculine or feminine. If the noun inside is countable it is usually plural, <i lang=\"es\">sacapuntas</i>; if it is not countable it is singular, <i lang=\"es\">tragaluz</i> (“skylight”).</p><p>Many of these compounds name tools and devices; some name persons, and then they are often scornful, as <i lang=\"es\">aguafiestas</i> (“killjoy”). Latin has compounds of the same meaning, but their parts are in the opposite order: the object comes first and the verbal element second, as in <i lang=\"la\">agri-cola</i>, “field-tiller,” and <i lang=\"la\">armi-ger</i>, “armor-bearer.”</p>",
   "qp": {
    "id": "q-es-comp-vn",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"es\">el salvavidas</i> (“life preserver”)?",
      "options": [
       "<i lang=\"es\">los salvavidases</i>",
       "<i lang=\"es\">los salvavidas</i>",
       "<i lang=\"es\">los salvasvidas</i>",
       "<i lang=\"es\">las salvavidas</i>"
      ],
      "answer": 1,
      "explain": "The compound keeps its form in the plural."
     },
     {
      "prompt": "Which compound names a person?",
      "options": [
       "<i lang=\"es\">matamoscas</i>",
       "<i lang=\"es\">quitamanchas</i>",
       "<i lang=\"es\">aguafiestas</i>",
       "<i lang=\"es\">salvavidas</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Aguafiestas</i> names a person who spoils a celebration; the others name things."
     },
     {
      "prompt": "In <i lang=\"es\">cortapuros</i>, what is the noun <i lang=\"es\">puros</i>?",
      "options": [
       "The object of the verb <i lang=\"es\">cortar</i>",
       "The subject of the verb <i lang=\"es\">cortar</i>",
       "A place where it is cut",
       "The instrument with which it is cut"
      ],
      "answer": 0,
      "explain": "The noun is the thing that is cut: the object of the verb."
     }
    ]
   }
  },
  {
   "id": "composition-3",
   "title": "Parasynthesis and learned elements",
   "body": "<p>Some verbs are formed by adding a prefix and a suffix at the same time. <i lang=\"es\">Atontar</i> is formed on <i lang=\"es\">tonto</i> with <i lang=\"es\">a-</i> and <i lang=\"es\">-ar</i>, and <i lang=\"es\">ensombrecer</i> (“to darken”) on <i lang=\"es\">sombra</i> with <i lang=\"es\">en-</i> and <i lang=\"es\">-ecer</i>. The Academy calls this parasynthesis, and the test is that the base does not form a word with the prefix alone or with the suffix alone: there is no <i lang=\"es\">atonto</i> and no <i lang=\"es\">tontar</i>, no <i lang=\"es\">ensombra</i> and no <i lang=\"es\">sombrecer</i>. A verb in which a prefix is added to an existing verb is only prefixed: <i lang=\"es\">reconsiderar</i> comes from <i lang=\"es\">considerar</i>. The commonest patterns use <i lang=\"es\">a-</i> and <i lang=\"es\">en-</i>: <i lang=\"es\">aclarar</i> (from <i lang=\"es\">claro</i>), <i lang=\"es\">acercar</i> (from <i lang=\"es\">cerca</i>), <i lang=\"es\">abotonar</i> (from <i lang=\"es\">botón</i>), <i lang=\"es\">entristecer</i> (from <i lang=\"es\">triste</i>), <i lang=\"es\">embotellar</i> (from <i lang=\"es\">botella</i>). The Academy also uses the word in an older and wider sense, for a formation that takes part in derivation and in composition, such as <i lang=\"es\">centrocampista</i>.</p><p>Spanish also builds words from elements of Greek and Latin origin, which the Academy calls learned compositional bases. They stand between an affix and a word, and they may join native Spanish words: <i lang=\"es\">biblio-</i> (“book”), <i lang=\"es\">-teca</i> (“place where something is kept”), <i lang=\"es\">foto-</i> (“light”), <i lang=\"es\">geo-</i> (“earth”), <i lang=\"es\">crono-</i> (“time”), <i lang=\"es\">-grafo</i> (“one who writes”), <i lang=\"es\">-fobo</i> (“one who feels repulsion”), <i lang=\"es\">-algia</i> (“pain”). So <i lang=\"es\">bolígrafo</i> (“ballpoint pen”) is formed with <i lang=\"es\">-grafo</i>. The dictionary derives <i lang=\"es\">biblioteca</i> from the Latin <i lang=\"la\">bibliotheca</i>, and this from Greek.</p>",
   "qp": {
    "id": "q-es-comp-parasynthesis",
    "variants": [
     {
      "prompt": "Why is <i lang=\"es\">desenterrar</i> (“to dig up”) not parasynthetic?",
      "options": [
       "The verb <i lang=\"es\">enterrar</i> exists",
       "It has no suffix",
       "It is a compound of two verbs",
       "Its base is an adjective"
      ],
      "answer": 0,
      "explain": "The prefix is added to an existing verb."
     },
     {
      "prompt": "Which verb is parasynthetic?",
      "options": [
       "<i lang=\"es\">reconsiderar</i>",
       "<i lang=\"es\">rehacer</i>",
       "<i lang=\"es\">desenterrar</i>",
       "<i lang=\"es\">encolerizar</i>"
      ],
      "answer": 3,
      "explain": "There is no <i lang=\"es\">encoleriza</i> and no <i lang=\"es\">colerizar</i>; the prefix <i lang=\"es\">en-</i> and the suffix <i lang=\"es\">-izar</i> are added to <i lang=\"es\">cólera</i> together."
     },
     {
      "prompt": "Which learned element means “book”?",
      "options": [
       "<i lang=\"es\">gastro-</i>",
       "<i lang=\"es\">foto-</i>",
       "<i lang=\"es\">crono-</i>",
       "<i lang=\"es\">biblio-</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Biblio-</i> is the first element of <i lang=\"es\">biblioteca</i>."
     }
    ]
   }
  }
 ]
};
