/* The Period [v.ex.period]  Exercise set opened from the Exercise button of v.period. Written; 40 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the parts and kinds of the period (choose or sort). Level II: find the protasis and the apodosis and count members in short real sentences, most from the King James Bible. Level III: read long real periods from the King James Bible, Austen, Milton, Caesar, and Cicero.
   Level I (18), Level II (12), Level III (10). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.period'] = {
 "id": "v.ex.period",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "The Period",
 "openedFrom": "v.period (Exercise button)",
 "covers": [
  {
   "deck": "v.period",
   "cards": [
    "what-period",
    "continuous-periodic",
    "members",
    "end-with-sense",
    "cicero",
    "cicero-analysis",
    "english",
    "loose-periodic",
    "grammar-rhetoric"
   ]
  }
 ],
 "skill": "Tell loose from periodic sentences; count the members of a period; find the protasis, the apodosis, and the main verb; turn a loose sentence into a periodic one.",
 "types": [
  "sort",
  "identify",
  "mc",
  "transform"
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
   "1": "Recognize the parts and the kinds of the period: choose or sort.",
   "2": "Find the protasis, the apodosis, and the members in short real sentences.",
   "3": "Read long periods from real authors."
  },
  "counts": {
   "1": 18,
   "2": 12,
   "3": 10
  }
 },
 "limit": "Only what v.period teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "pe-A01",
   "set": "A",
   "deck": "v.period",
   "type": "sort",
   "prompt": "Sort each sentence as loose or periodic.",
   "entries": [
    "“The ship sailed at noon, laden with grain for the city.”",
    "“Laden with grain for the city, the ship sailed at noon.”",
    "“We found the inn at last, after walking all day in the rain.”",
    "“After walking all day in the rain, we found the inn at last.”",
    "“He finished the letter, though his hand was weak.”",
    "“Though his hand was weak, he finished the letter.”"
   ],
   "bins": [
    "Loose",
    "Periodic"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "A loose sentence gives its main clause first and adds the rest after it; a periodic sentence completes its main clause only at or near the end, so the sense is held in suspense.",
   "level": 1
  },
  {
   "id": "pe-A02",
   "set": "A",
   "deck": "v.period",
   "type": "identify",
   "prompt": "<i>Cum diēs advēnisset, mīlitēs, quī tōtam noctem vigilāverant, in castra rediērunt</i> (“when day had come, the soldiers, who had kept watch all night, returned to the camp”). Click the main verb.",
   "tokens": [
    "<i>Cum diēs advēnisset,</i>",
    "<i>mīlitēs,</i>",
    "<i>quī tōtam noctem vigilāverant,</i>",
    "<i>in castra</i>",
    "<i>rediērunt</i>"
   ],
   "answer": 4,
   "explain": "The clauses with <i>cum</i> and <i>quī</i> are dependent, and the subject <i>mīlitēs</i> waits for its verb. <i>Rediērunt</i>, standing last, completes the construction and the sense.",
   "level": 2
  },
  {
   "id": "pe-A03",
   "set": "A",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Which style, in Aristotle’s account, adds clause after clause and has no end in itself, stopping only when the sense is complete?",
   "options": [
    "The periodic style",
    "The grand style",
    "The continuous style",
    "The style of the period"
   ],
   "answer": 2,
   "explain": "Aristotle calls it the continuous style; the periodic style shapes each sentence as a whole, with a beginning and an end.",
   "level": 1
  },
  {
   "id": "pe-A04",
   "set": "A",
   "deck": "v.period",
   "type": "mc",
   "prompt": "How many members has “Though the night was bitter, though the road was long, the pilgrims sang”?",
   "options": [
    "Two",
    "Four",
    "One",
    "Three"
   ],
   "answer": 3,
   "explain": "Two concessive members, each a clause with “though,” and the main member, “the pilgrims sang”: three in all.",
   "level": 1
  },
  {
   "id": "pe-A05",
   "set": "A",
   "deck": "v.period",
   "type": "transform",
   "prompt": "Rewrite as a periodic sentence by putting the main clause last: “We left the city after the storm had passed.”",
   "accept": [
    "After the storm had passed, we left the city.",
    "After the storm had passed we left the city."
   ],
   "explain": "Moving the dependent clause to the front holds the sense in suspense until the main clause, “we left the city,” completes it.",
   "level": 2
  },
  {
   "id": "pe-A06",
   "set": "A",
   "deck": "v.period",
   "type": "mc",
   "prompt": "What is the apodosis of “If the wind is fair, if the crew is ready, we sail tonight”?",
   "options": [
    "“if the wind is fair”",
    "“we sail tonight”",
    "“if the crew is ready”",
    "The two conditions together"
   ],
   "answer": 1,
   "explain": "The two conditions make the protasis, which holds the sense in suspense; the main clause, “we sail tonight,” is the apodosis that completes it.",
   "level": 1
  },
  {
   "id": "pe-A07",
   "set": "A",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Why, according to Aristotle, does the periodic style please?",
   "options": [
    "It is longer than other sentences",
    "Its members always rhyme",
    "The hearer grasps it and remembers it easily",
    "It uses longer words than the continuous style"
   ],
   "answer": 2,
   "explain": "The hearer at every moment thinks he is securing something, and the period, having a beginning and an end of graspable size, is easily retained in the memory.",
   "level": 1
  },
  {
   "id": "pe-A08",
   "set": "A",
   "deck": "v.period",
   "type": "mc",
   "prompt": "According to Demetrius, how many members do the largest periods have?",
   "options": [
    "Two",
    "Six",
    "Ten",
    "Four"
   ],
   "answer": 3,
   "explain": "Demetrius says the largest periods have four members, and that a period of more would lose the proportion of a period.",
   "level": 1
  },
  {
   "id": "pe-B01",
   "set": "B",
   "deck": "v.period",
   "type": "sort",
   "prompt": "Sort each sentence as loose or periodic.",
   "entries": [
    "“The bells rang out, announcing the victory to the whole town.”",
    "“Announcing the victory to the whole town, the bells rang out.”",
    "“She opened the door, expecting a stranger.”",
    "“Expecting a stranger, she opened the door.”",
    "“The old judge spoke at last, when the room had fallen silent.”",
    "“When the room had fallen silent, the old judge spoke at last.”"
   ],
   "bins": [
    "Loose",
    "Periodic"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "A loose sentence gives its main clause first and adds the rest after it; a periodic sentence completes its main clause only at or near the end, so the sense is held in suspense.",
   "level": 1
  },
  {
   "id": "pe-B02",
   "set": "B",
   "deck": "v.period",
   "type": "identify",
   "prompt": "“If the treaty holds, if the harvest is good, and if the plague does not return, the city will prosper.” Click the apodosis.",
   "tokens": [
    "If the treaty holds,",
    "if the harvest is good,",
    "and if the plague does not return,",
    "the city will prosper."
   ],
   "answer": 3,
   "explain": "The three conditions make the protasis; “the city will prosper,” the main clause, is the apodosis that completes the sense.",
   "level": 2
  },
  {
   "id": "pe-B03",
   "set": "B",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Which is the shorter member of a period?",
   "options": [
    "The colon",
    "The period",
    "The protasis",
    "The comma"
   ],
   "answer": 3,
   "explain": "The comma (Latin <i>incīsum</i>) is the shorter member, usually a phrase or a short clause; the colon (<i>membrum</i>) is the longer, usually a clause.",
   "level": 1
  },
  {
   "id": "pe-B04",
   "set": "B",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Why does a Latin period often place its main verb last?",
   "options": [
    "It completes construction and sense together",
    "Because verbs are the shortest words",
    "Because Latin forbids a verb anywhere else in a sentence",
    "Because the last word must rhyme"
   ],
   "answer": 0,
   "explain": "The main verb completes the construction, so placing it last completes the sense at the same moment, after holding the hearer in suspense, as Quintilian recommends.",
   "level": 1
  },
  {
   "id": "pe-B05",
   "set": "B",
   "deck": "v.period",
   "type": "transform",
   "prompt": "Rewrite as a periodic sentence by putting the main clause last: “The army retreated because the river had flooded.”",
   "accept": [
    "Because the river had flooded, the army retreated.",
    "Because the river had flooded the army retreated."
   ],
   "explain": "With the dependent clause first, the sense waits for “the army retreated,” which completes it.",
   "level": 2
  },
  {
   "id": "pe-B06",
   "set": "B",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Why is a long English period often harder to follow than a Latin one?",
   "options": [
    "English has no dependent clauses",
    "English sentences cannot be long",
    "English lacks endings to show the construction",
    "English has no way to subordinate one clause to another"
   ],
   "answer": 2,
   "explain": "Latin endings show which word belongs with which wherever it stands; English order is fixed and carries the construction, so a long suspended sentence is harder to hold together.",
   "level": 1
  },
  {
   "id": "pe-B07",
   "set": "B",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Which art studies how the rhythm of a period pleases the hearer?",
   "options": [
    "Grammar",
    "Logic",
    "Arithmetic",
    "Rhetoric"
   ],
   "answer": 3,
   "explain": "Grammar studies how a period is built; what it does to the hearer, its rhythm, suspense, and persuasion, belongs to rhetoric.",
   "level": 1
  },
  {
   "id": "pe-B08",
   "set": "B",
   "deck": "v.period",
   "type": "mc",
   "prompt": "In “Since you ask, and since the matter is urgent, I will speak,” what is the protasis?",
   "options": [
    "The two clauses with “since”",
    "“I will speak”",
    "“since the matter is urgent” alone",
    "The whole sentence"
   ],
   "answer": 0,
   "explain": "The protasis is the first part, the two causal clauses that hold the sense in suspense; “I will speak” is the apodosis.",
   "level": 1
  },
  {
   "id": "pe-C01",
   "set": "C",
   "deck": "v.period",
   "type": "sort",
   "prompt": "Sort each member by whether it belongs to the protasis or the apodosis of its period: “When the guests had gone, when the lamps were out, the old house was still” and “Although he was tired, and although the inn was far, the doctor came.”",
   "entries": [
    "“When the guests had gone”",
    "“when the lamps were out”",
    "“the old house was still”",
    "“Although he was tired”",
    "“and although the inn was far”",
    "“the doctor came”"
   ],
   "bins": [
    "Protasis",
    "Apodosis"
   ],
   "answer": [
    0,
    0,
    1,
    0,
    0,
    1
   ],
   "explain": "In each period the dependent clauses that hold the sense in suspense make the protasis, and the main clause that completes it is the apodosis.",
   "level": 1
  },
  {
   "id": "pe-C02",
   "set": "C",
   "deck": "v.period",
   "type": "identify",
   "prompt": "<i>Postquam urbs capta est et mūrī dēlētī sunt, victor, quī multōs annōs pugnāverat, domum rediit</i> (“after the city had been taken and the walls destroyed, the victor, who had fought for many years, went home”). Click the main verb.",
   "tokens": [
    "<i>Postquam urbs capta est</i>",
    "<i>et mūrī dēlētī sunt,</i>",
    "<i>victor,</i>",
    "<i>quī multōs annōs pugnāverat,</i>",
    "<i>domum</i>",
    "<i>rediit</i>"
   ],
   "answer": 5,
   "explain": "<i>Postquam</i> and <i>quī</i> introduce dependent clauses, and <i>rediit</i>, the verb of <i>victor</i>, stands last and completes the period.",
   "level": 2
  },
  {
   "id": "pe-C03",
   "set": "C",
   "deck": "v.period",
   "type": "mc",
   "prompt": "What does the Greek name of the period mean?",
   "options": [
    "“A going round”",
    "“A cutting”",
    "“A limb”",
    "“A standing still”"
   ],
   "answer": 0,
   "explain": "“Period” means “a going round”: a sentence that comes round to completion.",
   "level": 1
  },
  {
   "id": "pe-C04",
   "set": "C",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Which of these sentences is loose?",
   "options": [
    "“Flooding the lower fields, the rain fell all night.”",
    "“The rain fell all night, flooding the lower fields.”",
    "“When the rain had fallen all night, the fields flooded.”",
    "“Although it rained all night, the fields stayed dry.”"
   ],
   "answer": 1,
   "explain": "“The rain fell all night, flooding the lower fields” completes its main clause first and adds the participial phrase after it. The others hold the main clause until the end.",
   "level": 1
  },
  {
   "id": "pe-C05",
   "set": "C",
   "deck": "v.period",
   "type": "transform",
   "prompt": "Rewrite as a periodic sentence by putting the main clause last: “The children played outside until the stars came out.”",
   "accept": [
    "Until the stars came out, the children played outside.",
    "Until the stars came out the children played outside."
   ],
   "explain": "With “until the stars came out” first, the sense is held in suspense until the main clause completes it.",
   "level": 2
  },
  {
   "id": "pe-C06",
   "set": "C",
   "deck": "v.period",
   "type": "mc",
   "prompt": "How many members has “We came to the river; we built a raft; we crossed at dawn”?",
   "options": [
    "Two",
    "Four",
    "One",
    "Three"
   ],
   "answer": 3,
   "explain": "Each clause between the semicolons is a member, so the sentence has three. Joined side by side in this way, they are closer to the continuous style than to a period.",
   "level": 1
  },
  {
   "id": "pe-C07",
   "set": "C",
   "deck": "v.period",
   "type": "mc",
   "prompt": "Aristotle’s continuous style corresponds to which kind of sentence in modern handbooks?",
   "options": [
    "The loose sentence",
    "The periodic sentence",
    "The complex sentence",
    "The simple sentence"
   ],
   "answer": 0,
   "explain": "The loose sentence, which gives the main clause first and adds the rest after it, corresponds to the continuous style; the periodic sentence corresponds to the period.",
   "level": 1
  },
  {
   "id": "pe-C08",
   "set": "C",
   "deck": "v.period",
   "type": "mc",
   "prompt": "What must every member of a period be, as a construction?",
   "options": [
    "Complete by itself",
    "Congruous",
    "A clause beginning with “if”",
    "Shorter than the last member"
   ],
   "answer": 1,
   "explain": "Every member must be congruous; but the whole is made complete only at the end, so the members before the last are not complete by themselves.",
   "level": 1
  },
  {
   "id": "pe-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Proverbs 22:6, King James Version.) The second half of this verse is a small period. Click its apodosis.",
   "answer": 2,
   "explain": "“When he is old” holds the sense in suspense; “he will not depart from it” completes it, so it is the apodosis.",
   "tokens": [
    "Train up a child in the way he should go:",
    "and when he is old,",
    "he will not depart from it."
   ],
   "source": "Proverbs 22:6, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Matthew 2:1, King James Version.) Click the protasis.",
   "answer": 0,
   "explain": "The clause with “when” comes first and leaves the sense unfinished; the main clause, “there came wise men,” completes it.",
   "tokens": [
    "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king,",
    "behold, there came wise men from the east to Jerusalem,"
   ],
   "source": "Matthew 2:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Matthew 13:4, King James Version.) Click the protasis.",
   "answer": 0,
   "explain": "“When he sowed” is the dependent member that waits for “some seeds fell” to complete the sense.",
   "tokens": [
    "And when he sowed,",
    "some seeds fell by the way side,",
    "and the fowls came and devoured them up:"
   ],
   "source": "Matthew 13:4, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Matthew 6:21, King James Version.) Click the apodosis.",
   "answer": 1,
   "explain": "“Where your treasure is” holds the sense in suspense; “there will your heart be also” answers it and completes the period.",
   "tokens": [
    "For where your treasure is,",
    "there will your heart be also."
   ],
   "source": "Matthew 6:21, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.” (Psalm 137:1, King James Version.) How many members has it?",
   "options": [
    "Three",
    "Two",
    "Four",
    "One"
   ],
   "answer": 0,
   "explain": "“There we sat down,” “we wept,” and “when we remembered Zion”: three clauses. “By the rivers of Babylon” is a phrase, not a member.",
   "source": "Psalm 137:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“A soft answer turneth away wrath: but grievous words stir up anger.” (Proverbs 15:1, King James Version.) How many members has it?",
   "options": [
    "Two",
    "One",
    "Three",
    "Four"
   ],
   "answer": 0,
   "explain": "Two clauses, each with its own subject and verb, set against each other: “a soft answer turneth” and “grievous words stir up.”",
   "source": "Proverbs 15:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L3-01",
   "set": "A",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“Of Man’s first disobedience, and the fruit / Of that forbidden tree whose mortal taste / Brought death into the World, and all our woe, / With loss of Eden, till one greater Man / Restore us, and regain the blissful seat, / Sing, Heavenly Muse” (Milton, <i>Paradise Lost</i> I.1 to 6.) Is this opening loose or periodic?",
   "options": [
    "Periodic: the main verb “Sing” is held back to the sixth line",
    "Loose: the main clause comes first",
    "Loose: it has no main verb",
    "Periodic: the main verb is “Brought”"
   ],
   "answer": 0,
   "explain": "Everything before “Sing” depends on it, so the sense is held in suspense until the main verb arrives. “Brought” belongs to a dependent clause.",
   "source": "Milton, Paradise Lost, Book I, lines 1 to 6; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "pe-L3-02",
   "set": "B",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.” (Psalm 1:1, King James Version.) Is it loose or periodic?",
   "options": [
    "loose",
    "periodic"
   ],
   "answer": 0,
   "explain": "The main clause, “Blessed is the man,” comes first and is complete; the rest is added after it.",
   "source": "Psalm 1:1, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L3-03",
   "set": "A",
   "level": 3,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Jane Austen, <i>Pride and Prejudice</i>, chapter 1. The British spelling is Austen’s.) Click the protasis.",
   "answer": 0,
   "explain": "The clause with “however” is dependent and holds the sense in suspense; the main clause, “this truth is so well fixed,” answers it.",
   "tokens": [
    "However little known the feelings or views of such a man may be on his first entering a neighbourhood,",
    "this truth is so well fixed in the minds of the surrounding families,",
    "that he is considered as the rightful property of some one or other of their daughters."
   ],
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "pe-L3-04",
   "set": "B",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "<i>Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus locus, nihil horum ora voltusque moverunt?</i> (Cicero, <i>In Catilinam</i> I.1.) What makes this sentence periodic?",
   "options": [
    "Its one verb, <i>moverunt</i>, is held back until every subject has been named",
    "It begins with its main verb",
    "It is made of short independent sentences",
    "It has no verb"
   ],
   "answer": 0,
   "explain": "Each <i>nihil</i> adds a subject, and none is complete until <i>moverunt</i> closes the sentence.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "pe-L3-05",
   "set": "A",
   "level": 3,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1.) Click the member that holds the main verb.",
   "answer": 4,
   "explain": "The four indirect questions are objects of <i>ignorare</i>; the main verb <i>arbitraris</i> comes last and completes the period.",
   "tokens": [
    "Quid proxima, quid superiore nocte egeris,",
    "ubi fueris,",
    "quos convocaveris,",
    "quid consilii ceperis,",
    "quem nostrum ignorare arbitraris?"
   ],
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "pe-L3-06",
   "set": "B",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "<i>Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent aut ipsi in eorum finibus bellum gerunt.</i> (Caesar, <i>De Bello Gallico</i> I.1.) Is it loose or periodic?",
   "options": [
    "loose",
    "periodic"
   ],
   "answer": 0,
   "explain": "The main clause, <i>Helvetii reliquos Gallos virtute praecedunt</i>, is complete at once; the reason and the circumstances are added after it.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "pe-L3-07",
   "set": "A",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“And not many days after the younger son gathered all together, and took his journey into a far country, and there wasted his substance with riotous living.” (Luke 15:13, King James Version.) Is it loose or periodic?",
   "options": [
    "loose",
    "periodic"
   ],
   "answer": 0,
   "explain": "The sense is complete after “gathered all together”; the rest is added with “and,” one action after another.",
   "source": "Luke 15:13, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L3-08",
   "set": "B",
   "level": 3,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Matthew 7:24, King James Version.) Click the main clause.",
   "answer": 1,
   "explain": "“I will liken him” is the main clause; the “whosoever” clause before it and the “which” clause after it are dependent.",
   "tokens": [
    "Therefore whosoever heareth these sayings of mine, and doeth them,",
    "I will liken him unto a wise man,",
    "which built his house upon a rock:"
   ],
   "source": "Matthew 7:24, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L3-09",
   "set": "A",
   "level": 3,
   "deck": "v.period",
   "type": "mc",
   "prompt": "“Naked came I out of my mother’s womb, and naked shall I return thither: the LORD gave, and the LORD hath taken away; blessed be the name of the LORD.” (Job 1:21, King James Version.) How many members has it?",
   "options": [
    "Five",
    "Three",
    "Two",
    "Four"
   ],
   "answer": 0,
   "explain": "Five clauses: “naked came I,” “naked shall I return,” “the LORD gave,” “the LORD hath taken away,” and “blessed be the name.”",
   "source": "Job 1:21, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "pe-L3-10",
   "set": "B",
   "level": 3,
   "deck": "v.period",
   "type": "identify",
   "prompt": "(Genesis 8:22, King James Version.) Click the part that completes the sense.",
   "answer": 2,
   "explain": "The clause with “while” and the long list of subjects hold the sense in suspense; “shall not cease” completes it at the very end, so the sentence is periodic.",
   "tokens": [
    "While the earth remaineth,",
    "seedtime and harvest, and cold and heat, and summer and winter, and day and night",
    "shall not cease."
   ],
   "source": "Genesis 8:22, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
