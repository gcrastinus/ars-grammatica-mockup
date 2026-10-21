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
   "body": "<p>French drops the final vowel of a few short words before a word that begins with a vowel or a mute <i>h</i>, and the spelling shows the loss with an apostrophe. The words that are elided are <i>le</i> and <i>la</i> (<i>l’arbre</i>, <i>l’herbe</i>), <i>je</i>, <i>me</i>, <i>te</i>, <i>se</i>, <i>de</i>, <i>ne</i>, and <i>que</i> (<i>j’écoute</i>, <i>il m’attend</i>, <i>d’abord</i>, <i>qu’elle</i>), and <i>jusque</i> (<i>jusqu’à</i>). <i>Si</i> is elided only before <i>il</i> and <i>ils</i> (<i>s’ils</i>), and <i>lorsque</i>, <i>puisque</i>, and <i>quoique</i> chiefly before <i>il</i>, <i>elle</i>, <i>on</i>, <i>un</i>, and <i>une</i> (<i>puisqu’on</i>).</p>\n<p>Other words are not elided even before a vowel: <i>presque entier</i>, <i>une entrée</i>, <i>tu as</i> in careful writing. Before an aspirated <i>h</i>, as in <i>la hache</i> (“the axe”), there is no elision at all.</p>",
   "qp": {
    "id": "q-fr-orth-el",
    "variants": [
     {
      "prompt": "Which is correct for “until the evening”?",
      "options": [
       "<i>jusque au soir</i>",
       "<i>jusqu au soir</i>",
       "<i>jusqu’ à le soir</i>",
       "<i>jusqu’au soir</i>"
      ],
      "answer": 3,
      "explain": "<i>Jusque</i> is elided before a vowel, and <i>à le</i> contracts to <i>au</i>."
     },
     {
      "prompt": "Which is correct for “since one says”?",
      "options": [
       "<i>puisqu’on dit</i>",
       "<i>puisque on dit</i>",
       "<i>puisqu’ on dit</i>",
       "<i>puis qu’on dit</i>"
      ],
      "answer": 0,
      "explain": "<i>Puisque</i> is elided before <i>on</i>."
     },
     {
      "prompt": "Which is correct for “the axe,” whose <i>h</i> is aspirated?",
      "options": [
       "<i>l’hache</i>",
       "<i>la hache</i>",
       "<i>le hache</i>",
       "<i>l’ache</i>"
      ],
      "answer": 1,
      "explain": "Before an aspirated <i>h</i> there is no elision."
     }
    ]
   }
  },
  {
   "id": "liaison",
   "title": "Liaison",
   "body": "<p>A final consonant that is silent before a pause is often sounded before a word that begins with a vowel, and joined to it; this is liaison. It is made regularly after a determiner (<i>des enfants</i>, <i>mon ami</i>), between a pronoun and its verb (<i>ils ont</i>, <i>vous êtes</i>), after an adjective that stands before its noun (<i>un petit arbre</i>), and after many short adverbs and prepositions (<i>très utile</i>, <i>chez eux</i>). The consonant may change its sound: <i>s</i> and <i>x</i> are sounded <i>z</i> (<i>deux ans</i>), <i>d</i> is sounded <i>t</i> (<i>quand il</i>), and <i>f</i> is sounded <i>v</i> in <i>neuf heures</i>.</p>\n<p>Liaison is never made after <i>et</i>, nor before an aspirated <i>h</i> (<i>les haricots</i>), nor, in ordinary speech, after a singular noun: <i>un enfant | heureux</i>.</p>",
   "qp": {
    "id": "q-fr-orth-li",
    "variants": [
     {
      "prompt": "How is the <i>x</i> of <i>deux</i> sounded in <i>deux amis</i>?",
      "options": [
       "As <i>ks</i>, as in the letter’s name",
       "As <i>z</i>",
       "As <i>s</i>",
       "It is silent"
      ],
      "answer": 1,
      "explain": "In liaison <i>s</i> and <i>x</i> are sounded <i>z</i>."
     },
     {
      "prompt": "Is liaison made in <i>les héros</i>?",
      "options": [
       "Yes, as <i>z</i>, since <i>les</i> is a determiner",
       "Yes, as <i>s</i>",
       "No; the <i>h</i> is aspirated",
       "Only in verse"
      ],
      "answer": 2,
      "explain": "There is no liaison before an aspirated <i>h</i>."
     },
     {
      "prompt": "How is the <i>d</i> of <i>quand</i> sounded in <i>quand il vient</i>?",
      "options": [
       "As <i>d</i>",
       "It is silent",
       "As <i>z</i>",
       "As <i>t</i>"
      ],
      "answer": 3,
      "explain": "In liaison <i>d</i> is sounded <i>t</i>."
     }
    ]
   }
  },
  {
   "id": "punctuation",
   "title": "Punctuation and capitals",
   "body": "<p>French uses the same marks as English, with some differences of practice. Quotations are set in guillemets, « … », with a space inside each mark. In French printing a space also stands before the semicolon, the colon, the question mark, and the exclamation point: <i>Qui est là ?</i> In a novel, a change of speaker in dialogue is often marked by a dash at the start of the line instead of by quotation marks.</p>\n<p>French writes with a small letter the names of the days and months (<i>lundi</i>, <i>janvier</i>), the names of languages (<i>le français</i>), and adjectives of nationality (<i>un livre anglais</i>); but a noun that names a people takes a capital: <i>les Français</i>, <i>un Anglais</i>.</p>",
   "qp": {
    "id": "q-fr-orth-pu",
    "variants": [
     {
      "prompt": "Which is correct for “on Monday, in March”?",
      "options": [
       "<i>Lundi, en Mars</i>, with capitals as in English",
       "<i>lundi, en mars</i>",
       "<i>lundi, en Mars</i>",
       "<i>Lundi, en mars</i>, in the middle of a sentence"
      ],
      "answer": 1,
      "explain": "Days and months take a small letter."
     },
     {
      "prompt": "Which is correct for “the Italians speak Italian”?",
      "options": [
       "<i>les italiens parlent italien</i>",
       "<i>les Italiens parlent Italien</i>",
       "<i>les Italiens parlent italien</i>",
       "<i>les italiens parlent Italien</i>"
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
