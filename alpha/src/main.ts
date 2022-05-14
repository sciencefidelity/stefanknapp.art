import { ViteSSG } from "vite-ssg"
import { setupLayouts } from "virtual:generated-layouts"
import App from "./App.vue"
import generatedRoutes from "~pages"

import "modern-normalize"
import "./styles/global.scss"

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ctx => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager("./modules/*.ts")).forEach(i =>
      i.install?.(ctx)
    )
  }
)
