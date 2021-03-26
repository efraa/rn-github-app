import { Appearance } from 'react-native'
import { readonly } from 'src/helpers/readonly'

export const deviceSettingsInitialState = readonly({
  appearance: {
    isDarkMode: Appearance.getColorScheme() === 'dark',
  },
  network: {
    isConnected: true,
  },
})

export type TDeviceSettingsState = typeof deviceSettingsInitialState
