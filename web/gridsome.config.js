// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()

const clientConfig = require('./client-config')

module.exports = {
  siteName: 'Stefan Knapp Estate',
  siteDescription: 'The Estate of visual artist Stefan Knapp',
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'pl-pl',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'pl-pl': 'pl',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        // messages: {
        //   'pl-pl': require('./src/locales/it-it.json'), // Messages files
        //   'en-gb': require('./src/locales/en-gb.json'),
        // }
      }
    }
  ]
}
