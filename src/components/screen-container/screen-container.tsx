import React, { memo } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export const ScreenContainer = memo(p => (
  <ScrollView bounces={false} showsVerticalScrollIndicator={false} {...p} />
))
