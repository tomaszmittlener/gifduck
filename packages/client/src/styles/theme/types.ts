import { BuildContainerGrid, BuildSpanGrid } from '../grid'

export interface ThemeColorsPrimary {
  default: string
  defaultInverted: string
  secondary: string
  third: string
  [key: string]: string
}

export interface ThemeColorsAccent {
  default: string
  defaultInverted: string
  [key: string]: string
}

export interface ThemeColorsGrays {
  default: string
  white: string
  black: string
  [key: string]: string
}

export interface ThemeColorsStatus {
  success: string
  error: string
  [key: string]: string
}

export interface ThemeColors {
  primary: Readonly<ThemeColorsPrimary>
  accent: Readonly<ThemeColorsAccent>
  grays: Readonly<ThemeColorsGrays>
  status: Readonly<ThemeColorsStatus>
}

export interface ThemeTypographyFonts {
  default: string
  secondary: string
}

export interface ThemeTypographyWeights {
  regular: number
  bold: number
}
export interface ThemeTypography {
  fonts: Readonly<ThemeTypographyFonts>
  weights: Readonly<ThemeTypographyWeights>
}

export interface ThemeGrid {
  container: BuildContainerGrid
  span: BuildSpanGrid
}
export interface ThemeBreakpoints {
  tablet: string
  desktop: string
}

export interface Theme {
  colors: Readonly<ThemeColors>
  typography: Readonly<ThemeTypography>
  ms: (step: number) => string
  layers: Readonly<ThemeLayers>
  grid: Readonly<ThemeGrid>
  breakpoints: ThemeBreakpoints
}

export interface ThemeLayers {
  bottom: number
  middleBottom: number
  middle: number
  middleTop: number
  top: number
  [key: string]: number
}
