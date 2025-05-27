// Utilitar simplu pentru traduceri pe baza limbii browserului sau a rutei
export type Locale = 'ro' | 'en' | 'fr' | 'nl';

const LOCALE_FILES: Record<Locale, string> = {
  ro: '/locales/ro.json',
  en: '/locales/en.json',
  fr: '/locales/fr.json',
  nl: '/locales/nl.json',
};

let cache: Partial<Record<Locale, any>> = {};

export async function loadLocale(locale: Locale): Promise<any> {
  if (cache[locale]) return cache[locale];

  try {
    // Detectează dacă rulezi pe server sau client
    if (typeof window === "undefined") {
      // Server: importă JSON direct din public/locales/
      const data = await import(`../../public/locales/${locale}.json`);
      cache[locale] = data.default;
      return data.default;
    } else {
      // Client: fetch normal
      const res = await fetch(`/locales/${locale}.json`);
      if (!res.ok) {
        throw new Error(`Failed to load locale ${locale}`);
      }
      const data = await res.json();
      cache[locale] = data;
      return data;
    }
  } catch (error) {
    console.warn(`Failed to load locale ${locale}, falling back to 'ro'`);
    // Fallback la română dacă nu găsește locale-ul cerut
    if (locale !== 'ro') {
      return loadLocale('ro');
    }
    // Dacă nici româna nu merge, returnează un obiect gol
    return {};
  }
}

export function detectLocale(): Locale {
  if (typeof window !== 'undefined') {
    const lang = window.navigator.language.slice(0, 2).toLowerCase();
    if (['ro', 'en', 'fr', 'nl'].includes(lang)) return lang as Locale;
  }
  return 'ro';
}
