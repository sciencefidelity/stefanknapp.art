export default {
  name: 'Exhibition',
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
      title: 'Solo',
      name: 'solo',
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
