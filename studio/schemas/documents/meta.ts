export default {
  name: "meta",
  title: "Page Meta",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Meta title",
      description: "Site title, shown on browser tabs and search engines",
      type: "localeString"
    },
    {
      name: "description",
      title: "Meta description",
      description: "Site description, shown in search engine results",
      type: "localeString"
    },
    {
      name: "contact",
      title: "Contact email",
      description: "Displayed on the estate page",
      type: "string"
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
      name: "ogImage",
      title: "Social image",
      description:
        "Image displayed when link to home is posted on Facebook and Twitter",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "title.en",
      media: "ogImage"
    }
  }
}
