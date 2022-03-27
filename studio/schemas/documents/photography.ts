export default {
  name: "photography",
  title: "Photography",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "date",
      title: "Date",
      type: "number"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "captionImage",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "title.en",
      subtitle: "date",
      media: "mainImage"
    }
  }
}
