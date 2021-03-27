import { CommitDTO, IListOfUsers, RepositoryDTO, UserDTO } from '@api'
import { readonly } from 'src/helpers/readonly'

const user = (user: UserDTO) => user

const users = (users: IListOfUsers) => users

const repos = (repos: RepositoryDTO[]) => repos

const commits = (commits: CommitDTO[]) => commits

/**
 * Query Data Selectors
 *
 * @description The useQuery and useInfiniteQuery hooks now have
 * a select option to select or transform parts of the query result.
 *
 *
 * Set the notifyOnChangeProps option to ['data', 'error'] to
 * only re-render when the selected data changes.
 *
 * @link https://react-query.tanstack.com/guides/migrating-to-react-query-3#query-data-selectors
 *
 * @author Efraa
 */
export const selectors = readonly({
  user,
  users,
  repos,
  commits,
})
