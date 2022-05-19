const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {
      maxHeight: {
        0: '0',
        24: '6rem',
        64: '16rem',
        '9/10': '90%'
      }
    }
  },
  variants: {}
}
