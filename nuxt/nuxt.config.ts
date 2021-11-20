import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  target: "static",

  css: ["assets/main.scss"],

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/sanity/module",
    "@nuxtjs/stylelint-module"
  ],

  sanity: {
    dataset: "production",
    projectId: "0u3fubc7"
  }
})
