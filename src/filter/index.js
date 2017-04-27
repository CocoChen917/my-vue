import Vue from 'vue'

Vue.filter('date', function(value, key) {
	if (!value){
		return value
	}
	return value.slice(0, 10)
})