import { defineNuxtConfig } from "@nuxt/bridge"

export default defineNuxtConfig({
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
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-bold.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-book.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-bookobl.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-demi.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-light.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [
      {
        rel: "preload",
        as: "font",
        href: "@/assets/fonts/futurapt-lightobl.woff2",
        type: "font/woff2",
        crossorigin: "anonymous"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
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
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: ["en", "pl"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
})
