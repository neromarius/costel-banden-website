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

// Static translations embedded in component
const translations = {
  ro: {
    title: "🍪 Cookie-uri și Confidențialitate",
    description: "Utilizăm doar cookie-uri esențiale și Google Search Console pentru statistici website. Continuând navigarea, sunteți de acord cu politica noastră de cookie-uri.",
    privacy_policy: "Politica de confidențialitate",
    cookie_policy: "Politica cookie-uri",
    essential_cookies: "Cookie-uri esențiale (obligatorii)",
    essential_description: "Pentru funcționalitatea website-ului și alegerea cookie-urilor.",
    analytics_description: "Pentru statistici și performanța website-ului (anonim).",
    accept: "Acceptă",
    reject: "Respinge",
    customize: "Personalizează preferințele",
    save: "Salvează",
    back: "Înapoi"
  },
  en: {
    title: "🍪 Cookies & Privacy",
    description: "We only use essential cookies and Google Search Console for website statistics. By continuing to browse, you agree to our cookie policy.",
    privacy_policy: "Privacy Policy",
    cookie_policy: "Cookie Policy",
    essential_cookies: "Essential cookies (required)",
    essential_description: "For website functionality and your cookie choice.",
    analytics_description: "For website statistics and performance (anonymous).",
    accept: "Accept",
    reject: "Reject",
    customize: "Customize preferences",
    save: "Save",
    back: "Back"
  },
  fr: {
    title: "🍪 Cookies et Confidentialité",
    description: "Nous utilisons uniquement des cookies essentiels et Google Search Console pour les statistiques du site. En continuant à naviguer, vous acceptez notre politique de cookies.",
    privacy_policy: "Politique de confidentialité",
    cookie_policy: "Politique des cookies",
    essential_cookies: "Cookies essentiels (obligatoires)",
    essential_description: "Pour la fonctionnalité du site et votre choix de cookies.",
    analytics_description: "Pour les statistiques et performances du site (anonyme).",
    accept: "Accepter",
    reject: "Refuser",
    customize: "Personnaliser les préférences",
    save: "Sauvegarder",
    back: "Retour"
  },
  nl: {
    title: "🍪 Cookies & Privacy",
    description: "Wij gebruiken alleen essentiële cookies en Google Search Console voor websitestatistieken. Door verder te surfen, ga je akkoord met ons cookiebeleid.",
    privacy_policy: "Privacybeleid",
    cookie_policy: "Cookiebeleid",
    essential_cookies: "Essentiële cookies (verplicht)",
    essential_description: "Voor website functionaliteit en uw cookiekeuze.",
    analytics_description: "Voor website statistieken en prestaties (anoniem).",
    accept: "Accepteren",
    reject: "Weigeren",
    customize: "Voorkeuren aanpassen",
    save: "Opslaan",
    back: "Terug"
  }
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

export default function CookieBanner({ onConsent }: { onConsent?: (prefs: CookiePrefs) => void }) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname) as keyof typeof translations;
  
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const savePrefs = (newPrefs: CookiePrefs) => {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(newPrefs));
      setVisible(false);
      if (onConsent) onConsent(newPrefs);
      
      // Force a small delay to ensure state updates properly
      setTimeout(() => {
        console.log('Cookie preferences saved:', newPrefs);
      }, 100);
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
    }
  };

  const handleAccept = () => {
    console.log('Accept clicked');
    savePrefs({ ...prefs, analytics: true, marketing: false });
  };

  const handleReject = () => {
    console.log('Reject clicked');
    savePrefs({ ...prefs, analytics: false, marketing: false });
  };

  const handleCustomize = () => setCustomize(true);

  // Don't render if not visible
  if (!visible) {
    console.log('Cookie banner not visible');
    return null;
  }

  const t = translations[currentLang] || translations.nl;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center" 
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full m-4 p-6 border border-gray-200 relative z-[10000]">
        <h2 className="text-xl font-bold text-blue-800 mb-3">{t.title}</h2>
        <p className="text-blue-900 text-base leading-relaxed mb-4">
          {t.description}
        </p>
        <div className="text-sm text-blue-700 mb-4">
          <Link href="/privacybeleid" className="underline hover:text-blue-800 transition-colors">
            {t.privacy_policy}
          </Link>
          {' | '}
          <Link href="/cookiebeleid" className="underline hover:text-blue-800 transition-colors">
            {t.cookie_policy}
          </Link>
        </div>
        
        {customize ? (
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <input 
                  type="checkbox" 
                  checked 
                  disabled 
                  style={{
                    width: '16px',
                    height: '16px',
                    marginTop: '2px',
                    accentColor: '#10b981'
                  }}
                />
                <div>
                  <span className="font-semibold text-green-700 block">{t.essential_cookies}</span>
                  <p className="text-sm text-gray-600 mt-1">{t.essential_description}</p>
                </div>
              </label>
              
              <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={prefs.analytics} 
                  onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} 
                  style={{
                    width: '16px',
                    height: '16px',
                    marginTop: '2px',
                    accentColor: '#3b82f6'
                  }}
                />
                <div>
                  <span className="block font-medium">Google Search Console</span>
                  <p className="text-sm text-gray-600 mt-1">{t.analytics_description}</p>
                </div>
              </label>
            </div>
            
            <div className="flex gap-2 pt-4">
              <button 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors" 
                onClick={() => savePrefs(prefs)}
              >
                {t.save}
              </button>
              <button 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-colors" 
                onClick={() => setCustomize(false)}
              >
                {t.back}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-2">
              <button 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors" 
                onClick={handleAccept}
              >
                {t.accept}
              </button>
              <button 
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors" 
                onClick={handleReject}
              >
                {t.reject}
              </button>
            </div>
            <button 
              className="w-full bg-white border-2 border-blue-600 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors" 
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
