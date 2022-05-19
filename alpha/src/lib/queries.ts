import groq from "groq"

const omitDrafts = "!(_id in path('drafts.**'))"
const slug = "slug.current"
const body = `body[]{ ..., markDefs[]{ ..., item->{ _type, "slug": ${slug} } } }`
const seoFields = "description, image, title"
const seo = `
  facebook{ ${seoFields} }, twitter{ ${seoFields} },
  meta{ canonicalURL, description, title }
`
const pageFields = `__i18n_lang, _id, ${body}, "slug": ${slug}, ${seo}, title`

const artPage = `
  "page": {
    "en": *[_type == "page" && __i18n_lang == "en" && ${omitDrafts}] | order(title)[0]{
      ${pageFields}, "i18nSlug": __i18n_refs[0]->.slug.current
    },
    "pl": *[_type == "page" && __i18n_lang == "pl" && ${omitDrafts}] | order(title)[1]{
      ${pageFields}, "i18nSlug": __i18n_base->.slug.current
    }
  }
`

const estatePage = `
  "page": {
    "en": *[_type == "page" && __i18n_lang == "en" && ${omitDrafts}] | order(title)[1]{
      ${pageFields}, "i18nSlug": __i18n_refs[0]->.slug.current
    },
    "pl": *[_type == "page" && __i18n_lang == "pl" && ${omitDrafts}] | order(title)[0]{
      ${pageFields}, "i18nSlug": __i18n_base->.slug.current
    }
  }
`

const lifePage = `
  "page": {
    "en": *[_type == "page" && __i18n_lang == "en" && ${omitDrafts}] | order(title)[2]{
      ${pageFields}, "i18nSlug": __i18n_refs[0]->.slug.current
    },
    "pl": *[_type == "page" && __i18n_lang == "pl" && ${omitDrafts}] | order(title)[2]{
      ${pageFields}, "i18nSlug": __i18n_base->.slug.current
    }
  }
`

const artworks = `
  "artworks": {
    "en": *[_type == "artwork" && ${omitDrafts}].artwork[] | order(date, title){
      _key, date, display, image, "medium": medium->.title.en, title,
      "dimensions": image.asset->.metadata.dimensions{ height, width }
    },
    "pl": *[_type == "artwork" && ${omitDrafts}].artwork[] | order(date, title){
      _key, date, display, image, "medium": medium->.title.pl, title,
      "dimensions": image.asset->.metadata.dimensions{ height, width }
    }
  }
`

const exhibitions = `
  "exhibitions": {
    "en": *[_type == "exhibition"].exhibition[]{
      _key, gallery, "location": location.en, solo, year
    },
    "pl": *[_type == "exhibition"].exhibition[]{
      _key, gallery, "location": location.pl, solo, year
    }
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
      _key, "label": label.en, "url": url->.${slug}
    },
    "pl": *[_type == "navigation" && ${omitDrafts}][0].primary[]{
      _key, "label": label.pl, "url": url->.__i18n_refs[0]->.${slug}
    }
  }
`

const photography = `
  "photography": {
    "en": *[_type == "photography" && ${omitDrafts}].photography[]{
      _key, date, image, "title": title.en,
      "dimensions": image.asset->.metadata.dimensions{ height, width }
    },
    "pl": *[_type == "photography" && ${omitDrafts}].photography[]{
      _key, date, image, "title": title.pl,
      "dimensions": image.asset->.metadata.dimensions{ height, width }
    }
  }
`

const settings = `
  "settings": {
    "en": *[_type == "settings" && ${omitDrafts}][0]{
      contact, "description": description.en, "ogDescription": ogDescription.en,
      ogImage, "ogTitle": ogTitle.en, "title": title.en
    },
    "pl": *[_type == "settings" && ${omitDrafts}][0]{
      contact, "description": description.pl, "ogDescription": ogDescription.pl,
      ogImage, "ogTitle": ogTitle.pl, "title": title.pl
    }
  }
`

const videos = `
  "videos": {
    "en": *[_type == "video" && ${omitDrafts}].video[]{
      _key, image, "mp4": mp4.asset->.url,
      "title": title.pl, "webm": webm.asset->.url
    },
    "pl": *[_type == "video" && ${omitDrafts}].video[]{
      _key, image, "mp4": mp4.asset->.url,
      "title": title.pl, "webm": webm.asset->.url
    }
  }
`

export const indexQuery = groq`{
  ${labels}, ${navigation}, ${settings}
}`

export const artQuery = groq`{
  ${artPage}, ${artworks}, ${labels}, ${navigation}, ${settings}
}`

export const estateQuery = groq`{
  ${estatePage}, ${labels}, ${navigation}, ${photography}, ${settings}
}`

export const lifeQuery = groq`{
  ${exhibitions}, ${labels}, ${lifePage}, ${navigation}, ${photography},
  ${settings}, ${videos}
}`
