/* III.14 The Interjection [iii.interjection]
   Plan (ITEM-LIST.md): 5 panels, 1 question point (placeholder: qpTodo; to be written).
   Live material drawn on: DECKS.pos (the interjection), DECKS.modes (the four that keep one form). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.interjection'] = {
  id: 'iii.interjection',
  title: 'The Interjection',
  sub: 'The part of speech that signifies a feeling of the mind',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XV.`,
  recitation: [
    `The last of the eight parts of speech is the <strong>interjection</strong> (<i>interiectiō</i>, “what is thrown in”).`,
    `Donatus defines it as a part of speech that signifies a feeling of the mind by an unformed utterance.`,
    `It is called an interjection because it is thrown into the sentence without being constructed with the other words.`,
    `The Greek grammarians placed the interjection under the adverb, but the Latin grammarians counted it as a part of its own.`,
    `Donatus gives the reason that a verb does not immediately follow words of this kind, and Priscian adds that the interjection shows a complete feeling of the mind even without a verb.`,
    `Interjections signify different kinds of feeling, such as joy, grief, wonder, pain, disgust, and surprise, and some serve to call someone.`,
    `Donatus gives the interjection one accident, <strong>signification</strong>: it signifies joy, grief, wonder, fear, or any similar feeling.`,
    `So the interjection, like the other indeclinable parts, has only the accident that concerns what kind of thing it signifies.`,
    `Interjections differ from language to language, as other words do, so one who learns another language must learn its interjections.`,
    `This shows that interjections signify by imposition, not only by nature.`,
    `A groan signifies pain by nature and is much the same among all peoples, but an interjection, though it may resemble a natural sound, has a form fixed by the custom of each language, so it is a word, articulate and written, and a part of speech.`,
    `The interjection “O” (Latin <i>ō</i>) is used with the vocative to address someone with feeling.`,
    `Some interjections are followed by other cases as well, as Latin <i>heu</i> by the accusative and <i>ei</i> by the dative.`,
    `In these uses the interjection comes closer to being constructed with the other words, but it is still not a member of the sentence in the way the noun and the verb are.`,
    `With the interjection the eight parts of speech are complete.`,
    `The noun and the pronoun signify by the mode of a stable thing, the verb and the participle by the mode of becoming, and the four indeclinable parts by determining, relating, joining, or expressing feeling.`,
    `The accidents are gender, number, and case in the noun and the pronoun; tense, mood, voice, person, and number in the verb; and in the indeclinable parts only their kinds of signification, their comparison, their figure, and their order.`,
    `The parts of speech are the material of the sentence, as letters and syllables are the material of the word, and how the parts are put together so that the sentence is correct and complete is the subject of construction.`
  ],
  panels: [

{ id: 'interjection',
  title: 'What is an interjection?',
  body: `<p>When we hear bad news and say “Oh dear,” or see something astonishing and say “Goodness!” the word expresses a feeling, and it is not constructed with any other word of the sentence. The last of the eight parts of speech is the <strong>interjection</strong> (<i>interiectiō</i>, “what is thrown in”). We have seen Donatus’s definition: a part of speech that signifies a feeling of the mind by an unformed utterance (<i>Ars minor</i>). It is called an interjection because it is thrown into the sentence without being constructed with the other words, as in “Bother, the bus has gone” or Latin <i>Heu, quid agam?</i> (“Alas, what shall I do?”).</p>
<p>The Greek grammarians placed the interjection under the adverb, but the Latin grammarians counted it as a part of its own. Donatus gives the reason: the Greeks join these words to the adverbs, “which the Latins do not do, because a verb does not immediately follow words of this kind” (<i>quia huiusce modi voces non statim subsequitur verbum</i>; <i>Ars maior</i> II). Priscian adds that the interjection shows a complete feeling of the mind even without a verb, so that “alas!” alone is a complete expression of grief (<i>Institutiones grammaticae</i> XV).</p>`,
  src: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.` },

{ id: 'signification',
  title: 'The signification of the interjection',
  body: `<p>English interjections signify different kinds of feeling: joy (“hooray,” “bravo”), grief (“alas”), wonder (“wow”), pain (“ouch”), disgust (“ugh”), and surprise (“gosh”). Some interjections serve to call someone, as English “hey” and “hello” and Latin <i>heus</i> (“hey there”).</p>
<p>Donatus gives the interjection one accident, <strong>signification</strong>: it signifies joy, as <i>euax</i> (“hurrah”); grief, as <i>heu</i> (“alas”); wonder, as <i>papae</i> (“wow”); or fear, as <i>attat</i> (“oh no!”); and any similar feeling (<i>Ars minor</i>). So the interjection, like the other indeclinable parts, has only the accident that concerns what kind of thing it signifies.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the interjection, in paraphrase.`,
  qp: { id: 'q-signification', variants: [
    { prompt: `What feeling does the Latin interjection <i>ēheu</i> signify?`,
      options: [`Joy`, `Grief`, `Wonder`, `Fear`],
      answer: 1,
      explain: `<i>Ēheu</i>, a stronger form of Donatus’s <i>heu</i>, signifies grief: “alas!”` },
    { prompt: `What feeling does the English interjection “yuck” signify?`,
      options: [`Joy`, `Grief`, `Disgust`, `Fear`],
      answer: 2,
      explain: `“Yuck” signifies disgust, as “ugh” does. The signification is the interjection’s one accident: the kind of feeling it expresses.` },
    { prompt: `Why is “oops” a word and a part of speech, whereas a groan is not?`,
      options: [`Because its form is fixed by custom`, `Because it expresses a feeling of the mind`, `Because it is louder`, `Because it can be the subject of a verb`],
      answer: 0,
      explain: `A groan signifies pain by nature and is much the same among all peoples. “Oops” has a form fixed by the custom of English, so it signifies by imposition, is articulate and written, and is a word. Both express a feeling, so that is not the difference.` }
  ]} },

{ id: 'languages',
  title: 'Interjections in different languages',
  body: `<p>Interjections differ from language to language, as other words do. Grief is expressed by English “alas,” Latin <i>heu</i>, Greek οἴμοι (<i>oimoi</i>, “woe is me”), German <i>ach</i>, and French <i>hélas</i>. Pain is expressed by English “ouch,” German <i>au</i>, and French <i>aïe</i>. So one who learns another language must learn its interjections, as one must learn its nouns and verbs.</p>
<p>This shows that interjections signify by imposition, not only by nature. We saw in Section II that a groan signifies pain by nature, and it is much the same among all peoples. An interjection may resemble a natural sound, but its form is fixed by the custom of each language, and so it is a word, articulate and written, and a part of speech.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XV, in paraphrase.` },

{ id: 'vocative',
  title: 'The interjection and the vocative',
  body: `<p>English uses “O” to address someone with feeling, chiefly in poetry and prayer: “O Lord, open thou our lips.” In the same way the Latin interjection <i>ō</i> (“O”) is often used with the vocative case to address someone with feeling: <i>o fortunate, inquit, adulescens, qui tuae virtutis Homerum praeconem inveneris!</i> (“O happy youth, to find Homer as the panegyrist of your glory!”), as Cicero reports Alexander’s words at the tomb of Achilles (<i>Pro Archia</i> 24).</p>
<p>Some interjections are followed by other cases as well. <i>Heu</i> may take the accusative, as in <i>heu mē miserum!</i> (“alas, wretched me!”), and <i>ei</i> (“ah”) takes the dative, as in <i>ei mihi!</i> (“ah me!”). In these uses the interjection comes closer to being constructed with the other words, but it is still not a member of the sentence in the way the noun and the verb are.</p>`,
  src: `Cicero, <i>Pro Archia</i> 24 (Latin ed. A. C. Clark; trans. C. D. Yonge; both checked against the Perseus text); Allen and Greenough, <i>New Latin Grammar</i> §§ 340, 397.` },

{ id: 'eight-complete',
  title: 'The eight parts complete',
  body: `<p>With the interjection we have completed the eight parts of speech. We have seen that the noun and the pronoun signify by the mode of a stable thing, the verb and the participle by the mode of becoming, and the four indeclinable parts by determining, relating, joining, or expressing feeling. We have also seen the accidents of each part: gender, number, and case in the noun and the pronoun; tense, mood, voice, person, and number in the verb; and the accidents of the indeclinable parts, which concern only their kinds of signification, their comparison, their figure, and their order.</p>
<p>The parts of speech are the material of the sentence, as letters and syllables are the material of the word. The next question is how the parts are put together, so that the sentence is correct and complete. That is the subject of construction, which we will study in Section V, after a short study of how words are formed and traced to their origins.</p>`,
  src: `Donatus, <i>Ars minor</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.` }

  ]
};
