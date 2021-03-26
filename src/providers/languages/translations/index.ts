import { readonly } from 'src/helpers/readonly'
import defaultLangSource from './messages/english.json'

/**
 * Translations
 * @description An object that contains all translations
 * and is lazily loaded to avoid unnecessary use.
 * @readonly
 * @author Efraa
 */
export const translations = readonly({
  en: () => defaultLangSource,
  es: () => require('./messages/spanish.json'),
})

/**
 * Translations Type
 * @description Used to obtain the type and keys of the JSON files with the messages.
 * @throws NOTE: It is important to remember that the keys to your translations must be on the same level.
 * @author Efraa
 */
export type TDefaultLangSource = typeof defaultLangSource
export type TDefaultLangKey = keyof TDefaultLangSource
export type TTranslateAttrs = (key: TDefaultLangKey, config?: any) => string
