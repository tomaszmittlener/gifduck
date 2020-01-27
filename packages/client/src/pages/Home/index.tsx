import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { SearchQueryKeys, ImageData, SearchQuery } from '@gifduck/common-types/imagesService'

import { getQuery } from 'utilities/query'
import imagesService from 'services/imagesService'
import Header from 'containers/Header'
import SearchResults from 'containers/SearchResults'

interface HomePageProps {
  className?: string
  testId?: string
}

const PageWrapper = styled.main`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grays.black};
`

const HomePage: FunctionComponent<HomePageProps> = ({ className, testId }) => {
  const [results, storeResults] = useState<ImageData[]>([])
  const { search } = useLocation()

  const getData = async () => {
    try {
      const searchText = getQuery(search)[SearchQueryKeys.searchText]
      const searchQuery: SearchQuery = {
        [SearchQueryKeys.searchText]: searchText ? String(searchText) : '',
      }
      const { data } = await imagesService.getImages(searchQuery)
      storeResults(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [search])

  return (
    <PageWrapper data-testid={testId} className={className}>
      <Header />
      <SearchResults results={results} />
    </PageWrapper>
  )
}

export default HomePage
