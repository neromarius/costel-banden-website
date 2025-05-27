import Navbar from "../../components/Navbar";
import ContactInfo from "../../components/ContactInfo";

const navLabels: Record<string, string> = {
  home: "Acasă",
  services: "Servicii",
  appointments: "Programări",
  contact: "Contact",
  admin: "Admin"
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-24 px-2 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* <div className="w-full max-w-3xl">
        <Navbar t={(key) => navLabels[key] || key} />
      </div> */}
      <section className="flex flex-col items-center gap-6 mt-16 w-full">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-800 text-center mb-4 animate-bounce">Contact Costel Banden</h1>
        <h2 className="text-lg md:text-2xl font-bold text-blue-700 text-center mb-2">Vulcanizare mobilă și service anvelope în Roeselare</h2>
        <p className="text-base text-blue-800 text-center max-w-xl mb-6">Contactează-ne pentru programări rapide, informații sau urgențe. Răspundem pe WhatsApp, Facebook și telefon pentru orice problemă legată de anvelope sau service mobil.</p>
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col gap-4 items-center">
          <ContactInfo />
          <a
            href="https://www.facebook.com/profile.php?id=100086974633922"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md transition-colors duration-200"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            Facebook
          </a>
        </div>
      </section>
      {/* ContactPoint & FAQ Schema.org pentru AI și Google */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "telephone": "+32412345678",
          "contactType": "customer support",
          "areaServed": ["Roeselare", "West Flanders", "Belgia"],
          "availableLanguage": ["ro", "en", "fr", "nl"]
        }
      `}</script>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Cum pot contacta Costel Banden?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ne poți suna, scrie pe WhatsApp sau Facebook pentru programări, urgențe sau informații despre serviciile noastre."
              }
            },
            {
              "@type": "Question",
              "name": "În ce zone interveniți?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Acoperim Roeselare, West Flanders și împrejurimi pentru vulcanizare mobilă și service anvelope."
              }
            },
            {
              "@type": "Question",
              "name": "Ce tipuri de probleme rezolvați?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Orice problemă legată de anvelope: pană, schimb, echilibrare, urgențe, service mobil la domiciliu sau la birou."
              }
            }
          ]
        }
      `}</script>
    </div>
  );
}
