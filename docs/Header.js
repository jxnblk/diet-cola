const React = require('react')
const Banner = require('./Banner')
const H1 = require('./H1')
const Lead = require('./Lead')
const Link = require('./Link')

module.exports = () => (
  <Banner>
    <div style={{ width: '100%' }}>
      <H1>diet-cola</H1>
      <Lead>
        A lightweight
        {' '}
        <Link href='https://github.com/styled-components/styled-components'>
          styled-components
        </Link>
        {' '}
        clone for creating React UI component primitives. Built with
        {' '}
        <Link href='https://github.com/thysultan/stylis.js'>
          stylis
        </Link>
        {' '}
        and
        {' '}
        <Link href='https://github.com/threepointone/glamor'>
          glamor
        </Link>. 10KB
      </Lead>
      <Link href='https://github.com/jxnblk/diet-cola'>
        GitHub
      </Link>
    </div>
  </Banner>
)
