export default {
  supportedLanguages: [
    {id: 'en', title: 'English'},
    {id: 'pl', title: 'Polish'},
    //...
  ],
  defaultLanguages: ['en'],
  // Only show language filter for document type `page` (schemaType.name)
  documentTypes: [
    'artwork',
    'exhibition',
    'labelGroup',
    'medium',
    'navigation',
    'photography',
    'settings',
    'video'
  ],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith('locale') ||
    selectedLanguageIds.includes(field.name),
}
