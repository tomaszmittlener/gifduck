import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

import Image from './'

const defaultProps = {
  className: 'class-name',
  testId: 'test-id',
  src: 'image-url',
  height: 10,
  width: 20,
  aspectRatio: 1.22222,
  preSrc: 'pre-scr',
}

afterEach(cleanup)

describe('Image', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Image {...defaultProps} />
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })

  test('passes className to container', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Image {...defaultProps} />
      </ThemeProvider>,
    )

    expect(getByTestId(defaultProps.testId)).toHaveClass(defaultProps.className)
  })
})
