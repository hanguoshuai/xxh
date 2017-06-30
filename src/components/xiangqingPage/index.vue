<template>
    <div>
    <div class='guanggaowei'>广告位</div>
      <div class='nomove'>
        <ul :class='{"class1":!fixed,"class2":fixed}' ref='aaa' >
        <li >商品</li>
         <li @click='pj'>评价</li>
        <li @click='tj'>推荐</li>
       
        <li @click='xq'>详情</li>
      </ul>
      </div>
      <div class="content">
        <div class='lunbotu'>
            <my-swipper></my-swipper>
        </div>
      </div>
      <div class="qianggou">抢购</div>
      <div class="price">价格</div>
      <div class="baoshui">保税</div>
      <div class="peisong">配送</div>
      <div class="pingjia" ref='pingjia'>评价</div>
      <div class="tuijian" ref='tuijian'>推荐</div>
      <div class="tuwenxiangqing" ref='xiangqing'>图文详情</div>
    </div>
</template>

<script>
import hgsswipper from '@/components/xiangqingPage/swipper'
var timer = null;
export default {
  name: 'my-xiangqing',
  data () {
    return {
      fixed:false
    }
  },
  components:{
    'my-swipper':hgsswipper
  },
  methods:{
     fn(){
      console.log(this.$refs)
      },
    //应该用一个循环
      pj(){
          var pingjia = this.$refs['pingjia'];
          console.log(pingjia.offsetTop)
          document.body.scrollTop=pingjia.offsetTop-50;
      },
     tj(){
        var tuijian = this.$refs['tuijian'];
        console.log(tuijian.offsetTop)
        document.body.scrollTop=tuijian.offsetTop-50;
      },
      xq(){
        var xiangqing = this.$refs['xiangqing'];
        console.log(xiangqing)
        console.log(xiangqing.offsetTop)
        document.body.scrollTop=xiangqing.offsetTop-50
         console.log(xiangqing.offsetTop)
      }
  }
 ,
  mounted(){
      window.addEventListener('scroll',(ev)=>{     
      var juli = document.body.scrollTop;
         console.log(juli)
      if(juli>50){
         this.fixed=true
      }else{
         this.fixed=false
      }
    })
    console.log(this.$route.params.id)
    this.$http.get('/time/product/commentAndRecommandData.html?goodsId=1443259&brandId=1369&t=1498717005146')
    .then(res=>{
      console.log(res)
    })




    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.guanggaowei{
  height:50px;
}
.nomove{
  height:50px;
  width:100%;
}
.class1{
  width:100%;
    height:50px;
   
    li{
      float:left;
      width:25%;
      height:50px;
      background:#ccc;
      text-align:center;
    }
}
  .class2{
    width:100%;
    height:50px;
    position:fixed;
    top:0px;
    left:0px;
    li{
      float:left;
      width:25%;
      height:50px;
      background:#ccc;
      text-align:center;
    }
  }
  .lunbotu{
    height:300px;
    width:100%;
  }
  .qianggou{
    height:45px;
    width:100%;
  }
  .price{
    height:50px;
    width:100%;
  }
  .peisong{
    height:200px;
  }
  .pingjia{
    height:300px;
  }
  .tuijian{
    height:200px;
  }
  .tuwenxiangqing{
    height:2000px;
  }
</style>