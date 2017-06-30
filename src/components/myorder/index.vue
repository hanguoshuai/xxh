<template>
<div class="myorder">
<header-zm>
  <span slot="center">我的订单</span>
</header-zm>
  <div class="xuanxiangka">
    <ul>
    <li><router-link to="/myorder">全部</router-link></li>
    <li><router-link to="/myorder/unpaid">待付款</router-link></li>
    <li><router-link to="/myorder/paid">待发货</router-link></li>
    <li><router-link to="/myorder/send">待收货</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'my-order',
  data () {
    return {
        selected:"1"
    }
  },
  methods: {
fn1 () {

}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xuanxiangka{padding-top:47px; }
.xuanxiangka ul{display: flex;justify-content: space-around;border-bottom: 1px solid #ccc;}
.xuanxiangka li{line-height: 50px;color: #000;font-size: 16px;}

</style>
