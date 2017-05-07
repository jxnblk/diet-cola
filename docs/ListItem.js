const dc = require('diet-cola')

module.exports = dc('li')(`
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
  break-inside: avoid;

  &:first-child {
    margin-top: 0;
  }
`)
