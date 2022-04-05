// Libs
import { ThemeProvider, createGlobalStyle } from "styled-components";


export const ThemeContainer = ThemeProvider

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
`