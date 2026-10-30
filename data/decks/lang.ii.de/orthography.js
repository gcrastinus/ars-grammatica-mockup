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
   "body": "<p>German writes every noun with a capital letter, wherever it stands in the sentence: <i lang=\"de\">der Tisch</i>, <i lang=\"de\">die Freiheit</i>, <i lang=\"de\">im Sommer</i>. A word of another part of speech used as a noun is capitalized as well: <i lang=\"de\">das Schwimmen</i> (“swimming”), <i lang=\"de\">das Neue</i> (“the new”), <i lang=\"de\">beim Essen</i> (“while eating”). The polite pronoun <i lang=\"de\">Sie</i> and its forms <i lang=\"de\">Ihnen</i> and <i lang=\"de\">Ihr</i> take a capital, which distinguishes them from <i lang=\"de\">sie</i> (“she,” “they”).</p>\n<p>Adjectives, verbs, and other words keep the small letter, including adjectives of nationality: <i lang=\"de\">die deutsche Sprache</i>. The familiar <i lang=\"de\">du</i> is written small, though in letters it may be capitalized.</p>",
   "qp": {
    "id": "q-de-orth-cap",
    "variants": [
     {
      "prompt": "Which is correct for “I like reading”?",
      "options": [
       "<i lang=\"de\">Ich mag das lesen.</i>",
       "<i lang=\"de\">ich mag das Lesen.</i>",
       "<i lang=\"de\">Ich Mag das Lesen.</i>",
       "<i lang=\"de\">Ich mag das Lesen.</i>"
      ],
      "answer": 3,
      "explain": "A verb used as a noun is capitalized."
     },
     {
      "prompt": "Which is correct for “Can you help me?” (polite)?",
      "options": [
       "<i lang=\"de\">Können Sie mir helfen?</i>",
       "<i lang=\"de\">Können sie mir helfen?</i>",
       "<i lang=\"de\">können Sie mir Helfen?</i>",
       "<i lang=\"de\">Können Sie Mir helfen?</i>"
      ],
      "answer": 0,
      "explain": "The polite <i lang=\"de\">Sie</i> is capitalized."
     },
     {
      "prompt": "Which is correct for “the French language”?",
      "options": [
       "<i lang=\"de\">die Französische Sprache</i>",
       "<i lang=\"de\">die französische Sprache</i>",
       "<i lang=\"de\">die französische sprache</i>",
       "<i lang=\"de\">Die französische sprache</i>"
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
   "body": "<p>German writes the sound <i lang=\"de\">s</i> as <i lang=\"de\">ß</i> after a long vowel or a diphthong, and as <i lang=\"de\">ss</i> after a short vowel: <i lang=\"de\">Fuß</i> (“foot”) and <i lang=\"de\">heißen</i> (“to be called”), but <i lang=\"de\">Fluss</i> (“river”) and <i lang=\"de\">müssen</i> (“must”). The same word may change between the two when its vowel changes: <i lang=\"de\">fließen</i> (“to flow”), <i lang=\"de\">floss</i> (“flowed”). The conjunction <i lang=\"de\">dass</i> (“that”) is written with <i lang=\"de\">ss</i>, and the article and pronoun <i lang=\"de\">das</i> with one <i lang=\"de\">s</i>: <i lang=\"de\">Ich weiß, dass das Buch gut ist</i>.</p>\n<p>In capital letters <i lang=\"de\">ß</i> is written <i lang=\"de\">SS</i>, or, since 2017, as the capital <i lang=\"de\">ẞ</i>; and in Switzerland <i lang=\"de\">ss</i> is written in every case.</p>",
   "qp": {
    "id": "q-de-orth-sz",
    "variants": [
     {
      "prompt": "Which is correct for “street,” whose vowel is long?",
      "options": [
       "<i lang=\"de\">Straße</i>",
       "<i lang=\"de\">Strasse</i>, as everywhere in Germany",
       "<i lang=\"de\">Strase</i>",
       "<i lang=\"de\">Straßße</i>"
      ],
      "answer": 0,
      "explain": "After a long vowel German writes <i lang=\"de\">ß</i>."
     },
     {
      "prompt": "Which is correct for “kiss,” whose vowel is short?",
      "options": [
       "<i lang=\"de\">Kuß</i>",
       "<i lang=\"de\">Kus</i>",
       "<i lang=\"de\">Kusß</i>",
       "<i lang=\"de\">Kuss</i>"
      ],
      "answer": 3,
      "explain": "After a short vowel German writes <i lang=\"de\">ss</i>."
     },
     {
      "prompt": "Which completes <i lang=\"de\">Er sagt, ______ er kommt</i>?",
      "options": [
       "<i lang=\"de\">das</i>",
       "<i lang=\"de\">daß</i>, in the current spelling",
       "<i lang=\"de\">dass</i>",
       "<i lang=\"de\">dás</i>"
      ],
      "answer": 2,
      "explain": "The conjunction is <i lang=\"de\">dass</i>."
     }
    ]
   }
  },
  {
   "id": "comma",
   "title": "Umlauts, the comma, and quotation marks",
   "body": "<p>The umlauts <i lang=\"de\">ä</i>, <i lang=\"de\">ö</i>, and <i lang=\"de\">ü</i> are separate vowels, and they belong to the spelling: <i lang=\"de\">schon</i> (“already”) and <i lang=\"de\">schön</i> (“beautiful”) are different words. Where the marks cannot be written, German writes <i lang=\"de\">ae</i>, <i lang=\"de\">oe</i>, and <i lang=\"de\">ue</i>: <i lang=\"de\">Mueller</i> for <i lang=\"de\">Müller</i>.</p>\n<p>German sets a comma before every subordinate clause and around a relative clause, as English often does not: <i lang=\"de\">Ich glaube, dass er recht hat</i>; <i lang=\"de\">Das Haus, das wir kauften, ist alt</i>. An infinitive group with <i lang=\"de\">um</i>, <i lang=\"de\">ohne</i>, or <i lang=\"de\">statt</i> is also set off: <i lang=\"de\">Er kam, um zu helfen</i>. Quotation marks are written low at the start and high at the end: <i lang=\"de\">„Komm her!“</i></p>",
   "qp": {
    "id": "q-de-orth-com",
    "variants": [
     {
      "prompt": "Which is correct?",
      "options": [
       "<i lang=\"de\">Ich hoffe dass du kommst.</i>",
       "<i lang=\"de\">Ich hoffe, dass, du kommst.</i>",
       "<i lang=\"de\">Ich hoffe, dass du kommst.</i>",
       "<i lang=\"de\">Ich, hoffe dass du kommst.</i>"
      ],
      "answer": 2,
      "explain": "A comma stands before the subordinate clause."
     },
     {
      "prompt": "How may <i lang=\"de\">Tür</i> be written where the umlaut cannot be printed?",
      "options": [
       "<i lang=\"de\">Tur</i>",
       "<i lang=\"de\">Tuer</i>",
       "<i lang=\"de\">Tür’</i>",
       "<i lang=\"de\">Tüür</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Ü</i> may be written <i lang=\"de\">ue</i>."
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
      "explain": "German quotation marks are low at the start and high at the end: „So.“"
     }
    ]
   }
  }
 ]
};
