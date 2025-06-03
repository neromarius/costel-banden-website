'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyFrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      {/* Simple Navigation */}
      <nav className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-2 py-4 px-4">
        <div className="w-full flex flex-row items-center justify-center mb-4 gap-2">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Accueil Costel Banden">
            <img src="/logo-costelbanden.svg" alt="Logo CB" style={{ maxWidth: '96px', width: '96px', minWidth: '96px', height: 'auto' }} />
          </Link>
          <span className="text-2xl font-extrabold text-blue-900 flex-1 text-center tracking-wider">Costel Banden</span>
        </div>
        
        <div className="flex gap-2 text-sm flex-wrap justify-center">
          <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Accueil</Link>
          <Link href="/privacybeleid" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Privacy (NL)</Link>
          <Link href="/politique-confidentialite" className="px-4 py-2 bg-blue-800 text-white rounded-lg">Confidentialité</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Politique de Confidentialité - Costel Banden</h1>
          <p className="text-sm text-gray-600 mb-8"><strong>Dernière mise à jour :</strong> 3 juin 2025</p>

          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Qui sommes-nous ?</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Raison sociale :</strong> Petrof Costel</p>
                <p><strong>Adresse :</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roulers</p>
                <p><strong>Numéro BCE/KBO :</strong> BE 0787161037</p>
                <p><strong>E-mail :</strong> Costelbanden@gmail.com</p>
                <p><strong>Site web :</strong> costelbanden.be</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Quelles données collectons-nous ?</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">Données de contact</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Nom et prénom (lors de votre prise de contact)</li>
                <li>Adresse e-mail (pour la communication)</li>
                <li>Numéro de téléphone (pour les services d&apos;urgence)</li>
                <li>Adresse (pour notre service de vulcanisation mobile)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">Données techniques</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Adresse IP (automatiquement par votre navigateur)</li>
                <li>Type et version du navigateur</li>
                <li>Visites de pages via Google Search Console</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Pourquoi collectons-nous ces données ?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Prestation de services :</strong> Pour fournir nos services de vulcanisation</li>
                <li><strong>Communication :</strong> Pour vous contacter concernant votre demande</li>
                <li><strong>Services d&apos;urgence :</strong> Pour les urgences dans un rayon de 30 km de Roulers</li>
                <li><strong>Amélioration du site :</strong> Via les statistiques Google Search Console</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Base juridique du traitement</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Exécution du contrat</strong> (Art. 6.1.b RGPD) : Pour la prestation de services</li>
                <li><strong>Intérêt légitime</strong> (Art. 6.1.f RGPD) : Pour les statistiques du site</li>
                <li><strong>Consentement</strong> (Art. 6.1.a RGPD) : Pour la communication marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Combien de temps conservons-nous vos données ?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Données de contact :</strong> 2 ans après le dernier contact</li>
                <li><strong>Données de facturation :</strong> 7 ans (obligation légale)</li>
                <li><strong>Statistiques du site :</strong> 26 mois (Google Search Console)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Vos droits selon le RGPD</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Droit d&apos;accès :</strong> Savoir quelles données nous avons de vous</li>
                <li><strong>Droit de rectification :</strong> Faire corriger les données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> Faire supprimer vos données</li>
                <li><strong>Droit à la limitation :</strong> Faire arrêter le traitement</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données sous forme numérique</li>
                <li><strong>Droit d&apos;opposition :</strong> Contre certains traitements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="mb-2">Pour toute question concernant cette politique :</p>
                <p><strong>E-mail :</strong> Costelbanden@gmail.com</p>
                <p><strong>Adresse :</strong> Hoogleedsesteenweg 4 bus 1, 8800 Roulers</p>
                
                <p className="mt-4">Pour les plaintes, vous pouvez également contacter l&apos;<strong>Autorité de protection des données</strong> :</p>
                <p>Site web : <a href="https://www.autoriteprotectiondonnees.be" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.autoriteprotectiondonnees.be</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
