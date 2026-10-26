# Spanish, batch B3: fact check of the Section III cards, second half (26 Oct 2026)

Scope: `lang.iii-decl.es/pronouns`, `tenses`, `subjunctive`, `participle`, and `irregular`, with their question points and exercises.

Sources: MANUAL is the Academy's *Nueva gramática de la lengua española: Manual* (2010), read as a machine-read text (Internet Archive item RAEManualDeLaNuevaGramaticaDeLaLenguaEspanola); the printed book could not be compared (B14). A&G is Allen and Greenough's *New Latin Grammar* (1903). Excerpts: `rae-manual-2010-excerpts-B3.txt`, `allen-greenough-excerpts-B3.txt`. Paradigms checked in `B3-VERB-FORMS-CHECK.md`. Paragraph numbers are the Manual's own.

## `pronouns`

| Card | Statement | Source | Verdict |
|---|---|---|---|
| relative | *que* for persons and things, invariable; *quien(es)* for persons, after a preposition; *el que*, *el cual* with the article; in a clause set off by commas *quien* may be the subject; the relatives are unstressed except *cual* | MANUAL §22.1.1a, §22.3.1a, b, §22.1.1c (table) | Verified |
| relative | *cuyo* agrees with the noun that follows, not with the antecedent | MANUAL §22.4.1a | Verified |
| relative | Latin *quī, quae, quod* agrees with its antecedent in gender and number | A&G §305 | Verified |
| demonstratives | Three degrees (*este, ese, aquel*; *aquí, ahí, allí*); some analyses treat *ese* as unmarked; forms; neuter forms refer to what is not named | MANUAL §17.2.1a, §17.2.3a | Verified |
| demonstratives | Latin *hic*, *iste*, *ille*; the neuter often refers to a clause | A&G §297 a, b, c, e | Verified |
| possessives | Prenominal *mi, tu, su, nuestro, vuestro*; full forms after the noun; they agree with the thing possessed; *su* also stands for *usted* and *ustedes* | MANUAL §18.1.2a, b, c | Verified |
| possessives | *Vuestro* goes with *vosotros* | MANUAL §16.7.1i (the loss of *vosotros* carried with it the loss of *os* and *vuestro*) and §18.1.2b | Verified, by inference from the two paragraphs |
| possessives | Where *su* is unclear, Spanish adds *de él, de ella, de ellos, de usted* | MANUAL §18.1.2b says that this is preferred for the third person (the Manual puts it as the American preference) | **Partly verified.** The Manual reports the practice; whether it is as strong in Spain was not checked |
| possessives | Latin possessives agree with the thing possessed; *suus* is only reflexive | A&G §302 and its note | Verified |
| interrogatives | The interrogatives carry the accent and are stressed; the relatives of the same shape do not; the accent is kept in indirect questions; plurals *quiénes, cuáles* | MANUAL §22.1.1a, b | Verified |
| indefinites | *alguien, nadie, algo, nada*; *cada* invariable; negative word after the verb needs *no*: *No vino nadie ~ Nadie vino* | MANUAL §19.3.1b, §48.1 | Verified |
| indefinites | Two Latin negatives make an affirmative | A&G §326 | Verified |

## `tenses`

| Card | Statement | Source | Verdict |
|---|---|---|---|
| narration | The imperfect presents the action in its course; it refuses expressions that set limits to the time unless the action is repeated; habit, state, an action in progress when another happened | MANUAL §23.1.3c, §23.6.3a, b, c | Verified |
| narration | The Latin imperfect is continued or repeated, descriptive; the perfect states the fact | A&G §470 and its note | Verified |
| compound | *He cantado* is an *antepresente*; it is used in the central and southern part of European Spanish; in the northwest and the Canary Islands the preterite replaces it | MANUAL §23.4.1a, b | Verified |
| compound | Latin has one perfect for the present perfect and the historical perfect | A&G §473 | Verified |
| compound | Pluperfect, future perfect, conditional perfect; *pretérito anterior* restricted to careful writing and used after *apenas, cuando* and the like | MANUAL §23.9.1, §23.9.2, §23.9.3 | Verified |
| future | The future states conjecture about the present, the conditional about the past; the conditional is the future seen from the past; polite *desearía* | MANUAL §23.7.2a, §23.8.1a, d, §23.8.2a | Verified |
| future | No future or conditional after *si* in the general language; *si llovería* heard in some regions, including the north of Spain, advised against | MANUAL §23.8.1b | Verified for the conditional; for the future the Manual says "al igual que *cantaré*" |
| future | The conditional is a tense of the indicative formed with the imperfect of *haber*; Latin has no conditional | MANUAL §4.1.3c, §23.8.2a; A&G §154 (four moods) | Verified |

## `subjunctive`

| Card | Statement | Source | Verdict |
|---|---|---|---|
| four tenses | The nine tenses of the indicative are reduced to four in the subjunctive, with the four neutralizations | MANUAL §24.1.1a and its table | Verified |
| four tenses | Latin has four tenses of the subjunctive | A&G §162, §184 (paradigm) | Verified |
| four tenses | The future subjunctive is out of use and survives in fixed phrases (*sea cual fuere*, *Adonde fueres, haz lo que vieres*) | MANUAL §24.1.3a | Verified |
| present | -*e* in the first conjugation and -*a* in the others; irregular first person kept; stress and vowel change; the closing of the vowel in *sentir* and *dormir*; the six irregular verbs | MANUAL §4.2.2a, §4.4.3a, i, §4.5.1, §4.5.3, §4.7 and the model tables | Verified |
| present | The present subjunctive is formed from the stem of the first person singular of the present indicative | A teaching rule. The Manual shows the shared irregularity in §4.5.1a, c. The rule was **checked by computation** on every verb fetched (42 verbs; the only exceptions are the six irregular verbs and the changes of spelling), see `B3-VERB-FORMS-CHECK.md` | Verified by computation, not stated in this form by the Manual |
| present | Latin has the same change of vowel in the first conjugation (*amō*, *amem*) | A&G §184 | Verified |
| imperfect | The imperfect subjunctive is built on the preterite stem | MANUAL §4.2.1d | Verified |
| imperfect | In practice, the third person plural of the preterite without *-ron*, plus the endings | A teaching rule, **checked by computation** on 288 forms (all verbs fetched), see `B3-VERB-FORMS-CHECK.md` | Verified by computation, not stated in this form by the Manual |
| imperfect | *-ra* comes from the Latin pluperfect indicative (*amāveram*), *-se* from the Latin pluperfect subjunctive (*amāvissem*); in Europe the alternation is practically free; only *-ra* where the form stands for the conditional | MANUAL §24.1.2a, b; A&G §184 | Verified |

## `participle`

| Card | Statement | Source | Verdict |
|---|---|---|---|
| infinitive | Infinitive in *-r*; nominal infinitives are masculine; the compound infinitive; clitics attached; Latin has present, perfect, and future infinitives | MANUAL §26.1.1, §26.2, §2.5.2 (the substantivized infinitives are masculine), §16.4.2a; A&G §184 | Verified |
| gerund | *-ando*, *-iendo*; no marks of number, person, tense, mood; compound *habiendo cantado*; verbal construction; irregular gerunds (*leyendo*, *oyendo*, *construyendo*, *yendo*, *durmiendo*, *pidiendo*, *sintiendo*, *diciendo*, *pudiendo*) | MANUAL §27.1.1a, b, §4.4.2d, e, §4.4.3a, i, §4.7.2b; the forms *diciendo* and *pudiendo* from the model tables | Verified |
| gerund | Progressive with *estar* | MANUAL §23.1.3d | Verified |
| gerund | Latin gerund (*amandī, amandō*) and present participle (*amāns*); current Spanish has no present participle used as a verb | A&G §184, §158 a; MANUAL §27.5.1c | Verified |
| participle | *-ado*, *-ido*; invariable after *haber*; agrees elsewhere | MANUAL §27.5.1b | Verified |
| participle | The ten irregular participles; derivatives follow; *freído ~ frito*, *imprimido ~ impreso*; the regular form is usual in compound tenses | MANUAL §4.6.2a, b | Verified |
| participle | Latin has a perfect participle in *-tus*, passive in meaning, and no perfect active participle | A&G §158 c and its note | Verified |
| clauses | The participle absolute gives time, cause, condition, or concession; the gerund's subject is usually the subject of the main verb; the example *No sabiendo ella qué decir* | MANUAL §27.5.2b, §27.1.1b | Verified |
| clauses | The Latin ablative absolute | A&G §419 | Verified |

## `irregular`

| Card | Statement | Source | Verdict |
|---|---|---|---|
| stem changes | The kinds of alternation (*e~ie, o~ue, u~ue, e~i*, and the two triple alternations); where they fall; the closing in the preterite, gerund, imperfect subjunctive, and (for *sentir*, *dormir*) the first and second persons plural of the present subjunctive | MANUAL §4.3.3c, §4.4.3a to i | Verified |
| strong preterites | The stems and endings; the stress on the stem; *-eron* after *j*; derivatives; *dar*, *ver*, *ser*, *ir* | MANUAL §4.6.1a, b, c, §4.4.1a (*hice ~ hizo*) | Verified. "Inherited from Latin, with very few exceptions" is the Manual's own wording |
| futures | The stems with the vowel lost, with *d*, and shortened (*har-*, *dir-*) | MANUAL §4.5.2 | Verified |
| -go, -zco | *g* in the first person singular and the present subjunctive; *-ecer* and *-ducir* add *z* before *c*; *conocer*, *parecer*, *crecer* with *agradecer* | MANUAL §4.5.1a, b, c, d, §4.5.3a, the index of verbs | Verified |
| spelling | *c~qu*, *g~gu*, *z~c*, *g~j* are not counted as irregularities; *gu~gü*; *i~y*; *envío*, *actúo* against *anuncio* | MANUAL §4.4.1a, §4.4.2a, b, d, e | Verified. The Manual lists *saco ~ saque*, *dirigimos ~ dirijamos*, *hice ~ hizo*; the cards' further examples (*buscar*, *pagar*, *empezar*) follow the same spelling rules and were checked against the verb forms of Wiktionary (`wiktionary-conjugation-tables-B3.txt`) |

## Example sentences taken from the Manual

*Su madre estaba enferma*, *Los sábados bailaban hasta el amanecer*, *Serían las diez*, *Su merced tendrá frío* (shortened to *Tendrá frío* in the course), *Desearía hablar con el doctor* (the course writes *con la directora*), *No vino nadie ~ Nadie vino*, *Adonde fueres, haz lo que vieres*, *sea cual fuere*, *¿Cuándo vienes? ~ cuando vienes*, *No creo que ... venga*, *No creí que ... llegara*, *No sabiendo ella qué decir*. Each was found in the text of the Manual (apart from the OCR's line breaks). The course changes some of them in small ways; where it does, the changed sentence is the course's own.

## Resting on one source, or on an inference

1. The practice of adding *de él*, *de ella* where *su* is unclear is reported by the Manual in its discussion of America as the preferred form; for Spain it rests on that single paragraph (MANUAL §18.1.2b).
2. The two derivation rules (present subjunctive from the first person singular, imperfect subjunctive from the third person plural of the preterite) are teaching rules, verified by computation on the Wiktionary tables and not worded so by the Manual.
3. *Vuestro* goes with *vosotros* is inferred from MANUAL §16.7.1i and §18.1.2b.
