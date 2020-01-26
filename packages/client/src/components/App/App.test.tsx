import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

import App from './'

afterEach(cleanup)

describe('App', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
