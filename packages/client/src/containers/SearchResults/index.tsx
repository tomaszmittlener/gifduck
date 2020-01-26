import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface SearchResultsProps {
  className?: string
  testId?: string
}

const Container = styled.section`
  ${({ theme }) => theme.grid.container()};
  background-color: ${({ theme }) => theme.colors.grays.black};
  color: ${({ theme }) => theme.colors.grays.white};
  height: 50vh;
`

const Content = styled.div`
  ${({ theme }) => theme.grid.span(1, 8)};
  height: ${({ theme }) => theme.ms(20)};
  background-color: ${({ theme }) => theme.colors.grays.default};
`

const SearchResults: FunctionComponent<SearchResultsProps> = ({ className, testId }) => {
  return (
    <Container data-testid={testId} className={className}>
      <Content />
    </Container>
  )
}

export default SearchResults
