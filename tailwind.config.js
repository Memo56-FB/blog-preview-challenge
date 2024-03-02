/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#f4d04e',
        grey: '#7f7f7f'
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'figtree-italic': ['Figtree italic', 'sans-serif'],
        'figtree-semibold': ['Figtree semibold', 'sans-serif'],
        'figtree-extrabold': ['Figtree extrabold', 'sans-serif'],
      },
      dropShadow: {
        'active': '16px 16px #000',
        'inactive': '8px 8px #000'
      }
    },
  },
  plugins: [],
}