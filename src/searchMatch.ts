// Where a search matched in a verse. No runtime imports, so scripts/test-logic.mts can check it.

/**
 * Character ranges of `query` inside `text`, for marking search results: ignoring case and
 * apostrophe style (ng'ombe, ngʼombe, ng’ombe), as the search does.
 */
export function matchRanges(text: string, query: string): [number, number][] {
  const q = query.trim().replace(/\s+/g, ' ').toLowerCase().replace(/[’‘ʼ]/g, "'");
  if (!q) return [];
  const t = text.toLowerCase().replace(/[’‘ʼ]/g, "'");
  if (t.length !== text.length) return []; // case folding changed lengths; skip rather than mis-highlight
  const out: [number, number][] = [];
  let i = t.indexOf(q);
  while (i >= 0) {
    out.push([i, i + q.length]);
    i = t.indexOf(q, i + q.length);
  }
  return out;
}
