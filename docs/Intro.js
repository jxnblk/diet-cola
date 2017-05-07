const React = require('react')
const Box = require('./Box')
const Lead = require('./Lead')

module.exports = () => (
  <Box>
    <Lead>
      Styled Components is an excellent API for creating UI component primitives in React,
      but in its current state, it has several features that might not be needed for most use cases.
      This library is also meant as a proof of concept of using existing libraries to create a small, custom css-in-js solution.
    </Lead>
  </Box>
)
