/**
 * Created by yiyang1990 on 2017/4/25.
 */
import Vue from 'vue'

import Vuex from 'vuex'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store