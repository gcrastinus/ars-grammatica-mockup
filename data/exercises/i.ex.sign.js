/* Exercise set: Sign and Significant Voice [i.ex.sign]  (DRAFT FORMAT, for Timothy's approval)
   Plan (ITEM-LIST.md): pool of 72 items, 12 per deck (I.1–I.6); three fixed sets A, B, C of 24 items, each with
   4 items per deck; sets given in order A, B, C, A, … and never shuffled (rule 5). Wrong answers show "Incorrect,"
   the right answer, and the explanation, then the set moves on (rule 11).
   Taught-only limit: nothing tests material after I.6. Ambiguity items are lexical (one word with two senses) or
   modifier attachment (English only); Latin items are lexical only, with both senses given in translation.

   Proposed format: one object per item.
     id      stable id: 'sv-' + deck key + number (never reused)
     set     'A', 'B', or 'C'
     deck    the id of the deck the item tests (for the 4-per-deck balance and for reports)
     prompt  the question (HTML allowed)
     options four options (HTML allowed), written in a fixed order here; the course shuffles their display order on each
             visit (Timothy, 17 Oct 2026), and the answer key follows the option, not the position
     answer  0-based index of the correct option (positions varied by hand)
     explain the explanation shown after "Correct" or "Incorrect" (full sentences)

   This draft holds a sample of 12 items for set A (two per deck). The full set A would hold 24 (four per deck);
   sets B and C follow the same pattern once the sample is approved. Live material drawn on: EX.vox (the sounds:
   groan, bark, name, thunder), MODE_ITEMS (only the items on signification and time). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['i.ex.sign'] = {
  id: 'i.ex.sign',
  title: 'Sign and Significant Voice',
  instr: 'Choose the best answer.',
  items: [

  /* I.1 Sign and Symbol */
  { id: 'sv-sign-1', set: 'A', deck: 'i.sign',
    prompt: `A footprint in the mud leads a hunter to think of a deer. What kind of sign is the footprint?`,
    options: [`A conventional sign, because the hunter understands it`, `A natural sign, because it is connected with the deer by nature`, `A symbol, because it signifies by agreement`, `Not a sign, because no word is spoken`],
    answer: 1,
    explain: `The footprint signifies the deer because the deer made it, not because anyone means it to signify. St. Augustine calls such signs natural signs (<i>De doctrina christiana</i> II.1.2).` },
  { id: 'sv-sign-2', set: 'A', deck: 'i.sign',
    prompt: `Aristotle calls spoken words “symbols” (<i>symbola</i>). In what sense does he use the word?`,
    options: [`For a sign with a many-layered meaning, like the white whale in <i>Moby-Dick</i>`, `For a sign that resembles the thing it signifies, as a portrait does`, `As another name for a conventional sign, one that signifies by agreement`, `For a mark that does the work of a word, like the “+” of arithmetic`],
    answer: 2,
    explain: `The Greek <i>symbolon</i> was a token, half of a broken coin or tablet, that meant something only because of an agreement between two parties. So for Aristotle and the early tradition “symbol” is simply another name for a conventional sign. The many-layered sense of the literary symbol came later, and the “+” of arithmetic is a narrower modern use of the word.` },

  /* I.2 Imposition */
  { id: 'sv-imp-1', set: 'A', deck: 'i.imposition',
    prompt: `A dog barks at a stranger. Is the bark a word?`,
    options: [`No; it signifies by nature, not by imposition`, `Yes, because it signifies something to the dog’s owner`, `Yes, because it is a sound made by an animal`, `No, because it signifies nothing at all`],
    answer: 0,
    explain: `The bark signifies something by nature, as a groan signifies pain, but it is not a word, because a word signifies by imposition. Aristotle says that the inarticulate sounds of animals are significant, yet none of them is a noun (<i>De interpretatione</i> 2).` },
  { id: 'sv-imp-2', set: 'A', deck: 'i.imposition',
    prompt: `In “‘Verb’ has four letters,” the word “verb” is used of what?`,
    options: [`An action in the world`, `A thing named by the first imposition`, `Nothing, because it is in quotation marks`, `The word “verb” itself, as a word`],
    answer: 3,
    explain: `The quotation marks show that “verb” is mentioned, not used: the sentence speaks about the word itself. Talking about words as words is the work of the second imposition, and it is marked in writing so that the reader can tell mention from use.` },

  /* I.3 Signification and Consignification */
  { id: 'sv-con-1', set: 'A', deck: 'i.consignification',
    prompt: `Latin <i>cucurrit</i> means “he ran.” What does it consignify along with its proper meaning, running?`,
    options: [`A place`, `Past time`, `A kind of horse`, `Nothing; Latin verbs do not consignify`],
    answer: 1,
    explain: `The proper meaning of <i>cucurrit</i> is running, and along with that meaning it signifies that the running took place in the past. Aristotle says that the verb “carries with it the notion of time” (<i>De interpretatione</i> 3).` },
  { id: 'sv-con-2', set: 'A', deck: 'i.consignification',
    prompt: `In “butterfly,” does the part “butter” signify butter?`,
    options: [`Yes, because it is a word by itself`, `Yes, but only in English`, `No; within the word, its parts signify nothing by themselves`, `No, because “butterfly” signifies nothing`],
    answer: 2,
    explain: `Aristotle says that no part of a noun signifies by itself; in “Fairsteed” the part “steed” has no significance of its own (<i>De interpretatione</i> 2). “Butterfly” signifies as a whole.` },

  /* I.4 Categorematic and Syncategorematic Words */
  { id: 'sv-syn-1', set: 'A', deck: 'i.syncategorematic',
    prompt: `In “No student failed,” which word is syncategorematic?`,
    options: [`“No”`, `“Student”`, `“Failed”`, `None of them`],
    answer: 0,
    explain: `“No” does not bring a thing to mind by itself; it determines how “student” is taken, namely that what is said is said of none. “Student” and “failed” signify something by themselves.` },
  { id: 'sv-syn-2', set: 'A', deck: 'i.syncategorematic',
    prompt: `Which Latin word is categorematic?`,
    options: [`<i>omnis</i> (“every”)`, `<i>non</i> (“not”)`, `<i>si</i> (“if”)`, `<i>equus</i> (“horse”)`],
    answer: 3,
    explain: `<i>Equus</i> signifies something definite by itself, a kind of animal, and it can be what a sentence is about. <i>Omnis</i>, <i>non</i>, and <i>si</i> signify only with other words.` },

  /* I.5 The Functions of Language */
  { id: 'sv-fun-1', set: 'A', deck: 'i.functions',
    prompt: `“Close the gate.” Which kind of sentence is this?`,
    options: [`A statement`, `A command`, `A question`, `A prayer`],
    answer: 1,
    explain: `The sentence asks that something be made so; it does not say that anything is so. It is a command, and so it is neither true nor false.` },
  { id: 'sv-fun-2', set: 'A', deck: 'i.functions',
    prompt: `Which of these sentences is true or false?`,
    options: [`“Is the gate closed?”`, `“May the gate stay closed!”`, `“The gate is closed.”`, `“Close the gate, please.”`],
    answer: 2,
    explain: `Only a statement says that something is or is not so, and only a statement is true or false. The question, the prayer, and the request are complete sentences, but none of them asserts anything.` },

  /* I.6 Ambiguity (lexical, or modifier attachment in English) */
  { id: 'sv-amb-1', set: 'A', deck: 'i.ambiguity',
    prompt: `“The pitcher was on the table.” What are the two senses, and where does the ambiguity lie?`,
    options: [`A jug, or a player who throws the ball; the ambiguity lies in the single word “pitcher”`, `A jug, or a player who throws the ball; the ambiguity lies in the arrangement of the words`, `There is only one sense, a jug`, `The table, or the floor; the ambiguity lies in “on”`],
    answer: 0,
    explain: `“Pitcher” has been imposed with two meanings, a jug and a player who throws the ball, so the double sense lies in a single word. The arrangement of the words is clear.` },
  { id: 'sv-amb-2', set: 'A', deck: 'i.ambiguity',
    prompt: `“She photographed the dog in her pajamas.” Where does the ambiguity lie?`,
    options: [`In the single word “pajamas”`, `In the single word “photographed”`, `There is no ambiguity`, `In the arrangement of the words`],
    answer: 3,
    explain: `No single word has two meanings. The phrase “in her pajamas” can belong to the woman who took the photograph or to the dog, so the double sense lies in the arrangement of the words.` }

  ]
};
