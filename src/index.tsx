import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import CssBaseline from '@mui/material/CssBaseline'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
