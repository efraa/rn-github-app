import { useQuery } from 'react-query'
import { getUser } from 'src/api/api-service'

export const useUser = (username: string, queryKey = 'user') =>
  useQuery([queryKey, username], async () => getUser(username))
