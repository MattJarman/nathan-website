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
      height: {
        // This is for when we want the content to stretch the entire viewport height, excluding headers and footers
        'view-m': 'calc(100vh - 6rem)',
        view: 'calc(100vh - 8rem)'
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
    aspectRatio: ['responsive']
  },
  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio')
  ]
}
