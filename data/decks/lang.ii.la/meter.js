window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.la/meter"] = {
 "id": "lang.ii.la/meter",
 "title": "Latin Meter",
 "sub": "The steps of scansion, applied to the hexameter, the elegiac couplet, the hendecasyllable, and the sapphic stanza",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>, on prosody (§§ 603–628); the Latin of Virgil, Ovid, Catullus, and Horace from the Perseus texts. Translations: Virgil, <i>Aeneid</i>, T. C. Williams; Catullus, L. C. Smithers (as modernized by Perseus); Horace, <i>Odes</i> I.2.1–4, and Ovid, <i>Amores</i> III.15.7–8, the course’s own plain translations.",
 "panels": [
  {
   "id": "steps",
   "title": "The steps of scansion",
   "body": "<p>When we read a line of Latin verse aloud, we cannot place its beats until we know which of its syllables are long, and the spelling shows only part of what we need. It does not show which vowels are long, which syllables are closed by a consonant at the beginning of the next word, or which syllables are not counted at all. To <strong>scan</strong> a line (Latin <i lang=\"la\">scandere</i>, “to climb”) is to settle these questions syllable by syllable, and so to divide the line into its feet.</p><p>We have seen the rules that scansion needs. A syllable is long by nature when its vowel is long or a diphthong, and long by position when its vowel is followed by two consonants or by <i lang=\"la\">x</i> or <i lang=\"la\">z</i>; a syllable whose vowel is followed by a consonant <i lang=\"la\">i</i> is long as well; a short vowel followed by a mute and a liquid makes a common syllable; a final syllable with a short vowel and a final consonant is long or short according to the word that follows; and a final vowel, or a final vowel followed by <i lang=\"la\">m</i>, is elided before a vowel or <i lang=\"la\">h</i>. Scansion applies these rules in a fixed order, because an elided syllable is not counted, and a syllable cannot be measured until we know where it ends:</p><p><strong>Elision:</strong> the elided syllables are struck out.<br><strong>Division:</strong> the remaining syllables are divided, across the ends of words as within words.<br><strong>Quantity:</strong> each syllable is marked long or short, and a common syllable is left undecided until the pattern of the line shows how the poet measured it.<br><strong>Feet:</strong> the syllables are grouped into the feet of the meter, and the caesura is found; in a hexameter the grouping begins from the end of the line, where the pattern is most fixed.</p><p>When the long vowels are marked with macrons, the syllables long by nature can be seen at once; the syllables long by position must be found by counting the consonants after each short vowel, including the consonant that begins the next word.</p>",
   "src": "Allen and Greenough §§ 11–12 (rules of quantity, recalled from ii.quantity), 611–612 (scansion, elision).",
   "qp": {
    "id": "q-la-me-steps",
    "variants": [
     {
      "prompt": "What is the first step in scanning a Latin line?",
      "options": [
       "Grouping the syllables into feet from the end",
       "Marking the quantity",
       "Finding the caesura",
       "Striking out the elided syllables"
      ],
      "answer": 3,
      "explain": "Elision comes first, because an elided syllable is not counted."
     },
     {
      "prompt": "Where does the grouping of a hexameter begin?",
      "options": [
       "From the end of the line",
       "From the first word",
       "From the caesura in the third foot",
       "From the longest word"
      ],
      "answer": 0,
      "explain": "The end of the line is the most fixed."
     },
     {
      "prompt": "When is a final <i lang=\"la\">-um</i> elided?",
      "options": [
       "Before any consonant",
       "Before a vowel or <i lang=\"la\">h</i>",
       "At the end of a line",
       "Never"
      ],
      "answer": 1,
      "explain": "A final vowel, or vowel and <i lang=\"la\">m</i>, is elided before a vowel or <i lang=\"la\">h</i>."
     }
    ]
   }
  },
  {
   "id": "hexameter",
   "title": "Scanning a hexameter",
   "body": "<p>After the storm that drives the Trojans onto the coast of Africa, Aeneas encourages his companions: <i lang=\"la\">O passi graviora, dabit deus his quoque finem</i>, “O, ye have borne / far heavier sorrow: Jove will make an end / also of this” (<i lang=\"la\">Aeneid</i> I.199). With its long vowels marked, the line reads <i lang=\"la\">ō passī graviōra, dabit deus hīs quoque fīnem</i>.</p><p>There is no elision, because no word that ends in a vowel or in <i lang=\"la\">m</i> stands before a vowel. The line has sixteen syllables. Five are long by nature: <i lang=\"la\">ō</i>, <i lang=\"la\">sī</i>, the <i lang=\"la\">ō</i> of <i lang=\"la\">graviōra</i>, <i lang=\"la\">hīs</i>, and <i lang=\"la\">fī</i>. Two are long by position: <i lang=\"la\">pas</i>, whose <i lang=\"la\">a</i> is followed by <i lang=\"la\">s</i> and <i lang=\"la\">s</i>, and <i lang=\"la\">bit</i>, whose <i lang=\"la\">i</i> is followed by the <i lang=\"la\">t</i> of <i lang=\"la\">dabit</i> and the <i lang=\"la\">d</i> of <i lang=\"la\">deus</i>. The others are short: <i lang=\"la\">vi</i> and <i lang=\"la\">de</i> because their vowels stand before another vowel; <i lang=\"la\">us</i> because the <i lang=\"la\">h</i> of <i lang=\"la\">hīs</i> is not counted, so only one consonant follows its vowel; <i lang=\"la\">quo</i> because <i lang=\"la\">qu</i> counts as one consonant; and <i lang=\"la\">gra</i>, <i lang=\"la\">ra</i>, <i lang=\"la\">da</i>, and <i lang=\"la\">que</i> because each is open and has a short vowel. The last syllable, <i lang=\"la\">nem</i>, closes the line, where a long or a short syllable may stand.</p><p>Grouped from the end, the syllables give <i lang=\"la\">ō pas | sī gra-vi | ō-ra da | bit de-us | hīs quo-que | fī-nem</i>: a spondee, four dactyls, and a final foot of two syllables. The word break within the third foot falls after its second syllable, <i lang=\"la\">graviōra ‖ dabit</i>; this is the other common place of the caesura in the hexameter, besides the place after the first syllable of the third foot.</p>",
   "src": "Virgil, Aeneid I.199 (Latin from the Perseus text; trans. T. C. Williams, Perseus). Allen and Greenough §§ 611 (caesura after the second syllable of a dactyl), 615.",
   "qp": {
    "id": "q-la-me-hexameter",
    "variants": [
     {
      "prompt": "What is the fifth foot of a hexameter usually?",
      "options": [
       "It is always a spondee",
       "A dactyl",
       "It may be any foot",
       "It has only one syllable"
      ],
      "answer": 1,
      "explain": "The fifth foot is nearly always a dactyl."
     },
     {
      "prompt": "Why is <i lang=\"la\">bit</i> long in <i lang=\"la\">dabit deus</i>?",
      "options": [
       "By nature: its vowel is long",
       "It is accented",
       "By position: <i lang=\"la\">t</i> and <i lang=\"la\">d</i> follow",
       "It is the end of a word"
      ],
      "answer": 2,
      "explain": "The final <i lang=\"la\">t</i> and the <i lang=\"la\">d</i> of the next word make two consonants."
     },
     {
      "prompt": "Why is the <i lang=\"la\">us</i> of <i lang=\"la\">deus</i> short before <i lang=\"la\">hīs</i>?",
      "options": [
       "<i lang=\"la\">Us</i> is always short",
       "It is elided",
       "It is before a pause",
       "<i lang=\"la\">H</i> is not counted as a consonant"
      ],
      "answer": 3,
      "explain": "Only one consonant follows its vowel."
     }
    ]
   }
  },
  {
   "id": "elegiac",
   "title": "Scanning an elegiac couplet",
   "body": "<p>Near the end of the <i lang=\"la\">Amores</i>, Ovid sets himself beside two poets of the generation before him: <i lang=\"la\">Mantua Vergilio gaudet, Verona Catullo; / Paelignae dicar gloria gentis ego</i>, “Mantua rejoices in Virgil, Verona in Catullus; I shall be called the glory of the Paelignian people” (<i lang=\"la\">Amores</i> III.15.7–8). With its long vowels marked, the couplet reads <i lang=\"la\">Mantua Vergiliō gaudet, Vērōna Catullō; / Paelignae dīcar glōria gentis ego</i>.</p><p>The hexameter has no elision. The <i lang=\"la\">u</i> of <i lang=\"la\">Mantua</i> and the second <i lang=\"la\">i</i> of <i lang=\"la\">Vergiliō</i> are short because each stands before another vowel; <i lang=\"la\">det</i> is long by position because the <i lang=\"la\">t</i> of <i lang=\"la\">gaudet</i> is followed by the <i lang=\"la\">V</i> of <i lang=\"la\">Vērōna</i>; and <i lang=\"la\">Man</i>, <i lang=\"la\">Ver</i>, and <i lang=\"la\">tul</i> are long by position within their words. Grouped from the end, the line is <i lang=\"la\">Man-tu-a | Ver-gi-li | ō gau | det Vē | rō-na Ca | tul-lō</i>: two dactyls, two spondees, a dactyl, and a final foot, with the caesura after <i lang=\"la\">Vergiliō</i>, the first syllable of the third foot.</p><p>The pentameter is <i lang=\"la\">Pae-lig | nae dī | car ‖ glō-ri-a | gen-tis e | go</i>. Its first half has two spondees and a long syllable, which is long by position because the <i lang=\"la\">r</i> of <i lang=\"la\">dīcar</i> is followed by the <i lang=\"la\">g</i> of <i lang=\"la\">glōria</i>. Its second half has the two dactyls that the second half always keeps, and a final syllable.</p>",
   "src": "Ovid, Amores III.15.7–8 (Latin from the Perseus text; the translation is the course’s own, because the Perseus verse translation of the Amores is a free paraphrase). Allen and Greenough § 616.",
   "qp": {
    "id": "q-la-me-elegiac",
    "variants": [
     {
      "prompt": "What is the second line of an elegiac couplet?",
      "options": [
       "A pentameter",
       "A second hexameter",
       "An iambic trimeter",
       "An adonean"
      ],
      "answer": 0,
      "explain": "A hexameter and a pentameter."
     },
     {
      "prompt": "What does the second half of the pentameter always keep?",
      "options": [
       "Two spondees",
       "One dactyl",
       "Three spondees",
       "Two dactyls"
      ],
      "answer": 3,
      "explain": "Only the first half admits spondees."
     },
     {
      "prompt": "Why is the <i lang=\"la\">u</i> of <i lang=\"la\">Mantua</i> short?",
      "options": [
       "It is long by position before two consonants",
       "It is elided",
       "It stands before another vowel",
       "It is accented"
      ],
      "answer": 2,
      "explain": "A vowel before a vowel is short."
     }
    ]
   }
  },
  {
   "id": "hendecasyllable",
   "title": "Scanning a hendecasyllable",
   "body": "<p>Catullus invites a friend to dinner, on the condition that the friend brings the dinner himself: <i lang=\"la\">Cenabis bene, mi Fabulle, apud me</i>, “You will feast well with me, my Fabullus” (Catullus 13.1). With its long vowels marked, the line reads <i lang=\"la\">cēnābis bene, mī Fabulle, apud mē</i>.</p><p>The final <i lang=\"la\">e</i> of <i lang=\"la\">Fabulle</i> is elided before <i lang=\"la\">apud</i>, so the twelve written syllables count as eleven. Then <i lang=\"la\">cē</i>, <i lang=\"la\">nā</i>, <i lang=\"la\">mī</i>, and <i lang=\"la\">mē</i> are long by nature; <i lang=\"la\">bis</i> is long by position because its <i lang=\"la\">s</i> is followed by the <i lang=\"la\">b</i> of <i lang=\"la\">bene</i>; <i lang=\"la\">bul</i> is long because of the double <i lang=\"la\">l</i>; and <i lang=\"la\">pud</i> is long because its <i lang=\"la\">d</i> is followed by the <i lang=\"la\">m</i> of <i lang=\"la\">mē</i>. The line is <i lang=\"la\">cē-nā-bis be-ne mī Fa-bul-l(e) a-pud mē</i>, – – – ∪ ∪ – ∪ – ∪ – –, which is the pattern of the hendecasyllable that we have seen. Catullus usually begins the line with two long syllables, as here, but he sometimes allows a short syllable in the first or the second place, so in his poems the first two syllables are the only part of the line that is not fixed.</p>",
   "src": "Catullus 13.1 (Latin from the Perseus text; trans. L. C. Smithers as modernized by Perseus, 13.1). Allen and Greenough § 625 (Phalaecean: the first foot a spondee, occasionally a trochee or an iamb in Catullus).",
   "qp": {
    "id": "q-la-me-hendecasyllable",
    "variants": [
     {
      "prompt": "How many syllables has a hendecasyllable?",
      "options": [
       "Eleven",
       "Twelve, counting the elided one",
       "Ten",
       "Thirteen"
      ],
      "answer": 0,
      "explain": "The name means “eleven-syllable.”"
     },
     {
      "prompt": "Which part of Catullus’s hendecasyllable is not fixed?",
      "options": [
       "The last two syllables",
       "The middle dactyl",
       "None",
       "The first two syllables"
      ],
      "answer": 3,
      "explain": "He sometimes allows a short syllable there."
     },
     {
      "prompt": "Why are there eleven syllables in a line with twelve written?",
      "options": [
       "One syllable is long",
       "One word is not counted",
       "One vowel is elided",
       "The caesura removes one"
      ],
      "answer": 2,
      "explain": "Elision removes a syllable."
     }
    ]
   }
  },
  {
   "id": "sapphic",
   "title": "Scanning a sapphic stanza",
   "body": "<p>Horace begins his second ode with the storms and portents that followed the death of Julius Caesar: <i lang=\"la\">Iam satis terris nivis atque dirae / grandinis misit pater et rubente / dextera sacras iaculatus arcis / terruit urbem</i>, “Now the Father has sent enough of snow and dire hail upon the lands, and, striking the sacred citadels with his red right hand, he has terrified the city” (<i lang=\"la\">Odes</i> I.2.1–4). With its long vowels marked, the stanza reads <i lang=\"la\">Iam satis terrīs nivis atque dīrae / grandinis mīsit pater et rubente / dexterā sacrās iaculātus arcīs / terruit urbem</i>.</p><p>We have seen that each of the first three lines of the stanza follows the pattern – ∪ – – – ∪ ∪ – ∪ – –. In the second line three final consonants make long syllables before the next word: <i lang=\"la\">nis</i> before the <i lang=\"la\">m</i> of <i lang=\"la\">mīsit</i>, <i lang=\"la\">sit</i> before the <i lang=\"la\">p</i> of <i lang=\"la\">pater</i>, and <i lang=\"la\">et</i> before the <i lang=\"la\">r</i> of <i lang=\"la\">rubente</i>; whereas the <i lang=\"la\">ter</i> of <i lang=\"la\">pater</i> is short, because its <i lang=\"la\">r</i> is followed by the vowel of <i lang=\"la\">et</i>. So the line is <i lang=\"la\">gran-di-nis mī-sit pa-ter et ru-ben-te</i>, exactly in the pattern.</p><p>In the third line the <i lang=\"la\">a</i> of <i lang=\"la\">sacrās</i> is short and is followed by the mute <i lang=\"la\">c</i> and the liquid <i lang=\"la\">r</i>, so the syllable is common. The pattern requires a long syllable in the fourth place, and therefore Horace divides the two consonants, <i lang=\"la\">sac-rās</i>, and measures the syllable long: <i lang=\"la\">dex-te-rā sac-rās ia-cu-lā-tus ar-cīs</i>. The short fourth line, the adonean, is <i lang=\"la\">ter-ru-it ur-bem</i>, – ∪ ∪ – –.</p>",
   "src": "Horace, Odes I.2.1–4 (Latin from the Perseus text; the translation is the course’s own, rendering every word, in place of Conington’s free verse rendering). Allen and Greenough §§ 603 f (mute and liquid), 626 (the sapphic stanza).",
   "qp": {
    "id": "q-la-me-sapphic",
    "variants": [
     {
      "prompt": "How many lines has a sapphic stanza?",
      "options": [
       "Four",
       "Three, the fourth being a refrain",
       "Five",
       "Two"
      ],
      "answer": 0,
      "explain": "Three sapphic lines and an adonean."
     },
     {
      "prompt": "What is the adonean?",
      "options": [
       "The first line",
       "A spondee",
       "The pause in the middle",
       "The short fourth line, — ∪ ∪ — —"
      ],
      "answer": 3,
      "explain": "<i lang=\"la\">Terruit urbem.</i>"
     },
     {
      "prompt": "Why may Horace divide <i lang=\"la\">sac-rās</i> and count the first syllable long?",
      "options": [
       "<i lang=\"la\">A</i> is long by nature",
       "The syllable is accented",
       "A mute and a liquid make a common syllable",
       "It is elided"
      ],
      "answer": 2,
      "explain": "The pattern requires a long syllable there."
     }
    ]
   }
  }
 ]
};
