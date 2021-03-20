import { readonly } from '../../helpers/readonly'
import { size, parseSize } from './utilities'

/**
 * Colors @constant {object}
 * @readonly
 * @description Use it for any color property or backgrounds, it should not have loose colors.
 */
const palette = readonly({
  purple: '#6647F4',
  black: '#15202B',
  gray: '#8899A6',
  grayLight: '#F5F8FA',
  white: '#FFFFFF',
})

const colors = readonly({
  ...palette,
  primary: palette.black,
  secondary: palette.purple,
  defaultTextColor: palette.black,
})

/**
 * Font sizes @constant {object}
 * @readonly
 * @description Use it for any text in the project and keep it consistent.
 */
const fontSizes = readonly({
  title: size(22),
  subtitle: size(16),
  text: size(12),
  small: size(10),
})

const fonts = readonly({
  sizes: fontSizes,
  family: 'poppinsBold',
  weight: readonly({
    regular: 400,
    medium: 500,
    bold: 700,
  }),
})

/**
 * Gaps @constant {object}
 * @readonly
 * @description Use for padding, margins, or anything you need to set spaces between elements.
 */
const gaps = readonly({
  small: size(8),
  normal: size(16),
  large: size(24),
  extraLarge: size(32),
  big: size(42),
  extraBig: size(52),
})

/**
 * Styles Guide @constant {object}
 * @readonly
 * @description UX-based project style guide used to extend the
 * @type {DefaultTheme} type from the @module styled-components library.
 * @author Efraa
 */
export const stylesGuide = readonly({
  colors,
  fonts,
  gaps,
  utils: {
    parseSize,
    size,
    readonly,
  },
})
