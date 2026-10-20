/* V.3 Government (regimen) [v.government]
   Plan (ITEM-LIST.md): 8 panels, 5 question points, 2 of them short analysis questions.
   Live material drawn on: DECKS.govern (government, in with two cases, government in English). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.government'] = {
  id: 'v.government',
  title: 'Government (<i>regimen</i>)',
  sub: 'How a verb, a preposition, or a noun requires a case',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVIII; Peter Helias, <i>Summa super Priscianum</i>; Allen and Greenough, <i>New Latin Grammar</i>.`,
  recitation: [
    `<strong>Government</strong> (Latin <i>regimen</i>, “ruling”) is the relation in which one word requires another word to be in a particular case that the first word does not itself have.`,
    `Government is not agreement, in which two words share an accident.`,
    `A verb that requires its object in the accusative is said to <strong>govern</strong> the accusative.`,
    `The grammarians of the twelfth century, especially Peter Helias, made government one of the principal ideas of syntax: a word governs another when it requires that word in a certain form in order to complete the construction.`,
    `The preposition, which governs a particular case in its noun, is the clearest case of government.`,
    `Most Latin transitive verbs govern the accusative of the <strong>direct object</strong>, the person or thing on which the action falls.`,
    `A verb that takes a direct object is called transitive, because its action passes over to the object.`,
    `English shows the same government by the position of the object after the verb, and in pronouns by the objective case.`,
    `Some Latin verbs govern two accusatives, one of the person and one of the thing, as English “teach” takes two objects.`,
    `Some Latin verbs govern a case other than the accusative, and they must be learned with their case.`,
    `Many verbs of favoring, helping, obeying, trusting, and their opposites govern the <strong>dative</strong>.`,
    `Some verbs of remembering and forgetting govern the <strong>genitive</strong>.`,
    `Five deponent verbs and their compounds govern the <strong>ablative</strong>: <i>ūtor</i>, <i>fruor</i>, <i>fungor</i>, <i>potior</i>, and <i>vescor</i>.`,
    `So the case that a verb governs is a fact of each language, and a word-for-word translation will often choose the wrong case.`,
    `Each Latin preposition governs a particular case: some the accusative, some the ablative, and <i>in</i> and <i>sub</i> either case, motion toward a place with the accusative and rest in a place with the ablative.`,
    `The preposition has no case of its own and exists only to relate its noun to another word, so its government shows most clearly what government means.`,
    `The case that a preposition governs is part of what it signifies.`,
    `Nouns and adjectives, like verbs, can require another word to complete their meaning, and so they also govern cases.`,
    `A noun governs the genitive of another noun that completes or limits its meaning.`,
    `Some adjectives govern the dative, especially adjectives of likeness, nearness, and fitness; others govern the genitive, especially adjectives of desire, knowledge, and fullness.`,
    `English expresses most of these relations with prepositions, which are themselves governed by the noun or adjective, so in English government has moved from the endings of the noun to the choice of the preposition.`,
    `English shows government less plainly than Latin, because its nouns no longer show case, but government remains in two places.`,
    `First, many English verbs, nouns, and adjectives require a particular preposition, and to change the preposition is an error.`,
    `Second, a preposition or verb governs the objective case of a pronoun, so “for you and I” is a failure of government.`,
    `So where English has lost its endings, government still exists, but its marks are fewer, and a speaker must know the rule even where the form does not show it.`,
    `In every case of government there is a <strong>governing</strong> word and a <strong>governed</strong> word.`,
    `The governing word is the one whose meaning requires completion, and the governed word supplies it in the required form.`,
    `A sentence usually contains several relations of government at once, and to analyze a sentence is in part to find each governing word and what it governs.`,
    `Agreement and government are the two principal relations of form between words.`,
    `In agreement the two words share the same accident; in government one word requires in another an accident that it does not have itself.`,
    `Both relations rest on a deeper one, the relation of dependence, since in each pair one word depends on the other.`
  ],
  panels: [

{ id: 'what-government',
  title: 'What is government?',
  body: `<p>We say “She thanked him,” not “She thanked he,” although the verb “thanked” has no case of its own: the verb requires the pronoun in the objective case. This relation is not agreement, in which, as we have seen, two words share an accident. It is <strong>government</strong> (Latin <i>regimen</i>, “ruling”), in which one word requires another word to be in a particular case that the first word does not itself have. The verb <i>dūcit</i> (“he leads”) has no case, but it requires its object to be in the accusative: <i>legiōnem dūcit</i>, “he leads the legion.” So the verb is said to <strong>govern</strong> the accusative.</p>
<p>The grammarians of the twelfth century, especially Peter Helias in his commentary on Priscian, made government one of the principal ideas of syntax. A word governs another, in their account, when it requires that word in a certain form in order to complete the construction (<i>Summa super Priscianum</i>). We have already seen the clearest case of government with the preposition, which governs a particular case in its noun.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>, in paraphrase; Priscian, <i>Institutiones grammaticae</i> XVIII.` },

{ id: 'accusative',
  title: 'Verbs that govern the accusative',
  body: `<p>When we say “She paints the fence,” the action of painting falls on the fence, and the sentence would be incomplete without it. Most Latin transitive verbs govern the accusative of the <strong>direct object</strong>, the person or thing on which the action falls: <i>mūrum aedificat</i>, “he builds the wall”; <i>carmen canit</i>, “he sings a song”; <i>urbem cēpērunt</i>, “they captured the city.” We saw in Section III that a verb that takes a direct object is called transitive, because its action passes over to the object.</p>
<p>English shows the same government by the position of the object after the verb, and in pronouns by the objective case: “He met her,” not “He met she.” Some Latin verbs govern two accusatives, one of the person and one of the thing: <i>puerōs grammaticam docet</i>, “he teaches the boys grammar.” English “teach” takes two objects in the same way.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 386–396.` },

{ id: 'other-cases',
  title: 'Verbs that govern other cases',
  body: `<p>The English verbs “trust,” “obey,” and “use” all take a direct object, but the Latin verbs with the same meanings do not govern the accusative. Some Latin verbs govern a case other than the accusative, and they must be learned with their case:</p>
<p>Many verbs of favoring, helping, obeying, trusting, and their opposites govern the <strong>dative</strong>: <i>tibi crēdō</i>, “I trust you”; <i>lēgibus pāret</i>, “he obeys the laws”; <i>hostibus nocet</i>, “he harms the enemy.”<br>Some verbs of remembering and forgetting govern the <strong>genitive</strong>: <i>amīcī meminit</i>, “he remembers his friend.”<br>Five deponent verbs and their compounds govern the <strong>ablative</strong>: <i>ūtor</i> (“I use”), <i>fruor</i> (“I enjoy”), <i>fungor</i> (“I perform”), <i>potior</i> (“I gain possession of”), and <i>vescor</i> (“I feed on”), as in <i>gladiō ūtitur</i>, “he uses a sword.”</p>
<p>So the case that a verb governs is a fact of each language, and a student who translates word for word will often choose the wrong case. The dictionary gives the case that each such verb governs.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 350, 367, 410.`,
  qp: { id: 'q-other-cases', variants: [
    { prompt: `Which case does the Latin verb <i>studeō</i> (“I am eager for,” “I devote myself to”) govern?`,
      options: [`The accusative`, `The dative`, `The genitive`, `The ablative`],
      answer: 1,
      explain: `<i>Studeō</i> is one of the verbs of favoring and devotion that govern the dative: <i>litterīs studet</i>, “he devotes himself to letters.” English “study” takes a direct object, so a word-for-word translation would give the wrong case.` },
    { prompt: `Which form of <i>magister</i> (“teacher”) completes <i>puerī ___ pārent</i> (“the boys obey the teacher”)?`,
      options: [`<i>magistrum</i>`, `<i>magistrī</i>`, `<i>magister</i>`, `<i>magistrō</i>`],
      answer: 3,
      explain: `<i>Pāreō</i> (“I obey”) governs the dative, so its object is <i>magistrō</i>. The accusative <i>magistrum</i> is what English “obey the teacher” might lead a student to write.` },
    { prompt: `Which form of <i>officium</i> (“duty”) completes <i>___ fungitur</i> (“he performs his duty”)?`,
      options: [`<i>officium</i>`, `<i>officiō</i>`, `<i>officiī</i>`, `<i>officia</i>`],
      answer: 1,
      explain: `<i>Fungor</i> (“I perform”) is one of the five deponents that govern the ablative, so the form is <i>officiō</i>.` }
  ]} },

{ id: 'prepositions',
  title: 'Prepositions and government',
  body: `<p>The Latin preposition <i>ad</i> is always followed by the accusative and <i>cum</i> by the ablative; the preposition decides the case of its noun. Each Latin preposition, as we saw in Section III, governs a particular case: <i>ad</i>, <i>per</i>, and <i>post</i> the accusative; <i>ab</i>, <i>cum</i>, and <i>ex</i> the ablative; and <i>in</i> and <i>sub</i> govern either case with a difference of meaning, motion toward a place with the accusative and rest in a place with the ablative.</p>
<p>The government of a preposition is the clearest example of what government means, because the preposition has no case of its own and exists only to relate its noun to another word. The case it governs is part of what it signifies, so that <i>in</i> with the accusative signifies motion into, whereas <i>in</i> with the ablative signifies position in.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 220–221.`,
  qp: { id: 'q-prepositions', variants: [
    { prompt: `What does the accusative add to the meaning of <i>in</i> in <i>in theātrum</i>?`,
      options: [`Motion into the theater`, `Rest in the theater`, `Possession of the theater`, `The means by which something is done`],
      answer: 0,
      explain: `<i>In</i> governs either case with a difference of meaning: with the accusative it signifies motion into a place. So <i>in theātrum</i> is “into the theater.”` },
    { prompt: `What does <i>in theātrō</i> signify?`,
      options: [`“Into the theater”`, `“Out of the theater”`, `“In the theater”`, `“Toward the theater”`],
      answer: 2,
      explain: `With the ablative, <i>in</i> signifies rest in a place, so <i>in theātrō</i> is “in the theater,” of someone already there.` },
    { prompt: `Which case does <i>cum</i> govern in <i>cum comite</i> (“with a companion”)?`,
      options: [`The accusative`, `The ablative`, `The dative`, `The genitive`],
      answer: 1,
      explain: `<i>Cum</i> always governs the ablative, and <i>comite</i> is the ablative singular of <i>comes</i> (“companion”).` }
  ]} },

{ id: 'nouns-adjectives',
  title: 'Nouns and adjectives that govern',
  body: `<p>We say “love of country,” “like his father,” and “full of water”: a noun or an adjective, like a verb, can require another word to complete its meaning. Nouns and adjectives therefore also govern cases. A noun governs the genitive of another noun that completes or limits its meaning: <i>amor patriae</i>, “love of country”; <i>liber puerī</i>, “the boy’s book.” Some adjectives govern the dative, especially adjectives of likeness, nearness, and fitness: <i>similis patrī</i>, “like his father”; <i>amīcus Rōmānīs</i>, “friendly to the Romans.” Others govern the genitive, especially adjectives of desire, knowledge, and fullness: <i>cupidus glōriae</i>, “eager for glory”; <i>plēnus aquae</i>, “full of water.”</p>
<p>English expresses most of these relations with prepositions, “of,” “to,” and “for,” which are themselves governed by the noun or adjective: we say “fond of,” “similar to,” “eager for,” and the choice of preposition is fixed by usage. So in English, government has moved from the endings of the noun to the choice of the preposition.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 343–349, 384–385.`,
  qp: { id: 'q-nouns-adjectives', variants: [
    { prompt: `Which case does the Latin adjective <i>fīnitimus</i> (“neighboring”) govern?`,
      options: [`The accusative`, `The dative`, `The ablative`, `The nominative`],
      answer: 1,
      explain: `Adjectives of nearness govern the dative: <i>fīnitimus Gallīs</i>, “neighboring to the Gauls.” English uses the preposition “to.”` },
    { prompt: `Which case does the Latin adjective <i>memor</i> (“mindful”) govern?`,
      options: [`The genitive`, `The dative`, `The accusative`, `The ablative`],
      answer: 0,
      explain: `Adjectives of knowledge and memory govern the genitive: <i>memor beneficiī</i>, “mindful of a kindness.” English uses the preposition “of.”` },
    { prompt: `In <i>amor lībertātis</i>, the noun <i>amor</i> governs the genitive. Which English preposition corresponds to it?`,
      options: [`“to”`, `“by”`, `“of”`, `“with”`],
      answer: 2,
      explain: `<i>Amor lībertātis</i> is “love of liberty.” English expresses with the preposition “of” what Latin shows by the genitive ending.` }
  ]} },

{ id: 'english',
  title: 'Government in English',
  body: `<p>English shows government less plainly than Latin, because its nouns no longer show case. But government remains in two places. First, many English verbs, nouns, and adjectives require a particular preposition: we “listen to,” “wait for,” “depend on,” and are “afraid of,” and to change the preposition (“depend of”) is an error. Second, a preposition or verb governs the objective case of a pronoun: “for you and me,” “Give it to him and me,” “whom did you see?”</p>
<p>“For you and I,” which is common in speech but avoided in careful usage, is a failure of government, because “for” is a preposition and requires the objective case of both pronouns. Latin makes the same requirement visible in the ending: <i>prō tē et mē</i>, not <i>prō tē et ego</i>. So where English has lost its endings, government still exists, but its marks are fewer, and a speaker must know the rule even where the form does not show it.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qp: { id: 'q-english', variants: [
    { prompt: `In “The guide waited with him and me,” which word governs “him” and “me”?`,
      options: [`“waited”`, `“with”`, `“guide”`, `No word governs them`],
      answer: 1,
      explain: `“With” is a preposition, and it governs the objective case of both pronouns, “him” and “me.”` },
    { prompt: `Which of these is correct in careful usage?`,
      options: [`“Send it to he and I”`, `“Send it to him and I”`, `“Send it to him and me”`, `“Send it to he and me”`],
      answer: 2,
      explain: `“To” governs the objective case of both pronouns: “him and me.” A pronoun joined by “and” does not escape the government of the preposition.` },
    { prompt: `Which preposition does “insist” require in “She insisted ___ paying”?`,
      options: [`“on”`, `“at”`, `“for”`, `“to”`],
      answer: 0,
      explain: `English verbs govern particular prepositions, fixed by usage: we “insist on,” as we “depend on” and “listen to.” Another preposition would be an error.` }
  ]} },

{ id: 'governed-governing',
  title: 'The governing word and the governed',
  body: `<p>In every case of government there is a <strong>governing</strong> word and a <strong>governed</strong> word. In <i>legiōnem dūcit</i>, <i>dūcit</i> governs and <i>legiōnem</i> is governed; in <i>ad portum</i>, <i>ad</i> governs and <i>portum</i> is governed; in <i>perītus bellī</i> (“skilled in war”), <i>perītus</i> governs and <i>bellī</i> is governed. The governing word is the one whose meaning requires completion, and the governed word supplies it in the required form.</p>
<p>A sentence usually contains several relations of government at once. In <i>tabellārius epistulam ad rēgem fert</i>, “the courier carries the letter to the king,” <i>fert</i> governs <i>epistulam</i> in the accusative, and <i>ad</i> governs <i>rēgem</i> in the accusative. To analyze a sentence is in part to find each governing word and what it governs.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>; Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` },

{ id: 'agreement-government',
  title: 'Agreement and government compared',
  body: `<p>Agreement and government are the two principal relations of form between words, and they differ in a clear way. In agreement the two words share the same accident, as an adjective shares the gender, number, and case of its noun. In government one word requires in another an accident that it does not have itself, as a verb, which has no case, requires its object in the accusative.</p>
<p>So in <i>fīdus servus portam claudit</i>, “the faithful slave closes the gate,” <i>fīdus</i> agrees with <i>servus</i>, <i>claudit</i> agrees with <i>servus</i> in person and number, and <i>claudit</i> governs <i>portam</i> in the accusative. Both relations rest on a deeper one, the relation of dependence: in each pair, one word depends on the other.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.`,
  qp: { id: 'q-agreement-government', variants: [
    { prompt: `In Latin <i>fessus equus fēnum edit</i> (“the tired horse eats the hay”), which pair of words is related by government?`,
      options: [`<i>fessus</i> and <i>equus</i>`, `<i>equus</i> and <i>edit</i>`, `<i>edit</i> and <i>fēnum</i>`, `<i>fessus</i> and <i>fēnum</i>`],
      answer: 2,
      explain: `<i>Edit</i> has no case but requires its object in the accusative, <i>fēnum</i>, so it governs it. <i>Fessus</i> agrees with <i>equus</i>, and <i>edit</i> agrees with <i>equus</i> in person and number.` },
    { prompt: `In Latin <i>nauta fortis rēmōs tenet</i> (“the brave sailor holds the oars”), which pair of words is related by agreement in gender, number, and case?`,
      options: [`<i>tenet</i> and <i>rēmōs</i>`, `<i>nauta</i> and <i>fortis</i>`, `<i>fortis</i> and <i>rēmōs</i>`, `<i>rēmōs</i> and <i>nauta</i>`],
      answer: 1,
      explain: `<i>Fortis</i> shares the gender, number, and case of <i>nauta</i>: masculine, singular, nominative. <i>Tenet</i> governs <i>rēmōs</i> in the accusative.` },
    { prompt: `How does government differ from agreement?`,
      options: [`The governing word lacks the accident it requires`, `In government the two words always share gender, number, and case`, `Government holds only between verbs and nouns`, `Agreement is found only in English`],
      answer: 0,
      explain: `In agreement two words share an accident; in government one word requires in another an accident that it does not have itself, as a verb, which has no case, requires its object in the accusative.` }
  ]} }

  ]
};
