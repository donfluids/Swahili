// Adds (or renews) the cross references, parallel passages and book introductions in the
// built databases without rebuilding them (npm run build-db does the same as part of a full build):
//   node --no-warnings scripts/add-study-data.mjs
import { DatabaseSync } from 'node:sqlite';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { addCrossRefs } from './lib/crossrefs.mjs';
import { recordDatabase } from './lib/dbfiles.mjs';
import { addIntros } from './lib/intros.mjs';
import { addParallels } from './lib/parallels.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
for (const edition of ['sw']) {
  const file = join(ROOT, 'assets', 'db', `bible-${edition}.db`);
  const db = new DatabaseSync(file);
  const raw = join(ROOT, 'data', 'raw');
  const stats = { crossrefs: addCrossRefs(db, raw), parallels: addParallels(db, raw), intros: addIntros(db, ROOT, edition) };
  db.exec('VACUUM');
  db.close();
  recordDatabase(ROOT, edition, file);
  console.log(edition, JSON.stringify(stats));
}
