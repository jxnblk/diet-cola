const dc = require('diet-cola')

module.exports = dc('ul')(`
  list-style: none;
  padding: 0;
  column-width: 16em;
`)
