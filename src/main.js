import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faImage } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faAngleDown, faAngleUp, faCamera, faVideo, faFileAlt, faHome, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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

  // Layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('Padded', PaddedLayout)

  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
