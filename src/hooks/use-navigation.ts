import { SCREENS } from '../providers/navigation/constants'
import { useNavigation as useRNavigation } from '@react-navigation/native'

export const useNavigation = () => {
  const { navigate } = useRNavigation()

  const navigateFromModal = (
    screen: SCREENS,
    params?: { [key: string]: any }
  ) => navigate(SCREENS.appStack, { screen, ...params })

  return {
    navigate,
    navigateFromModal,
  }
}
