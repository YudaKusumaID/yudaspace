/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      
      fontSize: {
        titleDesktop: '10rem',
      }
    },
  },
  plugins: [],
}