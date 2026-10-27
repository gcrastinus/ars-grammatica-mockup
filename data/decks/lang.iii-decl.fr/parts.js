window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/parts"] = {
 "id": "lang.iii-decl.fr/parts",
 "title": "Variable and Invariable Words in French",
 "sub": "The parts of speech of the French school grammar, set beside the eight of Donatus",
 "sources": "Lawless; Larousse; Le Conjugueur; Maurice Grevisse, <i>Le Bon Usage</i>; Donatus, <i>Ars minor</i> and <i>Ars maior</i> (Keil, <i>Grammatici Latini</i> IV); Servius, commentary on Donatus (the same volume)",
 "panels": [
  {
   "id": "classes",
   "title": "The classes of words",
   "body": "<p>In <i lang=\"fr\">le petit garçon chante bien</i> (“the little boy sings well”), the words <i lang=\"fr\">le</i>, <i lang=\"fr\">petit</i>, <i lang=\"fr\">garçon</i>, and <i lang=\"fr\">chante</i> change their form with gender, number, or person (<i lang=\"fr\">la petite fille</i>, <i lang=\"fr\">les petits garçons chantent</i>), whereas <i lang=\"fr\">bien</i> never changes. French school grammars divide the words of the language in just this way, into <strong>variable words</strong> (<i lang=\"fr\">mots variables</i>), which change their form, and <strong>invariable words</strong> (<i lang=\"fr\">mots invariables</i>), which do not. Latin grammar draws a similar line among the eight parts of speech. Donatus says that, of the eight, three are inflected by the six cases, the noun, the pronoun, and the participle (<i>Ars maior</i> II), and a late ancient commentary on Donatus adds that the verb is inflected by tenses and that the other four parts are not inflected (Servius, commentary on the <i>Ars</i> of Donatus, in Keil, <i>Grammatici Latini</i> IV, p. 428).</p>\n<p>The French grammars usually count nine classes: five variable, the noun (<i lang=\"fr\">nom</i>), the determiner (<i lang=\"fr\">déterminant</i>, which includes the article), the adjective (<i lang=\"fr\">adjectif</i>), the pronoun (<i lang=\"fr\">pronom</i>), and the verb (<i lang=\"fr\">verbe</i>); and four invariable, the adverb (<i lang=\"fr\">adverbe</i>), the preposition (<i lang=\"fr\">préposition</i>), the conjunction (<i lang=\"fr\">conjonction</i>), and the interjection (<i lang=\"fr\">interjection</i>).</p>",
   "qp": {
    "id": "q-fr-classes",
    "variants": [
     {
      "prompt": "Which French word is invariable?",
      "options": [
       "<i lang=\"fr\">grande</i> (“tall”)",
       "<i lang=\"fr\">chantent</i> (“they sing”)",
       "<i lang=\"fr\">souvent</i> (“often”)",
       "<i lang=\"fr\">les</i> (“the”)"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Souvent</i> is an adverb and never changes its form; the others are an adjective, a verb, and an article, all variable."
     },
     {
      "prompt": "What do the French grammars call the class that includes the article?",
      "options": [
       "The pronoun",
       "The determiner",
       "The adjective",
       "The interjection"
      ],
      "answer": 1,
      "explain": "The French school grammar puts the article with the possessive and demonstrative determiners in one variable class, the <i lang=\"fr\">déterminant</i>."
     },
     {
      "prompt": "Which four of Donatus’s eight parts of speech are not inflected, as the French invariable words are not?",
      "options": [
       "The adverb, preposition, conjunction, and interjection",
       "The noun, pronoun, verb, and participle",
       "The noun, verb, adverb, and conjunction",
       "The pronoun, participle, preposition, and interjection"
      ],
      "answer": 0,
      "explain": "The adverb, preposition, conjunction, and interjection are not inflected in Latin, as the French invariable words are not; the noun, pronoun, verb, and participle are inflected, by case or by tense."
     }
    ]
   }
  },
  {
   "id": "compared",
   "title": "The French list and the Latin list",
   "body": "<p>Set beside the eight parts of Donatus, the French list differs in three places. First, French has the article, which Latin lacks, and counts it among the determiners. Second, the French grammars count the adjective as a class of its own, whereas Donatus counts it under the noun. Third, they have no separate participle: the participle is a form of the verb (<i lang=\"fr\">parlant</i>, <i lang=\"fr\">parlé</i>), as in the modern grammars of English and German. So the French list has nine classes where Donatus has eight, but the words of the two languages are divided by the same principle, the way each word is used and whether it changes its form.</p>",
   "qp": {
    "id": "q-fr-compared",
    "variants": [
     {
      "prompt": "Where does the French school grammar put the participle <i lang=\"fr\">parlé</i>?",
      "options": [
       "As a part of its own",
       "Under the adjective",
       "Under the determiner",
       "Under the verb"
      ],
      "answer": 3,
      "explain": "The modern French grammars count the participle as a form of the verb; Donatus makes it a part of its own."
     },
     {
      "prompt": "Which class does French have that Latin lacks?",
      "options": [
       "The article, among the determiners",
       "The interjection",
       "The preposition",
       "The pronoun"
      ],
      "answer": 0,
      "explain": "Latin has no article, so Donatus has no place for it."
     },
     {
      "prompt": "How does the French list treat the adjective?",
      "options": [
       "Under the noun, as Donatus does",
       "As a class of its own",
       "Under the verb",
       "Among the invariable words"
      ],
      "answer": 1,
      "explain": "French grammars count the adjective as a separate variable class; Donatus files it under the noun."
     }
    ]
   }
  }
 ]
};
