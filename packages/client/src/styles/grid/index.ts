import { css, CSSProp } from 'styled-components'

export type BuildContainerGrid = () => CSSProp
export type BuildSpanGrid = (startCol: number, endCol: number) => CSSProp

const GRID_MAX_WIDTH = '1440px;'
const GRID_COLUMNS = 8

export const buildSpanGrid: BuildSpanGrid = (startCol = 1, endCol = 12) => {
  return css`
    grid-column: ${startCol} / ${endCol + 1};
  `
}

export const buildContainerGrid: BuildContainerGrid = () => css`
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
