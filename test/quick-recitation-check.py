#!/usr/bin/env python3
"""Browser check for Quick then Full in the Recitation Tablet (Oct 30, 2026).
   python3 test/quick-recitation-check.py [--before URL]   (Playwright for Python, Chromium)
   The committed recitation-quick.js is empty, so this check serves TEST DATA in its place: for i.sign and
   i.imposition, eleven of each deck's own Full lines, word for word. TEST DATA ONLY, never shipped.
   i.consignification gets no Quick, to check that a deck without Quick shows Full only.
   Screenshots go to shots/. With --before URL it also takes the "before" shots from the live site."""
import functools, http.server, json, os, sys, threading, time
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.path.join(ROOT, 'shots'); os.makedirs(SHOTS, exist_ok=True)
KEY = 'ars-grammatica-course-v2'
QUICK_DECKS = ['i.sign', 'i.imposition']
FONTS = ['standard', 'plain', 'garamond', 'italic', 'fraktur', 'copperplate']
WORDS = [w for w in ('alpha bravo charlie delta echo foxtrot golf hotel india juliet kilo lima mike november oscar papa quebec romeo sierra tango uniform victor whiskey xray yankee zulu '
         'apple banana cherry damson elder fig grape hazel iris juniper kale lemon mango nutmeg olive peach quince radish sage thyme ugli vanilla walnut yam zucchini '
         'anchor bridge castle dragon engine forest garden harbor island jungle kettle ladder meadow needle orchard palace quarry river saddle temple valley window yonder '
         'amber bronze copper silver golden scarlet violet indigo crimson azure ivory ebony coral pearl ruby sapphire topaz emerald garnet opal jasper onyx quartz agate beryl '
         'sign word voice mind concept thing natural conventional smoke fire gesture writing letter sound meaning signify imposition grammar speech sentence phrase').split()]
passed = failed = 0
def check(name, ok, info=''):
    global passed, failed
    if ok: passed += 1
    else: failed += 1; print('FAIL', name, info)

def text_of(n): return ' '.join(WORDS[:n])

def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    h = functools.partial(Q, directory=ROOT)
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, 'http://127.0.0.1:%d/' % srv.server_address[1]

def full_lines(page, deck):
    return page.evaluate("id => loadDeck(id).then(d => d.recitation)", deck)

def store(page): return page.evaluate("k => JSON.parse(localStorage.getItem(k) || '{}')", KEY)

def open_tablet(page):
    page.click('#recite-open'); page.wait_for_selector('#recite-menu-list[data-ready="1"]', state='attached')

def open_menu(page):
    if page.get_attribute('#recite-menu-btn', 'aria-expanded') != 'true': page.click('#recite-menu-btn')

def opt(page, key): return page.locator('.recite-opt[data-key="%s"]' % key)

def load(page, url, rec, dark, font='standard'):
    page.goto(url + 'about:blank' if False else url + 'index.html')
    page.evaluate("([k, v, f]) => { localStorage.clear(); localStorage.setItem(k, JSON.stringify(v)); localStorage.setItem('arsFont', f); }",
                  [KEY, dict(rec, dark=dark, view={'level': 'comprehensive', 'langs': ['en'], 'lang': 'en', 'lastLang': 'en'}), font])
    page.reload(); page.wait_for_selector('#recite-open')

def run(url, before=None):
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox'])
        # Test Quick data from the decks' own Full lines (TEST DATA).
        ctx0 = b.new_context(); pg0 = ctx0.new_page(); pg0.goto(url + 'index.html'); pg0.wait_for_selector('#recite-open')
        quick = {d: [{'html': l, 'card': 'TEST', 'from': [i + 1]} for i, l in enumerate(full_lines(pg0, d)[:11])] for d in QUICK_DECKS}
        ctx0.close()
        body = "'use strict';/* TEST DATA */window.__arsQuickRecitations = " + json.dumps(quick) + ";"
        done = {'decks': {d: {'done': True} for d in ['i.sign', 'i.imposition', 'i.consignification']}}
        for width in (1280, 390):
            for dark in (False, True):
                tag = '%d-%s' % (width, 'dark' if dark else 'light')
                ctx = b.new_context(viewport={'width': width, 'height': 900 if width > 400 else 844})
                ctx.route('**/recitation-quick.js*', lambda r: r.fulfill(status=200, content_type='text/javascript', body=body))
                page = ctx.new_page(); errs = []
                page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
                page.on('pageerror', lambda e: errs.append(str(e)))
                # 1. unstudied
                load(page, url, {}, dark); open_tablet(page); open_menu(page)
                o = opt(page, 'i.sign')
                check(tag + ' unstudied disabled', o.is_disabled())
                check(tag + ' unstudied one note', o.locator('.recite-opt-note').all_inner_texts() == ['Complete this deck first.'], o.inner_text())
                check(tag + ' unstudied no quick entry', opt(page, 'quick:i.sign').count() == 0)
                check(tag + ' no recite anyway', 'anyway' not in page.inner_text('#recite-menu-list').lower())
                page.screenshot(path=f'{SHOTS}/{tag}-1-unstudied.png')
                # 2. after finishing
                load(page, url, done, dark); open_tablet(page); open_menu(page)
                keys = page.eval_on_selector_all('.recite-opt', "els => els.map(e => e.dataset.key)")
                check(tag + ' quick before full', keys.index('quick:i.sign') == keys.index('i.sign') - 1, keys[:8])
                check(tag + ' quick label', opt(page, 'quick:i.sign').locator('.recite-opt-name').inner_text() == 'Quick: Sign and Symbol')
                check(tag + ' full label', opt(page, 'i.sign').locator('.recite-opt-name').inner_text() == 'Full: Sign and Symbol')
                check(tag + ' full grayed', opt(page, 'i.sign').is_disabled())
                check(tag + ' full note', opt(page, 'i.sign').locator('.recite-opt-note').inner_text() == 'Press "Done" on Quick to open Full.')
                check(tag + ' no-quick deck full only', opt(page, 'quick:i.consignification').count() == 0 and not opt(page, 'i.consignification').is_disabled()
                      and opt(page, 'i.consignification').locator('.recite-opt-name').inner_text() == 'Signification and Consignification')
                hs = page.eval_on_selector_all('.recite-opt', "els => els.filter(e => e.offsetParent).map(e => e.getBoundingClientRect().height)")
                check(tag + ' menu entries >= 44px', hs and min(hs) >= 44, min(hs) if hs else None)
                page.screenshot(path=f'{SHOTS}/{tag}-2-menu-after-finish.png')
                # 3. Quick: 60 not enough, 80 enough
                opt(page, 'quick:i.sign').click()
                check(tag + ' tablet label quick', page.inner_text('#recite-menu-label') == 'Quick: Sign and Symbol')
                page.fill('#recite-text', text_of(60)); page.dispatch_event('#recite-text', 'input')
                check(tag + ' 60 words not enough', page.is_disabled('#recite-see') and page.is_visible('#recite-note'))
                check(tag + ' quick button text', page.inner_text('#recite-see') == 'See quick recitation')
                check(tag + ' done hidden before reveal', not page.is_visible('#recite-done'))
                page.fill('#recite-text', text_of(80)); page.dispatch_event('#recite-text', 'input')
                check(tag + ' 80 words enough', not page.is_disabled('#recite-see'))
                page.click('#recite-see')
                check(tag + ' quick outline shown', page.locator('#recite-full .recite-point').count() == 11 and page.text_content('.recite-full-h') == 'Quick recitation')
                check(tag + ' done visible', page.is_visible('#recite-done'))
                bh = [page.eval_on_selector(s, 'e => e.getBoundingClientRect().height') for s in ('#recite-done', '#recite-print', '#recite-new')]
                check(tag + ' buttons >= 44px', min(bh) >= 44, bh)
                it = store(page)['recitations']['items']
                check(tag + ' quick sets schedule', it['i.sign'].get('lastRecitedAt') and it['i.sign'].get('intervalStage') == 0 and it['i.sign'].get('lastKind') == 'quick')
                check(tag + ' no separate quick item', [k for k in it if 'quick' in k] == [])
                page.screenshot(path=f'{SHOTS}/{tag}-3-quick-revealed.png')
                # 4. Done
                page.click('#recite-done')
                check(tag + ' done does not switch', page.inner_text('#recite-menu-label') == 'Quick: Sign and Symbol')
                check(tag + ' done note', page.is_visible('#recite-done-msg') and page.inner_text('#recite-done-msg') == 'Full is now open in the menu.')
                check(tag + ' focus on menu button', page.evaluate("document.activeElement.id") == 'recite-menu-btn')
                check(tag + ' quickDoneAt', bool(store(page)['recitations']['items']['i.sign'].get('quickDoneAt')))
                page.screenshot(path=f'{SHOTS}/{tag}-3b-after-done.png')
                open_menu(page)
                check(tag + ' full unlocked', not opt(page, 'i.sign').is_disabled() and opt(page, 'i.sign').locator('.recite-opt-note').count() == 0)
                page.screenshot(path=f'{SHOTS}/{tag}-4-full-unlocked-menu.png')
                # 5. Full updates the same entry
                opt(page, 'i.sign').click()
                page.fill('#recite-text', text_of(len(WORDS))); page.dispatch_event('#recite-text', 'input')
                check(tag + ' full see enabled', not page.is_disabled('#recite-see'))
                page.click('#recite-see')
                it = store(page)['recitations']['items']
                s = it['i.sign']
                check(tag + ' full same entry', s.get('intervalStage') == 1 and s.get('lastKind') == 'full' and s.get('fullDoneAt') and len([k for k in it if 'i.sign' in k]) == 1, s.get('intervalStage'))
                page.screenshot(path=f'{SHOTS}/{tag}-5-full-revealed.png')
                # 6. Time to recite again: once
                page.click('#recite-close')
                page.evaluate("k => { const s = JSON.parse(localStorage.getItem(k)); const i = s.recitations.items['i.sign']; i.lastRecitedAt -= 10*864e5; i.quick.revealedAt -= 10*864e5; localStorage.setItem(k, JSON.stringify(s)); }", KEY)
                page.reload(); page.wait_for_selector('#recite-due:not([hidden])')
                due = page.locator('#recite-due .recite-due-btn').all_inner_texts()
                check(tag + ' due once', due.count('Sign and Symbol') == 1 and len(due) == 1, due)
                page.locator('#recite-due').scroll_into_view_if_needed()
                page.screenshot(path=f'{SHOTS}/{tag}-6-due.png')
                # 7. old progress migrates
                T = int(time.time() * 1000) - 2 * 864e5
                old = dict(done, recitations={'unlocked': {'i.sign': True, 'i.imposition': True}, 'lastKey': 'i.sign', 'items': {
                    'i.sign': {'text': 'old', 'locked': True, 'revealedAt': T, 'groups': [{'deck': 'i.sign', 'title': 'Sign and Symbol', 'points': [{'text': 'x', 'checked': True}]}],
                               'record': None, 'lastRecitedAt': T, 'intervalStage': 1}}})
                load(page, url, old, dark); open_tablet(page)
                r = store(page)['recitations']; s = r['items']['i.sign']
                check(tag + ' migrated', r.get('quickMigrated') == 1 and s.get('quickDoneAt') == T and s.get('intervalStage') == 1 and s.get('lastRecitedAt') == T and s.get('lastKind') == 'full')
                check(tag + ' migrated opens full', page.inner_text('#recite-menu-label') == 'Full: Sign and Symbol', page.inner_text('#recite-menu-label'))
                open_menu(page)
                check(tag + ' migrated full open', not opt(page, 'i.sign').is_disabled())
                check(tag + ' never-recited deck: Full still closed', opt(page, 'i.imposition').is_disabled())  # i.imposition had no item: Quick still first
                page.screenshot(path=f'{SHOTS}/{tag}-7-old-progress-tablet.png')
                # 8. whole section: unchanged (no Quick entry, same label and rule)
                sec = opt(page, 'section:i')
                check(tag + ' section no quick', opt(page, 'quick:section:i').count() == 0 and sec.locator('.recite-opt-name').inner_text() == 'Section I: Sign and Significant Voice, whole section')
                check(tag + ' section note', sec.locator('.recite-opt-note').inner_text() == 'Complete every deck in this section first.')
                check(tag + ' no console errors', not errs, errs)
                ctx.close()
        # 9. fonts: tablet stays Libre Caslon
        for f in FONTS:
            ctx = b.new_context(viewport={'width': 1280, 'height': 900})
            ctx.route('**/recitation-quick.js*', lambda r: r.fulfill(status=200, content_type='text/javascript', body=body))
            page = ctx.new_page(); errs = []
            page.on('pageerror', lambda e: errs.append(str(e)))
            load(page, url, done, False, f); open_tablet(page); open_menu(page); opt(page, 'quick:i.sign').click()
            page.fill('#recite-text', text_of(90)); page.dispatch_event('#recite-text', 'input'); page.click('#recite-see')
            check('font ' + f + ' applied', page.get_attribute('html', 'data-font') == f or f == 'standard')
            fams = page.evaluate("""() => ['#recite-heading', '#recite-text', '#recite-done', '#recite-see', '#recite-menu-label', '.recite-full-h', '.recite-point span', '.recite-desc summary', '#recite-close']
                .map(s => [s, document.querySelector(s) ? getComputedStyle(document.querySelector(s)).fontFamily : 'none'])""")
            bad = [x for x in fams if 'Libre Caslon' not in x[1].split(',')[0]]
            check('font ' + f + ' tablet Libre Caslon', not bad, bad)
            open_menu(page)
            o = page.evaluate("getComputedStyle(document.querySelector('.recite-opt-name')).fontFamily")
            check('font ' + f + ' menu Libre Caslon', 'Libre Caslon' in o.split(',')[0], o)
            page.keyboard.press('Escape')
            page.screenshot(path=f'{SHOTS}/1280-light-font-{f}.png')
            check('font ' + f + ' no errors', not errs, errs)
            ctx.close()
        # before: live site
        if before:
            for width in (1280, 390):
                for dark in (False, True):
                    tag = 'before-%d-%s' % (width, 'dark' if dark else 'light')
                    ctx = b.new_context(viewport={'width': width, 'height': 900 if width > 400 else 844}); page = ctx.new_page()
                    load(page, before, {}, dark); open_tablet(page); open_menu(page); page.screenshot(path=f'{SHOTS}/{tag}-1-unstudied.png')
                    load(page, before, done, dark); open_tablet(page); open_menu(page); page.screenshot(path=f'{SHOTS}/{tag}-2-menu-after-finish.png')
                    ctx.close()
        b.close()

if __name__ == '__main__':
    srv, url = serve()
    before = sys.argv[sys.argv.index('--before') + 1] if '--before' in sys.argv else None
    try: run(url, before)
    finally: srv.shutdown()
    print('%d checks passed, %d failed.' % (passed, failed))
    sys.exit(1 if failed else 0)
