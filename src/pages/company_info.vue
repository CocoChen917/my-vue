<template>
	<div class="container-fuild">
		<div v-if="infos">
			<h5 class="title">{{ infos.name_cn }}</h5>
			<!-- 基本信息 -->
			<section>
				<h5>基本信息</h5>
				<table class="table table-bordered">
					<tbody>
						<tr>
							<td>公司简介</td>
							<td>{{ infos.intro_cn }}</td>
						</tr>
						<tr>
							<td>公司类型</td>
							<td>{{ infos.get_new_type_display }}</td>
						</tr>
						<tr>
							<td>成立日期</td>
							<td>{{ infos.found_time | date }}</td>
						</tr>
						<tr>
							<td>法人代表</td>
							<td>{{ infos.legal_representative }}</td>
						</tr>
						<tr>
							<td>邮箱</td>
							<td>{{ infos.email }}</td>
						</tr>
						<tr>
							<td>联系电话</td>
							<td>{{ infos.tel }}</td>
						</tr>
						<tr>
							<td>公司地址</td>
							<td>{{ infos.address_cn }}</td>
						</tr>
						<tr>
							<td>注册地址</td>
							<td>{{ infos.reg_address }}</td>
						</tr>

					</tbody>
				</table>
			</section>
			<!--基金信息-->
			<section class="special_section" v-if="infos.funds && infos.funds.length">
				<h5>管理基金</h5>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>基金名称</th>
							<th>起投时间</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="fund in infos.funds">
							<td>{{ fund.name_cn }}</td>
							<td>{{ fund.set_up_time | date}}</td>
						</tr>
					</tbody>
				</table>
				<div class="more" :class="{hidden: hidden_more.fund }">
					<a href="#" :data-url="'/api/data/easy_funds/?company_id=' + infos.id" data-item="fund" :data-counts="infos.summary.funds_count" @click.prevent="show_modal">查看更多&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i></a>
				</div>
			</section>
			<!-- 对外投资 -->
			<section class="special_section" v-if="infos.invests && infos.invests.length">
				<h5>对外投资</h5>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>公司名称</th>
							<th>日期</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="invest in infos.invests">
							<td>{{ invest.company_name }}</td>
							<td>{{ invest.happened_date | date }}</td>
						</tr>
					</tbody>
				</table>
				<div class="more" :class="{hidden: hidden_more.invest}">
					<a href="#" :data-url="'/api/data/easy_events/?company_id=' + infos.id" data-item="invest" :data-counts="infos.summary.invests_count" @click.prevent="show_modal($event)">查看更多&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i></a>
				</div>
			</section>
			<!-- 高管信息 -->
			<section v-if="infos.teams && infos.teams.length">
				<h5>高管信息</h5>
				<table class="table table-bordered">
					<tbody>
						<tr v-for=" team in infos.teams ">
							<td>{{ team.title.slice(-1) == '/' ? team.title.slice(0, -1) : team.title  }}</td>
							<td>{{ team.name }}</td>
						</tr>
					</tbody>
				</table>
			</section>
			<transition name="fade">
				<v-modal v-show="modal_show" :datas="modal_data" :counts="counts" :url="link_url" :current="current_page"></v-modal>
			</transition>	
		</div>
		<img v-else src="../images/nopage.png" alt="">
	</div>
</template>
<script>
	import vModal from '@/components/modal'
	export default {
		data() {
			return {
				infos: {},
				hidden_more: {
					invest: true,
					fund: true
				},
				counts:0,
				link_url:'',
				current_page:1
			}
		},
		components:{
			vModal
		},
		methods: {
			show_modal(event) {
				this.current_page = 1
				let _url = event.target.getAttribute('data-url')
				// let item = event.target.getAttribute('data-item')
				let counts = event.target.getAttribute('data-counts')
				this.$store.dispatch('toggle_modal', {
					url: _url,
					status: true
				})
				this.counts = parseInt(counts)
				this.link_url = _url
			}
		},
		computed: {
			modal_show() {
				return this.$store.state.modal_show
			},
			modal_data() {
				return this.$store.state.modal_data
			}
		},
		created() {
			let _id = this.$route.params.id
			if (!_id) {
				return
			}

			fetch('http://localhost:8000/api/easy_companies/' + _id + '/')
			.then(res => {
				res.json().then(data => {
					if (data.status_code == 0) {
						this.infos = data.data
						this.hidden_more.invest = !data.data.summary.invests_count > 10
						this.hidden_more.fund = !data.data.summary.funds_count > 10
					}
				})
			})
		},

	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
 		opacity: 0
	}
	.container-fuild{
		background-color: #eee;
	}
	
	h5{
		color: #3d61ac;
		background-color: #fff;
		font-size: 16px;
		font-weight: 400;
		padding: 15px 0;

	}
	h5:before{
		content: "";
		display: inline-block;
		height: 12px;
		width: 2px;
		margin-right: 5px;
		background-color: #3d61ac;
		vertical-align: initial;
	}
	.title{
		padding: 15px;
	}
	section{
		background-color: #fff;
		padding: 0 15px 15px;
		margin: 15px 0;
	}
	.table{
		margin-bottom: 0px!important;
	}
	td{
		text-align: left;
		padding: 15px 20px!important;
		vertical-align: middle!important;
		word-break: break-word;
	}
	td:first-child{
		padding: 8px!important;
		background-color: #f2f5fa;
		width: 28%;
	}
	.special_section th{
		background-color: #f2f5fa;
		border-bottom-width: 1px!important;
		text-align: center;
		font-weight: normal;
		vertical-align: middle!important;
	}
	.special_section td:first-child{
		background-color: transparent;
	}
	
	.more{
		margin-top: 15px;
		text-align: right;
	}

	.btns{
		text-align: center;
		margin-bottom: 20px;
	}
	.btns .btn{
		color: #517bdf!important;
		border-color: #0a6efa!important;
		outline: 0!important;
		background-color: transparent!important;
		font-weight: 200;
		padding: 2px 10px;
	}
	.btns .btn.active{
		background-color: #0a6efa!important;
		color: #fff!important;
	}

</style>