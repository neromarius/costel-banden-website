'use client';

import Navbar from '../../components/Navbar';
import HomeGallery from '../../components/HomeGallery';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { detectLocale, loadLocale, Locale } from "../../utils/i18n";

export default function HomePage() {
  const params = useParams();
  const [locale, setLocale] = useState<Locale>('ro');
  const [t, setT] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    if (!params) return;
    const lang = typeof params.lang === 'string' ? (params.lang as Locale) : detectLocale();
    setLocale(lang);
    loadLocale(lang).then(setT);
  }, [params]);

  if (!t) return null;

  // Asigură-te că t este obiect, nu string, și definește tipuri pentru homepage și navbar
  type HomepageT = { seo_keywords?: string; seo_title?: string; seo_desc?: string; title?: string; desc?: string; fast_service?: string };
  type NavbarT = { home?: string; services?: string; appointments?: string; contact?: string; admin?: string };
  const homepage: HomepageT = typeof t?.homepage === 'object' ? t.homepage : {};
  const navbar: NavbarT = typeof t?.navbar === 'object' ? t.navbar : {};
  const keywords = homepage.seo_keywords || "mobile tyre service, tyre change, tyre repair, tyres, Roeselare, emergency tyre, car tyres, tyre shop, tyre replacement, tyre assistance, tyre breakdown, tyre service, flat tyre, puncture repair, mobile tyre fitting, tyre garage, tyre specialist, tyre support, roadside tyre, banden, vulcanizare, anvelopa, cauciuc, Belgium, West Flanders, best tyre service, cheap tyres, quick tyre, fast tyre, professional tyre service, local tyre service";

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="w-full max-w-3xl">
          <Navbar
            home={navbar.home || ''}
            services={navbar.services || ''}
            appointments={navbar.appointments || ''}
            contact={navbar.contact || ''}
            admin={navbar.admin || ''}
          />
        </div>
        <section className="flex flex-col items-center gap-6 mt-16 w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 text-center mb-4 drop-shadow-lg animate-fade-in">
            {homepage.title || "Vulcanizare mobilă și schimb anvelope la domiciliu în Roeselare"}
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 text-center mb-2 animate-fade-in">
            {t?.homepage?.fast_service ?? (locale === 'en' ? 'Fast service | Online booking or WhatsApp' : locale === 'fr' ? 'Service rapide | Prise de rendez-vous en ligne ou via WhatsApp' : locale === 'nl' ? 'Snelle service | Online reserveren of via WhatsApp' : 'Servicii rapide | Programare online sau pe WhatsApp')}
          </h2>
          <p className="text-lg text-blue-800 text-center max-w-xl mb-6 animate-fade-in">
            {homepage.desc || "Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders. Programează online sau pe WhatsApp. Prețuri transparente, intervenții non-stop."}
          </p>
          {/* Butoanele de servicii și contact au fost eliminate la cerere */}
          <div className="w-full flex justify-center mt-8">
            <HomeGallery locale={locale} />
          </div>
        </section>
        {/* FAQ Schema.org pentru AI și Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cum pot programa o vulcanizare mobilă la domiciliu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Poți programa rapid online sau pe WhatsApp, iar echipa ajunge la tine în cel mai scurt timp în Roeselare și West Flanders."
                }
              },
              {
                "@type": "Question",
                "name": "Ce servicii oferă Costel Banden?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oferim schimb anvelope, reparații, echilibrare roți, service rapid și intervenții non-stop la domiciliu."
                }
              },
              {
                "@type": "Question",
                "name": "Care sunt avantajele vulcanizării mobile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Economisești timp, nu mai pierzi vremea la service, iar intervenția e rapidă, sigură și la prețuri transparente."
                }
              }
            ]
          }
        `}</script>
      </div>
    </>
  );
}

export function Head() {
  return (
    <>
      <title>Vulcanizare Mobilă Bruxelles | Costel Banden</title>
      <meta name="description" content="Vulcanizare mobilă, schimb anvelope, echilibrare roți la domiciliu în Bruxelles și Flandra. Rapid, ieftin, aproape de tine. Costel Banden - lider în servicii anvelope Belgia." />
      <meta name="keywords" content="vulcanizare mobilă Bruxelles, schimb anvelope Belgia, service anvelope Flandra, anvelope ieftine Bruxelles, service auto rapid Belgia" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://costelbanden.be/ro" />
      <link rel="alternate" href="https://costelbanden.be/ro" hrefLang="ro" />
      <link rel="alternate" href="https://costelbanden.be/fr" hrefLang="fr" />
      <link rel="alternate" href="https://costelbanden.be/nl" hrefLang="nl" />
      <meta property="og:title" content="Vulcanizare Mobilă Bruxelles | Costel Banden" />
      <meta property="og:description" content="Schimb anvelope și vulcanizare mobilă la domiciliu în Bruxelles și Flandra." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://costelbanden.be/ro" />
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
