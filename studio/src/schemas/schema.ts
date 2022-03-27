import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// objects
import portableText from "./object/portableText"
import captionImage from "./object/captionImage"

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeRichText from "./object/localeRichText"
import localeSlug from "./object/localeSlug"
import localeString from "./object/localeString"

// documents
import artwork from "./document/artwork"
import bio from "./document/bio"
import exhibition from "./document/exhibition"
import meta from "./document/meta"
import page from "./document/page"
import photography from "./document/photography"
import video from "./document/video"

// taxonomy
import medium from "./document/medium"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // objects
    portableText,
    captionImage,
    localeRichText,
    localeSlug,
    localeString,

    // documents
    artwork,
    bio,
    exhibition,
    meta,
    page,
    photography,
    video,

    // taxonomy
    medium
  ])
})
