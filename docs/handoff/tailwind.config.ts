import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:     { base: '#0a2540', deep: '#06192e', alt: '#0f3352' },
        accent: { DEFAULT: '#1db894', bright: '#5dcaa5', pressed: '#169b7d' },
        artery: { DEFAULT: '#e63946', bright: '#ff6b6b' },
        vein:   { DEFAULT: '#1d9bf0', bright: '#4dabf7' },
        ink:    { heading: '#ffffff', body: '#c5d8e8', muted: '#7a9cb5', faint: '#4d6c85' },
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-commissioner)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '24px', panel: '26px', control: '16px' },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        cta: '0 10px 28px rgba(29,184,148,0.28)',
      },
      backdropBlur: { glass: '20px' },
      keyframes: {
        vpulse: { '0%,100%': { opacity: '.55' }, '50%': { opacity: '1' } },
        vdash: { to: { strokeDashoffset: '-320' } },
      },
      animation: {
        vpulse: 'vpulse 3.6s ease-in-out infinite',
        vflow: 'vdash 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
