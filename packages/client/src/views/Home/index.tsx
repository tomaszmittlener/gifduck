import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { ImageData, SearchQuery, SearchQueryKeys } from '@gifduck/types/imagesService'

import { getQuery } from 'common/queryString'
import imagesService from 'services/imagesService'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import SearchResults from 'containers/SearchResults'
import { FetchStatus } from 'common/types'
import scrollToTop from 'common/scrollToTop'

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

const HomePage: FunctionComponent<HomePageProps> = ({ className, testId }) => {
  const [results, storeResults] = useState<ImageData[]>([])
  const [fetchStatus, updateFetchStatus] = useState<FetchStatus>(FetchStatus.Loading)

  const { search } = useLocation()

  const getData = async () => {
    try {
      updateFetchStatus(FetchStatus.Loading)

      const searchText = getQuery(search)[SearchQueryKeys.searchText]
      const searchQuery: SearchQuery = {
        [SearchQueryKeys.searchText]: searchText ? String(searchText) : '',
      }
      const { data } = await imagesService.getImages(searchQuery)
      storeResults(data.results)
      updateFetchStatus(FetchStatus.Loaded)

      scrollToTop()
    } catch (e) {
      updateFetchStatus(FetchStatus.Error)

      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [search])

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

export default HomePage
