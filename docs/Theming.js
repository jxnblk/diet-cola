const React = require('react')
const CSSVar = require('react-css-var')
const hello = require('hello-color').default
const chroma = require('chroma-js')
const Flex = require('./Flex')
const Box = require('./Box')
const Heading = require('./Heading')
const Text = require('./Text')
const Label = require('./Label')
const Input = require('./Input')
const Slider = require('./Slider')
const Theme = require('./Theme')

module.exports = class extends React.Component {
  state = {
    h: 170,
    s: 1,
    l: 1
  }

  update = fn => this.setState(fn)

  render () {
    const { h, s, l } = this.state
    const bg = chroma.hsl([ h, s, l ]).css()

    const colors = {
      bg
    }

    return (
      <Theme>
        <Box>
          <CSSVar vars={colors} />
          <Heading>Theming</Heading>
          <Text>With CSS variables</Text>
          <div>
            <Flex>
              <Label
                htmlFor='h'
                children='H'
              />
              <Input
                name='h'
                type='number'
                value={h}
                max={360}
                onChange={e => {
                  const h = parseFloat(e.target.value)
                  this.update(state => ({ h }))
                }}
              />
              <Slider
                name='h'
                id='h'
                value={h}
                max={360}
                onChange={e => {
                  const h = parseFloat(e.target.value)
                  this.update(state => ({ h }))
                }}
              />
            </Flex>
            <Flex>
              <Label
                htmlFor='s'
                children='S'
              />
              <Input
                name='s'
                type='number'
                value={s}
                max={1}
                step={1/128}
                onChange={e => {
                  const s = parseFloat(e.target.value)
                  this.update(state => ({ s }))
                }}
              />
              <Slider
                name='s'
                id='s'
                value={s}
                max={1}
                step={1/128}
                onChange={e => {
                  const s = parseFloat(e.target.value)
                  this.update(state => ({ s }))
                }}
              />
            </Flex>
            <Flex>
              <Label
                htmlFor='l'
                children='L'
              />
              <Input
                name='l'
                type='number'
                value={l}
                max={1}
                step={1/128}
                onChange={e => {
                  const l = parseFloat(e.target.value)
                  this.update(state => ({ l }))
                }}
              />
              <Slider
                name='l'
                id='l'
                value={l}
                max={1}
                step={1/128}
                onChange={e => {
                  const l = parseFloat(e.target.value)
                  this.update(state => ({ l }))
                }}
              />
            </Flex>
          </div>
        </Box>
      </Theme>
    )
  }
}
