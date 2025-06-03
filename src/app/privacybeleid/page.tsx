import React from 'react';

export const metadata = {
  title: 'Privacybeleid - Costel Banden',
  description: 'Privacybeleid van Costel Banden - Vulcanizare mobilă Roeselare'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacybeleid - Costel Banden</h1>
          <p className="text-sm text-gray-600 mb-8"><strong>Laatst bijgewerkt:</strong> 3 juni 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Wie zijn wij?</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Bedrijfsnaam:</strong> Petrof Costel</p>
                <p><strong>Adres:</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roeselare</p>
                <p><strong>BCE/KBO nummer:</strong> BE 0787161037</p>
                <p><strong>E-mail:</strong> Costelbanden@gmail.com</p>
                <p><strong>Website:</strong> costelbanden.be</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Welke gegevens verzamelen wij?</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Contactgegevens</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Naam en voornaam (wanneer u contact met ons opneemt)</li>
                <li>E-mailadres (voor communicatie)</li>
                <li>Telefoonnummer (voor spoeddiensten)</li>
                <li>Adres (voor onze mobiele vulcanisatiedienst)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Technische gegevens</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IP-adres (automatisch door uw browser)</li>
                <li>Browsertype en versie</li>
                <li>Paginabezoeken via Google Search Console</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Waarom verzamelen wij deze gegevens?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Dienstverlening:</strong> Om onze vulcanisatiediensten te kunnen leveren</li>
                <li><strong>Communicatie:</strong> Om u te contacteren over uw aanvraag</li>
                <li><strong>Spoeddiensten:</strong> Voor noodgevallen binnen 30 km van Roeselare</li>
                <li><strong>Website verbetering:</strong> Via Google Search Console statistieken</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Rechtsbasis verwerking</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Uitvoering overeenkomst</strong> (Art. 6.1.b GDPR): Voor dienstverlening</li>
                <li><strong>Gerechtvaardigd belang</strong> (Art. 6.1.f GDPR): Voor website statistieken</li>
                <li><strong>Toestemming</strong> (Art. 6.1.a GDPR): Voor marketingcommunicatie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Hoe lang bewaren wij uw gegevens?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Contactgegevens:</strong> 2 jaar na laatste contact</li>
                <li><strong>Factuurgegevens:</strong> 7 jaar (wettelijke verplichting)</li>
                <li><strong>Website statistieken:</strong> 26 maanden (Google Search Console)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Delen wij uw gegevens?</h2>
              <p className="mb-3">Wij delen uw gegevens alleen met:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Google LLC:</strong> Voor website statistieken (Search Console)</li>
                <li><strong>Boekhouder:</strong> Voor factuuradministratie (indien van toepassing)</li>
                <li><strong>Autoriteiten:</strong> Alleen indien wettelijk verplicht</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Beveiliging van uw gegevens</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>SSL-encryptie voor alle communicatie</li>
                <li>Veilige opslag van contactgegevens</li>
                <li>Beperkte toegang tot persoonsgegevens</li>
                <li>Regelmatige back-ups</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Uw rechten onder de GDPR</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Recht op inzage:</strong> Weten welke gegevens wij van u hebben</li>
                <li><strong>Recht op rectificatie:</strong> Onjuiste gegevens laten corrigeren</li>
                <li><strong>Recht op wissing:</strong> Uw gegevens laten verwijderen</li>
                <li><strong>Recht op beperking:</strong> Verwerking laten stopzetten</li>
                <li><strong>Recht op overdraagbaarheid:</strong> Uw gegevens in digitale vorm ontvangen</li>
                <li><strong>Recht van bezwaar:</strong> Tegen bepaalde verwerkingen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact & Klachten</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="mb-2">Voor vragen over dit privacybeleid of uw rechten:</p>
                <p><strong>E-mail:</strong> Costelbanden@gmail.com</p>
                <p><strong>Adres:</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roeselare</p>
                <p className="mt-4">Voor klachten kunt u ook contact opnemen met de <strong>Gegevensbeschermingsautoriteit</strong>:</p>
                <p>Website: <a href="https://www.gegevensbeschermingsautoriteit.be" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.gegevensbeschermingsautoriteit.be</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Wijzigingen</h2>
              <p>Wij kunnen dit privacybeleid wijzigen. De laatste versie staat altijd op onze website.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
