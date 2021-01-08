import { reqGetSongerList, reqGetSongerListTop, reqGetRankingDetail, reqGetProductSong } from "../../api/digital"
export default {
    state: {
        songerList: {},//歌手的歌曲列表
        songerListTop: {},
        newDisc: {},
        newPro: [], //专辑歌曲列表
    },
    actions: {
        //发送请求 根据歌手获取器全部歌曲
        async getSongerList({ commit }, id) {
            let songerList = await reqGetSongerList(id);
            songerList = songerList.songs.slice(0, 6)
            // console.log(songerList);
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
        // 获取专辑的歌曲 的歌曲
        async reqGetProductSong({ commit }, id) {
            let productSong = await reqGetProductSong(id);
            let newPro = productSong.songs.map((item) => {
                let dt = Math.floor(item.dt / 1000)
                var min = Math.floor(dt / 60 % 60); //分
                var sec = Math.floor(dt % 60); //秒
                if (min < 10) {
                    min = "0" + min
                }
                if (sec < 10) {
                    sec = "0" + sec
                }
                dt = min + ":" + sec
                return {
                    name: item.name,
                    songer: productSong.album.artist.name,
                    time: dt
                }
            })


            console.log(newPro);
            console.log(productSong);

            commit('GET_PRODUCT_SONG', newPro)
        },
        async getProductDetail({ commit }, id) {
            let productDetail = await reqGetRankingDetail(id);
            console.log(productDetail);
            //将返回来的数据处理一下 。公共组件渲染
            let newDisc = {
                picUrl: productDetail.album.coverUrl,    //专辑图片
                name: productDetail.album.albumName,     //专辑名
                albumId: productDetail.album.albumId,     //专辑ID
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
        GET_PRODUCT_SONG(state, newPro) {
            console.log("GET_PRODUCT_SONG写入");
            state.newPro = newPro
        },
        GET_SONGER_LIST_TOP(state, songerListTop) {
            state.songerListTop = songerListTop
        },
        GET_PRODUCT_DETAIL(state, newDisc) {
            state.newDisc = newDisc
        },
    },
}