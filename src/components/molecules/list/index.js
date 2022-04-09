//Theme
import { theme } from 'styles/theme'
import * as S from './styles'
import Container from 'components/atoms/container'
import Icon from 'components/atoms/icons'
import SubContainer from 'components/atoms/subContainer'

const themeMode = {
  light: {
    container: {
      color: theme.color.grey
    },
    subContainer: {
      color: theme.color.white
    },
    h1: {
      color: theme.color.black
    },
    h2: {
      color: theme.color.black
    },
    icon: {
      color: theme.color.grafitti
    }
  },
  dark: {
    container: {
      color: theme.color.grafitti
    },
    subContainer: {
      color: theme.color.lightGrafitti
    },
    h1: {
      color: theme.color.white
    },
    h2: {
      color: theme.color.white
    },
    icon: {
      color: theme.color.white
    }
  }
}

const List = ({ children, title, theme }) => {
  return (
    <S.Container>
      <Container color={themeMode[theme].container.color}>
        <div className="Content">
          <div className="Box1">
            <h1 style={{ color: themeMode[theme].h1.color }}>{title}</h1>
            <Icon
              name="burgerMenu"
              size="small"
              color={themeMode[theme].icon.color}
            />
          </div>
          <div className="Children">
            <SubContainer
              color={themeMode[theme].subContainer.color}
            ></SubContainer>
            {children}
          </div>
          <div className="Box2">
            <div className="BoxAddCard">
              <Icon
                name="add"
                size="small"
                color={themeMode[theme].icon.color}
              />
              <h2 style={{ color: themeMode[theme].h2.color }}>
                Adicionar um cartão
              </h2>
            </div>
            <Icon
              name="template"
              size="small"
              color={themeMode[theme].icon.color}
            />
          </div>
        </div>
      </Container>
    </S.Container>
  )
}

export default List
