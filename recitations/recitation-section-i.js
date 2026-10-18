/* Whole-section recitation for Section I: built at run time from the decks' own `recitation` fields,
   joined in course order (data/structure.js) under their deck titles, so there is no second copy to keep in step.
   Returns [{ deck, title, points:[...] }, ...]; the Tablet renders each group under its title with check boxes. */
function sectionRecitation(sectionId){
  const sec = ARS.structure.find(s => s.id === sectionId);
  return sec.items
    .filter(it => it.kind === 'study' || it.kind === 'study-ex')
    .map(it => ARS.decks[it.id])
    .filter(d => d && Array.isArray(d.recitation) && d.recitation.length)
    .map(d => ({ deck: d.id, title: d.title, points: d.recitation }));
}
