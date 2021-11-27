import urlBuilder from "@sanity/image-url"
import sanityClient from "../sanityClient"

export default ({}, inject) => {
  const builder = urlBuilder(sanityClient)
  function urlFor(source) {
    return builder.image(source)
  }
  inject("urlFor", urlFor)
}
