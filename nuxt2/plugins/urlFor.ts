import urlBuilder from "@sanity/image-url"
import sanityClient from "@/sanityClient"

export default (inject: any) => {
  const builder = urlBuilder(sanityClient)
  function urlFor(source: any) {
    return builder.image(source)
  }
  inject("urlFor", urlFor)
}
