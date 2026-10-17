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
  sources: `Diomedes, <i>Ars grammatica</i> III; Bede, <i>De arte metrica</i>; Allen and Greenough, <i>New Latin Grammar</i>, on prosody.`,
  panels: [

{ id: 'what-meter',
  title: 'Verse and meter',
  body: `<p>We have seen that Latin syllables are long or short and that English syllables are stressed or unstressed. <strong>Verse</strong> is speech arranged in lines, each of which follows a fixed pattern of such syllables, and the pattern is called the <strong>meter</strong> (Greek <i>metron</i>, “measure”). Diomedes defines meter, in substance, as an arrangement of feet in a fixed order, limited to a definite length (<i>Ars grammatica</i> III, in paraphrase).</p>
<p>Prose has rhythm too, but its rhythm is not fixed in a repeated pattern. So the same words may be prose or verse according to whether their syllables are arranged by a rule of measure. The grammarian studies meter because the poets were the first texts that the student read, and they could not be read aloud correctly, or understood fully, without knowing how their lines were measured.</p>`,
  src: `Diomedes, <i>Ars grammatica</i> III, in paraphrase.` },

{ id: 'feet',
  title: 'The foot',
  body: `<p>A <strong>foot</strong> (Latin <i>pes</i>) is the least group of syllables that is repeated in a meter. In Latin and Greek verse the feet are made of long and short syllables. In the marks used for scansion, – stands for a long syllable and ∪ for a short one. The common feet are these:<br><strong>dactyl</strong> (– ∪ ∪), a long syllable and two short ones, as in Latin <i>Rōmulus</i>;<br><strong>spondee</strong> (– –), two long syllables, as in <i>Rōmā</i> (“from Rome”);<br><strong>trochee</strong> (– ∪), a long and a short, as in <i>Rōma</i>;<br><strong>iamb</strong> (∪ –), a short and a long, as in <i>amō</i> (“I love”);<br><strong>anapest</strong> (∪ ∪ –), two short syllables and a long, as in <i>dominōs</i> (“masters,” accusative).</p>
<p>The names of the feet are Greek, and the doctrine of the feet, like the doctrine of accent, came to the Latin grammarians from the Greeks. We will see that English uses the same names for feet made of stressed and unstressed syllables.</p>`,
  src: `Diomedes, <i>Ars grammatica</i> III; Allen and Greenough, <i>New Latin Grammar</i> § 609, in paraphrase.` },

{ id: 'elision',
  title: 'Elision',
  body: `<p>Before a line can be measured, we must know which syllables count. When a word ends in a vowel, or in a vowel followed by <i>m</i>, and the next word begins with a vowel or with <i>h</i>, the final syllable of the first word is not counted in the meter. This is called <strong>elision</strong> (Latin <i>elisio</i>, “striking out”).</p>
<p>So in Catullus’s line <i>Vivamus, mea Lesbia, atque amemus</i> (“Let us live, my Lesbia, and let us love”; <i>Carmina</i> 5.1), the final <i>a</i> of <i>Lesbia</i> is elided before <i>atque</i>, and the final <i>e</i> of <i>atque</i> before <i>amemus</i>. The line therefore counts eleven syllables, not thirteen. In Virgil’s <i>multum ille et terris</i> (<i>Aeneid</i> I.3), the <i>-um</i> of <i>multum</i> and the <i>-e</i> of <i>ille</i> are elided, and the words are measured as <i>mult’ ill’ et terrīs</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 612; Catullus 5.1 (trans. Smithers); Virgil, <i>Aeneid</i> I.3.` },

{ id: 'hexameter',
  title: 'The dactylic hexameter',
  body: `<p>The <strong>dactylic hexameter</strong> is the meter of Greek and Latin epic, the meter of Homer, Virgil, and Ovid’s <i>Metamorphoses</i>. It is a line of six feet. Each of the first four feet may be a dactyl or a spondee; the fifth foot is nearly always a dactyl; and the sixth foot has two syllables, the last of which may be long or short. So the close of the line, – ∪ ∪ | – –, is the most fixed part of it, and in measuring a line we begin from there.</p>
<p>The first line of the <i>Aeneid</i> is <i>Arma virumque cano, Troiae qui primus ab oris</i>, “Arms and the man I sing, who first made way, / predestined exile, from the Trojan shore.” With its long vowels marked, it is measured <i>Ar-ma vi | rum-que ca | nō Trō | iae quī | prī-mus ab | ō-rīs</i>: dactyl, dactyl, spondee, spondee, dactyl, and a final foot of two syllables. The first syllable of <i>Arma</i> is long by position, and the <i>a</i> of <i>ab</i> is short because it is followed by only one consonant before the next vowel.</p>`,
  src: `Virgil, <i>Aeneid</i> I.1 (trans. T. C. Williams); Allen and Greenough, <i>New Latin Grammar</i> § 615.`,
  qpTodo: `Measuring a hexameter: given a line with its long vowels marked, which feet are dactyls and which spondees, and why the fifth foot is a dactyl.` },

{ id: 'caesura',
  title: 'The caesura',
  body: `<p>A <strong>caesura</strong> (Latin, “cutting”) is a break between words that falls within a foot, not at the end of one. In the hexameter the principal caesura usually falls in the third foot, after its first syllable. In the first line of the <i>Aeneid</i> it falls after <i>cano</i>, as the mark ‖ shows here: <i>Arma virumque cano, ‖ Troiae qui primus ab oris</i>. Here the caesura coincides with a pause in the sense, which a modern editor marks with a comma.</p>
<p>The caesura shows that a line of verse has two kinds of division at once. The feet divide it by the meter, and the words divide it by the sense, and a skillful poet lets the two divisions fall at different places, so that the line does not break into separate pieces at the end of every foot. We have seen that punctuation marks the pauses of the sense; the caesura is the place where a pause of the sense, or at least a break between words, falls within the measure.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 611, in paraphrase.` },

{ id: 'homer',
  title: 'Quantity in Greek verse',
  body: `<p>Greek verse is measured by quantity in the same way as Latin. The first line of the <i>Iliad</i> is a hexameter: μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος (<i>mēnin aeide thea Pēlēïadeō Achilēos</i>), “The wrath sing, goddess, of Peleus’ son, Achilles” (<i>Iliad</i> I.1). It is measured <i>mē-nin a | ei-de the | a Pē | lē-i-a | deō A-chi | lē-os</i>, with the two vowels of <i>deō</i> pronounced as one syllable.</p>
<p>We saw that the Greek accent was a matter of pitch. The written accents of this line, for example on μῆνιν and ἄειδε, have nothing to do with its meter; the meter counts only long and short syllables. So in Greek the accent and the meter are independent of each other, and a reader must attend to both.</p>`,
  src: `Homer, <i>Iliad</i> I.1 (trans. A. T. Murray); Smyth, <i>Greek Grammar</i>, on versification.` },

{ id: 'elegiac',
  title: 'The elegiac couplet',
  body: `<p>The <strong>elegiac couplet</strong> is a hexameter followed by a shorter line called the <strong>pentameter</strong>. The pentameter has two halves of two and a half feet each, with a break between them: – ∪ ∪ | – ∪ ∪ | – ‖ – ∪ ∪ | – ∪ ∪ | –. In the first half a spondee may take the place of either dactyl, but the second half keeps its dactyls.</p>
<p>Ovid wrote his love poems in this meter, and in the first poem of the <i>Amores</i> he explains it by a story. He meant to write of war in hexameters, he says, but Cupid stole a foot from every second line: “Six feet for ev’ry verse the muse design’d, / But Cupid laughing, when he saw my mind, / From ev’ry second verse a foot purloin’d” (<i>Amores</i> I.1.3–4). The second line of that poem, <i>Edere, materia conveniente modis</i>, is a pentameter; with its long vowels marked, it is measured <i>ē-de-re | mā-te-ri | ā ‖ con-ve-ni | en-te mo | dīs</i>.</p>`,
  src: `Ovid, <i>Amores</i> I.1.1–4 (trans. Dryden); Allen and Greenough, <i>New Latin Grammar</i> § 616.` },

{ id: 'lyric',
  title: 'Two lyric meters: the hendecasyllable and the sapphic',
  body: `<p>Lyric verse uses many meters, of which two are met most often in a first reading. The <strong>hendecasyllable</strong> (Greek, “of eleven syllables”) is a line of eleven syllables in a fixed pattern: – – – ∪ ∪ – ∪ – ∪ – –. We have seen that Catullus’s <i>Vivamus, mea Lesbia, atque amemus</i> counts eleven syllables after elision; they are measured <i>vī-vā-mus me-a Les-bi(a) at-qu(e) a-mē-mus</i>.</p>
<p>The <strong>sapphic stanza</strong>, named for the Greek poet Sappho, has three lines of eleven syllables, – ∪ – – – ∪ ∪ – ∪ – –, and a short fourth line, – ∪ ∪ – –. Catullus translated one of Sappho’s poems into Latin in her own meter: <i>Ille mi par esse deo videtur</i>, “He seems to me to be equal to a god” (<i>Carmina</i> 51.1). With its long vowels marked, it is measured <i>il-le mī par es-se de-ō vi-dē-tur</i>. Horace uses the stanza in many of his odes.</p>`,
  src: `Catullus 5.1 and 51.1 (trans. Smithers; the Latin checked against the Perseus text); Allen and Greenough, <i>New Latin Grammar</i> §§ 620–628.` },

{ id: 'hymn',
  title: 'The iambic meter of the hymns',
  body: `<p>An <strong>iambic dimeter</strong> is a line of four iambs, measured in pairs, in which the first and third feet may have a long syllable in place of the short one: ∪ – ∪ – ∪ – ∪ –, often – – ∪ – – – ∪ –. St. Ambrose, bishop of Milan in the fourth century, wrote his hymns in this line, in stanzas of four lines, and the Latin hymns of the Church kept the form for centuries. His morning hymn, which addresses God as the eternal maker of all things, begins <i>Aeterne rerum conditor</i>; with its long vowels marked, it is measured <i>ae-ter-ne rē-rum con-di-tor</i>, – – ∪ – – – ∪ –. Bede names this hymn among the Ambrosian hymns written in this meter, which he calls the iambic tetrameter because he counts single feet rather than pairs (<i>De arte metrica</i> 21).</p>
<p>Ambrose’s hymns are measured by quantity, but they were sung by congregations, and in his lines the word accent usually falls on the beat of the meter. So these hymns stand at the point where Latin verse begins to move from a meter of quantity toward a meter of accent.</p>`,
  src: `Ambrose, <i>Hymni</i> 1.1; Bede, <i>De arte metrica</i> 21 (the Latin checked against the text of Bede); Allen and Greenough, <i>New Latin Grammar</i>.` },

{ id: 'bede-rhythm',
  title: 'Meter and rhythm in Bede',
  body: `<p>By the early Middle Ages the distinction of long and short vowels had disappeared from spoken Latin, and new kinds of verse appeared that counted syllables and accents instead of quantity. Bede, in his <i>De arte metrica</i> (written about 700), distinguishes the two. <strong>Meter</strong>, he says in substance, is an arrangement of words by the rules of quantity; <strong>rhythm</strong> (<i>rhythmus</i>) is an arrangement of words that is not measured by quantity but by the number of syllables, judged by the ear, as in the songs of the popular poets (<i>De arte metrica</i> 24, in paraphrase).</p>
<p>Bede adds that rhythm can exist without meter, but meter not without rhythm. So the later accentual verse of the Latin hymns, and the verse of the modern European languages, does not abandon the measure of verse; it measures by accent and by number of syllables instead of by quantity.</p>`,
  src: `Bede, <i>De arte metrica</i> 24, in paraphrase (checked against the Latin text).` },

{ id: 'english-feet',
  title: 'English feet',
  body: `<p>English verse is measured by stress, not by quantity. An English foot is a group of one stressed syllable with one or two unstressed ones, and English uses the Greek names of the feet for these groups:<br><strong>iamb</strong>, unstressed and stressed, as in “be-HOLD”;<br><strong>trochee</strong>, stressed and unstressed, as in “TI-ger”;<br><strong>anapest</strong>, two unstressed and a stressed, as in “in the NIGHT”;<br><strong>dactyl</strong>, a stressed and two unstressed, as in “MUR-mur-ing.”</p>
<p>A line is named by its foot and by the number of its feet: a line of four feet is a tetrameter, of five a pentameter, of six a hexameter. So the English iamb and the Latin iamb have the same name and the same order, but the English iamb is unstressed and stressed, while the Latin iamb is short and long. A stressed English syllable may be short in duration, and a Latin long syllable need not bear the accent.</p>`,
  src: `Standard handbooks of English versification, in paraphrase.`,
  qpTodo: `English feet: given an English word or phrase (“behold,” “tiger,” “in the night,” “murmuring”), name its foot, and say how the English iamb differs from the Latin iamb.` },

{ id: 'pentameter',
  title: 'The iambic pentameter and its variations',
  body: `<p>The most common line of English verse is the <strong>iambic pentameter</strong>, a line of five iambs, which has ten syllables with the stress on the even ones. Shakespeare’s sonnet begins: “Shall I compare thee to a summer’s day?” It is measured “shall I | com-PARE | thee TO | a SUM | mer’s DAY,” with a light stress on “to.” Unrhymed iambic pentameter is called <strong>blank verse</strong>; it is the line of Shakespeare’s plays and of Milton’s <i>Paradise Lost</i>.</p>
<p>Few lines are perfectly regular. The most common variation is a trochee in place of the first iamb, as at the beginning of John Donne’s sonnet “Death, be not proud,” where the first syllable is stressed. The meter is the pattern that the ear expects, and the variations are heard against that pattern. So a reader measures an English line by marking the syllables that the words themselves stress, and then finding the pattern that fits most of the line.</p>`,
  src: `Shakespeare, Sonnet 18.1; Donne, Holy Sonnet “Death, be not proud.”` },

{ id: 'three-principles',
  title: 'Quantity, stress, and number of syllables',
  body: `<p>We have now seen that verse can be measured in different ways according to the language. Greek and Latin verse is measured by <strong>quantity</strong>, the pattern of long and short syllables. English verse is measured by <strong>stress</strong> as well as by the number of syllables. German verse is measured in the same way as English; Martin Opitz, in his <i>Buch von der deutschen Poeterey</i> (1624), laid down that the beat of a German line must fall on the syllable that the word itself stresses. French verse is measured chiefly by the <strong>number of syllables</strong>: the classical French line, the alexandrine, has twelve syllables, with a pause after the sixth, as in the first line of Racine’s <i>Phèdre</i>, in which Hippolytus tells Theramenes that he has decided to leave: <i>Le dessein en est pris, je pars, cher Théramène</i> (<i>Phèdre</i> I.1.1).</p>
<p>So the measure of verse depends on the sound of the language. A language that distinguishes long and short syllables can measure by quantity; a language with a strong stress, such as English or German, measures by stress; and a language with a weak stress, such as French, counts syllables. This is the reason that a Latin meter cannot simply be copied into English by putting stresses where the Latin has long syllables.</p>`,
  src: `Opitz, <i>Buch von der deutschen Poeterey</i> (1624), ch. 7, in paraphrase; Racine, <i>Phèdre</i> I.1.1 (checked against the text of the first edition, 1677, as encoded by FreDraCor).`,
  qpTodo: `How verse is measured: given a line (Latin, English, German, or French), say whether its meter counts quantity, stress, or number of syllables, and why the language determines this.` }

  ]
};
