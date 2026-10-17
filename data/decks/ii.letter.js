/* II.2 The Letter and Orthography [ii.letter]
   Plan (ITEM-LIST.md): 12 panels, 4 question points (one on Latin pronunciation) (placeholders: qpTodo; to be written).
   Two panels (restored-vowels, restored-consonants) set out the restored pronunciation of Latin after Allen, Vox Latina.
   Live material drawn on: DECKS.letter (6 panels: definition, name/figure/power, vowel and consonant, semivowel and mute,
   H, X, K, Y, Z, sound and writing); the pronunciation notes in DECKS.syllable. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.letter'] = {
  id: 'ii.letter',
  title: 'The Letter and Orthography',
  sub: 'The letter and its accidents (name, figure, and power), and the relation of spelling to sound',
  sources: `Donatus, <i>Ars maior</i> I.2; Priscian, <i>Institutiones grammaticae</i> I; Quintilian, <i>Institutio oratoria</i> I.4 and I.7; W. Sidney Allen, <i>Vox Latina</i> (2nd ed., 1978).`,
  panels: [

{ id: 'what-letter',
  title: 'What is a letter?',
  body: `<p>We have seen that articulate voice is voice that can be written. The least part of articulate voice is what the grammarians call the <strong>letter</strong> (Latin <i>littera</i>). Donatus defines it as <i>pars minima vocis articulatae</i>, that is, the least part of articulate voice (<i>Ars maior</i> I.2). So the word “cat” is made of three such least parts, and the Latin <i>pater</i> (“father”) of five.</p>
<p>The ancient grammarians used the word “letter” both for the sound and for the written mark, because in Latin the two correspond closely. A letter signifies nothing by itself, as we saw with the letter B sounded alone, so the letter is part of the material of speech and not yet a word. In our time the sound is often called a phoneme and the written mark a grapheme, but the grammarian’s word “letter” covers both, and we will distinguish them where it matters.</p>`,
  src: `Donatus, <i>Ars maior</i> I.2; Priscian, <i>Institutiones grammaticae</i> I, in paraphrase.` },

{ id: 'accidents',
  title: 'Name, figure, and power',
  body: `<p>Donatus says that three things belong to every letter: its name, its figure, and its power (<i>nomen, figura, potestas</i>; <i>Ars maior</i> I.2). The grammarians call such properties <strong>accidents</strong> (Latin <i>accidentia</i>), that is, properties that belong to a thing without being what it is; we will meet the word again with the parts of speech in Section III.</p>
<p><strong>Name</strong> (<i>nomen</i>): what we call the letter when we speak of it. The English letter C is called “see,” and the Latin letter was called <i>ce</i>.<br><strong>Figure</strong> (<i>figura</i>): the shape of the letter as it is written, such as C, c, or the cursive <i>c</i>.<br><strong>Power</strong> (<i>potestas</i>): the sound that the letter stands for. The C of English “cat” has the power of the sound /k/, and so did every Latin C.</p>
<p>One figure may have more than one power, as English C has one power in “cat” and another in “city.” And one power may have more than one figure, as the English sound /k/ is written with c in “cat,” k in “kit,” and ck in “back.”</p>`,
  src: `Donatus, <i>Ars maior</i> I.2.`,
  qpTodo: `Name, figure, and power: given a description (“the sound /s/ that C has in ‘city’,” “the shape C,” “the name ‘see’”), say which accident it is.` },

{ id: 'vowels',
  title: 'Vowels',
  body: `<p>The letters are divided first into vowels and consonants. A <strong>vowel</strong> (Latin <i>vocalis</i>, from <i>vox</i>, “voice”) is a letter that can be pronounced by itself and can make a syllable by itself. Latin has five vowels, <i>a, e, i, o, u</i>, and the Romans also used <i>y</i> in words taken from Greek, such as <i>lyra</i> (“lyre”). English writes the same five vowel letters, with <i>y</i> as a vowel in “myth” and “happy.”</p>
<p>A vowel can make a syllable by itself, as in English “a” and “I,” and in Latin <i>ō</i> (“oh”) and <i>ē</i> (“out of”). But a vowel letter is not the same as a vowel sound. English has more than a dozen vowel sounds, counting its diphthongs, but only five or six vowel letters to write them, so the letter <i>a</i> has different powers in “cat,” “cake,” “car,” and “about.”</p>`,
  src: `Donatus, <i>Ars maior</i> I.2; Priscian, <i>Institutiones grammaticae</i> I, in paraphrase.` },

{ id: 'consonants',
  title: 'Consonants: semivowels and mutes',
  body: `<p>A <strong>consonant</strong> (Latin <i>consonans</i>, “sounding with”) is a letter that cannot make a syllable without a vowel. Donatus divides the consonants into two kinds. A <strong>semivowel</strong> (<i>semivocalis</i>) is a consonant that can be partly pronounced without a vowel; the sound of <i>s</i> can be held as a hiss, and the sounds of <i>m</i> and <i>l</i> can be hummed or held. A <strong>mute</strong> (<i>muta</i>) is a consonant that cannot be pronounced at all without a vowel, such as <i>b</i>, <i>d</i>, and <i>t</i>.</p>
<p>The Latin names of the letters show the division. The name of a semivowel begins with a vowel and ends with the letter’s own sound: <i>ef, el, em, en, er, es, ix</i>. The name of a mute begins with its own sound and ends with a vowel: <i>be, ce, de, ge, pe, te</i>. The English names of the letters, which descend from the Latin ones, still follow the same pattern: “ef,” “el,” “em,” “es,” but “bee,” “dee,” “tee.”</p>`,
  src: `Donatus, <i>Ars maior</i> I.2; Isidore, <i>Etymologiae</i> I.4, in paraphrase.`,
  qpTodo: `Semivowel and mute: given a consonant (s, t, m, d) and its Latin name, say which kind it is and why.` },

{ id: 'liquids-doubles',
  title: 'Liquids, double letters, and the aspirate',
  body: `<p>Among the semivowels the grammarians set apart four <strong>liquids</strong> (<i>liquidae</i>): <i>l, m, n, r</i>. They are called liquids because they flow easily after another consonant in the same syllable, as <i>l</i> does in Latin <i>publicus</i> (“public”) and <i>r</i> in <i>patris</i> (“of the father”), and in English “play” and “tree.” The liquids matter for dividing syllables and for measuring them, as we will see.</p>
<p>The letter <i>x</i> is called a <strong>double letter</strong>, because it stands for two sounds, <i>c</i> and <i>s</i>, as in Latin <i>rex</i> (“king”), which is <i>rec-s</i>. The letter <i>z</i>, used in Greek words, was also counted double. The letter <i>h</i>, according to many grammarians, is not a letter but a mark of breathing (<i>aspiratio</i>, “breathing”), because it adds breath to a vowel without making a sound of its own. So in Latin <i>homo</i> (“man”) the <i>h</i> is pronounced, but it does not count as a consonant for measuring syllables.</p>`,
  src: `Donatus, <i>Ars maior</i> I.2; Priscian, <i>Institutiones grammaticae</i> I, in paraphrase.` },

{ id: 'quintilian-letters',
  title: 'Quintilian on letters that are lacking or superfluous',
  body: `<p>Quintilian, writing in the first century, asks whether the Latin alphabet has the letters it needs. He observes that some letters seem unnecessary: “Again there is the question whether certain letters are not superfluous, not to mention the mark of the aspirate,” and he names <i>k</i>, <i>q</i>, and <i>x</i> (<i>Institutio oratoria</i> I.4.9). The letter <i>k</i> survived only in a few words such as <i>Kalendae</i> (“the Calends,” the first day of the month), because <i>c</i> already had the same power, and <i>x</i> could be written <i>cs</i>.</p>
<p>He also notes that some sounds have no letter of their own. The Latin <i>i</i> and <i>u</i> were each used for two sounds, a vowel and a consonant, as in <i>iam</i> (“now”) and <i>uinum</i> (“wine”). The Romans had no separate figures for the consonants; the distinction of <i>j</i> from <i>i</i> and of <i>v</i> from <i>u</i> was made by printers and scholars of the Renaissance. So the alphabet was not a perfect match for the sounds even in Latin, and the grammarian had to know both the letters and the powers they stood for.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.4.9 (trans. Butler).` },

{ id: 'restored-vowels',
  title: 'How Latin is pronounced: the vowels',
  body: `<p>Latin is pronounced in this course in the restored classical pronunciation, that is, the pronunciation that scholars have reconstructed for the speech of educated Romans in the time of Cicero, chiefly from the ancient grammarians, from spelling, and from verse. W. Sidney Allen sets out the evidence in <i>Vox Latina</i>. (The church pronunciation, which is closer to Italian, is also traditional, but it is not used here.)</p>
<p>Every Latin vowel is either <strong>long</strong> or <strong>short</strong>. A long vowel is held about twice as long as a short one, and the difference can change the word: <i>malum</i> with a short <i>a</i> means “evil,” and <i>mālum</i> with a long <i>a</i> means “apple.” Ordinary Latin spelling does not show the difference, so this course marks every long vowel with a <strong>macron</strong> (a short line above the letter): <i>ā, ē, ī, ō, ū</i>. A vowel without a macron is short.</p>
<p>The vowels have roughly these sounds: <i>a</i> as in “father” (short <i>a</i> as in “cup”); <i>ē</i> as in “they” and short <i>e</i> as in “pet”; <i>ī</i> as in “machine” and short <i>i</i> as in “pit”; <i>ō</i> as in “note” and short <i>o</i> as in “pot”; <i>ū</i> as in “rule” and short <i>u</i> as in “put.”</p>`,
  src: `Allen, <i>Vox Latina</i> (2nd ed., 1978), ch. 2 and 4, in paraphrase.` },

{ id: 'restored-consonants',
  title: 'How Latin is pronounced: diphthongs and consonants',
  body: `<p>A <strong>diphthong</strong> (Greek <i>diphthongos</i>, “double sound”) is two vowels pronounced in one syllable. The common Latin diphthongs are <i>ae</i>, pronounced as in “aisle”; <i>au</i>, as in “house”; and <i>oe</i>, as in “boy.” So <i>Caesar</i> begins like “kite,” and <i>causa</i> (“cause”) like “cow.”</p>
<p>Most consonants are pronounced as in English, with these differences:<br><i>c</i> and <i>g</i> are always hard, as in “cat” and “get,” so <i>Cicero</i> is “Kikero” and <i>gens</i> (“nation”) begins like “get”;<br>consonantal <i>u</i> (printed <i>v</i> in many books) is pronounced like English <i>w</i>, so <i>vīnum</i> (“wine”) is “weenum”;<br>consonantal <i>i</i> (printed <i>j</i> in some books) is pronounced like English <i>y</i>, so <i>iam</i> (“now”) is “yam”;<br><i>s</i> is always voiceless, as in “sit,” never as in “rose”;<br><i>r</i> is trilled, and doubled consonants are held longer, as in <i>mitte</i> (“send”).</p>`,
  src: `Allen, <i>Vox Latina</i> (2nd ed., 1978), ch. 1 and 3, in paraphrase.`,
  qpTodo: `Latin restored pronunciation: how is a given word pronounced (<i>Cicero</i>, <i>vīnum</i>, <i>Caesar</i>, <i>iam</i>), or which English sound matches a given Latin letter.` },

{ id: 'orthography',
  title: 'What is orthography?',
  body: `<p><strong>Orthography</strong> (Greek <i>orthographia</i>, “correct writing”) is the part of grammar that concerns correct spelling. Quintilian treats it among the first studies of the grammarian and states the general rule: “For my own part, I think that, within the limits prescribed by usage, words should be spelt as they are pronounced. For the use of letters is to preserve the sound of words and to deliver them to readers as a sacred trust: consequently they ought to represent the pronunciation which we are to use” (<i>Institutio oratoria</i> I.7.30–31).</p>
<p>Quintilian’s rule has two parts. Spelling should follow pronunciation, because letters exist to record sounds; but it does so “within the limits prescribed by usage,” because the accepted spelling of a word is part of the custom of the language. We saw in the Preliminary section that usage is one of the criteria of correct speech, and here it governs writing as well.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.7.30–31 (trans. Butler).` },

{ id: 'english-spelling',
  title: 'Spelling and sound in English',
  body: `<p>In Latin the spelling follows the sound closely, so that a reader who knows the powers of the letters can pronounce almost any word correctly. In English the relation is much looser. The word “knight” has six letters but only three sounds, because the <i>k</i> and the <i>gh</i> are no longer pronounced. The words “I” and “eye” have the same sound and different spellings, while “read” (present) and “read” (past) have the same spelling and different sounds.</p>
<p>The reason is chiefly historical. English spelling was largely fixed by the fifteenth and sixteenth centuries, after printing came to England, but the pronunciation of English continued to change. Between about 1400 and 1700 the long vowels of English shifted (the change called the Great Vowel Shift), so that “name,” which had once been pronounced with the vowel of “father,” came to be pronounced as it is now, while its spelling stayed the same. So English spelling often records an older pronunciation of the word.</p>`,
  src: `Standard histories of English (e.g., Baugh and Cable, <i>A History of the English Language</i>), in paraphrase.`,
  qpTodo: `Spelling and sound: given an English word (“knight,” “name,” “eye”), say why its spelling does not match its present sound.` },

{ id: 'etymological-spelling',
  title: 'Spelling that preserves the history of a word',
  body: `<p>English spelling sometimes records not the sound of a word but its origin. In the sixteenth century scholars added letters to some English words to show their Latin source. The word “debt” was spelled “dette” in Middle English, from French <i>dette</i>; the <i>b</i> was added to show its origin in Latin <i>debitum</i> (“what is owed”), although it was never pronounced. In the same way “doubt” received its <i>b</i> from Latin <i>dubitare</i> (“to doubt”).</p>
<p>So English spelling serves two purposes that Quintilian’s rule does not fully reconcile: it records the sound, and it records the history and the relations of words. The second purpose has a real use, because the spelling shows that “sign” and “signature,” or “nation” and “national,” are the same word in different forms even when their vowels are pronounced differently. We will return to the relation of words to their sources in Section IV.</p>`,
  src: `Standard histories of English, in paraphrase.` },

{ id: 'to-syllable',
  title: 'From letters to syllables',
  body: `<p>We have now seen that the letter is the least part of articulate voice, that every letter has a name, a figure, and a power, and that letters are divided into vowels and consonants, and the consonants into semivowels and mutes. We have also seen that Latin spelling follows the sound closely, while English spelling often preserves an older pronunciation or the origin of a word.</p>
<p>Letters are not pronounced one by one; they are joined into syllables, and the division of vowels and consonants is what makes the syllable possible. Every syllable must contain a vowel or a diphthong, and the consonants are grouped around it. So the distinctions of this section (vowel and consonant, liquid, double letter, and the long and short vowel) are the ones on which the rules for dividing and measuring syllables depend.</p>`,
  src: `Donatus, <i>Ars maior</i> I.2–3.` }

  ]
};
