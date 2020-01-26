import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Header from 'containers/Header'

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HomePage: FunctionComponent = () => {
  return (
    <PageWrapper>
      <Header />
    </PageWrapper>
  )
}

export default HomePage
