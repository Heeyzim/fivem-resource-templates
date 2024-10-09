import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { ThemeWrapper } from './components/theme-wrapper'
import './index.css'
import { VisibilityProvider } from './providers/VisibilityProvider'
import { isEnvBrowser } from './utils/misc'
import {
  mockTriggerNuiEvent,
  mockTriggerNuiEvents,
} from './utils/mockTriggerNuiEvent'

declare global {
  interface Window {
    invokeNative?: unknown
    GetParentResourceName: () => string
    citFrames: Record<string, HTMLIFrameElement>
    mockTriggerNuiEvents: typeof mockTriggerNuiEvents
    mockTriggerNuiEvent: typeof mockTriggerNuiEvent
  }
}

parent.GetParentResourceName = () => 'forum-drive-spawner-ts-nui-react'

if (import.meta.env.MODE === 'development' && isEnvBrowser()) {
  window.mockTriggerNuiEvent = mockTriggerNuiEvent
  window.mockTriggerNuiEvents = mockTriggerNuiEvents
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
