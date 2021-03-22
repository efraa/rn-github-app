import { useQuery } from 'react-query'
import { getRepos } from 'src/api/api-service'
import { REACT_QUERY_BASE_CONFIG } from './hooks-base-config'

export const useRepos = (username: string, queryKey = 'repos') =>
  useQuery(
    [queryKey, username],
    async () => getRepos(username),
    REACT_QUERY_BASE_CONFIG
  )
