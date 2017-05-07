const React = require('react')
const Box = require('./Box')
const Heading = require('./Heading')
const Columns = require('./Columns')
const ListItem = require('./ListItem')

const features = [
  'Under 10KB',
  'Simple API',
  'Use plain CSS strings',
  'Pseudoclass support',
  'Media query support',
  'CSS animation support',
  'No theming',
  'No dynamic styling',
  'Performant',
  'Server-side rendering',
  'Only 48 custom LOC'
]

module.exports = () => (
  <Box>
    <Heading>Features</Heading>
    <Columns>
      {features.map((feature, i) => (
        <ListItem
          key={i}
          children={feature}
        />
      ))}
    </Columns>
  </Box>
)
