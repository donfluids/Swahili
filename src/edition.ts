import Constants from 'expo-constants';
import { createContext, useContext } from 'react';
import { isSwahili } from './types';
import type { TranslationId } from './types';

export type EditionId = 'sw';
export type Language = 'sw' | 'en';

export interface Edition {
  id: EditionId;
  /** Translations bundled in this edition's database, in display order. */
  translations: TranslationId[];
  defaultTranslation: TranslationId;
  /** Interface languages offered; the first is the default. */
  languages: Language[];
}

// The one edition: three Swahili Bibles, the KJV and the BSB, with Swahili menus (English in
// Settings). The Bible beside the chapter number opens the five under their own names.
export const EDITIONS: Record<EditionId, Edition> = {
  sw: { id: 'sw', translations: ['SWU', 'SWN', 'SWM', 'KJV', 'BSB'], defaultTranslation: 'SWU', languages: ['sw', 'en'] },
};

/** The edition's main Swahili Bible, the one whose words are linked to the Hebrew and Greek. */
export function nativeTranslation(edition: Edition): TranslationId {
  return edition.translations[0];
}

/** True when the edition has more than one Swahili Bible: search then shows a row of them. */
export const hasSeveralBibles = (edition: Edition) => edition.translations.filter(isSwahili).length > 1;

/**
 * The Swahili Bible that goes with what is being read: beside the KJV on a wide screen, and
 * the other side of the Bible switch. It is the Swahili Bible open now, else the one read
 * last, else the main one.
 */
export function pairedBible(edition: Edition, translation: TranslationId, lastSwahili: string): TranslationId {
  if (isSwahili(translation)) return translation;
  return edition.translations.find((id) => id === lastSwahili && isSwahili(id)) ?? nativeTranslation(edition);
}

export function isEditionId(value: unknown): value is EditionId {
  return value === 'sw';
}

const configured = (Constants.expoConfig?.extra as { edition?: string } | undefined)?.edition;

/**
 * The edition the build configuration claims. The database bundled with the app is
 * the final word (its meta table carries the edition it was built for), so the app
 * shell resolves the edition from the database and provides it through context.
 */
export const CONFIGURED_EDITION: Edition = EDITIONS.sw;

/** The edition named in the build configuration, if it names one. */
export const CONFIGURED_EDITION_ID: EditionId | undefined = isEditionId(configured) ? configured : undefined;

export const EditionContext = createContext<Edition>(CONFIGURED_EDITION);

export function useEdition(): Edition {
  return useContext(EditionContext);
}
