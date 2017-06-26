<template>
  <div id="app">
   
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
*{
  padding:0px;
  margin:0px;
}
ul,li{
  list-style:none;
}
input{
  outline:none;
}
a{
  text-decoration:none;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}
</style>
