import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface GalleryProps {
  className?: string
  testId?: string
}

const GalleryItem = styled.li`
  display: block;
`

const Gallery: FunctionComponent<GalleryProps> = ({ className, testId, children }) => {
  return (
    <GalleryItem data-testid={testId} className={className}>
      {children}
    </GalleryItem>
  )
}

export default Gallery
