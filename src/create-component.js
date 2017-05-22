const dc = require('./index')

module.exports = (Comp = 'div') => styles => {
  return dc(styles)(Comp)
}
