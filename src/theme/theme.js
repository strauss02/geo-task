import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    neutral: {
      main: '#1B1C1D',
    },
    type: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#212224',
      paper: '#24344d',
    },
    text: {
      primary: 'white',
      secondary: 'white',
    },
  },

  breakpoints: {
    values: {
      xl: 1000,
      md: 600,
      xs: 200,
    },
  },
  // UNIVERSAL RESET
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      html: {
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
      },
      body: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
      },
      '#__next': {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      },
    },
  },
})
