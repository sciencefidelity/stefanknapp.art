import { Art } from '../../components/twemoji'

export default {
  name: "medium",
  title: "Medium",
  type: "document",
  icon: Art,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString"
    }
  ],
  preview: {
    select: {
      title: 'title.en'
    },
    prepare({ title }) {
      return {
        title: title,
        media: Art
      }
    }
  }
}
