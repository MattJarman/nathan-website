import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faAngleUp,
  faCamera,
  faExternalLinkAlt,
  faFileAlt,
  faHome,
  faTv,
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import smoothscroll from 'smoothscroll-polyfill'
import VueLazyload from 'vue-lazyload'
import DefaultLayout from '~/layouts/Default.vue'
import PaddedLayout from '~/layouts/Padded.vue'
import '~/tailwind.css'

export default function (Vue, { router, head, isClient }) {
  library.add(
    faFacebookSquare,
    faLinkedin,
    faInstagram,
    faYoutube,
    faExternalLinkAlt,
    faAngleDown,
    faAngleUp,
    faCamera,
    faVideo,
    faFileAlt,
    faHome,
    faTv,
    faUser,
    faImage
  )

  if (process.isClient) {
    smoothscroll.polyfill()
  }

  Vue.use(VueLazyload)

  // Layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('Padded', PaddedLayout)

  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
