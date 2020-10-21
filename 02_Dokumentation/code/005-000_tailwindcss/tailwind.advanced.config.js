const twSetup = require('tailwindstories/tailwind.setup.js')({ color: '#891b55' })

module.exports = {
  ...twSetup,
  extend: {
    ...twSetup.extend,
    screens: {
      '2xl': '1440px',
    }
  }
}
