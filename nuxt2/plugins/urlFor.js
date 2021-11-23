import urlBuilder from "@sanity/image-url"

export default ({ $sanity }, inject) => {
  const builder = urlBuilder($sanity.config)
  function urlFor(source) {
    return builder.image(source)
  }
  inject("urlFor", urlFor)
}
