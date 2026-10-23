/* Agreement [v.ex.agreement]  Exercise set opened from the Exercise button of v.agreement. Written; 40 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the rules of agreement (choose or sort). Level II: correct or find agreement in short sentences, some from the King James Bible, Caesar, Cicero, and Vergil. Level III: find agreement across long real sentences from the King James Bible, Austen, Milton, Caesar, Cicero, and Vergil.
   Level I (17), Level II (13), Level III (10). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.agreement'] = {
 "id": "v.ex.agreement",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "Agreement",
 "openedFrom": "v.agreement (Exercise button)",
 "covers": [
  {
   "deck": "v.agreement",
   "cards": [
    "what-agreement",
    "adjective-noun",
    "reason",
    "verb-subject",
    "relative",
    "english-hard-cases",
    "sense",
    "authors"
   ]
  }
 ],
 "skill": "Name the kind of agreement; choose the form that agrees, in Latin and English; correct an error of agreement; find the word with which a verb agrees.",
 "types": [
  "sort",
  "mc",
  "transform",
  "identify"
 ],
 "pool": 40,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 16,
  "B": 16,
  "C": 8
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Recognize the rules of agreement: choose or sort.",
   "2": "Find and correct agreement in short sentences.",
   "3": "Follow agreement across long sentences from real authors."
  },
  "counts": {
   "1": 17,
   "2": 13,
   "3": 10
  }
 },
 "limit": "Only what v.agreement teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "ag-A01",
   "set": "A",
   "deck": "v.agreement",
   "type": "sort",
   "prompt": "Sort each phrase by the kind of agreement it shows.",
   "entries": [
    "<i>bona rēgīna</i> (“the good queen”)",
    "<i>fēminae cantant</i> (“the women sing”)",
    "<i>templum quod vīdī</i> (“the temple that I saw”)",
    "“that bridge”",
    "“the bells ring”",
    "“the guest who arrived”"
   ],
   "bins": [
    "Adjective (or demonstrative) and noun",
    "Verb and subject",
    "Relative and antecedent"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "An adjective, and in English a demonstrative, agrees with its noun; a verb agrees with its subject in person and number; a relative pronoun agrees with its antecedent in gender and number. So <i>bona rēgīna</i> and “that bridge” are adjective and noun; <i>fēminae cantant</i> and “the bells ring” are verb and subject; <i>templum quod vīdī</i> and “the guest who arrived” are relative and antecedent.",
   "level": 1
  },
  {
   "id": "ag-A02",
   "set": "A",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Which form of the adjective agrees with Latin <i>puellam</i> (“girl,” accusative singular)?",
   "options": [
    "<i>altam</i>",
    "<i>altus</i>",
    "<i>alta</i>",
    "<i>altum</i>"
   ],
   "answer": 0,
   "explain": "<i>Puellam</i> is feminine, singular, and accusative, so the adjective takes the same three accidents: <i>altam puellam</i>, “the tall girl.”",
   "level": 1
  },
  {
   "id": "ag-A03",
   "set": "A",
   "deck": "v.agreement",
   "type": "transform",
   "prompt": "Rewrite the sentence so that the verb agrees with its subject: “The keys to the cellar is lost.”",
   "accept": [
    "The keys to the cellar are lost."
   ],
   "explain": "The subject is “keys,” which is plural; “to the cellar” tells which keys and does not change the subject. So the verb is “are.”",
   "level": 2
  },
  {
   "id": "ag-A04",
   "set": "A",
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "“The captain of the guards leads the march.” Click the word with which “leads” agrees.",
   "tokens": [
    "The captain",
    "of the guards",
    "leads",
    "the march."
   ],
   "answer": 0,
   "explain": "“Leads” agrees with its subject, “the captain,” which is singular. “Of the guards” is a phrase that tells which captain; it does not become the subject.",
   "level": 2
  },
  {
   "id": "ag-A05",
   "set": "A",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Which of these phrases is correct?",
   "options": [
    "“these kind of tools”",
    "“this kinds of tools”",
    "“these kind of tool”",
    "“this kind of tool”"
   ],
   "answer": 3,
   "explain": "The demonstrative agrees in number with its noun, so the singular “this” goes with the singular “kind,” and “of tool” follows: “this kind of tool.” The plural form is “these kinds of tools.”",
   "level": 1
  },
  {
   "id": "ag-A06",
   "set": "A",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In Latin <i>vīnum dulce est</i> (“the wine is sweet”), why is <i>dulce</i> neuter?",
   "options": [
    "Because it agrees with the subject <i>vīnum</i>",
    "Because <i>est</i> is neuter",
    "Because every predicate adjective is neuter",
    "Because <i>dulce</i> is an adverb"
   ],
   "answer": 0,
   "explain": "A predicate adjective after “to be” agrees with the subject. <i>Vīnum</i> is neuter, singular, and nominative, so <i>dulce</i> is too.",
   "level": 1
  },
  {
   "id": "ag-A07",
   "set": "A",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In Latin <i>rēx cui librum mīsī</i> (“the king to whom I sent the book”), what case is <i>cui</i>, and why?",
   "options": [
    "Nominative, because its antecedent <i>rēx</i> is nominative",
    "Dative, as the indirect object",
    "Accusative, because it follows <i>rēx</i>",
    "Genitive, because it shows possession"
   ],
   "answer": 1,
   "explain": "A relative takes its case from its own clause. There <i>cui</i> is the indirect object of <i>mīsī</i>, so it is dative, although its antecedent <i>rēx</i> is nominative.",
   "level": 1
  },
  {
   "id": "ag-A08",
   "set": "A",
   "deck": "v.agreement",
   "type": "transform",
   "prompt": "Rewrite the sentence with the form of the verb that agrees: “Neither the dog nor the cats was fed.”",
   "accept": [
    "Neither the dog nor the cats were fed."
   ],
   "explain": "With “neither … nor” the verb agrees with the nearer subject, “the cats,” which is plural, so the verb is “were.”",
   "level": 2
  },
  {
   "id": "ag-B01",
   "set": "B",
   "deck": "v.agreement",
   "type": "sort",
   "prompt": "Sort each phrase by the kind of agreement it shows.",
   "entries": [
    "<i>magnum flūmen</i> (“a great river”)",
    "<i>puerī lūdunt</i> (“the boys play”)",
    "<i>urbs quam aedificāvērunt</i> (“the city that they built”)",
    "“those hills”",
    "“the wind howls”",
    "“the poet whose verses we read”"
   ],
   "bins": [
    "Adjective (or demonstrative) and noun",
    "Verb and subject",
    "Relative and antecedent"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "An adjective, and in English a demonstrative, agrees with its noun; a verb agrees with its subject in person and number; a relative pronoun agrees with its antecedent in gender and number. <i>Magnum flūmen</i> and “those hills” are adjective and noun; <i>puerī lūdunt</i> and “the wind howls” are verb and subject; <i>urbs quam aedificāvērunt</i> and “the poet whose verses we read” are relative and antecedent.",
   "level": 1
  },
  {
   "id": "ag-B02",
   "set": "B",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Which form of the adjective agrees with Latin <i>templa</i> (“temples”) as the subject of a sentence?",
   "options": [
    "<i>antīquus</i>",
    "<i>antīqua</i>",
    "<i>antīquum</i>",
    "<i>antīquae</i>"
   ],
   "answer": 1,
   "explain": "<i>Templa</i> is neuter plural nominative, and the neuter plural of first- and second-declension adjectives ends in <i>-a</i>: <i>templa antīqua</i>. The same form is also the feminine singular, but here the noun decides.",
   "level": 1
  },
  {
   "id": "ag-B03",
   "set": "B",
   "deck": "v.agreement",
   "type": "transform",
   "prompt": "Rewrite the sentence so that the verb agrees with its subject: “Each of the lamps were lit.”",
   "accept": [
    "Each of the lamps was lit."
   ],
   "explain": "“Each,” used as the subject, is singular; “of the lamps” does not change it. So the verb is “was.”",
   "level": 2
  },
  {
   "id": "ag-B04",
   "set": "B",
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "“The letters from my brother arrive every week.” Click the word with which “arrive” agrees.",
   "tokens": [
    "The letters",
    "from my brother",
    "arrive",
    "every week."
   ],
   "answer": 0,
   "explain": "“Arrive” is plural because its subject, “the letters,” is plural. “From my brother” tells which letters; it is not the subject.",
   "level": 2
  },
  {
   "id": "ag-B05",
   "set": "B",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In Latin <i>Mārcus et Gāius veniunt</i> (“Marcus and Gaius come”), why is the verb plural?",
   "options": [
    "Because two subjects joined by <i>et</i> are plural",
    "Because <i>Gāius</i> is plural",
    "Because the nearer subject decides",
    "Because Latin verbs are always plural after a name"
   ],
   "answer": 0,
   "explain": "Two subjects joined by “and” (<i>et</i>) make a compound subject, which is plural, so the verb is the third person plural <i>veniunt</i>.",
   "level": 1
  },
  {
   "id": "ag-B06",
   "set": "B",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "“The audience were on their feet” has a plural verb with a singular noun. What is this agreement called?",
   "options": [
    "A solecism",
    "Agreement according to the sense",
    "Agreement with the nearer subject",
    "Agreement in case"
   ],
   "answer": 1,
   "explain": "A collective noun names many, and when its members are thought of separately it may take a plural verb. This is agreement according to the sense (<i>synesis</i>), and it is not a solecism when good usage establishes it.",
   "level": 1
  },
  {
   "id": "ag-B07",
   "set": "B",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In formal usage, which word completes “It was ___ who rang the bell”?",
   "options": [
    "“her”",
    "“hers”",
    "“she”",
    "“herself”"
   ],
   "answer": 2,
   "explain": "After the verb “to be,” a predicate pronoun takes the subjective case in formal usage, as in “It is I,” so the form is “she.” Ordinary speech often says “It was her.”",
   "level": 1
  },
  {
   "id": "ag-B08",
   "set": "B",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Why do the adjective and its noun agree, according to Thomas of Erfurt?",
   "options": [
    "Because the endings of the two words must sound alike",
    "Because custom requires it, and no reason can be given",
    "Because the adjective comes after the noun",
    "Because it signifies as belonging to its noun"
   ],
   "answer": 3,
   "explain": "The adjective signifies by the mode of adhering to another, so it signifies its quality as belonging to that thing and no other, and the accidents they share must conform. The endings need not sound alike, as <i>nauta bonus</i> shows.",
   "level": 1
  },
  {
   "id": "ag-C01",
   "set": "C",
   "deck": "v.agreement",
   "type": "sort",
   "prompt": "Sort each phrase by the kind of agreement it shows.",
   "entries": [
    "<i>nox longa</i> (“a long night”)",
    "<i>vōs rīdētis</i> (“you laugh”)",
    "<i>dōnum quod accēpī</i> (“the gift that I received”)",
    "“these coins”",
    "“the river runs”",
    "“the friend whom we visited”"
   ],
   "bins": [
    "Adjective (or demonstrative) and noun",
    "Verb and subject",
    "Relative and antecedent"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "An adjective, and in English a demonstrative, agrees with its noun; a verb agrees with its subject in person and number; a relative pronoun agrees with its antecedent in gender and number. <i>Nox longa</i> and “these coins” are adjective and noun; <i>vōs rīdētis</i> and “the river runs” are verb and subject; <i>dōnum quod accēpī</i> and “the friend whom we visited” are relative and antecedent.",
   "level": 1
  },
  {
   "id": "ag-C02",
   "set": "C",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Which form of the adjective agrees with Latin <i>poēta</i> (“poet”) as the subject of a sentence?",
   "options": [
    "<i>nōta</i>",
    "<i>nōtum</i>",
    "<i>nōtus</i>",
    "<i>nōtī</i>"
   ],
   "answer": 2,
   "explain": "<i>Poēta</i> ends in <i>-a</i> but names a man, so it is masculine, and the adjective takes the masculine nominative singular: <i>poēta nōtus</i>, “a well-known poet.”",
   "level": 1
  },
  {
   "id": "ag-C03",
   "set": "C",
   "deck": "v.agreement",
   "type": "transform",
   "prompt": "Rewrite the sentence so that the verb agrees with its real subject: “There is two bridges over the river.”",
   "accept": [
    "There are two bridges over the river."
   ],
   "explain": "After “there,” the verb agrees with the real subject, which follows it: “two bridges,” which is plural. So the verb is “are.”",
   "level": 2
  },
  {
   "id": "ag-C04",
   "set": "C",
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "“The sound of the bells carries far.” Click the word with which “carries” agrees.",
   "tokens": [
    "The sound",
    "of the bells",
    "carries",
    "far."
   ],
   "answer": 0,
   "explain": "The subject is “the sound,” which is singular, so the verb is “carries.” “Of the bells” tells which sound and does not make the subject plural.",
   "level": 2
  },
  {
   "id": "ag-C05",
   "set": "C",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "Which of these sentences is correct?",
   "options": [
    "“Either the oars or the sail are broken”",
    "“Either the oars or the sail is broken”",
    "“Either the oar or the sails is broken”",
    "“Either the oar or the sails has broken”"
   ],
   "answer": 1,
   "explain": "With “either … or” the verb agrees with the nearer subject. In the correct sentence the nearer subject is “the sail,” which is singular, so the verb is “is.”",
   "level": 1
  },
  {
   "id": "ag-C06",
   "set": "C",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In Latin <i>servī quōs dominus vocāvit</i> (“the slaves whom the master called”), why is <i>quōs</i> masculine plural?",
   "options": [
    "Because <i>dominus</i> is masculine",
    "Because it is the object of <i>vocāvit</i>",
    "Because its antecedent <i>servī</i> is",
    "Because relatives are always plural"
   ],
   "answer": 2,
   "explain": "A relative takes the gender and number of its antecedent, <i>servī</i>, which is masculine plural. Its case, accusative, comes from its own clause, where it is the object of <i>vocāvit</i>.",
   "level": 1
  },
  {
   "id": "ag-C07",
   "set": "C",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "In which accident does an English adjective agree with its noun?",
   "options": [
    "In number, as Latin adjectives do",
    "In gender, in nouns that name persons",
    "In case, as the pronouns do",
    "Only in the demonstratives"
   ],
   "answer": 3,
   "explain": "English adjectives do not change their form: “a small cottage,” “small cottages.” Only the demonstratives agree, in number: “this book,” “these books.”",
   "level": 1
  },
  {
   "id": "ag-C08",
   "set": "C",
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "“The team are changing into their boots.” Why is the plural verb not a solecism in British usage?",
   "options": [
    "Because the verb follows the sense",
    "Because “team” is plural in form",
    "Because the nearer subject is plural",
    "Because British usage has no agreement"
   ],
   "answer": 0,
   "explain": "“Team” is a collective noun, singular in form but naming many. When the members are thought of separately, good usage allows the verb to agree with the sense; American usage prefers “The team is.”",
   "level": 1
  },
  {
   "id": "ag-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Psalm 23:4, King James Version.) Click the word with which the verb “comfort” agrees.",
   "explain": "The subject of “comfort” is “they,” which repeats “thy rod and thy staff”; a plural subject takes the plural verb.",
   "tokens": [
    "thy",
    "rod",
    "and",
    "thy",
    "staff",
    "they",
    "comfort",
    "me."
   ],
   "answer": 5,
   "source": "Psalm 23:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click every word that agrees with <i>Gallia</i>.",
   "explain": "<i>Omnis</i> and <i>divisa</i> are feminine, singular, nominative, like <i>Gallia</i>: an adjective and a participle agree with their noun in gender, number, and case.",
   "tokens": [
    "Gallia",
    "est",
    "omnis",
    "divisa",
    "in",
    "partes",
    "tres,"
   ],
   "answer": [
    2,
    3
   ],
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "ag-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) Click the word with which <i>fortissimi</i> agrees.",
   "explain": "<i>Fortissimi</i> is masculine, plural, nominative, a predicate adjective agreeing with the subject <i>Belgae</i>. <i>Horum omnium</i> is a genitive of the whole.",
   "tokens": [
    "Horum",
    "omnium",
    "fortissimi",
    "sunt",
    "Belgae,"
   ],
   "answer": 4,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "ag-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.11.) Click the word with which <i>caelestibus</i> agrees.",
   "explain": "<i>Caelestibus</i> is dative plural like <i>animis</i>, “in heavenly minds.” <i>Tantae</i> (with <i>-ne</i>) agrees with <i>irae</i>.",
   "tokens": [
    "Tantaene",
    "animis",
    "caelestibus",
    "irae?"
   ],
   "answer": 1,
   "source": "Vergil, Aeneid, Book I, line 11; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "ag-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.2.) Click the word with which <i>intellegit</i> agrees in number and person.",
   "explain": "<i>Intellegit</i> is third person singular, agreeing with its subject <i>senatus</i>; <i>haec</i> is its object.",
   "tokens": [
    "Senatus",
    "haec",
    "intellegit."
   ],
   "answer": 0,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "ag-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Matthew 6:9, King James Version.) The verb “art” is second person because its subject “which” stands for one who is spoken to. Click that antecedent.",
   "explain": "A relative pronoun takes the person and number of its antecedent, and the verb follows. “Father” is addressed, so “which art,” as in “thou art.”",
   "tokens": [
    "Our",
    "Father",
    "which",
    "art",
    "in",
    "heaven,",
    "Hallowed",
    "be",
    "thy",
    "name."
   ],
   "answer": 1,
   "source": "Matthew 6:9, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-01",
   "set": "A",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Genesis 1:2, King James Version.) Click the word with which “moved” agrees.",
   "explain": "The subject is “the Spirit”; “of God” is a phrase that depends on it. The verb agrees with the subject, not with the nearer noun.",
   "tokens": [
    "And",
    "the",
    "earth",
    "was",
    "without",
    "form,",
    "and",
    "void;",
    "and",
    "darkness",
    "was",
    "upon",
    "the",
    "face",
    "of",
    "the",
    "deep.",
    "And",
    "the",
    "Spirit",
    "of",
    "God",
    "moved",
    "upon",
    "the",
    "face",
    "of",
    "the",
    "waters."
   ],
   "answer": 19,
   "source": "Genesis 1:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-02",
   "set": "B",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Ecclesiastes 1:2, King James Version.) Click the word with which “saith” agrees.",
   "explain": "The verb comes before its subject here. “Saith” is third person singular, agreeing with “the Preacher.”",
   "tokens": [
    "Vanity",
    "of",
    "vanities,",
    "saith",
    "the",
    "Preacher,",
    "vanity",
    "of",
    "vanities;",
    "all",
    "is",
    "vanity."
   ],
   "answer": 5,
   "source": "Ecclesiastes 1:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-03",
   "set": "A",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Jane Austen, <i>Pride and Prejudice</i>, chapter 1. The British spelling is Austen’s.) Click the subject with which the first “is” agrees.",
   "explain": "The long opening clause depends on what follows; the main clause is “this truth is so well fixed,” so “is” agrees with “truth.”",
   "tokens": [
    "However",
    "little",
    "known",
    "the",
    "feelings",
    "or",
    "views",
    "of",
    "such",
    "a",
    "man",
    "may",
    "be",
    "on",
    "his",
    "first",
    "entering",
    "a",
    "neighbourhood,",
    "this",
    "truth",
    "is",
    "so",
    "well",
    "fixed",
    "in",
    "the",
    "minds",
    "of",
    "the",
    "surrounding",
    "families,",
    "that",
    "he",
    "is",
    "considered",
    "as",
    "the",
    "rightful",
    "property",
    "of",
    "some",
    "one",
    "or",
    "other",
    "of",
    "their",
    "daughters."
   ],
   "answer": 20,
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "ag-L3-04",
   "set": "B",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Milton, <i>Paradise Lost</i> I.1 to 6.) Click the word with which “Brought” agrees.",
   "explain": "“Brought” has the subject “taste” in the clause “whose mortal taste brought death”; “tree” is the antecedent of “whose,” not the subject.",
   "tokens": [
    "Of",
    "Man’s",
    "first",
    "disobedience,",
    "and",
    "the",
    "fruit",
    "Of",
    "that",
    "forbidden",
    "tree",
    "whose",
    "mortal",
    "taste",
    "Brought",
    "death",
    "into",
    "the",
    "World,",
    "and",
    "all",
    "our",
    "woe,",
    "With",
    "loss",
    "of",
    "Eden,",
    "till",
    "one",
    "greater",
    "Man",
    "Restore",
    "us,",
    "and",
    "regain",
    "the",
    "blissful",
    "seat,",
    "Sing,",
    "Heavenly",
    "Muse,"
   ],
   "answer": 13,
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "ag-L3-05",
   "set": "A",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Luke 2:8, King James Version.) Click the subject with which “were” agrees.",
   "explain": "“There” only fills the place before the verb; the subject “shepherds” comes after it, and it is plural, so “were.”",
   "tokens": [
    "And",
    "there",
    "were",
    "in",
    "the",
    "same",
    "country",
    "shepherds",
    "abiding",
    "in",
    "the",
    "field,",
    "keeping",
    "watch",
    "over",
    "their",
    "flock",
    "by",
    "night."
   ],
   "answer": 7,
   "source": "Luke 2:8, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-06",
   "set": "B",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Psalm 19:1, King James Version.) Click the word with which “sheweth” agrees.",
   "explain": "“Sheweth” is the older third person singular, agreeing with “the firmament.” In the first member the plural “heavens” takes “declare.”",
   "tokens": [
    "The",
    "heavens",
    "declare",
    "the",
    "glory",
    "of",
    "God;",
    "and",
    "the",
    "firmament",
    "sheweth",
    "his",
    "handywork."
   ],
   "answer": 9,
   "source": "Psalm 19:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-07",
   "set": "A",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Psalm 1:1, King James Version.) “Sitteth” is singular because its subject “that” stands for a singular noun. Click that antecedent.",
   "explain": "“That” stands for “the man,” so its three verbs, “walketh,” “standeth,” and “sitteth,” are third person singular.",
   "tokens": [
    "Blessed",
    "is",
    "the",
    "man",
    "that",
    "walketh",
    "not",
    "in",
    "the",
    "counsel",
    "of",
    "the",
    "ungodly,",
    "nor",
    "standeth",
    "in",
    "the",
    "way",
    "of",
    "sinners,",
    "nor",
    "sitteth",
    "in",
    "the",
    "seat",
    "of",
    "the",
    "scornful."
   ],
   "answer": 3,
   "source": "Psalm 1:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ag-L3-08",
   "set": "B",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.1 to 3.) Click the word with which <i>profugus</i> agrees.",
   "explain": "<i>Profugus</i> is masculine singular nominative, agreeing with <i>qui</i>, the subject of <i>venit</i>; <i>qui</i> takes its gender and number from <i>virum</i>.",
   "tokens": [
    "Arma",
    "virumque",
    "cano,",
    "Troiae",
    "qui",
    "primus",
    "ab",
    "oris",
    "Italiam,",
    "fato",
    "profugus,",
    "Laviniaque",
    "venit",
    "litora,"
   ],
   "answer": 4,
   "source": "Vergil, Aeneid, Book I, lines 1 to 3; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "ag-L3-09",
   "set": "A",
   "level": 3,
   "deck": "v.agreement",
   "type": "identify",
   "prompt": "(Caesar, <i>De Bello Gallico</i> I.1.) <i>Absunt</i> has no subject written in its own clause. Click the word it agrees with.",
   "explain": "<i>Absunt</i> is third person plural; its understood subject is the <i>Belgae</i> of the main clause.",
   "tokens": [
    "Horum",
    "omnium",
    "fortissimi",
    "sunt",
    "Belgae,",
    "propterea",
    "quod",
    "a",
    "cultu",
    "atque",
    "humanitate",
    "provinciae",
    "longissime",
    "absunt,"
   ],
   "answer": 4,
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "ag-L3-10",
   "set": "B",
   "level": 3,
   "deck": "v.agreement",
   "type": "mc",
   "prompt": "<i>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus locus, nihil horum ora voltusque moverunt?</i> (Cicero, <i>In Catilinam</i> I.1.) Why is <i>moverunt</i> plural?",
   "options": [
    "It has many subjects: <i>praesidium</i>, <i>vigiliae</i>, <i>timor</i>, <i>concursus</i>, <i>locus</i>, <i>ora</i>, and <i>voltus</i>",
    "It agrees with <i>te</i>",
    "It agrees only with <i>vigiliae</i>",
    "It agrees with <i>nihil</i>"
   ],
   "answer": 0,
   "explain": "Many subjects together take a plural verb, and Cicero holds the one verb back until all are named. <i>Te</i> is the object.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  }
 ]
};
