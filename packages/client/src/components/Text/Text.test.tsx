import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import Text from './'

afterEach(cleanup)

describe('Text', () => {
  test('renders correctly', async () => {
    const { container } = render(<Text value={'hello'} />)

    expect(container).toMatchSnapshot()
  })
})
