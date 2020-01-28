import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface GalleryProps {
  className?: string
  testId?: string
}

// CSS grid-area explained:
// start row / start col / end row / end col

// as images use aspect ratio, we just need to determine the number of columns each should take.
// below setup will give some "random" effect
const Container = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  grid-area: auto / 1 / span 2 / 5;
  ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    &:first-of-type {
      grid-area: auto / 3 / span 1 / 7;
    }
    &:nth-of-type(2n) {
      grid-area: auto / 4 / span 1 / 9;
    }
    &:nth-of-type(3n) {
      grid-area: auto / 2 / span 1 / 7;
    }
    &:nth-of-type(4n) {
      grid-area: auto / 5 / span 1 / 9;
    }
    &:nth-of-type(7n) {
      grid-area: auto / 4 / span 1 / 6;
    }
  }
`

const GalleryItem: FunctionComponent<GalleryProps> = ({ className, testId, children }) => {
  return (
    <Container data-testid={testId} className={className}>
      {children}
    </Container>
  )
}

export default GalleryItem
