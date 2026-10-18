/* II.4 Quantity and Accent [ii.quantity]
   Plan (ITEM-LIST.md): 13 panels, 4 question points (placeholders: qpTodo; to be written).
   Exercise: Quantity, Stress, and Accent (not yet written).
   Live material drawn on: DECKS.syllable (quantity, the penultimate law, English by contrast), DECKS.ensyl (primary and
   secondary stress, noun-verb pairs, suffixes that move the stress, schwa, stress-timing); one Greek example (Smyth). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.quantity'] = {
  id: 'ii.quantity',
  title: 'Quantity and Accent',
  sub: 'Long and short syllables, by nature and by position; the acute, grave, and circumflex; English stress, which is not quantity',
  sources: `Donatus, <i>Ars maior</i> I.3 and I.5; Quintilian, <i>Institutio oratoria</i> I.5.22–31; Allen, <i>Vox Latina</i>; Smyth, <i>Greek Grammar</i>, on accent.`,
  panels: [

{ id: 'what-quantity',
  title: 'What is quantity?',
  body: `<p>We have seen that Latin <i>malum</i> (“evil”) and <i>mālum</i> (“apple”) differ only in the time for which the first vowel is held, and that length (<i>tempus</i>) is one of the accidents of the syllable. The length of a syllable is called its <strong>quantity</strong> (Latin <i>quantitas</i>, “how much”). In Latin every syllable is either <strong>long</strong> or <strong>short</strong>, and the grammarians reckoned that a long syllable takes two units of time and a short syllable one. Donatus adds a third kind, the <strong>common</strong> syllable (<i>communis</i>), which may be treated as long or short (<i>Ars maior</i> I.3).</p>
<p>The quantity of a syllable is not the same as the length of its vowel, although the two are related. A syllable may be long because its vowel is long, or because its vowel is followed by consonants that take time to pronounce. The grammarians therefore distinguish two ways in which a syllable is long: by nature and by position.</p>`,
  src: `Donatus, <i>Ars maior</i> I.3, in paraphrase; Allen, <i>Vox Latina</i>, ch. 6.` },

{ id: 'by-nature',
  title: 'Long by nature',
  body: `<p>The second syllable of <i>a-mī-cus</i> (“friend”) is long because its vowel <i>ī</i> is long, and so is the first syllable of <i>mā-ter</i> (“mother”); the first syllable of <i>cau-sa</i> (“cause”) is long because <i>au</i> is a diphthong. A syllable of this kind is called <strong>long by nature</strong>, that is, a syllable is long by nature when its vowel is long or when it contains a diphthong.</p>
<p>The length of a vowel cannot be seen from ordinary Latin spelling, and it must be learned with each word, as we learn the spelling of an English word. That is why this course marks every long vowel with a macron. A dictionary such as Lewis and Short marks long vowels in the same way, and the student of Latin learns them as part of the word.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 9–10; Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'by-position',
  title: 'Long by position',
  body: `<p>In <i>por-ta</i> (“gate”) the <i>o</i> is short, but the first syllable is long because <i>r</i> and <i>t</i> follow it. In <i>ma-gis-ter</i> (“teacher”) the <i>i</i> is short, but the second syllable is long because <i>s</i> and <i>t</i> follow it. In <i>sa-xum</i> (“rock”) the first syllable is long because <i>x</i> counts as two consonants. A syllable of this kind is called <strong>long by position</strong>, that is, a syllable whose vowel is short is still long by position when its vowel is followed by two consonants, or by one of the double letters <i>x</i> or <i>z</i>.</p>
<p>The reason is the one we saw with closed syllables: when two consonants follow a short vowel, the first of them closes the syllable, and the closed syllable takes longer to pronounce. The term “position” does not refer to the place of the vowel in the word; the Latin <i>positio</i> translates the Greek <i>thesei</i>, “by convention,” as opposed to <i>physei</i>, “by nature.” It is still the established term, and the Latin grammars use it.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 11; Allen, <i>Vox Latina</i>, in paraphrase.`,
  qpTodo: `Quantity by position: why is a given syllable long (the second syllable of <i>magister</i>, the first of <i>porta</i> or <i>saxum</i>), by nature or by position.` },

{ id: 'short-and-vowel-vowel',
  title: 'Short syllables and a vowel before a vowel',
  body: `<p>A syllable is <strong>short</strong> when its vowel is short and it is open, that is, when no more than one consonant follows the vowel before the next vowel. So the first two syllables of <i>do-mi-nus</i> (“master”) are short, and so is the first syllable of <i>pa-ter</i> (“father”).</p>
<p>A vowel that stands directly before another vowel is usually short, even if it would otherwise be long. So the <i>u</i> of <i>pu-el-la</i> (“girl”) is short, and so is the <i>e</i> of <i>de-us</i> (“god”). The breathing <i>h</i> does not count as a consonant here, so the first <i>i</i> of <i>ni-hil</i> (“nothing”) also stands before a vowel. (The second syllable of <i>pu-el-la</i> is long by position, because two consonants, <i>l</i> and <i>l</i>, follow its short <i>e</i>.)</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 10; Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'common',
  title: 'Common syllables',
  body: `<p>We have seen that a mute followed by a liquid (<i>l</i> or <i>r</i>) usually goes with the following vowel, as in <i>pa-tris</i> (“of the father”). In ordinary speech the first syllable of <i>patris</i> is therefore open and short. But a poet may divide the two consonants, <i>pat-ris</i>, and then the first syllable is closed and long.</p>
<p>A syllable that can be measured either way is called <strong>common</strong> (<i>syllaba communis</i>). Ovid uses both measures of the same word in one line: <i>et primo similis volucri, mox vera volucris</i>, “first like a bird and then in fact a bird” (<i>Metamorphoses</i> XIII.607). In the first <i>volucri</i> the second syllable is divided <i>vo-lu-cri</i> and is short; in <i>volucris</i> it is divided <i>vo-luc-ris</i> and is long. So the common syllable is not an error in the poet; it is a license that the language allows, because the mute and the liquid can be pronounced in either syllable.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 12; Allen, <i>Vox Latina</i>, in paraphrase. Ovid, <i>Metamorphoses</i> XIII.607 (Latin checked against the Perseus text; trans. Brookes More, 1922).` },

{ id: 'what-accent',
  title: 'What is accent?',
  body: `<p>When we say a word of more than one syllable, the voice does not treat every syllable alike. In “banana” the voice rises and gains force on the second syllable, and in “yesterday” on the first. This is the second accident of the syllable that we must consider, its <strong>accent</strong>. The Latin word <i>accentus</i> is formed from <i>ad</i> (“to”) and <i>cantus</i> (“song”), and it translates the Greek <i>prosōidia</i>, “song added to speech.” The name shows that the ancient grammarians thought of accent as a rising and falling of the voice, as in song. Donatus calls the accents tones (<i>toni</i>), noting that some call them <i>accentus</i> and others <i>tenores</i>, and he says that they are three (<i>Ars maior</i> I.5, in paraphrase):<br><strong>the acute</strong> (<i>acutus</i>), in which the voice is raised;<br><strong>the grave</strong> (<i>gravis</i>), in which it is lowered;<br><strong>the circumflex</strong> (<i>circumflexus</i>), in which it is raised and lowered on the same syllable.</p>
<p>Quintilian counts it an error to put the accent in the wrong place: he speaks of “the substitution of the acute accent for the grave or the grave for the acute: such an example would be the placing of the acute accent on the first syllable of <i>Camillus</i>” (<i>Institutio oratoria</i> I.5.22). So a misplaced accent was one kind of barbarism, an error in a single word.</p>`,
  src: `Donatus, <i>Ars maior</i> I.5, in paraphrase; Quintilian, <i>Institutio oratoria</i> I.5.22 (trans. Butler).` },

{ id: 'greek-pitch',
  title: 'Accent as pitch in Greek',
  body: `<p>The doctrine of the three accents was first worked out for Greek, in which the accent was a matter of pitch, that is, of the voice rising and falling in tone. The marks used to write the Greek accents were introduced by the scholars of Alexandria about 200 BC to help readers pronounce the old poets correctly. In the word ἄνθρωπος (<i>anthrōpos</i>, “human being”) the acute mark on the first syllable shows that the voice rose in pitch on that syllable (Smyth, <i>Greek Grammar</i> §§ 149–156).</p>
<p>The Latin grammarians took over the Greek terms and applied them to Latin. Most scholars now hold, with Allen, that the Latin accent was chiefly a <strong>stress</strong> accent, that is, that the accented syllable was pronounced with greater force, though it may also have been higher in pitch. So the Latin grammarians’ words “acute” and “grave” are inherited from Greek, and in Latin they mean, in practice, the accented and the unaccented syllable.</p>`,
  src: `Smyth, <i>Greek Grammar</i> §§ 149–156; Allen, <i>Vox Latina</i>, ch. 5, in paraphrase.` },

{ id: 'penultimate-law',
  title: 'Where does the Latin accent fall?',
  body: `<p>The place of the Latin accent is not learned word by word, as in English; it is found from the quantity of the syllables. The rule is called the <strong>law of the penult</strong>. The <strong>penult</strong> (Latin <i>paenultima</i>, “almost the last”) is the second syllable from the end, and the <strong>antepenult</strong> is the syllable before the penult.</p>
<p>The law has three parts:<br>A word of one syllable is accented on that syllable.<br>A word of two syllables is accented on the first: <i>RO-sa</i> (“rose”), <i>PA-ter</i>.<br>In a word of three or more syllables, the penult is accented if it is long, and the antepenult if the penult is short: <i>a-MĪ-cus</i> (penult long by nature), <i>ma-GIS-ter</i> (penult long by position), but <i>DO-mi-nus</i> and <i>a-GRI-co-la</i> (“farmer”), whose penults are short.</p>
<p>So the accent of a Latin word never falls further back than the antepenult, and the quantity of the penult decides between the penult and the antepenult.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 14; Allen, <i>Vox Latina</i>, ch. 5.`,
  qpTodo: `The law of the penult: where is a given word accented (<i>dominus</i>, <i>amīcus</i>, <i>agricola</i>, <i>magister</i>), and why.` },

{ id: 'enclitics',
  title: 'Enclitics and the accent',
  body: `<p>Some short words are pronounced together with the word before them, as if they were part of it. They are called <strong>enclitics</strong> (Greek <i>enklitikos</i>, “leaning on”). The common Latin enclitics are <i>-que</i> (“and”), <i>-ne</i> (the sign of a question), and <i>-ve</i> (“or”). So <i>virum</i> (“man”) and <i>-que</i> make <i>virumque</i> (“and the man”), as in the first line of the <i>Aeneid</i>, <i>arma virumque cano</i>.</p>
<p>An enclitic moves the accent onto the syllable just before it, whatever the quantity of that syllable. <i>VI-rum</i> is accented on its first syllable, but <i>vi-RUM-que</i> is accented on the syllable before <i>-que</i>; in the same way <i>LĪ-mi-na</i> (“thresholds”) becomes <i>lī-mi-NA-que</i> (“and thresholds”). The Roman grammarians noted this as an exception to the law of the penult.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 15; Allen, <i>Vox Latina</i>, ch. 5, in paraphrase.` },

{ id: 'english-stress',
  title: 'English stress',
  body: `<p>English has an accent, but it is not found by quantity. In every English word of more than one syllable, one syllable is pronounced more strongly than the others, that is, louder, longer, and usually higher in pitch. This is called the <strong>primary stress</strong>. A longer word often has a lighter <strong>secondary stress</strong> as well. Dictionaries mark the primary stress with ˈ and the secondary with ˌ before the syllable: “photographic” is ˌphoto-ˈgraphic, with the primary stress on “graph” and the secondary on “pho.”</p>
<p>The place of the English stress belongs to each word and must be learned with it, as the quantity of a Latin vowel must be learned. English “beautiful” is stressed on the first syllable and “tomato” on the second, and no rule of quantity accounts for this. So English stress and Latin quantity are different things; the English stressed syllable is not a Latin long syllable, and it is a mistake to read Latin by putting English stresses on it.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>; Merriam-Webster’s pronunciation marks, in paraphrase.` },

{ id: 'stress-pairs',
  title: 'Stress that distinguishes words',
  body: `<p>Because English stress belongs to each word, it can distinguish two words that are otherwise spelled alike. Many English nouns and verbs of two syllables form such pairs: the noun is stressed on the first syllable and the verb on the second. “A RE-cord” is a noun, and “to re-CORD” is a verb; so also “PER-mit” and “per-MIT,” “PRE-sent” and “pre-SENT,” “OB-ject” and “ob-JECT,” “CON-trast” and “con-TRAST.”</p>
<p>So in “They will record the speech,” the stress of “record” falls on the second syllable, because the word is a verb, whereas in “The record was broken,” it falls on the first. Latin never distinguishes words in this way, because the place of the Latin accent is fixed by the quantity of the syllables.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>, in paraphrase.`,
  qpTodo: `Noun and verb pairs: in a given sentence, which syllable of “record,” “permit,” or “object” is stressed, and why.` },

{ id: 'suffixes',
  title: 'Suffixes that move the stress',
  body: `<p>Words of one family may be stressed on different syllables, because certain endings fix the place of the stress. The endings <i>-tion</i>, <i>-ic</i>, and <i>-ity</i> put the stress on the syllable just before them, wherever it stood in the shorter word: “ED-u-cate,” but “ed-u-CA-tion”; “ATH-lete,” but “ath-LET-ic”; “e-LEC-tric,” but “e-lec-TRIC-i-ty.”</p>
<p>Other endings leave the stress where it was. The endings <i>-ness</i>, <i>-ment</i>, and <i>-ful</i> are of this kind: “HAP-py” and “HAP-pi-ness,” “GOV-ern” and “GOV-ern-ment,” “CARE” and “CARE-ful.” These regularities do not make English stress predictable in every word, but they account for the stress of a great many words of Latin and Greek origin.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>, in paraphrase.`,
  qpTodo: `Suffixes and stress: where is a given derived word stressed (“education,” “athletic,” “electricity,” “happiness”), and does the ending move the stress.` },

{ id: 'schwa-rhythm',
  title: 'Weak syllables and the rhythm of English',
  body: `<p>An unstressed English syllable is often weakened: its vowel becomes the short, neutral vowel called <strong>schwa</strong> (written ə), the vowel of the first syllable of “about” and of the first and last syllables of “banana.” So the same letter can have different sounds in words of one family: the first <i>o</i> of “photograph” is a full vowel, because it is stressed, but in “photography” it is a schwa, because the stress has moved to “tog.”</p>
<p>English speech is also <strong>stress-timed</strong>, that is, the stressed syllables come at roughly even intervals, and the unstressed syllables between them are shortened to fit. “The CAT is on the MAT” and “The CATerpillar’s on the MATtress” take about the same time to say, because each has two stresses. So English verse counts stresses, whereas Latin verse counts long and short syllables. We will see the consequences of this difference when we study meter.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>; standard accounts of English rhythm, in paraphrase.` }

  ]
};
