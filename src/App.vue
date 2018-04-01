<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Nav v-if="this.$route.path=='/'"></Nav>
  </div>
</template>

<script>
	import Header from './components/header/header'
	import Nav from '@/components/nav/nav'
export default {
  name: 'App',
  components:{
  	Header,
  	Nav
  },
  mounted: function() {
  	console.log(this.$route.path)
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
/*$primary-color: #333;

body {
  color: $primary-color;
}*/

$backd:#cccccc;
body{
	background: $backd;
}

</style>

