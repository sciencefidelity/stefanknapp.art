export default {
  name: 'medium',
  title: 'Medium',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
}
