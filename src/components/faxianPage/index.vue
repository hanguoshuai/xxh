<template>

    <div class="box">
        <div class="header">
            <ul>
                <li class="header-btn">
                  <slot name="left">
                        <i class="icon iconfont">&#xe60b;</i>
                  </slot>
                </li>
                <li class="header-tit">
                    <slot name="center">
                        <span class="buy-left"  @click="changeborder1($event)"  ref="a1">值得买</span>
                        <span class="video-right" @click="changeborder2($event)"  ref="a2">视频</span>
                    </slot>
                </li>
                <li  class="header-btn">
                  <slot name="right">
                        <i class="icon iconfont">&#xe6a6;</i>
                  </slot>
                </li>
            </ul>
        </div>
        
        <my-content class="content">
           <keep-alive>
              <component :is="list"></component>
           </keep-alive>
        </my-content>

    </div>
</template>

<script>
// import Header from './Header';
import Buy from './buy';
import Video from './video';

export default {
  name: 'my-faxian',

  data:function(){
    return  {list:"v-buy"}
  },
  components:{
    // "fx-header":Header,
    "v-buy":Buy,
    "v-video":Video
    // 'list1':Buy,
    // 'list2':Video
  },
  methods: {
      changeborder1(ev){
          console.log(this.$refs.a2)
          var z=this.$refs.a2;
          z.style.borderBottom = "none";
          ev.target.style.borderBottom = "2px solid #e31436";
          this.list='v-buy'   

      },
      changeborder2(ev){
          this.list='v-video'
           var z=this.$refs.a1;
          z.style.borderBottom = "none";
            ev.target.style.borderBottom = "2px solid #e31436";
   
      }

  }



}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  background-color:#e5e5e5;
}
.content{
    margin-bottom:50px;
}
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
        box-sizing:border-box;
    }
    .buy-left{
        border-bottom :2px solid #e31436;

    }
</style>