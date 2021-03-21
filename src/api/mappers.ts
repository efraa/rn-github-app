import { IListOfUsers, TUsersMapper } from '@api'

/**
 * Users Mapper
 * @param {TUsersMapper} collection API response with data from all users.
 * @returns {IListOfUsers} List of objects formatted
 *
 * @author Efraa
 */
export const usersMapper = (collection: TUsersMapper) => {
  const mapped: IListOfUsers = collection.map(user => ({
    id: user.id,
    username: user.login,
    picture: user.avatar_url,
    url: user.html_url,
  })) as any

  return mapped
}
