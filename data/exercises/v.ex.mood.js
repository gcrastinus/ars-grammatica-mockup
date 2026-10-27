/* Mood and Voice in Construction [v.ex.mood]  Exercise set opened from the Exercise button of v.mood. Written; 32 items in 2 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize the uses of the moods, the infinitive, and the verbals (choose or sort). Level II: find and explain them in real sentences from Cicero, Caesar, and Vergil, and rewrite verbal phrases as clauses.
   Level I (18), Level II (14). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level I, mastery at Level II (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['v.ex.mood'] = {
 "id": "v.ex.mood",
 "kind": "exercise",
 "status": "written",
 "section": "V",
 "title": "Mood and Voice in Construction",
 "openedFrom": "v.mood (Exercise button)",
 "covers": [
  {
   "deck": "v.mood",
   "cards": [
    "intro",
    "agent",
    "impersonal-passive",
    "infinitive",
    "indirect-statement",
    "participle",
    "gerundive",
    "independent-subjunctive",
    "dependent-subjunctive",
    "english"
   ]
  }
 ],
 "skill": "Tell the ablative of agent from the ablative of means; name the uses of the independent subjunctive; read the accusative and infinitive, the gerundive, and the sequence of tenses; turn a participle or absolute phrase into an English clause.",
 "types": [
  "sort",
  "identify",
  "mc",
  "transform"
 ],
 "pool": 32,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C.",
 "sets": {
  "A": 12,
  "B": 12,
  "C": 8
 },
 "levels": {
  "pass": 1,
  "top": 2,
  "names": {
   "1": "Recognize the uses of the moods and verbals: choose or sort.",
   "2": "Find and explain them in real Latin; rewrite verbal phrases as clauses."
  },
  "counts": {
   "1": 18,
   "2": 14
  }
 },
 "limit": "Only what v.mood teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "md-A01",
   "set": "A",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each Latin phrase by how it expresses the cause of a passive action.",
   "entries": [
    "<i>ā patre</i> (“by the father”)",
    "<i>lapide</i> (“by a stone”)",
    "<i>ab hostibus</i> (“by the enemy”)",
    "<i>sagittā</i> (“by an arrow”)",
    "<i>ā magistrō</i> (“by the teacher”)",
    "<i>igne</i> (“by fire”)"
   ],
   "bins": [
    "Ablative of agent (a person)",
    "Ablative of means (a thing)"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "In a passive sentence Latin expresses a person who acts by <i>ā</i> or <i>ab</i> with the ablative (the ablative of agent) and a thing that is used by the ablative alone (the ablative of means). English uses “by” for both.",
   "level": 1
  },
  {
   "id": "md-A02",
   "set": "A",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each independent subjunctive by its use.",
   "entries": [
    "<i>cantēmus</i> (“let us sing”)",
    "<i>discēdat</i> (“let him depart”)",
    "<i>utinam valeās</i> (“may you be well”)",
    "<i>quō eam?</i> (“where am I to go?”)",
    "<i>crēdat aliquis</i> (“someone may believe”)",
    "<i>pugnēmus</i> (“let us fight”)"
   ],
   "bins": [
    "Hortatory",
    "Jussive",
    "Optative",
    "Deliberative",
    "Potential"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    0
   ],
   "explain": "The independent subjunctive urges in the first person plural (hortatory), commands in the third person (jussive), wishes or prays, often with <i>utinam</i> (optative), asks what one should do (deliberative), and says what may or would happen (potential).",
   "level": 1
  },
  {
   "id": "md-A03",
   "set": "A",
   "deck": "v.mood",
   "type": "identify",
   "prompt": "<i>Nūntius dīxit Gallōs venīre</i> (“the messenger said that the Gauls were coming”). Click the subject of the infinitive.",
   "tokens": [
    "<i>Nūntius</i>",
    "<i>dīxit</i>",
    "<i>Gallōs</i>",
    "<i>venīre</i>"
   ],
   "answer": 2,
   "explain": "In the accusative and infinitive, the subject of the reported statement is in the accusative, <i>Gallōs</i>, and its verb is the infinitive <i>venīre</i>.",
   "level": 2
  },
  {
   "id": "md-A04",
   "set": "A",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "What does the Latin impersonal passive <i>curritur</i> mean?",
   "options": [
    "“He is run”",
    "“They ran”",
    "“It runs by itself”",
    "“People run”"
   ],
   "answer": 3,
   "explain": "<i>Currō</i> (“I run”) is intransitive, so its passive is used impersonally, in the third person singular, to say that the action takes place without naming who does it: “people run,” “there is running.”",
   "level": 1
  },
  {
   "id": "md-A05",
   "set": "A",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>incipit legere</i> (“he begins to read”), what use of the infinitive is <i>legere</i>?",
   "options": [
    "The complementary infinitive",
    "The infinitive as subject",
    "The infinitive of purpose",
    "The infinitive of indirect statement"
   ],
   "answer": 0,
   "explain": "<i>Incipiō</i> does not finish its sense by itself, so the infinitive completes it: the complementary infinitive.",
   "level": 1
  },
  {
   "id": "md-A06",
   "set": "A",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>dīxit nāvem ventūram esse</i> (“he said that the ship would come”), what time does the future infinitive show relative to <i>dīxit</i>?",
   "options": [
    "An earlier time",
    "A later time",
    "The same time",
    "No time at all"
   ],
   "answer": 1,
   "explain": "The future infinitive shows a time later than the main verb: the coming was still to happen when he spoke.",
   "level": 1
  },
  {
   "id": "md-A07",
   "set": "A",
   "deck": "v.mood",
   "type": "transform",
   "prompt": "Rewrite the participial phrase as a clause beginning with “Because”: “Fearing the storm, the fishermen stayed ashore.”",
   "accept": [
    "Because they feared the storm, the fishermen stayed ashore.",
    "Because they feared the storm the fishermen stayed ashore.",
    "Because the fishermen feared the storm, they stayed ashore."
   ],
   "explain": "A participle often contains a relation, here cause, that English can state with a conjunction: “Because they feared the storm, the fishermen stayed ashore.”",
   "level": 2
  },
  {
   "id": "md-A08",
   "set": "A",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "What does Latin <i>ad pontem aedificandum</i> mean?",
   "options": [
    "“the bridge having been built”",
    "“to the bridge that builds”",
    "“after building the bridge”",
    "“for building a bridge”"
   ],
   "answer": 3,
   "explain": "<i>Aedificandum</i> is a gerundive agreeing with <i>pontem</i>; with <i>ad</i> it expresses purpose: “for building a bridge.”",
   "level": 1
  },
  {
   "id": "md-B01",
   "set": "B",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each Latin phrase by how it expresses the cause of a passive action.",
   "entries": [
    "<i>ā rēgīnā</i> (“by the queen”)",
    "<i>gladiō</i> (“by a sword”)",
    "<i>ā cīvibus</i> (“by the citizens”)",
    "<i>imbre</i> (“by the rain”)",
    "<i>ab amīcō</i> (“by a friend”)",
    "<i>fame</i> (“by hunger”)"
   ],
   "bins": [
    "Ablative of agent (a person)",
    "Ablative of means (a thing)"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "In a passive sentence Latin expresses a person who acts by <i>ā</i> or <i>ab</i> with the ablative (the ablative of agent) and a thing that is used by the ablative alone (the ablative of means). English uses “by” for both.",
   "level": 1
  },
  {
   "id": "md-B02",
   "set": "B",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each independent subjunctive by its use.",
   "entries": [
    "<i>maneāmus</i> (“let us stay”)",
    "<i>taceat</i> (“let him be silent”)",
    "<i>utinam veniant</i> (“may they come”)",
    "<i>quid dīcam?</i> (“what am I to say?”)",
    "<i>hoc nēmō crēdat</i> (“no one would believe this”)",
    "<i>abeant</i> (“let them go away”)"
   ],
   "bins": [
    "Hortatory",
    "Jussive",
    "Optative",
    "Deliberative",
    "Potential"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    1
   ],
   "explain": "The independent subjunctive urges in the first person plural (hortatory), commands in the third person (jussive), wishes or prays, often with <i>utinam</i> (optative), asks what one should do (deliberative), and says what may or would happen (potential).",
   "level": 1
  },
  {
   "id": "md-B03",
   "set": "B",
   "deck": "v.mood",
   "type": "identify",
   "prompt": "<i>Putō puerōs dormīre</i> (“I think that the boys are sleeping”). Click the infinitive.",
   "tokens": [
    "<i>Putō</i>",
    "<i>puerōs</i>",
    "<i>dormīre</i>"
   ],
   "answer": 2,
   "explain": "<i>Dormīre</i> is the present infinitive of the reported statement; its subject is the accusative <i>puerōs</i>, and the present shows the same time as <i>putō</i>.",
   "level": 2
  },
  {
   "id": "md-B04",
   "set": "B",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "Which tense of the subjunctive follows the main verb <i>mīsit</i> (“he sent”) in a purpose clause?",
   "options": [
    "The imperfect",
    "The present",
    "The future",
    "The perfect indicative"
   ],
   "answer": 0,
   "explain": "<i>Mīsit</i> is past, so by the sequence of tenses the subordinate clause has the imperfect subjunctive: <i>mīsit ut vidēret</i>.",
   "level": 1
  },
  {
   "id": "md-B05",
   "set": "B",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>mīlitēs urbem dēfendere dēbent</i> (“the soldiers ought to defend the city”), what use of the infinitive is <i>dēfendere</i>?",
   "options": [
    "The infinitive as subject",
    "The complementary infinitive",
    "The infinitive of indirect statement",
    "The infinitive of purpose"
   ],
   "answer": 1,
   "explain": "<i>Dēbeō</i> requires another verb to finish its sense, so <i>dēfendere</i> is a complementary infinitive.",
   "level": 1
  },
  {
   "id": "md-B06",
   "set": "B",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>hominibus moriendum est</i> (“men must die”), which word names those who must act?",
   "options": [
    "<i>moriendum</i>",
    "<i>est</i>",
    "<i>hominibus</i>",
    "No word names them"
   ],
   "answer": 2,
   "explain": "In the passive periphrastic the person who must do the action is in the dative of agent: <i>hominibus</i>.",
   "level": 1
  },
  {
   "id": "md-B07",
   "set": "B",
   "deck": "v.mood",
   "type": "transform",
   "prompt": "Rewrite the absolute phrase as a clause beginning with “When”: “The meal finished, the guests rose.”",
   "accept": [
    "When the meal was finished, the guests rose.",
    "When the meal had finished, the guests rose.",
    "When the meal was finished the guests rose.",
    "When the meal had finished the guests rose.",
    "When the meal finished, the guests rose.",
    "When the meal finished the guests rose."
   ],
   "explain": "English usually turns an absolute phrase into a clause with a conjunction; here the phrase tells the time.",
   "level": 2
  },
  {
   "id": "md-B08",
   "set": "B",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>pācis petendae causā</i> (“for the sake of seeking peace”), what is <i>petendae</i>?",
   "options": [
    "A gerundive agreeing with <i>pācis</i>",
    "A gerund with an object",
    "A present participle",
    "An infinitive"
   ],
   "answer": 0,
   "explain": "<i>Petendae</i> is a gerundive agreeing with <i>pācis</i>, genitive singular feminine; Latin uses the gerundive with a noun in place of the gerund with an object.",
   "level": 1
  },
  {
   "id": "md-C01",
   "set": "C",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each Latin phrase by how it expresses the cause of a passive action.",
   "entries": [
    "<i>ā duce</i> (“by the general”)",
    "<i>vulnere</i> (“by a wound”)",
    "<i>ā senātū</i> (“by the senate”)",
    "<i>saxō</i> (“by a rock”)",
    "<i>ā vīcīnīs</i> (“by the neighbors”)",
    "<i>clāmōribus</i> (“by the shouts”)"
   ],
   "bins": [
    "Ablative of agent (a person)",
    "Ablative of means (a thing)"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "In a passive sentence Latin expresses a person who acts by <i>ā</i> or <i>ab</i> with the ablative (the ablative of agent) and a thing that is used by the ablative alone (the ablative of means). English uses “by” for both.",
   "level": 1
  },
  {
   "id": "md-C02",
   "set": "C",
   "deck": "v.mood",
   "type": "sort",
   "prompt": "Sort each independent subjunctive by its use.",
   "entries": [
    "<i>properēmus</i> (“let us hurry”)",
    "<i>veniat</i> (“let him come”)",
    "<i>utinam vincāmus</i> (“may we win”)",
    "<i>quid agāmus?</i> (“what are we to do?”)",
    "<i>dīxerit quispiam</i> (“someone might say”)",
    "<i>canāmus</i> (“let us sing”)"
   ],
   "bins": [
    "Hortatory",
    "Jussive",
    "Optative",
    "Deliberative",
    "Potential"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    0
   ],
   "explain": "The independent subjunctive urges in the first person plural (hortatory), commands in the third person (jussive), wishes or prays, often with <i>utinam</i> (optative), asks what one should do (deliberative), and says what may or would happen (potential).",
   "level": 1
  },
  {
   "id": "md-C03",
   "set": "C",
   "deck": "v.mood",
   "type": "identify",
   "prompt": "<i>Scīmus terram esse rotundam</i> (“we know that the earth is round”). Click the subject of the infinitive.",
   "tokens": [
    "<i>Scīmus</i>",
    "<i>terram</i>",
    "<i>esse</i>",
    "<i>rotundam</i>"
   ],
   "answer": 1,
   "explain": "After <i>scīmus</i>, a verb of knowing, the reported statement puts its subject in the accusative, <i>terram</i>, and its verb in the infinitive, <i>esse</i>.",
   "level": 2
  },
  {
   "id": "md-C04",
   "set": "C",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "In Latin <i>rogāvit quid facerēmus</i> (“he asked what we were doing”), why is <i>facerēmus</i> imperfect?",
   "options": [
    "Because the doing was unfinished",
    "Because the main verb is past",
    "Because it is a purpose clause",
    "Because questions take the imperfect"
   ],
   "answer": 1,
   "explain": "The indirect question follows the sequence of tenses: after the past <i>rogāvit</i> it has the imperfect subjunctive.",
   "level": 1
  },
  {
   "id": "md-C05",
   "set": "C",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "Which Latin construction does English often render with a clause beginning “because,” “when,” or “although”?",
   "options": [
    "A complementary infinitive",
    "The vocative",
    "A participle",
    "The ablative of means"
   ],
   "answer": 2,
   "explain": "A participle, or an ablative absolute, often contains a relation between two actions that English states with a conjunction, as in “the king, fearing danger, fled.”",
   "level": 1
  },
  {
   "id": "md-C06",
   "set": "C",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "What does Latin <i>mihi eundum est</i> mean?",
   "options": [
    "“I went”",
    "“I am going to him”",
    "“Let me go”",
    "“I must go”"
   ],
   "answer": 3,
   "explain": "The passive periphrastic of an intransitive verb, used impersonally, with the dative of agent <i>mihi</i>: “it must be gone by me,” that is, “I must go.”",
   "level": 1
  },
  {
   "id": "md-C07",
   "set": "C",
   "deck": "v.mood",
   "type": "transform",
   "prompt": "Rewrite the phrase as a clause beginning with “Although”: “Though wounded, the soldier fought on.”",
   "accept": [
    "Although he was wounded, the soldier fought on.",
    "Although he was wounded the soldier fought on.",
    "Although the soldier was wounded, he fought on."
   ],
   "explain": "The participle “wounded” here grants a fact in spite of which the soldier fought, so English can state it with “although.”",
   "level": 2
  },
  {
   "id": "md-C08",
   "set": "C",
   "deck": "v.mood",
   "type": "mc",
   "prompt": "What marks Latin <i>ambulēmus</i> (“let us walk”) as urging rather than stating?",
   "options": [
    "The indicative mood",
    "The subjunctive mood",
    "The imperative mood",
    "The infinitive"
   ],
   "answer": 1,
   "explain": "<i>Ambulēmus</i> is the present subjunctive, first person plural, used as a hortatory subjunctive; the indicative <i>ambulāmus</i> would state “we walk.”",
   "level": 1
  },
  {
   "id": "md-L2-01",
   "set": "A",
   "level": 2,
   "deck": "v.mood",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1: “you do not perceive that your plans are exposed.”) Click the subject of the infinitive.",
   "explain": "In indirect statement the subject of the infinitive is accusative: <i>consilia</i> is the subject of <i>patere</i>.",
   "tokens": [
    "Patere",
    "tua",
    "consilia",
    "non",
    "sentis,"
   ],
   "answer": 2,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "md-L2-02",
   "set": "B",
   "level": 2,
   "deck": "v.mood",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.1: “do you not see that your conspiracy is held bound by the knowledge of all these men?”) Click the subject of the infinitive <i>teneri</i>.",
   "explain": "<i>Coniurationem</i> is accusative, the subject of <i>teneri</i> after <i>vides</i>; <i>constrictam</i> agrees with it.",
   "tokens": [
    "constrictam",
    "iam",
    "horum",
    "omnium",
    "scientia",
    "teneri",
    "coniurationem",
    "tuam",
    "non",
    "vides?"
   ],
   "answer": 6,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "md-L2-03",
   "set": "A",
   "level": 2,
   "deck": "v.mood",
   "type": "identify",
   "prompt": "(Cicero, <i>In Catilinam</i> I.2: “you, Catiline, ought long ago to have been led to death by the consul’s order.”) Click the subject of the infinitive <i>duci</i>.",
   "explain": "<i>Te duci</i> is the subject of the impersonal <i>oportebat</i>, and <i>te</i>, accusative, is the subject of the infinitive. <i>Catilina</i> is vocative.",
   "tokens": [
    "Ad",
    "mortem",
    "te,",
    "Catilina,",
    "duci",
    "iussu",
    "consulis",
    "iam",
    "pridem",
    "oportebat,"
   ],
   "answer": 2,
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "md-L2-04",
   "set": "B",
   "level": 2,
   "deck": "v.mood",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.33: “of so great toil was it to found the Roman race.”) Click the infinitive that is the subject of <i>erat</i>.",
   "explain": "<i>Romanam condere gentem</i> is the subject: “to found the Roman race was of so great toil.” An infinitive can be used as a noun.",
   "tokens": [
    "Tantae",
    "molis",
    "erat",
    "Romanam",
    "condere",
    "gentem!"
   ],
   "answer": 4,
   "source": "Vergil, Aeneid, Book I, line 33; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "md-L2-05",
   "set": "A",
   "level": 2,
   "deck": "v.mood",
   "type": "identify",
   "prompt": "(Vergil, <i>Aeneid</i> I.19 to 20: “but she had heard that a race was being drawn from Trojan blood.”) Click the subject of the infinitive.",
   "explain": "After <i>audierat</i>, a verb of hearing, the statement goes into the accusative and infinitive: <i>progeniem duci</i>.",
   "tokens": [
    "Progeniem",
    "sed",
    "enim",
    "Troiano",
    "a",
    "sanguine",
    "duci",
    "audierat,"
   ],
   "answer": 0,
   "source": "Vergil, Aeneid, Book I, lines 19 to 20; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "md-L2-06",
   "set": "B",
   "level": 2,
   "deck": "v.mood",
   "type": "mc",
   "prompt": "<i>Forsan et haec olim meminisse iuvabit</i> (Vergil, <i>Aeneid</i> I.203: “perhaps someday it will please us to remember even these things”). How is <i>meminisse</i> used?",
   "options": [
    "As the subject of <i>iuvabit</i>",
    "As a purpose clause",
    "As a historical infinitive",
    "As the object of <i>haec</i>"
   ],
   "answer": 0,
   "explain": "“To remember even these things will please”: the infinitive is the subject of the impersonal <i>iuvabit</i>.",
   "source": "Vergil, Aeneid, Book I, line 203; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "md-L2-07",
   "set": "A",
   "level": 2,
   "deck": "v.mood",
   "type": "mc",
   "prompt": "<i>Quid proxima, quid superiore nocte egeris, ubi fueris, quos convocaveris, quid consilii ceperis, quem nostrum ignorare arbitraris?</i> (Cicero, <i>In Catilinam</i> I.1.) Why are <i>egeris</i>, <i>fueris</i>, <i>convocaveris</i>, and <i>ceperis</i> subjunctive?",
   "options": [
    "They are indirect questions, depending on <i>ignorare</i>",
    "They are purpose clauses",
    "They are commands",
    "They are conditions contrary to fact"
   ],
   "answer": 0,
   "explain": "A question that depends on another verb takes the subjunctive. The perfect shows time before the present <i>arbitraris</i>.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "md-L2-08",
   "set": "B",
   "level": 2,
   "deck": "v.mood",
   "type": "mc",
   "prompt": "<i>ea quae ad effeminandos animos pertinent</i> (Caesar, <i>De Bello Gallico</i> I.1). What does <i>ad effeminandos animos</i> mean?",
   "options": [
    "“to the weakening of their spirits”",
    "“having weakened their spirits”",
    "“the spirits must be weakened”",
    "“by weakened spirits”"
   ],
   "answer": 0,
   "explain": "<i>Ad</i> with the gerundive and its noun in the accusative shows what something tends toward: the things that serve to weaken their spirits.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  }
 ]
};
