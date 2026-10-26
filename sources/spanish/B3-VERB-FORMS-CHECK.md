# Spanish, batch B3: the verb forms of the cards and exercises, and the two derivation rules

Method, as in `B2-VERB-TABLES-CHECK.md`. The tables were read from Wiktionary (`wiktionary-conjugation-tables-B3.txt`). The forms of the model verbs were then looked up as words in section 4.9 of the Academy's *Manual* (OCR text; the printed book could not be compared). The verbs that are not models were compared with their models, using the Manual's index of verbs, which gives for each verb the model that it follows.

## Verbs and their models (from the index of verbs)

| Verb | Model in the Manual |
|---|---|
| *cerrar, empezar, pensar* | *acertar* [4] |
| *encontrar, almorzar* | *contar* [25] |
| *perder, entender* | *entender* [31] |
| *servir* | *pedir* [46] |
| *mentir* | *sentir* [60] |
| *morir* | *dormir* [30] (participle irregular, *muerto*) |
| *mover, devolver* | *mover* [42] (*devolver*: participle irregular, *devuelto*) |
| *crecer, parecer, conocer, agradecer* | *agradecer* [8] |
| *componer* | *poner* [49] |
| *contener, detener, mantener, obtener* | *tener* [64] |
| *contraer* | *traer* [65] |
| *producir, conducir* | *conducir* [23] |
| *valer* | *valer* [66] |

Not in the index as separate entries, and therefore formed by rule: *sacar*, *pagar*, *buscar*, *dirigir*, *elegir* (spelling), and the regular verbs *mirar*, *beber*, *vender*, *subir*, *lavar*, *recibir*, *abrir*, *llevar*, *bailar*, *tocar*, *llegar*.

## Results

1. The Wiktionary forms of the model verbs *cerrar* (against *acertar*), *contar*, *pedir*, *sentir*, *dormir*, *tener*, *poner*, *conducir*, *traer*, *salir*, *conocer* (against *agradecer*), *venir*, *dar*, and *pensar* were all found in the Manual's table for the model, apart from the imperative cells, which the OCR leaves empty.
2. Every answer of the form items in `tenses-ex`, `subjunctive-ex`, and `irregular-ex` that is a form of a verb not printed on the cards was derived from the model's forms with the stem of the verb in question, and the derived form equals the answer (a script run on 26 Oct 2026). Examples: *detuvo* from *tuvo*, *compuse* from *puse*, *produjeron* from *condujeron*, *contrajeron* from *trajeron*, *valdrá* from *saldrá*, *compondrá* from *pondrá*, *contendrá* from *tendrá*, *crezco* from *conozco*, *contraigo* from *traigo*, *mantengo* from *tengo*, *prefiramos* from *sintamos*, *quepa* (a form of the Manual's own table of *caber*). The forms *saqué* and *elijo* follow the spelling rules of §4.4.1a, and *pierdes* is *pierd-* with the ending of *comes* (the Manual has *entiendes*).
3. Words of the cards found as such in the Manual: *oyendo, cayendo, trayendo, muriendo, creyendo, leyendo, construyendo, yendo, pidiendo, sintiendo, durmiendo, diciendo, pudiendo, descubierto, deshecho, compuesto, devuelto, freído, frito, impreso, imprimido, abierto, roto, visto, vuelto, cubierto, muerto, puesto, escrito, dicho, hecho, obtuvo, valdrá, contraigo, dirijamos, averigüé, envío, actúo, anuncio, leyó, creyó, construyó, busqué, empecé, tuve, anduve, cupe, dije, hice, traje, conduje, quise, vine, pude, puse, supe, hube, estuve*. Forms not found as such are derived by the model: *mintiendo, sirviendo, compuse, produjeron, contrajeron, compondrá, contendrá, crezco, mantengo, saqué, elijo, dirijo, pagué, prefiramos, mintamos, muramos, sirvamos, llevemos*.

## The two derivation rules of the `subjunctive` deck

These are rules of teaching, not wording of the Manual. They were checked by computation on every verb whose table was fetched (the twelve of B2 and the verbs of this batch: 48 verbs):

1. **Imperfect subjunctive.** For every person of both forms (*-ra* and *-se*), the form equals the third person plural of the preterite without *-ron*, plus *-ra*, *-ras*, *-ra*, *-ramos* (with an accent on the vowel before *-ramos*), *-rais*, *-ran*, and likewise for *-se*. 48 verbs, 288 forms checked; no exception.
2. **Present subjunctive.** The first person singular equals the first person singular of the present indicative without *-o*, plus *-e* (first conjugation) or *-a* (second and third). 42 verbs whose first person ends in *-o* were checked; the only differences are four changes of spelling (*empezar* ~ *empiece*, *jugar* ~ *juegue*, *pagar* ~ *pague*, *sacar* ~ *saque*), which follow the rules of spelling. The six verbs *dar, estar, haber, ir, saber, ser*, whose present subjunctive the card lists as exceptions, were left out of the test.

## Limits

The OCR text was not compared with the printed book. For the models that share a page of the Manual (the OCR prints four models together), a form could come from a neighboring model; none of the irregular forms here is a regular form of a neighboring model.
