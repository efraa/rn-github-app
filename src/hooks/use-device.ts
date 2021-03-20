import { useContext } from 'react'
import { DeviceContext } from '../providers/device'

/**
 * Device Hook
 * @description Provides device settings to the whole application,
 * appearance, internet connection, and other stuff...
 *
 * @summary Use for styles, adapt components to the default theme,
 * or avoid API calls when you don't have internet.
 * @example You can use
 * const { network: { isConnected }, appearance: { isDarkMode } } = useDevice()
 */
export const useDevice = () => useContext(DeviceContext)
