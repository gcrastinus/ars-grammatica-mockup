/* III.9 The Verb II: Tense, Person, Number, and Conjugation [iii.verb-2]
   Plan (ITEM-LIST.md): 15 panels, 4 question points (placeholders: qpTodo; to be written). Two panels on aspect
   (aspect-latin, aspect-english-greek); two closing panels give the modistic account of the verb's accidents.
   Exercise: Verbs (iii.ex.verbs, after this deck; not yet written).
   Live material drawn on: DECKS.latverb (principal parts, conjugations, signs of tense and mood, perfect system, reading a
   verb form, aspect), DECKS.enacc (English tense and aspect, principal parts), DECKS.modes (why the verb has time). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.verb-2'] = {
  id: 'iii.verb-2',
  title: 'The Verb II: Tense, Person, Number, and Conjugation',
  sub: 'How does the verb mark time, aspect, and person, and how are verbs conjugated?',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> VIII–X; Varro, <i>De lingua Latina</i> IX–X; Allen and Greenough, <i>New Latin Grammar</i>; Smyth, <i>Greek Grammar</i>, on aspect; Thomas of Erfurt, <i>Grammatica speculativa</i>.`,
  panels: [

{ id: 'tense',
  title: 'Tense',
  body: `<p>We saw in Section I that the verb consignifies time, and that the modists explain this by the verb’s mode of becoming. The form of the verb that shows the time of the action is called its <strong>tense</strong> (from Old French <i>tens</i>, Latin <i>tempus</i>, “time”). Donatus gives three times, the present, as <i>legō</i> (“I read”), the past, as <i>lēgī</i> (“I have read”), and the future, as <i>legam</i> (“I shall read”), and divides the past into three: the imperfect, as <i>legēbam</i> (“I was reading”), the perfect, as <i>lēgī</i>, and the pluperfect, as <i>lēgeram</i> (“I had read”) (<i>Ars minor</i>).</p>
<p>Later grammarians add a sixth tense, the <strong>future perfect</strong>, as <i>lēgerō</i> (“I shall have read”), which signifies an action that will be complete at some future time. So the Latin verb has six tenses in the indicative: present, imperfect, future, perfect, pluperfect, and future perfect.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the tense of the verb (the Latin).` },

{ id: 'six-tenses',
  title: 'The six tenses in Latin and in English',
  body: `<p>The six Latin tenses can be set beside their usual English equivalents. The verb is <i>laudō</i> (“I praise”), in the third person singular.</p>
<div class="para-wrap"><table class="para"><tr><th>Tense</th><th>Latin</th><th>English</th></tr>
<tr><td>Present</td><td class="f"><i>laudat</i></td><td>he praises, he is praising</td></tr>
<tr><td>Imperfect</td><td class="f"><i>laudābat</i></td><td>he was praising, he used to praise</td></tr>
<tr><td>Future</td><td class="f"><i>laudābit</i></td><td>he will praise</td></tr>
<tr><td>Perfect</td><td class="f"><i>laudāvit</i></td><td>he praised, he has praised</td></tr>
<tr><td>Pluperfect</td><td class="f"><i>laudāverat</i></td><td>he had praised</td></tr>
<tr><td>Future perfect</td><td class="f"><i>laudāverit</i></td><td>he will have praised</td></tr></table></div>
<p>Each Latin tense is a single word, while most English tenses are formed with auxiliary verbs (“will,” “has,” “had”). The Latin perfect has two English equivalents, “he praised” and “he has praised,” because Latin uses one tense for an action completed in the past and for an action whose completion is present.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 160–161, 465–479.` },

{ id: 'person-number',
  title: 'Person and number in the verb',
  body: `<p>The verb has the same three persons and two numbers as the pronoun, and the Latin verb shows them by its <strong>personal endings</strong>. The active endings are <i>-ō</i> (or <i>-m</i>), <i>-s</i>, <i>-t</i> in the singular and <i>-mus</i>, <i>-tis</i>, <i>-nt</i> in the plural: <i>laudō</i> (“I praise”), <i>laudās</i> (“you praise”), <i>laudat</i> (“he praises”), <i>laudāmus</i> (“we praise”), <i>laudātis</i> (“you praise,” plural), <i>laudant</i> (“they praise”). The passive endings, as we have seen, are <i>-r</i>, <i>-ris</i>, <i>-tur</i>, <i>-mur</i>, <i>-minī</i>, <i>-ntur</i>.</p>
<p>The English verb has lost almost all its personal endings. In the present tense only the third person singular has an ending, the <i>-s</i> of “she walks” against “I walk” and “they walk.” The verb “to be” keeps more: “I am,” “you are,” “he is.” So English must express the subject, while Latin can leave a pronoun subject unexpressed, because the ending of the verb already shows its person and number.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 163–166, in paraphrase.` },

{ id: 'conjugation',
  title: 'The four conjugations',
  body: `<p>A <strong>conjugation</strong> (<i>coniugātiō</i>, “a yoking together”) is a class of verbs that share one set of endings. Latin has four conjugations, which are known from the present infinitive:</p>
<div class="para-wrap"><table class="para"><tr><th>Conjugation</th><th>Infinitive</th><th>Example</th></tr>
<tr><td>First</td><td class="f"><i>-āre</i></td><td><i>amō, amāre</i> (“to love”)</td></tr>
<tr><td>Second</td><td class="f"><i>-ēre</i></td><td><i>moneō, monēre</i> (“to warn”)</td></tr>
<tr><td>Third</td><td class="f"><i>-ere</i></td><td><i>regō, regere</i> (“to rule”); <i>capiō, capere</i> (“to take”)</td></tr>
<tr><td>Fourth</td><td class="f"><i>-īre</i></td><td><i>audiō, audīre</i> (“to hear”)</td></tr></table></div>
<p>The second and third conjugations differ by the quantity of the <i>e</i> of the infinitive, long in <i>monēre</i> and short in <i>regere</i>, so the macron matters here. Some verbs of the third conjugation, such as <i>capiō</i>, end in <i>-iō</i> in the first person and have an <i>i</i> in some forms like the fourth conjugation; they are called third conjugation <i>-iō</i> verbs.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 171–174.`,
  qpTodo: `Conjugation: to which conjugation does a given verb belong (<i>monēre</i>, <i>regere</i>, <i>audīre</i>, <i>capere</i>), and how is it known from the infinitive.` },

{ id: 'principal-parts',
  title: 'Principal parts and stems',
  body: `<p>A Latin verb is learned by its <strong>principal parts</strong>, the four forms from which all its other forms are made: the first person singular of the present indicative, the present infinitive, the first person singular of the perfect indicative, and the supine (a verbal noun) or the perfect passive participle. For <i>amō</i> they are <i>amō</i>, <i>amāre</i>, <i>amāvī</i>, <i>amātum</i>.</p>
<p>From the principal parts come three stems. The <strong>present stem</strong> (the infinitive without <i>-re</i>, <i>amā-</i>) gives the present, imperfect, and future. The <strong>perfect stem</strong> (the third part without <i>-ī</i>, <i>amāv-</i>) gives the perfect, pluperfect, and future perfect active. The <strong>participial stem</strong> (the fourth part without <i>-um</i>, <i>amāt-</i>) gives the perfect passive participle. The perfect stem is often irregular and must be learned: <i>regō</i>, <i>regere</i>, <i>rēxī</i>, <i>rēctum</i>; <i>capiō</i>, <i>capere</i>, <i>cēpī</i>, <i>captum</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 164, 173–178.` },

{ id: 'present-system',
  title: 'The present indicative in the four conjugations',
  body: `<p>The present indicative active shows the personal endings joined to the present stem in each conjugation.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>First</th><th>Second</th><th>Third</th><th>Third <i>-iō</i></th><th>Fourth</th></tr>
<tr><td>1 sg.</td><td class="f"><i>amō</i></td><td class="f"><i>moneō</i></td><td class="f"><i>regō</i></td><td class="f"><i>capiō</i></td><td class="f"><i>audiō</i></td></tr>
<tr><td>2 sg.</td><td class="f"><i>amās</i></td><td class="f"><i>monēs</i></td><td class="f"><i>regis</i></td><td class="f"><i>capis</i></td><td class="f"><i>audīs</i></td></tr>
<tr><td>3 sg.</td><td class="f"><i>amat</i></td><td class="f"><i>monet</i></td><td class="f"><i>regit</i></td><td class="f"><i>capit</i></td><td class="f"><i>audit</i></td></tr>
<tr><td>1 pl.</td><td class="f"><i>amāmus</i></td><td class="f"><i>monēmus</i></td><td class="f"><i>regimus</i></td><td class="f"><i>capimus</i></td><td class="f"><i>audīmus</i></td></tr>
<tr><td>2 pl.</td><td class="f"><i>amātis</i></td><td class="f"><i>monētis</i></td><td class="f"><i>regitis</i></td><td class="f"><i>capitis</i></td><td class="f"><i>audītis</i></td></tr>
<tr><td>3 pl.</td><td class="f"><i>amant</i></td><td class="f"><i>monent</i></td><td class="f"><i>regunt</i></td><td class="f"><i>capiunt</i></td><td class="f"><i>audiunt</i></td></tr></table></div>
<p>In the third conjugation the short vowel of the stem changes before the endings (<i>regis</i>, <i>regunt</i>), so the third conjugation is the least regular of the four and must be learned with the most care.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 184–189.` },

{ id: 'signs',
  title: 'The signs of tense and mood',
  body: `<p>Between the stem and the personal ending, most tenses and moods have a <strong>sign</strong> of their own. In the forms built on the present stem the signs are these:<br>the imperfect indicative has <i>-bā-</i> (<i>-ēbā-</i> in the third and fourth conjugations): <i>amābat</i>, <i>regēbat</i>;<br>the future indicative has <i>-bi-</i> in the first and second conjugations and <i>-ē-</i> in the third and fourth (with <i>-am</i> in the first person): <i>amābit</i>, <i>reget</i>, <i>regam</i>;<br>the present subjunctive has <i>-ē-</i> in the first conjugation and <i>-ā-</i> in the others: <i>amet</i>, <i>regat</i>;<br>the imperfect subjunctive is the infinitive with the personal endings: <i>amāret</i>, <i>regeret</i>.</p>
<p>So to read a Latin verb form we look first at the stem, which shows whether the form is built on the present stem or the perfect stem; then at the sign, which shows the tense and mood; and last at the ending, which shows the person, the number, and the voice. In <i>laudābantur</i>, <i>laudā-</i> is the present stem, <i>-bā-</i> the sign of the imperfect indicative, and <i>-ntur</i> the ending of the third person plural passive: “they were being praised.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 168–169, in paraphrase.`,
  qpTodo: `Reading a verb form: what are the tense, mood, person, number, and voice of a given form (<i>laudābantur</i>, <i>amābit</i>, <i>regat</i>), and which part of the form shows each.` },

{ id: 'perfect-system',
  title: 'The perfect system',
  body: `<p>The perfect, pluperfect, and future perfect indicative active are built on the perfect stem, and their endings are the same in every conjugation. So once the third principal part is known, these forms follow from it.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>Perfect</th><th>Pluperfect</th><th>Future perfect</th></tr>
<tr><td>1 sg.</td><td class="f"><i>amāvī</i></td><td class="f"><i>amāveram</i></td><td class="f"><i>amāverō</i></td></tr>
<tr><td>2 sg.</td><td class="f"><i>amāvistī</i></td><td class="f"><i>amāverās</i></td><td class="f"><i>amāveris</i></td></tr>
<tr><td>3 sg.</td><td class="f"><i>amāvit</i></td><td class="f"><i>amāverat</i></td><td class="f"><i>amāverit</i></td></tr>
<tr><td>1 pl.</td><td class="f"><i>amāvimus</i></td><td class="f"><i>amāverāmus</i></td><td class="f"><i>amāverimus</i></td></tr>
<tr><td>2 pl.</td><td class="f"><i>amāvistis</i></td><td class="f"><i>amāverātis</i></td><td class="f"><i>amāveritis</i></td></tr>
<tr><td>3 pl.</td><td class="f"><i>amāvērunt</i></td><td class="f"><i>amāverant</i></td><td class="f"><i>amāverint</i></td></tr></table></div>
<p>The same endings on other perfect stems give <i>rēxit</i>, <i>rēxerat</i>, <i>rēxerit</i> and <i>audīvit</i>, <i>audīverat</i>, <i>audīverit</i>. The perfect passive is formed with the participle and a form of <i>sum</i> (“to be”), as <i>amātus est</i> (“he was loved,” “he has been loved”); we will study the participle that it uses shortly.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 179–181.` },

{ id: 'english-tense',
  title: 'Tense and principal parts in English',
  body: `<p>The English verb has only two tenses formed by the verb itself: the present (“walk,” “sing”) and the past (“walked,” “sang”). The other tenses are formed with auxiliary verbs: the future with “will” (“will walk”), the perfect with “have” (“has walked”), the pluperfect with “had” (“had walked”), and the future perfect with “will have” (“will have walked”).</p>
<p>An English verb is learned by three principal parts: the present, the past, and the past participle. <strong>Regular</strong> verbs add <i>-ed</i> for both the past and the past participle: “walk,” “walked,” “walked.” <strong>Irregular</strong> verbs change their vowel or their form: “sing,” “sang,” “sung”; “write,” “wrote,” “written”; “go,” “went,” “gone.” The irregular verbs are among the oldest and most common verbs of the language, and errors in them, such as “brung” for “brought,” are among the commonest barbarisms of English.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qpTodo: `English principal parts: what are the principal parts of a given English verb (“sing,” “go,” “walk”), and which tense uses an auxiliary.` },

{ id: 'aspect-latin',
  title: 'Aspect: complete and incomplete action',
  body: `<p>A verb can show not only when an action takes place but whether it is presented as going on or as complete. This difference is called <strong>aspect</strong> (Latin <i>aspectus</i>, “view”), because it concerns how the action is viewed. Varro, in his work on the Latin language, observed that the Latin tenses fall into two groups: those of the incomplete action (<i>īnfectum</i>), the present, imperfect, and future, and those of the complete action (<i>perfectum</i>), the perfect, pluperfect, and future perfect (<i>De lingua Latina</i> IX.96–97 and X.47–48, in paraphrase).</p>
<p>So Varro saw that the present stem and the perfect stem differ not in time but in aspect. In the past, <i>laudābat</i> (imperfect) means “he was praising” or “he used to praise,” and presents the praising as going on or repeated; <i>laudāvit</i> (perfect) means “he praised,” and presents it as complete. In the same way <i>legam</i> (“I shall read”) and <i>lēgerō</i> (“I shall have read”) are both future, but the second presents the reading as complete.</p>`,
  src: `Varro, <i>De lingua Latina</i> IX.96–97, X.47–48 (Kent), in paraphrase.` },

{ id: 'aspect-english-greek',
  title: 'Aspect in English and in Greek',
  body: `<p>English marks aspect with auxiliary verbs. The <strong>progressive</strong> (“be” with the form in <i>-ing</i>) presents an action as going on: “She was writing a letter.” The <strong>perfect</strong> (“have” with the past participle) presents an action as complete, with its result still present: “She has written the letter.” So “She wrote a letter,” “She was writing a letter,” and “She has written a letter” all concern the past, but they present the writing in three different ways.</p>
<p>Greek shows aspect most clearly. The Greek verb has three stems for three aspects: the present stem for an action going on, the aorist stem for an action viewed simply as an event, and the perfect stem for a completed action whose result remains (Smyth, <i>Greek Grammar</i> §§ 1850–1853, in paraphrase). So γράφει (<i>graphei</i>) is “he is writing,” ἔγραψε (<i>egrapse</i>) is “he wrote,” and γέγραφε (<i>gegraphe</i>) is “he has written (and it stands written).” The Latin perfect serves for both the Greek aorist and the Greek perfect.</p>`,
  src: `Smyth, <i>Greek Grammar</i> §§ 1850–1853, in paraphrase.`,
  qpTodo: `Aspect: does a given form present the action as going on or as complete (<i>laudābat</i>, <i>laudāvit</i>; “was writing,” “has written”), and what is the difference between the Latin imperfect and perfect.` },

{ id: 'sum',
  title: 'The verb “to be” and other irregular verbs',
  body: `<p>A few of the most common Latin verbs do not follow the four conjugations. The most important is <i>sum</i> (“I am”), whose principal parts are <i>sum</i>, <i>esse</i>, <i>fuī</i>, <i>futūrus</i>. Its present indicative is <i>sum</i>, <i>es</i>, <i>est</i>, <i>sumus</i>, <i>estis</i>, <i>sunt</i>, and its imperfect is <i>eram</i>, <i>erās</i>, <i>erat</i>. Compounds of <i>sum</i> follow it, as <i>possum</i> (“I am able”), <i>potes</i>, <i>potest</i>. Other irregular verbs are <i>eō</i> (“I go”), <i>ferō</i> (“I carry”), <i>volō</i> (“I wish”), and <i>fīō</i> (“I become”).</p>
<p>English “to be” is irregular in the same way, and for the same reason: “am,” “is,” “are,” “was,” “were,” and “been” come from different old roots. We saw with comparison that the words used most often are the most likely to keep irregular forms, and the verb “to be” is the most common verb in both languages.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 170, 197–204.` },

{ id: 'parsing',
  title: 'Parsing a verb',
  body: `<p>To <strong>parse</strong> a verb (from Latin <i>pars</i>, “part,” as in the question <i>quae pars ōrātiōnis?</i>, “what part of speech?”) is to name its part of speech and give its accidents: its person, number, tense, mood, and voice, and its conjugation and principal parts. So <i>laudābantur</i> is parsed as a verb of the first conjugation, from <i>laudō</i>, <i>laudāre</i>, <i>laudāvī</i>, <i>laudātum</i>, in the third person plural, imperfect indicative passive.</p>
<p>Some forms admit more than one analysis. <i>Regam</i> is the first person singular active of both the future indicative and the present subjunctive, and <i>amāverit</i> is the third person singular of both the future perfect indicative and the perfect subjunctive. Here, as with the cases of the noun, only the sentence can decide which form is meant.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` },

{ id: 'modist-time-person',
  title: 'The modists on tense, person, and number',
  body: `<p>We saw that the modists explain the verb by the mode of becoming, and they derive its accidents from the same mode. <strong>Tense</strong>, according to Thomas of Erfurt, is the mode of signifying the action under the property of time, present, past, or future; and it belongs to the verb because what is signified as becoming is measured by time, as St. Thomas says, following Aristotle (<i>Grammatica speculativa</i>, on the verb; <i>In Peri hermeneias</i> I, lect. 5; both in paraphrase).</p>
<p>The verb signifies its action as distinct from the substance of which it is said, and so it must be joined to a subject. <strong>Person</strong> and <strong>number</strong> are the modes by which the verb signifies its action as belonging to a subject of the first, second, or third person, and of one or many. So the modists explain why the verb agrees with its subject in person and number: these accidents are the verb’s way of signifying its relation to the subject, which we will study as agreement in Section V.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on the accidents of the verb (Bursill-Hall), in paraphrase.` },

{ id: 'modist-mood-voice',
  title: 'The modists on mood and voice',
  body: `<p>The modists explain <strong>mood</strong> as the mode by which the verb signifies the inclination of the mind toward what is said. When the mind simply declares something, the verb is indicative; when it commands, imperative; when it wishes, optative; when it presents something as dependent on another, subjunctive. So mood signifies not a property of the action itself but a relation of the speaker’s mind to it, which agrees with what we saw in Section I about the kinds of sentence.</p>
<p><strong>Voice</strong> (<i>genus</i>) they explain as the mode by which the verb signifies its action as proceeding from the subject, as received by it, or as neither, which corresponds to Donatus’s active, passive, and neuter. In this way the modists account for each of Donatus’s accidents by a property of the thing or of the mind, as we have seen for the noun. We will see their account of the participle, which shares the accidents of the noun and the verb, when we study the participle.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on the accidents of the verb (Bursill-Hall), in paraphrase.` }

  ]
};
