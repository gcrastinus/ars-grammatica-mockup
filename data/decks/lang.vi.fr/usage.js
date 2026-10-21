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
   "body": "<p>A student who has learned that <i>la table</i> and <i>la porte</i> are feminine may suppose that every noun in <i>-e</i> is feminine, and write <i>la silence</i> or <i>la modèle</i>. Both are solecisms, because <i>silence</i> and <i>modèle</i> are masculine: <i>le silence</i>, <i>le modèle</i>. The ending is only a rough guide. Many nouns in <i>-e</i> are masculine (<i>le lycée</i>, <i>le groupe</i>, <i>le domaine</i>), and many nouns in a consonant are feminine (<i>la main</i>, <i>la fin</i>, <i>la peur</i>, beside the masculine <i>le bonheur</i>).</p>\n<p>So the gender of a French noun must be learned with the noun, together with its article, as the gender of a Latin noun is learned with its genitive.</p>",
   "qp": {
    "id": "q-fr-vi-gen",
    "variants": [
     {
      "prompt": "What gender is <i>groupe</i>?",
      "options": [
       "Masculine",
       "Feminine, because it ends in <i>-e</i>",
       "Either, without difference",
       "Neuter"
      ],
      "answer": 0,
      "explain": "<i>Le groupe</i>: the ending <i>-e</i> does not make a noun feminine."
     },
     {
      "prompt": "What kind of error is <i>le main</i>?",
      "options": [
       "A barbarism in <i>main</i>",
       "No error",
       "A metaplasm",
       "A solecism of gender"
      ],
      "answer": 3,
      "explain": "<i>Main</i> is feminine, so the article is <i>la</i>; each word is real."
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
   "body": "<p>Several pairs of French words sound alike and differ in writing only by an accent or a letter: <i>a</i> (“has”) and <i>à</i> (“to,” “at”); <i>ou</i> (“or”) and <i>où</i> (“where”); <i>du</i> (“of the,” “some”) and <i>dû</i> (“owed,” the participle of <i>devoir</i>); <i>ce</i> (“this”) and <i>se</i> (“himself,” “herself”); <i>ces</i> (“these”) and <i>ses</i> (“his,” “her”); <i>et</i> (“and”) and <i>est</i> (“is”). Each member of a pair is a different word.</p>\n<p>Writing one for the other is therefore an error in that word, though the sentence would sound correct when read aloud: <i>il et parti</i> for <i>il est parti</i> (“he has left”) is a barbarism in writing.</p>",
   "qp": {
    "id": "q-fr-vi-hom",
    "variants": [
     {
      "prompt": "Which word completes <i>Il ______ lave les mains</i> (“he washes his hands”)?",
      "options": [
       "<i>ce</i>",
       "<i>ces</i>",
       "<i>se</i>",
       "<i>ses</i>"
      ],
      "answer": 2,
      "explain": "The reflexive pronoun is <i>se</i>; <i>ce</i> means “this.”"
     },
     {
      "prompt": "Which word completes <i>Elle a perdu ______ clés</i> (“she has lost her keys”)?",
      "options": [
       "<i>ces</i>",
       "<i>ses</i>",
       "<i>se</i>",
       "<i>c’est</i>"
      ],
      "answer": 1,
      "explain": "The possessive is <i>ses</i>; <i>ces</i> means “these.”"
     },
     {
      "prompt": "What kind of error is <i>il et parti</i> for “he has left”?",
      "options": [
       "An error in one word, written for another that sounds alike",
       "A solecism of gender",
       "A metaplasm allowed in prose",
       "No error, since it sounds correct"
      ],
      "answer": 0,
      "explain": "<i>Et</i> and <i>est</i> are different words; writing one for the other is an error in that word."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle, au, and de",
   "body": "<p><i>Les portes que j’ai ouvert</i> (“the doors that I opened”) uses real forms, but the participle does not fit. <i>Portes</i> (“doors”) is feminine plural, and <i>que</i> stands for that direct object before the verb; with <i>avoir</i>, the past participle then agrees with it: <i>les portes que j’ai ouvertes</i>. When the direct object follows the verb, the participle does not agree, as in <i>j’ai ouvert les portes</i> (“I opened the doors”).</p><p>With <i>être</i>, the participle agrees with the subject, so <i>elle est arrivé</i> is incorrect, whereas <i>elle est arrivée</i> (“she has arrived”) agrees.</p><p><i>À le marché</i> is the same kind of error, because <i>à</i> and <i>le</i> are real words, but before the masculine singular article <i>à</i> must contract: <i>au marché</i> (“to the market,” or “at the market”). After a negation, and after <i>beaucoup</i>, the partitive is <i>de</i> alone: <i>pas de lait</i> (“no milk”), <i>beaucoup de lait</i> (“a lot of milk”), not <i>pas du lait</i>. Before an adjective in the plural, <i>des</i> likewise becomes <i>de</i>: <i>de bons livres</i> (“good books”), not <i>des bons livres</i>.</p>",
   "qp": {
    "id": "q-participle",
    "variants": [
     {
      "prompt": "Why is the participle <i>fermées</i> in <i>les fenêtres que j’ai fermées</i>?",
      "options": [
       "Because every participle with <i>avoir</i> takes <i>-es</i>",
       "A preceding direct object, feminine plural",
       "Because <i>fermées</i> agrees with <i>je</i>",
       "Because <i>que</i> is feminine by itself"
      ],
      "answer": 1,
      "explain": "With <i>avoir</i>, the participle agrees with a preceding direct object. <i>Fenêtres</i> is feminine plural, as <i>portes</i> is in <i>les portes que j’ai ouvertes</i>."
     },
     {
      "prompt": "Choose the phrase for “to the teacher.”",
      "options": [
       "<i>à le professeur</i>",
       "<i>au professeur</i>",
       "<i>à les professeur</i>",
       "<i>aux professeur</i>"
      ],
      "answer": 1,
      "explain": "<i>À</i> contracts with <i>le</i> to <i>au</i>, as <i>au marché</i> replaces <i>à le marché</i>. <i>Professeur</i> is masculine singular."
     },
     {
      "prompt": "Why is the phrase <i>pas de vin</i>, not <i>pas du vin</i>?",
      "options": [
       "Because <i>vin</i> is feminine",
       "Negation takes <i>de</i> alone",
       "Because <i>pas</i> is a preposition that takes <i>au</i>",
       "Because <i>vin</i> is plural"
      ],
      "answer": 1,
      "explain": "After a negation the partitive is <i>de</i> alone, as in <i>pas de lait</i>. <i>Du vin</i> is the partitive in an affirmative phrase such as <i>il boit du vin</i>."
     }
    ]
   }
  }
 ]
};
