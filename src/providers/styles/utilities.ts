import { deviceDimensions } from '../../helpers/device-dimensions'

/**
 * Size @constant
 * @description Use to set the size of @module styled-components and normalize them to device size.
 */
export const size = (n: number) => `${deviceDimensions(n)}px`

/**
 * Parse Size @constant
 * @description Use it to format the pixels to a whole @type {number}, useful for stylesheet.
 */
export const parseSize = (size: string) =>
  deviceDimensions(Number(size.split('px')[0]))
