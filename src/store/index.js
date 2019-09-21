import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import User from './modules/User/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
  },
  getters,
})
