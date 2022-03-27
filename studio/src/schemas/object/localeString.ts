export default {
  name: "localeString",
  title: "Localized string",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],

  fields: [
    {
      title: "English",
      name: "en",
      type: "string"
    },
    {
      title: "Polish",
      name: "pl",
      type: "string",
      fieldset: "translations"
    }
  ]
}
