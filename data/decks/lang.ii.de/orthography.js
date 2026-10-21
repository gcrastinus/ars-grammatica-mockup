window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.de/orthography"] = {
 "id": "lang.ii.de/orthography",
 "title": "German Spelling and Punctuation",
 "sub": "Capital letters, ß and ss, the umlauts, and the comma and quotation marks",
 "sources": "Duden, <i>Die deutsche Rechtschreibung</i>",
 "panels": [
  {
   "id": "capitals",
   "title": "Capital letters",
   "body": "<p>German writes every noun with a capital letter, wherever it stands in the sentence: <i>der Tisch</i>, <i>die Freiheit</i>, <i>im Sommer</i>. A word of another part of speech used as a noun is capitalized as well: <i>das Schwimmen</i> (“swimming”), <i>das Neue</i> (“the new”), <i>beim Essen</i> (“while eating”). The polite pronoun <i>Sie</i> and its forms <i>Ihnen</i> and <i>Ihr</i> take a capital, which distinguishes them from <i>sie</i> (“she,” “they”).</p>\n<p>Adjectives, verbs, and other words keep the small letter, including adjectives of nationality: <i>die deutsche Sprache</i>. The familiar <i>du</i> is written small, though in letters it may be capitalized.</p>",
   "qp": {
    "id": "q-de-orth-cap",
    "variants": [
     {
      "prompt": "Which is correct for “I like reading”?",
      "options": [
       "<i>Ich mag das lesen.</i>",
       "<i>ich mag das Lesen.</i>",
       "<i>Ich Mag das Lesen.</i>",
       "<i>Ich mag das Lesen.</i>"
      ],
      "answer": 3,
      "explain": "A verb used as a noun is capitalized."
     },
     {
      "prompt": "Which is correct for “Can you help me?” (polite)?",
      "options": [
       "<i>Können Sie mir helfen?</i>",
       "<i>Können sie mir helfen?</i>",
       "<i>können Sie mir Helfen?</i>",
       "<i>Können Sie Mir helfen?</i>"
      ],
      "answer": 0,
      "explain": "The polite <i>Sie</i> is capitalized."
     },
     {
      "prompt": "Which is correct for “the French language”?",
      "options": [
       "<i>die Französische Sprache</i>",
       "<i>die französische Sprache</i>",
       "<i>die französische sprache</i>",
       "<i>Die französische sprache</i>"
      ],
      "answer": 1,
      "explain": "The adjective of nationality is small; the noun is capitalized."
     }
    ]
   }
  },
  {
   "id": "sz",
   "title": "ß and ss",
   "body": "<p>German writes the sound <i>s</i> as <i>ß</i> after a long vowel or a diphthong, and as <i>ss</i> after a short vowel: <i>Fuß</i> (“foot”) and <i>heißen</i> (“to be called”), but <i>Fluss</i> (“river”) and <i>müssen</i> (“must”). The same word may change between the two when its vowel changes: <i>fließen</i> (“to flow”), <i>floss</i> (“flowed”). The conjunction <i>dass</i> (“that”) is written with <i>ss</i>, and the article and pronoun <i>das</i> with one <i>s</i>: <i>Ich weiß, dass das Buch gut ist</i>.</p>\n<p>In capital letters <i>ß</i> is written <i>SS</i>, or, since 2017, as the capital <i>ẞ</i>; and in Switzerland <i>ss</i> is written in every case.</p>",
   "qp": {
    "id": "q-de-orth-sz",
    "variants": [
     {
      "prompt": "Which is correct for “street,” whose vowel is long?",
      "options": [
       "<i>Straße</i>",
       "<i>Strasse</i>, as everywhere in Germany",
       "<i>Strase</i>",
       "<i>Straßße</i>"
      ],
      "answer": 0,
      "explain": "After a long vowel, <i>ß</i>."
     },
     {
      "prompt": "Which is correct for “kiss,” whose vowel is short?",
      "options": [
       "<i>Kuß</i>",
       "<i>Kus</i>",
       "<i>Kusß</i>",
       "<i>Kuss</i>"
      ],
      "answer": 3,
      "explain": "After a short vowel, <i>ss</i>."
     },
     {
      "prompt": "Which completes <i>Er sagt, ______ er kommt</i>?",
      "options": [
       "<i>das</i>",
       "<i>daß</i>, in the current spelling",
       "<i>dass</i>",
       "<i>dás</i>"
      ],
      "answer": 2,
      "explain": "The conjunction is <i>dass</i>."
     }
    ]
   }
  },
  {
   "id": "comma",
   "title": "Umlauts, the comma, and quotation marks",
   "body": "<p>The umlauts <i>ä</i>, <i>ö</i>, and <i>ü</i> are separate vowels, and they belong to the spelling: <i>schon</i> (“already”) and <i>schön</i> (“beautiful”) are different words. Where the marks cannot be written, German writes <i>ae</i>, <i>oe</i>, and <i>ue</i>: <i>Mueller</i> for <i>Müller</i>.</p>\n<p>German sets a comma before every subordinate clause and around a relative clause, as English often does not: <i>Ich glaube, dass er recht hat</i>; <i>Das Haus, das wir kauften, ist alt</i>. An infinitive group with <i>um</i>, <i>ohne</i>, or <i>statt</i> is also set off: <i>Er kam, um zu helfen</i>. Quotation marks are written low at the start and high at the end: <i>„Komm her!“</i></p>",
   "qp": {
    "id": "q-de-orth-com",
    "variants": [
     {
      "prompt": "Which is correct?",
      "options": [
       "<i>Ich hoffe dass du kommst.</i>",
       "<i>Ich hoffe, dass, du kommst.</i>",
       "<i>Ich hoffe, dass du kommst.</i>",
       "<i>Ich, hoffe dass du kommst.</i>"
      ],
      "answer": 2,
      "explain": "A comma stands before the subordinate clause."
     },
     {
      "prompt": "How may <i>Tür</i> be written where the umlaut cannot be printed?",
      "options": [
       "<i>Tur</i>",
       "<i>Tuer</i>",
       "<i>Tür’</i>",
       "<i>Tüür</i>"
      ],
      "answer": 1,
      "explain": "<i>Ü</i> may be written <i>ue</i>."
     },
     {
      "prompt": "How are German quotation marks usually written?",
      "options": [
       "Low at the start, high at the end",
       "High at both ends, as in English",
       "As guillemets pointing outward",
       "With dashes"
      ],
      "answer": 0,
      "explain": "„So.“"
     }
    ]
   }
  }
 ]
};
