<!--小的列表-->
<template>
    <div class='listone'>
        <slot name='listone-left'>
            <img src="../../assets/listone.jpg" alt="">
            
        </slot>
        <slot name='listone-right'>
            <img src="../../assets/listone.jpg" alt="">
        </slot>
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
.listone{
  overflow:hidden;
}
    .listone img:nth-child(1){
        display:inline-block;
        width:50vw;
        float:left;     
    }
     .listone img:nth-child(2){
        display:inline-block;
        width:50vw;
        float:right;     
    }
</style>