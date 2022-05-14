import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueI18n from "@intlify/vite-plugin-vue-i18n"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**")
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "components": resolve(__dirname, "./src/components"),
      "styles": resolve(__dirname, "./src/styles"),
      "views": resolve(__dirname, "./src/views")
    }
  }
})
