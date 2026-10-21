/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iportfolio: {
          accent: '#149ddd',
          accentHover: '#18a8ec',
          dark: '#040b14',
          sidebar: '#040b14',
          surface: '#151f2b',
          nav: '#a8a9b4',
          heading: '#173b6c',
          body: '#272829',
          lightBg: '#f4fafd',
        },
        jarvis: {
          bg: '#040814',
          surface: '#081026',
          card: '#0c1736',
          panel: 'rgba(12, 23, 54, 0.75)',
          border: 'rgba(56, 189, 248, 0.25)',
          borderHover: 'rgba(0, 240, 255, 0.6)',
          cyan: '#00f0ff',
          cyanDim: '#00c8d7',
          blue: '#3b82f6',
          blueDim: '#1d4ed8',
          text: '#f1f5f9',
          muted: '#94a3b8',
          accent: '#38bdf8',
        }
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans: ['"Roboto"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        'radar': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 240, 255, 0.35)',
        'cyan-glow-lg': '0 0 35px rgba(0, 240, 255, 0.55)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
