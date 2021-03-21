import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

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
