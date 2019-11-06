import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import Helmet from 'react-helmet'

const GlobalCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${normalize()}
  
  html {
    // Use react helmet to load the font
    font-family: 'Roboto', -apple-system,'BlinkMacSystemFont','Segoe UI','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    color: rgba(0, 0, 0, 0.84);
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
`

const GlobalStyles: React.FC = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalCss />
  </>
)

export default GlobalStyles
