import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { styles } from './styles/global'
import theme from './styles/theme'
import App from './App'

const inputGlobalStyles = <GlobalStyles styles={styles} />

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        {inputGlobalStyles}
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
