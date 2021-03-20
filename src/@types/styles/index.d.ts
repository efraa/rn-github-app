import { stylesGuide } from 'src/providers/styles'
import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  type Theme = typeof stylesGuide
  export interface DefaultTheme extends Theme {
    app?: string
  }
}
