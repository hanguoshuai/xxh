<template>
<div class="card">
<header-zm>
  <span slot="center">我的优惠券</span>
</header-zm>
  <div class="empty">
      <span class=" icon iconfont ">&#xe627;</span>
  </div>
  <p>没有可以用的优惠券</p>
</div>
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.header~.empty{padding-top: 47px;}
.empty {width: 100%;height: 150px;text-align: center;line-height: 150px;}
.empty span{font-size: 50px;}
p{font-size: 16px;width: 100%;text-align: center;}
</style>
