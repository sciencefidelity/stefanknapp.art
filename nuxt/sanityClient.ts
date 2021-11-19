import sanityClient from "@sanity/client"
// const config = useRuntimeConfig()

export default sanityClient({
  projectId: "0u3fubc7",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true
})
