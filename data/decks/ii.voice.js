/* II.1 Voice (vox) [ii.voice]
   Plan (ITEM-LIST.md): 8 panels, 2 question points (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.vox (5 panels: Donatus's definition, articulate and inarticulate voice, significant and
   not significant voice, the groan and the barbarism); EX.vox (groan, bark, thunder, cough, the letter A sounded). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.voice'] = {
  id: 'ii.voice',
  title: 'Voice (<i>vox</i>)',
  sub: 'Voice as the motion of air perceptible to hearing, and articulate and inarticulate voice',
  sources: `Donatus, <i>Ars maior</i> I.1; Priscian, <i>Institutiones grammaticae</i> I.1–2; Aristotle, <i>De anima</i> II.8.`,
  panels: [

{ id: 'what-voice',
  title: 'What is voice?',
  body: `<p>In Section I we considered the word as a sign, that is, as something that signifies. We now turn to the word as a sound, that is, to the material of which spoken words are made. This is the matter of speech, and the first thing to consider is the voice itself.</p>
<p>When someone speaks to us, the air between us is set in motion, and we hear that motion as sound. A word spoken across a table, a child calling across a playground, and a shout of warning are all of this kind, because in each the air is set in motion so that it can be heard, whether or not anyone is there to hear it on a given occasion. Voice, as the grammarian first considers it, is therefore air set in motion so that it can be heard.</p>
<p>Donatus begins his larger grammar, the <i>Ars maior</i>, with this definition, and the schools used it for centuries: <i>vox est aer ictus sensibilis auditu, quantum in ipso est</i>, that is, voice is the motion of air perceptible to hearing, as far as lies in itself (<i>Ars maior</i> I.1). The phrase “as far as lies in itself” means that voice is the kind of thing that can be heard, even if on some occasion no one is there to hear it.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1 (the Latin; the English follows the Preliminary section, with “as far as lies in itself” rendering <i>quantum in ipso est</i>).` },

{ id: 'natural-philosophy',
  title: 'Voice in natural philosophy',
  body: `<p>Not every sound is voice in the strict sense. Thunder and the splash of water are sounds, but no living thing utters them. A sneeze or a hiccup is made by a living thing, but it is not uttered in order to show anything. In the strict sense, then, voice is a sound made by a living being with some act of imagination, as a sound that signifies something.</p>
<p>Donatus defines voice as the grammarian needs it, by what can be heard. Aristotle, in his work on the soul, defines it in the stricter way, as the natural philosopher considers it, and his example of a sound made by a living being that is not voice is the cough (<i>De anima</i> II.8, 420b27–33). So the natural philosopher distinguishes the voice of a living being from other sounds, and the grammarian takes that distinction from him. The grammarian does not study how the throat and tongue produce the voice, which belongs to natural philosophy and in our time to phonetics (the modern study of the sounds of speech); he studies the voice insofar as it becomes speech.</p>`,
  src: `Aristotle, <i>De anima</i> II.8, 420b27–33, in paraphrase.` },

{ id: 'articulate',
  title: 'Articulate and inarticulate voice',
  body: `<p>Some voice is made of distinct sounds that letters can record, and some is not. The spoken word “river” can be written down so that another reader can pronounce it again; a sigh cannot. So the first division of voice is between voice that can be written and voice that cannot. Donatus makes this his first division: <i>omnis vox aut articulata est aut confusa</i>, “every voice is either articulate or confused”; articulate voice, he says, is voice that can be grasped in letters, and confused voice is voice that cannot be written (<i>Ars maior</i> I.1). The usual English term for Donatus’s “confused” voice is <strong>inarticulate</strong> voice.</p>
<p>So the spoken words “river,” <i>flūmen</i> (“river”), and “sing” are articulate voice, because they are made of distinct sounds that letters can record. A sigh, the howl of a wolf, and the purr of a cat are inarticulate voice, because no arrangement of letters records them exactly. We may write “purr” or “sigh,” but these are English words that name or imitate the sounds; they are not the sounds themselves.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1.` },

{ id: 'priscian-four',
  title: 'Priscian’s four kinds of voice',
  body: `<p>We can ask of a sound whether it can be written, but we can also ask whether it is joined to some meaning in the mind of the speaker. These are two different questions, and a sound can satisfy one without the other. A gasp of surprise shows something but cannot be written exactly, whereas a nonsense syllable such as “zib” can be written but means nothing.</p>
<p>Priscian divides voice by these two questions instead of one. If a voice is joined to some meaning in the mind of the speaker, he calls it <strong>articulate</strong>; if it can be written, he calls it <strong>literate</strong> (Latin <i>litterata</i>, from <i>littera</i>, “letter”) (<i>Institutiones grammaticae</i> I.1–2). Priscian’s “articulate,” then, does not mean what Donatus’s means, so it matters which grammarian is speaking.</p>
<p>The two questions give four kinds of voice: first, voice that signifies and can be written, such as any sentence spoken in English or Latin, “The ship sails at dawn”; second, voice that signifies but cannot be written, such as a whistle or a sigh uttered to show something; third, voice that can be written but signifies nothing, such as the imitation of an animal’s cry, as when the croak of a frog is written <i>coax</i>; and fourth, voice that neither signifies nor can be written, such as a crash or the lowing of cattle.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> I.1–2, in paraphrase (no published English translation).`,
  qp: { id: 'q-priscian', variants: [
    { prompt: `In Priscian’s division, what kind of voice is a line of verse such as <i>arma virumque cano</i> (“arms and the man I sing”)?`,
      options: [`It signifies but cannot be written`, `It can be written but signifies nothing`, `It signifies and can be written`, `It neither signifies nor can be written`],
      answer: 2,
      explain: `A line of verse is joined to a meaning in the mind of the poet, so Priscian calls it articulate, and it can be written in letters, so he calls it literate. It is the first of his four kinds, voice that both signifies and can be written.` },
    { prompt: `In Priscian’s division, what kind of voice is the croak of a frog, written <i>coax</i>?`,
      options: [`It signifies and can be written`, `It can be written but signifies nothing`, `It signifies but cannot be written`, `It neither signifies nor can be written`],
      answer: 1,
      explain: `The croak can be imitated in letters, so it is literate in Priscian’s sense; but the frog does not join it to any meaning in a mind, so it signifies nothing. Writing it down does not give it a meaning.` },
    { prompt: `A whistle given to call a dog shows something but cannot be written. What does Priscian call it?`,
      options: [`Articulate but not literate`, `Literate but not articulate`, `Both articulate and literate`, `Neither articulate nor literate`],
      answer: 0,
      explain: `For Priscian a voice is articulate when it is joined to some meaning in the mind of the speaker, and literate when it can be written. The whistle shows something, so it is articulate in his sense, but it cannot be written, so it is not literate. Donatus, who calls voice articulate only when it can be written, would call the same whistle inarticulate, so it matters which grammarian is speaking.` }
  ]} },

{ id: 'significant',
  title: 'Voice that signifies and voice that does not',
  body: `<p>As we have seen already, voice either signifies or does not, and voice that signifies does so either by nature or by imposition. Set beside the division into articulate and inarticulate voice, this tells us exactly what a word is.</p>
<p>So articulate voice is not yet a word. The letter B pronounced alone is articulate, because it can be written, but it signifies nothing. Only articulate voice that signifies by imposition is a word, and that is why the word is the least part of an expression that signifies, whereas the voice, the letter, and the syllable are its material.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2; Boethius, <i>In Peri hermeneias</i>, in paraphrase.` },

{ id: 'groan',
  title: 'Why a groan is neither a word nor an error',
  body: `<p>We have seen that a groan is a significant voice by nature. It is also inarticulate, and so it is not a word. For the same reason a groan cannot be a barbarism or a solecism. We saw in the Preliminary section that a barbarism is an error in a single word and a solecism an error in the arrangement of words. Both errors presuppose words; below the level of the word there is nothing that can be correctly or incorrectly formed in this sense.</p>
<p>This is why grammar begins with the voice but does not stay with it. The voice is the material of speech, and grammar must know what that material is; but correctness and error, like meaning, begin with the word. A groan may be loud or soft, but it cannot be correct or incorrect, whereas “taught” and “teached” can be, because they are words.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1 and III.1, in paraphrase.` },

{ id: 'languages',
  title: 'The sounds that each language uses',
  body: `<p>Every human being can produce a great range of articulate sounds, but each language uses only a selection of them, and the selections differ. English has the sound written “th” in “think” and “this,” which Latin did not have. German has the sound written “ch” in <i>Bach</i>, which most English speakers do not use. French has the nasal vowel of <i>bon</i> (“good”), in which the air passes through the nose as well as the mouth.</p>
<p>So the articulate voice of a language is a set of sounds that its speakers have learned to distinguish and to combine. A child who learns English learns to hear the difference between “thin” and “tin” because it changes the word; a speaker of a language without the “th” sound may hear the two as one. The study of these sounds belongs to phonetics, and the study of the sounds that distinguish words in a language is called phonology.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> I, in paraphrase.` },

{ id: 'order',
  title: 'From voice to letter and syllable',
  body: `<p>We have now seen what voice is, how articulate voice differs from inarticulate voice, and why the voice is the material of speech but not yet speech. The study of the matter of speech proceeds in the order of its parts. Articulate voice can be divided into its least parts, which writing records as letters; letters are joined into syllables; and syllables are measured as long or short, and accented, and arranged into feet and lines of verse.</p>
<p>Each step depends on the one before it, because a letter is a mark of an articulate sound, and a syllable is made of such sounds. So the study of the matter of speech considers, after the voice, the letter, the syllable, quantity and accent, punctuation (the marks of the pauses of speech), and meter (the measures of verse).</p>`,
  src: `Donatus, <i>Ars maior</i> I.1–6.`,
  qp: { id: 'q-articulate-word', variants: [
    { prompt: `Which of these is a word?`,
      options: [`A groan of pain`, `The letter B pronounced alone`, `“Horse” said aloud`, `A cough`],
      answer: 2,
      explain: `Only articulate voice that signifies by imposition is a word. “Horse” said aloud is made of distinct sounds that letters can record, and it signifies by imposition. A groan signifies pain, but by nature and not by imposition; the letter B is articulate but signifies nothing; and a cough is not uttered to show anything.` },
    { prompt: `The letter B pronounced alone is articulate voice, because it can be written. Why is it not a word?`,
      options: [`Because it cannot be written`, `Because it signifies nothing`, `Because it signifies by nature`, `Because no living being makes it`],
      answer: 1,
      explain: `Articulate voice is not yet a word. A word is articulate voice that signifies by imposition, and the letter B pronounced alone signifies nothing at all. It can be written, so it is articulate, but it remains part of the material of speech.` },
    { prompt: `In the strict sense in which Aristotle defines voice, which of these is voice?`,
      options: [`Thunder`, `A cough`, `The splash of water`, `A shout across a field`],
      answer: 3,
      explain: `In the strict sense, voice is a sound made by a living being with some act of imagination, as a sound that signifies something. A shout across a field is such a sound. Thunder and the splash of water are not made by any living thing, and a cough, although a living being makes it, is not uttered to show anything; Aristotle gives the cough as his example of a sound that is not voice.` }
  ]} }

  ]
};
