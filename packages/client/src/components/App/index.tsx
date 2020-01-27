import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyles from 'styles/GlobalStyles'
import Theme from 'styles/theme'
import HomePage from 'pages/Home'

const App: FunctionComponent = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>
    </Router>
  )
}

export default App
