import { createTheme } from '@mui/material'
import breakpoints from './breakpoints'
import typography from './typography'

const darkTheme = createTheme({
  breakpoints,
  typography,
  spacing: (factor: number) => `${0.8 * factor}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#4EE1A0',
    },
    common: {
      black: '#151515',
    },
    neutral: {
      main: '#D9D9D9',
      dark: '#242424',
    },
  },
})

export default darkTheme
