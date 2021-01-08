// import modules from './modules'

// import Vue from 'vue'
// import Vuex from 'vuex'
import { getSongerList, getSonger, Songer } from "../../api/songerList"

// Vue.use(Vuex)
export default {
  state: {
    songerList: [],
    songer: [],
    area: [],
    genre: [],
    index: [],
    sex: [],
    list: []
  },
  getters: {},
  actions: {
    async getSonger1 ({ commit }) {
      const res = await getSonger()
      console.log(res)
      commit("GET_SONGER1", res)
    },
    async getSongerList1 ({ commit }) {
      const data = await getSongerList()
      // console.log(data)
      commit("GET_SONGERLIST1", data)
    },
    async requSonger ({ commit }) {
      const res = await Songer()
      // console.log(res)
      commit("REQ_USONGER", res)
    }
  },
  mutations: {
    GET_SONGERLIST1 (state, data) {
      // state.songerList = songerList
      state.songerList = data.list.artists
      state.songer = data.list.artists
    },
    GET_SONGER1 (state, res) {
      // state.songerList = songerList
      state.area = res.tags.slice(0, 10)
      state.genre = res.tags.slice(11, 19)
      state.index = res.tags.slice(20, 27)
      state.sex = res.tags.slice(28, 32)
    },
    REQ_USONGER (state, res) {
      // state.songerList = songerList
      // state.songerList = data.list.artists.slice(0, 10)
      // state.songer = data.list.artists
      state.List = res.list.artists
    }
  }
}