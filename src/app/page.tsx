"use client";

import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import HomeGallery from "../components/HomeGallery";
import EmergencyBanner from "../components/EmergencyBanner"; // added import
import { useEffect, useState } from "react";
import { detectLocale, loadLocale, Locale } from "../utils/i18n";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");

  const [locale, setLocale] = useState<Locale>('ro');
  const [t, setT] = useState<Record<string, any>>(null);

  useEffect(() => {
    const lang = detectLocale();
    setLocale(lang);
    loadLocale(lang).then(setT);
  }, []);

  if (!t) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-0 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Navbar și LanguageSwitcher */}
      <div className="w-full max-w-3xl">
        <Navbar
          home={t.navbar.home}
          services={t.navbar.services}
          appointments={t.navbar.appointments}
          contact={t.navbar.contact}
          admin={t.navbar.admin}
        />
      </div>
      {/* Secțiune titlu și prezentare */}
      <section className="flex flex-col items-center gap-6 mt-2 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow-lg mb-2 animate-pulse">
          {t.homepage.seo_title}
          <br/>
          <span className="text-lg md:text-2xl font-bold text-blue-600 block mt-2">{t.homepage.seo_subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-900 text-center max-w-xl">
          {t.homepage.seo_desc}<br/>{t.homepage.desc}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center">
        </div>
      </section>
      {/* Galerie homepage */}
      <section className="max-w-4xl mx-auto mt-8">
        <HomeGallery locale={locale} />
      </section>
      {/* Emergency Banner */}
      <EmergencyBanner text={t.emergency.text} />
      {/* Language Switcher pe mobil */}
      <div className="block md:hidden mt-8 w-full">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>Vulcanizare Mobilă Bruxelles | Costel Banden</title>
      <meta name="description" content="Vulcanizare mobilă, schimb anvelope, echilibrare roți la domiciliu în Bruxelles și Flandra. Rapid, ieftin, aproape de tine. Costel Banden - lider în servicii anvelope Belgia." />
      <meta name="keywords" content="vulcanizare mobilă Bruxelles, schimb anvelope Belgia, service anvelope Flandra, anvelope ieftine Bruxelles, service auto rapid Belgia" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://costelbanden.be/" />
      <link rel="alternate" href="https://costelbanden.be/ro" hrefLang="ro" />
      <link rel="alternate" href="https://costelbanden.be/fr" hrefLang="fr" />
      <link rel="alternate" href="https://costelbanden.be/nl" hrefLang="nl" />
      <meta property="og:title" content="Vulcanizare Mobilă Bruxelles | Costel Banden" />
      <meta property="og:description" content="Schimb anvelope și vulcanizare mobilă la domiciliu în Bruxelles și Flandra." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://costelbanden.be/" />
      <meta property="og:image" content="https://costelbanden.be/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vulcanizare Mobilă Bruxelles | Costel Banden" />
      <meta name="twitter:description" content="Schimb anvelope și vulcanizare mobilă la domiciliu în Bruxelles și Flandra." />
      <meta name="twitter:image" content="https://costelbanden.be/og-image.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Costel Banden',
        image: 'https://costelbanden.be/og-image.jpg',
        '@id': 'https://costelbanden.be/',
        url: 'https://costelbanden.be/',
        telephone: '+32470000000',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Strada Exemplu 1',
          addressLocality: 'Bruxelles',
          postalCode: '1000',
          addressCountry: 'BE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.8503,
          longitude: 4.3517,
        },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          opens: '08:00',
          closes: '20:00',
        }],
        sameAs: [
          'https://www.facebook.com/costelbanden',
          'https://www.instagram.com/costelbanden'
        ]
      }) }} />
    </>
  );
}
