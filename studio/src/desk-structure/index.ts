import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'
import {
  Art,
  BallotBoxWithCheck,
  BarChart,
  Books,
  CameraFlash,
  CardFileBox,
  Clipboard,
  ClosedLockWithKey,
  Compass,
  Date,
  FilmProjector,
  Gear,
  Label,
  Newspaper,
  PostOffice,
  SpeechBalloon,
  WhiteCheckMark,
  WomanTeacher,
  WorldMap,
  WritingHand
} from '../components/twemoji'

const items = [
  S.listItem()
  .title('Page')
  .icon(Books)
  .child(
    S.documentTypeList('page')
      .title('Page')
      .filter('_type == "page" && __i18n_lang != "cy"')
  ),
  S.divider(),
  S.listItem()
    .title('Artwork')
    .icon(BarChart)
    .child(
      S.document().schemaType('artwork').documentId('artwork')
    ),
  S.listItem()
    .title('Medium')
    .icon(BarChart)
    .child(
      S.document().schemaType('medium').documentId('medium')
    ),
  S.listItem()
    .title('Photography')
    .icon(CameraFlash)
    .child(
      S.document().schemaType('photography').documentId('photography')
    ),
  S.listItem()
    .title('Video')
    .icon(Clipboard)
    .child(S.document().schemaType('video').documentId('video')),
  S.divider(),
  S.listItem()
    .title('Settings')
    .icon(Gear)
    .child(S.document().schemaType('settings').documentId('settings')),
  S.listItem()
    .title('Navigation')
    .icon(Compass)
    .child(
      S.document().schemaType('navigation').documentId('navigation')
    ),
  Structure.getMaintenanceListItem().serialize(),
  ...S.documentTypeListItems().filter(
    item =>
      ![
        'artwork',
        'exhibition',
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
