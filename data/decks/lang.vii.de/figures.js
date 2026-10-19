window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vii.de/figures"] = {
 "id": "lang.vii.de/figures",
 "title": "Figures in Goethe and Schiller",
 "sub": "Apostrophe, metaphor, and hyperbole",
 "sources": "Goethe, <i>Faust</i>; Schiller",
 "panels": [
  {
   "id": "apostrophe",
   "title": "Address to what cannot answer",
   "body": "<p>A speaker who says “Stay” to a friend in the room addresses a person who is present and can answer. That address is ordinary. Verse can turn aside and address someone who is absent, or a thing that cannot answer at all. The turn is called <strong>apostrophe</strong>.</p><p>In <em>Faust</em>, the moment is addressed, though a moment cannot hear:</p><p>“Ah, still delay—thou art so fair!” (<em>Verweile doch, du bist so schön.</em>)</p><p>The word “thou” marks the one addressed. The moment is not given some other thing’s name, and the line does not enlarge a number. The figure is the address. Goethe’s <em>Faust</em> uses apostrophe when the moment is spoken to in this way.</p>",
   "qp": {
    "id": "q-apostrophe",
    "variants": [
     {
      "prompt": "A clerk at the counter is told “Next.” Why is that not apostrophe?",
      "options": ["The clerk is present and can answer", "“Next” is used for something it resembles", "The number of clerks is set beyond the fact", "“Next” lessens a measured count"],
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
   "body": "<p>A spark is a bit of fire thrown from a flame. Joy is not a bit of fire. Schiller’s hymn nevertheless names joy by that word:</p><p>“Spark from the fire that Gods have fed--<br>JOY--thou Elysian Child divine,” (<em>Freude, schöner Götterfunken,<br>Tochter aus Elysium,</em>)</p><p>The word “spark” is used for joy because a spark kindles and spreads, and joy is like that. The use of a word for something it resembles is <strong>metaphor</strong>. The likeness is in the word itself. The line is not the plain statement that joy is great, and it does not add a separate word such as “like.”</p><p>The second line addresses Joy as “thou,” and it calls joy an Elysian child. That address is a further figure. The metaphor is the word “spark.” Schiller’s hymn to joy gives the metaphor in this opening.</p>",
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
      "options": ["A separate word such as “like,” kept beside the proper name", "The transferred word itself", "An address with “thou”", "A number set far beyond the fact"],
      "answer": 1,
      "explain": "In a metaphor the transferred word carries the likeness. “Spark” does that work for joy. A wording with “like” would state a comparison instead."
     }
    ]
   }
  },
  {
   "id": "hyperbole",
   "title": "Wording beyond the fact",
   "body": "<p>To embrace one person is a possible act. To embrace millions, and to give one kiss to the whole earth, goes beyond any literal act. Schiller’s chorus says:</p><p>“Embrace ye millions--let this kiss,<br>Brothers, embrace the earth below!” (<em>Seid umschlungen, Millionen! Diesen Kuß der ganzen Welt!</em>)</p><p>The wording enlarges the act. Words that go beyond the truth, in order to enlarge or to lessen, make <strong>hyperbole</strong>. The hearer is not asked to take the enlarged or lessened wording as a measurement. The wording says that the thing is vast, or that it is slight.</p><p>The chorus also addresses the millions (“ye,” “Brothers”). The enlargement is the hyperbole. Schiller’s hymn uses that enlargement for the embrace and for the kiss.</p>",
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
      "options": ["“He is no bigger than my thumb.”", "“He arrived late.”", "“O thumb, stay still.”", "“He is a lion in the fight, and the word carries a likeness.”"],
      "answer": 0,
      "explain": "“No bigger than my thumb” goes beyond the fact by lessening the size. Hyperbole may enlarge or lessen. The other wordings state a fact, address the thumb, or rename a man by a likeness."
     },
     {
      "prompt": "What does the hearer understand by a hyperbole?",
      "options": ["That the words are a sworn measurement", "That a thing is being addressed and can answer", "That the words go beyond the fact", "That one word has replaced another by a stated likeness and by nothing else"],
      "answer": 2,
      "explain": "The hearer takes the words as going beyond the fact, so that the thing is vast or slight. The wording is not offered as a measurement."
     }
    ]
   }
  },
  {
   "id": "telling",
   "title": "Three tests",
   "body": "<p>The three figures are told apart by three tests:</p>\n<p><strong>apostrophe</strong>: someone, or something, is addressed;<br><strong>metaphor</strong>: a word is used for something it resembles;<br><strong>hyperbole</strong>: the wording goes beyond the truth, to enlarge or to lessen.</p><p>A line may meet more than one test. The tests stay separate, and each asks its own question.</p><p>The prologue in <em>Faust</em> speaks about man:</p><p>“While Man's desires and aspirations stir,<br>He cannot choose but err.” (<em>Es irrt der Mensch, solang er strebt.</em>)</p><p>Man is spoken about. He is not addressed. No word is used for something it resembles. The line does not enlarge or lessen the fact for effect. It is a plain statement, and none of the three figures is in it. Goethe’s <em>Faust</em> gives that plain statement beside lines that do address, rename, or enlarge.</p>",
   "qp": {
    "id": "q-telling",
    "variants": [
     {
      "prompt": "Which test finds a metaphor?",
      "options": ["Whether someone is addressed", "Whether a word is used for what it resembles", "Whether the wording goes beyond the fact", "Whether the line is printed in capitals and nothing more"],
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
      "options": ["Apostrophe and hyperbole", "A plain statement counted twice, with no address and no enlargement", "A metaphor and a denial that any word was transferred", "A hyperbole that remains an exact measured count"],
      "answer": 0,
      "explain": "The tests are separate, so a line can address someone and also go beyond the fact. That line is both apostrophe and hyperbole."
     }
    ]
   }
  }
 ]
};
