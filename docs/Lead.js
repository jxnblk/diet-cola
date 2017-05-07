const dc = require('diet-cola')
const Text = require('./Text')
const { fs } = require('./styles')

module.exports = dc(Text)(`
  font-size: ${fs[2]}px;
  max-width: 38em;
`)
