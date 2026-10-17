/* IV.3 Etymology [iv.etymology]
   Plan (ITEM-LIST.md): 10 panels, 3 question points (placeholders: qpTodo; to be written).
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"). Quintilian I.6.28 and I.6.32–34 checked against the Perseus
   text of Butler's translation. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iv.etymology'] = {
  id: 'iv.etymology',
  title: 'Etymology',
  sub: 'The origin of words, ancient and comparative, and the cautions it requires',
  sources: `Plato, <i>Cratylus</i>; Varro, <i>De lingua Latina</i> V–VII; Quintilian, <i>Institutio oratoria</i> I.6.28–38; Isidore, <i>Etymologiae</i> I.29; G. J. Vossius, <i>Etymologicon linguae Latinae</i> (1662); the <i>Oxford English Dictionary</i>.`,
  panels: [

{ id: 'what-etymology',
  title: 'What is etymology?',
  body: `<p>We have studied how words are formed from other words in the language as it is. <strong>Etymology</strong> asks a historical question: where did a word come from, and how did it come to have its form and meaning? The name is Greek, from <i>etymon</i> (“true”) and <i>logos</i> (“account”), so it means “an account of the true sense” of a word. Quintilian explains the term: “<i>Etymology</i> inquires into the origin of words, and was called <i>notation</i> by Cicero,” and he adds that a literal rendering of the Greek would be <i>ueriloquium</i>, “a form which even Cicero, its inventor, shrinks from using” (<i>Institutio oratoria</i> I.6.28).</p>
<p>We saw in the Preliminary section that etymology was one of the supports of reason among the criteria of correctness. Quintilian says that it “is sometimes of the utmost use, whenever the word under discussion needs interpretation” (I.6.28). So etymology serves the grammarian in explaining the authors, and it also serves the judgment of what is correct.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.28 (trans. Butler; checked against the Perseus text).` },

{ id: 'cratylus',
  title: 'Etymology in Plato’s Cratylus',
  body: `<p>The oldest extended discussion of etymology is Plato’s dialogue <i>Cratylus</i>, which we met in Section I on the question whether names are by nature or by convention. In the dialogue Socrates offers many etymologies, some of them plainly playful. He derives <i>anthrōpos</i> (“human being”) from a phrase meaning “one who looks up at what he has seen,” because, he says, man alone among the animals considers what he sees (<i>Cratylus</i> 399c, in paraphrase).</p>
<p>The etymology of <i>anthrōpos</i> is not accepted by modern scholars, and Socrates himself treats many of his derivations with irony. But the dialogue raises the question that every etymologist must answer: does the origin of a word show the true nature of the thing it names? Plato’s answer, at the end of the dialogue, is that we must learn about things from the things themselves, not from their names (<i>Cratylus</i> 439b, in paraphrase).</p>`,
  src: `Plato, <i>Cratylus</i> 399c, 439b (Jowett for reference), in paraphrase.` },

{ id: 'varro',
  title: 'Varro on the origin of Latin words',
  body: `<p>Varro, the most learned Roman of the first century BC, devoted three books of his <i>De lingua Latina</i> (V–VII) to the origin of Latin words: the names of places and things, the words for time, and the words of the poets. He distinguishes several levels at which a word’s origin can be explained, from the level that ordinary people can reach, through the level of the grammarian, to the level of the philosopher, and beyond these to a level he regards as hidden (<i>De lingua Latina</i> V.7–9, in paraphrase).</p>
<p>Varro also recognized that words change their form over time, so that the origin of a word is often hidden by later changes of letters and syllables. Many of his etymologies are wrong by modern standards, but his method, which collected the evidence of old forms, old writers, and related words, is the beginning of the historical study of Latin.</p>`,
  src: `Varro, <i>De lingua Latina</i> V.7–9 (Kent for reference), in paraphrase.` },

{ id: 'isidore',
  title: 'Isidore’s Etymologies',
  body: `<p>Isidore of Seville, writing in the seventh century, made etymology the method of a whole encyclopedia, the <i>Etymologiae</i>, which explains the things of every art and science by the origins of their names. He defines etymology as the origin of words, when the force of a verb or a noun is found by interpretation (<i>Etymologiae</i> I.29.1, in paraphrase), and he holds that when we know the origin of a word we understand its force more quickly.</p>
<p>Some of Isidore’s etymologies are still accepted. He derives <i>rēx</i> (“king”) from <i>regere</i> (“to rule”) and adds that one who does not correct does not rule, so that the name of king is kept by acting rightly and lost by doing wrong (<i>Etymologiae</i> IX.3.4, in paraphrase); the two words are in fact related. But many of his derivations are guesses from a likeness of sound, and Isidore himself says that not all words were imposed with a reason that can be found.</p>`,
  src: `Isidore, <i>Etymologiae</i> I.29.1–3, IX.3.4 (Barney et al. for reference), in paraphrase.`,
  qpTodo: `Ancient etymology: what did Isidore (or Varro, or Plato) seek in the origin of a word, and why is an etymology from a likeness of sound not reliable by itself.` },

{ id: 'quintilian-caution',
  title: 'Quintilian’s caution',
  body: `<p>Quintilian accepts many etymologies but warns against the excesses of those who pursue them. He writes of “enthusiasts for etymology” who “give themselves an infinity of trouble, restoring to their true form words which have become slightly altered,” and he says that “as a result perverseness of judgment leads to the most hideous absurdities” (<i>Institutio oratoria</i> I.6.32).</p>
<p>His chief example is the derivation of words from their opposites: “are we also to admit the derivation of certain words from their opposites, and accept <i>lucus a non lucendo</i>, since a grove is dark with shade, <i>ludus</i> in the sense of school as being so called because it is quite the reverse of ‘play’” (I.6.34)? The phrase <i>lūcus ā nōn lūcendō</i> (“a grove, from its not giving light”) has become proverbial for an absurd explanation. But Quintilian also rejects the derivation of <i>homō</i> (“man”) from <i>humus</i> (“earth”), which modern scholars accept, so his caution, though sound in principle, was not always right in its judgments.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.32, 34 (trans. Butler; checked against the Perseus text).` },

{ id: 'comparative',
  title: 'Comparative etymology',
  body: `<p>In the nineteenth century scholars found a more reliable method. By comparing the oldest forms of related languages, they found that sounds change according to regular patterns, which they called <strong>sound laws</strong>. The best known is the law named after Jacob Grimm (1822), which describes how certain consonants of the parent language changed in the Germanic languages. So where Latin has <i>p</i>, English has <i>f</i>; where Latin has <i>t</i>, English has <i>th</i>; where Latin has <i>c</i> (that is, <i>k</i>), English has <i>h</i>:<br><i>pater</i> and “father”; <i>piscis</i> and “fish”;<br><i>trēs</i> and “three”; <i>tū</i> and “thou”;<br><i>cornū</i> and “horn”; <i>centum</i> and “hundred.”</p>
<p>Because these changes are regular, an etymology must now account for every sound of the word by such laws, not by a mere likeness. This is why the modern etymologist can show that “father” and <i>pater</i> are the same word, although they differ in sound, and that English “have” is not related to Latin <i>habēre</i>, although they look alike.</p>`,
  src: `Standard histories of the Indo-European languages, in paraphrase.` },

{ id: 'cognate-borrowed',
  title: 'Related words and borrowed words',
  body: `<p>Comparative etymology distinguishes two ways in which an English word can be related to a Latin one. A <strong>cognate</strong> (Latin <i>cognātus</i>, “born together”) is a word that has descended in each language from a common ancestor in the parent language, as “father” and <i>pater</i> have, or “three” and <i>trēs</i>. A <strong>borrowed word</strong> or <strong>loanword</strong> is a word that one language has taken from another, as English took “paternal” from Latin <i>paternus</i>.</p>
<p>So English often has a native word and a borrowed word from the same root: “father” (native) and “paternal” (from Latin); “fish” and “piscine”; “tooth” and “dental”; “heart” and “cardiac” (from Greek). The native word has undergone the sound changes of English; the borrowed word was taken from Latin or Greek much later and keeps its foreign form. This is why English has so many pairs of a common native word and a learned adjective.</p>`,
  src: `Standard histories of English; the <i>Oxford English Dictionary</i>, in paraphrase.`,
  qpTodo: `Cognate or borrowed: is a given English word cognate with a Latin word or borrowed from it (“father” and <i>pater</i>; “paternal” and <i>paternus</i>; “tooth” and “dental”), and how can one tell.` },

{ id: 'layers',
  title: 'The layers of English vocabulary',
  body: `<p>English vocabulary has several layers, which etymology distinguishes. The core of the language, the most common words, is Germanic, inherited from Old English: “house,” “man,” “eat,” “good,” “and,” “the.” After the Norman Conquest in 1066, English borrowed thousands of words from French, especially words of government, law, religion, and cooking: “court,” “judge,” “prayer,” “beef.” From the Renaissance onward it borrowed many words directly from Latin and Greek, especially learned and scientific words: “education,” “philosophy,” “species.”</p>
<p>Sometimes English has borrowed the same Latin word twice, once through French and once directly, and the two have different forms and meanings. Such pairs are called <strong>doublets</strong>: “loyal” (through French) and “legal” (from Latin), both from <i>lēgālis</i>; “royal” and “regal,” both from <i>rēgālis</i>; “frail” and “fragile,” both from <i>fragilis</i>.</p>`,
  src: `Standard histories of English (e.g., Baugh and Cable), in paraphrase.` },

{ id: 'cautions',
  title: 'Cautions in etymology',
  body: `<p>Etymology requires several cautions. First, speakers sometimes reshape an unfamiliar word to resemble familiar ones, a process called <strong>folk etymology</strong>. English “crayfish” comes from French <i>écrevisse</i> and has nothing to do with fish; “bridegroom” comes from Old English <i>brȳdguma</i> (“bride-man”), and the <i>r</i> of “groom” was added when <i>guma</i> was no longer understood.</p>
<p>Second, the meaning of a word can change greatly over time. “Nice” comes, through French, from Latin <i>nescius</i> (“ignorant”), and once meant “foolish”; “silly” once meant “blessed.” So the original meaning of a word is not its true or present meaning. To argue that a word must mean today what its ancestor meant is a fallacy, sometimes called the <strong>etymological fallacy</strong>. The present meaning is fixed by usage, as we saw with imposition in Section I, and etymology explains how that meaning came about but does not overrule it.</p>`,
  src: `The <i>Oxford English Dictionary</i>, s.vv. “crayfish,” “bridegroom,” “nice,” “silly,” in paraphrase.`,
  qpTodo: `Cautions in etymology: what has happened in a given case (“crayfish,” “nice,” “bridegroom”), and why does the original meaning of a word not decide its present meaning.` },

{ id: 'oed',
  title: 'Etymology and the dictionary',
  body: `<p>The great historical dictionaries record what etymology has established. The <i>Oxford English Dictionary</i>, begun in 1857 and first completed in 1928, gives for each English word its origin, its earliest recorded uses with dated quotations, and the history of its meanings. So the student can see, for example, that “nice” is first recorded in English about 1300 in the sense “foolish,” and in its modern sense only in the eighteenth century. For Latin, Vossius’s <i>Etymologicon linguae Latinae</i> (1662) gathered the ancient and Renaissance learning on the origin of Latin words, and modern etymological dictionaries have corrected and extended it.</p>
<p>We have now seen how words are derived, how they are compounded, and how their origins are traced. These studies complete the grammar of the single word. In Section V we turn to construction, the arrangement of words in the sentence.</p>`,
  src: `The <i>Oxford English Dictionary</i>, preface and s.v. “nice”; Vossius, <i>Etymologicon linguae Latinae</i> (1662), in paraphrase.` }

  ]
};
