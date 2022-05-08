import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "0u3fubc7",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? "2022-03-05",
  useCdn: true
})
