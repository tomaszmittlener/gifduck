import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  [type="search"] {
    appearance: initial;
  }

`

export default GlobalStyles
