window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.es/government"] = {
 "id": "lang.v.es/government",
 "title": "Government: The Personal a, Prepositions, the Indirect Object, and Leísmo",
 "sub": "The personal a, the prepositions that verbs govern, the indirect object, gustar and verbs like it, and leísmo as the Academy describes it.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 16.5, 33.2, 34.3, 35.1 to 35.3, and 36.1 to 36.3; Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "government-1",
   "title": "The personal a",
   "body": "<p>In English a direct object follows the verb with no preposition, whether it names a person or a thing: “She greeted the guests,” “She opened the drawer.” In Spanish a direct object that names a person has the preposition <i lang=\"es\">a</i> before it, and one that names a thing does not: <i lang=\"es\">Saludó a los invitados</i> and <i lang=\"es\">Abrió el cajón</i>. This is the personal <i lang=\"es\">a</i>. It is required before the proper names of persons and of animals, and the common names of animals follow in many contexts, especially the names of domestic animals: <i lang=\"es\">Los niños acariciaban al caballo</i> (“The children were stroking the horse”). It is also required before the name of a thing that is personified, as in <i lang=\"es\">adorar al sol</i> (“to worship the sun”), and before the names of companies, corporations, and institutions, which stand for groups of persons: <i lang=\"es\">Los empleados denunciaron a la empresa</i> (“The employees reported the company”) (Manual 34.3.1).</p><p>Whether the <i lang=\"es\">a</i> stands depends also on the verb. The Academy sorts the transitive verbs into three groups: verbs that require the <i lang=\"es\">a</i> before a direct object that names persons, verbs that reject it, and verbs that allow it (Manual 34.3.3). The first group includes verbs that alternate between a direct and an indirect object, such as <i lang=\"es\">ayudar</i>, <i lang=\"es\">obedecer</i>, <i lang=\"es\">servir</i>, and <i lang=\"es\">insultar</i>, and verbs of feeling that affect a person, such as <i lang=\"es\">asustar</i> and <i lang=\"es\">impresionar</i>: <i lang=\"es\">El retraso molestó a muchos viajeros</i> (“The delay annoyed many travelers”). Some of these verbs already took the dative in Latin, as <i lang=\"la\">hominī serviō</i>, “I serve the man,” does (Allen and Greenough §274 a). Verbs of causation, such as <i lang=\"es\">producir</i>, reject the <i lang=\"es\">a</i>, and so do the verbs of existence <i lang=\"es\">haber</i> and <i lang=\"es\">tener</i>, except that <i lang=\"es\">tener</i> takes it in the sense “to give birth to.” With verbs of the third group the <i lang=\"es\">a</i> changes the meaning: <i lang=\"es\">Conozco varios dentistas en la ciudad</i> says only that the speaker knows that they exist, whereas <i lang=\"es\">Conozco a varios dentistas en la ciudad</i> suggests an acquaintance with them. With an indefinite noun the difference is of the same kind: <i lang=\"es\">Necesito el mejor abogado</i> (“I need the best lawyer”), without <i lang=\"es\">a</i>, looks to a type, whoever fits the description, whereas <i lang=\"es\">Necesito al mejor abogado</i> speaks of a particular individual (Manual 34.3.3).</p><p>When a verb has two persons as objects, a direct and an indirect object, both take <i lang=\"es\">a</i>: <i lang=\"es\">Presentó a Elena a Julián</i> (“She introduced Elena to Julián”). The grammar once advised against the first <i lang=\"es\">a</i>, but the form with both has prevailed. The rule has changed also for the names of places: the Academy's grammar of 1931 recommended <i lang=\"es\">visitaremos a Granada</i>, whereas the present preference is <i lang=\"es\">visitaremos Granada</i> (Manual 34.3.1 and 34.3.3).</p>",
   "qp": {
    "id": "q-es-gov-a",
    "variants": [
     {
      "prompt": "Which of these direct objects takes the personal <i lang=\"es\">a</i>?",
      "options": [
       "<i lang=\"es\">el sillón</i>, an armchair in the room",
       "<i lang=\"es\">una piedra</i>, a stone on the path",
       "<i lang=\"es\">Lucero</i>, a dog’s name",
       "<i lang=\"es\">la lluvia</i>, the ordinary rain"
      ],
      "answer": 2,
      "explain": "The proper names of persons and of animals take the personal <i lang=\"es\">a</i>, whereas the names of things do not, unless the thing is personified."
     },
     {
      "prompt": "What does the <i lang=\"es\">a</i> change in <i lang=\"es\">Buscamos a un cocinero</i>, compared with <i lang=\"es\">Buscamos un cocinero</i>?",
      "options": [
       "With <i lang=\"es\">a</i>, the speakers have a particular cook in mind",
       "With <i lang=\"es\">a</i>, the sentence is in a more formal register",
       "With <i lang=\"es\">a</i>, the object is understood as plural",
       "Nothing changes, because the <i lang=\"es\">a</i> is optional here"
      ],
      "answer": 0,
      "explain": "With a verb of seeking, the <i lang=\"es\">a</i> points to a particular individual, and its absence looks to a type."
     },
     {
      "prompt": "Which sentence follows the Academy's rule for a verb with two persons as objects, a direct object and an indirect object?",
      "options": [
       "<i lang=\"es\">Recomendó a Marta a su jefe</i>",
       "<i lang=\"es\">Recomendó Marta a su jefe</i>",
       "<i lang=\"es\">Recomendó a Marta su jefe</i>",
       "<i lang=\"es\">Recomendó Marta su jefe a</i>"
      ],
      "answer": 0,
      "explain": "When a verb has two persons as objects, both take the personal <i lang=\"es\">a</i>, and the form with both has prevailed."
     }
    ]
   }
  },
  {
   "id": "government-2",
   "title": "The prepositions that verbs govern",
   "body": "<p>A verb may also require a particular preposition before a complement that is not its direct object. English has “depend on,” “think of,” “wait for,” and “look at,” and the preposition cannot be worked out from the meaning alone. Spanish is the same. The Academy calls a prepositional phrase that the verb requires a <strong>complement of government</strong> (<i lang=\"es\">complemento de régimen</i>), and the verb chooses the preposition, as in <i lang=\"es\">depender de</i>, <i lang=\"es\">pensar en</i>, <i lang=\"es\">optar por</i>, <i lang=\"es\">recurrir a</i>, and <i lang=\"es\">disfrutar de</i>. The choice is usually motivated by the meaning of the verb and by its history, but this does not make it predictable. Verbs close in meaning can govern different prepositions: <i lang=\"es\">confiar</i> takes <i lang=\"es\">en</i>, and <i lang=\"es\">fiarse</i> takes <i lang=\"es\">de</i>. Sometimes the preposition fits the meaning of the verb, as <i lang=\"es\">sacar</i> takes <i lang=\"es\">de</i>, which marks the place of origin, and <i lang=\"es\">dirigirse</i> takes <i lang=\"es\">a</i>, like other verbs of direction; sometimes it repeats the prefix of the verb, as in <i lang=\"es\">colaborar con</i> (Manual 36.1.1).</p><p>Some verbs govern a single preposition, and others allow several. Verbs of direction often allow several, as <i lang=\"es\">viajar a</i>, <i lang=\"es\">viajar hacia</i>, and <i lang=\"es\">viajar hasta</i> <i lang=\"es\">algún sitio</i>. When the prepositions differ in meaning, the verb changes with them, as <i lang=\"es\">empezar por</i> (“to do first”) and <i lang=\"es\">empezar a</i> (“to begin to”); with other verbs there is no noticeable change, as in <i lang=\"es\">mirar a</i> and <i lang=\"es\">mirar hacia</i>. A verb with a reflexive pronoun may take a different complement from the same verb without it: <i lang=\"es\">despedir a alguien</i> (“to dismiss someone”) and <i lang=\"es\">despedirse de alguien</i> (“to take leave of someone”) (Manual 36.1.2 and 36.3). Some speakers repeat the sense of the preposition, as in <i lang=\"es\">enfrentarse contra los enemigos</i>, but the educated language prefers <i lang=\"es\">enfrentarse a los enemigos</i> (Manual 36.1.1). Nouns and adjectives that come from verbs keep the government of the verb: <i lang=\"es\">depender de</i>, <i lang=\"es\">dependencia de</i>, <i lang=\"es\">dependiente de</i>. A Latin verb governs a case, and not a preposition: <i lang=\"la\">hominis misereor</i>, “I pity the man,” takes the genitive (Allen and Greenough §274 a).</p>",
   "qp": {
    "id": "q-es-gov-prep",
    "variants": [
     {
      "prompt": "Which statement is true of the preposition after <i lang=\"es\">arrepentirse</i>?",
      "options": [
       "The meaning of the verb always shows which preposition it takes",
       "It is always <i lang=\"es\">a</i>, as in the personal <i lang=\"es\">a</i> before persons",
       "The verb chooses it; the meaning does not predict it",
       "The speaker may choose it freely, as with an adjunct"
      ],
      "answer": 2,
      "explain": "A complement of government has a preposition chosen by the verb, and the Academy notes that this choice is not predictable."
     },
     {
      "prompt": "Which sentence has the preposition that the educated language prefers?",
      "options": [
       "<i lang=\"es\">Se enfrentaron a los enemigos</i>",
       "<i lang=\"es\">Se enfrentaron contra los enemigos</i>",
       "<i lang=\"es\">Se enfrentaron de los enemigos</i>",
       "<i lang=\"es\">Se enfrentaron por los enemigos</i>"
      ],
      "answer": 0,
      "explain": "The educated language prefers <i lang=\"es\">enfrentarse a</i>, and the use of <i lang=\"es\">contra</i> repeats the sense of the preposition."
     },
     {
      "prompt": "Which preposition completes <i lang=\"es\">la colaboración ___ la universidad</i>?",
      "options": [
       "<i lang=\"es\">con</i>",
       "<i lang=\"es\">de</i>",
       "<i lang=\"es\">por</i>",
       "<i lang=\"es\">en</i>"
      ],
      "answer": 0,
      "explain": "A noun that comes from a verb keeps the government of the verb, and <i lang=\"es\">colaborar</i> takes <i lang=\"es\">con</i>."
     }
    ]
   }
  },
  {
   "id": "government-3",
   "title": "The indirect object, gustar, and verbs of feeling",
   "body": "<p>In English a verb of giving or telling can have two objects: “She gave the key to her neighbor” or “She gave her neighbor the key.” The one who receives is the indirect object. In Spanish the indirect object is a dative pronoun, <i lang=\"es\">le</i> or <i lang=\"es\">les</i>, or a phrase with <i lang=\"es\">a</i> that a dative pronoun can replace: <i lang=\"es\">Entregó el paquete al portero</i> (“She handed the package to the doorman”) becomes <i lang=\"es\">Le entregó el paquete</i> (Manual 35.1.1). The pronoun and the phrase may stand together, and then the pronoun repeats the phrase. The pronoun is required when the phrase is a stressed pronoun, <i lang=\"es\">Me lo dijeron a mí</i> and not <i lang=\"es\">Lo dijeron a mí</i>, and when the phrase begins the sentence, <i lang=\"es\">Al portero le entregó el paquete</i>. It may be left out when the phrase is a noun, and the omission belongs to a more formal register (Manual 35.2.3). A phrase with <i lang=\"es\">para</i> is not an indirect object, because a dative pronoun cannot replace it, and the two can stand together with different referents: in <i lang=\"es\">Le dio un regalo para su amiga</i> the pronoun and the phrase name different persons (Manual 35.1.1). Latin puts the indirect object in the dative: <i lang=\"la\">dō tibi librum</i>, “I give you a book” (Allen and Greenough §362). Spanish nouns have no dative, and the dative remains only in the pronouns and in the phrase with <i lang=\"es\">a</i>.</p><p>In English the person who likes something is the subject: “I like storms.” In Spanish <i lang=\"es\">gustar</i> is built the other way: the thing that pleases is the subject, and the one who likes it is the indirect object. <i lang=\"es\">Me gustan las tormentas</i> means literally “Storms please me,” and the verb agrees with <i lang=\"es\">las tormentas</i>, so that it is <i lang=\"es\">gusta</i> before a singular noun or an infinitive and <i lang=\"es\">gustan</i> before a plural noun. The Academy calls the verbs of this kind verbs of affection and lists among them <i lang=\"es\">aburrir</i>, <i lang=\"es\">agradar</i>, <i lang=\"es\">alegrar</i>, <i lang=\"es\">asombrar</i>, <i lang=\"es\">cansar</i>, <i lang=\"es\">doler</i>, <i lang=\"es\">encantar</i>, <i lang=\"es\">entusiasmar</i>, <i lang=\"es\">interesar</i>, <i lang=\"es\">molestar</i>, <i lang=\"es\">preocupar</i>, and <i lang=\"es\">sorprender</i>. The indirect object names the one who feels, and the subject names the cause of the feeling (Manual 35.3.1). Latin has the same construction with <i lang=\"la\">placēre</i>: <i lang=\"la\">mihi placet</i>, “it is pleasing to me,” puts the one who is pleased in the dative, and verbs of pleasing, helping, and trusting take the dative in general (Allen and Greenough §274 and §367).</p><p>With these verbs the pronoun is ordinarily present even when the person is also named by a phrase with <i lang=\"es\">a</i>: <i lang=\"es\">A mi padre le duelen los pies</i> (“My father's feet hurt”). It may be left out when the phrase is <i lang=\"es\">todos</i> or a word such as <i lang=\"es\">nadie</i> (Manual 35.2.3). The indirect object also supplies the subject of an infinitive that follows: in <i lang=\"es\">A Mateo le gusta cantar en la ducha</i> (“Mateo likes to sing in the shower”) the one who sings is Mateo (Manual 35.3.1). The Academy notes that the formal registers have also a variant of <i lang=\"es\">gustar</i> in which the one who likes is the subject and the thing liked is a complement of government: <i lang=\"es\">Mi abuelo gustaba de pasear al atardecer</i> (“My grandfather liked to walk at dusk”) (Manual 33.2.2).</p>",
   "qp": {
    "id": "q-es-gov-io",
    "variants": [
     {
      "prompt": "In <i lang=\"es\">Mandó una carta al director</i> (“She sent a letter to the director”), which pronoun can replace <i lang=\"es\">al director</i>?",
      "options": [
       "<i lang=\"es\">le</i>",
       "<i lang=\"es\">lo</i>",
       "<i lang=\"es\">los</i>",
       "<i lang=\"es\">les</i>"
      ],
      "answer": 0,
      "explain": "A phrase with <i lang=\"es\">a</i> that names the one who receives is an indirect object, and a singular dative pronoun replaces it."
     },
     {
      "prompt": "In <i lang=\"es\">A Marisa le interesa la historia</i> (“History interests Marisa”), which word is the subject?",
      "options": [
       "<i lang=\"es\">Marisa</i>, the one who feels the interest",
       "<i lang=\"es\">le</i>, the pronoun",
       "<i lang=\"es\">la historia</i>, the cause of the interest",
       "<i lang=\"es\">interesa</i>, the verb"
      ],
      "answer": 2,
      "explain": "With verbs of affection the subject names the cause, and the indirect object names the one who feels. The verb agrees with the subject."
     },
     {
      "prompt": "Why is the phrase with <i lang=\"es\">para</i> not an indirect object in <i lang=\"es\">Compró flores para su madre</i>?",
      "options": [
       "A dative pronoun cannot replace it",
       "<i lang=\"es\">Para</i> marks purpose only",
       "<i lang=\"es\">Comprar</i> takes no indirect object",
       "The phrase follows the direct object"
      ],
      "answer": 0,
      "explain": "The Academy takes as indirect objects the phrases with <i lang=\"es\">a</i> that a dative pronoun can replace, and a phrase with <i lang=\"es\">para</i> is not replaced in this way."
     }
    ]
   }
  },
  {
   "id": "government-4",
   "title": "Leísmo",
   "body": "<p>Spanish keeps two sets of forms in the third person: <i lang=\"es\">lo</i>, <i lang=\"es\">la</i>, <i lang=\"es\">los</i>, and <i lang=\"es\">las</i> for the direct object, the accusative, and <i lang=\"es\">le</i> and <i lang=\"es\">les</i> for the indirect object, the dative. So we say <i lang=\"es\">Lo vi</i> (“I saw him”) and <i lang=\"es\">Le di un libro</i> (“I gave him a book”), where English has “him” in both. Latin distinguished the cases in its pronouns, <i lang=\"la\">illum</i> and <i lang=\"la\">illī</i> (Allen and Greenough §146), and Spanish keeps the distinction only in the third person, since <i lang=\"es\">me</i>, <i lang=\"es\">te</i>, <i lang=\"es\">nos</i>, and <i lang=\"es\">os</i> serve for both. The use of <i lang=\"es\">le</i> or <i lang=\"es\">les</i> for a direct object is called <strong>leísmo</strong>: <i lang=\"es\">Le mataron</i> (“They killed him”). It concerns the form of the pronoun and not its function.</p><p>The Academy distinguishes three kinds of leísmo (Manual 16.5.1):</p><p><strong>Leísmo of masculine persons</strong>: <i lang=\"es\">A Mario le premiaron en el colegio</i> (“Mario was given a prize at school”).<br><strong>Leísmo of feminine persons</strong>: <i lang=\"es\">A Laura le premiaron en el colegio</i>.<br><strong>Leísmo of things</strong>: <i lang=\"es\">Te devuelvo el libro porque ya le he leído</i> (“I am returning the book to you because I have already read it”).</p><p>The leísmo of courtesy, a variant of the first two kinds, is limited to the uses in which <i lang=\"es\">le</i> agrees with <i lang=\"es\">usted</i>: <i lang=\"es\">Le saludo atentamente</i> (“I greet you attentively”). The Academy judges the kinds differently. Of the leísmo of masculine persons it says that in the singular <i lang=\"es\">no se considera incorrecto</i> (“is not considered incorrect”) and in the plural <i lang=\"es\">no se recomienda</i> (“is not recommended”). Of the leísmo of feminine persons it says that it <i lang=\"es\">carece de prestigio y se considera incorrecto</i> (“lacks prestige and is considered incorrect”), and it considers the leísmo of things incorrect as well. The leísmo of masculine persons is considerably more frequent in the texts of Spain than in those of America. Verbs such as <i lang=\"es\">ayudar</i>, <i lang=\"es\">molestar</i>, and <i lang=\"es\">obligar</i> are constructed by some speakers with the dative and by others with the accusative, and in impersonal sentences with <i lang=\"es\">se</i> the dative is now the majority use: <i lang=\"es\">Se le escuchó con atención</i> (“He was listened to attentively”) (Manual 16.5.1).</p>\n",
   "qp": {
    "id": "q-es-gov-leismo",
    "variants": [
     {
      "prompt": "What is leísmo?",
      "options": [
       "The use of <i lang=\"es\">lo</i> or <i lang=\"es\">la</i> for an indirect object",
       "The use of <i lang=\"es\">le</i> or <i lang=\"es\">les</i> for a direct object",
       "The omission of the pronoun before a verb",
       "The use of <i lang=\"es\">se</i> in place of <i lang=\"es\">le</i> before <i lang=\"es\">lo</i>"
      ],
      "answer": 1,
      "explain": "Leísmo is the use of the dative forms in the place of the accusative."
     },
     {
      "prompt": "According to the Academy, what is true of the leísmo of masculine persons in the singular?",
      "options": [
       "The Academy considers it incorrect, like the leísmo of things",
       "The Academy does not consider it incorrect",
       "The Academy requires it with verbs of feeling",
       "It is found only in the texts of America"
      ],
      "answer": 1,
      "explain": "The Manual says that in the singular it is found in many esteemed writers and <i lang=\"es\">no se considera incorrecto</i>."
     },
     {
      "prompt": "Which kind of leísmo is <i lang=\"es\">A Elena le saludaron en la fiesta</i> (“Elena was greeted at the party”)?",
      "options": [
       "The leísmo of masculine persons",
       "The leísmo of things",
       "The leísmo of courtesy",
       "The leísmo of feminine persons"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Le</i> is the direct object, and it stands for <i lang=\"es\">Elena</i>, a feminine noun that names a person."
     }
    ]
   }
  }
 ]
};
