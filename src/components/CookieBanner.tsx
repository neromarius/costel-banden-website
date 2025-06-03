'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const COOKIE_KEY = "costel_banden_cookie_consent";

const defaultPrefs = {
  analytics: false,
  marketing: false,
  necessary: true,
};

type CookiePrefs = typeof defaultPrefs;

// Translation function
const useTranslations = (lang: string) => {
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/api/translations/${lang}`);
        if (!response.ok) {
          // Fallback to importing directly
          const module = await import(`../i18n/${lang}.json`);
          setTranslations(module.default);
        } else {
          const data = await response.json();
          setTranslations(data);
        }
      } catch (error) {
        // Fallback to Dutch if translation fails
        try {
          const module = await import(`../i18n/nl.json`);
          setTranslations(module.default);
        } catch (fallbackError) {
          console.error('Failed to load translations:', fallbackError);
        }
      }
    };

    loadTranslations();
  }, [lang]);

  return translations;
};

// Get current language from pathname
const getCurrentLanguage = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (['ro', 'en', 'fr', 'nl'].includes(firstSegment)) {
    return firstSegment;
  }
  
  return 'nl'; // Default to Dutch
};

// Get localized paths for privacy/cookie policy
const getLocalizedPaths = (lang: string) => {
  const basePath = lang === 'nl' ? '' : `/${lang}`;
  
  const paths = {
    privacy: {
      ro: `${basePath}/politica-confidentialitate`,
      en: `${basePath}/privacy-policy`,
      fr: `${basePath}/politique-confidentialite`,
      nl: '/privacybeleid'
    },
    cookie: {
      ro: `${basePath}/politica-cookie`,
      en: `${basePath}/cookie-policy`,
      fr: `${basePath}/politique-cookies`,
      nl: '/cookiebeleid'
    }
  };

  return {
    privacy: paths.privacy[lang as keyof typeof paths.privacy] || paths.privacy.nl,
    cookie: paths.cookie[lang as keyof typeof paths.cookie] || paths.cookie.nl
  };
};

export default function CookieBanner({ onConsent }: { onConsent?: (prefs: CookiePrefs) => void }) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);
  const translations = useTranslations(currentLang);
  const localizedPaths = getLocalizedPaths(currentLang);
  
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const savePrefs = (newPrefs: CookiePrefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(newPrefs));
    setVisible(false);
    if (onConsent) onConsent(newPrefs);
  };

  const handleAccept = () => {
    savePrefs({ ...prefs, analytics: true, marketing: false });
  };

  const handleReject = () => {
    savePrefs({ ...prefs, analytics: false, marketing: false });
  };

  const handleCustomize = () => setCustomize(true);

  // Don't render if not visible or translations not loaded
  if (!visible || !translations.cookies) return null;

  const t = translations.cookies;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full m-4 p-6 flex flex-col gap-4 border border-gray-200 animate-fade-in">
        <h2 className="text-xl font-bold text-blue-800">{t.title}</h2>
        <p className="text-blue-900 text-base leading-relaxed">
          {t.description}
        </p>
        <div className="text-sm text-blue-700">
          <Link href={localizedPaths.privacy} className="underline hover:text-blue-800 transition-colors">
            {t.privacy_policy}
          </Link>
          {' | '}
          <Link href={localizedPaths.cookie} className="underline hover:text-blue-800 transition-colors">
            {t.cookie_policy}
          </Link>
        </div>
        
        {customize ? (
          <div className="flex flex-col gap-3">
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked disabled className="cursor-not-allowed mt-1" />
                <div>
                  <span className="font-semibold text-green-700 block">{t.essential_cookies}</span>
                  <p className="text-sm text-gray-600 mt-1">{t.essential_description}</p>
                </div>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={prefs.analytics} 
                  onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} 
                  className="cursor-pointer mt-1"
                />
                <div>
                  <span className="block">Google Search Console</span>
                  <p className="text-sm text-gray-600 mt-1">{t.analytics_description}</p>
                </div>
              </label>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button 
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors flex-1" 
                onClick={() => savePrefs(prefs)}
              >
                {t.save}
              </button>
              <button 
                className="bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors" 
                onClick={() => setCustomize(false)}
              >
                {t.back}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <button 
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors flex-1" 
                onClick={handleAccept}
              >
                {t.accept}
              </button>
              <button 
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex-1" 
                onClick={handleReject}
              >
                {t.reject}
              </button>
            </div>
            <button 
              className="bg-white border border-blue-600 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors" 
              onClick={handleCustomize}
            >
              {t.customize}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
