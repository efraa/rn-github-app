import { useQuery } from 'react-query'
import { getUser } from 'src/api/api-service'
import { REACT_QUERY_BASE_CONFIG } from './hooks-base-config'

export const useUser = (username: string, queryKey = 'user') =>
  useQuery(
    [queryKey, username],
    async () => getUser(username),
    REACT_QUERY_BASE_CONFIG
  )
