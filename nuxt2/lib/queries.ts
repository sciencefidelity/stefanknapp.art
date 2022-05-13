import groq from "groq"

const locales = "en, pl"
const slug = "slug.current"
const seoFields = "description, image, title"
const seo = `
  facebook{ ${seoFields} }, twitter{ ${seoFields} }
  meta{ canonicalURL, description, title }
`
const pageFields = `__i18n_lang, _id, body, ${slug}, ${seo}`

const artworks = `
  "artworks": *[_type == "artwork"].artwork[]{
    _key, date, display, image, "medium": medium->.title{ ${locales} }, title
  }
`

const navigation = `
  "navigation": *[_type == "navigation"][0].primary[]{
    _key, label{ ${locales} },
    url->{ "en": ${slug}, "pl": __i18n_refs[0]->.${slug} }
  }
`

const pages = `
  "page": *[_type == "page" && __i18n_lang == "en"]{
    ${pageFields}, __i18n_refs[0]->{ ${pageFields} }
  }
`

const photography = `
  "photography": *[_type == "photography"].photography[]{
    _key, date, image, title{ ${locales} }
  }
`

const settings = `
  "settings": *[_type == "settings"][0]{
    contact, description{ ${locales} }, ogDescription{ ${locales} }, ogImage,
    ogTitle{ ${locales} }, title{ ${locales} }
  }
`

const videos = `
  "videos": *[_type == "video"].video[]{
    _key, image, "mp4": mp4.asset->{ url },
    title{ ${locales} }, "webm": webm.asset->{ url }
  }
`

export const indexQuery = groq`{
  ${navigation}, ${settings}
}`

export const pageQuery = groq`{
  ${artworks}, ${navigation}, ${pages}, ${photography}, ${settings}, ${videos}
}`
