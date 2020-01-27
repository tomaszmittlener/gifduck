import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'
import { MemoryRouter } from 'react-router-dom'

import App from './'

afterEach(cleanup)

describe('App', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
