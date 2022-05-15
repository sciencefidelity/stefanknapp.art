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
  "labels": {
    "en": *[_type == "labelGroup" && ${omitDrafts}].labels[]{
      key, "text": text.en
    },
    "pl": *[_type == "labelGroup" && ${omitDrafts}].labels[]{
      key, "text": text.pl
    }
  }
`

const navigation = `
  "navigation": {
    "en": *[_type == "navigation" && ${omitDrafts}][0].primary[]{
      "label": label.en, "url": url->.${slug}
    },
    "pl": *[_type == "navigation" && ${omitDrafts}][0].primary[]{
      "label": label.pl, "url": url->.__i18n_refs[0]->.${slug}
    }
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
  "settings": {
    "en": *[_type == "settings" && ${omitDrafts}][0]{
      contact, "description": description.en, "ogDescription": ogDescription.en, ogImage,
      "ogTitle": ogTitle.en, "title": title.en
    },
    "pl": *[_type == "settings" && ${omitDrafts}][0]{
      contact, "description": description.pl, "ogDescription": ogDescription.pl, ogImage,
      "ogTitle": ogTitle.pl, "title": title.pl
    }
  }
`

const videos = `
  "videos": *[_type == "video" && ${omitDrafts}].video[]{
    _key, image, "mp4": mp4.asset->{ url },
    title{ ${locales} }, "webm": webm.asset->{ url }
  }
`

export const indexQuery = groq`{
  ${labels}, ${navigation}, ${settings}
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
