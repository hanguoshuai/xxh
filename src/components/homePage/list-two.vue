<template>
    <ul class='listtwo'>
        <li v-for='(ele,index) in listData'>
            <img :src='ele.img' alt="">
            <div >{{ele.title}}</div>
        </li>
    </ul>
</template>

<script>
import img01 from '../../assets/listtwo-01.png'
import img02 from '../../assets/listtwo-01.png'
import img03 from '../../assets/listtwo-01.png'
import img04 from '../../assets/listtwo-01.png'
export default {
  name: 'my-listtwo',
  data () {
    return {
      listData:[
          {img:img01,title:'每日上新'},{img:img02,title:'国家馆'},{img:img03,title:'考拉保障'},{img:img04,title:'拼团'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .listtwo{
        margin-top:10px;
        margin-bottom:18px; 
        height:65px;
        width:100%;

        >li{
            width:25%;
            display:inline-block;
            height:65px;
            img{
                height:47px;
            }
            >div{
                font-size:12px;
                text-align:center;
            }
        }
    }
</style>