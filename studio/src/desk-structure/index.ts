import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'

const items = [
  Structure.getMaintenanceListItem().serialize(),
  ...S.documentTypeListItems()
]

export default () => {
  return S.list().title('Content').items(items)
}
