import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faAngleUp,
  faCamera,
  faExternalLinkAlt,
  faHome,
  faTv,
  faVideo,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from 'particles.vue'
import smoothscroll from 'smoothscroll-polyfill'
import VueLazyload from 'vue-lazyload'
import DefaultLayout from '~/layouts/Default.vue'
import PaddedLayout from '~/layouts/Padded.vue'
import Helpers from './mixins/Helpers'
import '~/tailwind.css'

export default function (Vue) {
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
    faHome,
    faTv,
    faUser,
    faImage,
    faEnvelope
  )

  if (process.isClient) {
    smoothscroll.polyfill()
  }

  Vue.use(VueLazyload)
  Vue.use(Particles)

  // Layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('Padded', PaddedLayout)

  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.mixin(Helpers)
}
