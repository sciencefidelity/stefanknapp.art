// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()

const clientConfig = require('./client-config')
const i18n = require('./plugins/i18n')

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
    i18n
  ]
}
