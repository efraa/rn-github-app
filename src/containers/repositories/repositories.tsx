import { UserDTO } from '@api'
import React from 'react'
import { RepositoryCard } from 'src/components/repository-card'
import { Spinner } from 'src/components/spinner'
import { Content } from 'src/components/typographies/typographies'
import { useRepos } from 'src/hooks/api/use-repos'
import { useLanguage } from 'src/providers/languages'
import { Container, ReposContainer } from './styles'

export const Repositories: React.FC<{ user: UserDTO }> = ({ user }) => {
  const { translate } = useLanguage()
  const { data: repos, isSuccess } = useRepos(user.username)

  return (
    <Container>
      <Content title={translate('repos')} text={translate('reposText')} />
      <ReposContainer>
        {isSuccess ? (
          repos?.map(repo => <RepositoryCard repo={repo} key={repo.name} />)
        ) : (
          <Spinner />
        )}
      </ReposContainer>
    </Container>
  )
}
