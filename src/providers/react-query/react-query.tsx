import React from 'react'
import { LogBox } from 'react-native'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './query-client'

/**
 * @throws Setting a timer for a long period of time...
 *
 * @description Setting a timer for a long period of time, i.e. multiple minutes,
 * is a performance and correctness issue on Android as it keeps the timer module awake,
 * and timers can only be called when the app is in the foreground.
 *
 * In the case of react-query, this is related to cacheTime. It does not affect your application,
 * since garbage collection occurs if you have the application in the foreground.
 *
 * @link https://github.com/facebook/react-native/issues/12981
 */
LogBox.ignoreLogs(['Setting a timer'])

/**
 * Query Provider
 * @description It makes fetching, caching, synchronizing and updating
 * server state in your React applications a breeze.
 *
 * @link https://react-query.tanstack.com/overview
 */
export const QueryProvider = props => (
  <QueryClientProvider {...props} client={queryClient} />
)
