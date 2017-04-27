<template>
    <div class="test">
   		<span>{{ msg }}</span>        
    </div>
</template>
<script>
	export default {
		data() {
			return {
				msg:'我们cocococcocococcocococococ'
			}
		},
		created(){
			fetch("http://localhost:5000/api/apples")
			.then(resp =>{
				resp.json().then(data => {
					console.log('my_test:'+data)
				})
			})

		}
	}
</script>
<style scoped>      
</style>