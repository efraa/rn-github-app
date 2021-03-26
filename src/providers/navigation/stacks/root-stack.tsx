import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DEFAULT_SCREENS_OPTIONS, SCREENS } from '../constants'
import { AppNavigator } from './app-stack'

// Screens
import { FiltersScreen } from 'src/screens/filters'
import { RepositoryScreen } from 'src/screens/repository'

const { Navigator, Screen } = createStackNavigator()

/**
 * Modal Navigator
 * @description Group all screens with modal styles.
 * @example https://reactnavigation.org/docs/modal
 */
const ModalScreens = () => (
  <>
    <Screen name={SCREENS.filters} component={FiltersScreen}></Screen>
    <Screen name={SCREENS.repository} component={RepositoryScreen}></Screen>
  </>
)

export const RootNavigator = () => (
  <Navigator
    mode="modal"
    initialRouteName={SCREENS.appStack}
    screenOptions={{
      ...DEFAULT_SCREENS_OPTIONS,
      headerShown: false,
    }}
  >
    <Screen name={SCREENS.appStack} component={AppNavigator} />
    {ModalScreens()}
  </Navigator>
)
