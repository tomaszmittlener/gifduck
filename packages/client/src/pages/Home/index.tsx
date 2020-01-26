import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Header from 'containers/Header'
import SearchResults from 'containers/SearchResults'

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomePage: FunctionComponent = () => {
  return (
    <PageWrapper>
      <Header />
      <SearchResults />
    </PageWrapper>
  )
}

export default HomePage
