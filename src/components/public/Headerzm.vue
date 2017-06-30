<template>
    <div class="header">
        <ul>
            <li class="header-btn">
               <slot name="left">
               </slot>
            </li>
            <li class="header-tit">
                <slot name="center">
                </slot>
            </li>
            <li  class="header-btn">
               <slot name="right">
                 <router-link :to="{ path: '/' }"><i class="icon iconfont">&#xe7a4;</i></router-link>
                 <router-link :to="{ path: '/mine' }"><img src="http://haitao.nos.netease.com/20160615201133774ee6ff3bec4db8a3dba0ee58072bd6.jpeg" alt="" /></router-link>
             </slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'header-zm',
  data(){
      return  { msg: 'Welcome to Your Vue.js App'}
  },
  props:{
      title:{
          type:String,
          default:"头部内容"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header { height: 47px; position: fixed; width: 100%;background:#fff;
font-size:30px;
     line-height: 44px; border-bottom: 1px solid #ccc}
.header .header-tit span{font-size: 16px;}
.header  ul { display: flex;text-align: center;height: 44px;}
.header-tit { flex: 1 }
.header-btn {width: 60px; }
.header .icon{
    font-size:20px;
}
.header img{width: 24px;height: 24px;margin-top: 12px;}
.header .header-tit{
}
.header .header-tit .sousuo{
   float:right;
    dispaly:inline-block;
    height:28px;
   width:100%;
    background:#eaebed;
    border:none;
    border-radius:5px;
    margin-top:11px;

}
.header .header-tit .sousuo .icon{
   font-size:13px;
   float:left;
   height:28px;
   margin-top:-7px;
   margin-left:8px;
}
.header .header-tit input{
    float:right;
    dispaly:inline-block;
    height:28px;
    width:90%;
    background:#eaebed;
    border:none;
    border-radius:5px;
}
</style>
