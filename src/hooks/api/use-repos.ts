import { useQuery } from 'react-query'
import { getRepos } from 'src/api/api-service'

export const useRepos = (username: string, queryKey = 'repos') =>
  useQuery([queryKey, username], async () => getRepos(username))
