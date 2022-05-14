import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
const locales = "en, pl"
const slug = "slug.current"
const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`
const seoFields = "description, image, title"
const seo = `
  facebook{ ${seoFields} }, twitter{ ${seoFields} }
  meta{ canonicalURL, description, title }
`
const pageFields = `__i18n_lang, _id, ${body}, ${slug}, ${seo} title`

const artworks = `
  "artworks": *[_type == "artwork" && ${omitDrafts}].artwork[]{
    _key, date, display, image, "medium": medium->.title{ ${locales} }, title
  }
`

const labels = `
  "labels": *[_type == "labelGroup" && ${omitDrafts}].labels[]{
    key, text{ ${locales} }
  }
`

const navigation = `
  "navigation": *[_type == "navigation" && ${omitDrafts}][0].primary[]{
    _key, label{ ${locales} },
    url->{ "en": ${slug}, "pl": __i18n_refs[0]->.${slug} }
  }
`

const pages = `
  "page": *[_type == "page" && __i18n_lang == "en" && ${omitDrafts}]{
    ${pageFields}, __i18n_refs[0]->{ ${pageFields} }
  }
`

const photography = `
  "photography": *[_type == "photography" && ${omitDrafts}].photography[]{
    _key, date, image, title{ ${locales} }
  }
`

const settings = `
  "settings": *[_type == "settings" && ${omitDrafts}][0]{
    contact, description{ ${locales} }, ogDescription{ ${locales} }, ogImage,
    ogTitle{ ${locales} }, title{ ${locales} }
  }
`

const videos = `
  "videos": *[_type == "video" && ${omitDrafts}].video[]{
    _key, image, "mp4": mp4.asset->{ url },
    title{ ${locales} }, "webm": webm.asset->{ url }
  }
`

export const indexQuery = groq`{
  ${navigation}, ${settings}
}`

export const artQuery = groq`{
  ${artworks}, ${navigation}, ${pages}, ${settings}
}`

export const lifeQuery = groq`{
  ${navigation}, ${pages}, ${photography}, ${settings}, ${videos}
}`

export const estateQuery = groq`{
  ${labels}, ${navigation}, ${pages}, ${photography}, ${settings}, ${videos}
}`
