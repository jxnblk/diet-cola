const dc = require('diet-cola')

module.exports = dc('textarea')(`
  font-family: Menlo, monospace;
  font-size: 12px;
  width: 100%;
  margin: 0;
  padding: 8px;
  color: inherit;
  background-color: rgba(0, 0, 0, .0625);
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .125);
  }
`)
