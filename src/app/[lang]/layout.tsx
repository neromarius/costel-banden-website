import React from "react";
import EmergencyBanner from '../../components/EmergencyBanner';
import WhatsAppButton from '../../components/WhatsAppButton';
import CookieBanner from '../../components/CookieBanner';
import UmamiScript from '../../components/UmamiScript';
import { loadLocale } from '../../utils/i18n';
import Head from 'next/head';

export default async function LangLayout(props: { children: React.ReactNode; params: { lang: string }; }) {
  const { children } = props;
  const params = await props.params;
  let lang = typeof params?.lang === 'string' ? params.lang : 'ro';
  
  // Validăm că lang este o limbă acceptată
  const validLanguages = ['ro', 'en', 'fr', 'nl'];
  if (!validLanguages.includes(lang)) {
    lang = 'ro'; // fallback la română pentru valori invalide
  }
  
  const t = await loadLocale(lang as 'ro' | 'en' | 'fr' | 'nl');

  return (
    <>
      {/* Nu folosi <html> sau <body> aici! */}
      <Head>
        <meta name="keywords" content="vulcanizare mobilă, schimb anvelope, service cauciucuri, Roeselare, dépannage pneus, bandenservice, tyre service, rapid, programare online, WhatsApp, West Flanders, mobile tyre fitting, cheap tyres, quick tyre, local tyre service, professional tyre service, echilibrare roți, anvelope iarnă/vară, service auto mobil, urgent tyre change" />
        <meta property="og:title" content="Vulcanizare mobilă Roeselare | Service anvelope rapid | Costel Banden" />
        <meta property="og:description" content="Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders. Programează online sau pe WhatsApp. Prețuri transparente, intervenții non-stop." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:url" content="https://costelbanden.be/" />
        <meta property="og:site_name" content="Costel Banden" />
        <meta property="og:image" content="https://costelbanden.be/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vulcanizare mobilă Roeselare | Costel Banden" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vulcanizare mobilă Roeselare | Service anvelope rapid | Costel Banden" />
        <meta name="twitter:description" content="Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders." />
        <meta name="twitter:image" content="https://costelbanden.be/og-image.jpg" />
        <link rel="alternate" href="https://costelbanden.be/ro" hrefLang="ro" />
        <link rel="alternate" href="https://costelbanden.be/en" hrefLang="en" />
        <link rel="alternate" href="https://costelbanden.be/fr" hrefLang="fr" />
        <link rel="alternate" href="https://costelbanden.be/nl" hrefLang="nl" />
        <link rel="canonical" href="https://costelbanden.be/" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Costel Banden",
            "image": "https://costelbanden.be/og-image.jpg",
            "@id": "https://costelbanden.be/",
            "url": "https://costelbanden.be/",
            "telephone": "+32412345678",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Strada Exemplu 1",
              "addressLocality": "Roeselare",
              "postalCode": "8800",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.946,
              "longitude": 3.122
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "07:00",
              "closes": "22:00"
            }],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100086974633922"
            ]
          }
        `}</script>
      </Head>
      <UmamiScript />
      {/* header eliminat complet pentru a nu mai rezerva spațiu în stânga */}
      {/* <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
        <a href={`/${lang}`} className="block" aria-label="Costel Banden acasă">
        </a>
        {children}
      </header> */}
      {children}
      <EmergencyBanner text={t?.emergency?.text} />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
