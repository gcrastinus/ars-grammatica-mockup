/* II.4 Quantity and Accent [ii.quantity]
   16 panels, 4 question points (written). Brought into line with Allen and Greenough, New Latin Grammar §§ 9–12
   (19 Oct 2026): mute and liquid excepted from position, hidden quantity and the vowel before ns, nf, gn, nd, nt,
   final syllables before the next word, consonant i.
   Exercise: Quantity, Stress, and Accent (ii.ex.quantity, written).
   Live material drawn on: DECKS.syllable (quantity, the penultimate law, English by contrast), DECKS.ensyl (primary and
   secondary stress, noun-verb pairs, suffixes that move the stress, schwa, stress-timing); one Greek example (Smyth). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.quantity'] = {
  id: 'ii.quantity',
  title: 'Quantity and Accent',
  sub: 'Long and short syllables, by nature and by position; the acute, grave, and circumflex; English stress, which is not quantity',
  sources: `Donatus, <i>Ars maior</i> I.3 and I.5; Quintilian, <i>Institutio oratoria</i> I.5.22–31; Allen and Greenough, <i>New Latin Grammar</i> §§ 9–12; Allen, <i>Vox Latina</i>; Smyth, <i>Greek Grammar</i>, on accent.`,
  panels: [

{ id: 'what-quantity',
  title: 'What is quantity?',
  body: `<p>The Latin words <i>os</i> (“bone”) and <i>ōs</i> (“mouth”), as we noted earlier, differ only in the time for which the vowel is held, and length (<i>tempus</i>) is one of the accidents of the syllable. The length of a syllable is called its <strong>quantity</strong> (Latin <i>quantitas</i>, “how much”). In Latin every syllable is either <strong>long</strong> or <strong>short</strong>, and the grammarians reckoned that a long syllable takes two units of time and a short syllable one. Donatus adds a third kind, the <strong>common</strong> syllable (<i>communis</i>), which may be treated as long or short (<i>Ars maior</i> I.3).</p>
<p>The quantity of a syllable is not the same as the length of its vowel, although the two are related. The quantity of a syllable is measured from the beginning of its vowel to the end of the syllable. So the consonants before the vowel add nothing to it, as the <i>s</i> and <i>t</i> of <i>stō</i> (“I stand”) add nothing, but a consonant that closes the syllable after the vowel adds to the time needed to pronounce it. A syllable may therefore be long because its vowel is long, or because its vowel is followed by a consonant that closes the syllable. In these reckonings the breathing <i>h</i> is not counted as a consonant, nor is the <i>u</i> that is written after <i>q</i>, and sometimes after <i>g</i> or <i>s</i>, and pronounced almost as a consonant, as in <i>quis</i> (“who?”), <i>lingua</i> (“tongue”), and <i>suādeō</i> (“I advise”). The grammarians therefore distinguish two ways in which a syllable is long: by nature and by position.</p>`,
  src: `Donatus, <i>Ars maior</i> I.3, in paraphrase; Allen and Greenough, <i>New Latin Grammar</i> § 9 (quantity measured from the beginning of the vowel to the end of the syllable) and § 11, notes (h and the u of qu, gu, su not counted); Allen, <i>Vox Latina</i>, ch. 6.` },

{ id: 'by-nature',
  title: 'Long by nature',
  body: `<p>The second syllable of <i>a-mī-cus</i> (“friend”) is long because its vowel <i>ī</i> is long, and so is the first syllable of <i>mā-ter</i> (“mother”); the first syllable of <i>cae-lum</i> (“sky”) is long because <i>ae</i> is a diphthong. A syllable of this kind is called <strong>long by nature</strong>, that is, a syllable is long by nature when its vowel is long or when it contains a diphthong. Some vowels are long because of where they come from. A vowel that comes from a diphthong is long, as the <i>ū</i> of <i>exclūdō</i> (“I shut out”), formed from <i>ex</i> and <i>claudō</i> (“I shut”); and a vowel formed by contraction, that is, by two vowels merged into one, is long, as the <i>ō</i> of <i>cōgō</i> (“I drive together”), formed from <i>co-</i> and <i>agō</i> (“I drive”).</p>
<p>The length of a vowel cannot be seen from ordinary Latin spelling, and it must be learned with each word, as we learn the spelling of an English word. The Romans sometimes marked a long vowel with a stroke above the letter, called an apex, or by writing the vowel twice, but none of these devices came into general use. That is why this course marks every long vowel with a macron. A dictionary such as Lewis and Short marks long vowels in the same way, and the student of Latin learns them as part of the word.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 10–11 (diphthongs, vowels from diphthongs and by contraction, the apex; their examples <i>exclūdō</i> kept, <i>nīl</i> replaced by <i>cōgō</i> because <i>nihil</i> is on another card); Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'by-position',
  title: 'Long by position',
  body: `<p>In <i>sil-va</i> (“forest”) the <i>i</i> is short, but the first syllable is long because <i>l</i> and <i>v</i> follow it. In <i>ma-gis-ter</i> (“teacher”) the <i>i</i> is short, but the second syllable is long because <i>s</i> and <i>t</i> follow it. In <i>a-xis</i> (“axle”) the first syllable is long because <i>x</i> counts as two consonants. A syllable of this kind is called <strong>long by position</strong>, that is, a syllable whose vowel is short is still long by position when its vowel is followed by two consonants, or by one of the double letters <i>x</i> or <i>z</i>, except when the two consonants are a mute followed by <i>l</i> or <i>r</i>. So the first syllable of <i>nigra</i> (“black”) is not long by position, although <i>g</i> and <i>r</i> follow its short <i>i</i>: we have seen that a mute and a liquid usually go together with the following vowel, so the syllable stays open. Such a syllable is properly short, but a poet may treat it as long, and so it is called common, as we will see.</p>
<p>The reason is the one we saw with closed syllables: when two consonants follow a short vowel, the first of them closes the syllable, and the closed syllable takes longer to pronounce. The vowel itself is still pronounced short; the syllable is long, not the vowel. The term “position” does not refer to the place of the vowel in the word; the Latin <i>positio</i> translates the Greek <i>thesei</i>, “by convention,” as opposed to <i>physei</i>, “by nature.” It is still the established term, and the Latin grammars use it.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 11 (“two consonants (except a mute before l or r) or … a double consonant (x, z)”; “the vowel is pronounced short”); Allen, <i>Vox Latina</i>, in paraphrase.`,
  qp: { id: 'q-position', variants: [
    { prompt: `The <i>e</i> of <i>ventus</i> (“wind”) is short. Why is the first syllable <i>ven-</i> long?`,
      options: [`Its vowel is long by nature`, `Two consonants follow its short vowel`, `It is the first syllable of the word`, `It is not long, because its vowel is short`],
      answer: 1,
      explain: `The short <i>e</i> is followed by two consonants, <i>n</i> and <i>t</i>, so the syllable <i>ven-</i> is closed and long by position. The term “position” does not refer to the place of the syllable in the word; a first syllable can be short, as in <i>pa-ter</i>.` },
    { prompt: `The <i>u</i> of <i>dux</i> (“leader”) is short, yet the syllable is long. Why?`,
      options: [`A word of one syllable is always long`, `Its vowel is long by nature`, `The letter <i>x</i> counts as two consonants`, `It bears the accent of the word`],
      answer: 2,
      explain: `The double letter <i>x</i> stands for two sounds, <i>c</i> and <i>s</i>, so the short <i>u</i> of <i>dux</i> is followed by two consonants and the syllable is long by position. Words of one syllable are not always long, and the accent does not make a syllable long.` },
    { prompt: `In <i>fe-nes-tra</i> (“window”) the <i>e</i> of the second syllable is short. Is that syllable long or short?`,
      options: [`Short, because <i>tr</i> goes with the following vowel`, `Short, because its vowel is short`, `Long by nature, because it bears the accent`, `Long by position, because <i>s</i> closes it`],
      answer: 3,
      explain: `The short <i>e</i> is followed by <i>s</i>, <i>t</i>, and <i>r</i>. The mute and liquid <i>tr</i> go together with the following vowel, but <i>s</i> stays with the second syllable and closes it, so <i>nes</i> is long by position. A short vowel does not make a closed syllable short.` }
  ]}},

{ id: 'hidden',
  title: 'Hidden quantity',
  body: `<p>The first syllable of <i>cōnstāns</i> (“steady”) is long by position, because <i>n</i> and <i>s</i> follow its vowel, and so is the first syllable of <i>īnferō</i> (“I bring in”). The syllable <i>man</i> of <i>a-man-dus</i> (“to be loved”) and the syllable <i>mant</i> of <i>a-mant</i> (“they love”) are long by position in the same way. But the vowels are not alike: the <i>ō</i> and <i>ā</i> of <i>cōnstāns</i> and the <i>ī</i> of <i>īnferō</i> are long, whereas the <i>a</i> of <i>man</i> and of <i>mant</i> is short. When a syllable is long by position, it is long whether its vowel is long or short, so the quantity of the syllable does not show the length of the vowel. The length of a vowel in such a syllable is therefore called <strong>hidden</strong> quantity. A vowel of hidden quantity is pronounced short unless it is known to be long. Its length is determined, with more or less certainty, from inscriptions and from other evidence, and this course marks it with a macron wherever it is known to be long. For the same reason the measuring of a line of verse, which counts syllables, does not tell us the length of a vowel in a syllable long by position.</p>
<p>A few rules settle the commonest cases. A vowel before <i>ns</i> or <i>nf</i> is long, as in <i>cōnstāns</i> and <i>īnferō</i>. A vowel before <i>gn</i> is also held to be long, but its quantity is not certain in every word. A vowel before <i>nd</i> or <i>nt</i> is regularly short, as in <i>amandus</i> and <i>amant</i>. In all these words the syllable is long by position; what the rules decide is the length of the vowel, which matters for pronouncing the word correctly but not for measuring it.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 10 (vowels before ns, nf, gn long, the gn case uncertain; before nd, nt regularly short; their examples <i>cōnstāns</i>, <i>īnferō</i>, <i>amandus</i>, <i>amant</i>; <i>māgnus</i> not used, since the course does not mark the vowel before gn) and § 11 (hidden quantity); Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'short-and-vowel-vowel',
  title: 'Short syllables and a vowel before a vowel',
  body: `<p>When <i>tabula</i> (“tablet”) is pronounced correctly, the voice passes quickly over its first two syllables, because nothing in them holds it back. A syllable is <strong>short</strong> when its vowel is short and it is open, that is, when no more than one consonant follows the vowel before the next vowel. So the first two syllables of <i>ta-bu-la</i> (“tablet”) are short, and so is the first syllable of <i>ca-put</i> (“head”).</p>
<p>A vowel that stands directly before another vowel is usually short, even if it would otherwise be long. So the <i>u</i> of <i>pu-el-la</i> (“girl”) is short, and so is the <i>e</i> of <i>de-us</i> (“god”). The breathing <i>h</i> does not count as a consonant here, so the first <i>i</i> of <i>ni-hil</i> (“nothing”) also stands before a vowel. (The second syllable of <i>pu-el-la</i> is long by position, because two consonants, <i>l</i> and <i>l</i>, follow its short <i>e</i>.)</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 10; Allen, <i>Vox Latina</i>, in paraphrase.` },

{ id: 'common',
  title: 'Common syllables',
  body: `<p>We have seen that a mute followed by a liquid (<i>l</i> or <i>r</i>) usually goes with the following vowel. In ordinary speech, therefore, <i>tenebrae</i> (“darkness”) is divided <i>te-ne-brae</i>, and its second syllable is open and short. But a poet may divide the two consonants, <i>te-neb-rae</i>, and then the second syllable is closed and long.</p>
<p>A syllable that can be measured either way is called <strong>common</strong> (<i>syllaba communis</i>). Ovid uses both measures of the same word in one line: <i>et primo similis volucri, mox vera volucris</i>, “first like a bird and then in fact a bird” (<i>Metamorphoses</i> XIII.607). In the first <i>volucri</i> the second syllable is divided <i>vo-lu-cri</i> and is short; in <i>volucris</i> it is divided <i>vo-luc-ris</i> and is long. So the common syllable is not an error in the poet; it is a license that the language allows, because the mute and the liquid can be pronounced in either syllable.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 11 (common syllables; the ordinary <i>pa-trem</i> and the verse <i>pat-rem</i>); Allen, <i>Vox Latina</i>, in paraphrase. Ovid, <i>Metamorphoses</i> XIII.607 (Latin checked against the Perseus text; trans. Brookes More, 1922).` },

{ id: 'across-words',
  title: 'A final syllable before the next word',
  body: `<p>In verse the words of a line are pronounced in one continuous stream, and the end of one word meets the beginning of the next. So in <i>per arva</i> (“through the fields”) the <i>r</i> of <i>per</i> is pronounced with the <i>a</i> of <i>arva</i>, <i>pe-rar-va</i>, and the syllable <i>per</i> is open and short. In <i>per campōs</i> (“through the plains”) the <i>r</i> is followed by the <i>c</i> of <i>campōs</i>, so the syllable <i>per</i> is closed and long by position. Since <i>h</i> is not counted as a consonant, <i>per hortōs</i> (“through the gardens”) is measured as <i>per arva</i> is, and <i>per</i> is short.</p>
<p>The rule is therefore this: when a final syllable has a short vowel and ends in a consonant, its quantity in verse is decided by the word that follows. If the next word begins with a vowel, the final consonant is joined to that vowel in pronunciation, and the syllable is short. If the next word begins with a consonant, the syllable is long by position. Allen and Greenough state the rule in these terms (<i>New Latin Grammar</i> § 11), and it is why a line of Latin verse is measured across the divisions between its words.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 11, note (final syllables ending in a consonant, the quantity determined in verse by the following word), in paraphrase. The Meter deck relies on this (<i>rat Rō-</i>, <i>sub tegmine</i>).` },

{ id: 'consonant-i',
  title: 'A vowel before consonant <i>i</i>',
  body: `<p>We have seen that the letter <i>i</i> can stand for a consonant, as at the beginning of <i>iam</i> (“now”). Between two vowels it has a further effect. The first syllable of <i>maior</i> (“greater”), of <i>peius</i> (“worse”), and of <i>aiō</i> (“I say”) is long, although only one consonant, the consonant <i>i</i>, seems to follow its vowel. The reason is that the speaker passes from the first vowel through a vowel <i>i</i>, which forms a diphthong with it, before reaching the consonant <i>i</i>, so that <i>maior</i> is pronounced as if it were written <i>mai-ior</i>, and <i>aiō</i> as if it were <i>ai-iō</i>.</p>
<p>So a syllable whose vowel is <i>a</i>, <i>e</i>, <i>o</i>, or <i>u</i>, followed by consonant <i>i</i>, is long, whether the vowel itself is long or short. Allen and Greenough mark such a syllable with a circumflex, <i>mâ-ior</i>, <i>pê-ius</i>, <i>â-iō</i>, rather than with a macron, because the length belongs to the syllable and not necessarily to its vowel (<i>New Latin Grammar</i> § 11). This course marks only long vowels, so these words are written without a macron, but the syllable is long all the same.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 11 (consonant i; the transitional vowel i, <i>ai-iō</i>, <i>mai-ior</i>; their examples kept). The compounds of <i>iaciō</i> (<i>in-iciō</i>) left out.` },

{ id: 'what-accent',
  title: 'What is accent?',
  body: `<p>When we say a word of more than one syllable, the voice does not treat every syllable alike. In “banana” the voice rises and gains force on the second syllable, and in “yesterday” on the first. This is the second accident of the syllable that we must consider, its <strong>accent</strong>. The Latin word <i>accentus</i> is formed from <i>ad</i> (“to”) and <i>cantus</i> (“song”), and it translates the Greek <i>prosōidia</i>, “song added to speech.” The name shows that the classical grammarians thought of accent as a rising and falling of the voice, as in song. Donatus calls the accents tones (<i>toni</i>), noting that some call them <i>accentus</i> and others <i>tenores</i>, and he says that they are three (<i>Ars maior</i> I.5):<br><strong>the acute</strong> (<i>acutus</i>), in which the voice is raised;<br><strong>the grave</strong> (<i>gravis</i>), in which it is lowered;<br><strong>the circumflex</strong> (<i>circumflexus</i>), in which it is raised and lowered on the same syllable.</p>
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
<p>The law has three parts:<br>A word of one syllable is accented on that syllable.<br>A word of two syllables is accented on the first: <i>VĪ-ta</i> (“life”), <i>MO-ra</i> (“delay”).<br>In a word of three or more syllables, the penult is accented if it is long, and the antepenult if the penult is short: <i>for-TŪ-na</i> (“fortune,” penult long by nature), <i>ar-GEN-tum</i> (“silver,” penult long by position), but <i>MĪ-li-tēs</i> (“soldiers”) and <i>a-GRI-co-la</i> (“farmer”), whose penults are short.</p>
<p>So the accent of a Latin word never falls further back than the antepenult, and the quantity of the penult decides between the penult and the antepenult.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 12; Allen, <i>Vox Latina</i>, ch. 5.`,
  qp: { id: 'q-penult', variants: [
    { prompt: `Where is <i>bonus</i> (“good”) accented, and why?`,
      options: [`On the last syllable, because it is closed`, `On the first, because the word has two syllables`, `On the first, because its vowel is long`, `On the last, because Latin accents the final syllable`],
      answer: 1,
      explain: `A Latin word of two syllables is accented on the first: <i>BO-nus</i>. The <i>o</i> of <i>bonus</i> is short, so its length is not the reason; the law of the penult places the accent on the first of two syllables whatever their quantity.` },
    { prompt: `Where is <i>Rōmānus</i> (“Roman”) accented, and why?`,
      options: [`On the penult <i>mā</i>, because it is long`, `On the antepenult <i>Rō</i>, because Latin never accents the penult`, `On the last syllable <i>nus</i>, because it is closed`, `On the antepenult <i>Rō</i>, because it begins the word`],
      answer: 0,
      explain: `In a word of three or more syllables the quantity of the penult decides. The penult <i>mā</i> is long by nature, so it takes the accent: <i>rō-MĀ-nus</i>. The long first syllable does not draw the accent back, because the antepenult is accented only when the penult is short.` },
    { prompt: `The first vowel of <i>fēmina</i> (“woman”) is long. Where is the word accented, and why?`,
      options: [`On the penult <i>mi</i>, because the penult is always accented`, `On the last syllable <i>na</i>`, `On the antepenult <i>fē</i>, because its vowel is long`, `On the antepenult <i>fē</i>, because the penult <i>mi</i> is short`],
      answer: 3,
      explain: `The penult <i>mi</i> is short (its vowel is short and the syllable is open), so the accent falls back on the antepenult: <i>FĒ-mi-na</i>. The long <i>ē</i> is not the reason; <i>DO-mi-nus</i>, with a short first vowel, is accented on the antepenult in the same way.` }
  ]}},

{ id: 'enclitics',
  title: 'Enclitics and the accent',
  body: `<p>Some short words are pronounced together with the word before them, as if they were part of it. They are called <strong>enclitics</strong> (Greek <i>enklitikos</i>, “leaning on”). The common Latin enclitics are <i>-que</i> (“and”), <i>-ne</i> (the sign of a question), and <i>-ve</i> (“or”). So <i>populus</i> (“people”) and <i>-que</i> make <i>populusque</i> (“and the people”), as in the Roman formula <i>senātus populusque Rōmānus</i>, “the senate and the people of Rome.”</p>
<p>An enclitic moves the accent onto the syllable just before it, whatever the quantity of that syllable. <i>PO-pu-lus</i> is accented on its first syllable, but <i>po-pu-LUS-que</i> is accented on the syllable before <i>-que</i>; in the same way <i>LĪ-mi-na</i> (“thresholds”) becomes <i>lī-mi-NA-que</i> (“and thresholds”). The Roman grammarians noted this as an exception to the law of the penult.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 12 a; Allen, <i>Vox Latina</i>, ch. 5, in paraphrase.` },

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
  qp: { id: 'q-noun-verb', variants: [
    { prompt: `“He did not mean to <strong>insult</strong> his host.” Which syllable of “insult” is stressed, and why?`,
      options: [`IN-sult, because the word is a noun`, `in-SULT, because the word is a verb`, `IN-sult, because the word is a verb`, `in-SULT, because the word is a noun`],
      answer: 1,
      explain: `Here “insult” is a verb (he did not mean to insult someone), and in these English pairs the verb is stressed on the second syllable: in-SULT. As a noun, “an insult,” it is stressed on the first: IN-sult.` },
    { prompt: `“The detective questioned the <strong>suspect</strong>.” Which syllable of “suspect” is stressed, and why?`,
      options: [`sus-PECT, because the word is a verb`, `sus-PECT, because the word is a noun`, `SUS-pect, because the word is a noun`, `SUS-pect, because the word is a verb`],
      answer: 2,
      explain: `“The suspect” is a noun, the person questioned, so it is stressed on the first syllable: SUS-pect. The verb “to suspect” is stressed on the second: sus-PECT.` },
    { prompt: `English can tell “a CON-vict” from “to con-VICT” by stress alone. Why does Latin never distinguish words in this way?`,
      options: [`Because the Latin accent is fixed by quantity`, `Because Latin has no nouns formed from verbs`, `Because Latin words have no accent at all`, `Because Latin nouns are always longer than its verbs`],
      answer: 0,
      explain: `The place of the Latin accent is found from the quantity of the syllables by the law of the penult, so two words of the same syllables are accented in the same place. English stress belongs to each word and must be learned with it, so it can distinguish words that are otherwise spelled alike.` }
  ]}},

{ id: 'suffixes',
  title: 'Suffixes that move the stress',
  body: `<p>Words of one family may be stressed on different syllables, because certain endings fix the place of the stress. The endings <i>-tion</i>, <i>-ic</i>, and <i>-ity</i> put the stress on the syllable just before them, wherever it stood in the shorter word: “ED-u-cate,” but “ed-u-CA-tion”; “ATH-lete,” but “ath-LET-ic”; “e-LEC-tric,” but “e-lec-TRIC-i-ty.”</p>
<p>Other endings leave the stress where it was. The endings <i>-ness</i>, <i>-ment</i>, and <i>-ful</i> are of this kind: “HAP-py” and “HAP-pi-ness,” “GOV-ern” and “GOV-ern-ment,” “CARE” and “CARE-ful.” These regularities do not make English stress predictable in every word, but they account for the stress of a great many words of Latin and Greek origin.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>, in paraphrase.`,
  qp: { id: 'q-suffix', variants: [
    { prompt: `“Organ” is stressed OR-gan. Where is “organic” stressed?`,
      options: [`On the first syllable, as in “organ”`, `On the ending <i>-ic</i>`, `On “gan,” just before the ending <i>-ic</i>`, `Equally on all three syllables`],
      answer: 2,
      explain: `The ending <i>-ic</i> puts the stress on the syllable just before it, wherever it stood in the shorter word: OR-gan, but or-GAN-ic, as “ATH-lete” becomes “ath-LET-ic.”` },
    { prompt: `“Employ” is stressed em-PLOY. Where is “employment” stressed?`,
      options: [`EM-ploy-ment, because <i>-ment</i> moves the stress forward`, `em-PLOY-ment, as in “employ”`, `em-ploy-MENT, because the ending takes the stress`, `It has no primary stress`],
      answer: 1,
      explain: `The ending <i>-ment</i> is one of those that leave the stress where it was, like <i>-ness</i> and <i>-ful</i>: em-PLOY, em-PLOY-ment, as “GOV-ern” gives “GOV-ern-ment.” Every English word of more than one syllable has a primary stress.` },
    { prompt: `“Public” is stressed PUB-lic. Where is “publicity” stressed, and why?`,
      options: [`PUB-lic-i-ty, because the root keeps its stress`, `pub-lic-I-ty, because <i>-ity</i> takes the stress itself`, `pub-lic-i-TY, because the last syllable is stressed`, `pub-LIC-i-ty, before <i>-ity</i>`],
      answer: 3,
      explain: `The ending <i>-ity</i> puts the stress on the syllable just before it, so the stress moves from “pub” to “lic”: pub-LIC-i-ty, as “e-LEC-tric” becomes “e-lec-TRIC-i-ty.” The ending itself is not stressed.` }
  ]}},

{ id: 'schwa-rhythm',
  title: 'Weak syllables and the rhythm of English',
  body: `<p>An unstressed English syllable is often weakened: its vowel becomes the short, neutral vowel called <strong>schwa</strong> (written ə), the vowel of the first syllable of “about” and of the last syllable of “sofa.” So the same letter can have different sounds in words of one family: the first <i>o</i> of “photograph” is a full vowel, because it is stressed, but in “photography” it is a schwa, because the stress has moved to “tog.”</p>
<p>English speech is also <strong>stress-timed</strong>, that is, the stressed syllables come at roughly even intervals, and the unstressed syllables between them are shortened to fit. “The CAT is on the MAT” and “The CATerpillar’s on the MATtress” take about the same time to say, because each has two stresses. So English verse counts stresses, whereas Latin verse counts long and short syllables. We will see the consequences of this difference when we study meter.</p>`,
  src: `Wells, <i>Longman Pronunciation Dictionary</i>; standard accounts of English rhythm, in paraphrase.` }

  ]
};
