<template>
<div>
    <ul class="classlist">
        <li v-for="(data,index) in navData" 
            class="class-list">
            <router-link  :to="data.path">
                <div class="tubiao"><span class="icon iconfont">{{data.icon}}</span></div>
                <div class="miaoshu"><span class="list-text">{{data.text}}</span></div>
            </router-link>
        </li>
    </ul>
    <goods-list></goods-list>
</div>
</template>
<script>
import GoodsList from './goodslist';
export default {
  name: 'my-buy',
  components:{
    "goods-list":GoodsList
  },
  methods: {

  },
  props:{
    navData:{
      type:Array,
      default(){
        return [  
            {text:"好物清单",icon:"\ue62f","path":"/"},
            {text:"精选单品",icon:"\ue613","path":"/list"},
            {text:"好文 丁磊推荐",icon:"\ue60f","path":"/faxian"}
        ]
      }
    }
  }


}
</script>
<style scoped>
.classlist{
  display:flex;
  justify-content:space-around;
  width:100%;
  overflow:hidden;
  background-color:#fff;
  padding:10px 0;
}
.class-list{
  width:33%;
  height:70px;
  text-align:center;
  border-right:1px solid #e5e5e5;
  box-sizing:border-box;
}
.iconfont{
  font-size:30px;
}
.list-text{
  font-size:14px;
}
.tubiao{
  margin-top:15px;
}
.miaoshu{
  line-height:30px;
} 
</style>