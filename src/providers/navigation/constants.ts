import { StackNavigationOptions } from '@react-navigation/stack'
import { readonly } from 'src/helpers/readonly'

export enum SCREENS {
  appStack = 'app.main.stack',
  discover = 'app.discover',
  filters = 'app.modal.filters',
  user = 'app.user',
  repository = 'app.modal.repository',
  noInternet = 'app.internet.connection',
}

export const DEFAULT_SCREENS_OPTIONS = readonly({
  headerBackTitleVisible: false,
  cardStyle: { backgroundColor: 'white' },
  headerStyle: {
    shadowColor: 'transparent',
  },
} as StackNavigationOptions)
