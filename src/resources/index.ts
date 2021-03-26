import { readonly } from 'src/helpers/readonly'

export const fonts = () =>
  readonly({
    poppinsBold: require('./fonts/poppins-bold.ttf'),
    poppinsMedium: require('./fonts/poppins-medium.ttf'),
    poppinsRegular: require('./fonts/poppins-regular.ttf'),
  })

export const images = readonly({
  noConnection: () => require('./images/empty-states/no-connection.svg'),
})

/**
 * Resources
 * @readonly
 * @description Export all resources using lazy loading on a single object
 * @author Efraa
 */
export const resources = readonly({
  images,
  fonts,
})
