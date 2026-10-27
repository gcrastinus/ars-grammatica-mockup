window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.es/participle"] = {
 "id": "lang.iii-decl.es/participle",
 "title": "The Infinitive, the Gerund, and the Participle",
 "sub": "The three non-personal forms of the Spanish verb, the irregular participles, and the agreement of the participle.",
 "sources": "Real Academia Española and Asociación de Academias de la Lengua Española, <i lang=\"es\">Nueva gramática de la lengua española: Manual</i> (2010), sections 4.1, 4.4, 4.6, 26.1, 26.2, 27.1, and 27.5; Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "participle-1",
   "title": "The infinitive",
   "body": "<p>The infinitive is the form of the verb that names the action without person, number, or tense, and it is the form under which a verb is listed in a dictionary: <i lang=\"es\">cantar</i>, <i lang=\"es\">comer</i>, <i lang=\"es\">vivir</i>. It ends in <i lang=\"es\">-r</i> after the vowel of its conjugation. It can be the subject or the object of another verb, <i lang=\"es\">Viajar cansa</i> (“Traveling is tiring”), <i lang=\"es\">Quiero dormir</i> (“I want to sleep”), and it can follow a preposition, <i lang=\"es\">al salir</i> (“on leaving”), <i lang=\"es\">para comer</i> (“in order to eat”). An infinitive can also be used as a noun, with an article and an adjective, and then it is masculine: <i lang=\"es\">el cantar de los pájaros</i> (“the singing of the birds”). The unstressed object pronouns are attached to it in one word: <i lang=\"es\">verlo</i> (“to see it”), <i lang=\"es\">comprarlas</i> (“to buy them”).</p><p>Spanish has a simple infinitive, <i lang=\"es\">cantar</i>, and a compound infinitive, <i lang=\"es\">haber cantado</i> (“to have sung”). It has no future infinitive. Latin has three: the present (<i lang=\"la\">amāre</i>), the perfect (<i lang=\"la\">amāvisse</i>), and the future (<i lang=\"la\">amātūrus esse</i>).</p>",
   "qp": {
    "id": "q-es-par-infinitive",
    "variants": [
     {
      "prompt": "Which ending marks the infinitive?",
      "options": [
       "<i lang=\"es\">-ndo</i>",
       "<i lang=\"es\">-r</i>",
       "<i lang=\"es\">-do</i>",
       "<i lang=\"es\">-s</i>"
      ],
      "answer": 1,
      "explain": "The infinitive ends in <i lang=\"es\">-r</i>, after <i lang=\"es\">-a-</i>, <i lang=\"es\">-e-</i>, or <i lang=\"es\">-i-</i>."
     },
     {
      "prompt": "What is the compound infinitive of <i lang=\"es\">vivir</i> (“to live”)?",
      "options": [
       "<i lang=\"es\">viviendo</i>",
       "<i lang=\"es\">habiendo vivido</i>",
       "<i lang=\"es\">haber vivido</i>",
       "<i lang=\"es\">ser vivido</i>"
      ],
      "answer": 2,
      "explain": "The compound infinitive is <i lang=\"es\">haber</i> and the participle."
     },
     {
      "prompt": "How is “to see it” (masculine) written?",
      "options": [
       "<i lang=\"es\">lo ver</i>",
       "<i lang=\"es\">ver lo</i>",
       "<i lang=\"es\">verlo</i>",
       "<i lang=\"es\">le ver</i>"
      ],
      "answer": 2,
      "explain": "The unstressed object pronoun is attached to the infinitive in one word."
     }
    ]
   }
  },
  {
   "id": "participle-2",
   "title": "The gerund",
   "body": "<p>The gerund ends in <i lang=\"es\">-ando</i> in the first conjugation and in <i lang=\"es\">-iendo</i> in the second and third: <i lang=\"es\">cantando</i>, <i lang=\"es\">comiendo</i>, <i lang=\"es\">viviendo</i>. It has no number, person, tense, or mood of its own, and it has a compound form, <i lang=\"es\">habiendo cantado</i>. Several gerunds are irregular. After a vowel the <i lang=\"es\">i</i> becomes <i lang=\"es\">y</i>: <i lang=\"es\">leyendo</i>, <i lang=\"es\">oyendo</i>, <i lang=\"es\">construyendo</i>, <i lang=\"es\">yendo</i> (of <i lang=\"es\">ir</i>). Verbs with a change of vowel have it in the gerund: <i lang=\"es\">durmiendo</i>, <i lang=\"es\">pidiendo</i>, <i lang=\"es\">sintiendo</i>, <i lang=\"es\">diciendo</i>, <i lang=\"es\">pudiendo</i>.</p><p>The gerund is used as a verb, and so it takes objects: <i lang=\"es\">leyéndolo</i> (“reading it”). It says how or when the action of the main verb happens, <i lang=\"es\">Aprendió a nadar practicando todos los días</i> (“She learned to swim by practicing every day”), and with <i lang=\"es\">estar</i> it forms the progressive: <i lang=\"es\">Estoy escribiendo</i> (“I am writing”). Latin has a gerund of its own, in cases of its own (<i lang=\"la\">amandī</i>, <i lang=\"la\">amandō</i>), and a present participle, <i lang=\"la\">amāns</i>; current Spanish has no present participle used as a verb.</p>",
   "qp": {
    "id": "q-es-par-gerund",
    "variants": [
     {
      "prompt": "What is the gerund of <i lang=\"es\">creer</i> (“to believe”)?",
      "options": [
       "<i lang=\"es\">creyendo</i>",
       "<i lang=\"es\">creendo</i>",
       "<i lang=\"es\">creiendo</i>",
       "<i lang=\"es\">creído</i>"
      ],
      "answer": 0,
      "explain": "After a vowel the <i lang=\"es\">i</i> of the ending becomes <i lang=\"es\">y</i>."
     },
     {
      "prompt": "What is the gerund of <i lang=\"es\">mentir</i> (“to lie”)?",
      "options": [
       "<i lang=\"es\">mentiendo</i>",
       "<i lang=\"es\">mintiendo</i>",
       "<i lang=\"es\">mentando</i>",
       "<i lang=\"es\">mentido</i>"
      ],
      "answer": 1,
      "explain": "A verb like <i lang=\"es\">sentir</i> closes the vowel in the gerund: <i lang=\"es\">mintiendo</i>."
     },
     {
      "prompt": "Which sentence says that an action is in progress?",
      "options": [
       "<i lang=\"es\">Escribí una carta</i>",
       "<i lang=\"es\">Escribiré una carta</i>",
       "<i lang=\"es\">Escribo cartas los lunes</i>",
       "<i lang=\"es\">Estoy escribiendo una carta</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Estar</i> and the gerund form the progressive."
     }
    ]
   }
  },
  {
   "id": "participle-3",
   "title": "The past participle",
   "body": "<p>The past participle ends in <i lang=\"es\">-ado</i> in the first conjugation and in <i lang=\"es\">-ido</i> in the second and third: <i lang=\"es\">cantado</i>, <i lang=\"es\">comido</i>, <i lang=\"es\">vivido</i>. It forms the compound tenses with <i lang=\"es\">haber</i>, and then it never changes, <i lang=\"es\">Ellas han cantado</i>. Otherwise it is declined like an adjective and agrees with its noun in gender and number: <i lang=\"es\">las puertas cerradas</i> (“the closed doors”), <i lang=\"es\">La carta fue escrita ayer</i> (“The letter was written yesterday”). A limited group of participles is irregular, and the irregularity belongs to the derivatives as well:</p><p><i lang=\"es\">abrir</i>, <i lang=\"es\">abierto</i><br><i lang=\"es\">cubrir</i>, <i lang=\"es\">cubierto</i><br><i lang=\"es\">decir</i>, <i lang=\"es\">dicho</i><br><i lang=\"es\">escribir</i>, <i lang=\"es\">escrito</i><br><i lang=\"es\">hacer</i>, <i lang=\"es\">hecho</i><br><i lang=\"es\">morir</i>, <i lang=\"es\">muerto</i><br><i lang=\"es\">poner</i>, <i lang=\"es\">puesto</i><br><i lang=\"es\">romper</i>, <i lang=\"es\">roto</i><br><i lang=\"es\">ver</i>, <i lang=\"es\">visto</i><br><i lang=\"es\">volver</i>, <i lang=\"es\">vuelto</i></p><p>So <i lang=\"es\">descubrir</i> gives <i lang=\"es\">descubierto</i>, <i lang=\"es\">deshacer</i> gives <i lang=\"es\">deshecho</i>, and <i lang=\"es\">componer</i> gives <i lang=\"es\">compuesto</i>.</p><p>A few verbs have both a regular and an irregular participle, such as <i lang=\"es\">freír</i>, <i lang=\"es\">freído</i> and <i lang=\"es\">frito</i>, and <i lang=\"es\">imprimir</i>, <i lang=\"es\">imprimido</i> and <i lang=\"es\">impreso</i>. Both forms are used in the compound tenses, <i lang=\"es\">he freído</i> and <i lang=\"es\">he frito</i>, <i lang=\"es\">ha imprimido</i> and <i lang=\"es\">ha impreso</i>, and for <i lang=\"es\">freír</i> the form <i lang=\"es\">frito</i> is the more common. Latin has a perfect participle in <i lang=\"la\">-tus</i> (<i lang=\"la\">amātus</i>), which is passive in meaning, and it has no perfect active participle; Spanish uses the same participle in both ways, as in <i lang=\"es\">las cartas escritas</i> and <i lang=\"es\">han escrito</i>.</p>",
   "qp": {
    "id": "q-es-par-participle",
    "variants": [
     {
      "prompt": "What is the past participle of <i lang=\"es\">romper</i> (“to break”)?",
      "options": [
       "<i lang=\"es\">rompido</i>",
       "<i lang=\"es\">romperado</i>",
       "<i lang=\"es\">roto</i>",
       "<i lang=\"es\">rompado</i>"
      ],
      "answer": 2,
      "explain": "The participle of <i lang=\"es\">romper</i> is irregular: <i lang=\"es\">roto</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"es\">Las ventanas están ___ (abrir)</i> (“The windows are open”).",
      "options": [
       "<i lang=\"es\">abierto</i>",
       "<i lang=\"es\">abiertas</i>",
       "<i lang=\"es\">abiertos</i>",
       "<i lang=\"es\">abridas</i>"
      ],
      "answer": 1,
      "explain": "After <i lang=\"es\">estar</i> the participle agrees with <i lang=\"es\">ventanas</i>: feminine plural."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "<i lang=\"es\">Ellas han escrito la carta</i>",
       "<i lang=\"es\">Ellas han escritas la carta</i>",
       "<i lang=\"es\">Ellas han escribidas la carta</i>",
       "<i lang=\"es\">Ellas han escrita la carta</i>"
      ],
      "answer": 0,
      "explain": "After <i lang=\"es\">haber</i> the participle never changes."
     }
    ]
   }
  },
  {
   "id": "participle-4",
   "title": "Participle clauses",
   "body": "<p>A participle can stand with a noun at the beginning of a sentence to say when, why, or in what circumstances something happened, and it agrees with that noun: <i lang=\"es\">Terminada la cena, salimos</i> (“When supper was over, we went out”), <i lang=\"es\">Cerrada la tienda, volvimos a casa</i> (“The shop being closed, we went home”). The Academy calls this an absolute construction, and the participle may give the time, the cause, the condition, or the concession. Latin has the same construction in the ablative absolute, a noun and a participle in agreement in the ablative (<i lang=\"la\">acceptīs litterīs</i>, “the letter having been received”); Spanish has no cases, so the noun keeps its ordinary form.</p><p>The gerund also forms a clause, but its subject is usually that of the main verb: <i lang=\"es\">Pedro ganó el concurso cantando una jota</i> (“Pedro won the contest by singing a jota”) has the gerund tell how Pedro won it. When the gerund has a subject of its own, the subject stands with it: <i lang=\"es\">No sabiendo ella qué decir, calló</i> (“Not knowing what to say, she was silent”).</p>",
   "qp": {
    "id": "q-es-par-absolute",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"es\">___ las maletas, salimos</i> (“The suitcases being packed, we set out”).",
      "options": [
       "<i lang=\"es\">Hecho</i>",
       "<i lang=\"es\">Hechas</i>",
       "<i lang=\"es\">Haciendo</i>",
       "<i lang=\"es\">Hacer</i>"
      ],
      "answer": 1,
      "explain": "The participle agrees with <i lang=\"es\">las maletas</i>, feminine plural."
     },
     {
      "prompt": "Which Latin construction does the Spanish participle clause resemble?",
      "options": [
       "The ablative absolute",
       "The supine",
       "The gerundive of obligation",
       "The accusative with the infinitive"
      ],
      "answer": 0,
      "explain": "A noun and a participle in agreement give the time or circumstances of the action."
     },
     {
      "prompt": "Which form of <i lang=\"es\">ver</i> agrees with <i lang=\"es\">las cosas</i> in <i lang=\"es\">___ las cosas así, se fue</i> (“Seeing how things were, he left”)?",
      "options": [
       "<i lang=\"es\">Visto</i>",
       "<i lang=\"es\">Vistas</i>",
       "<i lang=\"es\">Viendo</i>",
       "<i lang=\"es\">Ver</i>"
      ],
      "answer": 1,
      "explain": "The irregular participle <i lang=\"es\">visto</i> agrees with <i lang=\"es\">las cosas</i>: <i lang=\"es\">vistas</i>."
     }
    ]
   }
  }
 ]
};
