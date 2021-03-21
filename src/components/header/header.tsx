import { StackNavigationOptions } from '@react-navigation/stack'
import React, { memo, useLayoutEffect } from 'react'
import { View } from 'react-native'
import { readonly } from 'src/helpers/readonly'
import { useNavigation } from 'src/hooks/use-navigation'
import { useNavigation as useRNavigation } from '@react-navigation/core'
import { SCREENS } from 'src/providers/navigation/screens'
import { FilterSVG } from '../svg'
import { Title as StyledTitle, FilterButton as StyledFilter } from './styles'

export const FilterButton = memo(() => {
  const { navigate } = useNavigation()

  return (
    <StyledFilter onPress={() => navigate(SCREENS.filters)}>
      <View>
        <FilterSVG />
      </View>
    </StyledFilter>
  )
})

export const Title = memo(({ title }: { title: string }) => (
  <StyledTitle>{title}</StyledTitle>
))

export const headerOptions = readonly({
  headerStyle: {
    shadowColor: 'transparent',
  },
  headerLeftContainerStyle: {
    paddingLeft: 12,
  },
  headerRightContainerStyle: {
    paddingRight: 12,
  },
  title: '',
  headerRight: () => <FilterButton />,
} as StackNavigationOptions)

/**
 * use Header Hook
 * @description Update component and settings of react-navigation,
 * allowing you to render a new header before mounting your screens.
 * @param {string} title The new title you want to add to your screen.
 *
 * @author Efraa
 */
export const useHeader = (title: string) => {
  const { setOptions } = useRNavigation()

  useLayoutEffect(() => {
    setOptions({
      ...headerOptions,
      headerLeft: () => <Title title={title} />,
    } as StackNavigationOptions)
  }, [])

  return {
    setOptions,
  }
}
