<template>
  <div class="Coco">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Coco',
  data () {
    return {
      msg: '我是 COCO,我很乖,我马上两岁了'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
