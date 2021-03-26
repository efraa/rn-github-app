import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { registerRootComponent } from 'expo'

// App Providers
import { StyledProvider } from './providers/styles'
import { DeviceProvider } from './providers/device'
import { LocalizationProvider } from './providers/languages'
import { Navigation } from './providers/navigation'
import { QueryProvider } from './providers/react-query'

const App = () => (
  <LocalizationProvider>
    <DeviceProvider>
      <StatusBar style="dark" />
      <StyledProvider>
        <QueryProvider>
          <Navigation />
        </QueryProvider>
      </StyledProvider>
    </DeviceProvider>
  </LocalizationProvider>
)

export default registerRootComponent(App)
