'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Simple Navigation */}
      <nav className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-2 py-4 px-4">
        <div className="w-full flex flex-row items-center justify-center mb-4 gap-2">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Acasă Costel Banden">
            <img src="/logo-costelbanden.svg" alt="Logo CB" style={{ maxWidth: '96px', width: '96px', minWidth: '96px', height: 'auto' }} />
          </Link>
          <span className="text-2xl font-extrabold text-blue-900 flex-1 text-center tracking-wider">Costel Banden</span>
        </div>
        
        <div className="flex gap-2 text-sm flex-wrap justify-center">
          <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Home</Link>
          <Link href="/privacybeleid" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Privacy</Link>
          <Link href="/cookiebeleid" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Cookies</Link>
          <Link href="/algemene-voorwaarden" className="px-4 py-2 bg-blue-800 text-white rounded-lg">Voorwaarden</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Algemene Voorwaarden - Costel Banden</h1>
          <p className="text-sm text-gray-600 mb-8"><strong>Laatst bijgewerkt:</strong> 3 juni 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Bedrijfsgegevens</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Bedrijfsnaam:</strong> Petrof Costel</p>
                <p><strong>Adres:</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roeselare</p>
                <p><strong>BCE/KBO nummer:</strong> BE 0787161037</p>
                <p><strong>E-mail:</strong> Costelbanden@gmail.com</p>
                <p><strong>BTW:</strong> BE 0787161037</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Toepassingsgebied</h2>
              <p className="mb-3">Deze algemene voorwaarden zijn van toepassing op alle diensten van Costel Banden, met name:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Mobiele vulcanisatie binnen 30 km van Roeselare</li>
                <li>Spoedservice voor banden</li>
                <li>Bandenreparatie en -vervanging</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Onze diensten</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Mobiele vulcanisatiedienst</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Service aan uw locatie binnen de werkingszone</li>
                <li>Werkingszone: 30 km rondom Roeselare</li>
                <li>Spoedservice beschikbaar op aanvraag</li>
                <li>Professionele reparatie en vervanging van banden</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Afspraken maken</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Afspraken via telefoon of e-mail</li>
                <li>Bevestiging van afspraak binnen 24 uur</li>
                <li>Bij spoedeisende gevallen: zo snel mogelijk</li>
                <li>Duidelijke communicatie over timing en kosten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prijzen en betaling</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Alle prijzen zijn inclusief BTW</li>
                <li>Offertes zijn geldig voor 30 dagen</li>
                <li>Betaling: contant of overschrijving</li>
                <li>Spoedservice kan een toeslag hebben</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Annulering</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2">
                  <li>Annulering tot 2 uur voor afspraak: gratis</li>
                  <li>Annulering binnen 2 uur: mogelijk annuleringskosten</li>
                  <li>Bij overmacht: geen kosten</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Garantie</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Garantie op uitgevoerde werkzaamheden: 6 maanden</li>
                <li>Garantie op geleverde banden: volgens fabrikant</li>
                <li>Geen garantie op normale slijtage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Aansprakelijkheid</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Wij zijn verzekerd voor beroepsaansprakelijkheid</li>
                <li>Aansprakelijkheid beperkt tot de waarde van de opdracht</li>
                <li>Geen aansprakelijkheid voor indirect schade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Overmacht</h2>
              <p>Bij overmacht (weer, ziekte, technische problemen) kunnen afspraken worden uitgesteld zonder kosten.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Geschillen</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Belgisch recht is van toepassing</li>
                <li>Rechtbank Kortrijk is bevoegd</li>
                <li>Voorkeur voor minnelijke schikking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Privacy</h2>
              <p>
                Voor de verwerking van uw persoonsgegevens verwijzen wij naar ons{' '}
                <Link href="/privacybeleid" className="text-blue-600 underline">privacybeleid</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="mb-2">Vragen over deze voorwaarden?</p>
                <p><strong>E-mail:</strong> Costelbanden@gmail.com</p>
                <p><strong>Adres:</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roeselare</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
