window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.grc/prepositions"] = {
 "id": "lang.iii-indecl.grc/prepositions",
 "title": "Greek Prepositions and Their Cases",
 "sub": "Prepositions with one case, with two, and with three; the agent with ὑπό; and the elided forms",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 1636–1702",
 "panels": [
  {
   "id": "one-case",
   "title": "Prepositions with one case",
   "body": "<p>English “from the house” and “in the house” change only the preposition. A Greek preposition, like a Latin one, governs a case, but since Greek has no ablative, its prepositions take the genitive, the dative, or the accusative, as we have seen. Several take only one case:</p>\n<p><strong>With the genitive</strong>: <i lang=\"grc\">ἀντί</i> (“instead of”), <i lang=\"grc\">ἀπό</i> (“from”), <i lang=\"grc\">ἐκ</i> or <i lang=\"grc\">ἐξ</i> (“out of”), <i lang=\"grc\">πρό</i> (“before”)<br><strong>With the dative</strong>: <i lang=\"grc\">ἐν</i> (“in”), <i lang=\"grc\">σύν</i> (“with”)<br><strong>With the accusative</strong>: <i lang=\"grc\">εἰς</i> (“into,” “to”), <i lang=\"grc\">ἀνά</i> (“up,” “throughout”)</p>\n<p>The genitive with <i lang=\"grc\">ἀπό</i> and <i lang=\"grc\">ἐκ</i> does the work of the Latin ablative of separation, and the dative with <i lang=\"grc\">ἐν</i> that of the Latin ablative of place where. <i lang=\"grc\">Ἐκ</i> becomes <i lang=\"grc\">ἐξ</i> before a vowel: <i lang=\"grc\">ἐξ ἀγορᾶς</i> (“out of the marketplace”).</p>",
   "qp": {
    "id": "q-grc-prep-one",
    "variants": [
     {
      "prompt": "What case does <i lang=\"grc\">πρό</i> (“before”) take?",
      "options": [
       "The genitive",
       "The dative",
       "The accusative",
       "The ablative"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Πρό</i>, like <i lang=\"grc\">ἀντί</i>, <i lang=\"grc\">ἀπό</i>, and <i lang=\"grc\">ἐκ</i>, takes the genitive."
     },
     {
      "prompt": "Which phrase is correct for “into the house”?",
      "options": [
       "<i lang=\"grc\">εἰς τῇ οἰκίᾳ</i>",
       "<i lang=\"grc\">εἰς τῆς οἰκίας</i>",
       "<i lang=\"grc\">ἐν τὴν οἰκίαν</i>",
       "<i lang=\"grc\">εἰς τὴν οἰκίαν</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Εἰς</i> takes the accusative."
     },
     {
      "prompt": "Why is it <i lang=\"grc\">ἐξ οἴκου</i> but <i lang=\"grc\">ἐκ τοῦ οἴκου</i>?",
      "options": [
       "<i lang=\"grc\">Ἐξ</i> takes a different case",
       "<i lang=\"grc\">Ἐξ</i> is used without the article only",
       "<i lang=\"grc\">Ἐκ</i> becomes <i lang=\"grc\">ἐξ</i> before a vowel",
       "<i lang=\"grc\">Ἐξ</i> is the poetic form"
      ],
      "answer": 2,
      "explain": "Before a vowel, <i lang=\"grc\">ἐκ</i> becomes <i lang=\"grc\">ἐξ</i>."
     }
    ]
   }
  },
  {
   "id": "two-cases",
   "title": "Prepositions with two cases",
   "body": "<p>Some prepositions take the genitive or the accusative, and the case changes the sense:</p>\n<p><strong><i lang=\"grc\">διά</i></strong>: with the genitive “through” (<i lang=\"grc\">διὰ τῆς πόλεως</i>, “through the city”), with the accusative “on account of” (<i lang=\"grc\">διὰ τὸν πόλεμον</i>, “because of the war”)<br><strong><i lang=\"grc\">κατά</i></strong>: with the genitive “down from,” “against”; with the accusative “down along,” “according to” (<i lang=\"grc\">κατὰ τοὺς νόμους</i>, “according to the laws”)<br><strong><i lang=\"grc\">μετά</i></strong>: with the genitive “with” (<i lang=\"grc\">μετὰ τῶν φίλων</i>), with the accusative “after” (<i lang=\"grc\">μετὰ τὴν μάχην</i>)<br><strong><i lang=\"grc\">περί</i></strong>: with the genitive “about,” “concerning” (<i lang=\"grc\">περὶ τῆς εἰρήνης</i>), with the accusative “around” (<i lang=\"grc\">περὶ τὸ τεῖχος</i>)<br><strong><i lang=\"grc\">ὑπέρ</i></strong>: with the genitive “over,” “on behalf of” (<i lang=\"grc\">ὑπὲρ τῆς πατρίδος</i>), with the accusative “beyond”</p>\n<p>The rule of thumb is that the genitive goes with motion from or with the idea of a point of reference, and the accusative with motion toward or extent; but each preposition must be learned with its senses.</p>",
   "qp": {
    "id": "q-grc-prep-two",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">μετὰ τὸν πόλεμον</i> mean?",
      "options": [
       "“with the war”",
       "“through the war”",
       "“after the war”",
       "“about the war”"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Μετά</i> with the accusative means “after”; with the genitive, “with.”"
     },
     {
      "prompt": "What does <i lang=\"grc\">διὰ τὸν φόβον</i> mean?",
      "options": [
       "“through fear,” as through a place",
       "“because of fear”",
       "“after fear”",
       "“instead of fear”"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Διά</i> with the accusative gives the cause: “on account of.”"
     },
     {
      "prompt": "Which phrase means “concerning justice”?",
      "options": [
       "<i lang=\"grc\">περὶ τῆς δικαιοσύνης</i>",
       "<i lang=\"grc\">περὶ τὴν δικαιοσύνην</i>",
       "<i lang=\"grc\">διὰ τῆς δικαιοσύνης</i>",
       "<i lang=\"grc\">μετὰ τὴν δικαιοσύνην</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Περί</i> with the genitive means “about,” “concerning.”"
     }
    ]
   }
  },
  {
   "id": "three-cases",
   "title": "Prepositions with three cases",
   "body": "<p>Four common prepositions take all three cases, and the case usually follows the old meanings of the cases: the genitive for “from,” the dative for “at,” and the accusative for “to”:</p>\n<p><strong><i lang=\"grc\">παρά</i></strong>: with the genitive “from (the side of)” (<i lang=\"grc\">παρὰ τοῦ βασιλέως</i>, “from the king”); with the dative “beside,” “at the house of” (<i lang=\"grc\">παρὰ τῷ βασιλεῖ</i>); with the accusative “to (the side of),” “contrary to” (<i lang=\"grc\">παρὰ τὸν βασιλέα</i>, “to the king”; <i lang=\"grc\">παρὰ τοὺς νόμους</i>, “against the laws”)<br><strong><i lang=\"grc\">πρός</i></strong>: with the genitive “from,” “in the name of”; with the dative “near,” “in addition to”; with the accusative “to,” “toward” (<i lang=\"grc\">πρὸς τὴν πόλιν</i>)<br><strong><i lang=\"grc\">ἐπί</i></strong>: with the genitive “upon” (<i lang=\"grc\">ἐπὶ τῆς γῆς</i>); with the dative “at,” “on condition of”; with the accusative “to,” “against” (<i lang=\"grc\">ἐπὶ τοὺς πολεμίους</i>, “against the enemy”)<br><strong><i lang=\"grc\">ὑπό</i></strong>: with the genitive “by,” of the agent, and “from under”; with the dative “under” (rest); with the accusative “under” (motion), “toward (a time)”</p>\n<p>With a passive verb, the agent is <i lang=\"grc\">ὑπό</i> with the genitive: <i lang=\"grc\">ἐλύθη ὑπὸ τοῦ στρατηγοῦ</i>, “he was released by the general,” where Latin would use <i lang=\"grc\">ā</i> with the ablative.</p>",
   "qp": {
    "id": "q-grc-prep-three",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">παρὰ τῷ διδασκάλῳ</i> mean?",
      "options": [
       "“at the teacher’s house,” “beside the teacher”",
       "“from the teacher”",
       "“to the teacher”",
       "“against the teacher”"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Παρά</i> with the dative means “beside,” “at the house of.”"
     },
     {
      "prompt": "How does Greek name the agent with a passive verb?",
      "options": [
       "<i lang=\"grc\">ὑπό</i> with the accusative",
       "<i lang=\"grc\">ἀπό</i> with the dative",
       "the dative alone, always",
       "<i lang=\"grc\">ὑπό</i> with the genitive"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Ὑπό</i> with the genitive names the agent: <i lang=\"grc\">ὑπὸ τοῦ στρατηγοῦ</i>."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἐπὶ τοὺς Πέρσας</i> usually mean?",
      "options": [
       "“upon the Persians,” at rest",
       "“from the Persians”",
       "“against the Persians”",
       "“with the Persians”"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Ἐπί</i> with the accusative gives motion toward, often hostile: “against.”"
     }
    ]
   }
  },
  {
   "id": "elision",
   "title": "Elision and the preposition in compounds",
   "body": "<p>A preposition that ends in a vowel usually drops it before a word that begins with a vowel, and the drop is marked with an apostrophe: <i lang=\"grc\">ἀπ’ αὐτοῦ</i> (“from him”), <i lang=\"grc\">δι’ ὀλίγου</i> (“in a short while”), <i lang=\"grc\">παρ’ ἐμοί</i> (“at my house”). Before a rough breathing, a smooth mute becomes aspirate: <i lang=\"grc\">ἀφ’ ἡμῶν</i> (“from us”), <i lang=\"grc\">μεθ’ ἡμέραν</i> (“by day”), <i lang=\"grc\">ὑφ’ ἡμῶν</i> (“by us”). <i lang=\"grc\">Περί</i> and <i lang=\"grc\">πρό</i> are not elided: <i lang=\"grc\">περὶ αὐτοῦ</i>. As in Latin, the prepositions are also joined to verbs as prefixes, and then they keep their sense as adverbs: <i lang=\"grc\">ἀποβαίνω</i> (“I go away”), <i lang=\"grc\">εἰσβάλλω</i> (“I throw into,” “I invade”), <i lang=\"grc\">προλέγω</i> (“I say beforehand”).</p>",
   "qp": {
    "id": "q-grc-prep-elision",
    "variants": [
     {
      "prompt": "What is <i lang=\"grc\">ἐπ’</i> in <i lang=\"grc\">ἐπ’ αὐτόν</i>?",
      "options": [
       "a separate preposition <i lang=\"grc\">ἐπ</i>",
       "<i lang=\"grc\">ἐπί</i> with its final vowel elided",
       "<i lang=\"grc\">ἀπό</i> with its vowel changed",
       "an abbreviation of <i lang=\"grc\">ἐπειδή</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Ἐπί</i> drops its final <i lang=\"grc\">ι</i> before the vowel of <i lang=\"grc\">αὐτόν</i>."
     },
     {
      "prompt": "Why is it <i lang=\"grc\">ἀφ’ ἵππου</i> and not <i lang=\"grc\">ἀπ’ ἵππου</i>?",
      "options": [
       "<i lang=\"grc\">Ἀφ’</i> takes a different case",
       "<i lang=\"grc\">Ἵππος</i> begins with a consonant",
       "Before a rough breathing <i lang=\"grc\">π</i> becomes <i lang=\"grc\">φ</i>",
       "<i lang=\"grc\">Ἀπό</i> is never elided"
      ],
      "answer": 2,
      "explain": "Before a rough breathing a smooth mute becomes aspirate: <i lang=\"grc\">ἀπ’</i> becomes <i lang=\"grc\">ἀφ’</i>."
     },
     {
      "prompt": "Which preposition is not elided?",
      "options": [
       "<i lang=\"grc\">ἀπό</i>",
       "<i lang=\"grc\">διά</i>",
       "<i lang=\"grc\">κατά</i>",
       "<i lang=\"grc\">περί</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Περί</i> and <i lang=\"grc\">πρό</i> keep their vowel: <i lang=\"grc\">περὶ αὐτοῦ</i>."
     }
    ]
   }
  }
 ]
};
