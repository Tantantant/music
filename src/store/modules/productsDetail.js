import { reqGetSongerList, reqGetSongerListTop, reqGetRankingDetail } from "../../api/digital"
export default {
    state: {
        songerList: {},//歌手的歌曲列表
        songerListTop: {},
        newDisc: {}
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
        },
        async getProductDetail({ commit }, id) {
            let productDetail = await reqGetRankingDetail(id);
            console.log(productDetail);
            //将返回来的数据处理一下 。公共组件渲染
            let newDisc = {
                picUrl: productDetail.album.coverUrl,    //专辑图片
                name: productDetail.album.albumName,     //专辑名
                artistName: productDetail.album.artistName, //作者名
                saleNum: productDetail.product.saleNum,   //出售张数
                price: productDetail.product.price,   // 价格
                artistId: productDetail.album.artistId, //歌手ID
                descr: productDetail.product.descr[0].resource    //专辑简介
            }
            console.log(newDisc);
            commit('GET_PRODUCT_DETAIL', newDisc)
        }
    },
    mutations: {
        GET_SONGER_LIST(state, songerList) {
            state.songerList = songerList
        },
        GET_SONGER_LIST_TOP(state, songerListTop) {
            state.songerListTop = songerListTop
        },
        GET_PRODUCT_DETAIL(state, newDisc) {
            state.newDisc = newDisc
        },
    },
}