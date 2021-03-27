import { QueryClient, DefaultOptions } from 'react-query'
import { readonly } from 'src/helpers/readonly'

// 0.5 Hours
const DEFAULT_TIME = 1000 * 60 * 60 * 0.5

const onError = e => {
  if (__DEV__)
    console.error(e?.message ?? '[RT-QUERY]: An unexpected error occurred', e)
}

/**
 * React Query Options
 * @summary Set the config on all queries and mutations through the client.
 *
 * @author Efraa
 */
const defaultOptions: DefaultOptions = readonly({
  queries: {
    cacheTime: DEFAULT_TIME,
    staleTime: DEFAULT_TIME,
    retry: 1,
    refetchOnWindowFocus: false,
    notifyOnChangeProps: ['data', 'error'],
    onError,
  },
  mutations: {
    onError,
  },
})

export const queryClient = new QueryClient({ defaultOptions })
