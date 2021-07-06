export default {
  name: 'exhibition',
  title: 'exhibition',
  type: 'document',
  fields: [
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'localeString',
    },
    {
      name: 'Solo',
      title: 'solo',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'gallery',
      media: 'mainImage',
    },
  },
}
