import { Gear } from '../../components/twemoji'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Gear,
  fields: [
    {
      name: 'title',
      title: 'Meta title',
      description: 'Extra content for search engines',
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Meta description',
      description: 'Extra content for search engines',
      type: 'localeText'
    },
    {
      name: 'contact',
      title: 'Contact email',
      description: 'Displayed on the estate page',
      type: 'email'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      description: 'Customize structured data for Twitter and Facebook',
      type: 'localeString'
    },
    {
      name: 'ogDescription',
      title: 'Social description',
      description: 'Customize structured data for Twitter and Facebook',
      type: 'localeText'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      description:
        'Image displayed when link to home is posted on Facebook and Twitter',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'ogImage'
    }
  }
}
