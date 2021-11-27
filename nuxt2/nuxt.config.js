export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "The Estate of Stefan Knapp",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The art, life and estate of Polish enamelist Stefan Knapp"
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "The Estate of Stefan Knapp"
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#FFFFFF"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/urlFor.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://sanity.nuxtjs.org
    "@nuxtjs/sanity/module",
    // https://pwa.nuxtjs.org
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "EN"
      },
      {
        code: "pl",
        name: "PL"
      }
    ]
  },

  pwa: {
    onesignal: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
