const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    extend: {
      colors: {
        lime: colors.lime,
        cyan: colors.cyan,
        orange: colors.orange,
        'light-blue': colors.lightBlue,
        fuchsia: colors.fuchsia,
        'oxford-blue': {
          DEFAULT: '#161B33'
        }
      },
      margin: {
        14: '3.5rem'
      },
      spacing: {
        128: '32rem'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '9/10': '90%'
      },
      maxHeight: {
        0: '0',
        24: '6rem',
        64: '16rem',
        '9/10': '90%'
      },
      minHeight: {
        24: '6rem',
        32: '8rem'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {
      margin: ['last']
    }
  },
  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio')
  ]
}
