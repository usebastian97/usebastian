// Import JSON translation files
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import frTranslations from './locales/fr.json';
import nlTranslations from './locales/nl.json';
import chTranslations from './locales/ch.json';
import jpTranslations from './locales/jp.json';
import itTranslations from './locales/it.json';
import esTranslations from './locales/es.json';
import ptTranslations from './locales/pt.json';
import ptBrTranslations from './locales/pt-br.json';

export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  nl: 'Nederlands',
  ch: '简体中文',
  jp: '日本語',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  'pt-br': 'Português (BR)',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, Record<string, any>> = {
  en: enTranslations,
  de: deTranslations,
  fr: frTranslations,
  nl: nlTranslations,
  ch: chTranslations,
  jp: jpTranslations,
  it: itTranslations,
  es: esTranslations,
  pt: ptTranslations,
  'pt-br': ptBrTranslations,
};

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
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

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAllLocalizedPaths(path: string): Array<{ lang: Language; path: string }> {
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    path: getLocalizedPath(path, lang as Language),
  }));
}
