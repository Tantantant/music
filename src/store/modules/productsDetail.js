import { reqGetSongerList, reqGetSongerListTop } from "../../api/digital"
export default {
    state: {
        songerList: {},//歌手的歌曲列表
        songerListTop: {},
    },
    actions: {
        //发送请求 根据歌手获取器全部歌曲
        async getSongerList({ commit }, id) {
            let songerList = await reqGetSongerList(id);
            songerList = songerList.songs.slice(0, 6)
            console.log(songerList);
            // songerList.songs.slice(0, 6)
            commit('GET_SONGER_LIST', songerList)
        },
        // 根据获取前top50 的歌曲
        async getSongerListTop({ commit }, id) {
            let songerListTop = await reqGetSongerListTop(id);
            songerListTop = songerListTop.songs.slice(0, 10)
            // console.log("热门10：", songerListTop);
            // songerList.songs.slice(0, 6)
            commit('GET_SONGER_LIST_TOP', songerListTop)
        }
    },
    mutations: {
        GET_SONGER_LIST(state, songerList) {
            state.songerList = songerList
        },
        GET_SONGER_LIST_TOP(state, songerListTop) {
            state.songerListTop = songerListTop
        },
    },
}