/* II.3 The Syllable [ii.syllable]
   Plan (ITEM-LIST.md): 10 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: Syllable (not yet written).
   Live material drawn on: DECKS.syllable (definition, how to divide), DECKS.ensyl (the English syllable, clusters). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.syllable'] = {
  id: 'ii.syllable',
  title: 'The Syllable',
  sub: 'What a syllable is, and how words are divided into syllables in English and in Latin',
  sources: `Donatus, <i>Ars maior</i> I.3; Priscian, <i>Institutiones grammaticae</i> II; Allen, <i>Vox Latina</i>; J. C. Wells, <i>Longman Pronunciation Dictionary</i>.`,
  panels: [

{ id: 'what-syllable',
  title: 'What is a syllable?',
  body: `<p>We have seen that letters are not pronounced one by one but in groups. When we say the word “window” slowly, the voice divides it into two parts, “win” and “dow,” and each part is pronounced as a single unit; “pen” is pronounced as one such unit, and Latin <i>columba</i> (“dove”) as three. A <strong>syllable</strong> (Greek <i>syllabē</i>, “what is taken together”) is a group of letters pronounced together in one utterance of the voice. Donatus defines it as a combination of letters, or the utterance of a single vowel, capable of length (<i>Ars maior</i> I.3). Priscian adds that the letters of a syllable are uttered under one accent and in one breath (<i>Institutiones grammaticae</i> II).</p>
<p>So English “pen” and Latin <i>lūx</i> (“light”) are each one syllable, “window” is two (win-dow), and <i>columba</i> is three (co-lum-ba). Like the letter, the syllable signifies nothing by itself; the syllable “win” in “window” does not signify winning. The syllable is still part of the material of speech, but it is the unit in which speech is actually pronounced and measured.</p>`,
  src: `Donatus, <i>Ars maior</i> I.3; Priscian, <i>Institutiones grammaticae</i> II, in paraphrase.` },

{ id: 'vowel-center',
  title: 'Every syllable has a vowel at its center',
  body: `<p>Latin <i>ā</i> (“from”) is a syllable of one vowel and no consonant; <i>ab</i> (“from”) has a consonant after the vowel; and <i>stirps</i> (“stock,” “root”) has two consonants before the vowel and two after it. English “O,” “on,” and “strong” show the same range. In each case there is one vowel at the center. So every syllable has one vowel or one diphthong at its center, and consonants may stand before it, after it, or on both sides; therefore in Latin the number of syllables in a word is the number of its vowels and diphthongs.</p>
<p>A diphthong counts as one vowel, because its two vowels are pronounced in one syllable. So Latin <i>aurum</i> (“gold”) has two syllables (au-rum), not three, and <i>poena</i> (“penalty”) has two (poe-na). But two vowels that are not a diphthong make two syllables, as in Latin <i>me-us</i> (“my”) and <i>di-ēs</i> (“day”). In English the same is true of “cre-ate” and “po-em,” where the two vowel letters stand for two vowel sounds.</p>`,
  src: `Donatus, <i>Ars maior</i> I.3; Allen and Greenough, <i>New Latin Grammar</i> §§ 6–7.`,
  qp: { id: 'q-count', variants: [
    { prompt: `How many syllables does Latin <i>causa</i> (“cause”) have?`,
      options: [`One`, `Two`, `Three`, `Four`],
      answer: 1,
      explain: `<i>Causa</i> is divided <i>cau-sa</i>. Its first syllable contains the diphthong <i>au</i>, which counts as one vowel because its two vowels are pronounced in one syllable. With the final <i>a</i>, the word has two syllables.` },
    { prompt: `How many syllables does Latin <i>puella</i> (“girl”) have?`,
      options: [`Two`, `Four`, `Three`, `One`],
      answer: 2,
      explain: `<i>Puella</i> is divided <i>pu-el-la</i>. The <i>u</i> and the <i>e</i> stand side by side, but they are not a diphthong, so each makes its own syllable. With the final <i>a</i>, the word has three vowels and three syllables.` },
    { prompt: `Why does Latin <i>foedus</i> (“treaty”) have two syllables and not three?`,
      options: [`Because the d closes the first syllable`, `Because oe is a diphthong`, `Because a final s is not counted`, `Because o and e are never pronounced apart`],
      answer: 1,
      explain: `A diphthong is two vowels pronounced in one syllable, and it counts as one vowel. <i>Oe</i> is a diphthong, so <i>foedus</i> is divided <i>foe-dus</i>. Two vowels that are not a diphthong, as in <i>de-us</i>, make two syllables.` }
  ]} },

{ id: 'accidents',
  title: 'The accidents of the syllable',
  body: `<p>Every syllable is pronounced with some pitch of the voice, with or without a breathing, in a longer or shorter time, and with some number of letters. So four things belong to every syllable: its accent (<i>tenor</i>), its breathing (<i>spiritus</i>), its length (<i>tempus</i>, literally “time”), and the number of its letters (<i>numerus litterarum</i>). Priscian lists these four as the accidents of the syllable (<i>Institutiones grammaticae</i> II), and we have seen that such properties are called accidents.</p>
<p>The <strong>accent</strong> is the raising or lowering of the voice on the syllable, which we will study with quantity in this section. The <strong>breathing</strong> is whether the syllable is pronounced with an <i>h</i> or without one, as Latin <i>hōra</i> (“hour”) begins with a breathing and <i>ōra</i> (“shores”) does not. The <strong>length</strong> is whether the syllable is long or short, which is the foundation of Latin verse. The <strong>number of letters</strong> is the count of letters in the syllable, which in Latin runs from one letter to as many as six.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II (checked against the Latin text).` },

{ id: 'open-closed',
  title: 'Open and closed syllables',
  body: `<p>In Latin <i>pa-ter</i> (“father”) the first syllable ends in a vowel and the second in a consonant; in <i>por-ta</i> (“gate”) the first syllable ends in a consonant and the second in a vowel. In English both syllables of “ba-by” end in a vowel, and both syllables of “bas-ket” end in a consonant. A syllable that ends in a vowel is called <strong>open</strong>, and a syllable that ends in a consonant is called <strong>closed</strong>.</p>
<p>The distinction matters because the length of a Latin syllable depends on it. Here we must keep apart the length of the vowel and the length of the syllable. A syllable with a short vowel is short if it is open. If it is closed, the vowel stays short, but the syllable as a whole is long, because the consonant at its end adds to the time needed to pronounce it: in <i>canunt</i> (“they sing”) the “u” is short, but the syllable “-nunt” is long. So the rules for dividing words into syllables are also the ground of the rules for measuring them.</p>`,
  src: `Allen, <i>Vox Latina</i>, appendix on syllabic division, in paraphrase.` },

{ id: 'latin-division-1',
  title: 'Dividing a Latin word: one consonant and two',
  body: `<p>When a single consonant stands between two vowels, it goes with the following vowel. So <i>rota</i> (“wheel”) is divided <i>ro-ta</i>, <i>lupus</i> (“wolf”) is <i>lu-pus</i>, and <i>amor</i> (“love”) is <i>a-mor</i>. In each case the syllable before the consonant is open.</p>
<p>When two consonants stand between two vowels, they are usually divided, the first going with the preceding vowel and the second with the following one. So <i>fortis</i> (“brave”) is <i>for-tis</i>, <i>magnus</i> (“great”) is <i>mag-nus</i>, and <i>mittō</i> (“I send”) is <i>mit-tō</i>. When three consonants stand together, usually the last goes with the following vowel, as in <i>sanc-tus</i> (“holy”). In each case the syllable before the consonants is closed.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 7; Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'latin-division-2',
  title: 'Dividing a Latin word: mute and liquid, and other cases',
  body: `<p>We have seen that the liquids <i>l</i> and <i>r</i> flow easily after another consonant. So when a mute (<i>p, b, t, d, c, g</i>) is followed by <i>l</i> or <i>r</i>, the two consonants usually go together with the following vowel: <i>pa-tris</i> (“of the father”), <i>a-grī</i> (“of the field”), <i>pū-bli-cus</i> (“public”). In verse, however, a poet may divide them (<i>pat-ris</i>), and this choice affects the length of the syllable, as we will see.</p>
<p>A few letters need separate treatment. The double letter <i>x</i> counts as two consonants, so in <i>saxum</i> (“rock”) the first syllable is closed (<i>sac-sum</i> in sound). The pair <i>qu</i> counts as one consonant, so <i>aqua</i> (“water”) is <i>a-qua</i>. The breathing <i>h</i> does not count as a consonant at all. A compound word is divided between its parts: <i>ab-eō</i> (“I go away”), not <i>a-beō</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 7; Allen, <i>Vox Latina</i>, in paraphrase.`,
  qp: { id: 'q-latin-division', variants: [
    { prompt: `How is <i>loquor</i> (“I speak”) divided into syllables?`,
      options: [`loq-uor`, `lo-quor`, `loqu-or`, `lo-qu-or`],
      answer: 1,
      explain: `The pair <i>qu</i> counts as one consonant, and a single consonant between two vowels goes with the following vowel. So <i>loquor</i> is divided <i>lo-quor</i>, and its first syllable is open.` },
    { prompt: `How is <i>capra</i> (“she-goat”) divided in ordinary speech?`,
      options: [`cap-ra`, `ca-pra`, `capr-a`, `ca-pr-a`],
      answer: 1,
      explain: `When a mute (here <i>p</i>) is followed by a liquid (<i>r</i>), the two consonants usually go together with the following vowel, so the word is divided <i>ca-pra</i>. A poet may divide them, <i>cap-ra</i>, and that choice changes the length of the first syllable; but <i>ca-pra</i> is the ordinary division.` },
    { prompt: `A single consonant between two vowels usually goes with the following vowel, yet <i>subeō</i> (“I go under”) is divided <i>sub-eō</i>. Why?`,
      options: [`Because b is a mute`, `Because two vowels cannot stand side by side`, `Because it is a compound of <i>sub</i> and <i>eō</i>`, `Because its e is long`],
      answer: 2,
      explain: `A compound word is divided between its parts. <i>Subeō</i> is made of <i>sub</i> (“under”) and <i>eō</i> (“I go”), so it is divided <i>sub-eō</i> and not <i>su-beō</i>. The general rule for a single consonant gives way to the parts of the word.` }
  ]} },

{ id: 'english-syllable',
  title: 'The English syllable',
  body: `<p>English syllables are counted by vowel sounds, not by vowel letters. “Make” has two vowel letters but one syllable, because its final <i>e</i> is silent, and “strength” has eight letters but one syllable, because it has one vowel sound. On the other hand, “lion” and “being” have two syllables each, because each has two vowel sounds.</p>
<p>English also allows larger groups of consonants than Latin does. Up to three consonants can begin an English syllable, as in “street,” “spring,” and “splash” (and when there are three, the first is always <i>s</i>). Four can end one, as in “texts” and “twelfths.” Many groups that are pronounceable in other languages cannot begin an English word, such as <i>pn</i> or <i>ps</i>; that is why the <i>p</i> of “pneumonia” and “psalm,” taken from Greek, is not pronounced.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>, in paraphrase.` },

{ id: 'syllabic-consonants',
  title: 'Syllables without a written vowel',
  body: `<p>We have said that every syllable has a vowel at its center, but English adds a qualification. In some unstressed syllables a liquid or a nasal consonant takes the place of the vowel. The second syllable of “button” is usually pronounced with no vowel sound at all, only the <i>n</i>; so is the second syllable of “bottle” with <i>l</i>, and of “rhythm” with <i>m</i>. Such a consonant is called a <strong>syllabic consonant</strong>.</p>
<p>So the English word “rhythm” has two syllables, though it has only one vowel letter (<i>y</i>), because the final <i>m</i> makes a syllable of its own. Latin, as the grammarians describe it, has no syllabic consonants; every Latin syllable has a vowel or diphthong at its center, which is why the Latin rule of counting is simpler than the English one.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>, in paraphrase.` },

{ id: 'english-division',
  title: 'Dividing an English word',
  body: `<p>English words are divided in two ways, which do not always agree. In writing, a word broken at the end of a line is divided according to the conventions of the dictionaries, which consider both the sound and the parts of the word: “fa-ther,” “walk-ing,” “hab-it.” In pronunciation, the division follows the sounds, and here one rule differs from Latin. The short vowel sounds of English, the vowels of “cat,” “bed,” “sit,” “hot,” and “cup,” never end an English word; a consonant always closes them. In the same way, when such a vowel is stressed, it does not end a syllable, and the consonant after it stays in its syllable. Take “habit”: its first vowel is the vowel of “cat,” and the stress falls on it, so the syllable cannot end with that vowel, and the “b” stays with it: “hab-it,” not “ha-bit.” So also “rob-in,” “cam-el,” and “wag-on.” A long vowel sound may end a syllable, so “bacon” is divided “ba-con” and “tiger” “ti-ger.” Latin has no such rule: a single consonant between two vowels goes with the second, so Latin <i>habet</i> (“he has”) is divided <i>ha-bet</i>.</p>
<p>Pronunciation dictionaries such as Wells’s <i>Longman Pronunciation Dictionary</i> give the division of each word, and they sometimes differ from one another in the hard cases. The division into syllables is still a matter of the sound, but English, unlike Latin, has no single rule that settles every word.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>; Merriam-Webster’s word divisions, in paraphrase.`,
  qp: { id: 'q-english-division', variants: [
    { prompt: `How is “lemon” divided into syllables in pronunciation?`,
      options: [`le-mon`, `lem-on`, `lemo-n`, `It is one syllable`],
      answer: 1,
      explain: `The first vowel of “lemon” is short and stressed, and in English a stressed short vowel does not end a syllable. So the <i>m</i> goes with the first syllable, “lem-on.”` },
    { prompt: `Latin <i>rapit</i> (“he seizes”) is divided <i>ra-pit</i>, but English “rapid” is divided “rap-id.” Why do they differ?`,
      options: [`English divides every word after its consonants`, `English stressed short vowels do not end syllables`, `Latin has no short vowels`, `The English word comes from French`],
      answer: 1,
      explain: `In Latin a single consonant between two vowels goes with the following vowel, so <i>ra-pit</i>. In English a short vowel that is stressed, as in “cat” or “bed,” does not end a syllable, so the consonant stays with it: “rap-id.” English does not divide every word after its consonants; “father” is divided “fa-ther.”` },
    { prompt: `How is “jumping” divided when it is broken at the end of a line?`,
      options: [`jum-ping`, `jump-ing`, `ju-mping`, `jumpi-ng`],
      answer: 1,
      explain: `In writing, the conventions of the dictionaries consider the parts of the word as well as the sound. “Jumping” is made of “jump” and the ending “-ing,” so it is divided “jump-ing.”` }
  ]} },

{ id: 'to-quantity',
  title: 'From the syllable to its length',
  body: `<p>We have seen that the syllable is the least unit in which speech is pronounced, that it has a vowel or diphthong at its center, and that words are divided into syllables by rules that differ somewhat between English and Latin. We have also seen that a syllable may be open or closed, and that length is one of its accidents.</p>
<p>In Latin, length is the most important accident of the syllable. The length of a syllable determines where the accent of a Latin word falls, and it is the measure on which Latin verse is built. So the division of a word into syllables is the first step both in pronouncing Latin correctly and in reading Latin poetry.</p>`,
  src: `Donatus, <i>Ars maior</i> I.3–5.` }

  ]
};
