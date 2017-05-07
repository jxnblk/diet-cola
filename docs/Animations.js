const React = require('react')
const Box = require('./Box')
const Heading = require('./Heading')
const Spin = require('./Spin')
const Cat = require('./Cat')

module.exports = () => (
  <Box>
    <Heading>CSS Animations</Heading>
    <Spin>
      <Cat />
    </Spin>
  </Box>
)
