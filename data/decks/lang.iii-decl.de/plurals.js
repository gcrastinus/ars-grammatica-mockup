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
   "body": "<p>English forms nearly every plural with “-s,” keeping only a few old forms such as “feet” and “children.” German keeps several old ways side by side, and each noun is learned with its plural, as the dictionary gives it: <i lang=\"de\">der Tag, -e</i>. The grammars count five kinds of plural:</p>\n<p><strong>With -e</strong>, often with umlaut: <i lang=\"de\">Tag, Tage</i> (“day”); <i lang=\"de\">Hund, Hunde</i> (“dog”); <i lang=\"de\">Stuhl, Stühle</i> (“chair”); <i lang=\"de\">Hand, Hände</i> (“hand”)<br><strong>With -er</strong>, with umlaut wherever the vowel allows it: <i lang=\"de\">Kind, Kinder</i> (“child”); <i lang=\"de\">Bild, Bilder</i> (“picture”); <i lang=\"de\">Wald, Wälder</i> (“forest”); <i lang=\"de\">Dorf, Dörfer</i> (“village”)<br><strong>With -n or -en</strong>, never with umlaut: <i lang=\"de\">Blume, Blumen</i> (“flower”); <i lang=\"de\">Tür, Türen</i> (“door”); <i lang=\"de\">Staat, Staaten</i> (“state”)<br><strong>With no ending</strong>, sometimes with umlaut: <i lang=\"de\">Lehrer, Lehrer</i> (“teacher”); <i lang=\"de\">Zimmer, Zimmer</i> (“room”); <i lang=\"de\">Vogel, Vögel</i> (“bird”); <i lang=\"de\">Mutter, Mütter</i> (“mother”)<br><strong>With -s</strong>, mostly in borrowed and shortened words: <i lang=\"de\">Auto, Autos</i>; <i lang=\"de\">Hotel, Hotels</i>; <i lang=\"de\">Kino, Kinos</i> (“cinema”)</p>",
   "qp": {
    "id": "q-de-plural-classes",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"de\">Tisch</i> (“table”), which takes <i lang=\"de\">-e</i>?",
      "options": [
       "<i lang=\"de\">Tische</i>",
       "<i lang=\"de\">Tischer</i>",
       "<i lang=\"de\">Tischen</i>",
       "<i lang=\"de\">Tischs</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Tisch</i> belongs to the nouns with <i lang=\"de\">-e</i>: <i lang=\"de\">die Tische</i>."
     },
     {
      "prompt": "Which kind of plural never takes the umlaut?",
      "options": [
       "The plural in <i lang=\"de\">-e</i>",
       "The plural in <i lang=\"de\">-er</i>",
       "The plural with no ending",
       "The plural in <i lang=\"de\">-n</i> or <i lang=\"de\">-en</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Blumen</i>, <i lang=\"de\">Türen</i>: the plural in <i lang=\"de\">-(e)n</i> keeps the vowel unchanged."
     },
     {
      "prompt": "What is the plural of <i lang=\"de\">Land</i> (“country”), which takes <i lang=\"de\">-er</i>?",
      "options": [
       "<i lang=\"de\">Lande</i>",
       "<i lang=\"de\">Landen</i>",
       "<i lang=\"de\">Länder</i>",
       "<i lang=\"de\">Lands</i>"
      ],
      "answer": 2,
      "explain": "The plural in <i lang=\"de\">-er</i> takes the umlaut where the vowel allows it: <i lang=\"de\">Land</i>, <i lang=\"de\">Länder</i>."
     }
    ]
   }
  },
  {
   "id": "gender",
   "title": "Gender and the plural",
   "body": "<p>Although each noun must be learned with its plural, the gender gives a strong hint. Most feminine nouns take <i lang=\"de\">-n</i> or <i lang=\"de\">-en</i>: <i lang=\"de\">die Straße, Straßen</i> (“street”); <i lang=\"de\">die Zeitung, Zeitungen</i> (“newspaper”); and nouns in <i lang=\"de\">-in</i> double the <i lang=\"de\">n</i>: <i lang=\"de\">die Lehrerin, Lehrerinnen</i>. Most masculine and neuter nouns in <i lang=\"de\">-er</i>, <i lang=\"de\">-el</i>, and <i lang=\"de\">-en</i>, and all nouns in <i lang=\"de\">-chen</i> and <i lang=\"de\">-lein</i>, take no ending: <i lang=\"de\">der Wagen, die Wagen</i>; <i lang=\"de\">das Mädchen, die Mädchen</i>. Many masculine nouns of one syllable take <i lang=\"de\">-e</i>, and many neuters of one syllable take <i lang=\"de\">-er</i>. The weak masculine nouns, as we have seen, take <i lang=\"de\">-en</i> throughout the plural, as <i lang=\"de\">der Mensch, die Menschen</i>.</p>",
   "qp": {
    "id": "q-de-plural-gender",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"de\">die Freundin</i> (“friend,” feminine)?",
      "options": [
       "<i lang=\"de\">Freundinen</i>",
       "<i lang=\"de\">Freundinnen</i>",
       "<i lang=\"de\">Freundine</i>",
       "<i lang=\"de\">Freundins</i>"
      ],
      "answer": 1,
      "explain": "Nouns in <i lang=\"de\">-in</i> take <i lang=\"de\">-nen</i>: <i lang=\"de\">Freundinnen</i>."
     },
     {
      "prompt": "What is the plural of <i lang=\"de\">das Brötchen</i> (“roll”)?",
      "options": [
       "<i lang=\"de\">Brötchens</i>",
       "<i lang=\"de\">Brötchenen</i>",
       "<i lang=\"de\">Brötchen</i>",
       "<i lang=\"de\">Brötcher</i>"
      ],
      "answer": 2,
      "explain": "Nouns in <i lang=\"de\">-chen</i> take no ending in the plural."
     },
     {
      "prompt": "Which plural do most feminine nouns take?",
      "options": [
       "<i lang=\"de\">-er</i>",
       "<i lang=\"de\">-e</i> with umlaut",
       "No ending",
       "<i lang=\"de\">-n</i> or <i lang=\"de\">-en</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Die Straße, die Straßen</i>; <i lang=\"de\">die Zeitung, die Zeitungen</i>."
     }
    ]
   }
  },
  {
   "id": "dative",
   "title": "The dative plural",
   "body": "<p>In every kind of plural, the dative adds <i lang=\"de\">-n</i> unless the plural already ends in <i lang=\"de\">-n</i> or <i lang=\"de\">-s</i>: <i lang=\"de\">die Tage</i>, <i lang=\"de\">an den Tagen</i>; <i lang=\"de\">die Kinder</i>, <i lang=\"de\">mit den Kindern</i>; <i lang=\"de\">die Vögel</i>, <i lang=\"de\">von den Vögeln</i>; but <i lang=\"de\">die Blumen</i>, <i lang=\"de\">mit den Blumen</i>, and <i lang=\"de\">die Autos</i>, <i lang=\"de\">mit den Autos</i>. This <i lang=\"de\">-n</i> is the last trace on the noun of the old dative plural, which Latin keeps in <i lang=\"de\">-ibus</i> and <i lang=\"de\">-īs</i>.</p>",
   "qp": {
    "id": "q-de-plural-dative",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"de\">mit den ___</i> (“with the children”).",
      "options": [
       "<i lang=\"de\">Kinder</i>",
       "<i lang=\"de\">Kindern</i>",
       "<i lang=\"de\">Kinden</i>",
       "<i lang=\"de\">Kinds</i>"
      ],
      "answer": 1,
      "explain": "The dative plural adds <i lang=\"de\">-n</i> to <i lang=\"de\">Kinder</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">in den ___</i> (“in the hotels”).",
      "options": [
       "<i lang=\"de\">Hotelsn</i>",
       "<i lang=\"de\">Hotelen</i>",
       "<i lang=\"de\">Hotels</i>",
       "<i lang=\"de\">Hoteln</i>"
      ],
      "answer": 2,
      "explain": "A plural in <i lang=\"de\">-s</i> takes no <i lang=\"de\">-n</i> in the dative."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">auf den ___</i> (“on the chairs”).",
      "options": [
       "<i lang=\"de\">Stühle</i>",
       "<i lang=\"de\">Stuhlen</i>",
       "<i lang=\"de\">Stühler</i>",
       "<i lang=\"de\">Stühlen</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Stühle</i> takes <i lang=\"de\">-n</i> in the dative: <i lang=\"de\">Stühlen</i>."
     }
    ]
   }
  }
 ]
};
