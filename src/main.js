import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-8f333.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'adasd';
axios.defaults.headers.get['Accepts'] = 'application/json'

// add interceptor
const reqInterID = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config);
  return config;
})

const resInterID = axios.interceptors.response.use(res => {
  console.log('Response interceptors', res);
  return res;
})

// remove interceptor
axios.interceptors.request.eject(reqInterID);
axios.interceptors.response.eject(resInterID);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
