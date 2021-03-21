import React from 'react'
import { View, Text } from 'react-native'
import { useDefaultHeader } from 'src/components/header/header'
import { useLanguage } from 'src/providers/languages'

export const UserScreen = () => {
  useDefaultHeader('efra')

  const { translate } = useLanguage()

  return (
    <View>
      <Text></Text>
    </View>
  )
}
