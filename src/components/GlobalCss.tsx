import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ${normalize()}
  
  html {
    // Use react helmet to load the font
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: rgba(0, 0, 0, 0.84);
    text-rendering: optimizeLegibility;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
`

const GlobalStyles: React.FC = () => (
  <>
    <GlobalCss />
  </>
)

export default GlobalStyles
