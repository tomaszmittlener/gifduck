import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

import Text from './'

afterEach(cleanup)

describe('Text', () => {
  test('renders correctly with red color', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Text value={'hello'} color={'red'} />
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })
  test('renders correctly with blue color', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <Text value={'hello'} color={'blue'} />
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
