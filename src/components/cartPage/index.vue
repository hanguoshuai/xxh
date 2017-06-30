<template>
  <div>
  <div class="header">
      <ul>
          <li class="header-btn">
             <slot name="left">
             </slot>
          </li>
          <li class="header-tit">
              <slot name="center">
                <span>购物车</span><span>({{cartData.cartShow.allCount}})</span>
              </slot>
          </li>
          <li  class="header-btn">
             <slot name="right">
              <router-link :to="{ path: '/' }"><i class="icon iconfont">&#xe7a4;</i></router-link>
              <router-link :to="{ path: '/mine' }"><img src="http://haitao.nos.netease.com/20160615201133774ee6ff3bec4db8a3dba0ee58072bd6.jpeg" alt="" /></router-link>
             </slot>
          </li>
      </ul>
  </div>
    <my-content>
      <zm-cart-list :cart-data="cartData" @change-data="changeData" ref="cart-list" @add-class="addClass"></zm-cart-list>
    </my-content>

</div>
</template>

<script>
import CartList from './CartList';
export default {
  name: 'zm-cart',
  data () {
    return {
      cartData:{"cartShow":{"activityDiscountAmount":0,"allCount":3,"allGoodsIdList":[146469,1513714,1445121],"cartRegionList":[{"activityDiscountAmount":0,"activityReduceTaxAmount":0.00,"cartActivityGoodsList":[],"cartItemList":[{"addCartTime":"2017-06-26 18:19:22","cartGoods":{"activityGiftList":[],"activitySchemeId":0,"comboId":" ","currentPrice":1199.00,"danpinPromotionTitle":"特价","errMsg":"","errType":0,"goodsId":146469,"goodsLabelList":[{"goodsLabel":"特价","goodsLabelHover":"立省800元"}],"goodsName":"SOPHIE HULME 索菲·休姆 女士可爱眼镜装饰零钱包","goodsTypeStr":"","imageUrl":"http://haitao.nosdn5.127.net/ik53ik0v52_800_800.jpg","innerSource":"DETAIL","isHuanGou":0,"limitMsg":"单次限购1件","limitType":3,"marketPrice":3500.00,"maxSelectedStore":1,"minSelectedStore":1,"ratio":0,"selected":1,"skuDesc":"颜色:黑色 ","skuId":"146469-b7d20fa9638cbc260a66aa87e15f32c7","sysBuyCount":1,"taxAmount":142.68,"taxDesc":"11.9%","taxRate":0.11900,"taxRateStr":"适用税率 : 11.9%","tempBuyAmount":1,"tempCurrentPrice":1199.00,"tempGoodsActivityType":"特价-直降;","totalAmount":1199.00,"userAlreadyBuyCount":0,"userBuyCount":1,"userLimitBuyCount":1},"itemType":0},{"addCartTime":"2017-06-26 14:58:47","cartGoods":{"activityGiftList":[],"activitySchemeId":0,"comboId":" ","currentPrice":1399.00,"danpinPromotionTitle":"","errMsg":"","errType":0,"goodsId":1513714,"goodsLabelList":[],"goodsName":"CITIZEN 西铁城 间金典雅气质光动能粉色女士腕表 EM0415-54W","goodsTypeStr":"","imageUrl":"http://haitao.nos.netease.com/1bj7lr65h11_800_800.jpg","innerSource":"DETAIL","isHuanGou":0,"limitMsg":"","limitType":0,"marketPrice":1980.00,"maxSelectedStore":19,"minSelectedStore":1,"ratio":0,"selected":1,"skuDesc":"","skuId":"1513714-68a3e5516d7a7dc21fbe0e7ee13bfc1c","sysBuyCount":1,"taxAmount":166.48,"taxDesc":"11.9%","taxRate":0.11900,"taxRateStr":"适用税率 : 11.9%","tempBuyAmount":1,"tempCurrentPrice":1399.00,"tempGoodsActivityType":"","totalAmount":1399.00,"userAlreadyBuyCount":0,"userBuyCount":1,"userLimitBuyCount":0},"itemType":0},{"addCartTime":"2017-06-26 14:56:28","cartGoods":{"activityGiftList":[],"activitySchemeId":0,"comboId":" ","currentPrice":1249.00,"danpinPromotionTitle":"包税|特价","errMsg":"","errType":0,"goodsId":1445121,"goodsLabelList":[{"goodsLabel":"特价","goodsLabelHover":"立省50元"},{"goodsLabel":"包税","goodsLabelHover":"商品已包税，无需再额外缴纳"}],"goodsName":" TIFFANY & CO. 蒂芙尼 Return to Tiffany系列女士银饰镶珐琅面项链","goodsTypeStr":"","imageUrl":"http://haitao.nos.netease.com/iztekqww31_800_800.jpg","innerSource":"DETAIL","isHuanGou":0,"limitMsg":"","limitType":0,"marketPrice":1449.00,"maxSelectedStore":59,"minSelectedStore":1,"ratio":0,"selected":1,"skuDesc":"尺码:16 颜色:银色/蓝色 ","skuId":"1445121-a899962fc50852d4c2de8ac93a4dd509","sysBuyCount":1,"taxAmount":0.00,"taxDesc":"11.9%","taxRate":0.11900,"taxRateStr":"适用税率 : 11.9%","tempBuyAmount":1,"tempCurrentPrice":1249.00,"tempGoodsActivityType":"特价-直降;包税-购买立享全额税费补贴;","totalAmount":1249.00,"userAlreadyBuyCount":0,"userBuyCount":1,"userLimitBuyCount":0},"itemType":0}],"errType":0,"goodsSource":"自营保税仓","importType":1,"invalidCartItemList":[],"orderPayAmount":3847.00,"payAmountLimit":2147483647,"payAmountLimitInfo":"","payAmountLimitInfoApp":"","realPayAmount":4156.16,"selectedCount":3,"selfGoodsWarehouse":true,"supplierId":543,"taxDetailType":2,"taxLabel":"","totalAmount":3847.00,"totalTaxAmount":309.16,"totalTaxShowAmount":309.16}],"errType":0,"invalidCartItemList":[],"orderPayAmount":3847.00,"realPayAmount":4156.16,"selectedCount":3,"totalAmount":3847.00,"totalTaxAmount":309.16},"retcode":200,"retdesc":"操作成功"}
    }
  },
  components:{
    "zm-cart-list":CartList
  },
  methods:{
    changeData(type,index){
      var num = this.cartData.cartShow.cartRegionList[0].cartItemList[index].cartGoods.userBuyCount*1 +type;
      if (type) {
        if (num<=0) {
          alert("不能再少了");
          return
        }
        this.cartData.cartShow.cartRegionList[0].cartItemList[index].cartGoods.userBuyCount = num;
        console.log(num);
      }else{
        // this.$http.get(`http://datainfo.duapp.com/shopdata/updatecar.php?userID=zm&goodsID=${id}&number=0`)
        // .then(res=>{
        //   console.log(this.$refs);
        //   console.log(this.$refs["cart-list"].$refs);
        //   var el = this.$refs["cart-list"].$refs["item"+index][0]
        //   el.className = "cart-item itemRemove";
        //   el.addEventListener("animationend",()=>{
        //     this.cartData.splice(index,1,{})
        //   })
        // })
          this.cartData.cartShow.cartRegionList[0].cartItemList.splice(index,1,{});
      }
    },
    addClass:function () {
      console.log(9);
      var  className="num-text selected"
      console.log(3);
      return className;
    }
  },
  mounted(){
    // console.log(this.$http);
    // this.$http.get("/cart/cartdata.html?t=1498460333027")
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data);

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-header ~ .content { padding-top: 85px;}
a {color:#333}
.header { height: 47px; position: fixed; width: 100%;background:#fff;
font-size:30px;
     line-height: 44px; border-bottom: 1px solid #ccc}
.header .header-tit span{font-size: 16px;}
.header  ul { display: flex;text-align: center;height: 44px;}
.header-tit { flex: 1 }
.header-btn {width: 60px; }
.header .icon{
    font-size:20px;
}
.header img{width: 24px;height: 24px;margin-top: 12px;}
.header .header-tit{


}
.header .header-tit .sousuo{
   float:right;
    dispaly:inline-block;
    height:28px;
   width:100%;
    background:#eaebed;
    border:none;
    border-radius:5px;
    margin-top:11px;

}
.header .header-tit .sousuo .icon{
   font-size:13px;
   float:left;
   height:28px;
   margin-top:-7px;
   margin-left:8px;
}
.header .header-tit input{
    float:right;
    dispaly:inline-block;
    height:28px;
    width:90%;
    background:#eaebed;
    border:none;
    border-radius:5px;

}

</style>
