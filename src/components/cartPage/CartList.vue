<template>
  <div class="cart-list">
    <ul>
      <li class="cart-item" v-for="(data,index) in cartData.cartShow.cartRegionList[0].cartItemList" :key="index"
      :ref="'item'+index">
      <div class="v-cartitem-left">
        <input type="checkbox" name="name" value="" @click="addClass()"/>
      </div>
      <div class="v-cartitem-right">
        <div class="v-cartitem-flex">
          <div class="v-cartitem-img">
            <img :src="data.cartGoods.imageUrl" alt="" />
          </div>
          <div class="v-cartitem-lo">
            <div class="v-cartitem-info">
              <div class="name">
                <span class="tejia"><a href="#">{{data.cartGoods.danpinPromotionTitle}}</a></span>
                <span class="goodsName">{{data.cartGoods.goodsName}}</span>
              </div>
              <div class="price">
                <p class="skuDesc">{{data.cartGoods.skuDesc}}</p>
                <p class="taxAmount">预估税费：￥：{{data.cartGoods.taxAmount}}</p>
                <span>￥：</span><span class="marketPrice">{{data.cartGoods.marketPrice}}</span>
              </div>
              <div class="v-cartitem-ops">
                <div class="num-wrap flex">
                  <a class="num-btn" @click="changeData(-1,index)">-</a>
                  <input class="num-text selected"  :value="data.cartGoods.userBuyCount"  />
                  <a class="num-btn" @click="changeData(1,index)">+</a>
                  <!-- <div class="num-del" @click="changeData(0,index)"><i class="icon iconfont">del;</i></div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="v-cartitem-footer">
          <p>{{data.cartGoods.limitMsg}}</p>
        </div>
      </div>

      </li>
    </ul>
    <p class="total">总价（不含税）：￥<span>{{totalPrice}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'zm-cart-list',
  props:{
     cartData:{
        type:Object,
        default(){
          return {}
        }
	     }
      },
  methods:{
    changeData(type,index){
      this.$emit("change-data",type,index)
    },
    addClass:function () {
      // return   this.className = "num-text selected"
      this.$emit("add-class")
      console.log(7);
    }
  },
  computed:{
    totalPrice:function () {
      var tot = document.getElementsByClassName("selected");
      var singlePrice= document.getElementsByClassName("marketPrice");
      // console.log(tot);
     console.log(9);
      var sum = 0;
      for (var i = 0; i < tot.length; i++) {
        for (var j = 0; j < singlePrice.length; j++) {
         sum += tot[i].value*1*singlePrice[j].innerHTML*1
         console.log(sum);
        }
       return sum;
      }
    }
  }

}
</script>

<style scoped>
*{font-size: 12px;}
li{width: 100%;height: 113px;padding-top: 10px;display: flex;}
.v-cartitem-left{display: flex;align-items: center;justify-content: center;width: 38px;}
.v-cartitem-right{width: 338px;border-bottom: 1px solid #ccc;}
.v-cartitem-flex{width: 100%;height: 80px;display: flex;}
.v-cartitem-flex .name{width: 100%;white-space: nowrap;overflow: hidden;height: 18px;}
.v-cartitem-footer{width: 100%;height: 20px;}
.v-cartitem-info  .tejia{border: 1px solid red;height: 20px;}
.v-cartitem-info  .goodsName{  text-overflow: ellipse;}
.v-cartitem-info  .tejia a{color: red;}
.v-cartitem-info .skuDesc{margin-top: 12px;color: #ccc;}
.v-cartitem-info .taxAmount{color: #ccc;}
.v-cartitem-info p{line-height: 18px;}
.v-cartitem-footer p{color: red;}
.v-cartitem-info .price{width:140px;display: inline-block;}
.v-cartitem-info .v-cartitem-ops{width:100px;display: inline-block;height: 84px;}
.cart-item .num-wrap { height: 30px;text-align: center;  border: 1px solid #ccc}
.cart-item .num-btn { width: 30px; }
.cart-item .num-text { border: 1px solid #ccc; margin: -1px 0;width: 30px; line-height: 30px; height: 30px; text-align: center }
.cart-item .num-del {width: 24px;height: 24px;}
.cart-item .num-del i{font-size: 24px;}
.total{line-height: 30px;font-size: 14px;padding: 6px;}
img{width: 80px;height: 80px;}

</style>
