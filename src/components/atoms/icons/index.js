//Theme
import { theme } from '../../../styles/theme'
//ReactHooks
import { useRef, useState, useEffect } from 'react'
//SVG Lib
import 'external-svg-loader'

const reqSvgs = require.context('./svg', true, /\.svg$/)
const paths = reqSvgs.keys()

const svgs = paths.map(path => reqSvgs(path)).map(item => item.default.src)

const svgList = svgs.reduce((prev, next) => {
  const key = next.slice(20).split('.')[0]
  return { ...prev, [key]: next }
}, {})

const icons = {
  svg: svgList,
  size: theme.icons.size,
  color: theme.icons.color
}

const Icon = ({ name, size, color }) => {
  const refObject = useRef()
  const [isLoaded, setIsLoaded] = useState(false)

  const icon = {
    src: icons.svg[name],
    alt: name,
    width: icons.size[size],
    height: icons.size[size],
    color: icons.color[color]
  }

  function switchColor() {
    const arr = Object.values({ ...refObject.current.children })

    if (arr.length === 0) {
      setIsLoaded(false)
    } else {
      arr.map(e => {
        console.log('troquei de cor, viado')
        e.style.fill = icon.color
      })
    }
  }

  useEffect(() => {
    if (isLoaded) {
      switchColor()
    } else {
      setIsLoaded(true)
    }
  }, [isLoaded, { ...Icon.props }])

  return (
    <svg
      ref={refObject}
      data-src={icon.src}
      width={icon.width}
      height={icon.height}
    />
  )
}

export default Icon
