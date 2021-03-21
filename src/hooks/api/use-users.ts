import { useInfiniteQuery } from 'react-query'
import { getUsers } from 'src/api/api-service'
import { IListOfUsers } from '@api'
import { REACT_QUERY_BASE_CONFIG } from './hooks-base-config'

/**
 * use Users Hook
 * @description Get the users paged, cache and format the data output.
 *
 * @link https://react-query.tanstack.com/guides/infinite-queries
 * @author Efraa
 */
export const useUsers = (perPage?: number, queryKey = 'users') => {
  const { data, ...opts } = useInfiniteQuery(
    queryKey,
    async ({ pageParam = 0 }) => getUsers(perPage, pageParam),
    {
      ...REACT_QUERY_BASE_CONFIG,
      getNextPageParam: state => Number(state.pop()?.id) + 1 ?? false,
    }
  )

  /**
   * Users list
   * @description React-query returns the data in each iteration under a page key,
   * but in our UI we need to have a single list of users, so I use flat to concatenate the arrays.
   * @author Efraa
   */
  const users: IListOfUsers = data?.pages.flat(Infinity) as any

  return {
    ...opts,
    users,
  }
}
