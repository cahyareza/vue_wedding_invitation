import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './stores/store'

import '@/styles/_main.scss'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

import {LoadingPlugin} from 'vue-loading-overlay';

library.add(fas, fab)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router, LoadingPlugin)
.provide("store", store)
.mount('#app')
