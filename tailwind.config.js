/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'purple': '#8761ED',
          'textBlack': '#000000DE',
          'textGray': '#00000099',
      },
      fontFamily: {
        'roboto': ["Roboto", "serif"]
      }
    },
    
  },
  plugins: [],
}

