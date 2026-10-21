window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/plurals"] = {
 "id": "lang.iii-decl.de/plurals",
 "title": "The Plural of German Nouns",
 "sub": "The five ways of forming the plural, the umlaut, and the dative plural",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>",
 "panels": [
  {
   "id": "classes",
   "title": "Five ways of forming the plural",
   "body": "<p>English forms nearly every plural with “-s,” keeping only a few old forms such as “feet” and “children.” German keeps several old ways side by side, and each noun is learned with its plural, as the dictionary gives it: <i>der Tag, -e</i>. The grammars count five kinds of plural:</p>\n<p><strong>With -e</strong>, often with umlaut: <i>Tag, Tage</i> (“day”); <i>Hund, Hunde</i> (“dog”); <i>Stuhl, Stühle</i> (“chair”); <i>Hand, Hände</i> (“hand”)<br><strong>With -er</strong>, with umlaut wherever the vowel allows it: <i>Kind, Kinder</i> (“child”); <i>Bild, Bilder</i> (“picture”); <i>Wald, Wälder</i> (“forest”); <i>Dorf, Dörfer</i> (“village”)<br><strong>With -n or -en</strong>, never with umlaut: <i>Blume, Blumen</i> (“flower”); <i>Tür, Türen</i> (“door”); <i>Staat, Staaten</i> (“state”)<br><strong>With no ending</strong>, sometimes with umlaut: <i>Lehrer, Lehrer</i> (“teacher”); <i>Zimmer, Zimmer</i> (“room”); <i>Vogel, Vögel</i> (“bird”); <i>Mutter, Mütter</i> (“mother”)<br><strong>With -s</strong>, mostly in borrowed and shortened words: <i>Auto, Autos</i>; <i>Hotel, Hotels</i>; <i>Kino, Kinos</i> (“cinema”)</p>",
   "qp": {
    "id": "q-de-plural-classes",
    "variants": [
     {
      "prompt": "What is the plural of <i>Tisch</i> (“table”), which takes <i>-e</i>?",
      "options": [
       "<i>Tische</i>",
       "<i>Tischer</i>",
       "<i>Tischen</i>",
       "<i>Tischs</i>"
      ],
      "answer": 0,
      "explain": "<i>Tisch</i> belongs to the nouns with <i>-e</i>: <i>die Tische</i>."
     },
     {
      "prompt": "Which kind of plural never takes the umlaut?",
      "options": [
       "The plural in <i>-e</i>",
       "The plural in <i>-er</i>",
       "The plural with no ending",
       "The plural in <i>-n</i> or <i>-en</i>"
      ],
      "answer": 3,
      "explain": "<i>Blumen</i>, <i>Türen</i>: the plural in <i>-(e)n</i> keeps the vowel unchanged."
     },
     {
      "prompt": "What is the plural of <i>Land</i> (“country”), which takes <i>-er</i>?",
      "options": [
       "<i>Lande</i>",
       "<i>Landen</i>",
       "<i>Länder</i>",
       "<i>Lands</i>"
      ],
      "answer": 2,
      "explain": "The plural in <i>-er</i> takes the umlaut where the vowel allows it: <i>Land</i>, <i>Länder</i>."
     }
    ]
   }
  },
  {
   "id": "gender",
   "title": "Gender and the plural",
   "body": "<p>Although each noun must be learned with its plural, the gender gives a strong hint. Most feminine nouns take <i>-n</i> or <i>-en</i>: <i>die Straße, Straßen</i> (“street”); <i>die Zeitung, Zeitungen</i> (“newspaper”); and nouns in <i>-in</i> double the <i>n</i>: <i>die Lehrerin, Lehrerinnen</i>. Most masculine and neuter nouns in <i>-er</i>, <i>-el</i>, and <i>-en</i>, and all nouns in <i>-chen</i> and <i>-lein</i>, take no ending: <i>der Wagen, die Wagen</i>; <i>das Mädchen, die Mädchen</i>. Many masculine nouns of one syllable take <i>-e</i>, and many neuters of one syllable take <i>-er</i>. The weak masculine nouns, as we have seen, take <i>-en</i> throughout the plural, as <i>der Mensch, die Menschen</i>.</p>",
   "qp": {
    "id": "q-de-plural-gender",
    "variants": [
     {
      "prompt": "What is the plural of <i>die Freundin</i> (“friend,” feminine)?",
      "options": [
       "<i>Freundinen</i>",
       "<i>Freundinnen</i>",
       "<i>Freundine</i>",
       "<i>Freundins</i>"
      ],
      "answer": 1,
      "explain": "Nouns in <i>-in</i> take <i>-nen</i>: <i>Freundinnen</i>."
     },
     {
      "prompt": "What is the plural of <i>das Brötchen</i> (“roll”)?",
      "options": [
       "<i>Brötchens</i>",
       "<i>Brötchenen</i>",
       "<i>Brötchen</i>",
       "<i>Brötcher</i>"
      ],
      "answer": 2,
      "explain": "Nouns in <i>-chen</i> take no ending in the plural."
     },
     {
      "prompt": "Which plural do most feminine nouns take?",
      "options": [
       "<i>-er</i>",
       "<i>-e</i> with umlaut",
       "No ending",
       "<i>-n</i> or <i>-en</i>"
      ],
      "answer": 3,
      "explain": "<i>Die Straße, die Straßen</i>; <i>die Zeitung, die Zeitungen</i>."
     }
    ]
   }
  },
  {
   "id": "dative",
   "title": "The dative plural",
   "body": "<p>In every kind of plural, the dative adds <i>-n</i> unless the plural already ends in <i>-n</i> or <i>-s</i>: <i>die Tage</i>, <i>an den Tagen</i>; <i>die Kinder</i>, <i>mit den Kindern</i>; <i>die Vögel</i>, <i>von den Vögeln</i>; but <i>die Blumen</i>, <i>mit den Blumen</i>, and <i>die Autos</i>, <i>mit den Autos</i>. This <i>-n</i> is the last trace on the noun of the old dative plural, which Latin keeps in <i>-ibus</i> and <i>-īs</i>.</p>",
   "qp": {
    "id": "q-de-plural-dative",
    "variants": [
     {
      "prompt": "Choose the form: <i>mit den ___</i> (“with the children”).",
      "options": [
       "<i>Kinder</i>",
       "<i>Kindern</i>",
       "<i>Kinden</i>",
       "<i>Kinds</i>"
      ],
      "answer": 1,
      "explain": "The dative plural adds <i>-n</i> to <i>Kinder</i>."
     },
     {
      "prompt": "Choose the form: <i>in den ___</i> (“in the hotels”).",
      "options": [
       "<i>Hotelsn</i>",
       "<i>Hotelen</i>",
       "<i>Hotels</i>",
       "<i>Hoteln</i>"
      ],
      "answer": 2,
      "explain": "A plural in <i>-s</i> takes no <i>-n</i> in the dative."
     },
     {
      "prompt": "Choose the form: <i>auf den ___</i> (“on the chairs”).",
      "options": [
       "<i>Stühle</i>",
       "<i>Stuhlen</i>",
       "<i>Stühler</i>",
       "<i>Stühlen</i>"
      ],
      "answer": 3,
      "explain": "<i>Stühle</i> takes <i>-n</i> in the dative: <i>Stühlen</i>."
     }
    ]
   }
  }
 ]
};
