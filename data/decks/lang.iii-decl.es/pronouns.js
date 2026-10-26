window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.es/pronouns"] = {
 "id": "lang.iii-decl.es/pronouns",
 "title": "The Spanish Pronoun",
 "sub": "The relative, demonstrative, possessive, interrogative, and indefinite pronouns.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), chapters 17, 18, 19, and 22; Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "pronouns-1",
   "title": "The relative pronouns",
   "body": "<p>A relative pronoun joins a clause to a noun that has been mentioned: <i lang=\"es\">El vestido que compré es azul</i> (“The dress that I bought is blue”), <i lang=\"es\">La mujer que canta es mi tía</i> (“The woman who sings is my aunt”). The commonest relative is <i lang=\"es\">que</i>, which refers to persons and to things and does not change for gender or number. After a preposition, a relative that refers to a person is usually <i lang=\"es\">quien</i>, with the plural <i lang=\"es\">quienes</i>: <i lang=\"es\">el amigo con quien viajé</i> (“the friend with whom I traveled”), <i lang=\"es\">las amigas con quienes viajé</i>. Another group is formed of the article and <i lang=\"es\">que</i> or <i lang=\"es\">cual</i>: <i lang=\"es\">el que</i>, <i lang=\"es\">la que</i>, <i lang=\"es\">los que</i>, <i lang=\"es\">las que</i>, and <i lang=\"es\">el cual</i>, <i lang=\"es\">la cual</i>, which agree with the noun they refer to, as in <i lang=\"es\">la ciudad en la que vivimos</i>. In a clause set off by commas, <i lang=\"es\">quien</i> may also be the subject: <i lang=\"es\">Mi tío, quien vive en Burgos, llega hoy</i> (“My uncle, who lives in Burgos, arrives today”). The relatives are unstressed words, except <i lang=\"es\">cual</i>.</p><p>The possessive relative <i lang=\"es\">cuyo</i> (“whose”) agrees with the noun that it stands before, which names what is possessed, and not with the noun it refers to: <i lang=\"es\">el escritor cuyas novelas leí</i> (“the writer whose novels I read”). Latin <i lang=\"la\">quī</i>, <i lang=\"la\">quae</i>, <i lang=\"la\">quod</i> agrees with its antecedent in gender and number and has the case that its own clause requires, whereas Spanish <i lang=\"es\">que</i> does not change at all.</p>",
   "qp": {
    "id": "q-es-pro-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i lang=\"es\">La mujer con ___ hablé es médica</i> (“The woman with whom I spoke is a doctor”).",
      "options": [
       "<i lang=\"es\">quien</i>",
       "<i lang=\"es\">quienes</i>",
       "<i lang=\"es\">cuyo</i>",
       "<i lang=\"es\">cuando</i>"
      ],
      "answer": 0,
      "explain": "After a preposition, a relative that refers to one person is <i lang=\"es\">quien</i>."
     },
     {
      "prompt": "Choose the relative: <i lang=\"es\">el vecino ___ hijas conocí</i> (“the neighbor whose daughters I met”).",
      "options": [
       "<i lang=\"es\">cuyo</i>",
       "<i lang=\"es\">cuyas</i>",
       "<i lang=\"es\">cuya</i>",
       "<i lang=\"es\">que</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Cuyo</i> agrees with the noun that follows it, <i lang=\"es\">hijas</i>: feminine plural."
     },
     {
      "prompt": "Which relative pronoun agrees in gender and number with the noun that follows it?",
      "options": [
       "<i lang=\"es\">que</i>",
       "<i lang=\"es\">quien</i>",
       "<i lang=\"es\">cuyo</i>",
       "<i lang=\"es\">donde</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Cuyo</i> is a possessive and agrees with what is possessed; <i lang=\"es\">que</i> never changes."
     }
    ]
   }
  },
  {
   "id": "pronouns-2",
   "title": "The demonstratives",
   "body": "<p>A demonstrative points out something, and Spanish has three degrees of distance where English has two. <i lang=\"es\">Este reloj</i> (“this watch”) is near the speaker, <i lang=\"es\">ese reloj</i> (“that watch”) is near the person spoken to, and <i lang=\"es\">aquel reloj</i> (“that watch over there”) is far from both. The adverbs follow the same pattern: <i lang=\"es\">aquí</i> (“here”), <i lang=\"es\">ahí</i> (“there”), <i lang=\"es\">allí</i> (“over there”). The demonstratives agree with the noun in gender and number: <i lang=\"es\">este</i>, <i lang=\"es\">esta</i>, <i lang=\"es\">estos</i>, <i lang=\"es\">estas</i>; <i lang=\"es\">ese</i>, <i lang=\"es\">esa</i>, <i lang=\"es\">esos</i>, <i lang=\"es\">esas</i>; <i lang=\"es\">aquel</i>, <i lang=\"es\">aquella</i>, <i lang=\"es\">aquellos</i>, <i lang=\"es\">aquellas</i>. Some current analyses treat <i lang=\"es\">ese</i> as the unmarked term and oppose only <i lang=\"es\">este</i> and <i lang=\"es\">aquel</i>; the Academy mentions both accounts.</p><p>The demonstratives have neuter forms as well, which refer to something that has not been named or to a whole statement: <i lang=\"es\">Eso no me gusta</i> (“I do not like that”). Latin has three demonstratives of the same kind: <i lang=\"la\">hic</i> is used of what is near the speaker, <i lang=\"la\">iste</i> of what is near the person addressed, and <i lang=\"la\">ille</i> of what is remote.</p>",
   "qp": {
    "id": "q-es-pro-demonstrative",
    "variants": [
     {
      "prompt": "Choose the demonstrative: <i lang=\"es\">___ montañas lejanas</i> (“those distant mountains,” far from both speaker and listener).",
      "options": [
       "<i lang=\"es\">estas</i>",
       "<i lang=\"es\">esas</i>",
       "<i lang=\"es\">aquellas</i>",
       "<i lang=\"es\">aquellos</i>"
      ],
      "answer": 2,
      "explain": "The third degree, far from both, is <i lang=\"es\">aquel</i>; <i lang=\"es\">montañas</i> is feminine plural."
     },
     {
      "prompt": "Which adverb goes with <i lang=\"es\">ese</i>, the demonstrative of what is near the listener?",
      "options": [
       "<i lang=\"es\">aquí</i>",
       "<i lang=\"es\">ahí</i>",
       "<i lang=\"es\">allí</i>",
       "<i lang=\"es\">así</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Aquí</i> goes with <i lang=\"es\">este</i>, <i lang=\"es\">ahí</i> with <i lang=\"es\">ese</i>, and <i lang=\"es\">allí</i> with <i lang=\"es\">aquel</i>."
     },
     {
      "prompt": "Which Latin demonstrative corresponds to <i lang=\"es\">este</i>, the demonstrative of what is near the speaker?",
      "options": [
       "<i lang=\"la\">ille</i>",
       "<i lang=\"la\">iste</i>",
       "<i lang=\"la\">hic</i>",
       "<i lang=\"la\">is</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Hic</i> is used of what is near the speaker, <i lang=\"la\">iste</i> of what is near the person addressed, and <i lang=\"la\">ille</i> of what is remote."
     }
    ]
   }
  },
  {
   "id": "pronouns-3",
   "title": "The possessives",
   "body": "<p>The possessives show who owns something, and they agree in gender and number with the thing owned, not with the owner. Before the noun they are <i lang=\"es\">mi</i>, <i lang=\"es\">tu</i>, <i lang=\"es\">su</i>, <i lang=\"es\">nuestro</i>, <i lang=\"es\">vuestro</i>, and <i lang=\"es\">su</i>, with the plurals <i lang=\"es\">mis</i>, <i lang=\"es\">tus</i>, <i lang=\"es\">sus</i>, <i lang=\"es\">nuestros</i>, <i lang=\"es\">vuestros</i>: <i lang=\"es\">mis hermanos</i> (“my brothers”), <i lang=\"es\">nuestra tía</i> (“our aunt”), <i lang=\"es\">vuestros billetes</i> (“your tickets”). After the noun, or alone, they have the full forms <i lang=\"es\">mío</i>, <i lang=\"es\">tuyo</i>, <i lang=\"es\">suyo</i>, <i lang=\"es\">nuestro</i>, <i lang=\"es\">vuestro</i>, which agree in gender and number: <i lang=\"es\">un amigo mío</i> (“a friend of mine”), <i lang=\"es\">la maleta suya</i>, <i lang=\"es\">Esa casa es nuestra</i> (“That house is ours”). <i lang=\"es\">Vuestro</i> goes with <i lang=\"es\">vosotros</i>, and <i lang=\"es\">su</i> with <i lang=\"es\">usted</i> and <i lang=\"es\">ustedes</i>.</p><p>The word <i lang=\"es\">su</i> stands for “his,” “her,” “its,” “their,” and “your” (of <i lang=\"es\">usted</i> and <i lang=\"es\">ustedes</i>), so it can be ambiguous. Spanish can add <i lang=\"es\">de él</i>, <i lang=\"es\">de ella</i>, <i lang=\"es\">de ellos</i>, or <i lang=\"es\">de usted</i>: <i lang=\"es\">el libro de ella</i> (“her book”). Latin possessives also agree with the thing possessed (<i lang=\"la\">meus</i>, <i lang=\"la\">mea</i>, <i lang=\"la\">meum</i>), but Latin <i lang=\"la\">suus</i> is used only of the subject’s own possession, whereas Spanish <i lang=\"es\">su</i> is not restricted in that way.</p>",
   "qp": {
    "id": "q-es-pro-possessive",
    "variants": [
     {
      "prompt": "Choose the possessive: <i lang=\"es\">Ellos buscan ___ llaves</i> (“They are looking for their keys”).",
      "options": [
       "<i lang=\"es\">su</i>",
       "<i lang=\"es\">sus</i>",
       "<i lang=\"es\">suyo</i>",
       "<i lang=\"es\">mis</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Llaves</i> is plural, so the possessive is <i lang=\"es\">sus</i>."
     },
     {
      "prompt": "What does the plural <i lang=\"es\">sus</i> show in <i lang=\"es\">sus amigas</i>?",
      "options": [
       "That the owner is a woman",
       "That there are several friends",
       "That the speaker is polite",
       "That the owners are several"
      ],
      "answer": 1,
      "explain": "A possessive agrees with the thing possessed: <i lang=\"es\">amigas</i> is plural."
     },
     {
      "prompt": "Which possessive goes with <i lang=\"es\">vosotros</i>?",
      "options": [
       "<i lang=\"es\">su</i>",
       "<i lang=\"es\">nuestro</i>",
       "<i lang=\"es\">tuyo</i>",
       "<i lang=\"es\">vuestro</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Vuestro</i> is the possessive of <i lang=\"es\">vosotros</i>."
     }
    ]
   }
  },
  {
   "id": "pronouns-4",
   "title": "The interrogatives and the indefinites",
   "body": "<p>The interrogative words carry a written accent: <i lang=\"es\">¿Quién?</i> (“Who?”), <i lang=\"es\">¿Qué?</i> (“What?”), <i lang=\"es\">¿Cuál?</i> (“Which?”), <i lang=\"es\">¿Cuánto?</i> (“How much?”), <i lang=\"es\">¿Dónde?</i> (“Where?”), <i lang=\"es\">¿Cuándo?</i> (“When?”), <i lang=\"es\">¿Cómo?</i> (“How?”). They are stressed, whereas the relatives of the same shape are not and have no accent: <i lang=\"es\">¿Cuándo vienes?</i> but <i lang=\"es\">cuando vienes</i>. The accent is kept in an indirect question: <i lang=\"es\">No sé dónde vive Marta</i> (“I do not know where Marta lives”). The plurals are <i lang=\"es\">quiénes</i> and <i lang=\"es\">cuáles</i>, and the words are used also in exclamations: <i lang=\"es\">¡Cuánto sabes!</i></p><p>The indefinites speak of persons or things without naming them. <i lang=\"es\">Alguien</i> (“someone”) and <i lang=\"es\">nadie</i> (“no one”) are persons; <i lang=\"es\">algo</i> (“something”) and <i lang=\"es\">nada</i> (“nothing”) are things; <i lang=\"es\">Cada</i> (“each”) does not change its form: <i lang=\"es\">cada alumno</i>, <i lang=\"es\">cada alumna</i>. A negative word that follows the verb needs <i lang=\"es\">no</i> before the verb: <i lang=\"es\">No vino nadie</i> (“No one came”), which can also be said <i lang=\"es\">Nadie vino</i>. Latin differs: two negatives in Latin are equivalent to an affirmative, so <i lang=\"la\">nēmō nōn audiet</i> means that everyone will hear.</p>",
   "qp": {
    "id": "q-es-pro-interrogative",
    "variants": [
     {
      "prompt": "Choose the word: <i lang=\"es\">¿___ vives?</i> (“Where do you live?”).",
      "options": [
       "<i lang=\"es\">Dónde</i>",
       "<i lang=\"es\">Donde</i>",
       "<i lang=\"es\">Cuándo</i>",
       "<i lang=\"es\">Cómo</i>"
      ],
      "answer": 0,
      "explain": "The interrogative <i lang=\"es\">dónde</i> carries the written accent; <i lang=\"es\">donde</i> is the relative."
     },
     {
      "prompt": "Choose the pronoun: <i lang=\"es\">No conozco a ___ en esta ciudad</i> (“I do not know anyone in this city”).",
      "options": [
       "<i lang=\"es\">alguien</i>",
       "<i lang=\"es\">algo</i>",
       "<i lang=\"es\">nada</i>",
       "<i lang=\"es\">nadie</i>"
      ],
      "answer": 3,
      "explain": "A negative word after the verb needs <i lang=\"es\">no</i> before it: <i lang=\"es\">No conozco a nadie</i>."
     },
     {
      "prompt": "Which sentence means “No one called”?",
      "options": [
       "<i lang=\"es\">Llamó nadie</i>",
       "<i lang=\"es\">Nadie no llamó</i>",
       "<i lang=\"es\">No llamó alguien</i>",
       "<i lang=\"es\">Nadie llamó</i>"
      ],
      "answer": 3,
      "explain": "A negative word before the verb stands without <i lang=\"es\">no</i>; after the verb it needs <i lang=\"es\">no</i>: <i lang=\"es\">No llamó nadie</i>."
     }
    ]
   }
  }
 ]
};
