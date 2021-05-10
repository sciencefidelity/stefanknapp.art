import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'
import captionImage from './objects/captionImage'

// localization
// import { baseLanguage, supportedLanguages } from './languages'
import localeRichText from './objects/localeRichText'
import localeSlug from './objects/localeSlug'
import localeString from './objects/localeString'

// documents
import artwork from './documents/artwork'
import bio from './documents/bio'
import photography from './documents/photography'
import meta from './documents/meta'
import page from './documents/page'
import video from './documents/video'

// taxonomy
import medium from './taxonomy/medium'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // objects
    blockContent,
    captionImage,
    localeRichText,
    localeSlug,
    localeString,

    // documents
    artwork,
    bio,
    meta,
    page,
    photography,
    video,

    // taxonomy
    medium,
  ]),
})
