import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome"
        },
        pl: {
          welcome: "Witamy"
        }
      }
    }
  }
})
