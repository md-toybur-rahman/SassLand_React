/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'plex': ['IBM Plex Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}