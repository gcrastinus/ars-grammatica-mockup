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
   "body": "<p>A German adjective that stands before its noun agrees with it in gender, number, and case, and its ending also depends on the word before it. After the definite article (and after <i lang=\"de\">dieser</i>, <i lang=\"de\">jeder</i>, and the like) the article already shows the case, and the adjective has the weak endings, <i lang=\"de\">-e</i> or <i lang=\"de\">-en</i>. After <i lang=\"de\">ein</i>, <i lang=\"de\">kein</i>, and the possessives, which have no ending in three places, the adjective takes the ending that the article lacks. With no article, the adjective itself has the strong endings, which show the case as the article would. Here are the nominative singular forms:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>after <i lang=\"de\">der</i></th> <th>after <i lang=\"de\">ein</i></th> <th>without an article</th></tr>\n<tr><td>Masculine</td> <td class=\"f\">der alte Baum</td> <td class=\"f\">ein alter Baum</td> <td class=\"f\">alter Wein</td></tr>\n<tr><td>Feminine</td> <td class=\"f\">die warme Milch</td> <td class=\"f\">eine warme Milch</td> <td class=\"f\">warme Milch</td></tr>\n<tr><td>Neuter</td> <td class=\"f\">das frische Brot</td> <td class=\"f\">ein frisches Brot</td> <td class=\"f\">frisches Brot</td></tr>\n</table></div>\n<p>So the same adjective has the forms <i lang=\"de\">alte</i>, <i lang=\"de\">alter</i>, <i lang=\"de\">altes</i>, <i lang=\"de\">altem</i>, and <i lang=\"de\">alten</i>, and the choice is a matter of agreement. An adjective in the predicate, after <i lang=\"de\">sein</i> or <i lang=\"de\">werden</i>, has no ending at all: <i lang=\"de\">der Baum ist alt</i>, <i lang=\"de\">die Tür ist offen</i>.</p>",
   "qp": {
    "id": "q-de-agr-adj",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">ein ______ Hund</i> (“a big dog”)?",
      "options": [
       "<i lang=\"de\">große</i>",
       "<i lang=\"de\">großes</i>",
       "<i lang=\"de\">großen</i>",
       "<i lang=\"de\">großer</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Ein</i> has no ending in the masculine nominative, so the adjective takes the strong ending <i lang=\"de\">-er</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Die Suppe ist ______</i> (“the soup is hot”)?",
      "options": [
       "<i lang=\"de\">heiß</i>",
       "<i lang=\"de\">heiße</i>",
       "<i lang=\"de\">heißes</i>",
       "<i lang=\"de\">heißen</i>"
      ],
      "answer": 0,
      "explain": "An adjective in the predicate has no ending."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">mit ______ Wasser</i> (“with cold water,” no article)?",
      "options": [
       "<i lang=\"de\">kalten</i>",
       "<i lang=\"de\">kaltem</i>",
       "<i lang=\"de\">kaltes</i>",
       "<i lang=\"de\">kalte</i>"
      ],
      "answer": 1,
      "explain": "With no article the adjective has the strong ending, here the dative neuter <i lang=\"de\">-em</i>."
     }
    ]
   }
  },
  {
   "id": "verb",
   "title": "The verb and its subject",
   "body": "<p>A German verb agrees with its subject in person and number: <i lang=\"de\">der Hund bellt</i>, <i lang=\"de\">die Hunde bellen</i>; <i lang=\"de\">du spielst</i>, <i lang=\"de\">ihr spielt</i>. The polite pronoun <i lang=\"de\">Sie</i> (“you”) takes the third person plural, whether it addresses one person or several: <i lang=\"de\">Kommen Sie heute?</i> German almost always writes the subject, and when no person is meant, it uses <i lang=\"de\">es</i>: <i lang=\"de\">es regnet</i> (“it is raining”).</p>\n<p>Two subjects joined by <i lang=\"de\">und</i> take a plural verb: <i lang=\"de\">Anna und Paul spielen</i>. When one of them is <i lang=\"de\">ich</i>, the verb is first person plural: <i lang=\"de\">Anna und ich spielen</i>. With <i lang=\"de\">oder</i> and with <i lang=\"de\">weder … noch</i>, the verb usually agrees with the nearer subject.</p>",
   "qp": {
    "id": "q-de-agr-verb",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Die Kinder ______ im Hof</i> (“the children are playing in the yard”)?",
      "options": [
       "<i lang=\"de\">spielt</i>",
       "<i lang=\"de\">spielst</i>",
       "<i lang=\"de\">spiele</i>",
       "<i lang=\"de\">spielen</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Kinder</i> is plural, so the verb is third person plural."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Peter und ich ______ Tennis</i> (“Peter and I play tennis”)?",
      "options": [
       "<i lang=\"de\">spielen</i>",
       "<i lang=\"de\">spielt</i>",
       "<i lang=\"de\">spiele</i>",
       "<i lang=\"de\">spielst</i>"
      ],
      "answer": 0,
      "explain": "Two subjects that include <i lang=\"de\">ich</i> take the first person plural."
     },
     {
      "prompt": "Which person and number does <i lang=\"de\">Sie</i> (“you,” polite) take?",
      "options": [
       "The second person singular",
       "The third person plural",
       "The second person plural",
       "The third person singular"
      ],
      "answer": 1,
      "explain": "The polite <i lang=\"de\">Sie</i> takes the third person plural."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative and its antecedent",
   "body": "<p>The German relative pronoun is usually <i lang=\"de\">der</i>, <i lang=\"de\">die</i>, <i lang=\"de\">das</i>, declined like the article except in the genitive (<i lang=\"de\">dessen</i>, <i lang=\"de\">deren</i>) and the dative plural (<i lang=\"de\">denen</i>). Like the Latin relative, it takes its gender and number from its antecedent and its case from its own clause: <i lang=\"de\">der Lehrer, den wir kennen</i> (“the teacher whom we know”), where <i lang=\"de\">den</i> is the object of <i lang=\"de\">kennen</i>; <i lang=\"de\">das Kind, dem ich helfe</i> (“the child whom I help”), where <i lang=\"de\">dem</i> is dative because <i lang=\"de\">helfen</i> governs the dative; <i lang=\"de\">die Nachbarin, deren Hund bellt</i> (“the neighbor whose dog is barking”).</p>\n<p>A relative clause is set off by commas, and its finite verb stands last. After <i lang=\"de\">alles</i>, <i lang=\"de\">nichts</i>, <i lang=\"de\">etwas</i>, and <i lang=\"de\">das</i>, the relative is <i lang=\"de\">was</i>: <i lang=\"de\">alles, was er sagt</i> (“everything that he says”).</p>",
   "qp": {
    "id": "q-de-agr-rel",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Der Hund, ______ ich füttere, ist alt</i> (“the dog that I feed is old”)?",
      "options": [
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">dessen</i>"
      ],
      "answer": 1,
      "explain": "The relative is masculine because <i lang=\"de\">Hund</i> is, and accusative because it is the object of <i lang=\"de\">füttere</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">die Leute, mit ______ er arbeitet</i> (“the people with whom he works”)?",
      "options": [
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">die</i>",
       "<i lang=\"de\">denen</i>",
       "<i lang=\"de\">deren</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Mit</i> governs the dative, and the dative plural of the relative is <i lang=\"de\">denen</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Das ist alles, ______ ich weiß</i> (“that is all that I know”)?",
      "options": [
       "<i lang=\"de\">das</i>",
       "<i lang=\"de\">dass</i>",
       "<i lang=\"de\">welches</i>",
       "<i lang=\"de\">was</i>"
      ],
      "answer": 3,
      "explain": "After <i lang=\"de\">alles</i>, the relative is <i lang=\"de\">was</i>."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in German",
   "body": "<p>The three judgments of a construction apply to German as to Latin. <i lang=\"de\">Die Kinder spielt</i> is incongruous, because the plural subject and the singular verb do not fit, and so is <i lang=\"de\">das Katze schläft</i>, because the neuter article does not fit the feminine noun. <i lang=\"de\">der alte Baum</i> is congruous but incomplete, because nothing is said of the tree. <i lang=\"de\">Der alte Baum blüht</i> is congruous and complete.</p>\n<p>German, like French, almost always writes the subject, and an impersonal verb takes <i lang=\"de\">es</i>: <i lang=\"de\">Es regnet</i> (“it is raining”) is complete. A subordinate clause by itself, such as <i lang=\"de\">wenn die Sonne scheint</i> (“when the sun shines”), is congruous but incomplete, because it waits for a main clause.</p>",
   "qp": {
    "id": "q-de-agr-cong",
    "variants": [
     {
      "prompt": "How does <i lang=\"de\">Der Lehrer erklären die Regel</i> stand?",
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
      "prompt": "How does <i lang=\"de\">die offene Tür</i> stand?",
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
      "prompt": "How does <i lang=\"de\">Es schneit.</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Incomplete, because <i lang=\"de\">es</i> names nothing"
      ],
      "answer": 1,
      "explain": "German writes <i lang=\"de\">es</i> as the subject of an impersonal verb, and the sentence is complete."
     }
    ]
   }
  }
 ]
};
