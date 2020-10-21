// portalName wird durch das DevServer Script welches die
// Terminalparameter ausliest mit dem Portalnamen initialisiert.
module.exports = portalName => {
// ...
  {
    loader: 'postcss-loader',
    options: {
      config: {
        ctx: {
          portalName
        }
      }
    }
  }
// ...
}