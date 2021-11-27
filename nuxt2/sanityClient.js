import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "0u3fubc7",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true
})
