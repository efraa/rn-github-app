import { Dimensions, Platform, PixelRatio } from 'react-native'
import { readonly } from './readonly'

type IBased = 'width' | 'height'

/**
 * Min Dimensions @constant
 * @readonly
 * @description Dimensions of the iPhone 6, 7 and 8.
 * @author Efraa
 */
const minDimensions = readonly({
  with: 375,
  height: 667,
})

const { width, height } = Dimensions.get('window')

const scale = readonly({
  w: width / minDimensions.with,
  h: height / minDimensions.height,
})

const operations = readonly({
  output: (n: number) => Math.round(PixelRatio.roundToNearestPixel(n)),
  size: (s: number, based: IBased) =>
    based === 'height' ? s * scale.h : s * scale.w,
})

/**
 * Use it to standardize font sizes, paddings, and margins by device.
 * @function deviceDimensions
 * @description Adapt a value based on the width or height of the screen
 * so that you can use it for width, height, top, fontSize, borderRadius, etc...
 * @author Efraa
 */
export function deviceDimensions(size: number, based: IBased = 'width') {
  const newSize = operations.output(operations.size(size, based))

  return newSize
}
