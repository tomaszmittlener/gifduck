import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface SearchResultsProps {
  className?: string
  testId?: string
  src: string
}

const Container = styled.figure`
  margin: 0;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const SearchResults: FunctionComponent<SearchResultsProps> = ({ className, testId, src }) => {
  return (
    <Container data-testid={testId} className={className}>
      <Image src={src} />
    </Container>
  )
}

export default SearchResults
