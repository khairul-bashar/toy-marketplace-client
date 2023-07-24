/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#570df8",
        
"secondary": "#DBC4F0",
        
"accent": "#1dcdbc",
        
"neutral": "#2b3440",
        
"base-100": "#ffffff",
        
"info": "#06A67E",
        
"success": "#36d399",
        
"warning": "#FFB6C6",
        
"error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}