import { i18nTranslate, mapper } from './constants'
import { memoize } from './memoize'

export const translate = memoize(i18nTranslate, mapper)
