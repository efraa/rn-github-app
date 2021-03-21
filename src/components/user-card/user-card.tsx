import React, { memo } from 'react'
import { useNavigation } from 'src/hooks/use-navigation'
import { useLanguage } from 'src/providers/languages'
import { SCREENS } from 'src/providers/navigation/screens'
import { Container, Name, Picture, Text, Content } from './styles'

interface IUserCardProps {
  data: {
    picture: string
    username: string
    url: string
  }
}

export const UserCard: React.FC<IUserCardProps> = memo(
  ({ data: { picture, username, url } }) => {
    const { navigate } = useNavigation()
    const { translate } = useLanguage()

    return (
      <Container
        onPress={() => navigate(SCREENS.user, { picture, username, url })}
      >
        <Picture source={{ uri: picture }} />
        <Content>
          <Name>
            @{username} • {translate('github')}
          </Name>
          <Text>{url}</Text>
        </Content>
      </Container>
    )
  }
)
