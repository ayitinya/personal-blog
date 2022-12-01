/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              'text-decoration': 'none',
              'transition': 'all 200ms ease-in-out',
              '&:hover': {
                'text-decoration': 'underline',
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
