const React = require('react')

module.exports = () => (
  <svg
    viewBox='0 0 32 32'
    width={512}
    height={512}
    fill='#fff'>
    <rect
      fill='#000'
      width={32}
      height={32}
    />
    {/*
    <text
      x={16}
      y={16}
      style={sx.cat}
      textAnchor='middle'>
      {'😺'}
    </text>
    */}
    <text
      fill='#fff'
      textAnchor='middle'
      x={16}
      y={14}
      style={sx.text}>
      diet
    </text>
    <text
      fill='#fff'
      textAnchor='middle'
      x={16}
      y={25}
      style={sx.text}>
      cola
    </text>
  </svg>
)

const sx = {
  text: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    // textTransform: 'uppercase'
  },
  cat: {}
}
