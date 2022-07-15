import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: JSON.parse(localStorage.getItem('hometoken')) || null,
    //当前地区
    currentCityL: JSON.parse(localStorage.getItem('currentCityL')) || {
      label: "北京",
      pinyin: "beijing",
      short: "bj",
      value: "AREA|88cff55c-aaa4-e2e0"
    },
    //search搜索点击结果
    community: {}
  },
  getters: {
  },
  mutations: {
    //添加token
    addToken(state, val) {
      state.token = val
      localStorage.setItem('hometoken', JSON.stringify(val) || null)
    },
    //添加当前城市
    addCurrentCityL(state, val) {
      state.currentCityL = val
      localStorage.setItem('currentCityL', JSON.stringify(val) || null)
    },
    //修改community,用于发布房源小区地址数据
    setCommunity(state, val) {
      state.community = val
    }
  },
  actions: {
  },
  modules: {
  }
})
