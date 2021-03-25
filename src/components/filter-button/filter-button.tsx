import React, { memo } from 'react'
import { useNavigation } from 'src/hooks/use-navigation'
import { SCREENS } from 'src/providers/navigation/constants'
import { FilterSVG } from '../svg'
import { StyledFilter } from './styles'

export const FilterButton = memo(() => {
  const { navigate } = useNavigation()

  return (
    <StyledFilter onPress={() => navigate(SCREENS.filters)}>
      <FilterSVG />
    </StyledFilter>
  )
})
