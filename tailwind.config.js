/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        luxe: {
          gold: '#c9a962',
          cream: '#f7f3ea',
          ink: '#0c0f14',
          mist: 'rgba(255,255,255,0.08)',
        },
      },
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
      },
      boxShadow: {
        luxe: '0 25px 80px -12px rgba(0,0,0,0.55)',
        card: '0 20px 60px -20px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
}
