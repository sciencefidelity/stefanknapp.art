import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import { createI18n } from "vue-i18n"
import messages from "@intlify/vite-plugin-vue-i18n/messages"
import router from "./router/index"
import App from "./App.vue"
import "modern-normalize"
import "styles/global.scss"

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages
})
const head = createHead()
const app = createApp(App)

app.use(i18n)
app.use(head)
app.use(router)
app.mount("#app")
