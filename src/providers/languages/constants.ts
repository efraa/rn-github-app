import * as Localization from 'expo-localization'
import { readonly } from 'src/helpers/readonly'
import { TTranslateAttrs } from './translations'
import i18n from 'i18n-js'

export const defaultLanguage: Localization.Localization = readonly({
  locale: 'en',
  locales: ['en', 'en-US'],
  timezone: 'America/Los_Angeles',
  isRTL: false,
  region: 'US',
})

export const i18nTranslate: TTranslateAttrs = (key, c) => i18n.t(key, c)
export const mapper: TTranslateAttrs = (key, c) =>
  c ? `${c?.locale}.${key}` : key
