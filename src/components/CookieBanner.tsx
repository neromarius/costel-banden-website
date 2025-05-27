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
    savePrefs({ ...prefs, analytics: true, marketing: true });
  };

  const handleReject = () => {
    savePrefs({ ...prefs, analytics: false, marketing: false });
  };

  const handleCustomize = () => setCustomize(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full m-4 p-6 flex flex-col gap-4 border border-gray-200 animate-fade-in">
        <h2 className="text-xl font-bold text-blue-800">Cookie-uri & confidențialitate</h2>
        <p className="text-blue-900 text-base">
          Folosim cookie-uri pentru a îmbunătăți experiența pe site, a analiza traficul și a personaliza conținutul. Poți accepta toate cookie-urile, respinge sau personaliza preferințele. Pentru detalii, citește <Link href="/politica-cookie/" className="underline text-blue-700">politica de cookie-uri</Link>.
        </p>
        {customize ? (
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked disabled />
              <span className="font-semibold">Necesare (obligatorii)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={prefs.analytics} onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} />
              <span>Analiză trafic (anonim)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={prefs.marketing} onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))} />
              <span>Marketing & remarketing</span>
            </label>
            <div className="flex gap-2 mt-2">
              <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-700" onClick={() => savePrefs(prefs)}>
                Salvează preferințele
              </button>
              <button className="bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded-lg hover:bg-gray-400" onClick={() => setCustomize(false)}>
                Înapoi
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex-1" onClick={handleAccept}>
                Acceptă toate
              </button>
              <button className="bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded-lg hover:bg-gray-400 flex-1" onClick={handleReject}>
                Respinge
              </button>
            </div>
            <button className="bg-white border border-blue-600 text-blue-700 font-bold px-4 py-2 rounded-lg mt-2 hover:bg-blue-50" onClick={handleCustomize}>
              Customizează
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
