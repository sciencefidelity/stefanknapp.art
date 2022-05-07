import { Compass } from '../../components/twemoji'

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Compass,
  fields: [
    {
      name: 'primary',
      title: 'Primary navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'localeString'
            },
            {
              name: 'url',
              type: 'reference',
              to: [{ type: 'page' }]
            }
          ],
          preview: {
            select: {
              title: 'label.en'
            },
            prepare({ title }) {
              return {
                title: title,
                media: Compass
              }
            }
          }
        }
      ],
      sortable: true
    }
  ],
  preview: {
    select: {
      title: 'Navigation'
    },
    prepare({ title }) {
      return {
        title: title,
        media: Compass
      }
    }
  }
}
