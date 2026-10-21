window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/agreement"] = {
 "id": "lang.v.de/agreement",
 "title": "Agreement in German",
 "sub": "The adjective and its noun, the verb and its subject, the relative and its antecedent, and congruity",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "adjective",
   "title": "The adjective and its noun",
   "body": "<p>A German adjective that stands before its noun agrees with it in gender, number, and case, and its ending also depends on the word before it. After the definite article (and after <i>dieser</i>, <i>jeder</i>, and the like) the article already shows the case, and the adjective has the weak endings, <i>-e</i> or <i>-en</i>. After <i>ein</i>, <i>kein</i>, and the possessives, which have no ending in three places, the adjective takes the ending that the article lacks. With no article, the adjective itself has the strong endings, which show the case as the article would. Here are the nominative singular forms:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>after <i>der</i></th> <th>after <i>ein</i></th> <th>without an article</th></tr>\n<tr><td>Masculine</td> <td class=\"f\">der alte Baum</td> <td class=\"f\">ein alter Baum</td> <td class=\"f\">alter Wein</td></tr>\n<tr><td>Feminine</td> <td class=\"f\">die warme Milch</td> <td class=\"f\">eine warme Milch</td> <td class=\"f\">warme Milch</td></tr>\n<tr><td>Neuter</td> <td class=\"f\">das frische Brot</td> <td class=\"f\">ein frisches Brot</td> <td class=\"f\">frisches Brot</td></tr>\n</table></div>\n<p>So the same adjective has the forms <i>alte</i>, <i>alter</i>, <i>altes</i>, <i>altem</i>, and <i>alten</i>, and the choice is a matter of agreement. An adjective in the predicate, after <i>sein</i> or <i>werden</i>, has no ending at all: <i>der Baum ist alt</i>, <i>die Tür ist offen</i>.</p>",
   "qp": {
    "id": "q-de-agr-adj",
    "variants": [
     {
      "prompt": "Which form completes <i>ein ______ Hund</i> (“a big dog”)?",
      "options": [
       "<i>große</i>",
       "<i>großes</i>",
       "<i>großen</i>",
       "<i>großer</i>"
      ],
      "answer": 3,
      "explain": "<i>Ein</i> has no ending in the masculine nominative, so the adjective takes the strong ending <i>-er</i>."
     },
     {
      "prompt": "Which form completes <i>Die Suppe ist ______</i> (“the soup is hot”)?",
      "options": [
       "<i>heiß</i>",
       "<i>heiße</i>",
       "<i>heißes</i>",
       "<i>heißen</i>"
      ],
      "answer": 0,
      "explain": "An adjective in the predicate has no ending."
     },
     {
      "prompt": "Which form completes <i>mit ______ Wasser</i> (“with cold water,” no article)?",
      "options": [
       "<i>kalten</i>",
       "<i>kaltem</i>",
       "<i>kaltes</i>",
       "<i>kalte</i>"
      ],
      "answer": 1,
      "explain": "With no article the adjective has the strong ending, here the dative neuter <i>-em</i>."
     }
    ]
   }
  },
  {
   "id": "verb",
   "title": "The verb and its subject",
   "body": "<p>A German verb agrees with its subject in person and number: <i>der Hund bellt</i>, <i>die Hunde bellen</i>; <i>du spielst</i>, <i>ihr spielt</i>. The polite pronoun <i>Sie</i> (“you”) takes the third person plural, whether it addresses one person or several: <i>Kommen Sie heute?</i> German almost always writes the subject, and when no person is meant, it uses <i>es</i>: <i>es regnet</i> (“it is raining”).</p>\n<p>Two subjects joined by <i>und</i> take a plural verb: <i>Anna und Paul spielen</i>. When one of them is <i>ich</i>, the verb is first person plural: <i>Anna und ich spielen</i>. With <i>oder</i> and with <i>weder … noch</i>, the verb usually agrees with the nearer subject.</p>",
   "qp": {
    "id": "q-de-agr-verb",
    "variants": [
     {
      "prompt": "Which form completes <i>Die Kinder ______ im Hof</i> (“the children are playing in the yard”)?",
      "options": [
       "<i>spielt</i>",
       "<i>spielst</i>",
       "<i>spiele</i>",
       "<i>spielen</i>"
      ],
      "answer": 3,
      "explain": "<i>Kinder</i> is plural, so the verb is third person plural."
     },
     {
      "prompt": "Which form completes <i>Peter und ich ______ Tennis</i> (“Peter and I play tennis”)?",
      "options": [
       "<i>spielen</i>",
       "<i>spielt</i>",
       "<i>spiele</i>",
       "<i>spielst</i>"
      ],
      "answer": 0,
      "explain": "Two subjects that include <i>ich</i> take the first person plural."
     },
     {
      "prompt": "Which person and number does <i>Sie</i> (“you,” polite) take?",
      "options": [
       "The second person singular",
       "The third person plural",
       "The second person plural",
       "The third person singular"
      ],
      "answer": 1,
      "explain": "The polite <i>Sie</i> takes the third person plural."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative and its antecedent",
   "body": "<p>The German relative pronoun is usually <i>der</i>, <i>die</i>, <i>das</i>, declined like the article except in the genitive (<i>dessen</i>, <i>deren</i>) and the dative plural (<i>denen</i>). Like the Latin relative, it takes its gender and number from its antecedent and its case from its own clause: <i>der Lehrer, den wir kennen</i> (“the teacher whom we know”), where <i>den</i> is the object of <i>kennen</i>; <i>das Kind, dem ich helfe</i> (“the child whom I help”), where <i>dem</i> is dative because <i>helfen</i> governs the dative; <i>die Nachbarin, deren Hund bellt</i> (“the neighbor whose dog is barking”).</p>\n<p>A relative clause is set off by commas, and its finite verb stands last. After <i>alles</i>, <i>nichts</i>, <i>etwas</i>, and <i>das</i>, the relative is <i>was</i>: <i>alles, was er sagt</i> (“everything that he says”).</p>",
   "qp": {
    "id": "q-de-agr-rel",
    "variants": [
     {
      "prompt": "Which form completes <i>Der Hund, ______ ich füttere, ist alt</i> (“the dog that I feed is old”)?",
      "options": [
       "<i>der</i>",
       "<i>den</i>",
       "<i>dem</i>",
       "<i>dessen</i>"
      ],
      "answer": 1,
      "explain": "The relative is masculine because <i>Hund</i> is, and accusative because it is the object of <i>füttere</i>."
     },
     {
      "prompt": "Which form completes <i>die Leute, mit ______ er arbeitet</i> (“the people with whom he works”)?",
      "options": [
       "<i>den</i>",
       "<i>die</i>",
       "<i>denen</i>",
       "<i>deren</i>"
      ],
      "answer": 2,
      "explain": "<i>Mit</i> governs the dative, and the dative plural of the relative is <i>denen</i>."
     },
     {
      "prompt": "Which form completes <i>Das ist alles, ______ ich weiß</i> (“that is all that I know”)?",
      "options": [
       "<i>das</i>",
       "<i>dass</i>",
       "<i>welches</i>",
       "<i>was</i>"
      ],
      "answer": 3,
      "explain": "After <i>alles</i>, the relative is <i>was</i>."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in German",
   "body": "<p>The three judgments of a construction apply to German as to Latin. <i>Die Kinder spielt</i> is incongruous, because the plural subject and the singular verb do not fit, and so is <i>das Katze schläft</i>, because the neuter article does not fit the feminine noun. <i>der alte Baum</i> is congruous but incomplete, because nothing is said of the tree. <i>Der alte Baum blüht</i> is congruous and complete.</p>\n<p>German, like French, almost always writes the subject, and an impersonal verb takes <i>es</i>: <i>Es regnet</i> (“it is raining”) is complete. A subordinate clause by itself, such as <i>wenn die Sonne scheint</i> (“when the sun shines”), is congruous but incomplete, because it waits for a main clause.</p>",
   "qp": {
    "id": "q-de-agr-cong",
    "variants": [
     {
      "prompt": "How does <i>Der Lehrer erklären die Regel</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Complete, because the object is present",
       "Incongruous"
      ],
      "answer": 3,
      "explain": "The singular subject and the plural verb do not fit."
     },
     {
      "prompt": "How does <i>die offene Tür</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Incongruous, because there is no verb"
      ],
      "answer": 0,
      "explain": "The words fit, but nothing is said of the door."
     },
     {
      "prompt": "How does <i>Es schneit.</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Incomplete, because <i>es</i> names nothing"
      ],
      "answer": 1,
      "explain": "German writes <i>es</i> as the subject of an impersonal verb, and the sentence is complete."
     }
    ]
   }
  }
 ]
};
