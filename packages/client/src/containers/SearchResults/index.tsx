import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'

export const GRID_MAX_WIDTH = '1440px;'
export const GRID_COLUMNS = 8

export const buildSpanGrid = (startCol = 1, endCol = 12) => {
  return css`
    grid-column: ${startCol} / ${endCol + 1};
  `
}

const GridCss = css`
  // PADDING
  // mobile
  padding: 0 ${({ theme }) => theme.ms(0)};
  // tablet
  @media screen and (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.ms(3)};
  }
  // desktop
  @media (min-width: 1024px) {
    padding: 0 ${({ theme }) => theme.ms(6)};
  }

  // GUTTERS
  grid-column-gap: ${({ theme }) => theme.ms(-6)};
  @media screen and (min-width: 768px) {
    grid-column-gap: ${({ theme }) => theme.ms(0)};
  }

  // BASE
  display: grid;
  grid-template-columns: repeat(${GRID_COLUMNS}, 1fr);
  width: 100%;
  max-width: ${GRID_MAX_WIDTH};
`

const Container = styled.section`
  ${GridCss};
  background-color: ${({ theme }) => theme.colors.grays.black};
  color: ${({ theme }) => theme.colors.grays.white};
  height: 50vh;
`

const Content = styled.div`
  ${buildSpanGrid(2, 7)};
  height: ${({ theme }) => theme.ms(20)};
  background-color: ${({ theme }) => theme.colors.grays.default};
`

const SearchResults: FunctionComponent = () => {
  return (
    <Container>
      <Content />
    </Container>
  )
}

export default SearchResults
