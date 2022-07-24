import { GlobalStyles, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { styles } from './styles/global'
import theme from './styles/theme'

const inputGlobalStyles = <GlobalStyles styles={styles} />

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        {inputGlobalStyles}
        <App />
      </ThemeProvider>
  </React.StrictMode>
)
