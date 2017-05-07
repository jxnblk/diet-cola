const dc = require('diet-cola')
const { media, fs } = require('./styles')

module.exports = dc('h2')(`
  font-size: ${fs[2]}px;
  text-transform: uppercase;
  letter-spacing: .2em;
  ${media[2]} {
    font-size: ${fs[3]}px;
  }
`)
