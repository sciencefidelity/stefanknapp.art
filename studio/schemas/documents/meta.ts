export default {
  name: 'meta',
  title: 'Page Meta',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Meta title',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Meta description',
      type: 'localeString',
    },
    {
      name: 'ogTitle',
      title: 'OG title',
      description: 'Open graph title is used on Facebook and Twitter',
      type: 'localeString',
    },
    {
      name: 'ogDescription',
      title: 'OG description',
      description: 'Open graph description is used on Facebook and Twitter',
      type: 'localeString',
    },
    {
      name: 'ogImage',
      title: 'OG image',
      description: 'Used on Facebook and Twitter, dimentions must be 1200 x 630px',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'ogImage',
    },
  },
}
