window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/accidents"] = {
 "id": "lang.iii-decl.fr/accidents",
 "title": "The Accidents of French Compared to Latin",
 "sub": "The accidents of modern French: what it has, and where it differs from Latin.",
 "sources": "Lawless; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "accidents-1",
   "title": "Modern French",
   "body": "<p>French grew out of the Latin spoken in Gaul, and it has changed over the centuries and is spoken in several regional forms, so the same word can have different forms in an old text, in a dialect, and in a newspaper. The forms given here are those of modern standard written French, the French taught in the schools and set out in the dictionaries. We compare them with the Latin forms we have studied, and we leave aside Old French and the regional dialects.</p>"
  },
  {
   "id": "accidents-2",
   "title": "The forms of the article",
   "body": "<p>The French article shows the gender and number of the noun it stands with. The definite article is <i lang=\"fr\">le</i> before a masculine singular noun, <i lang=\"fr\">la</i> before a feminine singular noun, and <i lang=\"fr\">les</i> before a plural noun; before a vowel or a mute <i lang=\"fr\">h</i> (an <i lang=\"fr\">h</i> that is not pronounced), <i lang=\"fr\">le</i> and <i lang=\"fr\">la</i> become <i lang=\"fr\">l’</i>. The indefinite article is <i lang=\"fr\">un</i>, <i lang=\"fr\">une</i>, and, in the plural, <i lang=\"fr\">des</i>. The <strong>partitive</strong> article, used for an unspecified amount (“some”), is <i lang=\"fr\">du</i>, <i lang=\"fr\">de la</i>, <i lang=\"fr\">de l’</i>, and <i lang=\"fr\">des</i>.</p>\n<p>The prepositions <i lang=\"fr\">à</i> (“to”) and <i lang=\"fr\">de</i> (“of,” “from”) contract with <i lang=\"fr\">le</i> and <i lang=\"fr\">les</i>: <i lang=\"fr\">à</i> with <i lang=\"fr\">le</i> becomes <i lang=\"fr\">au</i>, and with <i lang=\"fr\">les</i> becomes <i lang=\"fr\">aux</i>; <i lang=\"fr\">de</i> with <i lang=\"fr\">le</i> becomes <i lang=\"fr\">du</i>, and with <i lang=\"fr\">les</i> becomes <i lang=\"fr\">des</i>. But <i lang=\"fr\">à la</i>, <i lang=\"fr\">à l’</i>, <i lang=\"fr\">de la</i>, and <i lang=\"fr\">de l’</i> remain two words.</p>",
   "qp": {
    "id": "q-fr-acc-article",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"fr\">___ arbre</i> (“the tree”).",
      "options": [
       "<i lang=\"fr\">l’</i>",
       "<i lang=\"fr\">le</i>",
       "<i lang=\"fr\">la</i>",
       "<i lang=\"fr\">les</i>"
      ],
      "answer": 0,
      "explain": "Before a vowel, <i lang=\"fr\">le</i> and <i lang=\"fr\">la</i> become <i lang=\"fr\">l’</i>."
     },
     {
      "prompt": "What is <i lang=\"fr\">à</i> with <i lang=\"fr\">les</i>?",
      "options": [
       "<i lang=\"fr\">à les</i>",
       "<i lang=\"fr\">des</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">aux</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">À</i> contracts with <i lang=\"fr\">les</i> to <i lang=\"fr\">aux</i>, and with <i lang=\"fr\">le</i> to <i lang=\"fr\">au</i>."
     },
     {
      "prompt": "Choose the partitive: <i lang=\"fr\">Il boit ___ lait</i> (“He drinks some milk”).",
      "options": [
       "<i lang=\"fr\">de la</i>",
       "<i lang=\"fr\">des</i>",
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">le</i>"
      ],
      "answer": 2,
      "explain": "The partitive with a masculine singular noun is <i lang=\"fr\">du</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-3",
   "title": "Gender",
   "body": "<p>Latin has three genders, whereas French has two: every French noun is masculine or feminine, and French has no neuter. The article shows the gender: <i lang=\"fr\">le livre</i> (“the book”) is masculine, and <i lang=\"fr\">la table</i> (“the table”) is feminine. The ending does not always show the gender, because <i lang=\"fr\">livre</i> and <i lang=\"fr\">victoire</i> (“victory”) both end in <i lang=\"fr\">-e</i>, but the first is masculine and the second feminine.</p>",
   "qp": {
    "id": "q-fr-acc-gender",
    "variants": [
     {
      "prompt": "How many genders has French?",
      "options": [
       "Three",
       "One",
       "Four",
       "Two"
      ],
      "answer": 3,
      "explain": "French has the masculine and the feminine, and no neuter."
     },
     {
      "prompt": "What shows the gender of <i lang=\"fr\">le musée</i> (“the museum”)?",
      "options": [
       "The article <i lang=\"fr\">le</i>",
       "The ending <i lang=\"fr\">-ée</i>",
       "The accent on <i lang=\"fr\">é</i>",
       "Nothing in the phrase"
      ],
      "answer": 0,
      "explain": "The article shows the gender; the ending <i lang=\"fr\">-ée</i> would suggest a feminine, but <i lang=\"fr\">musée</i> is masculine."
     },
     {
      "prompt": "What became of the Latin neuter in French?",
      "options": [
       "It became the French feminine",
       "It disappeared; French nouns are masculine or feminine",
       "It is kept in the article <i lang=\"fr\">les</i>",
       "It is kept in nouns in <i lang=\"fr\">-um</i>"
      ],
      "answer": 1,
      "explain": "French has no neuter: the Latin neuters became masculine for the most part."
     }
    ]
   }
  },
  {
   "id": "accidents-4",
   "title": "Number",
   "body": "<p>A French noun has two numbers, the singular and the plural, as a Latin noun has. A regular plural adds <i lang=\"fr\">-s</i>, and that <i lang=\"fr\">-s</i> is usually silent, so in speech the singular and the plural of many nouns sound alike. Some plurals change the ending: the plural of <i lang=\"fr\">cheval</i> (“horse”) is <i lang=\"fr\">chevaux</i>, and the plural of <i lang=\"fr\">cadeau</i> (“gift”) is <i lang=\"fr\">cadeaux</i>. The article marks number as well, because <i lang=\"fr\">les</i> is plural, whereas <i lang=\"fr\">le</i> and <i lang=\"fr\">la</i> are singular; and since the <i lang=\"fr\">-s</i> is silent, the article is often the only spoken sign of the plural.</p>",
   "qp": {
    "id": "q-fr-acc-number",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"fr\">animal</i>?",
      "options": [
       "<i lang=\"fr\">animals</i>",
       "<i lang=\"fr\">animales</i>",
       "<i lang=\"fr\">animau</i>",
       "<i lang=\"fr\">animaux</i>"
      ],
      "answer": 3,
      "explain": "Most nouns in <i lang=\"fr\">-al</i> have the plural in <i lang=\"fr\">-aux</i>."
     },
     {
      "prompt": "Why is the article often the only spoken sign of the plural?",
      "options": [
       "The plural <i lang=\"fr\">-s</i> is usually silent",
       "French nouns have no plural",
       "The article is always stressed",
       "The plural changes the vowel"
      ],
      "answer": 0,
      "explain": "In <i lang=\"fr\">la porte</i>, <i lang=\"fr\">les portes</i>, only the article sounds different."
     },
     {
      "prompt": "What is the plural of <i lang=\"fr\">bateau</i>?",
      "options": [
       "<i lang=\"fr\">bateaus</i>",
       "<i lang=\"fr\">bateaux</i>",
       "<i lang=\"fr\">bateals</i>",
       "<i lang=\"fr\">bateaues</i>"
      ],
      "answer": 1,
      "explain": "A noun in <i lang=\"fr\">-eau</i> takes <i lang=\"fr\">-x</i> in the plural."
     }
    ]
   }
  },
  {
   "id": "accidents-5",
   "title": "No case on the noun",
   "body": "<p>Latin marks the nominative, the genitive, the dative, the accusative, the ablative, and the vocative on the noun, whereas a French noun does not change for case. French keeps one form of the noun for the subject, for the object, and for the object of a preposition: in <i lang=\"fr\">le roi vend le cheval</i> (“the king sells the horse”), each noun has the form it would have anywhere else in the sentence. What Latin marks by case, French marks by the order of the words and by prepositions, and, in the pronoun, by a change of form.</p>",
   "qp": {
    "id": "q-fr-acc-case",
    "variants": [
     {
      "prompt": "How does French show that <i lang=\"fr\">le chat</i> is the object in <i lang=\"fr\">le chien poursuit le chat</i>?",
      "options": [
       "By a case ending",
       "By the article",
       "By its place after the verb",
       "By a preposition"
      ],
      "answer": 2,
      "explain": "A French noun does not change for case; the order of the words shows the use."
     },
     {
      "prompt": "Where has French kept a difference of form for case?",
      "options": [
       "In the noun",
       "In the pronoun",
       "In the adjective",
       "In the article"
      ],
      "answer": 1,
      "explain": "The pronoun has subject, object, and stressed forms; the noun has one form."
     },
     {
      "prompt": "What does French use where Latin uses the dative <i lang=\"fr\">puerō</i>?",
      "options": [
       "The preposition <i lang=\"fr\">à</i>: <i lang=\"fr\">au garçon</i>",
       "A dative ending on <i lang=\"fr\">garçon</i>",
       "The preposition <i lang=\"fr\">de</i>",
       "The order of the words alone"
      ],
      "answer": 0,
      "explain": "French marks the indirect object with <i lang=\"fr\">à</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-6",
   "title": "Adjective agreement",
   "body": "<p>A French adjective agrees with its noun in gender and number, but not in case, because the noun has no case. So <i lang=\"fr\">un bon roi</i> (“a good king”) is masculine singular, <i lang=\"fr\">une bonne mère</i> (“a good mother”) feminine singular, <i lang=\"fr\">les bons rois</i> masculine plural, and <i lang=\"fr\">les bonnes mères</i> feminine plural. <i lang=\"fr\">Bon</i> adds <i lang=\"fr\">-e</i> for the feminine and <i lang=\"fr\">-s</i> for the plural, and in the feminine it also doubles the <i lang=\"fr\">n</i>, so the form is <i lang=\"fr\">bonne</i>. A short adjective such as <i lang=\"fr\">bon</i>, <i lang=\"fr\">petit</i> (“small”), or <i lang=\"fr\">grand</i> (“large”) usually stands before the noun, whereas most other adjectives follow it.</p>",
   "qp": {
    "id": "q-fr-acc-adjective",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">les ___ amies</i> (“the good friends,” feminine).",
      "options": [
       "<i lang=\"fr\">bons</i>",
       "<i lang=\"fr\">bonnes</i>",
       "<i lang=\"fr\">bonne</i>",
       "<i lang=\"fr\">bon</i>"
      ],
      "answer": 1,
      "explain": "The adjective agrees with <i lang=\"fr\">amies</i>, feminine plural; <i lang=\"fr\">bon</i> doubles its <i lang=\"fr\">n</i> in the feminine."
     },
     {
      "prompt": "In what does a French adjective agree with its noun?",
      "options": [
       "Gender, number, and case",
       "Case only",
       "Gender and number",
       "Number only"
      ],
      "answer": 2,
      "explain": "The French noun has no case, so the adjective agrees in gender and number."
     },
     {
      "prompt": "Where does a short adjective such as <i lang=\"fr\">petit</i> usually stand?",
      "options": [
       "After the noun",
       "After the verb",
       "At the end of the sentence",
       "Before the noun"
      ],
      "answer": 3,
      "explain": "A few short adjectives (<i lang=\"fr\">bon</i>, <i lang=\"fr\">petit</i>, <i lang=\"fr\">grand</i>) usually stand before the noun."
     }
    ]
   }
  },
  {
   "id": "accidents-7",
   "title": "Subject, object, and stressed pronouns",
   "body": "<p>The French pronoun keeps a difference of form that the noun has lost. The subject forms are <i lang=\"fr\">je</i>, <i lang=\"fr\">tu</i>, <i lang=\"fr\">il</i>, <i lang=\"fr\">elle</i>, <i lang=\"fr\">on</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, <i lang=\"fr\">ils</i>, and <i lang=\"fr\">elles</i>. The direct-object forms are <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">le</i>, <i lang=\"fr\">la</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, and <i lang=\"fr\">les</i>. The indirect-object forms are <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">lui</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, and <i lang=\"fr\">leur</i>. The stressed forms, also called disjunctive, are <i lang=\"fr\">moi</i>, <i lang=\"fr\">toi</i>, <i lang=\"fr\">lui</i>, <i lang=\"fr\">elle</i>, <i lang=\"fr\">soi</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, <i lang=\"fr\">eux</i>, and <i lang=\"fr\">elles</i>. So <i lang=\"fr\">je</i> (“I”) is the subject of the verb, <i lang=\"fr\">me</i> (“me”) its object, and <i lang=\"fr\">moi</i> stands where the pronoun is stressed, above all after a preposition, as in <i lang=\"fr\">avec moi</i> (“with me”). <i lang=\"fr\">Nous</i> and <i lang=\"fr\">vous</i> have one form in all four uses, and so their place in the sentence shows the use.</p>",
   "qp": {
    "id": "q-fr-acc-pronouns",
    "variants": [
     {
      "prompt": "Choose the pronoun: <i lang=\"fr\">Il part avec ___</i> (“He is leaving with us”).",
      "options": [
       "<i lang=\"fr\">notre</i>",
       "<i lang=\"fr\">nos</i>",
       "<i lang=\"fr\">nous</i>",
       "<i lang=\"fr\">leur</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Nous</i> has one form in all four uses."
     },
     {
      "prompt": "Choose the pronoun: <i lang=\"fr\">Je ___ écris</i> (“I write to him”).",
      "options": [
       "<i lang=\"fr\">le</i>",
       "<i lang=\"fr\">lui</i>",
       "<i lang=\"fr\">il</i>",
       "<i lang=\"fr\">leur</i>"
      ],
      "answer": 1,
      "explain": "The indirect-object form of the third person singular is <i lang=\"fr\">lui</i>."
     },
     {
      "prompt": "Which form is used after a preposition?",
      "options": [
       "The stressed form, as <i lang=\"fr\">moi</i>",
       "The subject form, as <i lang=\"fr\">je</i>",
       "The direct-object form, as <i lang=\"fr\">me</i>",
       "The indirect-object form, as <i lang=\"fr\">me</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Avec moi</i>, <i lang=\"fr\">pour toi</i>: after a preposition, the stressed form."
     }
    ]
   }
  },
  {
   "id": "accidents-8",
   "title": "Person and number",
   "body": "<p>Latin often leaves out the subject pronoun, because the ending of the verb is enough to show the person and the number, whereas French writes the pronoun in an ordinary statement, and the pronoun and the ending show them together. So <i lang=\"fr\">je parle</i> means “I speak”; <i lang=\"fr\">il parle</i>, “he speaks” (or “it speaks,” of a masculine noun); and <i lang=\"fr\">ils parlent</i>, “they speak.” <i lang=\"fr\">Elles</i> is used for a group that is entirely feminine, whereas <i lang=\"fr\">ils</i> is used for a masculine group and for a mixed group. <i lang=\"fr\">On</i> takes the third person singular, whether it means “one,” “people,” or “we.”</p>"
  },
  {
   "id": "accidents-9",
   "title": "The present",
   "body": "<p>The present indicative says that the action is going on now, that it is habitual, or that it is so in general, so <i lang=\"fr\">il parle</i> means “he speaks” or “he is speaking.” A regular verb in <i lang=\"fr\">-er</i>, such as <i lang=\"fr\">parler</i> (“to speak”), has the endings <i lang=\"fr\">-e</i>, <i lang=\"fr\">-es</i>, <i lang=\"fr\">-e</i>, <i lang=\"fr\">-ons</i>, <i lang=\"fr\">-ez</i>, and <i lang=\"fr\">-ent</i>. A regular verb in <i lang=\"fr\">-ir</i> of the type of <i lang=\"fr\">finir</i> (“to finish”) inserts <i lang=\"fr\">-iss-</i> in the plural: <i lang=\"fr\">finis</i>, <i lang=\"fr\">finis</i>, <i lang=\"fr\">finit</i>, <i lang=\"fr\">finissons</i>, <i lang=\"fr\">finissez</i>, <i lang=\"fr\">finissent</i>. A regular verb in <i lang=\"fr\">-re</i> of the type of <i lang=\"fr\">vendre</i> (“to sell”) has <i lang=\"fr\">vends</i>, <i lang=\"fr\">vends</i>, <i lang=\"fr\">vend</i>, <i lang=\"fr\">vendons</i>, <i lang=\"fr\">vendez</i>, <i lang=\"fr\">vendent</i>, and its third person singular adds no letter to the stem.</p>",
   "qp": {
    "id": "q-fr-acc-present",
    "variants": [
     {
      "prompt": "What is the first person plural present of <i lang=\"fr\">choisir</i>?",
      "options": [
       "<i lang=\"fr\">choisons</i>",
       "<i lang=\"fr\">choisissons</i>",
       "<i lang=\"fr\">choisirons</i>",
       "<i lang=\"fr\">choisissions</i>"
      ],
      "answer": 1,
      "explain": "A verb of the <i lang=\"fr\">finir</i> type inserts <i lang=\"fr\">-iss-</i> in the plural."
     },
     {
      "prompt": "What is the third person plural present of <i lang=\"fr\">porter</i>?",
      "options": [
       "<i lang=\"fr\">portont</i>",
       "<i lang=\"fr\">portez</i>",
       "<i lang=\"fr\">portent</i>",
       "<i lang=\"fr\">portons</i>"
      ],
      "answer": 2,
      "explain": "The endings of a verb in <i lang=\"fr\">-er</i> are <i lang=\"fr\">-e, -es, -e, -ons, -ez, -ent</i>."
     },
     {
      "prompt": "What is the third person singular present of <i lang=\"fr\">attendre</i>?",
      "options": [
       "<i lang=\"fr\">attendt</i>",
       "<i lang=\"fr\">attende</i>",
       "<i lang=\"fr\">attends</i>",
       "<i lang=\"fr\">attend</i>"
      ],
      "answer": 3,
      "explain": "A verb of the <i lang=\"fr\">vendre</i> type adds no letter in the third person singular."
     }
    ]
   }
  },
  {
   "id": "accidents-10",
   "title": "The <i lang=\"fr\">passé composé</i>",
   "body": "<p>The <strong><i lang=\"fr\">passé composé</i></strong> (“compound past”) is the ordinary past of a completed action, where Latin uses the perfect, so <i lang=\"fr\">il a parlé</i> means “he spoke” or “he has spoken.” It is formed with the present of <i lang=\"fr\">avoir</i> (“to have”) or of <i lang=\"fr\">être</i> (“to be”) and the past participle. <i lang=\"fr\">Parler</i>, <i lang=\"fr\">finir</i>, <i lang=\"fr\">vendre</i>, <i lang=\"fr\">faire</i> (“to do”), <i lang=\"fr\">être</i>, and <i lang=\"fr\">avoir</i> take <i lang=\"fr\">avoir</i>; <i lang=\"fr\">aller</i> (“to go”) and <i lang=\"fr\">venir</i> (“to come”) take <i lang=\"fr\">être</i>, and the participle then agrees with the subject: <i lang=\"fr\">elle est allée</i> (“she went”), <i lang=\"fr\">ils sont venus</i> (“they came”). With <i lang=\"fr\">avoir</i>, the participle does not agree with the subject, but it does agree with a direct object that stands before the verb, as in <i lang=\"fr\">la lettre qu’il a écrite</i> (“the letter that he wrote”).</p>",
   "qp": {
    "id": "q-fr-acc-pc",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i lang=\"fr\">Nous ___ venus</i> (“We came”).",
      "options": [
       "<i lang=\"fr\">avons</i>",
       "<i lang=\"fr\">êtes</i>",
       "<i lang=\"fr\">ont</i>",
       "<i lang=\"fr\">sommes</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Venir</i> takes <i lang=\"fr\">être</i> in the <i lang=\"fr\">passé composé</i>."
     },
     {
      "prompt": "Choose the auxiliary: <i lang=\"fr\">Elle ___ mangé</i> (“She ate”).",
      "options": [
       "<i lang=\"fr\">a</i>",
       "<i lang=\"fr\">est</i>",
       "<i lang=\"fr\">as</i>",
       "<i lang=\"fr\">ont</i>"
      ],
      "answer": 0,
      "explain": "Most verbs take <i lang=\"fr\">avoir</i>: <i lang=\"fr\">elle a mangé</i>."
     },
     {
      "prompt": "Why does the participle agree in <i lang=\"fr\">elle est allée</i>?",
      "options": [
       "Every participle agrees with its subject",
       "With <i lang=\"fr\">être</i> the participle agrees with the subject",
       "<i lang=\"fr\">Aller</i> is a reflexive verb",
       "The object comes before the verb"
      ],
      "answer": 1,
      "explain": "With <i lang=\"fr\">être</i> the participle agrees with the subject; with <i lang=\"fr\">avoir</i> it does not."
     }
    ]
   }
  },
  {
   "id": "accidents-11",
   "title": "The imparfait",
   "body": "<p>The <strong><i lang=\"fr\">imparfait</i></strong> (“imperfect”) says that the action was going on in the past, or that it was habitual then, so <i lang=\"fr\">il parlait</i> means “he was speaking” or “he used to speak”; the <i lang=\"fr\">passé composé</i> does not by itself say either of these things. Its endings are <i lang=\"fr\">-ais</i>, <i lang=\"fr\">-ais</i>, <i lang=\"fr\">-ait</i>, <i lang=\"fr\">-ions</i>, <i lang=\"fr\">-iez</i>, <i lang=\"fr\">-aient</i>, added to the stem of the first person plural of the present without <i lang=\"fr\">-ons</i>. <i lang=\"fr\">Nous parlions</i> is the <i lang=\"fr\">imparfait</i> of <i lang=\"fr\">parler</i>, and it is also the present subjunctive, so the rest of the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-fr-acc-imparfait",
    "variants": [
     {
      "prompt": "What does <i lang=\"fr\">il travaillait</i> mean?",
      "options": [
       "“he worked once”",
       "“he will work”",
       "“he would work”",
       "“he was working” or “he used to work”"
      ],
      "answer": 3,
      "explain": "The <i lang=\"fr\">imparfait</i> presents an action as going on or habitual in the past."
     },
     {
      "prompt": "From which form is the <i lang=\"fr\">imparfait</i> built?",
      "options": [
       "The first person plural of the present without <i lang=\"fr\">-ons</i>",
       "The infinitive",
       "The past participle",
       "The future stem"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Nous finissons</i> gives <i lang=\"fr\">je finissais</i>."
     },
     {
      "prompt": "What is the <i lang=\"fr\">imparfait</i>, first person singular, of <i lang=\"fr\">finir</i>?",
      "options": [
       "<i lang=\"fr\">je finirais</i>",
       "<i lang=\"fr\">je finissais</i>",
       "<i lang=\"fr\">je finais</i>",
       "<i lang=\"fr\">j’ai fini</i>"
      ],
      "answer": 1,
      "explain": "The stem of <i lang=\"fr\">nous finissons</i> with <i lang=\"fr\">-ais</i>: <i lang=\"fr\">je finissais</i>. <i lang=\"fr\">Je finirais</i> is the conditional."
     }
    ]
   }
  },
  {
   "id": "accidents-12",
   "title": "The future",
   "body": "<p>The future says that the action will happen, so <i lang=\"fr\">il parlera</i> means “he will speak.” A regular verb takes the infinitive as its stem (for a verb in <i lang=\"fr\">-re</i>, the infinitive without the final <i lang=\"fr\">e</i>) and adds the endings <i lang=\"fr\">-ai</i>, <i lang=\"fr\">-as</i>, <i lang=\"fr\">-a</i>, <i lang=\"fr\">-ons</i>, <i lang=\"fr\">-ez</i>, <i lang=\"fr\">-ont</i>. <i lang=\"fr\">Être</i>, <i lang=\"fr\">avoir</i>, <i lang=\"fr\">aller</i>, <i lang=\"fr\">faire</i>, and <i lang=\"fr\">venir</i> do not use that stem; their future stems are <i lang=\"fr\">ser-</i>, <i lang=\"fr\">aur-</i>, <i lang=\"fr\">ir-</i>, <i lang=\"fr\">fer-</i>, and <i lang=\"fr\">viendr-</i>. So <i lang=\"fr\">je serai</i> (“I shall be”) is the future of <i lang=\"fr\">être</i>, whereas <i lang=\"fr\">je serais</i> (“I would be”) is the conditional, which is another mood.</p>",
   "qp": {
    "id": "q-fr-acc-future",
    "variants": [
     {
      "prompt": "What is the future, first person singular, of <i lang=\"fr\">avoir</i>?",
      "options": [
       "<i lang=\"fr\">j’avrai</i>",
       "<i lang=\"fr\">j’aurai</i>",
       "<i lang=\"fr\">j’aurais</i>",
       "<i lang=\"fr\">j’avais</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Avoir</i> has the future stem <i lang=\"fr\">aur-</i>; <i lang=\"fr\">j’aurais</i> is the conditional."
     },
     {
      "prompt": "What is the future, third person singular, of <i lang=\"fr\">vendre</i>?",
      "options": [
       "<i lang=\"fr\">il vendrera</i>",
       "<i lang=\"fr\">il vendait</i>",
       "<i lang=\"fr\">il vendra</i>",
       "<i lang=\"fr\">il vendrait</i>"
      ],
      "answer": 2,
      "explain": "A verb in <i lang=\"fr\">-re</i> drops the final <i lang=\"fr\">e</i> of the infinitive before the future endings."
     },
     {
      "prompt": "Which form is the future, not the conditional?",
      "options": [
       "<i lang=\"fr\">je serais</i>",
       "<i lang=\"fr\">j’étais</i>",
       "<i lang=\"fr\">je sois</i>",
       "<i lang=\"fr\">je serai</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Je serai</i> (“I shall be”) is the future; <i lang=\"fr\">je serais</i> (“I would be”) is the conditional."
     }
    ]
   }
  },
  {
   "id": "accidents-13",
   "title": "Être and avoir",
   "body": "<p><i lang=\"fr\">Être</i> means “to be,” as Latin <i lang=\"fr\">esse</i> does, and <i lang=\"fr\">avoir</i> means “to have.” Both are irregular, and both are auxiliary verbs of the <i lang=\"fr\">passé composé</i>. <i lang=\"fr\">Avoir</i> forms that tense for most verbs, as in <i lang=\"fr\">j’ai parlé</i> (“I spoke”), whereas <i lang=\"fr\">être</i> forms it for <i lang=\"fr\">aller</i> and <i lang=\"fr\">venir</i> and for the other verbs of motion and of change of state that go with them, as in <i lang=\"fr\">je suis allé</i> (“I went”) and <i lang=\"fr\">je suis venu</i> (“I came”). <i lang=\"fr\">Être</i> itself takes <i lang=\"fr\">avoir</i>, so its <i lang=\"fr\">passé composé</i> is <i lang=\"fr\">j’ai été</i> (“I have been”), and the participle <i lang=\"fr\">été</i> never takes a feminine ending.</p>"
  },
  {
   "id": "accidents-14",
   "title": "The three groups",
   "body": "<p>French school grammars sort the verbs into three groups. The first group is the verbs in <i lang=\"fr\">-er</i> except <i lang=\"fr\">aller</i>, and <i lang=\"fr\">parler</i> is its model. The second group is the verbs in <i lang=\"fr\">-ir</i> that take <i lang=\"fr\">-iss-</i>, and <i lang=\"fr\">finir</i> is its model. The third group holds the rest, including the verbs in <i lang=\"fr\">-re</i>, such as <i lang=\"fr\">vendre</i>, and the irregular verbs, such as <i lang=\"fr\">aller</i>, <i lang=\"fr\">faire</i>, and <i lang=\"fr\">venir</i>; so <i lang=\"fr\">aller</i> belongs to the third group, although it ends in <i lang=\"fr\">-er</i>. The other regular verbs of the first two groups are formed like their models, whereas a verb of the third group must be learned from its own table.</p>"
  },
  {
   "id": "accidents-15",
   "title": "Stem and ending",
   "body": "<p>A French form, like a Latin one, is made of a stem and an ending. In <i lang=\"fr\">parlons</i> the ending <i lang=\"fr\">-ons</i> marks the first person plural, and in <i lang=\"fr\">finissons</i> the same ending follows <i lang=\"fr\">-iss-</i>. In <i lang=\"fr\">parlé</i> the ending marks the past participle of a verb in <i lang=\"fr\">-er</i>. Several written endings of a verb in <i lang=\"fr\">-er</i> are pronounced alike (<i lang=\"fr\">parle</i>, <i lang=\"fr\">parles</i>, <i lang=\"fr\">parlent</i>), and so the subject pronoun marks the person a second time; the ending and the pronoun together mark the person and the number.</p>"
  },
  {
   "id": "accidents-16",
   "title": "Aspect",
   "body": "<p>French marks a difference of <strong>aspect</strong> in the past, that is, a difference in how the action is presented. The <i lang=\"fr\">passé composé</i>, and the <i lang=\"fr\">passé simple</i> of written narrative, present an action as complete, whereas the <i lang=\"fr\">imparfait</i> presents it as going on or repeated. <i lang=\"fr\">Il a lu le livre</i> means “he read the book,” and the reading is complete; <i lang=\"fr\">il lisait le livre</i> means “he was reading the book.” A sentence often sets the two side by side: <i lang=\"fr\">il lisait quand le roi est entré</i> (“he was reading when the king came in”). Latin makes the same distinction with the imperfect and the perfect.</p>",
   "qp": {
    "id": "q-fr-acc-aspect",
    "variants": [
     {
      "prompt": "Choose the tense: <i lang=\"fr\">Il ___ quand le téléphone a sonné</i> (“He was sleeping when the telephone rang”).",
      "options": [
       "<i lang=\"fr\">a dormi</i>",
       "<i lang=\"fr\">dormira</i>",
       "<i lang=\"fr\">dormait</i>",
       "<i lang=\"fr\">dort</i>"
      ],
      "answer": 2,
      "explain": "The <i lang=\"fr\">imparfait</i> presents the sleeping as going on; the <i lang=\"fr\">passé composé</i> <i lang=\"fr\">a sonné</i> presents the ringing as a completed event."
     },
     {
      "prompt": "Which French tense corresponds to the Latin imperfect in aspect?",
      "options": [
       "The <i lang=\"fr\">passé composé</i>",
       "The <i lang=\"fr\">imparfait</i>",
       "The <i lang=\"fr\">passé simple</i>",
       "The future"
      ],
      "answer": 1,
      "explain": "Both present an action as going on or repeated in the past."
     },
     {
      "prompt": "What does the <i lang=\"fr\">passé composé</i> present?",
      "options": [
       "An action as complete",
       "An action as going on",
       "An action as habitual",
       "An action as future"
      ],
      "answer": 0,
      "explain": "The <i lang=\"fr\">passé composé</i>, like the <i lang=\"fr\">passé simple</i> of narrative, presents an action as complete."
     }
    ]
   }
  },
  {
   "id": "accidents-17",
   "title": "Compound tenses and the passive",
   "body": "<p>Many French tenses are formed with an auxiliary verb and the past participle. The <i lang=\"fr\">passé composé</i>, the <i lang=\"fr\">plus-que-parfait</i> (pluperfect), and the <i lang=\"fr\">futur antérieur</i> (future perfect) use <i lang=\"fr\">avoir</i> or <i lang=\"fr\">être</i>: <i lang=\"fr\">il a parlé</i> (“he has spoken”), <i lang=\"fr\">il avait parlé</i> (“he had spoken”), <i lang=\"fr\">il aura parlé</i> (“he will have spoken”). Most verbs take <i lang=\"fr\">avoir</i>, but a small set of verbs of motion or change of state, such as <i lang=\"fr\">aller</i>, <i lang=\"fr\">venir</i>, <i lang=\"fr\">arriver</i> (“to arrive”), <i lang=\"fr\">partir</i> (“to leave”), and <i lang=\"fr\">naître</i> (“to be born”), take <i lang=\"fr\">être</i>, and then the participle agrees with the subject: <i lang=\"fr\">elle est venue</i> (“she came”). The passive is formed with <i lang=\"fr\">être</i> and the past participle: <i lang=\"fr\">la lettre est écrite par le roi</i> (“the letter is written by the king”). The near future is formed with <i lang=\"fr\">aller</i> and the infinitive: <i lang=\"fr\">il va parler</i> (“he is going to speak”).</p>"
  },
  {
   "id": "accidents-18",
   "title": "Pronominal verbs",
   "body": "<p>A <strong>pronominal</strong> verb is used with a reflexive pronoun of the same person as the subject: <i lang=\"fr\">je me lave</i> (“I wash myself”). Some pronominal verbs have a reflexive sense; some a reciprocal sense, as in <i lang=\"fr\">ils se parlent</i> (“they speak to each other”); and some a sense close to the Greek middle or to a passive, as in <i lang=\"fr\">le livre se vend bien</i> (“the book sells well”). Pronominal verbs take <i lang=\"fr\">être</i> in the compound tenses: <i lang=\"fr\">elle s’est lavée</i> (“she washed herself”). Neither Latin nor French has a middle voice in form, whereas Greek has one.</p>",
   "qp": {
    "id": "q-fr-acc-pronominal",
    "variants": [
     {
      "prompt": "What does <i lang=\"fr\">ils se regardent</i> mean, in the reciprocal sense?",
      "options": [
       "“they look at themselves”",
       "“they are looked at”",
       "“they look at them”",
       "“they look at each other”"
      ],
      "answer": 3,
      "explain": "A pronominal verb can have a reciprocal sense, “each other.”"
     },
     {
      "prompt": "Which auxiliary does a pronominal verb take?",
      "options": [
       "<i lang=\"fr\">être</i>",
       "<i lang=\"fr\">avoir</i>",
       "<i lang=\"fr\">aller</i>",
       "<i lang=\"fr\">faire</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Elle s’est lavée</i>: pronominal verbs take <i lang=\"fr\">être</i>."
     },
     {
      "prompt": "What does <i lang=\"fr\">ce vin se boit frais</i> mean?",
      "options": [
       "“This wine drinks itself cool”",
       "“This wine is drunk cool”",
       "“This wine drank cool”",
       "“This wine will be drunk cool”"
      ],
      "answer": 1,
      "explain": "Here the pronominal verb has a sense close to a passive."
     }
    ]
   }
  },
  {
   "id": "accidents-19",
   "title": "Object pronouns, y, and en",
   "body": "<p>The object pronouns <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">le</i>, <i lang=\"fr\">la</i>, <i lang=\"fr\">lui</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, and <i lang=\"fr\">leur</i>, and the pronouns <i lang=\"fr\">y</i> and <i lang=\"fr\">en</i>, have no stress of their own and stand next to the verb, before it except in the affirmative imperative. Words of this kind, pronounced as part of a neighboring word, are called <strong>clitics</strong>. <i lang=\"fr\">Y</i> stands for a place, or for <i lang=\"fr\">à</i> with a thing: <i lang=\"fr\">j’y vais</i> (“I am going there”). <i lang=\"fr\">En</i> stands for <i lang=\"fr\">de</i> with a noun, or for a quantity: <i lang=\"fr\">j’en ai deux</i> (“I have two of them”). When two such pronouns stand together, their order is fixed: <i lang=\"fr\">il me le donne</i> (“he gives it to me”), <i lang=\"fr\">il le lui donne</i> (“he gives it to him”).</p>"
  },
  {
   "id": "accidents-20",
   "title": "The conditional and the imperative",
   "body": "<p>Beside the indicative and the subjunctive, French has the conditional and the imperative. The <strong>conditional</strong> is formed from the stem of the future and the endings of the <i lang=\"fr\">imparfait</i>: <i lang=\"fr\">je parlerais</i> (“I would speak”). It gives the result of a condition that is not real, after <i lang=\"fr\">si</i> (“if”) with the <i lang=\"fr\">imparfait</i>, as in <i lang=\"fr\">si j’avais le temps, je parlerais au roi</i> (“if I had the time, I would speak to the king”), and it softens a request, as in <i lang=\"fr\">je voudrais un livre</i> (“I would like a book”). The imperative has three forms and no subject pronoun: <i lang=\"fr\">parle</i>, <i lang=\"fr\">parlons</i>, <i lang=\"fr\">parlez</i> (“speak,” “let us speak,” “speak”). A verb in <i lang=\"fr\">-er</i> has no <i lang=\"fr\">-s</i> in the second person singular of the imperative.</p>",
   "qp": {
    "id": "q-fr-acc-conditional",
    "variants": [
     {
      "prompt": "What is the conditional, first person singular, of <i lang=\"fr\">pouvoir</i>?",
      "options": [
       "<i lang=\"fr\">je pourrai</i>",
       "<i lang=\"fr\">je pouvais</i>",
       "<i lang=\"fr\">je pourrais</i>",
       "<i lang=\"fr\">je puisse</i>"
      ],
      "answer": 2,
      "explain": "The conditional is the future stem <i lang=\"fr\">pourr-</i> with the endings of the <i lang=\"fr\">imparfait</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Si j’étais riche, j’___ un bateau</i> (“If I were rich, I would buy a boat”).",
      "options": [
       "<i lang=\"fr\">achèterai</i>",
       "<i lang=\"fr\">achèterais</i>",
       "<i lang=\"fr\">achetais</i>",
       "<i lang=\"fr\">achète</i>"
      ],
      "answer": 1,
      "explain": "After <i lang=\"fr\">si</i> with the <i lang=\"fr\">imparfait</i>, the result is in the conditional."
     },
     {
      "prompt": "What is the second person singular imperative of <i lang=\"fr\">chanter</i>?",
      "options": [
       "<i lang=\"fr\">chante</i>",
       "<i lang=\"fr\">chantes</i>",
       "<i lang=\"fr\">chantez</i>",
       "<i lang=\"fr\">chantons</i>"
      ],
      "answer": 0,
      "explain": "A verb in <i lang=\"fr\">-er</i> has no <i lang=\"fr\">-s</i> in the second person singular of the imperative."
     }
    ]
   }
  }
 ]
};
