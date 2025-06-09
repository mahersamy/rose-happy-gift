import PrimeUI from 'tailwindcss-primeui';

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[class~="my-app-dark"]'],           //dark mode configuration
content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
      mainColor:"#F82BA9",
      secondColor:"#FEEDF7",
      iconsColor:"#8C52FF",
      textColorMain:"#160E4B",
      textColorSecondry:"#757F95",
      priceColor:"#F05454",
      purpleColorMain:"#8C52FF",
      dark:{
      mainColor:"#FBEAEA",
      secondColor:"#3F3F46",
      iconsColor:"#CD2E33",
      textColorMain:"#160E4B",
      textColorSecondry:"#757F95",
      priceColor:"#F05454",
      purpleColorMain:"#8C52FF",
      }
      
    }
    },
    container: {
      center: true, 
       screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       },
    },
    
  },
  plugins: [PrimeUI],
};
