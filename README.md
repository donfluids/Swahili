# Biblia

A Swahili and English Bible app for iOS and Android, built with Expo and React Native.
All text ships inside the app, so it works without a connection.

This repository started as a copy of [donfluids/Bible](https://github.com/donfluids/Bible)
(at 0176c0a), cut down to one app. The Malayalam app there pairs the Sathyavedapusthakam
with the KJV. This one pairs Swahili Bibles with the KJV the same way: Swahili menus with
English in Settings, Swahili words linked to the Hebrew and Greek, and book introductions
in Swahili.

| | |
| --- | --- |
| App name | Biblia |
| Package / bundle id | `org.riversresearch.bible.swahili` |
| Edition | `sw` (`src/edition.ts`; `BIBLE_EDITION=sw`, the default) |
| Bibles | Swahili Unlocked Literal Bible (ULB, the default), Neno 2015, Neno 2024, King James Version, Berean Standard Bible |
| Hebrew and Greek | STEPBible's Hebrew OT and Greek NT under every verse, Strong's, Abbott-Smith and BDB |
| Interface | Swahili (English in Settings) |

## The Bibles

| Id | Bible | Source | Licence | Word links |
| --- | --- | --- | --- | --- |
| SWU | Biblia Takatifu, Swahili Unlocked Literal Bible (2019) | eBible.org `swhulb`, Door43 World Missions Community | CC BY-SA 4.0 | machine alignment (`scripts/align.mjs`) |
| SWN | Neno: Bibilia Takatifu 2015 (Open Kiswahili Contemporary Version) | eBible.org `swhonen`, Biblica, Inc. | CC BY-SA 4.0 | none; the word sheet uses the KJV's |
| SWM | Neno: Maandiko Matakatifu 2024 | eBible.org `swhonmm`, Biblica, Inc. | CC BY-SA 4.0 | none |
| KJV | King James Version (1769) | eBible.org `eng-kjv2006` | public domain | publisher's Strong's tags |
| BSB | Berean Standard Bible | CrossWire `BSB` | CC0 | publisher's Strong's tags |

Not included:

- **The Swahili Union Version (1952)**, the Bible most churches read. Its copyright is
  held by the Bible Societies of Kenya and Tanzania, so it can only go in with their
  permission.
- **eBible.org's `swh1850`**. It is labelled public domain as Krapf's 1850 translation,
  but its wording is modern standard Swahili, close to the Biblia Habari Njema (which is
  copyrighted). It also has only 26 New Testament books. It stays out until its rights
  are clear.

Biblica's Open licence asks that a changed copy not carry the Biblica® trademark in its
name, list its changes, and credit the original ("The original work by Biblica, Inc. is
available for free at www.biblica.com and open.bible."). The app's reformatting counts as
a change: section headings are left out and lines are re-set. So the Neno Bibles are
named without the trademark, and `src/licences.ts` carries the notice and the changes.

## What it does

The features are those of the Bible apps; their README describes each one in full. In
short: read any of the five Bibles, switching from the name beside the chapter number.
Tap a ULB, KJV or BSB word to see its Hebrew or Greek word, meaning, grammar, dictionary
entry and every verse it is in. Show the Hebrew or Greek under each verse. Highlight,
note, bookmark and mark text. Keep a notebook of typed or handwritten pages that links
the references it contains ("Yohana 3:16", "1 Kor 13:4-7", "Zab 23"), and back it up.
Read aloud in the phone's Swahili or English voice. Make verse cards. On a tablet, or a
phone turned sideways, read a Swahili Bible and the KJV side by side. Each book has an
introduction in Swahili and English.

What is particular to this app:

- **Five Bibles, three in Swahili.** The Bible list groups them as Kiswahili and
  Kiingereza. Search has a row of the five under its box. Side by side pairs the KJV with
  the Swahili Bible open, or the one read last.
- **Word links.** Only the ULB is linked to the Hebrew and Greek. A one-time card says so
  when a Neno Bible is first opened. In the Swahili menus a word's sheet heads with the
  ULB's word for it, and the English meaning goes under it.
- **References** can be typed with Swahili names, abbreviations and the longer names of
  the Union Version (`src/refs.ts`): Yohana 3:16, Yn 3:16, Mwa 1, Kumbukumbu la Torati
  6:4, Matendo ya Mitume 2, Wimbo Ulio Bora 2:1, Waebrania 11:1. English names work too.
- **Search** treats the three ways the Bibles write *ng’* as one: ng'ombe (ULB), ngʼombe
  (Neno 2015) and ng’ombe (Neno 2024).

## Running it on your phone

1. Install [Node.js](https://nodejs.org) 22 or newer.
2. Install Expo Go on your phone.
3. In this folder:

   ```bash
   npm install
   npm start
   ```

4. Scan the QR code with the phone's camera (iPhone) or Expo Go (Android), with phone and
   computer on the same Wi-Fi.

The first launch copies the database (about 69 MB) onto the phone.

## Building

`.github/workflows/android-release.yml` builds a release APK on pushes to `main`, on
manual runs and on `v*` tags (tags also get a GitHub release). The signing secrets
(`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`,
`ANDROID_KEY_PASSWORD`) must be set in this repository for a release-signed build. Use a
key of this app's own: it has a package id of its own, so it does not have to share the
Bible apps' key. `.github/workflows/ios-build.yml` compiles the iPhone app unsigned. The
App Store build uses EAS profile `ios-sw` (`eas.json`). `docs/ios/README.md` and
`docs/play/README.md` are the Bible apps' store guides. They still need this app's own
listing text, screenshots and privacy page.

Locally:

```bash
npx expo prebuild --platform android --no-install --clean
cd android && ./gradlew assembleRelease
```

## Rebuilding the database

```bash
npm run fetch-data   # the Swahili texts, KJV, BSB, Strong's, STEPBible, cross references, parallels
npm run build-db     # assets/db/bible-sw.db
npm run check-data   # numbering, text, links, verse counts against data/checks/verse-counts.json
```

`data/sources.json` records the hash of each source as the build reads it. A changed
download fails `fetch-data`; record it with `node scripts/check-sources.mjs --update`
once the change has been looked at. The schema is the Bible apps' (see the head of
`scripts/build-db.mjs`).

What the build does with the Swahili sources:

- The ULB writes each psalm title as a paragraph before verse 1; it becomes verse 0, as
  the other Bibles' titles are.
- The ULB joins 1 Chronicles 6:78–79 and 8:17–18. The verse is kept under its first
  number, and `data/overrides/versification.json` maps it to both KJV verses. That file
  also maps 3 John 15 (all three Swahili Bibles split the KJV's verse 14) and the ULB's
  Revelation 12:18 (KJV 13:1). The ULB has no Luke 17:36.
- `data/overrides/text-corrections.json` holds the ULB's book-name fixes (1 Samweli,
  1 Wafalme, 1 Timotheo, 1 Yohana, Kumbukumbu la Torati, Yakobo). It also writes three
  asides the ULB puts in braces with round brackets.
- The Neno texts' list, table and embedded-poetry lines (`\li3`, `\lh`, `\lf`, `\tr`,
  `\po`, `\qm`) are set as lines of the verse. Their section headings are left out, as
  in the other Bibles.

## Word links (ULB)

`scripts/align.mjs` links each word of the ULB to the Hebrew or Greek word it renders,
using the Claude CLI in headless mode. It runs a chapter of up to 20 verses per call and
keeps one JSON file per chunk in `data/align/swu/`. An interrupted run resumes where it
stopped, and with `--commit-every N` it commits and pushes its output every N chunks.

```bash
npm run align -- --all --concurrency 6 --commit-every 20
npm run build-db                       # takes in the links
node scripts/align.mjs --report 43:3   # John 3, readable
```

Only the links the model was sure of are used, and the build drops some kinds of link
it gets wrong (`scripts/build-db.mjs`):

- a pronoun or possessive (*mimi*, *wako*, *yake*, with every class prefix) linked to
  anything but a Hebrew or Greek pronoun;
- any link to the untranslated object marker אֵת;
- *Yahwe* and *Mungu* linked the wrong way round.

The Malayalam app's neighbour fix compares words by their first letters. Swahili
inflects at the front (*alisema*, *wakasema*), so that fix is off, and each Swahili form
is its own rendering rather than grouped under a stem. The full run is 2,128 chunks, at
about $0.06 of CLI usage each. It links 31,201 of the ULB's 31,210 verses.

## Checks

```bash
npm test             # types, reference reading (Swahili and English), logic tests
npm run check-data
npm run smoke        # every main screen in a browser at four sizes; needs, once:
                     #   npm install --no-save react-dom@19.2.3 react-native-web@^0.21.2
                     # and CHROMIUM_PATH=/path/to/chromium where playwright-core has none
```

`docs/testing/phone-checklist.md` lists what only a phone can show.

## Review before release

The Swahili menus, the 66 book introductions, the "Why this Bible" page and the grammar
words were translated by a language model. No Swahili speaker has read them yet.
`docs/swahili-review.md` lists the choices to check and holds every string beside its
English. The word links are unchecked too.

## Project layout

```
App.tsx                  App shell: database, screen stack, word sheet
src/edition.ts           The edition: its Bibles and interface languages
src/types.ts             The Bibles (SWU, SWN, SWM, KJV, BSB)
src/i18n.ts              English strings and the Bibles' names; src/i18nSw.ts the Swahili
src/refs.ts              Reads typed references ("Yohana 3:16", "1 Kor 13") and finds them in text
src/queries.ts           All SQL
src/licences.ts          Sources, licences and changes (Sources and licences screen)
src/screens/, src/components/  The screens and their parts
scripts/fetch-data.sh    Downloads the sources into data/raw/ (not committed)
scripts/build-db.mjs     Builds assets/db/bible-sw.db
scripts/align.mjs        Links the ULB's words to the Hebrew and Greek
scripts/check-data.mjs   Checks the built database
scripts/smoke.mjs        Browser walk-through of every main screen
scripts/review-strings.mjs  Refreshes the strings table of docs/swahili-review.md
data/intros/{en,sw}/     Book introductions (data/intros/GUIDE.md)
data/align/swu/          The ULB's word links, one file per chunk
data/overrides/          Verse map, text corrections, short meanings
```

## Licences

The app's code is MIT (`LICENSE`). The texts and data keep their own licences, listed in
the app under Settings → Sources and licences (`src/licences.ts`). The database as a whole
is offered under CC BY-SA 4.0.
