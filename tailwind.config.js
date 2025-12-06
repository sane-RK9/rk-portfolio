/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1A", // Deep AI-lab navy black
        surface: "#111827",    // Rich dark grey
        primary: "#0EA5E9",    // Neon cyan
        secondary: "#38BDF8",  // Electric sky-blue
        highlight: "#67E8F9",  // Light neon aqua
        card: "#0D1624",       // Card background
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-sora)'],
        mono: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        'duotone': 'linear-gradient(to right, #0A0F1A, #0EA5E9)',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #0EA5E9 0deg, #0A0F1A 180deg)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};