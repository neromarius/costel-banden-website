'use client';

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { loadLocale, Locale } from "../utils/i18n";

const STORAGE_KEY = "costel_banden_contact_v3"; // Nou pentru forțarea actualizării
const DEFAULTS_URL = "/data/contact-default.json";

export default function ContactInfo() {
  const params = useParams();
  const [contact, setContact] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [t, setT] = useState<any>(null);
  
  const lang = typeof params?.lang === 'string' ? (params.lang as Locale) : 'ro';

  useEffect(() => {
    // Încarcă traducerile
    loadLocale(lang).then(setT);
    
    // Șterge orice cache vechi de contact
    localStorage.removeItem('costel_banden_contact');
    localStorage.removeItem('costel_banden_contact_v2');
    
    // Forțează reîncărcarea din fișier
    fetch(DEFAULTS_URL + '?v=' + Date.now()) // Adaugă timestamp pentru cache busting
      .then((r) => r.json())
      .then((data) => {
        console.log('Contact data loaded:', data); // Debug
        setContact(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error loading contact data:', error);
      })
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading || !contact || !t) return <div>{t?.contact?.loading || "Se încarcă datele de contact..."}</div>;

  // Debug pentru program
  const programText = typeof contact.program === 'object' ? contact.program[lang] || contact.program['ro'] : contact.program;
  console.log('Program text for lang', lang, ':', programText);

  return (
    <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col gap-2 max-w-md w-full">
      <h3 className="text-xl font-bold mb-2 text-black flex items-center gap-2">{t.contact.title}
        <a
          href="https://www.facebook.com/profile.php?id=100086974633922"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md transition-colors duration-200"
          style={{minWidth:120}}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          <span className="ml-2 font-semibold text-sm md:text-base">{t.contact.facebook}</span>
        </a>
      </h3>
      <div><span className="font-semibold text-black">{t.contact.phone}:</span> <a href={`tel:${contact.telefon}`} className="text-black underline">{contact.telefon}</a></div>
      <div><span className="font-semibold text-black">{t.contact.email}:</span> <a href={`mailto:${contact.email}`} className="text-black underline">{contact.email}</a></div>
      <div><span className="font-semibold text-black">{t.contact.whatsapp}:</span> <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className="text-black underline">{contact.whatsapp}</a></div>
      <div><span className="font-semibold text-black">{t.contact.address}:</span> <span className="text-black">{contact.adresa}</span></div>
      <div><span className="font-semibold text-black">{t.contact.schedule}:</span> <span className="text-black">{programText}</span></div>
    </div>
  );
}
