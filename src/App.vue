<template>
  <div id="app">
    <router-view></router-view>
   </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
body
  font-family: PT Sans
  margin: 0
  box-sizing: border-box
  background-image: url('../src/img/black.png');
  overflow-y: scroll;

ol, ul
  list-style: none

a
  text-decoration: none

h1,h2,h3,h4,h5,h6
  margin: 0

#app
  max-width: 1280px
  margin: 0 auto
</style>
