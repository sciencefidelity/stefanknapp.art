import { supportedLanguages } from '../languages'

export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeRichText',
    },
    {
      name: 'videoLink',
      title: 'Video Link',
      type: 'url',
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
      type: 'image',
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
