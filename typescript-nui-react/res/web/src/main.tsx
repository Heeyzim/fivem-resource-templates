import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { ThemeWrapper } from './components/theme-wrapper'
import './index.css'
import { VisibilityProvider } from './providers/VisibilityProvider'

declare global {
  interface Window {
    invokeNative?: unknown
    GetParentResourceName: () => string
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <ThemeProvider defaultTheme="dark">
        <ThemeWrapper defaultTheme="slate">
          <App />
        </ThemeWrapper>
      </ThemeProvider>
    </VisibilityProvider>
  </React.StrictMode>,
)
