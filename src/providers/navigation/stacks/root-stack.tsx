import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
  StackNavigationOptions,
} from '@react-navigation/stack'
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

/**
 * Modal Presentation > IOS 13.x
 *
 * @description In the new version of react-navigation 6.0-next,
 * The modals in stack now use the presentation style on iOS by default,
 * and there's a new slide animation for modals on Android.
 *
 * @link https://reactnavigation.org/blog/2021/03/12/react-navigation-6.0-next
 *
 * @todo The new version is not official yet, I must change this when it is.
 * @since New beta release -> March 13, 2021
 */
const modalPresentationIOS = ({
  route,
  navigation,
}): StackNavigationOptions => ({
  ...DEFAULT_SCREENS_OPTIONS,
  headerShown: false,
  gestureEnabled: true,
  cardOverlayEnabled: true,
  headerStatusBarHeight:
    navigation.dangerouslyGetState().routes.indexOf(route) > 0 ? 0 : undefined,
  ...TransitionPresets.ModalPresentationIOS,
})

export const RootNavigator = () => (
  <Navigator
    mode="modal"
    initialRouteName={SCREENS.appStack}
    screenOptions={modalPresentationIOS}
  >
    <Screen name={SCREENS.appStack} component={AppNavigator} />
    {ModalScreens()}
  </Navigator>
)
