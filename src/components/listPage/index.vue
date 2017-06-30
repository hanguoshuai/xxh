<template>
<div class="classify">
  <my-header class="header"></my-header>  
  <div class="content">
        <!--<div class="denglu">
                <button @click="goLogin">登录</button>
                    <mt-popup
                        v-model="popupVisible"
                        popup-transition="popup-fade"
                        position = "bottom"
                        modal="false"
                        closeOnClickModal="true">
                <v-login>123</v-login>
                </mt-popup>
        </div>-->
        <div class="main">
                <ul class="main-left">
                    <li 
                        v-for="(ele,index) in classData" 
                        class="classList"
                        @click="getClassList(index)"
                        :ref="'lis'+index">{{ele.categoryName}}</li>
                </ul>
                <ol class="main-right"><!--标题层-->
                    <li v-for="(ele,index) in goodsListData"
                        class="goodsDataList"
                        ref="goodslis">
                        {{ele}}
                        <ul class="partList"><!--品类层-->
                            <li class="part-goods" v-for="(ele,index) in partgoods">
                                <p>{{ele.pname}}</p>
                            </li>
                        </ul>
                    </li>
                    
                </ol>
        </div>  
  </div>
  
</div>
</template>

<script>
import Login from '../login/login';
export default {
    name:"classify",
    components:{
         "v-login":Login
    },
  
    data(){
        return {
            popupVisible:false,
            classData:[],
            goodsListData:[],
            partgoods:[],
            dataArr:[]
        }
    },
    methods:{
       goLogin(){
          this.popupVisible=!this.popupVisible
       },
       getClassList(index){
            // console.log(this.$refs['lis'+index][0])
            // console.log(this.$refs)
            //清空
            console.log(this.classData)
            this.goodsListData = [];
            this.partgoods = [];
            //左边
            for(var key in this.$refs){
                this.$refs[key][0].style.backgroundColor = "#fff";
                this.$refs[key][0].style.color = "#000" ;   
            }
            this.$refs['lis'+index][0].style.backgroundColor = "#000";
            this.$refs['lis'+index][0].style.color = "#fff";
             
            //右边
            //console.log(this.classData[index].childrenNodeList)
            var goodsClassList = this.classData[index].childrenNodeList
            for(var i in goodsClassList){ 
                this.goodsListData.push(goodsClassList[i].categoryName)
                for(var j in goodsClassList[i].childrenNodeList){
                // console.log(goodsClassList[i].childrenNodeList)
                    this.partgoods.push(
                        {"pid":goodsClassList[i].childrenNodeList[j].categoryId ,
                        "pname":goodsClassList[i].childrenNodeList[j].categoryName ,
                        "picture":goodsClassList[i].childrenNodeList[j].appIcon}
                    )
                }

            } 
       }
    },
    mounted(){
      
        this.$http.get("/api/getFrontCategory.shtml")
        .then(res=>{
            this.dataArr = res.data.frontCategoryList
            console.log(this.dataArr)
            for(var i=0;i<this.dataArr.length;i++){
                this.classData.push(
                    {"categoryName":this.dataArr[i].categoryName,
                    "categoryId":this.dataArr[i].categoryId,
                    "childrenNodeList":this.dataArr[i].childrenNodeList}
                ); 
            }
        })
    }

}
</script>

<style scoped>
*{
    margin:0;padding:0;
}
.header{position:fixed;width:100%;background:#fff;top:0;z-index:10;}
.content{width:100%;position:absolute;top:55px;bottom:55px;}
.mint-popup{width:100%;height:60%;} 
.mint-popup-bottom{height:60%;}
.main-left{width:105px;float:left;border-right:1px solid #e5e5e5;position:fixed;left:0;top:55px;background:#fff;z-index:10;}
.main-right{padding-left:110px;width:100%;overflow:hidden;box-sizing:border-box;position:absolute;left:0;top:0;padding-bottom:55px;}
.classList{ width:92px;height:26px;border-radius:13px;text-align:center;margin:26px 7px 0 7px;line-height:26px;color:#000;box-sizing:border-box;font-size:14px;}
.goodsDataList{ width:100%; overflow:hidden;height:240px;color:#000;font-weight:900;padding:15px 0}
.partList{width:100%;overflow:hidden;height:240px;}
.part-goods{width:33%;height:60px;text-align:center;float:left;overflow:hidden;line-height:60px;color:#999;font-weight:100;}
</style>
