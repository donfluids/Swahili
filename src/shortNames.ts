import { ENGLISH_SHORT_NAMES, SWAHILI_SHORT_NAMES } from './refs';
import { isEnglish } from './types';
import type { TranslationId } from './types';

/** The short name of a book for the reader's top bar (see SWAHILI_SHORT_NAMES in refs.ts). */
export function shortBookName(book: number, translation: TranslationId): string {
  const list = isEnglish(translation) ? ENGLISH_SHORT_NAMES : SWAHILI_SHORT_NAMES;
  return list[book - 1] ?? '';
}
