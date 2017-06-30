<template>
    <div class="mypage">
      <header-zm>
          <span slot="center">个人中心</span>
      </header-zm>
      <div class="banner">
        <router-link :to="{ path: '/myinfo' }"><img src="http://haitao.nos.netease.com/20160615201133774ee6ff3bec4db8a3dba0ee58072bd6.jpeg?imageView&thumbnail=65x0&quality=95&" alt="" /></router-link>
        <router-link :to="{ path: '/myinfo' }"><p style="margin-left:16px">owl</p></router-link>
      </div>
      <router-link :to="{ path:'myorder' }"><mt-cell title="我的订单" to="//github.com" is-link value="查看订单" ></mt-cell></router-link>
      <div class="orderlist">
        <ul class="orderdetail">
          <router-link :to="{ path:'myorder' }">
            <li><span class="icon iconfont">&#xe636;</span><span>全部</span></li>
          </router-link>
          <router-link :to="{ path:'myorder/unpaid' }">
          <li><span class="icon iconfont">&#xe610;</span><span>待付款</span></li>
          </router-link>
          <router-link :to="{ path:'myorder/paid' }">
          <li><span class="icon iconfont">&#xe610;</span><span>待发货</span></li>
          </router-link>
          <router-link :to="{ path:'myorder/send' }">
          <li><span class="icon iconfont">&#xe62d;</span><span>待收货</span></li>
          </router-link>
        </ul>
      </div>
      <mt-cell title="我的优惠券" to="/cards" is-link value="0张优惠券"></mt-cell>
      <mt-cell title="我的收藏" to="/favorites" is-link value=""></mt-cell>
      <mt-cell title="关于考拉" to="/quality" is-link ></mt-cell>
      <mt-cell title="下载考拉APP" to="/appdownload" is-link></mt-cell>
      <div class="dibu">
        <a href="#">首页</a><span>|</span>
        <router-link :to="{ path:'appdownload' }">
          <a href="#">客户端</a><span>|</span>
        </router-link>
        <span href="#">zhengme...</span><span>|</span>
        <a href="#">退出</a><span></span>
        <p class="banquan">网易公司版权所有@1997-2007</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'my-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{width: 100%;height: 141px;padding-top: 47px;
  background: url(http://w.kl.126.net/res/images/personal/userCenter/profile-bg.png?6d111bc9fc56e0026c4093e47e330116);
  padding: 80px 0 0 150px;
}
.dibu{padding: 20px;}
.dibu a{padding: 12px;color: #999;}
.dibu .banquan{line-height: 20px;font-size: 12px; color: #ccc;padding: 12px 46px;}
.orderlist{width: 100%;height: 80px;border-top: 1px solid #ccc;border-bottom:1px solid #ccc; }
.orderlist .orderdetail{display: flex;justify-content: space-around;color: #999;}
.orderlist .orderdetail li{display: flex;flex-direction: column;justify-content: space-around;height: 80px;color: #999;}
.orderdetail .icon{font-size: 20px;padding: 8px;}
</style>
