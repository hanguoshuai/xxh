<template>
    <div class="v-login">
        <input type="text" placeholder="网易邮箱账号" class="userName" ref="userName">
        <input type="password" placeholder="网易邮箱密码" class="userPass" ref="userPass">
        <button class="login-btn" @click="login">登 录</button>
        <div class="login-yiwai">
            <p class="forget-mima" @click="forgetMima">忘记密码</p>
             <router-link  to="/register">
                <p class="to-register" >没有账号？注册网易邮箱</p>
            </router-link>
        </div><div style="clear:both"></div>
        <p class="other">或从以下方式登录</p>
        <div class="linebox"><hr class="line"></div>
        <ul class="login-icon">
            <li class="icon iconfont icon-qietu08"></li>
            <li class="icon iconfont icon-tubiaozhizuomoban"></li>
            <li class="icon iconfont icon-QQ"></li>
            <li class="icon iconfont icon-weibo1"></li>         
        </ul>
    </div>
</template>
<script>
    export default {
        name:"v-login",
        data(){
            return {

            }
        },
        props:{
            register:{
                default(){
                   
                }
            }   
        },
        methods:{
            login(){
                var userName = this.$refs.userName.value;
                var userPass = this.$refs.userPass.value;
               if(userName==""){
                    this.$refs.userName.style.background = "#e86548"
               }else{
                    this.$refs.userName.style.background = "#e5e5e5"                   
               }
               if(userPass==""){
                   console.log(1)
                    this.$refs.userPass.style.background = "#e86548"
               }else{
                    this.$refs.userPass.style.background = "#e5e5e5"                   
               }
            },
            forgetMima(){
                console.log(2)
            } 
        }
    }
</script>
<style scoped>
.v-login{
    z-index:2005;
    padding:10px 15px;
    border-top:1px solid #999;
}
.userName,.userPass{width:350px;height:40px;border:none;background:#e5e5e5;color:#000;line-height:40px;margin-top:15px; text-indent:20px;}  
.login-btn{width:350px;height:40px;background:#e31436;color:#fff;line-height:40px;margin-top:20px;text-align:center;border:none;border-radius:10px;}
.login-yiwai{
    width:100%;
}
.forget-mima{
    width:auto;
    color:#000;
    float:left;
    line-height:40px;
    font-size:11px;
}
.to-register{
    width:auto;
    color:#000;
    float:right;
    line-height:40px;
    font-size:11px;
}
.other{
    width:100%;
    color:#000;
    line-height:50px;
    font-size:15px;
    text-align:center;
}
.linebox{
    width:100%;
    overflow:hidden;
    margin:10px 0;
    justify-content:center;
    display:flex;
}
.line{
    width:36px;
    color:#999;   
}
.login-icon{
    width:70%;
    overflow:hidden;
    margin-left:15%;
    justify-content:space-around;
    display:flex;
}
.icon-qietu08{
    color:#59b200;
    font-size:45px;
}
.icon-weibo1{
    font-size:45px;
   color:#e86548; 
}
.icon-QQ{
    font-size:45px;
   color:#2e93b8; 
}
.icon-tubiaozhizuomoban{
    font-size:45px;
    color:#49575d; 
}
</style>