import { createApp } from 'vue'
import { Quasar, QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

import router from './router/router.js'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  components: { QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter }
});

myApp.use(router);

myApp.mount('#app');