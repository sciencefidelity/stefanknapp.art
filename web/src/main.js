// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/main.scss'

// Import image url builder
import urlForImage from './utils/urlForImage'

export default function (Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}
