<template>
    <div class='backTop' @click='backTop()' >
        顶部
    </div>
</template>

<script>
export default {
  name: 'my-backTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    backTop(){
        this.$emit('back-top')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .backTop{
        height:40px;
        width:40px;
        border-radius:20px;
        position:fixed;
        bottom:60px;
        right:20px;
        background:rgba(0,0,0,.4);
        color:#fff;
        text-align:center;
        line-height:40px;

    }
</style>