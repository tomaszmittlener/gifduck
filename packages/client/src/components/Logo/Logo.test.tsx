import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

import Logo from './'

const defaultProps = {
  className: 'class-name',
  testId: 'test-id',
}

afterEach(cleanup)

describe('Logo', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Logo />
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })

  test('passes className to container', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Logo {...defaultProps} />
      </ThemeProvider>,
    )

    expect(getByTestId(defaultProps.testId)).toHaveClass(defaultProps.className)
  })
})
