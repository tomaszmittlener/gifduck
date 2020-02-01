import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import Header from 'containers/Header'
import Footer from 'containers/Footer'
import SearchResults from 'containers/SearchResults'
import { FetchStatus } from 'common/types'
import scrollToTop from 'common/scrollToTop'
import getSearchQueryFromString from 'common/getSearchQueryFromString'

import useFetchResults from './hooks/useFetchResults'

interface HomePageProps {
  className?: string
  testId?: string
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grays.white};
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  min-height: 50vh;
  padding: 0 0 ${({ theme }) => theme.ms(15)} 0;
`

const Search: FunctionComponent<HomePageProps> = ({ className, testId }) => {
  const { search } = useLocation()

  const onFetchSuccess = () => {
    scrollToTop()
  }

  const { fetchStatus, data: results } = useFetchResults({
    searchQuery: getSearchQueryFromString(search),
    deps: [search],
    onFetchSuccess,
  })

  return (
    <PageWrapper data-testid={testId} className={className}>
      <Header isLoading={fetchStatus === FetchStatus.Loading} />
      <Main>
        <SearchResults results={results} />
      </Main>
      <Footer />
    </PageWrapper>
  )
}

export default Search
