import { modularScale } from 'polished'
import { Theme } from './types'
import { buildContainerGrid, buildSpanGrid } from '../grid'

const index: Readonly<Theme> = {
  colors: {
    primary: {
      default: '#5D899E',
      defaultInverted: '#A27661',
      secondary: '#E38A51',
      third: '#706155',
    },
    accent: {
      default: '#F2C94C',
      defaultInverted: '#0D2E4D',
    },
    grays: {
      default: '#6F7A86',
      white: '#ECE9DE',
      black: '#343339',
    },
    status: {
      success: '#5ECA82',
      error: '#EA5D5D',
    },
  },
  typography: {
    fonts: {
      default: 'Open Sans, sans-serif',
      secondary: 'Pacifico, sans-serif',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  grid: {
    container: buildContainerGrid,
    span: buildSpanGrid,
  },
  layers: {
    bottom: 1000,
    middleBottom: 1100,
    middle: 1300,
    middleTop: 1400,
    top: 1500,
  },
  ms: (step: number) => modularScale(step, '1rem', 'majorSecond'),
}

export default index
