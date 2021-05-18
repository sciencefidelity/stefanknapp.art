export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'number',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'localeString',
    },
    {
      name: 'display',
      title: 'Display on website',
      type: 'boolean',
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'array',
      of: [{type: 'reference', to: {type: 'medium'}}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'date',
      media: 'mainImage',
    },
  },
}
