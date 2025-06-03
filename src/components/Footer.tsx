'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Petrof Costel</strong></p>
              <p>Hoogleedsesteenweg 4 bus 1</p>
              <p>8800 Roeselare</p>
              <p>BCE/KBO: BE 0787161037</p>
              <p>
                <a href="mailto:Costelbanden@gmail.com" className="text-blue-300 hover:text-blue-200">
                  Costelbanden@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Onze diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>Mobiele vulcanisatie</li>
              <li>Spoedservice binnen 30 km</li>
              <li>Bandenreparatie</li>
              <li>Bandenvervanging</li>
              <li>Service Roeselare & omgeving</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Juridisch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacybeleid" className="text-blue-300 hover:text-blue-200">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/cookiebeleid" className="text-blue-300 hover:text-blue-200">
                  Cookiebeleid
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="text-blue-300 hover:text-blue-200">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2025 Costel Banden. Alle rechten voorbehouden.</p>
            <p className="text-gray-400">
              Vulcanizare mobilă | Service anvelope | Roeselare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
