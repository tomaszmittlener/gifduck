import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface GalleryProps {
  className?: string
  testId?: string
}

// eight columns layout
const COLUMN_GAP = 1
// column widths in %. Sum needs to equal 93 (eight columns will create 7 gaps. columns + gaps need to make 100% of container width)
const columns = [6, 14, 11, 15, 5, 10, 9, 23]

const Container = styled.ul`
  padding: 0;
  display: grid;
  grid-row-gap: ${({ theme }) => theme.ms(-1)};
  grid-column-gap: ${COLUMN_GAP}%;
  grid-template-columns: 1fr;
  ${({ theme: { breakpoints } }) => breakpoints.tablet} {
    grid-row-gap: ${({ theme }) => theme.ms(4)};
    grid-template-columns: ${columns.map(c => `${c}% `)};
  }
`

const Gallery: FunctionComponent<GalleryProps> = ({ className, testId, children }) => {
  return (
    <Container data-testid={testId} className={className}>
      {children}
    </Container>
  )
}

export default Gallery
