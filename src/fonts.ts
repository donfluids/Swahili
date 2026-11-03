import { Platform } from 'react-native';
import { SERIF_FONT } from './theme';

/**
 * Typefaces built into the app (SIL Open Font License), so Hebrew points look the same on
 * every phone instead of depending on the fonts the phone ships. The expo-font config
 * plugin (app.config.js) puts the font files in the app, so nothing loads at startup.
 * Android finds them by file name, iOS by the name inside the font (its PostScript name).
 * Expo Go does not have them and shows the phone's own fonts. Swahili and English are in
 * the Latin alphabet, which every phone's own faces cover.
 */
const ios = Platform.OS === 'ios';
export const HEBREW_FONT = ios ? 'NotoSerifHebrew-Medium' : 'NotoSerifHebrew_500Medium';

/**
 * Scripts that would need a typeface of their own. The Bible apps this one comes from carry
 * Malayalam, Tamil and Devanagari faces; this app needs none, so there are no values, and
 * the screens' code for them (bold families, line heights) never runs.
 */
export type Script = never;

/** The script of an interface language, when it has a bundled typeface: none here. */
export const languageScript = (_language: string): Script | null => null;

/** The script with a bundled typeface that a text is written in: none here. */
export const scriptOf = (_text: string): Script | null => null;

/** Font family for scripture text: the system face, serif when chosen. */
export function scriptureFont(_script: Script | null | undefined, serif: boolean, _bold = false): string | undefined {
  return serif ? SERIF_FONT : undefined;
}
