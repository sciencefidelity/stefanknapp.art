import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? "",
  dataset: import.meta.env.VITE_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION ?? "",
  useCdn: true
})
