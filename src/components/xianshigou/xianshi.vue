<template>
    <ul class='xianshi'>
    
        <li v-for='(ele,index) in hgsxianshi'  :ref="'item'+index" :tabId='ele.tabId' @click='getData(ele.tabId,index)'>
            {{ele.title}}
        </li>
    </ul>
</template>

<script>
var i;
export default {
  name: 'my-xianshi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
        hgsxianshi:{
            type:Array,
            default(){return [{'title':'00:00','tabId':"2017062911FlashSale98316917"},
            {'title':'07:00','tabId':"2017062911FlashSale98313450"},
            {'title':'09:00','tabId':"2017062621FlashSale00259253"},
            {'title':'13:00','tabId':"2017062911FlashSale98316917"},
            {'title':'17:00','tabId':"2017062911FlashSale98313450"},
            {'title':'19:00','tabId':"2017062911FlashSale98313450"},
            {'title':'21:00','tabId':"2017062911FlashSale98312766"},
            {'title':'明日','tabId':"2017062621FlashSale00259253"}]}
        }
  },
  methods:{
      getData(id,index){
          this.$emit('get-data',id)
          console.log(id)
          console.log(this.$refs)
          for( i in this.$refs){
              console.log(i)
              this.$refs[i][0].className=''
              
          }
          this.$refs['item'+index][0].className='changeColor'
        //   this.$refs[0].className='changeColor'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .xianshi{
        height:50px;
        width:100%;
        overflow-x:auto;
        white-space:nowrap;
        li{
            width:84px;
            text-align:center;
            display:inline-block;
        }
    }
    .changeColor{
        background:red;
        color:#fff;
    }
</style>
