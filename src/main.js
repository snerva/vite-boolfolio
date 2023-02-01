import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesUp, faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faAnglesUp, faAngleLeft, faAngleRight, faBars)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
