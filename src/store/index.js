import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem('hometoken')) || null
  },
  getters: {
  },
  mutations: {
    addToken(state, val) {
      state.token = val
      localStorage.setItem('hometoken', JSON.stringify(val))
    }
  },
  actions: {
  },
  modules: {
  }
})
