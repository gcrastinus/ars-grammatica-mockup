# Section IX: Recitation outlines (draft for Timothy's review)

Written 20 Oct 2026 from the final cards of each deck, in the manner of the Section I and II outlines: one sentence to a point, in the deck's order, every point of substance (definitions, distinctions, divisions, arguments, conclusions), and no passing examples, quotations, names mentioned only in passing, or source notes. A point keeps at most one very brief example in parentheses. Each numbered point is one check box on the Tablet. The outlines live in the deck files as the field `recitation`; this file is generated from them for reading.

Data shape: a deck-level field `recitation: [ '…', '…' ]`, an array of strings, one string per point (HTML as on the cards). The whole-section recitation is not stored separately; the Tablet joins the decks' arrays in course order under their deck titles (`sectionRecitation` in recitation.js).

| Deck | Points | Words |
|---|---|---|
| Analysis of Sentences (`ix.sentences`) | 17 | 428 |
| Analysis of Passages (`ix.passages`) | 12 | 340 |
| Workshop and Marking (`ix.marking`) | 17 | 406 |
| **Section IX, whole section** | **46** | **1174** |

## Analysis of Sentences (`ix.sentences`)

1. The analysis of a sentence applies at once the study of the parts of speech and their accidents and the study of construction, so it has two parts.
2. Saying what part of speech a word is and giving its accidents is called **parsing** the word.
3. Showing how the words of a sentence are constructed together (which word depends on which, which agree, and which govern) is called **construing** the sentence.
4. Priscian wrote a whole book of such questions on the first line of each book of the *Aeneid*, asking of each word what part of speech it is, of what kind, gender, figure, and case, and how its case is known from its construction.
5. For more than a thousand years grammarians taught the analysis of sentences by this method of questions.
6. A sentence becomes clear once the main verb is found, because everything else depends on it, directly or through another word, so a sentence is analyzed most surely from the main verb outward.
7. The first step is to find each finite verb, and so the number of clauses, and then the independent clause and its main verb.
8. The second step is to find the subject of the main verb, which agrees with it in person and number, and the words that the verb requires: its object, its predicate noun or adjective, or its indirect object.
9. The third step is to find each dependent clause, the word on which it depends, and its kind.
10. The fourth step is to find, within each clause, the phrases and the single words that depend on others.
11. The parsing of each word comes last.
12. In Latin the endings make most of the construction visible, so parsing and construing support each other: the case of a noun shows its construction, and the construction confirms the case.
13. In English the order of words carries most of the construction, and the parsing depends more on the use of each word in its sentence.
14. In a worked analysis the finite verbs are counted to find the clauses, the main verb is parsed and its subject found by agreement, and its object is found by the case that the verb governs.
15. A prepositional phrase is assigned to the word on which it depends, and its noun is governed by the preposition.
16. A relative clause depends on its antecedent; the relative agrees with the antecedent in gender and number and takes its case from its use in its own clause.
17. The analysis ends by saying what kind of sentence it is and whether it is congruous and complete.

## Analysis of Passages (`ix.passages`)

1. The analysis of a passage applies three of the grammarian’s four tasks: reading, explaining, and judging.
2. **Reading** (*lēctiō*) is reading the passage aloud correctly, with its pauses, its accents, and, in verse, its meter.
3. **Explaining** (*ēnarrātiō*) is setting out what the passage says: the meaning of its words, its constructions, its figures and tropes, and the persons, places, and events to which it refers.
4. **Judging** (*iūdicium*) is assessing the passage: whether it is correct, and how well it is written.
5. So the analysis of a passage gathers everything that the earlier sections have taught, from sounds and measures to construction, errors, figures, and signification.
6. The explanation of a passage has an order: first the passage is read and its sense made clear, then its parts are explained from the smallest (a word or a form) to the largest (an allusion or the design of the whole), and only then is it judged.
7. A judgment made before the passage is understood is not yet a grammarian’s judgment, because it does not rest on the reading and the explanation.
8. The classical commentators, such as Servius on Virgil, explained a poem line by line: rare words, difficult constructions, figures and tropes, variant readings, and the stories and customs alluded to, sometimes praising or criticizing the expression.
9. A Latin passage may be studied with a published translation beside it when the translation follows the Latin closely enough that each phrase of the one can be matched with a phrase of the other.
10. With such a translation the reader can find in the Latin the words that produce each part of the English, and so learn to see the construction of the Latin through its meaning.
11. A free translation, such as a translation into English verse, cannot be used in this way, because it rearranges the sense to fit its own meter and idiom.
12. So the choice of translation depends on its purpose: a close translation serves the analysis of the original, and a free translation serves the reader who wants the poem in English.

## Workshop and Marking (`ix.marking`)

1. Every construction joins a word that depends to a word that terminates its dependence, so a sentence contains as many constructions as it has dependences.
2. Marking a sentence makes all of its dependences visible at once: an arrow is drawn from each word that depends to the word on which it depends.
3. The arrows follow Thomas of Erfurt: the adjective depends on its noun, the adverb on its verb, and the verb on its subject and, if it has one, on its object.
4. A preposition depends on the word to which it relates its phrase, and its noun depends on the preposition.
5. The English article, which is not one of Donatus’s eight parts, is drawn as depending on its noun, as an adjective does.
6. A marking can be checked against a complete analysis of the same sentence, in which every dependence is recorded by these conventions.
7. An arrow that is missing or drawn the wrong way shows a construction that has not been found or has been misunderstood, so marking tests whether every construction has been found and understood.
8. The conventions matter because different grammars draw some dependences differently: Tesnière makes the subject depend on the verb, whereas Thomas makes the verb depend on the subject, and the conventions here follow Thomas throughout.
9. A conjunction signifies by the mode of joining two things, so it requires two words to join and depends on both.
10. When the action belongs to each of two joined subjects, the verb depends on each of them.
11. When a conjunction joins two clauses, it depends on the verb of each.
12. A possessive adjective is an adjective, so it depends on its noun.
13. A noun in apposition explains another noun, as an adjective does, and so it depends on that noun.
14. An infinitive that completes a verb is marked as its object, so the verb depends on the infinitive, and English “to,” which is not one of Donatus’s eight parts, depends on the infinitive as the article depends on its noun.
15. A relative pronoun refers to its antecedent and agrees with it in gender and number, as an adjective agrees with its noun, so the relative depends on its antecedent, and the relative clause hangs from the antecedent by the relative.
16. Within its own clause the relative is marked like any noun, as subject or object of its verb.
17. An adjective clause introduced by “that” or “which” is marked in the same way.
