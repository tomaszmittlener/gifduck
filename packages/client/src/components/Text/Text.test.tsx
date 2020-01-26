import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Text from './'

afterEach(cleanup)

describe('Text', () => {
  test('renders correctly with red color', async () => {
    const { container } = render(<Text value={'hello'} color={'red'} />)

    expect(container).toMatchSnapshot()
  })
  test('renders correctly with blue color', async () => {
    const { container } = render(<Text value={'hello'} color={'blue'} />)

    expect(container).toMatchSnapshot()
  })
})
