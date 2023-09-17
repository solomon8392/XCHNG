/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
       Elevationbalck: "#1F2128",
       green: "#146B48",
       grey700: "#080705",
       grey400: "#5A5A58", 
       white: "#FFFFFF", 
       lightgreen: "#D0E1DA80" 
      }, 
      
      fontFamily: { 
        Figtree: ['Figtree', "sans-serif"],
       },
    },
  },
  plugins: [],
}
