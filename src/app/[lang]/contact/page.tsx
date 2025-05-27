'use client';

import Navbar from '../../../components/Navbar';
import ContactInfo from '../../../components/ContactInfo';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { loadLocale } from "../../../utils/i18n";

export default function Contact() {
  const params = useParams();
  const [t, setT] = useState<Record<string, string> | null>(null);
  const lang = typeof params?.lang === 'string' ? params.lang : 'ro';

  useEffect(() => {
    loadLocale(lang).then(setT);
  }, [lang]);

  if (!params || !t) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-0 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-3xl">
        <Navbar
          home={t.navbar.home}
          services={t.navbar.services}
          appointments={t.navbar.appointments}
          contact={t.navbar.contact}
        />
      </div>
      <section className="flex flex-col items-center gap-6 mt-6 w-full">
        <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 text-center mb-4 drop-shadow-lg animate-fade-in flex-1">
            {t.contact.title}
          </h1>
        </div>
        <p className="text-lg text-blue-800 text-center max-w-xl mb-6 animate-fade-in">
          {t.contact.desc}
        </p>
        <ContactInfo />
      </section>
    </div>
  );
}
