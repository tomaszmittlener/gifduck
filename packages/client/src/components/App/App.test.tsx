import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import App from './'

afterEach(cleanup)

describe('App', () => {
  test('renders correctly', async () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })
})
