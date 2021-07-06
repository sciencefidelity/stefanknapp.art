export default {
  name: 'bio',
  title: 'Biography',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'born',
      title: 'Born',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
      }
    },
    {
      name: 'died',
      title: 'Died',
      type: 'date',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY',
      }
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'localeRichText',
    },
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
}
