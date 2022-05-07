import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { Books } from '../../components/twemoji'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: Books,
  i18n,
  initialValue: {
    __i18n_lang: 'en',
    __i18n_refs: []
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      }
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData'
    },
    {
      name: 'twitter',
      title: 'Twitter Card',
      type: 'twitterCard'
    },
    {
      name: 'facebook',
      title: 'Facebook Card',
      type: 'facebookCard'
    }
  ],

  preview: {
    select: {
      title: 'title',
      image: 'facebook.image'
    },
    prepare({ title, image }) {
      return {
        title: title,
        media: image ? image : Books
      }
    }
  }
}
