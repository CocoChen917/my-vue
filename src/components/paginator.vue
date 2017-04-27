<template>
	<ul class="c_paginator list-inline" v-if="pages && nums">
		<li :class="{active: active_index == num}"v-for="num in nums" :key="num" @click="click_num(num)">{{ num }}</li>
	</ul>
</template>
<script>
	export default {
		data() {
			return {
				active_index: 1,
				total: 0
			}
		},
		props:['pages', 'url'],
		computed:{
			nums() {
				let n = parseInt(this.pages / 10) 
				let m = this.pages % 10
				let total = n
				if (n > 0 && m > 0) {
					total = n + 1
				} 
				return total
				
			}
		},
		methods:{
			click_num(num) {
				this.active_index = num
				let n = parseInt(num)
				this.$store.dispatch('toggle_modal', {
					url: this.url,
					status: true,
					page: n
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.c_paginator{
		text-align: center;
		li{
			margin: 0 5px;
			&.active{
				color: #00a0e8;
			}
		}
	}
</style>