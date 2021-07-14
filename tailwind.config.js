// tailwind.config.js
const colors = require('tailwindcss/colors')
const themeSwapper = require('tailwindcss-theme-swapper')

const themeSwapperConfig = {
  themes: [
    {
      name: 'base',
      selectors: [':root'],
      theme: {
        colors: {
          base: colors.white,
          primary: colors.orange['500'],
        },
        borderColor: {
          cool: 'orange',
        },
        borderRadius: {
          DEFAULT: '10px',
        },
      },
    },
    {
      name: 'dark',
      selectors: ['[data-theme="dark"]'],
      // mediaQuery: '@media (prefers-color-scheme: dark)',
      theme: {
        colors: {
          base: colors.gray['50'],
          primary: colors.gray['800'],
        },
        borderColor: {
          cool: 'aqua',
        },
        borderRadius: {
          DEFAULT: '30px',
        },
      },
    },
    {
      name: 'test',
      selectors: ['[data-theme="test"]'],
      // mediaQuery: '@media (prefers-color-scheme: test)',
      theme: {
        colors: {
          base: colors.red['100'],
          primary: colors.red['700'],
        },
        borderColor: {
          cool: 'tomato',
        },
        borderRadius: {
          DEFAULT: '0px',
        },
      },
    },
  ],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
      }
    },
  },
  variants: {},
  plugins: [themeSwapper(themeSwapperConfig)],
}