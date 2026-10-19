/* Syllable [ii.ex.syllable]  WRITTEN (18 Oct 2026); hand-edited; do not regenerate with gen.py.
   Opened from: ii.syllable (Exercise button). Pool 48, three fixed sets of 16 (8 English, 8 Latin; in each language
   4 count and 4 divide items), given A, B, C, A, … and never reordered. Items in each set run from easier to harder.
   Types: count (answer an integer) and divide (answer with hyphens; macrons:false means macrons are not tested).
   Some items carry a "why" prompt with a model answer (EXERCISES-PLAN.md, build list 7). Old-app material drawn on:
   SYE_WORDS, ENSYL_ITEMS, ACCENT_WORDS, SYLL_DIV_WRONG (words checked against the II.3 rules and re-explained). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['ii.ex.syllable'] = {
 "id": "ii.ex.syllable",
 "kind": "exercise",
 "status": "written",
 "section": "II",
 "title": "Syllable",
 "openedFrom": "ii.syllable (Exercise button)",
 "covers": [
  {
   "deck": "ii.syllable",
   "cards": [
    "what-syllable",
    "vowel-center",
    "open-closed",
    "english-syllable",
    "syllabic-consonants",
    "english-division",
    "latin-division-1",
    "latin-division-2"
   ]
  },
  {
   "deck": "ii.letter",
   "cards": [
    "vowels",
    "restored-vowels",
    "restored-consonants"
   ]
  }
 ],
 "skill": "Count the syllables of a word and divide it into syllables, in English and in Latin.",
 "types": [
  "count",
  "divide"
 ],
 "pool": 48,
 "rotation": "A, B, C, A, … (never shuffled)",
 "sets": {
  "A": 16,
  "B": 16,
  "C": 16
 },
 "groupsPerSet": [
  {
   "group": "English",
   "n": 8,
   "deck": "ii.syllable",
   "lang": "en",
   "cards": [
    "english-syllable",
    "syllabic-consonants",
    "english-division",
    "vowel-center"
   ]
  },
  {
   "group": "Latin",
   "n": 8,
   "deck": "ii.syllable",
   "lang": "la",
   "cards": [
    "latin-division-1",
    "latin-division-2",
    "open-closed",
    "vowel-center"
   ]
  }
 ],
 "split": "In each set of 16: 8 English and 8 Latin words; in each language, 4 count and 4 divide items.",
 "limit": "The Latin items use only the spelling and pronunciation of II.2 and the rules of division of II.3.",
 "instr": "Count the syllables, or divide the word into syllables with hyphens (for example, “win-dow”). Long Latin vowels are marked with macrons, but macrons need not be typed.",
 "items": [
  {"id": "syl-A01", "set": "A", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "plane", "prompt": "How many syllables does “plane” have?", "answer": 1, "explain": "“Plane” has one vowel sound. The final <i>e</i> is silent, so the word has one syllable, although it has two vowel letters."},
  {"id": "syl-A02", "set": "A", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "candle", "prompt": "Divide “candle” into syllables, with a hyphen between the syllables.", "answer": "can-dle", "macrons": false, "explain": "The second syllable of “candle” has no vowel sound of its own: the <i>l</i> is a syllabic consonant and makes the syllable. The two consonants <i>n</i> and <i>d</i> are divided, so the word is “can-dle.”"},
  {"id": "syl-A03", "set": "A", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "salad", "prompt": "How many syllables does “salad” have?", "answer": 2, "explain": "“Salad” has two vowel sounds, one in “sal” and one in “ad,” so it has two syllables."},
  {"id": "syl-A04", "set": "A", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "lion", "prompt": "Divide “lion” into syllables, with a hyphen between the syllables.", "answer": "li-on", "macrons": false, "explain": "The <i>i</i> and the <i>o</i> of “lion” are two vowel sounds, not a diphthong, so each makes its own syllable: “li-on.”", "why": {"prompt": "Why is “lion” two syllables and not one?", "model": "Its two vowel letters stand for two vowel sounds, not for one diphthong, and every vowel sound makes a syllable."}},
  {"id": "syl-A05", "set": "A", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "idea", "prompt": "How many syllables does “idea” have?", "answer": 3, "explain": "“Idea” has three vowel sounds, in “i,” “de,” and “a.” The <i>e</i> and the final <i>a</i> are not a diphthong; each is pronounced in its own syllable, so the word has three syllables."},
  {"id": "syl-A06", "set": "A", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "little", "prompt": "Divide “little” into syllables, with a hyphen between the syllables.", "answer": "lit-tle", "macrons": false, "explain": "The final syllable of “little” is made by the syllabic <i>l</i>, with no vowel sound. The doubled <i>t</i> is divided between the syllables: “lit-tle.”"},
  {"id": "syl-A08", "set": "A", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "violin", "prompt": "Divide “violin” into syllables, with a hyphen between the syllables.", "answer": "vi-o-lin", "macrons": false, "explain": "“Violin” has three vowel sounds. The <i>i</i> and the <i>o</i> stand side by side but are pronounced in separate syllables, so the word is “vi-o-lin.”"},
  {"id": "syl-A07", "set": "A", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "stretched", "prompt": "How many syllables does “stretched” have?", "answer": 1, "explain": "“Stretched” has nine letters but only one vowel sound, the <i>e</i>. English syllables are counted by vowel sounds, not by letters, and the consonants before and after the vowel all belong to the one syllable.", "why": {"prompt": "Why does “stretched” have only one syllable, although it has nine letters?", "model": "English syllables are counted by vowel sounds. “Stretched” has only one vowel sound, and all its consonants are grouped around it in one syllable."}},
  {"id": "syl-A09", "set": "A", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "tabula", "prompt": "How many syllables does <i>tabula</i> have?", "answer": 3, "explain": "Latin <i>tabula</i> (“board”) has three vowels and no diphthong, so it has three syllables: <i>ta-bu-la</i>."},
  {"id": "syl-A13", "set": "A", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "terra", "prompt": "How many syllables does <i>terra</i> have?", "answer": 2, "explain": "Latin <i>terra</i> (“earth”) has two vowels, so two syllables. The two <i>r</i>’s are divided between them: <i>ter-ra</i>."},
  {"id": "syl-A11", "set": "A", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "nauta", "prompt": "How many syllables does <i>nauta</i> have?", "answer": 2, "explain": "Latin <i>nauta</i> (“sailor”) has two syllables, <i>nau-ta</i>. The <i>au</i> is a diphthong and counts as one vowel, so the word has only two vowels for counting."},
  {"id": "syl-A10", "set": "A", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "sacrum", "prompt": "Divide <i>sacrum</i> into syllables, with a hyphen between the syllables.", "answer": "sa-crum", "macrons": false, "explain": "In <i>sacrum</i> (“a holy thing”) a mute, <i>c</i>, is followed by the liquid <i>r</i>. A mute and a liquid usually go together with the following vowel, so the word is divided <i>sa-crum</i>."},
  {"id": "syl-A12", "set": "A", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "aurum", "prompt": "Divide <i>aurum</i> into syllables, with a hyphen between the syllables.", "answer": "au-rum", "macrons": false, "explain": "The <i>au</i> of <i>aurum</i> (“gold”) is a diphthong and stays in one syllable, and the single consonant <i>r</i> goes with the following vowel: <i>au-rum</i>.", "why": {"prompt": "Why are <i>a</i> and <i>u</i> kept together in <i>aurum</i>?", "model": "Together they make the diphthong <i>au</i>, two vowels pronounced in one syllable, so they cannot be divided."}},
  {"id": "syl-A16", "set": "A", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "poēta", "prompt": "Divide <i>poēta</i> into syllables, with a hyphen between the syllables.", "answer": "po-ē-ta", "macrons": false, "explain": "In <i>poēta</i> (“poet”) the <i>o</i> and the <i>ē</i> are not a diphthong; they are two vowels pronounced in two syllables. So the word has three syllables: <i>po-ē-ta</i>."},
  {"id": "syl-A15", "set": "A", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "lībertās", "prompt": "How many syllables does <i>lībertās</i> have?", "answer": 3, "explain": "Latin <i>lībertās</i> (“freedom”) has three vowels, <i>ī</i>, <i>e</i>, and <i>ā</i>, so three syllables: <i>lī-ber-tās</i>. The middle syllable is closed, because <i>r</i> and <i>t</i> are divided between it and the next."},
  {"id": "syl-A14", "set": "A", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "abesse", "prompt": "Divide <i>abesse</i> into syllables, with a hyphen between the syllables.", "answer": "ab-es-se", "macrons": false, "explain": "<i>Abesse</i> (“to be away”) is a compound of <i>ab</i> (“away”) and <i>esse</i> (“to be”), and a compound word is divided between its parts. So the <i>b</i> stays with <i>ab</i>: <i>ab-es-se</i>, not <i>a-bes-se</i>.", "why": {"prompt": "Why is <i>abesse</i> divided <i>ab-es-se</i> and not <i>a-bes-se</i>?", "model": "It is a compound of <i>ab</i> and <i>esse</i>, and a compound word is divided between its parts, so the rule for a single consonant does not apply at the join."}},
  {"id": "syl-B01", "set": "B", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "stone", "prompt": "How many syllables does “stone” have?", "answer": 1, "explain": "“Stone” has one vowel sound; its final <i>e</i> is silent. So the word has one syllable."},
  {"id": "syl-B02", "set": "B", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "puzzle", "prompt": "Divide “puzzle” into syllables, with a hyphen between the syllables.", "answer": "puz-zle", "macrons": false, "explain": "The final syllable of “puzzle” is made by the syllabic <i>l</i>. The doubled <i>z</i> is divided: “puz-zle.”"},
  {"id": "syl-B03", "set": "B", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "garden", "prompt": "How many syllables does “garden” have?", "answer": 2, "explain": "“Garden” has two vowel sounds, in “gar” and “den,” so it has two syllables."},
  {"id": "syl-B04", "set": "B", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "ruin", "prompt": "Divide “ruin” into syllables, with a hyphen between the syllables.", "answer": "ru-in", "macrons": false, "explain": "The <i>u</i> and the <i>i</i> of “ruin” are two vowel sounds, so each makes a syllable: “ru-in.”"},
  {"id": "syl-B05", "set": "B", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "piano", "prompt": "How many syllables does “piano” have?", "answer": 3, "explain": "“Piano” has three vowel sounds, “pi,” “a,” and “no,” so it has three syllables."},
  {"id": "syl-B06", "set": "B", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "kitten", "prompt": "Divide “kitten” into syllables, with a hyphen between the syllables.", "answer": "kit-ten", "macrons": false, "explain": "The second syllable of “kitten” is usually pronounced with a syllabic <i>n</i>, with no vowel sound. The doubled <i>t</i> is divided: “kit-ten.”"},
  {"id": "syl-B08", "set": "B", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "diet", "prompt": "Divide “diet” into syllables, with a hyphen between the syllables.", "answer": "di-et", "macrons": false, "explain": "The <i>i</i> and the <i>e</i> of “diet” are two vowel sounds, not a diphthong, so the word has two syllables: “di-et.”"},
  {"id": "syl-B07", "set": "B", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "prism", "prompt": "How many syllables does “prism” have?", "answer": 2, "explain": "“Prism” has only one vowel letter, but its final <i>m</i> is a syllabic consonant and makes a second syllable, as in “rhythm.” So the word has two syllables.", "why": {"prompt": "Why does “prism” have two syllables when it has only one vowel letter?", "model": "The final <i>m</i> is a syllabic consonant: in that unstressed syllable it takes the place of the vowel and makes a syllable of its own."}},
  {"id": "syl-B09", "set": "B", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "silva", "prompt": "How many syllables does <i>silva</i> have?", "answer": 2, "explain": "Latin <i>silva</i> (“forest”) has two vowels, so two syllables: <i>sil-va</i>. The consonantal <i>v</i> is a consonant, not a vowel."},
  {"id": "syl-B13", "set": "B", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "animus", "prompt": "How many syllables does <i>animus</i> have?", "answer": 3, "explain": "Latin <i>animus</i> (“mind”) has three vowels and no diphthong, so three syllables. Each single consonant goes with the following vowel: <i>a-ni-mus</i>."},
  {"id": "syl-B11", "set": "B", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "corpus", "prompt": "How many syllables does <i>corpus</i> have?", "answer": 2, "explain": "Latin <i>corpus</i> (“body”) has two vowels, so two syllables: <i>cor-pus</i>. Its first syllable is closed, because <i>r</i> and <i>p</i> are divided."},
  {"id": "syl-B10", "set": "B", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "aquila", "prompt": "Divide <i>aquila</i> into syllables, with a hyphen between the syllables.", "answer": "a-qui-la", "macrons": false, "explain": "In <i>aquila</i> (“eagle”) the pair <i>qu</i> counts as one consonant, so it goes with the following vowel: <i>a-qui-la</i>."},
  {"id": "syl-B12", "set": "B", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "praeda", "prompt": "Divide <i>praeda</i> into syllables, with a hyphen between the syllables.", "answer": "prae-da", "macrons": false, "explain": "The <i>ae</i> of <i>praeda</i> (“booty”) is a diphthong and stays in one syllable, and the single consonant <i>d</i> goes with the following vowel: <i>prae-da</i>."},
  {"id": "syl-B16", "set": "B", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "meus", "prompt": "Divide <i>meus</i> into syllables, with a hyphen between the syllables.", "answer": "me-us", "macrons": false, "explain": "The <i>e</i> and <i>u</i> of <i>meus</i> (“my”) are two vowels, not a diphthong, so they belong to two syllables: <i>me-us</i>."},
  {"id": "syl-B15", "set": "B", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "praemium", "prompt": "How many syllables does <i>praemium</i> have?", "answer": 3, "explain": "Latin <i>praemium</i> (“reward”) has three syllables, <i>prae-mi-um</i>. The <i>ae</i> is a diphthong and counts as one vowel, but the <i>i</i> and <i>u</i> are two vowels in two syllables.", "why": {"prompt": "Why is <i>praemium</i> three syllables and not four?", "model": "The <i>ae</i> is a diphthong, two vowels in one syllable, whereas the <i>i</i> and <i>u</i> are not a diphthong and are counted separately; so there are three vowels for counting."}},
  {"id": "syl-B14", "set": "B", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "lacrima", "prompt": "Divide <i>lacrima</i> into syllables, with a hyphen between the syllables.", "answer": "la-cri-ma", "macrons": false, "explain": "In <i>lacrima</i> (“tear”) the mute <i>c</i> is followed by the liquid <i>r</i>, so the two usually go together with the following vowel: <i>la-cri-ma</i>.", "why": {"prompt": "Why are <i>c</i> and <i>r</i> not divided in <i>lacrima</i>, as two consonants usually are?", "model": "A mute followed by a liquid flows easily into the next vowel, so the pair usually goes with the following syllable."}},
  {"id": "syl-C01", "set": "C", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "shape", "prompt": "How many syllables does “shape” have?", "answer": 1, "explain": "“Shape” has one vowel sound; the final <i>e</i> is silent. So it has one syllable."},
  {"id": "syl-C02", "set": "C", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "table", "prompt": "Divide “table” into syllables, with a hyphen between the syllables.", "answer": "ta-ble", "macrons": false, "explain": "The final syllable of “table” is made by the syllabic <i>l</i>. The first vowel is long, so the <i>b</i> goes with the second syllable: “ta-ble.”"},
  {"id": "syl-C03", "set": "C", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "museum", "prompt": "How many syllables does “museum” have?", "answer": 3, "explain": "“Museum” has three vowel sounds, “mu,” “se,” and “um,” so it has three syllables. The <i>e</i> and <i>u</i> are pronounced separately."},
  {"id": "syl-C04", "set": "C", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "fluid", "prompt": "Divide “fluid” into syllables, with a hyphen between the syllables.", "answer": "flu-id", "macrons": false, "explain": "The <i>u</i> and the <i>i</i> of “fluid” are two vowel sounds, so they belong to two syllables: “flu-id.”"},
  {"id": "syl-C05", "set": "C", "deck": "ii.syllable", "card": "english-syllable", "group": "English", "type": "count", "lang": "en", "word": "chasm", "prompt": "How many syllables does “chasm” have?", "answer": 2, "explain": "The final <i>m</i> of “chasm” is a syllabic consonant and makes a syllable of its own, so the word has two syllables, though it has only one vowel letter."},
  {"id": "syl-C06", "set": "C", "deck": "ii.syllable", "card": "syllabic-consonants", "group": "English", "type": "divide", "lang": "en", "word": "simple", "prompt": "Divide “simple” into syllables, with a hyphen between the syllables.", "answer": "sim-ple", "macrons": false, "explain": "The final syllable of “simple” is made by the syllabic <i>l</i>, and the consonants <i>m</i> and <i>p</i> are divided: “sim-ple.”"},
  {"id": "syl-C08", "set": "C", "deck": "ii.syllable", "card": "vowel-center", "group": "English", "type": "divide", "lang": "en", "word": "giant", "prompt": "Divide “giant” into syllables, with a hyphen between the syllables.", "answer": "gi-ant", "macrons": false, "explain": "The <i>i</i> and the <i>a</i> of “giant” are two vowel sounds, so the word has two syllables: “gi-ant.”"},
  {"id": "syl-C07", "set": "C", "deck": "ii.syllable", "card": "english-division", "group": "English", "type": "count", "lang": "en", "word": "scraped", "prompt": "How many syllables does “scraped” have?", "answer": 1, "explain": "“Scraped” has one vowel sound. The final <i>e</i> is silent and the ending “-ed” here adds only the sound of <i>t</i>, not a vowel, so the word has one syllable."},
  {"id": "syl-C09", "set": "C", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "mēnsa", "prompt": "How many syllables does <i>mēnsa</i> have?", "answer": 2, "explain": "Latin <i>mēnsa</i> (“table”) has two vowels, so two syllables: <i>mēn-sa</i>."},
  {"id": "syl-C13", "set": "C", "deck": "ii.syllable", "card": "latin-division-1", "group": "Latin", "type": "count", "lang": "la", "word": "rēgīna", "prompt": "How many syllables does <i>rēgīna</i> have?", "answer": 3, "explain": "Latin <i>rēgīna</i> (“queen”) has three vowels, so three syllables: <i>rē-gī-na</i>."},
  {"id": "syl-C11", "set": "C", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "equus", "prompt": "How many syllables does <i>equus</i> have?", "answer": 2, "explain": "Latin <i>equus</i> (“horse”) has two syllables, <i>e-quus</i>. The <i>u</i> after <i>q</i> belongs to the consonant pair <i>qu</i>, which counts as one consonant, so only the first <i>e</i> and the second <i>u</i> are counted as vowels.", "why": {"prompt": "Why is <i>equus</i> two syllables and not three?", "model": "The first <i>u</i> belongs to <i>qu</i>, which counts as one consonant; so the word has only two vowels for counting."}},
  {"id": "syl-C10", "set": "C", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "adeō", "prompt": "Divide <i>adeō</i> into syllables, with a hyphen between the syllables.", "answer": "ad-e-ō", "macrons": false, "explain": "<i>Adeō</i> (“I approach”) is a compound of <i>ad</i> (“to”) and <i>eō</i> (“I go”). A compound word is divided between its parts, so the <i>d</i> stays with <i>ad</i>, and the <i>e</i> and <i>ō</i> are two vowels in two syllables: <i>ad-e-ō</i>.", "why": {"prompt": "Why does the <i>d</i> of <i>adeō</i> stay in the first syllable?", "model": "<i>Adeō</i> is a compound of <i>ad</i> and <i>eō</i>, and a compound word is divided between its parts."}},
  {"id": "syl-C12", "set": "C", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "audiō", "prompt": "Divide <i>audiō</i> into syllables, with a hyphen between the syllables.", "answer": "au-di-ō", "macrons": false, "explain": "In <i>audiō</i> (“I hear”) the <i>au</i> is a diphthong and stays together, but the <i>i</i> and <i>ō</i> are two vowels in two syllables: <i>au-di-ō</i>."},
  {"id": "syl-C16", "set": "C", "deck": "ii.syllable", "card": "vowel-center", "group": "Latin", "type": "divide", "lang": "la", "word": "diēs", "prompt": "Divide <i>diēs</i> into syllables, with a hyphen between the syllables.", "answer": "di-ēs", "macrons": false, "explain": "The <i>i</i> and <i>ē</i> of <i>diēs</i> (“day”) are two vowels, not a diphthong, so they belong to two syllables: <i>di-ēs</i>."},
  {"id": "syl-C15", "set": "C", "deck": "ii.syllable", "card": "open-closed", "group": "Latin", "type": "count", "lang": "la", "word": "exemplum", "prompt": "How many syllables does <i>exemplum</i> have?", "answer": 3, "explain": "Latin <i>exemplum</i> (“example”) has three vowels, so three syllables: <i>ex-em-plum</i>. The double letter <i>x</i> counts as two consonants, so the first syllable is closed."},
  {"id": "syl-C14", "set": "C", "deck": "ii.syllable", "card": "latin-division-2", "group": "Latin", "type": "divide", "lang": "la", "word": "patria", "prompt": "Divide <i>patria</i> into syllables, with a hyphen between the syllables.", "answer": "pa-tri-a", "macrons": false, "explain": "In <i>patria</i> (“fatherland”) the mute <i>t</i> and the liquid <i>r</i> go together with the following vowel, and the <i>i</i> and <i>a</i> are two vowels in two syllables: <i>pa-tri-a</i>."}
 ]
};
