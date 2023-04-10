/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-600': '#313e50',
        'delft-blue': '#3a435e',
        'charcoal-500': '#455561',
        'payne-gray': '#5c6672',
        'slate-gray': '#6c6f7f',
        fawn: '#fbba72',
        tawny: '#ca5310',
        'burnt-orange': '#bb4d00',
        sienna: '#8f250c',
        'barn-red': '#691e06',
      },
    },
  },
  plugins: [],
};
