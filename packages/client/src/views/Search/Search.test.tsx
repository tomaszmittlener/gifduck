import React from 'react'
import { render, cleanup, wait } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from 'styles/theme'

import Home from './'
import { MemoryRouter } from 'react-router-dom'
import { ImagesSearchResponse } from '@gifduck/types/imagesService'

const defaultProps = {
  className: 'class-name',
  testId: 'test-id',
}

afterEach(cleanup)

const response: ImagesSearchResponse = {
  results: [
    {
      preview: { aspectRatio: 1, url: 'prev-url', height: 10, width: 10 },
      image: { width: 20, height: 20, url: 'img-url', aspectRatio: 1 },
      id: '1',
    },
  ],
}

// mock search results response
jest.mock('services/imagesService', () => ({
  esModule: true,
  getImages: async () => ({ data: response }),
}))

// mock window scrollTo fn
window.scrollTo = jest.fn()

describe('Views - Search', () => {
  test('renders correctly', async () => {
    const renderComponent = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>,
    )

    await wait(() => renderComponent)

    expect(renderComponent.container).toMatchSnapshot()
  })

  test('passes className to container', async () => {
    const renderComponent = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Home {...defaultProps} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    await wait(() => renderComponent)

    expect(renderComponent.getByTestId(defaultProps.testId)).toHaveClass(defaultProps.className)
  })
})
