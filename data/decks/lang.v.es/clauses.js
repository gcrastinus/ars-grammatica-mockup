window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.es/clauses"] = {
 "id": "lang.v.es/clauses",
 "title": "Clauses in Spanish: Relative, Causal, Temporal, Consecutive, Conditional, and Concessive Clauses, and Indirect Discourse",
 "sub": "The relative clause, the clauses of cause and purpose, of time, of consequence, of condition and concession, and indirect discourse.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 24.3, 25.4, 25.5, 43.4, 44, 45.6, 46, and 47; Allen and Greenough, <i lang=\"es\">New Latin Grammar</i>",
 "panels": [
  {
   "id": "clauses-1",
   "title": "Relative clauses",
   "body": "<p>In English “The students who passed the test were glad” and “The students, who passed the test, were glad” do not say the same. In the first sentence the clause tells which students are meant, and so only some of them passed. In the second the clause adds a fact about students who are already identified, and all of them passed. Spanish makes the same distinction with the same marks: <i lang=\"es\">Los alumnos que aprobaron el examen se alegraron</i> and <i lang=\"es\">Los alumnos, que aprobaron el examen, se alegraron</i>. The Academy calls the first kind of relative clause <strong>specificative</strong> (or restrictive), because it limits the noun phrase, and the second <strong>explicative</strong> (or appositive), because it only adds information. An explicative clause can be left out without changing the truth of the rest of the sentence (Manual 44.1.4 and 44.3.2).</p><p>The two kinds differ in other ways. A specificative clause admits <i lang=\"es\">quien</i> and <i lang=\"es\">el cual</i> only after a preposition, as in <i lang=\"es\">el abogado con quien trabaja</i>, whereas an explicative clause can have them without one: <i lang=\"es\">Las obras, las cuales terminaron en mayo, costaron mucho</i>. A specificative clause does not follow a proper name or a personal pronoun, which already identify one individual: <i lang=\"es\">Elena, que vive en Cádiz, llega hoy</i>, and not <i lang=\"es\">*Elena que vive en Cádiz</i>. Only an explicative clause can have a whole clause as its antecedent: <i lang=\"es\">Llovió toda la tarde, lo cual retrasó el partido</i> (Manual 44.3.2).</p><p>The mood of a relative clause depends on its kind as well. A specificative clause takes the subjunctive when its antecedent is not specific, as we have seen. An explicative clause does not take the subjunctive unless a word inside the clause calls for it, because the clause is not part of the noun phrase (Manual 25.4.1). A relative clause that expresses a purpose has the subjunctive even without an inductor: <i lang=\"es\">Ataron un cable que sujetara la lona</i> (Manual 25.4.2).</p><p>Latin also puts a relative clause of purpose in the subjunctive: <i lang=\"la\">scrībēbat ōrātiōnēs quās aliī dīcerent</i> (“he wrote speeches for other men to deliver,” Allen and Greenough §531).</p>",
   "qp": {
    "id": "q-es-cl-rel",
    "variants": [
     {
      "prompt": "Which sentence has an explicative relative clause?",
      "options": [
       "<i lang=\"es\">Los vecinos que son muy amables nos ayudaron</i>",
       "<i lang=\"es\">Los vecinos, que son amables, nos ayudaron</i>",
       "<i lang=\"es\">Los vecinos que nos ayudaron son amables</i>",
       "<i lang=\"es\">Busco unos vecinos que nos ayuden</i>"
      ],
      "answer": 1,
      "explain": "The commas mark a clause that only adds information about neighbors who are already identified."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Marta que trabaja en el banco llegó tarde</i>",
       "<i lang=\"es\">Ella que trabaja en el banco llegó tarde</i>",
       "<i lang=\"es\">Marta, que trabaja en el banco, llegó tarde</i>",
       "<i lang=\"es\">Marta, que trabaje en el banco, llegó tarde</i>"
      ],
      "answer": 2,
      "explain": "A proper name already identifies one individual, so the relative clause after it is explicative, with commas, and it stays in the indicative."
     },
     {
      "prompt": "What does <i lang=\"es\">lo cual</i> refer to in <i lang=\"es\">Perdimos el tren, lo cual nos obligó a esperar</i>?",
      "options": [
       "The clause <i lang=\"es\">Perdimos el tren</i>",
       "The noun <i lang=\"es\">tren</i>, which comes just before it",
       "The pronoun <i lang=\"es\">nos</i>, which comes after it",
       "The verb <i lang=\"es\">esperar</i>, which ends the sentence"
      ],
      "answer": 0,
      "explain": "Only an explicative relative clause can have a whole clause as its antecedent."
     }
    ]
   }
  },
  {
   "id": "clauses-2",
   "title": "Causal and final clauses",
   "body": "<p>In English a reason is given with “because” and a purpose with “so that” or “in order to”: “He stayed home because it was raining” and “He stayed home so that the child could sleep.” Spanish gives a reason with <i lang=\"es\">porque</i>, <i lang=\"es\">ya que</i>, <i lang=\"es\">puesto que</i>, <i lang=\"es\">pues</i>, or <i lang=\"es\">como</i>, and a purpose with <i lang=\"es\">para</i> or <i lang=\"es\">para que</i>: <i lang=\"es\">Se quedó en casa porque llovía</i> and <i lang=\"es\">Se quedó en casa para que el niño durmiera</i>. The Academy observes that the two ideas are close, because a purpose is a cause that lies ahead, and that a question with <i lang=\"es\">por qué</i> can be answered with <i lang=\"es\">para</i> (Manual 46.1).</p><p>A causal clause ordinarily has the indicative: <i lang=\"es\">Cerraron el camino porque había nieve</i>. It can give the cause of the event of the main clause or the reason for saying the main clause: in <i lang=\"es\">Hace frío, porque la gente lleva abrigo</i> the coats are not the cause of the cold but the reason for saying that it is cold (Manual 46.4.1). A clause with <i lang=\"es\">ya que</i>, <i lang=\"es\">puesto que</i>, <i lang=\"es\">pues</i>, or <i lang=\"es\">como</i> explains why the main clause is appropriate, and before the main clause it presents what the hearer is taken to know: <i lang=\"es\">Ya que estamos todos, empecemos</i> (Manual 46.4.2). The subjunctive appears after <i lang=\"es\">porque</i> only under a negative, when the cause itself is denied: <i lang=\"es\">No lo elogio porque sea mi amigo, sino porque trabaja bien</i> (Manual 25.5.1).</p><p>A purpose clause has the infinitive when its subject is the same as that of the main verb and the subjunctive when the subjects differ: <i lang=\"es\">Estudia para aprobar</i> and <i lang=\"es\">Estudia para que sus padres estén tranquilos</i> (Manual 46.7.1). The tense of the subjunctive follows the main verb, as in <i lang=\"es\">Encendimos la estufa para que los niños no pasaran frío</i>. The prepositions <i lang=\"es\">sin</i> and <i lang=\"es\">para</i> and the phrase <i lang=\"es\">a fin de que</i> introduce the subjunctive (Manual 25.5.2).</p><p>Latin puts a purpose clause in the subjunctive, whether or not the subject is the same, with <i lang=\"la\">ut</i> or, if negative, <i lang=\"la\">nē</i>: <i lang=\"la\">nē mīlitēs oppidum inrumperent, portās obstruit</i> (“he barricaded the gates, in order that the soldiers might not break into the town,” Allen and Greenough §531). A Latin causal clause with <i lang=\"la\">quod</i> or <i lang=\"la\">quia</i> has the indicative when the reason is the speaker's own and the subjunctive when it is given on the authority of another (§540), whereas the Spanish clause with <i lang=\"es\">porque</i> has the indicative.</p>",
   "qp": {
    "id": "q-es-cl-cause",
    "variants": [
     {
      "prompt": "Which sentence is correct for a man who works to support his own family?",
      "options": [
       "<i lang=\"es\">Trabaja para que mantenga a su familia</i>",
       "<i lang=\"es\">Trabaja para mantiene a su familia</i>",
       "<i lang=\"es\">Trabaja para que mantiene a su familia</i>",
       "<i lang=\"es\">Trabaja para mantener a su familia</i>"
      ],
      "answer": 3,
      "explain": "When the subject of the purpose clause is the same as the main subject, the infinitive is used."
     },
     {
      "prompt": "What does the subjunctive after <i lang=\"es\">porque</i> show in <i lang=\"es\">No viajo porque sea caro, sino porque estoy cansado</i>?",
      "options": [
       "The cost is not the reason",
       "The cost is the reason",
       "The trip is in the past",
       "The speaker doubts the cost"
      ],
      "answer": 0,
      "explain": "Under a negative, <i lang=\"es\">porque</i> with the subjunctive denies the cause itself."
     },
     {
      "prompt": "Which sentence gives the reason for saying the main clause, and not the cause of the event?",
      "options": [
       "<i lang=\"es\">Se enfadó porque llegaron tarde</i>",
       "<i lang=\"es\">Se mojó porque llovía a cántaros</i>",
       "<i lang=\"es\">Está en casa, porque hay luz</i>",
       "<i lang=\"es\">Cerró porque no vendía nada</i>"
      ],
      "answer": 2,
      "explain": "The light is not the cause of the person's being at home but the reason for saying so."
     }
    ]
   }
  },
  {
   "id": "clauses-3",
   "title": "Temporal clauses",
   "body": "<p>English marks time with “when,” “while,” “before,” “after,” and “until.” Spanish has <i lang=\"es\">cuando</i>, <i lang=\"es\">mientras</i>, <i lang=\"es\">antes de que</i>, <i lang=\"es\">después de que</i>, <i lang=\"es\">hasta que</i>, <i lang=\"es\">desde que</i>, <i lang=\"es\">luego que</i>, <i lang=\"es\">una vez que</i>, and <i lang=\"es\">siempre que</i>. The mood depends on whether the clause looks to the future. <i lang=\"es\">Cuando llega el cartero, el perro ladra</i> states a habit, and <i lang=\"es\">Cuando llegue el cartero, avísame</i> refers to a time that has not yet come. Spanish rejects the future and the conditional in these clauses, so that it says <i lang=\"es\">mientras vivas allí</i>, and not <i lang=\"es\">mientras vivirás allí</i> (Manual 25.5.1).</p><p>The conjunctions behave in different ways:</p><p><strong><i lang=\"es\">Antes de que</i></strong>: always the subjunctive, as in <i lang=\"es\">Se fue antes de que amaneciera</i>.<br><strong><i lang=\"es\">Después de que</i></strong>: either mood, the subjunctive being the majority use in Spain.<br><strong><i lang=\"es\">Cuando</i>, <i lang=\"es\">mientras</i>, <i lang=\"es\">luego que</i>, <i lang=\"es\">una vez que</i>, <i lang=\"es\">siempre que</i></strong>: either mood, the subjunctive requiring a word that looks forward, such as a future or a command.<br><strong><i lang=\"es\">Hasta que</i></strong>: the subjunctive after a main clause that looks forward, as in <i lang=\"es\">Seguiremos hasta que anochezca</i>, and the indicative for a past event, as in <i lang=\"es\">Esperó hasta que cerraron la tienda</i>.</p><p>As in other subordinate clauses, the tense of the verb depends on the tense of the main verb (Manual 24.3.3).</p><p>Latin uses both moods in temporal clauses. <i lang=\"la\">Postquam</i> takes the indicative, <i lang=\"la\">antequam</i> takes either mood (Allen and Greenough §543 and §551), and <i lang=\"la\">dum</i>, “until,” takes the subjunctive when it implies expectation: <i lang=\"la\">dum reliquae nāvēs convenīrent, ad hōram nōnam exspectāvit</i> (“he waited till the ninth hour for the rest of the ships to join him,” §553). Spanish <i lang=\"es\">hasta que</i> behaves in the same way after a main clause that looks forward, whereas <i lang=\"es\">antes de que</i> has only the subjunctive.</p>",
   "qp": {
    "id": "q-es-cl-time",
    "variants": [
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Te llamaré cuando llegue</i>",
       "<i lang=\"es\">Te llamaré cuando llegaré</i>",
       "<i lang=\"es\">Te llamaré cuando llegaría</i>",
       "<i lang=\"es\">Te llamaré cuando llegó</i>"
      ],
      "answer": 0,
      "explain": "A clause with <i lang=\"es\">cuando</i> that looks to the future takes the subjunctive, and the future is not used in it."
     },
     {
      "prompt": "Which conjunction always takes the subjunctive?",
      "options": [
       "<i lang=\"es\">después de que</i>",
       "<i lang=\"es\">desde que</i>",
       "<i lang=\"es\">antes de que</i>",
       "<i lang=\"es\">una vez que</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Antes de que</i> always takes the subjunctive, whereas <i lang=\"es\">después de que</i> takes either mood."
     },
     {
      "prompt": "Which Spanish conjunction behaves like Latin <i lang=\"la\">dum</i> in <i lang=\"la\">dum reliquae nāvēs convenīrent</i>?",
      "options": [
       "<i lang=\"es\">desde que</i> after a verb in the past tense",
       "<i lang=\"es\">hasta que</i> after a forward-looking verb",
       "<i lang=\"es\">antes de que</i> after a verb of the present",
       "<i lang=\"es\">cuando</i> after a verb of habitual action"
      ],
      "answer": 1,
      "explain": "Both express an expectation with the subjunctive."
     }
    ]
   }
  },
  {
   "id": "clauses-4",
   "title": "Consecutive clauses",
   "body": "<p>English says “It was so cold that the pond froze” and “Such was the noise that the whole street woke.” Spanish forms these constructions with <i lang=\"es\">tanto</i>, <i lang=\"es\">tanta</i>, <i lang=\"es\">tantos</i>, <i lang=\"es\">tantas</i>, or the shortened <i lang=\"es\">tan</i> before an adjective or an adverb, or with <i lang=\"es\">tal</i> and <i lang=\"es\">tales</i>, followed by <i lang=\"es\">que</i> and a clause that gives the consequence: <i lang=\"es\">Hizo tanto frío que se heló el estanque</i>, <i lang=\"es\">Estaba tan cansado que se durmió de pie</i>, and <i lang=\"es\">Tal fue el ruido que despertó a todo el barrio</i>. The Academy calls them consecutive constructions, and the quantity or the degree, which reaches an extreme, is what produces the consequence (Manual 45.6.1). The word <i lang=\"es\">tal</i> varies in number and not in gender.</p><p>The consequence is ordinarily in the indicative. The subjunctive appears only when something outside the clause calls for it, such as a negative in the main clause: <i lang=\"es\">No está tan lejos que no podamos ir andando</i> (Manual 25.5.1).</p><p>The phrases <i lang=\"es\">de modo que</i>, <i lang=\"es\">de manera que</i>, and <i lang=\"es\">de forma que</i> have two uses. When the clause states the way in which something is done and the aim of doing it, they take the subjunctive: <i lang=\"es\">Habla de manera que todos lo entiendan</i>. When the clause comes after a pause and means “and as a consequence,” they take the indicative: <i lang=\"es\">Era tarde, de modo que nos fuimos</i>. The other conjunctions that state a consequence, <i lang=\"es\">así que</i>, <i lang=\"es\">conque</i>, and <i lang=\"es\">luego</i>, take the indicative only (Manual 25.5.1 and 46.8.4).</p><p>A Latin result clause has the subjunctive with <i lang=\"la\">ut</i>, or <i lang=\"la\">ut nōn</i> if negative: <i lang=\"la\">tanta vīs probitātis est ut eam in hoste dīligāmus</i> (“so great is the power of goodness that we love it even in an enemy,” Allen and Greenough §537). The Spanish consecutive clause takes the indicative, whereas the Latin clause is always in the subjunctive.</p>",
   "qp": {
    "id": "q-es-cl-cons",
    "variants": [
     {
      "prompt": "Which sentence is a consecutive construction?",
      "options": [
       "<i lang=\"es\">Había tanta niebla que no se veía la calle</i>",
       "<i lang=\"es\">Había niebla porque no se veía la calle</i>",
       "<i lang=\"es\">Había niebla para que no se viera la calle</i>",
       "<i lang=\"es\">Había niebla aunque no se veía la calle</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"es\">Tanta</i> followed by <i lang=\"es\">que</i> and a clause of consequence is the mark of the construction."
     },
     {
      "prompt": "Which sentence uses <i lang=\"es\">de modo que</i> with the meaning “and as a consequence”?",
      "options": [
       "<i lang=\"es\">Explícalo bien de modo que todos lo comprendan</i>",
       "<i lang=\"es\">Cierra la puerta de modo que no entre el frío</i>",
       "<i lang=\"es\">Escribe claro de modo que se lea bien</i>",
       "<i lang=\"es\">Llovía, de modo que suspendieron el partido</i>"
      ],
      "answer": 3,
      "explain": "After a pause and with the indicative, <i lang=\"es\">de modo que</i> introduces a consequence."
     },
     {
      "prompt": "What mood does a Latin result clause with <i lang=\"la\">ut</i> have?",
      "options": [
       "The future indicative",
       "The subjunctive",
       "The imperative",
       "The infinitive"
      ],
      "answer": 1,
      "explain": "A Latin result clause always takes the subjunctive, whereas the Spanish consecutive clause ordinarily takes the indicative."
     }
    ]
   }
  },
  {
   "id": "clauses-5",
   "title": "Conditional and concessive clauses",
   "body": "<p>In English “If it snows, we stay home” is conditional and “Although it snows, we go out” is concessive: the first names a condition, and the second names an obstacle that does not prevent the main clause. Spanish distinguishes them by the conjunction, with the same tenses: <i lang=\"es\">Si nevara, iríamos al mercado</i> and <i lang=\"es\">Aunque nevara, iríamos al mercado</i>. In both the subordinate clause is called the <strong>protasis</strong> and the main clause the <strong>apodosis</strong>, and the Academy treats the two constructions together (Manual 47.1).</p><p>A condition can be introduced by other conjunctions than <i lang=\"es\">si</i>, and they take the subjunctive:</p><p><strong><i lang=\"es\">Como</i></strong>, as a threat or a warning: <i lang=\"es\">Como llegues tarde, no te esperamos</i>.<br><strong><i lang=\"es\">A condición de que</i>, <i lang=\"es\">con tal (de) que</i>, <i lang=\"es\">siempre que</i>, <i lang=\"es\">siempre y cuando</i></strong>, as a requirement: <i lang=\"es\">Iremos a condición de que nos inviten</i>.<br><strong><i lang=\"es\">A menos que</i>, <i lang=\"es\">a no ser que</i></strong>, as an exception: <i lang=\"es\">No iremos a menos que nos inviten</i>.</p><p>A condition can also be stated with <i lang=\"es\">de</i> and an infinitive: <i lang=\"es\">De llegar a tiempo, cenaríamos juntos</i> (Manual 47.5).</p><p>The conjunction <i lang=\"es\">aunque</i> takes the subjunctive when the concession is hypothetical: <i lang=\"es\">Aunque nieve mucho, iremos al mercado</i> (“even if it snows heavily”). When the concession is factual, it takes the indicative if the clause gives new information, <i lang=\"es\">Aunque nieva mucho, iremos al mercado</i>, and it can take the subjunctive if the information is already known to the hearer: <i lang=\"es\">Aunque parezca extraño, Marta tiene razón</i>. The conjunctions <i lang=\"es\">a pesar de que</i>, <i lang=\"es\">pese a que</i>, and <i lang=\"es\">aun cuando</i> take either mood, <i lang=\"es\">si bien</i> takes the indicative, and <i lang=\"es\">mal que</i> and <i lang=\"es\">por mucho que</i> take the subjunctive (Manual 25.5.1 and 47.6).</p><p>Latin also speaks of a protasis and an apodosis (Allen and Greenough §512), but it chooses the mood of a concession by the particle: <i lang=\"la\">quamvis</i> and <i lang=\"la\">licet</i> take the subjunctive, <i lang=\"la\">quamquam</i> takes the indicative, and <i lang=\"la\">etsi</i> takes the constructions of <i lang=\"la\">sī</i>, as in <i lang=\"la\">quamvis ipsī īnfantēs sint, tamen</i> (“however incapable of speaking they themselves may be, yet,” §527). Spanish uses <i lang=\"es\">aunque</i> for all of them and chooses the mood by the sense.</p>",
   "qp": {
    "id": "q-es-cl-cond",
    "variants": [
     {
      "prompt": "Which sentence uses <i lang=\"es\">como</i> as a warning?",
      "options": [
       "<i lang=\"es\">Como estaba cansado, me acosté pronto</i>",
       "<i lang=\"es\">Como me pidieron, lo hice enseguida</i>",
       "<i lang=\"es\">Como mientas, no te hablo más</i>",
       "<i lang=\"es\">Lo hizo como tú dijiste que debía</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"es\">Como</i> with the subjunctive introduces a condition that carries a threat or a warning."
     },
     {
      "prompt": "What is the usual difference between <i lang=\"es\">Aunque llueve, salimos</i> and <i lang=\"es\">Aunque llueva, salimos</i>?",
      "options": [
       "The first is in the past, and the second is in the future",
       "The first states a fact, the second a supposition",
       "The first is a condition, and the second is a concession",
       "The first is formal, and the second is colloquial"
      ],
      "answer": 1,
      "explain": "With the indicative the concession is factual, and with the subjunctive it is hypothetical or presented as known."
     },
     {
      "prompt": "Which conjunction takes the subjunctive only?",
      "options": [
       "<i lang=\"es\">a pesar de que</i>",
       "<i lang=\"es\">aun cuando</i>",
       "<i lang=\"es\">si bien</i>",
       "<i lang=\"es\">a menos que</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">A menos que</i> introduces an exception and takes the subjunctive, whereas <i lang=\"es\">a pesar de que</i> and <i lang=\"es\">aun cuando</i> take either mood and <i lang=\"es\">si bien</i> takes the indicative."
     }
    ]
   }
  },
  {
   "id": "clauses-6",
   "title": "Indirect discourse",
   "body": "<p>In English a speaker can quote the exact words, “Pablo said, ‘I will bring the tickets tomorrow,’” or report them: “Pablo said that he would bring the tickets the next day.” The report changes the person of the pronoun, the tense of the verb, and the word for the time. Spanish does the same: <i lang=\"es\">Pablo dijo: «Traeré las entradas mañana»</i> becomes <i lang=\"es\">Pablo dijo que traería las entradas al día siguiente</i>. The Academy calls the first <strong>direct discourse</strong>, which reproduces the words literally, and the second <strong>indirect discourse</strong>, which adapts the words to the speaker who reports them (Manual 43.4.1). When the verb of saying follows the quoted words, its subject follows the verb: <i lang=\"es\">«Traeré las entradas mañana», dijo Pablo</i>.</p><p>The adaptation concerns the person (pronouns, possessives, and verb endings), the place (demonstratives and verbs such as <i lang=\"es\">ir</i> and <i lang=\"es\">venir</i>, <i lang=\"es\">llevar</i> and <i lang=\"es\">traer</i>), and the time (adverbs and tenses). A command becomes a subjunctive: <i lang=\"es\">«Preséntame a tu novia»</i> becomes <i lang=\"es\">Dice que le presente a mi novia</i>. The tenses follow the sequence of tenses: the present usually becomes the imperfect, the future becomes the conditional, and the preterite usually becomes the pluperfect, so that <i lang=\"es\">«Fui ayer a la capital»</i> becomes <i lang=\"es\">Dijo que había ido el día anterior a la capital</i> (Manual 43.4.2 and 24.3.1).</p><p>A question is reported with <i lang=\"es\">si</i> or with an interrogative word: <i lang=\"es\">Me preguntó si habíamos cenado</i>, <i lang=\"es\">Me preguntó dónde vivían</i>. With a verb of saying other than <i lang=\"es\">preguntar</i> the conjunction <i lang=\"es\">que</i> stays before the question word, so that the sentence is understood as a question and not as a statement: <i lang=\"es\">Le dijo que cuándo llegaba el tren</i> means that he asked when the train arrived, whereas <i lang=\"es\">Le dijo cuándo llegaba el tren</i> means that he told him (Manual 43.4.1).</p><p>Latin reports a statement in the infinitive with its subject in the accusative, all subordinate clauses in the subjunctive, and every command and prohibition in the subjunctive (Allen and Greenough §580 and §588). Spanish keeps a finite verb after <i lang=\"es\">que</i> and, like Latin, puts the command in the subjunctive.</p>",
   "qp": {
    "id": "q-es-cl-ind",
    "variants": [
     {
      "prompt": "Which sentence reports <i lang=\"es\">«Vendré mañana»</i> said in the past?",
      "options": [
       "<i lang=\"es\">Dijo que vendré mañana</i>",
       "<i lang=\"es\">Dijo que viene mañana</i>",
       "<i lang=\"es\">Dijo que vendrá al día siguiente</i>",
       "<i lang=\"es\">Dijo que vendría al otro día</i>"
      ],
      "answer": 3,
      "explain": "The future becomes the conditional after a verb of the past, and <i lang=\"es\">mañana</i> becomes <i lang=\"es\">al día siguiente</i>."
     },
     {
      "prompt": "What does <i lang=\"es\">que</i> before <i lang=\"es\">cuándo</i> show in <i lang=\"es\">Le dijo que cuándo llegaba el tren</i>?",
      "options": [
       "That a question is reported",
       "That the sentence reports a command",
       "That the speaker doubts the answer",
       "That the verb is in the subjunctive"
      ],
      "answer": 0,
      "explain": "With a verb of saying, <i lang=\"es\">que</i> before the question word shows that a question is reported."
     },
     {
      "prompt": "How does Spanish report the command <i lang=\"es\">«Espera aquí»</i> given to a friend?",
      "options": [
       "<i lang=\"es\">Me dijo que espera aquí</i>",
       "<i lang=\"es\">Me dijo que esperaba aquí</i>",
       "<i lang=\"es\">Me dijo que esperara allí</i>",
       "<i lang=\"es\">Me dijo que esperar allí</i>"
      ],
      "answer": 2,
      "explain": "A command is reported in the subjunctive, and the place word is adapted."
     }
    ]
   }
  }
 ]
};
