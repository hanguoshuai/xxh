<template>
    <ul class='xianshiContent'>
       
        <li v-for='(ele,index) in xianshiData' >  
              <router-link :to="'/xiangqing/'+ele.goodsId" class='xianshibox'>
                    <div class='xianshiLeft'>
                        <img :src="ele.imageUrl" alt="">
                    </div>
                    <div class='xianshiRight'>
                        <p>{{ele.shortTitle}}</p>
                        <span><i>￥</i>{{ele.miaoshaPrice}}</span>
                        <span><del>￥{{ele.marketPrice}}</del></span>
                        <span>{{ele.memberPrice}}</span>
                        <p>仅剩{{ele.activityGoodsSellCount}}件</p>
                        <div class='jindu' v-if='!ele.showSoldOut'>
                            <mt-progress :value="ele.activityGoodsSellCount*100/ele.activityGoodsStore" :bar-height="5">
                            </mt-progress>
                        </div>
                        <div class='youhui'  v-if='ele.showSoldOut'>
                            原价仍有优惠奥！
                        </div>
                        <div class="qukankan" v-if='ele.showSoldOut'>
                            去看看
                        </div>
                        <div class="qianggouzhong" v-if='!ele.showSoldOut'>
                            抢购中
                        </div>
                    </div>
                     
                    
              </router-link>

        </li>
    </ul>
</template>

<script>
export default {
  name: 'xianshicontent',
  data () {
    return {
     
    }
  },
  props:{
    xianshiData:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
a{
    color:#ccc;
}
.xianshiContent{
        width:100vw;
        li{
            width:100%;
            height:130px;
            .xianshibox{
                display:flex;
                .xianshiLeft{
                   width:110px;
                   height:110px;
                    img{
                    display:inline-block;
                    height:110px;
                    width:110px;
                }
                }
                .xianshiRight{
                    position:relative;
                   flex:1;
                   p:nth-child(1){
                       height:42px;
                       overflow:hidden;
                       color:#000;
                   }
                   span:nth-child(2){
                       color:red;
                       font-size:22px;
                       >i{
                           font-style:normal;
                           font-size:12px;
                           color:red;
                       }
                   }
                   span:nth-child(3){
                       color:#ccc;
                       font-size:12px;
                       >i{
                           font-style:normal;
                           font-size:12px;
                           color:#ccc;
                       }
                   }
                   p:nth-child(5){
                       font-size:14px;
                   }
                   .qukankan{
                       position:absolute;
                       top:50px;
                       right:10px;
                       color:#e31436;
                       border:1px solid #d22147;
                       padding:3px 7px;
                       border-radius:3px;
                   }
                   .qianggouzhong{
                       position:absolute;
                       top:50px;
                       right:10px;
                       background-color:#e31436;
                       color:#fff;
                       padding:3px 7px;
                       border-radius:3px;
                       
                   }
                   .youhui{
                       position:absolute;
                       top:80px;
                       right:10px;
                   }
                   .jindu{
                       position:absolute;
                       top:80px;
                       right:10px;
                   }

                }
            }
        }
}
.mt-progress{
    width:68px;
    
    
}



</style>