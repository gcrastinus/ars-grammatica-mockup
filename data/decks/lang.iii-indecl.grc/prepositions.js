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
   "body": "<p>English “from the house” and “in the house” change only the preposition. A Greek preposition, like a Latin one, governs a case, but since Greek has no ablative, its prepositions take the genitive, the dative, or the accusative, as we have seen. Several take only one case:</p>\n<p><strong>With the genitive</strong>: <i>ἀντί</i> (“instead of”), <i>ἀπό</i> (“from”), <i>ἐκ</i> or <i>ἐξ</i> (“out of”), <i>πρό</i> (“before”)<br><strong>With the dative</strong>: <i>ἐν</i> (“in”), <i>σύν</i> (“with”)<br><strong>With the accusative</strong>: <i>εἰς</i> (“into,” “to”), <i>ἀνά</i> (“up,” “throughout”)</p>\n<p>The genitive with <i>ἀπό</i> and <i>ἐκ</i> does the work of the Latin ablative of separation, and the dative with <i>ἐν</i> that of the Latin ablative of place where. <i>Ἐκ</i> becomes <i>ἐξ</i> before a vowel: <i>ἐξ ἀγορᾶς</i> (“out of the marketplace”).</p>",
   "qp": {
    "id": "q-grc-prep-one",
    "variants": [
     {
      "prompt": "What case does <i>πρό</i> (“before”) take?",
      "options": [
       "The genitive",
       "The dative",
       "The accusative",
       "The ablative"
      ],
      "answer": 0,
      "explain": "<i>Πρό</i>, like <i>ἀντί</i>, <i>ἀπό</i>, and <i>ἐκ</i>, takes the genitive."
     },
     {
      "prompt": "Which phrase is correct for “into the house”?",
      "options": [
       "<i>εἰς τῇ οἰκίᾳ</i>",
       "<i>εἰς τῆς οἰκίας</i>",
       "<i>ἐν τὴν οἰκίαν</i>",
       "<i>εἰς τὴν οἰκίαν</i>"
      ],
      "answer": 3,
      "explain": "<i>Εἰς</i> takes the accusative."
     },
     {
      "prompt": "Why is it <i>ἐξ οἴκου</i> but <i>ἐκ τοῦ οἴκου</i>?",
      "options": [
       "<i>Ἐξ</i> takes a different case",
       "<i>Ἐξ</i> is used without the article only",
       "<i>Ἐκ</i> becomes <i>ἐξ</i> before a vowel",
       "<i>Ἐξ</i> is the poetic form"
      ],
      "answer": 2,
      "explain": "Before a vowel, <i>ἐκ</i> becomes <i>ἐξ</i>."
     }
    ]
   }
  },
  {
   "id": "two-cases",
   "title": "Prepositions with two cases",
   "body": "<p>Some prepositions take the genitive or the accusative, and the case changes the sense:</p>\n<p><strong><i>διά</i></strong>: with the genitive “through” (<i>διὰ τῆς πόλεως</i>, “through the city”), with the accusative “on account of” (<i>διὰ τὸν πόλεμον</i>, “because of the war”)<br><strong><i>κατά</i></strong>: with the genitive “down from,” “against”; with the accusative “down along,” “according to” (<i>κατὰ τοὺς νόμους</i>, “according to the laws”)<br><strong><i>μετά</i></strong>: with the genitive “with” (<i>μετὰ τῶν φίλων</i>), with the accusative “after” (<i>μετὰ τὴν μάχην</i>)<br><strong><i>περί</i></strong>: with the genitive “about,” “concerning” (<i>περὶ τῆς εἰρήνης</i>), with the accusative “around” (<i>περὶ τὸ τεῖχος</i>)<br><strong><i>ὑπέρ</i></strong>: with the genitive “over,” “on behalf of” (<i>ὑπὲρ τῆς πατρίδος</i>), with the accusative “beyond”</p>\n<p>The rule of thumb is that the genitive goes with motion from or with the idea of a point of reference, and the accusative with motion toward or extent; but each preposition must be learned with its senses.</p>",
   "qp": {
    "id": "q-grc-prep-two",
    "variants": [
     {
      "prompt": "What does <i>μετὰ τὸν πόλεμον</i> mean?",
      "options": [
       "“with the war”",
       "“through the war”",
       "“after the war”",
       "“about the war”"
      ],
      "answer": 2,
      "explain": "<i>Μετά</i> with the accusative means “after”; with the genitive, “with.”"
     },
     {
      "prompt": "What does <i>διὰ τὸν φόβον</i> mean?",
      "options": [
       "“through fear,” as through a place",
       "“because of fear”",
       "“after fear”",
       "“instead of fear”"
      ],
      "answer": 1,
      "explain": "<i>Διά</i> with the accusative gives the cause: “on account of.”"
     },
     {
      "prompt": "Which phrase means “concerning justice”?",
      "options": [
       "<i>περὶ τῆς δικαιοσύνης</i>",
       "<i>περὶ τὴν δικαιοσύνην</i>",
       "<i>διὰ τῆς δικαιοσύνης</i>",
       "<i>μετὰ τὴν δικαιοσύνην</i>"
      ],
      "answer": 0,
      "explain": "<i>Περί</i> with the genitive means “about,” “concerning.”"
     }
    ]
   }
  },
  {
   "id": "three-cases",
   "title": "Prepositions with three cases",
   "body": "<p>Four common prepositions take all three cases, and the case usually follows the old meanings of the cases: the genitive for “from,” the dative for “at,” and the accusative for “to”:</p>\n<p><strong><i>παρά</i></strong>: with the genitive “from (the side of)” (<i>παρὰ τοῦ βασιλέως</i>, “from the king”); with the dative “beside,” “at the house of” (<i>παρὰ τῷ βασιλεῖ</i>); with the accusative “to (the side of),” “contrary to” (<i>παρὰ τὸν βασιλέα</i>, “to the king”; <i>παρὰ τοὺς νόμους</i>, “against the laws”)<br><strong><i>πρός</i></strong>: with the genitive “from,” “in the name of”; with the dative “near,” “in addition to”; with the accusative “to,” “toward” (<i>πρὸς τὴν πόλιν</i>)<br><strong><i>ἐπί</i></strong>: with the genitive “upon” (<i>ἐπὶ τῆς γῆς</i>); with the dative “at,” “on condition of”; with the accusative “to,” “against” (<i>ἐπὶ τοὺς πολεμίους</i>, “against the enemy”)<br><strong><i>ὑπό</i></strong>: with the genitive “by,” of the agent, and “from under”; with the dative “under” (rest); with the accusative “under” (motion), “toward (a time)”</p>\n<p>With a passive verb, the agent is <i>ὑπό</i> with the genitive: <i>ἐλύθη ὑπὸ τοῦ στρατηγοῦ</i>, “he was released by the general,” where Latin would use <i>ā</i> with the ablative.</p>",
   "qp": {
    "id": "q-grc-prep-three",
    "variants": [
     {
      "prompt": "What does <i>παρὰ τῷ διδασκάλῳ</i> mean?",
      "options": [
       "“at the teacher’s house,” “beside the teacher”",
       "“from the teacher”",
       "“to the teacher”",
       "“against the teacher”"
      ],
      "answer": 0,
      "explain": "<i>Παρά</i> with the dative means “beside,” “at the house of.”"
     },
     {
      "prompt": "How does Greek name the agent with a passive verb?",
      "options": [
       "<i>ὑπό</i> with the accusative",
       "<i>ἀπό</i> with the dative",
       "the dative alone, always",
       "<i>ὑπό</i> with the genitive"
      ],
      "answer": 3,
      "explain": "<i>Ὑπό</i> with the genitive names the agent: <i>ὑπὸ τοῦ στρατηγοῦ</i>."
     },
     {
      "prompt": "What does <i>ἐπὶ τοὺς Πέρσας</i> usually mean?",
      "options": [
       "“upon the Persians,” at rest",
       "“from the Persians”",
       "“against the Persians”",
       "“with the Persians”"
      ],
      "answer": 2,
      "explain": "<i>Ἐπί</i> with the accusative gives motion toward, often hostile: “against.”"
     }
    ]
   }
  },
  {
   "id": "elision",
   "title": "Elision and the preposition in compounds",
   "body": "<p>A preposition that ends in a vowel usually drops it before a word that begins with a vowel, and the drop is marked with an apostrophe: <i>ἀπ’ αὐτοῦ</i> (“from him”), <i>δι’ ὀλίγου</i> (“in a short while”), <i>παρ’ ἐμοί</i> (“at my house”). Before a rough breathing, a smooth mute becomes aspirate: <i>ἀφ’ ἡμῶν</i> (“from us”), <i>μεθ’ ἡμέραν</i> (“by day”), <i>ὑφ’ ἡμῶν</i> (“by us”). <i>Περί</i> and <i>πρό</i> are not elided: <i>περὶ αὐτοῦ</i>. As in Latin, the prepositions are also joined to verbs as prefixes, and then they keep their sense as adverbs: <i>ἀποβαίνω</i> (“I go away”), <i>εἰσβάλλω</i> (“I throw into,” “I invade”), <i>προλέγω</i> (“I say beforehand”).</p>",
   "qp": {
    "id": "q-grc-prep-elision",
    "variants": [
     {
      "prompt": "What is <i>ἐπ’</i> in <i>ἐπ’ αὐτόν</i>?",
      "options": [
       "a separate preposition <i>ἐπ</i>",
       "<i>ἐπί</i> with its final vowel elided",
       "<i>ἀπό</i> with its vowel changed",
       "an abbreviation of <i>ἐπειδή</i>"
      ],
      "answer": 1,
      "explain": "<i>Ἐπί</i> drops its final <i>ι</i> before the vowel of <i>αὐτόν</i>."
     },
     {
      "prompt": "Why is it <i>ἀφ’ ἵππου</i> and not <i>ἀπ’ ἵππου</i>?",
      "options": [
       "<i>Ἀφ’</i> takes a different case",
       "<i>Ἵππος</i> begins with a consonant",
       "Before a rough breathing <i>π</i> becomes <i>φ</i>",
       "<i>Ἀπό</i> is never elided"
      ],
      "answer": 2,
      "explain": "Before a rough breathing a smooth mute becomes aspirate: <i>ἀπ’</i> becomes <i>ἀφ’</i>."
     },
     {
      "prompt": "Which preposition is not elided?",
      "options": [
       "<i>ἀπό</i>",
       "<i>διά</i>",
       "<i>κατά</i>",
       "<i>περί</i>"
      ],
      "answer": 3,
      "explain": "<i>Περί</i> and <i>πρό</i> keep their vowel: <i>περὶ αὐτοῦ</i>."
     }
    ]
   }
  }
 ]
};
