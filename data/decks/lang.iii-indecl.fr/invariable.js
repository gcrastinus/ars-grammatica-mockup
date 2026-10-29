window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.fr/invariable"] = {
 "id": "lang.iii-indecl.fr/invariable",
 "title": "Negation, Adverbs, and Conjunctions in French",
 "sub": "Ne … pas and the other negatives, the place of the adverb, and the coordinating and subordinating conjunctions",
 "sources": "Lawless; Larousse; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "negation",
   "title": "Negation in two parts",
   "body": "<p>English “not” is one word, but French negation usually has two parts, <i lang=\"fr\">ne</i> before the verb and a second word after it: <i lang=\"fr\">je ne sais pas</i> (“I do not know”). The second word gives the kind of negation: <i lang=\"fr\">ne … pas</i> (“not”), <i lang=\"fr\">ne … plus</i> (“no longer”), <i lang=\"fr\">ne … jamais</i> (“never”), <i lang=\"fr\">ne … rien</i> (“nothing”), <i lang=\"fr\">ne … personne</i> (“no one”), <i lang=\"fr\">ne … guère</i> (“hardly”), and <i lang=\"fr\">ne … que</i> (“only,” which is not a negation in sense: <i lang=\"fr\">il ne boit que de l’eau</i>, “he drinks only water”). In a compound tense the second word stands before the participle (<i lang=\"fr\">je n’ai pas vu</i>), except <i lang=\"fr\">personne</i>, which follows it (<i lang=\"fr\">je n’ai vu personne</i>). Before an infinitive both parts stand together in front: <i lang=\"fr\">ne pas fumer</i>. In everyday speech the <i lang=\"fr\">ne</i> is often dropped (<i lang=\"fr\">je sais pas</i>), but written French keeps it.</p>",
   "qp": {
    "id": "q-fr-negation",
    "variants": [
     {
      "prompt": "What does <i lang=\"fr\">Il ne parle plus</i> mean?",
      "options": [
       "“He speaks more.”",
       "“He no longer speaks.”",
       "“He never spoke.”",
       "“He speaks only.”"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ne … plus</i> means “no longer.”"
     },
     {
      "prompt": "Where does <i lang=\"fr\">pas</i> stand in a compound tense?",
      "options": [
       "After the participle: <i lang=\"fr\">je n’ai vu pas</i>",
       "Before the auxiliary: <i lang=\"fr\">je pas ai vu</i>",
       "Before the participle: <i lang=\"fr\">je n’ai pas vu</i>",
       "At the end of the sentence"
      ],
      "answer": 2,
      "explain": "The second part of the negation stands before the participle, except <i lang=\"fr\">personne</i>."
     },
     {
      "prompt": "What does <i lang=\"fr\">Elle ne lit que des romans</i> mean?",
      "options": [
       "“She does not read novels.”",
       "“She never reads novels.”",
       "“She reads no more novels.”",
       "“She reads only novels.”"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Ne … que</i> means “only.”"
     }
    ]
   }
  },
  {
   "id": "adverbs",
   "title": "The adverb and its place",
   "body": "<p>Many French adverbs are formed with <i lang=\"fr\">-ment</i>, as we will see in Section IV, and others are old words of their own: <i lang=\"fr\">bien</i>, <i lang=\"fr\">mal</i>, <i lang=\"fr\">vite</i>, <i lang=\"fr\">souvent</i>, <i lang=\"fr\">toujours</i>, <i lang=\"fr\">déjà</i>, <i lang=\"fr\">ici</i>, <i lang=\"fr\">là</i>, <i lang=\"fr\">très</i>, <i lang=\"fr\">trop</i>. Whereas an English adverb often stands between the subject and the verb (“she often reads”), a French adverb usually follows the verb: <i lang=\"fr\">elle lit souvent</i>. In a compound tense, short common adverbs stand between the auxiliary and the participle (<i lang=\"fr\">il a bien dormi</i>, <i lang=\"fr\">j’ai déjà mangé</i>), whereas adverbs of time and place usually follow the participle (<i lang=\"fr\">il est arrivé hier</i>). <i lang=\"fr\">Bien</i>, <i lang=\"fr\">mal</i>, and <i lang=\"fr\">peu</i> are compared irregularly: <i lang=\"fr\">mieux</i>, <i lang=\"fr\">le mieux</i>; <i lang=\"fr\">plus mal</i> (or <i lang=\"fr\">pis</i>); <i lang=\"fr\">moins</i>, <i lang=\"fr\">le moins</i>.</p>",
   "qp": {
    "id": "q-fr-adverb-place",
    "variants": [
     {
      "prompt": "Which sentence puts the adverb where French usually puts it?",
      "options": [
       "<i lang=\"fr\">Il mange toujours à midi.</i>",
       "<i lang=\"fr\">Il toujours mange à midi.</i>",
       "<i lang=\"fr\">Toujours il mange à midi.</i>",
       "<i lang=\"fr\">Il mange à midi toujours toujours.</i>"
      ],
      "answer": 0,
      "explain": "A French adverb usually follows the verb."
     },
     {
      "prompt": "Choose the order: “He has already left.”",
      "options": [
       "<i lang=\"fr\">Il déjà est parti.</i>",
       "<i lang=\"fr\">Il est parti déjà ici.</i>",
       "<i lang=\"fr\">Déjà il parti est.</i>",
       "<i lang=\"fr\">Il est déjà parti.</i>"
      ],
      "answer": 3,
      "explain": "A short common adverb stands between the auxiliary and the participle."
     },
     {
      "prompt": "What is the comparative of the adverb <i lang=\"fr\">bien</i>?",
      "options": [
       "<i lang=\"fr\">meilleur</i>",
       "<i lang=\"fr\">plus bien</i>",
       "<i lang=\"fr\">mieux</i>",
       "<i lang=\"fr\">bienne</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Bien, mieux, le mieux</i>; <i lang=\"fr\">meilleur</i> is the adjective."
     }
    ]
   }
  },
  {
   "id": "conjunctions",
   "title": "Coordinating and subordinating conjunctions",
   "body": "<p>French schoolchildren learn the coordinating conjunctions with the sentence <i lang=\"fr\">Mais où est donc Ornicar ?</i>, which holds <i lang=\"fr\">mais</i> (“but”), <i lang=\"fr\">ou</i> (“or”), <i lang=\"fr\">et</i> (“and”), <i lang=\"fr\">donc</i> (“therefore”), <i>or</i> (“now,” “yet”), <i lang=\"fr\">ni</i> (“nor”), and <i lang=\"fr\">car</i> (“for”). They join words or clauses of equal rank. The subordinating conjunctions join a subordinate clause: <i lang=\"fr\">que</i> (“that”), <i lang=\"fr\">quand</i> and <i lang=\"fr\">lorsque</i> (“when”), <i lang=\"fr\">si</i> (“if”), <i lang=\"fr\">comme</i> (“as,” “since”), <i lang=\"fr\">parce que</i> (“because”), <i lang=\"fr\">puisque</i> (“since”). Some subordinating conjunctions take the subjunctive, as we have seen: <i lang=\"fr\">bien que</i> and <i lang=\"fr\">quoique</i> (“although”), <i lang=\"fr\">pour que</i> and <i lang=\"fr\">afin que</i> (“so that”), <i lang=\"fr\">avant que</i> (“before”), <i lang=\"fr\">jusqu’à ce que</i> (“until”), <i lang=\"fr\">à moins que</i> (“unless”); whereas <i lang=\"fr\">après que</i> takes the indicative in careful usage.</p>",
   "qp": {
    "id": "q-fr-conjunctions",
    "variants": [
     {
      "prompt": "Which of these is a coordinating conjunction?",
      "options": [
       "<i lang=\"fr\">parce que</i>",
       "<i lang=\"fr\">puisque</i>",
       "<i lang=\"fr\">lorsque</i>",
       "<i lang=\"fr\">car</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Car</i> (“for”) is one of the coordinating conjunctions; the others introduce subordinate clauses."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Je reste jusqu’à ce qu’il ___</i> (“I am staying until he comes”).",
      "options": [
       "<i lang=\"fr\">vienne</i>",
       "<i lang=\"fr\">vient</i>",
       "<i lang=\"fr\">viendra</i>",
       "<i lang=\"fr\">venait</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Jusqu’à ce que</i> takes the subjunctive."
     },
     {
      "prompt": "What does <i lang=\"fr\">puisque</i> mean?",
      "options": [
       "“until”",
       "“since,” giving a reason",
       "“although”",
       "“before”"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Puisque</i> gives a reason that is known: “since.”"
     }
    ]
   }
  }
 ]
};
