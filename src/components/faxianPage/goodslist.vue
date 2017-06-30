<template>
    <div class="goods-list">
        <ul>
            <li class="goods-model">
                <div  class="banner">
                    <img src="../../assets/images/banner-pic.jpg" alt="" class="bannerpic">
                    <p class="banner-pname">下雨也要风度翩翩</p>
                    <p class="banner-discrip">的积分等级划分成哥疾风剑豪高峰大锅饭的回复我今儿个多发几个</p>
                    <div class="banner-shoucang">  
                        <p>{{banner.text}}</p><p class="icon iconfont">{{banner.icon}}</p>
                    </div>
                </div>

                <ol class="goods">
                    <li class="lis">
                        <dl>
                            <dd><img src="../../assets/logo.png" alt=""></dd>
                            <dt>
                                <p class="pname">大幅度v</p>
                                <p class="discrip">带我飞奋斗未发生我单位</p>
                                <p class="active">包邮 直降10元</p>
                                <div class="banner-shoucang">  
                                    <p>{{banner.text}}</p><p class="icon iconfont">{{banner.icon}}</p>
                                </div>
                            </dt>
                        </dl>
                    </li>
                    <li class="lis">
                        <dl>
                            <dd><img src="../../assets/logo.png" alt=""></dd>
                            <dt>
                                <p class="pname">大幅度v</p>
                                <p class="discrip">带我飞奋斗未发生我单位</p>
                                <p class="active">包邮 直降10元</p>
                                <div class="banner-shoucang">  
                                    <p>{{banner.text}}</p><p class="icon iconfont">{{banner.icon}}</p>
                                </div>
                            </dt>
                        </dl>
                    </li>
                </ol>
            </li>
        </ul>
    </div>
</template>
<script>

    export default {
        name:'goods-list',
        props:{
            banner:{
                default(){
                    return {"text":"817人收藏","icon":"\ue639"}
                    
                }
            }
        }
    }
</script>
<style scoped>
*{ margin:0;padding:0;}
.goods-model{margin-top:10px;position:relative;}
.banner {width:100%;overflow:hidden;margin-bottom:10px;background:#fff;}
.banner img{width:100%;height:187px;}
.banner-pname{font-size:17px;margin-top:5px;line-height:30px;padding-left:10px;font-weight:900}
.banner-discrip{font-size:14px;line-height:22px;padding:0 10px}
.banner-shoucang{overflow:hidden;margin-right:5px;float:right;}
.banner-shoucang p{float:left;overflow:hidden;font-size:14px;line-height:30px;float:right;color:red;margin-right:5px;}
.banner-shoucang .icon{font-size:20px;}
.goods{width:100%;overflow:hidden;background:#fff;}
.goods .lis{overflow:hidden;border-bottom:1px solid #e5e5e5;height:142px; width:100%;}
.goods .lis dd{float:left;width:140px;height:142px;box-sizing:border-box;padding-top:17px;padding-left:22px;}
.goods .lis dt{float:left;width:235px;height:142px;padding-right:10px;box-sizing:border-box;padding-top:17px}
.goods .lis dd img{width:100px;height:100px;}
.goods .lis dt .pname{font-size:17px;line-height:30px;font-weight:900}
.goods .lis dt .discrip{font-size:14px;line-height:22px;}
</style>
