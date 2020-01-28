import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ImageData } from '@gifduck/types/imagesService'

import Gallery from 'components/Gallery'
import GalleryItem from 'components/GalleryItem'
import Image from 'components/Image'

interface SearchResultsProps {
  className?: string
  testId?: string
  results: ImageData[]
}

const Container = styled.section`
  ${({ theme }) => theme.grid.container()};
`

const StyledGallery = styled(Gallery)`
  ${({ theme }) => theme.grid.span(1, 8)};
`

const SearchResults: FunctionComponent<SearchResultsProps> = ({ className, testId, results }) => {
  return (
    <Container data-testid={testId} className={className}>
      <StyledGallery>
        {results.map(result => (
          <GalleryItem key={result.id}>
            <Image src={result.image.url} aspectRatio={result.image.aspectRatio} preSrc={result.preview.url} />
          </GalleryItem>
        ))}
      </StyledGallery>
    </Container>
  )
}

export default SearchResults
