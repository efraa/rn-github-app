import {
  CommitDTO,
  IListOfUsers,
  RepositoryDTO,
  TListMapper,
  UserDTO,
} from '@api'
import { readonly } from 'src/helpers/readonly'

/**
 * Users Mapper
 * @param {TListMapper} collection API response with data from all users.
 * @returns {IListOfUsers} List of objects formatted
 *
 * @author Efraa
 */
export const usersMapper = (collection: TListMapper) => {
  const mapped: IListOfUsers = collection.map(user => ({
    id: user.id,
    username: user.login,
    picture: user.avatar_url,
    url: user.html_url,
  })) as any

  return mapped
}

export const userMapper = (user: any): UserDTO => {
  const mapped: UserDTO = readonly({
    id: user?.id,
    username: user?.login,
    picture: user?.avatar_url,
    following: user?.following,
    repos: user?.public_repos,
    bio: user?.bio ?? user?.company ?? user?.location,
    name: user?.name,
  })

  return mapped
}

export const reposMapper = (collection: TListMapper) => {
  const mapped: RepositoryDTO[] = collection.map(repo => ({
    id: repo?.id,
    name: repo?.name,
    description: repo?.description,
    language: repo?.language ?? repo?.default_branch,
    stars: repo?.stargazers_count ?? 0,
    branch: repo?.default_branch,
  })) as any

  return mapped
}

export const commitsMapper = (collection: TListMapper): CommitDTO[] =>
  collection.map(commit => ({
    id: commit?.sha,
    message: commit?.commit?.message,
  })) as any
