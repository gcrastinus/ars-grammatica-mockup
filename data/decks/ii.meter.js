/* II.6 Feet and Meter [ii.meter]
   Plan (ITEM-LIST.md): 13 panels, 3 question points (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.meter (verse and meter, elision, hexameter, elegiac couplet, hendecasyllable, sapphic,
   iambic dimeter, English feet), DECKS.enmeter (pentameter, variation), single lines from DECKS.grcmeter (Iliad I.1),
   DECKS.demeter (Opitz; Faust dedication), DECKS.frmeter (the alexandrine).
   Latin lines checked against the Perseus texts; translations recorded in sources/TRANSLATIONS-USED.md. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['ii.meter'] = {
  id: 'ii.meter',
  title: 'Feet and Meter',
  sub: 'Feet and verse, with lines of English and Latin, and of Greek, German, and French where they show stress, quantity, or syllable count distinctively',
  sources: `Diomedes, <i>Ars grammatica</i> III; Bede, <i>De arte metrica</i>; Augustine, <i>De musica</i>; Allen and Greenough, <i>New Latin Grammar</i>, on prosody.`,
  recitation: [
    `Verse is speech arranged in lines, each line following a fixed pattern of syllables, and that pattern is the meter (Greek <i>metron</i>, “measure”).`,
    `Diomedes defines meter, in substance, as an arrangement of feet in a fixed order, limited to a definite length.`,
    `The pattern is called a measure because spoken syllables have their extent in time, so verse is speech measured in time, in which the same pattern of syllables returns in every line.`,
    `Prose has a rhythm too, but not a pattern that returns, so the same words are prose or verse according as a rule of measure governs their syllables.`,
    `The grammarian studies meter because the poets were the first authors read, and a line cannot be read aloud rightly, or fully understood, unless its measure is known.`,
    `Other traditions measure verse in other ways: classical Sanskrit verse, like Greek and Latin, by long and short syllables, and classical Chinese verse by the number of syllables and a fixed pattern of tones.`,
    `A foot (Latin <i>pes</i>) is the least group of syllables that a meter repeats.`,
    `Latin and Greek feet are made of long and short syllables, a long syllable marked – and a short one ∪.`,
    `A dactyl (– ∪ ∪) is a long syllable and two short ones (<i>Rōmulus</i>).`,
    `A spondee (– –) is two long syllables (<i>Rōmā</i>, “from Rome”).`,
    `A trochee (– ∪) is a long syllable and a short one (<i>Rōma</i>).`,
    `An iamb (∪ –) is a short syllable and a long one (<i>legō</i>, “I read”).`,
    `An anapest (∪ ∪ –) is two short syllables and a long one (<i>bonitās</i>, “goodness”).`,
    `The names of the feet are Greek, and English uses them for feet of stressed and unstressed syllables.`,
    `Elision (Latin <i>elisio</i>, “striking out”) leaves uncounted a final syllable that ends in a vowel, or in a vowel and <i>m</i>, when the next word begins with a vowel or with <i>h</i>.`,
    `Latin still writes the elided vowel, whereas English sometimes drops it from the print and marks the place with an apostrophe.`,
    `The dactylic hexameter, the meter of Greek and Latin epic, has six feet: the first four each a dactyl or a spondee, the fifth almost always a dactyl, and the sixth two syllables.`,
    `Its close, – ∪ ∪ | – –, is the fixed part of the line, and measuring begins there.`,
    `The first line of the <i>Aeneid</i>, <i>Arma virumque cano, Troiae qui primus ab oris</i>, is such a hexameter, and the opening of <i>Evangeline</i> imitates the six beats by stress.`,
    `A caesura (Latin for a cutting) is a break between words inside a foot, not at a foot’s end.`,
    `In the hexameter that break usually comes in the third foot, after the first syllable.`,
    `If every word ended where a foot ends, the line would fall into equal pieces, an effect a poet might seek only rarely, since the words are meant to form a unity, whereas a word that runs past the end of a foot binds the line into one.`,
    `The feet therefore divide the line by the meter, and the words divide it by the sense.`,
    `The caesura is the break inside a foot, and punctuation marks the pauses of the sense, which need not fall at the same place.`,
    `English has no fixed caesura, and the name is used more loosely for any strong pause within the line.`,
    `Greek verse, like Latin, is measured by quantity, and its written accents are independent of the meter.`,
    `The elegiac couplet is a hexameter followed by a pentameter, a shorter line that pauses in the middle and again at the end.`,
    `Each half of the pentameter is two and a half feet, – ∪ ∪ | – ∪ ∪ | –, and only the first half may put a spondee for a dactyl.`,
    `Ovid describes the pentameter as a hexameter from which one foot has been taken in every second line.`,
    `The hendecasyllable, a line of eleven syllables, follows the order – – – ∪ ∪ – ∪ – ∪ – –, and elision counts toward the eleven.`,
    `The sapphic stanza, named for Sappho, has three lines of the pattern – ∪ – – – ∪ ∪ – ∪ – – and a short fourth line, – ∪ ∪ – –.`,
    `An iambic dimeter is four iambs taken in pairs, and the first and third feet may be long where the iamb is short.`,
    `Ambrose wrote hymns in that meter, four lines to the stanza, and many English hymns descend from it in lines of eight syllables, the beat on every second one.`,
    `Bede counts the feet singly and so calls the same line an iambic tetrameter.`,
    `The hymns are measured by quantity, yet the word accent usually falls on the beat, which is where Latin verse begins to move from quantity toward accent.`,
    `After long and short vowels ceased to be distinguished in spoken Latin, verse came to count syllables and accents instead of quantity.`,
    `Bede sets meter, arrangement by the rules of quantity, apart from rhythm (<i>rhythmus</i>), arrangement by the number of syllables as the ear judges it.`,
    `Rhythm can stand without meter, but meter cannot stand without rhythm, and later verse still measures, by accent and by number of syllables.`,
    `English verse measures by stress, not by quantity, because English length follows the stress and does not by itself distinguish words.`,
    `An English iamb is unstressed then stressed, a trochee stressed then unstressed, an anapest two unstressed and a stressed, and a dactyl a stressed and two unstressed.`,
    `A line takes its name from the foot and from the number of feet: four are a tetrameter, five a pentameter, and six a hexameter.`,
    `The English iamb and the Latin iamb share their name and their order, but one is unstressed and stressed, whereas the other is short and long, and a stressed English syllable may be short in time.`,
    `The ordinary line of English verse is the iambic pentameter, five iambs, ten syllables with the stress on the even syllables.`,
    `Unrhymed iambic pentameter is blank verse, the line of Shakespeare’s plays and of Milton’s <i>Paradise Lost</i>.`,
    `A line seldom keeps the pattern without change, and the usual change is a trochee for the first iamb, heard against the pattern that is expected.`,
    `An English line is measured by the syllables the words themselves stress, and by the pattern that fits most of those stresses.`,
    `Greek and Latin measure by quantity, English and German by stress, and Opitz required the German beat to fall on the syllable the word itself stresses.`,
    `French measures chiefly by the number of syllables, and its classical line, the alexandrine, has twelve, with a pause after the sixth.`,
    `The measure follows what each language distinguishes in its own sound, so a Latin meter cannot be copied into English by putting a stress in place of each long syllable.`
  ],
  panels: [

{ id: 'what-meter',
  title: 'Verse and meter',
  body: `<p>When we recite “Mary had a little lamb” or sing a hymn, we hear a beat that returns in the same pattern in every line, and each line ends when the pattern is complete. We have seen that Latin syllables are long or short and that English syllables are stressed or unstressed. <strong>Verse</strong> is speech arranged in lines, each of which follows a fixed pattern of such syllables, and the pattern is called the <strong>meter</strong> (Greek <i>metron</i>, “measure”). Diomedes defines meter, in substance, as an arrangement of feet in a fixed order, limited to a definite length (<i>Ars grammatica</i> III).</p>
<p>But why should the pattern of a line be called a measure? A measure is taken of something that has extent, and spoken syllables have their extent in time: each takes some time to say, and a line lasts from its first syllable to its last. St. Augustine observes that nothing moves well unless it keeps a measure, and that whatever moves in rhythm keeps “the measures of time-units” (<i>De musica</i> I.2.3, I.3.4). Verse, therefore, is speech measured in time; its meter orders the syllables so that the same pattern, of long and short syllables or of stressed and unstressed ones, returns in every line.</p>
<p>Prose has rhythm too, but its rhythm is not fixed in a repeated pattern. So the same words may be prose or verse according to whether their syllables are arranged by a rule of measure. The grammarian studies meter because the poets were the first authors that the student read, and they could not be read aloud correctly, or understood fully, without knowing how their lines were measured.</p>
<p>In this deck we give a short history and overview of the meters of the classical tradition: how the Greeks and Romans measured verse in time, and how English and the modern languages took up those measures in their own ways. Other traditions measure verse in other ways. Classical Sanskrit verse, like Greek and Latin, is measured by long and short syllables, and its commonest meter, the <i>śloka</i> of the <i>Mahābhārata</i> and the <i>Rāmāyaṇa</i>, is a couplet of two lines of sixteen syllables each. Classical Chinese verse counts syllables instead, five or seven to the line, and sets syllables of level tone against syllables of changing tone in fixed patterns, so that pitch does the work that length does in Latin. In this course, however, we follow the classical tradition of Greece and Rome and its descendants in English.</p>`,
  src: `Diomedes, <i>Ars grammatica</i> III, in paraphrase; Augustine, <i>De musica</i> I.2.3 and I.3.4 (Latin and the Aquinas Institute English at augustinus.cc).` },

{ id: 'feet',
  title: 'The foot',
  body: `<p>When we read aloud “Twinkle, twinkle, little star,” the beat falls on every other syllable, so the line divides into equal groups of a strong syllable and a weak one: TWIN-kle | TWIN-kle | LIT-tle | STAR. A <strong>foot</strong> (Latin <i>pes</i>) is the least group of syllables that is repeated in a meter. In Latin and Greek verse the feet are made of long and short syllables. In the marks used for scansion, – stands for a long syllable and ∪ for a short one. The common feet are these:</p>
<p><strong>dactyl</strong> (– ∪ ∪), a long syllable and two short ones, as in Latin <i>Rōmulus</i>;<br><strong>spondee</strong> (– –), two long syllables, as in <i>Rōmā</i> (“from Rome”);<br><strong>trochee</strong> (– ∪), a long and a short, as in <i>Rōma</i>;<br><strong>iamb</strong> (∪ –), a short and a long, as in <i>legō</i> (“I read”);<br><strong>anapest</strong> (∪ ∪ –), two short syllables and a long, as in <i>bonitās</i> (“goodness”).</p>
<p>The names of the feet are Greek, and the doctrine of the feet, like the doctrine of accent, came to the Latin grammarians from the Greeks. We will see that English uses the same names for feet made of stressed and unstressed syllables.</p>`,
  src: `Diomedes, <i>Ars grammatica</i> III; Allen and Greenough, <i>New Latin Grammar</i> § 609, in paraphrase.` },

{ id: 'elision',
  title: 'Elision',
  body: `<p>English poets sometimes leave out of print a vowel that is not counted, and mark the gap with an apostrophe. Shakespeare begins a sonnet “Th’ expense of spirit in a waste of shame” (Sonnet 129), where “the” loses its vowel before “expense,” so that the line keeps its ten syllables. Latin verse does the same thing by rule, although there the vowel is still written, and before a line can be measured we must know which syllables count. When a word ends in a vowel, or in a vowel followed by <i>m</i>, and the next word begins with a vowel or with <i>h</i>, the final syllable of the first word is not counted in the meter. This is called <strong>elision</strong> (Latin <i>elisio</i>, “striking out”).</p>
<p>So in Virgil’s <i>multum ille et terris</i> (<i>Aeneid</i> I.3), the <i>-um</i> of <i>multum</i> and the <i>-e</i> of <i>ille</i> are elided, and the words are measured as <i>mult’ ill’ et terrīs</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 612; Shakespeare, Sonnet 129.1; Virgil, <i>Aeneid</i> I.3.` },

{ id: 'hexameter',
  title: 'The dactylic hexameter',
  body: `<p>When we read aloud the first line of Longfellow’s <i>Evangeline</i>, “This is the forest primeval. The murmuring pines and the hemlocks,” we hear six beats, and most of them are followed by two weaker syllables: THIS is the | FOR-est pri | ME-val. The | MUR-mur-ing | PINES and the | HEM-locks. Longfellow made the line in imitation of the ancient epic line. The <strong>dactylic hexameter</strong> is the meter of Greek and Latin epic, the meter of Homer, Virgil, and Ovid’s <i>Metamorphoses</i>. It is a line of six feet. Each of the first four feet may be a dactyl (one long syllable and two short, – ∪ ∪) or a spondee (two long syllables, – –); the fifth foot is nearly always a dactyl; and the sixth foot has two syllables, the last of which may be long or short. So the close of the line, – ∪ ∪ | – –, is the most fixed part of it, and in measuring a line we begin from there.</p>
<p>The first line of the <i>Aeneid</i> is <i>Arma virumque cano, Troiae qui primus ab oris</i>, “Arms and the man I sing, who first made way, / predestined exile, from the Trojan shore.” With its long vowels marked, it is measured <i>Ar-ma vi | rum-que ca | nō Trō | iae quī | prī-mus ab | ō-rīs</i>: dactyl, dactyl, spondee, spondee, dactyl, and a final foot of two syllables. The first syllable of <i>Arma</i> is long by position, and the <i>a</i> of <i>ab</i> is short because it is followed by only one consonant before the next vowel.</p>`,
  src: `Virgil, <i>Aeneid</i> I.1 (trans. T. C. Williams); Allen and Greenough, <i>New Latin Grammar</i> § 615.`,
  qp: { id: 'q-hexameter', variants: [
    { prompt: `With its long vowels marked, <i>Tantae mōlis erat Rōmānam condere gentem</i> (word for word, “of so great labor was it to found the Roman race,” <i>Aeneid</i> I.33) is measured <i>Tan-tae | mō-lis e | rat Rō | mā-nam | con-de-re | gen-tem</i>. Which of the first four feet are spondees?`,
      options: [`The second and fourth`, `The first, third, and fourth`, `All four`, `The first, second, and third`],
      answer: 1,
      explain: `<i>Tan-tae</i>, <i>rat Rō</i>, and <i>mā-nam</i> are each two long syllables, so the first, third, and fourth feet are spondees; <i>mō-lis e</i> is a long and two shorts, a dactyl. The <i>a</i> of <i>rat</i> is short, but the syllable is long by position, because <i>t</i> and <i>R</i> follow it.` },
    { prompt: `Why do we begin measuring a hexameter from the end of the line?`,
      options: [`Because the first foot is always a spondee`, `Because the accent of the line falls on its last word`, `Because the fifth and sixth feet rarely vary`, `Because the last word of the line is always the longest`],
      answer: 2,
      explain: `Each of the first four feet may be a dactyl or a spondee, but the fifth foot is nearly always a dactyl and the sixth has two syllables. So the close of the line, – ∪ ∪ | – –, is the most fixed part, and the measuring of the rest can start from it.` },
    { prompt: `With its long vowels marked, <i>Tītyre, tū patulae recubāns sub tegmine fāgī</i> (word for word, “Tityrus, you, lying back under the cover of a spreading beech,” <i>Eclogues</i> I.1) is measured <i>Tī-ty-re | tū pa-tu | lae re-cu | bāns sub | teg-mi-ne | fā-gī</i>. Which of the first four feet is a spondee?`,
      options: [`The fourth, <i>bāns sub</i>`, `The first, <i>Tī-ty-re</i>`, `The third, because <i>lae</i> is a diphthong`, `None; all four are dactyls`],
      answer: 0,
      explain: `<i>Bāns</i> is long by nature, and <i>sub</i>, though its <i>u</i> is short, is long by position, because <i>b</i> and the <i>t</i> of <i>tegmine</i> follow it. So the fourth foot is a spondee. The first three feet are dactyls: <i>lae</i> is long, but the two syllables after it, <i>re-cu</i>, are short.` }
  ]}},

{ id: 'caesura',
  title: 'The caesura',
  body: `<p>When we read aloud Macbeth’s line “Tomorrow, and tomorrow, and tomorrow” (<i>Macbeth</i> V.5.19), we pause after each “tomorrow,” although the beat runs on without a break: to-MOR | row, AND | to-MOR | row, AND | to-MOR-row. The stress on “and” is light, and the line ends with one extra unstressed syllable. Each pause falls between “row” and “and,” which belong to the same foot. A <strong>caesura</strong> (Latin, “cutting”) is a break between words that falls within a foot, not at the end of one. In the hexameter the principal caesura usually falls in the third foot, after its first syllable. In the first line of Ovid’s <i>Metamorphoses</i> it falls after <i>animus</i>, as the mark ‖ shows here: <i>In nova fert animus ‖ mutatas dicere formas</i>, “My mind is bent to tell of bodies changed into new forms” (<i>Metamorphoses</i> I.1). It is measured <i>In no-va | fert a-ni | mus ‖ mū | tā-tās | dī-ce-re | for-mās</i>, so the break falls after the first syllable of the third foot.</p>
<p>Why should it matter where a word ends? Imagine a line of poetry in which every word ended exactly where a foot ends. Each foot would stand alone, almost, and the line would fall into equal pieces, beat, beat, beat, like a list counted off on the fingers. Perhaps that effect might occasionally be something the poet seeks, but that would be quite rare, since the goal of a poem is that the words and phrases form a unity of some kind. When a word runs across the end of a foot, as <i>animus</i> runs from the second foot into the third, the word ties the two feet together, and the line holds as one whole. The caesura is the strongest of these ties. Near the middle of the line, where a reader naturally takes breath, the word ends but the foot does not, so the voice pauses while the beat carries on into the second half of the line.</p>
<p>So a line of verse has two kinds of division at once: the feet divide it by the meter, and the words divide it by the sense. A skillful poet lets the two fall at different places, so as to keep the line together as a rhythmic whole, and to this end must place the caesurae well. Punctuation, as we noted earlier, marks the pauses of the sense; the caesura is the place within a foot where such a pause, or at least a break between words, falls inside the measure. English verse has no fixed caesura, and in speaking of it the word is used more loosely for any strong pause within the line, such as the pauses after each “tomorrow” in Macbeth’s line.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 611, in paraphrase; Ovid, <i>Metamorphoses</i> I.1 (trans. F. J. Miller, Loeb, 1916).` },

{ id: 'homer',
  title: 'Quantity in Greek verse',
  body: `<p>Greek verse is measured by quantity in the same way as Latin. The first line of the <i>Iliad</i> is a hexameter: μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος (<i>mēnin aeide thea Pēlēïadeō Achilēos</i>), “The wrath sing, goddess, of Peleus’ son, Achilles” (<i>Iliad</i> I.1). It is measured <i>mē-nin a | ei-de the | a Pē | lē-i-a | deō A-chi | lē-os</i>, with the two vowels of <i>deō</i> pronounced as one syllable.</p>
<p>We saw that the Greek accent was a matter of pitch. The written accents of this line, for example on μῆνιν and ἄειδε, have nothing to do with its meter; the meter counts only long and short syllables. So in Greek the accent and the meter are independent of each other, and a reader must attend to both.</p>`,
  src: `Homer, <i>Iliad</i> I.1 (trans. A. T. Murray); Smyth, <i>Greek Grammar</i>, on versification.` },

{ id: 'elegiac',
  title: 'The elegiac couplet',
  body: `<p>Coleridge, translating a couplet of Schiller’s, described this meter in it: “In the hexameter rises the fountain’s silvery column; / In the pentameter aye falling in melody back.” Read aloud, the first line runs on to its full length, and the second is shorter and comes to rest twice, after “pentameter aye” and at the end. The <strong>elegiac couplet</strong> is a hexameter followed by a shorter line called the <strong>pentameter</strong>. The pentameter has two halves of two and a half feet each, with a break between them: – ∪ ∪ | – ∪ ∪ | – ‖ – ∪ ∪ | – ∪ ∪ | –. In the first half a spondee (two long syllables, – –) may take the place of either dactyl (one long syllable and two short, – ∪ ∪), but the second half keeps its dactyls.</p>
<p>Ovid wrote his love poems in this meter, and in the first poem of the <i>Amores</i> he explains it by a story. He meant to write of war in hexameters, he says, but Cupid stole a foot from every second line: “Six feet for ev’ry verse the muse design’d, / But Cupid laughing, when he saw my mind, / From ev’ry second verse a foot purloin’d” (<i>Amores</i> I.1.3–4). The second line of that poem, <i>Edere, materia conveniente modis</i>, is a pentameter; with its long vowels marked, it is measured <i>ē-de-re | mā-te-ri | ā ‖ con-ve-ni | en-te mo | dīs</i>.</p>`,
  src: `Ovid, <i>Amores</i> I.1.1–4 (trans. Dryden); Allen and Greenough, <i>New Latin Grammar</i> § 616.` },

{ id: 'lyric',
  title: 'Two lyric meters: the hendecasyllable and the sapphic',
  body: `<p>Lyric verse uses many meters, of which two are met most often in a first reading. The <strong>hendecasyllable</strong> (Greek, “of eleven syllables”) is a line of eleven syllables in a fixed pattern: – – – ∪ ∪ – ∪ – ∪ – –. Catullus invites Fabullus to bring the dinner in such a line, <i>si tecum attuleris bonam atque magnam</i> (“if you bring with you a good and great dinner”; <i>Carmina</i> 13.3). The noun, <i>cenam</i>, stands in the next line. The final syllable of <i>tecum</i> is elided before <i>attuleris</i>, and the final syllable of <i>bonam</i> before <i>atque</i>, so the line counts eleven syllables, not thirteen; they are measured <i>sī-tē-c(um) at-tu-le-rīs bo-n(am) at-que mā-gnam</i>.</p>
<p>The <strong>sapphic stanza</strong>, named for the Greek poet Sappho, has three lines of eleven syllables, – ∪ – – – ∪ ∪ – ∪ – –, and a short fourth line, – ∪ ∪ – –. Horace uses the stanza when he refuses Persian luxury: <i>Persicos odi, puer, adparatus</i>, “I hate Persian pomp, boy” (<i>Odes</i> I.38.1). With its long vowels marked, it is measured <i>Per-si-cōs ō-dī pu-er ad-pa-rā-tūs</i>.</p>`,
  src: `Catullus 13.3 (Merrill 1893, the Perseus text; the scansion checked against Hypotactic; the English is the course’s own). Horace, <i>Odes</i> I.38.1 (Shorey and Laing 1919, the Perseus text, which prints <i>adparatus</i>; the English is the course’s own). Allen and Greenough, <i>New Latin Grammar</i> §§ 620–628.` },

{ id: 'hymn',
  title: 'The iambic meter of the hymns',
  body: `<p>Many English hymns are sung in lines of eight syllables with the beat on every second syllable, in stanzas of four lines, as in the doxology “Praise God, from whom all blessings flow” (praise GOD | from WHOM | all BLESS | ings FLOW). This form descends from the Latin hymns of the early Church. An <strong>iambic dimeter</strong> is a line of four iambs, measured in pairs, in which the first and third feet may have a long syllable in place of the short one: ∪ – ∪ – ∪ – ∪ –, often – – ∪ – – – ∪ –. St. Ambrose, bishop of Milan in the fourth century, wrote his hymns in this line, in stanzas of four lines, and the Latin hymns of the Church kept the form for centuries. His morning hymn, which addresses God as the eternal maker of all things, begins <i>Aeterne rerum conditor</i>; with its long vowels marked, it is measured <i>ae-ter-ne rē-rum con-di-tor</i>, – – ∪ – – – ∪ –. Bede names this hymn among the Ambrosian hymns written in this meter, which he calls the iambic tetrameter because he counts single feet rather than pairs (<i>De arte metrica</i> 21).</p>
<p>Ambrose’s hymns are measured by quantity, but they were sung by congregations, and in his lines the word accent usually falls on the beat of the meter. So these hymns stand at the point where Latin verse begins to move from a meter of quantity toward a meter of accent.</p>`,
  src: `Ambrose, <i>Hymni</i> 1.1; Bede, <i>De arte metrica</i> 21 (the Latin checked against the text of Bede); Allen and Greenough, <i>New Latin Grammar</i>.` },

{ id: 'bede-rhythm',
  title: 'Meter and rhythm in Bede',
  body: `<p>By the early Middle Ages the distinction of long and short vowels had disappeared from spoken Latin, and new kinds of verse appeared that counted syllables and accents instead of quantity. Bede, in his <i>De arte metrica</i> (written about 700), distinguishes the two. <strong>Meter</strong>, he says in substance, is an arrangement of words by the rules of quantity; <strong>rhythm</strong> (<i>rhythmus</i>) is an arrangement of words that is not measured by quantity but by the number of syllables, judged by the ear, as in the songs of the popular poets (<i>De arte metrica</i> 24).</p>
<p>Bede adds that rhythm can exist without meter, but meter not without rhythm. So the later accentual verse of the Latin hymns, and the verse of the modern European languages, does not abandon the measure of verse; it measures by accent and by number of syllables instead of by quantity.</p>`,
  src: `Bede, <i>De arte metrica</i> 24, in paraphrase (checked against the Latin text).` },

{ id: 'english-feet',
  title: 'English feet',
  body: `<p>English verse is measured by stress, not by quantity. English syllables do differ in length, but their length follows the stress and does not distinguish words, so it is not the measure of the line. An English foot is a group of one stressed syllable with one or two unstressed ones, and English uses the Greek names of the feet for these groups:</p>
<p><strong>iamb</strong>, unstressed and stressed, as in “be-HOLD”;<br><strong>trochee</strong>, stressed and unstressed, as in “TI-ger”;<br><strong>anapest</strong>, two unstressed and a stressed, as in “in the NIGHT”;<br><strong>dactyl</strong>, a stressed and two unstressed, as in “TEN-der-ly.”</p>
<p>A line is named by its foot and by the number of its feet: a line of four feet is a tetrameter, of five a pentameter, of six a hexameter. So the English iamb and the Latin iamb have the same name and the same order, but the English iamb is unstressed and stressed, whereas the Latin iamb is short and long. A stressed English syllable may be short in duration, and a Latin long syllable need not bear the accent.</p>`,
  src: `Standard handbooks of English versification, in paraphrase.`,
  qp: { id: 'q-feet', variants: [
    { prompt: `The word “away” is pronounced a-WAY. What foot is it?`,
      options: [`A trochee`, `An iamb`, `A dactyl`, `An anapest`],
      answer: 1,
      explain: `“Away” has an unstressed syllable followed by a stressed one, so it is an iamb, like “be-HOLD.” A trochee is the reverse, stressed and unstressed, as in “TI-ger.”` },
    { prompt: `The word “merrily” is pronounced MER-ri-ly. What foot is it?`,
      options: [`An anapest`, `An iamb`, `A trochee`, `A dactyl`],
      answer: 3,
      explain: `“Merrily” has a stressed syllable followed by two unstressed ones, so it is a dactyl, like “MUR-mur-ing.” An anapest is the reverse order, two unstressed syllables and a stressed one, as in “in the NIGHT.”` },
    { prompt: `The English iamb and the Latin iamb have the same name. How do they differ?`,
      options: [`English: stressed, unstressed; Latin: short, long`, `They do not differ: both are short, long`, `English: unstressed, stressed; Latin: short, long`, `They do not differ: both are unstressed, stressed`],
      answer: 2,
      explain: `English verse is measured by stress, so the English iamb is an unstressed and a stressed syllable, as in “be-HOLD.” Latin verse is measured by quantity, so the Latin iamb is a short and a long syllable, as in <i>amō</i>. The order is the same, but the measure is different: a stressed English syllable may be short, and a long Latin syllable need not bear the accent.` }
  ]}},

{ id: 'pentameter',
  title: 'The iambic pentameter and its variations',
  body: `<p>The most common line of English verse is the <strong>iambic pentameter</strong>, a line of five iambs, which has ten syllables with the stress on the even ones. Shakespeare’s sonnet begins: “Shall I compare thee to a summer’s day?” It is measured “shall I | com-PARE | thee TO | a SUM | mer’s DAY,” with a light stress on “to.” Unrhymed iambic pentameter is called <strong>blank verse</strong>; it is the line of Shakespeare’s plays and of Milton’s <i>Paradise Lost</i>.</p>
<p>Few lines are perfectly regular. The most common variation is a trochee in place of the first iamb, as at the beginning of John Donne’s sonnet “Death, be not proud,” where the first syllable is stressed. The meter is the pattern that the ear expects, and the variations are heard against that pattern. So a reader measures an English line by marking the syllables that the words themselves stress, and then finding the pattern that fits most of the line.</p>`,
  src: `Shakespeare, Sonnet 18.1; Donne, Holy Sonnet “Death, be not proud.”` },

{ id: 'three-principles',
  title: 'Quantity, stress, and number of syllables',
  body: `<p>We have now seen that verse can be measured in different ways according to the language. Greek and Latin verse is measured by <strong>quantity</strong>, the pattern of long and short syllables. English verse is measured by <strong>stress</strong> as well as by the number of syllables. German verse is measured in the same way as English; Martin Opitz, in his <i>Buch von der deutschen Poeterey</i> (1624), laid down that the beat of a German line must fall on the syllable that the word itself stresses. French verse is measured chiefly by the <strong>number of syllables</strong>: the classical French line, the alexandrine, has twelve syllables, with a pause after the sixth, as in the first line of Racine’s <i>Phèdre</i>, in which Hippolytus tells Theramenes that he has decided to leave: <i>Le dessein en est pris, je pars, cher Théramène</i> (<i>Phèdre</i> I.1.1).</p>
<p>So the measure of verse depends on the sound of the language. A language in which long and short syllables are distinct in their own right, as in Latin, can measure by quantity; a language with a strong stress, such as English or German, measures by stress; and a language with a weak stress, such as French, counts syllables. This is the reason that a Latin meter cannot simply be copied into English by putting stresses where the Latin has long syllables.</p>`,
  src: `Opitz, <i>Buch von der deutschen Poeterey</i> (1624), ch. 7, in paraphrase; Racine, <i>Phèdre</i> I.1.1 (checked against the text of the first edition, 1677, as encoded by FreDraCor).`,
  qp: { id: 'q-measure', variants: [
    { prompt: `A line of Virgil’s <i>Aeneid</i> is measured by what?`,
      options: [`Stress`, `Rhyme`, `Quantity`, `The number of words`],
      answer: 2,
      explain: `Greek and Latin verse is measured by quantity, the pattern of long and short syllables, not by stress or rhyme. A hexameter is six feet of dactyls (each one long syllable and two short, – ∪ ∪) and spondees (each two long syllables, – –), whatever the stresses of its words.` },
    { prompt: `Lomonosov laid down, in 1739, that Russian verse must be built of feet of stressed and unstressed syllables. So Russian verse is measured by what?`,
      options: [`By stress, as English verse is`, `By quantity, as Latin verse is`, `By the number of syllables alone, as French verse is`, `By rhyme alone`],
      answer: 0,
      explain: `Russian, like English and German, has a strong stress, so its verse is measured by stress as well as by the number of syllables. Lomonosov’s rule requires that the beat of the meter fall on the syllables that the words themselves stress.` },
    { prompt: `Paul Valéry’s “Le Cimetière marin” is written in lines of ten syllables. Why does French verse count syllables rather than stresses?`,
      options: [`Because French poets imitated Latin quantity`, `Because French lines must rhyme`, `Because French words have no syllables of different length`, `Because French has a weak stress`],
      answer: 3,
      explain: `The measure of verse depends on the sound of the language. A language with a strong stress, such as English or German, measures by stress; a language with a weak stress, such as French, counts syllables instead. Rhyme is a separate ornament and does not measure the line.` }
  ]}}

  ]
};
