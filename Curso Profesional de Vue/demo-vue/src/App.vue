<template lang="pug">
  
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    child

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<style lang="scss">
@import './scss/main.scss'
</style>
