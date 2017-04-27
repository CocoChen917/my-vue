import {
	CHANGE_MODAL_STATUS,
	SAVE_MODAL_DATA
} from './mutation-types'

export default  {
	[CHANGE_MODAL_STATUS](state, modal_status) {
		state.modal_show = modal_status
	},
	[SAVE_MODAL_DATA](state, data){
		state.modal_data = data
	}
}