<template>
    <div>
        <div class="header"></div>
        <div class="content">
            <div class="r-userNameBox">
                <input type="text" placeholder="6-18位字母数字组合" class="r-userName" ref="userName">
                <div class="emailBox" @click="changeEmail">
                    <input type="button" v-model="email" class="email" >
                    <b class="icon iconfont">&#xe735;</b>
                </div>
            </div>
            <input type="text" placeholder="输入验证手机号" class="r-phone" ref="phone">
            <p class="r-yanzheng"> 》请依次点击“拥”“井”“伏”完成验证》 </p>
            <button class="next-btn" @click="toNext">下一步</button>
            <p class="xieyi">用户注册即代表同意《服务条款》和《网络用户隐私保护和个人信息利用政策》</p>
            <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade"
                position="right" 
                modal="true"
                closeOnClickModal="true"
                >
                <p @click="getEmail(ele)" v-for="(ele,index) in emailData" :key="index">{{ele}}</p>
                
            </mt-popup>
            <mt-popup
                v-model="alertname"
                popup-transition="popup-fade"
                position="right" 
                modal="true"
                closeOnClickModal="true"
                >
                <p class="tishi">{{alertMain}}</p>
                
            </mt-popup>
        </div>
    </div>
</template>
<script>
   
    export default {
        name:"register",
        data(){
            return{
                popupVisible:false,
                alertname:false,
                email:'@163.com',
                emailData:["@163.com","@126.com","@yeach.net"],
                alertMain:""
                
            }
        },
        methods:{
            changeEmail(){
                this.popupVisible = !this.popupVisible
            },
            getEmail(ele){
                this.email = ele;
                this.popupVisible = !this.popupVisible
            },
            toNext(){
                var reg1 = /^[a-zA-Z0-9]{6,18}$/;
                var reg2 = /^[1][0-9]{10}$/;
                var userName = this.$refs.userName.value
                var phone = this.$refs.phone.value
                if(!reg1.test(userName)){
                    this.alertMain = "请输入帐号"
                    this.alertname = !this.alertname;  
                }else if(!reg2.test(phone)){
                    this.alertMain = "请输入手机号"
                    this.alertname = !this.alertname;
                }
                
            }
        }
    }
</script>
<style scoped>
.content{width:100%;padding: 53px 27px;box-sizing:border-box;background:#fff;}
.mint-popup{width:70%;height:20%;margin-right:15%;margin-top:-10%;background:#fff;border-radius:10px;padding: 0 20px;box-sizing:border-box}
.mint-popup p{border-bottom:1px solid #e5e5e5;color:#000;line-height:40px;text-indent:10px;} 
.r-userNameBox{display:flex;justify-content:space-between;}
.r-userName{width:190px;height:45px;border:1px solid #e4e4e4;border-radius:5px;float:left;text-indent:15px;}
.emailBox{width:115px;height:45px;border:1px solid #e4e4e4;border-radius:5px;float:left;position:relative;}
.email{background:#fff;border:none;float:left;margin:0 15px;line-height:45px;}
.emailBox b{color:#e5e5e5;display:block;position:absolute;top:15px;right:5px;}
.r-phone{width:100%;height:45px;margin-top:18px;border:1px solid #e4e4e4;border-radius:5px;text-indent:15px;}
.r-yanzheng{width:100%;height:45px;margin-top:18px;font-size:12px;border:1px solid #e4e4e4;border-radius:22px;text-align:center;line-height:45px;color:#e5e5e5;}
.next-btn{width:100%;height:45px;margin-top:18px;background:#b7272d;text-align:center;line-height:45px;color:#fff;border:none;border-radius:10px;}
.xieyi{font-size:12px;color:#000;margin-top:18px;line-height:19px;}
.mint-popup .tishi{
    border:none;line-height:100px;
    text-align:center;
}
</style>