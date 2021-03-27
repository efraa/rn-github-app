import { useQuery } from 'react-query'
import { getUser } from 'src/api/core/api-service'
import { selectors } from '../selectors'

export const useUser = (username: string, queryKey = 'user') =>
  useQuery([queryKey, username], async () => getUser(username), {
    select: selectors.user,
  })
