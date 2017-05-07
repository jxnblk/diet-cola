const dc = require('diet-cola')
const { space, colors } = require('./styles')

module.exports = dc('a')(`
  display: inline-flex;
  padding: ${space[1]}px;
  text-decoration: none;
  color: ${colors.white};
  background-color: ${colors.blue};
  border-radius: 4px;
  &:hover {
    box-shadow: inset 0 0 0 128px rgba(0, 0, 0, .125);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.blue};
  }
  &:active {
    box-shadow: inset 0 0 0 128px rgba(0, 0, 0, .25);
  }
`)
