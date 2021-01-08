import { getTopDetail ,getMusicUrl,getComment,getLyric} from '../../api/topList'

export default {
    state: {
        songInfoList: {},
        musicInfo:{},
        comment:{},
        palySong:[],
        lyric:{}
    },
    actions: {
        // 排行榜歌曲信息
        async getTopDetail({ commit }) {
            const topdata = await getTopDetail()
            commit('TOPDETAIL', topdata)
        },

        // 音乐地址
        async getMusicUrls({commit},id){
            const musicUrl = await getMusicUrl(id)
            commit('MUSICURL',musicUrl)
        },
        // 评论
        async getComments({commit}){
            const comment = await getComment()
            commit('COMMENT',comment)
        },
        // 歌词
        async getLyric({commit},id){
            const lyric = await getLyric(id)
            commit('LYRIC',lyric)
        }

    },
    mutations: {
        TOPDETAIL(state, topdata) {
            state.songInfoList = topdata.data.splice(0, 20);
        },
        MUSICURL(state,musicUrl){
            state.musicInfo = musicUrl.data
        },
        COMMENT(state,comment){
            state.comment = comment.hotComments
        },
        // 操作播放页面的数据
        SONGINFO(state,songId){
            // console.log(state,id)
           state.palySong =  state.songInfoList.map((item)=>{
                if(item.id === songId){
                    return {
                        picUrl:item.album.blurPicUrl,
                        name:item.album.name,
                        nickName:item.artists[0].name
                    }
                }
                return
            }).filter(item=> item)
        },
        // 歌词
        LYRIC(state,lyric){
            state.lyric = lyric
        }
    },
    getters: {

    }
}