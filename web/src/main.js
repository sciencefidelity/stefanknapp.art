// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue"
import "~/assets/main.scss"

// Import image url builder
import urlForImage from "./utils/urlForImage"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  head.script.push({
    src: 'https://plausible.io/js/plausible.js',
    defer: true,
    "data-domain": "stefanknapp.art"
  })
}
