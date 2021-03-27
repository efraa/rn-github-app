import { useQuery } from 'react-query'
import { getCommits } from 'src/api/core/api-service'
import { selectors } from '../selectors'

export const useCommits = (
  username: string,
  repo: string,
  queryKey = 'commits'
) =>
  useQuery([queryKey, username, repo], async () => getCommits(username, repo), {
    select: selectors.commits,
  })
