/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cuberto palette
        background: '#fff',
        foreground: '#111',
        accent: '#00e0ff', // vibrant blue
        accent2: '#ff5c5c', // vibrant red
        accent3: '#ffb800', // yellow
        accent4: '#ff5cf4', // pink
        muted: '#f5f5f5',
        border: '#e5e5e5',
        // Emergency red for banner
        emergency: '#e53935',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        cuberto: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
      },
      borderRadius: {
        cuberto: '2.5rem',
      },
      transitionTimingFunction: {
        'cuberto': 'cubic-bezier(.77,0,.18,1)',
      },
    },
  },
  plugins: [],
};
