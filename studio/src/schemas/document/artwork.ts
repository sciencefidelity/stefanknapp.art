import { FramedPicture } from '../../components/twemoji'

export default {
  name: "artwork",
  title: "Artwork",
  type: "document",
  icon: FramedPicture,
  fields: [
    {
      name: "artwork",
      title: "Artwork",
      type: "array",
      of: [
        {
          name: "artwork",
          title: "Artwork",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string"
            },
            {
              name: "date",
              title: "Date",
              type: "number"
            },
            {
              name: "display",
              title: "Display on website",
              type: "boolean",
              initialValue: true
            },
            {
              name: "medium",
              title: "Medium",
              type: "reference",
              to: [{ type: "medium" }]
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true
              }
            }
          ]
        }
      ]
    }
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image"
    }
  }
}
