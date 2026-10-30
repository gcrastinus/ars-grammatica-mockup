window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/accidents"] = {
 "id": "lang.iii-decl.de/accidents",
 "title": "The Accidents of German Compared to Latin",
 "sub": "The accidents of modern German: what it has, and where it differs from Latin.",
 "sources": "Duden",
 "panels": [
  {
   "id": "accidents-1",
   "title": "Modern German",
   "body": "<p>German, like English, has changed over the centuries and is spoken in many regional dialects, so the same word can have different forms in an old text, in a dialect, and in a newspaper. The forms given here are those of modern standard written German, the German taught in the schools and set out in the Duden, the standard dictionary and grammar of the language. We compare them with the Latin forms we have studied, and we leave aside the older stages of the language and the regional dialects.</p>"
  },
  {
   "id": "accidents-2",
   "title": "The forms of the article",
   "body": "<p>The German article shows the gender, number, and case of the noun it stands with, and so its forms are the first a reader of German must know. In the singular the definite article is <i lang=\"de\">der</i>, <i lang=\"de\">die</i>, <i lang=\"de\">das</i> in the nominative. The masculine accusative is <i lang=\"de\">den</i>, the masculine and neuter dative is <i lang=\"de\">dem</i>, and the masculine and neuter genitive is <i lang=\"de\">des</i>. The feminine genitive and dative are both <i lang=\"de\">der</i>, and the feminine accusative is <i lang=\"de\">die</i>. In the plural, for all three genders, <i lang=\"de\">die</i> is nominative and accusative, <i lang=\"de\">den</i> is dative, and <i lang=\"de\">der</i> is genitive.</p>\n<p>The indefinite article is <i lang=\"de\">ein</i>, <i lang=\"de\">eine</i> in the nominative, <i lang=\"de\">einen</i> in the masculine accusative, <i lang=\"de\">einem</i> and <i lang=\"de\">einer</i> in the dative, and <i lang=\"de\">eines</i> and <i lang=\"de\">einer</i> in the genitive. It has no plural, and so an indefinite plural noun stands with no article, which Duden calls the <i lang=\"de\">Nullartikel</i> (“zero article”).</p>",
   "qp": {
    "id": "q-de-acc-article",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"de\">Ich danke ___ Lehrer</i> (“I thank the teacher”).",
      "options": [
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">des</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Danken</i> takes the dative, and the masculine dative is <i lang=\"de\">dem</i>."
     },
     {
      "prompt": "What is the accusative of the indefinite article before a masculine noun?",
      "options": [
       "<i lang=\"de\">einen</i>",
       "<i lang=\"de\">ein</i>",
       "<i lang=\"de\">einem</i>",
       "<i lang=\"de\">eines</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Ich sehe einen Baum</i>: the masculine accusative is <i lang=\"de\">einen</i>."
     },
     {
      "prompt": "Which form of the definite article is the dative plural for every gender?",
      "options": [
       "<i lang=\"de\">die</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 1,
      "explain": "In the plural, <i lang=\"de\">den</i> is dative for all three genders."
     }
    ]
   }
  },
  {
   "id": "accidents-3",
   "title": "The four cases",
   "body": "<p>German has four cases, whereas Latin has six: the nominative, the accusative, the dative, and the genitive (German <i lang=\"de\">Nominativ</i>, <i lang=\"de\">Akkusativ</i>, <i lang=\"de\">Dativ</i>, and <i lang=\"de\">Genitiv</i>). Duden also gives the older German names <i lang=\"de\">Wenfall</i> (“whom-case”) for the accusative and <i lang=\"de\">Wemfall</i> (“to-whom case”) for the dative, from the questions that each case answers. The nominative is the case of the subject, and the accusative the case of the direct object. The dative is the case of the indirect object, that is, of the person to whom something is given. The genitive marks the possessor, as in <i lang=\"de\">des Königs</i> (“of the king”).</p>",
   "qp": {
    "id": "q-de-acc-cases",
    "variants": [
     {
      "prompt": "How many cases has German?",
      "options": [
       "Four",
       "Six",
       "Five",
       "Three"
      ],
      "answer": 0,
      "explain": "German has four cases: the nominative, accusative, dative, and genitive."
     },
     {
      "prompt": "What does the older German name <i lang=\"de\">Wemfall</i> mean?",
      "options": [
       "The “whom” case, the accusative",
       "The case of the possessor",
       "The case of address",
       "The “to-whom” case, the dative"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Wemfall</i> names the dative from the question <i lang=\"de\">wem?</i>, “to whom?”"
     },
     {
      "prompt": "In <i lang=\"de\">Sie schenkt dem Kind einen Ball</i>, which case is <i lang=\"de\">dem Kind</i>?",
      "options": [
       "Accusative",
       "Nominative",
       "Dative",
       "Genitive"
      ],
      "answer": 2,
      "explain": "The child is the one to whom the ball is given: the dative."
     }
    ]
   }
  },
  {
   "id": "accidents-4",
   "title": "No ablative",
   "body": "<p>Where Latin says <i lang=\"de\">cum rēge</i> (“with the king”), with the ablative, German says <i lang=\"de\">mit dem König</i>, with the dative, because German has no ablative. Where Latin uses the ablative, German uses a preposition with the dative or the accusative, or, for the possessor, the genitive. Latin <i lang=\"de\">in</i> takes the ablative for the place where and the accusative for motion into a place, and German <i lang=\"de\">in</i> makes the same difference with two cases that German still has: <i lang=\"de\">in der Stadt</i> (“in the city,” dative) names the place where, whereas <i lang=\"de\">in die Stadt</i> (“into the city,” accusative) names the place to which.</p>",
   "qp": {
    "id": "q-de-acc-ablative",
    "variants": [
     {
      "prompt": "What case does German use where Latin says <i lang=\"de\">cum amīcō</i> (“with a friend”)?",
      "options": [
       "The ablative, with <i lang=\"de\">mit</i>",
       "The dative, with <i lang=\"de\">mit</i>",
       "The genitive, with <i lang=\"de\">von</i>",
       "The accusative, with <i lang=\"de\">für</i>"
      ],
      "answer": 1,
      "explain": "German has no ablative; <i lang=\"de\">mit</i> takes the dative: <i lang=\"de\">mit einem Freund</i>."
     },
     {
      "prompt": "What does <i lang=\"de\">in die Schule</i> name?",
      "options": [
       "The place where",
       "The time when",
       "The place to which",
       "The possessor"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">In</i> with the accusative names motion into a place."
     },
     {
      "prompt": "What does <i lang=\"de\">in der Schule</i> name?",
      "options": [
       "The place to which",
       "The means",
       "The cause",
       "The place where"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">In</i> with the dative names the place where."
     }
    ]
   }
  },
  {
   "id": "accidents-5",
   "title": "Address",
   "body": "<p>Latin marks address with the vocative, whose form can differ from the nominative, as <i lang=\"de\">Marce</i> (“Marcus!”) differs from <i lang=\"de\">Marcus</i>. German has no separate vocative: it uses the nominative form in address, and the sentence itself shows that someone is being called. So <i lang=\"de\">König</i> is both the nominative and the form used in addressing a king. The article has no vocative either.</p>"
  },
  {
   "id": "accidents-6",
   "title": "Gender",
   "body": "<p>Every German noun is masculine, feminine, or neuter, as in Latin, and the article shows the gender when the ending of the noun does not: <i lang=\"de\">der König</i> (“the king”) is masculine, <i lang=\"de\">die Frau</i> (“the woman”) is feminine, and <i lang=\"de\">das Buch</i> (“the book”) is neuter. The ending does not always show the gender, because <i lang=\"de\">Buch</i> and <i lang=\"de\">Stadt</i> (“city”) both end in a consonant, but the first is neuter and the second feminine.</p>",
   "qp": {
    "id": "q-de-acc-gender",
    "variants": [
     {
      "prompt": "What gender is <i lang=\"de\">Mädchen</i> (“girl”)?",
      "options": [
       "Feminine",
       "Masculine",
       "Neuter",
       "Common"
      ],
      "answer": 2,
      "explain": "Nouns in <i lang=\"de\">-chen</i> are neuter, whatever they name: <i lang=\"de\">das Mädchen</i>."
     },
     {
      "prompt": "What shows the gender of <i lang=\"de\">der Löffel</i> (“the spoon”)?",
      "options": [
       "The ending <i lang=\"de\">-el</i>",
       "The article <i lang=\"de\">der</i>",
       "The capital letter",
       "The meaning of the word"
      ],
      "answer": 1,
      "explain": "The article shows the gender: <i lang=\"de\">Löffel</i> is masculine."
     },
     {
      "prompt": "How many genders has German?",
      "options": [
       "Three",
       "Two",
       "Four",
       "One"
      ],
      "answer": 0,
      "explain": "German has three genders, the masculine, feminine, and neuter, as Latin does."
     }
    ]
   }
  },
  {
   "id": "accidents-7",
   "title": "Number",
   "body": "<p>A German noun has two numbers, the singular and the plural, as a Latin noun has; German has no dual. The plural is formed in several ways. Some nouns add <i lang=\"de\">-e</i>, as <i lang=\"de\">Pferd</i>, <i lang=\"de\">Pferde</i> (“horse,” “horses”); some add <i lang=\"de\">-n</i> or <i lang=\"de\">-en</i>, as <i lang=\"de\">Frau</i>, <i lang=\"de\">Frauen</i>; and some change the stem vowel and add an ending, as <i lang=\"de\">Buch</i>, <i lang=\"de\">Bücher</i> and <i lang=\"de\">Stadt</i>, <i lang=\"de\">Städte</i>. A noun that already ends in <i lang=\"de\">-n</i> may only change its vowel, as <i lang=\"de\">Garten</i>, <i lang=\"de\">Gärten</i> (“garden,” “gardens”). The article marks number as well: <i lang=\"de\">die</i> is the nominative plural of all three genders, whereas in the singular each gender has its own article, <i lang=\"de\">der</i>, <i lang=\"de\">die</i>, or <i lang=\"de\">das</i>.</p>"
  },
  {
   "id": "accidents-8",
   "title": "Case on the noun",
   "body": "<p>A German noun changes its form for case, but less often than a Latin noun. A strong masculine or neuter noun adds <i lang=\"de\">-es</i> or <i lang=\"de\">-s</i> in the genitive singular, as <i lang=\"de\">des Königs</i> and <i lang=\"de\">des Buches</i>; for several of these nouns Duden also gives a shorter genitive, such as <i lang=\"de\">des Buchs</i> beside <i lang=\"de\">des Buches</i>. The dative plural adds <i lang=\"de\">-n</i> unless the plural already ends in <i lang=\"de\">-n</i> or <i lang=\"de\">-s</i>, as <i lang=\"de\">den Königen</i> and <i lang=\"de\">den Büchern</i>. In the other singular cases a strong noun usually keeps one form, and the article shows the case: <i lang=\"de\">der König</i>, <i lang=\"de\">den König</i>, and <i lang=\"de\">dem König</i> are three cases, but the noun is <i lang=\"de\">König</i> in all three.</p>",
   "qp": {
    "id": "q-de-acc-noun-case",
    "variants": [
     {
      "prompt": "What is the genitive singular of <i lang=\"de\">das Jahr</i> (“year”)?",
      "options": [
       "<i lang=\"de\">der Jahre</i>",
       "<i lang=\"de\">dem Jahr</i>",
       "<i lang=\"de\">des Jahres</i>",
       "<i lang=\"de\">des Jahr</i>"
      ],
      "answer": 2,
      "explain": "A strong neuter noun adds <i lang=\"de\">-es</i> or <i lang=\"de\">-s</i> in the genitive: <i lang=\"de\">des Jahres</i> (or <i lang=\"de\">Jahrs</i>)."
     },
     {
      "prompt": "What is the dative plural of <i lang=\"de\">die Bäume</i> (“trees”)?",
      "options": [
       "<i lang=\"de\">den Bäume</i>",
       "<i lang=\"de\">den Bäumen</i>",
       "<i lang=\"de\">dem Bäumen</i>",
       "<i lang=\"de\">der Bäume</i>"
      ],
      "answer": 1,
      "explain": "The dative plural adds <i lang=\"de\">-n</i>."
     },
     {
      "prompt": "In the other singular cases, what shows the case of a strong noun?",
      "options": [
       "The article",
       "An ending on the noun",
       "The capital letter",
       "The plural"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Der Tisch, den Tisch, dem Tisch</i>: the noun keeps one form, and the article shows the case."
     }
    ]
   }
  },
  {
   "id": "accidents-9",
   "title": "The weak noun",
   "body": "<p>A strong noun such as <i lang=\"de\">König</i> adds <i lang=\"de\">-s</i> in the genitive singular and leaves the other singular forms unchanged, whereas a <strong>weak</strong> masculine noun adds <i lang=\"de\">-n</i> or <i lang=\"de\">-en</i> in every case except the nominative singular, and never adds <i lang=\"de\">-s</i>. <i lang=\"de\">Mensch</i> (“human being”) is the model: the nominative is <i lang=\"de\">der Mensch</i>, the accusative <i lang=\"de\">den Menschen</i>, the dative <i lang=\"de\">dem Menschen</i>, and the genitive <i lang=\"de\">des Menschen</i>, and the plural is <i lang=\"de\">Menschen</i> in every case. Latin has no class of nouns quite like this.</p>",
   "qp": {
    "id": "q-de-acc-weak",
    "variants": [
     {
      "prompt": "What is the dative singular of the weak noun <i lang=\"de\">der Held</i> (“hero”)?",
      "options": [
       "<i lang=\"de\">dem Held</i>",
       "<i lang=\"de\">dem Heldes</i>",
       "<i lang=\"de\">dem Helds</i>",
       "<i lang=\"de\">dem Helden</i>"
      ],
      "answer": 3,
      "explain": "A weak masculine noun adds <i lang=\"de\">-en</i> in every case but the nominative singular."
     },
     {
      "prompt": "Which noun is weak?",
      "options": [
       "<i lang=\"de\">der Bär</i> (“bear”), <i lang=\"de\">den Bären</i>",
       "<i lang=\"de\">der Tisch</i>, <i lang=\"de\">den Tisch</i>",
       "<i lang=\"de\">der Wagen</i>, <i lang=\"de\">den Wagen</i>",
       "<i lang=\"de\">das Bild</i>, <i lang=\"de\">das Bild</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Bär</i> adds <i lang=\"de\">-en</i> in the accusative; the others keep one form."
     },
     {
      "prompt": "Does a weak noun ever add <i lang=\"de\">-s</i> in the genitive singular?",
      "options": [
       "Yes, always",
       "No; it adds <i lang=\"de\">-n</i> or <i lang=\"de\">-en</i>",
       "Only in the plural",
       "Only after <i lang=\"de\">ein</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Des Menschen</i>, <i lang=\"de\">des Helden</i>: the weak noun never takes <i lang=\"de\">-s</i> (apart from a few, such as <i lang=\"de\">Name</i>, <i lang=\"de\">des Namens</i>)."
     }
    ]
   }
  },
  {
   "id": "accidents-10",
   "title": "Adjective endings",
   "body": "<p>A German adjective agrees with its noun in gender, number, and case, as a Latin adjective does, but its ending also depends on what stands before it. After <i lang=\"de\">der</i>, <i lang=\"de\">die</i>, or <i lang=\"de\">das</i> the ending is weak: <i lang=\"de\">der gute König</i>, <i lang=\"de\">die gute Frau</i>, <i lang=\"de\">das gute Buch</i>. After <i lang=\"de\">ein</i> the ending is mixed: <i lang=\"de\">ein guter König</i>, <i lang=\"de\">eine gute Frau</i>, <i lang=\"de\">ein gutes Buch</i>. With no article the ending is strong: <i lang=\"de\">guter König</i>, <i lang=\"de\">gute Frau</i>, <i lang=\"de\">gutes Buch</i>. The strong ending carries the mark of gender and case that the definite article would otherwise have carried. The adjective <i lang=\"de\">gut</i> (“good”) is compared irregularly, with <i lang=\"de\">besser</i> (“better”) and <i lang=\"de\">am besten</i> (“best”).</p>",
   "qp": {
    "id": "q-de-acc-adj",
    "variants": [
     {
      "prompt": "Choose the ending: <i lang=\"de\">ein alt___ Haus</i> (“an old house”).",
      "options": [
       "<i lang=\"de\">-es</i>",
       "<i lang=\"de\">-e</i>",
       "<i lang=\"de\">-en</i>",
       "<i lang=\"de\">-er</i>"
      ],
      "answer": 0,
      "explain": "After <i lang=\"de\">ein</i>, which shows no gender in the neuter nominative, the adjective takes the strong ending <i lang=\"de\">-es</i>."
     },
     {
      "prompt": "Choose the ending: <i lang=\"de\">das alt___ Haus</i>.",
      "options": [
       "<i lang=\"de\">-es</i>",
       "<i lang=\"de\">-en</i>",
       "<i lang=\"de\">-er</i>",
       "<i lang=\"de\">-e</i>"
      ],
      "answer": 3,
      "explain": "After <i lang=\"de\">das</i>, which already shows the neuter, the adjective takes the weak ending <i lang=\"de\">-e</i>."
     },
     {
      "prompt": "Choose the ending: <i lang=\"de\">frisch___ Milch</i> (“fresh milk,” no article).",
      "options": [
       "<i lang=\"de\">-er</i>",
       "<i lang=\"de\">-en</i>",
       "<i lang=\"de\">-e</i>",
       "<i lang=\"de\">-es</i>"
      ],
      "answer": 2,
      "explain": "With no article, the adjective takes the strong ending; feminine nominative <i lang=\"de\">-e</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-11",
   "title": "Person and number",
   "body": "<p>Latin often leaves out the subject pronoun, because the ending of the verb is enough to show the person and the number, whereas German writes the pronoun in an ordinary statement, and the pronoun and the ending show them together. So <i lang=\"de\">ich sehe</i> means “I see”; <i lang=\"de\">er sieht</i>, “he sees” (or “it sees,” of a masculine noun); and <i lang=\"de\">sie sieht</i>, “she sees” (or “it sees,” of a feminine noun). <i lang=\"de\">Sie sehen</i>, with the plural ending, means “they see,” or, with the capital letter, “you see” in formal address, and the capital and the ending together show which is meant.</p>"
  },
  {
   "id": "accidents-12",
   "title": "The present",
   "body": "<p>The present says that the action is going on now, that it is habitual, or that it is so in general, so <i lang=\"de\">er spricht</i> means “he speaks” or “he is speaking.” A weak verb such as <i lang=\"de\">machen</i> (“to make”) adds the endings <i lang=\"de\">-e</i>, <i lang=\"de\">-st</i>, <i lang=\"de\">-t</i>, <i lang=\"de\">-en</i>, <i lang=\"de\">-t</i>, and <i lang=\"de\">-en</i> to the stem. A strong verb may change its vowel in the second and third persons singular: <i lang=\"de\">sprechen</i> (“to speak”) has <i lang=\"de\">sprichst</i> and <i lang=\"de\">spricht</i>; <i lang=\"de\">geben</i> (“to give”) has <i lang=\"de\">gibst</i> and <i lang=\"de\">gibt</i>; and <i lang=\"de\">sehen</i> (“to see”) has <i lang=\"de\">siehst</i> and <i lang=\"de\">sieht</i>. But <i lang=\"de\">kommen</i> (“to come”) does not change its vowel, and its forms are <i lang=\"de\">kommst</i> and <i lang=\"de\">kommt</i>.</p>",
   "qp": {
    "id": "q-de-acc-present",
    "variants": [
     {
      "prompt": "What is the third person singular present of <i lang=\"de\">werfen</i> (“throw”)?",
      "options": [
       "<i lang=\"de\">werft</i>",
       "<i lang=\"de\">warft</i>",
       "<i lang=\"de\">wirft</i>",
       "<i lang=\"de\">wirfen</i>"
      ],
      "answer": 2,
      "explain": "A strong verb with <i lang=\"de\">e</i> may change it to <i lang=\"de\">i</i>: <i lang=\"de\">er wirft</i>."
     },
     {
      "prompt": "What is the second person singular present of <i lang=\"de\">sagen</i> (weak)?",
      "options": [
       "<i lang=\"de\">sägst</i>",
       "<i lang=\"de\">sagst</i>",
       "<i lang=\"de\">sagest</i>",
       "<i lang=\"de\">sagt</i>"
      ],
      "answer": 1,
      "explain": "A weak verb adds <i lang=\"de\">-st</i> to the stem: <i lang=\"de\">du sagst</i>."
     },
     {
      "prompt": "Which verb does not change its vowel in the present?",
      "options": [
       "<i lang=\"de\">kommen</i>",
       "<i lang=\"de\">geben</i>",
       "<i lang=\"de\">sehen</i>",
       "<i lang=\"de\">sprechen</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Kommen</i> keeps its vowel: <i lang=\"de\">du kommst</i>, <i lang=\"de\">er kommt</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-13",
   "title": "The Präteritum",
   "body": "<p>The <strong>Präteritum</strong> is the simple past, so <i lang=\"de\">er sprach</i> means “he spoke” or “he was speaking.” Written narrative usually uses this tense, whereas spoken German often uses the Perfekt for the same past. The Präteritum of <i lang=\"de\">sein</i> (“to be”) is <i lang=\"de\">war</i>, of <i lang=\"de\">haben</i> (“to have”) <i lang=\"de\">hatte</i>, and of <i lang=\"de\">werden</i> (“to become”) <i lang=\"de\">wurde</i>, beside which Duden also gives the older <i lang=\"de\">ward</i>. A weak verb adds <i lang=\"de\">-te</i>, as <i lang=\"de\">machte</i>, whereas a strong verb changes its stem, as <i lang=\"de\">sprach</i>, <i lang=\"de\">gab</i>, <i lang=\"de\">kam</i>, and <i lang=\"de\">sah</i>.</p>",
   "qp": {
    "id": "q-de-acc-prat",
    "variants": [
     {
      "prompt": "What is the Präteritum, third person singular, of <i lang=\"de\">sagen</i>?",
      "options": [
       "<i lang=\"de\">sagte</i>",
       "<i lang=\"de\">sug</i>",
       "<i lang=\"de\">gesagt</i>",
       "<i lang=\"de\">sage</i>"
      ],
      "answer": 0,
      "explain": "A weak verb adds <i lang=\"de\">-te</i>."
     },
     {
      "prompt": "Where is the Präteritum usually found?",
      "options": [
       "In everyday speech for every verb",
       "Only in questions",
       "Only in commands",
       "In written narrative"
      ],
      "answer": 3,
      "explain": "Written narrative uses the Präteritum; speech often uses the Perfekt."
     },
     {
      "prompt": "What is the Präteritum, third person singular, of <i lang=\"de\">werden</i>?",
      "options": [
       "<i lang=\"de\">würde</i>",
       "<i lang=\"de\">werdete</i>",
       "<i lang=\"de\">wurde</i>",
       "<i lang=\"de\">geworden</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Wurde</i>, with the older <i lang=\"de\">ward</i>; <i lang=\"de\">würde</i> is the Konjunktiv II."
     }
    ]
   }
  },
  {
   "id": "accidents-14",
   "title": "The Perfekt",
   "body": "<p>The <strong>Perfekt</strong> is formed with <i lang=\"de\">haben</i> or <i lang=\"de\">sein</i> and the past participle. It is the ordinary past of a completed action, and in speech it is the ordinary past more broadly; Latin, by contrast, forms its perfect active in one word, without an auxiliary verb. <i lang=\"de\">Sehen</i>, <i lang=\"de\">sprechen</i>, <i lang=\"de\">geben</i>, <i lang=\"de\">machen</i>, and <i lang=\"de\">haben</i> take <i lang=\"de\">haben</i>, so the third person singular is <i lang=\"de\">hat gesehen</i>, <i lang=\"de\">hat gesprochen</i>, <i lang=\"de\">hat gegeben</i>, <i lang=\"de\">hat gemacht</i>, and <i lang=\"de\">hat gehabt</i>. <i lang=\"de\">Sein</i>, <i lang=\"de\">werden</i>, and <i lang=\"de\">kommen</i> take <i lang=\"de\">sein</i>, so the third person singular is <i lang=\"de\">ist gewesen</i>, <i lang=\"de\">ist geworden</i>, and <i lang=\"de\">ist gekommen</i>. The participle takes no adjective ending in this tense. When <i lang=\"de\">werden</i> helps to form the passive, its participle is <i lang=\"de\">worden</i>, not <i lang=\"de\">geworden</i>.</p>",
   "qp": {
    "id": "q-de-acc-perfekt",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i lang=\"de\">Wir ___ nach Hause gegangen</i> (“We went home”).",
      "options": [
       "<i lang=\"de\">sind</i>",
       "<i lang=\"de\">haben</i>",
       "<i lang=\"de\">werden</i>",
       "<i lang=\"de\">hatten</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Gehen</i> is a verb of motion and takes <i lang=\"de\">sein</i>."
     },
     {
      "prompt": "What is the participle of <i lang=\"de\">werden</i> in the passive Perfekt?",
      "options": [
       "<i lang=\"de\">geworden</i>",
       "<i lang=\"de\">gewerdet</i>",
       "<i lang=\"de\">wurde</i>",
       "<i lang=\"de\">worden</i>"
      ],
      "answer": 3,
      "explain": "In the passive, the participle of <i lang=\"de\">werden</i> is <i lang=\"de\">worden</i>: <i lang=\"de\">ist gebaut worden</i>."
     },
     {
      "prompt": "Does the participle take an adjective ending in <i lang=\"de\">er hat gelacht</i>?",
      "options": [
       "Yes, <i lang=\"de\">-e</i>",
       "Yes, <i lang=\"de\">-en</i>",
       "No",
       "Only in the plural"
      ],
      "answer": 2,
      "explain": "The participle takes no ending in the Perfekt."
     }
    ]
   }
  },
  {
   "id": "accidents-15",
   "title": "The Konjunktiv II",
   "body": "<p>The <strong>Konjunktiv II</strong> is the mood for what is imagined or contrary to fact, like the Latin imperfect subjunctive in a condition contrary to fact. Its forms for <i lang=\"de\">sein</i>, <i lang=\"de\">haben</i>, and <i lang=\"de\">werden</i> are <i lang=\"de\">wäre</i>, <i lang=\"de\">hätte</i>, and <i lang=\"de\">würde</i>. A strong verb often takes an umlaut on the stem of the Präteritum: <i lang=\"de\">sprach</i> becomes <i lang=\"de\">spräche</i>, <i lang=\"de\">gab</i> becomes <i lang=\"de\">gäbe</i>, <i lang=\"de\">kam</i> becomes <i lang=\"de\">käme</i>, and <i lang=\"de\">sah</i> becomes <i lang=\"de\">sähe</i>. A weak verb, however, has the same spelling in the Konjunktiv II as in the Präteritum, so <i lang=\"de\">machte</i> is both; and for this reason Duden counts the construction with <i lang=\"de\">würde</i> and the infinitive (<i lang=\"de\">würde machen</i>) the clearer one for such verbs. Some second-person forms have a longer and a shorter spelling, such as <i lang=\"de\">wärest</i> and <i lang=\"de\">wärst</i>.</p>",
   "qp": {
    "id": "q-de-acc-k2",
    "variants": [
     {
      "prompt": "What is the Konjunktiv II of <i lang=\"de\">sein</i>, first person singular?",
      "options": [
       "<i lang=\"de\">war</i>",
       "<i lang=\"de\">sei</i>",
       "<i lang=\"de\">wäre</i>",
       "<i lang=\"de\">würde</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Ich wäre</i>: the Präteritum <i lang=\"de\">war</i> with umlaut and <i lang=\"de\">-e</i>."
     },
     {
      "prompt": "Why does Duden count <i lang=\"de\">würde machen</i> clearer than <i lang=\"de\">machte</i>?",
      "options": [
       "<i lang=\"de\">Machte</i> is incorrect",
       "<i lang=\"de\">Machte</i> looks like the Präteritum",
       "<i lang=\"de\">Machen</i> is strong",
       "<i lang=\"de\">Würde</i> is the indicative"
      ],
      "answer": 1,
      "explain": "A weak verb has the same form in the Konjunktiv II as in the Präteritum."
     },
     {
      "prompt": "What is the Konjunktiv II of <i lang=\"de\">sehen</i> (Präteritum <i lang=\"de\">sah</i>), third person singular?",
      "options": [
       "<i lang=\"de\">sähe</i>",
       "<i lang=\"de\">sahe</i>",
       "<i lang=\"de\">sehe</i>",
       "<i lang=\"de\">sieht</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Sah</i> with umlaut and <i lang=\"de\">-e</i>: <i lang=\"de\">sähe</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-16",
   "title": "Sein, haben, and werden",
   "body": "<p><i lang=\"de\">Sein</i> means “to be,” as Latin <i lang=\"de\">esse</i> does, and <i lang=\"de\">haben</i> means “to have.” <i lang=\"de\">Werden</i> means “to become,” and it is also the auxiliary verb of the future and of the passive. As a full verb, “to become,” <i lang=\"de\">werden</i> takes <i lang=\"de\">sein</i> in the Perfekt, as do <i lang=\"de\">sein</i> itself and <i lang=\"de\">kommen</i>, so its Perfekt is <i lang=\"de\">ist geworden</i>; whereas <i lang=\"de\">haben</i> and the weak verb <i lang=\"de\">machen</i> take <i lang=\"de\">haben</i>. The present of <i lang=\"de\">sein</i> is <i lang=\"de\">bin</i>, <i lang=\"de\">bist</i>, <i lang=\"de\">ist</i>, <i lang=\"de\">sind</i>, <i lang=\"de\">seid</i>, <i lang=\"de\">sind</i>; of <i lang=\"de\">haben</i>, <i lang=\"de\">habe</i>, <i lang=\"de\">hast</i>, <i lang=\"de\">hat</i>, <i lang=\"de\">haben</i>, <i lang=\"de\">habt</i>, <i lang=\"de\">haben</i>; and of <i lang=\"de\">werden</i>, <i lang=\"de\">werde</i>, <i lang=\"de\">wirst</i>, <i lang=\"de\">wird</i>, <i lang=\"de\">werden</i>, <i lang=\"de\">werdet</i>, <i lang=\"de\">werden</i>.</p>"
  },
  {
   "id": "accidents-17",
   "title": "Strong and weak verbs",
   "body": "<p>A <strong>weak</strong> verb keeps its stem and forms the Präteritum with <i lang=\"de\">-te</i> and the past participle with <i lang=\"de\">ge-</i> and <i lang=\"de\">-t</i>; <i lang=\"de\">machen</i> is the model, with <i lang=\"de\">machte</i> and <i lang=\"de\">gemacht</i>, and the other regular weak verbs are formed in the same way. A <strong>strong</strong> verb changes its stem vowel, and its participle ends in <i lang=\"de\">-en</i>; <i lang=\"de\">sprechen</i>, <i lang=\"de\">geben</i>, <i lang=\"de\">kommen</i>, and <i lang=\"de\">sehen</i> are strong verbs, and each must be learned from its own table. The participle of a simple verb takes <i lang=\"de\">ge-</i> at the front, as <i lang=\"de\">gesprochen</i> and <i lang=\"de\">gesehen</i>, but the infinitive does not.</p>",
   "qp": {
    "id": "q-de-acc-strong",
    "variants": [
     {
      "prompt": "Which verb is weak?",
      "options": [
       "<i lang=\"de\">lachen, lachte, gelacht</i>",
       "<i lang=\"de\">ziehen, zog, gezogen</i>",
       "<i lang=\"de\">rufen, rief, gerufen</i>",
       "<i lang=\"de\">sitzen, saß, gesessen</i>"
      ],
      "answer": 0,
      "explain": "A weak verb keeps its stem and takes <i lang=\"de\">-te</i> and <i lang=\"de\">-t</i>."
     },
     {
      "prompt": "How does a strong participle end?",
      "options": [
       "In <i lang=\"de\">-t</i>",
       "In <i lang=\"de\">-te</i>",
       "In <i lang=\"de\">-end</i>",
       "In <i lang=\"de\">-en</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Gesprochen</i>, <i lang=\"de\">gesehen</i>: the strong participle ends in <i lang=\"de\">-en</i>."
     },
     {
      "prompt": "Where does a simple verb put <i lang=\"de\">ge-</i>?",
      "options": [
       "At the front of the infinitive",
       "At the end of the Präteritum",
       "At the front of the participle",
       "Before the subject"
      ],
      "answer": 2,
      "explain": "The participle of a simple verb takes <i lang=\"de\">ge-</i> at the front."
     }
    ]
   }
  },
  {
   "id": "accidents-18",
   "title": "Stem and ending",
   "body": "<p>A German form, like a Latin one, is made of a stem and an ending. In <i lang=\"de\">spricht</i> the vowel of the stem has changed, and <i lang=\"de\">-t</i> marks the third person singular. In <i lang=\"de\">Königen</i> the ending <i lang=\"de\">-en</i> marks the dative plural on the plural stem <i lang=\"de\">König-</i>. In <i lang=\"de\">guten</i> the ending <i lang=\"de\">-en</i> is the weak ending of the adjective, because the article beside it has already marked the gender and the case. So in German the ending and the article together mark the gender, the number, and the case of a noun phrase, and the ending of the verb marks the person and the number a second time, beside the subject pronoun.</p>"
  },
  {
   "id": "accidents-19",
   "title": "Aspect",
   "body": "<p>German has no grammatical aspect of the kind that Greek has, and its tenses do not by themselves present an action as going on or as complete. <i lang=\"de\">Er las</i> means “he read” or “he was reading,” and the rest of the sentence, or a word such as <i lang=\"de\">gerade</i> (“just then”), shows which is meant. The Präteritum and the Perfekt differ chiefly in use, because the Präteritum is the tense of written narrative and the Perfekt the ordinary past of speech, whereas Latin and Greek mark aspect in the verb itself.</p>"
  },
  {
   "id": "accidents-20",
   "title": "Compound tenses and the passive",
   "body": "<p>The Perfekt and the Plusquamperfekt (the pluperfect) are formed with <i lang=\"de\">haben</i> or <i lang=\"de\">sein</i> and the past participle: <i lang=\"de\">er hat gesprochen</i> (“he has spoken”), <i lang=\"de\">er hatte gesprochen</i> (“he had spoken”), <i lang=\"de\">er ist gekommen</i> (“he has come”). Verbs of motion or of change of state take <i lang=\"de\">sein</i>. The future is formed with <i lang=\"de\">werden</i> and the infinitive: <i lang=\"de\">er wird sprechen</i> (“he will speak”). The passive is formed with <i lang=\"de\">werden</i> and the past participle: <i lang=\"de\">das Buch wird gelesen</i> (“the book is read”). The doer is named with <i lang=\"de\">von</i> and the dative, and in the Perfekt of the passive the participle of <i lang=\"de\">werden</i> is <i lang=\"de\">worden</i>: <i lang=\"de\">das Buch ist gelesen worden</i> (“the book has been read”).</p>",
   "qp": {
    "id": "q-de-acc-passive",
    "variants": [
     {
      "prompt": "What does <i lang=\"de\">Das Haus wird gebaut</i> mean?",
      "options": [
       "“The house is being built.”",
       "“The house will build.”",
       "“The house has been built.”",
       "“The house becomes good.”"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Werden</i> with the participle forms the passive."
     },
     {
      "prompt": "How is the doer named in a German passive?",
      "options": [
       "With <i lang=\"de\">durch</i> and the genitive",
       "With the ablative",
       "With <i lang=\"de\">mit</i> and the accusative",
       "With <i lang=\"de\">von</i> and the dative"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Von</i> with the dative names the doer: <i lang=\"de\">von dem Architekten</i>."
     },
     {
      "prompt": "What does <i lang=\"de\">Er wird kommen</i> mean?",
      "options": [
       "“He becomes come.”",
       "“He has come.”",
       "“He will come.”",
       "“He is being come.”"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Werden</i> with the infinitive forms the future."
     }
    ]
   }
  },
  {
   "id": "accidents-21",
   "title": "Reflexive verbs",
   "body": "<p>A <strong>reflexive</strong> verb is used with a pronoun that refers back to the subject: <i lang=\"de\">ich wasche mich</i> (“I wash myself”), <i lang=\"de\">er wäscht sich</i> (“he washes himself”). Some verbs are always reflexive, such as <i lang=\"de\">sich freuen</i> (“to be glad”). A reflexive verb can also have a sense close to the passive or to the Greek middle, as in <i lang=\"de\">das Buch liest sich leicht</i> (“the book reads easily”). German forms the Perfekt of reflexive verbs with <i lang=\"de\">haben</i>: <i lang=\"de\">er hat sich gewaschen</i> (“he has washed himself”).</p>"
  },
  {
   "id": "accidents-22",
   "title": "The Konjunktiv I and the imperative",
   "body": "<p>Beside the Konjunktiv II, German has the <strong>Konjunktiv I</strong>, formed from the stem of the infinitive: <i lang=\"de\">er sei</i>, <i lang=\"de\">er habe</i>, <i lang=\"de\">er komme</i>. Its chief use is in reported speech in written German: <i lang=\"de\">er sagt, er sei krank</i> (“he says that he is ill”). The imperative gives a command: <i lang=\"de\">komm!</i> (to one person), <i lang=\"de\">kommt!</i> (to several), and <i lang=\"de\">kommen Sie!</i> (in formal address), all meaning “come!” A strong verb that changes <i lang=\"de\">e</i> to <i lang=\"de\">i</i> or <i lang=\"de\">ie</i> in the present also changes it in the imperative singular: <i lang=\"de\">gib!</i> (“give!”), <i lang=\"de\">sprich!</i> (“speak!”), <i lang=\"de\">lies!</i> (“read!”).</p>",
   "qp": {
    "id": "q-de-acc-k1",
    "variants": [
     {
      "prompt": "What is the Konjunktiv I of <i lang=\"de\">können</i>, third person singular?",
      "options": [
       "<i lang=\"de\">kann</i>",
       "<i lang=\"de\">könnte</i>",
       "<i lang=\"de\">konnte</i>",
       "<i lang=\"de\">könne</i>"
      ],
      "answer": 3,
      "explain": "The stem of the infinitive with <i lang=\"de\">-e</i>: <i lang=\"de\">er könne</i>."
     },
     {
      "prompt": "What is the imperative singular of <i lang=\"de\">nehmen</i>?",
      "options": [
       "<i lang=\"de\">nimm!</i>",
       "<i lang=\"de\">nehm!</i>",
       "<i lang=\"de\">nehme!</i>",
       "<i lang=\"de\">nimmt!</i>"
      ],
      "answer": 0,
      "explain": "A strong verb that changes <i lang=\"de\">e</i> to <i lang=\"de\">i</i> also changes it in the imperative singular."
     },
     {
      "prompt": "What is the chief use of the Konjunktiv I?",
      "options": [
       "Conditions contrary to fact",
       "Reported speech in written German",
       "Commands to several people",
       "The polite request"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Er sagt, er sei krank</i>: the Konjunktiv I reports speech."
     }
    ]
   }
  }
 ]
};
