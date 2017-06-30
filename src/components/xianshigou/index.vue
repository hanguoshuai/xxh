<template>
    <div>
       <header class='xianshiHeader'>限时购</header>
      
        <div class='hgsxianshi'>
             <my-xianshilist @get-data="getData" :hgs-xianshi='hgsxianshi'></my-xianshilist>
              <my-time :xianshi-data='xianshiData'></my-time>
             <my-xianshiProduct :xianshi-data = 'xianshiData'></my-xianshiProduct>
        </div>
        <div class='hgsxianshicontent'>
            内容区域
        </div>
    </div>
</template>

<script>
 var qs = require('qs');
 import hgsxianshi from '@/components/xianshigou/xianshi'
 import xianshiProduct from '@/components/xianshigou/xianshicontent'
 import time from '@/components/xianshigou/time'
export default {
  name: 'my-xianshigou',
  data () {
    return {
        selected:1,
        
        hgsxianshi:[],
        xianshiData:[]
       
    }
  },
  components:{
        'my-xianshilist':hgsxianshi,
        'my-xianshiProduct':xianshiProduct,
        'my-time':time
  },
  methods:{
    getData(id){
        var params = qs.stringify({"tabId":id,
        "showTomorrow":'',"limit":10,"offset":0})
        this.$http.post('/time/activity/onsale/goodsList.html',params,{headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }})
        .then(res=>{
            var a = res.data.body.goodsList;
            console.log(res.data.body.goodsList)
            this.xianshiData=a
            
        })
    }
  },
  mounted(){
      this.getData()
        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
   .xianshiHeader{
       height:45px;
       line-height:45px;
       text-align:center;
       border-bottom:1px solid #ccc;
   }
   .router-link-exact-active{
       background:red;
   }
  
</style>