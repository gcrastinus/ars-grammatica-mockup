window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vii.de/figures"] = {
 "id": "lang.vii.de/figures",
 "title": "Figures in Goethe and Schiller",
 "sub": "Apostrophe, metaphor, and hyperbole",
 "sources": "Goethe, <i>Faust</i>, translated by Bayard Taylor; Schiller, <i>An die Freude</i>, translated by Edward Bulwer-Lytton",
 "panels": [
  {
   "id": "apostrophe",
   "title": "Address to what cannot answer",
   "body": "<p>A speaker who says “Stay” to a friend in the room addresses a person who is present and can answer, and that address is ordinary. But a speaker, above all in verse, can turn aside and address someone who is absent, or a thing that cannot answer at all, and this turn is called <strong>apostrophe</strong>.</p><p>In Goethe’s <em>Faust</em>, Faust addresses the passing moment, although a moment cannot hear:</p><p>“Ah, still delay—thou art so fair!” (<em>Verweile doch, du bist so schön.</em>)</p><p>The word “thou” marks the one addressed. The moment is not called by the name of some other thing, and nothing in the line is enlarged beyond the fact, so the figure lies in the address alone.</p>",
   "qp": {
    "id": "q-apostrophe",
    "variants": [
     {
      "prompt": "A clerk at the counter is told “Next.” Why is that not apostrophe?",
      "options": ["The clerk is present and can answer", "“Next” is used for something it resembles", "“Next” is said in a raised voice", "“Next” is a single word, not a sentence"],
      "answer": 0,
      "explain": "Apostrophe turns to someone absent, or to a thing that cannot answer. A clerk at the counter can answer, so the address is ordinary."
     },
     {
      "prompt": "Which wording is apostrophe?",
      "options": ["“The door is shut.”", "“O door, stand open.”", "“The door is a wall.”", "“A thousand doors stand open.”"],
      "answer": 1,
      "explain": "“O door, stand open” addresses a door, and a door cannot answer. The other wordings state a fact, rename the door, or enlarge a number."
     },
     {
      "prompt": "Which of these can apostrophe address?",
      "options": ["Only a person who is in the room", "A thing that cannot answer", "Only a word used for a likeness", "Only a number set beyond the fact"],
      "answer": 1,
      "explain": "Apostrophe addresses someone absent, or a thing that cannot answer. The moment in <em>Faust</em> is such a thing."
     }
    ]
   }
  },
  {
   "id": "metaphor",
   "title": "A word used for a likeness",
   "body": "<p>A spark is a bit of fire thrown from a flame, and joy is not a bit of fire; but Schiller’s hymn “To Joy” nevertheless names joy by that word:</p><p>“Spark from the fire that Gods have fed--<br>JOY--thou Elysian Child divine,” (<em>Freude, schöner Götterfunken,<br>Tochter aus Elysium,</em>)</p><p>The word “spark” is used for joy because a spark kindles and spreads, and joy does the same. The use of a word for something it resembles is <strong>metaphor</strong>, and the likeness is carried by the word itself: the line does not plainly state that joy is great, and it does not add a separate word such as “like.” The second line, which addresses Joy as “thou” and calls it an Elysian child, adds a further figure, but the metaphor is the word “spark.”</p>",
   "qp": {
    "id": "q-metaphor",
    "variants": [
     {
      "prompt": "Which wording is a metaphor?",
      "options": ["“The city is crowded.”", "“The city is a hive.”", "“O city, hear.”", "“The city holds a thousand gates.”"],
      "answer": 1,
      "explain": "“Hive” is used for the city because a hive is crowded with living things, and the city is like that. The likeness is in the word, with no separate “like.”"
     },
     {
      "prompt": "Which wording only says that something is great, with no likeness and no address?",
      "options": ["“The mind is a lamp.”", "“The road is long.”", "“O road, bend.”", "“The road runs a thousand miles.”"],
      "answer": 1,
      "explain": "“The road is long” states the claim and stops. It does not use a word for something the road resembles, it does not address the road, and it does not enlarge a number."
     },
     {
      "prompt": "What carries the likeness in a metaphor?",
      "options": ["A separate word such as “like”", "The transferred word itself", "An address with “thou”", "A number set far beyond the fact"],
      "answer": 1,
      "explain": "In a metaphor the transferred word carries the likeness. “Spark” does that work for joy. A wording with “like” would state a comparison instead."
     }
    ]
   }
  },
  {
   "id": "hyperbole",
   "title": "Wording beyond the fact",
   "body": "<p>To embrace one person is a possible act, but to embrace millions, and to give one kiss to the whole world, goes beyond any literal act. Schiller’s chorus says:</p><p>“Embrace ye millions--let this kiss,<br>Brothers, embrace the earth below!” (<em>Seid umschlungen, Millionen! Diesen Kuß der ganzen Welt!</em>)</p><p>The wording enlarges the act. Words that go beyond the truth in order to enlarge or to lessen are called <strong>hyperbole</strong>. The hearer is not asked to take such wording as a measurement, but to understand that the thing is vast, or that it is slight. The chorus also addresses the millions (“ye,” “Brothers”), which is apostrophe, but the hyperbole lies in the enlargement of the embrace and the kiss.</p>",
   "qp": {
    "id": "q-hyperbole",
    "variants": [
     {
      "prompt": "“This bag weighs a ton,” said of one ordinary bag, enlarges the weight. What is the figure?",
      "options": ["Hyperbole", "Metaphor", "Apostrophe", "A plain statement of a weighed fact"],
      "answer": 0,
      "explain": "The weight goes beyond the fact in order to enlarge it. That is hyperbole. The sentence does not rename the bag by a likeness, and it does not address someone absent."
     },
     {
      "prompt": "Which wording lessens beyond the fact, and is still hyperbole?",
      "options": ["“He is no bigger than my thumb.”", "“He arrived late.”", "“O thumb, stay still.”", "“He is a bear in the morning.”"],
      "answer": 0,
      "explain": "“No bigger than my thumb” goes beyond the fact by lessening the size. Hyperbole may enlarge or lessen. The other wordings state a fact, address the thumb, or call a man by the name of an animal he resembles."
     },
     {
      "prompt": "What does the hearer understand by a hyperbole?",
      "options": ["That the words are a sworn measurement", "That a thing is being addressed and can answer", "That the words go beyond the fact", "That a word is used for something it resembles"],
      "answer": 2,
      "explain": "The hearer takes the words as going beyond the fact, so that the thing is vast or slight. The wording is not offered as a measurement."
     }
    ]
   }
  },
  {
   "id": "telling",
   "title": "Three tests",
   "body": "<p>The three figures are told apart by three tests:</p>\n<p><strong>Apostrophe</strong>: someone or something is addressed.<br><strong>Metaphor</strong>: a word is used for something it resembles.<br><strong>Hyperbole</strong>: the wording goes beyond the truth, to enlarge or to lessen.</p><p>A line may meet more than one test, but the tests remain separate, and each asks its own question. In the prologue of <em>Faust</em>, the Lord speaks about man:</p><p>“While Man's desires and aspirations stir,<br>He cannot choose but err.” (<em>Es irrt der Mensch, solang er strebt.</em>)</p><p>Man is spoken about, not addressed; no word is used for something it resembles; and the line does not enlarge or lessen the fact. So the line is a plain statement, and none of the three figures is in it.</p>",
   "qp": {
    "id": "q-telling",
    "variants": [
     {
      "prompt": "Which test finds a metaphor?",
      "options": ["Whether someone is addressed", "Whether a word is used for what it resembles", "Whether the wording goes beyond the fact", "Whether the line states a fact plainly"],
      "answer": 1,
      "explain": "Metaphor is the use of a word for something it resembles. Address is the test of apostrophe, and going beyond the fact is the test of hyperbole."
     },
     {
      "prompt": "Which wording is a plain statement?",
      "options": ["“O door, stand open.”", "“The door is a wall.”", "“A thousand doors stand here.”", "“The door is shut.”"],
      "answer": 3,
      "explain": "“The door is shut” does not address the door, does not use a word for something the door resembles, and does not go beyond the fact. The other three each meet one of the tests."
     },
     {
      "prompt": "Which two figures can stand in one line?",
      "options": ["Apostrophe and hyperbole", "None: each line can have only one figure", "Only two metaphors, never figures of different kinds", "A figure and a plain statement, but never two figures"],
      "answer": 0,
      "explain": "The tests are separate, so a line can address someone and also go beyond the fact. That line is both apostrophe and hyperbole."
     }
    ]
   }
  }
 ]
};
