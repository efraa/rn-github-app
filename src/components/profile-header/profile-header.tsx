import { UserDTO } from '@api'
import React from 'react'
import { useLanguage } from 'src/providers/languages'
import {
  Content,
  Counters,
  Picture,
  Counter,
  CounterLabel,
  CounterNumber,
  ProfileInfo,
  ProfileContent,
  Username,
  Bio,
  Name,
} from './styles'

export const ProfileHeader: React.FC<{ user: UserDTO }> = ({
  user: { picture, following, repos, name, bio, username },
}) => {
  const { translate } = useLanguage()

  return (
    <Content>
      <ProfileContent>
        <Picture source={{ uri: picture }} />
        <Counters>
          <Counter>
            <CounterNumber>{following}</CounterNumber>
            <CounterLabel>{translate('following')}</CounterLabel>
          </Counter>
          <Counter>
            <CounterNumber>{repos}</CounterNumber>
            <CounterLabel>{translate('repos')}</CounterLabel>
          </Counter>
        </Counters>
      </ProfileContent>
      <ProfileInfo>
        <Name>{name}</Name>
        <Username>@{username}</Username>
        <Bio>{bio}</Bio>
      </ProfileInfo>
    </Content>
  )
}
