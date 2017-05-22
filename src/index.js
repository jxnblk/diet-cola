const { createElement } = require('react')
const { StyleSheet } = require('glamor/lib/sheet')
const stylis = require('stylis')
const classnames = require('classnames')

let _id = 0
const uuid = () => _id++
const cache = {}
const sheet = new StyleSheet()

sheet.inject()

const withStyle = styles => Comp => {
  const cn = insert(styles)

  const Component = ({ is, ...props }) => (
    createElement(is || Comp, {
      ...props,
      className: classnames(cn, props.className)
    })
  )

  return Component
}

const insert = styles => {
  if (cache[styles]) return cache[styles]
  const cn = '_' + uuid().toString(36)
  const css = stylis('.' + cn, styles)
  sheet.insert(css)
  cache[styles] = cn
  return cn
}

module.exports = withStyle

module.exports.sheet = sheet
module.exports.cache = cache

module.exports.getCss = () => {
  return sheet.rules()
    .map(r => r.cssText)
    .join('')
}

module.exports.clearCache = () => {
  sheet.flush()
  _id = 0
  for (let key in cache) {
    delete cache[key]
  }
}
