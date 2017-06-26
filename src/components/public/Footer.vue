<template>
 <div class="footer">
        <ul>
            <li v-for="(data,index) in footerData">
                <router-link  :to="data.path">
                    <div><span class="icon iconfont">{{data.icon}}</span></div>
                    <div><span class="text">{{data.text}}</span></div>
                </router-link>
            </li>
          
        </ul>
    </div>
</template>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    footerData:{
      type:Array,
      default(){
        return [  
            {text:"首页",icon:"\ue7a4","path":"/"},
            {text:"分类",icon:"\ue605","path":"/list"},
            {text:"发现",icon:"\ue680","path":"/faxian"},
            {text:"购物车",icon:"\ue627","path":"/cart"},
            {text:"我的考拉",icon:"\ue6a8","path":"/mine"}
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .footer { position: fixed; bottom: 0; left: 0; 
        width: 100%; border-top: 1px solid #ccc; background:#fff

        }
.footer ul {height: 50px;}
.footer li { float: left; width: 20%; text-align: center;}
.footer a {display: block; width: 100%; height: 100%;color:#666}
.footer .icon {  line-height: 30px; font-size: 20px;}
.footer .text { line-height: 18px; font-size: 12px;  }
.footer .router-link-exact-active { color:#e31436}
</style>