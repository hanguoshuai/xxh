<template>
  <div id="app">
   
    <router-view>
    
    </router-view>
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
html,body{
  
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

.mt-progress-runway{
    border-radius:5px;

}
.mt-progress-progress{
  background-color:red;
}

 .v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
 
}
</style>
