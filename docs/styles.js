
const fs = [
  12,
  16,
  20,
  24,
  32,
  48,
  64
]

const space = [
  0,
  8,
  16,
  32,
  64
]

const black = '#000'
const white = '#fff'
const blue = '#07c'

const colors = {
  black,
  white,
  blue
}

const media = [
  'min-width:40em',
  'min-width:52em',
  'min-width:64em',
].map(v => `@media screen and (${v})`)

module.exports = {
  fs,
  space,
  colors,
  media
}
