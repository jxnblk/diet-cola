const dc = require('diet-cola')
const { space, colors } = require('./styles')

module.exports = dc('input', {
  type: 'range'
})(`
  display: block;
  width: 100%;
  height: 4px;
  margin-top: 4px;
  margin-top: 4px;
  cursor: pointer;
  border-radius: 9999px;
  color: inherit;
  background-color: rgba(0, 0, 0, .125);
  appearance: none;

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    background-color: currentcolor;
    border: 0;
    border-radius: 9999px;
    appearance: none;
  }

  &:focus {
    outline: none;
    &::-webkit-slider-thumb {
      background-color: ${colors.blue};
    }
  }
`)
