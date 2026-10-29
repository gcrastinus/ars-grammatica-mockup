window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/paradigms"] = {
 "id": "lang.iii-decl.fr/paradigms",
 "title": "French Paradigms",
 "sub": "The article, the noun, the adjective, the pronoun, and eight verbs",
 "sources": "Lawless; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "paradigms-1",
   "title": "le, la, les",
   "body": "<p><strong>le, la, les</strong> (“the”; “a”; “some”)</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Definite</th> <th>Indefinite</th> <th>Partitive</th></tr>\n<tr><td>Masculine singular</td> <td class=\"f\">le</td> <td class=\"f\">un</td> <td class=\"f\">du</td></tr>\n<tr><td>Feminine singular</td> <td class=\"f\">la</td> <td class=\"f\">une</td> <td class=\"f\">de la</td></tr>\n<tr><td>Before a vowel</td> <td class=\"f\">l’</td> <td class=\"f\"></td> <td class=\"f\">de l’</td></tr>\n<tr><td>Plural</td> <td class=\"f\">les</td> <td class=\"f\">des</td> <td class=\"f\">des</td></tr>\n</table></div><p>Contractions of the preposition and the article:</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><td class=\"f\">au</td> <td>à + le</td></tr>\n<tr><td class=\"f\">aux</td> <td>à + les</td></tr>\n<tr><td class=\"f\">à la</td> <td>à + la</td></tr>\n<tr><td class=\"f\">à l’</td> <td>à + l’</td></tr>\n<tr><td class=\"f\">du</td> <td>de + le</td></tr>\n<tr><td class=\"f\">des</td> <td>de + les</td></tr>\n<tr><td class=\"f\">de la</td> <td>de + la</td></tr>\n<tr><td class=\"f\">de l’</td> <td>de + l’</td></tr>\n</table></div>",
   "qp": {
    "id": "q-fr-par-article",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"fr\">___ heures</i> (“the hours”).",
      "options": [
       "<i lang=\"fr\">l’</i>",
       "<i lang=\"fr\">la</i>",
       "<i lang=\"fr\">les</i>",
       "<i lang=\"fr\">des</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Les</i> serves for both genders in the plural; <i lang=\"fr\">l’</i> is used only in the singular."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Il parle ___ professeur</i> (“He speaks to the teacher”).",
      "options": [
       "<i lang=\"fr\">à le</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">aux</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">À</i> with <i lang=\"fr\">le</i> contracts to <i lang=\"fr\">au</i>."
     },
     {
      "prompt": "Which phrases remain two words?",
      "options": [
       "<i lang=\"fr\">à la</i> and <i lang=\"fr\">de la</i>",
       "<i lang=\"fr\">au</i> and <i lang=\"fr\">du</i>",
       "<i lang=\"fr\">aux</i> and <i lang=\"fr\">des</i>",
       "<i lang=\"fr\">à le</i> and <i lang=\"fr\">de le</i>"
      ],
      "answer": 0,
      "explain": "Only <i lang=\"fr\">le</i> and <i lang=\"fr\">les</i> contract with <i lang=\"fr\">à</i> and <i lang=\"fr\">de</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-2",
   "title": "Nouns",
   "body": "<p><strong>Nouns</strong>, singular and plural</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Plural</th></tr>\n<tr><td>roi</td> <td class=\"f\">roi</td> <td class=\"f\">rois</td></tr>\n<tr><td>femme</td> <td class=\"f\">femme</td> <td class=\"f\">femmes</td></tr>\n<tr><td>homme</td> <td class=\"f\">homme</td> <td class=\"f\">hommes</td></tr>\n<tr><td>cheval</td> <td class=\"f\">cheval</td> <td class=\"f\">chevaux</td></tr>\n<tr><td>ville</td> <td class=\"f\">ville</td> <td class=\"f\">villes</td></tr>\n<tr><td>mer</td> <td class=\"f\">mer</td> <td class=\"f\">mers</td></tr>\n<tr><td>livre</td> <td class=\"f\">livre</td> <td class=\"f\">livres</td></tr>\n<tr><td>maison</td> <td class=\"f\">maison</td> <td class=\"f\">maisons</td></tr>\n<tr><td>ami</td> <td class=\"f\">ami (feminine amie)</td> <td class=\"f\">amis (feminine amies)</td></tr>\n<tr><td>cadeau</td> <td class=\"f\">cadeau</td> <td class=\"f\">cadeaux</td></tr>\n<tr><td>route</td> <td class=\"f\">route</td> <td class=\"f\">routes</td></tr>\n<tr><td>jour</td> <td class=\"f\">jour</td> <td class=\"f\">jours</td></tr>\n<tr><td>table</td> <td class=\"f\">table</td> <td class=\"f\">tables</td></tr>\n<tr><td>jardin</td> <td class=\"f\">jardin</td> <td class=\"f\">jardins</td></tr>\n<tr><td>victoire</td> <td class=\"f\">victoire</td> <td class=\"f\">victoires</td></tr>\n</table></div>",
   "qp": {
    "id": "q-fr-par-nouns",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"fr\">hôpital</i>?",
      "options": [
       "<i lang=\"fr\">hôpitals</i>",
       "<i lang=\"fr\">hôpitaux</i>",
       "<i lang=\"fr\">hôpitales</i>",
       "<i lang=\"fr\">hôpitau</i>"
      ],
      "answer": 1,
      "explain": "Like <i lang=\"fr\">cheval</i>, most nouns in <i lang=\"fr\">-al</i> have <i lang=\"fr\">-aux</i>."
     },
     {
      "prompt": "What is the plural of <i lang=\"fr\">gâteau</i>?",
      "options": [
       "<i lang=\"fr\">gâteaus</i>",
       "<i lang=\"fr\">gâteals</i>",
       "<i lang=\"fr\">gâteaux</i>",
       "<i lang=\"fr\">gâteau</i>"
      ],
      "answer": 2,
      "explain": "Like <i lang=\"fr\">cadeau</i>, nouns in <i lang=\"fr\">-eau</i> take <i lang=\"fr\">-x</i>."
     },
     {
      "prompt": "What is the feminine of <i lang=\"fr\">voisin</i> (“neighbor”)?",
      "options": [
       "<i lang=\"fr\">voisinne</i>",
       "<i lang=\"fr\">voisinesse</i>",
       "<i lang=\"fr\">voisin</i>",
       "<i lang=\"fr\">voisine</i>"
      ],
      "answer": 3,
      "explain": "Like <i lang=\"fr\">ami</i>, <i lang=\"fr\">amie</i>, the feminine adds <i lang=\"fr\">-e</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-3",
   "title": "Adjectives",
   "body": "<p><strong>Adjectives</strong>, by gender and number</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine singular</th> <th>Feminine singular</th> <th>Masculine plural</th> <th>Feminine plural</th></tr>\n<tr><td>bon</td> <td class=\"f\">bon</td> <td class=\"f\">bonne</td> <td class=\"f\">bons</td> <td class=\"f\">bonnes</td></tr>\n<tr><td>petit</td> <td class=\"f\">petit</td> <td class=\"f\">petite</td> <td class=\"f\">petits</td> <td class=\"f\">petites</td></tr>\n<tr><td>grand</td> <td class=\"f\">grand</td> <td class=\"f\">grande</td> <td class=\"f\">grands</td> <td class=\"f\">grandes</td></tr>\n<tr><td>beau</td> <td class=\"f\">beau (bel before a vowel)</td> <td class=\"f\">belle</td> <td class=\"f\">beaux</td> <td class=\"f\">belles</td></tr>\n<tr><td>vieux</td> <td class=\"f\">vieux (vieil before a vowel)</td> <td class=\"f\">vieille</td> <td class=\"f\">vieux</td> <td class=\"f\">vieilles</td></tr>\n<tr><td>heureux</td> <td class=\"f\">heureux</td> <td class=\"f\">heureuse</td> <td class=\"f\">heureux</td> <td class=\"f\">heureuses</td></tr>\n</table></div>",
   "qp": {
    "id": "q-fr-par-adjectives",
    "variants": [
     {
      "prompt": "What is the feminine singular of <i lang=\"fr\">dangereux</i> (“dangerous”)?",
      "options": [
       "<i lang=\"fr\">dangereuse</i>",
       "<i lang=\"fr\">dangereuxe</i>",
       "<i lang=\"fr\">dangereuses</i>",
       "<i lang=\"fr\">dangereux</i>"
      ],
      "answer": 0,
      "explain": "Adjectives in <i lang=\"fr\">-eux</i> have the feminine in <i lang=\"fr\">-euse</i>."
     },
     {
      "prompt": "Which form of <i lang=\"fr\">vieux</i> stands before a masculine noun beginning with a vowel?",
      "options": [
       "<i lang=\"fr\">vieux</i>",
       "<i lang=\"fr\">vieille</i>",
       "<i lang=\"fr\">vielle</i>",
       "<i lang=\"fr\">vieil</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Un vieil homme</i>: before a vowel, <i lang=\"fr\">vieux</i> becomes <i lang=\"fr\">vieil</i>."
     },
     {
      "prompt": "What is the masculine plural of <i lang=\"fr\">beau</i>?",
      "options": [
       "<i lang=\"fr\">beaus</i>",
       "<i lang=\"fr\">bels</i>",
       "<i lang=\"fr\">beaux</i>",
       "<i lang=\"fr\">belles</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Beau</i> has <i lang=\"fr\">-x</i> in the masculine plural."
     }
    ]
   }
  },
  {
   "id": "paradigms-4",
   "title": "Personal pronouns",
   "body": "<p><strong>Personal pronouns</strong></p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Subject</th> <th>Direct object</th> <th>Indirect object</th> <th>Stressed</th> <th>Reflexive</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">je</td> <td class=\"f\">me</td> <td class=\"f\">me</td> <td class=\"f\">moi</td> <td class=\"f\">me</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">tu</td> <td class=\"f\">te</td> <td class=\"f\">te</td> <td class=\"f\">toi</td> <td class=\"f\">te</td></tr>\n<tr><td>3rd singular, masculine</td> <td class=\"f\">il</td> <td class=\"f\">le</td> <td class=\"f\"></td> <td class=\"f\">lui</td> <td class=\"f\"></td></tr>\n<tr><td>3rd singular, feminine</td> <td class=\"f\">elle</td> <td class=\"f\">la</td> <td class=\"f\"></td> <td class=\"f\">elle</td> <td class=\"f\"></td></tr>\n<tr><td>3rd singular, indefinite</td> <td class=\"f\">on</td> <td class=\"f\"></td> <td class=\"f\"></td> <td class=\"f\">soi</td> <td class=\"f\"></td></tr>\n<tr><td>1st plural</td> <td class=\"f\">nous</td> <td class=\"f\">nous</td> <td class=\"f\">nous</td> <td class=\"f\">nous</td> <td class=\"f\">nous</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">vous</td> <td class=\"f\">vous</td> <td class=\"f\">vous</td> <td class=\"f\">vous</td> <td class=\"f\">vous</td></tr>\n<tr><td>3rd plural, masculine</td> <td class=\"f\">ils</td> <td class=\"f\"></td> <td class=\"f\"></td> <td class=\"f\">eux</td> <td class=\"f\"></td></tr>\n<tr><td>3rd plural, feminine</td> <td class=\"f\">elles</td> <td class=\"f\"></td> <td class=\"f\"></td> <td class=\"f\">elles</td> <td class=\"f\"></td></tr>\n<tr><td>3rd singular, before a vowel</td> <td class=\"f\"></td> <td class=\"f\">l’</td> <td class=\"f\"></td> <td class=\"f\"></td> <td class=\"f\"></td></tr>\n<tr><td>3rd plural</td> <td class=\"f\"></td> <td class=\"f\">les</td> <td class=\"f\">leur</td> <td class=\"f\"></td> <td class=\"f\">se</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\"></td> <td class=\"f\"></td> <td class=\"f\">lui</td> <td class=\"f\"></td> <td class=\"f\">se</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-5",
   "title": "être",
   "body": "<p><strong>être</strong> (“to be”), irregular</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">suis</td> <td class=\"f\">ai été</td> <td class=\"f\">étais</td> <td class=\"f\">serai</td> <td class=\"f\">sois</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">es</td> <td class=\"f\">as été</td> <td class=\"f\">étais</td> <td class=\"f\">seras</td> <td class=\"f\">sois</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">est</td> <td class=\"f\">a été</td> <td class=\"f\">était</td> <td class=\"f\">sera</td> <td class=\"f\">soit</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">sommes</td> <td class=\"f\">avons été</td> <td class=\"f\">étions</td> <td class=\"f\">serons</td> <td class=\"f\">soyons</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">êtes</td> <td class=\"f\">avez été</td> <td class=\"f\">étiez</td> <td class=\"f\">serez</td> <td class=\"f\">soyez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">sont</td> <td class=\"f\">ont été</td> <td class=\"f\">étaient</td> <td class=\"f\">seront</td> <td class=\"f\">soient</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">étant</em>; past participle <em lang=\"fr\">été</em>.</p>",
   "qp": {
    "id": "q-fr-par-etre",
    "variants": [
     {
      "prompt": "What is the third person plural present of <i lang=\"fr\">être</i>?",
      "options": [
       "<i lang=\"fr\">sont</i>",
       "<i lang=\"fr\">ont</i>",
       "<i lang=\"fr\">sommes</i>",
       "<i lang=\"fr\">étaient</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Ils sont</i>; <i lang=\"fr\">ils ont</i> is <i lang=\"fr\">avoir</i>."
     },
     {
      "prompt": "What is the <i lang=\"fr\">imparfait</i>, third person singular, of <i lang=\"fr\">être</i>?",
      "options": [
       "<i lang=\"fr\">sera</i>",
       "<i lang=\"fr\">est</i>",
       "<i lang=\"fr\">soit</i>",
       "<i lang=\"fr\">était</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Être</i> has the <i lang=\"fr\">imparfait</i> stem <i lang=\"fr\">ét-</i>: <i lang=\"fr\">il était</i>."
     },
     {
      "prompt": "What is the <i lang=\"fr\">passé composé</i> of <i lang=\"fr\">être</i>, first person singular?",
      "options": [
       "<i lang=\"fr\">je suis été</i>",
       "<i lang=\"fr\">j’étais</i>",
       "<i lang=\"fr\">j’ai été</i>",
       "<i lang=\"fr\">je fus</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Être</i> itself takes <i lang=\"fr\">avoir</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-6",
   "title": "avoir",
   "body": "<p><strong>avoir</strong> (“to have”), irregular</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">ai</td> <td class=\"f\">ai eu</td> <td class=\"f\">avais</td> <td class=\"f\">aurai</td> <td class=\"f\">aie</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">as</td> <td class=\"f\">as eu</td> <td class=\"f\">avais</td> <td class=\"f\">auras</td> <td class=\"f\">aies</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">a</td> <td class=\"f\">a eu</td> <td class=\"f\">avait</td> <td class=\"f\">aura</td> <td class=\"f\">ait</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">avons</td> <td class=\"f\">avons eu</td> <td class=\"f\">avions</td> <td class=\"f\">aurons</td> <td class=\"f\">ayons</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">avez</td> <td class=\"f\">avez eu</td> <td class=\"f\">aviez</td> <td class=\"f\">aurez</td> <td class=\"f\">ayez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">ont</td> <td class=\"f\">ont eu</td> <td class=\"f\">avaient</td> <td class=\"f\">auront</td> <td class=\"f\">aient</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">ayant</em>; past participle <em lang=\"fr\">eu, eue, eus, eues</em>.</p>",
   "qp": {
    "id": "q-fr-par-avoir",
    "variants": [
     {
      "prompt": "What is the second person singular present of <i lang=\"fr\">avoir</i>?",
      "options": [
       "<i lang=\"fr\">a</i>",
       "<i lang=\"fr\">es</i>",
       "<i lang=\"fr\">avez</i>",
       "<i lang=\"fr\">as</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">J’ai, tu as, il a</i>."
     },
     {
      "prompt": "What is the future, third person plural, of <i lang=\"fr\">avoir</i>?",
      "options": [
       "<i lang=\"fr\">auront</i>",
       "<i lang=\"fr\">avront</i>",
       "<i lang=\"fr\">ont</i>",
       "<i lang=\"fr\">auraient</i>"
      ],
      "answer": 0,
      "explain": "The future stem of <i lang=\"fr\">avoir</i> is <i lang=\"fr\">aur-</i>."
     },
     {
      "prompt": "What is the past participle of <i lang=\"fr\">avoir</i>?",
      "options": [
       "<i lang=\"fr\">avé</i>",
       "<i lang=\"fr\">eu</i>",
       "<i lang=\"fr\">avu</i>",
       "<i lang=\"fr\">été</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Avoir</i> has the participle <i lang=\"fr\">eu</i>: <i lang=\"fr\">j’ai eu</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-7",
   "title": "parler",
   "body": "<p><strong>parler</strong> (“to speak”), regular -er, first group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">parle</td> <td class=\"f\">ai parlé</td> <td class=\"f\">parlais</td> <td class=\"f\">parlerai</td> <td class=\"f\">parle</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">parles</td> <td class=\"f\">as parlé</td> <td class=\"f\">parlais</td> <td class=\"f\">parleras</td> <td class=\"f\">parles</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">parle</td> <td class=\"f\">a parlé</td> <td class=\"f\">parlait</td> <td class=\"f\">parlera</td> <td class=\"f\">parle</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">parlons</td> <td class=\"f\">avons parlé</td> <td class=\"f\">parlions</td> <td class=\"f\">parlerons</td> <td class=\"f\">parlions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">parlez</td> <td class=\"f\">avez parlé</td> <td class=\"f\">parliez</td> <td class=\"f\">parlerez</td> <td class=\"f\">parliez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">parlent</td> <td class=\"f\">ont parlé</td> <td class=\"f\">parlaient</td> <td class=\"f\">parleront</td> <td class=\"f\">parlent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">parlant</em>; past participle <em lang=\"fr\">parlé, parlée, parlés, parlées</em>.</p>"
  },
  {
   "id": "paradigms-8",
   "title": "finir",
   "body": "<p><strong>finir</strong> (“to finish”), regular -ir, second group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">finis</td> <td class=\"f\">ai fini</td> <td class=\"f\">finissais</td> <td class=\"f\">finirai</td> <td class=\"f\">finisse</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">finis</td> <td class=\"f\">as fini</td> <td class=\"f\">finissais</td> <td class=\"f\">finiras</td> <td class=\"f\">finisses</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">finit</td> <td class=\"f\">a fini</td> <td class=\"f\">finissait</td> <td class=\"f\">finira</td> <td class=\"f\">finisse</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">finissons</td> <td class=\"f\">avons fini</td> <td class=\"f\">finissions</td> <td class=\"f\">finirons</td> <td class=\"f\">finissions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">finissez</td> <td class=\"f\">avez fini</td> <td class=\"f\">finissiez</td> <td class=\"f\">finirez</td> <td class=\"f\">finissiez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">finissent</td> <td class=\"f\">ont fini</td> <td class=\"f\">finissaient</td> <td class=\"f\">finiront</td> <td class=\"f\">finissent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">finissant</em>; past participle <em lang=\"fr\">fini, finie, finis, finies</em>.</p>"
  },
  {
   "id": "paradigms-9",
   "title": "vendre",
   "body": "<p><strong>vendre</strong> (“to sell”), regular -re, third group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">vends</td> <td class=\"f\">ai vendu</td> <td class=\"f\">vendais</td> <td class=\"f\">vendrai</td> <td class=\"f\">vende</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">vends</td> <td class=\"f\">as vendu</td> <td class=\"f\">vendais</td> <td class=\"f\">vendras</td> <td class=\"f\">vendes</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">vend</td> <td class=\"f\">a vendu</td> <td class=\"f\">vendait</td> <td class=\"f\">vendra</td> <td class=\"f\">vende</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">vendons</td> <td class=\"f\">avons vendu</td> <td class=\"f\">vendions</td> <td class=\"f\">vendrons</td> <td class=\"f\">vendions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">vendez</td> <td class=\"f\">avez vendu</td> <td class=\"f\">vendiez</td> <td class=\"f\">vendrez</td> <td class=\"f\">vendiez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">vendent</td> <td class=\"f\">ont vendu</td> <td class=\"f\">vendaient</td> <td class=\"f\">vendront</td> <td class=\"f\">vendent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">vendant</em>; past participle <em lang=\"fr\">vendu, vendue, vendus, vendues</em>.</p>"
  },
  {
   "id": "paradigms-10",
   "title": "aller",
   "body": "<p><strong>aller</strong> (“to go”), irregular, third group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">vais</td> <td class=\"f\">suis allé</td> <td class=\"f\">allais</td> <td class=\"f\">irai</td> <td class=\"f\">aille</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">vas</td> <td class=\"f\">es allé</td> <td class=\"f\">allais</td> <td class=\"f\">iras</td> <td class=\"f\">ailles</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">va</td> <td class=\"f\">est allé</td> <td class=\"f\">allait</td> <td class=\"f\">ira</td> <td class=\"f\">aille</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">allons</td> <td class=\"f\">sommes allés</td> <td class=\"f\">allions</td> <td class=\"f\">irons</td> <td class=\"f\">allions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">allez</td> <td class=\"f\">êtes allés</td> <td class=\"f\">alliez</td> <td class=\"f\">irez</td> <td class=\"f\">alliez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">vont</td> <td class=\"f\">sont allés</td> <td class=\"f\">allaient</td> <td class=\"f\">iront</td> <td class=\"f\">aillent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">allant</em>; past participle <em lang=\"fr\">allé, allée, allés, allées</em>.</p>",
   "qp": {
    "id": "q-fr-par-aller",
    "variants": [
     {
      "prompt": "What is the first person plural present of <i lang=\"fr\">aller</i>?",
      "options": [
       "<i lang=\"fr\">allons</i>",
       "<i lang=\"fr\">vont</i>",
       "<i lang=\"fr\">allez</i>",
       "<i lang=\"fr\">irons</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Aller</i> uses three stems: <i lang=\"fr\">je vais</i>, <i lang=\"fr\">nous allons</i>, <i lang=\"fr\">j’irai</i>."
     },
     {
      "prompt": "What is the future stem of <i lang=\"fr\">aller</i>?",
      "options": [
       "<i lang=\"fr\">aller-</i>",
       "<i lang=\"fr\">va-</i>",
       "<i lang=\"fr\">all-</i>",
       "<i lang=\"fr\">ir-</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">J’irai</i>, <i lang=\"fr\">tu iras</i>."
     },
     {
      "prompt": "Which auxiliary does <i lang=\"fr\">aller</i> take?",
      "options": [
       "<i lang=\"fr\">avoir</i>",
       "<i lang=\"fr\">faire</i>",
       "<i lang=\"fr\">être</i>",
       "<i lang=\"fr\">venir</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Je suis allé</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-11",
   "title": "faire",
   "body": "<p><strong>faire</strong> (“to do, to make”), irregular, third group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">fais</td> <td class=\"f\">ai fait</td> <td class=\"f\">faisais</td> <td class=\"f\">ferai</td> <td class=\"f\">fasse</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">fais</td> <td class=\"f\">as fait</td> <td class=\"f\">faisais</td> <td class=\"f\">feras</td> <td class=\"f\">fasses</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">fait</td> <td class=\"f\">a fait</td> <td class=\"f\">faisait</td> <td class=\"f\">fera</td> <td class=\"f\">fasse</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">faisons</td> <td class=\"f\">avons fait</td> <td class=\"f\">faisions</td> <td class=\"f\">ferons</td> <td class=\"f\">fassions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">faites</td> <td class=\"f\">avez fait</td> <td class=\"f\">faisiez</td> <td class=\"f\">ferez</td> <td class=\"f\">fassiez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">font</td> <td class=\"f\">ont fait</td> <td class=\"f\">faisaient</td> <td class=\"f\">feront</td> <td class=\"f\">fassent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">faisant</em>; past participle <em lang=\"fr\">fait, faite, faits, faites</em>.</p>"
  },
  {
   "id": "paradigms-12",
   "title": "venir",
   "body": "<p><strong>venir</strong> (“to come”), irregular, third group</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th><i lang=\"fr\">Passé composé</i></th> <th><i lang=\"fr\">Imparfait</i></th> <th>Futur</th> <th>Subjonctif présent</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">viens</td> <td class=\"f\">suis venu</td> <td class=\"f\">venais</td> <td class=\"f\">viendrai</td> <td class=\"f\">vienne</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">viens</td> <td class=\"f\">es venu</td> <td class=\"f\">venais</td> <td class=\"f\">viendras</td> <td class=\"f\">viennes</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">vient</td> <td class=\"f\">est venu</td> <td class=\"f\">venait</td> <td class=\"f\">viendra</td> <td class=\"f\">vienne</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">venons</td> <td class=\"f\">sommes venus</td> <td class=\"f\">venions</td> <td class=\"f\">viendrons</td> <td class=\"f\">venions</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">venez</td> <td class=\"f\">êtes venus</td> <td class=\"f\">veniez</td> <td class=\"f\">viendrez</td> <td class=\"f\">veniez</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">viennent</td> <td class=\"f\">sont venus</td> <td class=\"f\">venaient</td> <td class=\"f\">viendront</td> <td class=\"f\">viennent</td></tr>\n</table></div><p>Present participle <em lang=\"fr\">venant</em>; past participle <em lang=\"fr\">venu, venue, venus, venues</em>.</p>"
  }
 ]
};
