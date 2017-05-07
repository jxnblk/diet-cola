const dc = require('diet-cola')

module.exports = dc('input')(`
  font-family: Menlo, monospace;
  font-size: 12px;
  margin: 0;
  padding: 4px;
  appearance: none;
  color: inherit;
  background-color: rgba(0, 0, 0, .0625);
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .125);
  }
`)
