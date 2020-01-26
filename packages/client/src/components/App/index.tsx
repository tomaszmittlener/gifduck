import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import Theme from 'styles/theme'
import HomePage from 'pages/Home'

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
