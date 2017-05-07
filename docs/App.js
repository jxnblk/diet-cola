const React = require('react')
const Header = require('./Header')
const Intro = require('./Intro')
const Features = require('./Features')
const Example = require('./Example')
const Demo = require('./Demo')
const Animations = require('./Animations')
const Theming = require('./Theming')
const Footer = require('./Footer')

module.exports = class extends React.Component {
  state = {}
  update = fn => this.setState(fn)

  render () {
    return (
      <div>
        <Header />
        <Intro />
        <Features />
        <Example />
        <Demo />
        {/*
        <Animations />
        <Theming />
        */}
        <Footer />
      </div>
    )
  }
}
