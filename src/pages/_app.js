// Libs
import * as S from '../styles/globals'

// Styles
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <S.ThemeContainer theme={theme}>
      <S.GlobalStyles />
      <Component {...pageProps} />
    </S.ThemeContainer>
  )
}

export default MyApp
