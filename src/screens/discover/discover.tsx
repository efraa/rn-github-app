import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeContainer } from 'src/components/safe-container'
import { useNavigation } from 'src/hooks/use-navigation'
import { useLanguage } from 'src/providers/languages'
import { SCREENS } from 'src/providers/navigation/screens'

export const DiscoverScreen = () => {
  const { navigate } = useNavigation()
  const { translate } = useLanguage()

  return (
    <SafeContainer>
      <View>
        <Text>{translate('discoverTitle')}</Text>
        <TouchableOpacity onPress={() => navigate(SCREENS.filters)}>
          <Text>Go to Filters</Text>
        </TouchableOpacity>
      </View>
    </SafeContainer>
  )
}
