const React = require('react')
const { StyleSheet } = require('glamor/lib/sheet')
const stylis = require('stylis')
const classnames = require('classnames')

let _id = 0
const uuid = () => _id++
const cache = {}
const sheet = new StyleSheet()

sheet.inject()

const createComponent = (Tag = 'div', defaultProps) => (styles) => {
  const cn = cache[styles] || '_' + uuid().toString(36)

  if (!cache[styles]) {
    const css = stylis('.' + cn, styles)
    sheet.insert(css)
    cache[styles] = cn
  }

  const Component = props => (
    <Tag
      {...defaultProps}
      {...props}
      className={classnames(cn, props.className)}
    />
  )

  return Component
}

module.exports = createComponent

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
