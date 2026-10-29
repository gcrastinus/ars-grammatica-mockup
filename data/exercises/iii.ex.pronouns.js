/* Pronouns [iii.ex.pronouns]  Exercise set opened from the Exercise button of iii.pronoun. Written; 42 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the kind and accidents of a pronoun (choose). Level II: name the person, the antecedent, or the right form (type). Level III: pronouns in real sentences from the King James Bible, Milton, Bunyan, Caesar, Cicero, and Vergil.
   Level I (15), Level II (15), Level III (12). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.pronouns'] = {
 "id": "iii.ex.pronouns",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "Pronouns",
 "openedFrom": "iii.pronoun (Exercise button)",
 "covers": [
  {
   "deck": "iii.pronoun",
   "cards": [
    "quality",
    "person",
    "personal",
    "third-person",
    "demonstratives",
    "relative",
    "interrogative-indefinite",
    "reflexive-possessive",
    "clear-reference"
   ]
  }
 ],
 "skill": "Give the accidents of a pronoun (quality, gender, number, figure, person, case), choose the right form, and find what it refers to.",
 "types": [
  "mc",
  "form"
 ],
 "pool": 42,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 16,
  "B": 16,
  "C": 10
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Recognize the kind and the accidents of a pronoun: choose the answer.",
   "2": "Name the person or the antecedent, or supply the right form: type it.",
   "3": "Find the accidents and the antecedents of pronouns in real sentences."
  },
  "counts": {
   "1": 15,
   "2": 15,
   "3": 12
  }
 },
 "limit": "The pronoun’s accidents, with noun accidents as already taught; no verb forms beyond glossed words.",
 "instr": "Choose the answer or type the word. Macrons are not tested in typed Latin answers.",
 "items": [
  {
   "id": "prn-A01",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "Which of these pronouns is indefinite?",
   "options": [
    "“we”",
    "“they”",
    "“yourselves”",
    "“everybody”"
   ],
   "answer": 3,
   "explain": "“Everybody” refers to persons without identifying any particular one, so its quality is indefinite. “We,” “they,” and “yourselves” refer to definite persons in the situation of speaking.",
   "level": 1
  },
  {
   "id": "prn-A02",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "What is the person of “we”? Type first, second, or third.",
   "accept": [
    "first",
    "first person",
    "1st",
    "1"
   ],
   "explain": "“We” includes the speaker, so it is of the first person, the plural of “I.”",
   "level": 2
  },
  {
   "id": "prn-A03",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "Latin <i>nōbīs</i> belongs to the personal pronouns. Which form is it?",
   "options": [
    "Second person plural, dative or ablative",
    "First person plural, dative or ablative",
    "First person plural, nominative or accusative",
    "First person plural, genitive"
   ],
   "answer": 1,
   "explain": "The first-person plural is <i>nōs</i>, <i>nostrum</i> or <i>nostrī</i>, <i>nōbīs</i>, <i>nōs</i>, <i>nōbīs</i>, so <i>nōbīs</i> is dative or ablative. The second person has <i>vōbīs</i>.",
   "level": 1
  },
  {
   "id": "prn-A04",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “The carpenter measured the board, and he cut it in two,” type the antecedent of “he.”",
   "accept": [
    "the carpenter",
    "carpenter"
   ],
   "explain": "“He” refers back to “the carpenter,” the noun named earlier in the sentence, and takes its gender and number. The antecedent of “it” is “the board.”",
   "level": 2
  },
  {
   "id": "prn-A05",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "A speaker says <i>iste liber</i>, “that book,” of a book. Where is the book?",
   "options": [
    "Near the speaker",
    "Far from both speaker and hearer",
    "In the speaker’s hand",
    "Near the person spoken to"
   ],
   "answer": 3,
   "explain": "<i>Iste</i> points to what is near the one spoken to (“that book of yours”). <i>Hic</i> would point to what is near the speaker, and <i>ille</i> to what is far from both.",
   "level": 1
  },
  {
   "id": "prn-A06",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the Latin relative pronoun that fits: <i>fēmina ___ vīdī</i> (“the woman whom I saw”).",
   "accept": [
    "quam"
   ],
   "macrons": false,
   "explain": "The relative takes the gender and number of its antecedent <i>fēmina</i> (feminine singular), but its case from its own clause, where it is the object of <i>vīdī</i>. So it is the feminine accusative singular, <i>quam</i>.",
   "level": 2
  },
  {
   "id": "prn-A07",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "In “Which of the roads leads to the harbor?” what kind of pronoun is “which”?",
   "options": [
    "Relative",
    "Interrogative",
    "Demonstrative",
    "Reflexive"
   ],
   "answer": 1,
   "explain": "“Which” here asks a question, and the answer (“the north road”) fills its place, so it is an interrogative pronoun. As a relative it would introduce a clause about an antecedent.",
   "level": 1
  },
  {
   "id": "prn-A08",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the Latin reflexive pronoun that fits: <i>Puella ___ in speculō videt</i> (“The girl sees herself in the mirror”).",
   "accept": [
    "sē",
    "se",
    "sese",
    "sēsē"
   ],
   "macrons": false,
   "explain": "The one seen is the one who sees, so the pronoun refers back to the subject of its own clause. Latin uses the reflexive <i>sē</i>.",
   "level": 2
  },
  {
   "id": "prn-A09",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“When Anna met Clara, she was carrying a basket.” What is wrong with this sentence?",
   "options": [
    "“She” has no antecedent at all",
    "“She” should be “her,” because it follows “Clara”",
    "The sentence needs “it” for the basket",
    "“She” could refer to either woman"
   ],
   "answer": 3,
   "explain": "Both “Anna” and “Clara” are possible antecedents of “she,” so we cannot tell who was carrying the basket. A pronoun is correctly used only when the hearer can tell what it refers to. “She” is the subject of “was carrying,” so its case is correct.",
   "level": 1
  },
  {
   "id": "prn-A10",
   "set": "A",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “Somebody left a coat on the bench,” is “somebody” definite or indefinite? Type one word.",
   "accept": [
    "indefinite",
    "indefinite pronoun"
   ],
   "explain": "“Somebody” refers to a person without identifying the person, so its quality is indefinite.",
   "level": 2
  },
  {
   "id": "prn-B01",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "What is the person of Latin <i>vōs</i> (“you,” plural)? Type first, second, or third.",
   "accept": [
    "second",
    "second person",
    "2nd",
    "2"
   ],
   "explain": "<i>Vōs</i> refers to the persons spoken to, so it is of the second person; it is the plural of <i>tū</i>.",
   "level": 2
  },
  {
   "id": "prn-B02",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "Which sentence uses the pronouns in the case the subject requires?",
   "options": [
    "“Him and me painted the fence.”",
    "“He and I painted the fence.”",
    "“Him and I painted the fence.”",
    "“He and me painted the fence.”"
   ],
   "answer": 1,
   "explain": "Both pronouns are subjects of “painted,” so both take the subjective case: “He and I.” “Him” and “me” are objective forms.",
   "level": 1
  },
  {
   "id": "prn-B03",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “Julia wrote to her brothers, and they answered at once,” type the antecedent of “they.”",
   "accept": [
    "her brothers",
    "brothers",
    "the brothers"
   ],
   "explain": "“They” is plural and refers back to “her brothers,” whose number it takes.",
   "level": 2
  },
  {
   "id": "prn-B04",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "In “Those are my boots,” how is “those” used?",
   "options": [
    "As an adjective with the noun “boots”",
    "As a relative pronoun",
    "As a personal pronoun",
    "As a pronoun, standing alone"
   ],
   "answer": 3,
   "explain": "“Those” stands alone as the subject and points out the boots, so it is used as a demonstrative pronoun. In “those boots” it would be used with a noun as an adjective.",
   "level": 1
  },
  {
   "id": "prn-B05",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the Latin relative pronoun that fits: <i>flūmen ___ trānsiimus</i> (“the river which we crossed”).",
   "accept": [
    "quod"
   ],
   "macrons": false,
   "explain": "<i>Flūmen</i> is neuter singular, and the relative is the object of <i>trānsiimus</i>, so it is the neuter accusative singular, <i>quod</i>.",
   "level": 2
  },
  {
   "id": "prn-B06",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“Several of the windows were broken.” What kind of pronoun is “several”?",
   "options": [
    "Interrogative",
    "Indefinite",
    "Demonstrative",
    "Personal"
   ],
   "answer": 1,
   "explain": "“Several” refers to some of the windows without identifying which, so it is an indefinite pronoun.",
   "level": 1
  },
  {
   "id": "prn-B07",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the reflexive pronoun that fits: “The children dressed ___ for the party.”",
   "accept": [
    "themselves"
   ],
   "explain": "The ones dressed are the children, the subject of the clause, so the reflexive “themselves” is used.",
   "level": 2
  },
  {
   "id": "prn-B08",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“The jug stood beside the bowl, and it was cracked.” Which revision makes the reference clear?",
   "options": [
    "“The jug stood beside the bowl, and that was cracked.”",
    "“It was cracked; the jug stood beside the bowl.”",
    "“The jug stood beside the bowl, and it was badly cracked.”",
    "“The jug, which was cracked, stood beside the bowl.”"
   ],
   "answer": 3,
   "explain": "In the original, “it” could refer to the jug or the bowl. The relative “which,” placed directly after “the jug,” refers only to it. The other versions leave the pronoun as unclear as before.",
   "level": 1
  },
  {
   "id": "prn-B09",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “You are late,” said to one person, is “you” definite or indefinite? Type one word.",
   "accept": [
    "definite",
    "definite pronoun"
   ],
   "explain": "“You” refers to the definite person who is spoken to, so its quality is definite.",
   "level": 2
  },
  {
   "id": "prn-B10",
   "set": "B",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "Latin <i>labōrāmus</i> (“we work”) has no pronoun. Why can Latin omit it?",
   "options": [
    "The ending of the verb shows the person",
    "Latin has no pronoun of the first person",
    "The pronoun is understood from the object",
    "Latin omits every pronoun"
   ],
   "answer": 0,
   "explain": "The ending <i>-mus</i> shows the first person plural, so the pronoun <i>nōs</i> is not needed. When it is expressed, it usually gives emphasis.",
   "level": 1
  },
  {
   "id": "prn-C01",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "Which form of the English personal pronoun is possessive?",
   "options": [
    "“them”",
    "“their”",
    "“they”",
    "“themselves”"
   ],
   "answer": 1,
   "explain": "The English personal pronouns keep three cases: “they” is subjective, “them” objective, and “their” possessive. “Themselves” is the reflexive pronoun.",
   "level": 1
  },
  {
   "id": "prn-C02",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “The swallows came back in April, and they built a nest under the roof,” type the antecedent of “they.”",
   "accept": [
    "the swallows",
    "swallows"
   ],
   "explain": "“They” is plural and refers back to “the swallows.” The pronoun takes the number of its antecedent.",
   "level": 2
  },
  {
   "id": "prn-C03",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "In “This lamp is broken,” how is “this” used?",
   "options": [
    "As a pronoun standing alone",
    "As a personal pronoun",
    "As an interrogative pronoun",
    "As an adjective with “lamp”"
   ],
   "answer": 3,
   "explain": "Here “this” is joined to “lamp” and points it out, so the demonstrative is used as an adjective. In “This is broken” it would stand alone as a pronoun.",
   "level": 1
  },
  {
   "id": "prn-C04",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the Latin relative pronoun that fits: <i>virī ___ vēnērunt</i> (“the men who came”).",
   "accept": [
    "quī"
   ],
   "macrons": false,
   "explain": "<i>Virī</i> is masculine plural, and the relative is the subject of <i>vēnērunt</i>, so it is the masculine nominative plural, <i>quī</i>.",
   "level": 2
  },
  {
   "id": "prn-C05",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“What did the messenger say?” What kind of pronoun is “what”?",
   "options": [
    "Relative",
    "Interrogative",
    "Indefinite",
    "Demonstrative"
   ],
   "answer": 1,
   "explain": "“What” asks a question, and the answer fills its place, so it is an interrogative pronoun.",
   "level": 1
  },
  {
   "id": "prn-C06",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the reflexive pronoun that fits: “I taught ___ to swim.”",
   "accept": [
    "myself"
   ],
   "explain": "The one taught is the speaker, the subject of the clause, so the reflexive of the first person, “myself,” is used.",
   "level": 2
  },
  {
   "id": "prn-C07",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "In <i>Puer puellam vīdit et eam salūtāvit</i> (“The boy saw the girl and greeted her”), how do we know that <i>eam</i> refers to the girl?",
   "options": [
    "<i>Eam</i> stands nearer to <i>puer</i>",
    "<i>Eam</i> is nominative, as <i>puer</i> is",
    "The verb <i>salūtāvit</i> is plural",
    "<i>Eam</i> is feminine, like <i>puellam</i>"
   ],
   "answer": 3,
   "explain": "The pronoun takes the gender of its antecedent, and <i>eam</i> is feminine, so it can refer only to the girl. Latin can resolve the reference by gender when the nouns differ in gender.",
   "level": 1
  },
  {
   "id": "prn-C08",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "In “Whoever finds the key may keep it,” is “whoever” definite or indefinite? Type one word.",
   "accept": [
    "indefinite",
    "indefinite pronoun"
   ],
   "explain": "“Whoever” refers to a person without identifying the person, so its quality is indefinite.",
   "level": 2
  },
  {
   "id": "prn-C09",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "In <i>Tū scrībis, ego legō</i> (“You write; I read”), the verbs already show the person. Why are the pronouns expressed?",
   "options": [
    "Because Latin always requires them",
    "To give emphasis and contrast",
    "Because the verbs do not show the person",
    "To show the case of the subject"
   ],
   "answer": 1,
   "explain": "Latin usually omits the pronoun subject, because the ending of the verb shows the person. When it is expressed, it gives emphasis; here it sets “you” against “I.”",
   "level": 1
  },
  {
   "id": "prn-C10",
   "set": "C",
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "Type the possessive form of “we,” as in “___ house is on the corner.”",
   "accept": [
    "our"
   ],
   "explain": "The English personal pronoun “we” has the possessive form “our,” used before a noun.",
   "level": 2
  },
  {
   "id": "prn-L3-01",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“For whither thou goest, I will go; and where thou lodgest, I will lodge:” (Ruth 1:16, King James Version.) Give the person, number, and case of “thou.”",
   "options": [
    "Second person, singular, subjective",
    "Second person, plural, subjective",
    "Second person, singular, objective",
    "First person, singular, subjective"
   ],
   "answer": 0,
   "explain": "“Thou” is the older pronoun for one person spoken to, used as a subject; its verb takes “-est”: “thou goest.” The objective form is “thee,” the plural “ye.”",
   "source": "Ruth 1:16, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prn-L3-02",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "“And Ruth said, Intreat me not to leave thee, or to return from following after thee:” (Ruth 1:16, King James Version.) “Thee” is the objective case of which pronoun? Type it.",
   "accept": [
    "thou"
   ],
   "explain": "“Thou” is subjective, “thee” objective, “thy” and “thine” possessive. Here “thee” is the object of “leave” and of “after.”",
   "source": "Ruth 1:16, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prn-L3-03",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "“Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.” (Psalm 23:4, King James Version.) Type the antecedent of “they.”",
   "accept": [
    "thy rod and thy staff",
    "rod and staff",
    "the rod and the staff",
    "rod and thy staff",
    "thy rod and staff"
   ],
   "explain": "“They” repeats the double subject just named, “thy rod and thy staff.” Two subjects joined by “and” take a plural pronoun.",
   "source": "Psalm 23:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prn-L3-04",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“Our Father which art in heaven, Hallowed be thy name.” (Matthew 6:9, King James Version.) What is “which,” and what is its antecedent?",
   "options": [
    "An interrogative pronoun, with no antecedent",
    "A relative pronoun, whose antecedent is “Father”",
    "A relative pronoun, whose antecedent is “heaven”",
    "A demonstrative pronoun used as an adjective"
   ],
   "answer": 1,
   "explain": "“Which” joins the clause “which art in heaven” to “Father.” Its verb “art” is second person, agreeing with “Father,” who is addressed. Older English used “which” of persons; today we say “who.”",
   "source": "Matthew 6:9, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prn-L3-05",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "“In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken:” (Genesis 3:19, King James Version.) Type the antecedent of “it.”",
   "accept": [
    "the ground",
    "ground"
   ],
   "explain": "“It” is neuter and singular and refers to the nearest fitting noun, “the ground,” from which Adam was taken.",
   "source": "Genesis 3:19, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "prn-L3-06",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "<i>Senātus haec intellegit, cōnsul videt; hic tamen vīvit.</i> (“The senate understands these things, the consul sees them; yet this man lives.”) (Cicero, First Oration against Catiline, chapter 1.) Whom does <i>hic</i> mean, and why is this pronoun chosen?",
   "options": [
    "The consul, who is far off",
    "Catiline, who is present near the speaker",
    "The senate, as a body",
    "No one in particular; <i>hic</i> is indefinite"
   ],
   "answer": 1,
   "explain": "<i>Hic</i> points to what is near the speaker. Catiline was sitting in the senate as Cicero spoke, so Cicero calls him “this man.”",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "prn-L3-07",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "<i>Hī omnēs linguā, īnstitūtīs, lēgibus inter sē differunt.</i> (“These all differ from one another in language, customs, and laws.”) (Caesar, De Bello Gallico, Book I, chapter 1.) To whom does <i>sē</i> refer?",
   "options": [
    "To Caesar",
    "To the subject, <i>hī</i>, the three peoples of Gaul",
    "To the reader",
    "To the Romans"
   ],
   "answer": 1,
   "explain": "<i>Sē</i> is the reflexive pronoun of the third person; it refers back to the subject of its own clause. <i>Inter sē</i> means “among themselves,” that is, “from one another.”",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "prn-L3-08",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "<i>Mūsa, mihi causās memorā</i> (“Muse, tell me the causes”). (Vergil, Aeneid, Book I, line 8.) Type the case of <i>mihi</i>.",
   "accept": [
    "dative",
    "the dative",
    "dative case"
   ],
   "explain": "<i>Mihi</i> is the dative of <i>ego</i>: the poet is the one to whom the Muse is to tell the causes.",
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "prn-L3-09",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "form",
   "prompt": "“The mind is its own place, and in itself / Can make a Heaven of Hell, a Hell of Heaven.” (Milton, Paradise Lost, Book I.) Type the antecedent of “itself.”",
   "accept": [
    "the mind",
    "mind"
   ],
   "explain": "“Itself” is reflexive and refers back to the subject, “the mind.” “Its” in “its own place” has the same antecedent.",
   "source": "Milton, Paradise Lost, Book I, lines 254 to 255; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "prn-L3-10",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“As I walked through the wilderness of this world, I lighted on a certain place where was a Den,” (Bunyan, The Pilgrim’s Progress, opening of the First Part.) How is “this” used?",
   "options": [
    "As a pronoun, standing alone",
    "As an adjective with “world”",
    "As a relative pronoun",
    "As a personal pronoun"
   ],
   "answer": 1,
   "explain": "“This” is a demonstrative; here it stands before the noun “world” and points it out, so it is used as an adjective. In “This is the place,” it would stand alone as a pronoun.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening of the First Part; text checked against Project Gutenberg eBook #131 (The Pilgrim’s Progress)"
  },
  {
   "id": "prn-L3-11",
   "set": "A",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "“She is tolerable: but not handsome enough to tempt me;” (Austen, Pride and Prejudice, chapter 3.) In what case is “me,” and why?",
   "options": [
    "Subjective, as the subject",
    "Objective, as the object of the infinitive “to tempt”",
    "Possessive",
    "Subjective, after “enough”"
   ],
   "answer": 1,
   "explain": "“Me” receives the action of “to tempt,” so it is in the objective case. The subjective form is “I.”",
   "source": "Jane Austen, Pride and Prejudice, chapter 3; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "prn-L3-12",
   "set": "B",
   "level": 3,
   "deck": "iii.pronoun",
   "type": "mc",
   "prompt": "<i>quī ipsōrum linguā Celtae, nostrā Gallī appellantur</i> (“who in their own tongue are called Celts, in ours Gauls”). (Caesar, De Bello Gallico, Book I, chapter 1.) What does <i>ipsōrum</i> add?",
   "options": [
    "It asks a question",
    "It stresses “their own,” setting their tongue against “ours”",
    "It is the relative pronoun of the clause",
    "It points to something far off"
   ],
   "answer": 1,
   "explain": "<i>Ipse</i> is the intensive pronoun, “self.” <i>Ipsōrum linguā</i>, “in the tongue of themselves,” is set against <i>nostrā</i>, “in ours.”",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  }
 ]
};
