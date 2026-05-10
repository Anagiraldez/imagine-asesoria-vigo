/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#B89150',
        'accent-hover': '#947642',
        'navy-dark': '#020617',
      },
    },
  },
  plugins: [],
}
