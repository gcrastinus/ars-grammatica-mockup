window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.la/composition"] = {
 "id": "lang.iv.la/composition",
 "title": "Composition in Latin",
 "sub": "Compound nouns and adjectives, compounds of a verb with its object, and the inseparable prefixes",
 "sources": "Allen and Greenough, <em>New Latin Grammar</em> §§ 265–268",
 "panels": [
  {
   "id": "nouns",
   "title": "Compound nouns and adjectives",
   "body": "<p>We have seen that Latin compounds a verb with a preposition easily, as in <em lang=\"la\">perficiō</em>. Compounds of two nouns or of a noun and a verb are fewer than in English or German, but there are many in common use. The first part usually ends in the connecting vowel <em lang=\"la\">-i-</em>: <em lang=\"la\">agricola</em> (“farmer,” from <em lang=\"la\">ager</em>, “field,” and <em lang=\"la\">colō</em>, “I till”), <em lang=\"la\">armiger</em> (“armor-bearer,” from <em lang=\"la\">arma</em> and <em lang=\"la\">gerō</em>), <em lang=\"la\">tubicen</em> (“trumpeter,” from <em lang=\"la\">tuba</em> and <em lang=\"la\">canō</em>), <em lang=\"la\">artifex</em> (“craftsman,” from <em lang=\"la\">ars</em> and <em lang=\"la\">faciō</em>). So in Latin the second part usually comes from a verb and names the doer, whereas the first names the object of the action.</p>\n<p>Compound adjectives are formed in the same way: <em lang=\"la\">magnanimus</em> (“great-souled,” from <em lang=\"la\">magnus</em> and <em lang=\"la\">animus</em>), <em lang=\"la\">misericors</em> (“tender-hearted,” from <em lang=\"la\">miser</em> and <em lang=\"la\">cor</em>), <em lang=\"la\">omnipotēns</em> (“all-powerful”). These are the models of many English words: “magnanimous,” “omnipotent,” “armiger.”</p>",
   "qp": {
    "id": "q-la-comp-nouns",
    "variants": [
     {
      "prompt": "From what is <em lang=\"la\">signifer</em> (“standard-bearer”) compounded?",
      "options": [
       "<em lang=\"la\">signum</em> and <em lang=\"la\">ferō</em>",
       "<em lang=\"la\">signum</em> and <em lang=\"la\">faciō</em>",
       "<em lang=\"la\">signō</em> and <em lang=\"la\">fīō</em>",
       "<em lang=\"la\">signum</em> and <em lang=\"la\">fīnis</em>"
      ],
      "answer": 0,
      "explain": "<em lang=\"la\">Sign-i-fer</em>: the standard, joined with <em lang=\"la\">-i-</em> to a form of <em lang=\"la\">ferō</em>, “I carry.”"
     },
     {
      "prompt": "What connecting vowel does Latin usually put between the parts of a compound?",
      "options": [
       "<em lang=\"la\">-o-</em>",
       "<em lang=\"la\">-a-</em>",
       "<em lang=\"la\">-u-</em>",
       "<em lang=\"la\">-i-</em>"
      ],
      "answer": 3,
      "explain": "<em lang=\"la\">Agr-i-cola</em>, <em lang=\"la\">arm-i-ger</em>: Latin joins with <em lang=\"la\">-i-</em>, Greek with <em lang=\"la\">-o-</em>."
     },
     {
      "prompt": "What does <em lang=\"la\">aurifex</em> mean, from <em lang=\"la\">aurum</em> (“gold”) and <em lang=\"la\">faciō</em>?",
      "options": [
       "“golden”",
       "“gold-bearer”",
       "“goldsmith”",
       "“gold mine”"
      ],
      "answer": 2,
      "explain": "The second part, from <em lang=\"la\">faciō</em>, names the maker; the first names what he makes."
     }
    ]
   }
  },
  {
   "id": "verb-object",
   "title": "Verbs compounded with a noun",
   "body": "<p>A few Latin verbs are compounds of a noun and a verb, and they show the same order as the nouns: the object first, the action second. <em lang=\"la\">Aedificō</em> (“I build”) is <em lang=\"la\">aedēs</em> (“house”) and <em lang=\"la\">faciō</em>, “to make a house”; <em lang=\"la\">significō</em> (“I signify”) is <em lang=\"la\">signum</em> and <em lang=\"la\">faciō</em>, “to make a sign”; and <em lang=\"la\">animadvertō</em> (“I notice”) is <em lang=\"la\">animum advertō</em>, “I turn the mind toward,” written as one word. In such compounds the vowel of the verb is weakened by the rule we have seen: <em lang=\"la\">faciō</em> becomes <em lang=\"la\">-ficō</em>.</p>",
   "qp": {
    "id": "q-la-comp-verbs",
    "variants": [
     {
      "prompt": "What does <em lang=\"la\">aedificō</em> mean, read from its parts?",
      "options": [
       "“to burn a house”",
       "“to enter a house”",
       "“to leave a house”",
       "“to make a house”"
      ],
      "answer": 3,
      "explain": "<em lang=\"la\">Aedēs</em> and <em lang=\"la\">faciō</em>: “to make a house.”"
     },
     {
      "prompt": "Why is it <em lang=\"la\">significō</em> and not <em lang=\"la\">signifaciō</em>?",
      "options": [
       "The short <em lang=\"la\">a</em> of <em lang=\"la\">faciō</em> is weakened",
       "<em lang=\"la\">Signum</em> loses its ending by chance in the compound",
       "The compound is from <em lang=\"la\">fīō</em>",
       "The compound is Greek"
      ],
      "answer": 0,
      "explain": "A short <em lang=\"la\">a</em> before one consonant becomes <em lang=\"la\">i</em> in a compound."
     },
     {
      "prompt": "What two words make <em lang=\"la\">animadvertō</em>?",
      "options": [
       "<em lang=\"la\">animal</em> and <em lang=\"la\">vertō</em>",
       "<em lang=\"la\">animum</em> and <em lang=\"la\">advertō</em>",
       "<em lang=\"la\">animālis</em> and <em lang=\"la\">dēvertō</em>",
       "<em lang=\"la\">animus</em> and <em lang=\"la\">videō</em>"
      ],
      "answer": 1,
      "explain": "“I turn (my) mind toward,” written as one word."
     }
    ]
   }
  },
  {
   "id": "inseparable",
   "title": "The inseparable prefixes",
   "body": "<p>Besides the prepositions, Latin has a few prefixes that are never used as separate words, and so are called inseparable. <em lang=\"la\">Dis-</em> (<em lang=\"la\">dī-</em>, <em lang=\"la\">dif-</em>) means “apart” or “in different directions” (<em lang=\"la\">discēdō</em>, “I go away”; <em lang=\"la\">dīvidō</em>, “I divide”). <em lang=\"la\">Re-</em> (<em lang=\"la\">red-</em> before a vowel) means “back” or “again” (<em lang=\"la\">redeō</em>, “I go back”; <em lang=\"la\">reficiō</em>, “I make again”). <em lang=\"la\">Sē-</em> means “apart,” “aside” (<em lang=\"la\">sēparō</em>, “I set apart”; <em lang=\"la\">sēcēdō</em>, “I withdraw”). <em lang=\"la\">In-</em> joined to an adjective or a participle is a negative, “un-” (<em lang=\"la\">indignus</em>, “unworthy”; <em lang=\"la\">innocēns</em>, “harmless”), and it must not be confused with the preposition <em lang=\"la\">in</em>, “in, into,” which is joined to verbs (<em lang=\"la\">ineō</em>, “I go into”). The negative <em lang=\"la\">in-</em> also assimilates its consonant: <em lang=\"la\">impius</em>, <em lang=\"la\">illicitus</em>, <em lang=\"la\">irritus</em>.</p>",
   "qp": {
    "id": "q-la-comp-prefixes",
    "variants": [
     {
      "prompt": "What does <em lang=\"la\">in-</em> mean in <em lang=\"la\">īnfēlīx</em>?",
      "options": [
       "“in,” “into,” “upon”",
       "“again”",
       "“apart”",
       "“un-,” a negative"
      ],
      "answer": 3,
      "explain": "Joined to an adjective, <em lang=\"la\">in-</em> is the negative prefix: “unlucky.”"
     },
     {
      "prompt": "Why is it <em lang=\"la\">redeō</em> but <em lang=\"la\">repōnō</em>?",
      "options": [
       "<em lang=\"la\">Re-</em> becomes <em lang=\"la\">red-</em> before a vowel",
       "<em lang=\"la\">Red-</em> is a different prefix meaning “apart”",
       "<em lang=\"la\">Repōnō</em> has a different prefix",
       "<em lang=\"la\">Redeō</em> is from <em lang=\"la\">reddō</em>"
      ],
      "answer": 0,
      "explain": "<em lang=\"la\">Re-</em> takes the form <em lang=\"la\">red-</em> before a vowel."
     },
     {
      "prompt": "What does <em lang=\"la\">sē-</em> mean in <em lang=\"la\">sēdūcō</em>?",
      "options": [
       "“again”",
       "“aside”",
       "“not”",
       "“with”"
      ],
      "answer": 1,
      "explain": "<em lang=\"la\">Sēdūcō</em>, “I lead aside.”"
     }
    ]
   }
  }
 ]
};
