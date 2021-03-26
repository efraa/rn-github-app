import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as Localization from 'expo-localization'
import { TDefaultLangKey } from './translations'
import { handleLocalization } from './actions'
import { translate } from './translate'
import { defaultLanguage } from './constants'
import { AppState, AppStateStatus, Platform } from 'react-native'

export const LocalizationContext = React.createContext({
  translate,
  locale: defaultLanguage,
  setLocate: (() => {}) as React.Dispatch<Localization.Localization>,
})

/**
 * Localization Provider
 * @description Detect device language and set basic language settings
 * @author Efraa
 */
export const LocalizationProvider: React.FC = ({ children }) => {
  const appState = useRef(AppState.currentState)
  const [locale, setLocate] = useState(handleLocalization())

  const localization = useMemo(
    () => ({
      translate: (key: TDefaultLangKey, config?: any) =>
        translate(key, { locale: locale.locale, ...config }),
      locale,
      setLocate,
    }),
    [locale.locale]
  )

  useEffect(() => {
    AppState.addEventListener('change', handleAppStatechange)

    return () => {
      AppState.removeEventListener('change', handleAppStatechange)
    }
  }, [])

  /**
   * Localization state
   *
   * @description This API is mostly synchronous and driven by constants.
   * On iOS the constants will always be correct, on Android you should check if
   * the locale has updated using AppState and Localization.getLocalizationAsync().
   * Initially the constants will be correct on both platforms,
   * but on Android a user can change the language and return.
   *
   * @link https://docs.expo.io/versions/latest/sdk/localization/
   * @author Efraa
   */
  const handleAppStatechange = async (state: AppStateStatus) => {
    if (state === appState.current && Platform.OS === 'android') {
      const language = await Localization.getLocalizationAsync()

      if (!language.locale.includes(locale.locale))
        setLocate(handleLocalization(language))
    }
  }

  return <LocalizationContext.Provider value={localization} {...{ children }} />
}

export const useLanguage = () => useContext(LocalizationContext)
