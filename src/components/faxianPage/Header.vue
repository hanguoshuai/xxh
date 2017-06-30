<template>
    <div class="header">
        <ul>
            <li class="header-btn">
               <slot name="left">
                    <i class="icon iconfont">&#xe60b;</i>
               </slot>
            </li>
            <li class="header-tit">
                <slot name="center">
                    <span class="buy-left"  @click="list='v-buy'">值得买</span>
                    <span class="video-right" @click="list='v-video'">视频</span>
                </slot>
            </li>
            <li  class="header-btn">
               <slot name="right">
                    <i class="icon iconfont">&#xe6a6;</i>
               </slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'fx-header',
  data:function(){
      return  {}
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
    .header  ul { display: flex;text-align: center}
    .header-tit { flex: 1 }
    .header-btn {width: 60px; }
    .header .icon{
        font-size:20px;
    }
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
    .buy-left,.video-right{
        display:inline-block;
        overflow:hidden;
        width:46px;
        line-height:45px;
        font-size:14px;
        border-bottom:2px solid #e31436;
        box-sizing:border-box;
    }
</style>