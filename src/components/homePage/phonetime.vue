<template>
    <div class='hgs-phonecontent'>
        <h3>手机限时购</h3>
        <div class='hgs-phone'>
            <router-link to="/">
               
                <span> 距离结束还有。。。。</span>
                <span>入场疯抢></span>
                <img src="../../assets/phone-01.jpg" alt="">
            </router-link>
        </div>
        <ul class='hgs-phonecontent1'>
            <li v-for='(ele,index) in hgslistData'>
           
                <img :src='ele.imageUrl' alt="">
                <div> {{ele.shortTitle}} </div>
                <div>
                    <span>{{ele.marketPrice}}</span><span>{{ele.miaoshaPrice}}</span>
                </div>
            
            </li>
        </ul>
    </div>
</template>

<script>
import phone01 from '../../assets/phone-01.jpg'
export default {
  name: 'my-phone',
  data () {
    return {
        phoneData:[{img:phone01}]
    }
  },
  props:{
      hgslistData:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hgs-phonecontent{
        height:600px;
        width:100%;
        >h3{
            padding-top:17px;
            padding-bottom:5px;
            font-size:17px;
            width:100%;
            text-align:center;
            font-weight:100;
            
        }
        .hgs-phone{
            width:100%;
            height:205px;
            position:relative;
            >a{
                pisition:relative;
                height:205px;
                width:100%;
                display:block;
               
                >span:nth-child(1){
                    position:absolute;
                    top:40px;
                    left:0px;
                    display:inline-block;
                    
                    width:100%;
                    font-size:24px;
                    color:#fff; 
                    text-align:center;
                }
                >span:nth-child(2){
                    position:absolute;
                    top:70px;
                    left:154px;
                    display:inline-block;
                    width:64px;
                   
                    font-size:14px;
                    color:#fff; 
                    font-weight:100;
                    text-align:center; 
                }
                >img{
                width:100%;
                
                }
            }
       
        }
    }
    .hgs-phonecontent1{
        height:183px;
        >li{
            float:left;
            height:170px;
            img{
                display:inline-block;
                height:114px;
                width:114px;
                
            }
            >div{
                width:33.3vw;
            }
        }
    }
</style>
