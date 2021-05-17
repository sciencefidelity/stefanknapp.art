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
    enablePathRewrite: true, // rewrite path with locale prefix, default: true
    rewriteDefaultLanguage: true, // rewrite default locale, default: true
    // enablePathGeneration: false,
    // routes: require('./routes.js') // load path translation declaration from external file
    messages: {
      'en-gb': require('../src/locales/en-gb.json'),
      'pl-pl': require('../src/locales/pl-pl.json'),
    }
  }
}
