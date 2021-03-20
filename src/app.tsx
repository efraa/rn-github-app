import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { registerRootComponent } from 'expo'

// App Providers
import { StyledProvider } from './providers/styles'
import { DeviceProvider } from './providers/device'

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
  <DeviceProvider>
    <StyledProvider>
      <ViewStyled>
        <TextStyled>Github App!</TextStyled>
        <StatusBar style="dark" />
      </ViewStyled>
    </StyledProvider>
  </DeviceProvider>
)

export default registerRootComponent(App)
