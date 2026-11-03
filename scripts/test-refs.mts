// Checks how typed references are read, against the real book lists and verse counts.
// Run: node --experimental-strip-types scripts/test-refs.mts
// Cases: references people write in sermon notes, in Swahili and English, and ordinary
// words and numbers that must stay plain text.
import { DatabaseSync } from 'node:sqlite';
import { findReferences, parseReference } from '../src/refs.ts';
import { formatRef } from '../src/text.ts';

type Expect = [string, string];

function load(translation: 'SWU' | 'SWN' | 'SWM' | 'KJV') {
  const db = new DatabaseSync(new URL('../assets/db/bible-sw.db', import.meta.url).pathname, { readOnly: true });
  const rows = db.prepare('SELECT id, osis, name, testament, chapters FROM books ORDER BY id').all() as any[];
  const names = db.prepare('SELECT translation, book, name FROM book_names').all() as any[];
  const books = rows.map((b) => ({ ...b, names: Object.fromEntries(names.filter((n) => n.book === b.id).map((n) => [n.translation, n.name])) }));
  const counts = new Map<string, number>();
  for (const r of db.prepare('SELECT book, chapter, MAX(verse) AS n FROM verses WHERE translation = ? GROUP BY book, chapter').all(translation) as any[]) counts.set(`${r.book}:${r.chapter}`, r.n);
  return { db, books, translation, count: (b: number, c: number) => counts.get(`${b}:${c}`) };
}

/** The references found in a line, written as book:chapter:verse[-chapter:verse]. */
function links(text: string, ctx: ReturnType<typeof load>): string {
  return findReferences(text, ctx.books as any, ctx.translation as any, ctx.count)
    .filter((p) => p.ref)
    .map((p) => {
      const r = p.ref!;
      const range = r.toChapter !== r.chapter ? `-${r.toChapter}:${r.toVerse}` : r.toVerse !== r.verse ? `-${r.toVerse}` : '';
      return `${r.book}:${r.chapter}${r.chapterOnly ? '' : `:${r.verse}`}${range}`;
    })
    .join(' ');
}

const SW: Expect[] = [
  ['Jinsi Mungu alivyoupenda ulimwengu: Yohana 3:16', '43:3:16'],
  ['Upendo – 1 Kor 13:4-7', '46:13:4-7'],
  ['1 Wakorintho 13:4-7', '46:13:4-7'],
  ['Yn 3:16; 4:24', '43:3:16 43:4:24'],
  ['Rum 8:28, 29', '45:8:28 45:8:29'],
  ['Warumi 8', '45:8'],
  ['Efe 2:8, 9', '49:2:8 49:2:9'],
  ['Mt 5:1-7:29', '40:5:1-7:29'],
  ['Mathayo 5:3', '40:5:3'],
  ['Zaburi 23', '19:23'],
  ['Zab 23', '19:23'],
  ['Yuda 24', '65:1:24'],
  ['Filemoni 6', '57:1:6'],
  ['Obadia 15', '31:1:15'],
  ['3 Yohana 2', '64:1:2'],
  ['1 Yohana 4:8', '62:4:8'],
  ['Mithali 3:5', '20:3:5'],
  ['Methali 3:5', '20:3:5'],
  ['Wafilipi 4:13', '50:4:13'],
  ['Marko 16:15', '41:16:15'],
  ['Matendo ya Mitume 2:1-4 (Pentekoste)', '44:2:1-4'],
  ['Mdo 2:38', '44:2:38'],
  ['Kumbukumbu la Torati 6:4', '5:6:4'],
  ['Mambo ya Walawi 19:18', '3:19:18'],
  ['Walawi 19:18', '3:19:18'],
  ['Wimbo Ulio Bora 2:1', '22:2:1'],
  ['Waebrania 11:1', '58:11:1'],
  ['Wahebrania 11:1', '58:11:1'],
  ['2 Nyakati 7:14', '14:7:14'],
  ['Ufunuo 22:21', '66:22:21'],
  ['Mwa 1:1', '1:1:1'],
  ['Zaburi 3 (kichwa)', '19:3:0'],
  // Ordinary words and numbers: no link.
  ['Yesu aliwachagua wanafunzi 12', ''],
  ['Yesu alifunga siku 40', ''],
  ['watu 5000 walilishwa', ''],
  ['Mkutano ni saa 7:30 jioni', ''],
  ['mkate na samaki 2', ''],
  ['na 5 zaidi', ''],
];

const EN: Expect[] = [
  ['Rom 8:28, 1 Cor 2:9', '45:8:28 46:2:9'],
  ['Romans 8:28, 29', '45:8:28 45:8:29'],
  ['Read John 3:16 and Ps 23:1-3 today.', '43:3:16 19:23:1-3'],
  ['Romans 8', '45:8'],
  ['Ps 23', '19:23'],
  ['Jude 3', '65:1:3'],
  ['3 John 4', '64:1:4'],
  ['2 John 12', '63:1:12'],
  ['1 John 6:1', ''],
  ['Song of Songs 2:1', '22:2:1'],
  ['John 3:16-18, 20', '43:3:16-18 43:3:20'],
  ['Genesis 1:1–2:3', '1:1:1-2:3'],
  ['Psalms 3 (title)', '19:3:0'],
  ['Daniel 1260 days', ''],
  ['John 2024 notes', ''],
  ['Genesis 1000 years', ''],
  ['Prayer meeting is 7:30 tonight', ''],
  ['he 1:3', ''],
  ['Number 12', ''],
  ['mark 3 people', ''],
  ['Romans 8 is long; is 5 people; I am 3 years old.', '45:8'],
];

const SEARCH: Expect[] = [
  ['Yohana 3:16', '43:3:16'],
  ['yohana 3 16', '43:3:16'],
  ['Zab 23', '19:23:1'],
  ['1 kor 13', '46:13:1'],
  ['ufunuo 21:4', '66:21:4'],
  ['John 3:16', '43:3:16'],
  ['Gen 1', '1:1:1'],
  ['Ps 23:1-6', '19:23:1'],
  ['Mat 5', '40:5:1'],
  ['Yoh 1:1', '43:1:1'],
];

let failed = 0;
for (const [translation, cases] of [['SWU', SW], ['SWN', SW], ['SWM', SW], ['KJV', EN]] as const) {
  const ctx = load(translation);
  for (const [text, want] of cases) {
    const got = links(text, ctx);
    if (got !== want) {
      failed++;
      console.log(`FAIL ${translation} ${JSON.stringify(text)}: got "${got}", want "${want}"`);
    }
  }
  for (const [text, want] of SEARCH) {
    const r = parseReference(text, ctx.books as any, ctx.translation as any);
    const got = r ? `${r.book}:${r.chapter}:${r.verse}` : '';
    if (got !== want) {
      failed++;
      console.log(`FAIL search ${translation} ${JSON.stringify(text)}: got "${got}", want "${want}"`);
    }
  }
  // Every verse, written the way "Add to notebook" writes it, reads back as itself.
  let bad = 0;
  for (const v of ctx.db.prepare('SELECT book, chapter, verse FROM verses WHERE translation = ?').all(ctx.translation) as any[]) {
    const label = formatRef(ctx.books as any, v, ctx.translation as any);
    const got = links(label, ctx);
    if (got !== `${v.book}:${v.chapter}:${v.verse}`) {
      if (bad++ < 5) console.log(`FAIL round trip ${translation} ${label}: got "${got}"`);
    }
  }
  failed += bad;
  console.log(`${translation}: ${cases.length} cases, round trip ${bad ? `${bad} failures` : 'clean'}`);
}
console.log(failed ? `${failed} FAILED` : 'all passed');
process.exit(failed ? 1 : 0);
