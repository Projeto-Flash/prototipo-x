//Theme
import * as S from './styles'

const Container = ({ children, color }) => {
  return <S.Container color={color}>{children}</S.Container>
}

export default Container
