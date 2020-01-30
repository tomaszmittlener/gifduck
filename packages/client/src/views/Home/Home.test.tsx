import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Theme from 'styles/theme'

import Home from './'
import { MemoryRouter } from 'react-router-dom'

// const defaultProps = {
//   className: 'class-name',
//   testId: 'test-id',
// }

afterEach(cleanup)

describe('SearchResults', () => {
  test('renders correctly', async () => {
    const { container } = render(
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ThemeProvider>,
    )
    expect(container).toMatchSnapshot()
  })

  // test('passes className to container', async () => {
  //   const container = render(
  //     <ThemeProvider theme={Theme}>
  //       <MemoryRouter>
  //         <Home {...defaultProps} />
  //       </MemoryRouter>
  //     </ThemeProvider>,
  //   )
  //
  //   expect(container.getByTestId(defaultProps.testId)).toHaveClass(defaultProps.className)
  // })
})
