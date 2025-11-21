// Import JSON translation files
import enTranslations from './locales/en.json';

export const languages = {
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, Record<string, any>> = {
  en: enTranslations,
};

export function getLangFromUrl(_url: URL): Language {
  return defaultLang;
}

export function useTranslations(lang: Language = 'en') {
  return function t(key: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getLocalizedPath(path: string, _lang: Language): string {
  return path;
}

export function getAllLocalizedPaths(path: string): Array<{ lang: Language; path: string }> {
  return [{ lang: 'en', path }];
}
