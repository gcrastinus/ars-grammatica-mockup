/* Participles [iii.ex.participles]  Exercise set opened from the Exercise button of iii.participle. Written; 41 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: recognize participles, their accidents, and their agreement (choose). Level II: produce a participle or name its time (type). Level III: participles in real sentences from the King James Bible, Milton, Bunyan, Austen, Caesar, and Vergil.
   Level I (15), Level II (15), Level III (11). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.participles'] = {
 "id": "iii.ex.participles",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "Participles",
 "openedFrom": "iii.participle (Exercise button)",
 "covers": [
  {
   "deck": "iii.participle",
   "cards": [
    "accidents",
    "latin-participles",
    "agreement",
    "relative-time",
    "perfect-deponent",
    "gerundive",
    "english",
    "gerund"
   ]
  }
 ],
 "skill": "Identify a participle and its accidents, its agreement, and the time it signifies relative to the main verb; distinguish participle and gerund in English.",
 "types": [
  "mc",
  "form"
 ],
 "pool": 41,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 16,
  "B": 15,
  "C": 10
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Recognize a participle, its accidents, and its agreement: choose the answer.",
   "2": "Produce a participle, or say when its action happens: type it.",
   "3": "Find the participles in real sentences, with their agreement and their time."
  },
  "counts": {
   "1": 15,
   "2": 15,
   "3": 11
  }
 },
 "limit": "Everything through III.10.",
 "instr": "Choose the answer or type the word or form. Macrons are not tested in typed Latin answers.",
 "items": [
  {
   "id": "ptc-A01",
   "set": "A",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Which accident does the participle take from the verb, not from the noun?",
   "options": [
    "Case",
    "Gender",
    "Tense",
    "Number"
   ],
   "answer": 2,
   "explain": "The participle takes tense and signification from the verb, and gender and case from the noun; number and figure it shares with both.",
   "level": 1
  },
  {
   "id": "ptc-A02",
   "set": "A",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>portō</i> (“carry”) has the present stem <i>portā-</i>. Type its present active participle, nominative singular.",
   "accept": [
    "portāns"
   ],
   "macrons": false,
   "explain": "The present active participle is formed from the present stem and <i>-ns</i>, so the form is <i>portāns</i>, “carrying.”",
   "level": 2
  },
  {
   "id": "ptc-A03",
   "set": "A",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In <i>Mātrem flentem cōnsōlāmur</i> (“We comfort the weeping mother”), what are the gender, number, and case of <i>flentem</i>?",
   "options": [
    "Feminine, singular, accusative",
    "Masculine, singular, nominative",
    "Feminine, singular, nominative",
    "Feminine, plural, accusative"
   ],
   "answer": 0,
   "explain": "The participle agrees with its noun in gender, number, and case. <i>Mātrem</i> is feminine, singular, and accusative, because it is the object of <i>cōnsōlāmur</i>, and so <i>flentem</i> is too.",
   "level": 1
  },
  {
   "id": "ptc-A04",
   "set": "A",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “Crossing the bridge, we saw the castle,” is the crossing before the seeing, at the same time, or after it? Type “before,” “same” (for the same time), or “after.”",
   "accept": [
    "same",
    "the same",
    "at the same time",
    "the same time",
    "same time",
    "simultaneous"
   ],
   "explain": "The present participle signifies an action at the same time as the main verb, so the crossing and the seeing happen together, although both are in the past.",
   "level": 2
  },
  {
   "id": "ptc-A05",
   "set": "A",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Latin <i>ēgressus</i> is the perfect participle of the deponent <i>ēgredior</i> (“I go out”). What does it mean?",
   "options": [
    "“having been led out”",
    "“going out”",
    "“having gone out”",
    "“about to go out”"
   ],
   "answer": 2,
   "explain": "The perfect participle of a deponent verb has an active meaning, so <i>ēgressus</i> means “having gone out.” In this way the deponent verbs supply a perfect active participle, which other Latin verbs lack.",
   "level": 1
  },
  {
   "id": "ptc-A06",
   "set": "A",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>timeō</i> (“fear”) has the present stem <i>timē-</i>. Type its gerundive (future passive participle), masculine nominative singular.",
   "accept": [
    "timendus"
   ],
   "macrons": false,
   "explain": "The gerundive is formed from the present stem and <i>-ndus</i>, so the form is <i>timendus</i>, “to be feared.”",
   "level": 2
  },
  {
   "id": "ptc-A07",
   "set": "A",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In “The frozen pond shone in the sun,” what is “frozen”?",
   "options": [
    "A past participle used as an adjective",
    "A present participle",
    "A gerund",
    "A verb in the past tense"
   ],
   "answer": 0,
   "explain": "“Frozen” is the past participle of “freeze,” and here it describes the pond, as an adjective does. The past tense of “freeze” is “froze.”",
   "level": 1
  },
  {
   "id": "ptc-A08",
   "set": "A",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “Fishing relaxes my grandfather,” is “fishing” a participle or a gerund? Type one word.",
   "accept": [
    "gerund",
    "a gerund"
   ],
   "explain": "“Fishing” names the action as a thing and is the subject of “relaxes,” so it is a gerund, a verbal noun.",
   "level": 2
  },
  {
   "id": "ptc-A09",
   "set": "A",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Latin <i>servātus</i> (“saved”) is passive in signification. What does Donatus mean by the signification of a participle?",
   "options": [
    "Whether it signifies a thing or a quality",
    "Whether it is present, past, or future",
    "Whether it signifies doing or undergoing",
    "Whether it agrees with a noun or not"
   ],
   "answer": 2,
   "explain": "By signification Donatus means what the verb calls voice: whether the participle signifies doing (active) or undergoing (passive). <i>Servātus</i> signifies undergoing.",
   "level": 1
  },
  {
   "id": "ptc-A10",
   "set": "A",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>dūcō</i> (“lead”) has the participial stem <i>duct-</i>. Type its perfect passive participle, masculine nominative singular.",
   "accept": [
    "ductus"
   ],
   "macrons": false,
   "explain": "The perfect passive participle is the participial stem with <i>-us</i>, so the form is <i>ductus</i>, “led.”",
   "level": 2
  },
  {
   "id": "ptc-B01",
   "set": "B",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>parō</i> (“prepare”) has the participial stem <i>parāt-</i>. Type its future active participle, masculine nominative singular.",
   "accept": [
    "parātūrus"
   ],
   "macrons": false,
   "explain": "The future active participle is the participial stem with <i>-ūrus</i>, so the form is <i>parātūrus</i>, “about to prepare.”",
   "level": 2
  },
  {
   "id": "ptc-B02",
   "set": "B",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Which form of the participle fits <i>Audīvimus puellās ___</i> (“We heard the girls singing”)?",
   "options": [
    "<i>cantantēs</i>",
    "<i>cantantem</i>",
    "<i>cantantium</i>",
    "<i>cantāns</i>"
   ],
   "answer": 0,
   "explain": "The participle agrees with <i>puellās</i>, which is feminine, plural, and accusative, so it takes the accusative plural <i>cantantēs</i>. <i>Cantantem</i> is singular, <i>cantantium</i> genitive plural, and <i>cantāns</i> nominative singular.",
   "level": 1
  },
  {
   "id": "ptc-B03",
   "set": "B",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “Having locked the door, she went to bed,” is the locking before the going, at the same time, or after it? Type “before,” “same” (for the same time), or “after.”",
   "accept": [
    "before",
    "earlier"
   ],
   "explain": "“Having locked” is a perfect participle, which signifies an action before the main verb, so the locking came first.",
   "level": 2
  },
  {
   "id": "ptc-B04",
   "set": "B",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Most Latin verbs have no perfect active participle. Which participle supplies this lack?",
   "options": [
    "The present active participle",
    "The gerundive",
    "The perfect participle of a deponent verb",
    "The future active participle"
   ],
   "answer": 2,
   "explain": "A deponent verb is passive in form but active in meaning, so its perfect participle means “having done,” not “having been done.” This supplies the perfect active participle that other verbs lack.",
   "level": 1
  },
  {
   "id": "ptc-B05",
   "set": "B",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "<i>Legō</i> has the gerundive <i>legendus</i>. Type the gerundive of <i>dīcō</i> (“say”), formed in the same way, masculine nominative singular.",
   "accept": [
    "dīcendus"
   ],
   "macrons": false,
   "explain": "<i>Dīcō</i> belongs to the third conjugation, like <i>legō</i>, so its gerundive is <i>dīcendus</i>, “to be said.”",
   "level": 2
  },
  {
   "id": "ptc-B06",
   "set": "B",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In “The children are playing outside,” what does the present participle “playing” help to form?",
   "options": [
    "The progressive",
    "The passive voice",
    "The perfect tense",
    "The future tense"
   ],
   "answer": 0,
   "explain": "The present participle is used with “be” to form the progressive, which presents the action as going on. The past participle forms the passive and the perfect.",
   "level": 1
  },
  {
   "id": "ptc-B07",
   "set": "B",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “The whistling kettle woke us,” is “whistling” a participle or a gerund? Type one word.",
   "accept": [
    "participle",
    "a participle"
   ],
   "explain": "“Whistling” describes the kettle, as an adjective does, so it is a participle. A gerund would name the action as a thing.",
   "level": 2
  },
  {
   "id": "ptc-B08",
   "set": "B",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Which of these accidents does the participle lack?",
   "options": [
    "Tense",
    "Case",
    "Mood",
    "Number"
   ],
   "answer": 2,
   "explain": "The participle has tense and signification from the verb and gender and case from the noun, but it lacks mood and person, which belong to the verb as it is said of a subject.",
   "level": 1
  },
  {
   "id": "ptc-B09",
   "set": "B",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>moveō</i> (“move”) has the participial stem <i>mōt-</i>. Type its perfect passive participle, masculine nominative singular.",
   "accept": [
    "mōtus"
   ],
   "macrons": false,
   "explain": "The perfect passive participle is the participial stem with <i>-us</i>, so the form is <i>mōtus</i>, “moved.” English “motion” comes from the same stem.",
   "level": 2
  },
  {
   "id": "ptc-B10",
   "set": "B",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In <i>Hostēs fugientēs secūtī sumus</i> (“We followed the fleeing enemy”), with which word does <i>fugientēs</i> agree?",
   "options": [
    "<i>secūtī</i>",
    "The understood subject “we”",
    "No word, since it stands alone",
    "<i>hostēs</i>"
   ],
   "answer": 3,
   "explain": "<i>Fugientēs</i> describes the enemy and agrees with <i>hostēs</i> in gender, number, and case (masculine, plural, accusative). The enemy, not “we,” were fleeing.",
   "level": 1
  },
  {
   "id": "ptc-C01",
   "set": "C",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "<i>Urbs</i> (“city”) is feminine. Which phrase has the participle agreeing with it?",
   "options": [
    "<i>urbs incēnsa</i>",
    "<i>urbs incēnsus</i>",
    "<i>urbs incēnsum</i>",
    "<i>urbs incēnsōs</i>"
   ],
   "answer": 0,
   "explain": "The participle takes the gender, number, and case of its noun. <i>Urbs</i> is feminine, singular, and nominative, so the participle is <i>incēnsa</i>: “the burned city.”",
   "level": 1
  },
  {
   "id": "ptc-C02",
   "set": "C",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “About to leave, he shook our hands,” is the leaving before the shaking, at the same time, or after it? Type “before,” “same” (for the same time), or “after.”",
   "accept": [
    "after",
    "later"
   ],
   "explain": "“About to leave” is the English way of saying what Latin says with a future participle, and the future participle signifies an action after the main verb. So the leaving comes after the handshake.",
   "level": 2
  },
  {
   "id": "ptc-C03",
   "set": "C",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In <i>Dux, hostēs aggressus, vīcit</i> (“The general, ___ the enemy, won”), <i>aggressus</i> is the perfect participle of the deponent <i>aggredior</i> (“I attack”). How is it translated?",
   "options": [
    "“having been attacked”",
    "“attacking”",
    "“having attacked”",
    "“about to attack”"
   ],
   "answer": 2,
   "explain": "The perfect participle of a deponent verb is active in meaning, so <i>aggressus</i> means “having attacked.”",
   "level": 1
  },
  {
   "id": "ptc-C04",
   "set": "C",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "English has borrowed several Latin gerundives. Type the one that means “a thing to be added.”",
   "accept": [
    "addendum"
   ],
   "explain": "<i>Addendum</i> is the neuter gerundive of <i>addō</i> (“add”), “a thing to be added,” as “memorandum” is “a thing to be remembered.”",
   "level": 2
  },
  {
   "id": "ptc-C05",
   "set": "C",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "Which sentence has a participial phrase that refers clearly to a noun in the sentence?",
   "options": [
    "“Drenched by the rain, the travelers found shelter.”",
    "“Drenched by the rain, the shelter was welcome.”",
    "“Drenched by the rain, a fire was lit.”",
    "“Drenched by the rain, it was time to stop.”"
   ],
   "answer": 0,
   "explain": "A participial phrase must refer clearly to a noun, and here “drenched” describes the travelers. In the other sentences the phrase would describe the shelter, the fire, or nothing, which is not what is meant.",
   "level": 1
  },
  {
   "id": "ptc-C06",
   "set": "C",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “a sleeping child,” is “sleeping” a participle or a gerund? Type one word.",
   "accept": [
    "participle",
    "a participle"
   ],
   "explain": "“Sleeping” describes the child, as an adjective does, so it is a participle.",
   "level": 2
  },
  {
   "id": "ptc-C07",
   "set": "C",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "From which part of speech does the participle take gender and case?",
   "options": [
    "The verb",
    "The adverb",
    "The noun",
    "The pronoun"
   ],
   "answer": 2,
   "explain": "Gender and case are accidents of the noun, and the participle takes them from it; tense and signification it takes from the verb.",
   "level": 1
  },
  {
   "id": "ptc-C08",
   "set": "C",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "Latin <i>vincō</i> (“conquer”) has the participial stem <i>vict-</i>. Type its future active participle, masculine nominative singular.",
   "accept": [
    "victūrus"
   ],
   "macrons": false,
   "explain": "The future active participle is the participial stem with <i>-ūrus</i>, so the form is <i>victūrus</i>, “about to conquer.”",
   "level": 2
  },
  {
   "id": "ptc-C09",
   "set": "C",
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "In <i>Equōs hinnientēs audīvimus</i> (“We heard the horses neighing”), what are the gender, number, and case of <i>hinnientēs</i>?",
   "options": [
    "Masculine, plural, accusative",
    "Masculine, plural, nominative",
    "Masculine, singular, accusative",
    "Feminine, plural, accusative"
   ],
   "answer": 0,
   "explain": "The participle agrees with <i>equōs</i>, the object of <i>audīvimus</i>, which is masculine, plural, and accusative. The ending <i>-ēs</i> could also be nominative, but the noun decides.",
   "level": 1
  },
  {
   "id": "ptc-C10",
   "set": "C",
   "deck": "iii.participle",
   "type": "form",
   "prompt": "In “Wounded in the battle, the soldier was carried home,” is the wounding before the carrying, at the same time, or after it? Type “before,” “same” (for the same time), or “after.”",
   "accept": [
    "before",
    "earlier"
   ],
   "explain": "“Wounded” is a past participle, which signifies an action before the main verb, so the wounding came first.",
   "level": 2
  },
  {
   "id": "ptc-L3-01",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "“And they came with haste, and found Mary, and Joseph, and the babe lying in a manger.” (Luke 2:16, King James Version.) With which noun does the participle “lying” go, and when is the lying?",
   "options": [
    "With “Joseph”; before the finding",
    "With “the babe”; at the same time as the finding",
    "With “manger”; after the finding",
    "With “they”; at the same time as the coming"
   ],
   "answer": 1,
   "explain": "“Lying in a manger” describes the babe, and the babe was lying there when they found him. A present participle signifies time the same as that of its main verb.",
   "source": "Luke 2:16, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ptc-L3-02",
   "set": "B",
   "level": 3,
   "deck": "iii.participle",
   "type": "form",
   "prompt": "“The voice of one crying in the wilderness, Prepare ye the way of the Lord, make his paths straight.” (Mark 1:3, King James Version.) Is “crying” a participle or a gerund? Type one word.",
   "accept": [
    "participle",
    "a participle"
   ],
   "explain": "“Crying” describes “one,” the person who cries; it does the work of an adjective, so it is a participle. A gerund would name the action as a noun, as in “Crying did him good.”",
   "source": "Mark 1:3, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "ptc-L3-03",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "<i>Quicquid id est, timeō Danaōs et dōna ferentīs.</i> (“Whatever it is, I fear the Greeks even bearing gifts.”) (Vergil, Aeneid, Book II, line 49.) <i>Ferentīs</i> is the older spelling of <i>ferentēs</i>. With which word does it agree?",
   "options": [
    "<i>dōna</i>",
    "<i>Danaōs</i>",
    "<i>id</i>",
    "<i>quicquid</i>"
   ],
   "answer": 1,
   "explain": "<i>Ferentīs</i> is the present participle of <i>ferō</i>, masculine accusative plural, agreeing with <i>Danaōs</i>: the Greeks are the ones bearing. <i>Dōna</i> is its object.",
   "source": "Vergil, Aeneid, Book II, line 49; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "ptc-L3-04",
   "set": "B",
   "level": 3,
   "deck": "iii.participle",
   "type": "form",
   "prompt": "“Thus Satan, talking to his nearest mate, / With head uplift above the wave, … / Lay floating many a rood,” (Milton, Paradise Lost, Book I.) Is the talking before the lying, at the same time, or after it? Type “before,” “same” (for the same time), or “after.”",
   "accept": [
    "same",
    "the same",
    "at the same time",
    "the same time",
    "same time",
    "simultaneous"
   ],
   "explain": "“Talking” is a present participle agreeing with “Satan”; it signifies time the same as that of the main verb “lay.” Satan talks as he lies on the flood.",
   "source": "Milton, Paradise Lost, Book I, line 192; text checked against Project Gutenberg eBook #26 (Paradise Lost)"
  },
  {
   "id": "ptc-L3-05",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "<i>ea quae ad effēminandōs animōs pertinent important</i> (“they bring in those things which tend to weaken the spirit,” literally “which pertain to spirits to be weakened”). (Caesar, De Bello Gallico, Book I, chapter 1.) What is <i>effēminandōs</i>, and with what does it agree?",
   "options": [
    "A present active participle, agreeing with <i>quae</i>",
    "A gerundive, masculine accusative plural, agreeing with <i>animōs</i>",
    "A perfect passive participle, agreeing with <i>ea</i>",
    "A gerund, with no agreement"
   ],
   "answer": 1,
   "explain": "<i>Effēminandōs</i> has the <i>-nd-</i> of the gerundive (future passive participle). It agrees with <i>animōs</i> in gender, number, and case, after <i>ad</i>, which expresses purpose or tendency.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "ptc-L3-06",
   "set": "B",
   "level": 3,
   "deck": "iii.participle",
   "type": "form",
   "prompt": "<i>Gallia est omnis dīvīsa in partēs trēs</i> (“All Gaul is divided into three parts”). (Caesar, De Bello Gallico, Book I, chapter 1.) <i>Dīvīsa</i> is the perfect passive participle of <i>dīvidō</i>. Type its gender here.",
   "accept": [
    "feminine",
    "f",
    "f.",
    "fem",
    "fem."
   ],
   "explain": "<i>Dīvīsa</i> agrees with <i>Gallia</i>, which is feminine, singular, and nominative.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "ptc-L3-07",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "<i>Mūsa, mihi causās memorā, quō nūmine laesō,</i> (“Muse, tell me the causes, through what divinity offended,”) (Vergil, Aeneid, Book I, line 8.) What case is the participle <i>laesō</i>, and why?",
   "options": [
    "Dative, agreeing with <i>mihi</i>",
    "Ablative, agreeing with <i>nūmine</i> in an ablative absolute",
    "Nominative, agreeing with <i>Mūsa</i>",
    "Accusative, agreeing with <i>causās</i>"
   ],
   "answer": 1,
   "explain": "<i>Laesō</i>, perfect passive participle of <i>laedō</i> (“hurt,” “offend”), is ablative singular neuter, agreeing with <i>nūmine</i>: “what divinity having been offended.” Noun and participle in the ablative form an ablative absolute.",
   "source": "Vergil, Aeneid, Book I, line 8; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "ptc-L3-08",
   "set": "B",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "“It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.” (Austen, Pride and Prejudice, chapter 1.) What is “acknowledged”?",
   "options": [
    "A past tense verb with “truth” as its subject",
    "A past participle describing “truth”",
    "A gerund",
    "A present participle"
   ],
   "answer": 1,
   "explain": "“Acknowledged” describes the truth: it is a truth acknowledged by everyone. It is a past participle, passive in signification, with the adverb “universally.”",
   "source": "Jane Austen, Pride and Prejudice, chapter 1; text checked against Project Gutenberg eBook #1342 (Pride and Prejudice)"
  },
  {
   "id": "ptc-L3-09",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "form",
   "prompt": "“I saw a man clothed with rags, standing in a certain place, with his face from his own house, a book in his hand, and a great burden upon his back.” (Bunyan, The Pilgrim’s Progress, opening of the First Part.) Type the past participle in the sentence.",
   "accept": [
    "clothed"
   ],
   "explain": "“Clothed” is the past participle of “clothe,” passive in signification: the man has been clothed with rags. “Standing” is a present participle.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening of the First Part; text checked against Project Gutenberg eBook #131 (The Pilgrim’s Progress)"
  },
  {
   "id": "ptc-L3-10",
   "set": "B",
   "level": 3,
   "deck": "iii.participle",
   "type": "form",
   "prompt": "“I saw a man clothed with rags, standing in a certain place,” (Bunyan, The Pilgrim’s Progress, opening of the First Part.) Type the noun with which “standing” goes.",
   "accept": [
    "man",
    "a man",
    "the man"
   ],
   "explain": "“Standing in a certain place” describes the man whom the dreamer saw, as “clothed with rags” does.",
   "source": "John Bunyan, The Pilgrim’s Progress, opening of the First Part; text checked against Project Gutenberg eBook #131 (The Pilgrim’s Progress)"
  },
  {
   "id": "ptc-L3-11",
   "set": "A",
   "level": 3,
   "deck": "iii.participle",
   "type": "mc",
   "prompt": "“When they saw the star, they rejoiced with exceeding great joy.” (Matthew 2:10, King James Version.) How is the participle “exceeding” used here?",
   "options": [
    "As a gerund, the object of “with”",
    "As an adverb, telling how great",
    "As a noun",
    "As a verb with “joy” as its object"
   ],
   "answer": 1,
   "explain": "“Exceeding” is the present participle of “exceed,” but here it qualifies the adjective “great,” as “exceedingly” would: it is used as an adverb.",
   "source": "Matthew 2:10, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
