const React = require('react')
const Flex = require('./Flex')
const Box = require('./Box')
const Link = require('./Link')
const Spacer = require('./Spacer')

module.exports = () => (
  <Box>
    <Link href='https://github.com/jxnblk/diet-cola'>
      GitHub
    </Link>
    <Spacer />
    <Link href='http://jxnblk.com'>
      Made by Jxnblk
    </Link>
  </Box>
)
