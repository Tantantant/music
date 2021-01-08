// import modules from './modules'

import Vue from 'vue'
import Vuex from 'vuex'
// import {getSongerList1} from "../api/songerList"
import { getSongersList } from "../api/songerList"

Vue.use(Vuex)

const state = {
  songerList: [],
  songer: [],
}

const getters = {}

const actions = {
  async getSonger ({ commit }) {
    const result = await getSongersList()
    console.log(result)
    commit("GET_SONGERLIST1", result)
  }
}

const mutations = {
  GET_SONGERLIST1 (state, result) {
    state.songerList = result.list.artists.slice(0, 10)
    state.songer = result.list.artists.slice(10, 98)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})