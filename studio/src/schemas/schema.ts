import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// objects
import facebookCard from './object/facebookCard'
import portableText from "./object/portableText"
import metaData from './object/metaData'
import twitterCard from './object/twitterCard'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeString from "./object/localeString"

// documents
import artwork from "./document/artwork"
import exhibition from "./document/exhibition"
import navigation from './document/navigation'
import page from "./document/page"
import photography from "./document/photography"
import settings from "./document/settings"
import video from "./document/video"

// taxonomy
import medium from "./document/medium"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // objects
    facebookCard,
    portableText,
    metaData,
    twitterCard,

    // localization
    localeString,

    // documents
    artwork,
    exhibition,
    navigation,
    page,
    photography,
    settings,
    video,

    // taxonomy
    medium
  ])
})
