<template>   
    <div class='swipper'>
        <mt-swipe :auto="4000">
        <mt-swipe-item>
            <router-link to="/list" >
            <img src="../../assets/swipper-01.jpg" alt="">
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link to="/">
                <img src="../../assets/swipper-02.jpg" alt="">
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link to="/">
                <img src="../../assets/swipper-03.jpg" alt="">
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
    </div>

</template>

<script>

export default {
  name: 'header-swipper',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .swipper{
            height:187.5px;
        }  
        .swipper>a{
            display:block;
            height:187.5px;
        } 
         .swipper img{
             width:100%;
             heigth:100%;
         }     

</style>
