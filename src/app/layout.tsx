import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieBanner from "../components/CookieBanner";
import UmamiScript from "../components/UmamiScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vulcanizare mobilă Roeselare | Service anvelope rapid | Costel Banden",
  description: "Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders. Programează online sau pe WhatsApp. Prețuri transparente, intervenții non-stop.",
  keywords: "vulcanizare mobilă, schimb anvelope, service cauciucuri, Roeselare, dépannage pneus, bandenservice, tyre service, rapid, programare online, WhatsApp, West Flanders, mobile tyre fitting, cheap tyres, quick tyre, local tyre service, professional tyre service, echilibrare roți, anvelope iarnă/vară, service auto mobil, urgent tyre change",
  openGraph: {
    title: "Vulcanizare mobilă Roeselare | Service anvelope rapid | Costel Banden",
    description: "Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders. Programează online sau pe WhatsApp. Prețuri transparente, intervenții non-stop.",
    type: "website",
    locale: "ro_RO",
    url: "https://costelbanden.be/",
    siteName: "Costel Banden",
    images: [
      {
        url: "https://costelbanden.be/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vulcanizare mobilă Roeselare | Costel Banden"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vulcanizare mobilă Roeselare | Service anvelope rapid | Costel Banden",
    description: "Service mobil anvelope, schimb cauciucuri, intervenții rapide la domiciliu în Roeselare și West Flanders.",
    images: [
      "https://costelbanden.be/og-image.jpg"
    ]
  },
  alternates: {
    canonical: "https://costelbanden.be/",
    languages: {
      "ro": "https://costelbanden.be/ro",
      "en": "https://costelbanden.be/en",
      "fr": "https://costelbanden.be/fr",
      "nl": "https://costelbanden.be/nl"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Lazy i18n loader
  // Navbar importat aici pentru a fi vizibil peste tot
  // Navbar și body cu padding top pentru navbar fix
  // Limba implicită: ro
  return (
    <html lang="ro">
      <head>
        {/* Eliminat scriptul de ascundere Dev Tools */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* <link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
            "@id": "https://costelbanden.be/#business",
            "name": "Costel Banden Vulcanizare Mobilă",
            "image": "https://costelbanden.be/og-image.jpg",
            "url": "https://costelbanden.be/",
            "telephone": "+32491234567",
            "email": "contact@costelbanden.be",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Roeselare, West Flanders",
              "addressLocality": "Roeselare",
              "addressRegion": "West Flanders",
              "postalCode": "8800",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.946,
              "longitude": 3.122
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "07:00",
                "closes": "22:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100086974633922"
            ],
            "mainEntityOfPage": "https://costelbanden.be/"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://costelbanden.be/#website",
            "name": "Costel Banden",
            "url": "https://costelbanden.be/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://costelbanden.be/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:updated_time" content="2025-04-29T21:35:21+02:00" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Costel Banden" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-TileImage" content="/favicon.svg" />
        <meta name="application-name" content="Costel Banden" />
        <meta name="apple-mobile-web-app-title" content="Costel Banden" />
        <meta name="apple-touch-icon" content="/favicon.svg" />
        <meta name="apple-touch-startup-image" content="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen`}
      >
        {/* Tracking Umami doar cu consimțământ */}
        <UmamiScript />
        <main className="pt-4 md:pt-10 px-2 md:px-0 max-w-3xl mx-auto w-full">
          {children}
        </main>
        <WhatsAppButton />
        <CookieBanner />
        {/* Eliminat EmergencyBannerDynamic pentru a preveni suprapunerea și flickerul bannerului de urgență */}
      </body>
    </html>
  );
}
