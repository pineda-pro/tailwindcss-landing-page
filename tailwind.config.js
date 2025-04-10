/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      fontFamily: {
        satoshi: ['satoshi', 'sans-serif'], // optional fallback
        satoshi: ['satoshi', 'sans-serif'],
      },
      width: {
        '35p': '35%',
        '30p': '30%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
