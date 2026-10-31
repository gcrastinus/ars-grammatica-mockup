# Section VIII: Recitation outlines (draft for Timothy's review)

Written 20 Oct 2026 from the final cards of each deck, in the manner of the Section I and II outlines: one sentence to a point, in the deck's order, every point of substance (definitions, distinctions, divisions, arguments, conclusions), and no passing examples, quotations, names mentioned only in passing, or source notes. A point keeps at most one very brief example in parentheses. Each numbered point is one check box on the Tablet. The outlines live in the deck files as the field `recitation`; this file is generated from them for reading.

Data shape: a deck-level field `recitation: [ '…', '…' ]`, an array of strings, one string per point (HTML as on the cards). The whole-section recitation is not stored separately; the Tablet joins the decks' arrays in course order under their deck titles (`sectionRecitation` in recitation.js).

| Deck | Points | Words |
|---|---|---|
| Supposition (`viii.supposition`) | 56 | 1516 |
| Grammatical Equivalents of Logical Forms (`viii.equivalents`) | 68 | 1889 |
| **Section VIII, whole section** | **124** | **3405** |

## Supposition (`viii.supposition`)

1. A word signifies by imposition, and what it signifies does not change from one sentence to another.
2. Only a statement is true or false, and a further question arises only when a word is used in a statement: what does the word stand for in that statement?
3. The parts of speech differ by their modes of signifying; the modists considered how words signify in order to explain their construction.
4. The logicians of the same century, beginning from the same doctrine of signification, asked how words function in statements that are true or false, and their answer was the doctrine of supposition.
5. The grammarian must know the doctrine of supposition, because it explains how the same noun can refer to different things in different sentences.
6. Categorematic words signify by themselves, whereas syncategorematic words such as “every,” “no,” “some,” and “not” determine how the other words are taken.
7. A noun stands for different things according to the syncategorematic words that go with it and according to its place in the statement, so supposition depends on the distinction between categorematic and syncategorematic words and on the order of words.
8. What a word signifies, which it has from its imposition and keeps in every sentence, must be distinguished from what it stands for, which depends on the statement in which it is used.
9. Peter of Spain defines **signification** as the representation of a thing by a word according to convention, and **supposition** (Latin *suppositiō*, “placing under”) as the taking of a substantive term for something.
10. So signification belongs to the word by itself, and supposition belongs to the term as it is used in a statement.
11. The name “supposition” is related to the grammarians’ *suppositum*, the subject of a sentence, the term placed under what is said of it.
12. A word by itself has signification but no supposition, because nothing is said of it; only when it is used as a term in a proposition, as subject or predicate, does the question arise what it stands for.
13. So supposition is a property of terms in propositions, not of words by themselves, and it belongs chiefly to logic, whereas signification belongs to grammar as well.
14. Grammar must still know the doctrine, because the same grammatical form can carry different suppositions, and a reader who does not distinguish them will misunderstand what is said.
15. A term has **material supposition** when it stands for itself as a word, that is, for the sound or the written mark (“Dog is a noun”).
16. A term in material supposition is the word that is spoken about, and names of the second imposition, such as “noun,” are used to speak about such words.
17. Modern writing marks material supposition with quotation marks or italics; the medieval logicians had no such marks and distinguished it by the predicate, since only a word can be a noun or have letters.
18. Ockham gives material supposition as the first of his three principal kinds, whereas Peter of Spain does not list it separately.
19. A term has **simple supposition** when it stands for the common nature or concept that it signifies, not for any individual (“Dog is a species of animal”).
20. The logicians disagreed about what a term in simple supposition stands for: Peter of Spain and William of Sherwood said the common nature, and Ockham, who denied common natures outside the mind, said the concept in the mind.
21. All agreed that in “Man is a species” the term “man” does not stand for any individual man.
22. A term has **personal supposition** when it stands for the individual things that it signifies (“A dog is barking”).
23. Personal supposition is the most common kind, because most statements are about individual things, and the name “personal” does not mean that the term stands for persons only.
24. So the same word can have material, simple, and personal supposition in three statements; its signification is the same in all three, and only the sense of the whole shows which supposition is meant, since the grammar of the three sentences is the same.
25. Personal supposition is divided into discrete and common.
26. A term has **discrete supposition** when it stands for one individual only, as a proper name does, or a common noun with a demonstrative pronoun (“this student”).
27. A term has **common supposition** when it is a common noun that can stand for many individuals.
28. Discrete and common supposition correspond to the grammatical distinction of proper and common nouns, but they belong to terms in statements, so “this student” is a common noun in grammar but has discrete supposition in logic.
29. Common personal supposition is divided again; a term has **determinate supposition** when the statement is true if it is true of at least one of the individuals for which the term stands (“A bird is singing”).
30. Determinate supposition is tested by a rule of **descent**: a term has it when the descent to a disjunction of singular statements, joined by “or,” is valid.
31. So determinate supposition is the supposition of a common term with “some,” or of a common term with no sign of quantity in an affirmative statement.
32. A term has **confused and distributive supposition** when it stands for every one of the individuals for which it can stand, each taken separately (“Every planet moves”).
33. The test of descent for confused and distributive supposition is to a conjunction of singular statements, joined by “and.”
34. The word “every” gives the term after it this supposition, and the logicians said that it **distributes** the term; “no” also distributes its term.
35. So the syncategorematic words “every” and “no” determine how the common noun after them stands.
36. A term has **merely confused supposition** when it stands for many individuals but one cannot descend from it either to a disjunction of statements or to a conjunction.
37. The standard case is the predicate of a universal affirmative statement (“flower” in “Every rose is a flower”), from which one can descend only to a disjunction within the predicate.
38. Merely confused supposition shows how much the sense of a statement depends on the place of a term and on the signs that go before it.
39. Negation, like “every,” distributes a term, so that in a universal negative statement both subject and predicate have confused and distributive supposition.
40. In a particular negative statement the subject has determinate supposition because of “some,” and the predicate has confused and distributive supposition because of “not.”
41. The general rule is that a universal affirmative sign distributes the term that immediately follows it, and a negative sign distributes every term that follows it.
42. The order of the words therefore matters, so that “Not every train is late” and “Every train is not late” differ in sense; here the order carries the logical sense as well as the construction.
43. The kinds of supposition are these: material, for the word itself; simple, for the common nature or concept; and personal, for individuals.
44. Personal supposition is either discrete, for one individual, or common; and common supposition is either determinate, for at least one, or confused and distributive, for each, or merely confused, for many but not each separately.
45. The kind of supposition is decided by the predicate (for material and simple supposition) and by the signs and the order of the words (for the kinds of personal supposition).
46. So supposition is a doctrine of logic that rests on grammar: on the distinction of proper and common nouns, on the syncategorematic words, and on the order of the sentence.
47. The doctrine of supposition was worked out for Latin, and the logicians called a statement without a sign of quantity **indefinite**.
48. Latin has no articles, so the reader must decide from the context which supposition is meant, whereas English distinguishes some cases by its articles: “a soldier” usually has determinate supposition, “the soldier” usually discrete supposition.
49. English also has forms that Latin lacks, such as the plural without an article, which speaks of a kind in general.
50. So each language provides different means of showing supposition, and a translation must sometimes add or remove a sign, an article, or a demonstrative to keep the same supposition.
51. The tense of the verb also affects supposition: a past or future verb **ampliates** (extends) the supposition of its subject to things that were or will be, whereas a present verb **restricts** it to things that are.
52. So what a term stands for depends not only on what it signifies but on the whole construction of the statement, including the accidents of the verb.
53. Supposition belongs to logic, where it serves the analysis of arguments, but the grammarian studies it for two reasons.
54. First, it explains how the same word, with the same signification, can be used of different things in different sentences, a question that the reader of any text must answer.
55. Second, it shows how much the logical sense of a sentence depends on its grammar: on the syncategorematic words, the order of words, the articles, and the tenses.
56. So supposition is a place where grammar and logic meet: grammar supplies the forms, and logic asks what the terms stand for and whether the statement is true.

## Grammatical Equivalents of Logical Forms (`viii.equivalents`)

1. Logic studies the statement (Latin *enūntiātiō*, also called the proposition) as the bearer of truth, and analyzes it into a subject term, a predicate term, and the copula that joins them.
2. Grammar studies the same sentence as a construction of words.
3. The logical and the grammatical analysis often coincide but not always: grammar takes “every swan” as the subject, whereas logic takes “swan” as the subject term and “every” as a sign of quantity.
4. The word that joins subject and predicate, so that something is said of the subject, is called by the logicians the **copula** (Latin, “link”).
5. Aristotle observes that in such a statement “is” is added as a third element joining the subject and the predicate; in grammar “is” is a verb, a linking verb with a predicate adjective or noun.
6. The logicians analyzed every statement into subject, copula, and predicate even when the grammar has no separate copula, so “The child sleeps” is analyzed as “The child is sleeping.”
7. Latin often omits the copula entirely, so the copula is a constant element of the logical form, whereas in the grammar it may be a separate word, part of the verb, or omitted.
8. How much of its subject a statement speaks of is called its **quantity**.
9. Aristotle distinguishes a statement about a universal made universally from one made not universally.
10. The logicians named four quantities: **universal**, with the sign “every” or “no”; **particular**, with the sign “some”; **singular**, with a proper name or a demonstrative; and **indefinite**, with a common noun and no sign.
11. In grammar the signs of quantity are syncategorematic words, adjectives in form, so the logical quantity of a statement is shown by a part of speech that grammar classes among the adjectives.
12. A statement is **affirmative** or **negative**, and this is called its quality; Aristotle says that every affirmation has an opposite negation.
13. In grammar negation is expressed by an adverb, such as “not,” or by a negative adjective or pronoun, such as “no.”
14. The place of the negation decides what is denied: “Not every song is sad” denies the universal statement, whereas “Every song is not sad,” strictly read, means that no song is sad.
15. English often uses the second form with the sense of the first, so the grammar of negation can be ambiguous where the logic is not, and the reader must decide from the sense which negation is meant.
16. Quantity and quality together give four forms of the categorical statement, named with the vowels A, E, I, and O.
17. **A** is the universal affirmative, **E** the universal negative, **I** the particular affirmative, and **O** the particular negative.
18. The letters come from the Latin verbs *affirmō* (“I affirm”) and *negō* (“I deny”): A and I are the first two vowels of *affirmō*, and E and O the vowels of *negō*.
19. In each form the grammar is the same, a subject with a sign of quantity, a copula, and a predicate, and only the signs and the negation change.
20. The indefinite statement, with no sign of quantity, raised a difficulty for the logicians, because its quantity is not shown by the grammar.
21. The logicians treated the indefinite statement as equivalent to the particular one, but they recognized that in some matters it is understood universally.
22. English has several forms that do the work of the Latin indefinite statement, and modern grammars call such statements **generic**, because they speak of a kind rather than of individuals.
23. So each language offers different means for speaking of kinds, and the logician must interpret them.
24. A statement made of two or more statements joined by a conjunction is called **hypothetical** (Greek, “placed under”) or compound.
25. Peter of Spain names three kinds: the **conditional**, joined by “if”; the **conjunctive**, joined by “and”; and the **disjunctive**, joined by “or.”
26. In grammar these are sentences of two clauses joined by a conjunction, and the three kinds correspond to Donatus’s copulative, disjunctive, and causal conjunctions.
27. So the conjunctions of grammar are the connectives of logic, and the grammarian’s classification of them anticipates the logician’s use.
28. The grammatical form of a sentence does not always show its logical form, and an argument that takes the one for the other is a fallacy.
29. Aristotle names this fallacy the **figure of speech**: what is not the same is expressed in the same form, as when a word that signifies a state has the form of a word that signifies an action.
30. A noun signifies by the mode of a stable thing, but it does not follow that every noun names a thing that exists; the grammar is a way of signifying, not a copy of the thing, and the logician must look through the form to what is signified.
31. One sentence can contain several judgments, one stated outright and others contained in its adjectives and relative clauses, so that the sentence as spoken is a shortened form of a combination of simpler judgments.
32. This is the doctrine of the Port-Royal *Grammaire générale et raisonnée* (1660) of Arnauld and Lancelot.
33. They held that grammar is founded on the operations of the mind (conceiving, judging, and reasoning), and that the principal sentence expresses a judgment, in which the mind joins a subject and a predicate.
34. So they analyzed every sentence, as the logicians had, into subject, copula, and predicate.
35. The Port-Royal grammarians and logicians distinguished two kinds of relative clause.
36. An **explicative** clause adds something true of the whole of what the noun signifies, without limiting it.
37. A **restrictive** (or determinative) clause limits the noun to some of what it signifies.
38. English grammars keep this distinction as the difference between nonrestrictive and restrictive relative clauses and mark it in writing with commas, so that punctuation decides the logical extent of the subject.
39. In the twentieth century Noam Chomsky revived the idea of a universal grammar and claimed the Port-Royal grammar as a forerunner of his own theory, because it distinguished the sentence as spoken from the combination of judgments that underlies it.
40. Chomsky called these the surface structure and the deep structure of a sentence.
41. Chomsky’s universal grammar is a theory of the mind: a child does not hear enough speech to learn a grammar by imitation alone, so the structure common to all languages must be part of the human mind from birth.
42. Historians of linguistics have debated whether his reading of Port-Royal is accurate, but the comparison has renewed interest in the grammarians before the nineteenth century.
43. The scholastic account and Chomsky’s both hold that there is a grammar common to all languages; Roger Bacon held that grammar is one and the same in substance in all languages, though it varies in its accidents.
44. Both accounts hold that a science of this common structure is possible and deny that grammar is merely a list of local customs, against the view that each language is a separate system to be described only in its own terms.
45. For the scholastic account the common structure comes from the things and from the mind’s understanding of them: the modes of signifying are taken from the modes of understanding, and these from the modes of being.
46. Because things and the understanding of them are the same for all, the grammar is the same in substance.
47. For Chomsky the common structure belongs to the human mind as a biological endowment, a faculty of language, and it need not correspond to any structure in things.
48. The scholastic account asks why the categories of grammar are these categories and answers from being; Chomsky’s asks what the mind must contain to learn any language and answers from the mind alone.
49. So the two universal grammars agree that languages share a common structure, but they disagree about what that structure is and where it comes from.
50. Whether there is a grammar common to all languages is a question of fact as well as of principle, and it can be tested only by studying many languages.
51. The grammarian need not settle the question in order to study the grammar of English and Latin.
52. But the question shows why grammar is a liberal art: it asks not only how a language is used but why the parts of speech, the accidents, and the constructions are what they are, and whether the answers hold for every language.
53. Chomsky argued that the evidence a child hears is too poor to account for what the child comes to know, so the structure common to all languages must be part of the human mind from birth; this is the argument from the poverty of the stimulus.
54. His universal grammar is therefore a theory of the mind.
55. Some linguists hold that children learn more from what they hear than Chomsky supposed, and that general powers of learning suffice.
56. The classical tradition asks a different question: not only what the mind must contain to learn a language, but why the categories of language are what they are, i.e. why there are nouns, why there are verbs, etc., which it answers from the modes of understanding and of being (there are nouns because there are stable beings, there are verbs because there are actions and receptions of action, etc.).
57. Chomsky proposed that universal grammar consists of **principles**, which hold for every language, and **parameters**, which have a small number of possible settings, fixed differently in different languages.
58. One proposed parameter concerns the position of the head of a phrase, the word on which the others depend: English places the head first, and Japanese places it last, so that it has postpositions in place of prepositions.
59. The setting of one parameter can explain Greenberg’s observation that the order of verb and object goes together with the order of preposition and noun.
60. The proposal resembles Roger Bacon’s claim that grammar is one in substance and differs in accidents, with the principles in the place of the substance and the parameters in the place of the accidents.
61. Generative grammar studies the form of sentences, largely apart from their meaning, and grounds universal grammar in the biology of the human mind.
62. The classical art studies sentences as signs, whose forms follow their modes of signifying, and grounds the common grammar in the things that all minds understand.
63. Roger Bacon held that grammar is one and the same in substance in all languages, though it varies in its accidents, and typology supplies the evidence on which this claim can be tested.
64. Typology shows that languages differ widely in their sounds, their ways of building words, their order, and the categories they mark.
65. It also shows that every known language has means of naming things and of saying something about them, of distinguishing what acts from what is acted upon, of negating, and of asking.
66. So typology bears out the classical claim as Bacon stated it: the relations that grammar expresses are common to all languages, whereas the means of expressing them are accidents that vary.
67. Whether the parts of speech themselves, especially the distinction of noun and verb, are found in every language has been disputed, and the answer depends partly on how the parts are defined, by their forms or by their modes of signifying.
68. That grammar is in an important sense one in all languages is a claim on which medieval thinkers and many modern linguists agree, although it is not accepted by everyone.
