<template>
    <div class='hgstime' ref='time' v-show='saleOut'>
        距开始<span>{{time[0]}}</span>
        <span>{{time[1]}}</span>：
        <span>{{time[2]}}</span>
        <span>{{time[3]}}</span>：
        <span>{{time[4]}}</span>
        <span>{{time[5]}}</span>
  
    </div>
</template>

<script>
var sh;   
export default {

  name: 'my-time',
  data () {
    return {
     time:{
         0:'',
         1:'',
         2:'',
         3:'',
         4:'',
         5:''
     },
     saleOut:true
    }
  },
  props:{
      xianshiData:Array
  },
  methods:{
     
        fresh()
            {
                var a = this.xianshiData[0].startTime;
                console.log(a)
                var endtime=new Date(a);
                var nowtime = new Date();
                var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
                var time1 =  this.$refs['time'];
                var d,h,m,s;
               
                d=parseInt(leftsecond/3600/24);
                h=parseInt((leftsecond/3600)%24);
                m=parseInt((leftsecond/60)%60);
                s=parseInt(leftsecond%60);
                if(leftsecond<=0){
                   this.saleOut=false;
                   console.log(1)
                    // clearInterval(sh);
                }else if(leftsecond>0) {
                    this.saleOut = true
                }           
                //判断秒针
                if(s>=10){
                    this.time[4]= parseInt(s/10)
                    this.time[5]=parseInt(s%10)
                }else if(s<10){
                    this.time[4]= 0
                    this.time[5]=s
                }
                //判断分针
                if(m>=10){
                    this.time[2]= parseInt(m/10)
                    this.time[3]=parseInt(m%10)
                }else if(m<10){
                    this.time[2]= 0
                    this.time[3]=m
                }
                //判断时针
                if(h>=10){
                    this.time[0]= parseInt(h/10)
                    this.time[1]=parseInt(h%10)
                }else if(h<10){
                    this.time[0]= 0
                    this.time[1]=h
                }
          
            }
  },
  mounted(){
          console.log(document.body.scrollTop())
       sh=setInterval(this.fresh,1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .hgstime{
       width:300px;
       height:30px;
      margin-right:0px; 
        span{
            display:inline-block;
            background:black;
            height:15px;
            width:15px;
            color:#fff;
            line-height:15px;
            text-align:center;
        }
       
    }
</style>