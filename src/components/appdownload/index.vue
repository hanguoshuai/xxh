
<template>
  <div class="content">
    <swiper :options="swiperOption" ref="mySwiper" :style="{backgroundImage: 'url( http://haitao.nos.netease.com/a940e2823cfc4bcc93118e408af025f6.jpg)'}"  >
       <!-- slides -->
       <swiper-slide>
         <div class="slide">
           <img src="http://haitao.nos.netease.com/a6c5a38a212843bc82a1e824d3c5c5d7.png" alt="" />
             <a href="http://app.kaola.com/?appChannel=">开启海淘路</a>
         </div>
       </swiper-slide>
       <swiper-slide>
         <div class="slide">
         <img src="http://haitao.nos.netease.com/4bee17c945d14aadafc414ae7a012344.jpg" alt="" />
           <a href="http://app.kaola.com/?appChannel=">开启海淘路</a>
        </div>
       </swiper-slide>
       <swiper-slide>
         <div class="slide">
         <img src="http://haitao.nos.netease.com/32609f530e834b4a9f691b7b79048bc6.jpg" alt="" />
           <a href="http://app.kaola.com/?appChannel=">开启海淘路</a>
        </div>
       </swiper-slide>
       <swiper-slide>
         <div class="slide">
         <img src="http://haitao.nos.netease.com/4bee17c945d14aadafc414ae7a012344.jpg" alt="" />
           <a href="http://app.kaola.com/?appChannel=">开启海淘路</a>
        </div>
       </swiper-slide>
       <swiper-slide>
         <div class="slide">
         <img src="http://haitao.nos.netease.com/a6c5a38a212843bc82a1e824d3c5c5d7.png" alt="" />
           <a href="http://app.kaola.com/?appChannel=">开启海淘路</a>
        </div>
       </swiper-slide>
       <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div>
       <!-- <div class="swiper-button-prev" slot="button-prev"></div>
       <div class="swiper-button-next" slot="button-next"></div> -->
       <div class="swiper-scrollbar"   slot="scrollbar"></div>
     </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
     name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'vertical',
          // effect:"coverflow",
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          // paginationType:"bullets",
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart(swiper){
          //   console.log(swiper)
          // },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },components: {
    swiper,
    swiperSlide
  },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style>
html,body{width: 100%;height: 100%;}
.content{width: 100%;height: 600px;}
.swiper-container,.swiper-wrapper,.swiper-slide{width: 100%;height: 100%;}
.slide {padding: 50px 0 0 70px;}
.slide img{width: 240px;height: auto;}
.slide a {width: 252px;height: 38px;border-radius: 8px;background: #f33;line-height: 38px;
color: #fff;display: block;text-align: center;}
</style>
