window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises["lang.ii.la/meter-ex"] = {
 "id": "lang.ii.la/meter-ex",
 "kind": "exercise",
 "status": "written",
 "section": "II",
 "title": "Latin Meter",
 "instr": "Each question says what to do: choose an answer, click syllables, sort words, or type a number.",
 "openedFrom": "lang.ii.la/meter (Exercise button)",
 "items": [
  {
   "id": "lang.ii.la/meter-ex:A1",
   "set": "A",
   "type": "identify",
   "prompt": "With its long vowels marked, <em>Quid faciat laetās segetēs, quō sīdere terram</em> (Virgil, <i>Georgics</i> I.1) is divided into the syllables below. Click every long syllable, counting the last syllable of the line as long, and then press Check.",
   "tokens": [
    "quid",
    "fa",
    "ci",
    "at",
    "lae",
    "tās",
    "se",
    "ge",
    "tēs",
    "quō",
    "sī",
    "de",
    "re",
    "ter",
    "ram"
   ],
   "answer": [
    0,
    3,
    4,
    5,
    8,
    9,
    10,
    13,
    14
   ],
   "explain": "Five syllables are long by nature: <i>lae</i> (a diphthong), <i>tās</i>, <i>tēs</i>, <i>quō</i>, and <i>sī</i>. Three are long by position: <i>quid</i>, whose <i>d</i> is followed by the <i>f</i> of <i>faciat</i>; <i>at</i>, whose <i>t</i> is followed by the <i>l</i> of <i>laetās</i>; and <i>ter</i>, before the double <i>r</i>. The last syllable, <i>ram</i>, closes the line. The others are short: <i>ci</i> stands before a vowel, and <i>fa</i>, <i>se</i>, <i>ge</i>, <i>de</i>, and <i>re</i> are open and have short vowels.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:A2",
   "set": "A",
   "type": "mc",
   "prompt": "In the same line, <em>quid faciat laetās</em>, why is the last syllable of <em>faciat</em> long?",
   "options": [
    "Its <i>a</i> is long by nature",
    "Its <i>t</i> is followed by the <i>l</i> of <i>laetās</i>",
    "It is the last syllable of a verb",
    "It stands before the diphthong <i>ae</i> of <i>laetās</i>"
   ],
   "answer": 1,
   "explain": "The <i>a</i> of <i>faciat</i> is short, but the <i>t</i> that ends the word and the <i>l</i> that begins <i>laetās</i> are two consonants, so the syllable is closed and long by position. The diphthong belongs to the next syllable and does not lengthen this one.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:A3",
   "set": "A",
   "type": "mc",
   "prompt": "Scanned, the same line is <em>quid fa-ci | at lae | tās se-ge | tēs quō | sī-de-re | ter-ram</em>. Which of the first five feet are spondees?",
   "options": [
    "The first and third",
    "The second, fourth, and fifth",
    "The second and fourth",
    "The first and fifth"
   ],
   "answer": 2,
   "explain": "<i>at lae</i> and <i>tēs quō</i> are each two long syllables, so the second and fourth feet are spondees. The first, third, and fifth feet (<i>quid fa-ci</i>, <i>tās se-ge</i>, <i>sī-de-re</i>) are each a long syllable and two short ones, that is, dactyls.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:A4",
   "set": "A",
   "type": "mc",
   "prompt": "In verse the first syllable of <em>cuius</em> (“whose”) is long, although its <em>u</em> is short. Why?",
   "options": [
    "A mute and a liquid follow its <i>u</i>",
    "A vowel standing before another vowel is long",
    "Its <i>u</i> is followed by a consonant <i>i</i>",
    "The accent of the word falls on it"
   ],
   "answer": 2,
   "explain": "The <i>i</i> of <i>cuius</i> is a consonant standing between two vowels, so the word is pronounced as if it were written <i>cui-ius</i>, and its first syllable is long, although its <i>u</i> is short. A vowel before another vowel is short, not long, and no mute or liquid follows the <i>u</i>.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:A5",
   "set": "A",
   "type": "mc",
   "prompt": "What is the meter of this line of Catullus? <em>Lūgēte, ō Venerēs Cupīdinēsque</em> (Catullus 3.1)",
   "options": [
    "Dactylic hexameter",
    "Hendecasyllable",
    "Line of the sapphic stanza",
    "Pentameter"
   ],
   "answer": 1,
   "explain": "The final <i>e</i> of <i>Lūgēte</i> is elided before <i>ō</i>, so the line counts eleven syllables, <i>lū-gē-t(e) ō ve-ne-rēs cu-pī-di-nēs-que</i>, in the pattern – – – ∪ ∪ – ∪ – ∪ – –, which is the hendecasyllable. A line of the sapphic stanza also has eleven syllables, but it begins – ∪ –.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:A6",
   "set": "A",
   "type": "sort",
   "prompt": "Sort each word by the foot it forms. Every long vowel is marked.",
   "entries": [
    "<i>fēmina</i> (“woman”)",
    "<i>littera</i> (“letter”)",
    "<i>fāmā</i> (“by report”)",
    "<i>deō</i> (“to the god”)",
    "<i>causa</i> (“cause”)",
    "<i>lūna</i> (“moon”)"
   ],
   "bins": [
    "Dactyl",
    "Spondee",
    "Iamb",
    "Trochee"
   ],
   "answer": [
    0,
    0,
    1,
    2,
    3,
    3
   ],
   "explain": "<i>fē-mi-na</i> and <i>lit-te-ra</i> are each a long syllable and two short ones (dactyls); the first syllable of <i>littera</i> is long by position. <i>fā-mā</i> is two long syllables (a spondee). In <i>de-ō</i> the <i>e</i> stands before a vowel and is short, so the word is a short and a long syllable (an iamb). <i>cau-sa</i> and <i>lū-na</i> are each a long and a short syllable (trochees).",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn4",
   "set": "A",
   "type": "mc",
   "prompt": "What is the meter of this line of Horace? <em>Integer vītae scelerisque pūrus</em> (<i>Odes</i> I.22.1)",
   "options": [
    "Hendecasyllable",
    "Dactylic hexameter",
    "Pentameter",
    "Line of the sapphic stanza"
   ],
   "answer": 3,
   "explain": "The line has eleven syllables in the pattern – ∪ – – – ∪ ∪ – ∪ – –: <i>in-te-ger vī-tae sce-le-ris-que pū-rus</i>. That is the line of the sapphic stanza. The hendecasyllable also has eleven syllables, but it begins – – –.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn10",
   "set": "A",
   "type": "mc",
   "prompt": "Which meter has this pattern? – ∪ ∪ | – ∪ ∪ | – ‖ – ∪ ∪ | – ∪ ∪ | –",
   "options": [
    "Dactylic hexameter",
    "Pentameter",
    "Adonean",
    "Hendecasyllable"
   ],
   "answer": 1,
   "explain": "Two halves of two and a half feet each, with a fixed break between them, make the pentameter, the second line of the elegiac couplet. In the first half a spondee may take the place of either dactyl, whereas the second half keeps its dactyls.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn11",
   "set": "A",
   "type": "mc",
   "prompt": "How many feet does a dactylic hexameter have?",
   "options": [
    "Five",
    "Six",
    "Four",
    "Seven"
   ],
   "answer": 1,
   "explain": "A dactylic hexameter is a line of six feet. Each of the first four may be a dactyl or a spondee; the fifth is nearly always a dactyl; and the sixth has two syllables.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn12",
   "set": "A",
   "type": "mc",
   "prompt": "Which foot is nearly always the fifth foot of a hexameter?",
   "options": [
    "A spondee",
    "A dactyl",
    "An iamb",
    "A trochee"
   ],
   "answer": 1,
   "explain": "Each of the first four feet may be a dactyl or a spondee, but the fifth foot is nearly always a dactyl, so the close of the line is the most fixed part of it.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn13",
   "set": "A",
   "type": "mc",
   "prompt": "Which line follows the hexameter in an elegiac couplet?",
   "options": [
    "A second hexameter",
    "A pentameter",
    "A line of the sapphic stanza",
    "A hendecasyllable"
   ],
   "answer": 1,
   "explain": "An elegiac couplet is a hexameter followed by a shorter line, the pentameter, which has two halves with a break between them.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B1",
   "set": "B",
   "type": "count",
   "prompt": "How many syllables does this line count in the meter? <em>Conticuēre omnēs intentīque ōra tenēbant</em> (Virgil, <i>Aeneid</i> II.1). Type a number.",
   "answer": 14,
   "explain": "The line has sixteen written syllables. The final <i>e</i> of <i>conticuēre</i> is elided before <i>omnēs</i>, and the final <i>e</i> of <i>intentīque</i> before <i>ōra</i>, so fourteen syllables count in the meter.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B2",
   "set": "B",
   "type": "identify",
   "prompt": "After its two elisions, <em>Conticuēre omnēs intentīque ōra tenēbant</em> is divided into the syllables below. Click every long syllable, counting the last syllable of the line as long, and then press Check.",
   "tokens": [
    "con",
    "ti",
    "cu",
    "ē",
    "rom",
    "nēs",
    "in",
    "ten",
    "tī",
    "quō",
    "ra",
    "te",
    "nē",
    "bant"
   ],
   "answer": [
    0,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    12,
    13
   ],
   "explain": "<i>con</i>, <i>in</i>, and <i>ten</i> are long by position before <i>n</i> and <i>t</i>, and <i>rom</i> before <i>m</i> and <i>n</i>; <i>ē</i>, <i>nēs</i>, <i>tī</i>, <i>quō</i>, and <i>nē</i> are long by nature; and <i>bant</i> closes the line. <i>ti</i> and <i>cu</i> are short because their vowels stand before other vowels, and <i>ra</i> and <i>te</i> are open and have short vowels.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B3",
   "set": "B",
   "type": "mc",
   "prompt": "Scanned, the same line is <em>con-ti-cu | ē-rom | nēs in | ten-tī | quō-ra-te | nē-bant</em>. Which of the first five feet are dactyls?",
   "options": [
    "The first, third, and fifth",
    "The first and fifth",
    "The fifth only",
    "The first, fourth, and fifth"
   ],
   "answer": 1,
   "explain": "<i>con-ti-cu</i> and <i>quō-ra-te</i> are each a long syllable and two short ones, so the first and fifth feet are dactyls. The second, third, and fourth feet (<i>ē-rom</i>, <i>nēs in</i>, <i>ten-tī</i>) are each two long syllables, that is, spondees.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B4",
   "set": "B",
   "type": "mc",
   "prompt": "In Horace’s line <em>nōn eget Maurīs iaculīs neque arcū</em> (<i>Odes</i> I.22.2), why is the syllable <em>get</em> long?",
   "options": [
    "Its <i>e</i> is long by nature",
    "It stands before the diphthong <i>au</i> of <i>Maurīs</i>",
    "It is followed by a mute and a liquid",
    "Its <i>t</i> is followed by the <i>M</i> of <i>Maurīs</i>"
   ],
   "answer": 3,
   "explain": "The <i>e</i> of <i>eget</i> is short, but the final <i>t</i> and the <i>M</i> of <i>Maurīs</i> are two consonants, so the syllable is closed and long by position. The diphthong <i>au</i> belongs to the next syllable and does not lengthen this one.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn5",
   "set": "B",
   "type": "mc",
   "prompt": "What is the meter of this short line, which closes a stanza of Horace? <em>Fusce, pharetra</em> (<i>Odes</i> I.22.4)",
   "options": [
    "Iambic dimeter",
    "Pentameter",
    "Adonean",
    "Line of the sapphic stanza"
   ],
   "answer": 2,
   "explain": "A dactyl and two long syllables, – ∪ ∪ – –, make the adonean, the short fourth line of the sapphic stanza.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B6",
   "set": "B",
   "type": "identify",
   "prompt": "<em>Fusce, pharetra</em> follows the pattern – ∪ ∪ – –, and to fit it Horace measures one common syllable long. Click that syllable.",
   "tokens": [
    "fus",
    "ce",
    "pha",
    "re",
    "tra"
   ],
   "answer": 3,
   "explain": "The <i>e</i> of <i>pharetra</i> is short and is followed by the mute <i>t</i> and the liquid <i>r</i>, so the syllable is common. The fourth place of the adonean must be long, so Horace divides the two consonants, <i>ret-ra</i>, and measures <i>re</i> long.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:B7",
   "set": "B",
   "type": "mc",
   "prompt": "The last line of Virgil’s first <i>Eclogue</i>, with its long vowels marked, is <em>maiōrēsque cadunt altīs dē montibus umbrae</em>, scanned <em>mai-iō | rēs-que ca | dunt al | tīs dē | mon-ti-bus | um-brae</em>. What foot is the first?",
   "options": [
    "A dactyl",
    "A spondee",
    "A trochee",
    "An anapest"
   ],
   "answer": 1,
   "explain": "The first syllable, <i>mai</i>, is long, because a consonant <i>i</i> follows its vowel and the word is pronounced as if it were written <i>mai-iōrēsque</i>; <i>iō</i> is long by nature; two long syllables make a spondee.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn7",
   "set": "B",
   "type": "mc",
   "prompt": "Which meter has this pattern? – ∪ – – – ∪ ∪ – ∪ – –",
   "options": [
    "Hendecasyllable",
    "Line of the sapphic stanza",
    "Dactylic hexameter",
    "Iambic dimeter"
   ],
   "answer": 1,
   "explain": "This is the line of the sapphic stanza, which stands three times in each stanza. The hendecasyllable also has eleven syllables, but it begins – – – ∪ ∪.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn14",
   "set": "B",
   "type": "mc",
   "prompt": "In the pentameter, where may a spondee take the place of a dactyl?",
   "options": [
    "In the second half only",
    "In the first half",
    "In both halves",
    "In neither half"
   ],
   "answer": 1,
   "explain": "In the first half a spondee may take the place of either dactyl, whereas the second half keeps its dactyls.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn16",
   "set": "B",
   "type": "mc",
   "prompt": "How many syllables does a hendecasyllable count in the meter?",
   "options": [
    "Eight",
    "Thirteen",
    "Eleven",
    "Twelve"
   ],
   "answer": 2,
   "explain": "A hendecasyllable counts eleven syllables, in the pattern – – – ∪ ∪ – ∪ – ∪ – –. A line written with more syllables can still count eleven when some of them are elided.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn17",
   "set": "B",
   "type": "mc",
   "prompt": "In an iambic dimeter, which feet may have a long syllable in place of the short one?",
   "options": [
    "The second and the fourth",
    "The first and the third",
    "Only the last foot",
    "None of the four"
   ],
   "answer": 1,
   "explain": "An iambic dimeter is four iambs, measured in pairs. The first and third feet may have a long syllable in place of the short one, so the line is often – – ∪ – – – ∪ –.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn18",
   "set": "B",
   "type": "mc",
   "prompt": "What does the second half of a pentameter keep in every line?",
   "options": [
    "Two spondees",
    "Two dactyls",
    "A spondee and a dactyl",
    "A dactyl and a spondee"
   ],
   "answer": 1,
   "explain": "A spondee may take the place of a dactyl only in the first half. The second half keeps its two dactyls, followed by one final syllable.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C1",
   "set": "C",
   "type": "identify",
   "prompt": "With its long vowels marked, <em>Mīlitat omnis amāns, et habet sua castra Cupīdō</em> (Ovid, <i>Amores</i> I.9.1) is divided into the syllables below. Click every long syllable, counting the last syllable of the line as long, and then press Check.",
   "tokens": [
    "mī",
    "li",
    "tat",
    "om",
    "nis",
    "a",
    "māns",
    "et",
    "ha",
    "bet",
    "su",
    "a",
    "cas",
    "tra",
    "Cu",
    "pī",
    "dō"
   ],
   "answer": [
    0,
    3,
    6,
    9,
    12,
    15,
    16
   ],
   "explain": "<i>mī</i>, <i>pī</i>, and <i>dō</i> are long by nature, and <i>māns</i> is long both by nature and by position. <i>om</i> is long by position before <i>m</i> and <i>n</i>, <i>bet</i> before the <i>s</i> of <i>sua</i>, and <i>cas</i> before <i>s</i> and <i>t</i>. Every other syllable is short, so the first five feet are all dactyls: <i>mī-li-tat | om-nis a | māns et ha | bet su-a | cas-tra Cu | pī-dō</i>.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C2",
   "set": "C",
   "type": "mc",
   "prompt": "In <em>amāns, et habet</em>, why is the syllable <em>et</em> short, although it ends in a consonant?",
   "options": [
    "Its <i>e</i> is elided before <i>habet</i>",
    "Its <i>t</i> is followed by <i>h</i>, which is not counted",
    "A word of one syllable is short in verse",
    "Its <i>e</i> is short, and a short vowel never makes a long syllable"
   ],
   "answer": 1,
   "explain": "The <i>t</i> of <i>et</i> stands before <i>habet</i>, and <i>h</i> does not count as a consonant, so only one consonant follows the short <i>e</i>; the <i>t</i> goes with the next vowel, and the syllable is open and short. Elision affects only a final vowel or a final vowel followed by <i>m</i>.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C3",
   "set": "C",
   "type": "mc",
   "prompt": "What is the meter of this line of Ovid? <em>Turpe senex mīles, turpe senīlis amor</em> (<i>Amores</i> I.9.4)",
   "options": [
    "Pentameter",
    "Dactylic hexameter",
    "Hendecasyllable",
    "Line of the sapphic stanza"
   ],
   "answer": 0,
   "explain": "The line falls into two halves with a break after <i>mīles</i>: <i>tur-pe se | nex mī | les ‖ tur-pe se | nī-lis a | mor</i>. Two halves of two and a half feet make the pentameter, the second line of the elegiac couplet; here the first half has a spondee in its second foot.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C4",
   "set": "C",
   "type": "mc",
   "prompt": "In the same pentameter, <em>tur-pe se | nex mī | les ‖ tur-pe se | nī-lis a | mor</em>, why is <em>les</em>, the syllable before the break, long?",
   "options": [
    "Its <i>e</i> is long by nature",
    "It is followed by a mute and a liquid",
    "Its <i>s</i> is followed by the <i>t</i> of <i>turpe</i>",
    "A syllable before the break is long whatever its letters"
   ],
   "answer": 2,
   "explain": "The <i>e</i> of <i>mīles</i> is short, but the final <i>s</i> and the <i>t</i> of <i>turpe</i> are two consonants, so the syllable is closed and long by position, as the place before the break requires. The meter requires a long syllable there, but it is the letters that make this one long.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C5",
   "set": "C",
   "type": "count",
   "prompt": "How many syllables does this line count in the meter? <em>Ōdī et amō. quārē id faciam fortasse requīris</em> (Catullus 85.1). Type a number.",
   "answer": 15,
   "explain": "The line has seventeen written syllables. The final <i>ī</i> of <i>Ōdī</i> is elided before <i>et</i>, and the final <i>ē</i> of <i>quārē</i> before <i>id</i>, so fifteen syllables count, and the line is a hexameter: <i>ō-d(ī) et a | mō quā | r(ē) id fa-ci | am for | tas-se re | quī-ris</i>.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C6",
   "set": "C",
   "type": "mc",
   "prompt": "Which vowel is elided in <em>nescio, sed fierī sentiō et excrucior</em> (Catullus 85.2)?",
   "options": [
    "The final <i>o</i> of <i>nescio</i>",
    "The <i>e</i> of <i>et</i>",
    "The final <i>ō</i> of <i>sentiō</i>",
    "None, because the line has no elision"
   ],
   "answer": 2,
   "explain": "The final <i>ō</i> of <i>sentiō</i> stands before <i>et</i>, which begins with a vowel, so it is elided: <i>sen-ti(ō) et ex-cru-ci-or</i>. The <i>o</i> of <i>nescio</i> is followed by <i>sed</i>, which begins with a consonant, so it is not elided.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:C7",
   "set": "C",
   "type": "mc",
   "prompt": "Ambrose’s evening hymn begins <em>Deus creātor omnium</em> (“God, creator of all things”). Its syllables are <em>de-us cre-ā-to-rom-ni-um</em>. What foot does each pair of syllables form?",
   "options": [
    "A trochee",
    "A spondee",
    "An iamb",
    "An anapest"
   ],
   "answer": 2,
   "explain": "Each pair is a short syllable and a long one. <i>de</i> is short before a vowel, and <i>us</i> is long by position before <i>c</i> and <i>r</i>; <i>cre</i> is short before a vowel, and <i>ā</i> is long by nature; <i>to</i> is short because the <i>r</i> of <i>creātor</i> goes with the <i>o</i> of <i>omnium</i>, and <i>rom</i> is long before <i>m</i> and <i>n</i>; <i>ni</i> is short before a vowel, and <i>um</i> closes the line. So the line is four iambs, the iambic dimeter of the hymns.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn9",
   "set": "C",
   "type": "mc",
   "prompt": "Which meter has this pattern? – – – ∪ ∪ – ∪ – ∪ – –",
   "options": [
    "Line of the sapphic stanza",
    "Adonean",
    "Dactylic hexameter",
    "Hendecasyllable"
   ],
   "answer": 3,
   "explain": "Eleven syllables that begin with three long ones and then two short ones make the hendecasyllable, as Catullus usually writes it. The line of the sapphic stanza also has eleven syllables, but it begins – ∪ –.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn15",
   "set": "C",
   "type": "mc",
   "prompt": "What is the pattern of the short line that closes a sapphic stanza?",
   "options": [
    "– – – ∪ ∪ – ∪ – ∪ – –",
    "– ∪ ∪ – –",
    "– ∪ – – – ∪ ∪ – ∪ – –",
    "– – ∪ – – – ∪ –"
   ],
   "answer": 1,
   "explain": "A sapphic stanza has three lines of eleven syllables and a short fourth line, the adonean, – ∪ ∪ – –.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn19",
   "set": "C",
   "type": "mc",
   "prompt": "What may each of the first four feet of a hexameter be?",
   "options": [
    "A dactyl, a spondee, or an iamb",
    "A dactyl or a spondee",
    "A dactyl only",
    "A spondee only"
   ],
   "answer": 1,
   "explain": "Each of the first four feet may be a dactyl or a spondee; the fifth foot is nearly always a dactyl, and the sixth has two syllables. An iamb, a short syllable and a long one, does not fit the hexameter.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn20",
   "set": "C",
   "type": "mc",
   "prompt": "Where does the principal caesura of a hexameter usually fall?",
   "options": [
    "At the end of the third foot, between that foot and the next",
    "In the third foot, after its first syllable",
    "In the fifth foot, after its first syllable",
    "In the sixth foot, before its last syllable"
   ],
   "answer": 1,
   "explain": "A caesura is a break between words that falls within a foot. In the hexameter the principal caesura usually falls in the third foot, after its first syllable. A break at the end of a foot is not a caesura.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  },
  {
   "id": "lang.ii.la/meter-ex:mn21",
   "set": "C",
   "type": "mc",
   "prompt": "What does the sixth foot of a hexameter have?",
   "options": [
    "Three syllables, since it is always a dactyl",
    "Two syllables, the last long or short",
    "Two syllables, both always long",
    "One long syllable"
   ],
   "answer": 1,
   "explain": "The sixth foot has two syllables, and the last of them may be long or short. The fifth foot, not the sixth, is nearly always a dactyl.",
   "deck": "lang.ii.la/meter",
   "section": "ii"
  }
 ]
};
