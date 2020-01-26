import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface GalleryProps {
  className?: string
  testId?: string
}

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 0;
  column-count: 1;
  column-gap: 0;

  ${({ theme }) => theme.breakpoints.tablet} {
    column-count: 2;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    column-count: 4;
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
