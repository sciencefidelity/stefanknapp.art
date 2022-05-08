import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"

const slug = `"slug": slug.current`

const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, ${slug} } } }`

const socialFields = "description, image, title"

const labels = `"labels": *[_type == "labelGroup" && ${omitDrafts}][0].labels`

const metaFields = "canonicalURL, description, title"

const seo = `
  facebook{ ${socialFields} },
  meta{ ${metaFields} },
  twitter{ ${socialFields} }
`

const pageFields = `
  __i18n_lang, _id, _type, title, ${body}, ${seo}, ${slug}
`

const artworks = `
  "artwork": *[_type == "artwork"][0].artwork | order(date){
    _key, date, display, image, title,
    medium->{ "en": title.en, "pl": title.pl }
  }
`

const navigation = `
  "navigation": *[_type == "navigation"][0].primary[]{
    label{ en, pl },
    "slug": { "en": url->.slug.current, "pl": url->__i18n_refs[0]->.slug.current }
  }
`

const pages = `
  "pages": *[_type == "page" && ${omitDrafts}]{
    ${pageFields},
    __i18n_refs[0]->{ ${pageFields} },
    __i18n_base->{ ${pageFields} }
  }
`

const photography = `
  "photography": *[_type == "photography"][0].photography[]{
    _key, date, image, title
  }
`

const settings = `
  "setings": *[_type == "settings"][0]{
    contact, description, ogDescription, ogImage, ogTitle, title
  }
`

const videos = `
  "videos": *[_type == "video"][0].video[]{
    _key, image, title,
    "mp4": mp4.asset->{ mimeType, url },
    "webm": webm.asset->{ mimeType, url },
  }
`

export const indexQuery = groq`
  ${navigation}, ${settings}
`

export const pagesQuery = groq`{
  ${artworks}, ${navigation}, ${pages}, ${photography}, ${settings}, ${videos}
}`
