import Navbar from "../../components/Navbar";
import ServiceList from "../../components/ServiceList";

const navLabels: Record<string, string> = {
  home: "Acasă",
  services: "Servicii",
  appointments: "Programări",
  contact: "Contact"
};

export default function Servicii() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-3xl">
        <Navbar 
          home="Acasă"
          services="Servicii"
          appointments="Programări"
          contact="Contact"
          admin="Admin"
        />
      </div>
      <section className="flex flex-col items-center gap-6 mt-16 w-full">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-800 text-center mb-4 animate-bounce">Servicii vulcanizare mobilă și schimb anvelope</h1>
        <h2 className="text-lg md:text-2xl font-bold text-blue-700 text-center mb-2">Intervenții rapide la domiciliu în Roeselare și West Flanders</h2>
        <p className="text-base text-blue-800 text-center max-w-xl mb-6">Oferim schimb anvelope, reparații, echilibrare roți, service rapid și intervenții non-stop la domiciliu. Programează online sau pe WhatsApp pentru servicii profesionale, rapide și sigure.</p>
        <ServiceList />
      </section>
      {/* FAQ & Service Schema.org pentru AI și Google */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Vulcanizare mobilă, schimb anvelope, echilibrare roți, reparații cauciucuri",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Costel Banden",
            "areaServed": ["Roeselare", "West Flanders", "Belgia"]
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Roeselare",
                "addressCountry": "BE"
              }
            }
          }
        }
      `}</script>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ce servicii oferă Costel Banden?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Schimb anvelope, reparații, echilibrare roți, service rapid și intervenții non-stop la domiciliu."
              }
            },
            {
              "@type": "Question",
              "name": "Cum pot programa o intervenție?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Poți programa online sau pe WhatsApp, iar echipa ajunge rapid la tine în Roeselare și West Flanders."
              }
            },
            {
              "@type": "Question",
              "name": "De ce să alegi vulcanizarea mobilă?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Economisești timp, nu mai pierzi vremea la service, iar intervenția e rapidă, sigură și la prețuri transparente."
              }
            }
          ]
        }
      `}</script>
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
      <link rel="canonical" href="https://costelbanden.be/servicii" />
      <link rel="alternate" href="https://costelbanden.be/ro/servicii" hrefLang="ro" />
      <link rel="alternate" href="https://costelbanden.be/fr/servicii" hrefLang="fr" />
      <link rel="alternate" href="https://costelbanden.be/nl/servicii" hrefLang="nl" />
      <meta property="og:title" content="Servicii Vulcanizare și Anvelope | Costel Banden" />
      <meta property="og:description" content="Servicii de vulcanizare mobilă, schimb anvelope, echilibrare roți și service rapid în Bruxelles, Flandra și Belgia." />
      <meta property="og:type" content="service" />
      <meta property="og:url" content="https://costelbanden.be/servicii" />
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
        url: 'https://costelbanden.be/servicii'
      }) }} />
    </>
  );
}
