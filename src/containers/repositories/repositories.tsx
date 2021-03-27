import { UserDTO } from '@api'
import React from 'react'
import { RepositoryCard } from 'src/components/repository-card'
import { Spinner } from 'src/components/spinner'
import { Content } from 'src/components/typographies/typographies'
import { useRepos } from 'src/api/hooks/queries/use-repos'
import { useLanguage } from 'src/providers/languages'
import { Container, ReposContainer } from './styles'

export const Repositories: React.FC<{ user: UserDTO }> = ({ user }) => {
  const { translate } = useLanguage()
  const { data: repos, isSuccess } = useRepos(user.username)

  const Repos = () => (
    <>
      {repos?.map(repo => (
        <RepositoryCard repo={repo} username={user.username} key={repo.name} />
      ))}
    </>
  )

  return (
    <Container>
      <Content title={translate('repos')} text={translate('reposText')} />
      <ReposContainer>{isSuccess ? <Repos /> : <Spinner />}</ReposContainer>
    </Container>
  )
}
