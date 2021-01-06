// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 引入modules模块
import modules from './modules';
// 声明使用vuex
Vue.use(Vuex);

// 储存状态数据容器
const state = {};
// 储存计算属性数据容器
const getters = {};
// 包含了多个间接修改状态数据的方法的对象
const actions = {};
// 包含了多个直接修改状态数据的方法的对象
const mutations = {};

// 实例化vuex的对象并暴露出去
export default new Vuex.Store({
	state, //总的state
	getters, //总的getters
	actions, //总的actions
	mutations, //总的mutations
	modules // 其他多个子模块的数据
});
