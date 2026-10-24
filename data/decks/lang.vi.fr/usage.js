window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.fr/usage"] = {
 "id": "lang.vi.fr/usage",
 "title": "Common Errors in French",
 "sub": "The gender of nouns, words that sound alike, and the participle, au, and de",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse",
 "panels": [
  {
   "id": "gender",
   "title": "The gender of nouns",
   "body": "<p>A student who has learned that <i lang=\"fr\">la table</i> and <i lang=\"fr\">la porte</i> are feminine may suppose that every noun in <i lang=\"fr\">-e</i> is feminine, and write <i lang=\"fr\">la silence</i> or <i lang=\"fr\">la modèle</i>. Both are solecisms, because <i lang=\"fr\">silence</i> and <i lang=\"fr\">modèle</i> are masculine: <i lang=\"fr\">le silence</i>, <i lang=\"fr\">le modèle</i>. The ending is only a rough guide. Many nouns in <i lang=\"fr\">-e</i> are masculine (<i lang=\"fr\">le lycée</i>, <i lang=\"fr\">le groupe</i>, <i lang=\"fr\">le domaine</i>), and many nouns in a consonant are feminine (<i lang=\"fr\">la main</i>, <i lang=\"fr\">la fin</i>, <i lang=\"fr\">la peur</i>, beside the masculine <i lang=\"fr\">le bonheur</i>).</p>\n<p>So the gender of a French noun must be learned with the noun, together with its article, as the gender of a Latin noun is learned with its genitive.</p>",
   "qp": {
    "id": "q-fr-vi-gen",
    "variants": [
     {
      "prompt": "What gender is <i lang=\"fr\">groupe</i>?",
      "options": [
       "Masculine",
       "Feminine, because it ends in <i lang=\"fr\">-e</i>",
       "Either, without difference",
       "Neuter"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Le groupe</i>: the ending <i lang=\"fr\">-e</i> does not make a noun feminine."
     },
     {
      "prompt": "What kind of error is <i lang=\"fr\">le main</i>?",
      "options": [
       "A barbarism in <i lang=\"fr\">main</i>",
       "No error",
       "A metaplasm",
       "A solecism of gender"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Main</i> is feminine, so the article is <i lang=\"fr\">la</i>; each word is real."
     },
     {
      "prompt": "How is the gender of a French noun best learned?",
      "options": [
       "From the last letter alone",
       "From the meaning alone",
       "With the noun and its article",
       "From the plural"
      ],
      "answer": 2,
      "explain": "The ending is only a rough guide."
     }
    ]
   }
  },
  {
   "id": "homophones",
   "title": "Words that sound alike",
   "body": "<p>Several pairs of French words sound alike and differ in writing only by an accent or a letter: <i lang=\"fr\">a</i> (“has”) and <i lang=\"fr\">à</i> (“to,” “at”); <i lang=\"fr\">ou</i> (“or”) and <i lang=\"fr\">où</i> (“where”); <i lang=\"fr\">du</i> (“of the,” “some”) and <i lang=\"fr\">dû</i> (“owed,” the participle of <i lang=\"fr\">devoir</i>); <i lang=\"fr\">ce</i> (“this”) and <i lang=\"fr\">se</i> (“himself,” “herself”); <i lang=\"fr\">ces</i> (“these”) and <i lang=\"fr\">ses</i> (“his,” “her”); <i lang=\"fr\">et</i> (“and”) and <i lang=\"fr\">est</i> (“is”). Each member of a pair is a different word.</p>\n<p>Writing one for the other is therefore an error in that word, though the sentence would sound correct when read aloud: <i lang=\"fr\">il et parti</i> for <i lang=\"fr\">il est parti</i> (“he has left”) is a barbarism in writing.</p>",
   "qp": {
    "id": "q-fr-vi-hom",
    "variants": [
     {
      "prompt": "Which word completes <i lang=\"fr\">Il ______ lave les mains</i> (“he washes his hands”)?",
      "options": [
       "<i lang=\"fr\">ce</i>",
       "<i lang=\"fr\">ces</i>",
       "<i lang=\"fr\">se</i>",
       "<i lang=\"fr\">ses</i>"
      ],
      "answer": 2,
      "explain": "The reflexive pronoun is <i lang=\"fr\">se</i>; <i lang=\"fr\">ce</i> means “this.”"
     },
     {
      "prompt": "Which word completes <i lang=\"fr\">Elle a perdu ______ clés</i> (“she has lost her keys”)?",
      "options": [
       "<i lang=\"fr\">ces</i>",
       "<i lang=\"fr\">ses</i>",
       "<i lang=\"fr\">se</i>",
       "<i lang=\"fr\">c’est</i>"
      ],
      "answer": 1,
      "explain": "The possessive is <i lang=\"fr\">ses</i>; <i lang=\"fr\">ces</i> means “these.”"
     },
     {
      "prompt": "What kind of error is <i lang=\"fr\">il et parti</i> for “he has left”?",
      "options": [
       "An error in one word, written for another that sounds alike",
       "A solecism of gender",
       "A metaplasm allowed in prose",
       "No error, since it sounds correct"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Et</i> and <i lang=\"fr\">est</i> are different words; writing one for the other is an error in that word."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle, au, and de",
   "body": "<p><i lang=\"fr\">Les portes que j’ai ouvert</i> (“the doors that I opened”) uses real forms, but the participle does not fit. <i lang=\"fr\">Portes</i> (“doors”) is feminine plural, and <i lang=\"fr\">que</i> stands for that direct object before the verb; with <i lang=\"fr\">avoir</i>, the past participle then agrees with it: <i lang=\"fr\">les portes que j’ai ouvertes</i>. When the direct object follows the verb, the participle does not agree, as in <i lang=\"fr\">j’ai ouvert les portes</i> (“I opened the doors”).</p><p>With <i lang=\"fr\">être</i>, the participle agrees with the subject, so <i lang=\"fr\">elle est arrivé</i> is incorrect, whereas <i lang=\"fr\">elle est arrivée</i> (“she has arrived”) agrees.</p><p><i lang=\"fr\">À le marché</i> is the same kind of error, because <i lang=\"fr\">à</i> and <i lang=\"fr\">le</i> are real words, but before the masculine singular article <i lang=\"fr\">à</i> must contract: <i lang=\"fr\">au marché</i> (“to the market,” or “at the market”). After a negation, and after <i lang=\"fr\">beaucoup</i>, the partitive is <i lang=\"fr\">de</i> alone: <i lang=\"fr\">pas de lait</i> (“no milk”), <i lang=\"fr\">beaucoup de lait</i> (“a lot of milk”), not <i lang=\"fr\">pas du lait</i>. Before an adjective in the plural, <i lang=\"fr\">des</i> likewise becomes <i lang=\"fr\">de</i>: <i lang=\"fr\">de bons livres</i> (“good books”), not <i lang=\"fr\">des bons livres</i>.</p>",
   "qp": {
    "id": "q-participle",
    "variants": [
     {
      "prompt": "Why is the participle <i lang=\"fr\">fermées</i> in <i lang=\"fr\">les fenêtres que j’ai fermées</i>?",
      "options": [
       "Because every participle with <i lang=\"fr\">avoir</i> takes <i lang=\"fr\">-es</i>",
       "A preceding direct object, feminine plural",
       "Because <i lang=\"fr\">fermées</i> agrees with <i lang=\"fr\">je</i>",
       "Because <i lang=\"fr\">que</i> is feminine by itself"
      ],
      "answer": 1,
      "explain": "With <i lang=\"fr\">avoir</i>, the participle agrees with a preceding direct object. <i lang=\"fr\">Fenêtres</i> is feminine plural, as <i lang=\"fr\">portes</i> is in <i lang=\"fr\">les portes que j’ai ouvertes</i>."
     },
     {
      "prompt": "Choose the phrase for “to the teacher.”",
      "options": [
       "<i lang=\"fr\">à le professeur</i>",
       "<i lang=\"fr\">au professeur</i>",
       "<i lang=\"fr\">à les professeur</i>",
       "<i lang=\"fr\">aux professeur</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">À</i> contracts with <i lang=\"fr\">le</i> to <i lang=\"fr\">au</i>, as <i lang=\"fr\">au marché</i> replaces <i lang=\"fr\">à le marché</i>. <i lang=\"fr\">Professeur</i> is masculine singular."
     },
     {
      "prompt": "Why is the phrase <i lang=\"fr\">pas de vin</i>, not <i lang=\"fr\">pas du vin</i>?",
      "options": [
       "Because <i lang=\"fr\">vin</i> is feminine",
       "Negation takes <i lang=\"fr\">de</i> alone",
       "Because <i lang=\"fr\">pas</i> is a preposition that takes <i lang=\"fr\">au</i>",
       "Because <i lang=\"fr\">vin</i> is plural"
      ],
      "answer": 1,
      "explain": "After a negation the partitive is <i lang=\"fr\">de</i> alone, as in <i lang=\"fr\">pas de lait</i>. <i lang=\"fr\">Du vin</i> is the partitive in an affirmative phrase such as <i lang=\"fr\">il boit du vin</i>."
     }
    ]
   }
  }
 ]
};
