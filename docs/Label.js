const dc = require('diet-cola')
const { fs } = require('./styles')

module.exports = dc('label')(`
  font-size: ${fs[0]}px;
  font-weight: bold;
  white-space: nowrap;
`)
