import React from 'react'

import { UsersContainer } from 'src/containers/users-container'
import { useHeader } from 'src/hooks/use-header'
import { useLanguage } from 'src/providers/languages'

/**
 * Discover Screen
 * @todo In the future this screen may have other components such as a search,
 * at the moment it only renders the user's container but we can scale later.
 *
 * @author Efraa
 */
export const DiscoverScreen = () => {
  const { translate } = useLanguage()

  useHeader(translate('discoverTitle'))

  return <UsersContainer />
}
