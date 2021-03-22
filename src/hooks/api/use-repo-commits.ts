import { useQuery } from 'react-query'
import { getCommits } from 'src/api/api-service'
import { REACT_QUERY_BASE_CONFIG } from './hooks-base-config'

export const useCommits = (
  username: string,
  repo: string,
  queryKey = 'commits'
) =>
  useQuery(
    [queryKey, username, repo],
    async () => getCommits(username, repo),
    REACT_QUERY_BASE_CONFIG
  )
