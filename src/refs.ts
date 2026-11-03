import type { Book, Ref, TranslationId } from './types';

/**
 * Short book names for the reader's top bar, used when the full name and the chapter
 * number do not fit beside the buttons ("2 Wathesalonike" becomes "2 The"). Indexed by
 * book id - 1. The Swahili are the Neno Bibles' own abbreviations (\toc3), with a space
 * after the number; the English are the usual abbreviations.
 */
export const SWAHILI_SHORT_NAMES = [
  'Mwa', 'Kut', 'Law', 'Hes', 'Kum', 'Yos', 'Amu', 'Rut', '1 Sam', '2 Sam',
  '1 Fal', '2 Fal', '1 Nya', '2 Nya', 'Ezr', 'Neh', 'Es', 'Ay', 'Zab', 'Mit',
  'Mhu', 'Wim', 'Isa', 'Yer', 'Mao', 'Eze', 'Dan', 'Hos', 'Yoe', 'Amo',
  'Oba', 'Yon', 'Mik', 'Nah', 'Hab', 'Sef', 'Hag', 'Zek', 'Mal', 'Mt',
  'Mk', 'Lk', 'Yn', 'Mdo', 'Rum', '1 Kor', '2 Kor', 'Gal', 'Efe', 'Flp',
  'Kol', '1 The', '2 The', '1 Tim', '2 Tim', 'Tit', 'Flm', 'Ebr', 'Yak', '1 Pet',
  '2 Pet', '1 Yn', '2 Yn', '3 Yn', 'Yud', 'Ufu',
];

export const ENGLISH_SHORT_NAMES = [
  'Gen', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1 Sam', '2 Sam',
  '1 Kgs', '2 Kgs', '1 Chr', '2 Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Prov',
  'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos',
  'Obad', 'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal', 'Matt',
  'Mark', 'Luke', 'John', 'Acts', 'Rom', '1 Cor', '2 Cor', 'Gal', 'Eph', 'Phil',
  'Col', '1 Thess', '2 Thess', '1 Tim', '2 Tim', 'Titus', 'Phlm', 'Heb', 'Jas', '1 Pet',
  '2 Pet', '1 John', '2 John', '3 John', 'Jude', 'Rev',
];

/**
 * Common ways people type book names, mapped to book ids. Full names and any
 * unambiguous prefix of a full name are also accepted by parseReference.
 */
const ABBREVIATIONS: Record<string, number> = {
  gen: 1, ge: 1, gn: 1, exo: 2, ex: 2, exod: 2, lev: 3, le: 3, lv: 3, num: 4, nu: 4, nm: 4, nb: 4, deu: 5, deut: 5, dt: 5, de: 5,
  jos: 6, josh: 6, jsh: 6, jdg: 7, judg: 7, jg: 7, jdgs: 7, rut: 8, ru: 8, rth: 8,
  '1sa': 9, '1sam': 9, '1sm': 9, '1s': 9, '2sa': 10, '2sam': 10, '2sm': 10, '2s': 10,
  '1ki': 11, '1kgs': 11, '1kg': 11, '1k': 11, '2ki': 12, '2kgs': 12, '2kg': 12, '2k': 12,
  '1ch': 13, '1chr': 13, '1chron': 13, '2ch': 14, '2chr': 14, '2chron': 14,
  ezr: 15, ezra: 15, neh: 16, ne: 16, est: 17, esth: 17, es: 17, job: 18, jb: 18,
  psa: 19, ps: 19, pss: 19, psalm: 19, psalms: 19, psm: 19, pro: 20, prov: 20, pr: 20, prv: 20,
  ecc: 21, eccl: 21, ec: 21, qoh: 21, sng: 22, song: 22, sos: 22, so: 22, ss: 22, canticles: 22, cant: 22,
  isa: 23, is: 23, jer: 24, je: 24, jr: 24, lam: 25, la: 25, ezk: 26, ezek: 26, eze: 26, dan: 27, da: 27, dn: 27,
  hos: 28, ho: 28, jol: 29, joel: 29, jl: 29, amo: 30, amos: 30, am: 30, oba: 31, obad: 31, ob: 31,
  jon: 32, jonah: 32, jnh: 32, mic: 33, mi: 33, nam: 34, nah: 34, na: 34, hab: 35, hb: 35, zep: 36, zeph: 36, zp: 36,
  hag: 37, hg: 37, zec: 38, zech: 38, zc: 38, mal: 39, ml: 39,
  mat: 40, matt: 40, mt: 40, mrk: 41, mark: 41, mk: 41, mr: 41, luk: 42, luke: 42, lk: 42, lu: 42,
  jhn: 43, john: 43, jn: 43, joh: 43, act: 44, acts: 44, ac: 44, rom: 45, ro: 45, rm: 45,
  '1co': 46, '1cor': 46, '1corinthians': 46, '2co': 47, '2cor': 47, '2corinthians': 47,
  gal: 48, ga: 48, eph: 49, ep: 49, php: 50, phil: 50, pp: 50, col: 51, co: 51,
  '1th': 52, '1thess': 52, '1thes': 52, '1ts': 52, '2th': 53, '2thess': 53, '2thes': 53, '2ts': 53,
  '1ti': 54, '1tim': 54, '1tm': 54, '2ti': 55, '2tim': 55, '2tm': 55, tit: 56, ti: 56,
  phm: 57, philem: 57, phlm: 57, heb: 58, he: 58, jas: 59, jam: 59, jm: 59,
  '1pe': 60, '1pet': 60, '1pt': 60, '1p': 60, '2pe': 61, '2pet': 61, '2pt': 61, '2p': 61,
  '1jn': 62, '1john': 62, '1jo': 62, '1j': 62, '2jn': 63, '2john': 63, '2jo': 63, '2j': 63, '3jn': 64, '3john': 64, '3jo': 64, '3j': 64,
  jud: 65, jude: 65, jd: 65, rev: 66, re: 66, rv: 66, apoc: 66,
};

/**
 * Swahili abbreviations people write, beside the short names above (which are accepted
 * too): the Union Version's and common church usage. Keys are lower case without spaces.
 */
const SWAHILI_ABBREVIATIONS: Record<string, number> = {
  mwa: 1, kut: 2, law: 3, wal: 3, hes: 4, kum: 5, yos: 6, amu: 7, waa: 7, rut: 8, ruth: 8,
  '1sam': 9, '2sam': 10, '1fal': 11, '2fal': 12, '1waf': 11, '2waf': 12, '1nya': 13, '2nya': 14,
  ezr: 15, neh: 16, es: 17, est: 17, ay: 18, ayu: 18, zab: 19, zb: 19, mit: 20, mith: 20, mhu: 21, wim: 22,
  isa: 23, yer: 24, mao: 25, omb: 25, eze: 26, ezek: 26, dan: 27, hos: 28, yoe: 29, amo: 30, oba: 31, yon: 32,
  mik: 33, nah: 34, hab: 35, sef: 36, hag: 37, zek: 38, zak: 38, mal: 39,
  mt: 40, mat: 40, mk: 41, lk: 42, luk: 42, yn: 43, yoh: 43, mdo: 44, rum: 45, war: 45,
  '1kor': 46, '2kor': 47, gal: 48, wag: 48, efe: 49, waef: 49, flp: 50, waf: 50, kol: 51,
  '1the': 52, '2the': 53, '1thes': 52, '2thes': 53, '1tim': 54, '2tim': 55, tit: 56, flm: 57,
  ebr: 58, wae: 58, waeb: 58, yak: 59, '1pet': 60, '2pet': 61, '1pe': 60, '2pe': 61,
  '1yn': 62, '2yn': 63, '3yn': 64, '1yoh': 62, '2yoh': 63, '3yoh': 64, yud: 65, ufu: 66, uf: 66,
};

/**
 * Other Swahili names for books, beside the names the three Swahili Bibles print: the
 * longer names of the Union Version (Kumbukumbu la Torati, Matendo ya Mitume, Wimbo Ulio
 * Bora) and other spellings. A number in front of a name comes from the book, so names
 * here have none.
 */
const SWAHILI_NAMES: Record<number, string[]> = {
  3: ['Mambo ya Walawi', 'Walawi'], 5: ['Kumbukumbu la Torati', 'Kumbukumbu', 'Torati'], 8: ['Ruthu', 'Ruth'],
  9: ['Samweli', 'Samueli'], 10: ['Samweli', 'Samueli'], 11: ['Wafalme'], 12: ['Wafalme'], 13: ['Nyakati'], 14: ['Nyakati'],
  17: ['Esta', 'Esther'], 18: ['Ayubu'], 19: ['Zaburi'], 20: ['Mithali', 'Methali'], 21: ['Mhubiri'],
  22: ['Wimbo Ulio Bora', 'Wimbo wa Sulemani', 'Wimbo'], 23: ['Isaya'], 24: ['Yeremia'], 25: ['Maombolezo'],
  26: ['Ezekieli'], 27: ['Danieli'], 29: ['Yoeli', 'Joeli'], 30: ['Amosi', 'Amos'], 34: ['Nahumu'],
  36: ['Sefania'], 38: ['Zekaria', 'Zakaria'], 44: ['Matendo ya Mitume', 'Matendo'], 46: ['Wakorintho'], 47: ['Wakorintho'],
  52: ['Wathesalonike'], 53: ['Wathesalonike'], 54: ['Timotheo'], 55: ['Timotheo'], 57: ['Filemoni'],
  58: ['Waebrania', 'Wahebrania'], 59: ['Yakobo', 'Waraka wa Yakobo'], 60: ['Petro'], 61: ['Petro'],
  62: ['Yohana'], 63: ['Yohana'], 64: ['Yohana'], 66: ['Ufunuo', 'Ufunuo wa Yohana'],
};

/** A name reduced for comparing: lower case, letters and digits only ("1 Wakorintho" → "1wakorintho"). */
const nameKey = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

/** Each book's Swahili names, reduced, with the book's number (1-3) in front where it has one. */
let swahiliIndex: { books: Book[]; names: { id: number; key: string }[] } | null = null;
function swahiliNames(books: Book[]) {
  if (swahiliIndex?.books === books) return swahiliIndex.names;
  const names: { id: number; key: string }[] = [];
  for (const b of books) {
    const number = /^([1-3])/.exec(b.name)?.[1] ?? '';
    const printed = Object.entries(b.names).filter(([t]) => t !== 'KJV' && t !== 'BSB').map(([, n]) => n);
    const other = (SWAHILI_NAMES[b.id] ?? []).map((n) => number + n);
    for (const n of [...printed, ...other, SWAHILI_SHORT_NAMES[b.id - 1]]) names.push({ id: b.id, key: nameKey(n) });
  }
  swahiliIndex = { books, names };
  return names;
}

/** The book a Swahili name points to: a whole name, a usual abbreviation, or the start of one book's name. */
function swahiliBook(typed: string, books: Book[]): number | undefined {
  const key = nameKey(typed);
  if (!key) return undefined;
  if (SWAHILI_ABBREVIATIONS[key]) return SWAHILI_ABBREVIATIONS[key];
  const names = swahiliNames(books);
  const whole = new Set(names.filter((n) => n.key === key).map((n) => n.id));
  if (whole.size === 1) return [...whole][0];
  // A prefix needs three letters after any number ("Yoh", "1 Kor"), so "Yo" names nothing.
  if (key.replace(/^[1-3]/, '').length < 3) return undefined;
  const ids = new Set(names.filter((n) => n.key.startsWith(key)).map((n) => n.id));
  return ids.size === 1 ? [...ids][0] : undefined;
}

export interface ParsedRef extends Ref {
  /** True when the input had no verse; `verse` is then 1. */
  chapterOnly: boolean;
}

/**
 * Parse references such as "John 3:16", "jn 3.16", "1 Cor 13", "Psalm 23",
 * "Song of Songs 2:1", "Rev 22 21" or "Ps 23:1-6" (a range opens at its first verse).
 * Returns null when nothing matches or the chapter is out of range for the book.
 */
export function parseReference(input: string, books: Book[], translation?: TranslationId): ParsedRef | null {
  const typed = input.replace(/\s+/g, ' ').trim();
  const m = /^\s*([1-3]?\.?\s*[^\d:,]+?)\s*(\d{1,3})(?:\s*[:.,\s]\s*(\d{1,3}))?(?:\s*[-–]\s*\d{1,3}(?:\s*[:.]\s*\d{1,3})?)?\s*$/i.exec(typed);
  if (!m) return null;
  const id = bookFromName(m[1], books, translation);
  return id ? withChapter(books, id, Number(m[2]), m[3] ? Number(m[3]) : undefined) : null;
}

/**
 * The book a typed name stands for: Swahili or English, a full name, a usual abbreviation or
 * a clear prefix. Swahili is tried first ("Mat" is Mathayo, "Mal" Malaki in both); a name
 * that is no Swahili book's is tried as English ("John 3:16", "Gen 1").
 */
export function bookFromName(name: string, books: Book[], translation?: TranslationId): number | undefined {
  void translation;
  const typed = name.trim();
  const swahili = swahiliBook(typed, books);
  if (swahili) return swahili;
  const rawName = typed.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!rawName) return undefined;
  const id = ABBREVIATIONS[rawName];
  if (id) return id;
  const matches = books.filter((b) => b.name.toLowerCase().replace(/[^a-z0-9]/g, '').startsWith(rawName));
  if (matches.length === 1) return matches[0].id;
  // "Jo" could be Job, Joel, John, Jonah, Joshua: prefer the exact-ish Gospel of John.
  return matches.find((b) => b.name.toLowerCase().replace(/[^a-z0-9]/g, '') === rawName)?.id;
}

/**
 * A chapter and verse in a book, or null when the chapter is out of range. In a book of
 * one chapter a lone number is the verse ("Jude 3", "Yuda 24"), as people write them.
 */
function withChapter(books: Book[], id: number, chapter: number, verse?: number): ParsedRef | null {
  const book = books.find((b) => b.id === id);
  if (!book) return null;
  if (verse === undefined && book.chapters === 1 && chapter >= 1) return { book: id, chapter: 1, verse: chapter, chapterOnly: false };
  if (chapter < 1 || chapter > book.chapters) return null;
  return { book: id, chapter, verse: verse ?? 1, chapterOnly: verse === undefined };
}

/**
 * A reference found in written text: the verse it points to and, for "13:4-7" or
 * "5:1-7:29", where it ends.
 */
export interface FoundRef extends ParsedRef {
  toChapter: number;
  toVerse: number;
}

/** A run of written text, with the reference it spells if it is one. */
export interface TextPiece {
  text: string;
  ref?: FoundRef;
}

/** The number of verses in a chapter of the Bible being read, when known. */
export type VerseCount = (book: number, chapter: number) => number | undefined;

// Book abbreviations that are also English or Swahili words: written in lower case, they are
// words ("is 5", "he 1:3"; Swahili "na" and, "la" of, "es", "ay").
const EN_WORDS = new Set(['ay', 'mit', 'war', 'wag', 'waf', 'wal', 'waa', 'wae', 'yon', 'uf', 'is', 'he', 'am', 'so', 'ex', 'ac', 'co', 'la', 'ho', 'ne', 'mi', 'ru', 'de', 'ge', 'ob', 'jo', 'na', 're', 'ti', 'ep', 'es', 'le', 'nu', 'job', 'mark', 'acts']);

/** True when a name may stand before a chapter number alone, so "Warumi 8" links but "Yesu 12" does not. */
function nameForChapter(name: string, id: number, books: Book[], translation?: TranslationId): boolean {
  const bare = name.replace(/^[1-3]\.?\s*/, '');
  // A capital letter, and a whole name or a usual abbreviation (Zab, Mwa, Ps, Gen, Rom).
  if (!/^[A-Z]/.test(bare)) return false;
  const raw = nameKey(name);
  if (ABBREVIATIONS[raw] || SWAHILI_ABBREVIATIONS[raw]) return true;
  if (swahiliNames(books).some((n) => n.id === id && n.key === raw)) return true;
  const book = books.find((b) => b.id === id);
  const whole = [book?.name, translation ? book?.names[translation] : undefined].filter((n): n is string => !!n);
  return whole.some((n) => nameKey(n) === raw);
}

/**
 * Splits written text into plain runs and references, for the notebook: "Yohana 3:16",
 * "1 Kor 13:4-7", "Ps 23:1", "Warumi 8", "Yuda 3", "Mt 5:1-7:29", and lists that
 * carry the book on ("Rum 8:28, 29", "Yn 3:16; 4:24").
 * - The book name is the one to four words before the numbers, longest first, so
 *   "Matendo ya Mitume 2:1" and "Song of Songs 2:1" are whole. The first name that names
 *   a book decides it: "3 John 4" is never read as John 4.
 * - A chapter without a verse needs a whole name or a usual abbreviation (see
 *   nameForChapter), so ordinary words with a number ("Yesu 12", "is 5") stay plain.
 * - With `verseCount`, a verse past the end of its chapter is not a reference, which keeps
 *   "is 7:30" and "Daniel 1260" plain.
 */
export function findReferences(text: string, books: Book[], translation?: TranslationId, verseCount?: VerseCount): TextPiece[] {
  return findIn(text, books, translation, verseCount);
}

function findIn(text: string, books: Book[], translation?: TranslationId, verseCount?: VerseCount): TextPiece[] {
  const pieces: TextPiece[] = [];
  const numbers = /(\d{1,3})(?:\s*[:.]\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3})(?:\s*[:.]\s*(\d{1,3}))?)?)?(?![\d:])/g;
  const exists = (ref: ParsedRef) => {
    if (ref.verse < 1 || !verseCount) return true;
    const n = verseCount(ref.book, ref.chapter);
    return n === undefined || ref.verse <= n;
  };
  // The end of a range: "4-7" (same chapter) or "1-7:29" (another chapter).
  const rangeEnd = (ref: ParsedRef, a?: string, b?: string): [number, number] => {
    if (a && b && Number(a) > ref.chapter) return [Number(a), Number(b)];
    if (a && !b && Number(a) > ref.verse) {
      const n = verseCount?.(ref.book, ref.chapter);
      return [ref.chapter, n === undefined ? Number(a) : Math.min(Number(a), n)];
    }
    return [ref.chapter, ref.verse];
  };
  let done = 0;
  let m: RegExpExecArray | null;
  while ((m = numbers.exec(text))) {
    // Never start inside a longer number ("1260", "2024").
    if (m.index > 0 && /\d/.test(text[m.index - 1])) continue;
    // The words before the numbers, back to a line break or a mark that cannot be in a name.
    const before = text.slice(done, m.index);
    const cut = Math.max(before.lastIndexOf('\n'), ...[',', ';', '(', ')', '"', '“', '”', '‘', '’', '—', '–', '!', '?'].map((c) => before.lastIndexOf(c)));
    const words = before.slice(cut + 1).split(' ');
    if (words.length && words[words.length - 1] === '') words.pop();
    // The name must end right before the numbers, with at most one space.
    if (!words.length || /\s\s$/.test(before)) continue;
    let found: { ref: FoundRef; start: number } | null = null;
    for (let k = Math.min(4, words.length); k >= 1; k--) {
      const name = words.slice(words.length - k).join(' ');
      if (name !== name.trimStart() || !/[A-Za-z]/.test(name)) continue;
      const typed = name;
      const raw = typed.replace(/^[1-3]\.?\s*/, '').toLowerCase().replace(/[^a-z]/g, '');
      if (EN_WORDS.has(raw) && /^[a-z]/.test(typed.replace(/^[1-3]\.?\s*/, ''))) continue;
      const id = bookFromName(typed, books, translation);
      if (!id) continue;
      // This name names a book; shorter names are not tried.
      const ref = withChapter(books, id, Number(m[1]), m[2] ? Number(m[2]) : undefined);
      if (ref && exists(ref) && (!ref.chapterOnly || nameForChapter(typed, id, books, translation))) {
        const [toChapter, toVerse] = rangeEnd(ref, m[3], m[4]);
        found = { ref: { ...ref, toChapter, toVerse }, start: done + before.length - name.length - (before.endsWith(' ') ? 1 : 0) };
      }
      break;
    }
    if (!found) continue;
    if (found.start > done) pieces.push({ text: text.slice(done, found.start) });
    let end = m.index + m[0].length;
    // A psalm's title, as "Add to notebook" writes it: "Zaburi 3 (kichwa)".
    const title = found.ref.chapterOnly ? /^\s*\((?:title|kichwa)\)/.exec(text.slice(end)) : null;
    if (title) {
      found.ref = { ...found.ref, verse: 0, toVerse: 0, chapterOnly: false };
      end += title[0].length;
    }
    pieces.push({ text: text.slice(found.start, end), ref: found.ref });
    // More verses or chapters of the same book: "8:28, 29", "3:16; 4:24".
    let last = found.ref;
    for (;;) {
      const more = /^(\s*[,;]\s*)(\d{1,3})(?:\s*[:.]\s*(\d{1,3}))?(?:\s*[-–]\s*(\d{1,3}))?(?![\d:])/.exec(text.slice(end));
      if (!more) break;
      // "8:28, 1 Cor 2:9": a 1, 2 or 3 with a name after it numbers the next book.
      if (!more[3] && !more[4] && /^[1-3]$/.test(more[2]) && /^\.?\s?[A-Za-z]/.test(text.slice(end + more[0].length))) break;
      let ref: ParsedRef | null;
      if (more[3]) ref = withChapter(books, last.book, Number(more[2]), Number(more[3]));
      else if (more[1].includes(',') && !last.chapterOnly) ref = { book: last.book, chapter: last.toChapter, verse: Number(more[2]), chapterOnly: false };
      else ref = withChapter(books, last.book, Number(more[2]));
      if (!ref || !exists(ref) || ref.verse === 0) break;
      const [toChapter, toVerse] = rangeEnd(ref, more[4]);
      const next: FoundRef = { ...ref, toChapter, toVerse };
      pieces.push({ text: more[1] });
      pieces.push({ text: more[0].slice(more[1].length), ref: next });
      end += more[0].length;
      last = next;
    }
    done = end;
    numbers.lastIndex = end;
  }
  if (done < text.length) pieces.push({ text: text.slice(done) });
  return pieces;
}
