import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import firebase from 'firebase'
require('firebase/firestore')
import {
  Vuetify, VApp, VBtn, VCard, VFooter, VForm, VGrid, VIcon, VList, VMenu, VTabs, VTextField, VToolbar, transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import './stylus/main.styl'
import { Ripple } from 'vuetify/es5/directives'
Vue.use(Vuetify, {
  components: {
    VApp, VBtn, VCard, VFooter, VForm, VGrid, VIcon, VList, VMenu, VTabs, VTextField, VToolbar, transitions
  },
  directives: {
    Ripple
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    lxsviolet: '#2f0233',
    lxspink: '#e90052',
    lxsskyblue: '#03f0ff',
    lxslightgreen: '#2afd8c',
    lxsmuted: '#646467'
  }
})

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLOVj2haLFwftvvNsmUUZTUn6CMh6WYfQ",
      authDomain: "thelaxis-8d7ec.firebaseapp.com",
      databaseURL: "https://thelaxis-8d7ec.firebaseio.com",
      projectId: "thelaxis-8d7ec",
      storageBucket: "thelaxis-8d7ec.appspot.com",
      messagingSenderId: "215944317596"
    })
  }
})