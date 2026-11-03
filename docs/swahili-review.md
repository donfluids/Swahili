# Swahili: points for the reviewers

Everything the app says in Swahili was translated from English with a language model.
No Swahili speaker has read it yet, and someone must before the app is released. That
covers the menus and messages (`src/i18nSw.ts`, the table at the end of this page), the 66
book introductions (`data/intros/sw/`), the "Why this Bible" page
(`src/screens/WhyScreen.tsx`) and the grammar words in the word sheet (`src/morph.ts`).
The Bible texts are the publishers' own and are not changed beyond what
`src/licences.ts` lists.

Please read in the app first, then here. To change a string, edit `src/i18nSw.ts` and run
`node scripts/review-strings.mjs sw` to refresh the table below. To change an
introduction, edit `data/intros/sw/<book>.json`, check it with
`node --no-warnings scripts/check-intros.mjs sw`, and put it in the database with
`node --no-warnings scripts/add-study-data.mjs`.

## Menus and messages

Terms chosen once and used throughout. Please confirm them or give better ones.

- Highlight: *alama ya rangi* (plural *alama za rangi*). Bookmark: *alamisho*. Note on a
  verse: *maelezo*. Notebook: *daftari*. Footnote: *tanbihi*. Cross reference: *rejea*.
- Hebrew *Kiebrania*, Greek *Kiyunani*, English *Kiingereza*.
- Instructions use the *wewe* form ("Gusa", "Chagua", "Bonyeza na ushikilie").
- A phone turned on its side: *simu iliyolazwa*. A tablet: *tabiti*.
- The Bibles' short names on the switch: ULB, Neno, Neno 2024, KJV, BSB.

## Grammar words (word sheet)

From school grammar, `src/morph.ts`: nomino, jina, kitenzi, kivumishi, kielezi, kihusishi,
kiunganishi, kiwakilishi, kibainishi ("the"), chembe (particle: the least sure),
kihisishi, namba; umoja, wingi, uwili.

## Book introductions

The rules the translation followed: names of people and places as the ULB spells them,
and where the ULB has two spellings, the commoner. The LORD (YHWH) is *Yahwe* and the Lord
is *Bwana*. Dates are written "Karibu mwaka 55–65 B.K." and "… K.K.". The translators
flagged these for checking:

- **Abraham** is *Ibrahimu* in every introduction. The ULB itself writes Abraham,
  Abrahamu and Ibrahimu; Ibrahimu is the Neno form and the ULB's at Matthew 1:1.
- **Nebuchadnezzar** is *Nebukadreza* everywhere, Daniel included, though Daniel's own
  chapters in the ULB say *Nebukadneza*. The ULB uses the two about equally often.
- **Book names:** *1 Samweli*, *1 Wafalme*, *1 Timotheo* and *1 Yohana* are spaced like
  the second books (the ULB runs them together). Deuteronomy is shown as *Kumbukumbu la
  Torati* and James as *Yakobo*. The same names are used on the app's book list
  (`data/overrides/text-corrections.json`).
- Other names: *Ahusiero* (Ahasuerus), *Modekai*, *Yekonia* (Jehoiachin), *Haruni*,
  *Eliazari*, *Bathisheba*, *Gideoni*, *Kora* (the psalm headings say Korah), *Mshulami*
  (from Neno; the ULB has no name for her), *Hilkia*, *Yoshua* (the high priest in
  Haggai and Zechariah), *Ashuru* (Assyria), *Rumi* (Rome), *Emanueli* in Isaiah and
  *Imanueli* in Matthew, as each book of the ULB has it. Also *Epafradito*, *Yunisi*,
  *Patimo*, *Diotrofe*, *Habili* (Abel), *Henoko*, *Silwano* and *Arkipo*.
- Words: *hema la kukutania* (the ULB has *hema ya*), *mfiadini wa kwanza* (Stephen),
  *kilembwe* (Zephaniah's ancestry, 1:1), *mama mteule* (2 John; the ULB has *mwanamke
  mteule*), *waangalizi (maaskofu)*, *mtumwa* for "servant" in James 1:1 and Jude 1:1,
  and *kwa mfumo wa Melkizedeki* (maybe *kwa utaratibu wa*).
- In Esther 1:1 the ULB's misprint *Ethiopa* is written *Ethiopia*.

## Word links (ULB)

The links from the ULB's words to the Hebrew and Greek were made by a language model
(`scripts/align.mjs`, data in `data/align/swu/`), and only the links it was sure of are
used. Nobody has checked them. In the app, tap words in well-known verses (Genesis 1,
Psalm 23, John 3, Romans 8) and note any word that opens the wrong Hebrew or Greek word.
A word's sheet in the Swahili menus heads with the ULB's word for it. Swahili builds words
with prefixes (*alisema*, *wakasema*), so each form is listed on its own rather than
grouped under one heading as the Malayalam app does.

## Strings

| Key | English | Swahili | Check |
| --- | --- | --- | --- |
| loading | Loading… | Inapakia… | |
| preparing | Preparing the Bible text… | Inaandaa maandiko ya Biblia… | |
| back | Back | Rudi | |
| results | Results | Matokeo | |
| saved | Saved | Vilivyohifadhiwa | |
| books | Books | Vitabu | |
| search | Search | Tafuta | |
| settings | Settings | Mipangilio | |
| bookmarks | Bookmarks | Alamisho | |
| highlights | Highlights | Alama za rangi | |
| notes | Notes | Maelezo | |
| oldTestament | Old Testament | Agano la Kale | |
| newTestament | New Testament | Agano Jipya | |
| previousChapter | Previous chapter | Sura iliyotangulia | |
| switchTo | Switch to {name} | Badili kwenda {name} | |
| bibleEnglish | ENG | Kiingereza | |
| nextChapter | Next chapter | Sura inayofuata | |
| hebrewInterlinear | Hebrew | Kiebrania | |
| greekInterlinear | Greek | Kiyunani | |
| tapVerseNumber | Tap a verse number to show its {lang} words | Gusa namba ya mstari kuona maneno yake ya {lang} | |
| hebrew | Hebrew | Kiebrania | |
| greek | Greek | Kiyunani | |
| sayWord | Say the word | Tamka neno | |
| stopSaying | Stop | Simamisha | |
| noVoiceTitle | No voice for this language | Hakuna sauti ya lugha hii | |
| noHebrewVoice | This phone has no Hebrew voice. You can add one in the phone’s settings, under Text-to-speech (Android) or Spoken Content (iPhone). | Simu hii haina sauti ya Kiebrania. Unaweza kuongeza moja katika mipangilio ya simu, chini ya Text-to-speech (Android) au Spoken Content (iPhone). | |
| noGreekVoice | This phone has no Greek voice. You can add one in the phone’s settings, under Text-to-speech (Android) or Spoken Content (iPhone). | Simu hii haina sauti ya Kiyunani. Unaweza kuongeza moja katika mipangilio ya simu, chini ya Text-to-speech (Android) au Spoken Content (iPhone). | |
| stopReading | Stop reading | Acha kusoma | |
| readFromHere | Read from here | Soma kuanzia hapa | |
| readFromHereDetail | Listen to the chapter from this verse in the phone's voice | Sikiliza sura kuanzia mstari huu kwa sauti ya simu | |
| pauseReading | Pause | Sitisha | |
| resumeReading | Continue | Endelea | |
| previousVerse | Previous verse | Mstari uliotangulia | |
| nextVerse | Next verse | Mstari unaofuata | |
| readingSpeed | Reading speed | Kasi ya kusoma | |
| backToReading | Back to reading | Rudi kusoma | |
| noEnglishVoice | This phone has no English voice. You can add one in the phone's settings, under Text-to-speech (Android) or Spoken Content (iPhone). | Simu hii haina sauti ya Kiingereza. Unaweza kuongeza moja katika mipangilio ya simu, chini ya Text-to-speech (Android) au Spoken Content (iPhone). | |
| shareAsCard | Share as card | Shiriki kama kadi | |
| shareAsCardDetail | A picture of the verse, for a greeting or your status | Picha ya mstari, kwa salamu au kwa status yako | |
| cardSquare | Square | Mraba | |
| cardTall | Status | Status | |
| cardOccasion | Occasion | Tukio | |
| cardDesign | Design | Muundo | |
| cardHeading | Heading | Kichwa | |
| cardMessage | Your message (optional) | Ujumbe wako (si lazima) | |
| cardMessageHint | For example: Happy birthday, Mum! | Kwa mfano: Heri ya siku ya kuzaliwa, Mama! | |
| cardVerseOne | Verse {n} | Mstari {n} | |
| cardVersesRange | Verses {range} | Mistari {range} | |
| cardMore | More options | Chaguo zaidi | |
| cardFewer | Fewer options | Chaguo chache | |
| cardHeadingHint | For example: With love | Kwa mfano: Kwa upendo | |
| cardShare | Share picture | Shiriki picha | |
| cardFailed | The picture could not be made. | Picha haikuweza kutengenezwa. | |
| cardPhoto | Your photo | Picha yako | |
| cardChangePhoto | Change photo | Badilisha picha | |
| cardRemovePhoto | Remove photo | Ondoa picha | |
| cardPhotoFailed | The photo could not be opened. | Picha haikuweza kufunguliwa. | |
| cardVeil | Over the photo | Juu ya picha | |
| cardVeilLight | Light | Angavu | |
| cardVeilDark | Dark | Giza | |
| cardFaint | Faint | Hafifu | |
| cardMedium | Medium | Wastani | |
| cardStrong | Strong | Nzito | |
| cardBlur | Blur the photo | Fifisha picha | |
| cardBlurDetail | The words stand out more | Maneno yanaonekana zaidi | |
| cardBackground | Background | Mandharinyuma | |
| cardDesignColours | Design's own colours | Rangi za muundo | |
| cardPlace | Text position | Mahali pa maandishi | |
| cardTop | Top | Juu | |
| cardMiddle | Middle | Katikati | |
| cardBottom | Bottom | Chini | |
| cardFace | Typeface | Aina ya herufi | |
| cardFaceBook | Book | Ya kitabu | |
| cardFacePlain | Plain | Kawaida | |
| cardExtras | Pictures and lines | Picha na mapambo | |
| cardExtrasDetail | The design's pictures, border and cross | Picha, ukingo na msalaba wa muundo huu | |
| cardSaveLook | Save as my design | Hifadhi kama muundo wangu | |
| cardLookSaved | Saved. It is first in the designs now. | Imehifadhiwa. Sasa ni wa kwanza katika miundo. | |
| cardMyDesign | My design {n} | Muundo wangu {n} | |
| cardRemoveLook | Remove this design? | Ondoa muundo huu? | |
| cardFewerVerses | One verse fewer | Punguza mstari mmoja | |
| cardMoreVerses | One more verse | Ongeza mstari mmoja | |
| occasionNone | None | Hakuna | |
| occasionBirthday | Birthday | Siku ya kuzaliwa | |
| occasionWedding | Wedding | Harusi | |
| occasionAnniversary | Anniversary | Maadhimisho | |
| occasionSympathy | Sympathy | Rambirambi | |
| occasionGetWell | Get well | Pona haraka | |
| occasionChristmas | Christmas | Krismasi | |
| occasionEaster | Easter | Pasaka | |
| occasionNewYear | New Year | Mwaka Mpya | |
| headingBirthday | Happy Birthday | Heri ya Siku ya Kuzaliwa | |
| headingWedding | On your wedding day | Siku ya harusi yako | |
| headingAnniversary | Happy Anniversary | Heri ya Maadhimisho | |
| headingSympathy | With deepest sympathy | Pole sana, kwa rambirambi za dhati | |
| headingGetWell | Get well soon | Upone haraka | |
| headingChristmas | Merry Christmas | Krismasi Njema | |
| headingEaster | Happy Easter | Pasaka Njema | |
| headingNewYear | Happy New Year | Heri ya Mwaka Mpya | |
| tip | Tap any word to see the Hebrew or Greek behind it. Press and hold a verse to copy, share or bookmark it. The name beside the chapter chooses the Bible. | Gusa neno lolote kuona Kiebrania au Kiyunani kilicho nyuma yake. Bonyeza na ushikilie mstari ili kuunakili, kuushiriki au kuuwekea alamisho. Jina lililo kando ya sura huchagua Biblia. | |
| tipNoTags | Press and hold a verse to highlight it, add a note, compare translations or bookmark it. The name beside the chapter chooses the Bible. | Bonyeza na ushikilie mstari ili kuuwekea alama ya rangi, kuongeza maelezo, kulinganisha tafsiri au kuuwekea alamisho. Jina lililo kando ya sura huchagua Biblia. | |
| gotIt | Got it | Nimeelewa | |
| choosePassage | {title}, choose passage | {title}, chagua kifungu | |
| choosePassageTitle | Choose a passage | Chagua kifungu | |
| allBooks | ‹ All books | ‹ Vitabu vyote | |
| groupLaw | Law | Torati | |
| groupHistory | History | Historia | |
| groupPoetry | Poetry and wisdom | Mashairi na hekima | |
| groupProphets | Prophets | Manabii | |
| groupGospels | Gospels | Injili | |
| groupActs | Acts | Matendo | |
| groupLetters | Letters | Nyaraka | |
| groupRevelation | Revelation | Ufunuo | |
| copied | Copied | Imenakiliwa | |
| bookmarked | Bookmarked | Alamisho imewekwa | |
| actCopy | Copy | Nakili | |
| actShare | Share | Shiriki | |
| actBookmark | Bookmark | Alamisho | |
| actBookmarked | Bookmarked | Ina alamisho | |
| actNote | Note | Maelezo | |
| noHighlight | No highlight | Bila alama ya rangi | |
| bookmarkRemoved | Bookmark removed | Alamisho imeondolewa | |
| highlighted | Highlighted | Alama ya rangi imewekwa | |
| highlightRemoved | Highlight removed | Alama ya rangi imeondolewa | |
| noteSaved | Note saved | Maelezo yamehifadhiwa | |
| noteRemoved | Note removed | Maelezo yameondolewa | |
| highlight | Highlight | Alama ya rangi | |
| markText | Mark text | Wekea maneno alama | |
| markTextDetail | Highlight some words or a passage across verses | Weka alama ya rangi kwenye maneno machache au kifungu cha mistari kadhaa | |
| markDone | Done | Tayari | |
| markHint | Press and hold a word, then drag to the last word to mark. | Bonyeza na ushikilie neno, kisha buruta hadi neno la mwisho la kuwekea alama. | |
| eraseHint | Hold a marked word, then drag over the marks to remove them. | Shikilia neno lenye alama, kisha buruta juu ya alama ili kuziondoa. | |
| eraser | Eraser | Kifutio | |
| markedText | Marked text | Maneno yenye alama | |
| clear | Clear | Futa | |
| addNote | Add a note | Ongeza maelezo | |
| editNote | Edit note | Hariri maelezo | |
| compare | Compare translations | Linganisha tafsiri | |
| compareDetail | Side by side with the {lang} | Kando kwa kando na {lang} | |
| copy | Copy | Nakili | |
| copyDetail | Verse text with its reference | Maandiko ya mstari pamoja na rejea yake | |
| share | Share… | Shiriki… | |
| bookmark | Bookmark | Weka alamisho | |
| removeBookmark | Remove bookmark | Ondoa alamisho | |
| bookmarkDetail | Saved items are listed at the top of the Books screen | Vilivyohifadhiwa vinaorodheshwa juu ya skrini ya Vitabu | |
| note | Note | Maelezo | |
| notePlaceholder | Your note on this verse | Maelezo yako kuhusu mstari huu | |
| delete | Delete | Futa | |
| save | Save | Hifadhi | |
| remove | Remove | Ondoa | |
| footnote | Footnote | Tanbihi | |
| crossReference | Cross reference | Rejea | |
| crossReferences | Cross references | Rejea | |
| crossReferencesDetail | {n} related passages, the strongest first | Vifungu {n} vinavyohusiana, vyenye uhusiano mkubwa zaidi kwanza | |
| crossReferencesSource | Treasury of Scripture Knowledge, via OpenBible.info (CC BY) | Treasury of Scripture Knowledge, kupitia OpenBible.info (CC BY) | |
| parallelPassages | Parallel passages | Vifungu sambamba | |
| parallelPassagesDetail | {n} places with the same event or words | Mahali {n} penye tukio au maneno yale yale | |
| parallelPassagesSource | Parallel Passages Database © 2023 United Bible Societies (CC BY-SA 4.0) | Parallel Passages Database © 2023 United Bible Societies (CC BY-SA 4.0) | |
| aboutBook | About this book | Kuhusu kitabu hiki | |
| aboutBookNamed | About {book} | Kuhusu {book} | |
| introAuthor | Written by | Mwandishi | |
| introDate | When | Lini | |
| introAudience | Written for | Kiliandikiwa | |
| introThemes | Main themes | Mada kuu | |
| introOutline | Outline | Muhtasari | |
| introKeyVerses | Key verses | Mistari muhimu | |
| introNone | There is no introduction to this book yet. | Bado hakuna utangulizi wa kitabu hiki. | |
| omitted | Omitted in this translation. | Umeachwa katika tafsiri hii. | |
| nothingSavedTitle | Nothing saved yet | Bado hakuna kilichohifadhiwa | |
| nothingSaved | Press and hold a verse in the reader to bookmark it, highlight it or add a note. They will be listed here. | Bonyeza na ushikilie mstari unaposoma ili kuuwekea alamisho, alama ya rangi au maelezo. Vitaorodheshwa hapa. | |
| searchTitle | Search the {name} | Tafuta katika {name} | |
| clearSearch | Clear search | Futa utafutaji | |
| searchExamples | Try | Jaribu | |
| searchPlaceholder | Words, a reference like John 3:16, or G26 | Maneno, rejea kama Yohana 3:16, au G26 | |
| goTo | Go to {ref} | Nenda {ref} | |
| openIn | Open in the {translation} | Fungua katika {translation} | |
| open | Open {id} | Fungua {id} | |
| dictionaryEntry | {lang} dictionary entry | Kamusi ya {lang} | |
| dictionary | DICTIONARY | KAMUSI | |
| noVerses | No verses found | Hakuna mistari iliyopatikana | |
| allResults | All | Yote | |
| showMore | Show more ({n} left) | Onyesha zaidi (zimebaki {n}) | |
| nVerses | {n} verses | Mistari {n} | |
| oneVerse | 1 verse | Mstari 1 | |
| versesIn | {n} verses in the {translation} | Mistari {n} katika {translation} | |
| oneVerseIn | 1 verse in the {translation} | Mstari 1 katika {translation} | |
| asWord |  as “{word}” |  kama “{word}” | |
| versesInAs | {n} verses in the {translation} as “{word}” | Mistari {n} katika {translation} kama “{word}” | |
| oneVerseInAs | 1 verse in the {translation} as “{word}” | Mstari 1 katika {translation} kama “{word}” | |
| all | All | Yote | |
| notInTranslation | Not in this translation. | Haumo katika tafsiri hii. | |
| notTagged | Not tagged in the {translation} | Halijaunganishwa katika {translation} | |
| noEntry | No dictionary entry for {id}. | Hakuna maana ya {id} katika kamusi. | |
| noStrongs | This word has no Strong's number. | Neno hili halina namba ya Strong's. | |
| marksQuestion | What do the marks mean? | Alama hizi zina maana gani? | |
| marksHide | Hide the key to the marks | Ficha ufunguo wa alama | |
| legendGloss | In the gloss, <a word> in angle brackets is in the original but best left untranslated, and [a word] in square brackets is implied but not in the original. A faded word with no meaning, such as אֵת, marks the object of the verb and is not translated. | Katika tafsiri ya neno, <neno> ndani ya mabano ya pembe limo katika lugha ya asili lakini ni bora lisitafsiriwe, na [neno] ndani ya mabano ya mraba linadokezwa lakini halimo katika lugha ya asili. Neno lililofifia lisilo na maana, kama אֵת, huonyesha mtendwa wa kitenzi na halitafsiriwi. | |
| legendTranslit |  In the transliteration, dots separate syllables and the capital letter marks the stressed syllable. |  Katika unukuzi, nukta hutenganisha silabi na herufi kubwa huonyesha silabi yenye mkazo. | |
| legendVariant | A line under a Hebrew or Greek word marks text that differs between editions; the note above explains this one. | Kistari chini ya neno la Kiebrania au Kiyunani huonyesha maandishi yanayotofautiana kati ya matoleo; maelezo yaliyo juu yanaeleza hili. | |
| noteTrByz | In the Textus Receptus, which the KJV translates, and in the Byzantine text, but not in the Nestle-Aland editions used by most modern translations. | Limo katika Textus Receptus, ambayo KJV inatafsiri, na katika maandiko ya Byzantine, lakini si katika matoleo ya Nestle-Aland yanayotumiwa na tafsiri nyingi za kisasa. | |
| noteTrOnly | Only in the Textus Receptus, which the KJV translates. The Byzantine text and the Nestle-Aland editions do not have it. | Limo tu katika Textus Receptus, ambayo KJV inatafsiri. Maandiko ya Byzantine na matoleo ya Nestle-Aland hayana. | |
| noteByzOnly | Only in the Byzantine text. The Textus Receptus and the Nestle-Aland editions do not have it. | Limo tu katika maandiko ya Byzantine. Textus Receptus na matoleo ya Nestle-Aland hayana. | |
| noteNotInTr | In the Nestle-Aland editions and the Byzantine text, but not in the Textus Receptus that the KJV translates. | Limo katika matoleo ya Nestle-Aland na maandiko ya Byzantine, lakini si katika Textus Receptus ambayo KJV inatafsiri. | |
| noteNotInByz | In the Textus Receptus and the Nestle-Aland editions, but not in the Byzantine text. | Limo katika Textus Receptus na matoleo ya Nestle-Aland, lakini si katika maandiko ya Byzantine. | |
| noteNaReads | Here the Nestle-Aland editions read {word}. | Hapa matoleo ya Nestle-Aland yanasomeka {word}. | |
| noteLxx | Not in the Hebrew Leningrad Codex. Supplied from the Septuagint, as some translations do. | Halimo katika Leningrad Codex ya Kiebrania. Limechukuliwa kutoka Septuagint, kama zinavyofanya baadhi ya tafsiri. | |
| noteRestored | Missing from the Leningrad Codex and restored from a parallel passage. | Halimo katika Leningrad Codex na limerejeshwa kutoka kifungu sambamba. | |
| previousEntry | Previous entry | Neno lililotangulia | |
| close | Close | Funga | |
| wordsInVerse | Words in this verse | Maneno katika mstari huu | |
| moreAboutWord | Meaning, examples and related words | Maana, mifano na maneno yanayohusiana | |
| inThisVerse | In this verse | Katika mstari huu | |
| compoundWord | This word joins {n} Hebrew or Greek words; tap one | Neno hili linaunganisha maneno {n} ya Kiebrania au Kiyunani; gusa moja | |
| dictionaryForm | Dictionary form | Umbo la kamusi | |
| usualMeaning | Usual meaning across the Bible | Maana ya kawaida katika Biblia nzima | |
| examples | Examples | Mifano | |
| relatedWords | Related words | Maneno yanayohusiana | |
| strongsDictionary | Strong's dictionary (1890) | Kamusi ya Strong's (1890) | |
| lexiconGreek | Abbott-Smith's Greek lexicon (1922) | Kamusi ya Kiyunani ya Abbott-Smith (1922) | |
| lexiconHebrew | Brown–Driver–Briggs, outline of meanings (1906) | Brown–Driver–Briggs, muhtasari wa maana (1906) | |
| showWholeEntry | Show the whole entry | Onyesha sehemu yote | |
| showLess | Show less | Onyesha kidogo | |
| strongsNumberLine | Strong's number {id}, for looking the word up in other Bible tools | Namba ya Strong's {id}, ya kutafutia neno katika vifaa vingine vya Biblia | |
| seeAllVerses | See all {n} verses | Tazama mistari yote {n} | |
| seeOneVerse | See the one verse | Tazama mstari huo mmoja | |
| inTranslationSub | in {name} | katika {name} | |
| usedHebrew | Used {n} times in the Hebrew Bible | Limetumika mara {n} katika Biblia ya Kiebrania | |
| usedGreek | Used {n} times in the Greek New Testament | Limetumika mara {n} katika Agano Jipya la Kiyunani | |
| usesInVerses | (some verses have it more than once) | (baadhi ya mistari inalo zaidi ya mara moja) | |
| grammarMore | Shows the full grammar | Huonyesha sarufi kamili | |
| usedOnceHebrew | Used once in the Hebrew Bible | Limetumika mara moja katika Biblia ya Kiebrania | |
| usedOnceGreek | Used once in the Greek New Testament | Limetumika mara moja katika Agano Jipya la Kiyunani | |
| originalVersesHebrew | {n} verses in the Hebrew Bible, shown in the {translation} | Mistari {n} katika Biblia ya Kiebrania, imeonyeshwa katika {translation} | |
| originalVersesGreek | {n} verses in the Greek New Testament, shown in the {translation} | Mistari {n} katika Agano Jipya la Kiyunani, imeonyeshwa katika {translation} | |
| originalVerseHebrew | 1 verse in the Hebrew Bible, shown in the {translation} | Mstari 1 katika Biblia ya Kiebrania, umeonyeshwa katika {translation} | |
| originalVerseGreek | 1 verse in the Greek New Testament, shown in the {translation} | Mstari 1 katika Agano Jipya la Kiyunani, umeonyeshwa katika {translation} | |
| kjvUsage | In the KJV: {list} | Katika KJV: {list} | |
| usageIdiom | idiom | nahau | |
| usagePhrase | in a phrase | katika kirai | |
| usageWith | with other words | pamoja na maneno mengine | |
| wordsInVerseDetail | Open the Hebrew or Greek entry for each linked word | Fungua maana ya Kiebrania au Kiyunani ya kila neno lililounganishwa | |
| verseHint | Double-tap and hold for highlight, note, copy and more | Gusa mara mbili na ushikilie kwa alama ya rangi, maelezo, kunakili na zaidi | |
| verseActions | Verse {n}, actions | Mstari {n}, vitendo | |
| recent | Recent | Hivi karibuni | |
| openFailed | The Bible text could not be opened. | Maandiko ya Biblia hayakuweza kufunguliwa. | |
| openFailedDetail | This can happen when the phone is short of storage. Free about {mb} MB and try again. | Hii inaweza kutokea simu inapokosa nafasi ya kuhifadhi. Toa nafasi ya karibu MB {mb} kisha ujaribu tena. | |
| loadFailed | This could not be loaded. | Hii haikuweza kupakiwa. | |
| somethingWrong | Something went wrong. | Hitilafu imetokea. | |
| tryAgain | Try again | Jaribu tena | |
| appearance | Appearance | Mwonekano | |
| theme | Theme | Mandhari | |
| themeAuto | Auto | Otomatiki | |
| themeLight | Light | Mwanga | |
| themeSepia | Sepia | Sepia | |
| highlightStyle | Highlights | Alama za rangi | |
| highlightSoft | Soft | Laini | |
| highlightFluorescent | Fluorescent | Zinazong’aa | |
| highlightStyleDetail | Used in the dark theme | Hutumika katika mandhari ya giza | |
| themeDark | Dark | Giza | |
| layout | Layout | Mpangilio | |
| layoutVerses | Verse per line | Mstari mmoja kwa kila safu | |
| layoutParagraphs | Paragraphs | Aya | |
| serif | Serif typeface | Herufi za serif | |
| serifDetail | Book-style letters for the Bible text | Herufi za mtindo wa kitabu kwa maandiko ya Biblia | |
| keepAwake | Keep screen awake | Skrini ibaki imewaka | |
| keepAwakeDetail | While the app is open | Wakati programu iko wazi | |
| sideBySide | Side by side | Kando kwa kando | |
| sideBySideDetail | Two Bibles side by side on a tablet or a phone turned sideways | Biblia mbili kando kwa kando kwenye tabiti au simu iliyolazwa | |
| studyTools | Study tools | Vifaa vya kujifunza | |
| studyToolsDetail | Word meanings, Hebrew and Greek, cross references and book introductions. Turn off for plain reading. Your highlights and notes are kept. | Maana za maneno, Kiebrania na Kiyunani, rejea na utangulizi wa vitabu. Zima kwa usomaji wa kawaida. Alama zako za rangi na maelezo yanabaki. | |
| studyToolsOn | Switch the study tools on | Washa vifaa vya kujifunza | |
| studyToolsOff | Switch the study tools off | Zima vifaa vya kujifunza | |
| language | App language | Lugha ya programu | |
| translation | Translation | Tafsiri | |
| textSize | Text size | Ukubwa wa herufi | |
| smallerText | Smaller text | Herufi ndogo zaidi | |
| largerText | Larger text | Herufi kubwa zaidi | |
| textSizeHint | While reading, pinch with two fingers to change the size. | Unaposoma, bana kwa vidole viwili kubadilisha ukubwa. | |
| interlinear | Hebrew and Greek words | Maneno ya Kiebrania na Kiyunani | |
| showInterlinear | Show the Hebrew or Greek words | Onyesha maneno ya Kiebrania au Kiyunani | |
| showInterlinearDetail | Shown under each verse, word by word | Huonyeshwa chini ya kila mstari, neno kwa neno | |
| everyVerse | Every verse | Kila mstari | |
| everyVerseDetail | The whole chapter, word by word | Sura nzima, neno kwa neno | |
| tappedVerses | Only verses you tap | Mistari unayogusa tu | |
| tappedVersesDetail | Tap a verse number to show or hide its words | Gusa namba ya mstari kuonyesha au kuficha maneno yake | |
| transliteration | Transliteration | Unukuzi | |
| transliterationDetail | Show how each word is pronounced | Onyesha jinsi kila neno linavyotamkwa | |
| hideCantillation | Hide cantillation marks | Ficha alama za kiimbo | |
| hideCantillationDetail | Shows vowel points only | Huonyesha alama za irabu tu | |
| reading | Reading | Kusoma | |
| readAloudSection | Read aloud | Kusoma kwa sauti | |
| voiceEnglish | English voice | Sauti ya Kiingereza | |
| voiceDefault | Phone's default | Chaguo la simu | |
| voiceChosen | Chosen | Imechaguliwa | |
| voiceStandard | Standard | Ya kawaida | |
| voiceEnhanced | Enhanced | Iliyoboreshwa | |
| voiceOnline | Online, needs the internet | Mtandaoni, inahitaji intaneti | |
| voiceOffline | On the phone | Kwenye simu | |
| voiceSample | Hear a sample | Sikiliza mfano | |
| voiceNumber | Voice {n} | Sauti {n} | |
| voiceRegionIN | India | India | |
| voiceRegionUS | United States | Marekani | |
| voiceRegionGB | Britain | Uingereza | |
| voiceRegionAU | Australia | Australia | |
| voiceNone | This phone has no voice for this language. | Simu hii haina sauti ya lugha hii. | |
| voiceChoose | Choose a voice | Chagua sauti | |
| voiceMore | More voices come from the phone's Text-to-speech settings (Speech Services by Google → Install voice data). An online voice sends the text to the voice's maker while it reads. | Sauti zaidi hupatikana katika mipangilio ya Text-to-speech ya simu (Speech Services by Google → Install voice data). Sauti ya mtandaoni hutuma maandishi kwa mtengenezaji wa sauti hiyo wakati inasoma. | |
| underline | Underline linked words | Pigia mstari maneno yaliyounganishwa | |
| underlineDetail | Underlines words you can tap | Hupigia mstari maneno unayoweza kugusa | |
| aboutTexts | About the texts | Kuhusu maandiko | |
| sourcesLicences | Sources and licences | Vyanzo na leseni | |
| whyThisBible | Why this Bible | Kwa nini Biblia hii | |
| howTo | How to use | Jinsi ya kutumia | |
| howToIntro | Tap a topic to open it. | Gusa mada ili kuifungua. | |
| howTopic1 | Reading a chapter | Kusoma sura | |
| howText1 | Turn the chapter with the arrows at the foot of the page, or swipe. Tap the book name at the top to choose any book and chapter: Old or New Testament, the books under their groups, then the chapter. The Books tab lists every book too, and its clock button opens the chapters you read last. Spread two fingers to make the text larger, or set the size in Settings. | Badili sura kwa mishale iliyo chini ya ukurasa, au telezesha. Gusa jina la kitabu lililo juu kuchagua kitabu na sura yoyote: Agano la Kale au Agano Jipya, vitabu katika makundi yao, kisha sura. Kichupo cha Vitabu pia kinaorodhesha kila kitabu, na kitufe chake cha saa hufungua sura ulizosoma mwisho. Tanua vidole viwili kukuza maandishi, au weka ukubwa katika Mipangilio. | |
| howTopic2 | Switching Bibles | Kubadili Biblia | |
| howText2 | The name beside the chapter number at the top (ULB, Neno, Neno 2024, KJV or BSB) opens the list of Bibles; tap one to read it. Swipe left or right to turn the chapter, or tap the arrows at the bottom corners. On a tablet, or a phone turned on its side, a Swahili Bible and the KJV can be read together (Settings → Side by side). | Jina lililo kando ya namba ya sura juu (ULB, Neno, Neno 2024, KJV au BSB) hufungua orodha ya Biblia; gusa moja kuisoma. Telezesha kushoto au kulia kubadili sura, au gusa mishale katika pembe za chini. Kwenye tabiti, au simu iliyolazwa, Biblia ya Kiswahili na KJV zinaweza kusomwa pamoja (Mipangilio → Kando kwa kando). | |
| howTopic3 | A verse's menu | Menyu ya mstari | |
| howText3 | Press and hold a verse to open its menu: copy, share, bookmark, a highlight colour, a note, a picture card, add to the notebook, read aloud from here, mark part of the verse, compare the Bibles, cross references and parallel passages. | Bonyeza na ushikilie mstari kufungua menyu yake: nakili, shiriki, alamisho, rangi ya alama, maelezo, kadi ya picha, ongeza kwenye daftari, soma kwa sauti kuanzia hapa, wekea sehemu ya mstari alama, linganisha Biblia, rejea na vifungu sambamba. | |
| howTopic4 | Words and their Hebrew or Greek | Maneno na asili yake ya Kiebrania au Kiyunani | |
| howText4 | Tap a word to see the Hebrew or Greek word behind it, with its meaning, pronunciation and every verse it is used in. To see whole verses in the original language, word by word, turn on “Show the Hebrew or Greek words” in the list of Bibles or in Settings. Settings can also underline the words that can be tapped. | Gusa neno kuona neno la Kiebrania au Kiyunani lililo nyuma yake, pamoja na maana yake, matamshi yake na kila mstari linamotumika. Ili kuona mistari mizima katika lugha ya asili, neno kwa neno, washa “Onyesha maneno ya Kiebrania au Kiyunani” katika orodha ya Biblia au katika Mipangilio. Mipangilio pia inaweza kupigia mstari maneno yanayoweza kuguswa. | |
| howTopic5 | Highlighting part of a verse | Kuweka alama ya rangi sehemu ya mstari | |
| howText5 | Press and hold a verse and choose Mark text. Press and hold a word, drag to the last word and let go. The bar at the foot picks the colour and has an eraser; tap Done when finished. Everything marked is listed under Saved. | Bonyeza na ushikilie mstari na uchague Wekea maneno alama. Bonyeza na ushikilie neno, buruta hadi neno la mwisho kisha uachilie. Upau ulio chini huchagua rangi na una kifutio; gusa Tayari ukimaliza. Kila kilichowekewa alama kinaorodheshwa katika Vilivyohifadhiwa. | |
| howTopic6 | Saved | Vilivyohifadhiwa | |
| howText6 | The Saved tab lists your bookmarks, highlights, marked text and notes. Tap one to open its verse. | Kichupo cha Vilivyohifadhiwa kinaorodhesha alamisho zako, alama za rangi, maneno yenye alama na maelezo. Gusa kimoja kufungua mstari wake. | |
| howTopic7 | Search | Kutafuta | |
| howText7 | Type a word, or a reference such as Yohana 3:16, John 3:16 or Zaburi 23, in the search box. The Bible buttons above the results choose which Bible is searched; the Bible you are reading is chosen at first. Results start in the New Testament; the other buttons narrow them to a Testament or a book. A result opens in the Bible it was found in. | Andika neno, au rejea kama Yohana 3:16 au Zaburi 23, katika kisanduku cha kutafuta. Vitufe vya Biblia juu ya matokeo huchagua Biblia inayotafutwa; mwanzoni ni Biblia unayoisoma. Matokeo huanza katika Agano Jipya; vitufe vingine huyapunguza kwa Agano moja au kitabu kimoja. Tokeo hufunguka katika Biblia lilimopatikana. | |
| howTopic8 | Notebook | Daftari | |
| howText8 | The Notebook tab holds typed pages for sermon notes or a study. A reference typed on a page, such as John 3:16, becomes a link with the verse shown beneath. Press and hold a verse and choose Add to notebook to put it on a page. A page can be shared as text or as a PDF. While you write, the last reference on the line shows above the keyboard with its verse; Insert text puts the verse into the page. A line starting with “- ” or “1. ” carries on as a list. With more than two pages, the notebook has a search box. | Kichupo cha Daftari kina kurasa za kuchapa kwa ajili ya maelezo ya mahubiri au mafunzo. Rejea iliyoandikwa kwenye ukurasa, kama Yohana 3:16, huwa kiungo chenye mstari wenyewe chini yake. Bonyeza na ushikilie mstari na uchague Ongeza kwenye daftari ili kuuweka kwenye ukurasa. Ukurasa unaweza kushirikiwa kama maandishi au kama PDF. Unapoandika, rejea ya mwisho kwenye safu huonekana juu ya kibodi pamoja na mstari wake; Weka maandishi huingiza mstari kwenye ukurasa. Safu inayoanza na “- ” au “1. ” huendelea kama orodha. Kukiwa na kurasa zaidi ya mbili, daftari lina kisanduku cha kutafuta. | |
| howTopic9 | Handwritten pages | Kurasa za mwandiko wa mkono | |
| howText9 | New page → Handwritten gives a page to write on with a pen or a finger, on plain or lined paper: three pens, a highlighter, an eraser, undo and redo. Two fingers move the page. With a stylus, the pen-only switch lets your hand rest on the screen. The page is shared as a picture or a PDF. Pinch with two fingers to write larger or smaller; the line above the page says how large and takes it back to fit. The notebook list shows the top of each handwritten page. | Ukurasa mpya → Mwandiko wa mkono hukupa ukurasa wa kuandika kwa kalamu au kidole, kwenye karatasi tupu au yenye mistari: kalamu tatu, kalamu ya alama, kifutio, tendua na rudia. Vidole viwili husogeza ukurasa. Ukiwa na kalamu ya skrini (stylus), swichi ya kalamu pekee huruhusu mkono wako kuegemea skrini. Ukurasa hushirikiwa kama picha au PDF. Bana kwa vidole viwili kuandika kwa herufi kubwa zaidi au ndogo zaidi; safu iliyo juu ya ukurasa huonyesha ukubwa na huurudisha ukurasa utoshee. Orodha ya daftari huonyesha sehemu ya juu ya kila ukurasa wa mwandiko wa mkono. | |
| howTopic10 | Backing up the notebook | Kuhifadhi nakala rudufu ya daftari | |
| howText10 | In the Notebook, tap the backup button to save every page to one file, and keep it in Drive, Files or a chat. Restore from a backup adds the file's pages back; a page already here is replaced only by a newer copy of itself, and nothing is deleted. | Katika Daftari, gusa kitufe cha nakala rudufu ili kuhifadhi kila ukurasa kwenye faili moja, kisha uiweke katika Drive, Files au kwenye gumzo. Rejesha kutoka nakala rudufu huongeza tena kurasa za faili; ukurasa ambao tayari upo hapa hubadilishwa tu na nakala yake mpya zaidi, na hakuna kinachofutwa. | |
| howTopic11 | Listening | Kusikiliza | |
| howText11 | Press and hold a verse and choose “Read from here” to hear the chapter read in your phone's voice, verse by verse; the verse being read is marked, and reading goes on to the next chapter. The player sets the speed and moves between verses. Settings → Read aloud chooses the voice for each language; the phone's better and online voices are listed there. | Bonyeza na ushikilie mstari na uchague “Soma kuanzia hapa” ili kusikia sura ikisomwa kwa sauti ya simu yako, mstari kwa mstari; mstari unaosomwa huwekewa alama, na usomaji huendelea hadi sura inayofuata. Kicheza sauti huweka kasi na kusogea kati ya mistari. Mipangilio → Kusoma kwa sauti huchagua sauti ya kila lugha; sauti bora zaidi na za mtandaoni za simu zimeorodheshwa hapo. | |
| howTopic12 | Study tools and book introductions | Vifaa vya kujifunza na utangulizi wa vitabu | |
| howText12 | Study tools can be switched off for plain reading, and on again, in Settings → Study tools. With them on, tap “About this book” at the top of a book's first chapter (or above its chapter numbers) to read who wrote the book, when and for whom, its themes and outline, and key verses. | Vifaa vya kujifunza vinaweza kuzimwa kwa usomaji wa kawaida, na kuwashwa tena, katika Mipangilio → Vifaa vya kujifunza. Vikiwa vimewashwa, gusa “Kuhusu kitabu hiki” juu ya sura ya kwanza ya kitabu (au juu ya namba zake za sura) ili kusoma nani aliandika kitabu, lini na kwa ajili ya nani, mada zake na muhtasari wake, na mistari muhimu. | |
| howTopic13 | Picture cards | Kadi za picha | |
| howText13 | Press and hold a verse and choose Share as card to put it on a picture, for a birthday, a wedding or any day, with a message of your own and your own photo if you like. A design you make can be saved for next time. | Bonyeza na ushikilie mstari na uchague Shiriki kama kadi ili kuuweka kwenye picha, kwa siku ya kuzaliwa, harusi au siku yoyote, pamoja na ujumbe wako na picha yako ukipenda. Muundo unaoutengeneza unaweza kuhifadhiwa kwa wakati ujao. | |
| feedback | Write to us | Tuandikie | |
| feedbackDetail | Tell us about a problem or an idea. Opens your mail app. | Tueleze kuhusu tatizo au wazo. Hufungua programu yako ya barua pepe. | |
| feedbackCard | You have been reading with this app for a while. What could be better? A line from you helps us more than you might think. | Umekuwa ukisoma kwa programu hii kwa muda sasa. Nini kingeweza kuwa bora zaidi? Maneno machache kutoka kwako yanatusaidia kuliko unavyoweza kudhani. | |
| feedbackNotNow | Not now | Si sasa | |
| feedbackNever | No thanks | Hapana, asante | |
| feedbackSubject | Feedback: {app} {version} | Maoni: {app} {version} | |
| feedbackSentFrom | Sent from {app} {version} ({build}) on {device}. You may delete this line. | Imetumwa kutoka {app} {version} ({build}) kwenye {device}. Unaweza kufuta sentensi hii. | |
| feedbackNoMail | No mail app found | Hakuna programu ya barua pepe | |
| feedbackNoMailText | You can write to us at {address}. | Unaweza kutuandikia kwa {address}. | |
| feedbackCopyAddress | Copy address | Nakili anwani | |
| privacy | Privacy | Faragha | |
| chooseBible | Choose a Bible | Chagua Biblia | |
| nenoNote | The words of the Neno Bibles are not linked to the Hebrew and Greek, so tapping a word does nothing in them. The ULB and the English Bibles have the word links; cross references, parallel passages and the introductions work in every Bible. | Maneno ya Biblia za Neno hayajaunganishwa na Kiebrania na Kiyunani, kwa hiyo kugusa neno hakufanyi kitu ndani yake. ULB na Biblia za Kiingereza zina viungo vya maneno; rejea, vifungu sambamba na utangulizi vinafanya kazi katika kila Biblia. | |
| moreEntries | More ({n}) | Zaidi ({n}) | |
| fewerEntries | Fewer | Chache | |
| englishBibles | English | Kiingereza | |
| swahiliBibles | Swahili | Kiswahili | |
| databaseBuilt | Database built {date} | Hifadhidata imetengenezwa {date} | |
| appVersion | Version {version} | Toleo {version} | |
| previewText | In the beginning | Hapo mwanzo | |
| title | (title) | (kichwa) | |
| notebook | Notebook | Daftari | |
| newPage | New page | Ukurasa mpya | |
| untitled | Untitled | Bila kichwa | |
| pageTitle | Title | Kichwa | |
| insertVerseText | Insert text | Weka maandishi | |
| searchPages | Search pages | Tafuta kurasa | |
| noPagesFound | No page matches | Hakuna ukurasa unaolingana | |
| pageBody | Write here. A reference such as John 3:16 or Ps 23:1-3 links to the verse and shows its text. | Andika hapa. Rejea kama Yohana 3:16 au Zab 23:1-3 huunganishwa na mstari na huonyesha maandiko yake. | |
| editPage | Edit page | Hariri ukurasa | |
| donePage | Done | Tayari | |
| deletePage | Delete page | Futa ukurasa | |
| deletePageConfirm | Delete this page? It cannot be brought back. | Futa ukurasa huu? Hautaweza kurudishwa. | |
| cancel | Cancel | Ghairi | |
| sharePage | Share page | Shiriki ukurasa | |
| backupRestore | Back up or restore | Hifadhi au rejesha | |
| saveBackup | Save a backup | Hifadhi nakala rudufu | |
| saveBackupDetail | Every page, typed and handwritten, in one file to keep in Drive or Files, or to bring to another phone | Kila ukurasa, wa kuchapa na wa mwandiko wa mkono, katika faili moja ya kuweka katika Drive au Files, au ya kupeleka kwenye simu nyingine | |
| restoreBackup | Restore from a backup | Rejesha kutoka nakala rudufu | |
| restoreBackupDetail | Pages in the file are added; a page here is replaced only by a newer copy of itself. Nothing is deleted. | Kurasa zilizo kwenye faili huongezwa; ukurasa ulio hapa hubadilishwa tu na nakala yake mpya zaidi. Hakuna kinachofutwa. | |
| backupEmpty | The notebook has no pages yet. | Daftari bado halina kurasa. | |
| backupFailed | The backup could not be made. | Nakala rudufu haikuweza kutengenezwa. | |
| restoreNotBackup | This file is not a notebook backup. | Faili hii si nakala rudufu ya daftari. | |
| restoreTooLarge | This file is too large to be a notebook backup. | Faili hii ni kubwa mno kuwa nakala rudufu ya daftari. | |
| restoreDone | Restored: {added} new, {updated} updated, {kept} already here. | Imerejeshwa: {added} mpya, {updated} zimesasishwa, {kept} zilikuwepo tayari. | |
| shareAsText | Share as text | Shiriki kama maandishi | |
| shareAsPdf | Share as PDF | Shiriki kama PDF | |
| shareAsPicture | Share as picture | Shiriki kama picha | |
| pdfFailed | The PDF could not be made. | PDF haikuweza kutengenezwa. | |
| inkPageFull | This page is full. Start a new page to go on writing. | Ukurasa huu umejaa. Anza ukurasa mpya ili kuendelea kuandika. | |
| restoreFailed | The backup could not be restored. Nothing was changed. | Nakala rudufu haikuweza kurejeshwa. Hakuna kilichobadilishwa. | |
| backupInkUnreadable | The writing on “{page}” cannot be read, so no backup was made. Open the page to check it, then try again. | Mwandiko ulio kwenye “{page}” hauwezi kusomwa, kwa hiyo nakala rudufu haikutengenezwa. Fungua ukurasa huo kuukagua, kisha ujaribu tena. | |
| restoreOtherEdition | This backup was made in the {app} app. Its verses are quoted from that Bible. Restore it here? | Nakala rudufu hii ilitengenezwa katika programu ya {app}. Mistari yake imenukuliwa kutoka Biblia hiyo. Uirejeshe hapa? | |
| pageTyped | Typed page | Ukurasa wa kuchapa | |
| pageTypedDetail | References such as John 3:16 link to the verse | Rejea kama Yohana 3:16 huunganishwa na mstari | |
| pageHandPlain | Handwritten, plain paper | Mwandiko wa mkono, karatasi tupu | |
| pageHandLined | Handwritten, lined paper | Mwandiko wa mkono, karatasi yenye mistari | |
| pageHandDetail | Write with a pen or your finger | Andika kwa kalamu au kwa kidole chako | |
| handwritten | Handwritten | Mwandiko wa mkono | |
| penBlack | Black pen | Kalamu nyeusi | |
| penBlue | Blue pen | Kalamu ya bluu | |
| penRed | Red pen | Kalamu nyekundu | |
| highlighterYellow | Yellow highlighter | Kalamu ya alama ya njano | |
| penThin | Thin pen | Kalamu nyembamba | |
| penThick | Thick pen | Kalamu nene | |
| undo | Undo | Tendua | |
| redo | Redo | Rudia | |
| linedPaper | Lined paper | Karatasi yenye mistari | |
| plainPaper | Plain paper | Karatasi tupu | |
| inkHint | Write with one finger or a pen. Move the page with two fingers, pinch to make it larger. | Andika kwa kidole kimoja au kwa kalamu. Sogeza ukurasa kwa vidole viwili, bana ili kuukuza. | |
| inkZoom | {z}× · Fit the page | {z}× · Tosheleza ukurasa | |
| inkPenFound | Pen found: now a finger moves the page and only the pen writes. | Kalamu imepatikana: sasa kidole husogeza ukurasa na kalamu pekee ndiyo huandika. | |
| inkPenOnly | Only the pen writes | Kalamu pekee huandika | |
| inkPenOnlyOn | Only the pen writes now; a finger moves the page. | Sasa kalamu pekee ndiyo huandika; kidole husogeza ukurasa. | |
| inkPenOnlyOff | A finger writes again; two fingers move the page. | Kidole kinaandika tena; vidole viwili husogeza ukurasa. | |
| inkMovePen | One finger moves the page. | Kidole kimoja husogeza ukurasa. | |
| inkMoveFingers | Two fingers move the page. | Vidole viwili husogeza ukurasa. | |
| colourYellow | yellow | njano | |
| colourGreen | green | kijani | |
| colourBlue | blue | bluu | |
| colourPink | pink | waridi | |
| inkShareFailed | The page could not be shared. | Ukurasa haukuweza kushirikiwa. | |
| notebookEmptyTitle | No pages yet | Bado hakuna kurasa | |
| notebookEmpty | Write sermon notes, a study or a list of verses. Tap + to start a page, or hold a verse in the reader and choose Add to notebook. | Andika maelezo ya mahubiri, mafunzo au orodha ya mistari. Gusa + kuanza ukurasa, au shikilia mstari unaposoma na uchague Ongeza kwenye daftari. | |
| addToNotebook | Add to notebook | Ongeza kwenye daftari | |
| addToNotebookDetail | Put this verse on a page of your notebook | Weka mstari huu kwenye ukurasa wa daftari lako | |
| choosePage | Add to which page? | Ongeza kwenye ukurasa upi? | |
| addedToPage | Added to {title} | Imeongezwa kwenye {title} | |
| moreVerses | {n} more verses | Mistari mingine {n} | |
| pageEdited | Edited {date} | Imehaririwa {date} | |
| tabRead | Read | Soma | |
| saveFailedTitle | Not saved | Haijahifadhiwa | |
| saveFailed | Your latest changes could not be saved. The phone may be out of storage space. The app will keep trying while it is open. | Mabadiliko yako ya mwisho hayakuweza kuhifadhiwa. Huenda simu imejaa. Programu itaendelea kujaribu wakati iko wazi. | |
| readFailedTitle | Saved data could not be read | Data iliyohifadhiwa haikuweza kusomwa | |
| readFailed | Your bookmarks, notes or notebook could not be read this time. They are left untouched; changes made now will not be saved. Close the app fully and open it again. | Alamisho, maelezo au daftari lako havikuweza kusomwa wakati huu. Havijaguswa; mabadiliko utakayofanya sasa hayatahifadhiwa. Funga programu kabisa kisha uifungue tena. | |
| restoredBackupTitle | Restored from a backup | Imerejeshwa kutoka nakala rudufu | |
| restoredBackup | Some saved data was damaged, so an earlier copy was used. Recent changes may be missing. | Baadhi ya data iliyohifadhiwa iliharibika, kwa hiyo nakala ya awali ilitumika. Mabadiliko ya hivi karibuni huenda hayapo. | |
| voiceSwahili | Swahili voice | Sauti ya Kiswahili | |
| noSwahiliVoice | This phone has no Swahili voice. Install Speech Services by Google from the Play Store, choose it in the phone's Text-to-speech settings, and download the Swahili voice there. | Simu hii haina sauti ya Kiswahili. Sakinisha Speech Services by Google kutoka Play Store, ichague katika mipangilio ya Text-to-speech ya simu, kisha pakua sauti ya Kiswahili hapo. | |
| aboutSwahili | Bibles: the Swahili Unlocked Literal Bible (ULB), Neno 2015 and Neno 2024 in Swahili, and the King James Version and Berean Standard Bible in English. The links from the ULB’s words to the Hebrew and Greek were made by computer and are not checked yet. The Neno Bibles’ words are not linked. | Biblia: Biblia Takatifu ya Unlocked Literal Bible (ULB), Neno 2015 na Neno 2024 kwa Kiswahili, na King James Version na Berean Standard Bible kwa Kiingereza. Viungo kutoka maneno ya ULB hadi Kiebrania na Kiyunani vilitengenezwa na kompyuta na bado havijakaguliwa. Maneno ya Biblia za Neno hayajaunganishwa. | |
