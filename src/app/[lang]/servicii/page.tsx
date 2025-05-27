'use client';

import Navbar from '../../../components/Navbar';
import ServiceList from '../../../components/ServiceList';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { detectLocale, loadLocale, Locale } from "../../../utils/i18n";

export default function Servicii() {
  const params = useParams();
  // const locale = unused variable
  const [t, setT] = useState<Record<string, unknown>>(null);

  useEffect(() => {
    const lang = typeof params.lang === 'string' ? params.lang : detectLocale();
    // setLocale(lang); - removed unused
    loadLocale(lang).then(setT);
  }, [params.lang]);

  if (!t) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-3xl">
        <Navbar
          home={t.navbar.home}
          services={t.navbar.services}
          appointments={t.navbar.appointments}
          contact={t.navbar.contact}
        />
      </div>
      <section className="flex flex-col items-center gap-6 mt-16 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 text-center mb-4 drop-shadow-lg animate-fade-in">
          {t.services.title}
        </h1>
        <p className="text-lg text-blue-800 text-center max-w-xl mb-6 animate-fade-in">
          {t.services.desc}
        </p>
        <ServiceList services={t.services.list} />
      </section>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>Servicii Vulcanizare și Anvelope | Costel Banden</title>
      <meta name="description" content="Servicii de vulcanizare mobilă, schimb anvelope, echilibrare roți și service rapid în Bruxelles, Flandra și Belgia. Programare rapidă la Costel Banden." />
      <meta name="keywords" content="servicii vulcanizare, schimb anvelope, echilibrare roți, service auto, vulcanizare mobilă, Bruxelles, Flandra, Belgia" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://costelbanden.be/ro/servicii" />
      <link rel="alternate" href="https://costelbanden.be/ro/servicii" hrefLang="ro" />
      <link rel="alternate" href="https://costelbanden.be/fr/servicii" hrefLang="fr" />
      <link rel="alternate" href="https://costelbanden.be/nl/servicii" hrefLang="nl" />
      <meta property="og:title" content="Servicii Vulcanizare și Anvelope | Costel Banden" />
      <meta property="og:description" content="Servicii de vulcanizare mobilă, schimb anvelope, echilibrare roți și service rapid în Bruxelles, Flandra și Belgia." />
      <meta property="og:type" content="service" />
      <meta property="og:url" content="https://costelbanden.be/ro/servicii" />
      <meta property="og:image" content="https://costelbanden.be/og-image-service.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Servicii Vulcanizare și Anvelope | Costel Banden" />
      <meta name="twitter:description" content="Servicii de vulcanizare mobilă, schimb anvelope, echilibrare roți și service rapid în Bruxelles, Flandra și Belgia." />
      <meta name="twitter:image" content="https://costelbanden.be/og-image-service.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Vulcanizare Mobilă',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Costel Banden'
        },
        areaServed: 'Bruxelles, Flandra, Belgia',
        serviceType: 'Schimb anvelope, echilibrare roți, vulcanizare mobilă',
        url: 'https://costelbanden.be/ro/servicii'
      }) }} />
    </>
  );
}
