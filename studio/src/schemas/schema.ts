import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// objects
import portableText from "./object/portableText"
import captionImage from "./object/captionImage"

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeRichText from "./object/localeRichText"
import localeString from "./object/localeString"

// documents
import artwork from "./document/artwork"
// import bio from "./document/bio"
import exhibition from "./document/exhibition"
import settings from "./document/settings"
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
    localeString,

    // documents
    artwork,
    // bio,
    exhibition,
    page,
    photography,
    settings,
    video,

    // taxonomy
    medium
  ])
})
