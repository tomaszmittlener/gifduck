import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'
import { ImageData } from 'services/imagesService'
import { MemoryRouter } from 'react-router-dom'

import SearchResults from './'

const results: ImageData[] = [
  {
    id: '1',
    image: {
      height: '100',
      url: 'image-url',
      width: '200',
    },
    preview: {
      width: '50',
      url: 'preview-url',
      height: '100',
    },
  },
]

const defaultProps = {
  className: 'class-name',
  testId: 'test-id',
  results,
}

afterEach(cleanup)

describe('SearchResults', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <SearchResults {...defaultProps} />
        </MemoryRouter>
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })

  test('passes className to container', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <SearchResults {...defaultProps} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(getByTestId(defaultProps.testId)).toHaveClass(defaultProps.className)
  })
})
