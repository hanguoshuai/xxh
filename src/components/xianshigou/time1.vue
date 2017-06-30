<template>
    <div class='hgstime' ref='time'>
       <span v-model='abc'></span>
    </div>
</template>

<script>

export default {

  name: 'my-time',
  data () {
    return {
      abc:[]
    }
  },
  methods:{
      checktime(i){  
            if(i<10){  
              return   i='<span class="a">0</span>'+'<span>'+i+'</span>';  
        
            }else if(i>=10){
            return i='<span>'+parseInt(i/10)+'</span>'+'<span>'+i%10+'</span>';  
                
            }  
        } , 
        fresh()
            {
                var endtime=new Date("2017-07-28 12:58:00");
                var nowtime = new Date();
                var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
                var time1 =  this.$refs['time'];
                var d,h,m,s;
                var sh;
                d=parseInt(leftsecond/3600/24);
                h=parseInt((leftsecond/3600)%24);
                m=parseInt((leftsecond/60)%60);
                s=parseInt(leftsecond%60);
               h=this.checktime(h);
               console.log(h)
               console.log(m)
                m=this.checktime(m);  
                s=this.checktime(s); 
            //    document.getElementById("times").innerHTML=__h+"小时"+__m+"分"+__s+"秒";
            time1.innerHTML=h+"小时"+m+"分"+s+"秒";
                if(leftsecond<=0){
                time1.innerHTML="已结束";
                clearInterval(sh);
                }
            }
                
  },
  mounted(){
                var sh;
        
        sh=setInterval(this.fresh,1000);
        
     
  }
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hgstime{
        background:red;
        span{
            display:block;
            background:#000;
            height:20px;
            width:20px;
            color:#fff;
        }
        .a{
            display:inline-block;
            background:#000;
            height:20px;
            width:20px;
            color:#fff;
        }
    }
</style>