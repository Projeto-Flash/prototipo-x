// Libs
import Image from 'next/image'
import styled from 'styled-components'

// Icons
import icons from '../components/atoms/icons/svg'

const Title = styled.h1``

export default function Home() {
  return (
    <>
      <Title>Ooi</Title>
      {icons}
    </>
  )
}
