// Libs
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const ThemeContainer = ThemeProvider

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }

  /* body{
    background-color: ${theme.color.blackGrafitti};
    padding: 10px;
  } */
`
