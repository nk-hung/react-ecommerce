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
        'columbia-blue-500': '#cee5f2',
        'columbia-blue-600': '#accbe1',
        'air-blue': '#7c98b3',
        'payne-gray-500': '#637081',
        'payne-gray-600': '#536b78',
        'slate-gray': '#6c6f7f',
        fawn: '#fbba72',
        tawny: '#ca5310',
        'burnt-orange': '#bb4d00',
        sienna: '#8f250c',
        'barn-red': '#691e06',
      },
    },
    fontFamily: {
      'source-sans': ['"Source Sans Pro"', 'sans-serif'],
    },
  },
  plugins: [],
};
