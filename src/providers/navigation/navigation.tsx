import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import { RootNavigator } from './stacks/root-stack'
import { useDevice } from 'src/hooks/use-device'
import { NoInternetScreen } from 'src/screens/empty-states'

export const Navigation = () => {
  const {
    network: { isConnected },
  } = useDevice()

  return (
    <NavigationContainer>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {isConnected ? <RootNavigator /> : <NoInternetScreen />}
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
