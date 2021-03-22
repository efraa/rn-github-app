import { RepositoryDTO } from '@api'
import React, { memo } from 'react'
import { useNavigation } from 'src/hooks/use-navigation'
import { useLanguage } from 'src/providers/languages'
import { SCREENS } from 'src/providers/navigation/constants'
import { BookSVG, StartSVG } from '../svg'
import {
  Name,
  Repo,
  Flex,
  Description,
  Badge,
  BadgeText,
  StarText,
} from './styles'

export const RepositoryCard: React.FC<{
  repo: RepositoryDTO
  username: string
}> = memo(({ repo, username }) => {
  const { translate } = useLanguage()
  const { navigate } = useNavigation()

  return (
    <Repo
      onPress={() =>
        navigate(SCREENS.repository, { repo: { ...repo, username } })
      }
    >
      <Flex>
        <BookSVG width="16px" height="20px" />
        <Name>{repo.name}</Name>
      </Flex>
      <Description>{repo.description ?? translate('reposText')}</Description>
      <Flex style={{ justifyContent: 'space-between' }}>
        <Badge>
          <BadgeText>{repo.language}</BadgeText>
        </Badge>
        <Flex>
          <StartSVG width="16px" />
          <StarText>{repo.stars}</StarText>
        </Flex>
      </Flex>
    </Repo>
  )
})
