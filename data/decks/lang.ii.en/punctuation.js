window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.en/punctuation"] = {
 "id": "lang.ii.en/punctuation",
 "title": "English Punctuation",
 "sub": "The comma between clauses, restrictive and nonrestrictive elements, the semicolon and the colon, the apostrophe, quotation marks, and the hyphen.",
 "sources": "<i>The Chicago Manual of Style</i>, chapters 6 and 7",
 "panels": [
  {
   "id": "comma",
   "title": "The comma between clauses and after an opening clause",
   "body": "<p>English joins two independent clauses, each of which could stand as a sentence, in one of three ways: with a comma and a coordinating conjunction (“and,” “but,” “or,” “nor,” “for,” “so,” “yet”), with a semicolon, or by making them two sentences. So we write “The train was late, but the meeting began on time,” or “The train was late; the meeting began on time.” Two independent clauses joined by a comma alone, as in “The train was late, the meeting began on time,” make an error that the handbooks call a comma splice. Two clauses run together with no mark at all make a run-on sentence (also called a fused sentence).</p>\n<p>A subordinate clause or a long phrase placed before the main clause is usually followed by a comma, which shows where the main clause begins: “Although the hall was full, nobody spoke.” “After a long and difficult winter, the farmers planted early.” When the subordinate clause follows the main clause, no comma is needed unless the clause adds a contrast: “Nobody spoke because the hall was full.”</p>",
   "qp": {
    "id": "q-en-punct-comma",
    "variants": [
     {
      "prompt": "What is “The lamp was lit, the room stayed dark”?",
      "options": [
       "A correct sentence",
       "A comma splice",
       "A sentence fragment",
       "A run-on with no mark"
      ],
      "answer": 1,
      "explain": "Two independent clauses are joined by a comma alone, with no conjunction, so the sentence is a comma splice."
     },
     {
      "prompt": "Which mark may join two independent clauses without a conjunction?",
      "options": [
       "The comma",
       "The apostrophe",
       "The semicolon",
       "The hyphen"
      ],
      "answer": 2,
      "explain": "A semicolon may join two independent clauses that are closely related in sense."
     },
     {
      "prompt": "Where does the comma go in “If the river rises the bridge will close”?",
      "options": [
       "After “river”",
       "After “bridge”",
       "After “If”",
       "After “rises”"
      ],
      "answer": 3,
      "explain": "The comma follows the opening subordinate clause and shows where the main clause begins."
     }
    ]
   }
  },
  {
   "id": "restrictive",
   "title": "Restrictive and nonrestrictive elements",
   "body": "<p>A relative clause or a phrase that identifies which person or thing is meant is called restrictive, and it takes no commas: “The book that I lent you is overdue.” A clause or phrase that only adds information about a person or thing already identified is called nonrestrictive, and it is set off by commas: “My sister, who lives in Denver, is a nurse.” The commas therefore change the sense. “The guests who arrived late missed dinner” says that only the late guests missed it; “The guests, who arrived late, missed dinner” says that all the guests arrived late.</p>\n<p>American usage, following <i>The Chicago Manual of Style</i>, prefers “that” for a restrictive clause and “which” for a nonrestrictive one: “the road that leads to town,” but “the old road, which is now closed.” An appositive is punctuated in the same way: “my friend Anna” (restrictive, if I have more than one friend), but “Anna, my oldest friend, …” (nonrestrictive).</p>",
   "qp": {
    "id": "q-en-punct-restrictive",
    "variants": [
     {
      "prompt": "What do the commas in “The workers, who were tired, went home” show?",
      "options": [
       "All the workers were tired",
       "Only some workers were tired",
       "The workers went home first",
       "The clause is restrictive"
      ],
      "answer": 0,
      "explain": "Commas mark a nonrestrictive clause: it adds information about all the workers already named."
     },
     {
      "prompt": "Which word does American usage prefer for a restrictive clause?",
      "options": [
       "“Which”",
       "“Who” in every case",
       "“What”",
       "“That”"
      ],
      "answer": 3,
      "explain": "Chicago prefers “that” for a restrictive clause and “which,” with commas, for a nonrestrictive one."
     },
     {
      "prompt": "Which clause takes no commas?",
      "options": [
       "A nonrestrictive clause",
       "An appositive that adds information",
       "A restrictive clause",
       "An aside"
      ],
      "answer": 2,
      "explain": "A restrictive clause identifies what is meant, so it is not set off."
     }
    ]
   }
  },
  {
   "id": "semicolon-colon",
   "title": "The semicolon and the colon",
   "body": "<p>The semicolon joins two independent clauses that are closely related in sense. It is used before a conjunctive adverb such as “however,” “therefore,” “moreover,” or “nevertheless” when that word begins the second clause, and the adverb is then followed by a comma: “The tickets were expensive; however, the hall was full.” The semicolon also separates the items of a series when the items themselves contain commas: “The tour visits Paris, France; Rome, Italy; and Vienna, Austria.”</p>\n<p>The colon introduces a list, an explanation, or a quotation, and it normally follows a complete clause: “The recipe needs three things: flour, water, and salt.” A colon does not stand between a verb or a preposition and its object, so “The recipe needs: flour, water, and salt” is incorrect. After a colon, Chicago begins a complete sentence with a capital letter only when more than one sentence follows or when the sentence is a quotation, a question, or a speech; a list or a phrase begins with a small letter.</p>",
   "qp": {
    "id": "q-en-punct-semicolon",
    "variants": [
     {
      "prompt": "How is “however” punctuated when it begins the second of two joined clauses?",
      "options": [
       "Comma before, semicolon after",
       "Commas on both sides",
       "No mark at all",
       "Semicolon before, comma after"
      ],
      "answer": 3,
      "explain": "A conjunctive adverb that begins the second clause takes a semicolon before it and a comma after it."
     },
     {
      "prompt": "Which sentence uses the colon correctly?",
      "options": [
       "“He had one aim: to win.”",
       "“He wanted: to win.”",
       "“His aim was: to win.”",
       "“He had: one aim, to win.”"
      ],
      "answer": 0,
      "explain": "A colon follows a complete clause; it does not stand between a verb and its object or complement."
     },
     {
      "prompt": "When does the semicolon separate the items of a series?",
      "options": [
       "When there are only two items",
       "When the items contain commas",
       "When the series ends the sentence",
       "Never in American usage"
      ],
      "answer": 1,
      "explain": "Semicolons keep the items apart when commas are already used inside them."
     }
    ]
   }
  },
  {
   "id": "apostrophe",
   "title": "The apostrophe",
   "body": "<p>The apostrophe has two uses in English: it marks the possessive, and it marks the letters left out of a contraction. A singular noun forms its possessive with an apostrophe and “s” (“the cat’s bowl”), and so, in Chicago’s practice, does a singular name ending in “s” (“Charles’s letters,” “Burns’s poems”). A plural noun ending in “s” adds only the apostrophe (“the cats’ bowls”), and a plural that does not end in “s” adds an apostrophe and “s” (“the children’s toys,” “the women’s team”).</p>\n<p>The possessive pronouns take no apostrophe: “its,” “hers,” “ours,” “yours,” “theirs,” and “whose.” So “its” is the possessive (“The tree lost its leaves”), and “it’s” is the contraction of “it is” or “it has” (“It’s raining”). In the same way “whose” is the possessive and “who’s” the contraction of “who is.” The apostrophe is not used to form an ordinary plural: we write “two CDs,” “the 1990s,” and “the Smiths,” not “CD’s,” “1990’s,” or “Smith’s,” although Chicago uses it for the plurals of lowercase single letters (“mind your p’s and q’s”).</p>",
   "qp": {
    "id": "q-en-punct-apostrophe",
    "variants": [
     {
      "prompt": "Which form completes “The bird built ______ nest”?",
      "options": [
       "it’s",
       "its’",
       "it is",
       "its"
      ],
      "answer": 3,
      "explain": "“Its” is the possessive pronoun, which takes no apostrophe; “it’s” means “it is.”"
     },
     {
      "prompt": "How does a plural noun ending in “s” form its possessive?",
      "options": [
       "It adds only an apostrophe",
       "It adds an apostrophe and “s”",
       "It adds “es”",
       "It takes no mark"
      ],
      "answer": 0,
      "explain": "A plural ending in “s” adds only the apostrophe: “the cats’ bowls.”"
     },
     {
      "prompt": "Which is the correct plural of “CD”?",
      "options": [
       "CD’s",
       "CDs",
       "CDs’",
       "CD’es"
      ],
      "answer": 1,
      "explain": "The apostrophe is not used to form an ordinary plural."
     }
    ]
   }
  },
  {
   "id": "quotation-hyphen",
   "title": "Quotation marks and the hyphen",
   "body": "<p>American usage encloses a quotation in double quotation marks and a quotation within a quotation in single ones: “She told us, ‘Wait here,’ and left.” A period or a comma that follows a quotation goes inside the closing quotation mark, whether or not it belongs to the quotation: He called the plan “bold,” and she called it “reckless.” A colon or a semicolon goes outside. A question mark or an exclamation point goes inside only when it belongs to the quotation: She asked, “Are you ready?” but Did she really say “I am ready”? British usage differs, and puts single quotation marks first and the comma or period inside only when it belongs to the quotation.</p>\n<p>The hyphen joins the parts of a compound modifier placed before a noun, so that the reader takes them together: “a well-known author,” “a twenty-year-old car,” “a long-term plan.” After the noun the same words are usually written open: “The author is well known.” No hyphen follows an adverb ending in “-ly,” because it cannot be misread: “a highly regarded author.” The hyphen is a different mark from the dash, which is longer and separates rather than joins.</p>",
   "qp": {
    "id": "q-en-punct-quotation",
    "variants": [
     {
      "prompt": "Where does the period go in American usage after a quoted word at the end of a sentence?",
      "options": [
       "Inside the closing quotation mark",
       "Outside the closing quotation mark",
       "Before the opening quotation mark",
       "It is left out"
      ],
      "answer": 0,
      "explain": "In American usage periods and commas go inside the closing quotation mark."
     },
     {
      "prompt": "Which phrase is hyphenated correctly?",
      "options": [
       "“a carefully-written letter”",
       "“the letter is well-written”",
       "“a well written-letter”",
       "“a well-written letter”"
      ],
      "answer": 3,
      "explain": "A compound modifier before the noun takes a hyphen; an “-ly” adverb does not, and after the noun the words are usually open."
     },
     {
      "prompt": "Which marks enclose a quotation within a quotation in American usage?",
      "options": [
       "Double quotation marks",
       "Parentheses",
       "Single quotation marks",
       "Dashes"
      ],
      "answer": 2,
      "explain": "American usage puts the outer quotation in double marks and the inner one in single marks."
     }
    ]
   }
  }
 ]
};
