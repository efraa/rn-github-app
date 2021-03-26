import { IUserFromList } from '@api'
import React, { useMemo } from 'react'
import { Spinner } from 'src/components/spinner'
import { Text } from 'src/components/typographies'
import { UserCard } from 'src/components/user-card'
import { useUsers } from 'src/hooks/api/use-users'
import { useLanguage } from 'src/providers/languages'
import { Container } from './styles'

export const UsersContainer = () => {
  const { users, fetchNextPage, isSuccess } = useUsers()
  const { translate } = useLanguage()

  const HelpMessage = () => <Text>{translate('discoverText')}</Text>

  const renderItem = useMemo(
    () => ({ item }) => <UserCard data={item as IUserFromList} />,
    [users]
  )

  return isSuccess ? (
    <Container
      data={users}
      renderItem={renderItem}
      keyExtractor={item => (item as IUserFromList).username}
      onEndReached={() => fetchNextPage()}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={HelpMessage}
      bounces={false}
      removeClippedSubviews={true}
    />
  ) : (
    <Spinner />
  )
}
