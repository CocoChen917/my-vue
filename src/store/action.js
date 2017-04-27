export default {
	async toggle_modal({
		commit,
		state
	}, obj) {
		/**
		 * obj = {
		 * 		url: '/api/data/' ,
		 * 		status: true/false
		 * }
		 * status ＝ true代表show modal ;false 代表hide modal
		 */
		let status = obj.status
		if (status) {
			let _url = obj.url
			let _page = obj.page || 1
			await fetch('http://localhost:8000' + _url + '&page=' + _page).then(res => {
					res.json().then(data => {
						if (data.status_code == 0) {
							commit('SAVE_MODAL_DATA', data.data)
						} else {
							commit('SAVE_MODAL_DATA', [])
						}
					})
				})
			commit('CHANGE_MODAL_STATUS', true)
		} else {
			commit('CHANGE_MODAL_STATUS', false)
			commit('SAVE_MODAL_DATA', [])
		}
		
	}
}