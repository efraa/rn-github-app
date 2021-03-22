import React, { useLayoutEffect, useMemo } from 'react'
import { useRoute } from '@react-navigation/core'
import { useNavigation } from 'src/hooks/use-navigation'
import { useCommits } from 'src/hooks/api/use-repo-commits'
import { Spinner } from 'src/components/spinner'
import { Content, Heading } from 'src/components/typographies/typographies'
import { useLanguage } from 'src/providers/languages'
import { Container, CommitsContent } from './styles'
import { CommitCard } from 'src/components/commit-card'
import { FlatList } from 'react-native-gesture-handler'
import { CommitDTO } from '@api'

export const RepositoryScreen = () => {
  const {
    params: { repo },
  }: any = useRoute()

  const { goBack } = useNavigation()
  const { translate } = useLanguage()

  useLayoutEffect(() => {
    if (!repo?.name || !repo?.username) goBack()
  }, [])

  const { data: commits, isSuccess } = useCommits(repo?.username, repo?.name)

  const renderItem = useMemo(
    () => ({ item }) => <CommitCard id={item.id} message={item.message} />,
    [commits]
  )

  const Commits = () => (
    <>
      <Heading>{translate('reposCommits')}</Heading>
      <CommitsContent>
        <FlatList
          data={commits}
          renderItem={renderItem}
          keyExtractor={item => String((item as CommitDTO).id)}
          bounces={false}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
        />
      </CommitsContent>
    </>
  )

  const Repository = () => (
    <Container>
      <Content
        title={repo?.name}
        text={repo?.description ?? translate('reposText')}
      />
      <Commits />
    </Container>
  )

  return isSuccess ? <Repository /> : <Spinner />
}
