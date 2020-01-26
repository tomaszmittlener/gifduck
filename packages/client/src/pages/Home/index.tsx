import React, { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from 'containers/Header'
import SearchResults from 'containers/SearchResults'
import imagesService, { ImageData } from 'services/imagesService'

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
  const [images, storeImages] = useState<ImageData[]>([])

  const getData = async () => {
    try {
      const { data } = await imagesService.getImages({ searchText: 'test' })
      storeImages(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(images)

  return (
    <PageWrapper data-testid={testId} className={className}>
      <Header />
      <SearchResults />
    </PageWrapper>
  )
}

export default HomePage
