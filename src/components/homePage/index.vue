<template>
    <div>
      <my-header title='首页'>
       <li slot='left'>
             <i class="icon iconfont">&#xe60b;</i>
       </li>
       <li slot='center'>
             
              <router-link to='/sousuo'>
              <div class='sousuo '><i class="icon iconfont">&#xe60c;</i>
                <input type="text" />
                </div>
              </router-link>
             
       </li>
      </my-header>
     <!--内容部分-->
       <div class='hgs-content'>  
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">推荐</mt-tab-item>
          <mt-tab-item id="2">活动</mt-tab-item>
          <mt-tab-item id="3">全球旗舰</mt-tab-item>
          <mt-tab-item id="4">网易严选</mt-tab-item>
          <mt-tab-item id="5">母婴</mt-tab-item>
          <mt-tab-item id="6">美妆</mt-tab-item>
          <mt-tab-item id="7">箱包配饰</mt-tab-item>
          <mt-tab-item id="8">美食保健</mt-tab-item>
          <mt-tab-item id="9">家居个护</mt-tab-item>
          <mt-tab-item id="10">直邮数码</mt-tab-item>
          <mt-tab-item id="11">运动户外</mt-tab-item>
          <mt-tab-item id="12">服饰鞋靴</mt-tab-item>
          <mt-tab-item id="13">生鲜</mt-tab-item>
          <mt-tab-item id="14">国家馆</mt-tab-item>
         
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" ref='thefirst'>
                <my-swipper></my-swipper>
                <my-listone></my-listone>
                <my-listtwo></my-listtwo>
                <my-phonetime :hgslist-data='hgslistData'></my-phonetime>
                <my-hotmarket :hgsgood-list='hgsgoodList'></my-hotmarket>
                <my-backTop @back-top='backTop'></my-backTop>
               
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell v-for="n in 4" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :title="'选项 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container> 
      </div>
      
    </div>
</template>

<script>
var qs = require('qs');
import listone from '@/components/homePage/list-one'
import swipper from '@/components/homePage/swipper'
import listtwo from '@/components/homePage/list-two'
import phonetime from '@/components/homePage/phonetime'
import hotmarket from '@/components/homePage/hotmarket'
import backTop from '@/components/homePage/backTop'
import sousuo from '@/components/homePage/sousuo'

export default {
  name: 'my-home',
  data () {
    return {
      selected:'1',
      hgslistData:[],
      hgsgoodList:[],
     
    }
  },
  components:{
    'my-listone':listone,
    'my-listtwo':listtwo,
    'my-phonetime':phonetime,
    'my-swipper':swipper,
    'my-hotmarket':hotmarket,
    'my-backTop':backTop,
    'my-sousuo':sousuo
  },
  methods:{
    backTop(){
      
      var a = this.$refs['thefirst'];
      console.log(a)
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
      
    }
  },
  mounted(){
    
      var params=qs.stringify({'pageSize':16,'pageNo':3})
      this.$http.post('/api',params,{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
        }).then(response=>{
          
          var data = response.data.body.flashSaleFloor.onSaleGoodsList;
          console.log(data)
          this.hgslistData=data
        })
        var params1=qs.stringify({'pageSize':16,'pageNo':0})
        this.$http.post('/phone',params1,{
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
        }).then(response=>{
          var hgsdata = response.data.body.goodsList;
          console.log(response.data.body.goodsList)
          this.hgsgoodList = hgsdata
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hgs-content{
  padding-top:50px;
 
}
.hgs-content .mint-navbar{
  height:50px;
  width:100%;
  overflow-x:auto;
  white-space:nowrap;
  font-size:12px;
 
}
.hgs-content  .mint-tab-item {
  display:inline-block;
  line-height:38px;
  padding:0 18px;
  height:38px;
  text-align:center;
  
}
</style>