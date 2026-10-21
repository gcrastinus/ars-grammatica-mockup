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
   "body": "<p>The German article shows the gender, number, and case of the noun it stands with, and so its forms are the first a reader of German must know. In the singular the definite article is <i>der</i>, <i>die</i>, <i>das</i> in the nominative. The masculine accusative is <i>den</i>, the masculine and neuter dative is <i>dem</i>, and the masculine and neuter genitive is <i>des</i>. The feminine genitive and dative are both <i>der</i>, and the feminine accusative is <i>die</i>. In the plural, for all three genders, <i>die</i> is nominative and accusative, <i>den</i> is dative, and <i>der</i> is genitive.</p>\n<p>The indefinite article is <i>ein</i>, <i>eine</i> in the nominative, <i>einen</i> in the masculine accusative, <i>einem</i> and <i>einer</i> in the dative, and <i>eines</i> and <i>einer</i> in the genitive. It has no plural, and so an indefinite plural noun stands with no article, which Duden calls the <i>Nullartikel</i> (“zero article”).</p>",
   "qp": {
    "id": "q-de-acc-article",
    "variants": [
     {
      "prompt": "Choose the article: <i>Ich danke ___ Lehrer</i> (“I thank the teacher”).",
      "options": [
       "<i>den</i>",
       "<i>der</i>",
       "<i>des</i>",
       "<i>dem</i>"
      ],
      "answer": 3,
      "explain": "<i>Danken</i> takes the dative, and the masculine dative is <i>dem</i>."
     },
     {
      "prompt": "What is the accusative of the indefinite article before a masculine noun?",
      "options": [
       "<i>einen</i>",
       "<i>ein</i>",
       "<i>einem</i>",
       "<i>eines</i>"
      ],
      "answer": 0,
      "explain": "<i>Ich sehe einen Baum</i>: the masculine accusative is <i>einen</i>."
     },
     {
      "prompt": "Which form of the definite article is the dative plural for every gender?",
      "options": [
       "<i>die</i>",
       "<i>den</i>",
       "<i>der</i>",
       "<i>dem</i>"
      ],
      "answer": 1,
      "explain": "In the plural, <i>den</i> is dative for all three genders."
     }
    ]
   }
  },
  {
   "id": "accidents-3",
   "title": "The four cases",
   "body": "<p>German has four cases, whereas Latin has six: the nominative, the accusative, the dative, and the genitive (German <i>Nominativ</i>, <i>Akkusativ</i>, <i>Dativ</i>, and <i>Genitiv</i>). Duden also gives the older German names <i>Wenfall</i> (“whom-case”) for the accusative and <i>Wemfall</i> (“to-whom case”) for the dative, from the questions that each case answers. The nominative is the case of the subject, and the accusative the case of the direct object. The dative is the case of the indirect object, that is, of the person to whom something is given. The genitive marks the possessor, as in <i>des Königs</i> (“of the king”).</p>",
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
      "explain": "Nominative, accusative, dative, and genitive."
     },
     {
      "prompt": "What does the older German name <i>Wemfall</i> mean?",
      "options": [
       "The “whom” case, the accusative",
       "The case of the possessor",
       "The case of address",
       "The “to-whom” case, the dative"
      ],
      "answer": 3,
      "explain": "<i>Wemfall</i> names the dative from the question <i>wem?</i>, “to whom?”"
     },
     {
      "prompt": "In <i>Sie schenkt dem Kind einen Ball</i>, which case is <i>dem Kind</i>?",
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
   "body": "<p>Where Latin says <i>cum rēge</i> (“with the king”), with the ablative, German says <i>mit dem König</i>, with the dative, because German has no ablative. Where Latin uses the ablative, German uses a preposition with the dative or the accusative, or, for the possessor, the genitive. Latin <i>in</i> takes the ablative for the place where and the accusative for motion into a place, and German <i>in</i> makes the same difference with two cases that German still has: <i>in der Stadt</i> (“in the city,” dative) names the place where, whereas <i>in die Stadt</i> (“into the city,” accusative) names the place to which.</p>",
   "qp": {
    "id": "q-de-acc-ablative",
    "variants": [
     {
      "prompt": "What case does German use where Latin says <i>cum amīcō</i> (“with a friend”)?",
      "options": [
       "The ablative, with <i>mit</i>",
       "The dative, with <i>mit</i>",
       "The genitive, with <i>von</i>",
       "The accusative, with <i>für</i>"
      ],
      "answer": 1,
      "explain": "German has no ablative; <i>mit</i> takes the dative: <i>mit einem Freund</i>."
     },
     {
      "prompt": "What does <i>in die Schule</i> name?",
      "options": [
       "The place where",
       "The time when",
       "The place to which",
       "The possessor"
      ],
      "answer": 2,
      "explain": "<i>In</i> with the accusative names motion into a place."
     },
     {
      "prompt": "What does <i>in der Schule</i> name?",
      "options": [
       "The place to which",
       "The means",
       "The cause",
       "The place where"
      ],
      "answer": 3,
      "explain": "<i>In</i> with the dative names the place where."
     }
    ]
   }
  },
  {
   "id": "accidents-5",
   "title": "Address",
   "body": "<p>Latin marks address with the vocative, whose form can differ from the nominative, as <i>Marce</i> (“Marcus!”) differs from <i>Marcus</i>. German has no separate vocative: it uses the nominative form in address, and the sentence itself shows that someone is being called. So <i>König</i> is both the nominative and the form used in addressing a king. The article has no vocative either.</p>"
  },
  {
   "id": "accidents-6",
   "title": "Gender",
   "body": "<p>Every German noun is masculine, feminine, or neuter, as in Latin, and the article shows the gender when the ending of the noun does not: <i>der König</i> (“the king”) is masculine, <i>die Frau</i> (“the woman”) is feminine, and <i>das Buch</i> (“the book”) is neuter. The ending does not always show the gender, because <i>Buch</i> and <i>Stadt</i> (“city”) both end in a consonant, but the first is neuter and the second feminine.</p>",
   "qp": {
    "id": "q-de-acc-gender",
    "variants": [
     {
      "prompt": "What gender is <i>Mädchen</i> (“girl”)?",
      "options": [
       "Feminine",
       "Masculine",
       "Neuter",
       "Common"
      ],
      "answer": 2,
      "explain": "Nouns in <i>-chen</i> are neuter, whatever they name: <i>das Mädchen</i>."
     },
     {
      "prompt": "What shows the gender of <i>der Löffel</i> (“the spoon”)?",
      "options": [
       "The ending <i>-el</i>",
       "The article <i>der</i>",
       "The capital letter",
       "The meaning of the word"
      ],
      "answer": 1,
      "explain": "The article shows the gender: <i>Löffel</i> is masculine."
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
      "explain": "Masculine, feminine, and neuter, as in Latin."
     }
    ]
   }
  },
  {
   "id": "accidents-7",
   "title": "Number",
   "body": "<p>A German noun has two numbers, the singular and the plural, as a Latin noun has; German has no dual. The plural is formed in several ways. Some nouns add <i>-e</i>, as <i>Pferd</i>, <i>Pferde</i> (“horse,” “horses”); some add <i>-n</i> or <i>-en</i>, as <i>Frau</i>, <i>Frauen</i>; and some change the stem vowel and add an ending, as <i>Buch</i>, <i>Bücher</i> and <i>Stadt</i>, <i>Städte</i>. A noun that already ends in <i>-n</i> may only change its vowel, as <i>Garten</i>, <i>Gärten</i> (“garden,” “gardens”). The article marks number as well: <i>die</i> is the nominative plural of all three genders, whereas in the singular each gender has its own article, <i>der</i>, <i>die</i>, or <i>das</i>.</p>"
  },
  {
   "id": "accidents-8",
   "title": "Case on the noun",
   "body": "<p>A German noun changes its form for case, but less often than a Latin noun. A strong masculine or neuter noun adds <i>-es</i> or <i>-s</i> in the genitive singular, as <i>des Königs</i> and <i>des Buches</i>; for several of these nouns Duden also gives a shorter genitive, such as <i>des Buchs</i> beside <i>des Buches</i>. The dative plural adds <i>-n</i> unless the plural already ends in <i>-n</i> or <i>-s</i>, as <i>den Königen</i> and <i>den Büchern</i>. In the other singular cases a strong noun usually keeps one form, and the article shows the case: <i>der König</i>, <i>den König</i>, and <i>dem König</i> are three cases, but the noun is <i>König</i> in all three.</p>",
   "qp": {
    "id": "q-de-acc-noun-case",
    "variants": [
     {
      "prompt": "What is the genitive singular of <i>das Jahr</i> (“year”)?",
      "options": [
       "<i>der Jahre</i>",
       "<i>dem Jahr</i>",
       "<i>des Jahres</i>",
       "<i>des Jahr</i>"
      ],
      "answer": 2,
      "explain": "A strong neuter noun adds <i>-es</i> or <i>-s</i> in the genitive: <i>des Jahres</i> (or <i>Jahrs</i>)."
     },
     {
      "prompt": "What is the dative plural of <i>die Bäume</i> (“trees”)?",
      "options": [
       "<i>den Bäume</i>",
       "<i>den Bäumen</i>",
       "<i>dem Bäumen</i>",
       "<i>der Bäume</i>"
      ],
      "answer": 1,
      "explain": "The dative plural adds <i>-n</i>."
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
      "explain": "<i>Der Tisch, den Tisch, dem Tisch</i>: the noun keeps one form, and the article shows the case."
     }
    ]
   }
  },
  {
   "id": "accidents-9",
   "title": "The weak noun",
   "body": "<p>A strong noun such as <i>König</i> adds <i>-s</i> in the genitive singular and leaves the other singular forms unchanged, whereas a <strong>weak</strong> masculine noun adds <i>-n</i> or <i>-en</i> in every case except the nominative singular, and never adds <i>-s</i>. <i>Mensch</i> (“human being”) is the model: the nominative is <i>der Mensch</i>, the accusative <i>den Menschen</i>, the dative <i>dem Menschen</i>, and the genitive <i>des Menschen</i>, and the plural is <i>Menschen</i> in every case. Latin has no class of nouns quite like this.</p>",
   "qp": {
    "id": "q-de-acc-weak",
    "variants": [
     {
      "prompt": "What is the dative singular of the weak noun <i>der Held</i> (“hero”)?",
      "options": [
       "<i>dem Held</i>",
       "<i>dem Heldes</i>",
       "<i>dem Helds</i>",
       "<i>dem Helden</i>"
      ],
      "answer": 3,
      "explain": "A weak masculine noun adds <i>-en</i> in every case but the nominative singular."
     },
     {
      "prompt": "Which noun is weak?",
      "options": [
       "<i>der Bär</i> (“bear”), <i>den Bären</i>",
       "<i>der Tisch</i>, <i>den Tisch</i>",
       "<i>der Wagen</i>, <i>den Wagen</i>",
       "<i>das Bild</i>, <i>das Bild</i>"
      ],
      "answer": 0,
      "explain": "<i>Bär</i> adds <i>-en</i> in the accusative; the others keep one form."
     },
     {
      "prompt": "Does a weak noun ever add <i>-s</i> in the genitive singular?",
      "options": [
       "Yes, always",
       "No; it adds <i>-n</i> or <i>-en</i>",
       "Only in the plural",
       "Only after <i>ein</i>"
      ],
      "answer": 1,
      "explain": "<i>Des Menschen</i>, <i>des Helden</i>: the weak noun never takes <i>-s</i> (apart from a few, such as <i>Name</i>, <i>des Namens</i>)."
     }
    ]
   }
  },
  {
   "id": "accidents-10",
   "title": "Adjective endings",
   "body": "<p>A German adjective agrees with its noun in gender, number, and case, as a Latin adjective does, but its ending also depends on what stands before it. After <i>der</i>, <i>die</i>, or <i>das</i> the ending is weak: <i>der gute König</i>, <i>die gute Frau</i>, <i>das gute Buch</i>. After <i>ein</i> the ending is mixed: <i>ein guter König</i>, <i>eine gute Frau</i>, <i>ein gutes Buch</i>. With no article the ending is strong: <i>guter König</i>, <i>gute Frau</i>, <i>gutes Buch</i>. The strong ending carries the mark of gender and case that the definite article would otherwise have carried. The adjective <i>gut</i> (“good”) is compared irregularly, with <i>besser</i> (“better”) and <i>am besten</i> (“best”).</p>",
   "qp": {
    "id": "q-de-acc-adj",
    "variants": [
     {
      "prompt": "Choose the ending: <i>ein alt___ Haus</i> (“an old house”).",
      "options": [
       "<i>-es</i>",
       "<i>-e</i>",
       "<i>-en</i>",
       "<i>-er</i>"
      ],
      "answer": 0,
      "explain": "After <i>ein</i>, which shows no gender in the neuter nominative, the adjective takes the strong ending <i>-es</i>."
     },
     {
      "prompt": "Choose the ending: <i>das alt___ Haus</i>.",
      "options": [
       "<i>-es</i>",
       "<i>-en</i>",
       "<i>-er</i>",
       "<i>-e</i>"
      ],
      "answer": 3,
      "explain": "After <i>das</i>, which already shows the neuter, the adjective takes the weak ending <i>-e</i>."
     },
     {
      "prompt": "Choose the ending: <i>frisch___ Milch</i> (“fresh milk,” no article).",
      "options": [
       "<i>-er</i>",
       "<i>-en</i>",
       "<i>-e</i>",
       "<i>-es</i>"
      ],
      "answer": 2,
      "explain": "With no article, the adjective takes the strong ending; feminine nominative <i>-e</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-11",
   "title": "Person and number",
   "body": "<p>Latin often leaves out the subject pronoun, because the ending of the verb is enough to show the person and the number, whereas German writes the pronoun in an ordinary statement, and the pronoun and the ending show them together. So <i>ich sehe</i> means “I see”; <i>er sieht</i>, “he sees” (or “it sees,” of a masculine noun); and <i>sie sieht</i>, “she sees” (or “it sees,” of a feminine noun). <i>Sie sehen</i>, with the plural ending, means “they see,” or, with the capital letter, “you see” in formal address, and the capital and the ending together show which is meant.</p>"
  },
  {
   "id": "accidents-12",
   "title": "The present",
   "body": "<p>The present says that the action is going on now, that it is habitual, or that it is so in general, so <i>er spricht</i> means “he speaks” or “he is speaking.” A weak verb such as <i>machen</i> (“to make”) adds the endings <i>-e</i>, <i>-st</i>, <i>-t</i>, <i>-en</i>, <i>-t</i>, and <i>-en</i> to the stem. A strong verb may change its vowel in the second and third persons singular: <i>sprechen</i> (“to speak”) has <i>sprichst</i> and <i>spricht</i>; <i>geben</i> (“to give”) has <i>gibst</i> and <i>gibt</i>; and <i>sehen</i> (“to see”) has <i>siehst</i> and <i>sieht</i>. But <i>kommen</i> (“to come”) does not change its vowel, and its forms are <i>kommst</i> and <i>kommt</i>.</p>",
   "qp": {
    "id": "q-de-acc-present",
    "variants": [
     {
      "prompt": "What is the third person singular present of <i>werfen</i> (“throw”)?",
      "options": [
       "<i>werft</i>",
       "<i>warft</i>",
       "<i>wirft</i>",
       "<i>wirfen</i>"
      ],
      "answer": 2,
      "explain": "A strong verb with <i>e</i> may change it to <i>i</i>: <i>er wirft</i>."
     },
     {
      "prompt": "What is the second person singular present of <i>sagen</i> (weak)?",
      "options": [
       "<i>sägst</i>",
       "<i>sagst</i>",
       "<i>sagest</i>",
       "<i>sagt</i>"
      ],
      "answer": 1,
      "explain": "A weak verb adds <i>-st</i> to the stem: <i>du sagst</i>."
     },
     {
      "prompt": "Which verb does not change its vowel in the present?",
      "options": [
       "<i>kommen</i>",
       "<i>geben</i>",
       "<i>sehen</i>",
       "<i>sprechen</i>"
      ],
      "answer": 0,
      "explain": "<i>Kommen</i> keeps its vowel: <i>du kommst</i>, <i>er kommt</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-13",
   "title": "The Präteritum",
   "body": "<p>The <strong>Präteritum</strong> is the simple past, so <i>er sprach</i> means “he spoke” or “he was speaking.” Written narrative usually uses this tense, whereas spoken German often uses the Perfekt for the same past. The Präteritum of <i>sein</i> (“to be”) is <i>war</i>, of <i>haben</i> (“to have”) <i>hatte</i>, and of <i>werden</i> (“to become”) <i>wurde</i>, beside which Duden also gives the older <i>ward</i>. A weak verb adds <i>-te</i>, as <i>machte</i>, whereas a strong verb changes its stem, as <i>sprach</i>, <i>gab</i>, <i>kam</i>, and <i>sah</i>.</p>",
   "qp": {
    "id": "q-de-acc-prat",
    "variants": [
     {
      "prompt": "What is the Präteritum, third person singular, of <i>sagen</i>?",
      "options": [
       "<i>sagte</i>",
       "<i>sug</i>",
       "<i>gesagt</i>",
       "<i>sage</i>"
      ],
      "answer": 0,
      "explain": "A weak verb adds <i>-te</i>."
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
      "prompt": "What is the Präteritum, third person singular, of <i>werden</i>?",
      "options": [
       "<i>würde</i>",
       "<i>werdete</i>",
       "<i>wurde</i>",
       "<i>geworden</i>"
      ],
      "answer": 2,
      "explain": "<i>Wurde</i>, with the older <i>ward</i>; <i>würde</i> is the Konjunktiv II."
     }
    ]
   }
  },
  {
   "id": "accidents-14",
   "title": "The Perfekt",
   "body": "<p>The <strong>Perfekt</strong> is formed with <i>haben</i> or <i>sein</i> and the past participle. It is the ordinary past of a completed action, and in speech it is the ordinary past more broadly; Latin, by contrast, forms its perfect active in one word, without an auxiliary verb. <i>Sehen</i>, <i>sprechen</i>, <i>geben</i>, <i>machen</i>, and <i>haben</i> take <i>haben</i>, so the third person singular is <i>hat gesehen</i>, <i>hat gesprochen</i>, <i>hat gegeben</i>, <i>hat gemacht</i>, and <i>hat gehabt</i>. <i>Sein</i>, <i>werden</i>, and <i>kommen</i> take <i>sein</i>, so the third person singular is <i>ist gewesen</i>, <i>ist geworden</i>, and <i>ist gekommen</i>. The participle takes no adjective ending in this tense. When <i>werden</i> helps to form the passive, its participle is <i>worden</i>, not <i>geworden</i>.</p>",
   "qp": {
    "id": "q-de-acc-perfekt",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i>Wir ___ nach Hause gegangen</i> (“We went home”).",
      "options": [
       "<i>sind</i>",
       "<i>haben</i>",
       "<i>werden</i>",
       "<i>hatten</i>"
      ],
      "answer": 0,
      "explain": "<i>Gehen</i> is a verb of motion and takes <i>sein</i>."
     },
     {
      "prompt": "What is the participle of <i>werden</i> in the passive Perfekt?",
      "options": [
       "<i>geworden</i>",
       "<i>gewerdet</i>",
       "<i>wurde</i>",
       "<i>worden</i>"
      ],
      "answer": 3,
      "explain": "In the passive, the participle of <i>werden</i> is <i>worden</i>: <i>ist gebaut worden</i>."
     },
     {
      "prompt": "Does the participle take an adjective ending in <i>er hat gelacht</i>?",
      "options": [
       "Yes, <i>-e</i>",
       "Yes, <i>-en</i>",
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
   "body": "<p>The <strong>Konjunktiv II</strong> is the mood for what is imagined or contrary to fact, like the Latin imperfect subjunctive in a condition contrary to fact. Its forms for <i>sein</i>, <i>haben</i>, and <i>werden</i> are <i>wäre</i>, <i>hätte</i>, and <i>würde</i>. A strong verb often takes an umlaut on the stem of the Präteritum: <i>sprach</i> becomes <i>spräche</i>, <i>gab</i> becomes <i>gäbe</i>, <i>kam</i> becomes <i>käme</i>, and <i>sah</i> becomes <i>sähe</i>. A weak verb, however, has the same spelling in the Konjunktiv II as in the Präteritum, so <i>machte</i> is both; and for this reason Duden counts the construction with <i>würde</i> and the infinitive (<i>würde machen</i>) the clearer one for such verbs. Some second-person forms have a longer and a shorter spelling, such as <i>wärest</i> and <i>wärst</i>.</p>",
   "qp": {
    "id": "q-de-acc-k2",
    "variants": [
     {
      "prompt": "What is the Konjunktiv II of <i>sein</i>, first person singular?",
      "options": [
       "<i>war</i>",
       "<i>sei</i>",
       "<i>wäre</i>",
       "<i>würde</i>"
      ],
      "answer": 2,
      "explain": "<i>Ich wäre</i>: the Präteritum <i>war</i> with umlaut and <i>-e</i>."
     },
     {
      "prompt": "Why does Duden count <i>würde machen</i> clearer than <i>machte</i>?",
      "options": [
       "<i>Machte</i> is incorrect",
       "<i>Machte</i> looks like the Präteritum",
       "<i>Machen</i> is strong",
       "<i>Würde</i> is the indicative"
      ],
      "answer": 1,
      "explain": "A weak verb has the same form in the Konjunktiv II as in the Präteritum."
     },
     {
      "prompt": "What is the Konjunktiv II of <i>sehen</i> (Präteritum <i>sah</i>), third person singular?",
      "options": [
       "<i>sähe</i>",
       "<i>sahe</i>",
       "<i>sehe</i>",
       "<i>sieht</i>"
      ],
      "answer": 0,
      "explain": "<i>Sah</i> with umlaut and <i>-e</i>: <i>sähe</i>."
     }
    ]
   }
  },
  {
   "id": "accidents-16",
   "title": "Sein, haben, and werden",
   "body": "<p><i>Sein</i> means “to be,” as Latin <i>esse</i> does, and <i>haben</i> means “to have.” <i>Werden</i> means “to become,” and it is also the auxiliary verb of the future and of the passive. As a full verb, “to become,” <i>werden</i> takes <i>sein</i> in the Perfekt, as do <i>sein</i> itself and <i>kommen</i>, so its Perfekt is <i>ist geworden</i>; whereas <i>haben</i> and the weak verb <i>machen</i> take <i>haben</i>. The present of <i>sein</i> is <i>bin</i>, <i>bist</i>, <i>ist</i>, <i>sind</i>, <i>seid</i>, <i>sind</i>; of <i>haben</i>, <i>habe</i>, <i>hast</i>, <i>hat</i>, <i>haben</i>, <i>habt</i>, <i>haben</i>; and of <i>werden</i>, <i>werde</i>, <i>wirst</i>, <i>wird</i>, <i>werden</i>, <i>werdet</i>, <i>werden</i>.</p>"
  },
  {
   "id": "accidents-17",
   "title": "Strong and weak verbs",
   "body": "<p>A <strong>weak</strong> verb keeps its stem and forms the Präteritum with <i>-te</i> and the past participle with <i>ge-</i> and <i>-t</i>; <i>machen</i> is the model, with <i>machte</i> and <i>gemacht</i>, and the other regular weak verbs are formed in the same way. A <strong>strong</strong> verb changes its stem vowel, and its participle ends in <i>-en</i>; <i>sprechen</i>, <i>geben</i>, <i>kommen</i>, and <i>sehen</i> are strong verbs, and each must be learned from its own table. The participle of a simple verb takes <i>ge-</i> at the front, as <i>gesprochen</i> and <i>gesehen</i>, but the infinitive does not.</p>",
   "qp": {
    "id": "q-de-acc-strong",
    "variants": [
     {
      "prompt": "Which verb is weak?",
      "options": [
       "<i>lachen, lachte, gelacht</i>",
       "<i>ziehen, zog, gezogen</i>",
       "<i>rufen, rief, gerufen</i>",
       "<i>sitzen, saß, gesessen</i>"
      ],
      "answer": 0,
      "explain": "A weak verb keeps its stem and takes <i>-te</i> and <i>-t</i>."
     },
     {
      "prompt": "How does a strong participle end?",
      "options": [
       "In <i>-t</i>",
       "In <i>-te</i>",
       "In <i>-end</i>",
       "In <i>-en</i>"
      ],
      "answer": 3,
      "explain": "<i>Gesprochen</i>, <i>gesehen</i>: the strong participle ends in <i>-en</i>."
     },
     {
      "prompt": "Where does a simple verb put <i>ge-</i>?",
      "options": [
       "At the front of the infinitive",
       "At the end of the Präteritum",
       "At the front of the participle",
       "Before the subject"
      ],
      "answer": 2,
      "explain": "The participle of a simple verb takes <i>ge-</i> at the front."
     }
    ]
   }
  },
  {
   "id": "accidents-18",
   "title": "Stem and ending",
   "body": "<p>A German form, like a Latin one, is made of a stem and an ending. In <i>spricht</i> the vowel of the stem has changed, and <i>-t</i> marks the third person singular. In <i>Königen</i> the ending <i>-en</i> marks the dative plural on the plural stem <i>König-</i>. In <i>guten</i> the ending <i>-en</i> is the weak ending of the adjective, because the article beside it has already marked the gender and the case. So in German the ending and the article together mark the gender, the number, and the case of a noun phrase, and the ending of the verb marks the person and the number a second time, beside the subject pronoun.</p>"
  },
  {
   "id": "accidents-19",
   "title": "Aspect",
   "body": "<p>German has no grammatical aspect of the kind that Greek has, and its tenses do not by themselves present an action as going on or as complete. <i>Er las</i> means “he read” or “he was reading,” and the rest of the sentence, or a word such as <i>gerade</i> (“just then”), shows which is meant. The Präteritum and the Perfekt differ chiefly in use, because the Präteritum is the tense of written narrative and the Perfekt the ordinary past of speech, whereas Latin and Greek mark aspect in the verb itself.</p>"
  },
  {
   "id": "accidents-20",
   "title": "Compound tenses and the passive",
   "body": "<p>The Perfekt and the Plusquamperfekt (the pluperfect) are formed with <i>haben</i> or <i>sein</i> and the past participle: <i>er hat gesprochen</i> (“he has spoken”), <i>er hatte gesprochen</i> (“he had spoken”), <i>er ist gekommen</i> (“he has come”). Verbs of motion or of change of state take <i>sein</i>. The future is formed with <i>werden</i> and the infinitive: <i>er wird sprechen</i> (“he will speak”). The passive is formed with <i>werden</i> and the past participle: <i>das Buch wird gelesen</i> (“the book is read”). The doer is named with <i>von</i> and the dative, and in the Perfekt of the passive the participle of <i>werden</i> is <i>worden</i>: <i>das Buch ist gelesen worden</i> (“the book has been read”).</p>",
   "qp": {
    "id": "q-de-acc-passive",
    "variants": [
     {
      "prompt": "What does <i>Das Haus wird gebaut</i> mean?",
      "options": [
       "“The house is being built.”",
       "“The house will build.”",
       "“The house has been built.”",
       "“The house becomes good.”"
      ],
      "answer": 0,
      "explain": "<i>Werden</i> with the participle forms the passive."
     },
     {
      "prompt": "How is the doer named in a German passive?",
      "options": [
       "With <i>durch</i> and the genitive",
       "With the ablative",
       "With <i>mit</i> and the accusative",
       "With <i>von</i> and the dative"
      ],
      "answer": 3,
      "explain": "<i>Von</i> with the dative names the doer: <i>von dem Architekten</i>."
     },
     {
      "prompt": "What does <i>Er wird kommen</i> mean?",
      "options": [
       "“He becomes come.”",
       "“He has come.”",
       "“He will come.”",
       "“He is being come.”"
      ],
      "answer": 2,
      "explain": "<i>Werden</i> with the infinitive forms the future."
     }
    ]
   }
  },
  {
   "id": "accidents-21",
   "title": "Reflexive verbs",
   "body": "<p>A <strong>reflexive</strong> verb is used with a pronoun that refers back to the subject: <i>ich wasche mich</i> (“I wash myself”), <i>er wäscht sich</i> (“he washes himself”). Some verbs are always reflexive, such as <i>sich freuen</i> (“to be glad”). A reflexive verb can also have a sense close to the passive or to the Greek middle, as in <i>das Buch liest sich leicht</i> (“the book reads easily”). German forms the Perfekt of reflexive verbs with <i>haben</i>: <i>er hat sich gewaschen</i> (“he has washed himself”).</p>"
  },
  {
   "id": "accidents-22",
   "title": "The Konjunktiv I and the imperative",
   "body": "<p>Beside the Konjunktiv II, German has the <strong>Konjunktiv I</strong>, formed from the stem of the infinitive: <i>er sei</i>, <i>er habe</i>, <i>er komme</i>. Its chief use is in reported speech in written German: <i>er sagt, er sei krank</i> (“he says that he is ill”). The imperative gives a command: <i>komm!</i> (to one person), <i>kommt!</i> (to several), and <i>kommen Sie!</i> (in formal address), all meaning “come!” A strong verb that changes <i>e</i> to <i>i</i> or <i>ie</i> in the present also changes it in the imperative singular: <i>gib!</i> (“give!”), <i>sprich!</i> (“speak!”), <i>lies!</i> (“read!”).</p>",
   "qp": {
    "id": "q-de-acc-k1",
    "variants": [
     {
      "prompt": "What is the Konjunktiv I of <i>können</i>, third person singular?",
      "options": [
       "<i>kann</i>",
       "<i>könnte</i>",
       "<i>konnte</i>",
       "<i>könne</i>"
      ],
      "answer": 3,
      "explain": "The stem of the infinitive with <i>-e</i>: <i>er könne</i>."
     },
     {
      "prompt": "What is the imperative singular of <i>nehmen</i>?",
      "options": [
       "<i>nimm!</i>",
       "<i>nehm!</i>",
       "<i>nehme!</i>",
       "<i>nimmt!</i>"
      ],
      "answer": 0,
      "explain": "A strong verb that changes <i>e</i> to <i>i</i> also changes it in the imperative singular."
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
      "explain": "<i>Er sagt, er sei krank</i>: the Konjunktiv I reports speech."
     }
    ]
   }
  }
 ]
};
