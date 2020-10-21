module.exports = ctx => ({
  "plugins": [
    require('tailwindcss')(require('./build/tailwind.js')(ctx && ctx.options && ctx.options.portalName || '_default')),
    require('autoprefixer')(),
  ]
})