#!/usr/bin/env python3
"""Quick then Full with the REAL loaded recitation-quick.js (no test data).
   python3 test/quick-real-data-check.py [URL]   (defaults to a local server on a free port)
   Checks a set of decks at 1280 and 390 wide, light and dark, and the tablet font under all six fonts."""
import functools, http.server, os, re, sys, threading, html as H
from playwright.sync_api import sync_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.path.join(ROOT, 'shots'); os.makedirs(SHOTS, exist_ok=True)
KEY = 'ars-grammatica-course-v2'
DECKS = ['x.imitation', 'xi.traditions', 'iii.reasons', 'ix.passages', 'v.clause', 'v.order', 'v.period', 'ix.sentences',
         'iii.conjunction', 'v.figures', 'i.consignification', 'prelim.definition']
DECKS = os.environ['DECKS'].split(',') if os.environ.get('DECKS') else DECKS
SHOT_PREFIX = os.environ.get('SHOT_PREFIX', 'real')
FONTS = ['standard', 'plain', 'garamond', 'italic', 'fraktur', 'copperplate']
FILL = ('alpha bravo charlie delta echo foxtrot golf hotel india juliet kilo lima mike november oscar papa quebec romeo sierra tango uniform victor whiskey xray yankee zulu '
        'apple banana cherry damson elder fig grape hazel iris juniper kale lemon mango nutmeg olive peach quince radish sage thyme ugli vanilla walnut yam zucchini '
        'anchor bridge castle dragon engine forest garden harbor island jungle').split()
passed = failed = 0
def check(name, ok, info=''):
    global passed, failed
    if ok: passed += 1
    else: failed += 1; print('FAIL', name, info)
def plain(s): return re.sub(r'\s+', ' ', H.unescape(re.sub('<[^>]+>', '', s))).strip()

def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory=ROOT))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, 'http://127.0.0.1:%d/' % srv.server_address[1]

def load(page, url, rec, dark, font='standard'):
    page.goto(url + 'index.html')
    page.evaluate("([k, v, f]) => { localStorage.clear(); localStorage.setItem(k, JSON.stringify(v)); localStorage.setItem('arsFont', f); }",
                  [KEY, dict(rec, dark=dark, view={'level': 'comprehensive', 'langs': ['en'], 'lang': 'en', 'lastLang': 'en'}), font])
    page.reload(); page.wait_for_selector('#recite-open')
def open_tablet(page):
    page.click('#recite-open'); page.wait_for_selector('#recite-menu-list[data-ready="1"]', state='attached')
def open_menu(page):
    if page.get_attribute('#recite-menu-btn', 'aria-expanded') != 'true': page.click('#recite-menu-btn')
def opt(page, k): return page.locator('.recite-opt[data-key="%s"]' % k)
def store(page): return page.evaluate("k => JSON.parse(localStorage.getItem(k) || '{}')", KEY)
def typ(page, t): page.fill('#recite-text', t); page.dispatch_event('#recite-text', 'input')

def one_deck(page, url, deck, dark, tag, quick, shoot):
    errs = []
    page.on('pageerror', lambda e: errs.append(str(e)))
    page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    t = tag + ' ' + deck
    load(page, url, {}, dark); open_tablet(page); open_menu(page)
    check(t + ' unstudied: one note', opt(page, deck).is_disabled() and opt(page, deck).locator('.recite-opt-note').all_inner_texts() == ['Complete this deck first.'] and opt(page, 'quick:' + deck).count() == 0)
    load(page, url, {'decks': {deck: {'done': True}}}, dark); open_tablet(page); open_menu(page)
    keys = page.eval_on_selector_all('.recite-opt', "els => els.map(e => e.dataset.key)")
    check(t + ' quick right before full', keys.index('quick:' + deck) == keys.index(deck) - 1)
    qn = opt(page, 'quick:' + deck).locator('.recite-opt-name').inner_text(); fn = opt(page, deck).locator('.recite-opt-name').inner_text()
    check(t + ' labels', qn.startswith('Quick: ') and fn == 'Full: ' + qn[7:], (qn, fn))
    check(t + ' full grayed with note', opt(page, deck).is_disabled() and opt(page, deck).locator('.recite-opt-note').inner_text() == 'Press "Done" on Quick to open Full.')
    hs = page.eval_on_selector_all('.recite-opt', "els => els.filter(e => e.offsetParent).map(e => e.getBoundingClientRect().height)")
    check(t + ' entries >= 44px', min(hs) >= 44, min(hs))
    if shoot: page.screenshot(path=f'{SHOTS}/{SHOT_PREFIX}-{tag}-{deck}-menu.png')
    opt(page, 'quick:' + deck).click()
    typ(page, ' '.join(FILL[:60]))
    check(t + ' 60 words not enough', page.is_disabled('#recite-see'))
    lines = [plain(l['html']) for l in quick[deck]]
    words = ' '.join(lines).split()
    typ(page, ' '.join(words if len(words) >= 80 else words * 2))
    check(t + ' 80+ words enough', not page.is_disabled('#recite-see'))
    page.click('#recite-see')
    shown = [re.sub(r'\s+', ' ', x).strip() for x in page.eval_on_selector_all('#recite-full .recite-point', "els => els.map(e => e.textContent)")]
    check(t + ' quick lines shown exactly', shown == lines, (len(shown), len(lines), shown[:1], lines[:1]))
    check(t + ' done visible', page.is_visible('#recite-done'))
    page.click('#recite-done')
    check(t + ' done: stays on quick, note, focus', page.inner_text('#recite-menu-label') == qn and page.inner_text('#recite-done-msg') == 'Full is now open in the menu.' and page.evaluate('document.activeElement.id') == 'recite-menu-btn')
    if shoot: page.screenshot(path=f'{SHOTS}/{SHOT_PREFIX}-{tag}-{deck}-done.png')
    open_menu(page)
    check(t + ' full open', not opt(page, deck).is_disabled())
    opt(page, deck).click()
    full = page.evaluate("id => ARS.decks[id].recitation", deck)
    fw = ' '.join(plain(x) for x in full).split()
    typ(page, ' '.join(fw if len(fw) >= 80 else fw * 3)); page.click('#recite-see')
    it = store(page)['recitations']['items']
    check(t + ' one schedule entry', [k for k in it if deck in k] == [deck] and it[deck].get('lastKind') == 'full' and it[deck].get('intervalStage') == 1 and it[deck].get('quickDoneAt') and it[deck].get('fullDoneAt'), list(it))
    page.click('#recite-close')
    page.evaluate("k => { const s = JSON.parse(localStorage.getItem(k)); for (const i of Object.values(s.recitations.items)) { i.lastRecitedAt -= 10*864e5; for (const r of [i.quick, i]) if (r && r.revealedAt) r.revealedAt -= 10*864e5; } localStorage.setItem(k, JSON.stringify(s)); }", KEY)
    page.reload(); page.wait_for_selector('#recite-due:not([hidden])')
    due = page.locator('#recite-due .recite-due-btn').all_inner_texts()
    check(t + ' due once', len(due) == 1 and due[0] == qn[7:], due)
    if shoot: page.locator('#recite-due').scroll_into_view_if_needed(); page.screenshot(path=f'{SHOTS}/{SHOT_PREFIX}-{tag}-{deck}-due.png')
    check(t + ' no console errors', not errs, errs)

def run(url):
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox'])
        c = b.new_context(); pg = c.new_page(); pg.goto(url + 'index.html'); pg.wait_for_selector('#recite-open')
        # decks in the course with Quick lines; recitation-quick.js may still hold an entry for a removed deck
        # (xi.modern, dissolved 30 Oct 2026) until integrate-quick regenerates it, and such an entry is never shown
        quick = pg.evaluate("Object.keys(window.__arsQuickRecitations).filter(id => ARS.structure.some(s => s.items.some(i => i.id === id)))")
        check('60 decks loaded', len(quick) == 60, len(quick)); c.close()
        for width in (1280, 390):
            for dark in (False, True):
                tag = '%d-%s' % (width, 'dark' if dark else 'light')
                for i, d in enumerate(DECKS):
                    c = b.new_context(viewport={'width': width, 'height': 900 if width > 400 else 844}); pg = c.new_page()
                    one_deck(pg, url, d, dark, tag, quick, i < 2); c.close()
        for width in (1280, 390):
            for dark in (False, True):
                for f in FONTS:
                    c = b.new_context(viewport={'width': width, 'height': 900 if width > 400 else 844}); pg = c.new_page(); errs = []
                    pg.on('pageerror', lambda e: errs.append(str(e)))
                    load(pg, url, {'decks': {'v.clause': {'done': True}}}, dark, f); open_tablet(pg); open_menu(pg); opt(pg, 'quick:v.clause').click()
                    typ(pg, ' '.join(plain(l['html']) for l in quick['v.clause'])); pg.click('#recite-see')
                    fams = pg.evaluate("""() => ['#recite-heading','#recite-text','#recite-done','#recite-see','#recite-menu-label','.recite-full-h','.recite-point span','#recite-close']
                        .map(s => [s, document.querySelector(s) ? getComputedStyle(document.querySelector(s)).fontFamily : 'none'])""")
                    bad = [x for x in fams if 'Libre Caslon' not in x[1].split(',')[0]]
                    tag = '%d-%s-%s' % (width, 'dark' if dark else 'light', f)
                    check(tag + ' tablet Libre Caslon', not bad and (f == 'standard' or pg.get_attribute('html', 'data-font') == f), bad)
                    pg.screenshot(path=f'{SHOTS}/{SHOT_PREFIX}-font-{tag}.png')
                    check(tag + ' no errors', not errs, errs); c.close()
        b.close()

if __name__ == '__main__':
    srv = None
    if len(sys.argv) > 1: url = sys.argv[1].rstrip('/') + '/'
    else: srv, url = serve()
    try: run(url)
    finally:
        if srv: srv.shutdown()
    print('%d checks passed, %d failed.' % (passed, failed)); sys.exit(1 if failed else 0)
