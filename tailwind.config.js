// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const themeSwapper = require('tailwindcss-theme-swapper')
const themeSwapperConfig = require('./theme.config.js')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
      }
    },
  },
  variants: {},
  plugins: [themeSwapper(themeSwapperConfig)],
}
