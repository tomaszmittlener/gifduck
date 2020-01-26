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
  padding: 0 ${({ theme }) => theme.ms(0)};
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 ${({ theme }) => theme.ms(3)};
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 ${({ theme }) => theme.ms(6)};
  }

  // GUTTERS
  grid-column-gap: ${({ theme }) => theme.ms(-6)};
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-column-gap: ${({ theme }) => theme.ms(0)};
  }

  // BASE
  display: grid;
  grid-template-columns: repeat(${GRID_COLUMNS}, 1fr);
  width: 100%;
  max-width: ${GRID_MAX_WIDTH};
`
