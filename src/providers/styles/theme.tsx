import React, { ReactNode, FC } from 'react'
import { useFonts } from 'expo-font'
import { fonts } from 'src/resources'
import { ThemeProvider } from 'styled-components/native'
import { stylesGuide } from './styles-guide'
import { Spinner } from 'src/components/spinner'

export const StyledProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [fontsLoaded] = useFonts(fonts())

  return fontsLoaded ? (
    <ThemeProvider theme={stylesGuide} {...{ children }} />
  ) : (
    <Spinner />
  )
}
