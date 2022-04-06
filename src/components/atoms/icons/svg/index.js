// Svg
import burgerMenu from './burgerMenu.svg'
import add from './add.svg'
import template from './template.svg'

const reqSvgs = require.context('../svg', true, /\.svg$/)
const paths = reqSvgs.keys()

const svgs = paths.map(path => reqSvgs(path))
console.log('teste', svgs)

export const svg = {
  burgerMenu,
  add,
  template
}
