<template>     
    <div class='hgssousuo'>
        <my-header>
            <li slot='right'>
                 <router-link to="/" class='cancel'>取消</router-link>
            </li>
        </my-header>
       <div class='resouContent'>
             <div class='resouHeader'>热门搜索</div>
                <ul>
                    <li v-for='(ele,index) in resouData'>
                        <router-link v-bg='ele.isBold' to="/list"  :key='index'>{{ele.name}}</router-link>
                    </li>
                </ul>
            </div>
    </div>  
</template>

<script>
import Vue from 'vue'
Vue.directive('bg',function(el,binding){
    console.log(el)
    console.log(binding)
    if(binding.value == true){
        el.style.border='1px solid #ff8587';
        el.style.color = '#ff8587';
    }else{
        el.style.border='1px solid #dcdcdc';
        el.style.color = '#333';
    }
})
var qs = require('qs');
export default {
  name: 'my-sousuo',
  data () {
    return {
      popupVisible:true,
      value:'',
      resouData:[]
    }
  },
  mounted(){
      this.$http.get('/hotkey')
      .then(res=>{
          console.log(res.data.body.result.keyOutBox)
          var a = res.data.body.result.keyOutBox;
          this.resouData = a
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.cancel{
    color:#999;
}
    .hgssousuo{
        
        width:100vw;
        height:100vh;
        z-index:101;
    }
    .resouContent{
       padding-top:50px;
       .resouHeader{
           padding:5px 5px;
       }
      ul{
          overflow:hidden;
           li{
                float:left;
                margin:5px 5px;
                padding:1px 1px;
                
                a{
                    padding:5px 13px;
                    font-size:12px;
                    border-radius:5px;
                }
       }
      }
    }

    
</style>