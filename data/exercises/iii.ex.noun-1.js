/* The Noun I: Kinds, Quality, and Comparison [iii.ex.noun-1]  Exercise set opened from the Exercise button of iii.noun-1. Written; 39 items in 2 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the kind, quality, or degree (choose). Level II: produce the form (type). New items at both levels quote the King James Bible, Austen, Caesar, Cicero, and Vergil.
   Level I (19), Level II (20). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level I, mastery at Level II (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.noun-1'] = {
 "id": "iii.ex.noun-1",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "The Noun I: Kinds, Quality, and Comparison",
 "openedFrom": "iii.noun-1 (Exercise button)",
 "covers": [
  {
   "deck": "iii.noun-1",
   "cards": [
    "quality",
    "roman-names",
    "common-kinds",
    "adjective",
    "substantive-use",
    "comparison",
    "forming",
    "irregular",
    "which-compared"
   ]
  }
 ],
 "skill": "Identify the kind and quality of a noun (proper or common, substantive or adjective) and give the degrees of comparison, including the irregular ones.",
 "types": [
  "mc",
  "form"
 ],
 "pool": 39,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C.",
 "sets": {
  "A": 16,
  "B": 15,
  "C": 8
 },
 "levels": {
  "pass": 1,
  "top": 2,
  "names": {
   "1": "Recognize the kind or quality of a noun and the degree of an adjective: choose the answer.",
   "2": "Produce the name, the form, or the degree asked for: type it."
  },
  "counts": {
   "1": 19,
   "2": 20
  }
 },
 "limit": "Only what III.5 teaches; sentences use verbs only as glossed words.",
 "instr": "Choose the answer or type the form. Macrons are not tested in typed Latin answers.",
 "items": [
  {
   "id": "nn1-A01",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Which of these nouns is proper?",
   "options": [
    "“Carthage”",
    "“harbor”",
    "“amphitheater”",
    "“city”"
   ],
   "answer": 0,
   "explain": "“Carthage” names one particular city, so it is a proper noun. “Harbor,” “amphitheater,” and “city” each name any member of a kind, so they are common nouns.",
   "level": 1
  },
  {
   "id": "nn1-A02",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "In the Roman name Gaius Julius Caesar, which name is the cognomen, the name that distinguished a branch of the clan? Type it.",
   "accept": [
    "Caesar"
   ],
   "explain": "The praenomen is Gaius, the personal name; the nomen is Julius, the name of the clan; and the cognomen is Caesar, the name of a branch of the Julian clan.",
   "level": 2
  },
  {
   "id": "nn1-A03",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "What kind of common noun is “generosity”?",
   "options": [
    "A concrete noun",
    "A collective noun",
    "An abstract noun",
    "A proper noun"
   ],
   "answer": 2,
   "explain": "“Generosity” names something that cannot be seen or touched, a quality, so it is an abstract noun; in Donatus’s terms it is <i>incorporale</i> (“bodiless”).",
   "level": 1
  },
  {
   "id": "nn1-A04",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Latin <i>immēnsus</i> (“vast”) agrees with its noun in gender, number, and case. <i>Mare</i> (“sea”) is neuter, singular, and nominative. Type the form of <i>immēnsus</i> that goes with it: ___ <i>mare</i>.",
   "accept": [
    "immēnsum"
   ],
   "macrons": false,
   "explain": "A neuter adjective of this kind ends in <i>-um</i> in the nominative singular, so the phrase is <i>immēnsum mare</i> (“the vast sea”).",
   "level": 2
  },
  {
   "id": "nn1-A05",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "In “The young often teach the old,” how is “young” used?",
   "options": [
    "As a noun, meaning young people",
    "As an adjective describing the adverb “often”",
    "As a noun used to describe another noun",
    "As a proper noun naming a particular group"
   ],
   "answer": 0,
   "explain": "“The young” stands as the subject and means young people, so the adjective is used substantively, that is, as a noun; the noun it would describe (“people”) is understood. The same is true of “the old.”",
   "level": 1
  },
  {
   "id": "nn1-A06",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Latin <i>levis</i> (“light”) has the comparative <i>levior</i> (“lighter”). Type the superlative.",
   "accept": [
    "levissimus"
   ],
   "macrons": false,
   "explain": "The superlative is usually formed by adding <i>-issimus</i> to the stem: <i>levis</i>, <i>levior</i>, <i>levissimus</i> (“lightest” or “very light”).",
   "level": 2
  },
  {
   "id": "nn1-A07",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "How is the superlative of Latin <i>miser</i> (“wretched”) formed?",
   "options": [
    "<i>Miserissimus</i>, with the usual ending <i>-issimus</i>",
    "<i>Maximē miser</i>, with the adverb <i>maximē</i>",
    "<i>Miserrimus</i>, with <i>-rimus</i>",
    "<i>Miserior</i>, which serves as both degrees"
   ],
   "answer": 2,
   "explain": "Adjectives that end in <i>-er</i> form the superlative in <i>-rimus</i>, so the superlative is <i>miserrimus</i>. <i>Miserior</i> is the comparative, and <i>maximē</i> is used chiefly with adjectives in <i>-us</i> after a vowel.",
   "level": 1
  },
  {
   "id": "nn1-A08",
   "set": "A",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“Well,” as an adjective in “She is well today,” is compared irregularly. Type its comparative.",
   "accept": [
    "better"
   ],
   "explain": "“Well” in this sense is compared “well,” “better,” “best,” with forms taken from a different word; it does not form “weller.”",
   "level": 2
  },
  {
   "id": "nn1-B01",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "In the Roman name Marcus Tullius Cicero, which name is the nomen, the name of the clan? Type it.",
   "accept": [
    "Tullius"
   ],
   "explain": "The praenomen is Marcus, the personal name; the nomen is Tullius, the name of the clan (the <i>gēns Tullia</i>); and the cognomen is Cicero.",
   "level": 2
  },
  {
   "id": "nn1-B02",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Which of these nouns is collective?",
   "options": [
    "“cow”",
    "“meadow”",
    "“herd”",
    "“kindness”"
   ],
   "answer": 2,
   "explain": "“Herd” is singular in form but names many animals, so it is a collective noun. “Cow” and “meadow” are concrete nouns that name single bodies, and “kindness” is abstract.",
   "level": 1
  },
  {
   "id": "nn1-B03",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Latin <i>plēnus</i> (“full”) agrees with its noun in gender, number, and case. <i>Urna</i> (“jar”) is feminine, singular, and nominative. Type the form of <i>plēnus</i> that goes with it: <i>urna</i> ___.",
   "accept": [
    "plēna"
   ],
   "macrons": false,
   "explain": "A feminine adjective of this kind ends in <i>-a</i> in the nominative singular, so the phrase is <i>urna plēna</i> (“a full jar”).",
   "level": 2
  },
  {
   "id": "nn1-B04",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "In “a silk scarf,” how is “silk” used?",
   "options": [
    "As a noun that describes a noun",
    "As an adjective used substantively",
    "As a verb describing the scarf",
    "As an abstract noun naming a quality"
   ],
   "answer": 0,
   "explain": "“Silk” is a noun, but here it describes “scarf” and tells what sort of scarf is meant, as an adjective would. English uses nouns in this way very freely; Latin would usually use an adjective or a genitive.",
   "level": 1
  },
  {
   "id": "nn1-B05",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Type the comparative of the English adjective “calm.”",
   "accept": [
    "calmer"
   ],
   "explain": "Short English adjectives form the comparative by adding “-er”: “calm,” “calmer,” “calmest.”",
   "level": 2
  },
  {
   "id": "nn1-B06",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Which of these English adjectives usually forms its degrees with “more” and “most”?",
   "options": [
    "“bright”",
    "“cold”",
    "“beautiful”",
    "“young”"
   ],
   "answer": 2,
   "explain": "Longer adjectives usually form the degrees with “more” and “most”: “more beautiful,” “most beautiful.” The short adjectives “bright,” “cold,” and “young” add “-er” and “-est.”",
   "level": 1
  },
  {
   "id": "nn1-B07",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“Ill,” in the sense “bad” (as in “ill luck”), is compared irregularly. Type its comparative.",
   "accept": [
    "worse"
   ],
   "explain": "“Ill” in this sense is compared “ill,” “worse,” “worst,” with forms taken from a different word, as “bad” is.",
   "level": 2
  },
  {
   "id": "nn1-B08",
   "set": "B",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Which of these words admits comparison?",
   "options": [
    "“brave”",
    "“triangular”",
    "“annual”",
    "“wheat”"
   ],
   "answer": 0,
   "explain": "One person can be braver than another, so “brave” admits comparison. A figure is triangular or it is not, and something is annual or it is not, so these adjectives do not admit more or less; and “wheat” is a substantive, which is not compared.",
   "level": 1
  },
  {
   "id": "nn1-C01",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "What kind of noun is Latin <i>senātus</i> (“senate”), which is singular in form but names many people?",
   "options": [
    "An abstract noun",
    "A proper noun",
    "A collective noun",
    "An adjective used as a noun"
   ],
   "answer": 2,
   "explain": "<i>Senātus</i> is singular in form but plural in meaning, as Donatus says of <i>populus</i>, so it is a collective noun.",
   "level": 1
  },
  {
   "id": "nn1-C02",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Latin <i>validus</i> (“strong”) agrees with its noun in gender, number, and case. <i>Equī</i> (“horses”) is masculine, plural, and nominative. Type the form of <i>validus</i> that goes with it: <i>equī</i> ___.",
   "accept": [
    "validī"
   ],
   "macrons": false,
   "explain": "A masculine adjective of this kind ends in <i>-ī</i> in the nominative plural, so the phrase is <i>equī validī</i> (“strong horses”).",
   "level": 2
  },
  {
   "id": "nn1-C03",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "In Latin <i>Aegrī medicum exspectant</i> (“The sick are waiting for the doctor”), how is <i>aegrī</i> used?",
   "options": [
    "As an adjective used substantively",
    "As a noun used to describe another noun",
    "As a proper noun",
    "As an adjective describing <i>medicum</i>"
   ],
   "answer": 0,
   "explain": "<i>Aegrī</i> (“sick”) stands as the subject and means sick people; the noun it would describe is understood. So the adjective is used substantively. It cannot describe <i>medicum</i>, because <i>aegrī</i> is nominative plural and <i>medicum</i> is accusative singular.",
   "level": 1
  },
  {
   "id": "nn1-C04",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Latin <i>sevērissimus</i> (“most strict”) is a superlative. Type its positive.",
   "accept": [
    "sevērus"
   ],
   "macrons": false,
   "explain": "The superlative adds <i>-issimus</i> to the stem <i>sevēr-</i>, so the positive is <i>sevērus</i> (“strict”), and the comparative is <i>sevērior</i>.",
   "level": 2
  },
  {
   "id": "nn1-C05",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Latin <i>dubius</i> (“doubtful”) ends in <i>-us</i> after a vowel. How is its comparative usually formed?",
   "options": [
    "With the ending: <i>dubior</i>",
    "With the ending: <i>dubiissimus</i>",
    "With the adverb: <i>magis dubius</i>",
    "Irregularly, from another word"
   ],
   "answer": 2,
   "explain": "Adjectives ending in <i>-us</i> after a vowel usually form the degrees with the adverbs <i>magis</i> and <i>maximē</i>, as English longer adjectives use “more” and “most.” So the comparative is <i>magis dubius</i>.",
   "level": 1
  },
  {
   "id": "nn1-C06",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“Many” is compared irregularly. Type its superlative.",
   "accept": [
    "most"
   ],
   "explain": "“Many” is compared “many,” “more,” “most,” with forms that are not made from “many” itself.",
   "level": 2
  },
  {
   "id": "nn1-C07",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "Why can Latin <i>equus</i> (“horse”) not be compared?",
   "options": [
    "No horse is more a horse than another",
    "It is a masculine noun",
    "It names a body that can be seen",
    "It has no comparative formed with the ending <i>-ior</i>"
   ],
   "answer": 0,
   "explain": "Only nouns that signify a quality or a quantity are compared, because only these signify something that can be more or less. <i>Equus</i> is a substantive, and one horse is not more a horse than another. Gender and being a body have nothing to do with it.",
   "level": 1
  },
  {
   "id": "nn1-C08",
   "set": "C",
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "Type the proper noun in this sentence: “The fleet sailed from Brundisium at dawn.”",
   "accept": [
    "Brundisium"
   ],
   "explain": "“Brundisium” names one particular port, so it is a proper noun. “Fleet” is a collective noun and “dawn” a common noun, since each names any member of a kind.",
   "level": 2
  },
  {
   "id": "nn1-L1-01",
   "set": "A",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.” (Austen, Pride and Prejudice, chapter 1.) What kind of common noun is “truth”?",
   "options": [
    "A collective noun",
    "An abstract noun",
    "A proper noun",
    "A noun used as an adjective"
   ],
   "answer": 1,
   "explain": "“Truth” names a quality, not a thing that can be seen or touched, so it is an abstract noun, as “generosity” is.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "nn1-L1-02",
   "set": "B",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "<i>Gallia est omnis dīvīsa in partēs trēs</i> (“All Gaul is divided into three parts”). (Caesar, De Bello Gallico, Book I, chapter 1.) Which noun in the sentence is proper?",
   "options": [
    "<i>partēs</i>",
    "<i>omnis</i>",
    "<i>Gallia</i>",
    "<i>trēs</i>"
   ],
   "answer": 2,
   "explain": "<i>Gallia</i> is the name of one country, so it is a proper noun. <i>Partēs</i> is a common noun; <i>omnis</i> and <i>trēs</i> are adjectives that describe nouns.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "nn1-L1-03",
   "set": "A",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“And suddenly there was with the angel a multitude of the heavenly host praising God, and saying,” (Luke 2:13, King James Version.) What kind of noun is “multitude”?",
   "options": [
    "An abstract noun",
    "A proper noun",
    "A collective noun",
    "A noun used as an adjective"
   ],
   "answer": 2,
   "explain": "“Multitude” is singular in form but names many beings together, so it is a collective noun, as “herd” is.",
   "source": "Luke 2:13, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L1-04",
   "set": "B",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“Blessed are the meek: for they shall inherit the earth.” (Matthew 5:5, King James Version.) How is “meek” used?",
   "options": [
    "As an adjective describing “earth”",
    "As a noun, meaning meek people",
    "As a verb",
    "As a proper noun"
   ],
   "answer": 1,
   "explain": "“Meek” is an adjective by kind, but here it stands with “the” and no noun, and it names the people who are meek. It is used as a noun, as “the young” is in “The young often teach the old.”",
   "source": "Matthew 5:5, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L1-05",
   "set": "A",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“For to him that is joined to all the living there is hope: for a living dog is better than a dead lion.” (Ecclesiastes 9:4, King James Version.) “Better” is the comparative of which adjective?",
   "options": [
    "“good”",
    "“best”",
    "“much”",
    "“bad”"
   ],
   "answer": 0,
   "explain": "“Good” is compared irregularly: “good,” “better,” “best.” The comparative here compares the living dog with the dead lion.",
   "source": "Ecclesiastes 9:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L1-06",
   "set": "B",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“Oh, she is the most beautiful creature I ever beheld!” (Austen, Pride and Prejudice, chapter 3.) In what degree is “most beautiful,” and how is it formed?",
   "options": [
    "Comparative, formed with “most”",
    "Superlative, formed with the ending “-est”",
    "Superlative, formed with “most”",
    "Positive, with “most” as an adverb of time"
   ],
   "answer": 2,
   "explain": "“Most beautiful” sets one above all others, so it is the superlative. “Beautiful” is a long adjective, so it forms its degrees with “more” and “most,” not with “-er” and “-est.”",
   "source": "Jane Austen, Pride and Prejudice, chapter 3; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "nn1-L1-07",
   "set": "A",
   "level": 1,
   "deck": "iii.noun-1",
   "type": "mc",
   "prompt": "“Pride goeth before destruction, and an haughty spirit before a fall.” (Proverbs 16:18, King James Version.) How is “haughty” used?",
   "options": [
    "As an adjective, describing “spirit”",
    "As a noun standing alone",
    "As an abstract noun",
    "As a collective noun"
   ],
   "answer": 0,
   "explain": "“Haughty” names a quality and is joined to the noun “spirit,” so it is an adjective (in Donatus’s terms, a noun adjective). It does not stand alone.",
   "source": "Proverbs 16:18, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L2-01",
   "set": "A",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?” (Austen, Pride and Prejudice, chapter 1.) Type the proper noun that names a place.",
   "accept": [
    "Netherfield Park",
    "Netherfield"
   ],
   "explain": "“Netherfield Park” is the name of one house and its grounds, so it is a proper noun. “Mr. Bennet” is also proper, but it names a person.",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "nn1-L2-02",
   "set": "B",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "<i>Gallōs ab Aquītānīs Garumna flūmen, ā Belgīs Mātrona et Sēquana dīvidit</i> (“The river Garonne separates the Gauls from the Aquitani; the Marne and the Seine separate them from the Belgae”). (Caesar, De Bello Gallico, Book I, chapter 1.) Type the proper noun that stands in apposition to the common noun <i>flūmen</i>.",
   "accept": [
    "Garumna"
   ],
   "macrons": false,
   "explain": "<i>Garumna</i> names one river; <i>flūmen</i> (“river”) is the common noun that it explains.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "nn1-L2-03",
   "set": "A",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“A living dog is better than a dead lion.” (Ecclesiastes 9:4, King James Version.) “Better” is the comparative of “good.” Type the superlative.",
   "accept": [
    "best"
   ],
   "explain": "“Good” is compared irregularly: “good,” “better,” “best.”",
   "source": "Ecclesiastes 9:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L2-04",
   "set": "B",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“Pride goeth before destruction, and an haughty spirit before a fall.” (Proverbs 16:18, King James Version.) Type the comparative of “haughty.”",
   "accept": [
    "haughtier",
    "more haughty"
   ],
   "explain": "An adjective of two syllables ending in “-y” usually takes “-er”: “haughty,” “haughtier,” “haughtiest.” “More haughty” is also found.",
   "source": "Proverbs 16:18, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L2-05",
   "set": "A",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "“And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.” (Genesis 1:16, King James Version.) The verse gives “great” and “greater.” Type the superlative.",
   "accept": [
    "greatest"
   ],
   "explain": "“Great” is compared regularly: “great,” “greater,” “greatest.”",
   "source": "Genesis 1:16, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "nn1-L2-06",
   "set": "B",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "<i>Arma virumque canō, Troiae quī prīmus ab ōrīs</i> (“Of arms I sing and the man who first from the shores of Troy …”). (Vergil, Aeneid, Book I, line 1.) <i>Prīmus</i> (“first”) is a superlative without a positive. Type its comparative, masculine nominative singular.",
   "accept": [
    "prior"
   ],
   "macrons": false,
   "explain": "The degrees are <i>prior</i> (“former,” “first of two”) and <i>prīmus</i> (“first”); the positive is lacking, and the preposition <i>prae</i> (“before”) stands behind them.",
   "source": "Vergil, Aeneid, Book I, line 1; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "nn1-L2-07",
   "set": "A",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "<i>Hōrum omnium fortissimī sunt Belgae</i> (“Of all these the bravest are the Belgae”). (Caesar, De Bello Gallico, Book I, chapter 1.) Type the positive of <i>fortissimī</i>, masculine nominative singular.",
   "accept": [
    "fortis"
   ],
   "macrons": false,
   "explain": "<i>Fortissimus</i> is the superlative of <i>fortis</i> (“brave”); the comparative is <i>fortior</i>.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "nn1-L2-08",
   "set": "B",
   "level": 2,
   "deck": "iii.noun-1",
   "type": "form",
   "prompt": "<i>nihil hic mūnītissimus habendī senātūs locus</i> (“nothing this most strongly guarded place for holding the senate”). (Cicero, First Oration against Catiline, chapter 1.) Type the positive of <i>mūnītissimus</i>, masculine nominative singular.",
   "accept": [
    "munitus",
    "mūnītus"
   ],
   "macrons": false,
   "explain": "<i>Mūnītissimus</i> is the superlative of <i>mūnītus</i> (“fortified,” “guarded”), formed with <i>-issimus</i>; the comparative is <i>mūnītior</i>.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  }
 ]
};
