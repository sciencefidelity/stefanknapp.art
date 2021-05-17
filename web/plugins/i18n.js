module.exports = {
  use: "gridsome-plugin-i18n",
  options: {
    locales: [
      'pl-pl',
      'en-gb'
    ],
    pathAliases: {
      'pl-pl': 'pl',
      'en-gb': 'en'
    },
    fallbackLocale: 'en-gb',
    defaultLocale: 'en-gb',
    enablePathRewrite: true,
    rewriteDefaultLanguage: true,
    // enablePathGeneration: false,
    // routes: require('./routes.js'),
    messages: {
      'en-gb': require('../src/locales/en-gb.json'),
      'pl-pl': require('../src/locales/pl-pl.json')
    }
  }
}
