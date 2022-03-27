import { i18n } from "../../languages"

export default {
  name: "localeSlug",
  title: "Localized slugs",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
    }
  ],

  fields: [
    {
      title: "English",
      name: "en",
      type: "slug",
      options: {
        source: `title.${i18n[0].name}`
      }
    },
    {
      title: "Polish",
      name: "pl",
      type: "slug",
      options: {
        source: `title.${i18n[1].name}`
      }
    }
  ]
}
