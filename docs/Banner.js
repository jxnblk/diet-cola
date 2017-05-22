const dc = require('diet-cola')

module.exports = dc(`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: #0cf;
  background-image: linear-gradient(-60deg, rgba(255, 0, 0, 1), rgba(0, 255, 255, 1));
  background-blend-mode: overlay;

  animation-name: rotate;
  animation-duration: 16s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes rotate {
    0% { background-color: #0cf }
    33% { background-color: #f0c }
    66% { background-color: #c0f }
    100% { background-color: #0cf }
  }
`)('header')
