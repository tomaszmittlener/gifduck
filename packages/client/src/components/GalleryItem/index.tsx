import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface GalleryProps {
  className?: string
  testId?: string
}

const Container = styled.li`
  display: block;
`

const GalleryItem: FunctionComponent<GalleryProps> = ({ className, testId, children }) => {
  return (
    <Container data-testid={testId} className={className}>
      {children}
    </Container>
  )
}

export default GalleryItem
