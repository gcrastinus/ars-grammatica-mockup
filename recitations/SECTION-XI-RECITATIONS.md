# Section XI: Recitation outlines (draft for Timothy's review)

Written 20 Oct 2026 from the final cards of each deck, in the manner of the Section I and II outlines: one sentence to a point, in the deck's order, every point of substance (definitions, distinctions, divisions, arguments, conclusions), and no passing examples, quotations, names mentioned only in passing, or source notes. A point keeps at most one very brief example in parentheses. Each numbered point is one check box on the Tablet. The outlines live in the deck files as the field `recitation`; this file is generated from them for reading.

Data shape: a deck-level field `recitation: [ '…', '…' ]`, an array of strings, one string per point (HTML as on the cards). The whole-section recitation is not stored separately; the Tablet joins the decks' arrays in course order under their deck titles (`sectionRecitation` in recitation.js).

| Deck | Points | Words |
|---|---|---|
| The Other Classical Traditions (`xi.traditions`) | 209 | 6165 |
| Universal Grammar and Modern Linguistics (`xi.modern`) | 182 | 4962 |
| **Section XI, whole section** | **391** | **11127** |

## The Other Classical Traditions (`xi.traditions`)

1. Other peoples besides the Greeks and Romans made the words of a classical language the object of a school study, and some did so long before Donatus.
2. Five such traditions are considered: the scribal lists of Babylon, the Sanskrit grammar of India, the Arabic grammar of the Islamic world, the Hebrew grammar of the medieval Jewish scholars, and the Chinese study of the written character.
3. We study them with the terms of our own art, but the aim is not to find Donatus’s eight parts in every tradition; it is to see where the other traditions asked the same questions as ours, where they asked different ones, and what each found.
4. Each tradition is first described by its own name for the art and its own first questions, and only then compared with the art we have studied.
5. When a language is no longer anyone’s mother tongue but its books are still read, it must be taught in school, as Latin was in the West.
6. The scribes of Mesopotamia, who spoke Akkadian, kept Sumerian in this way as a language of learning, some two thousand years before Donatus.
7. They wrote no treatise called grammar, but lists and paradigms on clay tablets, with a Sumerian form in the left column and its Akkadian equivalent in the right.
8. The simplest line of such a list is a pair of a Sumerian word and its Akkadian equivalent, so the art begins with this pairing, not with a definition of the noun.
9. So the scribal art of words is a bilingual art: its unit is the match between two languages, not the analysis of one.
10. The scribes’ first concern was the written sign itself.
11. Our art begins with the letter, the least part of articulate voice that can be written; the scribal art begins with the sign, a cuneiform character that may write a whole word, a syllable, or several different words.
12. One sign may have several powers, and the powers are different words.
13. The scribes compiled sign lists, which give each sign with its readings and often an Akkadian equivalent, and lists of signs written together for one reading.
14. So the scribal “letter” is not a sound without meaning, as ours is, but a written sign that often already has a meaning.
15. The sign lists record for each sign the same three things as the name, figure, and power of a letter, but the power of a sign is often a word.
16. Beside the sign lists, the scribes copied great thematic lists in which Sumerian words are grouped by subject, each entry a pair of a Sumerian word and its Akkadian equivalent.
17. These lists are the scribes’ account of the word: they do not discuss imposition or define the noun, but the list itself fixes what each word means, by its Akkadian equivalent and its place among the things of its kind.
18. So the thematic list is closer to a dictionary arranged by subject than to a grammar, but it was the foundation of the scribe’s knowledge of the language.
19. The most ambitious tablets are paradigms of the Sumerian verb, in which one verb is run through hundreds of forms, each paired with an Akkadian form.
20. The paradigms often give the persons in the order third, first, second, not our first, second, third.
21. Later texts isolate the pieces of a Sumerian form, such as a prefix or a suffix, and give each an Akkadian explanation, which is the nearest the scribes come to our accidents of the word.
22. But they do not name a genitive or a tense; they say that this Sumerian piece is the equivalent of that Akkadian relation.
23. So the scribal grammar is a grammar of correspondences, and its categories are the forms of the other language.
24. The scribal tablets never say how many parts of speech there are.
25. Their questions were how a sign is written and read, what the Akkadian is for a Sumerian word, what form a verb takes for each person and relation, and what a piece of a form signifies; these are real grammatical questions, though not Donatus’s.
26. So the scribal art differs from ours in three ways: it is bilingual, explaining one language by another; it begins with the written sign, not with the voice; and it arranges forms in lists and paradigms instead of defining classes and rules.
27. Yet it shows the same need that produced our art: a classical language had to be kept and understood in a school, and that required a systematic study of its words.
28. A text that must be recited word for word for many centuries requires a careful study of its words.
29. The Indian name for that study is *vyākaraṇa*, “analysis” or “separation,” that is, the separating of speech into its parts.
30. It was counted among the six auxiliary sciences of the Veda, because the exact wording of the Veda had to be preserved and understood, and that required the ability to take a word apart and put it together again.
31. The central work of the tradition is Pāṇini’s *Aṣṭādhyāyī* (“The Eight Chapters”), composed perhaps in the fourth century BC; before it stands Yāska’s *Nirukta*, and after it come Patañjali’s Great Commentary and Bhartṛhari’s *Vākyapadīya*.
32. So the Indian tradition is older than the Greek grammar of Dionysius Thrax and developed independently of it, and its central work has a form unlike any Greek or Latin grammar.
33. Donatus teaches grammar by questions and answers, defining each part of speech and naming its accidents, but Pāṇini’s grammar does not explain.
34. It consists of nearly four thousand rules called **sūtras** (“threads”), each stated in as few syllables as possible, with technical abbreviations of Pāṇini’s own invention.
35. The rules are ordered so that a later rule can rely on an earlier one, and together they generate the correct forms of Sanskrit from roots and affixes.
36. So the Indian grammar is learned by learning the rules in their order, with the commentaries that explain them; Patañjali’s Great Commentary discusses why each rule is needed and what would go wrong without it.
37. This is a different form of art from Donatus’s: it aims at a complete and economical set of rules from which every correct form can be derived.
38. The Indian tradition gave close attention to the sounds of speech, which it studied in a separate science (*śikṣā*, “instruction”) as well as in grammar.
39. The sounds were classified by the place in the mouth where they are made and by the manner of making them, and the Devanagari alphabet is arranged in that order, the vowels first and then the consonants by their place, from the throat to the lips.
40. Pāṇini’s grammar begins with fourteen short lists of the sounds, arranged so that any group of sounds can be named by its first sound and a marker, so the order of the alphabet is itself part of the grammar.
41. The Indian classification of sounds is more exact than the Latin division into vowels, semivowels, and mutes, because it describes how each sound is made.
42. When two sounds meet in Sanskrit, at the end of one word and the beginning of the next or within a word, they often change; this change is called **sandhi** (“putting together”), and its rules are part of the grammar.
43. A change in a single word is a barbarism in Latin prose and a metaplasm in verse, but in Sanskrit the changes of sandhi are required in correct speech, and omitting them would be an error.
44. English has a few such changes (“an apple” but “a pear”), and Latin elision in verse is a kind of sandhi, but no other classical tradition made the joining of sounds so large a part of the grammar.
45. The Indian tradition divided words into kinds and gave a reason for its first division.
46. Yāska divides words into four kinds: the name (*nāman*), the verb (*ākhyāta*), the preverb (*upasarga*), which is placed before a verb and changes its sense, and the particle (*nipāta*).
47. Yāska says that the verb has becoming as its principal meaning, and that names have a being, a thing, as theirs.
48. This account comes strikingly close to the modists’ distinction between the mode of becoming and the mode of a stable thing, although the two traditions had no contact.
49. But Yāska counts four kinds, not eight: the adjective belongs with the name, and there is no participle or interjection as a separate kind.
50. Sanskrit, like Latin, has stems that cannot stand in a sentence until they receive an ending.
51. Pāṇini defines a word in use (*pada*) by its ending: a word is that which ends in a nominal or a verbal ending, so a stem without its ending is not yet a word of the sentence.
52. Priscian defines the word as the least part of a constructed sentence; both relate the word to the sentence, but Pāṇini makes the ending the mark of a word, so that a stem belongs to a level below the word.
53. The difference reflects the languages: in Sanskrit, as in Latin, nouns and verbs almost never appear without an ending, whereas in English many words do.
54. The Indian grammar derives almost every form from a root (*dhātu*) and one or more affixes (*pratyaya*); the roots are listed in a separate catalogue with their meanings.
55. A verb of the sentence is made by adding affixes to the root, so the Indian grammarian does not parse a finished form, as we do when we name its accidents, but builds the form from its root.
56. Pāṇini made derivation the method of the whole grammar, so that nouns, verbs, and even many particles are derived from roots by rules.
57. The center of Pāṇini’s syntax is the doctrine of the **kārakas** (“factors” of an action); a kāraka is a role that a thing plays in the action signified by the verb.
58. Pāṇini names six: the agent (*kartṛ*), the independent doer; the object (*karman*), what the agent most wishes to reach; the instrument (*karaṇa*), the most effective means; the recipient (*sampradāna*), the one to whom something is given; the source (*apādāna*), the fixed point from which something departs; and the locus (*adhikaraṇa*), the place or time in which the action occurs.
59. The kārakas are relations in the action, not names of endings: the endings of the noun mark them, but not one for one, since the same role may be marked by different endings in different constructions, as the agent is in an active and a passive sentence.
60. So the kārakas resemble the uses of the Latin cases, but they belong to the action and are prior to the endings that express them.
61. In a simple Sanskrit sentence the agent is marked by the first ending, which corresponds to our nominative, and the object by the second, which corresponds to our accusative.
62. Because the endings mark the roles, Sanskrit, like Latin, can change the order of the words without changing the sense.
63. The Indian explanation of this freedom is the marking of the kārakas by endings; ours is the marking of construction by cases; the two describe the same fact from different starting points, the Indian from the action and its factors, ours from the noun and its accidents.
64. The Indian grammar counts seven sets of nominal endings, called *vibhakti* (“division”), with the vocative as a use of the first; they correspond roughly to the Latin cases with two more, the instrumental and the locative.
65. The endings also mark relations that are not kārakas, such as possession, so the endings and the kārakas form two systems, and a Latin table of cases imposed on Sanskrit would misrepresent both.
66. Sanskrit also forms compounds (*samāsa*) very freely, expressing within the compound a relation that Latin expresses by the genitive, so that much of its construction takes place within single words.
67. Patañjali opens his Great Commentary by asking what grammar is for, and he gives five chief purposes: the preservation of the Veda; the adapting of its formulas to new occasions; the command of scripture; brevity, since rules teach more quickly than lists of words; and the removal of doubt about the correct form.
68. These purposes resemble those of the Greek and Latin art, to speak correctly and to explain the authors, but Patañjali’s first purpose is the preservation of a sacred text.
69. His fourth purpose, brevity, explains the form of Pāṇini’s grammar: a short set of rules that generates every correct form is easier to learn than a list of all the forms.
70. Bhartṛhari argued that the true unit of meaning is the sentence (*vākya*), and that its meaning is grasped as a whole, in a single act of understanding, not by adding the meanings of the words one after another.
71. He called the meaning-bearing unit that the hearer grasps the *sphoṭa*, distinct from the sequence of sounds that reveal it.
72. So the Indian tradition, which built its grammar from roots and affixes, ended in a philosophy that put the sentence first, sharing with the modists the conviction that understanding a sentence is more than adding its words.
73. The Sanskrit grammar shares much with the Greek and Latin art: both serve a classical language and its texts; both distinguish noun and verb and connect the verb with becoming; and both describe the endings that mark the construction of the noun.
74. But the Sanskrit art differs in method and center: it is a system of rules that generates forms from roots, not a set of definitions; its syntax is centered on the kārakas, not on the cases; and it gives the sounds and their combinations a much larger place.
75. Unlike the scribal lists, the Sanskrit grammar explains Sanskrit from itself, and in the nineteenth century it influenced the beginnings of modern linguistics.
76. The Arabic name for the description of correct Arabic is **naḥw**, “way” or “direction,” that is, the way in which speech goes when it is correct Arabic.
77. Arabic grammar arose in the eighth century in Iraq, when the spread of Islam brought many speakers of other languages into the Arabic-speaking world, and errors in reading the Qurʾān and in ordinary speech made it necessary to describe and teach correct Arabic.
78. The founding work is the *Kitāb* (“The Book”) of Sībawayh, which described the Arabic of the Qurʾān, of the old poets, and of the Bedouin, whose speech was regarded as the standard.
79. So, like the Sanskrit grammar, the Arabic grammar served a sacred text, but its standard was also the living speech of those who spoke Arabic best.
80. Sībawayh counts three parts of speech: the noun (*ism*), the verb (*fiʿl*), and the particle (*ḥarf*), which comes for a meaning that is neither noun nor verb.
81. The Arabic noun includes our noun, adjective, and pronoun, and the participle; the particle includes our prepositions, conjunctions, and many words that we class as adverbs or interjections.
82. So the Arabic division resembles the logicians’ division into noun, verb, and the rest, but it is a grammarian’s division, made for the construction of Arabic, and it has remained the standard of the Arabic tradition.
83. The word *ḥarf* means both a particle and a letter of the alphabet.
84. The Arabic alphabet writes the consonants and the long vowels; the short vowels are marked by small signs, which are usually omitted in ordinary writing.
85. Most Arabic words are formed from a root of three consonants, which carries a general meaning, and a pattern of vowels and added letters, which gives the particular form.
86. This system resembles the Sanskrit derivation from roots, but the Arabic root is a set of consonants into which vowels are inserted, not a syllable to which affixes are added.
87. The Arabic noun changes its final vowel according to its use in the sentence, and this change is called **iʿrāb** (“making Arabic,” that is, giving a word its correct ending).
88. There are three states: *rafʿ*, with the ending *-u*, for the subject and the predicate; *naṣb*, with the ending *-a*, for the object; and *jarr*, with the ending *-i*, after prepositions and for the second noun of a possessive construction.
89. Words that do not change their endings are called *mabnī* (“built,” fixed), and the distinction between words with iʿrāb and fixed words corresponds to our distinction between declinable and indeclinable words.
90. The three states resemble the Latin nominative, accusative, and genitive, but there are only three, and their uses are defined by the Arabic theory of government.
91. The Arabic grammarians explained each ending by something that governs it, an **ʿāmil** (“operator,” “governor”), and called the word governed the *maʿmūl*.
92. The verb governs its agent in *rafʿ* and its object in *naṣb*, and a preposition governs its noun in *jarr*.
93. In Arabic grammar government is the center of the whole syntax: every ending is explained by naming its governor, and where no word can be found to govern, the grammarians posited an abstract governor.
94. So the Arabic theory of the ʿāmil is a fuller development of the idea that the medieval Latin grammarians called *regimen*.
95. The Arabic grammarians distinguished two kinds of sentence by their first word.
96. A verbal sentence (*jumla fiʿliyya*) begins with a verb, and the verb governs the agent in *rafʿ* and the object in *naṣb*; the usual order is verb, agent, object.
97. As in Latin, the endings show the roles, so the order can change without changing the sense.
98. The Arabic names for verb, agent, and object (*fiʿl*, *fāʿil*, *mafʿūl*) are all formed from the root *f-ʿ-l*, “doing,” which the grammarians used as the model root for naming the patterns of words.
99. A nominal sentence (*jumla ismiyya*) begins with a noun and may contain no verb at all.
100. Its first noun is the topic (*mubtadaʾ*, “that with which one begins”), and its second is the comment (*khabar*, “information”); both are in *rafʿ*, and the topic is governed by the act of beginning itself, an abstract governor.
101. So in Arabic a sentence can be complete without a verb: the Arabic grammarians treated the nominal sentence as a kind of sentence in its own right, not as an omission, whereas the modists held a construction complete only with a subject and a verb.
102. In Arabic some particles govern like verbs, such as the particle *inna* (“indeed”), which puts the following noun into *naṣb*.
103. Other particles govern the imperfect verb, which, unlike the Latin verb, takes different endings according to what governs it.
104. So the list of governors is long and varied, and it includes particles that Latin grammar would class as adverbs or conjunctions, each ending explained in the same way, by naming the word that governs it.
105. Arabic has a definite article, *al-*, which the grammarians classed as a particle, whereas the Latin grammarians removed the article from the Greek list because Latin has none.
106. Arabic expresses possession by **annexation** (*iḍāfa*): the first noun is annexed to the second, which stands in *jarr*, and the first noun takes no article.
107. This construction resembles the Latin genitive, but it changes the form of the first noun as well as the second.
108. Arabic nouns have three numbers: singular, dual (for two), and plural, and the dual has its own endings; Latin has no dual, so Donatus had no reason to name it.
109. The **sound plural** adds an ending to the unchanged singular, and the **broken plural** changes the vowels and pattern within the root.
110. English has a few plurals of the second kind (“man,” “men”), but in Arabic they are very common, which shows again how much of Arabic grammar is worked out within the root.
111. Al-Zajjājī asked why the rules of grammar are as they are, and he distinguished three kinds of reason: educational reasons, which simply state the rule for the learner; analogical reasons, which explain a rule by its likeness to another; and theoretical reasons, which ask why the rule itself holds.
112. So the Arabic tradition, like the medieval Latin one, came to ask for the causes of the rules; al-Zajjājī’s theoretical reasons are the counterpart of the modists’ question, though sought in the internal logic of the language rather than in the modes of being.
113. An error in Arabic, whether a wrong ending, a wrong government, or a form that correct speech does not have, is called **laḥn**.
114. The word covers both the barbarism and the solecism, because an error in the ending of a word is at the same time an error in its construction.
115. The Arabic grammarians had a body of authors, as the Latin grammarians did: the Qurʾān, the pre-Islamic poets, and the speech of the Bedouin.
116. They weighed the same kinds of evidence as the Latin criteria of correctness, under names of their own, such as transmitted usage (*samāʿ*, “hearing”) and analogy (*qiyās*).
117. Of the traditions studied, the Arabic is in some ways the closest to the Greek and Latin art: it names parts of speech, describes case endings and their uses, has theories of government and agreement, and has a doctrine of the complete sentence and a standard of correctness drawn from authors and usage.
118. Whether early Arabic grammar was influenced by Greek logic or grammar is disputed, and the Arabic system is in any case original in its form.
119. It differs in placing government at the center of the syntax, in admitting complete sentences without a verb, and in its system of roots and patterns.
120. Compared with Pāṇini, it begins not from the roles in the action but from the governor of each ending, so the Sanskrit, the Arabic, and the Latin traditions found the same facts on the page but explained them from different starting points.
121. Jewish scholars studied the text of the Hebrew Bible with great care from ancient times, but a systematic grammar of Hebrew appeared only in the tenth century, in the Islamic world, among scholars who applied the methods of Arabic grammar to Hebrew.
122. So Hebrew grammar developed later than the Greek, Sanskrit, and Arabic traditions, and under the influence of the Arabic one.
123. Its development ran from Saadia Gaon in Babylonia, through the scholars of Muslim Spain, to David Kimḥi in Provence about 1200; most of the early works were written in Arabic, and only later in Hebrew.
124. A text written only in consonants can be read in more than one way, so the Hebrew Bible needed a fixed tradition of how it was to be read.
125. Before the grammarians came the **Masoretes** (from *masorah*, “tradition”), who fixed the text of the Hebrew Bible as it was to be read and added small signs for the vowels (*niqqud*, “points”) and for the accents, which mark both the stress of each word and the divisions of the verse for chanting.
126. The Masoretic text became the grammarians’ standard, so the Masoretes recorded the pronunciation of a sacred text so that it could be read correctly, as the Alexandrian scholars did for Homer, and their marks made the grammar of the vowels possible.
127. Saadia Gaon wrote the first works of Hebrew grammar and lexicography: a list of Hebrew words arranged by their first and last letters, and a grammar of Hebrew written in Arabic.
128. Saadia applied to Hebrew the categories of Arabic grammar, including the three parts of speech, and compared Hebrew words with Aramaic and Arabic ones.
129. So the first Hebrew grammarian was also, in a sense, the first comparative grammarian of the Semitic languages, since he saw that Hebrew, Aramaic, and Arabic share many roots and forms.
130. The Hebrew grammarians took over the Arabic division of words into three parts: the noun (*shem*, “name”), the verb (*poʿal*, “action”), and the particle (*millah*).
131. Kimḥi’s grammar, like the Arabic ones, is arranged by these three parts, with the verb treated first and at greatest length.
132. The choice follows the model of Arabic grammar, but it also fits Hebrew, in which the adjective is formed and inflected like a noun and the prepositions are often joined to the following word as prefixes.
133. Some forms of a Hebrew verb show all the letters of its root and some only one or two, so the Hebrew grammarians had to decide how many letters a root has.
134. Menahem ben Saruq held that many Hebrew roots consist of one or two letters, because in many forms only one or two letters appear, and Dunash ben Labrat criticized many of his analyses.
135. The dispute was settled by Judah Ḥayyūj, who showed that Hebrew roots, like Arabic roots, consist regularly of three consonants.
136. The letters that seem to disappear in some forms are **weak** letters (such as *w*, *y*, and *n*), which drop out or change by rule, so the root is still three letters.
137. Ḥayyūj wrote two treatises in Arabic on the verbs with weak letters and on the verbs whose second and third letters are the same.
138. He established that every Hebrew verb has a root of three consonants, and he explained the apparently irregular forms by rules of how the weak letters behave.
139. His principle made a systematic grammar of the Hebrew verb possible, because it allowed every form to be traced to a regular root.
140. It is the Hebrew counterpart of the Arabic doctrine of the root and of the Sanskrit derivation from roots, although in Hebrew, as in Arabic, the root is a set of consonants into which vowels are inserted.
141. Jonah ibn Janāḥ built on Ḥayyūj’s work the most complete Hebrew grammar of the Middle Ages, written in Arabic, in two parts: a grammar and a dictionary of roots.
142. He drew freely on Arabic grammar, compared Hebrew with Arabic throughout, and also treated the syntax of Hebrew and the figures of the biblical text, which the Latin grammarians called figures of construction.
143. So his work covers much of the ground that Donatus and Priscian covered for Latin, and it shows how much the Hebrew grammarians learned from Arabic grammar while describing a different language.
144. The Hebrew verb is formed from its root in several patterns, which modern grammars call **binyanim** (“buildings”), each with its own meaning.
145. The patterns express voice and kinds of action: active and passive, intensive, causative, and reflexive.
146. Following the Arabic practice of naming patterns by a model root, the Hebrew grammarians named the patterns by the root *p-ʿ-l*, “do”: *paʿal* (also called *qal*, “light”), *nifʿal*, *piʿel*, *hifʿil*, and the rest.
147. The Hebrew patterns do the work of voice and of some of Donatus’s forms of the verb, such as the frequentative, within a single system.
148. Hebrew has a definite article, *ha-*, joined to the front of the noun.
149. Like Arabic, Hebrew expresses possession by joining two nouns, the first in a shortened form called the **construct state** (*semikhut*, “leaning”).
150. The first noun loses its article and often changes its vowels, and the second noun carries the article for the whole phrase.
151. Hebrew nouns have no case endings, so the construct state does the work that the Latin genitive does by an ending; Arabic marks annexation by changing both nouns, Hebrew by changing only the first.
152. So the Semitic traditions share a construction that the Latin grammarians had no name for, and the Hebrew grammarians described it in terms taken from Arabic.
153. Most early Hebrew grammars were written in Arabic, but David Kimḥi wrote in Hebrew, for Jewish readers in Christian Europe who did not know Arabic.
154. His *Mikhlol* (“Compendium”) has two parts, a grammar and a dictionary of roots, following the plan of Ibn Janāḥ, and he also wrote commentaries on the Bible that apply his grammar to the explanation of the text.
155. Kimḥi’s grammar was clear, complete, and written in Hebrew, and it became the standard grammar of Hebrew for three centuries.
156. In the Renaissance, Christian scholars began to study Hebrew in order to read the Old Testament in its original language, using grammars and dictionaries drawn from Kimḥi.
157. Through such works the Hebrew grammar of the medieval Jewish scholars, itself shaped by Arabic grammar, entered the European tradition, bringing a grammar organized by roots and patterns and by three parts of speech, quite different from Donatus’s.
158. The translators of the Bible in the sixteenth and seventeenth centuries learned their Hebrew from grammars in this tradition.
159. The Hebrew tradition differs from the others in that it was formed largely by applying the methods of Arabic grammar to a related language.
160. Its achievements were the doctrine of the three-letter root, the systematic description of the verb by its patterns, and the dictionaries of roots that made the Hebrew Bible accessible to readers who did not speak Hebrew.
161. Compared with the Latin art, the Hebrew grammar starts from the root rather than the word, counts three parts of speech rather than eight, and describes possession by the construct state rather than by a case.
162. Like the Latin art, however, it served the reading of a classical text, and its precepts were drawn from that text and tested against it.
163. The Chinese tradition called the studies that must come before the reading of the classics **xiǎoxué** (“the lesser learning”).
164. It had three branches: the study of the written character, the study of its sound, and the study of its meaning in the old texts.
165. There was no list of parts of speech and no account of case or conjugation, because classical Chinese has no inflection: its words do not change their form.
166. So the Chinese tradition differs most from ours: our art begins with the voice and the letter, whereas the Chinese art begins with the written character, which is often a whole word, and studies its form, its sound, and its meaning.
167. Its aim, like ours, was to make the classical texts readable, but the language required a different art.
168. The basic unit of written Chinese is the character, a written sign that usually stands for a single syllable and a single word or meaningful part of a word.
169. So the Chinese “letter” already has a meaning, as many of the Sumerian signs did, and meaning can begin at a single written sign.
170. About AD 100 Xu Shen compiled the *Shuowen jiezi*, which explains about nine thousand characters, arranged under 540 components called **radicals**, according to the part of each character that indicates its meaning.
171. So the order of that dictionary is itself an analysis of the characters, and it remained the foundation of the study of the character for the rest of Chinese history.
172. Some Chinese characters are pictures of what they signify, but most are not, and Xu Shen describes six ways in which characters are formed, called the **six writings** (*liùshū*).
173. They are pictographs, which picture a thing; simple indicatives, which point to an idea by a mark; compound ideographs, which join two characters to make a meaning; phono-semantic compounds, which join a part for the meaning with a part for the sound; derivative cognates, a class whose meaning is disputed; and phonetic loans, characters borrowed for another word of similar sound.
174. Most Chinese characters are phono-semantic compounds.
175. So the six writings are the Chinese tradition’s account of the parts of the written word, as our figure and species are an account of how words are made.
176. A pictograph may seem to signify by nature, because it looks like what it signifies, but the character signifies the word, not only the shape, and the word itself was imposed by the speakers of the language.
177. The loan characters show this most clearly: a character made for one word is borrowed for another word that sounds alike, so that it signifies by convention alone.
178. By recognizing the phonetic loans and the phono-semantic compounds, the Chinese tradition recognized that the character signifies the spoken word, so its account of writing agrees with Aristotle’s, that written marks are signs of spoken words, though it gives the written sign a much larger place.
179. The oldest Chinese work on the words of old texts is the *Erya*, which explains old words by more familiar ones, arranged in groups by meaning.
180. This practice of explaining the words of an old text by those of the present was called **xùngǔ** (“glossing”).
181. Glossing was the Chinese counterpart of explaining (*ēnarrātiō*), the second task of the grammarian, and the classics were the texts on which it was exercised, as the poets were for the Greek and Latin grammarians.
182. So the Chinese tradition, like ours, joined the study of the language to the reading of a body of authors.
183. Because the character does not show its sound fully, the Chinese scholars developed the method called **fǎnqiè**, which spells the sound of a syllable by two other characters.
184. The first character gives the initial consonant, and the second gives the rest of the syllable, its vowel, its ending, and its tone.
185. The *Qieyun* (“Divided Rhymes”), completed in 601, arranged characters by their tone and rhyme and gave their sounds by fǎnqiè, and its successors became the standard references for pronunciation and for the rhymes of poetry.
186. The Latin syllable is divided by its vowel and consonants, whereas fǎnqiè divides the Chinese syllable into initial and remainder, a division suited to a language of single-syllable words with tones.
187. Chinese is a tonal language: the pitch of the voice on a syllable distinguishes words that are otherwise alike.
188. The rhyme dictionaries classified every character by its tone, and the tones governed the rules of classical poetry.
189. The Greek accent was also a matter of pitch and could distinguish words, but in Chinese pitch distinguishes far more words, because every syllable has a tone and many words are a single syllable.
190. So the Chinese study of sound gave tone the central place that the Latin study of sound gave to quantity.
191. The nearest the traditional Chinese scholars came to parts of speech was the distinction between **full words** (*shízì*), which name a thing or an action, and **empty words** (*xūzì*), which do not name but have a function in the sentence.
192. The distinction resembles the medieval division between categorematic and syncategorematic words more than Donatus’s eight parts.
193. The empty words do the work that Latin does by endings and by many of its conjunctions and particles: they mark the relations between the full words, ask a question, or close a sentence.
194. Treatises devoted to the empty words were among the most important works of Chinese grammatical study.
195. In a line of classical Chinese the construction is shown by the order of the characters and by the empty words, not by endings.
196. Our art would call some empty words pronouns and others conjunctions, but the Chinese tradition called all of them empty words and explained each by its use in the line, and the commentators glossed such words in their place.
197. Because classical Chinese has no inflection, its construction is shown almost entirely by the order of the words and by the empty words: the one who acts stands first, the action second, and the thing acted on last.
198. Time is shown, when it is shown, by a word of time, not by a form of the verb.
199. English, which has lost most of its endings, relies on order to show its construction, and Chinese is the extreme case: the relations that Latin shows by case and conjugation are shown by the place of each word.
200. The traditional Chinese marks of punctuation, which readers added to the classics, divided the text into its units (a completed stretch and a pause), as the marks of pause did in Latin.
201. The traditional Chinese scholars made no list of parts of speech; the first to make one was Ma Jianzhong, a scholar trained in European grammar, in 1898.
202. His grammar of classical Chinese divided Chinese words into nine parts of speech and described subjects, objects, and kinds of sentence, using the categories of Latin grammar adapted to Chinese.
203. Ma’s grammar was the beginning of modern Chinese grammatical study, but later Chinese grammarians criticized him for imposing Latin categories on Chinese, and they sought categories drawn from Chinese itself.
204. So it raised the question whether it is right to describe a language in categories made for another, that is, whether the parts of speech and the relations of construction are the same in all languages.
205. Each of the five traditions arose to keep and understand a classical language and its texts: Sumerian for the Babylonian scribes, the Veda for the Indian grammarians, the Qurʾān for the Arabic, the Bible for the Hebrew, and the classics for the Chinese.
206. Each began from what was most evident in its language and writing: the bilingual match, the root and affix, the governor of the ending, the three-letter root, and the written character.
207. The traditions agree in some things: all distinguish words that name things from words that relate them; most distinguish the noun from the verb; and several connect the verb with becoming or action.
208. They differ in the number of the parts of speech, in where they place meaning, and in how they explain construction.
209. Whether these agreements show a grammar common to all languages, and whether the differences are only of accidents, as Roger Bacon held, is a question for the study of modern grammar.

## Universal Grammar and Modern Linguistics (`xi.modern`)

1. Since the late Middle Ages, language has been studied in three principal ways, each of which asks a different but related question.
2. The classical art, Priscian’s grammar with the reasons that the medieval masters added, asks why grammar is as it is, and answers from the modes of signifying.
3. Philology asks what an author actually wrote and how his language came to be what it was.
4. Modern linguistics, since the early twentieth century, asks how a language works as a system and what is common to all languages, and it sets the other two questions aside by design.
5. Boethius of Dacia grants that sciences may differ in their manner of knowing even when they concern the same object, so the student of the classical art need not treat the philologist or the linguist as a rival, but can ask what each way of knowing reaches and what it leaves aside.
6. The modists held that a word receives its mode of signifying, a real property of the word, from the mode of being of the thing on which it is imposed.
7. William of Ockham, for whom only individual things exist, answered that there are no common natures in things to ground such modes: different words simply signify in different ways, and there is no further property in the word.
8. John Aurifaber pressed the point further, arguing that signifying belongs to the intellect, and that the spoken word is only that by which the intellect signifies.
9. If these critics are right, a science of the modes in the word loses its subject, but the art of grammar does not, since Ockham grants that words are imposed to signify what the mind understands and that nouns and verbs signify in different ways.
10. What is disputed is whether the mode is a real property of the word, grounded in common natures in things, so this course has used the modists’ explanations where they explain, without resting the art on their thesis about the word.
11. Speculative grammar was not so much refuted as abandoned.
12. The humanists of the fifteenth and sixteenth centuries, who sought to write Latin like Cicero, found the modists’ Latin barbarous and their questions useless, and returned to the grammar of usage and of the classical authors.
13. The division was already forming in the thirteenth century, between the speculative grammar of Paris and the practical grammar taught in southern Europe, where Latin was learned for law and letters.
14. So the question why the parts of speech and the accidents are what they are ceased to be asked by grammarians for several centuries, until the general grammars of the seventeenth century.
15. The Port-Royal *Grammaire générale et raisonnée* (1660) founded grammar on the operations of the mind and analyzed the sentence as the expression of a judgment.
16. Its title named a kind of work, the general grammar, which sought the principles common to all languages; Harris’s *Hermes* and Beauzée’s *Grammaire générale* belong to the same kind.
17. The general grammarians asked again the question of the modists, but they answered it from the mind rather than from the modes of being: the parts of speech correspond to the operations of the mind, conceiving, judging, and reasoning.
18. So the idea of a universal grammar survived the end of speculative grammar, in a new form that looks forward to Chomsky’s.
19. In 1786 Sir William Jones observed that Sanskrit bears to Greek and Latin a likeness, in the roots of its verbs and in its grammatical forms, too strong to have come about by chance, so that all three must have sprung from some common source, which perhaps no longer exists.
20. This observation began the study of the history and relations of languages.
21. Latin, Greek, Sanskrit, and the Germanic, Celtic, and Slavic languages descend from a common parent language, now called Proto-Indo-European, which was never written.
22. The explanation of cognates in comparative etymology (English “foot” and Latin *pēs*) rests on this discovery.
23. In the nineteenth century comparative grammar became the principal form of the study of language.
24. Bopp compared the conjugation of the verb in Sanskrit, Greek, Latin, Persian, and the Germanic languages, and Grimm described the regular changes of consonants in the Germanic languages.
25. The Neogrammarians held that sound changes operate without exception, so that every apparent exception must have its own explanation.
26. So the nineteenth century discovered that languages have histories and change according to regular laws, a fact that the modists had no obvious place for.
27. Latin was not a fixed system outside time but a stage between an older language and the Romance languages that descended from it, and a grammar derived from unchanging modes of being does not plainly predict that a language should change at all.
28. Boethius of Dacia considered the objection that a science must be of what is necessary and unchanging.
29. He answered that there is a true science of things that come to be and pass away, through the causes that always accompany them; otherwise there would be a science only of things that never change.
30. So the classical account can admit that languages change, as long as the change follows causes that can be known: the modes of signifying would be the constant part, and the sounds and forms that change would be the accidents.
31. Whether this answer reaches far enough to account for the whole history of the Indo-European languages is a fair question, and it is one of the points at which the classical art and modern linguistics meet.
32. Humboldt held that a language is not a finished product (*ergon*) but an activity (*energeia*), and that each language has an “inner form,” a characteristic way of shaping thought.
33. Humboldt and the Schlegels classified languages by how they build words: isolating languages, in which words do not change their form; agglutinating languages, in which each meaning is added as a separate piece; and inflecting languages, in which one ending carries several meanings at once.
34. Humboldt’s view that each language shapes the thought of its speakers led to the Sapir–Whorf hypothesis, and his classification was the beginning of linguistic typology, the comparison of languages by their structure.
35. Saussure is usually counted the founder of modern linguistics.
36. Saussure distinguishes *langue*, the system of a language shared by its speakers, from *parole*, the particular acts of speaking in which the system is used.
37. No single speaker invents or controls the *langue*; each speaker draws on it, and Saussure held that linguistics should take the *langue* as its object.
38. The grammarian of the classical art studied the language of the authors, which is neither simply *langue* nor *parole*, but the best usage within the *langue*.
39. Saussure describes the linguistic sign as the union of a **signifier** (*signifiant*), a sound-image, and a **signified** (*signifié*), a concept.
40. The sign does not join a name to a thing but a sound-image to a concept.
41. The bond between signifier and signified is arbitrary, since nothing in the sound of a word fits it to its concept, as the existence of different words in different languages shows.
42. The classical tradition agrees that words signify by imposition, not by nature, and that they signify things by means of concepts.
43. Boethius of Dacia explained the existence of many languages by the arbitrariness of imposition: the words differ because they are imposed, whereas the modes of signifying are alike because they follow the things.
44. The difference between Saussure and the tradition lies in what follows the concept.
45. A **synchronic** study describes a language as a system at one time; a **diachronic** study describes how a language changes through time.
46. Saussure held that the two must be kept apart, and that the system of a language at a given moment can be described without reference to its history.
47. The nineteenth-century philologists had studied languages chiefly diachronically, and Saussure’s distinction made the synchronic description of a language the principal task of linguistics.
48. The classical grammarian had described the Latin of the authors as a system, but he also drew on its history, through the criterion of antiquity and through etymology.
49. Saussure held that the value of a sign comes not from what it refers to but from its place among the other signs of the system, that is, from its differences from them (English “sheep” and “mutton” against French *mouton*).
50. The same principle applies to sounds, which have their value in a language by contrast with each other.
51. The modern study of such contrasts is phonology, which Saussure’s principle made possible, and it is one of the real discoveries of modern linguistics.
52. Saussure distinguished two kinds of relation among the elements of a language.
53. **Syntagmatic** relations hold between elements that occur together in a sequence.
54. **Associative** relations, later called paradigmatic, hold between an element and others that could take its place.
55. The classical art knew both relations without naming them so: construction concerns the relations of words that occur together, and the paradigms of declension and conjugation set out the forms that can take one another’s place.
56. The classical tradition can accept the distinction between *langue* and *parole*, because it has a place ready for it in the distinction between a habit and an act.
57. A habit (*habitus*) is a settled disposition of a power, really present in the one who has it, from which particular acts proceed.
58. A language known by its speakers is such a disposition, so *parole* is the act and *langue* is the habit from which it proceeds.
59. A shared language carries the habits of a people, its customs and its experience, and so the words of a common language resonate in one speaker’s mind in ways they may not in another’s.
60. A habit is always the habit of someone and is ordered to something, so the *langue* is not a third thing between minds and the world but a disposition in minds, and the disposition has objects: the things that the language is used to speak about.
61. An **instrumental sign**, such as smoke or a spoken word, must first be known as an object before it leads the mind to something else.
62. A **formal sign**, the concept, leads the mind to its object without first being known as an object itself; the concept is that by which we know, not that which we know.
63. Saussure makes what is signified be a concept and stops there; the classical reply rests on John of St. Thomas’s doctrine of signs.
64. If the concept is a formal sign, then signification cannot end in the concept, because a formal sign consists entirely in leading to something else.
65. So Saussure’s account treats the concept as the end point of signification, whereas the classical account holds that through the concept the word signifies the thing; this difference concerns not the facts of language but what signification is.
66. Bloomfield sought to describe languages by strict procedures based on the observable forms of speech.
67. Because meaning could not be observed in the same way, he and his followers set it aside as far as possible and described each language by the distribution of its sounds and forms.
68. Bloomfield analyzed sentences into their immediate constituents, dividing a sentence first into two parts and then each part into its parts.
69. This analysis resembles the classical division of the sentence into subject and predicate, but it was made without appeal to meaning, whereas the classical analysis rests on signification throughout.
70. Chomsky proposed that a grammar of a language should be a set of rules that generates all the grammatical sentences of the language and none of the ungrammatical ones; such a grammar is called **generative**.
71. Chomsky argued that a speaker’s knowledge of grammar is independent of meaning, since a sentence can be grammatical though it makes no sense.
72. The classical grammarians likewise distinguished congruity from truth, so that a sentence can be congruous though false.
73. The modists would add that such a sentence is congruous because its words fit one another by their modes of signifying, one adhering as a quality and the other bearing it, whatever the words mean, so for them grammar is never wholly independent of signification.
74. A generative grammar divides the sentence into its constituents by rules called **phrase-structure rules**, the first of which may state that a sentence consists of a noun phrase and a verb phrase (S → NP VP).
75. Further rules divide each phrase, and the result can be drawn as a tree, with the sentence at the top and the words at the bottom.
76. The phrase-structure tree groups words into phrases, whereas the dependency diagram of Thomas and Tesnière joins each word to the word on which it depends; the two describe the same sentence in different ways, and modern linguists continue to debate which is more fundamental.
77. Chomsky proposed rules called **transformations**, which relate one structure to another and derive the one form from the other (the passive from the active).
78. Questions and negations were also derived by transformations from simpler structures.
79. The classical grammarians had observed the same relations without this apparatus, and Chomsky’s transformations gave such observations a precise and general form.
80. Chomsky distinguished a speaker’s **competence**, the knowledge of the language, from his **performance**, the actual use of that knowledge, which is affected by memory, attention, and error.
81. The distinction resembles Saussure’s between *langue* and *parole*, but competence belongs to the individual mind, whereas the *langue* belongs to the community.
82. Chomsky also distinguished the **deep structure** of a sentence, which represents its relations of meaning, from its **surface structure**, the form in which it is spoken.
83. Two sentences can have the same surface form but different deep structures (“John is easy to please” and “John is eager to please”), and the classical analysis by dependences and sense distinguishes them in the same way.
84. Chomsky argued that the evidence a child hears is too poor to account for what the child comes to know, so the structure common to all languages must be part of the human mind from birth; this is the argument from the poverty of the stimulus.
85. His universal grammar is therefore a theory of the mind.
86. Some linguists hold that children learn more from what they hear than Chomsky supposed, and that general powers of learning suffice.
87. The classical tradition asks a different question: not only what the mind must contain to learn a language, but why the categories of language are what they are, i.e. why there are nouns, why there are verbs, etc., which it answers from the modes of understanding and of being (there are nouns because there are stable beings, there are verbs because there are actions and receptions of action, etc.).
88. Chomsky proposed that universal grammar consists of **principles**, which hold for every language, and **parameters**, which have a small number of possible settings, fixed differently in different languages.
89. One proposed parameter concerns the position of the head of a phrase, the word on which the others depend: English places the head first, and Japanese places it last, so that it has postpositions in place of prepositions.
90. The setting of one parameter can explain Greenberg’s observation that the order of verb and object goes together with the order of preposition and noun.
91. The proposal resembles Roger Bacon’s claim that grammar is one in substance and differs in accidents, with the principles in the place of the substance and the parameters in the place of the accidents.
92. The minimalist program seeks to reduce universal grammar to as few operations as possible.
93. Its central operation is **Merge**, which takes two elements and combines them into one, and repeated Merge builds every structure of every language.
94. This recalls Thomas of Erfurt’s doctrine that every construction joins two words, one depending and one terminating, so the modern and the medieval accounts arrive, by different routes, at the binary construction as the basic unit of syntax.
95. Generative grammar and the classical art agree that there is a grammar common to all languages, that a science of it is possible, and that the sentence is built by regular relations among its parts.
96. Generative grammar studies the form of sentences, largely apart from their meaning, and grounds universal grammar in the biology of the human mind.
97. The classical art studies sentences as signs, whose forms follow their modes of signifying, and grounds the common grammar in the things that all minds understand.
98. So generative grammar asks what the mind must contain to acquire any language, whereas the classical art asks why the categories of language are what they are, and each reaches something the other leaves aside.
99. Tesnière describes the sentence as a set of words depending on words, drawn as a tree (*stemma*), and measures the number of words a verb requires by its **valency**.
100. His dependency grammar is the modern heir of the medieval doctrine of the dependent and the terminant, though Tesnière did not draw on the modists directly.
101. Tesnière’s **translation**, in his technical sense, is the process by which a word or phrase of one category is made to function as another (“of” makes the noun in “the book of Peter” function as an adjective).
102. Dependency grammar is widely used, especially in the computer analysis of language, because it describes the relations among words directly and works well for languages with free word order.
103. The project called Universal Dependencies has annotated sentences in more than a hundred languages with the same set of dependency relations, so that their constructions can be compared.
104. In these modern systems, as in Tesnière, the verb is usually the root of the sentence, and the subject and objects depend on it, whereas Thomas of Erfurt makes the verb depend on its subject and object.
105. So the direction of a dependence is a question of theory: the modern systems follow the verb’s central place in the sentence, and Thomas follows the verb’s mode of signifying, which requires a subject.
106. Thomas and Tesnière agree on most dependences, the adjective on its noun, the adverb on its verb, the article on its noun, and the object in a relation to its verb, and they agree that every construction joins two words.
107. They differ chiefly on the relation of the verb to its subject, and on the reason for the dependences.
108. For Thomas, a word depends on another because its mode of signifying requires what the other supplies, so the reason lies in signification; for Tesnière, the reason lies in the structure of the sentence itself.
109. So modern dependency grammar describes the same relations that the modists described, but it does not ask the modists’ question why the relations hold.
110. Greenberg classified languages by the order of subject, verb, and object, and found that other facts of order go together with it.
111. Many of his universals are **implicational**: they state that if a language has one property, it has another (languages with the order verb, subject, object always have prepositions).
112. Such universals do not say that every language has a given property; they say how properties are related.
113. They differ from the universals of the general grammarians, who sought properties present in every language, and typology has shown that implicational universals are far more common than absolute ones.
114. Modern typology refines the classification of Humboldt and the Schlegels.
115. An **isolating** language has words that do not change their form, so its relations are shown by order and by particles.
116. An **agglutinating** language adds a separate piece for each meaning.
117. A **fusional** language joins several meanings in one ending.
118. A **polysynthetic** language can express in one long word what English expresses in a sentence.
119. These types are tendencies, not fixed or pre-determined patterns that a language has to follow, and they describe how much each language does by endings and how it combines them (English is now largely isolating but keeps some fusional forms).
120. Latin marks the subject of every verb in the nominative and the object in the accusative.
121. An **ergative** language marks the subject of a transitive verb with a special ending but treats the subject of an intransitive verb like the object of a transitive one.
122. The ergative pattern shows that the grouping of subject against object is one possibility among others.
123. The relations of doer, thing done, and the one who undergoes are present in every language, but languages group them differently in their endings, so the facts of construction are common, whereas their marking varies.
124. Comrie distinguishes universals that hold without exception from those that hold for most languages.
125. An **absolute universal** holds for every known language; few have been found, and they are often very general (every language has vowels).
126. A **statistical universal** holds for most languages (the tendency of languages with the order subject, object, verb to have postpositions).
127. A universal can be tested only on a sample of languages chosen from many families and regions, because languages that are related or neighbors share properties by inheritance or by contact.
128. So the modern search for universals is a careful comparison of many languages, and its results are often tendencies rather than laws, which is a caution for any universal grammar, classical or modern.
129. Typology has found grammatical categories that the classical grammarians never met, such as **evidentials**, which mark on the verb how the speaker knows what he says, and **classifiers**, used when counting.
130. Languages differ in which accidents they mark, so a grammar of Latin does not contain every category that a grammar of all languages would need.
131. The classical account can call such categories accidents, whereas a modern linguist may regard some of them as deeper; either way, the list of accidents is not fixed by one language.
132. Roger Bacon held that grammar is one and the same in substance in all languages, though it varies in its accidents, and typology supplies the evidence on which this claim can be tested.
133. Typology shows that languages differ widely in their sounds, their ways of building words, their order, and the categories they mark.
134. It also shows that every known language has means of naming things and of saying something about them, of distinguishing what acts from what is acted upon, of negating, and of asking.
135. So typology bears out the classical claim as Bacon stated it: the relations that grammar expresses are common to all languages, whereas the means of expressing them are accidents that vary.
136. Whether the parts of speech themselves, especially the distinction of noun and verb, are found in every language has been disputed, and the answer depends partly on how the parts are defined, by their forms or by their modes of signifying.
137. **Functional** accounts of grammar explain the forms of a language by the uses to which language is put: to represent things, to address others, and to build a connected text.
138. **Formal** accounts, such as Chomsky’s, describe the forms of a language apart from their uses.
139. The tradition distinguished the functions of language, and Bühler and Jakobson classified them; functional grammar goes further and seeks to explain the grammatical forms themselves, such as the order of words or the choice of voice, by the functions they serve.
140. Linguists of the Prague School observed that a sentence usually begins with what is already known or under discussion, called the **theme**, and continues with what is new, called the **rheme**.
141. So the choice of voice and order serves to place the known before the new.
142. The Arabic distinction of topic and comment and the Latin placing of emphatic words first or last describe the same arrangement of a sentence for the hearer, which explains why the same thought is often expressed by different constructions in different contexts.
143. Halliday held that every clause serves three functions at once, which he called metafunctions.
144. The **ideational** function represents things and events: who did what to whom.
145. The **interpersonal** function establishes a relation between speaker and hearer: whether the clause states, asks, or commands, and with what attitude.
146. The **textual** function joins the clause to the text around it: what is theme and what is new.
147. Bühler’s representation corresponds to the ideational function and his appeal to the hearer to the interpersonal, whereas the textual function adds what the classical rhetoricians treated under the arrangement of words.
148. So Halliday’s account brings together, within the grammar of the clause, what the tradition divided among grammar, logic, and rhetoric.
149. Several modern theories describe the relations of the participants in an action as **semantic roles**, such as the agent, the instrument, the experiencer, the location, the goal, and the recipient.
150. These roles are distinguished from the grammatical subject and object, since the agent can be the subject or not (an active and a passive sentence).
151. The semantic roles closely resemble Pāṇini’s kārakas, roles in the action distinct from the endings that mark them, and the uses of the Latin cases, such as the ablative of means and the ablative of agent.
152. So modern linguistics has rediscovered, in its own terms, a distinction that the Indian grammarians made central more than two thousand years earlier.
153. Formal and functional accounts are often presented as rivals, but they answer different questions: a formal account asks what the structures of a language are and what rules generate them, and a functional account asks why the structures are as they are, by what they do.
154. The classical art combined something of both, describing the forms of words and constructions precisely and explaining them by their signification and their use.
155. The modists’ explanation of the parts of speech by their modes of signifying is in this sense a functional explanation, though its functions are those of signifying rather than of communicating.
156. Some sentences do not describe an action but perform it; Austin called such utterances **performatives**, and he distinguished them from **constatives**, which state that something is so and are true or false.
157. Only the statement is true or false, and Austin’s performatives add another kind of sentence that is neither true nor false: one that accomplishes what it says.
158. A performative can succeed or fail, as a naming fails if the speaker has no authority to name, but it cannot be false.
159. Austin argued that every utterance performs several acts at once.
160. The **locutionary** act is the saying of a sentence with a certain sense and reference.
161. The **illocutionary** act is what is done in saying it, such as a statement, a warning, a promise, or a command.
162. The **perlocutionary** act is what is brought about by saying it, the effect on the hearer.
163. The illocutionary act corresponds to what the tradition called the kind of sentence, and the perlocutionary act belongs to what Aristotle assigned to rhetoric, so grammar, logic, and rhetoric each consider one aspect of every utterance.
164. Searle classified illocutionary acts into five kinds.
165. **Assertives** commit the speaker to the truth of something; **directives** attempt to get the hearer to do something; and **commissives** commit the speaker to a future action.
166. **Expressives** express a feeling, and **declarations** bring about what they say.
167. St. Thomas’s enunciative sentence corresponds to the assertive, the imperative and the deprecative to the directive, and the expression of feeling to the expressive.
168. The commissive and the declaration are kinds that the medieval account did not distinguish separately.
169. A sentence of one grammatical kind is often used to perform an act of another kind; Searle called such utterances **indirect speech acts**, in which the speaker performs one act by means of another (a request made as a question).
170. Irony says the contrary of what the words say, whereas an indirect speech act does not reverse the sense but uses a polite or customary form for the act intended.
171. So the mood and form of a sentence mark its usual function, but the speaker’s intention, known from the context, decides what act is performed.
172. The theory of speech acts belongs chiefly to the philosophy of language, but it bears on grammar because languages mark the kinds of act in their forms.
173. The moods of the verb mark statements, commands, and wishes, and English and Latin mark questions by order and by particles.
174. Performative verbs are used in the first person present to perform the act they name.
175. So the grammar of a language provides the means by which speakers perform their acts, and the classical grammarians, who placed the moods among the accidents of the verb, and the modists, who explained mood as the inclination of the mind, already treated the speaker’s act as a part of grammar.
176. The twentieth century found things that the thirteenth did not: phonology, a clear account of the structure of words, the grouping of words into constituents, the comparison of hundreds of languages and the discovery of their tendencies, and a serious study of how children acquire a language.
177. Saussure’s description of a language as a system was a real discovery, and so was Greenberg’s method of comparison.
178. The thirteenth century had something that modern linguistics mostly set aside: the question why the categories of grammar are these categories, and the refusal to treat that question as unanswerable.
179. Grammar is the art of speaking and writing correctly and of understanding what others have spoken and written.
180. Whether grammar is in an important sense one in all languages is still a question on which both medieval thinkers and many modern linguists agree, although it is not accepted by everyone, and modern linguistics has certainly both challenged this claim with new evidence and also given new evidence in favor of it.
181. The classical art as such does stand by its central insights: words are signs of what the mind understands, and that the mind understands things.
182. Because these are true, it is possible to learn another language, to translate, and to read the authors of other ages, and these are the reasons that the tradition gave for studying grammar first among the liberal arts.
