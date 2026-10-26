window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.es/order"] = {
 "id": "lang.v.es/order",
 "title": "Word Order, the Pronoun, Negation, and the Adjective in Spanish",
 "sub": "The order of subject, verb, and object, the place of the pronoun and of negation, and the adjective before and after the noun.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 13.6, 16.4, 33.3, 40, and 48; Allen and Greenough, <i lang=\"es\">New Latin Grammar</i>",
 "panels": [
  {
   "id": "order-1",
   "title": "Subject, verb, and object, and the free order",
   "body": "<p>In English the order of the words shows who does what: “The fox followed the hen” and “The hen followed the fox” say different things. Spanish nouns have no case, but the verb has endings for person and number, and so the subject can be left out or can follow the verb: <i lang=\"es\">Llegó mi tía</i>. The Academy observes that languages with a silent subject usually allow a postverbal subject too (Manual 33.3.1). What decides the order is mostly what the hearer already knows. Information that is known (the theme) tends to be left out, replaced by a pronoun, or put first, and information that is new (the rheme) tends to come last (Manual 40.1). To the question <i lang=\"es\">¿Quién abrió la puerta?</i> the natural answer is <i lang=\"es\">La abrió el portero</i>, with the subject last, and to the question <i lang=\"es\">¿Qué hizo el portero?</i> it is <i lang=\"es\">El portero abrió la puerta</i>.</p><p>An object can be put first in two ways, and the pronoun shows which. A fronted object that is the topic, what the sentence is about, is repeated by an unstressed pronoun: <i lang=\"es\">Las llaves las busco</i>, “As for the keys, I am looking for them.” A fronted object that is the focus, the new and contrasting information, has no pronoun: <i lang=\"es\">Las llaves busco</i>, “It is the keys that I am looking for” (Manual 40.3.3). When a focus is fronted the subject comes after the verb, as in <i lang=\"es\">Eso mismo pensaba yo</i>. A question word also comes first and is followed by the verb and then the subject: <i lang=\"es\">¿Qué pensará Pedro?</i> and not <i lang=\"es\">*¿Qué Pedro pensará?</i> (Manual 40.3.3, with an exception noted for the Caribbean).</p><p>Latin has a freer order still, because its endings show the case. The subject tends to stand first and the predicate last (Allen and Greenough §596), and the word that is most prominent in the speaker's mind comes first (§597), whereas in Spanish the new information tends to come last.</p>",
   "qp": {
    "id": "q-es-ord-svo",
    "variants": [
     {
      "prompt": "What does the pronoun <i lang=\"es\">las</i> show in <i lang=\"es\">Las cartas las dejé en el buzón</i>?",
      "options": [
       "The fronted object is the topic",
       "The fronted object is the focus",
       "The subject follows the verb",
       "The verb is in the subjunctive"
      ],
      "answer": 0,
      "explain": "A fronted object that is the topic is repeated by an unstressed pronoun, whereas a fronted focus has none."
     },
     {
      "prompt": "Which answer to <i lang=\"es\">¿Quién llamó?</i> puts the new information last?",
      "options": [
       "<i lang=\"es\">El cartero llamó, tú sabes</i>",
       "<i lang=\"es\">Llamó, el cartero</i>",
       "<i lang=\"es\">Llamó el cartero</i>",
       "<i lang=\"es\">El cartero lo llamó</i>"
      ],
      "answer": 2,
      "explain": "The subject, which is the new information, comes last in the natural answer."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">¿Dónde tu hermana vive?</i>",
       "<i lang=\"es\">¿Dónde vive tu hermana?</i>",
       "<i lang=\"es\">¿Tu hermana dónde vive?</i>",
       "<i lang=\"es\">¿Vive dónde tu hermana?</i>"
      ],
      "answer": 1,
      "explain": "A question word comes first and the verb comes before the subject."
     }
    ]
   }
  },
  {
   "id": "order-2",
   "title": "The place of the pronoun and of negation",
   "body": "<p>In English the object pronoun follows the verb, “I saw them,” and negation needs a helping verb, “I did not see anyone.” We have seen that in Spanish the unstressed pronouns stand before a verb in a personal form and are attached to an infinitive, a gerund, or an affirmative command, and that in a verb followed by an infinitive the pronoun may go before the first verb or after the infinitive. The Academy adds the limits. The pronoun cannot move before the first verb when that verb is itself pronominal, <i lang=\"es\">Se puso a escribirlo</i>, and not <i lang=\"es\">*Se lo puso a escribir</i>; with the impersonal <i lang=\"es\">hay que</i>, <i lang=\"es\">Hay que terminarlo</i>, and not <i lang=\"es\">*Lo hay que terminar</i>; when a negative stands before the infinitive, <i lang=\"es\">Desea no verla</i>, and not <i lang=\"es\">*La desea no ver</i>; or when the infinitive is the subject, <i lang=\"es\">Conviene decírselo</i>, and not <i lang=\"es\">*Se lo conviene decir</i>. A group of pronouns moves as a whole: <i lang=\"es\">Se lo debes decir</i>, and not <i lang=\"es\">*Le debes decirlo</i> (Manual 16.4.3). In careful writing a pronoun is sometimes attached to a verb in a personal form, but it is now felt to be archaic: <i lang=\"es\">Preguntóme la hora</i> (Manual 16.4.2).</p><p>Spanish places <i lang=\"es\">no</i> before the verb, together with its pronouns: <i lang=\"es\">No lo vi</i>. A negative word that follows the verb requires <i lang=\"es\">no</i> before it, and one that comes before the verb rejects it: <i lang=\"es\">No llamó nunca</i> and <i lang=\"es\">Nunca llamó</i>; <i lang=\"es\">No me escribió tampoco</i> and <i lang=\"es\">Tampoco me escribió</i>. Negative words can pile up without making an affirmative, as in <i lang=\"es\">Nunca jamás</i>, and <i lang=\"es\">no</i> stands before an infinitive that is negated: <i lang=\"es\">Prefiero no decírselo</i> (Manual 48.1). We have seen that in Latin two negatives make an affirmative, whereas in Spanish they form one negation.</p>",
   "qp": {
    "id": "q-es-ord-clit",
    "variants": [
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Lo prefiere no ver</i>",
       "<i lang=\"es\">Prefiere lo no ver</i>",
       "<i lang=\"es\">Prefiere no verlo</i>",
       "<i lang=\"es\">Prefiere no lo ver</i>"
      ],
      "answer": 2,
      "explain": "A negative before the infinitive prevents the pronoun from moving before the first verb."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Nunca no me llamó</i>",
       "<i lang=\"es\">Nunca me llamó</i>",
       "<i lang=\"es\">Me llamó nunca no</i>",
       "<i lang=\"es\">No nunca me llamó</i>"
      ],
      "answer": 1,
      "explain": "A negative word before the verb rejects <i lang=\"es\">no</i>."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Contestó nunca a mis cartas</i>",
       "<i lang=\"es\">Nunca no contestó a mis cartas</i>",
       "<i lang=\"es\">Contestó no nunca a mis cartas</i>",
       "<i lang=\"es\">No contestó nunca a mis cartas</i>"
      ],
      "answer": 3,
      "explain": "A negative word after the verb requires <i lang=\"es\">no</i> before the verb."
     }
    ]
   }
  },
  {
   "id": "order-3",
   "title": "The adjective before and after the noun",
   "body": "<p>In English the adjective stands before the noun, “a red apple,” and cannot follow it, but in Spanish its place varies. The place after the noun is the ordinary one, and the adjectives that restrict the noun, such as those of color, material, or nationality, stand there: <i lang=\"es\">una manzana roja</i>. An adjective stands before the noun when it does not restrict it, as when it only describes or evaluates, as in <i lang=\"es\">la deliciosa fruta</i>, and so do the adjectives that act as determiners or quantifiers (Manual 13.6). Adjectives of physical description resist the place before the noun, and those that admit a figurative sense move easily, with a change of meaning: <i lang=\"es\">un país pobre</i> is a country of scarce resources and <i lang=\"es\">un pobre país</i> one that is unfortunate; <i lang=\"es\">un amigo viejo</i> is an elderly friend and <i lang=\"es\">un viejo amigo</i> one of long standing; <i lang=\"es\">una esperanza cierta</i> is a sure hope and <i lang=\"es\">cierta esperanza</i> some hope (Manual 13.6.2).</p><p>Coordinated adjectives can stand before the noun, <i lang=\"es\">un cómodo y lujoso coche</i>, but an adjective with a complement cannot (Manual 13.6.1).</p><p>In Latin the determining and most significant word of a phrase comes first, so that the adjective may precede or follow the noun, according to which of the two is emphatic; the numerals, the adjectives of quantity, and the demonstratives tend to precede (Allen and Greenough §598).</p>",
   "qp": {
    "id": "q-es-ord-adj",
    "variants": [
     {
      "prompt": "What is the difference between <i lang=\"es\">un viejo amigo</i> and <i lang=\"es\">un amigo viejo</i>?",
      "options": [
       "The first is of long standing, the second elderly",
       "The first is a friend of long standing, and the second is a stranger",
       "The first is plural, and the second is singular",
       "The first is an elderly friend, and the second is one of long standing"
      ],
      "answer": 0,
      "explain": "Placed before the noun, <i lang=\"es\">viejo</i> is evaluative and means \"of long standing\"; placed after it, <i lang=\"es\">viejo</i> describes age."
     },
     {
      "prompt": "Which of these adjectives usually stands before the noun?",
      "options": [
       "An adjective of nationality, such as <i lang=\"es\">francés</i>",
       "An adjective of material, such as <i lang=\"es\">metálico</i>",
       "An adjective that only describes or evaluates, such as <i lang=\"es\">hermoso</i>",
       "An adjective of shape, such as <i lang=\"es\">cuadrado</i>"
      ],
      "answer": 2,
      "explain": "An adjective that does not restrict the noun, but only describes or evaluates it, stands before it, whereas the restrictive adjectives stand after it."
     },
     {
      "prompt": "Which adjective stands after the noun by preference?",
      "options": [
       "An adjective used as a determiner, such as <i lang=\"es\">cierto</i>",
       "An adjective of color, such as <i lang=\"es\">verde</i>",
       "An adjective that only evaluates, such as <i lang=\"es\">delicioso</i>",
       "An adjective of quantity, such as <i lang=\"es\">mucho</i>"
      ],
      "answer": 1,
      "explain": "Restrictive adjectives, such as those of color, stand after the noun."
     }
    ]
   }
  },
  {
   "id": "order-4",
   "title": "Dependence in a Spanish sentence",
   "body": "<p>In “The neighbors bought an old house,” the verb “bought” depends on “neighbors,” its subject, and on “house,” its object, and the adjective “old” depends on “house.” A construction is words joined so that one depends on another. In <i lang=\"es\">Los vecinos compraron una casa vieja</i>, the article <i lang=\"es\">Los</i> depends on <i lang=\"es\">vecinos</i>, and <i lang=\"es\">una</i> and <i lang=\"es\">vieja</i> depend on <i lang=\"es\">casa</i>. The verb depends on its subject and on its object, so that <i lang=\"es\">compraron</i> depends on <i lang=\"es\">vecinos</i> and on <i lang=\"es\">casa</i>. The adjective depends on its noun wherever it stands, before the noun or after it, as the article does.</p><p>The same dependences hold for the other words of a sentence. An adverb and the negative <i lang=\"es\">no</i> depend on the verb. A preposition depends on the verb, and the noun after the preposition depends on the preposition. A relative pronoun depends on its antecedent, and the verb of the relative clause depends on the relative pronoun. The order of the words does not change the dependence: in <i lang=\"es\">Volvió el médico</i> (“The doctor returned”) the verb still depends on its subject, though the subject follows it.</p><p>Spanish shows many dependences by the form of the words, since the adjective agrees with its noun and the verb with its subject, and so it can vary the order of the words more than English can.</p>",
   "qp": {
    "id": "q-es-ord-dep",
    "variants": [
     {
      "prompt": "On which word does <i lang=\"es\">roja</i> depend in <i lang=\"es\">una manzana roja</i>?",
      "options": [
       "<i lang=\"es\">una</i>",
       "<i lang=\"es\">roja</i> depends on nothing",
       "The verb of the sentence",
       "<i lang=\"es\">manzana</i>"
      ],
      "answer": 3,
      "explain": "The adjective depends on its noun wherever it stands."
     },
     {
      "prompt": "On which word does the noun after a preposition depend?",
      "options": [
       "The preposition",
       "The subject",
       "The article of the noun",
       "The adjective"
      ],
      "answer": 0,
      "explain": "The noun that follows a preposition depends on the preposition, and the preposition depends on the verb."
     },
     {
      "prompt": "In <i lang=\"es\">Volvió el médico</i>, on which word does <i lang=\"es\">Volvió</i> depend?",
      "options": [
       "<i lang=\"es\">el</i>",
       "On no word",
       "<i lang=\"es\">médico</i>",
       "<i lang=\"es\">médico</i> and <i lang=\"es\">el</i> both"
      ],
      "answer": 2,
      "explain": "The verb depends on its subject, though the subject follows it."
     }
    ]
   }
  }
 ]
};
