import { TTranslateAttrs } from './translations'

type TMemoized = TTranslateAttrs & { cache?: Map<any, any> }

/**
 * Memoize Translations
 * @description Creates a function that memoizes the result of `fn`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `fn`
 * is invoked with the `this` binding of the memoized function.
 *
 * @param {Function} [fn] The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @author Efraa
 */
export const memoize = (fn: TTranslateAttrs, resolver?: TTranslateAttrs) => {
  const cache = new Map()
  const memoized: TMemoized = function (this: any, _key, config) {
    const key = resolver ? resolver.call(this, _key, config) : _key

    const set = () =>
      cache.set(key, fn.call(this, _key, config)) && cache.get(key)

    return cache.has(key) ? cache.get(key) : set()
  }

  memoized.cache = cache
  return memoized
}
