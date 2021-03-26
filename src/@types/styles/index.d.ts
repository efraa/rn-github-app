import { stylesGuide } from 'src/providers/styles'
import { DefaultTheme } from 'styled-components/native'

/**
 * @description Extend the default types of the styled-components theme
 * to add IntelliSense support and get the types in the use of styled-components.
 * @module StyledComponents
 * @author Efraa
 */
declare module 'styled-components' {
  type Theme = typeof stylesGuide
  export interface DefaultTheme extends Theme {
    [key: string]: any
  }
}
