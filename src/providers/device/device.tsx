import React, { useState, useEffect, createContext, useMemo } from 'react'
import { deviceSettingsInitialState, TDeviceSettingsState } from './state'
import { useColorScheme } from 'react-native'
import { useNetwork } from 'src/hooks/use-network'

export const DeviceContext = createContext<TDeviceSettingsState>(
  deviceSettingsInitialState
)

/**
 * Device Provider
 * @description Provides device settings to the whole application,
 * appearance, internet connection, and other stuff...
 * @author Efraa
 */
export const DeviceProvider: React.FC = props => {
  const [data, setData] = useState(deviceSettingsInitialState)
  const { isConnected } = useNetwork()
  const scheme = useColorScheme()

  useEffect(() => {
    const appearance = { isDarkMode: scheme === 'dark' }

    setData(state => ({
      ...state,
      network: { isConnected },
      appearance,
    }))
  }, [isConnected, scheme])

  return (
    <DeviceContext.Provider
      value={useMemo(() => data, [isConnected])}
      {...props}
    />
  )
}
