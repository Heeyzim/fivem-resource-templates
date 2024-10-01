import React from 'react'
import { useConfig } from './hooks/use-config'
import { useNuiEvent } from './hooks/useNuiEvent'
import { Theme } from './themes/themes'

if (window.mockTriggerNuiEvent) {
  window.mockTriggerNuiEvent({ action: 'setVisible', data: false })
}

const App: React.FC = () => {
  const [config, setConfig] = useConfig()
  useNuiEvent<Theme['name']>('updateTheme', (theme) => {
    setConfig({
      ...config,
      theme,
    })
  })

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1>Hello World</h1>
    </div>
  )
}

export default App
