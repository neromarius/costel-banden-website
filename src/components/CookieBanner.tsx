'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';

const COOKIE_KEY = "costel_banden_cookie_consent";

const defaultPrefs = {
  analytics: false,
  marketing: false,
  necessary: true,
};

type CookiePrefs = typeof defaultPrefs;

export default function CookieBanner({ onConsent }: { onConsent?: (prefs: CookiePrefs) => void }) {
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
    savePrefs({ ...prefs, analytics: true, marketing: false }); // Doar analytics pentru Google Search Console
  };

  const handleReject = () => {
    savePrefs({ ...prefs, analytics: false, marketing: false });
  };

  const handleCustomize = () => setCustomize(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full m-4 p-6 flex flex-col gap-4 border border-gray-200 animate-fade-in">
        <h2 className="text-xl font-bold text-blue-800">🍪 Cookies & Privacy</h2>
        <p className="text-blue-900 text-base">
          Wij gebruiken alleen essentiële cookies en Google Search Console voor websitestatistieken. 
          Door verder te surfen, ga je akkoord met ons cookiebeleid.
        </p>
        <div className="text-sm text-blue-700">
          <Link href="/privacybeleid" className="underline hover:text-blue-800">Privacybeleid</Link>
          {' | '}
          <Link href="/cookiebeleid" className="underline hover:text-blue-800">Cookiebeleid</Link>
        </div>
        
        {customize ? (
          <div className="flex flex-col gap-3">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked disabled className="cursor-not-allowed" />
                <span className="font-semibold text-green-700">Essentiële cookies (verplicht)</span>
              </label>
              <p className="text-sm text-gray-600 ml-6">Voor website functionaliteit en uw cookiekeuze.</p>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={prefs.analytics} 
                  onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} 
                  className="cursor-pointer"
                />
                <span>Google Search Console</span>
              </label>
              <p className="text-sm text-gray-600 ml-6">Voor website statistieken en prestaties (anoniem).</p>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button 
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors flex-1" 
                onClick={() => savePrefs(prefs)}
              >
                Opslaan
              </button>
              <button 
                className="bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors" 
                onClick={() => setCustomize(false)}
              >
                Terug
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
                Accepteren
              </button>
              <button 
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex-1" 
                onClick={handleReject}
              >
                Weigeren
              </button>
            </div>
            <button 
              className="bg-white border border-blue-600 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors" 
              onClick={handleCustomize}
            >
              Voorkeuren aanpassen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
