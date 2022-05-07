export default {
  name: "localeText",
  title: "Localized text",
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
      type: "text",
      rows: 3
    },
    {
      title: "Polish",
      name: "pl",
      type: "text",
      rows: 3
    }
  ]
}
