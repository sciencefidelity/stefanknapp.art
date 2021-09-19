export default {
  name: "exhibition",
  title: "Exhibition",
  type: "document",
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
      title: "gallery",
      subtitle: "year"
    }
  }
}
