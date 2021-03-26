declare module '@api' {
  export interface IUserFromList {
    id: number
    username: string
    picture: string
    url: string
  }

  export type IListOfUsers = IUserFromList[]

  export interface CommitDTO {
    id: number
    message: string
  }

  export interface RepositoryDTO {
    id: number
    name: string
    description: string
    language: string
    stars: number
    branch: string
  }

  export interface UserDTO {
    id: number
    username: string
    picture: string
    bio: string
    name: string
    following: number
    repos: number
  }

  export type TListMapper = { [key: string]: any }[]
}
