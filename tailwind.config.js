/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        arc: {
          base:    '#060311',
          surface: '#0C0820',
          layer:   '#130F2D',
          border:  '#1E1840',
          hover:   '#18133A',
        },
        rose:   { 400: '#E879A0', 500: '#D4508A', 600: '#B83D74' },
        violet: { 300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6', 600: '#7C3AED' },
        ice:    { 300: '#A5F3FC', 400: '#67E8F9', 500: '#22D3EE' },
        amber:  { 400: '#FBBF24', 500: '#F59E0B' },
        ink:    { 100: '#F1EEF9', 200: '#D9D4EF', 400: '#8B85B0', 600: '#4A4570', 800: '#1E1840' },
      },
      boxShadow: {
        'glow-rose':   '0 0 20px rgba(232,121,160,0.25), 0 0 60px rgba(232,121,160,0.1)',
        'glow-violet': '0 0 20px rgba(167,139,250,0.25), 0 0 60px rgba(167,139,250,0.1)',
        'glow-ice':    '0 0 20px rgba(103,232,249,0.2)',
        'card':        '0 0 0 1px rgba(167,139,250,0.15), 0 8px 32px rgba(6,3,17,0.6)',
        'card-hover':  '0 0 0 1px rgba(167,139,250,0.35), 0 8px 40px rgba(6,3,17,0.8), 0 0 30px rgba(167,139,250,0.1)',
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease-out forwards',
        'drift':    'drift 14s ease-in-out infinite',
        'drift-r':  'driftR 18s ease-in-out infinite',
        'glow':     'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%':     { transform: 'translateY(-28px) scale(1.04)' },
        },
        driftR: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%':     { transform: 'translateY(22px) scale(0.96)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
