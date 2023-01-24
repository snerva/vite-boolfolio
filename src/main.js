import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesUp, faAngleLeft, faAngleRight, faLaptop, faMobileScreenButton, faRocket, faGear } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

library.add(faAnglesUp, faAngleLeft, faAngleRight, faLaptop, faMobileScreenButton, faRocket, faLightbulb, faGear)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
