const dc = require('diet-cola')
const { media } = require('./styles')

module.exports = dc('h1')(`
  font-size: 32px;
  margin-top: .25em;
  margin-bottom: .25em;

  ${media[0]} {
    font-size: 48px;
  }

  ${media[1]} {
    font-size: 6vw;
  }
`)

