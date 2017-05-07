const React = require('react')
const Box = require('./Box')
const Heading = require('./Heading')
const Pre = require('./Pre')

module.exports = () => (
  <Box>
    <Heading>Example</Heading>
    <Pre children={example} />
  </Box>
)

const example = `import dc from 'diet-cola'

const Heading = dc('h2')(\`
  font-size: 48px;
  color: tomato;
\`)
`
