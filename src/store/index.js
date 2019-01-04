import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);
// 引入模块
import upload from './modules/upload';
import cityPicker from './modules/citypicker';

export default new Vuex.Store({
  modules: {
    upload,
    cityPicker
  },
  plugins: [createLogger()]
})
