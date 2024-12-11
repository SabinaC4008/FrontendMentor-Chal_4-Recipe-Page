/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./recipe-page-main/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily:{
        Youngserif: ['Youngserif'],
        Outfit: ['Outfit'],
      },
      colors:{
        'custom-stone-light': '#f3e6d8', 
        'custom-stone-light-deep': '#e4ded8', 
        'custom-stone-deep': '#5f574e', 
        'custom-stone-deep-dark': '#302d2c', 

        'custom-brown': '#854632',

        'deep-rose': '#7b284f',
        'light-rose': '#fff5fa', 
      },
      width: {
        '89': '89%',
        '99': '365px',
        '725': '725px',
        '629': '629px',
      },
      height: {
        'custom-height': '1080px',
        '1700': '1700px', 
        '2043': '2043px',
      },
    },
  },
  plugins: [],
}

