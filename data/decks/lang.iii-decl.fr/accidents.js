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
   "body": "<p>The French article shows the gender and number of the noun it stands with. The definite article is <i>le</i> before a masculine singular noun, <i>la</i> before a feminine singular noun, and <i>les</i> before a plural noun; before a vowel or a mute <i>h</i> (an <i>h</i> that is not pronounced), <i>le</i> and <i>la</i> become <i>l’</i>. The indefinite article is <i>un</i>, <i>une</i>, and, in the plural, <i>des</i>. The <strong>partitive</strong> article, used for an unspecified amount (“some”), is <i>du</i>, <i>de la</i>, <i>de l’</i>, and <i>des</i>.</p>\n<p>The prepositions <i>à</i> (“to”) and <i>de</i> (“of,” “from”) contract with <i>le</i> and <i>les</i>: <i>à</i> with <i>le</i> becomes <i>au</i>, and with <i>les</i> becomes <i>aux</i>; <i>de</i> with <i>le</i> becomes <i>du</i>, and with <i>les</i> becomes <i>des</i>. But <i>à la</i>, <i>à l’</i>, <i>de la</i>, and <i>de l’</i> remain two words.</p>",
   "qp": {
    "id": "q-fr-acc-article",
    "variants": [
     {
      "prompt": "Choose the article: <i>___ arbre</i> (“the tree”).",
      "options": [
       "<i>l’</i>",
       "<i>le</i>",
       "<i>la</i>",
       "<i>les</i>"
      ],
      "answer": 0,
      "explain": "Before a vowel, <i>le</i> and <i>la</i> become <i>l’</i>."
     },
     {
      "prompt": "What is <i>à</i> with <i>les</i>?",
      "options": [
       "<i>à les</i>",
       "<i>des</i>",
       "<i>au</i>",
       "<i>aux</i>"
      ],
      "answer": 3,
      "explain": "<i>À</i> contracts with <i>les</i> to <i>aux</i>, and with <i>le</i> to <i>au</i>."
     },
     {
      "prompt": "Choose the partitive: <i>Il boit ___ lait</i> (“He drinks some milk”).",
      "options": [
       "<i>de la</i>",
       "<i>des</i>",
       "<i>du</i>",
       "<i>le</i>"
      ],
      "answer": 2,
      "explain": "The partitive with a masculine singular noun is <i>du</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-3",
   "title": "Gender",
   "body": "<p>Latin has three genders, whereas French has two: every French noun is masculine or feminine, and French has no neuter. The article shows the gender: <i>le livre</i> (“the book”) is masculine, and <i>la table</i> (“the table”) is feminine. The ending does not always show the gender, because <i>livre</i> and <i>victoire</i> (“victory”) both end in <i>-e</i>, but the first is masculine and the second feminine.</p>",
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
      "prompt": "What shows the gender of <i>le musée</i> (“the museum”)?",
      "options": [
       "The article <i>le</i>",
       "The ending <i>-ée</i>",
       "The accent on <i>é</i>",
       "Nothing in the phrase"
      ],
      "answer": 0,
      "explain": "The article shows the gender; the ending <i>-ée</i> would suggest a feminine, but <i>musée</i> is masculine."
     },
     {
      "prompt": "What became of the Latin neuter in French?",
      "options": [
       "It became the French feminine",
       "It disappeared; French nouns are masculine or feminine",
       "It is kept in the article <i>les</i>",
       "It is kept in nouns in <i>-um</i>"
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
   "body": "<p>A French noun has two numbers, the singular and the plural, as a Latin noun has. A regular plural adds <i>-s</i>, and that <i>-s</i> is usually silent, so in speech the singular and the plural of many nouns sound alike. Some plurals change the ending: the plural of <i>cheval</i> (“horse”) is <i>chevaux</i>, and the plural of <i>cadeau</i> (“gift”) is <i>cadeaux</i>. The article marks number as well, because <i>les</i> is plural, whereas <i>le</i> and <i>la</i> are singular; and since the <i>-s</i> is silent, the article is often the only spoken sign of the plural.</p>",
   "qp": {
    "id": "q-fr-acc-number",
    "variants": [
     {
      "prompt": "What is the plural of <i>animal</i>?",
      "options": [
       "<i>animals</i>",
       "<i>animales</i>",
       "<i>animau</i>",
       "<i>animaux</i>"
      ],
      "answer": 3,
      "explain": "Most nouns in <i>-al</i> have the plural in <i>-aux</i>."
     },
     {
      "prompt": "Why is the article often the only spoken sign of the plural?",
      "options": [
       "The plural <i>-s</i> is usually silent",
       "French nouns have no plural",
       "The article is always stressed",
       "The plural changes the vowel"
      ],
      "answer": 0,
      "explain": "In <i>la porte</i>, <i>les portes</i>, only the article sounds different."
     },
     {
      "prompt": "What is the plural of <i>bateau</i>?",
      "options": [
       "<i>bateaus</i>",
       "<i>bateaux</i>",
       "<i>bateals</i>",
       "<i>bateaues</i>"
      ],
      "answer": 1,
      "explain": "A noun in <i>-eau</i> takes <i>-x</i> in the plural."
     }
    ]
   }
  },
  {
   "id": "accidents-5",
   "title": "No case on the noun",
   "body": "<p>Latin marks the nominative, the genitive, the dative, the accusative, the ablative, and the vocative on the noun, whereas a French noun does not change for case. French keeps one form of the noun for the subject, for the object, and for the object of a preposition: in <i>le roi vend le cheval</i> (“the king sells the horse”), each noun has the form it would have anywhere else in the sentence. What Latin marks by case, French marks by the order of the words and by prepositions, and, in the pronoun, by a change of form.</p>",
   "qp": {
    "id": "q-fr-acc-case",
    "variants": [
     {
      "prompt": "How does French show that <i>le chat</i> is the object in <i>le chien poursuit le chat</i>?",
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
      "prompt": "What does French use where Latin uses the dative <i>puerō</i>?",
      "options": [
       "The preposition <i>à</i>: <i>au garçon</i>",
       "A dative ending on <i>garçon</i>",
       "The preposition <i>de</i>",
       "The order of the words alone"
      ],
      "answer": 0,
      "explain": "French marks the indirect object with <i>à</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-6",
   "title": "Adjective agreement",
   "body": "<p>A French adjective agrees with its noun in gender and number, but not in case, because the noun has no case. So <i>un bon roi</i> (“a good king”) is masculine singular, <i>une bonne mère</i> (“a good mother”) feminine singular, <i>les bons rois</i> masculine plural, and <i>les bonnes mères</i> feminine plural. <i>Bon</i> adds <i>-e</i> for the feminine and <i>-s</i> for the plural, and in the feminine it also doubles the <i>n</i>, so the form is <i>bonne</i>. A short adjective such as <i>bon</i>, <i>petit</i> (“small”), or <i>grand</i> (“large”) usually stands before the noun, whereas most other adjectives follow it.</p>",
   "qp": {
    "id": "q-fr-acc-adjective",
    "variants": [
     {
      "prompt": "Choose the form: <i>les ___ amies</i> (“the good friends,” feminine).",
      "options": [
       "<i>bons</i>",
       "<i>bonnes</i>",
       "<i>bonne</i>",
       "<i>bon</i>"
      ],
      "answer": 1,
      "explain": "The adjective agrees with <i>amies</i>, feminine plural; <i>bon</i> doubles its <i>n</i> in the feminine."
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
      "prompt": "Where does a short adjective such as <i>petit</i> usually stand?",
      "options": [
       "After the noun",
       "After the verb",
       "At the end of the sentence",
       "Before the noun"
      ],
      "answer": 3,
      "explain": "A few short adjectives (<i>bon</i>, <i>petit</i>, <i>grand</i>) usually stand before the noun."
     }
    ]
   }
  },
  {
   "id": "accidents-7",
   "title": "Subject, object, and stressed pronouns",
   "body": "<p>The French pronoun keeps a difference of form that the noun has lost. The subject forms are <i>je</i>, <i>tu</i>, <i>il</i>, <i>elle</i>, <i>on</i>, <i>nous</i>, <i>vous</i>, <i>ils</i>, and <i>elles</i>. The direct-object forms are <i>me</i>, <i>te</i>, <i>le</i>, <i>la</i>, <i>nous</i>, <i>vous</i>, and <i>les</i>. The indirect-object forms are <i>me</i>, <i>te</i>, <i>lui</i>, <i>nous</i>, <i>vous</i>, and <i>leur</i>. The stressed forms, also called disjunctive, are <i>moi</i>, <i>toi</i>, <i>lui</i>, <i>elle</i>, <i>soi</i>, <i>nous</i>, <i>vous</i>, <i>eux</i>, and <i>elles</i>. So <i>je</i> (“I”) is the subject of the verb, <i>me</i> (“me”) its object, and <i>moi</i> stands where the pronoun is stressed, above all after a preposition, as in <i>avec moi</i> (“with me”). <i>Nous</i> and <i>vous</i> have one form in all four uses, and so their place in the sentence shows the use.</p>",
   "qp": {
    "id": "q-fr-acc-pronouns",
    "variants": [
     {
      "prompt": "Choose the pronoun: <i>Il part avec ___</i> (“He is leaving with us”).",
      "options": [
       "<i>notre</i>",
       "<i>nos</i>",
       "<i>nous</i>",
       "<i>leur</i>"
      ],
      "answer": 2,
      "explain": "<i>Nous</i> has one form in all four uses."
     },
     {
      "prompt": "Choose the pronoun: <i>Je ___ écris</i> (“I write to him”).",
      "options": [
       "<i>le</i>",
       "<i>lui</i>",
       "<i>il</i>",
       "<i>leur</i>"
      ],
      "answer": 1,
      "explain": "The indirect-object form of the third person singular is <i>lui</i>."
     },
     {
      "prompt": "Which form is used after a preposition?",
      "options": [
       "The stressed form, as <i>moi</i>",
       "The subject form, as <i>je</i>",
       "The direct-object form, as <i>me</i>",
       "The indirect-object form, as <i>me</i>"
      ],
      "answer": 0,
      "explain": "<i>Avec moi</i>, <i>pour toi</i>: after a preposition, the stressed form."
     }
    ]
   }
  },
  {
   "id": "accidents-8",
   "title": "Person and number",
   "body": "<p>Latin often leaves out the subject pronoun, because the ending of the verb is enough to show the person and the number, whereas French writes the pronoun in an ordinary statement, and the pronoun and the ending show them together. So <i>je parle</i> means “I speak”; <i>il parle</i>, “he speaks” (or “it speaks,” of a masculine noun); and <i>ils parlent</i>, “they speak.” <i>Elles</i> is used for a group that is entirely feminine, whereas <i>ils</i> is used for a masculine group and for a mixed group. <i>On</i> takes the third person singular, whether it means “one,” “people,” or “we.”</p>"
  },
  {
   "id": "accidents-9",
   "title": "The present",
   "body": "<p>The present indicative says that the action is going on now, that it is habitual, or that it is so in general, so <i>il parle</i> means “he speaks” or “he is speaking.” A regular verb in <i>-er</i>, such as <i>parler</i> (“to speak”), has the endings <i>-e</i>, <i>-es</i>, <i>-e</i>, <i>-ons</i>, <i>-ez</i>, and <i>-ent</i>. A regular verb in <i>-ir</i> of the type of <i>finir</i> (“to finish”) inserts <i>-iss-</i> in the plural: <i>finis</i>, <i>finis</i>, <i>finit</i>, <i>finissons</i>, <i>finissez</i>, <i>finissent</i>. A regular verb in <i>-re</i> of the type of <i>vendre</i> (“to sell”) has <i>vends</i>, <i>vends</i>, <i>vend</i>, <i>vendons</i>, <i>vendez</i>, <i>vendent</i>, and its third person singular adds no letter to the stem.</p>",
   "qp": {
    "id": "q-fr-acc-present",
    "variants": [
     {
      "prompt": "What is the first person plural present of <i>choisir</i>?",
      "options": [
       "<i>choisons</i>",
       "<i>choisissons</i>",
       "<i>choisirons</i>",
       "<i>choisissions</i>"
      ],
      "answer": 1,
      "explain": "A verb of the <i>finir</i> type inserts <i>-iss-</i> in the plural."
     },
     {
      "prompt": "What is the third person plural present of <i>porter</i>?",
      "options": [
       "<i>portont</i>",
       "<i>portez</i>",
       "<i>portent</i>",
       "<i>portons</i>"
      ],
      "answer": 2,
      "explain": "The endings of a verb in <i>-er</i> are <i>-e, -es, -e, -ons, -ez, -ent</i>."
     },
     {
      "prompt": "What is the third person singular present of <i>attendre</i>?",
      "options": [
       "<i>attendt</i>",
       "<i>attende</i>",
       "<i>attends</i>",
       "<i>attend</i>"
      ],
      "answer": 3,
      "explain": "A verb of the <i>vendre</i> type adds no letter in the third person singular."
     }
    ]
   }
  },
  {
   "id": "accidents-10",
   "title": "The passé composé",
   "body": "<p>The <strong>passé composé</strong> (“compound past”) is the ordinary past of a completed action, where Latin uses the perfect, so <i>il a parlé</i> means “he spoke” or “he has spoken.” It is formed with the present of <i>avoir</i> (“to have”) or of <i>être</i> (“to be”) and the past participle. <i>Parler</i>, <i>finir</i>, <i>vendre</i>, <i>faire</i> (“to do”), <i>être</i>, and <i>avoir</i> take <i>avoir</i>; <i>aller</i> (“to go”) and <i>venir</i> (“to come”) take <i>être</i>, and the participle then agrees with the subject: <i>elle est allée</i> (“she went”), <i>ils sont venus</i> (“they came”). With <i>avoir</i>, the participle does not agree with the subject, but it does agree with a direct object that stands before the verb, as in <i>la lettre qu’il a écrite</i> (“the letter that he wrote”).</p>",
   "qp": {
    "id": "q-fr-acc-pc",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i>Nous ___ venus</i> (“We came”).",
      "options": [
       "<i>avons</i>",
       "<i>êtes</i>",
       "<i>ont</i>",
       "<i>sommes</i>"
      ],
      "answer": 3,
      "explain": "<i>Venir</i> takes <i>être</i> in the passé composé."
     },
     {
      "prompt": "Choose the auxiliary: <i>Elle ___ mangé</i> (“She ate”).",
      "options": [
       "<i>a</i>",
       "<i>est</i>",
       "<i>as</i>",
       "<i>ont</i>"
      ],
      "answer": 0,
      "explain": "Most verbs take <i>avoir</i>: <i>elle a mangé</i>."
     },
     {
      "prompt": "Why does the participle agree in <i>elle est allée</i>?",
      "options": [
       "Every participle agrees with its subject",
       "With <i>être</i> the participle agrees with the subject",
       "<i>Aller</i> is a reflexive verb",
       "The object comes before the verb"
      ],
      "answer": 1,
      "explain": "With <i>être</i> the participle agrees with the subject; with <i>avoir</i> it does not."
     }
    ]
   }
  },
  {
   "id": "accidents-11",
   "title": "The imparfait",
   "body": "<p>The <strong>imparfait</strong> (“imperfect”) says that the action was going on in the past, or that it was habitual then, so <i>il parlait</i> means “he was speaking” or “he used to speak”; the passé composé does not by itself say either of these things. Its endings are <i>-ais</i>, <i>-ais</i>, <i>-ait</i>, <i>-ions</i>, <i>-iez</i>, <i>-aient</i>, added to the stem of the first person plural of the present without <i>-ons</i>. <i>Nous parlions</i> is the imparfait of <i>parler</i>, and it is also the present subjunctive, so the rest of the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-fr-acc-imparfait",
    "variants": [
     {
      "prompt": "What does <i>il travaillait</i> mean?",
      "options": [
       "“he worked once”",
       "“he will work”",
       "“he would work”",
       "“he was working” or “he used to work”"
      ],
      "answer": 3,
      "explain": "The imparfait presents an action as going on or habitual in the past."
     },
     {
      "prompt": "From which form is the imparfait built?",
      "options": [
       "The first person plural of the present without <i>-ons</i>",
       "The infinitive",
       "The past participle",
       "The future stem"
      ],
      "answer": 0,
      "explain": "<i>Nous finissons</i> gives <i>je finissais</i>."
     },
     {
      "prompt": "What is the imparfait, first person singular, of <i>finir</i>?",
      "options": [
       "<i>je finirais</i>",
       "<i>je finissais</i>",
       "<i>je finais</i>",
       "<i>j’ai fini</i>"
      ],
      "answer": 1,
      "explain": "The stem of <i>nous finissons</i> with <i>-ais</i>: <i>je finissais</i>. <i>Je finirais</i> is the conditional."
     }
    ]
   }
  },
  {
   "id": "accidents-12",
   "title": "The future",
   "body": "<p>The future says that the action will happen, so <i>il parlera</i> means “he will speak.” A regular verb takes the infinitive as its stem (for a verb in <i>-re</i>, the infinitive without the final <i>e</i>) and adds the endings <i>-ai</i>, <i>-as</i>, <i>-a</i>, <i>-ons</i>, <i>-ez</i>, <i>-ont</i>. <i>Être</i>, <i>avoir</i>, <i>aller</i>, <i>faire</i>, and <i>venir</i> do not use that stem; their future stems are <i>ser-</i>, <i>aur-</i>, <i>ir-</i>, <i>fer-</i>, and <i>viendr-</i>. So <i>je serai</i> (“I shall be”) is the future of <i>être</i>, whereas <i>je serais</i> (“I would be”) is the conditional, which is another mood.</p>",
   "qp": {
    "id": "q-fr-acc-future",
    "variants": [
     {
      "prompt": "What is the future, first person singular, of <i>avoir</i>?",
      "options": [
       "<i>j’avrai</i>",
       "<i>j’aurai</i>",
       "<i>j’aurais</i>",
       "<i>j’avais</i>"
      ],
      "answer": 1,
      "explain": "<i>Avoir</i> has the future stem <i>aur-</i>; <i>j’aurais</i> is the conditional."
     },
     {
      "prompt": "What is the future, third person singular, of <i>vendre</i>?",
      "options": [
       "<i>il vendrera</i>",
       "<i>il vendait</i>",
       "<i>il vendra</i>",
       "<i>il vendrait</i>"
      ],
      "answer": 2,
      "explain": "A verb in <i>-re</i> drops the final <i>e</i> of the infinitive before the future endings."
     },
     {
      "prompt": "Which form is the future, not the conditional?",
      "options": [
       "<i>je serais</i>",
       "<i>j’étais</i>",
       "<i>je sois</i>",
       "<i>je serai</i>"
      ],
      "answer": 3,
      "explain": "<i>Je serai</i> (“I shall be”) is the future; <i>je serais</i> (“I would be”) is the conditional."
     }
    ]
   }
  },
  {
   "id": "accidents-13",
   "title": "Être and avoir",
   "body": "<p><i>Être</i> means “to be,” as Latin <i>esse</i> does, and <i>avoir</i> means “to have.” Both are irregular, and both are auxiliary verbs of the passé composé. <i>Avoir</i> forms that tense for most verbs, as in <i>j’ai parlé</i> (“I spoke”), whereas <i>être</i> forms it for <i>aller</i> and <i>venir</i> and for the other verbs of motion and of change of state that go with them, as in <i>je suis allé</i> (“I went”) and <i>je suis venu</i> (“I came”). <i>Être</i> itself takes <i>avoir</i>, so its passé composé is <i>j’ai été</i> (“I have been”), and the participle <i>été</i> never takes a feminine ending.</p>"
  },
  {
   "id": "accidents-14",
   "title": "The three groups",
   "body": "<p>French school grammars sort the verbs into three groups. The first group is the verbs in <i>-er</i> except <i>aller</i>, and <i>parler</i> is its model. The second group is the verbs in <i>-ir</i> that take <i>-iss-</i>, and <i>finir</i> is its model. The third group holds the rest, including the verbs in <i>-re</i>, such as <i>vendre</i>, and the irregular verbs, such as <i>aller</i>, <i>faire</i>, and <i>venir</i>; so <i>aller</i> belongs to the third group, although it ends in <i>-er</i>. The other regular verbs of the first two groups are formed like their models, whereas a verb of the third group must be learned from its own table.</p>"
  },
  {
   "id": "accidents-15",
   "title": "Stem and ending",
   "body": "<p>A French form, like a Latin one, is made of a stem and an ending. In <i>parlons</i> the ending <i>-ons</i> marks the first person plural, and in <i>finissons</i> the same ending follows <i>-iss-</i>. In <i>parlé</i> the ending marks the past participle of a verb in <i>-er</i>. Several written endings of a verb in <i>-er</i> are pronounced alike (<i>parle</i>, <i>parles</i>, <i>parlent</i>), and so the subject pronoun marks the person a second time; the ending and the pronoun together mark the person and the number.</p>"
  },
  {
   "id": "accidents-16",
   "title": "Aspect",
   "body": "<p>French marks a difference of <strong>aspect</strong> in the past, that is, a difference in how the action is presented. The passé composé, and the passé simple of written narrative, present an action as complete, whereas the imparfait presents it as going on or repeated. <i>Il a lu le livre</i> means “he read the book,” and the reading is complete; <i>il lisait le livre</i> means “he was reading the book.” A sentence often sets the two side by side: <i>il lisait quand le roi est entré</i> (“he was reading when the king came in”). Latin makes the same distinction with the imperfect and the perfect.</p>",
   "qp": {
    "id": "q-fr-acc-aspect",
    "variants": [
     {
      "prompt": "Choose the tense: <i>Il ___ quand le téléphone a sonné</i> (“He was sleeping when the telephone rang”).",
      "options": [
       "<i>a dormi</i>",
       "<i>dormira</i>",
       "<i>dormait</i>",
       "<i>dort</i>"
      ],
      "answer": 2,
      "explain": "The imparfait presents the sleeping as going on; the passé composé <i>a sonné</i> presents the ringing as a completed event."
     },
     {
      "prompt": "Which French tense corresponds to the Latin imperfect in aspect?",
      "options": [
       "The passé composé",
       "The imparfait",
       "The passé simple",
       "The future"
      ],
      "answer": 1,
      "explain": "Both present an action as going on or repeated in the past."
     },
     {
      "prompt": "What does the passé composé present?",
      "options": [
       "An action as complete",
       "An action as going on",
       "An action as habitual",
       "An action as future"
      ],
      "answer": 0,
      "explain": "The passé composé, like the passé simple of narrative, presents an action as complete."
     }
    ]
   }
  },
  {
   "id": "accidents-17",
   "title": "Compound tenses and the passive",
   "body": "<p>Many French tenses are formed with an auxiliary verb and the past participle. The passé composé, the plus-que-parfait (pluperfect), and the futur antérieur (future perfect) use <i>avoir</i> or <i>être</i>: <i>il a parlé</i> (“he has spoken”), <i>il avait parlé</i> (“he had spoken”), <i>il aura parlé</i> (“he will have spoken”). Most verbs take <i>avoir</i>, but a small set of verbs of motion or change of state, such as <i>aller</i>, <i>venir</i>, <i>arriver</i> (“to arrive”), <i>partir</i> (“to leave”), and <i>naître</i> (“to be born”), take <i>être</i>, and then the participle agrees with the subject: <i>elle est venue</i> (“she came”). The passive is formed with <i>être</i> and the past participle: <i>la lettre est écrite par le roi</i> (“the letter is written by the king”). The near future is formed with <i>aller</i> and the infinitive: <i>il va parler</i> (“he is going to speak”).</p>"
  },
  {
   "id": "accidents-18",
   "title": "Pronominal verbs",
   "body": "<p>A <strong>pronominal</strong> verb is used with a reflexive pronoun of the same person as the subject: <i>je me lave</i> (“I wash myself”). Some pronominal verbs have a reflexive sense; some a reciprocal sense, as in <i>ils se parlent</i> (“they speak to each other”); and some a sense close to the Greek middle or to a passive, as in <i>le livre se vend bien</i> (“the book sells well”). Pronominal verbs take <i>être</i> in the compound tenses: <i>elle s’est lavée</i> (“she washed herself”). Neither Latin nor French has a middle voice in form, whereas Greek has one.</p>",
   "qp": {
    "id": "q-fr-acc-pronominal",
    "variants": [
     {
      "prompt": "What does <i>ils se regardent</i> mean, in the reciprocal sense?",
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
       "<i>être</i>",
       "<i>avoir</i>",
       "<i>aller</i>",
       "<i>faire</i>"
      ],
      "answer": 0,
      "explain": "<i>Elle s’est lavée</i>: pronominal verbs take <i>être</i>."
     },
     {
      "prompt": "What does <i>ce vin se boit frais</i> mean?",
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
   "body": "<p>The object pronouns <i>me</i>, <i>te</i>, <i>le</i>, <i>la</i>, <i>lui</i>, <i>nous</i>, <i>vous</i>, and <i>leur</i>, and the pronouns <i>y</i> and <i>en</i>, have no stress of their own and stand next to the verb, before it except in the affirmative imperative. Words of this kind, pronounced as part of a neighboring word, are called <strong>clitics</strong>. <i>Y</i> stands for a place, or for <i>à</i> with a thing: <i>j’y vais</i> (“I am going there”). <i>En</i> stands for <i>de</i> with a noun, or for a quantity: <i>j’en ai deux</i> (“I have two of them”). When two such pronouns stand together, their order is fixed: <i>il me le donne</i> (“he gives it to me”), <i>il le lui donne</i> (“he gives it to him”).</p>"
  },
  {
   "id": "accidents-20",
   "title": "The conditional and the imperative",
   "body": "<p>Beside the indicative and the subjunctive, French has the conditional and the imperative. The <strong>conditional</strong> is formed from the stem of the future and the endings of the imparfait: <i>je parlerais</i> (“I would speak”). It gives the result of a condition that is not real, after <i>si</i> (“if”) with the imparfait, as in <i>si j’avais le temps, je parlerais au roi</i> (“if I had the time, I would speak to the king”), and it softens a request, as in <i>je voudrais un livre</i> (“I would like a book”). The imperative has three forms and no subject pronoun: <i>parle</i>, <i>parlons</i>, <i>parlez</i> (“speak,” “let us speak,” “speak”). A verb in <i>-er</i> has no <i>-s</i> in the second person singular of the imperative.</p>",
   "qp": {
    "id": "q-fr-acc-conditional",
    "variants": [
     {
      "prompt": "What is the conditional, first person singular, of <i>pouvoir</i>?",
      "options": [
       "<i>je pourrai</i>",
       "<i>je pouvais</i>",
       "<i>je pourrais</i>",
       "<i>je puisse</i>"
      ],
      "answer": 2,
      "explain": "The conditional is the future stem <i>pourr-</i> with the endings of the imparfait."
     },
     {
      "prompt": "Choose the form: <i>Si j’étais riche, j’___ un bateau</i> (“If I were rich, I would buy a boat”).",
      "options": [
       "<i>achèterai</i>",
       "<i>achèterais</i>",
       "<i>achetais</i>",
       "<i>achète</i>"
      ],
      "answer": 1,
      "explain": "After <i>si</i> with the imparfait, the result is in the conditional."
     },
     {
      "prompt": "What is the second person singular imperative of <i>chanter</i>?",
      "options": [
       "<i>chante</i>",
       "<i>chantes</i>",
       "<i>chantez</i>",
       "<i>chantons</i>"
      ],
      "answer": 0,
      "explain": "A verb in <i>-er</i> has no <i>-s</i> in the second person singular of the imperative."
     }
    ]
   }
  }
 ]
};
