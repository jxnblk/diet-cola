const dc = require('diet-cola')
const { colors } = require('./styles')

module.exports = dc('a')(`
  text-decoration: none;
  font-weight: bold;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`)
