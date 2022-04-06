// Svg
import burgerMenu from './burgerMenu.svg'
import add from './add.svg'
import template from './template.svg'

/* const imagensPath = require.context('../svg', true, /\.svg$/)
let images = {}
imagensPath.keys().forEach(item => {
  images[item.replace('./', '').replace('.svg', '')] = item
})
console.log(images) */

const reqSvgs = require.context('../svg', true, /\.svg$/)
const paths = reqSvgs.keys()

const svgs = paths.map(path => reqSvgs(path))
const svgList = svgs.map(item => item.default.src)

svgList.reduce((prev, next) => {
  const key = next.slice(20).split('.')[0]
  return { ...prev, [key]: next }
}, {})

export const svg = {
  burgerMenu,
  add,
  template
}
