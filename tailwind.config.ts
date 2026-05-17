import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        palace: {
          bg: '#0f1525',
          surface: '#1a2035',
          border: '#2a3550',
          blue: '#5b8dd9',
          gold: '#e8c97e',
          text: '#dde3f0',
          muted: '#6b7a99',
          library: '#e8c97e',
          workshop: '#5b8dd9',
          gallery: '#a78bfa',
          observatory: '#4ecdc4',
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-expo': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      boxShadow: {
        insetGlow: 'inset 0 0 0 1px rgb(232 201 126 / 0.28), 0 20px 60px rgb(4 8 20 / 0.28)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
