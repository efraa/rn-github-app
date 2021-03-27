import { UserDTO } from '@api'
import { useRoute } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { ProfileHeader } from 'src/components/profile-header'
import { ScreenContainer } from 'src/components/screen-container'
import { Spinner } from 'src/components/spinner'
import { Repositories } from 'src/containers/repositories'
import { useUser } from 'src/api/hooks/queries/use-user'
import { useHeader } from 'src/hooks/use-header'
import { useNavigation } from 'src/hooks/use-navigation'

export const UserScreen = () => {
  const {
    params: { username },
  }: any = useRoute()
  const { goBack } = useNavigation()

  useLayoutEffect(() => {
    if (!username) goBack()
  }, [])

  useHeader({ title: username })

  const { data: user, isSuccess } = useUser(username)

  const User = () => (
    <ScreenContainer>
      <ProfileHeader user={user as UserDTO} />
      <Repositories user={user as UserDTO} />
    </ScreenContainer>
  )

  return isSuccess ? <User /> : <Spinner />
}
