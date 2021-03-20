import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SCREENS } from '../screens'

// Screens
import { DiscoverScreen } from 'src/screens/discover'
import { UserScreen } from 'src/screens/user'

const { Navigator, Screen } = createStackNavigator()

/**
 * App Navigator
 * @description Group all screens with card styles.
 * @example https://reactnavigation.org/docs/modal
 */
export const AppNavigator = () => (
  <Navigator
    screenOptions={{ headerBackTitleVisible: false }}
    initialRouteName={SCREENS.discover}
  >
    <Screen
      name={SCREENS.discover}
      options={{ headerShown: false }}
      component={DiscoverScreen}
    ></Screen>
    <Screen name={SCREENS.user} component={UserScreen}></Screen>
  </Navigator>
)
