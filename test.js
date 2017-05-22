const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const dc = require('./src')

test.afterEach(() => {
  dc.clearCache()
})

test('renders', t => {
  const Comp = dc(`
    color: tomato;
    padding: 16px;
  `)('div')
  const tree = render(<Comp children='Hello' />).toJSON()
  t.snapshot(tree)
})

test('handles pseudoclasses', t => {
  const Comp = dc(`
    color: tomato;
    &:hover {
      color: black;
    }
  `)('button')
  const tree = render(<Comp children='Hello' />).toJSON()
  const css = dc.getCss()
  t.snapshot(tree)
  t.regex(css, /:hover/)
})

test('handles keyframes', t => {
  const Comp = dc(`
    animation: pulsate;
    @keyframes pulsate {
      0% { opacity: 1 }
      50% { opacity: 0 }
      100% { opacity: 1 }
    }
  `)('button')
  const tree = render(<Comp children='Hello' />).toJSON()
  const css = dc.getCss()
  t.snapshot(tree)
  t.regex(css, /@keyframes/)
})

test('dedupes repeated styles', t => {
  const One = dc('color:tomato')('div')
  const Two = dc('color:tomato')('div')
  const one = render(<One />).toJSON()
  const two = render(<Two />).toJSON()
  t.is(one.props.className, two.props.className)
})

test('exports cache', t => {
  t.is(typeof dc.cache, 'object')
})

test('exports glamor stylesheet', t => {
  t.is(typeof dc.sheet, 'object')
  t.is(typeof dc.sheet.rules, 'function')
  t.is(typeof dc.sheet.flush, 'function')
})

test('exports getCss()', t => {
  t.is(typeof dc.getCss, 'function')
})

test('exports clearCache()', t => {
  t.is(typeof dc.clearCache, 'function')
})

test('supports server side rendering', t => {
  const Comp = dc(`color:tomato`)('h1')
  const css = dc.getCss()
  dc.clearCache()
  t.is(typeof css, 'string')
  t.is(css, '._0 {color:tomato}')
})

test('clears cache', t => {
  const Comp = dc('color:tomato')('h1')
  dc.clearCache()
  t.deepEqual(dc.cache, {})
})

test('supports composition', t => {
  const Tomato = dc('color:tomato')('h1')
  const BigTomato = dc('font-size:64px')(Tomato)
  const tree = render(<BigTomato />).toJSON()
  const css = dc.getCss()
  t.is(tree.props.className, '_0 _1')
  t.is(css, '._0 {color:tomato}._1 {font-size:64px}')
  t.snapshot(tree)
})
