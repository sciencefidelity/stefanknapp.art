export default {
  name: 'localeRichText',
  title: 'Localized rich text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],

  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'blockContent',
    },
    {
      title: 'Polish',
      name: 'pl',
      type: 'blockContent',
      fieldset: 'translations',
    },
  ],
}
