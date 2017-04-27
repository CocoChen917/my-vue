<template>
		<div class="modal_wrap">
			<div class="c_modal container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h5 class="panel-title clearfix"><span class="modal_close pull-right glyphicon glyphicon-remove" @click='close_modal'></span></h5>
					</div>
					<div class="panel-body">
						<table class="table table-bordered" v-if="datas">
							<tbody>
								<tr v-for="(item, index1) in datas" :key="index1">
									<td v-for="(value, key, index2) in item" :key="index2">
										{{ format(value, key) }}
									</td>
								</tr>
							</tbody>
						</table>
						<p v-else>sorry, no data!</p>
					</div>
					<div class="panel-footer">
						<el-pagination
						    layout="prev, pager, next"
						    :total="counts"
						    @current-change="click_num">
					  	</el-pagination>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
	import filter from '@/filter'
	export default {
		data() {
			return {
			}
		},
		props: {
			datas:{
				type: Array,
				required: true
			},
			counts:{
				type: Number,
				required: true
			},
			url:{
				type: String
			}
		},
		methods:{
			close_modal() {
				this.$store.dispatch('toggle_modal', {
					status: false
				})
			},
			format(value, key) {
				if (key == 'set_up_time' || key == 'happened_date') {
					return value.slice(0, 10)
				} else {
					return value
				}
			},
			click_num(num) {
				let n = parseInt(num)
				this.current_page = n
				this.$store.dispatch('toggle_modal', {
					url: this.url,
					status: true,
					page: n
				})
			}
		},
		beforeUpdate(){
			let body = document.getElementsByTagName('body')[0]
			let modal_status = this.$store.state.modal_show
			if (modal_status){
				body.style.overflow = 'hidden'
			} else {
				body.style.overflow = 'auto'
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.modal_wrap{
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		left:0;
		bottom: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		overflow-y: auto;
		overflow-x: hidden;
		.c_modal{
			max-width: 800px;
			position: relative;
			top: 10%;
			.panel-title{
				.modal_close{
					cursor: pointer;
				}
			}
		}

		.el-pagination{
			text-align: center;
		}
	}
</style>