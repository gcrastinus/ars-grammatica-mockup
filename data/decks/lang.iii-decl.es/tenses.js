window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.es/tenses"] = {
 "id": "lang.iii-decl.es/tenses",
 "title": "The Compound and Other Tenses",
 "sub": "The preterite and the imperfect in narration, the present perfect and the compound tenses, and the future and the conditional.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), chapter 23; Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "tenses-1",
   "title": "The preterite and the imperfect in narration",
   "body": "<p>A story needs both past tenses. The imperfect sets the scene and says what used to happen, and the preterite reports the events one after another: <i lang=\"es\">Era de noche y llovía; Marta abrió la puerta y vio a un hombre</i> (“It was night and it was raining; Marta opened the door and saw a man”). The Academy describes the imperfect as a tense that presents the action in its course, without its beginning or its end, so it suits a state (<i lang=\"es\">Su madre estaba enferma</i>), a custom (<i lang=\"es\">Los domingos comíamos en casa de mi abuela</i>, “On Sundays we ate at my grandmother’s”), and an action that was going on when another happened (<i lang=\"es\">Cruzaba la calle cuando oyó un grito</i>, “She was crossing the street when she heard a cry”). The preterite presents the action as a whole, and so it goes with an expression that sets limits to the time: <i lang=\"es\">Ayer estudió durante tres horas</i> (“Yesterday she studied for three hours”). The imperfect refuses such an expression unless the action is repeated: <i lang=\"es\">Los sábados bailaban hasta el amanecer</i> (“On Saturdays they danced until dawn”).</p><p>Latin makes the same distinction. The Latin imperfect denotes an action or state as continued or repeated in past time and is a descriptive tense, whereas the Latin perfect states the fact.</p>",
   "qp": {
    "id": "q-es-ten-narration",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"es\">Ayer ___ (llover) durante tres horas</i> (“Yesterday it rained for three hours”).",
      "options": [
       "<i lang=\"es\">llovía</i>",
       "<i lang=\"es\">lloverá</i>",
       "<i lang=\"es\">llovió</i>",
       "<i lang=\"es\">llovería</i>"
      ],
      "answer": 2,
      "explain": "An expression that sets limits to the time, <i lang=\"es\">durante tres horas</i>, goes with the preterite."
     },
     {
      "prompt": "Choose the form: <i lang=\"es\">De niño, ___ (nadar, yo) todos los veranos</i> (“As a child I swam every summer”).",
      "options": [
       "<i lang=\"es\">nadé</i>",
       "<i lang=\"es\">nadaba</i>",
       "<i lang=\"es\">nadaré</i>",
       "<i lang=\"es\">nado</i>"
      ],
      "answer": 1,
      "explain": "A repeated action in the past is in the imperfect."
     },
     {
      "prompt": "Which expression goes with the preterite and not with the imperfect?",
      "options": [
       "<i lang=\"es\">todos los domingos</i>",
       "<i lang=\"es\">cuando era niño</i>",
       "<i lang=\"es\">durante dos horas</i>",
       "<i lang=\"es\">los sábados por la tarde</i>"
      ],
      "answer": 2,
      "explain": "The imperfect refuses an expression that sets limits to the time, unless the action is repeated."
     }
    ]
   }
  },
  {
   "id": "tenses-2",
   "title": "The present perfect and the compound tenses",
   "body": "<p>The compound tenses are formed with <i lang=\"es\">haber</i> and the participle. The present perfect, <i lang=\"es\">he cantado</i>, is called by the Academy an <i lang=\"es\">antepresente</i>: it names a past situation that falls within a period that reaches the moment of speaking, as in <i lang=\"es\">Hoy he trabajado mucho</i> (“Today I have worked a great deal”). It is the ordinary tense for this in central and southern Spain. In the northwest of Spain and in the Canary Islands the preterite, <i lang=\"es\">canté</i>, takes its place; we keep to the use of central and southern Spain. Latin has one perfect for both uses, the present perfect and the historical perfect, which Spanish divides between <i lang=\"es\">he cantado</i> and <i lang=\"es\">canté</i>.</p><p>The pluperfect, <i lang=\"es\">había cantado</i>, names a past situation that came before another: <i lang=\"es\">Cuando empezó la función, mi hermano ya había salido</i> (“When the show began, my brother had already left”). The future perfect, <i lang=\"es\">habré cantado</i>, names what will have happened before a later point: <i lang=\"es\">Mañana a esta hora ya habré terminado</i> (“Tomorrow at this time I shall have finished”). The conditional perfect, <i lang=\"es\">habría cantado</i>, is the conditional of the past: <i lang=\"es\">Yo habría ido</i> (“I would have gone”). The Academy lists one more compound tense, the <i lang=\"es\">pretérito anterior</i>, <i lang=\"es\">hubo terminado</i>, which is now restricted to careful writing and follows words such as <i lang=\"es\">apenas</i> and <i lang=\"es\">cuando</i>.</p>",
   "qp": {
    "id": "q-es-ten-compound",
    "variants": [
     {
      "prompt": "Which form is the antepresente, a past that reaches the present?",
      "options": [
       "<i lang=\"es\">llegué</i>",
       "<i lang=\"es\">he llegado</i>",
       "<i lang=\"es\">llegaba</i>",
       "<i lang=\"es\">había llegado</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">He llegado</i> names a past situation within a period that includes the moment of speaking."
     },
     {
      "prompt": "Choose the form: <i lang=\"es\">Cuando sonó el despertador, ya ___ (levantarse, yo)</i> (“When the alarm clock rang, I had already got up”).",
      "options": [
       "<i lang=\"es\">me habría levantado</i>",
       "<i lang=\"es\">me levantaría</i>",
       "<i lang=\"es\">me levanté</i>",
       "<i lang=\"es\">me había levantado</i>"
      ],
      "answer": 3,
      "explain": "The pluperfect names a situation that came before another one in the past."
     },
     {
      "prompt": "Which tense names what will have happened before a later point?",
      "options": [
       "The future perfect, <i lang=\"es\">habré cantado</i>",
       "The pluperfect, <i lang=\"es\">había cantado</i>",
       "The conditional perfect, <i lang=\"es\">habría cantado</i>",
       "The present perfect, <i lang=\"es\">he cantado</i>"
      ],
      "answer": 0,
      "explain": "The future perfect looks back from a point in the future."
     }
    ]
   }
  },
  {
   "id": "tenses-3",
   "title": "The future and the conditional in use",
   "body": "<p>The future says what will happen, and it also states a conjecture about the present: <i lang=\"es\">Estará en casa</i> (“He must be at home”), <i lang=\"es\">Tendrá frío</i> (“She must be cold”). A time expression shows which is meant: <i lang=\"es\">Ahora estará en la oficina</i> is a conjecture, and <i lang=\"es\">Mañana estará en la oficina</i> a prediction. The conditional is the future seen from the past, <i lang=\"es\">Dijo que vendría</i> (“He said that he would come”), and it too states a conjecture, about the past: <i lang=\"es\">Serían las diez</i> (“It was probably ten o’clock”). The conditional also says what would happen in imagined circumstances, <i lang=\"es\">Me gustaría ver el mar</i> (“I would like to see the sea”), and makes a request polite: <i lang=\"es\">Desearía hablar con la directora</i> (“I should like to speak to the director”).</p><p>In the general Spanish, neither the future nor the conditional is used in the clause that states the condition after <i lang=\"es\">si</i>. Spanish says <i lang=\"es\">Si llueve, nos quedaremos</i> (“If it rains, we shall stay”), with the present. The Academy notes that <i lang=\"es\">si llovería</i> is heard in some regions, including the north of Spain, and advises against it. Latin has a future of its own and no conditional; Spanish <i lang=\"es\">comería</i> is a tense of the indicative formed from the infinitive and the imperfect of <i lang=\"es\">haber</i>.</p>",
   "qp": {
    "id": "q-es-ten-future",
    "variants": [
     {
      "prompt": "Which sentence states a conjecture about the present?",
      "options": [
       "<i lang=\"es\">Ahora estará en la biblioteca</i>",
       "<i lang=\"es\">Mañana irá a la biblioteca</i>",
       "<i lang=\"es\">Ayer estuvo en la biblioteca</i>",
       "<i lang=\"es\">Estaba en la biblioteca</i>"
      ],
      "answer": 0,
      "explain": "With <i lang=\"es\">ahora</i> the future states what the speaker supposes to be so at this moment."
     },
     {
      "prompt": "Choose the form: <i lang=\"es\">Marta dijo que ___ (llegar) tarde</i> (“Marta said that she would arrive late”).",
      "options": [
       "<i lang=\"es\">llegará</i>",
       "<i lang=\"es\">llegaría</i>",
       "<i lang=\"es\">llegó</i>",
       "<i lang=\"es\">llegaremos</i>"
      ],
      "answer": 1,
      "explain": "The conditional is the future seen from the past."
     },
     {
      "prompt": "Which sentence is correct for “If it rains, we shall stay”?",
      "options": [
       "<i lang=\"es\">Si llueve, nos quedaremos</i>",
       "<i lang=\"es\">Si lloverá, nos quedaremos</i>",
       "<i lang=\"es\">Si lloverá, nos quedábamos</i>",
       "<i lang=\"es\">Si llovería, nos quedaremos</i>"
      ],
      "answer": 0,
      "explain": "The clause that states the condition has the present, not the future or the conditional."
     }
    ]
   }
  }
 ]
};
