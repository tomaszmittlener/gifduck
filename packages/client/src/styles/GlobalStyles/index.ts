import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Pacifico&display=swap');
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
