/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // raleway: ["Raleway Variable"]
      }
    },
    colors:{
      transparent:'transparent',
      marron:{
        100:'#23123'
      },
      primary: '#F4F4F4',
      secondary:'#fefefe',
      marron:'#D41130',
      jaguarRed:'#9E1B32',
      white:colors.white,
      amber: colors.amber,
      emerald: colors.emerald,
      black:colors.black,
      grey:colors.coolGray,
      red:colors.red,
      yellow:colors.yellow,
      green:colors.green,
      blue:colors.blue,
      purple:colors.purple,
      pink:colors.pink,      
    }   
  }
}
