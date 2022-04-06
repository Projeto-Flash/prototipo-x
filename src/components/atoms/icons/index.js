// Libs
import Image from 'next/image'

// Data
import { icons } from './data'

const Icon = ({ nameIcon }) => (
  <Image
    src={icons.burgerMenu.src}
    alt={icons.burgerMenu.name}
    style={{
      width: icons.burgerMenu.size,
      height: icons.burgerMenu.size,
      fill: icons.burgerMenu.color
    }}
  />
)

export default Icon
