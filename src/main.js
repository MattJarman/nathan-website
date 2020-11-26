require('~/tailwind.css')
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faAngleDown, faAngleUp, faCamera, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  library.add(faFacebookSquare, faLinkedin, faInstagram, faYoutube, faExternalLinkAlt, faAngleDown, faAngleUp, faCamera, faVideo, faFileAlt)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
