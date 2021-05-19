import { supportedLanguages } from '../languages'

export default {
  name: 'period',
  title: 'Period',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'yearFrom',
      title: 'Year from',
      type: 'number',
    },
    {
      name: 'yearTo',
      title: 'Year to',
      type: 'number',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title.${supportedLanguages[0].name}`,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'captionImage',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
    },
  },
}