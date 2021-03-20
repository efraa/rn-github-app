import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { registerRootComponent } from 'expo'

// App Providers
import { StyledProvider } from './providers/styles'
import { DeviceProvider } from './providers/device'
import { LocalizationProvider, useLanguage } from './providers/languages'

// Tests
import styled from 'styled-components/native'

const TextStyled = styled.Text`
  color: ${({ theme: { colors } }) => colors.defaultTextColor};
  font-family: ${({ theme: { fonts } }) => fonts.family};
  font-size: ${({ theme: { fonts } }) => fonts.sizes.title};
`

const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const App = () => (
  <LocalizationProvider>
    <DeviceProvider>
      <StatusBar style="dark" />
      <StyledProvider>
        <ViewStyled>
          <Text />
        </ViewStyled>
      </StyledProvider>
    </DeviceProvider>
  </LocalizationProvider>
)

const Text = () => {
  const { translate } = useLanguage()

  return <TextStyled>{translate('discoverTitle')}</TextStyled>
}

export default registerRootComponent(App)
