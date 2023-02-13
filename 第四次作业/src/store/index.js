import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'//引入侧边栏收缩js

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    zh:"xianianmian",
    mm:"123456",
    kk:["sdf","sfsdffs","fdg"]
  },
  mutations: {
  },
  actions: {
  },
  modules: {//导入
    tab
  }
})
