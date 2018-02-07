import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userID: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData) {
      axios.post('/signupNewUser?key=AIzaSyCF3VlzKHb27VSwDjlhFWuoIJiUdfZdufM', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    login({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyCF3VlzKHb27VSwDjlhFWuoIJiUdfZdufM', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  },
  getters: {

  }
})
