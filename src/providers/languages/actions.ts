import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { defaultLanguage } from './constants'
import { translations } from './translations'
import { translate } from './translate'

export const parseLang = (locale: string) => String(locale.split('-')[0])

/**
 * Update Language
 * @description Remove the translated keys from the
 * cache and set the new language to i18n.
 * @author Efraa
 */
export const updateLanguage = (localization: Localization.Localization) => {
  translate.cache?.clear()
  const getLang = translations[parseLang(localization.locale)]

  i18n.translations = {
    [localization.locale]: getLang(),
  }
  i18n.locale = localization.locale

  return localization
}

/**
 * Handler Localization
 *
 * @description It uses the language established in the device in the
 * first instance, if it finds a supported language it will be selected,
 * otherwise, it will use the default language.
 *
 * @returns {Localization.Localization}
 * @author Efraa
 */
export const handleLocalization = (language?: Localization.Localization) => {
  const localization = () => {
    const isTranslate = translations[parseLang(Localization.locale)]

    return isTranslate ? Localization : defaultLanguage
  }

  return updateLanguage(language || localization())
}
