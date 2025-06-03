'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
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
          <Link href="/cookiebeleid" className="px-4 py-2 bg-blue-800 text-white rounded-lg">Cookies</Link>
          <Link href="/algemene-voorwaarden" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Voorwaarden</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookiebeleid - Costel Banden</h1>
          <p className="text-sm text-gray-600 mb-8"><strong>Laatst bijgewerkt:</strong> 3 juni 2025</p>

          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Wat zijn cookies?</h2>
              <p className="text-gray-800">
                Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. 
                Ze helpen ons de website te laten functioneren en uw ervaring te verbeteren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Welke cookies gebruiken wij?</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Essentiële Cookies (Altijd actief)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Doel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Bewaartijd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">cookieConsent</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Onthoudt uw cookiekeuze</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">1 jaar</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">PHPSESSID</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Website functionaliteit</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Tot sessie eindigt</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Analytische Cookies (Met toestemming)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Service</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Cookies</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Doel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-gray-900">Bewaartijd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Google Search Console</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Diverse Google cookies</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">Website prestaties meten</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-800">26 maanden</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Waarom gebruiken wij cookies?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>Website functionaliteit:</strong> Om de website correct te laten werken</li>
                <li><strong>Uw voorkeuren onthouden:</strong> Zoals uw cookiekeuze</li>
                <li><strong>Website verbetering:</strong> Om te zien welke pagina&apos;s populair zijn</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uw cookiekeuzes</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Toestemming beheren</h3>
              <p className="mb-3 text-gray-800">U kunt uw cookievoorkeuren altijd wijzigen:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
                <li><strong>Essentiële cookies:</strong> Kunnen niet uitgeschakeld worden</li>
                <li><strong>Analytische cookies:</strong> Kunt u accepteren of weigeren</li>
              </ul>

              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-6"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('cookieConsent');
                    window.location.reload();
                  }
                }}
              >
                Cookie voorkeuren wijzigen
              </button>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Browser instellingen</h3>
              <p className="mb-3 text-gray-800">U kunt cookies ook beheren via uw browser:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><strong>Chrome:</strong> Instellingen &gt; Privacy en beveiliging &gt; Cookies</li>
                <li><strong>Firefox:</strong> Instellingen &gt; Privacy en beveiliging</li>
                <li><strong>Safari:</strong> Voorkeuren &gt; Privacy</li>
                <li><strong>Edge:</strong> Instellingen &gt; Cookies en sitegegevens</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-party cookies</h2>
              <p className="mb-3 text-gray-800">Wij gebruiken alleen cookies van:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
                <li><strong>Google LLC:</strong> Voor Search Console statistieken</li>
              </ul>

              <p className="mb-3 text-gray-800">Deze bedrijven hebben hun eigen privacybeleid:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-800">
                <li><a href="https://policies.google.com/privacy" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates van dit beleid</h2>
              <p className="text-gray-800">Wij kunnen dit cookiebeleid wijzigen. Controleer deze pagina regelmatig voor updates.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
              <div className="bg-green-50 p-4 rounded-lg text-gray-900">
                <p className="mb-2">Vragen over ons cookiebeleid?</p>
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
