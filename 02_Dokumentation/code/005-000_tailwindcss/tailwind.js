// building tailwinds config for selected instance
// ------
const _ = require('lodash')
const path = require('path')
const tailwindBase = require('portal-storybook/tailwind.config.js')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = portalName => {
  const pathToRoot = resolve('portals/' + portalName)
  const pathToTailwind = resolve('portals/' + portalName + '/tailwind.config.js')
  const tailwindConf = require(pathToTailwind)

  function emptyConfig(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  const tailwindConfig = (emptyConfig(tailwindConf)) ? tailwindBase : _.merge(tailwindBase, tailwindConf)

  return {
    ...tailwindConfig,
    purge: [
      `./public/**/*.html`,
      `./src/**/*.vue`,
      `./node_modules/portal-global-components/src/**/*.vue`,
      `./node_modules/portal-storybook/src/**/*.vue`,
      `${pathToRoot}/**/*.vue`,
      `${pathToRoot}/**/*.html`
    ]
  }
}
