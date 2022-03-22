import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#333',
    },
  },
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
