import { reqSongList } from "../../api";
export default {
  state: {
    songList: [],
  },
  getters: {},
  actions: {
    async getSongList({ commit }) {
      const result = await reqSongList();
      if (result.code === 200) {
        commit("RECEIVE_SONG_LIST", result.data);
      }
    },
  },
  mutations: {
    RECEIVE_SONG_LIST(state, songList) {
      state.songList = songList;
    },
  },
};
