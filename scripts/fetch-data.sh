#!/usr/bin/env bash
# Downloads the public domain source texts used to build assets/db/bible-sw.db.
# Everything lands in data/raw/, which is not committed.
set -euo pipefail

RAW="$(cd "$(dirname "$0")/.." && pwd)/data/raw"
mkdir -p "$RAW"
cd "$RAW"

fetch() {
  local out="$1" url="$2"
  if [ -s "$out" ]; then
    echo "have $out"
  else
    echo "get  $out"
    curl -sS -L --fail --retry 3 -o "$out" "$url"
  fi
}

# King James Version (1769 text) with Strong's numbers, USFM, eBible.org
fetch kjv.zip https://ebible.org/Scriptures/eng-kjv2006_usfm.zip
# Swahili Unlocked Literal Bible, Door43 World Missions Community 2019 (CC BY-SA 4.0)
fetch swhulb.zip https://ebible.org/Scriptures/swhulb_usfm.zip
# Biblica Open Kiswahili Contemporary Version (Neno) 2015, Biblica, Inc. (CC BY-SA 4.0)
fetch swhonen.zip https://ebible.org/Scriptures/swhonen_usfm.zip
# Biblica Open Neno: Maandiko Matakatifu 2024, Biblica, Inc. (CC BY-SA 4.0)
fetch swhonmm.zip https://ebible.org/Scriptures/swhonmm_usfm.zip
# Strong's dictionaries as JSON, Open Scriptures (CC BY-SA)
fetch strongs-hebrew.js https://raw.githubusercontent.com/openscriptures/strongs/master/hebrew/strongs-hebrew-dictionary.js
fetch strongs-greek.js  https://raw.githubusercontent.com/openscriptures/strongs/master/greek/strongs-greek-dictionary.js

# Berean Standard Bible (CC0), CrossWire's SWORD module: its Strong's tags sit on the right
# words (eBible's engbsb are shifted). Turned into USFM by scripts/bsb-from-sword.mjs below.
fetch bsb-sword.zip https://www.crosswire.org/ftpmirror/pub/sword/packages/rawzip/BSB.zip
# Abbott-Smith, A Manual Greek Lexicon of the New Testament (1922), TEI, public domain
fetch abbott-smith.tei.xml https://raw.githubusercontent.com/translatable-exegetical-tools/Abbott-Smith/master/abbott-smith.tei.xml
# BDB Glosses keyed to Strong's (CrossWire, from Open Scriptures' Hebrew Lexicon), public domain
fetch bdbglosses.zip https://www.crosswire.org/ftpmirror/pub/sword/packages/rawzip/BDBGlosses_Strongs.zip

# Cross references from OpenBible.info (CC BY), drawn from the Treasury of Scripture Knowledge
# and ranked by readers' votes; KJV verse numbering.
fetch cross-references.zip https://a.openbible.info/data/cross-references.zip

# Parallel passages from the United Bible Societies' Parallel Passages Database
# (© 2023 United Bible Societies, CC BY-SA 4.0); Hebrew and Greek verse numbering.
mkdir -p ubs
fetch ubs/ParallelPassages.xml "https://raw.githubusercontent.com/ubsicap/ubs-open-license/main/parallel%20passages/ParallelPassages.xml"

# STEPBible Translators Amalgamated Hebrew OT and Greek NT (CC BY 4.0), Tyndale House Cambridge.
# Their licence permits bundling in software but asks that the files themselves are not redistributed.
mkdir -p step
STEP="https://raw.githubusercontent.com/STEPBible/STEPBible-Data/master/Translators%20Amalgamated%20OT%2BNT"
for name in \
  "TAHOT Gen-Deu - Translators Amalgamated Hebrew OT - STEPBible.org CC BY.txt" \
  "TAHOT Jos-Est - Translators Amalgamated Hebrew OT - STEPBible.org CC BY.txt" \
  "TAHOT Job-Sng - Translators Amalgamated Hebrew OT - STEPBible.org CC BY.txt" \
  "TAHOT Isa-Mal - Translators Amalgamated Hebrew OT - STEPBible.org CC BY.txt" \
  "TAGNT Mat-Jhn - Translators Amalgamated Greek NT - STEPBible.org CC-BY.txt" \
  "TAGNT Act-Rev - Translators Amalgamated Greek NT - STEPBible.org CC-BY.txt"; do
  encoded=$(printf '%s' "$name" | sed 's/ /%20/g; s/+/%2B/g')
  fetch "step/$name" "$STEP/$encoded"
done

rm -rf kjv swhulb swhonen swhonmm bsb-sword bsb bdbglosses openbible
mkdir -p kjv swhulb swhonen swhonmm bsb-sword bdbglosses openbible
unzip -oq cross-references.zip -d openbible
unzip -oq kjv.zip -d kjv
unzip -oq swhulb.zip -d swhulb
unzip -oq swhonen.zip -d swhonen
unzip -oq swhonmm.zip -d swhonmm
unzip -oq bsb-sword.zip -d bsb-sword
unzip -oq bdbglosses.zip -d bdbglosses
node "$RAW/../../scripts/bsb-from-sword.mjs" "$RAW/bsb-sword" "$RAW/bsb"
# The sources must be the ones the databases were built from (data/sources.json).
node "$RAW/../../scripts/check-sources.mjs"
echo "done: $(ls kjv/*.usfm | wc -l) KJV files, $(ls swhulb/*.usfm | wc -l) ULB files, $(ls swhonen/*.usfm | wc -l) Neno 2015 files, $(ls swhonmm/*.usfm | wc -l) Neno 2024 files"
