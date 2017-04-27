<template>
    <div class="test">
   		<span>{{ msg }}</span>        
        <section v-for="company in companys">
        	<h2>{{ msg }}</h2>
            <router-link :to="'/company_info/' + company.id">
            	<h5>{{ company.name_cn }}</h5>
            </router-link>
        </section>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				msg:'我们',
				companys:[]
			}
		},
		created(){
			// let keyword = this.msg
			
			let keyword = this.$route.params.msg
			if (!keyword) {
				return
			}
			/*
			fetch('http://localhost:8000/api/easy_companies/',{
				method:"POST",
				headers:{
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body:"search="+keyword
			})
			*/

			fetch('http://localhost:8000/api/easy_companies/?search=' + keyword)
			.then(resp => { 				
				resp.json().then(code => {
					console.log(code);
					console.log(typeof code)
					console.log(code.status_code);
					this.companys = code.data
				})
			})
			.catch(error => { 
				console.log(error)
			})

		}
	}
</script>
<style scoped>      
</style>