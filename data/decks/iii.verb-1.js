/* III.8 The Verb I: Quality, Mood, and Voice [iii.verb-1]
   Plan (ITEM-LIST.md): 12 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: in the shared Verbs set
   (after III.9).
   Live material drawn on: DECKS.latverb (signs of mood), DECKS.latvoice (the passive, passive endings, the infinitive,
   deponent verbs), DECKS.enacc (English mood and voice). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.verb-1'] = {
  id: 'iii.verb-1',
  title: 'The Verb I: Quality, Mood, and Voice',
  sub: 'The forms and moods of the verb, and active, passive, neuter, and deponent verbs',
  sources: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> VIII; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'accidents',
  title: 'The accidents of the verb',
  body: `<p>We have seen that the verb signifies with time and person and without case, and that it signifies by the mode of becoming. Donatus gives the verb seven accidents: <i>quālitās, coniugātiō, genus, numerus, figūra, tempus, persōna</i>, that is, quality, conjugation, voice (Latin <i>genus</i>), number, figure, tense, and person (<i>Ars minor</i>).</p>
<p>We have already studied figure, which distinguishes simple verbs such as <i>faciō</i> from compound verbs such as <i>cōnficiō</i>. Here we study quality, which for the verb includes its moods and its forms, and voice, which concerns whether the subject acts or is acted upon. Tense, person, number, and conjugation are studied together after this, because they are the accidents by which the forms of the verb are arranged in its conjugation.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the verb.` },

{ id: 'mood',
  title: 'What is mood?',
  body: `<p>Donatus says that the quality of verbs lies <i>in modīs et in formīs</i>, “in moods and in forms” (<i>Ars minor</i>). A <strong>mood</strong> (Latin <i>modus</i>, “manner”) is a form of the verb that shows the manner in which the speaker presents the action: as a fact, as a command, as a wish, or as something supposed. We saw in Section I that sentences state, command, ask, and wish; the moods are the forms of the verb that mark several of these differences.</p>
<p>Donatus lists six moods, with the verb <i>legō</i> (“I read”):<br>the <strong>indicative</strong>, as <i>legō</i>, “I read”;<br>the <strong>imperative</strong>, as <i>lege</i>, “read!”;<br>the <strong>optative</strong>, as <i>utinam legerem</i>, “would that I were reading”;<br>the <strong>subjunctive</strong>, as <i>cum legam</i>, “when I read”;<br>the <strong>infinitive</strong>, as <i>legere</i>, “to read”;<br>the <strong>impersonal</strong>, as <i>legitur</i>, “it is read,” “reading is done.”</p>`,
  src: `Donatus, <i>Ars minor</i>, on the quality of the verb (the Latin).` },

{ id: 'indicative-imperative',
  title: 'The indicative and the imperative',
  body: `<p>The <strong>indicative</strong> mood (from <i>indicāre</i>, “to point out,” “to declare”) presents the action as a fact. It is the mood of statements and of most questions: <i>puella cantat</i>, “the girl sings”; <i>cantatne puella?</i>, “does the girl sing?” English uses the indicative in the same way: “She sings,” “Does she sing?”</p>
<p>The <strong>imperative</strong> mood (from <i>imperāre</i>, “to command”) is the mood of command and request. The Latin present imperative is the present stem of the verb when one person is addressed, and adds <i>-te</i> when more than one is addressed: <i>cantā</i>, “sing!” (to one person), <i>cantāte</i>, “sing!” (to several). English uses the bare form of the verb, usually without a subject: “Sing!” “Close the door.” We saw in Section I that a command is neither true nor false; the imperative mood is the form of the verb that marks a sentence as a command.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 157, 448–449, in paraphrase.` },

{ id: 'subjunctive',
  title: 'The optative and the subjunctive',
  body: `<p>Donatus distinguishes the <strong>optative</strong> (from <i>optāre</i>, “to wish”), used for wishes, and the <strong>subjunctive</strong> (from <i>subiungere</i>, “to join under”), used in clauses joined under another, as after <i>cum</i> (“when”). In Latin these two have the same forms, and he distinguishes them by their use: <i>utinam veniat</i> (“may he come!”) is optative in use, and <i>cum veniat</i> (“since he comes”) is subjunctive. Greek has separate forms for the optative, and the Latin grammarians kept the Greek distinction. Modern Latin grammars count one mood, the subjunctive, with many uses: wishes, commands, possibilities, and many kinds of dependent clause.</p>
<p>English has kept only a few subjunctive forms. They appear in conditions contrary to fact (“If I were king,” not “If I was king,” in careful usage), after verbs of demanding (“I insist that he be present”), and in some fixed phrases (“God save the King”). In most other cases English uses auxiliary verbs such as “may,” “might,” “would,” and “should” where Latin uses the subjunctive.</p>`,
  src: `Donatus, <i>Ars minor</i>; Allen and Greenough, <i>New Latin Grammar</i> §§ 157, 439–447, in paraphrase.`,
  qpTodo: `Mood: which mood is the marked verb in a given sentence (<i>cantat</i>, <i>cantā</i>, <i>utinam veniat</i>; “If I were king,” “Close the door”), and what does the mood show.` },

{ id: 'infinitive-impersonal',
  title: 'The infinitive and the impersonal',
  body: `<p>The <strong>infinitive</strong> (from <i>īnfīnītus</i>, “unlimited”) is the form of the verb that names the action without limiting it by person or number. Latin <i>amāre</i> means “to love,” and English uses “to love” or simply “love” after certain verbs (“I can love”). Because it has no person, the infinitive cannot be the main verb of a statement; it is used as a noun (“To err is human”) or to complete another verb (<i>scrībere sciō</i>, “I know how to write”). Donatus counted it among the moods, but modern grammars usually count it as a form of the verb outside the moods.</p>
<p>The <strong>impersonal</strong> verb is used only in the third person singular, without a personal subject. Latin <i>pluit</i> (“it rains”) and <i>pudet</i> (“it shames”) are impersonal, and Latin also uses the passive impersonally, as <i>pugnātum est</i>, “there was fighting,” literally “it was fought.” English uses “it” or “there” as a formal subject in such sentences: “It is raining,” “There was a battle.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 207–208, 451–462, in paraphrase.` },

{ id: 'forms',
  title: 'The forms of the verb',
  body: `<p>The second part of the verb’s quality is its <strong>form</strong> (<i>fōrma</i>). Donatus gives four (<i>Ars minor</i>, in paraphrase): the <strong>perfect</strong> form, which is the verb itself, as <i>legō</i> (“I read”); the <strong>meditative</strong> or desiderative form, which signifies the wish or intention to do something, as <i>lectūriō</i> (“I want to read”); the <strong>frequentative</strong> form, which signifies doing something often, as <i>lectitō</i> (“I read often”); and the <strong>inchoative</strong> form, which signifies beginning to do something or to become something, as <i>calēscō</i> (“I grow warm”).</p>
<p>These forms are derived verbs, formed by regular endings, and they belong as much to species as to quality. English uses separate words or auxiliary verbs for the same meanings: “I want to read,” “I keep reading,” “I am growing warm.” Some English verbs borrowed from Latin keep the inchoative ending <i>-ēscō</i>: “convalesce” and “coalesce.”</p>`,
  src: `Donatus, <i>Ars minor</i>, on the forms of the verb, in paraphrase.` },

{ id: 'english-moods',
  title: 'Mood in English',
  body: `<p>English grammars usually count three moods: the <strong>indicative</strong> (“He is here”), the <strong>imperative</strong> (“Be here”), and the <strong>subjunctive</strong> (“If he were here”). The English subjunctive has few distinct forms, and many of the meanings that Latin expresses by the subjunctive are expressed in English by the <strong>modal auxiliaries</strong>: “may,” “might,” “can,” “could,” “shall,” “should,” “will,” “would,” and “must.”</p>
<p>So Latin <i>utinam veniat</i> is “May he come,” and <i>veniat</i> in some uses is “Let him come.” Latin <i>sī venīret, gaudērem</i> is “If he were coming, I would be glad.” In these translations English uses auxiliary verbs where Latin uses one inflected form, just as English uses prepositions where Latin uses case endings. The meaning is the same, but the means of expressing it differ.</p>`,
  src: `Standard English grammars; Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` },

{ id: 'voice',
  title: 'Active and passive',
  body: `<p>The accident that Donatus calls <i>genus</i> is called <strong>voice</strong> in English grammars. In the <strong>active</strong> voice the subject does the action; in the <strong>passive</strong> voice the subject receives it. <i>Puella poētam laudat</i>, “the girl praises the poet,” is active; <i>poēta ā puellā laudātur</i>, “the poet is praised by the girl,” is passive. In the passive the one who receives the action becomes the subject, and the doer, if it is named, is expressed with <i>ā</i> or <i>ab</i> and the ablative, as in English it is expressed with “by.”</p>
<p>Latin forms the passive with its own personal endings: <i>laudō</i>, “I praise,” <i>laudor</i>, “I am praised”; <i>laudat</i>, “he praises,” <i>laudātur</i>, “he is praised.” English forms the passive with the verb “to be” and the past participle: “is praised,” “was praised.” Donatus says that active verbs end in <i>-ō</i> and, by taking the letter <i>r</i>, make passives from themselves, as <i>legō</i>, <i>legor</i> (<i>Ars minor</i>, in paraphrase).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the voice of the verb, in paraphrase; Allen and Greenough, <i>New Latin Grammar</i> §§ 156, 405.`,
  qpTodo: `Active and passive: is a given verb active or passive (<i>laudat</i>, <i>laudātur</i>, “was praised”), and how is the doer expressed in a passive sentence.` },

{ id: 'neuter',
  title: 'Neuter verbs',
  body: `<p>Donatus names three more kinds of verb under voice. <strong>Neuter</strong> verbs (from <i>neuter</i>, “neither”) end in <i>-ō</i> like active verbs, but they do not form a personal passive, because they signify neither acting on something nor being acted upon: <i>stō</i> (“I stand”), <i>currō</i> (“I run”), <i>dormiō</i> (“I sleep”) (<i>Ars minor</i>, in paraphrase). We saw in Donatus’s definition of the verb that the verb signifies doing, undergoing, or neither; the neuter verb is the verb that signifies neither.</p>
<p>Modern grammars usually call such verbs <strong>intransitive</strong>, that is, verbs that do not take a direct object, and call verbs that take a direct object <strong>transitive</strong> (from <i>trānsīre</i>, “to go across,” because the action passes over to the object). “She sleeps” is intransitive; “She reads the book” is transitive. Many English verbs can be used in both ways: “She reads” and “She reads the book.”</p>`,
  src: `Donatus, <i>Ars minor</i>, on the voice of the verb, in paraphrase.` },

{ id: 'deponent',
  title: 'Deponent verbs',
  body: `<p><strong>Deponent</strong> verbs are passive in form but active in meaning. Donatus says that they end in <i>-r</i>, like passive verbs, but, if the <i>r</i> is taken away, they are not Latin, as <i>luctor</i> (“I wrestle”) and <i>loquor</i> (“I speak”) (<i>Ars minor</i>, in paraphrase); there is no <i>luctō</i> or <i>loquō</i>. They are called deponent (from <i>dēpōnere</i>, “to lay aside”) because they seem to have laid aside their active forms.</p>
<p>So <i>sequor</i> means “I follow,” not “I am followed,” and <i>hortātur</i> means “he encourages.” A dictionary shows that a verb is deponent by giving its principal parts in passive form: <i>hortor</i>, <i>hortārī</i>, <i>hortātus sum</i>. A reader who forgets that a verb is deponent will translate it as passive and reverse the sense of the sentence, so the deponent verbs must be learned as such.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the voice of the verb, in paraphrase; Allen and Greenough, <i>New Latin Grammar</i> § 190.`,
  qpTodo: `Deponent verbs: what does a given deponent form mean (<i>sequor</i>, <i>loquitur</i>, <i>hortātur</i>), and how can a reader tell that the verb is deponent.` },

{ id: 'common',
  title: 'Common verbs',
  body: `<p>The fifth kind under voice is the <strong>common</strong> verb (<i>commūne</i>). Donatus says that common verbs end in <i>-r</i> like deponents but have both an active and a passive meaning, as <i>ōsculor</i> and <i>crīminor</i>: we say <i>ōsculor tē</i> (“I kiss you”) and <i>ōsculor ā tē</i> (“I am kissed by you”) (<i>Ars minor</i>, in paraphrase). In classical Latin very few verbs are used in this way, and modern grammars treat them as deponents with an occasional passive use.</p>
<p>So Donatus’s five voices are the active, the passive, the neuter, the deponent, and the common. Modern grammars speak of two voices, active and passive, and treat the neuter verb as intransitive and the deponent and common verbs as kinds of verb that are irregular in form. The difference is one of classification, not of the facts: both describe the same forms and meanings.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the voice of the verb, in paraphrase.` },

{ id: 'voice-and-sentence',
  title: 'Voice and the sentence',
  body: `<p>The choice of voice changes which word is the subject, and therefore what the sentence is about, but it need not change what is said to have happened. “The girl praised the poet” and “The poet was praised by the girl” describe the same event; the first is about the girl, and the second about the poet. The passive also allows the doer to be omitted when it is unknown or unimportant: “The city was captured,” <i>urbs capta est</i>.</p>
<p>We saw that the modists explain the verb as signifying by the mode of becoming, and voice is the accident by which the verb signifies its action as proceeding from the subject or as received by it. The remaining accidents of the verb (tense, person, number, and conjugation) concern the time of the action, the person of the subject, and the classes of endings by which Latin verbs are formed, and we study them next.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.` }

  ]
};
