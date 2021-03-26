import { useQuery } from 'react-query'
import { getCommits } from 'src/api/api-service'

export const useCommits = (
  username: string,
  repo: string,
  queryKey = 'commits'
) =>
  useQuery([queryKey, username, repo], async () => getCommits(username, repo))
