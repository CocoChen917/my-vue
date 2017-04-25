<template>
	<div class＝"Test1">
		<input v-model.number="number" type="number" step="20">
		<p>{{ animatedNumber }}</p>
	</div>
</template>
<script type="text/javascript" src="http://unpkg.com/tween.js@16.3.4"></script>
<script>
	export default{
		name: "Test1",
		data(){
			return {
				number:0,
				animateNumber: 0	
			}	
		},
		watch:{
			number:function(){
				
			}
		}
	}
</script>