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
					primary: colors.blueGray['700'],
					'primary-hover': colors.blueGray['800'],
					accent: colors.blue['700'],
				},
				backgroundColor: {
					base: colors.blueGray['50'],
					'base-hover': colors.blueGray['100'],
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
					primary: colors.blueGray['100'],
					'primary-hover': colors.blueGray['200'],
					accent: colors.blue['500'],
        },
				backgroundColor: {
					base: colors.blueGray['800'],
					'base-hover': colors.blueGray['900'],
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
					primary: colors.blueGray['700'],
					'primary-hover': colors.blueGray['800'],
					accent: colors.purple['700'],
				},
				backgroundColor: {
					base: colors.purple['100'],
					'base-hover': colors.purple['200'],
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