export default {
  name: "localeRichText",
  title: "Localized rich text",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations"
    }
  ],

  fields: [
    {
      title: "English",
      name: "en",
      type: "portableText"
    },
    {
      title: "Polish",
      name: "pl",
      type: "portableText"
    }
  ]
}
