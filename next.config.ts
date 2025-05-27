// Eliminare completă i18n, App Router nu mai are nevoie de această setare.
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurație optimizată pentru Vercel
  devIndicators: false,
  allowedDevOrigins: ['192.168.0.178', 'localhost'],
  
  // Headers pentru CORS
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
