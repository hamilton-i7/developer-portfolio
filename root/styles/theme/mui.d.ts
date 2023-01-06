import { PaletteOptions, Palette } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    tablet: true
    md: true
    lg: true
    desktop: true
    xl: true
    tv: true
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    neutral: {
      main: string
      dark: string
    }
  }

  export interface PaletteOptions {
    neutral: {
      main: string
      dark: string
    }
  }
}
