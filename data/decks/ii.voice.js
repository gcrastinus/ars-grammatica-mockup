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
<p>Donatus begins his larger grammar, the <i>Ars maior</i>, with the definition that the schools used for centuries: <i>vox est aer ictus sensibilis auditu, quantum in ipso est</i>, that is, voice is the motion of air perceptible to hearing, as far as lies in itself (<i>Ars maior</i> I.1). The phrase “as far as lies in itself” means that voice is the kind of thing that can be heard, even if on some occasion no one is there to hear it. So the spoken word “horse,” the Latin <i>equus</i>, and a shout across a field are all voice, because each is air set in motion so that it can be heard.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1 (the Latin; the English follows the Preliminary section, with “as far as lies in itself” rendering <i>quantum in ipso est</i>).` },

{ id: 'natural-philosophy',
  title: 'Voice in natural philosophy',
  body: `<p>Donatus defines voice as the grammarian needs it, by what can be heard. Aristotle, in his work on the soul, defines it more narrowly, as the natural philosopher considers it. Not every sound is voice: thunder and the splash of water are sounds, but they are not voice, because no living thing utters them. Nor is every sound made by an animal voice; Aristotle says that a cough is not voice, because voice is a sound made by a living being with some act of imagination, as a sound that signifies something (<i>De anima</i> II.8, 420b27–33, in paraphrase).</p>
<p>So the natural philosopher distinguishes the voice of a living being from other sounds, and the grammarian takes that distinction from him. The grammarian does not study how the throat and tongue produce the voice, which belongs to natural philosophy and in our time to phonetics; he studies the voice insofar as it becomes speech.</p>`,
  src: `Aristotle, <i>De anima</i> II.8, 420b27–33, in paraphrase.` },

{ id: 'articulate',
  title: 'Articulate and inarticulate voice',
  body: `<p>Some voice is made of distinct sounds that letters can record, and some is not. The spoken word “horse” can be written down so that another reader can pronounce it again; a groan cannot. So the first division of voice is between voice that can be written and voice that cannot. Donatus makes this his first division: <i>omnis vox aut articulata est aut confusa</i>, “every voice is either articulate or confused”; articulate voice, he says, is voice that can be grasped in letters, and confused voice is voice that cannot be written (<i>Ars maior</i> I.1). The usual English term for Donatus’s “confused” voice is <strong>inarticulate</strong> voice.</p>
<p>So the spoken words “horse,” <i>equus</i>, and “run” are articulate voice, because they are made of distinct sounds that letters can record. A groan, the bark of a dog, and the neigh of a horse are inarticulate voice, because no arrangement of letters records them exactly. We may write “ouch” or “woof,” but these are English words that imitate the sounds; they are not the sounds themselves.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1.` },

{ id: 'priscian-four',
  title: 'Priscian’s four kinds of voice',
  body: `<p>Priscian divides voice by two questions instead of one. The first question is whether the voice is joined to some meaning in the mind of the speaker; if it is, he calls it <strong>articulate</strong>. The second question is whether it can be written; if it can, he calls it <strong>literate</strong> (Latin <i>litterata</i>, from <i>littera</i>, “letter”). Priscian’s “articulate,” then, does not mean what Donatus’s means, and we must notice which grammarian is speaking (<i>Institutiones grammaticae</i> I.1–2, in paraphrase).</p>
<p>The two questions give four kinds. Voice that signifies and can be written is a line of verse such as <i>arma virumque cano</i> (“arms and the man I sing”). Voice that signifies but cannot be written is a whistle or a groan uttered to show something. Voice that can be written but signifies nothing is the imitation of an animal’s cry, such as the croak of a frog written <i>coax</i>. Voice that neither signifies nor can be written is a crash or the lowing of cattle.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> I.1–2, in paraphrase (no published English translation).`,
  qpTodo: `Priscian’s four kinds of voice: given a sound (a line of verse, a groan, <i>coax</i>, the lowing of cattle), say whether it signifies and whether it can be written.` },

{ id: 'significant',
  title: 'Voice that signifies and voice that does not',
  body: `<p>We saw in Section I that a sign signifies either by nature or by imposition, and the same division applies to voice. A groan signifies pain by nature; the word “pain” signifies it by imposition. Some voice signifies nothing at all, such as a letter sounded by itself, or a nonsense word such as <i>blityri</i>, which the medieval logicians used as their example of an articulate sound with no meaning.</p>
<p>So articulate voice is not yet a word. The letter B pronounced alone is articulate, because it can be written, but it signifies nothing. Only articulate voice that signifies by imposition is a word, and that is why the word is the least part of an expression that signifies, while the voice, the letter, and the syllable are its material.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2; Boethius, <i>In Peri hermeneias</i>, in paraphrase.` },

{ id: 'groan',
  title: 'Why a groan is neither a word nor an error',
  body: `<p>A groan is voice, and it signifies, but it is inarticulate and it signifies by nature, so it is not a word. For the same reason a groan cannot be a barbarism or a solecism. We saw in the Preliminary section that a barbarism is an error in a single word and a solecism an error in the arrangement of words. Both errors presuppose words; below the level of the word there is nothing that can be correctly or incorrectly formed in this sense.</p>
<p>This is why grammar begins with the voice but does not stay with it. The voice is the material of speech, and grammar must know what that material is; but correctness and error, like meaning, begin with the word. A groan may be loud or soft, but it cannot be correct or incorrect, while “brought” and “brung” can be, because they are words.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1 and III.1, in paraphrase.` },

{ id: 'languages',
  title: 'The sounds that each language uses',
  body: `<p>Every human being can produce a great range of articulate sounds, but each language uses only a selection of them, and the selections differ. English has the sound written “th” in “think” and “this,” which Latin did not have. German has the sound written “ch” in <i>Bach</i>, which most English speakers do not use. French has the nasal vowel of <i>bon</i> (“good”), in which the air passes through the nose as well as the mouth.</p>
<p>So the articulate voice of a language is a set of sounds that its speakers have learned to distinguish and to combine. A child who learns English learns to hear the difference between “thin” and “tin” because it changes the word; a speaker of a language without the “th” sound may hear the two as one. The modern study of these sounds is called phonetics, and the study of the sounds that distinguish words in a language is called phonology.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> I, in paraphrase.` },

{ id: 'order',
  title: 'From voice to letter and syllable',
  body: `<p>We have now seen what voice is, how articulate voice differs from inarticulate voice, and why the voice is the material of speech but not yet speech. The study of the matter of speech proceeds in the order of its parts. Articulate voice can be divided into its least parts, which writing records as letters; letters are joined into syllables; and syllables are measured as long or short, and accented, and arranged into feet and lines of verse.</p>
<p>Each step depends on the one before it, because a letter is a mark of an articulate sound, and a syllable is made of such sounds. So this section considers the letter, the syllable, quantity and accent, the pauses of speech, and the measures of verse, in that order.</p>`,
  src: `Donatus, <i>Ars maior</i> I.1–6.`,
  qpTodo: `Voice as the material of speech: which of these (a cough, thunder, a groan, the spoken word “horse,” the letter B pronounced alone) is voice, which is articulate, and which is a word.` }

  ]
};
