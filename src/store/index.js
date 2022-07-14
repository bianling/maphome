import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem('hometoken')) || null,
    currentCityL: {
      label: "北京",
      pinyin: "beijing",
      short: "bj",
      value: "AREA|88cff55c-aaa4-e2e0"
    }
  },
  getters: {
  },
  mutations: {
    addToken(state, val) {
      state.token = val
      localStorage.setItem('hometoken', JSON.stringify(val) || null)
    }
  },
  actions: {
  },
  modules: {
  }
})
