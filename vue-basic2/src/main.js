import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import axios from 'axios'
import VueCookies from "vue-cookies";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);
    app.config.globalProperties.axios = axios
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(router)
    app.mount('#app')
    Vue.use(VueCookies); // vueCookies 전역으로 등록
    Vue.$cookies.config("7d");