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
                  <div class='sousuo '><i class="icon iconfont">&#xe60c;</i><input type="text" ></div>
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
  name: 'my-header',
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
</style>
