window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.fr/orthography"] = {
 "id": "lang.ii.fr/orthography",
 "title": "French Spelling: Elision, Liaison, and Punctuation",
 "sub": "Which words are elided, when liaison is made, and the French marks of punctuation and capitals",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse",
 "panels": [
  {
   "id": "elision",
   "title": "Elision",
   "body": "<p>French drops the final vowel of a few short words before a word that begins with a vowel or a mute <i lang=\"fr\">h</i>, and the spelling shows the loss with an apostrophe. The words that are elided are <i lang=\"fr\">le</i> and <i lang=\"fr\">la</i> (<i lang=\"fr\">l’arbre</i>, <i lang=\"fr\">l’herbe</i>), <i lang=\"fr\">je</i>, <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">se</i>, <i lang=\"fr\">de</i>, <i lang=\"fr\">ne</i>, and <i lang=\"fr\">que</i> (<i lang=\"fr\">j’écoute</i>, <i lang=\"fr\">il m’attend</i>, <i lang=\"fr\">d’abord</i>, <i lang=\"fr\">qu’elle</i>), and <i lang=\"fr\">jusque</i> (<i lang=\"fr\">jusqu’à</i>). <i lang=\"fr\">Si</i> is elided only before <i lang=\"fr\">il</i> and <i lang=\"fr\">ils</i> (<i lang=\"fr\">s’ils</i>), and <i lang=\"fr\">lorsque</i>, <i lang=\"fr\">puisque</i>, and <i lang=\"fr\">quoique</i> chiefly before <i lang=\"fr\">il</i>, <i lang=\"fr\">elle</i>, <i lang=\"fr\">on</i>, <i lang=\"fr\">un</i>, and <i lang=\"fr\">une</i> (<i lang=\"fr\">puisqu’on</i>).</p>\n<p>Other words are not elided even before a vowel: <i lang=\"fr\">presque entier</i>, <i lang=\"fr\">une entrée</i>, <i lang=\"fr\">tu as</i> in careful writing. Before an aspirated <i lang=\"fr\">h</i>, as in <i lang=\"fr\">la hache</i> (“the axe”), there is no elision at all.</p>",
   "qp": {
    "id": "q-fr-orth-el",
    "variants": [
     {
      "prompt": "Which is correct for “until the evening”?",
      "options": [
       "<i lang=\"fr\">jusque au soir</i>",
       "<i lang=\"fr\">jusqu au soir</i>",
       "<i lang=\"fr\">jusqu’ à le soir</i>",
       "<i lang=\"fr\">jusqu’au soir</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Jusque</i> is elided before a vowel, and <i lang=\"fr\">à le</i> contracts to <i lang=\"fr\">au</i>."
     },
     {
      "prompt": "Which is correct for “since one says”?",
      "options": [
       "<i lang=\"fr\">puisqu’on dit</i>",
       "<i lang=\"fr\">puisque on dit</i>",
       "<i lang=\"fr\">puisqu’ on dit</i>",
       "<i lang=\"fr\">puis qu’on dit</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Puisque</i> is elided before <i lang=\"fr\">on</i>."
     },
     {
      "prompt": "Which is correct for “the axe,” whose <i lang=\"fr\">h</i> is aspirated?",
      "options": [
       "<i lang=\"fr\">l’hache</i>",
       "<i lang=\"fr\">la hache</i>",
       "<i lang=\"fr\">le hache</i>",
       "<i lang=\"fr\">l’ache</i>"
      ],
      "answer": 1,
      "explain": "Before an aspirated <i lang=\"fr\">h</i> there is no elision."
     }
    ]
   }
  },
  {
   "id": "liaison",
   "title": "Liaison",
   "body": "<p>A final consonant that is silent before a pause is often sounded before a word that begins with a vowel, and joined to it; this is liaison. It is made regularly after a determiner (<i lang=\"fr\">des enfants</i>, <i lang=\"fr\">mon ami</i>), between a pronoun and its verb (<i lang=\"fr\">ils ont</i>, <i lang=\"fr\">vous êtes</i>), after an adjective that stands before its noun (<i lang=\"fr\">un petit arbre</i>), and after many short adverbs and prepositions (<i lang=\"fr\">très utile</i>, <i lang=\"fr\">chez eux</i>). The consonant may change its sound: <i lang=\"fr\">s</i> and <i lang=\"fr\">x</i> are sounded <i lang=\"fr\">z</i> (<i lang=\"fr\">deux ans</i>), <i lang=\"fr\">d</i> is sounded <i lang=\"fr\">t</i> (<i lang=\"fr\">quand il</i>), and <i lang=\"fr\">f</i> is sounded <i lang=\"fr\">v</i> in <i lang=\"fr\">neuf heures</i>.</p>\n<p>Liaison is never made after <i lang=\"fr\">et</i>, nor before an aspirated <i lang=\"fr\">h</i> (<i lang=\"fr\">les haricots</i>), nor, in ordinary speech, after a singular noun: <i lang=\"fr\">un enfant | heureux</i>.</p>",
   "qp": {
    "id": "q-fr-orth-li",
    "variants": [
     {
      "prompt": "How is the <i lang=\"fr\">x</i> of <i lang=\"fr\">deux</i> sounded in <i lang=\"fr\">deux amis</i>?",
      "options": [
       "As <i lang=\"fr\">ks</i>, as in the letter’s name",
       "As <i lang=\"fr\">z</i>",
       "As <i lang=\"fr\">s</i>",
       "It is silent"
      ],
      "answer": 1,
      "explain": "In liaison <i lang=\"fr\">s</i> and <i lang=\"fr\">x</i> are sounded <i lang=\"fr\">z</i>."
     },
     {
      "prompt": "Is liaison made in <i lang=\"fr\">les héros</i>?",
      "options": [
       "Yes, as <i lang=\"fr\">z</i>, since <i lang=\"fr\">les</i> is a determiner",
       "Yes, as <i lang=\"fr\">s</i>",
       "No; the <i lang=\"fr\">h</i> is aspirated",
       "Only in verse"
      ],
      "answer": 2,
      "explain": "There is no liaison before an aspirated <i lang=\"fr\">h</i>."
     },
     {
      "prompt": "How is the <i lang=\"fr\">d</i> of <i lang=\"fr\">quand</i> sounded in <i lang=\"fr\">quand il vient</i>?",
      "options": [
       "As <i lang=\"fr\">d</i>",
       "It is silent",
       "As <i lang=\"fr\">z</i>",
       "As <i lang=\"fr\">t</i>"
      ],
      "answer": 3,
      "explain": "In liaison <i lang=\"fr\">d</i> is sounded <i lang=\"fr\">t</i>."
     }
    ]
   }
  },
  {
   "id": "punctuation",
   "title": "Punctuation and capitals",
   "body": "<p>French uses the same marks as English, with some differences of practice. Quotations are set in guillemets, « … », with a space inside each mark. In French printing a space also stands before the semicolon, the colon, the question mark, and the exclamation point: <i lang=\"fr\">Qui est là ?</i> In a novel, a change of speaker in dialogue is often marked by a dash at the start of the line instead of by quotation marks.</p>\n<p>French writes with a small letter the names of the days and months (<i lang=\"fr\">lundi</i>, <i lang=\"fr\">janvier</i>), the names of languages (<i lang=\"fr\">le français</i>), and adjectives of nationality (<i lang=\"fr\">un livre anglais</i>); but a noun that names a people takes a capital: <i lang=\"fr\">les Français</i>, <i lang=\"fr\">un Anglais</i>.</p>",
   "qp": {
    "id": "q-fr-orth-pu",
    "variants": [
     {
      "prompt": "Which is correct for “on Monday, in March”?",
      "options": [
       "<i lang=\"fr\">Lundi, en Mars</i>, with capitals as in English",
       "<i lang=\"fr\">lundi, en mars</i>",
       "<i lang=\"fr\">lundi, en Mars</i>",
       "<i lang=\"fr\">Lundi, en mars</i>, in the middle of a sentence"
      ],
      "answer": 1,
      "explain": "Days and months take a small letter."
     },
     {
      "prompt": "Which is correct for “the Italians speak Italian”?",
      "options": [
       "<i lang=\"fr\">les italiens parlent italien</i>",
       "<i lang=\"fr\">les Italiens parlent Italien</i>",
       "<i lang=\"fr\">les Italiens parlent italien</i>",
       "<i lang=\"fr\">les italiens parlent Italien</i>"
      ],
      "answer": 2,
      "explain": "The people take a capital; the language does not."
     },
     {
      "prompt": "What marks does French use for quotations?",
      "options": [
       "Single quotation marks only",
       "Parentheses",
       "Square brackets",
       "Guillemets, « … »"
      ],
      "answer": 3,
      "explain": "Guillemets, with a space inside each mark."
     }
    ]
   }
  }
 ]
};
