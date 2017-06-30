<template>
    <ul class='hgshotmarket'>
        <li v-for='(ele,index) in hgsgoodList'>
           
                <img :src="ele.imageUrl" alt="">
            
            <div>
                <p>
                    {{ele.title}}
                </p>
                <p>
                    售价：{{ele.marketPrice}} <span>折扣：{{ele.discount}}</span>
                </p>
               
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'my-hotmarket',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
      hgsgoodList:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hgshotmarket{
        
        >li{
            float:left;
            width:49vw;
            height:265px;
            
                >img{
                display:inline-block;
                width:175px;
                height:175px; 
           
                  
        }
        }
        
    }
</style>