import React from 'react'
import { Content } from 'src/components/typographies/typographies'
import { useLanguage } from 'src/providers/languages'

export const FiltersScreen = () => {
  const { translate } = useLanguage()

  return (
    <Content
      title={translate('filtersTitle')}
      text={translate('filtersText')}
    />
  )
}
