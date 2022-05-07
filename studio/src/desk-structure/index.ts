import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'
import {
  Art,
  Books,
  CameraFlash,
  CardFileBox,
  Compass,
  FilmProjector,
  FramedPicture,
  Gear
} from '../components/twemoji'

const items = [
  S.listItem()
    .title('Page')
    .icon(Books)
    .child(
      S.documentTypeList('page')
        .title('Page')
        .filter('_type == "page" && __i18n_lang != "pl"')
    ),
  S.divider(),
  S.listItem()
    .title('Artwork')
    .icon(FramedPicture)
    .child(
      S.document().schemaType('artwork').documentId('artwork').title('Artworks')
    ),
  S.listItem()
    .title('Medium')
    .icon(Art)
    .child(S.documentTypeList('medium').title('Medium')),
  S.listItem()
    .title('Photography')
    .icon(CameraFlash)
    .child(
      S.document()
        .schemaType('photography')
        .documentId('photography')
        .title('Photography')
    ),
  S.listItem()
    .title('Video')
    .icon(FilmProjector)
    .child(
      S.document().schemaType('video').documentId('video').title('Videos')
    ),
  S.divider(),
  S.listItem()
    .title('Settings')
    .icon(Gear)
    .child(
      S.document()
        .schemaType('settings')
        .documentId('settings')
        .title('Settings')
    ),
  S.listItem()
    .title('Navigation')
    .icon(Compass)
    .child(
      S.document()
        .schemaType('navigation')
        .documentId('navigation')
        .title('Navigation')
    ),
  S.listItem()
    .title('Label Group')
    .icon(CardFileBox)
    .child(S.document().schemaType('labelGroup').documentId('labelGroup')),
  S.divider(),
  Structure.getMaintenanceListItem().serialize(),
  ...S.documentTypeListItems().filter(
    item =>
      ![
        'artwork',
        'exhibition',
        'labelGroup',
        'medium',
        'navigation',
        'page',
        'photography',
        'settings',
        'video'
      ].includes(item.getId())
  )
]

export default () => {
  return S.list().title('Content').items(items)
}
