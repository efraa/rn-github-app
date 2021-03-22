import { UserDTO } from '@api'
import { useRoute } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { useDefaultHeader } from 'src/components/header/header'
import { ProfileHeader } from 'src/components/profile-header'
import { ScreenContainer } from 'src/components/screen-container'
import { Spinner } from 'src/components/spinner'
import { Repositories } from 'src/containers/repositories'
import { useUser } from 'src/hooks/api/use-user'
import { useNavigation } from 'src/hooks/use-navigation'
import { SCREENS } from 'src/providers/navigation/constants'

export const UserScreen = () => {
  const {
    params: { username },
  }: any = useRoute()
  const { navigate } = useNavigation()

  useLayoutEffect(() => {
    if (!username) navigate(SCREENS.discover)
  }, [])

  useDefaultHeader(username)

  const { data: user, isSuccess } = useUser(username)

  const User = () => (
    <ScreenContainer>
      <ProfileHeader user={user as UserDTO} />
      <Repositories user={user as UserDTO} />
    </ScreenContainer>
  )

  return isSuccess ? <User /> : <Spinner />
}
