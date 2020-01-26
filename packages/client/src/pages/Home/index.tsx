import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Header from 'containers/Header'
import SearchResults from 'containers/SearchResults'

interface HomePageProps {
  className?: string
  testId?: string
}

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grays.black};
`

const HomePage: FunctionComponent<HomePageProps> = ({ className, testId }) => {
  return (
    <PageWrapper data-testid={testId} className={className}>
      <Header />
      <SearchResults />
    </PageWrapper>
  )
}

export default HomePage
