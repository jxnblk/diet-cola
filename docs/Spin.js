const dc = require('diet-cola')

module.exports = dc('div')(`
  display: inline-block;
  transform-origin: 50% 50%;
  animation-name: spin;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
`)
