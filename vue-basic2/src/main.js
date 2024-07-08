import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')