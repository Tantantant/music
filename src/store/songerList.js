// import modules from './modules'

import Vue from 'vue'
import Vuex from 'vuex'
import songerList from "../api/songerList"

Vue.use(Vuex)

const state = {
  songerList: {}
}

const getters = {}

const actions = {
  async getSongerList1 ({ commit }) {
    const result = await songerList.getSongerList()
    console.log(result)
    if (result.status === 0) {
      commit("GET_SONGERLIST1", result.data)
    } else {
      Message.error(result.message)
    }
  }
}

const mutations = {
  GET_SONGERLIST1 (state, songerList) {
    state.songerList = songerList
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})