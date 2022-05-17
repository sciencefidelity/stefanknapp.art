import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "./sanityClient"
import { Image } from "./interfaces"

export const urlFor = (source: Image) => {
  return imageUrlBuilder(sanityClient).image(source)
}
