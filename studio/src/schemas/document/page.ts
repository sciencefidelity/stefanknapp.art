export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'title'
      }
    },
    {
      name: "ogTitle",
      title: "Social title",
      description:
        "Displayed on Facebook and Twitter shares (max 60 characters)",
      type: "localeString",
      // validation: (Rule: any) =>
      //   Rule.max(60).warning(`Only 60 characters will be visible.`)
    },
    {
      name: "ogDescription",
      title: "Social description",
      description:
        "Displayed on Facebook and Twitter shares (max 65 characters)",
      type: "localeString",
      // validation: (Rule: any) =>
      //   Rule.max(65).warning(`Only 65 characters will be visible.`)
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
      media: "mainImage"
    }
  }
}
