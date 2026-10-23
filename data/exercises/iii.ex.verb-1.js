/* The Verb I: Quality, Mood, and Voice [iii.ex.verb-1]  Exercise set opened from the Exercise button of iii.verb-1. Written; 37 items in 2 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the mood, voice, or form (choose). Level II: produce it (type). New items at both levels quote the King James Bible, Vergil, Cicero, and Caesar.
   Level I (18), Level II (19). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level I, mastery at Level II (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.verb-1'] = {
 "id": "iii.ex.verb-1",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "The Verb I: Quality, Mood, and Voice",
 "openedFrom": "iii.verb-1 (Exercise button)",
 "covers": [
  {
   "deck": "iii.verb-1",
   "cards": [
    "mood",
    "indicative-imperative",
    "subjunctive",
    "infinitive-impersonal",
    "forms",
    "english-moods",
    "voice",
    "neuter",
    "deponent",
    "common"
   ]
  }
 ],
 "skill": "Identify the mood and the voice of a verb (active, passive, neuter, deponent, common), in English and Latin; produce a Latin form of the mood or voice asked for.",
 "types": [
  "mc",
  "form"
 ],
 "pool": 37,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C.",
 "sets": {
  "A": 15,
  "B": 14,
  "C": 8
 },
 "levels": {
  "pass": 1,
  "top": 2,
  "names": {
   "1": "Recognize the mood, the voice, and the form of a verb: choose the answer.",
   "2": "Name or produce the mood, the voice, or the form asked for: type it."
  },
  "counts": {
   "1": 18,
   "2": 19
  }
 },
 "limit": "The moods and voices shown in III.8, with the conjugation tables only as III.8 uses them; no participles.",
 "instr": "Choose the answer or type the word or form. Macrons are not tested in typed Latin answers.",
 "items": [
  {
   "id": "vb1-A01",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“Close the window!” In what manner does the verb present the action?",
   "options": [
    "As a command",
    "As a fact",
    "As a wish",
    "As something supposed"
   ],
   "answer": 0,
   "explain": "The verb presents the closing as something the speaker commands, so it is in the imperative mood. A fact is presented by the indicative, a wish by the optative or subjunctive.",
   "level": 1
  },
  {
   "id": "vb1-A02",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Latin <i>cantō</i> (“I sing”) has the imperative <i>cantā</i> when one person is addressed. Type the imperative used when several are addressed.",
   "accept": [
    "cantāte"
   ],
   "macrons": false,
   "explain": "The present imperative adds <i>-te</i> to the stem when more than one person is addressed, so the form is <i>cantāte</i>, “sing!” (to several).",
   "level": 2
  },
  {
   "id": "vb1-A03",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Which sentence uses the subjunctive that careful usage prefers in a condition contrary to fact?",
   "options": [
    "“If the bridge was open, we would cross.”",
    "“If the bridge is open, we would cross.”",
    "“If the bridge were open, we would cross.”",
    "“If the bridge be open, then we would cross.”"
   ],
   "answer": 2,
   "explain": "The bridge is not open, so the condition is contrary to fact, and careful usage prefers the subjunctive “were” to the indicative “was.” “Be” is the subjunctive used after verbs of demanding and in fixed phrases, not in conditions of this kind.",
   "level": 1
  },
  {
   "id": "vb1-A04",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Latin <i>cantō</i> (“I sing”) belongs to the same conjugation as <i>amō</i>, whose present infinitive is <i>amāre</i>. Type the present infinitive of <i>cantō</i>.",
   "accept": [
    "cantāre"
   ],
   "macrons": false,
   "explain": "The infinitive names the action without person or number: <i>cantāre</i>, “to sing,” as <i>amāre</i> is “to love.”",
   "level": 2
  },
  {
   "id": "vb1-A05",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>clāmitō</i> (“I keep shouting”) is formed from <i>clāmō</i> (“I shout”). Which of Donatus’s forms is it?",
   "options": [
    "The frequentative",
    "The inchoative",
    "The desiderative",
    "The perfect"
   ],
   "answer": 0,
   "explain": "The frequentative form signifies doing something often or repeatedly, as <i>lectitō</i> (“I read often”) does. The inchoative signifies beginning, and the desiderative wanting.",
   "level": 1
  },
  {
   "id": "vb1-A06",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Type the mood of “were” in “If the clock were right, we would be early.”",
   "accept": [
    "subjunctive",
    "the subjunctive",
    "subjunctive mood"
   ],
   "explain": "The clock is not right, so the condition is contrary to fact, and “were” is the subjunctive, one of the few subjunctive forms English keeps.",
   "level": 2
  },
  {
   "id": "vb1-A07",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "In “The harbor was blocked by ice,” what is the voice of “was blocked”?",
   "options": [
    "Active",
    "Neuter",
    "Passive",
    "Deponent"
   ],
   "answer": 2,
   "explain": "The subject, “the harbor,” receives the action, and the doer is named with “by,” so the verb is passive. English forms the passive with “to be” and the past participle.",
   "level": 1
  },
  {
   "id": "vb1-A08",
   "set": "A",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Latin <i>iaceō</i> (“I lie,” “I am lying down”) ends in <i>-ō</i> but signifies neither acting on something nor being acted upon, and it forms no personal passive. Type the name Donatus gives to a verb of this kind.",
   "accept": [
    "neuter",
    "neuter verb",
    "a neuter verb",
    "neutral"
   ],
   "explain": "A verb that signifies neither doing nor undergoing is a neuter verb (from <i>neuter</i>, “neither”). Modern grammars call such a verb intransitive.",
   "level": 2
  },
  {
   "id": "vb1-B01",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Donatus lists six moods. Which of these is not among them?",
   "options": [
    "The optative",
    "The conditional",
    "The impersonal",
    "The infinitive"
   ],
   "answer": 1,
   "explain": "Donatus’s six moods are the indicative, the imperative, the optative, the subjunctive, the infinitive, and the impersonal. He has no conditional mood; Latin expresses conditions with the indicative or the subjunctive.",
   "level": 1
  },
  {
   "id": "vb1-B02",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Latin <i>spectō</i> (“I watch”) belongs to the same conjugation as <i>ambulō</i>. Type its present imperative when one person is addressed.",
   "accept": [
    "spectā"
   ],
   "macrons": false,
   "explain": "When one person is addressed, the present imperative is the present stem of the verb, so the form is <i>spectā</i>, “watch!”",
   "level": 2
  },
  {
   "id": "vb1-B03",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“The committee recommends that he resign.” Why is “resign,” not “resigns,” used?",
   "options": [
    "It is the infinitive, used here without “to”",
    "It is the imperative, as a command addressed to him",
    "It is an error for “resigns”",
    "It is the subjunctive, after “recommends”"
   ],
   "answer": 3,
   "explain": "After verbs of demanding, recommending, and the like, English keeps the subjunctive, which has no “-s” in the third person singular: “that he resign,” as in “I insist that he be present.”",
   "level": 1
  },
  {
   "id": "vb1-B04",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Latin <i>tonat</i> means “it thunders,” and no one does the thundering. Type the person and number in which an impersonal verb is used.",
   "accept": [
    "third person singular",
    "third singular",
    "3rd person singular",
    "third-person singular",
    "the third person singular",
    "3rd singular"
   ],
   "explain": "An impersonal verb is used only in the third person singular, without a personal subject, as <i>pluit</i> (“it rains”) is. English supplies “it” as a formal subject.",
   "level": 2
  },
  {
   "id": "vb1-B05",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>pallēscō</i> (“I turn pale”) is formed from <i>palleō</i> (“I am pale”). Which of Donatus’s forms is it?",
   "options": [
    "The frequentative",
    "The inchoative",
    "The desiderative",
    "The perfect"
   ],
   "answer": 1,
   "explain": "The ending <i>-ēscō</i> marks the inchoative form, which signifies beginning to do something or to become something, as <i>calēscō</i> (“I grow warm”) does.",
   "level": 1
  },
  {
   "id": "vb1-B06",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Type the mood of “Be” in “Be careful on the ice.”",
   "accept": [
    "imperative",
    "the imperative",
    "imperative mood"
   ],
   "explain": "The sentence is a command, and the verb is in the imperative mood. English uses the bare form of the verb, without a subject.",
   "level": 2
  },
  {
   "id": "vb1-B07",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>vēnor</i> (“I hunt”) has the ending of a passive verb, but it means “I hunt,” and there is no active <i>vēnō</i>. What kind of verb is it?",
   "options": [
    "Passive",
    "Common",
    "Intransitive",
    "Deponent"
   ],
   "answer": 3,
   "explain": "A verb that is passive in form but active in meaning, and has no active form, is deponent, as <i>loquor</i> is. A common verb has both an active and a passive meaning.",
   "level": 1
  },
  {
   "id": "vb1-B08",
   "set": "B",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "A verb that does not take a direct object, as “laughed” in “The guests laughed,” is called by modern grammars what? Type one word.",
   "accept": [
    "intransitive"
   ],
   "explain": "Modern grammars call a verb that does not take a direct object intransitive, and Donatus would call such a verb neuter. A verb that takes a direct object is transitive.",
   "level": 2
  },
  {
   "id": "vb1-C01",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>Avis cantat</i> (“The bird sings”) presents the action as a fact. In what mood is <i>cantat</i>?",
   "options": [
    "Imperative",
    "Subjunctive",
    "Indicative",
    "Infinitive"
   ],
   "answer": 2,
   "explain": "The indicative mood presents the action as a fact; it is the mood of statements and of most questions.",
   "level": 1
  },
  {
   "id": "vb1-C02",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Type the command that corresponds to the statement “You close the gate,” addressed to one person.",
   "accept": [
    "close the gate",
    "close the gate!"
   ],
   "explain": "English forms the imperative with the bare form of the verb, usually without a subject: “Close the gate.”",
   "level": 2
  },
  {
   "id": "vb1-C03",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Where Donatus counts an optative and a subjunctive, how many moods do modern Latin grammars count?",
   "options": [
    "One, the subjunctive",
    "Two, as Donatus does",
    "None, because Latin uses auxiliaries",
    "Three, adding the conditional"
   ],
   "answer": 0,
   "explain": "Modern grammars count one mood, the subjunctive, which expresses wishes, commands, possibilities, and many kinds of dependent clause. Donatus kept the Greek distinction because Greek has separate optative forms.",
   "level": 1
  },
  {
   "id": "vb1-C04",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Type the infinitive in this sentence: “Learning to swim took her a whole summer.”",
   "accept": [
    "to swim",
    "swim"
   ],
   "explain": "“To swim” names the action without limiting it by person or number, so it is the infinitive.",
   "level": 2
  },
  {
   "id": "vb1-C05",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>parturiō</i> (“I am in labor,” literally “I want to bring forth”) is formed from <i>pariō</i> (“I bring forth”). Which of Donatus’s forms is it?",
   "options": [
    "The inchoative",
    "The frequentative",
    "The desiderative",
    "The impersonal"
   ],
   "answer": 2,
   "explain": "The ending <i>-uriō</i> marks the desiderative or meditative form, which signifies the wish or intention to do something, as <i>lectūriō</i> (“I want to read”) does.",
   "level": 1
  },
  {
   "id": "vb1-C06",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "Type the mood of “is” in “The river is high this spring.”",
   "accept": [
    "indicative",
    "the indicative",
    "indicative mood"
   ],
   "explain": "“Is” presents the height of the river as a fact, so it is in the indicative mood.",
   "level": 2
  },
  {
   "id": "vb1-C07",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "Latin <i>imitor</i> (“I imitate”) is deponent. What does <i>Puerī patrem imitantur</i> mean?",
   "options": [
    "“The boys imitate their father.”",
    "“The boys are imitated by their father.”",
    "“The father imitates the boys.”",
    "“The boys were imitating their father.”"
   ],
   "answer": 0,
   "explain": "A deponent verb is passive in form but active in meaning, so <i>imitantur</i> means “they imitate,” not “they are imitated.” Reading it as passive would reverse the sense. The tense is present, not past.",
   "level": 1
  },
  {
   "id": "vb1-C08",
   "set": "C",
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "In “The children slept until noon,” is “slept” transitive or intransitive? Type one word.",
   "accept": [
    "intransitive"
   ],
   "explain": "“Slept” takes no direct object, so it is intransitive; Donatus would call such a verb neuter, because it signifies neither doing nor undergoing.",
   "level": 2
  },
  {
   "id": "vb1-L1-01",
   "set": "A",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“And God said, Let there be light: and there was light.” (Genesis 1:3, King James Version.) In what manner does “Let there be light” present the action?",
   "options": [
    "As a fact",
    "As a command, given with “let”",
    "As a question",
    "As a condition contrary to fact"
   ],
   "answer": 1,
   "explain": "English has no imperative of the third person, so it forms one with “let.” God commands that the light be; the next words, “there was light,” state the result as a fact, in the indicative.",
   "source": "Genesis 1:3, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L1-02",
   "set": "B",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“Thy kingdom come, Thy will be done in earth, as it is in heaven.” (Matthew 6:10, King James Version.) Why is “come,” not “comes,” used?",
   "options": [
    "It is the subjunctive, expressing a wish",
    "It is the plural, agreeing with “kingdom”",
    "It is the infinitive",
    "It is a mistake for “comes”"
   ],
   "answer": 0,
   "explain": "“Thy kingdom come” is a prayer: it wishes, it does not state. The subjunctive “come” expresses the wish, as in “God save the king.” Donatus would call this use optative.",
   "source": "Matthew 6:10, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L1-03",
   "set": "A",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:” (Matthew 7:7, King James Version.) What is the voice of “shall be given”?",
   "options": [
    "Active",
    "Passive",
    "Neuter",
    "Deponent"
   ],
   "answer": 1,
   "explain": "The subject “it” does not give; it is given. A verb whose subject undergoes the action is in the passive voice.",
   "source": "Matthew 7:7, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L1-04",
   "set": "B",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“Jesus wept.” (John 11:35, King James Version.) The verb takes no object and passes to no one. What kind of verb is “wept” here?",
   "options": [
    "Passive",
    "Deponent",
    "Intransitive (in Donatus’s terms, neuter)",
    "Impersonal"
   ],
   "answer": 2,
   "explain": "“Wept” is active in form, but here it signifies no action passing to an object. Modern grammars call such a use intransitive; Donatus’s nearest class is the neuter verb, like <i>fleō</i> (“I weep”).",
   "source": "John 11:35, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L1-05",
   "set": "A",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "<i>Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</i> (“How long, Catiline, will you abuse our patience?”) (Cicero, First Oration against Catiline, chapter 1.) <i>Abūtēre</i> comes from <i>abūtor</i>, which has a passive ending and an active meaning. What kind of verb is it?",
   "options": [
    "Passive",
    "Neuter",
    "Deponent",
    "Impersonal"
   ],
   "answer": 2,
   "explain": "<i>Abūtor</i> (“I abuse,” “I use up”) has only passive forms, but it means something done, not suffered. Such a verb is deponent.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "vb1-L1-06",
   "set": "B",
   "level": 1,
   "deck": "iii.verb-1",
   "type": "mc",
   "prompt": "“In the sweat of thy face shalt thou eat bread, till thou return unto the ground; for out of it wast thou taken: for dust thou art, and unto dust shalt thou return.” (Genesis 3:19, King James Version.) The indicative would be “thou returnest.” In what mood is “return” in “till thou return”?",
   "options": [
    "Indicative",
    "Imperative",
    "Subjunctive",
    "Infinitive"
   ],
   "answer": 2,
   "explain": "After “till,” the older English sets the verb in the subjunctive when the event is still to come. The indicative of the second person singular would be “returnest.”",
   "source": "Genesis 3:19, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L2-01",
   "set": "A",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "<i>Mūsa, mihi causās memorā, quō nūmine laesō,</i> (“Muse, tell me the causes, through what wounded divinity,”) (Vergil, Aeneid, Book I, line 8.) Type the mood of <i>memorā</i>.",
   "accept": [
    "imperative",
    "the imperative",
    "imperative mood"
   ],
   "explain": "The poet addresses the Muse and commands her to tell. <i>Memorā</i> is the imperative singular of <i>memorō</i>, first conjugation.",
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb1-L2-02",
   "set": "B",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "<i>Mūsa, mihi causās memorā</i> (“Muse, tell me the causes”). (Vergil, Aeneid, Book I, line 8.) Type the imperative that would be used if all the Muses were addressed.",
   "accept": [
    "memorate",
    "memorāte"
   ],
   "macrons": false,
   "explain": "The imperative of the first conjugation is <i>memorā</i> to one person and <i>memorāte</i> to several, as <i>cantā</i> and <i>cantāte</i>.",
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb1-L2-03",
   "set": "A",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "“The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.” (Mark 1:3, King James Version.) Type the mood of “Prepare.”",
   "accept": [
    "imperative",
    "the imperative",
    "imperative mood"
   ],
   "explain": "“Prepare ye” is a command addressed to the hearers, with the pronoun “ye” added. It is the imperative.",
   "source": "Mark 1:3, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb1-L2-04",
   "set": "B",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "<i>quī ipsōrum linguā Celtae, nostrā Gallī appellantur</i> (“who in their own tongue are called Celts, in ours Gauls”). (Caesar, De Bello Gallico, Book I, chapter 1.) Type the voice of <i>appellantur</i>.",
   "accept": [
    "passive",
    "the passive",
    "passive voice"
   ],
   "explain": "The people do not call; they are called. <i>Appellantur</i> is the passive of <i>appellō</i> (“I call,” “I name”), with the ending <i>-ntur</i>.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "vb1-L2-05",
   "set": "A",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "<i>Senātus haec intellegit.</i> (“The senate understands these things.”) (Cicero, First Oration against Catiline, chapter 1.) Type the mood of <i>intellegit</i>.",
   "accept": [
    "indicative",
    "the indicative",
    "indicative mood"
   ],
   "explain": "Cicero states a fact: the senate understands. A verb that states or asks about a fact is in the indicative.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "vb1-L2-06",
   "set": "B",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "<i>Tantae mōlis erat Rōmānam condere gentem!</i> (“So great a labor it was to found the Roman race!”) (Vergil, Aeneid, Book I, line 33.) Type the infinitive in the line.",
   "accept": [
    "condere"
   ],
   "macrons": false,
   "explain": "<i>Condere</i> (“to found”) is the present infinitive of <i>condō</i>; it names the action without person or number and serves as the subject of <i>erat</i>.",
   "source": "Vergil, Aeneid, Book I, line 33; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb1-L2-07",
   "set": "A",
   "level": 2,
   "deck": "iii.verb-1",
   "type": "form",
   "prompt": "“Our Father which art in heaven, Hallowed be thy name.” (Matthew 6:9, King James Version.) The words do not state that the name is hallowed; they pray that it may be. Type the mood of “be” in “Hallowed be thy name.”",
   "accept": [
    "subjunctive",
    "the subjunctive",
    "subjunctive mood",
    "optative"
   ],
   "explain": "“Be” here is the subjunctive, expressing a wish, as in “Thy kingdom come.” The indicative would be “is.”",
   "source": "Matthew 6:9, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
