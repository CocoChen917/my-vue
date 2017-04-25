<template>
  <div class="hello">
    <Header></Header>
    <h1>{{ msg }}</h1>
    <h2>hello world</h2>    
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'hello',
  data () {
    return {
      msg: '全能人脉管理'
    }
  },components: {
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	padding-top:52px;
  background-color:#0A1A3B; 
}
h1, h2 {
  font-weight: normal;
}
h1{
  font-size:50px;
  font-weight:bold;
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#98cef8), to(#4e70c1) );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  /*-webkit-text-shadow:1px 1px 1px #0CC;  
  -moz-text-shadow:1px 1px 1px #0CC;  
  text-shadow:1px 1px 1px #0CC;   */
}
a {
  color: #42b983;
}
</style>