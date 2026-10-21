window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vii.de/tropes"] = {
 "id": "lang.vii.de/tropes",
 "title": "Tropes and Schemes in German",
 "sub": "Metaphor, metonymy, synecdoche, and irony, and anaphora, chiasmus, antithesis, and asyndeton, in Goethe and Schiller and in ordinary German",
 "sources": "Goethe, <i>Faust</i> and <i>Wilhelm Meisters Lehrjahre</i>; the translations are the course’s own plain translations",
 "panels": [
  {
   "id": "tropes",
   "title": "Four tropes",
   "body": "<p>German poets and ordinary German speech use the same four chief tropes:</p>\n<p><strong>Metaphor</strong>: Mephistopheles tells the student, “Gray, dear friend, is all theory, / And green the golden tree of life” (<i>Grau, teurer Freund, ist alle Theorie, / Und grün des Lebens goldner Baum</i>; Goethe, <i>Faust</i> I), where life is called a tree<br>\n<strong>Metonymy</strong>: a name put for something connected with it: <i>Das ganze Dorf feierte</i> (“the whole village celebrated”), where the village stands for its people<br>\n<strong>Synecdoche</strong>: the part for the whole: Faust says, “Two souls, alas, dwell in my breast” (<i>Zwei Seelen wohnen, ach! in meiner Brust</i>; <i>Faust</i> I), where the breast stands for the whole inner self<br>\n<strong>Irony</strong>: the contrary of what is meant: <i>Das hast du ja großartig gemacht!</i> (“You did that splendidly!”) said of a blunder</p>",
   "qp": {
    "id": "q-de-trope",
    "variants": [
     {
      "prompt": "What trope calls life “the golden tree”?",
      "options": [
       "Metonymy, a name for something connected",
       "Metaphor",
       "Synecdoche",
       "Irony"
      ],
      "answer": 1,
      "explain": "Life is like a green and fruitful tree."
     },
     {
      "prompt": "What trope is <i>Das ganze Dorf feierte</i>?",
      "options": [
       "Metaphor",
       "Irony",
       "Metonymy",
       "Asyndeton"
      ],
      "answer": 2,
      "explain": "The place is put for the people in it."
     },
     {
      "prompt": "What does <i>Brust</i> stand for in <i>Zwei Seelen wohnen, ach! in meiner Brust</i>?",
      "options": [
       "Only the lungs and the heart",
       "A wound",
       "A coat of armor",
       "The whole inner self"
      ],
      "answer": 3,
      "explain": "The part is put for the whole, a synecdoche."
     }
    ]
   }
  },
  {
   "id": "schemes",
   "title": "Four schemes",
   "body": "<p>The schemes arrange words that keep their proper sense:</p>\n<p><strong>Anaphora</strong>: Mignon’s song begins its stanzas with the same question: “Do you know the land where the lemon trees bloom?” (<i>Kennst du das Land, wo die Zitronen blühn?</i>), and then <i>Kennst du das Haus?</i> and <i>Kennst du den Berg?</i> (Goethe, <i>Wilhelm Meisters Lehrjahre</i> III.1)<br>\n<strong>Chiasmus</strong>: Wagner complains to Faust, “Art is long, and short is our life” (<i>die Kunst ist lang; / Und kurz ist unser Leben</i>; <i>Faust</i> I), where adjective and noun change places<br>\n<strong>Antithesis</strong>: Mephistopheles calls himself “a part of that power that always wills evil and always works good” (<i>Ein Teil von jener Kraft, / Die stets das Böse will und stets das Gute schafft</i>; <i>Faust</i> I)<br>\n<strong>Asyndeton</strong>: Caesar’s report in German, <i>Ich kam, ich sah, ich siegte</i> (“I came, I saw, I conquered”), with no conjunction between the clauses</p>",
   "qp": {
    "id": "q-de-scheme",
    "variants": [
     {
      "prompt": "Which scheme begins each stanza of Mignon’s song with <i>Kennst du</i>?",
      "options": [
       "Anaphora",
       "Chiasmus, with the terms reversed",
       "Asyndeton",
       "Antithesis"
      ],
      "answer": 0,
      "explain": "The same words head each stanza."
     },
     {
      "prompt": "In <i>die Kunst ist lang; und kurz ist unser Leben</i>, what changes places?",
      "options": [
       "The subject and the object of one verb",
       "Two verbs",
       "Two cities",
       "The adjective and the noun"
      ],
      "answer": 3,
      "explain": "Noun, adjective; adjective, noun: chiasmus."
     },
     {
      "prompt": "What is set against what in Mephistopheles’ lines?",
      "options": [
       "Theory and life, by metaphor",
       "Two persons",
       "Willing evil and working good",
       "Two times"
      ],
      "answer": 2,
      "explain": "<i>Das Böse will … das Gute schafft.</i>"
     }
    ]
   }
  }
 ]
};
