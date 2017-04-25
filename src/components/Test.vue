<template>
  <div class="Test">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script type="text/javascript" src="https://unpkg.com/tween.js@16.3.4"></script>
<script>

export default {
  name: 'Test',
  data () {
    return {
      number: 0,
      animatedNumber: 0
    }
  },
  watch:{
    number: function(newValue, oldValue) {
      var vm = this
      function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
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
