/* III.10 The Participle [iii.participle]
   Plan (ITEM-LIST.md): 9 panels, 2 question points (placeholders: qpTodo; to be written). One closing panel gives the
   modistic account of why the participle has the accidents of both noun and verb. Exercise: Participles (not yet written).
   Live material drawn on: DECKS.latvoice (the perfect passive participle, the perfect passive), DECKS.pos (participle and
   gerund), DECKS.modes (the participle in the four declinable parts). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.participle'] = {
  id: 'iii.participle',
  title: 'The Participle',
  sub: 'The part of speech that shares in the noun and the verb, and its accidents',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XI; Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>.`,
  panels: [

{ id: 'accidents',
  title: 'The participle and its accidents',
  body: `<p>In “the boy, reading a book, laughed,” the word “reading” describes the boy, as an adjective does, but it also signifies an action and takes its own object, “a book,” as a verb does. We have seen that the participle takes part of the noun and part of the verb. Donatus gives it six accidents: gender, case, tense, signification, number, and figure (<i>genera, casus, tempora, significationes, numerus, figura</i>; <i>Ars minor</i>). Gender and case it takes from the noun; tense and signification it takes from the verb; number and figure it shares with both.</p>
<p>By <strong>signification</strong> Donatus here means what the verb calls voice: whether the participle signifies doing or undergoing. So <i>laudāns</i> (“praising”) is active in signification and present in tense, and it is declined for gender, number, and case; <i>laudātus</i> (“praised”) is passive in signification and perfect in tense. In every case the participle agrees with a noun, as an adjective does, but it signifies an action, as a verb does.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the participle (the Latin).` },

{ id: 'latin-participles',
  title: 'The Latin participles',
  body: `<p>English has two participles, “praising” and “praised,” and expresses other meanings of the same kind with several words, as “about to praise” and “to be praised.” Latin has a single word for each. A Latin verb has four participles, formed from its stems:</p>
<div class="para-wrap"><table class="para"><tr><th>Participle</th><th>Formation</th><th>Example</th></tr>
<tr><td>Present active</td><td>present stem + <i>-ns</i></td><td class="f"><i>laudāns</i>, “praising”</td></tr>
<tr><td>Perfect passive</td><td>participial stem + <i>-us</i></td><td class="f"><i>laudātus</i>, “(having been) praised”</td></tr>
<tr><td>Future active</td><td>participial stem + <i>-ūrus</i></td><td class="f"><i>laudātūrus</i>, “about to praise”</td></tr>
<tr><td>Future passive (gerundive)</td><td>present stem + <i>-ndus</i></td><td class="f"><i>laudandus</i>, “to be praised”</td></tr></table></div>
<p>So Latin has no perfect active participle and no present passive participle. English “having praised” must be expressed in Latin in another way, and “being praised” has no single Latin equivalent. The perfect passive, future active, and future passive participles are declined like <i>bonus</i>, <i>bona</i>, <i>bonum</i>; the present participle is declined like an adjective of the third declension, <i>laudāns</i>, <i>laudantis</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 158, 488–500.`,
  qpTodo: `The Latin participles: which participle is a given form (<i>laudāns</i>, <i>laudātus</i>, <i>laudātūrus</i>, <i>laudandus</i>), and what are its tense and signification.` },

{ id: 'agreement',
  title: 'The participle as adjective',
  body: `<p>Because it has gender, number, and case, the participle agrees with a noun in all three, as an adjective does. In <i>mīlitēs urbem captam vident</i>, “the soldiers see the captured city,” the participle <i>captam</i> is feminine, singular, and accusative, because <i>urbem</i> is. In <i>puerī currentēs</i>, “the running boys,” <i>currentēs</i> is masculine plural nominative like <i>puerī</i>.</p>
<p>But the participle keeps the power of the verb from which it comes. It can take an object, as a verb does: <i>puer librum legēns</i>, “the boy reading a book.” It can be modified by an adverb: <i>celeriter currēns</i>, “running quickly.” This is what it means to say that the participle shares in both parts: in its relation to the noun it is an adjective, and in its relation to its own object and adverbs it is a verb.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 494–497, in paraphrase.` },

{ id: 'relative-time',
  title: 'The time of a participle',
  body: `<p>The tense of a participle does not show time absolutely, as the tense of a verb does, but relative to the time of the main verb. The present participle signifies an action at the same time as the main verb; the perfect participle, an action before it; the future participle, an action after it. So in <i>puer legēns rīdēbat</i>, “the boy, reading, was laughing,” the reading is at the same time as the laughing, although both are in the past.</p>
<p>English participles follow the same rule. In “Reading the letter, she laughed,” the reading is at the same time as the laughing; in “Having read the letter, she laughed,” the reading came first. This is why the participle is especially useful in Latin narrative: one sentence can describe several actions and show their order in time by the tenses of its participles.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 489, in paraphrase.` },

{ id: 'perfect-deponent',
  title: 'The perfect participle and the deponent verbs',
  body: `<p>The perfect passive participle is used with forms of <i>sum</i> to make the perfect passive tenses: <i>laudātus est</i>, “he was praised”; <i>laudāta erat</i>, “she had been praised.” In these forms the participle agrees with the subject in gender and number: <i>puella laudāta est</i>, <i>puerī laudātī sunt</i>.</p>
<p>The deponent verbs, which we saw are passive in form but active in meaning, have a perfect participle with active meaning. <i>Hortātus</i>, from <i>hortor</i> (“I encourage”), means “having encouraged,” and <i>secūtus</i>, from <i>sequor</i> (“I follow”), means “having followed.” So the deponent verbs supply what the other Latin verbs lack, a perfect active participle: <i>mīlitēs hortātus, dux discessit</i>, “having encouraged the soldiers, the general departed.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 190–191, 491.` },

{ id: 'gerundive',
  title: 'The future participles',
  body: `<p>English says “about to die” and “a book to be read,” using several words, whereas Latin uses a single participle for each. The future active participle signifies an action that is about to take place or is intended: <i>moritūrus</i>, “about to die.” It is familiar from the greeting that Suetonius reports was made to the emperor Claudius by men about to fight in a staged sea battle: <i>Have imperator, morituri te salutant</i>, “Hail, emperor, they who are about to die salute thee” (<i>Claudius</i> 21). The word <i>morituri</i> is the future active participle of <i>morior</i> (“die”), used as a noun: “those who are about to die.”</p>
<p>The future passive participle, called the <strong>gerundive</strong>, signifies something that is to be done or ought to be done: <i>liber legendus</i>, “a book to be read.” With a form of <i>sum</i> it expresses necessity or obligation, as in Cato’s saying <i>Carthāgō dēlenda est</i>, “Carthage must be destroyed.” Many English words come from gerundives: “agenda” (“things to be done”), “memorandum” (“a thing to be remembered”), and the name “Amanda” (“worthy to be loved”).</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 499–500; Suetonius, <i>Claudius</i> 21 (the Latin as in the Latin Library text; trans. J. C. Rolfe (Loeb), checked against the LacusCurtius text); the saying of Cato as traditionally quoted.` },

{ id: 'english',
  title: 'The English participles',
  body: `<p>English has two participles. The <strong>present participle</strong> ends in <i>-ing</i>: “walking,” “singing.” The <strong>past participle</strong> ends in <i>-ed</i> in regular verbs (“walked”) and has various forms in irregular verbs (“sung,” “written,” “gone”). We have seen that the past participle is used to form the perfect tenses (“has walked”) and the passive voice (“was praised”), and the present participle to form the progressive (“is walking”).</p>
<p>The English participles are also used as adjectives, as the Latin ones are: “a running stream,” “a broken window.” A participle with its object or modifiers makes a <strong>participial phrase</strong>: “Hearing the noise, the dog barked”; “The letter, written in haste, was hard to read.” Such a phrase must refer clearly to a noun in the sentence, a point we will return to among the errors of construction.</p>`,
  src: `Standard English grammars, in paraphrase.` },

{ id: 'gerund',
  title: 'Participle and gerund',
  body: `<p>The English form in <i>-ing</i> is used in two different ways. In “the running horse” it is a participle, because it describes the horse. In “Running is good exercise” it is a <strong>gerund</strong>, a verbal noun, because it names the action as a thing and is the subject of the sentence. We saw in Section I that the same activity can be signified as a thing (“running” as a noun) or as an action (“runs”), and the gerund is the form in which a verb is used in the mode of a noun.</p>
<p>Latin distinguishes the two by their forms. The Latin <strong>gerund</strong> is a verbal noun declined only in the oblique cases: <i>ars amandī</i>, “the art of loving”; <i>ad legendum</i>, “for reading.” For the nominative Latin uses the infinitive: <i>errāre hūmānum est</i>, “to err is human.” So the question whether an English <i>-ing</i> form is a participle or a gerund is decided, like every question of the parts of speech, by how the word is used in its sentence.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 501–507, in paraphrase.`,
  qpTodo: `Participle or gerund: in a given sentence, is the <i>-ing</i> form a participle or a gerund (“the running horse,” “Running is good exercise,” “I enjoy reading”), and why.` },

{ id: 'modist',
  title: 'The modists on the participle',
  body: `<p>We saw that the modists explain the participle as signifying by the mode of becoming united with the substance, whereas the verb signifies by the mode of becoming as distinct from the substance. From this they explain why the participle has the accidents of both parts. Because it signifies becoming, it has the accidents that follow from becoming: tense and signification (voice), as the verb has. Because it signifies its action as united with a substance, it has the accidents by which a word is united with a noun: gender, number, and case, as the adjective has (<i>Grammatica speculativa</i>, on the participle).</p>
<p>The participle lacks mood and person, which the verb has, because these accidents belong to the verb insofar as it is said of a subject and signifies the inclination of the speaker’s mind. The participle is not said of a subject; it adheres to it. So the modists account for the participle’s accidents, both those it has and those it lacks, by its mode of signifying. With the participle we have completed the declinable parts of speech.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on the participle (Bursill-Hall), in paraphrase.` }

  ]
};
