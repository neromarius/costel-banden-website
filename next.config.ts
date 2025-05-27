// Eliminare completă i18n, App Router nu mai are nevoie de această setare.
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pentru GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/costel-banden' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/costel-banden/' : '',
  
  // Dezactivează server-side features pentru static export
  images: {
    unoptimized: true
  },
  
  devIndicators: false,
  allowedDevOrigins: ['192.168.0.178', 'localhost'],
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
