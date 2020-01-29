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
  height: 100%;
`

const StyledGallery = styled(Gallery)`
  ${({ theme }) => theme.grid.span(1, 8)};
`

const NoResultsText = styled.h3`
  ${({ theme }) => theme.grid.span(3, 6)};
  justify-self: center;
  font-family: ${({ theme }) => theme.typography.fonts.default};
  color: ${({ theme }) => theme.colors.grays.black};
  font-size: ${({ theme }) => theme.ms(10)};
  text-align: center;
`

const SearchResults: FunctionComponent<SearchResultsProps> = ({ className, testId, results }) => {
  return (
    <Container data-testid={testId} className={className}>
      {!!results.length ? (
        <StyledGallery>
          {results.map(result => (
            <GalleryItem key={result.id}>
              <Image src={result.image.url} aspectRatio={result.image.aspectRatio} preSrc={result.preview.url} />
            </GalleryItem>
          ))}
        </StyledGallery>
      ) : (
        <NoResultsText>Type in whats on your mind!</NoResultsText>
      )}
    </Container>
  )
}

export default SearchResults
