import { ClassicalBuilding } from '../../components/twemoji'

export default {
  name: "exhibition",
  title: "Exhibition",
  type: "document",
  icon: ClassicalBuilding,
  fields: [
    {
      name: "exhibition",
      title: "Exhibition",
      type: "array",
      of: [
        {
          name: "exhibition",
          title: "Exhibition",
          type: "object",
          fields: [
            {
              name: "gallery",
              title: "Gallery",
              type: "string"
            },
            {
              name: "year",
              title: "Year",
              type: "number"
            },
            {
              name: "location",
              title: "Location",
              type: "localeString"
            },
            {
              name: "solo",
              title: "Solo",
              type: "boolean"
            }
          ],
          preview: {
            select: {
              title: 'gallery',
              subtitle: 'year'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle,
                media: ClassicalBuilding
              }
            }
          }
        }
      ]
    }
  ],

  preview: {
    select: {
      title: "gallery",
      subtitle: "year"
    },
    prepare({ title }) {
      return {
        title: title,
        media: ClassicalBuilding
      }
    }
  }
}
