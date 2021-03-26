import { StackNavigationOptions as Options } from '@react-navigation/stack'
import React, { useLayoutEffect } from 'react'
import { readonly } from 'src/helpers/readonly'
import { useNavigation as useRNavigation } from '@react-navigation/core'
import { FilterButton } from 'src/components/filter-button'
import { Heading } from 'src/components/typographies'

export const headerOptions = (title: string) =>
  readonly({
    headerLeftContainerStyle: {
      paddingLeft: 12,
    },
    headerRightContainerStyle: {
      paddingRight: 12,
    },
    title: '',
    headerRight: () => <FilterButton />,
    headerLeft: () => <Heading>{title}</Heading>,
  } as Options)

/**
 * use Header Hook
 * @description Update component and settings of react-navigation,
 * allowing you to render a new header before mounting your screens.
 * @param {Options} conf The title or new config you want to add to your screen.
 *
 * @author Efraa
 */
export const useHeader = (conf: Options | string) => {
  const { setOptions } = useRNavigation()
  const opts: Options =
    typeof conf === 'object' ? conf : headerOptions(conf as string)

  useLayoutEffect(() => {
    setOptions(opts)
  }, [])

  return {
    setOptions,
  }
}
