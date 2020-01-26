import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ImageData } from 'services/imagesService'
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
  background-color: ${({ theme }) => theme.colors.grays.black};
  color: ${({ theme }) => theme.colors.grays.white};
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
            <Image src={result.preview.url} />
          </GalleryItem>
        ))}
      </StyledGallery>
    </Container>
  )
}

export default SearchResults
