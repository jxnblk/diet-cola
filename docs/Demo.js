const React = require('react')
const { throttle, debounce } = require('lodash')
const dc = require('diet-cola')
const Flex = require('./Flex')
const Box = require('./Box')
const Heading = require('./Heading')
const Textarea = require('./Textarea')

const initCss = `font-family: inherit;
font-size: inherit;
font-weight: bold;
margin: 0;
padding: 12px;
color: #032;
background-color: #0fc;
border: 0;
border-radius: 4px;
appearance: none;
&:hover {
  background-color: black;
}
`

module.exports = class extends React.Component {
  state = {
    css: initCss,
    Btn: null
  }

  update = fn => this.setState(fn, () => {
    this.getBtn()
  })

  getBtn = throttle(() => {
    const Btn = dc('button')(this.state.css)
    this.setState({ Btn })
  }, 500)

  componentWillMount () {
    this.getBtn()
  }

  render () {
    const { Btn, css } = this.state

    return (
      <Box>
        <Heading>Demo</Heading>
        <Flex>
          <Textarea
            name='css'
            value={css}
            rows={12}
            onChange={e => {
              const css = e.target.value
              this.update(state => ({ css }))
            }}
          />
          <Box>
            <Btn children='Button' />
          </Box>
        </Flex>
      </Box>
    )
  }
}
