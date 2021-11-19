import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/main.scss'
  ],
  // publicRuntimeConfig: {
  //   sanityProjectId: process.env.SANITY_PROJECT_ID,
  //   sanityDataset: process.env.SANITY_DATASET
  // },
  buildModules: ['@intlify/nuxt3'],
  intlify: {
    locales: [
      {
        code: "en",
        iso: "en-GB"
      },
      {
        code: "es",
        iso: "pl-PL"
      }
    ],
    baseUrl: "https://stefanknapp.art",
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
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"
    }
  }
})
