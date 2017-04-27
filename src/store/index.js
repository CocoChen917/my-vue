import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	modal_show: false,
	modal_data: []
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})