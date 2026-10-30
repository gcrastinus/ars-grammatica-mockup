# Quick recitations (Quick then Full)

Ported from Ars Logica on October 30, 2026. Each deck can have a short Quick recitation of 10 to 12 lines. A student recites Quick first. Full opens in the menu only after they press Done on Quick.

## How it works for students

- The menu lists "Quick: <title>" first, then "Full: <title>". Full stays grayed, with the note 'Press "Done" on Quick to open Full.', until Done is pressed. There is no override.
- A deck the student has not finished is grayed, with one note: "Complete this deck first."
- Quick and Full each need at least 80 words of writing before the outline can be shown.
- Done appears once Quick is shown. Pressing it opens Full in the menu, says "Full is now open in the menu.", and moves focus to the menu button. The tablet stays on Quick.
- Quick and Full share one schedule per deck (lastRecitedAt, intervalStage). The entry also keeps lastKind, quickDoneAt and fullDoneAt. A deck appears once in "Time to recite again".
- When old progress loads, it is migrated once (recitations.quickMigrated = 1). A deck already recited counts as Quick done, so its Full stays open.
- Whole-section recitations have no Quick and work as before. A deck with no Quick data shows Full only.
- The tablet always uses Libre Caslon, whichever of the six fonts is chosen.

## Where the data lives

`recitation-quick.js` holds `window.__arsQuickRecitations = /*DATA*/{...}/*END*/;`, keyed by deck id. Each line is `{html, from, card}`. The committed file is empty, so every deck shows Full only until data is loaded.

## Loading drafts

The drafts are in `/workspace/deck-split-grammatica/quick-drafts/quick-all.json`, in the Editor's format: `{deck: {quick: [{html, from, verbatim, card}], leftOut, leftOutReasons}}`.

    python3 tools/integrate-quick.py --dry-run             # check only; nothing is written
    python3 tools/integrate-quick.py                       # check, then write recitation-quick.js
    python3 tools/integrate-quick.py i.sign i.imposition   # only these decks
    python3 tools/integrate-quick.py --input other.json --force

Every line is checked before anything is written:

- Every word comes from the deck's own Full lines (named in `from`), apart from the joining words and, both, but, so, or.
- `from` names real Full lines, in order.
- There are no dashes.
- The card numbers match the card map, and every card the deck covers is accounted for.
- There are 10 to 12 lines and at least 80 words.

If any deck fails, nothing is written unless you add `--force`, and then only the passing decks are written. Section keys are skipped. Decks are written in course order.

After loading, bump the `?v=` on `recitation-quick.js` in index.html, run `python3 test/quick-recitation-check.py` and `node test/run-all.js`, and look over the result before publishing.

## Checks

`test/quick-recitation-check.py` serves the site on a free port and supplies its own TEST DATA in place of `recitation-quick.js`. It checks:

- the full student path, at 1280 and 390 wide, in light and dark
- the font of the tablet under all six fonts
- that buttons and menu entries are at least 44px tall
- that there are no console errors

Screenshots go to `shots/`. Add `--before https://grammatica.studiuminstitute.org/` to take "before" shots from the live site.
