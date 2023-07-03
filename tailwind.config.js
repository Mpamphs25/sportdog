/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    clipPath: {
      mypolygon: "polygon(55% 1%, 100% 0, 100% 100%, 0% 100%)",  
    },
    plugins: [
      require('@tailwindcss/tailwind-clip-path'),
     
    ],
    fontFamily:{
      body:'"Fira Sans Extra Condensed"'
    },
    
  
    extend: {},

   
  },
 
}

