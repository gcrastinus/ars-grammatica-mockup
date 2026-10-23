/* The Verb II: Tense, Person, Number, and Conjugation [iii.ex.verb-2]  Exercise set opened from the Exercise button of iii.verb-2. Written; 48 items in 3 levels.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: parse and recognize tense and aspect (choose). Level II: produce forms and name tenses (type). Level III: parse verbs in real sentences from Vergil, Caesar, Cicero, and the King James Bible.
   Level I (18), Level II (18), Level III (12). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['iii.ex.verb-2'] = {
 "id": "iii.ex.verb-2",
 "kind": "exercise",
 "status": "written",
 "section": "III",
 "title": "The Verb II: Tense, Person, Number, and Conjugation",
 "openedFrom": "iii.verb-2 (Exercise button)",
 "covers": [
  {
   "deck": "iii.verb-2",
   "cards": [
    "tense",
    "six-tenses",
    "person-number",
    "conjugation",
    "principal-parts",
    "present-system",
    "signs",
    "perfect-system",
    "english-tense",
    "aspect-latin",
    "aspect-english-greek",
    "sum",
    "parsing"
   ]
  }
 ],
 "skill": "Parse a verb (person, number, tense, conjugation); produce a Latin form from the conjugation tables; say whether a form presents the action as going on or as complete.",
 "types": [
  "mc",
  "form"
 ],
 "pool": 48,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 18,
  "B": 18,
  "C": 12
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Parse a verb and recognize its tense and aspect: choose the answer.",
   "2": "Produce a form from the conjugation tables, or name a tense: type it.",
   "3": "Parse the verbs of real sentences from the Latin authors and the English Bible."
  },
  "counts": {
   "1": 18,
   "2": 18,
   "3": 12
  }
 },
 "limit": "The conjugations and tenses shown in III.8 and III.9; no participles. Latin forms are generated from the conjugation tables.",
 "instr": "Choose the answer or type the word or form. Macrons are not tested in typed Latin answers.",
 "items": [
  {
   "id": "vb2-A01",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Which are the three principal parts of the English verb “swear”?",
   "options": [
    "“swear,” “sweared,” “sweared”",
    "“swear,” “swore,” “sworn”",
    "“swear,” “swore,” “swore”",
    "“swear,” “sworn,” “swore”"
   ],
   "answer": 1,
   "explain": "An English verb is learned by its present, its past, and its past participle. “Swear” is irregular and changes its vowel: “swear,” “swore,” “sworn,” as in “He swore an oath” and “He has sworn an oath.”",
   "level": 1
  },
  {
   "id": "vb2-A02",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Type the Latin for “they are,” from <i>sum</i>.",
   "accept": [
    "sunt"
   ],
   "macrons": false,
   "explain": "The present indicative of <i>sum</i> is <i>sum</i>, <i>es</i>, <i>est</i>, <i>sumus</i>, <i>estis</i>, <i>sunt</i>, so “they are” is <i>sunt</i>.",
   "level": 2
  },
  {
   "id": "vb2-A03",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Parse Latin <i>mittēbant</i>, from <i>mittō</i>, <i>mittere</i>, <i>mīsī</i>, <i>missum</i> (“send”).",
   "options": [
    "Third person plural, present indicative active",
    "Third person plural, future indicative active",
    "First person plural, imperfect indicative active",
    "Third person plural, imperfect indicative active"
   ],
   "answer": 3,
   "explain": "The present stem <i>mitt-</i> takes the sign <i>-ēbā-</i> of the imperfect in the third conjugation, and <i>-nt</i> is the ending of the third person plural active: “they were sending.”",
   "level": 1
  },
  {
   "id": "vb2-A04",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>parābat</i> means “he was preparing.” Type its tense.",
   "accept": [
    "imperfect",
    "the imperfect",
    "imperfect tense"
   ],
   "explain": "The sign <i>-bā-</i> marks the imperfect, which places the action in the past and presents it as going on.",
   "level": 2
  },
  {
   "id": "vb2-A05",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Which English rendering fits Latin <i>servāverat</i> (from <i>servō</i>, “save”)?",
   "options": [
    "“he has saved”",
    "“he had saved”",
    "“he will have saved”",
    "“he was saving”"
   ],
   "answer": 1,
   "explain": "<i>Servāverat</i> is built on the perfect stem <i>servāv-</i> with the sign <i>-era-</i> of the pluperfect, so it means “he had saved.”",
   "level": 1
  },
  {
   "id": "vb2-A06",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>parō</i> means “I prepare.” Type the form that means “we prepare.”",
   "accept": [
    "parāmus"
   ],
   "macrons": false,
   "explain": "The ending of the first person plural active is <i>-mus</i>, added to the present stem <i>parā-</i>, so the form is <i>parāmus</i>.",
   "level": 2
  },
  {
   "id": "vb2-A07",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>tenēre</i> (“to hold”) has a long <i>ē</i> in its ending. To which conjugation does <i>teneō</i> belong?",
   "options": [
    "The third",
    "The first",
    "The fourth",
    "The second"
   ],
   "answer": 3,
   "explain": "The conjugation is known from the present infinitive. An infinitive in <i>-ēre</i>, with a long <i>ē</i>, marks the second conjugation, as in <i>monēre</i>; the third has a short <i>e</i>, as in <i>regere</i>.",
   "level": 1
  },
  {
   "id": "vb2-A08",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "The principal parts of <i>mittō</i> (“send”) are <i>mittō</i>, <i>mittere</i>, ___, <i>missum</i>. Type the third part.",
   "accept": [
    "mīsī"
   ],
   "macrons": false,
   "explain": "The third principal part is the first person singular of the perfect indicative, <i>mīsī</i> (“I sent”). It cannot be worked out from the present, so it must be learned with the verb.",
   "level": 2
  },
  {
   "id": "vb2-A09",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>nārrābat</i> and <i>nārrāvit</i> both speak of the past. Which presents the telling as going on?",
   "options": [
    "<i>nārrāvit</i>, the perfect",
    "<i>nārrābat</i>, the imperfect",
    "Both, since both are past tenses",
    "Neither, since Latin does not mark aspect"
   ],
   "answer": 1,
   "explain": "The imperfect <i>nārrābat</i> means “he was telling” and presents the action as going on, whereas the perfect <i>nārrāvit</i> means “he told” and presents it as complete. Both are past, but they differ in aspect.",
   "level": 1
  },
  {
   "id": "vb2-A10",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Varro divides the Latin tenses into those of the incomplete action and those of the complete action. To which group does the future perfect belong?",
   "options": [
    "The incomplete action (<i>īnfectum</i>)",
    "The complete action (<i>perfectum</i>)",
    "Neither group, since it is future",
    "Both groups, since it is a future and a perfect"
   ],
   "answer": 1,
   "explain": "The future perfect, like the perfect and the pluperfect, is built on the perfect stem and presents the action as complete, so it belongs with the <i>perfectum</i>. It differs from the future in aspect, not in time.",
   "level": 1
  },
  {
   "id": "vb2-A11",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "“The children played in the yard.” Type the verb phrase that presents the playing as going on, in the past progressive.",
   "accept": [
    "were playing"
   ],
   "explain": "The English progressive is formed with “be” and the form in “-ing,” so the past progressive is “were playing,” which presents the action as going on.",
   "level": 2
  },
  {
   "id": "vb2-A12",
   "set": "A",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Type the auxiliary that forms the English perfect in “She ___ finished the book,” which presents the action as complete with its result still present.",
   "accept": [
    "has"
   ],
   "explain": "The English perfect is formed with “have” and the past participle: “She has finished the book.”",
   "level": 2
  },
  {
   "id": "vb2-B01",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Which sentence uses the past tense of “ring” correctly?",
   "options": [
    "“The alarm rung twice.”",
    "“The alarm ringed twice.”",
    "“The alarm rang twice.”",
    "“The alarm has rang twice.”"
   ],
   "answer": 2,
   "explain": "The principal parts of “ring” are “ring,” “rang,” “rung,” so the past is “rang.” “Rung” is the past participle, used with “has” (“has rung”), and “ringed” is a barbarism.",
   "level": 1
  },
  {
   "id": "vb2-B02",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "The imperfect of <i>sum</i> is <i>eram</i>, <i>erās</i>, <i>erat</i>, and so on. Type the Latin for “we were.”",
   "accept": [
    "erāmus"
   ],
   "macrons": false,
   "explain": "The imperfect of <i>sum</i> takes the regular personal endings, so “we were” is <i>erāmus</i>.",
   "level": 2
  },
  {
   "id": "vb2-B03",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Parse Latin <i>docēbimus</i>, from <i>doceō</i>, <i>docēre</i>, <i>docuī</i>, <i>doctum</i> (“teach”).",
   "options": [
    "First person plural, future indicative active",
    "First person plural, imperfect indicative active",
    "First person plural, present indicative active",
    "Third person plural, future indicative active"
   ],
   "answer": 0,
   "explain": "In the second conjugation the sign <i>-bi-</i> marks the future, and <i>-mus</i> is the ending of the first person plural: “we shall teach.” The imperfect would be <i>docēbāmus</i>.",
   "level": 1
  },
  {
   "id": "vb2-B04",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>mīserat</i> means “he had sent.” Type its tense.",
   "accept": [
    "pluperfect",
    "the pluperfect",
    "pluperfect tense"
   ],
   "explain": "<i>Mīserat</i> is built on the perfect stem <i>mīs-</i> with the sign <i>-era-</i>, so it is the pluperfect, an action complete before another past time.",
   "level": 2
  },
  {
   "id": "vb2-B05",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>docuit</i> can be rendered “he taught” or “he has taught.” Which tense is it?",
   "options": [
    "The imperfect",
    "The pluperfect",
    "The perfect",
    "The future perfect"
   ],
   "answer": 2,
   "explain": "The Latin perfect serves both for an action completed in the past (“he taught”) and for an action whose completion is present (“he has taught”). It is built on the perfect stem <i>docu-</i>.",
   "level": 1
  },
  {
   "id": "vb2-B06",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>teneō</i> means “I hold.” Type the form that means “you hold,” said to several people.",
   "accept": [
    "tenētis"
   ],
   "macrons": false,
   "explain": "The ending of the second person plural active is <i>-tis</i>, added to the present stem <i>tenē-</i>, so the form is <i>tenētis</i>.",
   "level": 2
  },
  {
   "id": "vb2-B07",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>mittere</i> (“to send”) has a short <i>e</i> in its ending. To which conjugation does <i>mittō</i> belong?",
   "options": [
    "The third",
    "The second",
    "The first",
    "The fourth"
   ],
   "answer": 0,
   "explain": "An infinitive in <i>-ere</i> with a short <i>e</i> marks the third conjugation, as in <i>regere</i>; the second has a long <i>ē</i>, as in <i>monēre</i>.",
   "level": 1
  },
  {
   "id": "vb2-B08",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "The principal parts of <i>veniō</i> (“come”) are <i>veniō</i>, <i>venīre</i>, ___, <i>ventum</i>. Type the third part.",
   "accept": [
    "vēnī"
   ],
   "macrons": false,
   "explain": "The third principal part, the first person singular of the perfect, is <i>vēnī</i> (“I came”), which changes the vowel of the present and must be learned.",
   "level": 2
  },
  {
   "id": "vb2-B09",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "<i>Mīlitēs vigilābant</i> means “The soldiers were keeping watch.” How does the imperfect present the action?",
   "options": [
    "As complete",
    "As about to happen",
    "As going on",
    "As commanded"
   ],
   "answer": 2,
   "explain": "The imperfect presents a past action as going on or repeated, so the watch is viewed in its course. The perfect <i>vigilāvērunt</i> would present it as complete.",
   "level": 1
  },
  {
   "id": "vb2-B10",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "What did Varro observe about the tenses built on the present stem and those built on the perfect stem?",
   "options": [
    "They differ in time, not in aspect",
    "They differ in person and number",
    "They differ in aspect, not in time",
    "They do not differ in meaning at all"
   ],
   "answer": 2,
   "explain": "Each group has a past, a present, and a future time, so the groups do not differ in time. They differ in aspect: the first presents the action as incomplete, the second as complete.",
   "level": 1
  },
  {
   "id": "vb2-B11",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "In “The guests have eaten the whole cake,” type the verb phrase that presents the action as complete, with its result still present.",
   "accept": [
    "have eaten"
   ],
   "explain": "“Have eaten” is the English perfect, formed with “have” and the past participle, and it presents the eating as complete with its result (no cake) still present.",
   "level": 2
  },
  {
   "id": "vb2-B12",
   "set": "B",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Type the progressive form of “He reads” that presents the reading as going on now.",
   "accept": [
    "he is reading",
    "is reading"
   ],
   "explain": "The progressive is formed with “be” and the form in “-ing”: “He is reading.”",
   "level": 2
  },
  {
   "id": "vb2-C01",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Which are the three principal parts of the English verb “bring”?",
   "options": [
    "“bring,” “brang,” “brung”",
    "“bring,” “brought,” “brung”",
    "“bring,” “bringed,” “brought”",
    "“bring,” “brought,” “brought”"
   ],
   "answer": 3,
   "explain": "“Bring” is irregular, and its past and past participle are both “brought.” “Brang” and “brung” are barbarisms formed on the pattern of “sing,” “sang,” “sung.”",
   "level": 1
  },
  {
   "id": "vb2-C02",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "<i>Possum</i> (“I am able”) is a compound of <i>sum</i>, and it has <i>pos-</i> before an <i>s</i> (<i>possum</i>) and <i>pot-</i> before a vowel (<i>potes</i>). Type the Latin for “they are able.”",
   "accept": [
    "possunt"
   ],
   "macrons": false,
   "explain": "<i>Possum</i> follows <i>sum</i>: as “they are” is <i>sunt</i>, “they are able” is <i>possunt</i>.",
   "level": 2
  },
  {
   "id": "vb2-C03",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Parse Latin <i>scrīpserant</i>, from <i>scrībō</i>, <i>scrībere</i>, <i>scrīpsī</i>, <i>scrīptum</i> (“write”).",
   "options": [
    "Third person plural, perfect indicative active",
    "Third person plural, pluperfect indicative active",
    "Third person plural, future perfect indicative active",
    "First person singular, pluperfect indicative active"
   ],
   "answer": 1,
   "explain": "<i>Scrīpserant</i> is built on the perfect stem <i>scrīps-</i> with the sign <i>-era-</i> of the pluperfect and the ending <i>-nt</i>: “they had written.”",
   "level": 1
  },
  {
   "id": "vb2-C04",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>docuerō</i> means “I shall have taught.” Type its tense.",
   "accept": [
    "future perfect",
    "the future perfect",
    "future perfect tense",
    "future-perfect"
   ],
   "explain": "<i>Docuerō</i> is built on the perfect stem <i>docu-</i> with the endings of the future perfect, so it presents the teaching as complete at a future time.",
   "level": 2
  },
  {
   "id": "vb2-C05",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Which English rendering fits Latin <i>parābit</i> (from <i>parō</i>, “prepare”)?",
   "options": [
    "“he was preparing”",
    "“he prepared”",
    "“he will have prepared”",
    "“he will prepare”"
   ],
   "answer": 3,
   "explain": "In the first conjugation the sign <i>-bi-</i> marks the future, so <i>parābit</i> means “he will prepare.” “He will have prepared” would be the future perfect <i>parāverit</i>.",
   "level": 1
  },
  {
   "id": "vb2-C06",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Latin <i>veniō</i> (“I come”) belongs to the fourth conjugation, like <i>audiō</i>. Type the form that means “they come.”",
   "accept": [
    "veniunt"
   ],
   "macrons": false,
   "explain": "In the fourth conjugation the third person plural of the present is formed in <i>-iunt</i>, as <i>audiunt</i> is, so the form is <i>veniunt</i>.",
   "level": 2
  },
  {
   "id": "vb2-C07",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>rapiō</i>, <i>rapere</i> (“to seize”) ends in <i>-iō</i> but has the infinitive in short <i>-ere</i>. To which conjugation does it belong?",
   "options": [
    "The fourth, because of the <i>-iō</i>",
    "The third, as an <i>-iō</i> verb",
    "The second",
    "The first"
   ],
   "answer": 1,
   "explain": "The infinitive decides: a short <i>-ere</i> marks the third conjugation, and <i>rapiō</i> is a third-conjugation <i>-iō</i> verb like <i>capiō</i>. A fourth-conjugation verb has <i>-īre</i>.",
   "level": 1
  },
  {
   "id": "vb2-C08",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "The principal parts of <i>doceō</i> (“teach”) are <i>doceō</i>, <i>docēre</i>, <i>docuī</i>, ___. Type the fourth part.",
   "accept": [
    "doctum"
   ],
   "macrons": false,
   "explain": "The fourth principal part is the supine, <i>doctum</i>, from which the participial stem <i>doct-</i> comes; English “doctor” and “doctrine” are related to it.",
   "level": 2
  },
  {
   "id": "vb2-C09",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "Latin <i>cēnābō</i> means “I shall dine,” and <i>cēnāverō</i> “I shall have dined.” How do they differ?",
   "options": [
    "The second is in the past, not the future",
    "The first presents the dining as complete",
    "They differ only in person",
    "The second presents the dining as complete"
   ],
   "answer": 3,
   "explain": "Both are future, so they do not differ in time. The future perfect <i>cēnāverō</i> presents the dining as complete at a future time, whereas the future <i>cēnābō</i> does not.",
   "level": 1
  },
  {
   "id": "vb2-C10",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "<i>Puer cotīdiē natābat</i> means “The boy used to swim every day.” Why is the imperfect used?",
   "options": [
    "It presents the swimming as complete",
    "It places the swimming in the future",
    "It shows that the boy is the subject",
    "It presents the swimming as repeated"
   ],
   "answer": 3,
   "explain": "The imperfect presents a past action as going on or repeated, and <i>cotīdiē</i> (“every day”) shows that the swimming was repeated. The perfect would present a single complete action.",
   "level": 1
  },
  {
   "id": "vb2-C11",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "The Greek verb has three stems for three aspects: the present, the aorist, and the perfect. Type the name of the stem that views an action simply as an event.",
   "accept": [
    "aorist",
    "the aorist",
    "aorist stem"
   ],
   "explain": "The aorist stem views the action simply as an event, without presenting it as going on or as complete with a lasting result.",
   "level": 2
  },
  {
   "id": "vb2-C12",
   "set": "C",
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "Type the auxiliary that forms the past progressive in “They ___ singing when we arrived.”",
   "accept": [
    "were"
   ],
   "explain": "The progressive is formed with “be” and the form in “-ing,” so the past progressive is “were singing,” which presents the singing as going on when we arrived.",
   "level": 2
  },
  {
   "id": "vb2-L3-01",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "<i>Arma virumque canō</i> (“Of arms I sing and the man”). (Vergil, Aeneid, Book I, line 1.) Parse <i>canō</i>, from <i>canō, canere, cecinī, cantum</i> (“sing”).",
   "options": [
    "First person singular, present indicative active, third conjugation",
    "First person singular, future indicative active, first conjugation",
    "Third person singular, present indicative active",
    "First person singular, perfect indicative active"
   ],
   "answer": 0,
   "explain": "The infinitive <i>canere</i> has a short <i>e</i>, so <i>canō</i> is third conjugation. The ending <i>-ō</i> marks the first person singular of the present.",
   "source": "Vergil, Aeneid, Book I, line 1; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb2-L3-02",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "<i>Senātus haec intellegit, cōnsul videt; hic tamen vīvit.</i> (“The senate understands these things, the consul sees them; yet this man lives.”) (Cicero, First Oration against Catiline, chapter 1.) <i>Videt</i> comes from <i>videō, vidēre</i>. To which conjugation does it belong?",
   "options": [
    "The first",
    "The second",
    "The third",
    "The fourth"
   ],
   "answer": 1,
   "explain": "The infinitive <i>vidēre</i> has a long <i>ē</i>, the mark of the second conjugation, like <i>teneō, tenēre</i>.",
   "source": "Cicero, First Oration against Catiline, chapter 1; text checked against Project Gutenberg eBook #226 (Cicero’s Orations)"
  },
  {
   "id": "vb2-L3-03",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "<i>Tantae mōlis erat Rōmānam condere gentem!</i> (“So great a labor it was to found the Roman race!”) (Vergil, Aeneid, Book I, line 33.) Type the tense of <i>erat</i>.",
   "accept": [
    "imperfect",
    "the imperfect",
    "imperfect tense"
   ],
   "explain": "<i>Erat</i> (“it was”) belongs to <i>eram, erās, erat</i>, the imperfect of <i>sum</i>. The labor is presented as going on through the long time of the founding.",
   "source": "Vergil, Aeneid, Book I, line 33; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb2-L3-04",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "<i>forsan et haec ōlim meminisse iuvābit.</i> (“Perhaps someday it will be a joy to remember even these things.”) (Vergil, Aeneid, Book I, line 203.) Type the tense of <i>iuvābit</i>.",
   "accept": [
    "future",
    "the future",
    "future tense",
    "simple future"
   ],
   "explain": "<i>Iuvābit</i> (“it will please”) is the future of <i>iuvō</i>, first conjugation, formed with <i>-bi-</i>: <i>iuvābō, iuvābis, iuvābit</i>.",
   "source": "Vergil, Aeneid, Book I, line 203; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb2-L3-05",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "<i>Nōn ignāra malī, miserīs succurrere discō.</i> (“Not unacquainted with misfortune, I learn to help the wretched.”) (Vergil, Aeneid, Book I, line 630.) Type the person of <i>discō</i>: first, second, or third.",
   "accept": [
    "first",
    "first person",
    "1st",
    "1"
   ],
   "explain": "The ending <i>-ō</i> marks the first person singular: Dido speaks of herself, “I learn.”",
   "source": "Vergil, Aeneid, Book I, line 630; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "vb2-L3-06",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "<i>quī ipsōrum linguā Celtae, nostrā Gallī appellantur</i> (“who in their own tongue are called Celts, in ours Gauls”). (Caesar, De Bello Gallico, Book I, chapter 1.) Parse <i>appellantur</i>, from <i>appellō, appellāre</i> (“call”).",
   "options": [
    "Third person plural, present indicative passive",
    "Third person plural, present indicative active",
    "Third person plural, imperfect indicative passive",
    "Third person singular, present subjunctive passive"
   ],
   "answer": 0,
   "explain": "<i>-ntur</i> is the passive ending of the third person plural, and the stem <i>appella-</i> with no tense sign is the present: “they are called.”",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "vb2-L3-07",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "<i>ea quae ad effēminandōs animōs pertinent important</i> (“they bring in those things which tend to weaken the spirit”). (Caesar, De Bello Gallico, Book I, chapter 1.) Type the tense of <i>important</i>.",
   "accept": [
    "present",
    "the present",
    "present tense"
   ],
   "explain": "<i>Important</i> (“they bring in”) is the present of <i>importō</i>, first conjugation: the merchants regularly bring such goods.",
   "source": "Caesar, De Bello Gallico, Book I, chapter 1; text checked against Project Gutenberg eBook #218 (Caesar, De Bello Gallico I to IV)"
  },
  {
   "id": "vb2-L3-08",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "mc",
   "prompt": "“He is not here: for he is risen, as he said.” (Matthew 28:6, King James Version.) How does “is risen” present the action?",
   "options": [
    "As going on now",
    "As complete, with its result still present",
    "As future",
    "As a command"
   ],
   "answer": 1,
   "explain": "“Is risen” is an older perfect, formed with “be” instead of “have,” as with verbs of motion. The rising is complete, and its result, that he is not in the tomb, holds now.",
   "source": "Matthew 28:6, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb2-L3-09",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "“Jesus wept.” (John 11:35, King James Version.) The principal parts are “weep,” “wept,” ___. Type the past participle.",
   "accept": [
    "wept"
   ],
   "explain": "“Weep” forms both its past and its past participle with “-t” and a shortened vowel: “weep,” “wept,” “wept,” as “sleep,” “slept,” “slept.”",
   "source": "John 11:35, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb2-L3-10",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "“When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.” (1 Corinthians 13:11, King James Version.) “Spake” is an older past tense of “speak.” Type the past tense used today.",
   "accept": [
    "spoke"
   ],
   "explain": "The principal parts of “speak” are now “speak,” “spoke,” “spoken.” “Spake” survives only in older and poetic English.",
   "source": "1 Corinthians 13:11, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb2-L3-11",
   "set": "A",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "“But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.” (Luke 15:20, King James Version.) The principal parts of “run” are “run,” “ran,” ___. Type the past participle.",
   "accept": [
    "run"
   ],
   "explain": "The past participle of “run” is “run,” as in “he has run.” “Ran” is the past tense only.",
   "source": "Luke 15:20, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  },
  {
   "id": "vb2-L3-12",
   "set": "B",
   "level": 3,
   "deck": "iii.verb-2",
   "type": "form",
   "prompt": "“He maketh me to lie down in green pastures: he leadeth me beside the still waters.” (Psalm 23:2, King James Version.) “Maketh” is the older third person singular present. Type the form used today.",
   "accept": [
    "makes"
   ],
   "explain": "The older ending of the third person singular present is “-eth”; the modern ending is “-s”: “maketh,” “makes”; “leadeth,” “leads.”",
   "source": "Psalm 23:2, King James Version; text checked against Project Gutenberg eBook #10 (King James Bible)"
  }
 ]
};
