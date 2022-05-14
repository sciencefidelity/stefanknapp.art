import { resolve } from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import generateSitemap from "vite-ssg-sitemap"
import Layouts from "vite-plugin-vue-layouts"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import { VitePWA } from "vite-plugin-pwa"
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import Inspect from "vite-plugin-inspect"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`
    }
  },

  plugins: [
    Vue({
      include: [/\.vue$/],
      reactivityTransform: true
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue"]
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts"
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),

    VueI18n({
      include: resolve(__dirname, "./src/locales/**")
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, "locales/**")]
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect()
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap()
    }
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  }
})
