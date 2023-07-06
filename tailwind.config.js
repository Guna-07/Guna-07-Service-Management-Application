/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {scale: {
        '103': '1.03',
        '40': '0.4',
        '80':'0.8',
        '30':'0.3',
        '60':'0.6',
        '120':'1.2',
        '180':'1.8',
        '20':'0.2',
        '65':'0.7'

      }},
      
      backdropBlur: {
        max: '1000px',
      },
     
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
  variants: {
   
}
}
